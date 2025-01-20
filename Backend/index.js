import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import casteRouter from "./Router/Caste.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());

// Environment Variables
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"; 

// CORS Configuration
app.use(
  cors({
    origin: [FRONTEND_URL, "https://taskify-frontend-rlw0.onrender.com"], 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Static Files
app.use(express.static("Public"));

// Routes
app.use("/castes", casteRouter);

// Test Route
app.get("/test", (req, res) => {
  res.send("You are authenticated and have access to this route");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
