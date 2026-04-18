var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())
app.get("/",(req,res)=>{
    res.cookie("fname","abc")
    res.cookie("lname","xyz")
    res.cookie("subject","FSD-2",{maxAge:5000})
    res.send(req.cookies);
})
app.listen(7000);