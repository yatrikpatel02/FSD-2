var express = require("express");
var app = express();

app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "mw_task3.html" }));

const first = (req, res, next) => {
    res.type("text/html");
    res.write(`<h1>welcome : ${req.body.name} <br>email: ${req.body.email}</h1>`);
    next();
}

app.post("/login", first, (req, res) => {
    if (req.body.subscription == "subscription") {
        res.write(`<h1>Thank you for your subscription</h1><a href="/">log out</a>`)
        res.send();
    }
    else {
        res.write(`<h1>you can subscribe to get daily updates</h1>  <a href="/subscribe">subscribe</a>`)
        res.send();
    }
})

app.get("/subscribe", (req, res) => {
    res.send(`<h1>Thank you for the subscription</h1><a href="/">log out</a>`)
})

app.listen(7000)