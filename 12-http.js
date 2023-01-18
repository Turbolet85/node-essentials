const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome to my homepage');
		return;
	}
	if (req.url === '/about') {
		res.end('Here is short history ');
		return;
	}
	res.end(`<h1>Ooops!</h1>
    <p>We can't seem to find page you looking for</p>
    <a href="/">back home</a>`);
});

server.listen(8000);
