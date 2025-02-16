import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware";
import { registerUser, getUserProfile } from "../controllers/user.controller";

const router = Router();

router.post("/register", verifyToken, registerUser);
router.get("/me", verifyToken, getUserProfile);

export default router;