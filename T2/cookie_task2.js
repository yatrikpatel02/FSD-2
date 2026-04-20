var express = require("express")
var app = express()
var cp = require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname, { index: "cookie_task2.html" }))

app.get("/data", (req, res) => {
    res.cookie("feedback", [{ "username": req.query.uname }, { "email": req.query.email }, { "message": req.query.message }, { "rating": req.query.rating }], { maxAge: 10000 })
    res.send(`<h1>Successfully stored Data</h1> <a href="/feedback">view feedback</a>`)
})

app.get("/feedback", (req, res) => {
    if (req.cookies.feedback) {
        res.send(`<h1>Hello ${req.cookies.feedback[0].username} <br> Thank you <br> your feedback is: ${req.cookies.feedback[3].rating} <br> your message: ${req.cookies.feedback[2].message}</h1> <a href="/">logout</a>`)
    }
    else {
        res.send(`No feedback available <a href="/">logout</a>`)
    }
})

app.listen(7000)