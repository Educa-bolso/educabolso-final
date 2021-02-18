const { verify } = require('jsonwebtoken');
const { jwt } = require('../config/auth');

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response
      .status(401)
      .json({ error: 'Insira um token válido, para obter acesso.' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, jwt.secret);

    request.user = decoded;

    return next();
  } catch {
    return response.status(401).json({ error: 'Token inválido!' });
  }
}

module.exports = {
  ensureAuthenticated,
};
