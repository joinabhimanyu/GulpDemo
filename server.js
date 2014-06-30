
var express = require('express');
	var app = express();
	app.use(express.static(__dirname));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');

	var router = express.Router();

	router.use(function(req, res, next) {
		console.log(req.method, req.url);
		next();
	});

	router.get('/home', function(req, res) {
		res.render('home');
	});

	router.get('/about', function(req, res) {
		res.render('about');
	});

	app.use('/app', router);

	app.listen(4000, function() {
		console.log('server started at port 4000');
	});

