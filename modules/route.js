var express = require('express');
var router  = express.Router();
var mongocon = require('./mongocon');

router.use(function(req, res, next) {
	// log each request to the console
	console.log(req.method, req.url);
	// continue doing what we were doing and go to the route
	next();
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
	res.send('im the home page!');
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
	res.send('im the about page!');
	var email = 'iamstk14@gmail.com';
	var password = '123456';
	mongocon.retriveData(email,password);
	
});

// route middleware to validate :name
router.param('name', function(req, res, next, name) {
	// do validation on name here
	// blah blah validation
	// log something so we know its working
	console.log('doing name validations on ' + name);
	// once validation is done save the new item in the req
	req.name = name;
	// go to the next thing
	next();
});

// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
	res.send('hello ' + req.name + '!');
	//res.send('hello ' + req.params.name + '!');
});

module.exports = router;