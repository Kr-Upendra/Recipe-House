// import axios from "axios";
// import { useEffect, useState } from "react";
// import SavedRecipeCard from "../components/SavedRecipeCard";
// import { useCookies } from "react-cookie";

export default function SavedRecipe() {
  //   const [savedRecipes, setSavedRecipes] = useState([]);
  //   const baseUrl = recipeBaseUrl();
  //   const userId = useGetUserId();
  //   const [cookies, _] = useCookies(["access_token"]);

  // useEffect(() => {
  //   const fetchSavedRecipes = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}savedRecipes/${userId}`, {
  //         headers: { Authorization: `Bearer ${cookies.access_token}` },
  //       });
  //       setSavedRecipes(response.data?.doc.savedRecipes);
  //     } catch (err) {
  //       console.error(err.response);
  //     }
  //   };

  //   fetchSavedRecipes();
  // }, []);

  // const savedRecipesElement = savedRecipes.map((recipe) => {
  //   return <SavedRecipeCard key={recipe._id} {...recipe} />;
  // });

  return (
    <main className="home">
      <h2 className="home__title">All your saved recipes</h2>
      <div className="container">Saved Recipe Element</div>
    </main>
  );
}
