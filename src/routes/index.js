import { Router } from "express";
import shortenerRoutes from "./urlshortener.routes.js";

const routes = Router();

routes.use("/", shortenerRoutes);

export default routes;
