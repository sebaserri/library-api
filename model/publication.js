const Author = require('./author');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    authors: [{
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }]
});

module.exports = mongoose.model('Publication', PublicationSchema);