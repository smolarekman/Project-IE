const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    Brand: String,
    Model: String,
    Price: Number
});

module.exports = mongoose.model('ProductSchema', productSchema);