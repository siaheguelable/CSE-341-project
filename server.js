// express web server
const express = require('express');
const app = express();
// Load environment variables from .env file
require('dotenv').config();
const connectDB = require('./DB/connection');


connectDB();

const port =  (process.env.PORT || 3000);

// Import routes
const routes = require('./routes/index');
app.use('/', routes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});