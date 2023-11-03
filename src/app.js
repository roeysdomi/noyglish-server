const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
require('dotenv').config({ path: `./${envFile}` });
const config = require('./core/config/config');
const cors = require('cors');
const express = require('express');
const { connectToDatabases } = require('./core/database/connectToDatabases');
const { configureMiddleware } = require('./core/middleware/middleware');
const apiRoutes = require('./api/routes/routes');
const app = express();
const PORT = config.PORT || 3000;
console.log("this is the current process",process.env.MONGODB_URI)
// Database Connections
connectToDatabases();

app.use(cors());

// Middleware Configuration
configureMiddleware(app);

// API Routes
app.use('/', apiRoutes);

// Health Check
app.get('/health', (req, res) => res.status(200).send('OK'));

// Handle 404
app.use((req, res, next) => {
  res.status(404).send('Not Found');
  next();
});

// Global Error Handling Middleware
// app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
