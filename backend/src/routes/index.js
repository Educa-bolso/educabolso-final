const { Router } = require('express');

const routes = Router();

const UserController = require('../app/controllers/UserController');

routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.findOne);

module.exports = routes;
