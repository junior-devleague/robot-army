var express = require('express');
var router = express.Router();
var MipControl = require('../lib/mip-control');

MipControl.init();

/* GET home page. */
router.get('/', function(req, res, next) {
  MipControl.work();
  res.render('index', { title: 'Robot Army' });
});

router.get('/stand', function(req, res, next) {
	MipControl.getUp();
	res.json({result: 'ok'});
});

router.get('/love', function(req, res, next) {
	MipControl.loveMe();
	res.json({result: 'ok'});
});

router.get('/drive-forward', function(req, res, next) {
	MipControl.driveForward();
	res.json({result: 'ok'});
});

router.get('/crazy-eyes', function(req, res, next) {
	MipControl.crazyEyes();
	res.json({result: 'ok'});
});

router.get('/turn-left', function(req, res, next) {
	MipControl.turnLeft();
	res.json({result: 'ok'});
});

router.get('/turn-right', function(req, res, next) {
	MipControl.turnRight();
	res.json({result: 'ok'});
});

router.get('/dance', function(req, res, next) {
	MipControl.dance();
	res.json({result: 'ok'});
});

router.get('/stop', function(req, res, next) {
	MipControl.stop();
	res.json({result: 'ok'});
});

module.exports = router;
