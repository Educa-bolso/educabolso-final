const FeedbackService = require('../services/FeedbackService');

module.exports = {
  async create(request, response) {
    const user_id = request.user.id;
    const { mensagem } = request.body;

    try {
      const feedback = await FeedbackService.createFeedback({
        user_id,
        mensagem,
      });

      return response.status(201).json(feedback);
    } catch (e) {
      return response
        .status(404)
        .json({ error: `${e}`.replace('Error: ', '') });
    }
  },
};
