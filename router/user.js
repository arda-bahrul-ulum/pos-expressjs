import express from "express";
import * as authController from "../controller/auth/login.js";

const router = express.Router();

router.post("/", authController.login);

export default router;
