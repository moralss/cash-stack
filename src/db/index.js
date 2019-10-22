// require('dotenv').config()

const {
  Pool
} = require('pg')


const env = process.env.NODE_ENV || 'development';
let connectionString;

// checking to know the environment and suitable connection string to use
if (env === 'development') {
  connectionString = {
    user: 'postgres',
    host: 'localhost',
    database: 'cash_stack',
    password: 'Moral007',
  }
}

if (env === "production") {
  connectionString = process.env.DATABASE_URL
};


const pool = new Pool({
  connectionString: connectionString,
})

console.log(pool);
//YOU CANNOT DO THIS IN A REAL PROJECT!!! IT NEEDS TO BE IN SOMETHING LIKE ENV
const getClient = async () => {
  const client = await pool.connect()
  return client
}

module.exports = {
  getClient
}