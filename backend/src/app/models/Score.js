const db = require('../../config/database');

module.exports = {
  findAll(user_id) {
    const query = `
      SELECT users.nome, users.id, sum(points.score) AS pontuacao_total 
      FROM users LEFT JOIN points ON users.id = points.user_id 
      WHERE users.id = $1
      GROUP BY users.id;
    `;

    return db.query(query, [user_id]);
  },
  create(datas) {
    const query = `
      INSERT INTO points (user_id, score, criado_em)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    return db.query(query, datas);
  },
};
