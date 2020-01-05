const {
    getClient
} = require("../db");


const saveRole = async data => {
    const client = await getClient();

    try {
        console.log("data", data);
        const { role, userId } = data;

        const parameters = [role, userId];

        let statement =
            `INSERT INTO roles(user_role , user_id )
     VALUES($1 , $2 ) RETURNING id`;
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
    saveRole
};