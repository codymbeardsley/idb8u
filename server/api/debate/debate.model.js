'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DebateSchema = new Schema({
  topic: String,
  description: String,
  active: {type: Boolean, default: true},
  participants: [{type: Schema.Types.ObjectId, ref: 'Participant'}],
  videos: [{video: {type: Schema.Types.ObjectId, ref: 'Video'}}]
});

module.exports = mongoose.model('Debate', DebateSchema);