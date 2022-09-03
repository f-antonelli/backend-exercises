const fs = require('fs');
const HttpError = require('../utils/HttpError');

class Cart {
  constructor(fileName) {
    this.fileName = fileName;
  }

  createCart = async () => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');

      if (data.length == 0) {
        await fs.promises.writeFile(
          `./resources/${this.fileName}`,
          JSON.stringify(new Array({ id: 1, timestamp: Date.now(), products: [] })),
        );

        return id;
      } else {
        let fileContent = JSON.parse(data);

        let maxId = fileContent.reduce((prev, curr) => (prev.id > curr.id ? prev : curr));

        let newCart = {
          id: maxId.id + 1,
          timestamp: Date.now(),
          products: [],
        };

        fileContent.push(newCart);

        await fs.promises.writeFile(`./resources/${this.fileName}`, JSON.stringify(fileContent));

        return newCart.id;
      }
    } catch (err) {
      // console.log(err);
    }
  };

  getCartById = async id => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');
      let content = JSON.parse(data);

      let value = content.find(cart => cart.id === id);

      return value;
    } catch (err) {
      console.log(err);
    }
  };

  saveProduct = async (id, product) => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');

      let cart = JSON.parse(data);

      cart[id - 1].timestamp = Date.now();
      cart[id - 1].products.push(product);

      await fs.promises.writeFile(`./resources/${this.fileName}`, JSON.stringify(cart));
    } catch (err) {
      const error = new HttpError('Something went wrong, could not add this product.', 500);
      return next(error);
    }
  };

  deleteCart = async id => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');
      let carts = JSON.parse(data);

      let cartFiltered = carts.filter(cart => cart.id !== id);

      await fs.promises.writeFile(`./resources/${this.fileName}`, JSON.stringify(cartFiltered));
    } catch (err) {
      // console.log(err);
    }
  };

  delProdFromCart = async (idCart, idProd) => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');
      let carts = JSON.parse(data);

      // Find cart selected
      let cart = carts.find(cart => cart.id === idCart);

      carts = carts.filter(cart => cart.id !== idCart);

      // Filter product that i want to delete
      let productsCart = cart.products.filter(product => product.id !== idProd);

      // Change products cart without product deleted.
      cart.products = productsCart;

      carts.push(cart);

      await fs.promises.writeFile(`./resources/${this.fileName}`, JSON.stringify(carts));
    } catch (err) {
      const error = new HttpError('Something went wrong, could not add this product.', 500);
      return next(error);
    }
  };
}

module.exports = Cart;
