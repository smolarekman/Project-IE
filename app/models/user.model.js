const mongoose = require('mongoose');

const userrSchema = mongoose.Schema({
    name: String,
    surname: {
        type: String
    }
});

module.exports = mongoose.model('User1', userrSchema);