import express from "express";
import dotenv from "dotenv";
import {
  createPersone,
  updatePersona,
  getAllPersone,
  getPersoneById,
  deletePersone,
} from "./personeService/index.js";
import connectBD from "./lib/mongo.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectBD().catch((error) => {
  console.error("Error al conectar a la BD:", error);
  process.exit(1);
});

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/persone", createPersone);
app.put("/persone", updatePersona);
app.get("/people", getAllPersone);
app.get("/persone/:id", getPersoneById);
app.delete("/persone/:id", deletePersone);

const server = app
  .listen(PORT, () => {
    console.log("Server running at PORT:", PORT);
  })
  .on("error", (error) => {
    console.error("Error en el servidor:", error.message);
  });

process.on("SIGINT", () => {
  console.log("Cerrando el servidor...");
  server.close(() => {
    console.log("Servidor cerrado.");
    process.exit(0);
  });
});
