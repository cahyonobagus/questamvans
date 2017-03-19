'use strict'
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  }
});

userSchema.plugin(passportLocalMongoose)
let User = mongoose.model('User', userSchema);

module.exports = User;
