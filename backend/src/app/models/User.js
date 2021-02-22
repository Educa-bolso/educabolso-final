const db = require('../../config/database');

module.exports = {
  async userCreate(datas) {
    const query = `
      INSERT INTO users (nome, email, senha, criado_em)
      VALUES
      ($1, $2, $3, $4)
      RETURNING *
    `;

    return await db.query(query, datas);
  },

  update(datas) {
    const query = `
      UPDATE users SET 
      nome=($1),
      sobrenome=($2),
      endereco=($3),
      data_nascimento=($4),
      tipo_trabalho=($5)
      WHERE id = $6
      RETURNING *
    `;

    const values = [
      datas.nome,
      datas.sobrenome,
      datas.endereco,
      datas.data_nascimento,
      datas.tipo_trabalho,
      datas.userId,
    ];

    return db.query(query, values);
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

  delete(id) {
    const query = `
      DELETE FROM users WHERE id = $1
    `;

    return db.query(query, [id]);
  },
};
