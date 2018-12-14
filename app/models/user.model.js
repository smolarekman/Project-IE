const mongoose = require('mongoose');

const userrSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    surname: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('User1', userrSchema);