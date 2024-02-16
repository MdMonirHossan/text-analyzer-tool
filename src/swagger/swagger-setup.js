const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

/**
 * @swagger_setup_options
 * @description The options object in the code snippet is used to configure the Swagger documentation for app API.
 * @server_url http://localhost:3000
 */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Text Analyzer API Documentation",
      version: "1.0.0",
      description: "Api documentation for the text analyzer tool",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.route.js"], // Path of the API routes file
};

// This is used to generate Swagger specifications based on the provided options.
const specs = swaggerJsdoc(options);

/**
 * The route uses the swaggerUi.serve middleware to serve the Swagger UI assets.
 *  The route uses the swaggerUi.setup middleware to set up the Swagger UI using the provided specs.
 */
module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
