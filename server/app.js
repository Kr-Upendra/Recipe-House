import RateLimit from "express-rate-limit";
import express from "express";
import cors from "cors";
import compression from "compression";

import { userRouter } from "./routes/userRoute.js";
import { recipeRouter } from "./routes/recipeRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});
app.use(limiter);

const port = process.env.PORT;
const db = process.env.DATABASE_URI.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

app.use("/api/users/", userRouter);
app.use("/api/recipes/", recipeRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `THIS ROUTE ${req.originalUrl} DOESN'T EXIST ON THIS SERVER!`,
  });
});

export default app;
