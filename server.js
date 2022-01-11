require('dotenv').config();
const express = require('express');
const app = express();
const { response } = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const queries = require('./models/dbHelpers');

app.get('/products', (req, res) => {
  queries.getAllProducts()
  .then(product => {
    res.status(200).send(product)
  })
  .catch(error => {
    res.status(500).send({ message: 'Database error fetching all products' })
  })
});

app.post('/products', (req, res) => {
  queries.addProduct(req.body)
  .then(product => {
    res.status(200).send(product)
  })
  .catch(error => {
    res.status(422).send({ message: 'Bad request' })
    res.status(500).send({ message: 'Database error creating a product' })
  })
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  queries.removeProduct(id)
  .then(count => {
    if (count > 0) {
      res.status(200).send({ message: "Successfully delelted" })
    } else {
      res.status(404).send({ message: 'Unable to locate product' })
    }
  })
  .catch(error => {
    res.status(500).send(error.message)
  })
});

app.patch('/products/:id/:amount', (req, res) => {
  const { id, amount } = req.params;

  queries.updateFundsRaised(id, amount)
  .then(product => {
    res.status(200).send({ message: 'Product successfully updated'})
  })
  .catch(error => {
    res.status(500).send({ message: 'Unable to update product'})
  })
})

app.locals.title = "Kickstart This API"

app.listen(port, () => {
    console.log(`${app.locals.title} is running on port ${port}.`)
})