import express from "express";
import reportController from "../controllers/reportController";
const router = express.Router();

router.get("/", reportController.getTransactionGraphController)
// router.get("/all", reportController.getTransactionAllController)
router.get("/detail/:transactionId", reportController.getTransactionDetailController)
router.get("/best-seller", reportController.getBestSellerTransactionController)

export = router;