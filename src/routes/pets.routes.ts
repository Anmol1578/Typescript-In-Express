import express from "express";
import type { Router } from "express";
import { getPets, getPetbyId } from "../controllers/pets.controllers.js";

const petRouter: Router = express.Router();

// GET route for the home page
petRouter.get("/", getPets);

petRouter.get("/:id", getPetbyId);

export default petRouter;
