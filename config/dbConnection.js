const mysql = require('mysql');

const connMySql = function () {
  console.log('Conexao com banco de dados estabelecida');

  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portal_noticias'
  });
}

module.exports = function () {
  return connMySql;
}