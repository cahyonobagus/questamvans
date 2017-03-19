'use strict'
const Question = require('../models/Question');

let createQuestion = (req, res) => {
  Question.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    answers: [],
    upvotes: [],
    downvotes: []
  }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports = {
  createQuestion
}
