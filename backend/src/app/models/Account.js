const db = require('../../config/database');

module.exports = {
  findAll(id) {
    const query = `
      SELECT * FROM accounts WHERE user_id = $1
    `;

    return db.query(query, [id]);
  },

  create(datas) {
    const query = `
      INSERT INTO accounts (user_id, nome, valor, criado_em) 
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    return db.query(query, datas);
  },
};
