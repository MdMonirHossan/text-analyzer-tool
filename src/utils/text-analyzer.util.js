/**
 * @function countWords
 * @param {string} text: The input text for which the number of words needs to be counted.
 * @description This method will return the number of words that have been counted for the given text.
 *  The @Boolean function is used as the filter callback, which will remove any empty string from the splitted array.
 * @returns The number of words in the input text.
 */
function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}
/**
 * @function countCharacters
 * @param {string} text: The input text for which the number of characters need to be counted.
 * @description This method will return the number of characters that have been counted for the given text.
 * @returns The number of characters in the input text.
 */
function countCharacters(text) {
  return text.length;
}
/**
 * @function countSentences
 * @param {string} text:  The input text for which the number of sentences needs to be counted.
 * @description This method will return the number of sentences that have been counted for the given text.
 * @returns The number of sentences in the input text.
 */
function countSentences(text) {
  return text.split(/[.!?]+/).filter(Boolean).length;
}
/**
 * @function countParagraphs
 * @param {string} text : The input text for which the number of paragraphs needs to be counted.
 * @description This method will return the number of paragraphs that have been counted for the given text.
 * @returns The number of the paragraph in the input text.
 */
function countParagraphs(text) {
  return text.split(/[\n\n]+/).filter((paragraph) => paragraph.trim() !== "")
    .length;
}
/**
 * @function longestWords
 * @param {string} text : The input text for which the number of paragraphs needs to be counted.
 * @description This method will return the longest words for paragraphs from the given text.
 * @returns The longest words in the input text.
 */
function longestWords(text) {
  // Split the text into paragraphs
  const paragraphs = text
    .split(/[\n\n]+/)
    .filter((paragraph) => paragraph.trim() !== "");

  // Initialize an array to store the longest words in each paragraph
  const longestWords = [];

  // Iterate through each paragraph
  paragraphs.forEach((paragraph) => {
    // Split the paragraph into words
    const words = paragraph.split(/\s+/);
    // Initialize variables to store the longest word and its length
    let longestWord = "";
    let maxLength = 0;
    //Iterate through each word & return longest word
    words.forEach((word) => {
      // Remove any punctuation from the word
      const cleanedWord = word.replace(/[.,\/#@!~$%&^*(){}=-_;:']/g, "");
      // Update the longest word if the current word is longer
      if (cleanedWord.length > maxLength) {
        longestWord = cleanedWord;
        maxLength = cleanedWord.length;
      }
    });
    // Add longest words to the array
    longestWords.push(longestWord);
  });
  return longestWords;
}

module.exports = {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  longestWords,
};
