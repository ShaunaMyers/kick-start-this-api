const router = require('express').Router();
const Products = require('./model');

router.get('/', async (req, res) => {
    const products = await Products.findAll()
    res.json(products)
})

module.exports = router;