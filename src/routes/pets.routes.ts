import express from "express";
import type { Router } from "express";
import { getPets, getPetbyId } from "../controllers/pets.controllers.js";

import {validateNumericId} from '../middleware/pets.middleware.js'

const petRouter: Router = express.Router();

// GET route for the home page
petRouter.get("/", getPets);

petRouter.get("/:id", validateNumericId,  getPetbyId);

export default petRouter;
