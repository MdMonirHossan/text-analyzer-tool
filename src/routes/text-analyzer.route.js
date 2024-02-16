const express = require("express");

const router = express.Router();

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

module.exports = router;
