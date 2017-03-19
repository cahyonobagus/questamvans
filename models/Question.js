'use strict'
const mongoose = require('mongoose');
const answerSchema = require('./Answer');

let questionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    ref: 'User',
    required: true
  },
  answers: [answerSchema],
  upvotes: [{type: String, ref: User}],
  downvotes: [{type: String, ref: User}]
}, {
  timestamps: true
});

let Question = mongoose.model('Question', questionSchema);

module.exports = Question;
