var express = require("express")
var app = express()
var path = require("path")
app.use(express.urlencoded())
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("form");
})

app.post("/result", (req, res) => {
    var n = req.body.uname;
    var m = req.body.num;
    res.render("e3", { n, m })
})
app.listen(7001);