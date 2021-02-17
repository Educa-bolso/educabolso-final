const { findById } = require('../models/User');
const UserService = require('../services/UserServices');

module.exports = {
  async create(request, response) {
    const userId = await UserService.createNewUser(request.body);

    return response.json(userId);
  },

  async findOne(request, response) {
    const { id } = request.params;

    const user = await UserService.findUser(id);

    return response.status(200).json(user);
  },
};
