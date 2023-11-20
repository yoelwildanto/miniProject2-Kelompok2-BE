import express from "express";
import path from "path";
import cors from "cors";
import routerProduct from "./routes/productRouter";
import routerCategory from"./routes/categoryRouter";
import routerReport from"./routes/reportRouter";
import routerStatus from"./routes/statusRouter";

import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const port: number = Number(process.env.PORT) || 8000;
const app = express();

app.use(express.json());
app.use(
    cors({
      origin: process.env.WHITELISTED_DOMAIN
        ? process.env.WHITELISTED_DOMAIN.split(" ")
        : undefined,
    })
  );

app.use("/product", routerProduct);
app.use("/category", routerCategory)
app.use("/report", routerReport)
app.use("/status", routerStatus)

app.use("/uploads", express.static(path.join(__dirname, "./public/images")));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});