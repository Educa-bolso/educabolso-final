const db = require('../../config/database');

module.exports = {
  findAll(id) {
    const query = `
      SELECT * FROM accounts WHERE user_id = $1
    `;

    return db.query(query, [id]);
  },

  findOne(id) {
    return db.query('SELECT * FROM accounts WHERE id = $1', [id]);
  },

  create(datas) {
    const query = `
      INSERT INTO accounts (user_id, nome, valor, criado_em) 
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    return db.query(query, datas);
  },

  update(datas) {
    const query = `
      UPDATE accounts SET 
      nome=($1),
      valor=($2)
      WHERE id = $3 and user_id = $4
      RETURNING *
    `;

    return db.query(query, datas);
  },

  delete(userId, accountId) {
    const query = `
      DELETE FROM accounts WHERE id = $1 and user_id = $2
    `;

    return db.query(query, [accountId, userId]);
  },
};
