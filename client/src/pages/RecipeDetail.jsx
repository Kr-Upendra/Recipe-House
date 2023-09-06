import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { recipeBaseUrl } from "../hooks/useGetUserId";

const RecipeDetail = () => {
  const { slug } = useParams();
  const baseUrl = recipeBaseUrl();

  useEffect(() => {
    const getDetailedRecipe = async () => {
      try {
        const response = await axios.get(`${baseUrl}${slug}`);
        console.log(response);
      } catch (err) {
        alert(err.response.data.message || "Something went very wrong!");
      }
    };

    getDetailedRecipe();
  }, [slug]);

  return (
    <div className="recipe__detail">
      <h1>Recipe Detail Page</h1>
    </div>
  );
};

export default RecipeDetail;
