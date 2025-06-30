// express web server
const express = require('express');
const app = express();


const port =  3000;

// Import routes
const routes = require('./routes/index');
app.use('/', routes);
app.listen(process.env.port || port, () => {
  console.log(`Server is running on port ${process.env.port || port}`);
});