const { Router } = require('express');
const { body } = require('express-validator');

const sessionValidator = require('../middlewares/session');
const authentication = require('../middlewares/ensureAuthentication');

const routes = Router();

const UserController = require('../app/controllers/UserController');

routes.post(
  '/cadastro',
  body('name').isString().isLength({ min: 3 }),
  body('email').isString().isEmail(),
  body('password').isString(),
  UserController.create
);

routes.post('/login', sessionValidator.login, UserController.makingLogin);

routes.get(
  '/users',
  authentication.ensureAuthenticated,
  (request, response) => {
    return response.send('ok');
  }
);

module.exports = routes;
