import express from "express";
import morgan from "morgan";
import cors from "cors";

import { userRouter } from "./routes/userRoute.js";
import { recipeRouter } from "./routes/recipeRoute.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/users/", userRouter);
app.use("/api/recipes/", recipeRouter);

export default app;
