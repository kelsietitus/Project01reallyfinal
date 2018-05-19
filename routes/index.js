var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Northern California Plant Database', subtitle: 'CS 355 Project' });
});

module.exports = router;
