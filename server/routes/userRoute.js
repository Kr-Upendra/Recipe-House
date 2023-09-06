import express from "express";
import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";
const router = express.Router();

router
  .route("/")
  .get(
    authController.protectRoute,
    authController.restrictTo("admin"),
    userController.getAllUser
  );

router
  .route("/:id")
  .patch(
    authController.protectRoute,
    authController.restrictTo("admin"),
    userController.updateUser
  )
  .delete(
    authController.protectRoute,
    authController.restrictTo("admin"),
    userController.deleteUser
  );

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

export { router as userRouter };
