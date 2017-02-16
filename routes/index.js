'use strict'
const express = require('express');
const router = express.Router();
const endposintsJSON = require('../data/endpoints.json');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send(endposintsJSON);
});

module.exports = router;
