var express = require('express')
var app = express();
var path = require('path');
// app.use(express.static(__dirname))   //for all files in chapter5
const staticPath = path.join(__dirname, '../frontend');
app.use(express.static(staticPath, { index: '1.html' }));
app.listen(7000);