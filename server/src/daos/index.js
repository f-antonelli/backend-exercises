require('dotenv').config({ path: './src/config/bdselected.env' });

const CartDAO = require(`./cart/DAO${process.env.BBDD}`);
const ProductDAO = require(`./products/DAO${process.env.BBDD}`);
const UsersDAO = require(`./users/DAO${process.env.BBDD}`);

module.exports = {
  CartDAO,
  ProductDAO,
  UsersDAO,
};
