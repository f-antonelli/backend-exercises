const express = require("express");
const productsRoutes = require("./routes/products");
const HttpError = require("./models/http-error");
const app = express();

const PORT = process.env.PORT || 8080;

// Accept data in JSON format.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE to use FORM
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/api/products", productsRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.on("error", (error) => console.log(`Error: ${error}`));
