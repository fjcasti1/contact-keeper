const express = require('express');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// @route     POST /api/users
// @desc      Register a user
// @access    Public
router.post(
  '/',
  [
    check('name', 'Please add a name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must have at least 6 characters').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Register a user');
  },
);

module.exports = router;
