const { validationResult } = require('express-validator');

const { findById } = require('../models/User');
const UserService = require('../services/UserServices');
const AuthenticateUserService = require('../services/AuthenticateUserService');

module.exports = {
  async create(request, response) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const user = await UserService.createNewUser(request.body);

      return response.status(201).json(user);
    } catch (e) {
      return response
        .status(401)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },

  async findOne(request, response) {
    const { id } = request.params;

    const user = await UserService.findUser(id);

    return response.status(200).json(user);
  },

  async makingLogin(request, response) {
    try {
      const user = request.user;

      const userWithToken = await AuthenticateUserService.authenticateUser(
        user
      );

      return response.status(200).json(userWithToken);
    } catch (e) {
      return response.status(401).json({ error: `${e}` });
    }
  },
};
