var express = require('express')
var app = express();
var path = require('path');
const hp = path.join(__dirname);
app.use(express.static(hp, { index: 'task.html' }));
const first = (req, res, next) => {
    if (req.body.n1 > 0 & req.body.n2 > 0) {
        next();
    }
    else {
        console.log("number must be greater than 0")
    }
};

const second = (req, res, next) => {
    var n1 = parseInt(req.body.n1);
    var n2 = parseInt(req.body.n2);
    var sum = n1 + n2;
    if (req.body.opt == "add") {
        var sum = a + b;
        res.send(`<h1>Addition is: ${sum}</h1>`)
    }
    else if (req.body.opt == "square") {
        var sq = Math.pow(sum, 2);
        res.send(`<h1>square is: ${sq}</h1>`)
    }
    if (req.body.opt == "cube") {
        var cb = Math.pow(sum, 3);
        res.send(`<h1>cube is: ${cb}</h1>`)
    }
};


app.use(express.urlencoded());

app.post("/calc", first, second, (req, res) => {
    res.send("Thank you");
})
app.listen(7000)