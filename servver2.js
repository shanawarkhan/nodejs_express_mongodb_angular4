var http	  = require('http');
const options = {
    port: 1337,
    host: '0.0.0.0',
};
const server = http.createServer(function(req, res) {
				res.writeHead(200, { 'Content-type': 'text/html'});
				res.end('<h1>Knock knock Neo!<h1>');
			});


// console.log('server running')

server.listen(1300, '0.0.0.0');