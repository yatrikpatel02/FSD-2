var express = require("express");
var app = express();
var path = require("path")
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
var obj = [
    { name: 'A', age: 20, marks: 40 },
    { name: 'B', age: 21, marks: 85 },
    { name: 'C', age: 19, marks: 90 },
]
app.get("/", (req, res) => {
    res.render("form_task4", { obj });
})
app.listen(7001);
