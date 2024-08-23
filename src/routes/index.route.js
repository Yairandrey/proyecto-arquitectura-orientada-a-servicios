import { Router } from "express";
import routerCarros from "./carros.route.js";

const router = Router();

router.use("/api", routerCarros);

export default router;