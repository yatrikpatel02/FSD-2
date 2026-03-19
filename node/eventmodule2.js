var eventemitter = require("events");
var ee = new eventemitter();
var myfun = (r, s) => {
    if (r < 0) {
        console.log("Radius must be positive")
    }
    else {
        console.log(`perimeter of circle is ${2 * Math.PI * r}`)
    }
    if (s < 0) {
        console.log("side must be positive")
    }
    else {
        console.log(`perimeter of square is ${4 * s}`)
    }
}
ee.on("calc", myfun);
ee.emit("calc", 3, 2)