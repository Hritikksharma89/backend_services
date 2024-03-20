import winston from 'winston'

// Define the format for log messages
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp to logs
  // winston.format.colorize(),   // Add colors

  winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`
  }),
)

const logger = winston.createLogger({
  level: 'info', // Set log level
  format: logFormat,
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'combined.log' }), // Log to a single file
  ],
})

export default logger
