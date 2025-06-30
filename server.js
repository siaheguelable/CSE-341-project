// express web server
const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');


app.get('/', lesson1Controller.handleCurtisRoute);

app.get('/about', lesson1Controller.handleAboutRoute);

const port =  3000;
app.listen(process.env.port || port, () => {
  console.log(`Server is running on port ${process.env.port || port}`);
});