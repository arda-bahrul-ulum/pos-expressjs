import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
import { responseTemplate } from "../utils/response.js";

const accessToken = process.env.ACCESS_TOKEN;

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return responseTemplate(res, "", "Token tidak ditemukan", 401);

  jwt.verify(token, accessToken, (err, user) => {
    if (err) return responseTemplate(res, "", "Token tidak valid", 403);

    req.user = user;
    next();
  });
};
