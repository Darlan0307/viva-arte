import { Router } from "express";
import { UserController } from "./controllers/UserController.js";

const usercontroller = new UserController();

const routes = Router();

routes.get("/", (_, res) => {
  res.json({ message: "running" });
});

routes.post("/register", usercontroller.createUser);

routes.post("/login", usercontroller.authUser);

export default routes;
