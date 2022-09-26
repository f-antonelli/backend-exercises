require('dotenv').config({path: './src/.env'});
const jwt = require('jsonwebtoken');
const HttpError = require('../utils/HttpError');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      // throw new Error('Authentication failed!');
      res.redirect('/login')
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError('Authentication failed!', 403);
    return next(error);
  }
};
