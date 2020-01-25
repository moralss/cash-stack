const {
    getClient
} = require("../db");

const savePersonalInfo = async (data, userId) => {
    const client = await getClient();

    try {
        const {
            city,
            sex,
            dateOfBirth,
            contact,
        } = data;

        const parameters = [userId, contact, dateOfBirth, sex, city];

        let statement =
            `INSERT INTO personal_info(user_id, contact , date_of_birth , sex , city)
     VALUES($1 , $2 , $3 , $4 , $5) RETURNING id`;
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
    savePersonalInfo
};