const express = require('express');

const routes = express.Router();

const userController = require('../app/controllers/userController');

routes.get('/', userController.test);

module.exports = routes;
