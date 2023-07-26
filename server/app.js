import express from "express";
import cors from "cors";
import compression from "compression";

import { userRouter } from "./routes/userRoute.js";
import { recipeRouter } from "./routes/recipeRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Recipe House APIs. To explore the real visit ",
  });
});

app.use("/api/users/", userRouter);
app.use("/api/recipes/", recipeRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `THIS ROUTE ${req.originalUrl} DOESN'T EXIST ON THIS SERVER!`,
  });
});

export default app;
