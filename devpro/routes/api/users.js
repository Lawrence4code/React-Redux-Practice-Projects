const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

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

module.exports = router;
