const MongoDB = require('../../containers/MongoDB');
const CartSchema = require('../../../schemas/Cart');
const connection = require('../../../database/mongoDB');

class DAOMongoDB extends MongoDB {
  constructor() {
    super('carts', CartSchema);

    connection();
  }
}

module.exports = DAOMongoDB;
