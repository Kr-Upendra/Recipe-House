import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { recipeBaseUrl, useGetUserId } from "../hooks/useGetUserId";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const baseUrl = recipeBaseUrl();
  const userId = useGetUserId();

  const saveRecipe = async (recipeId, userId) => {
    try {
      const response = await axios.put(baseUrl, { recipeId, userId });
      if (response.data.status === "success") alert("Recipe saved!");
    } catch (err) {
      alert(
        err.response.data.message ||
          "SOMETHING WENT WRONG! PLEASE TRY AGAIN LETOR!"
      );
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(baseUrl);
        setRecipes(response.data.doc);
      } catch (err) {
        console.log(err.response);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}savedRecipes/ids/${userId}`
        );
        setSavedRecipes(response.data.doc.savedRecipes);
      } catch (err) {
        console.log(err.response);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, [savedRecipes]);

  const finalRecipes = recipes?.recipes || [];

  const recipeElement = finalRecipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe._id}
        {...recipe}
        saveRecipe={saveRecipe}
        savedRecipesId={savedRecipes}
      />
    );
  });

  return (
    <main className="home">
      <h2 className="home__title">All Recipes</h2>
      <div className="container">
        {/* <RecipeCard /> */}
        {recipeElement}
      </div>
    </main>
  );
}
