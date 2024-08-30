import { Router } from "express";
import { login } from "../controllers/auth.cotroller.js";

const router = Router();

router.get("/",login);

export default router;