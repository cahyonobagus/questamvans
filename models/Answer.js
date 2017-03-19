'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let answerSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    required: true
  },
  upvotes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  downvotes: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true
})

module.exports = answerSchema;
