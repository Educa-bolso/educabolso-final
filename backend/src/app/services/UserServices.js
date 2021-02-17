const { hashSync } = require('bcryptjs');

const User = require('../models/User');

const { date } = require('../../utils/date');

module.exports = {
  async createNewUser(data) {
    let { name, email, password, repeatPassword } = data;

    const created_at = date(Date.now()).iso;
    const updated_at = date(Date.now()).iso;

    const hashPassword = await hashSync(password, 8);

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
};
