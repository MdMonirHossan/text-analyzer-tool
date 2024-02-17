const fs = require("fs");
const path = require("path");

// Initialize the logger instance
const logger = require("../logger");

// Get the text file path
const defaultPath = path.join(__dirname, "../../sample.txt");

/**
 * @function readFileData
 * @param {string} filePath The path to the file to read
 * @param {string} res The data to read
 * @description This function reads the file data from the specified file path and returns it as a string.
 * @returns Return the file data as a string.
 */
function readFileData(filePath, res) {
  try {
    /* Read the text file
     * if file path is found in the query then read from query file path.
     * otherwise read from from the default file path
     */
    const fileData = fs.readFileSync(
      filePath ? path.join(__dirname, filePath) : defaultPath,
      "utf8"
    );
    return fileData;
  } catch (error) {
    // Log the error and return null
    logger.error(error);
    res.status(500).json({ message: "Error reading from the file" });
    return null;
  }
}

module.exports = { readFileData };
