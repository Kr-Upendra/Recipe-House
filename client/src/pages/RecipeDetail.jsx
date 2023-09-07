import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { recipeBaseUrl } from "../hooks/useGetUserId";
import Loading from "../components/Loading";

const RecipeDetail = () => {
  const { slug } = useParams();
  const baseUrl = recipeBaseUrl();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const getDetailedRecipe = async () => {
      try {
        const response = await axios.get(`${baseUrl}${slug}`);
        setRecipe(response.data.doc.recipe);
      } catch (err) {
        alert(err.response.data.message || "Something went very wrong!");
      }
    };

    getDetailedRecipe();
  }, [slug]);

  return (
    <div className="dContainer">
      {recipe.length === 0 ? (
        <Loading />
      ) : (
        <RecipeDetailContainer {...recipe} />
      )}

      <ResteurentDetailContainer />
    </div>
  );
};

export default RecipeDetail;

export const RecipeDetailContainer = (props) => {
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
      <RenderListItems items={props.ingredients} styleClass={"ingradients"} />
      <RenderListItems items={props.instructions} styleClass={"instructions"} />
    </div>
  );
};

export const ResteurentDetailContainer = () => {
  return <div className="rOthers"></div>;
};

export const RenderListItems = ({ items, styleClass }) => {
  return (
    <div className={`rDetails__${styleClass}`}>
      <h2 className="el-iheading">Steps to create recipe</h2>
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
