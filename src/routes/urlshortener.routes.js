import { Router } from "express";
import { urlShortener } from "../controllers/index.js";

const shortenerRoutes = Router();

shortenerRoutes.get("/:id", urlShortener.getUrl);
shortenerRoutes.post("/short", urlShortener.createShortLink);

export default shortenerRoutes;
