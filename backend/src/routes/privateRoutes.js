const { Router } = require('express');

const authentication = require('../middlewares/ensureAuthentication');
const { ensureAuthenticated } = require('../middlewares/ensureAuthentication');

const UserController = require('../app/controllers/UserController');
const AccountController = require('../app/controllers/AccountController');

const privateRoutes = Router();

// *** ROUTES PRIVATE USER *** \\\
// get an user
privateRoutes.get('/users', ensureAuthenticated, UserController.show);

// update user
privateRoutes.put('/users', ensureAuthenticated, UserController.update);

// delete user
privateRoutes.delete('/users', ensureAuthenticated, UserController.delete);

/* === ROUTES ACCOUNTS === */
privateRoutes.post('/accounts', ensureAuthenticated, AccountController.create);

privateRoutes.get('/accounts', ensureAuthenticated, AccountController.index);

module.exports = privateRoutes;
