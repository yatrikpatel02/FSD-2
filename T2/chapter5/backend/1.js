var express = require('express')
var app = express();
var path = require('path');
// app.use(express.static(__dirname))   //for all files in chapter5 folder
const sp = path.join(__dirname, '../frontend');
//app.use(express.static(sp, { index: '1.html' }));
//alternate way
app.get("/", (req, res) => {
    res.sendFile(sp + "/1.html");
    res.sendFile(sp + "/1.png");
    res.sendFile(sp + "/1.css");
})
app.listen(7000);