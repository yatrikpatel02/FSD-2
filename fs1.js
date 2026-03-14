var fs = require("fs");
// fs.mkdirSync("abc");                               // if directory already exists then gives error
fs.writeFileSync("abc/temp.txt", "Hello");            //if file exits then it overwrite the codes
var r = fs.readFileSync("abc/temp.txt");               // always return buffer data
console.log(r.toString())

fs.appendFileSync("abc/temp.txt", "! How are you")
var r1 = fs.readFileSync("abc/temp.txt", "UTF-8");        //UTF-8 gives data as it was given
console.log(r1)

fs.renameSync("abc/temp.txt", "abc/new.txt")            // to rename a file
fs.unlinkSync("abc/new.txt")                           // to delete a file
fs.rmdirSync("abc")                                    // to remove a directory