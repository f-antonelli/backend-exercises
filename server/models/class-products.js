const fs = require('fs');

class Container {
  constructor(fileName) {
    this.fileName = fileName;
  }

  save = async obj => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');

      if (data.length == 0) {
        obj.id = 1;
        obj.timestamp = Date.now();

        // # I create and array first to re-create a JSON file in products.txt
        await fs.promises.writeFile(`./resources/${this.fileName}`, JSON.stringify(new Array(obj)));

        return obj;
      } else {
        let fileContent = JSON.parse(data);

        // # Get max id from the array of objects
        let maxId = fileContent.reduce((prev, curr) => (prev.id > curr.id ? prev : curr));

        // # Assign an id to new object.
        obj.id = Number(maxId) + 1;
        obj.timestamp = Date.now();
        // # Push new object to array of objects, now with max id
        fileContent.push(obj);

        await fs.promises.writeFile(`./resources/${this.fileName}`, JSON.stringify(fileContent));

        return obj;
      }
    } catch (err) {
      // console.log(err);
    }
  };

  getById = async id => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');
      let content = JSON.parse(data);

      // # Filter the array of object to find the one with the same id
      let value = content.find(item => item.id == id);

      // # If there isnt a product with the same id, return null.
      return value ? value : null;
    } catch (err) {
      // console.log(err);
    }
  };

  getAll = async () => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');

      return JSON.parse(data);
    } catch (err) {
      // console.log(err);
    }
  };

  updateFile = async content => {
    try {
      await fs.promises.writeFile(`./resources/${this.fileName}`, JSON.stringify(content));
    } catch (err) {
      // console.log(err);
    }
  };

  deleteById = async id => {
    try {
      let data = await fs.promises.readFile(`./resources/${this.fileName}`, 'utf-8');
      let content = JSON.parse(data);
      // # Products filtered.
      let contentEdited = content.filter(item => item.id !== id);

      await fs.promises.writeFile(`./resources/${this.fileName}`, JSON.stringify(contentEdited));

      console.log(`Product with ${id} has been removed.`);
    } catch (err) {
      // console.log(err);
    }
  };

  deleteAll = async () => {
    try {
      await fs.promises.writeFile(`./resources/${this.fileName}`, '');

      console.log('The file is empty.');
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = Container;
