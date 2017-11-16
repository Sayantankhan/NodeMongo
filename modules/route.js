//require for the routing purpose
var express = require('express');
var app = express();
var router = express.Router();

// Home page route
router.get('/', function (req, res) {
  console.log('root');
});

// About page route
router.get('/about', function (req, res) {
  console.log('about');
});

module.exports = router;