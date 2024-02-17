const { createLogger, format, transports } = require("winston");

// Create custom logger format
const customLoggerFormat = format.printf(({ level, meta, timestamp }) => {
  return `${timestamp} ${level} : ${meta}`;
});

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
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.prettyPrint()
  ),
});

module.exports = logger;
