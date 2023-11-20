import express from "express";
const router = express.Router();

import productController from "../controllers/productController";
import multer from "../middleware/multer";

router.post("/", multer.uploadProductFile, productController.createProductController)
router.get("/", productController.getProductAllController)
router.get("/subproduct/:productId", productController.getProductIdController)
router.get("/pagination", productController.getProductPaginationController)
router.patch("/update/:productId", multer.uploadProductFile, productController.updateProductController)
router.patch("/status/update/:productId", productController.updateProductStatusController)
router.delete("/product/:productId", productController.deleteProductService)

export = router;
