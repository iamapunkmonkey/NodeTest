var sys = require("sys"),
    http = require("http");

http.createServer(function(req, res) {
	setTimeout(function(){
		res.writeHeader(200, {"Content-Type": "text/html"});
		res.write("Hello World!");
		res.close();
	}, 2000);
}).listen(8080);

sys.puts("Server running on port 8080");