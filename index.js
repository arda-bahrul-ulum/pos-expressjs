import express from "express";
import authRoute from "./router/auth.js";

const app = express();
const port = 8001;

app.use(express.json());

app.use("/login", authRoute);
app.use("/user", authRoute);

app.listen(port, () => {
  console.log("server running di port ", port);
});
