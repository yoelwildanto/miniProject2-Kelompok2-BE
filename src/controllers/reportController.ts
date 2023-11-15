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

export = {
    getTransactionGraphController
}