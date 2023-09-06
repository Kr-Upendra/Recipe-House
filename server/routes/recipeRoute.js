import recipeController from "../controllers/recipeController.js";
import express from "express";
import authController from "../controllers/authController.js";
const router = express.Router();

router
  .route("/")
  .get(recipeController.getAllRecipe)
  .post(authController.protectRoute, recipeController.createRecipe)
  .put(authController.protectRoute, recipeController.saveRecipes);

router
  .route("/:id")
  .patch(
    authController.protectRoute,
    authController.restrictTo("admin"),
    recipeController.updateRecipe
  )
  .delete(
    authController.protectRoute,
    authController.restrictTo("admin"),
    recipeController.deleteRecipe
  );

router.route("/savedRecipes/ids/:userId").get(recipeController.getAllIds);
router
  .route("/savedRecipes/:userId")
  .get(authController.protectRoute, recipeController.getSavedRecipes);

export { router as recipeRouter };
