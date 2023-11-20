import express from "express";
const routerCategory = express.Router();

import categoryController from "../controllers/categoryController";
import multer from "../middleware/multer";

routerCategory.post("/", multer.uploadCategoryFile, categoryController.createCategoryController)
routerCategory.get("/", categoryController.getCategoryAllController)
routerCategory.patch("/update/:categoryId", multer.uploadCategoryFile, categoryController.updateCategoryController)
routerCategory.delete("/category/:categoryId", categoryController.deleteCategoryController)

export = routerCategory;