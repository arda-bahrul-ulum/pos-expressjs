import { dbPool } from "../utils/dbcon.js";

async function createData(product_id, quantity) {
  try {
    let query =
      "INSERT INTO sales (product_id, quantity) values (" +
      product_id +
      ", " +
      quantity +
      ")";

    const [result] = await dbPool.query(query);

    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

async function getAllData() {
  try {
    let query =
      "SELECT s.*, p.name FROM sales as s INNER JOIN products as p ON s.product_id = p.id";
    const [result] = await dbPool.query(query);

    return result;
  } catch (error) {
    throw error;
  }
}

async function getDetailData(id) {
  try {
    let query =
      "SELECT s.*, p.name FROM sales as s INNER JOIN products as p ON s.product_id = p.id WHERE s.id = " +
      id;
    const [result] = await dbPool.query(query);

    return result;
  } catch (error) {
    throw error;
  }
}

async function updateData(id, product_id, quantity) {
  try {
    let query =
      "UPDATE sales SET product_id = " +
      product_id +
      ", quantity = " +
      quantity +
      " WHERE id = " +
      id;
    const [result] = await dbPool.query(query);

    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

async function deleteData(id) {
  try {
    let query = "DELETE FROM sales WHERE id = " + id;
    const [result] = await dbPool.query(query);

    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

export { createData, getAllData, getDetailData, updateData, deleteData };
