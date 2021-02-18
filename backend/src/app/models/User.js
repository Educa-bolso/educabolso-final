const db = require('../../config/database');

module.exports = {
  userCreate(datas) {
    const query = `
      INSERT INTO users (nome, email, senha, criado_em, atualizado_em)
      VALUES
      ($1, $2, $3, $4, $5)
      RETURNING *
    `;

    return db.query(query, datas);
  },

  findById(id) {
    const query = `
      SELECT * FROM users WHERE id = $1
    `;

    return db.query(query, [id]);
  },

  findByEmail(email) {
    const query = `
      SELECT * FROM users WHERE email = $1
    `;

    return db.query(query, [email]);
  },
};
