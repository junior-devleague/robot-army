var express = require('express');
var router = express.Router();
var MipControl = require('../lib/mip-control');

MipControl.init();

/* GET home page. */
router.get('/', function(req, res, next) {
  MipControl.work();
  res.render('index', { title: 'Robot Army' });
});

router.get('/crazy-eyes', function(req, res, next) {
	MipControl.crazyEyes();
	res.render('index', {title: 'Robot Army'});
});

router.get('/turn', function(req, res, next) {
	MipControl.turn();
	res.render('index', {title: 'Robot Army'});
});

router.get('/dance', function(req, res, next) {
	MipControl.dance();
	res.render('index', {title: 'Robot Army'});
});

router.get('/stop', function(req, res, next) {
	MipControl.stop();
	res.render('index', {title: 'Robot Army'});
});

module.exports = router;
