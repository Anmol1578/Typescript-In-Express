// Import Express
import express from "express";

// Import Express type
import type { Express , Request , Response } from "express";

import { pets } from "./data/pets.js";

import cors from 'cors'


// Port number for the server
const PORT = 8000;

// Create Express app
const app: Express = express();

app.use(cors())


// GET route for the home page
app.get("/", (req:Request, res:Response):void => {
  // Send pets as JSON
  res.json(pets);
});

// Start the server
app.listen(PORT, (): void => {
  // Show message when server starts
  console.log(`Server is Listening on port ${PORT}`);
});

