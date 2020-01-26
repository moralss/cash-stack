const {
    getClient
} = require("../db");

const getAccountInfo = async userId => {
    const client = await getClient();

    try {
        let statement = `select  * from  account_info where user_id = $1;`;
        const res = await client.query(statement, [userId]);
        await client.release();
        return res.rows;
    } catch (e) {
        await client.release();
        return;
    }
};

module.exports = {
    getAccountInfo,
};