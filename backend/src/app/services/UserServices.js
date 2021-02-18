const { hash, compare } = require('bcryptjs');

const User = require('../models/User');

const { date } = require('../../utils/date');

module.exports = {
  async createNewUser(data) {
    let { name, email, password, repeatPassword } = data;

    const findEmail = await User.findByEmail(email);

    const emailExists = findEmail.rows[0];

    if (emailExists) {
      throw new Error('Email já existe.');
    }

    if (password !== repeatPassword) {
      throw new Error('Senhas não conferem.');
    }

    const created_at = date(Date.now()).iso;
    const updated_at = date(Date.now()).iso;

    const hashPassword = await hash(password, 8);

    const datas = [name, email, hashPassword, created_at, updated_at];

    const user = await User.userCreate(datas);

    const userId = user.rows[0];

    return userId;
  },

  async findUser(id) {
    const user = await User.findById(id);

    if (!user.rows[0]) {
      throw new Error('User not found.');
    }

    return user.rows[0];
  },

  async findUserByEmail(email) {
    const findUser = await User.findByEmail(email);

    const user = findUser.rows[0];

    return user;
  },
};
