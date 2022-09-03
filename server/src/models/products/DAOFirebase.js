const Firebase = require("../containers/Firebase");

class DAOFirebase extends Firebase {
  constructor() {
    super('products');
  }
}

module.exports = DAOFirebase;
