const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());
// app.use(express.json());

const isProduction = process.env.NODE_ENV === 'production'

const origin = {
  origin: isProduction ? 'https://kickstart-this-api.herokuapp.com/' : '*',
}

app.use(cors(origin))

app.get('/', (req, res) => {
    pool.query('SELECT * FROM products', (err, response) => {
      console.log(err, response)
      err
      ? res.status(500).send('Database Error')
      : res.status(200).send({rows: response.rows})
    })
})

app.post('/products', (req, res) => {
    const reqParams = ['title', 'description', 'funds_goal', 'images', 'creator_name', 'creator_email'];
    let error = false;
    reqParams.forEach((param, index) => {

      if (!req.body[param]) {
        res.status(422).send('Please send all required data');
        error = true;
      } else if (index === 5 && !error) {
        const { title, description, funds_goal, funds_raised, images, creator_name, creator_email } = req.body;

        pool.query(`INSERT INTO products (title, description, funds_goal, funds_raised, images, creator_name, creator_email) VALUES ('${title}', '${description}', ${funds_goal}, ${funds_raised}, '${images}', '${creator_name}', '${creator_email}')`,
        (err, response) => {
          console.log('this is error', err, response)
          err 
          ? res.status(500).send('Database Error')
          : res.status(200).send({ title, description, funds_goal, funds_raised, images, creator_name, creator_email })
        })
      }
    })
})

app.patch('/products/:id', (req, res) => {
    const { id } = req.params;
    const { funds_raised } = req.body
    pool.query(`UPDATE products SET funds_raised =${funds_raised} WHERE id=${id} RETURNING *`,
    (err, response) => {
      console.log(err, response)
      err 
      ? res.status(500).send('Database Error')
      : res.status(200).send('Funds_raised successfully updated')
    })
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM products WHERE id = ${id}`, 
    (err, response) => {
      console.log(err, response)
      err 
      ? res.status(500).send('Database Error')
      : res.status(200).send('Product successfully deleted')
    })
})

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})