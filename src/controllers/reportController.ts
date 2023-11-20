import { Request, Response } from 'express';
import reportService from "../services/reportService";

const getTransactionGraphController = async (req: Request, res: Response) => {
    try {
        const result = await reportService.getTransactionGraphService();
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getProductAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    } 
}

const getTransactionAllController = async (req: Request, res: Response) => {
    try {
        const {page, pageSize, startDate, endDate} = req.query
        const parsedPage = parseInt(page as string, 10);
        const parsedPageSize = parseInt(pageSize as string, 10);
        const result = await reportService.getTransactionAllService(parsedPage, parsedPageSize, startDate as string, endDate as string);
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getTransactionAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    } 
}

const getTransactionDetailController = async (req: Request, res: Response) => {
    try {
        const {transactionId} = req.params
        const parsedTransactionId = parseInt(transactionId, 10);
        const result = await reportService.getTransactionDetailService(parsedTransactionId)
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getTransactionAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const getBestSellerTransactionController =async (req: Request, res: Response) => {
    try {
        const result = await reportService.getBestSellerTransactionService()
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getTransactionAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const getUserAllController =async (req: Request, res: Response) => {
    try {
        const {page, pageSize, username} = req.query
        const parsedPage = parseInt(page as string, 10);
        const parsedPageSize = parseInt(pageSize as string, 10);
        const result = await reportService.getUserAllService(parsedPage, parsedPageSize, username as string)
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getProductAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

const getUserIdController = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params
        const parsedUserId = parseInt(userId, 10);
        const {page, pageSize, startDate, endDate} = req.query
        const parsedPage = parseInt(page as string, 10);
        const parsedPageSize = parseInt(pageSize as string, 10);
        const result = await reportService.getUserIdService(parsedUserId, parsedPage, parsedPageSize, startDate as string, endDate as string);
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getTransactionAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    } 
}

export = {
    getTransactionGraphController,
    getTransactionAllController,
    getTransactionDetailController,
    getBestSellerTransactionController,
    getUserAllController,
    getUserIdController
}