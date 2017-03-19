'use strict'
const express = require('express');
const router = express.Router();
const questions = require('../controllers/questionsController');

/* GET home page. */
router.post('/', questions.post);
router.get('/', questions.getAll);
router.get('/:id', questions.getOne);
router.put('/:id', questions.update);
router.delete('/:id', questions.destroy);

module.exports = router;
