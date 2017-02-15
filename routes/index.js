'use strict'
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({
    "index": "QuesTamvans - API End points",
    "endpoints": {
      "users" : {
        "register" : {
          "endpoint": "/auth/register",
          "method": "POST"
        },
        "login": {
          "endpoint": "/auth/login",
          "method": "POST"
        },
        "users_list" : {
          "endpoint": "/api/users",
          "method": "GET"
        },
        "user_details": {
          "endpoint": "/api/user/:username",
          "method": "GET"
        },
        "edit_profile": {
          "endpoint": "/api/user/:username",
          "method": "PUT"
        },
        "delete_account": {
          "endpoint": "/api/user/:username",
          "method": "DELETE"
        },
        "list_of_user_questions" : {
          "endpoint": "/api/user/:username/questions",
          "method": "GET"
        },
        "list_of_user_answers": {
          "endpoint": "/api/user/:username/answers",
          "method": "GET"
        }
      }
    }
  });
});

module.exports = router;
