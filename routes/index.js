const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');


routes.get('/', lesson1Controller.handleCurtisRoute);

routes.get('/about', lesson1Controller.handleAboutRoute);


module.exports = routes;

