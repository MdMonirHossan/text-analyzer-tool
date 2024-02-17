const express = require("express");
const fs = require("fs");
const path = require("path");
const {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  longestWords,
} = require("../utils/text-analyzer.util");

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

    // Get the word count from utils function
    const wordCount = countWords(text);
    console.log(`word count ${wordCount}`);

    // Explicitly close file descriptor
    fs.closeSync(fs.openSync(filePath, "r"));

    // Responds with the total words count
    res.json({ total_words: wordCount });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ message: "Error reading from the file" });
  }
});

/**
 * @swagger
 *  /character-count:
 *   get:
 *     summary: This GET api will return the character count from the text file.
 *     responses:
 *       '200':
 *          description: Successful response with the character count.
 *       '500':
 *          description: Error message.
 *
 */
router.get("/character-count", (req, res) => {
  // Get the file_path from the query if it provided
  const { file_path } = req.query;
  console.log("---------- File Path: " + file_path);
  try {
    const text = fs.readFileSync(
      file_path ? path.join(__dirname, file_path) : filePath,
      "utf8"
    );

    // Get the character count from utils function
    const characterCount = countCharacters(text);
    console.log(`character count ${characterCount}`);

    // Explicitly close file descriptor
    fs.closeSync(fs.openSync(filePath, "r"));

    // Responds with the total characters count
    res.json({ total_characters: characterCount });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ message: "Error reading from the file" });
  }
});

/**
 * @swagger
 *  /sentence-count:
 *   get:
 *     summary: This GET api will return the sentence count from the text file.
 *     responses:
 *       '200':
 *          description: Successful response with the sentence count.
 *       '500':
 *          description: Error message.
 *
 */
router.get("/sentence-count", (req, res) => {
  // Get the file_path from the query if it provided
  const { file_path } = req.query;
  console.log("---------- File Path: " + file_path);
  try {
    /* Read the text file
     * if file path is found in the query then read from query file path.
     * otherwise read from from the default file path
     */
    const text = fs.readFileSync(
      file_path ? path.join(__dirname, file_path) : filePath,
      "utf8"
    );

    // Get the sentence count
    const sentenceCount = countSentences(text);
    console.log(`sentence count ${sentenceCount}`);

    // Explicitly close file descriptor
    fs.closeSync(fs.openSync(filePath, "r"));

    // Responds with the total sentence count
    res.json({ total_sentences: sentenceCount });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ message: "Error reading from the file" });
  }
});

/**
 * @swagger
 *  /paragraph-count:
 *   get:
 *     summary: This GET api will return the paragraph count from the text file.
 *     responses:
 *       '200':
 *          description: Successful response with the paragraph count.
 *       '500':
 *          description: Error message.
 *
 */
router.get("/paragraph-count", (req, res) => {
  // Get the file_path from the query if it provided
  const { file_path } = req.query;
  console.log("---------- File Path: " + file_path);
  try {
    /* Read the text file
     * if file path is found in the query then read from query file path. (For test cases only)
     * otherwise read from from the default file path
     */
    const text = fs.readFileSync(
      file_path ? path.join(__dirname, file_path) : filePath,
      "utf8"
    );

    // Get the paragraph count
    const paragraphCount = countParagraphs(text);
    console.log(`paragraph count ${paragraphCount}`);

    // Explicitly close file descriptor
    fs.closeSync(fs.openSync(filePath, "r"));

    // Responds with the total paragraph count
    res.json({ total_paragraphs: paragraphCount });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ message: "Error reading from the file" });
  }
});

/**
 * @swagger
 *  /longest-words:
 *   get:
 *     summary: This GET api will return the longest words for each paragraph from the text file.
 *     responses:
 *       '200':
 *          description: Successful response with the list of longest words in each paragraph.
 *       '500':
 *          description: Error message.
 *
 */
router.get("/longest-words", (req, res) => {
  // Get the file_path from the query if it provided
  const { file_path } = req.query;
  console.log("---------- File Path: " + file_path);
  try {
    /* Read the text file
     * if file path is found in the query then read from query file path. (For test cases only)
     * otherwise read from from the default file path
     */
    const text = fs.readFileSync(
      file_path ? path.join(__dirname, file_path) : filePath,
      "utf8"
    );

    // Get the list of longest words
    const longestWordsInParagraph = longestWords(text);
    console.log(`longest words ${longestWordsInParagraph}`);

    // Explicitly close file descriptor
    fs.closeSync(fs.openSync(filePath, "r"));

    // Responds with the list of longest words
    res.json({ longest_words: longestWordsInParagraph });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ message: "Error reading from the file" });
  }
});

module.exports = router;
