const db = require('../../config/database');

module.exports = {
  create(datas) {
    const query = `
      INSERT INTO feedback (user_id, mensagem, criado_em)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    return db.query(query, datas);
  },
};
