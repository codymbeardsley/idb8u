'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  url: String,
  userRef: ({type: Schema.Types.ObjectId, ref: 'User'}),
});

module.exports = mongoose.model('Video', VideoSchema);