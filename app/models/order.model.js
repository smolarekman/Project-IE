const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    User_ID: String,
    Product_ID: String
});

module.exports = mongoose.model('OrderSchema', orderSchema);