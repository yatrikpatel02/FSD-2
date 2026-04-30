var express = require("express")
var app = express();
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "node_mailer2.html" }))

var nm = require("nodemailer")
var trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "yatrikpatel02@gmail.com",
        pass: "xwsp ibtp bcup qqtc"
    }
})

app.post("/data", (req, res) => {
    var mailoptions = {
        from: "yourFATHER@gmail.com",
        to: req.body.email,
        subject: "Nodemailer Testing 2",
        text: "Simple Text Sent",
        html: `<h1>your message: ${req.body.response}</h1>`
    }
    trans.sendMail(mailoptions, (e, d) => {
        if (e) {
            res.send(`<h1>your response is not recorded!</h1>`)
        }
        else {
            res.send(`<h1>your response is recorded</h1>`);
        }
    })
})
app.listen(5000)