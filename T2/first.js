var express = require("express")
var app = express()
app.get("/about", (req, res) => {
    //res.set("Content-Type","text/html");
    //res.setHeader("Content-type","text/html");
    // res.type("text/html");
    res.write(`<h3>Hello B2 Students</h3>`);
    res.send();
    // res.send(`<h3>About PAge</h3>`);
})
app.listen(7001, () => { console.log("Server started") })