const express = require("express");
const fs = require("fs");
const path = require("path");
const { countWords } = require("../utils/text-analyzer.util");

const router = express.Router();

// Get the text file path
const filePath = path.join(__dirname, "../../sample.txt");

/**
 * @swagger
 *  /:
 *   get:
 *     summary: Welcome to the text analyzer api
 *     responses:
 *       '200':
 *          description: Successful response with the welcome message
 *       '400':
 *          description: Bad response
 *
 */
router.get("", (req, res) => {
  res.send("Welcome to the Text Analyzer");
});

/**
 * @swagger
 *  /word-count:
 *   get:
 *     summary: This GET api will return the word count from the text file.
 *     responses:
 *       '200':
 *          description: Successful response with the word count.
 *       '500':
 *          description: Error message.
 *
 */
router.get("/word-count", (req, res) => {
  // Get the file_path from the query if it provided
  const { file_path } = req.query;
  console.log("---------- File Path: " + file_path);
  try {
    const text = fs.readFileSync(
      file_path ? path.join(__dirname, file_path) : filePath,
      "utf8"
    );
    const wordCount = countWords(text);
    console.log(`word count ${wordCount}`);
    res.json({ total_words: wordCount });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ message: "Error reading from the file" });
  }
});

module.exports = router;
