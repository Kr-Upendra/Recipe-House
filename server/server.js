import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT;
const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(console.log("mongo connected!"))
  .catch((err) => console.error("mongo connection failed!", err));

app.listen(port, () =>
  console.log(`server started at http://127.0.0.1:${port}`)
);
