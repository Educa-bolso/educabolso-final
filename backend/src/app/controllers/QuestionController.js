const QuestionService = require('../services/QuestionService');

module.exports = {
  async index(request, response) {
    const { fase } = request.params;

    const questions = await QuestionService.getAllQuestions(fase);

    return response.status(200).json(questions);
  },
};
