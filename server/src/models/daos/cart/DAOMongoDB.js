const MongoDB = require('../../containers/MongoDB');
const CartSchema = require('../../../schemas/Cart');

class DAOMongoDB extends MongoDB {
  constructor() {
    super('carts', CartSchema);
  }
}

module.exports = DAOMongoDB;
