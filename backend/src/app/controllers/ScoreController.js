const ScoreService = require('../services/ScoreService');

module.exports = {
  async index(request, response) {
    try {
      const user = request.user;

      const score = await ScoreService.getAllPoints(user.id);

      return response.status(200).json(score);
    } catch (e) {
      return response
        .status(404)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },

  async create(request, response) {
    const user = request.user;
    const { user_id } = request.body;

    console.log(user);

    try {
      if (user.id !== user_id) {
        return response.status(401).json({
          error: 'Você não pode incluir pontuação para outro usuário.',
        });
      }

      const score = await ScoreService.registerScore(request.body);

      return response.status(201).json(score);
    } catch (e) {
      return response
        .status(404)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },
};
