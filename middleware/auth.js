import jwt from "jsonwebtoken";
import { responseTemplate } from "../utils/response.js";

export const tokenValidation = (request, response, next) => {
  try {
    let authToken = request.headers.authorization;
    let accessToken = authToken && authToken.split(" ")[1];
    console.log(accessToken);
    jwt.verify(accessToken, accessToken, (error, payload) => {
      console.log(error);
      console.log(payload);
      if (!error) {
        console.log(payload);
        request.claims = payload;
        next();
      } else {
        responseTemplate(response, "", "token tidak valid", 401);
      }
    });
  } catch (error) {
    next(error);
  }
};
