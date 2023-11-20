import { Request, Response } from "express";
import categoryService from "../services/categoryService";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const result = await categoryService.createCategoryService(
      categoryName,
      req.file?.filename || ""
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err: any) {
    console.error("Error in createCategoryController:", err);
    return res.status(500).send(`Internal Server Error: ${err.message}`);
  }
};

const getCategoryAllController = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getCategoryAllService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err: any) {
    console.error("Error in getCategoryController:", err);
    return res.status(500).send(`Internal Server Error: ${err.message}`);
  }
};

const updateCategoryController = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const parsedCategoryId = parseInt(categoryId, 10);
    const { categoryName, image } = req.body;
    const strCategoryName = categoryName ? String(categoryName) : undefined;
    const result = await categoryService.updateCategoryService(
      parsedCategoryId,
      strCategoryName,
      req.file?.filename || image
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err: any) {
    console.error("Error in updateControllerController:", err);
    return res.status(500).send(`Internal Server Error: ${err.message}`);
  }
};

const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const parsedCategoryId = parseInt(categoryId, 10);
    const result = await categoryService.deleteCategoryService(
      parsedCategoryId
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err: any) {
    console.error("Error in updateControllerController:", err);
    return res.status(500).send(`Internal Server Error: ${err.message}`);
  }
};

export = {
  createCategoryController,
  getCategoryAllController,
  updateCategoryController,
  deleteCategoryController,
};
