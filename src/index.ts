// Import Express
import express from "express";

import { pets } from "./data/pets.js";

// Import Express type
import type { Express } from "express";

// Port number for the server
const PORT = 8000;

// Create Express app
const app: Express = express();


// GET route for the home page
app.get("/", (req, res) => {
  // Send pets as JSON
  res.json(pets);
});

// Start the server
app.listen(PORT, (): void => {
  // Show message when server starts
  console.log(`Server is Listening on port ${PORT}`);
});

