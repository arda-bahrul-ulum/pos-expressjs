import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUser } from "../repositories/auth.js";
import { responseTemplate } from "../utils/response.js";

const accessToken = process.env.ACCESS_TOKEN;
const refreshToken = process.env.REFRESH_TOKEN;

export async function ctrlLogin(req, res, next) {
  try {
    const { username, password } = req.body;
    let message;
    let status;
    let data = "";

    let dataUser = await findUser(username);

    if (dataUser) {
      bcrypt.compare(password, dataUser.password, (error, isValid) => {
        if (isValid) {
          let user = {
            id: dataUser.id,
            username: dataUser.username,
          };

          let access_token = jwt.sign(user, accessToken, {
            expiresIn: "1h",
          });

          let refresh_token = jwt.sign(user, refreshToken, {
            expiresIn: "7d",
          });

          data = {
            access_token: access_token,
            refresh_token: refresh_token,
          };

          message = "success";
          status = 200;
        } else {
          message = "username atau password tidak sesuai";
          status = 401;
        }
        responseTemplate(res, data, message, status);
      });
    } else {
      message = "username belum terdaftar";
      status = 400;
      responseTemplate(res, data, message, status);
    }
  } catch (error) {
    next(error);
  }
}
