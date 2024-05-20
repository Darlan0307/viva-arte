import { Router } from "express";
import { UserController } from "./controllers/UserController.js";
import { prisma } from "./services/prisma.js";

const usercontroller = new UserController();

const routes = Router();

(async () => {
  await prisma.$connect();
})();

routes.get("/", (_, res) => {
  res.json({ message: "running" });
});

routes.post("/register", usercontroller.createUser);

routes.post("/login", usercontroller.authUser);

export default routes;
