'use strict';

var _ = require('lodash');
var Debate = require('./debate.model');

// Get list of debates
exports.index = function(req, res) {
  Debate.find(function (err, debates) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(debates);
  });
};

// Get a single debate
exports.show = function(req, res) {
  Debate.findById(req.params.id, function (err, debate) {
    if(err) { return handleError(res, err); }
    if(!debate) { return res.status(404).send('Not Found'); }
    return res.json(debate);
  });
};

// Creates a new debate in the DB.
exports.create = function(req, res) {
  Debate.create(req.body, function(err, debate) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(debate);
  });
};

// Updates an existing debate in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Debate.findById(req.params.id, function (err, debate) {
    if (err) { return handleError(res, err); }
    if(!debate) { return res.status(404).send('Not Found'); }
    var updated = _.merge(debate, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(debate);
    });
  });
};

// Deletes a debate from the DB.
exports.destroy = function(req, res) {
  Debate.findById(req.params.id, function (err, debate) {
    if(err) { return handleError(res, err); }
    if(!debate) { return res.status(404).send('Not Found'); }
    debate.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}