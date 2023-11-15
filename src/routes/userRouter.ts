import Express  from "express";
const router = Express.Router();

import userControllers from "../controllers/userControllers";
// import multer = require("../");

router.post("/", userControllers.createUserController);
router.get("/", userControllers.getUserAllController);
router.patch("/update/:userId, userControllers, updateUserController");

export = router;