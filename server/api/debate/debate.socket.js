/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Debate = require('./debate.model');

exports.register = function(socket) {
  Debate.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Debate.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('debate:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('debate:remove', doc);
}