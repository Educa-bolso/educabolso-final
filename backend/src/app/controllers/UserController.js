const { validationResult } = require('express-validator');

const { findById } = require('../models/User');
const UserService = require('../services/UserService');
const AuthenticateUserService = require('../services/AuthenticateUserService');

module.exports = {
  async show(request, response) {
    try {
      const { id } = request.user;

      const user = await UserService.findUser(id);

      delete user.senha;

      return response.status(200).json(user);
    } catch (e) {
      return response
        .status(404)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },

  async create(request, response) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const user = await UserService.createNewUser(request.body);

      delete user.senha;

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

  async update(request, response) {
    try {
      const user = request.user;

      if (user.id !== request.body.userId) {
        return response.status(401).json({
          error: 'Você não tem permissão de alterar dados de outro usuário.',
        });
      }

      const userUpdate = await UserService.updateUser(request.body);

      return response.status(200).json(userUpdate);
    } catch (e) {
      return response
        .status(404)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
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

  async delete(request, response) {
    try {
      const { id } = request.user;
      const { userId } = request.body;

      if (id !== userId) {
        return response.status(401).json({
          error: 'Você não tem permissão para excluir outro usuário.',
        });
      }

      await UserService.deleteUser(userId);

      return response.status(200).json({ message: 'Usuário deletado!' });
    } catch (e) {
      return response
        .status(401)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },
};
