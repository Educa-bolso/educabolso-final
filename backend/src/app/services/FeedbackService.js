const Feedback = require('../models/Feedback');
const User = require('../models/User');
const { date } = require('../../utils/date');

module.exports = {
  async createFeedback(datas) {
    const { user_id, mensagem } = datas;

    const findUser = await User.findById(user_id);

    const user = findUser.rows[0];

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const values = [user.id, mensagem, date(Date.now()).iso];

    const feedback = await Feedback.create(values);

    return feedback.rows[0];
  },
};
