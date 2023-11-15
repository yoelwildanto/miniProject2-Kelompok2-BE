import express from "express";
import reportController from "../controllers/reportController";
const router = express.Router();

router.get("/", reportController.getTransactionGraphController)

export = router;