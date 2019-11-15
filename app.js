var express = require('express');

var app = express();

app.use('/', express.static('./apps/'));

app.listen(3002, function () {
	console.log('Css is running at port 3002...');
});