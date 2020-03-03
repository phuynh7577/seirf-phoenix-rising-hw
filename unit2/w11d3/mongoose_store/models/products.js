const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0}
});

const products = mongoose.model('products', productsSchema);

module.exports = products;