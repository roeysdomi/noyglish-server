const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const express = require('express');
const config = require('../config/config'); // Make sure the path is correct

const configureMiddleware = (app) => {
  // Security Middleware
  app.use(helmet());

  // CORS Configuration

  // Request Logging
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

  // Response Compression
  app.use(compression());

  // Parse JSON and URL-encoded requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = {
  configureMiddleware
};
