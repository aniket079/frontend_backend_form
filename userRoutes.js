import express from "express";
import { submitUser } from "../controller/userController.js";

const router = express.Router();

// POST Route
router.post("/submit", submitUser);

export default router;