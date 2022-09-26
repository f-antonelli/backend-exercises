const MongoDB = require('../../models/MongoDB');
const connection = require('../../database/mongoDB');
const UserSchema = require('../../schemas/User');

class DAOMongoDB extends MongoDB {
  constructor() {
    super('users', UserSchema);

    connection();
  }
}

module.exports = DAOMongoDB;
