import {
  createData,
  getAllData,
  getDetailData,
  updateData,
  deleteData,
  updateStock,
} from "../repositories/product.js";
import { responseTemplate } from "../utils/response.js";

export async function ctrlCreate(req, res, next) {
  let message;
  let data;
  let response_code;

  try {
    data = await createData(req.body.name, req.body.price, req.body.stock);

    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function ctrlGetAll(req, res, next) {
  let message;
  let data;
  let response_code;

  try {
    data = await getAllData();
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function ctrlGetDetail(req, res, next) {
  let message;
  let data;
  let response_code;

  try {
    data = await getDetailData(req.params.id);
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function ctrlUpdate(req, res, next) {
  let message;
  let data;
  let response_code;

  try {
    data = await updateData(
      req.params.id,
      req.body.name,
      req.body.price,
      req.body.stock
    );

    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function ctrlDelete(req, res, next) {
  let message;
  let data;
  let response_code;

  try {
    data = await deleteData(req.params.id);
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function ctrlUpdateStock(req, res, next) {
  let message;
  let data;
  let response_code;

  try {
    data = await updateStock(req.params.id, req.body.stock);
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}
