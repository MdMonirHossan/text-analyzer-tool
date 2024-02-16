const { countWords } = require("../src/utils/text-analyzer.util");

/**
 * @Test countWords
 * @param {String} text - The text to count the words from.
 * @description This test will calculate the number of words in the given text.
 * @case
 *   - counts the number of words in the text
 *   - handle empty text
 *   - handle text with only whitespace
 *   - count words separated by different whitespace
 */
describe("countWords", () => {
  it("counts the number of words in the text", () => {
    const text = "This is a test sentence to count the number of words.";
    const result = countWords(text);
    expect(result).toBe(11);
  });

  it("handle empty text", () => {
    const text = "";
    const result = countWords(text);
    expect(result).toBe(0);
  });

  it("handle text with only whitespace", () => {
    const text = "      ";
    const result = countWords(text);
    expect(result).toBe(0);
  });

  it("count words separated by different whitespace", () => {
    const text = "This\nis\nDifferent \nwhite   space sentence.";
    const result = countWords(text);
    expect(result).toBe(6);
  });
});
