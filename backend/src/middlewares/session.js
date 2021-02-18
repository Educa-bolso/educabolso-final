const { compare } = require('bcryptjs');
const UserService = require('../app/services/UserService');

async function login(request, response, next) {
  const { email, password } = request.body;

  const user = await UserService.findUserByEmail(email);

  if (!user) {
    return response.status(401).json({ error: 'Email ou senha incorretos.' });
  }

  const comparePassword = await compare(password, user.senha);

  if (user.email !== email || !comparePassword) {
    return response.status(401).json({ error: 'Email ou senha incorretos.' });
  }

  request.user = user;

  next();
}

module.exports = {
  login,
};
