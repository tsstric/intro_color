var http = require('http');

http.createServer(function(req, res) {
	var path = req.url.replace(/\/\?(?:\?.*)?$/, '').toLowerCase();
	console.log('Access:  ', path);
	function randomInt(min, max) {
		min = parseInt(min);
		max = parseInt(max);
		return Math.floor(min + Math.random() * (max - min + 1));
	}
	switch(path) {
		case '/':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			var rnd = randomInt(1, 2);
			console.log('Selected: ', rnd);
			if (rnd === 1) { res.end('<html><body><div><a href=\"/blue\">Blue</a></body></html>'); }
			else { res.end('<html><body><div><a href=\"/green\">Green</a></body></html>'); }
			break;
		case '/blue':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end('<html><body style=\"background-color: #0000ff\"></body></html>');
			break;
		case '/green':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end('<html><body style=\"background-color: #00ff00\"></body></html>');
			break;
		default:
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Not found.');
			break;
		}
	}).listen(3000);

console.log('Started.  Press Ctrl+c to end...');
