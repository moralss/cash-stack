// require('dotenv').config()

const {
  Pool
} = require('pg')


const env = process.env.NODE_ENV || 'development';
let pool;

let connectionString = {
  user: secrets.user,
  database: secrets.testDb,
  host: secrets.host
};

// checking to know the environment and suitable connection string to use
if (env === 'development') {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cash-stack',
    password: 'Moral007',
  })
}
if (env === "production") {
  pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.HOST,
    database: process.env.DATABASE_URL,
    password: PG_PASSWORD,
  })
};


//YOU CANNOT DO THIS IN A REAL PROJECT!!! IT NEEDS TO BE IN SOMETHING LIKE ENV
const getClient = async () => {
  const client = await pool.connect()
  return client
}

module.exports = {
  getClient
}