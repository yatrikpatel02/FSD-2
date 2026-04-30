var nm = require("nodemailer")
var trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "yatrikpatel02@gmail.com",
        pass: "xwsp ibtp bcup qqtc"
    }
})

var mailoptions = {
    from: "yourFATHER@gmail.com",
    to: "ayushrana2482@gmail.com,ahemadraza916@gmail.com",
    subject: "Nodemailer Testing",
    text: "Simple Text Sent",
    html: "<h1>Thank you for sending my SON!</h1>",
    attachments: [{ filename: "img.jpeg", path: "./img.jpeg" }]
}
trans.sendMail(mailoptions, (e, d) => {
    if (e) {
        console.log(e);
    }
    else {
        console.log(d);
    }
})