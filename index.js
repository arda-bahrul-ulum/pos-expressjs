import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoute from "./routes/user.js";
import autRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import salesRoute from "./routes/sales.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/v1/auth", autRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/sales", salesRoute);

app.listen(port, () => {
  console.log("server running di port ", port);
});
