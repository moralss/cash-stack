const {
  getClient
} = require("../db");

const creatUser = async data => {
  const client = await getClient();

  try {
    const {
      email,
      firstName,
      lastName,
      contact,
      hashedPassword,
      refNumber
    } = data;

    const parameters = [email, firstName, lastName, hashedPassword, contact,
      refNumber
    ];

    let statement =
      `INSERT INTO users(email,first_name,last_name,hashed_password,contact , ref_number)
     VALUES($1 , $2 , $3 , $4 , $5 , $6) RETURNING id`;
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
  creatUser
};