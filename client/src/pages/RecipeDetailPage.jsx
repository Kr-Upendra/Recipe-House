import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useRecipeDetails from "../hooks/useRecipeDetails";

const RecipeDetailPage = () => {
  const { slug } = useParams();
  const { recipe, error, isLoading } = useRecipeDetails(slug);

  return (
    <div className="dContainer">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>Error</div>
      ) : (
        <RecipeDetails {...recipe} />
      )}

      <ResteurentDetails />
    </div>
  );
};

export default RecipeDetailPage;

export const RecipeDetails = (props) => {
  return (
    <div className="rDetails">
      <div className="rDetails__title">
        <h1 className="el-title">{props.name}</h1>
      </div>
      <div className="rDetails__chefTime">
        <div className="rDetails__chefTime--chef">
          <Link>
            <img src="/default.png" alt={props.owner} className="el-chefimg" />
          </Link>
          <Link className="el-chefname">{props.owner}</Link>
        </div>
        <div className="rDetails__chefTime--cooktime">
          <span className="el-cookingtime">{props.cookingTime} Minutes</span>
        </div>
      </div>
      <div className="devider"></div>
      <div className="rDetails__image">
        <img
          src={`${props.imageUrl}`}
          alt={props.name}
          className="el-recipeimg"
        />
      </div>
      <RenderListItems
        items={props.ingredients}
        styleClass={"ingradients"}
        heading={"Used Ingredients"}
      />
      <RenderListItems
        items={props.instructions}
        styleClass={"instructions"}
        heading={"Steps to create recipe"}
      />
    </div>
  );
};

export const RenderListItems = ({ items, styleClass, heading }) => {
  return (
    <div className={`rDetails__${styleClass}`}>
      <h2 className="el-iheading">{heading}</h2>
      <ul className={`rDetails__${styleClass}--list`}>
        {items.map((item, index) => {
          return (
            <li key={index} className={`el-${styleClass}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ResteurentDetails = () => {
  return <div className="rOthers"></div>;
};
