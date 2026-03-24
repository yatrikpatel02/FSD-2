var http=require("http");
var fs=require("fs");
var url=require("url");
var addr="https://localhost:5055/my.html";
var p=url.parse(addr,true);
console.log(p);
http.createServer((req,res)=>{
    fs.readFile("."+p.pathname,(e,d)=>{
        if(e){
            res.end("No file")
        }
        else{
            res.writeHead(200,{"Content-type":"text/html"});
            res.end(d);
        }
    })
}).listen(5055)