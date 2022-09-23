const express = require('express');
const { check } = require('express-validator');
const { signup } = require('../controllers/users.controller');

const router = express.Router();

router.get('/');

router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  signup,
);

router.post('/login');

module.exports = router;
