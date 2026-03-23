var http = require("http");
var fs = require("fs")
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end("<img src='images.jpeg' alt='Image unavailable'/>")
    }
    else if (req.url === "/images.png") {
        var i = fs.readFileSync("images.png");
        res.writeHead(200, { "content-type": "image/png" })
        res.end(i);
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end("no page");
    }
    res.end();
}).listen(5002);
