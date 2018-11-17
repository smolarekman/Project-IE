const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    Brand: String,
    Model: String,
    Price: Number,
    Current_Con:Boolean
});

module.exports = mongoose.model('ProductSchema', productSchema);