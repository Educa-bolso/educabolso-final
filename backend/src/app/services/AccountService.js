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

    const values = [user_id, nome, valor, date(Date.now()).iso];

    const accountCreated = await Account.create(values);

    const account = accountCreated.rows[0];

    return account;
  },
};
