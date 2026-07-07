const express = require("express");
var app = express();
const mg = require("mongoose");

mg.connect('mongodb://127.0.0.1:27017/mdb2');
const myschema = new mg.Schema({
    username: { type: String, required: true, trim: true }, password: String, email: { type: String, unique: true, required: true },
    gender: String,
    city: { type: String, required: true },
    message: { type: String, trim: true }
})

const mymodel = new mg.model("user", myschema);
app.use(express.static(__dirname, { index: "e1.html" }))

app.get("/data", async (req, res) => {
    const mydata = new mymodel({
        username: req.query.uname,
        password: req.query.pass,
        email: req.query.email,
        gender: req.query.gender,
        city: req.query.city,
        message: req.query.msg
    })
    await mydata.save()
    res.send("Thank You!")
})
app.listen(7001);