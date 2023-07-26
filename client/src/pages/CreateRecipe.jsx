import { useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function CreateRecipe() {
  const userId = useGetUserId();
  const [cookies, _] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    submittedBy: userId,
  });

  const handleRecipeForm = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredients = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:9090/api/recipes/",
        recipe,
        {
          headers: { Authorization: `Bearer ${cookies.access_token}` },
        }
      );
      if (response.data.status === "success") {
        alert("Recipe Added!");
        navigate("/");
      }
    } catch (err) {
      const errorMessage = err.response.data.error.message;
      if (errorMessage.includes("submittedBy")) {
        alert("You are not logged in!");
        navigate("/auth/login");
      }
    }
  };

  return (
    <div className="createrecipe">
      <div className="createrecipe__box">
        <h3 className="create__recipe--title">Add New Recipe</h3>
        <form onSubmit={handleFormSubmit} className="recipeform">
          <div className="recipe__inputs">
            <label htmlFor="name" className="recipe__inputs--label">
              Recipe Title
            </label>
            <input
              type="text"
              className="recipe__inputs--input"
              id="name"
              name="name"
              placeholder="Recipe Title"
              required
              onChange={handleRecipeForm}
            />
          </div>
          <div className="recipe__inputs">
            <label htmlFor="ingredients" className="recipe__inputs--label">
              Ingredients
            </label>

            {recipe.ingredients.map((ingredients, index) => (
              <input
                type="text"
                id="ingredients"
                name="ingredients"
                className="recipe__inputs--input"
                placeholder={`Add Ingredient ${index + 1}`}
                required
                value={ingredients}
                key={index}
                onChange={(e) => handleIngredientChange(e, index)}
              />
            ))}

            <button
              type="button"
              onClick={addIngredients}
              className="more__ingredients"
            >
              Add More
            </button>
          </div>
          <div className="recipe__inputs">
            <label className="recipe__inputs--label" htmlFor="instructions">
              Instructions
            </label>
            <textarea
              name="instructions"
              id="instructions"
              rows="5"
              className="recipe__inputs--textarea"
              placeholder="Add Instruction of how to Prepare?"
              required
              onChange={handleRecipeForm}
            ></textarea>
          </div>
          <div className="recipe__inputs">
            <label htmlFor="imageUrl" className="recipe__inputs--label">
              Image Url
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              className="recipe__inputs--input"
              placeholder="Add Image Url"
              required
              onChange={handleRecipeForm}
            />
          </div>
          <div className="recipe__inputs">
            <label htmlFor="cookingTime" className="recipe__inputs--label">
              Cooking Time
            </label>
            <input
              type="number"
              id="cookingTime"
              name="cookingTime"
              className="recipe__inputs--input"
              placeholder="Add Cooking Time (in min)"
              required
              onChange={handleRecipeForm}
            />
          </div>
          <div className="recipe__inputs--btnbox">
            <button type="submit" className="recipe__inputs--btnbox-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
