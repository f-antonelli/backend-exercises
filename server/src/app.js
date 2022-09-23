const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users.routes');
const productsRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');
const HttpError = require('./utils/HttpError');

const app = express();

const PORT = process.env.PORT || 8080;
const connection = require('./database/mongoDB');
connection();
// Accept data in JSON format.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', usersRoutes);
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
