module.exports = {
  jwt: {
    secret: process.env.TOKEN_SECRET_KEY || 'default',
    expiresIn: '1d',
  },
};
