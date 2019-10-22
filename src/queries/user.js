const {
  getClient
} = require("../db");

const getUserByEmail = async email => {
  const client = await getClient();
  let statement = `SELECT * FROM users WHERE  email = $1`;
  const res = await client.query(statement, [email]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return;
  }
};


const compareRefNumber = async refNumer => {
  const client = await getClient();
  let statement = `SELECT * FROM users WHERE  ref_number = $1`;
  const res = await client.query(statement, [refNumer]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return;
  }
};


const getRefs = async email => {
  const client = await getClient();
  let statement = `SELECT * FROM users WHERE  email = $1`;
  const res = await client.query(statement, [email]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return;
  }
};



module.exports = {
  getUserByEmail,
  compareRefNumber,
  getRefs
};