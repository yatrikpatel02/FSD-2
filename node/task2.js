const shape = [{
    "name": "circle",
    "d": 8
},
{
    "name": "square",
    's': 10
}
]
const d = JSON.stringify(shape)
var fs = require("fs")
fs.writeFileSync("shape.txt", d)
var c = shape[0].d * Math.PI;
var s = shape[1].s * 4;
console.log(c)
console.log(s)
fs.appendFileSync("shape.txt", "\nPerimeter of Circle: " + c)
fs.appendFileSync("shape.txt", "\nPerimeter of Square: " + s)