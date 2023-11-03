const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
const config = require('../config/config'); // Make sure the path is correct

const connectToDatabases = () => {
  // MongoDB
  console.log(config.mongoUri)
  mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

  // SQL (using Sequelize)
  // const sequelize = new Sequelize(config.sqlUri);
  // sequelize.authenticate()
  //   .then(() => console.log('SQL database connected'))
  //   .catch(err => console.error('SQL connection error:', err));
};

module.exports = {
  connectToDatabases
};
