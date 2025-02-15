import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "List of users" });
});

export default router;