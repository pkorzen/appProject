var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   title: {
       type: String,
       required: true
   },
   shortDesc: {
       type: String,
       required: true
   },
   content: {
        type: String,
        required: true
    },
    mainImagePath: {
        type: String,
        required: true
    },
    images: {
        type: [],
        required: false
    },
    visitors: {
      type: Number,
      required: false
    },
    time: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('blogPost', schema);
