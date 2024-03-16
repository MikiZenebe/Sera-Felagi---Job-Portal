import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import connectDB from "./db/connectDb.js";
import router from "./routes/index.js";

const app = express();
app.use(cors());
dotenv.config();

const PORT = 5000;

//Middleware
app.use(express.json({ limit: "50mb" })); //It allows to parse the incoming data from req
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //Pasrse a json from request
app.use(router);

//Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  connectDB();
});
