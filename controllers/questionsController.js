'use strict'
const Question = require('../models/Question');

let post = (req, res) => {
  Question.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    answers: [],
    upvotes: [],
    downvotes: []
  }, (err, question) => {
    if (err) {
      res.send(err);
    } else {
      res.send(question);
    }
  })
}

let getAll = (req, res) => {
  Question.find({}, (err, questions) => {
    if (err) {
      res.send(err)
    } else {
      res.send(questions)
    }
  })
}

module.exports = {
  post,
  getAll
}
