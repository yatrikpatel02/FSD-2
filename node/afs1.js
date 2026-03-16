var fs = require("fs")

fs.mkdir("afs", (e) => {
    if (e)
        throw e;
    console.log("folder Created");
})

fs.writeFile("afs/my.txt", "Asynchronous Task", (e) => {
    if (e) throw e;
    console.log("Written");
})

fs.appendFile("afs/my.txt", "Hii", (e) => {
    if (e) throw e;
    console.log("Appended");
})

fs.readFile("afs/my.txt", "UTF-8", (e, data) => {
    if (e) throw e;
    console.log(data);
})

fs.rename("afs/my.txt", "afs/new.txt", (e) => {
    if (e) throw e;
    console.log("renamed");
})


fs.unlink("afs/my.txt", (e) => {
    if (e) console.log("No such file found" + e);
    console.log("unlinked");
})


fs.copyFile("afs/new.txt", "mynew.txt", (e) => {
    if (e) throw e;
    console.log("copied");
})

fs.rmdir("afs", (e) => {
    if (e) throw e;
    console.log("folder created");
})