const { Router } = require('express');
const { body } = require('express-validator');

const privateRoutes = require('./privateRoutes');

const sessionValidator = require('../middlewares/session');
const UserController = require('../app/controllers/UserController');

const routes = Router();
routes.use(privateRoutes);

// register user
routes.post(
  '/cadastro',
  body('name').isString().isLength({ min: 3 }),
  body('email').isString().isEmail(),
  body('password').isString(),
  body('repeatPassword').isString(),
  UserController.create
);

// making login
routes.post('/login', sessionValidator.login, UserController.makingLogin);

module.exports = routes;
