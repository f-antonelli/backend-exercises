const MongoDB = require('../../containers/MongoDB');
const ProductSchema = require('../../../schemas/Product');

class DAOMongoDB extends MongoDB {
  constructor() {
    super('products', ProductSchema);
  }
}

module.exports = DAOMongoDB;
