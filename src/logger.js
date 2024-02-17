const { createLogger, format, transports } = require("winston");

// Create custom logger format
const customLoggerFormat = format.printf(
  ({ level, message, meta, timestamp }) => {
    // Convert the meta object to a string if it exists
    const metaString = meta ? JSON.stringify(meta) : "";
    // Construct the log message with the desired format
    return `${timestamp} ${level} : ${message} ${metaString}`;
  }
);

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      level: "error",
      filename: "./logs/error.log",
    }),
    new transports.File({
      level: "info",
      filename: "./logs/info.log",
    }),
    new transports.File({
      level: "warn",
      filename: "./logs/warn.log",
    }),
    new transports.File({
      level: "debug",
      filename: "./logs/debug.log",
    }),
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    customLoggerFormat
    // format.prettyPrint()
  ),
});

module.exports = logger;
