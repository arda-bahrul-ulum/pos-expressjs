import { dbPool } from "../utils/dbcon.js";

async function create(username, pass) {
  try {
    let query = "INSERT INTO users (username,password) values (?,?)";
    const [result] = await dbPool.query(query, [username, pass]);

    return result.affectedRows;
  } catch (error) {
    throw error;
  }
}

export { create };
