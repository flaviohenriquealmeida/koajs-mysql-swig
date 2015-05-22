
var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'fj26'
});

console.log('Pool de conexão pronto para uso');

process.on('SIGINT', function() {
  pool.end(function (err) {
    if(err) throw console.log(err);
    console.log('### Todas as conexões do pool foram fechadas ###');
    process.exit(0);
  });
});

module.exports = {
  getConnection : function () {
    return new Promise(function(resolve, reject) {
      pool.getConnection(function(err, connection) {
        if(err) {
          console.log(err);
          reject(err);
        }
        resolve(connection);
      });
    });
  }
}



