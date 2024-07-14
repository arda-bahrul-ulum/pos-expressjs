import {
  createData,
  getAllData,
  getDetailData,
  updateData,
  deleteData,
} from "../repositories/sales.js";
import { reduceProduct } from "../repositories/product.js";
import { responseTemplate } from "../utils/response.js";

export async function ctrlCreate(req, res, next) {
  let message;
  let data;
  let response_code;

  try {
    data = await createData(req.body.product_id, req.body.quantity);
    await reduceProduct(req.body.product_id, req.body.quantity);

    response_code = 200;
    message = "success";
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
      req.body.product_id,
      req.body.quantity
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
