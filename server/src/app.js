const express = require('express');
const productsRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');
const HttpError = require('./utils/HttpError');

const app = express();

const PORT = process.env.PORT || 8080;

// Accept data in JSON format.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  next();
});

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
