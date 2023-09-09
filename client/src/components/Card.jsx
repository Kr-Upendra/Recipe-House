import { Link } from "react-router-dom";
import { useGetUserId } from "../hooks/useGetUserId";
import { useCookies } from "react-cookie";

const Card = (props) => {
  const {
    slug,
    imageUrl,
    name,
    cookingTime,
    owner,
    savedRecipesId,
    bookmarkRecipe,
  } = props;
  const userId = useGetUserId();

  const [cookies, _] = useCookies(["access_token"]);
  const isBookmarked = (id) => savedRecipesId.includes(id);

  const bookmarkRecipeDB = (recipeId, userId) => {
    bookmarkRecipe(recipeId, userId);
  };

  const handleBookmark = () => {
    if (!cookies.access_token) alert("You are not logged in!");
    else bookmarkRecipeDB(props._id, userId);
  };

  return (
    <div className="card">
      <div className="card__image">
        <img
          src={`${imageUrl}`}
          alt="Recipe Name"
          className="card__image--img"
        />

        {isBookmarked(props._id) ? (
          <div className="bookmarkbox">
            <i className="el-bookmarkbtn fa-solid fa-bookmark"></i>
          </div>
        ) : (
          <div className="bookmarkbox" onClick={handleBookmark}>
            <i className="el-bookmarkbtn fa fa-bookmark-o"></i>
          </div>
        )}
      </div>
      <CardDetails
        title={name}
        cookTime={cookingTime}
        addedby={owner}
        slug={slug}
      />
    </div>
  );
};

export default Card;

export const CardDetails = ({ title, cookTime, addedby, slug }) => {
  return (
    <>
      <div className="card__details">
        <Link to={`recipe/recipe-details/${slug}`}>
          <div className="card__details--title">
            <h3 className="card__details--title-el">{title}</h3>
          </div>
        </Link>
        <div className="card__details--authortime">
          <h5 className="card__details--authortime-el">{cookTime} Min</h5>
          <h5 className="card__details--authortime-el">{addedby}</h5>
        </div>
      </div>
      <div className="card__viewbtnbox">
        <Link
          className="card__viewbtnbox--btn"
          to={`recipe/recipe-details/${slug}`}
        >
          Read Full
        </Link>
      </div>
    </>
  );
};
