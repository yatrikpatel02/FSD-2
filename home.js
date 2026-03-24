// Write node.js script to print “Welcome to Home Page” with two links containing two pages named as “About Us” and “Contact Us” on home page of server. If user request for About Us page it should display “Welcome to LJ University” in bold font-style with blue color and if user request for Contact Us page it should display “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if any other request is requested it shows “Page not found” message in plaintext.

var http = require("http");
var fs = require("fs");
var url = require("url");
var addr = "https://localhost:5055/node.html";
var p = url.parse(addr, true);
console.log(p);
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write("<a href='/aboutus'>about us</a>")
        res.end("<a href='/contactus'>contact us</a>")
    }
    else if (req.url === '/aboutus') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end("<h1 style='color:blue;font-style:italic'>Welocome to LJ university</h1>")
    }
    else if (req.url === "/contactus") {
        res.writeHead(200, { "content-type": "text/html" })
        res.end("<h1 style='color:red;font-style:italic'>Email:abc@ljinstitutes.edu.in</h1>");
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end("page not found");
    }
}).listen(5055)