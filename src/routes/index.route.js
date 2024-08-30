import { Router } from "express";
import routerCarros from "./carros.route.js";
import routerAuth from "./auth.route.js";

const router = Router();

router.use("/auth", routerAuth)
router.use("/api", routerCarros);

export default router;