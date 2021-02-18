const { sign } = require('jsonwebtoken');

const { jwt } = require('../../config/auth');

async function authenticateUser(user) {
  if (!user) {
    throw new Error('Usuário não existe');
  }

  const { id, nome, email } = user;

  const { secret, expiresIn } = jwt;

  const token = sign(
    {
      id,
      nome,
      email,
    },
    secret,
    {
      expiresIn,
    }
  );

  delete user.password;

  return {
    user,
    token,
  };
}

module.exports = {
  authenticateUser,
};
