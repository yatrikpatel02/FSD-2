var fs = require("fs")
r = fs.readFileSync("temp.txt", "UTF-8")
let vowelCount = 0
var v = "aeiouAEIOU"

for (let i = 0; i < r.length; i++) {
    if (v.includes(r[i])) {
        vowelCount++;
    }
}

// OR 
/*
for (i of r) {
    if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' || i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U') {
        vowelCount++;
    }
}
    */

fs.appendFileSync("temp.txt", "Total Vowel Count - " + vowelCount)