import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "running" });
});

routes.post("/register", (req, res) => {
  res.json({ message: "running" });
});

routes.post("/login", (req, res) => {
  res.json({ message: "running" });
});

export default routes;
