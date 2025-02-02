import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import casteRouter from "./Router/Caste.js";
import uploadRoutes from "./Router/uploadRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());

// Environment Variables
const PORT = process.env.PORT || 5000;
const FRONTEND_URL =  "http://localhost:5173"; 
const cloudName = process.env.VITE_CLOUD_NAME;
const apiKey =process.env.VITE_API_KEY;
const apiSecret = process.env.VITE_API_SECRET;

// CORS Configuration
app.use(
  cors({
    origin: [
      FRONTEND_URL,
      "https://ai-const.onrender.com",
      "https://www.aiconstitutionofindia.in",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});
console.log("Cloudinary configured successfully");
// Static Files
app.use(express.static("Public"));

// Routes
app.use("/", casteRouter);
app.use("/api", uploadRoutes);
// Test Route
app.get("/test", (req, res) => {
  res.send("You are authenticated and have access to this route");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
