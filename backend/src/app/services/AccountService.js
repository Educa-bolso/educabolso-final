const Account = require('../models/Account');
const User = require('../models/User');

const { date } = require('../../utils/date');

module.exports = {
  async findAllAccounts(id) {
    const findUser = await User.findById(id);

    const user = findUser.rows[0];

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const accountsFounded = await Account.findAll(user.id);

    const accounts = accountsFounded.rows;

    return accounts;
  },

  async createAccount(datas) {
    const { user_id, nome, valor } = datas;

    const userFounded = await User.findById(user_id);

    const user = userFounded.rows[0];

    if (!user) {
      throw new Error(
        'Usuário não encontrado, você não pode cadastrar uma conta.'
      );
    }

    const values = [user_id, nome, valor, date(Date.now()).iso];

    const accountCreated = await Account.create(values);

    const account = accountCreated.rows[0];

    return account;
  },

  async updateAccount(userId, datas) {
    const { id, nome, valor } = datas;

    const accountFounded = await Account.findOne(id);

    let account = accountFounded.rows[0];

    if (!account) {
      throw new Error('Esta conta não existe.');
    }

    if (userId !== account.user_id) {
      throw new Error('Usuário não pertence a esta conta.');
    }

    const values = [nome, valor, id, userId];

    const accountUpdated = await Account.update(values);

    account = accountUpdated.rows[0];

    return account;
  },

  async deleteAccount(userId, accountId) {
    const accountFounded = await Account.findOne(accountId);

    const account = accountFounded.rows[0];

    console.log(userId);

    if (userId !== account.user_id) {
      throw new Error('Usuário não pertence a esta conta.');
    }
    if (!account) {
      throw new Error('Esta conta não existe.');
    }

    await Account.delete(userId, account.id);

    return;
  },
};
