const express = require('express');
const router = express.Router();

// @route GET api/prifile/test
// @desc  Tests prifile route
// access Public

router.get('/test', (req, res) => {
  res.json({ msg: 'Profile works' });
});

module.exports = router;
