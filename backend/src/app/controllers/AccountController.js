const AccountService = require('../services/AccountService');
const UserService = require('../services/UserService');

module.exports = {
  async index(request, response) {
    try {
      const { id } = request.user;

      const accounts = await AccountService.findAllAccounts(id);

      return response.status(200).json(accounts);
    } catch (e) {
      return response
        .status(401)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },

  async create(request, response) {
    try {
      const { id } = request.user;
      const { user_id } = request.body;

      if (id !== user_id) {
        return response.status(404).json({ error: 'Usuário não confere.' });
      }

      const account = await AccountService.createAccount(request.body);

      return response.status(201).json(account);
    } catch (e) {
      return response
        .status(401)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },

  async update(request, response) {
    try {
      const userId = request.user.id;

      const accountUpdated = await AccountService.updateAccount(
        userId,
        request.body
      );

      return response.status(200).json(accountUpdated);
    } catch (e) {
      return response
        .status(404)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },

  async delete(request, response) {
    const userId = request.user.id;
    const accountId = request.body.id;

    if (!userId) {
      return response.status(404).json({ error: 'Usuário não está logado.' });
    }

    try {
      await AccountService.deleteAccount(userId, accountId);

      return response.status(200).json({ message: 'Conta deletada.' });
    } catch (e) {
      return response
        .status(404)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },
};
