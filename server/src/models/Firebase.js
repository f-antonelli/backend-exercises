const { db } = require('../../database/firebase');

class Firebase {
  constructor(collection) {
    this.collection = db.collection(collection);
  }

  save = async item => {
    try {
      const newItem = this.collection.doc();

      let data = await newItem.create(item);

      return data;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  getAll = async () => {
    try {
      const response = await this.collection.get();
      const docs = response.docs;
      const result = docs.map(doc => doc.data());

      return result;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  getById = async id => {
    try {
      const result = await this.collection.doc(`${id}`).get();

      return result.data();
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  updateById = async (item, id) => {
    let result;

    try {
      result = await this.collection.doc(`${id}`).update(item);

      return result;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  deleteById = async id => {
    let result;
    try {
      result = await this.collection.doc(`${id}`).delete();

      return result;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
}

module.exports = Firebase;
