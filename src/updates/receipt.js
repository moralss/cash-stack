const {
    getClient
} = require("../db");

const updateRecipt = async data => {
    const client = await getClient();

    try {
        const {
            stage,
            active,
            userId
        } = data;

        const parameters = [stage, active, userId];

        let statement = `UPDATE receipts
        SET stage = $1, active = $2 WHERE user_id = $3 RETURNING id`

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

const updateStage = async data => {
    const client = await getClient();

    try {
        const {
            stage,
            userId
        } = data;

        const parameters = [stage, Number(userId)];
        console.log(parameters)
        let statement = `UPDATE receipts
            set stage = $1 WHERE user_id = $2;`

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
    updateRecipt,
    updateStage
};