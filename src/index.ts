// Import Express framework
import express from "express";

// Import Express type for TypeScript
import type { Express } from "express";

// Server port number
const PORT = 8000;

// Create an Express application
const app: Express = express();

// Create a GET route for the home page "/"
app.get("/", (req, res) => {
  // Send an empty object as JSON response
  res.json({});
});

// Start the server
app.listen(PORT, (): void => {
  // Print message when server starts successfully
  console.log(`Server is Listening on port ${PORT}`);
});

