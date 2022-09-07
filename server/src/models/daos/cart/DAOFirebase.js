const Firebase = require("../../containers/Firebase");

class DAOFirebase extends Firebase {
  constructor() {
    super('carts');
  }
}

module.exports = DAOFirebase;
