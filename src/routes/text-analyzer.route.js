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
const { readFileData } = require("../utils/file.utils");
const logger = require("../logger");

const router = express.Router();

/**
 * @swagger
 *  /api/word-count:
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

  // Get file data from the utils function
  const text = readFileData(file_path, res);
  console.log("---------- Text: " + text);
  if (text) {
    // Get the word count from utils function
    const wordCount = countWords(text);
    console.log(`word count ${wordCount}`);

    // Responds with the total words count
    res.json({ total_words: wordCount });
  }
  return;
});

/**
 * @swagger
 *  /api/character-count:
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

  // Get file data from the utils function
  const text = readFileData(file_path, res);
  if (text) {
    // Get the character count from utils function
    const characterCount = countCharacters(text);
    console.log(`character count ${characterCount}`);

    // Responds with the total words count
    res.json({ total_characters: characterCount });
  }
  return;
});

/**
 * @swagger
 *  /api/sentence-count:
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

  // Get file data from the utils function
  const text = readFileData(file_path, res);
  if (text) {
    // Get the sentence count
    const sentenceCount = countSentences(text);
    console.log(`sentence count ${sentenceCount}`);

    // Responds with the total sentence count
    res.json({ total_sentences: sentenceCount });
  }
  return;
});

/**
 * @swagger
 *  /api/paragraph-count:
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

  // Get file data from the utils function
  const text = readFileData(file_path, res);
  if (text) {
    // Get the paragraph count
    const paragraphCount = countParagraphs(text);
    console.log(`paragraph count ${paragraphCount}`);

    // Responds with the total paragraph count
    res.json({ total_paragraphs: paragraphCount });
  }
  return;
});

/**
 * @swagger
 *  /api/longest-words:
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

  // Get file data from the utils function
  const text = readFileData(file_path, res);
  if (text) {
    // Get the list of longest words
    const longestWordsInParagraph = longestWords(text);
    console.log(`longest words ${longestWordsInParagraph}`);

    // Responds with the list of longest words
    res.json({ longest_words: longestWordsInParagraph });
  }
  return;
});

module.exports = router;
