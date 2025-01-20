import path from "path";
import xlsx from "xlsx";

class CasteController {
  async getCasteByCasteName(casteName, offset = 0, limit = 5) {
    try {
      // Resolve the file path
      const filePath = path.resolve("./Caste Bias.xlsx");

      // Load the Excel workbook
      const workbook = xlsx.readFile(filePath);

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
      return { status: 0, msg: "Error reading data", error: error.message };
    }
  }
}

export default CasteController;
