const { sign } = require('jsonwebtoken');

async function authenticateUser(user) {
  if (!user) {
    throw new Error('Usuário não existe');
  }

  const token = sign({}, 'uashuashaushausha', {
    expiresIn: '1d',
  });

  return {
    user,
    token,
  };
}

module.exports = {
  authenticateUser,
};
