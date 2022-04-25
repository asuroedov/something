import express from "express";
import { login } from "../controllers/authController";

const router = express.Router();

router.post(`/api/login`, login);

export default router;
