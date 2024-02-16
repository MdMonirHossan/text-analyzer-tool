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

app.listen(3000, () => {
  console.log(`Starting express server at http://localhost:3000`);
  console.log(`Swagger server listening on http://localhost:3000/api-docs`);
});

module.exports = app;
