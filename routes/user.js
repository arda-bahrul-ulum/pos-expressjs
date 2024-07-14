import express from "express";
import * as userController from "../controllers/user.js";

const router = express.Router();

router.post("/create", userController.ctrlCreate);

export default router;
