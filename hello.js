http = require('http');
net = require('net');
c = 0;

http.createServer(function(req, res){
	c++;
	res.writeHead(200);
	res.end('hello world\n');
}).listen(8080);

net.createServer(function(socket){
	socket.write('connections: ' + c);
	socket.end();
}).listen(8081);