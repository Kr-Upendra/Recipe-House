import { useState, useEffect } from "react";
import axios from "axios";
import { recipeBaseUrl, useGetUserId } from "../hooks/useGetUserId";
import { useCookies } from "react-cookie";
import Loading from "../components/Loading";
import Card from "../components/Card";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const baseUrl = recipeBaseUrl();
  const userId = useGetUserId();
  const [cookies, _] = useCookies(["access_token"]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}?fields=name,owner,slug,cookingTime,imageUrl`
        );
        setRecipes(response.data.doc);
      } catch (err) {
        alert(err.response.data.message);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        if (userId) {
          const response = await axios.get(
            `${baseUrl}savedRecipes/ids/${userId}`
          );
          setSavedRecipes(response.data.doc.savedRecipes);
        }
      } catch (err) {
        alert(err.response.data.message);
      }
    };

    fetchRecipes();
    if (cookies.access_token) fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeId, userId) => {
    try {
      const response = await axios.put(
        baseUrl,
        { recipeId, userId },
        { headers: { Authorization: `Bearer ${cookies.access_token}` } }
      );
      if (response.data.status === "success") {
        alert("Recipe saved!");
        setSavedRecipes(response.data.document.savedRecipes);
      }
    } catch (err) {
      alert("something went very! please try again lator");
    }
  };

  const finalRecipes = recipes.recipes || [];

  const recipeElement = finalRecipes.map((recipe) => {
    return (
      <Card
        key={recipe._id}
        {...recipe}
        savedRecipesId={savedRecipes}
        bookmarkRecipe={saveRecipe}
      />
    );
  });

  return (
    <main className="home">
      <h2 className="home__title">All Recipes</h2>
      <div className="container" data-isloading={recipeElement.length === 0}>
        {recipeElement.length === 0 ? <Loading /> : recipeElement}
      </div>
    </main>
  );
}
