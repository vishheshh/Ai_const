import fs from "fs";

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload file to Cloudinary (as raw data since it's .xlsx)
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
    });

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: "File uploaded successfully",
      url: result.secure_url,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

export default uploadFile;
