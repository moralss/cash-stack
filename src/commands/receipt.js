const { getClient } = require("../db");

const saveReceipt = async data => {
    const client = await getClient();

    try {
        console.log("data", data);
        const { userId, receiptUrl } = data;

        const parameters = [receiptUrl, userId, false];


        let statement =
            `INSERT INTO receipts(image_url , user_id , active)
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
    saveReceipt
};