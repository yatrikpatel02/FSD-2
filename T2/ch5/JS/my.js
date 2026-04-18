var express = require('express')
var app = express();
var path = require('path');
// app.use(express.static(__dirname))   //for all files in chapter5 folder
const hp = path.join(__dirname, '../HTML');
app.use(express.static(hp, { index: 'my.html' }));
const cp = path.join(__dirname, '../CSS');
app.use(express.static(cp));
const ip = path.join(__dirname, '../images');
app.use(express.static(ip));
app.use(express.urlencoded());
app.post("/data", (req, res) => {
    res.type("text/html");
    res.write(`<h1>Name is ${req.body.Uname}</h1>`);
    var m = req.body.msg.split(".");
    for (i of m) {
        res.write(i + "<br>");
    }
    res.write(`<a href="/message?m=${req.body.msg}">click here to see no of vowels</a>`);
    res.send();
})
app.get("/message", (req, res) => {
    var m1 = req.query.m;
    console.log(m1);
    var c = 0;
    var vowel = 'aeiou';
    for (i of m1.toLowerCase()) {
        if (vowel.includes(i)) {
            c++;
        }
    }
    res.send(`<h1>Total vowel counts: ${c}</h1>`)
})
app.listen(7000);