import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import * as salesController from "../controllers/sales.js";

const router = express.Router();

router.post("/create", authenticateToken, salesController.ctrlCreate);
router.get("/", authenticateToken, salesController.ctrlGetAll);
router.get("/:id", authenticateToken, salesController.ctrlGetDetail);
router.put("/:id", authenticateToken, salesController.ctrlUpdate);
router.delete("/:id", authenticateToken, salesController.ctrlDelete);

export default router;
