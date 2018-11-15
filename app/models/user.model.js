const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    Name: {type: String},
    Surname: {type: String}
});

module.exports = mongoose.model('RentUsers', userSchema);