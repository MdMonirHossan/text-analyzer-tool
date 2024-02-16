const {
  countWords,
  countCharacters,
} = require("../src/utils/text-analyzer.util");

/**
 * @Test countWords
 * @param {String} text - The text to count the words from.
 * @description This test will calculate the number of words in the given text.
 * @case
 *   - counts the number of words in the text
 *   - handle empty text
 *   - count words with only whitespace
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

  it("count words with only whitespace", () => {
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
/**
 * @Test countWords
 * @param {String} text - The text to count the characters from.
 * @description This test will calculate the number of characters in the given text.
 * @case
 *   - counts the number of characters in the text
 *   - handle empty text
 *   - count character with whitespace
 *   - count with special characters
 */
describe("countCharacters", () => {
  it("counts the number of characters in the text", () => {
    const text = "This is a test sentence to count the number of characters.";
    const result = countCharacters(text);
    expect(result).toBe(58);
  });

  it("handle empty characters count", () => {
    const text = "";
    const result = countCharacters(text);
    expect(result).toBe(0);
  });

  it("count characters with whitespace", () => {
    const text = "      ";
    const result = countWords(text);
    expect(result).toBe(0);
  });

  it("count with special characters", () => {
    const text = "!&*#$%and*(!)";
    const result = countCharacters(text);
    expect(result).toBe(13);
  });
});
