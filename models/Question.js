'use strict'
const mongoose = require('mongoose');
const answerSchema = require('./Answer');
const Schema = mongoose.Schema;

let questionSchema = Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answers: [answerSchema],
  upvotes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  downvotes: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true
});

let Question = mongoose.model('Question', questionSchema);

module.exports = Question;
