import multer from "multer";
import path from "path";

// Set storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store temporarily in 'uploads/' before Cloudinary
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filter to accept only .xlsx files
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== ".xlsx") {
    return cb(new Error("Only .xlsx files are allowed"), false);
  }
  cb(null, true);
};

// Configure Multer
const upload = multer({ storage, fileFilter });

export default upload;
