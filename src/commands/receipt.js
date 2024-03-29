const { getClient } = require("../db");

const saveReceipt = async data => {
    const client = await getClient();

    try {
        console.log("data", data);
        const { userId, receiptUrl } = data;

        const parameters = [receiptUrl, userId, 1, false];

        let statement =
            `INSERT INTO receipts(image_url , user_id , stage ,  active )
     VALUES($1 , $2 , $3 , $4) RETURNING id`;
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