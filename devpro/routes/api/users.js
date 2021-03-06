const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// load user modal
const User = require('../../models/User');
// @route GET api/users/test
// @desc  Tests users route
// access Public

router.get('/test', (req, res) => {
  res.json({ msg: 'Users works' });
});

// @route GET api/users/register
// @desc  Register users
// @access Public

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email already exist!' });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        });
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar: avatar,
          password: req.body.password
        });
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) {
              throw error;
            }
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => {
                console.log(err);
              });
          });
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
});

// @route GET api/users/login
// @desc  Login users // Returning JWT token
// @access Public

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: 'User not found.' });
    }
    //check the password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // user match then creating JWT payload
        const payload = { id: user.id, name: user.name, avatar: user.avatar };
        // Sign token
        JWT.sign(payload, keys.secret, { expiresIn: 3600 }, (error, token) => {
          return res.json({ success: true, token: 'Bearer' + token });
        });
      } else {
        res.status(400).json({ password: 'Password incorrect' });
      }
    });
  });
});

// @route GET api/users/current
// @desc  Return current users
// @access Private

router.get(
  '/current',
  passport.authenticate('JWT', { success: false }),
  (req, res) => {
    res.json;
  }
);

module.exports = router;
