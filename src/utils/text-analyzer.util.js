/**
 * @method countWords
 * @param {string} text: The input text for which the number of words needs to be counted.
 * @description This method will return the number of words that have been counted for the given text.
 *  The @Boolean function is used as the filter callback, which will remove any empty string from the splitted array.
 * @returns The number of words in the input text.
 */
function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

module.exports = { countWords };
