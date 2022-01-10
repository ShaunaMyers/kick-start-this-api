require('dotenv').config();
const express = require('express');
const app = express();
const { response } = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
// const { Pool } = require('pg');

// const pool = require("./db");
// app.set('port', process.env.PORT || 3000);

// const pool = new Pool({
//     connectionString: 'postgres://voyiocnzqqozfy:e110e2aa7bd50865163ad047f9f5e2640feca01c42e17a223e11bd886c9f8356@ec2-54-196-105-177.compute-1.amazonaws.com:5432/d23r69ghqcp19c',
//     ssl: { rejectUnauthorized: false }
// });

app.get('/', (req, res) => {
    // pool.query('SELECT * FROM products', (err, response) => {
    //   console.log(err, response)
    //   err
    //   ? res.status(500).send('Database Error')
    //   : res.status(200).send({rows: response.rows})
    // })

    res.send('<h1>Testing, testing</h1>')
})

// app.post('/products', (req, res) => {
//     const reqParams = ['title', 'description', 'funds_goal', 'images', 'creator_name', 'creator_email'];
//     let error = false;
//     reqParams.forEach((param, index) => {

//       if (!req.body[param]) {
//         res.status(422).send('Please send all required data');
//         error = true;
//       } else if (index === 5 && !error) {
//         const { title, description, funds_goal, funds_raised, images, creator_name, creator_email } = req.body;

//         pool.query(`INSERT INTO products (title, description, funds_goal, funds_raised, images, creator_name, creator_email) VALUES ('${title}', '${description}', ${funds_goal}, ${funds_raised}, '${images}', '${creator_name}', '${creator_email}')`,
//         (err, response) => {
//           console.log('this is error', err, response)
//           err 
//           ? res.status(500).send('Database Error')
//           : res.status(200).send({ title, description, funds_goal, funds_raised, images, creator_name, creator_email })
//         })
//       }
//     })
// })

// app.patch('/products/:id', (req, res) => {
//     const { id } = req.params;
//     const { funds_raised } = req.body
//     pool.query(`UPDATE products SET funds_raised =${funds_raised} WHERE id=${id} RETURNING *`,
//     (err, response) => {
//       console.log(err, response)
//       err 
//       ? res.status(500).send('Database Error')
//       : res.status(200).send('Funds_raised successfully updated')
//     })
// })

// app.delete('/products/:id', (req, res) => {
//     const { id } = req.params;
//     pool.query(`DELETE FROM products WHERE id = ${id}`, 
//     (err, response) => {
//       console.log(err, response)
//       err 
//       ? res.status(500).send('Database Error')
//       : res.status(200).send('Product successfully deleted')
//     })
// })

app.locals.title = "Kickstart This API"

// app.listen(app.get('port'), () => {
//     console.log(`${app.locals.title} is running on port ${app.get('port')}.`)
// })

app.listen(port, () => {
    console.log(`${app.locals.title} is running on port ${port}.`)
})