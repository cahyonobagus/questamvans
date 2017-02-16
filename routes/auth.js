'use strict'
const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/login', (req, res, next) => {
  res.send('Login');
});

router.post('/register', (req, res, next) => {
  res.send('Register')
})

module.exports = router;
