import express from "express";
import path from "path";
import dotenv from "dotenv";
import productRouter from "./routes/productRouter"

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
})
const app = express()
const port: number = Number(process.env.PORT)|| 8000;

app.use("/products", productRouter)

app.listen(port, () => {
    console.log(`running on port ${port}`);
});