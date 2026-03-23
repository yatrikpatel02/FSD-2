var http = require("http")
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("<h3>Welcome Students</h3>");
    // res.write("gibhrbuy");        //do not write after end
}).listen(5001, () => { console.log("Server Started at http://localhost:5001") })
