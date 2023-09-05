import express from "express";
import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";
const router = express.Router();

router.route("/").get(userController.getAllUser);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

export { router as userRouter };
