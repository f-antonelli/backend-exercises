const Container = require('./class')

let container1 = new Container("products.txt");

// # First method => return id assigned.
// container1
//   .save({
//     title: "Globo Terraqueo",
//     price: 345.67,
//     thumbnail:
//       "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
//   })
//   .then((res) => console.log(res));

// # Second method -> returns object with id asked.
container1.getById(2).then((res) => console.log(res));

// # Third method -> returns all objects
// container1.getAll().then(res => console.log(res))

// # Fourth method
// container1.deleteById(2);

// # Fifth method
// container1.deleteAll();