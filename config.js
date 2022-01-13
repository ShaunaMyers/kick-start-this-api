require('dotenv').config()
const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  var db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  db.connect()
} else {
  var db = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  })
}

module.exports = { db };