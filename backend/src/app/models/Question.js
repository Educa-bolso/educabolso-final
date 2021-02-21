const { query } = require('../../config/database');
const db = require('../../config/database');

module.exports = {
  indexQuestions() {
    const query = `
      SELECT * FROM questions
    `;

    return db.query(query);
  },

  getAwnsers(pergunta_id) {
    const query = `
    SELECT * from awnsers WHERE awnsers.pergunta_id = $1
  `;
    return db.query(query, [pergunta_id]);
  },
};
