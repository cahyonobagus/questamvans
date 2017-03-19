'use strict'
const mongoose = require('mongoose');

let answerSchema = mongoose.Schema({
  author: {
    type: String,
    ref: 'User',
  },
  content: {
    type: String,
    required: true
  },
  upvotes: [{type: String, ref: User}],
  downvotes: [{type: String, ref: User}]
}, {
  timestamps: true
})

module.exports = answerSchema;
