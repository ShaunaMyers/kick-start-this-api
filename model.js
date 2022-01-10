const db = require('./data/db-config');

const findAll = () => {
    return db('products')
}

module.exports = {
    findAll
}