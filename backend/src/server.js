import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`api http://localhost:${PORT}`);
});
