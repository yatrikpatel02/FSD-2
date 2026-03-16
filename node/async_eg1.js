var fs = require("fs")

fs.writeFile("help.txt", "you are creating the file", (e) => {
    if (e) throw e;
    fs.appendFile("help.txt", "\nyou are appending the data", (e) => {
        if (e) throw e;
        fs.readFile("help.txt", "UTF-8", (e, data) => {
            if (e) throw e;
            console.log(data);
            console.log("Thank you for using my program")
        })
    })
})