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
          "endpoint": "/api/users/:username",
          "method": "GET"
        },
        "edit_profile": {
          "endpoint": "/api/users/:username",
          "method": "PUT"
        },
        "delete_account": {
          "endpoint": "/api/users/:username",
          "method": "DELETE"
        },
        "list_of_user_questions" : {
          "endpoint": "/api/users/:username/questions",
          "method": "GET"
        },
        "list_of_user_answers": {
          "endpoint": "/api/users/:username/answers",
          "method": "GET"
        }
      },
      "questions" : {
        "questions_list": {
          "endpoint": "/api/questions",
          "method": "GET"
        },
        "questions_details": {
          "endpoint": "/api/questions/:slug",
          "method": "GET"
        },
        "post_a_question": {
          "endpoint": "/api/questions",
          "method": "POST"
        },
        "edit_a_question": {
          "endpoint": "/api/questions/:slug",
          "method": "PUT"
        },
        "delete_a_question": {
          "endpoint": "/api/questions/:slug",
          "method": "DELETE"
        },
        "upvote_question": {
          "endpoint": "/api/questions/:slug/up",
          "method": "PUT"
        },
        "downvote_question": {
          "endpoint": "/api/questions/:slug/down",
          "method": "PUT"
        },
        "answers" : {
          "answer_of_a_question_list": {
            "endpoint": "/api/questions/:slug/answers",
            "method": "GET"
          },
          "detail_answer_of_a_question_list": {
            "endpoint": "/api/questions/:slug/answers/:answer_id",
            "method": "GET"
          },
          "post_an_answer": {
            "endpoint": "/api/questions/:slug/answers",
            "method": "POST"
          },
          "edit_an_answer_of_a_question": {
            "endpoint": "/api/questions/:slug/answers/:answer_id",
            "method": "PUT"
          },
          "delete_answer_of_a_question": {
            "endpoint": "/api/questions/:slug/answers/:answer_id",
            "method": "DELETE"
          },
          "upvote_answer": {
            "endpoint": "/api/questions/:slug/answers/:answer_id/up",
            "method": "PUT"
          },
          "downvote_answer": {
            "endpoint": "/api/questions/:slug/answers/:answer_id/down",
            "method": "PUT"
          }
        }
      }
    }
  });
});

module.exports = router;
