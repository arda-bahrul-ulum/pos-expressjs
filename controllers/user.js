import { create } from "../repositories/user.js";
import { responseTemplate } from "../utils/response.js";
import bcrypt from "bcrypt";

export async function ctrlCreate(req, res, next) {
  let message;
  let data;
  let response_code;

  try {
    bcrypt.hash(req.body.password, 10, async (error, hashedPass) => {
      data = await create(req.body.username, hashedPass);

      if (data > 0) {
        response_code = 200;
        message = "success";
      } else {
        response_code = 500;
        message = "error";
      }

      responseTemplate(res, data, message, response_code);
    });
  } catch (error) {
    next(error);
  }
}
