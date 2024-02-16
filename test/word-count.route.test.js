const request = require("supertest");
const app = require("../src/app");
/**
 * @Test /word-count
 * @request_method GET
 * @query {string} file_path : The file path to test
 * @description This test will check the /word-count route to get the word count for a given file.
 * @case
 *  - responds with word count or the given text file
 *  - responds with an error message for wrong file path
 */
describe("GET /word-count", () => {
  it("responds with word count or the given text file", async () => {
    const response = await request(app)
      .get("/word-count")
      .query({ file_path: "../../sample.txt" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({ total_words: 16 });
  });

  it("responds with an error message for wrong file path", async () => {
    const response = await request(app)
      .get("/word-count")
      .query({ file_path: "wrong.txt" });
    expect(response.statusCode).toBe(500);
    expect(response.body).toStrictEqual({
      message: "Error reading from the file",
    });
  });
});
