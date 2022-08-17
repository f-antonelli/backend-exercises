const express = require('express');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const HttpError = require('./models/http-error');
const app = express();

const PORT = process.env.PORT || 8080;

// Accept data in JSON format.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.on('error', error => console.log(`Error: ${error}`));
