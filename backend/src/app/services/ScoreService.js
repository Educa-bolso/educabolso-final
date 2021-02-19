const Score = require('../models/Score');
const User = require('../models/User');
const { date } = require('../../utils/date');

module.exports = {
  async getAllPoints(user_id) {
    const userFounded = await User.findById(user_id);

    const user = userFounded.rows[0];

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const score = await Score.findAll(user.id);

    return score.rows[0];
  },

  async registerScore(datas) {
    const { user_id, score } = datas;

    const userFind = await User.findById(user_id);

    const user = userFind.rows[0];

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const values = [user.id, score, date(Date.now()).iso];

    const scoreCreated = await Score.create(values);

    return scoreCreated.rows[0];
  },
};
