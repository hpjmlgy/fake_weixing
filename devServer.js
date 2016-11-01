var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/index.html'));
});
app.get('/mbck', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/mbck.html'));
});
app.get('/tg', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/tg.html'));
});
app.get('/tg_all', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/tg_all.html'));
});
app.get('/xzcp', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/xzcp.html'));
});
app.get('/zpscc', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/zpscc.html'));
});
app.get('/zpzzym', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/zpzzym.html'));
});
app.get('/mbtz', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/mbtz.html'));
});
app.get('/xccc', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/xccc.html'));
});
app.listen(3000, function(err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://localhost:3000');
});