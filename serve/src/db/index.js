require('dotenv').config()

const { Pool } = require('pg')


const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database: 'cash_stack',
    password: 'Moral007',
})

//YOU CANNOT DO THIS IN A REAL PROJECT!!! IT NEEDS TO BE IN SOMETHING LIKE ENV
const getClient = async () => {
    const client = await pool.connect()
    return client
}

module.exports = {
    getClient
}