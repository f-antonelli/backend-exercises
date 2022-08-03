const express = require("express");

const productsRoutes = require("./routes/products");
const Container = require("./models/class");
const app = express();

const PORT = process.env.PORT || 8080;

// Accept data in JSON format.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE to use FORM
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.set('view engine', 'ejs');

// ROUTE to use EJS
let container = new Container("products.json"); // Instance created to use products.

app.get("/products", async (req, res) => {
  res.render("layout/index", {
    products: await container.getAll(),
  });
});

// API ROUTES
app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.on("error", (error) => console.log(`Error: ${error}`));
