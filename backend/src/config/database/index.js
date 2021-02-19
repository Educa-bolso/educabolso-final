const { Pool } = require('pg');

module.exports = new Pool({
  port: 5432,
  database: 'educabolso',
  user: 'postgres',
  password: 'docker',
  host: 'localhost',
});
