require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?sslmode=disable`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: process.env.DATABASE_URL ? true : false
})

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL || 'postgresql://postgres:<your admin password>@localhost:5432/<your db name>',
//     ssl: process.env.DATABASE_URL ? true : false
// })

module.exports = { pool }

// require('dotenv').config();

// const { Pool } = require('pg')

// const pool = (() => {
//     if (process.env.NODE_ENV !== 'production') {
//         return new Pool({
//             connectionString: process.env.DATABASE_URL,
//             ssl: false
//         });
//     } else {
//         return new Pool({
//             connectionString: process.env.DATABASE_URL,
//             ssl: {
//                 rejectUnauthorized: false
//               }
//         });
//     } })();

// module.exports = { pool }

