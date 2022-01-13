const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { db } = require('./config')
app.set('port', process.env.PORT || 3002)
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, response) => {
      console.log(err, response)
      err
      ? res.status(500).send(`Database error: ${err.message}`)
      : res.status(200).send({rows: response.rows})
    })
})

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  db.query(`SELECT * FROM products WHERE product_id = ${id}`, (err, response) => {
    console.log(err, response)
      err
      ? res.status(500).send(`Database error: ${err.message}`)
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

        db.query(`INSERT INTO products (title, description, funds_goal, funds_raised, images, creator_name, creator_email) VALUES ('${title}', '${description}', ${funds_goal}, ${funds_raised}, '${images}', '${creator_name}', '${creator_email}')`,
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
    db.query(`UPDATE products SET funds_raised =${funds_raised} WHERE id=${id} RETURNING *`,
    (err, response) => {
      console.log(err, response)
      err 
      ? res.status(500).send('Database Error')
      : res.status(200).send('Funds_raised successfully updated')
    })
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    db.query(`DELETE FROM products WHERE id = ${id}`, 
    (err, response) => {
      console.log(err, response)
      err 
      ? res.status(500).send('Database Error')
      : res.status(200).send('Product successfully deleted')
    })
})

app.listen(app.get('port'), () => {
  console.log(`Server listening on ${app.get('port')}`)
})