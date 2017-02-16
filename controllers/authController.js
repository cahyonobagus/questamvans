const passport = require('passport');
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
require('dotenv').config()

let register = (req, res, next) => {
  User.register({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username
  }, req.body.password, (err, user) => {
    if (err) {
      res.send({ alert: 'Oh, snap! Your regisration was unsuccessfull!'})
    } else {
      res.json({
        "message" : "Your registration was successed! You can use your username and password to login"
      })
      // passport.authenticate('local')(req, res, function () {
      //   res.status(200).json(user);
      // })
    }
  })
}

let login = (req, res, next) => {
  passport.authenticate('local', {}, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      const token = jwt.sign({
        username: user.username,
        id: user._id,
        name: user.name,
        email: user.email
      }, process.env.SECRET , {expiresIn : '1d'});
      res.json({
        token: token
      })
    }
  })(req, res, next)
}

module.exports = {
  register,
  login
}
