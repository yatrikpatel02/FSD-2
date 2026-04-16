// 1.
// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit 
// button using get method.
// 1) After clicking submit button the content of submitted details should be represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page. (Use next() to route page)

var express = require("express");
var app = express();

app.use(express.urlencoded());
app.get("/", (req, res) => {
    res.send(`<form action="/login" method="get">
        <input type="text" name="un" placeholder="Username"/>
<input type="password" name="pass" placeholder="Password"/>
<textarea name="ta"></textarea>
        <button type="submit">submit</button>
        </form> `);
})
app.get("/login", (req, res) => {
    req.message=req.query.ta;
    res.send(`<h1>Name : ${req.query.un}</h1>\n<h1>Password : ${req.query.pass}</h1>\n<a href="/message">show vowel</a>`);
})
const countVowels = (req, res, next) => {
    const message = req.query.ta || "";
    const vowels = message.match(/[aeiou]/gi);
    req.vowelCount = vowels ? vowels.length : 0;
    req.message=message;
    next(); // Moves to the next function in the route
};

app.get("/message", countVowels, (req, res) => {
    res.send(`
        <h2>Original Message: ${req.message}</h2>
        <h3>Vowel Count: ${req.vowelCount}</h3>
        <a href="/">Go Home</a>
    `);
});
app.listen(5001);