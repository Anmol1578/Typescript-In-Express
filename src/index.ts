// Import Express
import express from "express";

// Import Express type
import type { Express, Request, Response } from "express";

import petRouter from "./routes/pets.routes.js";

import cors from "cors";

const PORT = 8000;

// Create Express app
const app: Express = express();

app.use(cors());

app.use("/pets", petRouter);

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: "No endpoint Found" });
});

// Start the server
app.listen(PORT, (): void => {


  console.log(`Server is Listening on port ${PORT}`);
});
