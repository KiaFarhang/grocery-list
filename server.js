'use strict';

const express = require('express');
const fs = require('fs');
var app = express();

app.use(express.static('dist'));

app.get('/list.json', function(req, res){
	fs.readFile('./list.json', 'utf8', function(err, data){
		res.send(data);
	});
});

app.post('/list.json', function(req, res){
	fs.writeFile('./list.json', req.headers.list, 'utf8', function(err, data){
		if (err) throw err;
	});
});
app.listen(3000);