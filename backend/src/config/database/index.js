const { Pool } = require('pg');

module.exports = new Pool({
  port: process.env.DATABASE_PORT_APP || 5432,
  database: process.env.DATABASE_NAME_APP || 'educabolso',
  user: process.env.DATABASE_USER_APP || 'postgres',
  password: process.env.DATABASE_PASSWORD_APP || 'docker',
  host: process.env.DATABASE_HOST_APP || 'localhost',
});
