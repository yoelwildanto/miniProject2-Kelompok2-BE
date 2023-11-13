import { Request, Response } from 'express';
import productService from "../services/productService";

const createProductController = async (req: Request, res: Response) => {
    try {
        const {productName, categoryId, price, stock, description, statusId} = req.body;
        const numCategoryId = Number(categoryId)
        const numPrice = Number(price)
        const numStock = Number(stock)
        const numStatusId = Number(statusId)
        const result = await productService.createProductService(productName, numCategoryId, numPrice, numStock, description, numStatusId, req.file?.filename || '')
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in createProductController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const getProductAllController = async (req: Request, res: Response) => {
    try {
        const result = await productService.getProductAllService()
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getProductAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const updateProductController = async (req: Request, res: Response) => {
    try {
        const {productId} = req.params
        const parsedProductId = parseInt(productId, 10);
        const {productName, categoryId, price, stock, description, statusId} = req.body
        const result = await productService.updateProductService(productName, categoryId, price, stock, description, statusId, req.file?.filename || '', parsedProductId)
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in updateProductController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

export = {
    createProductController,
    getProductAllController,
    updateProductController
}