import recipeController from "../controllers/recipeController.js";
import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

router
  .route("/")
  .get(recipeController.getAllRecipe)
  .post(userController.protectRoute, recipeController.createRecipe)
  .put(userController.protectRoute, recipeController.saveRecipes);

router.route("/savedRecipes/ids/:userId").get(recipeController.getAllIds);
router
  .route("/savedRecipes/:userId")
  .get(userController.protectRoute, recipeController.getSavedRecipes);

export { router as recipeRouter };
