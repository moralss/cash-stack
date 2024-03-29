const {
    getClient
} = require("../db");

const saveAccountInfo = async data => {
    const client = await getClient();
    try {
        const {
            userId,
            accountName,
            accountNumber
        } = data;

        const parameters = [userId, accountName, accountNumber];
        let statement =
            `INSERT INTO account_info(user_id , account_name , account_number)
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
    saveAccountInfo
};