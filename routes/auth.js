'use strict'
const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

/* GET home page. */
router.post('/login', auth.login);

router.post('/register', auth.register)

module.exports = router;
