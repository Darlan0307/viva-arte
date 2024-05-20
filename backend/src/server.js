import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes.js";
import { prisma } from "./services/prisma.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(async (req, res, next) => {
  try {
    await prisma.user.findMany();
    next();
  } catch (error) {
    console.error("Erro ao aquecer conexão ao banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

app.use(routes);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`api http://localhost:${PORT}`);
});
