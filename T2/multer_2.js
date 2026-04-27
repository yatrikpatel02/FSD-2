var express = require("express")
var app = express()
var mult = require("multer")
app.use(express.static(__dirname, { index: "multer_2.html" }))
var store = mult.diskStorage({
    destination: "multiple_image",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})
var upload = mult({ storage: store, limits: { fileSize: 10 * 1024 * 1024 } })

app.post("/upload", upload.array("test", 5), (req, res) => {
    const files = req.files;
    if (files) {
        res.type("text/html")
        for (f of files) {
            res.write(`<h2>File ${f.originalname} has been uploaded</h2>`)
        }
        res.send();
    }
    else {
        res.send(`<h2>No file uploaded</h2>`)
    }
})

app.listen(7001)