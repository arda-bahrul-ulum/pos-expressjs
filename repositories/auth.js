import { dbPool } from "../utils/dbcon.js";

async function findUser(username) {
  try {
    let query = "SELECT * FROM users where username = '" + username + "'";
    const [result] = await dbPool.query(query);

    if (result.length > 0) {
      return result[0];
    }
  } catch (error) {
    throw error;
  }
}

export { findUser };
