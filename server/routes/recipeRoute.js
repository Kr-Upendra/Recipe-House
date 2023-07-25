import recipeController from "../controllers/recipeController.js";
import express from "express";
const router = express.Router();

router
  .route("/")
  .get(recipeController.getAllRecipe)
  .post(recipeController.createRecipe)
  .put(recipeController.saveRecipes);

router.route("/savedRecipes/ids").get(recipeController.getAllIds);
router.route("/savedRecipes").get(recipeController.getSavedRecipes);

export { router as recipeRouter };
