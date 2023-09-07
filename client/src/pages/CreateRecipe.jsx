import { useState } from "react";
import axios from "axios";
import { useAppBaseUrl, useGetUserId } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import DynamicInput from "../components/DynamicInput";
import InputFields from "../components/InputFields";

export default function CreateRecipe() {
  const userId = useGetUserId();
  const [cookies, _] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const baseUrl = useAppBaseUrl();
  const [ingredientsList, setIngredientsList] = useState([""]);
  const [instructionsList, setInstructionsList] = useState([""]);

  const [recipe, setRecipe] = useState({
    name: "",
    imageUrl: "",
    cookingTime: 0,
    submittedBy: userId,
  });

  const handleRecipeForm = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const detailedRecipe = {
      ...recipe,
      ingredients: ingredientsList,
      instructions: instructionsList,
    };

    try {
      const response = await axios.post(`${baseUrl}recipes/`, detailedRecipe, {
        headers: { Authorization: `Bearer ${cookies.access_token}` },
      });
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

  const handleIngredientList = (items) => {
    setIngredientsList(items);
  };

  const handleInstructionList = (items) => {
    setInstructionsList(items);
  };

  return (
    <div className="createrecipe">
      <div className="createrecipe__box">
        <h3 className="create__recipe--title">Add New Recipe</h3>
        <form onSubmit={handleFormSubmit} className="recipeform">
          <InputFields
            inputType={"text"}
            inputName={"name"}
            handleChange={handleRecipeForm}
          />

          <DynamicInput
            items={ingredientsList}
            onItemsChange={handleIngredientList}
            forItem={"ingredients"}
          />

          <DynamicInput
            items={instructionsList}
            onItemsChange={handleInstructionList}
            forItem={"instructions"}
          />

          <InputFields
            inputType={"text"}
            inputName={"imageUrl"}
            handleChange={handleRecipeForm}
          />

          <InputFields
            inputType={"number"}
            inputName={"cookingTime"}
            handleChange={handleRecipeForm}
          />

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
