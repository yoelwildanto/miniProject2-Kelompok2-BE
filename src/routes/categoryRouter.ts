import express from "express";
const router = express.Router();

import categoryController from "../controllers/categoryController";
import multer from "../middleware/multer";

router.post("/", multer.uploadCategoryFile, categoryController.createCategoryController)
router.get("/", categoryController.getCategoryAllController)
router.patch("/update/:categoryId", multer.uploadCategoryFile, categoryController.updateCategoryController)

export = router;