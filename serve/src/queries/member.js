const {
  getClient
} = require("../db");

const getAllMembers = async userId => {
  const client = await getClient();

  try {
    let statement =
      `select users.id, users.email, users.first_name from users inner join memeber on 
    memeber.memeber_id = users.id where memeber.user_id = $1;`;
    const res = await client.query(statement, [userId]);
    await client.release();
    return res.rows;
  } catch (e) {
    await client.release();
    return;
  }
};

module.exports = {
  getAllMembers
};