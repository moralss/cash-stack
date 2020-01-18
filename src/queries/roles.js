const {
    getClient
} = require("../db");

const getRole = async userId => {
    const client = await getClient();
    let statement = `SELECT user_role FROM roles WHERE user_id = $1`;
    const res = await client.query(statement, [userId]);

    try {
        await client.release();
        return res.rows[0];
    } catch (e) {
        await client.release();
        return;
    }
};

module.exports = {
    getRole
};

