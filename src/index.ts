
// Import Express
import express from "express";

// Import Express type
import type { Express } from "express";

// Port number for the server
const PORT = 8000;

// Create Express app
const app: Express = express();

// Create a type for a pet
type Pet = {
  name: string;
  species: string;
  adopted: boolean;
  age: number;
};

// Create a list of pets
const pets: Pet[] = [
  {
    name: "Max",
    species: "Dog",
    adopted: true,
    age: 3
  },
  {
    name: "Meow",
    species: "Cat",
    adopted: false,
    age: 2
  }
];

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

