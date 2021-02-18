const AccountService = require('../services/AccountService');

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
    const { id } = request.user;
    const { user_id } = request.body;

    if (id !== user_id) {
      return response.status(404).json({ error: 'Usuário não confere.' });
    }

    const account = await AccountService.createAccount(request.body);

    return response.status(201).json(account);
  },
};
