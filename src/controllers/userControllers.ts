import { Request, Response } from "express";
import userService from "../services/userService";

const createUserController = async (req: Request, res:
Response) => {
    try {
        const { username, email, password, phoneNumber, address,
        avatar, roleId } = req.body;
        const numRoleId = Number(roleId);

        const result = await userService.createUserService(
            username, 
            email, 
            password,
            phoneNumber,
            address,
            avatar,
            roleId
            ); //req.file?.filename || '' //
            return res.status(200).json({
                message: "Success",
                data: result,
            });
    } catch (err: any) {
        console.error("Error in createUserController");
        return res.status(500).send(`Internal Server Error: ${err.message}`);
    }
};

const  getUserAllController = async (req: Request, res:
    Response) => {
        try {
            const result = await userService.getUserAllService();
            return res.status(200).json({
                message: "Success",
                data: result,
            });
        } catch (err: any) {
            console.error("Error in getUserAllController");
        }
    }

    export = {
        createUserController,
        getUserAllController,
    };