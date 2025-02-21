import axios from "axios";
import xlsx from "xlsx";

class ReligionController {
  async getReligion(religionName, offset = 0, limit = 5) {
    try {
      // console.log(religionName);
      const cloudinaryUrl ="https://res.cloudinary.com/dsgeyyhvl/raw/upload/v1740084314/Religious_Bias_xuisng.xlsx";
      // Fetch the file from Cloudinary
      const response = await axios.get(cloudinaryUrl, {
        responseType: "arraybuffer",
      });

      // Read workbook from buffer
      const workbook = xlsx.read(response.data, { type: "buffer" });

      // Check if the sheet exists
      if (!workbook.Sheets[religionName]) {
        return { status: 0, msg: `No data found for religionName: ${religionName}` };
      }

      // Calculate the range
      const startRow = parseInt(offset) + 1; // Excel rows are 1-based
      const endRow = startRow + parseInt(limit) - 1;
      const range = `A${startRow}:Z${endRow}`; // Adjust column range as needed

      // Use the range option to fetch the specified rows
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[religionName], {
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
export default ReligionController