const Question = require('../models/Question');

module.exports = {
  async getAllQuestions(fase) {
    const questionsFind = await Question.indexQuestions();

    let questions = questionsFind.rows;

    let questionsWithAwnsers = [];

    for (let question of questions) {
      if (question.fase == fase) {
        questionsWithAwnsers.push({
          ...question,
          respostas: await (await Question.getAwnsers(question.id)).rows,
        });
      }
    }

    return questionsWithAwnsers;
  },
};
