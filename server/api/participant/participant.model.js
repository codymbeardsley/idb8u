'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ParticipantSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('Participant', ParticipantSchema);