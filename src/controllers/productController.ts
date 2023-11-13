import { Request, Response } from 'express';
import productService from "../services/productService";

const createProductController = async (req: Request, res: Response) => {
    try {
        const {name, categoryId, price, quantity, description, status} = req.body
        const numCategoryId = Number(categoryId)
        const numPrice = Number(price)
        const numQuantity = Number(quantity)
        // const numStatusId = Number(status)
        const result = await productService.createProductService(name, numCategoryId, numPrice, numQuantity, description, status, req.file?.filename || '')
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

const getProductByIdController = async (req: Request, res: Response) => {

}

const updateProductController = async (req: Request, res: Response) => {
    try {
        const {productId} = req.params
        const parsedProductId = parseInt(productId, 10);
        const {name, categoryId, price, quantity, description, status} = req.body
        const result = await productService.updateProductService(name, categoryId, price, quantity, description, status, req.file?.filename || '', parsedProductId)
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
    getProductByIdController,
    updateProductController
}