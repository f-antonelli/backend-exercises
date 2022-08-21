class Container {
  constructor(db, tableName) {
    this.db = db;
    this.tableName = tableName;
  }

  save = async product => {
    try {
      let data = await this.db(this.tableName).insert(product);

      return data;
    } catch (err) {
      return err.sqlMessage;
    }
  };

  getById = async id => {
    try {
      let data = await this.db(this.tableName).select().where('id', id);

      return data;
    } catch (err) {
      return err.sqlMessage;
    }
  };

  getAll = async () => {
    try {
      let data = await this.db(this.tableName).select();

      return data;
    } catch (err) {
      return err.sqlMessage;
    }
  };

  updateDB = async product => {
    try {
      let data = await this.db(this.tableName).where({ id: product.id }).update(product);

      return data;
    } catch (err) {
      return err.sqlMessage;
    }
  };

  deleteById = async id => {
    try {
      await this.db(this.tableName).where({ id: id }).del();
    } catch (err) {
      return err.sqlMessage;
    }
  };
}

module.exports = Container;
