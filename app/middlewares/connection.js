var db = require('../../config/database.js');

module.exports = function *(next) {

  console.log(process.pid);
  var connection = yield db.getConnection();
  console.log('Obteve conexão do pool');
  this.request.connection = connection;
  yield next;
  connection.release();
  console.log('Devolveu conexão para o pool')
}