var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {
        type: String,
        required: true
    },
    imagesPaths: {
        type: [],
        required: false
    }
});

module.exports = mongoose.model('gallery', schema);
