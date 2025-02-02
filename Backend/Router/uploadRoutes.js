import express from "express";
import upload from "../middleware/multer.js";
import uploadFile from "../Controller/uploadController.js";

const router = express.Router();

// Define the route to upload an Excel file
router.post("/upload", upload.single("file"), uploadFile);

export default router;
