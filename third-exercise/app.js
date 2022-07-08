// # Own imports .
const Container = require("../second-exercise/class");
const HttpError = require("./models/http-error");

const express = require("express");

const PORT = 8080;
const app = express();

// # Using class from second-exercise
let container = new Container("products.txt");

app.get("/products", async (req, res) => {
  let data;

  try {
    data = await container.getAll();
  } catch (err) {
    // # Custom error created in models folder .
    const error = new HttpError(
      "Fetching class failed, please try again later",
      500
    );
    throw error;
  }
  res.send(data);
});

app.get("/productRandom", async (req, res) => {
  let data;

  try {
    data = await container.getAll();

    data = data[Math.floor(Math.random() * data.length)];
  } catch (err) {
    const error = new HttpError(
      "Fetching class failed, please try again later",
      500
    );
    throw error;
  }

  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
