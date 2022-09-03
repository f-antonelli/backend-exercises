const mongoose = require('mongoose');
const connection = require('../../database/mongoDB');

class MongoDB {
  constructor(model, schema) {
    this.model = mongoose.model(model, schema);

    connection();
  }

  save = async item => {
    try {
      const newItem = this.model(item);

      let data = await newItem.save();
      return data;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  getAll = async () => {
    try {
      let data = await this.model.find();

      return data;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  getById = async id => {
    let _id = mongoose.Types.ObjectId(id);
    try {
      let data = await this.model.findOne({ _id });

      return data;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  updateById = async (item, id) => {
    const { name, price, description, stock } = item;
    let _id = mongoose.Types.ObjectId(id);
    let _item, result;
    try {
      _item = await this.model.findOne({ _id });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }

    _item.name = name;
    _item.price = price;
    _item.description = description;
    _item.stock = stock;

    try {
      result = await _item.save();

      return result;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  deleteById = async id => {
    let _id = mongoose.Types.ObjectId(id);
    let result;
    try {
      result = await this.model.deleteOne({ _id });

      return result;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
}

module.exports = MongoDB;
