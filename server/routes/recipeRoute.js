import recipeController from "../controllers/recipeController.js";
import express from "express";
import authController from "../controllers/authController.js";
const router = express.Router();

router
  .route("/")
  .get(recipeController.getAllRecipe)
  .post(authController.protectRoute, recipeController.createRecipe)
  .put(authController.protectRoute, recipeController.saveRecipes);

router.route("/savedRecipes/ids/:userId").get(recipeController.getAllIds);
router
  .route("/savedRecipes/:userId")
  .get(authController.protectRoute, recipeController.getSavedRecipes);

export { router as recipeRouter };
