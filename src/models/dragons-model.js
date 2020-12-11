'use strict';

const mongoose = require('mongoose');

// 1. make a schema
const dragonSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: {type: Number, required: true},
  color: { type: String, required: true, enum: ['Red', 'Green', 'Blue', 'White', 'Black']},
});

// 2. export this schema as a model
const dragonModel = mongoose.model('dragons', dragonSchema);

module.exports = dragonModel;