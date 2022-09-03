const mongoose = require('mongoose');
require('dotenv').config({path: './src/config/mongo.env'});

const connection = async () => {
  const URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_BBDD}?retryWrites=true&w=majority`;

  await mongoose.connect(URI);
};

module.exports = connection;
