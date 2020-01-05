const {
    getClient
} = require("../db");

const changePassword = async (hashedPassword, userId) => {
    const client = await getClient();

    try {

        const parameters = [hashedPassword, userId];

        let statement = `UPDATE users
        SET hashed_password = $1 WHERE id = $2;`
        let res = await client.query(statement, parameters);
        const id = res.rows[0];
        await client.release();
        return id;
    } catch (e) {
        console.log(e);
        await client.release();
        return;
    }
};

module.exports = {
    changePassword
}