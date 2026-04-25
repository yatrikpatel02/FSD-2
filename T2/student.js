var express = require("express");
var router = express.Router();
var obj = [
    { name: 'A', id: 1, age: 20, city: "Ahmedabad", branch: "CSE" },
    { name: 'B', id: 2, age: 19, city: "Baroda", branch: "CSE" },
    { name: 'C', id: 3, age: 19, city: "vapi", branch: "CE" },
    { name: 'D', id: 4, age: 20, city: "Rajkot", branch: "CE" },
    { name: 'E', id: 5, age: 18, city: "Ahmedabad", branch: "IT" },
    { name: 'F', id: 6, age: 18, city: "Surat", branch: "IT" }
]
router.get("/", (req, res) => {
    res.type("text/html");
    for (o of obj) {
        res.write(`<h1>Name: ${o.name}
        ID: ${o.id}
        Age: ${o.age}
        city: ${o.city}
        Branch: ${o.branch}`)
    }
    res.send();
})

router.get("/id/:id", (req, res) => {
    var data = obj.filter((o) => o.id == req.params.id)
    if (data.length > 0) {
        res.send(data);
    }
    else {
        res.send("No such student available")
    }
})

router.get("/branch/:branch", (req, res) => {
    var data = obj.filter((o) => o.branch.toLowerCase() == req.params.branch.toLowerCase())
    if (data.length > 0) {
        res.send(data);
    }
    else {
        res.send("No such student available");
    }
})

module.exports = router;