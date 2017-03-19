'use strict'
const express = require('express');
const router = express.Router();
const questions = require('../controllers/questionsController');

/* GET home page. */
router.post('/', questions.post);
router.get('/', questions.getAll);

module.exports = router;
