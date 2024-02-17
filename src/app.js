const express = require("express");
const swaggerSetup = require("./swagger/swagger-setup");
const textAnalyzerRoutes = require("./routes/text-analyzer.route");
const expressWinston = require("express-winston");
const logger = require("./logger");

// Create an instance of Express framework
const app = express();

// Winston Middleware for logging
app.use(
  expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
  })
);

// Middleware to Parse Json
app.use(express.json());

// Mount all routes to express
app.use("/api", textAnalyzerRoutes);

// Integrate swagger documentation
swaggerSetup(app);

const port = 3000;

// app.listen(port);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    logger.info(`Starting express server at http://localhost:${port}`);
    logger.info(
      `Swagger documentation is on http://localhost:${port}/api-docs`
    );
  });
}

module.exports = app;
