import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import * as productController from "../controllers/product.js";

const router = express.Router();

router.post("/create", authenticateToken, productController.ctrlCreate);
router.get("/", authenticateToken, productController.ctrlGetAll);
router.get("/:id", authenticateToken, productController.ctrlGetDetail);
router.put("/:id", authenticateToken, productController.ctrlUpdate);
router.delete("/:id", authenticateToken, productController.ctrlDelete);
router.put(
  "/update-stock/:id",
  authenticateToken,
  productController.ctrlUpdateStock
);

export default router;
