const { hash, compare } = require('bcryptjs');

const User = require('../models/User');

const { date } = require('../../utils/date');

module.exports = {
  async createNewUser(data) {
    let { nome, email, senha, confirmarSenha } = data;

    const findEmail = await User.findByEmail(email);

    const emailExists = findEmail.rows[0];

    if (emailExists) {
      throw new Error('Email já existe.');
    }

    if (senha !== confirmarSenha) {
      throw new Error('Senhas não conferem.');
    }

    const created_at = date(Date.now()).iso;

    const hashPassword = await hash(senha, 8);

    const datas = [nome, email, hashPassword, created_at];

    const userCreated = await User.userCreate(datas);

    const user = userCreated.rows[0];

    delete user.password;

    return user;
  },

  async updateUser(datas) {
    const { userId } = datas;

    const findUser = await User.findById(userId);

    const user = findUser.rows[0];

    if (!user) {
      throw new Error('Usuário não existe!');
    }

    const userUpdate = await User.update(datas);

    const userUpdated = userUpdate.rows[0];

    delete userUpdated.senha;

    return userUpdated;
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

  async deleteUser(id) {
    const findUser = await User.findById(id);

    const user = findUser.rows[0];

    if (!user) {
      throw new Error('Usuário não existe.');
    }

    await User.delete(user.id);

    return;
  },
};
