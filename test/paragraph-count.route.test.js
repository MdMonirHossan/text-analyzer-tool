const request = require("supertest");
const app = require("../src/app");

const port = 3007;

/**
 * @Test /paragraph-count
 * @request_method GET
 * @query {string} file_path : The file path to test
 * @description This test will check the /paragraph-count route to get the paragraph count for a given file.
 * @case
 *  - responds with paragraph count of the given text file
 *  - responds with an error message for wrong file path
 */
describe("GET /paragraph-count", () => {
  beforeAll((done) => {
    server = app.listen(port, (err) => {
      if (err) {
        return done(err); // Return error if server fails to start
      }
      console.log(`Server is running on port ${port}`);
      done(); // Call done to indicate server is ready
    });
  });

  afterAll((done) => {
    if (server) {
      server.close((err) => {
        if (err) {
          return done(err); // Return error if server fails to close
        }
        done(); // Call done to indicate server is closed
      });
    } else {
      done(); // Call done if server is not initialized
    }
  });

  it("responds with paragraph count of the given text file", async () => {
    const response = await request(app)
      .get("/paragraph-count")
      .query({ file_path: "../../sample.txt" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ total_paragraphs: 1 });
  });

  it("responds with an error message for wrong file path", async () => {
    const response = await request(app)
      .get("/paragraph-count")
      .query({ file_path: "wrong.txt" });
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({
      message: "Error reading from the file",
    });
  });
});
