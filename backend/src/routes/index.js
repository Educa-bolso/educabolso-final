const { Router } = require('express');
const { body } = require('express-validator');

const sessionValidator = require('../middlewares/session');

const routes = Router();

const UserController = require('../app/controllers/UserController');

routes.post(
  '/users',
  body('name').isString().isLength({ min: 3 }),
  body('email').isString().isEmail(),
  body('password').isString(),
  UserController.create
);

routes.post('/login', sessionValidator.login, UserController.login);

routes.get('/users/:id', UserController.findOne);

module.exports = routes;
