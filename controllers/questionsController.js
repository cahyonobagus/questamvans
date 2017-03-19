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
  }, (err, newQuestion) => {
    if (err) {
      res.send(err);
    } else {
      res.send(newQuestion);
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

let getOne = (req, res) => {
  Question.findOne({
    _id: req.params.id
  })
  .populate('author')
  .exec((err, question) => {
    if (err) {
      res.send(err);
    } else {
      res.send(question);
    }
  })
}

let update = (req, res) => {
  Question.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  },
  (err, updatedQuestion) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedQuestion);
    }
  })
}

let destroy = (req, res) => {
  Question.remove({
    _id: req.params.id
  }, (err, deleted) => {
    if (err) {
      res.send(err);
    } else {
      res.send(deleted);
    }
  })
}

module.exports = {
  post,
  getAll,
  getOne,
  update,
  destroy
}
