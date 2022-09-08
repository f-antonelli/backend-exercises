const MongoDB = require('../../containers/MongoDB');
const ProductSchema = require('../../../schemas/Product');
const connection = require('../../../database/mongoDB');
class DAOMongoDB extends MongoDB {
  constructor() {
    super('products', ProductSchema);

    connection();
  }
}

module.exports = DAOMongoDB;
