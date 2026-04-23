// •	Create index.html file page which contains form(username,password,login button). and open it on localhost. 
// •	After clicking submit button, it should jump on “savesession” page. Store username and password in session.
// •	After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link here.
// •	Jump on delete session page after clicking LOGOUT link. 
// •	Destroy the session on this page and redirect to index.html page.
var express = require("express");
var app = express();
var session = require("express-session");
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "session_task1.html" }));

app.use(session({
    secret: "LJ123",
    resave: false,                  //optional
    saveUninitialized: false,       //optional
    name: "my"
}));

app.post("/savesession", (req, res) => {
    req.session.uname = req.body.uname;
    req.session.pass = req.body.pass;
    res.redirect("fetchsession");
})
app.get("/fetchsession", (req, res) => {
    res.send(`<h1>username: ${req.session.uname} <br>password: ${req.session.pass}<br></h1> <a href="/deletesession">LOG OUT</a>`);
})

app.get("/deletesession", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})
app.listen(7000);