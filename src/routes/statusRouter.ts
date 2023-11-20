import express from "express";
const router = express.Router();

import statusController from "../controllers/statusController";

router.get("/", statusController.getStatusAllController);

export = router