const { compare } = require('bcryptjs');
const UserService = require('../app/services/UserService');

async function login(request, response, next) {
  const { email, senha } = request.body;

  const user = await UserService.findUserByEmail(email);

  if (!user) {
    return response.status(401).json({ error: 'Email ou senha incorretos.' });
  }

  const comparePassword = await compare(senha, user.senha);

  if (user.email !== email || !comparePassword) {
    return response.status(401).json({ error: 'Email ou senha incorretos.' });
  }

  request.user = user;

  next();
}

module.exports = {
  login,
};
