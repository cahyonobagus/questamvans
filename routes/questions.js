'use strict'
const express = require('express');
const router = express.Router();
const questions = require('../controllers/questionsController');

/* API answers of questions */
router.post('/:id/answers', questions.postAnswer);
router.get('/:id/answers', questions.getAnswers);
router.get('/:id/answers/:answerId', questions.getAnswerDetail);

/* API questions. */
router.post('/', questions.post);
router.get('/', questions.getAll);
router.get('/:id', questions.getOne);
router.put('/:id', questions.update);
router.delete('/:id', questions.destroy);



module.exports = router;
