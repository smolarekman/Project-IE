const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    Name: String,
    Surname: String
});

module.exports = mongoose.model('Note', NoteSchema);