const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

// get

// add

async function getAllProducts() {
    return await db('products');
}

async function addProduct(product) {
    await db('products').insert(product);
}
// patch

// delete

module.exports = {
    addProduct,
    getAllProducts
}