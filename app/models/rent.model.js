const mongoose = require('mongoose');
const rentSchema = mongoose.Schema({
    Name: String,
    Surname: String
});

module.exports = mongoose.model('RentUsers', rentSchema);