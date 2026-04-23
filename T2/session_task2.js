var express = require("express");
var app = express();
var session = require("express-session");
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "session_task2.html" }));

app.use(session({
    secret: "LJ123",
    resave: false,                  //optional
    saveUninitialized: false,       //optional
    name: "my"
}));

app.post("/save", (req, res) => {
    req.session.uname = req.body.uname;
    req.session.pass = req.body.pass;
    res.redirect("fetchdata");
})
app.get("/fetchdata", (req, res) => {
    if (req.session.uname == "admin" && req.session.pass == "admin@123") {
        res.send(`<h1>Welcome ${req.session.uname}<br></h1> <a href="/destroy">LOG OUT</a>`);
    }
    else {
        res.send(`<h1>Please enter valid username and password</h1> <a href="/">login</a>`);
    }
})

app.get("/destroy", (req, res) => {
    req.session.destroy();
    res.send(`<h1>Session deleted successfully</h1> <a href="/">login</a>`);
})

app.listen(7000);