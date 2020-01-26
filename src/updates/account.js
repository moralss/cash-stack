const {
    getClient
} = require("../db");

const updateAccountInfo = async (accountInfo) => {
    const client = await getClient();

    const { accountName, accountNumber, userId } = accountInfo;

    try {


        const parameters = [accountName, accountNumber, Number(userId)];
        console.log(parameters);
        let statement = `UPDATE account_info SET account_name = $1 , account_number = $2 WHERE user_id = $3;`
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
    updateAccountInfo
}