import axios from "axios";
import xlsx from "xlsx";

class CasteController {
  async getHindu(religionName, casteName, offset = 0, limit = 5) {
    try {
      // console.log(religionName);
      const cloudinaryUrl ="https://res.cloudinary.com/dsgeyyhvl/raw/upload/v1740068267/Hindu_Castes_dwliun.xlsx";
      // Fetch the file from Cloudinary
      const response = await axios.get(cloudinaryUrl, {
        responseType: "arraybuffer",
      });

      // Read workbook from buffer
      const workbook = xlsx.read(response.data, { type: "buffer" });

      // Check if the sheet exists
      if (!workbook.Sheets[casteName]) {
        return { status: 0, msg: `No data found for casteName: ${casteName}` };
      }

      // Calculate the range
      const startRow = parseInt(offset) + 1; // Excel rows are 1-based
      const endRow = startRow + parseInt(limit) - 1;
      const range = `A${startRow}:Z${endRow}`; // Adjust column range as needed

      // Use the range option to fetch the specified rows
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[casteName], {
        range,
        header: 1, // Optional: keeps the first row as headers
      });

      // Return the fetched rows
      return { status: 1, data: sheetData };
    } catch (error) {
      console.error("Error reading data from Cloudinary:", error);
      return { status: 0, msg: "Error reading data", error: error.message };
    }
  }
  async getMuslim(religionName, casteName, offset = 0, limit = 5) {
    try {
      // console.log(religionName);
      const cloudinaryUrl =
        "https://res.cloudinary.com/dwsava4sp/raw/upload/v1738523759/Muslim_Castes_x32thp.xlsx";
      // Fetch the file from Cloudinary
      const response = await axios.get(cloudinaryUrl, {
        responseType: "arraybuffer",
      });

      // Read workbook from buffer
      const workbook = xlsx.read(response.data, { type: "buffer" });

      // Check if the sheet exists
      if (!workbook.Sheets[casteName]) {
        return { status: 0, msg: `No data found for casteName: ${casteName}` };
      }

      // Calculate the range
      const startRow = parseInt(offset) + 1; // Excel rows are 1-based
      const endRow = startRow + parseInt(limit) - 1;
      const range = `A${startRow}:Z${endRow}`; // Adjust column range as needed

      // Use the range option to fetch the specified rows
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[casteName], {
        range,
        header: 1, // Optional: keeps the first row as headers
      });

      // Return the fetched rows
      return { status: 1, data: sheetData };
    } catch (error) {
      console.error("Error reading data from Cloudinary:", error);
      return { status: 0, msg: "Error reading data", error: error.message };
    }
  }
  async getSikh(religionName, casteName, offset = 0, limit = 5) {
    try {
      // console.log(religionName);
      const cloudinaryUrl =
        "https://res.cloudinary.com/dsgeyyhvl/raw/upload/v1740084427/Muslim_Castes_bmbdsr.xlsx";
      // Fetch the file from Cloudinary
      const response = await axios.get(cloudinaryUrl, {
        responseType: "arraybuffer",
      });

      // Read workbook from buffer
      const workbook = xlsx.read(response.data, { type: "buffer" });

      // Check if the sheet exists
      if (!workbook.Sheets[casteName]) {
        return { status: 0, msg: `No data found for casteName: ${casteName}` };
      }

      // Calculate the range
      const startRow = parseInt(offset) + 1; // Excel rows are 1-based
      const endRow = startRow + parseInt(limit) - 1;
      const range = `A${startRow}:Z${endRow}`; // Adjust column range as needed

      // Use the range option to fetch the specified rows
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[casteName], {
        range,
        header: 1, // Optional: keeps the first row as headers
      });

      // Return the fetched rows
      return { status: 1, data: sheetData };
    } catch (error) {
      console.error("Error reading data from Cloudinary:", error);
      return { status: 0, msg: "Error reading data", error: error.message };
    }
  }
  async getJain(religionName, casteName, offset = 0, limit = 5) {
    try {
      // console.log(religionName);
      const cloudinaryUrl =
        "https://res.cloudinary.com/dsgeyyhvl/raw/upload/v1740084426/JainCastes_vppesg.xlsx";
      // Fetch the file from Cloudinary
      const response = await axios.get(cloudinaryUrl, {
        responseType: "arraybuffer",
      });

      // Read workbook from buffer
      const workbook = xlsx.read(response.data, { type: "buffer" });

      // Check if the sheet exists
      if (!workbook.Sheets[casteName]) {
        return { status: 0, msg: `No data found for casteName: ${casteName}` };
      }

      // Calculate the range
      const startRow = parseInt(offset) + 1; // Excel rows are 1-based
      const endRow = startRow + parseInt(limit) - 1;
      const range = `A${startRow}:Z${endRow}`; // Adjust column range as needed

      // Use the range option to fetch the specified rows
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[casteName], {
        range,
        header: 1, // Optional: keeps the first row as headers
      });

      // Return the fetched rows
      return { status: 1, data: sheetData };
    } catch (error) {
      console.error("Error reading data from Cloudinary:", error);
      return { status: 0, msg: "Error reading data", error: error.message };
    }
  }
  async getBuddhist(religionName, casteName, offset = 0, limit = 5) {
    try {
      // console.log(religionName);
      const cloudinaryUrl =
        "https://res.cloudinary.com/dsgeyyhvl/raw/upload/v1740084428/Buddhist_castes_u3zckw.xlsx";
      // Fetch the file from Cloudinary
      const response = await axios.get(cloudinaryUrl, {
        responseType: "arraybuffer",
      });

      // Read workbook from buffer
      const workbook = xlsx.read(response.data, { type: "buffer" });

      // Check if the sheet exists
      if (!workbook.Sheets[casteName]) {
        return { status: 0, msg: `No data found for casteName: ${casteName}` };
      }

      // Calculate the range
      const startRow = parseInt(offset) + 1; // Excel rows are 1-based
      const endRow = startRow + parseInt(limit) - 1;
      const range = `A${startRow}:Z${endRow}`; // Adjust column range as needed

      // Use the range option to fetch the specified rows
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[casteName], {
        range,
        header: 1, // Optional: keeps the first row as headers
      });

      // Return the fetched rows
      return { status: 1, data: sheetData };
    } catch (error) {
      console.error("Error reading data from Cloudinary:", error);
      return { status: 0, msg: "Error reading data", error: error.message };
    }
  }
}
export default CasteController;
