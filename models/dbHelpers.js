const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

// get

// add

async function addProduct(product) {
    await db('products').insert(product);
}
// patch

// delete

module.exports = {
    addProduct
}