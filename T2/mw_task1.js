// Write an ExpressJS application that creates a login form containing fields for username and password along with a submit button. The form data should be sent to the server using the POST method. Implement an authentication middleware that checks whether the entered username is "admin" and the password is "1234". If the credentials are correct, the application should display the message "Login Successful". Otherwise, it should display "Invalid Credentials".
var express = require("express");
var app = express();

var first = (req, res, next) => {
    const uname = req.body.un;
    const pass = req.body.pass;
    if (uname == "admin" && pass == "1234") {
        res.send(`<h1>login successfull</h1>`)
        console.log("login successfull");
    }
    else {
        res.send(`<h1>Invalid Credentials</h1>`)
        console.log("Invalid Credentials");
    }
    next();
}

app.use(express.urlencoded());
app.get("/", (req, res) => {
    res.send(`<form action="/data" method="post">
        <input type="text" name="un" placeholder="Username"/>
<input type="password" name="pass" placeholder="Password"/>
        <button type="submit">submit</button>
        </form> `);
})
app.post("/data", first, (req, res) => {
    res.send();
})
app.listen(5001);