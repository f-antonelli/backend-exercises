const express = require('express');
const { check } = require('express-validator');
const { signup, login } = require('../controllers/users.controller');

const router = express.Router();

router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  signup,
);

router.post('/login', login);

module.exports = router;
