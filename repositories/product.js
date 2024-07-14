import { dbPool } from "../utils/dbcon.js";

async function createData(name, price, stock) {
  try {
    let query =
      "INSERT INTO products (name, price, stock) values ('" +
      name +
      "', " +
      price +
      ", " +
      stock +
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
    let query = "SELECT * FROM products";
    const [result] = await dbPool.query(query);

    return result;
  } catch (error) {
    throw error;
  }
}

async function getDetailData(id) {
  try {
    let query = "SELECT * FROM products WHERE id = " + id;
    const [result] = await dbPool.query(query);

    if (result.length < 0) {
      return null;
    }

    return result[0];
  } catch (error) {
    throw error;
  }
}

async function updateData(id, name, price, stock) {
  try {
    let query =
      "UPDATE products SET name = '" +
      name +
      "', price = " +
      price +
      ", stock = " +
      stock +
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
    let query = "DELETE FROM products WHERE id = " + id;
    const [result] = await dbPool.query(query);

    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

async function updateStock(id, stock) {
  try {
    let query = "UPDATE products SET stock = " + stock + " WHERE id = " + id;
    const [result] = await dbPool.query(query);

    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

async function reduceProduct(id, quantity) {
  try {
    const getProduct = await getDetailData(id);
    let stock = getProduct.stock;

    if (getProduct === null) {
      throw new Error("Product tidak ditemukan");
    }

    if (stock < quantity) {
      throw new Error("Stock tidak memadai");
    }

    const newStock = stock - quantity;

    let query = "UPDATE products SET stock = " + newStock + " WHERE id = " + id;
    const [result] = await dbPool.query(query);

    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

export {
  createData,
  getAllData,
  getDetailData,
  updateData,
  deleteData,
  updateStock,
  reduceProduct,
};
