const {
    getClient
} = require("../db");

const getReceipt = async userId => {
    const client = await getClient();

    try {
        let statement =
            `select * from receipts where receipts.user_id = $1;`;
        const res = await client.query(statement, [userId]);
        await client.release();
        return res.rows;
    } catch (e) {
        await client.release();
        return;
    }
};

module.exports = {
    getReceipt
};