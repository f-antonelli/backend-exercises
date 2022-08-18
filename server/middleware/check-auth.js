const HttpError = require("../models/http-error");

let admin = true;

module.exports = (req, res, next) => {
  if (admin) {
    return next();
  } else {
    const error = new HttpError('Authentication failed!', 404);
    return next(error);
  }
};
