var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
console.log('Total de CPUs: ' + numCPUs);
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

   Object.keys(cluster.workers).forEach(function(id) {
    console.log("Rodando com ID : "+cluster.workers[id].process.pid);
  });

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' morreu!');
    cluster.fork();
  });
  
} else {
	console.log("Processo filho "+process.pid+" foi criado e escutando");
	require('./server.js');
}