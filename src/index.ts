// Import Express
import express from "express";

// Import Express type
import type { Express, Request, Response } from "express";

import { pets } from "./data/pets.js";

import type { Pet } from "./data/pets.js";

import cors from "cors";

// Port number for the server
const PORT = 8000;

// Create Express app
const app: Express = express();

app.use(cors());

type PetQueryParams = {
  species?:string,
  adopted?: "true" | "false",
  minAge?:string,
  maxAge?:string
}

// GET route for the home page
app.get(
  "/",
  (
  req: Request<{}, {}, {}, PetQueryParams>,
    res: Response<Pet[]>,
  ): void => {
    const { species , adopted , minAge , maxAge } = req.query;

    let filteredPets: Pet[] = pets;

    if (species) {
      filteredPets = filteredPets.filter(
        (pet: Pet): boolean =>
          pet.species.toLowerCase() === species.toLowerCase(),
      );
    }

       if (adopted) {
      filteredPets = filteredPets.filter(
        (pet: Pet): boolean =>
         pet.adopted === JSON.parse(adopted)
      );
    }

          if (minAge) {
      filteredPets = filteredPets.filter(
        (pet: Pet): boolean =>
         pet.age >= JSON.parse(minAge)
      );
    }

         if (maxAge) {
      filteredPets = filteredPets.filter(
        (pet: Pet): boolean =>
         pet.age <= JSON.parse(maxAge)
      );
    }

    res.json(filteredPets);
  },
);

app.get(
  "/:id",
  (
    req: Request<{ id: string }>,
    res: Response<Pet | { message: string }>,
  ): void => {
    const { id } = req.params;
    const pet: Pet | undefined = pets.find(
      (pet: Pet): boolean => pet.id.toString() === id,
    );

    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: "No pet with that Id" });
    }
  },
);

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: "No endpoint Found" });
});

// Start the server
app.listen(PORT, (): void => {
  // Show message when server starts
  console.log(`Server is Listening on port ${PORT}`);
});
