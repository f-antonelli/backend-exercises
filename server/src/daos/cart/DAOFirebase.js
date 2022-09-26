const Firebase = require('../../models/Firebase');

class DAOFirebase extends Firebase {
  constructor() {
    super('carts');
  }
}

module.exports = DAOFirebase;
