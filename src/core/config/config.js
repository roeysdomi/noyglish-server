const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
    development: {
      
    PORT: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost/yourDB',
    sqlUri: process.env.SQL_URI || 'mysql://user:password@localhost/yourDB',
    corsOptions: {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 204,
    },
    // Additional development-specific configurations
  },
  test: {
    // Test environment configurations
  },
  production: {
    PORT: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI,
    sqlUri: process.env.SQL_URI,
    corsOptions: {
      origin: 'https://your-production-domain.com',
      optionsSuccessStatus: 204,
    },
    // Additional production-specific configurations
  },
};
console.log("from config", config[NODE_ENV])
module.exports = config[NODE_ENV];
