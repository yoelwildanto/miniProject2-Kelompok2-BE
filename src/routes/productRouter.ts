import express from "express";
const router = express.Router();

import productController from "../controllers/productController";
import multer from "../middleware/multer";

router.post(
    "/",
    multer.uploadProductFile,
    productController.createProductController
);
router.get("/", productController.getProductAllController);
// router.get("/:id", productController.getProductByIdController)
router.patch(
    "/update/:productId",
    multer.uploadProductFile,
    productController.updateProductController
);

export = router;
