import { Request, Response } from 'express';
import productService from "../services/productService";

const createProductController = async (req: Request, res: Response) => {
    try {
        const {productName, categoryId, price, stock, description, statusId} = req.body
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

const getProductAllController =async (req: Request, res: Response) => {
    try {
        const {page, pageSize} = req.body
        const result = await productService.getProductAllService(page, pageSize)
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getProductAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const getProductIdController =async (req: Request, res: Response) => {
    try {
        const {productId} = req.params
        console.log(productId);
        const parsedProductId = parseInt(productId, 10);
        const result = await productService.getProductIdService(parsedProductId)
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getProductAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const getProductPaginationController = async (req: Request, res: Response) => {
    try {
        const {page, pageSize, productName, categoryId, alphaId, priceId} = req.query
        const parsedPage = parseInt(page as string, 10);
        const parsedPageSize = parseInt(pageSize as string, 10);
        const parsedCategoryId = parseInt(categoryId as string, 10);
        const parsedAlphaId = parseInt(alphaId as string, 10);
        const parsedPriceId = parseInt(priceId as string, 10);
        const result = await productService.getProductPaginationService(parsedPage, parsedPageSize, productName as string, parsedCategoryId, parsedAlphaId, parsedPriceId)
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
        const {productName, categoryId, price, stock, description, statusId, image} = req.body
        const strProductName = productName ? String(productName) : undefined;
        const numCategoryId = categoryId ? Number(categoryId) : undefined;
        const numPrice = price ? Number(price) : undefined;
        const numStock = stock ? Number(stock) : undefined;
        const strDescription = description ? String(description) : undefined;
        const numStatusId = statusId ? Number(statusId) : undefined;
        const result = await productService.updateProductService(parsedProductId, strProductName, numCategoryId, numPrice, numStock, strDescription, numStatusId, req.file?.filename || image)
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in updateProductController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const updateProductStatusController = async (req: Request, res: Response) => {
    try {
        const {productId} = req.params
        const parsedProductId = parseInt(productId, 10);
        const {statusId} = req.body
        const numStatusId = statusId ? Number(statusId) : undefined;
        const result = await productService.updateProductStatusService(parsedProductId, numStatusId)
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in updateProductController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const deleteProductService =async (req: Request, res: Response) => {
    try {
        const {productId} = req.params
        const parsedProductId = parseInt(productId, 10);
        const result = await productService.deleteProductService(parsedProductId);
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in updateProductController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}


// const searchProductController = async (req: Request, res: Response) => {
//     try {
//         const {productName, categoryId} = req.query
//         const parsedCategoryId = parseInt(categoryId as string, 10);
//         const result = await productService.searchProductService(productName as string, parsedCategoryId)
//         return res.status(200).json({
//             message: "success",
//             data: result
//         })
//     } catch (err: any) {
//         console.error('Error in searchProductController:', err);
//         return res.status(500).send(`Internal Server Error: ${err.message}`);
//     }
// }

// const filterProductAlphabetController = async (req: Request, res: Response) => {
//     try {
//         const {filterId} = req.query
//         const parsedFilterId = parseInt(filterId as string, 10);
//         const result = await productService.filterProductAlphabetService(parsedFilterId)
//         return res.status(200).json({
//             message: "success",
//             data: result
//         })
//     } catch (err: any) {
//         console.error('Error in filterProductAlphabetController:', err);
//         return res.status(500).send(`Internal Server Error: ${err.message}`);
//     }
// }

// const filterProductPriceController = async (req: Request, res: Response) => {
//     try {
//         const {filterId} = req.query
//         const parsedFilterId = parseInt(filterId as string, 10);
//         const result = await productService.filterProductPriceService(parsedFilterId)
//         return res.status(200).json({
//             message: "success",
//             data: result
//         })
//     } catch (err: any) {
//         console.error('Error in filterProductAlphabetController:', err);
//         return res.status(500).send(`Internal Server Error: ${err.message}`);
//     }
// }

export = {
    createProductController,
    getProductAllController,
    updateProductController,
    getProductIdController,
    getProductPaginationController,
    updateProductStatusController,
    deleteProductService,
    // searchProductController,
    // filterProductAlphabetController,
    // filterProductPriceController,
   

    
}