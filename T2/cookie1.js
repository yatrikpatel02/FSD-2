var express = require("express")
var app = express()
var cp = require("cookie-parser")
app.use(cp())
app.get("/", (req, res) => {
    res.cookie("fname", "abc")
    res.cookie("lname", "xyz")
    res.cookie("subject", "FSD-2", { maxAge: 5000 })
    res.cookie("Email", "abc@gmail.com", { express: new Date(Date.now() + 10000) })
    res.clearCookie("fname")
    console.log(req.cookies.fname)
    res.send(req.cookies.fname);
})
app.listen(7000);