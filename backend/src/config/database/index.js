const mysql = require('mysql');

module.exports = mysql.createPool({
  host: 'localhost',
  port: '3306',
  database: 'educabolso',
  user: 'root',
  password: '',
});
