const express = require("express");
const swaggerSetup = require("./swagger/swagger-setup");
const textAnalyzerRoutes = require("./routes/text-analyzer.route");

// Create an instance of Express framework
const app = express();

// Middleware to Parse Json
app.use(express.json());

// Mount all routes to express
app.use("/", textAnalyzerRoutes);

// Integrate swagger documentation
swaggerSetup(app);

const port = 3000;

// app.listen(port);

app.listen(port, () => {
  console.log(`Starting express server at http://localhost:${port}`);
  console.log(`Swagger server listening on http://localhost:${port}/api-docs`);
});

module.exports = app;
