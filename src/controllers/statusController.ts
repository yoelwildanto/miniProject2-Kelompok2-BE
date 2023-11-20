import { Request, Response } from 'express';
import statusService from "../services/statusService";

const getStatusAllController = async (req: Request, res: Response) => {
    try {
        const result = await statusService.getStatusAllService()
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in getStatusAllController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
}

export = {
    getStatusAllController
}