const { Schema } = require('mongoose');

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    code: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true },
);

module.exports = ProductSchema