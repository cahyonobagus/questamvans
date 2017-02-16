'use strict'
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true;
  },
  email: {
    type: String,
    required: true;
  },
  username: {
    type: String,
    required: true;
  },
  password: {
    type: String,
    required: true;
  }
});

usersSchema.plugin(passportLocalMongoose)
let user = mongoose.model('user', userSchema);

module.exports = user;