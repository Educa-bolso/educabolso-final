const { Router } = require('express');

const { ensureAuthenticated } = require('../middlewares/ensureAuthentication');

const UserController = require('../app/controllers/UserController');
const AccountController = require('../app/controllers/AccountController');
const ScoreController = require('../app/controllers/ScoreController');

const privateRoutes = Router();

// *** ROUTES PRIVATE USER *** \\\
// get an user
privateRoutes.get('/users', ensureAuthenticated, UserController.show);

// update user
privateRoutes.put('/users', ensureAuthenticated, UserController.update);

// delete user
privateRoutes.delete('/users', ensureAuthenticated, UserController.delete);

/* === ROUTES PRIVATE ACCOUNTS === */
privateRoutes.get('/accounts', ensureAuthenticated, AccountController.index);
privateRoutes.post('/accounts', ensureAuthenticated, AccountController.create);
privateRoutes.put('/accounts', ensureAuthenticated, AccountController.update);
privateRoutes.delete(
  '/accounts',
  ensureAuthenticated,
  AccountController.delete
);

/* === ROUTES PRIVATE SCORE === */
privateRoutes.get('/score', ensureAuthenticated, ScoreController.index);
privateRoutes.post('/score', ensureAuthenticated, ScoreController.create);

module.exports = privateRoutes;
