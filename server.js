const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");

app.use(cors());
app.use(express.json());

// Routes

app.get('/', (req, res) => {
    pool.query('SELECT * FROM products', (err, response) => {
      console.log(err, response)
      err
      ? res.status(500).send('Database Error')
      : res.status(200).send({rows: response.rows})
    })
})

// Create a product

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

// Get all products


// Update funding on project

// Delete product

app.listen(3000, () => {
    console.log('Server has started on port 3000')
})