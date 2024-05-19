import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("error while connecting database"));

const app = express();

app.listen(9000, () => {
  console.log("Server running at port 9000");
});

app.use("/api/user", userRoutes);
