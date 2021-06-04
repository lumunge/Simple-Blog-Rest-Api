import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import PostsRoutes from "./Routes/Posts.js";
import BodyParser from "body-parser";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(BodyParser.json());

// Routes
app.use("/posts", PostsRoutes);

// DB connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
	console.log("Db Connection was Successfull")
);

app.listen(5000);
