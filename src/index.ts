import express from "express";
import path from "path";
import routerProduct from "./routes/productRouter";
import routerCategory from "./routes/categoryRouter";


import dotenv from "dotenv";
dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const port: number = Number(process.env.PORT) || 8000;
const app = express();

app.use(express.json());

app.use("/product", routerProduct);
app.use("/category", routerCategory);
// app.use("/report", routerReport)

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
