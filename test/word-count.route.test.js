const request = require("supertest");
const app = require("../src/app");

/**
 * @Test /word-count
 * @request_method GET
 * @query {string} file_path : The file path to test
 * @description This test will check the /word-count route to get the word count for a given file.
 * @case
 *  - responds with word count of the given text file
 *  - responds with an error message for wrong file path
 */
describe("GET /word-count", () => {
  // Initialize a variable server
  let server;

  // This function is called once before any of the tests in the test suite are run.
  // The port is dynamically assigned by passing '0' to the listener.
  beforeAll((done) => {
    server = app.listen(0, () => {
      console.log(
        `Words count test server is running on port ${server.address().port}`
      );
      done();
    });
  });

  // This function is called once after all of the tests in the test suite have finished running.
  afterAll((done) => {
    server.close(done);
  });

  it("responds with word count of the given text file", async () => {
    const response = await request(app)
      .get("/api/word-count")
      .query({ file_path: "../../sample.txt" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ total_words: 16 });
  });

  it("responds with an error message for wrong file path", async () => {
    const response = await request(app)
      .get("/api/word-count")
      .query({ file_path: "wrong.txt" });
    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBe("Error reading from the file");
  });
});
