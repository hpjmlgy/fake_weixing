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
app.get('/btcc', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/btcc.html'));
});
app.get('/wlxq', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/wlxq.html'));
});
app.get('/sgtl', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/sgtl.html'));
});
app.get('/ddxq', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/ddxq.html'));
});
app.get('/zffs', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/zffs.html'));
});
app.get('/wd', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/wd.html'));
});
app.get('/wddd', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/wddd.html'));
});
app.get('/yhj', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/yhj.html'));
});
app.get('/hb', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/hb.html'));
});
app.get('/yce', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/yce.html'));
});
app.get('/gwc', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/gwc.html'));
});
app.get('/dzgl', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/dzgl.html'));
});
app.get('/gywm', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/gywm.html'));
});
app.get('/grzx', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/grzx.html'));
});
app.get('/dlzc', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/dlzc.html'));
});
app.get('/sszz', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/sszz.html'));
});
app.get('/ykjz', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/ykjz.html'));
});
app.get('/xccy', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/xccy.html'));
});
app.get('/btbh', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/btbh.html'));
});
app.get('/xccyzz', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/xccyzz.html'));
});
app.get('/ykjz1', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/html/ykjz1.html'));
});
app.listen(3000, function(err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://localhost:3000');
});