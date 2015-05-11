var express = require('express');
var router = express.Router();
var MipControl = require('../lib/mip-control');

MipControl.init();

/* GET home page. */
router.get('/', function(req, res, next) {
  MipControl.work();
  res.render('index', { title: 'Robot Army' });
});

router.get('/drive-forward', function(req, res, next) {
	MipControl.driveForward();
	res.render('index', {title: 'Robot Army'});
})

router.get('/crazy-eyes', function(req, res, next) {
	MipControl.crazyEyes();
	res.render('index', {title: 'Robot Army'});
});

router.get('/turn-left', function(req, res, next) {
	MipControl.turnLeft();
	res.render('index', {title: 'Robot Army'});
});

router.get('/turn-right', function(req, res, next) {
	MipControl.turnRight();
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
