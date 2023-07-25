import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRoute from "./routes/userRoute.js";
import recipeRoute from "./routes/userRoute.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/users/", userRoute);
app.use("/api/recipe/", recipeRoute);

export default app;
