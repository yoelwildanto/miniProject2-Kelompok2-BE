import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
})
const app = express()
const port: number = Number(process.env.PORT)|| 8000;

app.use(express.json());

import routerUser = require("./routes/userRouter");
app.use("/api",routerUser);

app.listen(port, () => {
    console.log(`running on port ${port}`);
});