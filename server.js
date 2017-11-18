// const http = require('http');
// var url  = require('url');
// const app = require('express');
// var calculator = require('./modules/route');
//
// const hostname = '127.0.0.1';
// const port = 8443;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// server.js
// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8082  ;

// ROUTES
// ==============================================
var router = require('./modules/route');


// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
	res.send('this is a sample!');
});

// we'll create our routes here
app.use('/', router);

// login routes
app.route('/login')

	// show the form (GET http://localhost:8080/login)
	.get(function(req, res) {
		res.send('this is the login form');
	})
	// process the form (POST http://localhost:8080/login)
	.post(function(req, res) {
		console.log('processing');
		res.send('processing the login form!');
	});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
