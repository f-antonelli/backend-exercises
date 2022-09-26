const Firebase = require('../../models/Firebase');

class DAOFirebase extends Firebase {
  constructor() {
    super('products');
  }
}

module.exports = DAOFirebase;
