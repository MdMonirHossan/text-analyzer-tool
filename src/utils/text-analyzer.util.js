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

module.exports = { countWords, countCharacters, countSentences };
