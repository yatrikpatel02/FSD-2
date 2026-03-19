/*
var eventemitter=require("events");
var ee=new eventemitter();
ee.emit(event,arg1,arg2,...)
ee.on(event,(p1,p2)=>{})
ee.addListener("","")
ee.removeListener(event)
ee.removeAllListener(event)
*/

var eventemitter = require("events");
var ee = new eventemitter();
ee.on("start", () => {
    console.log("first Execution");
})
ee.emit("start");

ee.on("add", (a, b) => {
    console.log(`addition is ${a + b}`)
})
ee.on("add", () => {
    console.log("done")
    ee.emit("success")
})

ee.on("success", () => {
    console.log("Task Completed")
})

ee.emit('add', 5, 10)