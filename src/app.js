// Import necessary modules
import express from 'express';
import morgan from 'morgan'; // Example middleware for logging requests

// Create an Express application
const app = express();

// Middleware: Example of using morgan for request logging
app.use(morgan('dev'));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Export the Express application instance
export { app };
