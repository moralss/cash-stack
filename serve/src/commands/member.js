const {
  getClient
} = require("../db");

const saveMember = async data => {
  const client = await getClient();

  try {
    const {
      userId,
      pioneerId,
      ref_number
    } = data;
    console.log(data.pioneerRefs);

    const parameters = [ref_number, pioneerId, userId];

    let statement =
      `INSERT INTO memeber(pioneerRefs, user_id , memeber_id)
     VALUES($1 , $2 , $3) RETURNING id`;
    let res = await client.query(statement, parameters);
    const id = res.rows[0].id;
    await client.release();
    return id;
  } catch (e) {
    console.log(e);
    await client.release();
    return;
  }
};

module.exports = {
  saveMember
};