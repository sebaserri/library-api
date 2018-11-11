const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birth: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Author', AuthorSchema);