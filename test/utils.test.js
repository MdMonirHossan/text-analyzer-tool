const {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
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
/**
 * @Test countSentences
 * @param {String} text - The text to count the sentence from.
 * @description This test will calculate the number of sentences in the given text.
 * @case
 *   - counts the number of sentences in the text
 *   - handle empty sentence count
 *   - handle sentences ending with different punctuation marks
 *   - handle sentences with multiple whitespace between punctuation marks
 */
describe("countSentences", () => {
  it("counts the number of sentences in the text", () => {
    const text = "This is a test sentence one. Another sentence. Any more?";
    const result = countSentences(text);
    expect(result).toBe(3);
  });

  it("handle empty sentence count", () => {
    const text = "";
    const result = countSentences(text);
    expect(result).toBe(0);
  });

  it("handle sentences ending with different punctuation marks", () => {
    const text =
      "This is a test sentence. Another sentence? Yet another test sentence!";
    const result = countSentences(text);
    expect(result).toBe(3);
  });

  it("handle sentences with multiple whitespace between punctuation marks", () => {
    const text = "Sentence one.    Sentence two.";
    const result = countSentences(text);
    expect(result).toBe(2);
  });
});

/**
 * @Test countParagraphs
 * @param {String} text - The text to count the paragraphs from.
 * @description This test will calculate the number of paragraph in the given text.
 * @case
 *   - counts the number of paragraphs in the text
 *   - handle empty sentence count
 *   - handle sentences ending with different punctuation marks
 *   - handle sentences with multiple whitespace between punctuation marks
 */
describe("countParagraphs", () => {
  it("counts the number of paragraphs using \n\n", () => {
    const text = "This is a test paragraph one. \n\nAnother paragraph";
    const result = countParagraphs(text);
    expect(result).toBe(2);
  });

  it("counts the number of paragraphs using formatted text", () => {
    const text = `
    This is a test paragraph one.
    Another paragraph
    `;
    const result = countParagraphs(text);
    expect(result).toBe(2);
  });

  it("handle empty paragraph count", () => {
    const text = "";
    const result = countParagraphs(text);
    expect(result).toBe(0);
  });

  it("handle paragraph with multiple line breaks", () => {
    const text ="This is a paragraph. \n\n\n\nAnother paragraph.\n\n\n\nLast paragraph.";
    const result = countParagraphs(text);
    expect(result).toBe(3);
  });

  it("handle with no paragraph", () => {
    const text = "This is a single paragraph to test.";
    const result = countParagraphs(text);
    expect(result).toBe(1);
  });
});
