var url = require("url");
var addr = "https://video.google.com:8080/ljuniversity/about?branch=CSE&year=2025#students";
var up = url.parse(addr, true);
console.log(up);
var year = up.query.year;
if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
    console.log("year is leap year: " + year)
}
else {
    console.log("Not a leap year: " + year)
}
process.noDeprecation = true;          //to remove warning at runtime