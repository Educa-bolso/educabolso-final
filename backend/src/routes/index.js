const { Router } = require('express');
const { body } = require('express-validator');

const privateRoutes = require('./privateRoutes');

const sessionValidator = require('../middlewares/session');
const UserController = require('../app/controllers/UserController');
const QuestionController = require('../app/controllers/QuestionController');

const routes = Router();
routes.use(privateRoutes);

// register user
routes.post(
  '/cadastro',
  body('nome').isString().isLength({ min: 3 }),
  body('email').isString().isEmail(),
  body('senha').isString(),
  body('confirmarSenha').isString(),
  UserController.create
);

// making login
routes.post('/login', sessionValidator.login, UserController.makingLogin);

// questions
routes.get('/questions/:fase', QuestionController.index);

module.exports = routes;
