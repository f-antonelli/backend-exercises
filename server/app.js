const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);
const HttpError = require('./models/http-error');
const Container = require('./models/class-products');
const knex = require('knex');
const knexConfigProd = require('./knexfile-mariadb');
const knexConfigMsg = require('./knexfile-sqlite3');
const dbProd = knex(knexConfigProd);
const dbMsg = knex(knexConfigMsg);

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

app.use(express.static('public'));

// HANDLEBARDS
const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layout',
  partialsDir: __dirname + '/views/partials',
  extname: '.hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', '.');

let cMessages = new Container(dbMsg, 'messages'); // Instance created to use products.
let cProducts = new Container(dbProd, 'products'); // Instance created to use products.

let messages;
(async () => {
  messages = await cMessages.getAll();
})();

io.on('connection', async socket => {
  messages = await cMessages.getAll();
  io.emit('update-messages', messages);

  socket.emit('products', await cProducts.getAll());

  socket.on('post-message', async msg => {
    const message = {
      ...msg,
      socket_id: socket.id,
    };
    await cMessages.save(message);

    io.sockets.emit('new-message', message);
  });
});

app.get('/', (req, res) => {
  res.render('views');
});

app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route.', 404);
//   throw error;
// });

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

server.on('error', error => console.log(`Error: ${error}`));
