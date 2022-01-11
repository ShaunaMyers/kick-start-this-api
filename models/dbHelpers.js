const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

async function getAllProducts() {
    return await db('products');
}

async function addProduct(product) {
    await db('products').insert(product);
}

async function updateFundsRaised(id, amount) {
    await db('products').where({ "product_id": parseInt(id) })
    .update('funds_raised', parseInt(amount))
}

async function removeProduct(id) {
    return await db('products').where({ "product_id": parseInt(id) })
    .del()
}

module.exports = {
    getAllProducts,
    addProduct,
    removeProduct,
    updateFundsRaised
}