var url = require("url");
var fs = require("fs");
var addr = "https://www.exapmple.com/test?t1=20&t2=25&t3=22&t4=21";
var up = url.parse(addr, true);
console.log(up);
var t1 = parseFloat(up.query.t1);
var t2 = parseFloat(up.query.t2);
var t3 = parseFloat(up.query.t3);
var t4 = parseFloat(up.query.t4);
var avg = (t1 + t2 + t3 + t4) / 4
fs.writeFileSync("marks.txt", `Marks of t1:${t1}\nMarks of t2:${t2}\nMarks of t3:${t3}\nMarks of t4:${t4}\nAverage of all: ${avg}`)