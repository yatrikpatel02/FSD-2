var p = require("path")
var fs = require("fs")
var mypath = "myfile/first.txt"
var d = p.dirname(mypath);
var b = p.basename(mypath);
var newpath = d + '/' + b
fs.mkdir(d, (e) => {
    if (e) throw e;
    else {
        console.log("Folder created")
        fs.writeFile(newpath, "Hiiii! HOW ARE YOU!", (e) => {
            if (e) throw e;
            else {
                console.log("Written")
                fs.copyFile(newpath, "second.txt", (e) => {
                    if (e) throw e;
                    else {
                        console.log("file copied");
                        fs.unlink(newpath, (e) => {
                            if (e) throw e;
                            else {
                                console.log("old file deleted")
                                fs.rmdir(d, (e) => {
                                    if (e) throw e;
                                    else {
                                        console.log("directory removed")
                                    }
                                })
                            }

                        })
                    }

                })
            }

        })
    }
})