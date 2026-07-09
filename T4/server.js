const expr = require("express");
const app = expr();
const mg = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(expr.json());
mg.connect("mongodb://127.0.0.1:27017/mdb2");
const myschema = new mg.Schema(
    { username: String }
)

const mymodel = new mg.model("userdata", myschema)

app.post("/data", async (req, res) => {
    try {
        const { username } = req.body;
        const data = new mymodel({
            username: username
        })
        await data.save();
        res.send()
    }
    catch (e) {
        console.log(e)
    }
})
app.listen(5000)