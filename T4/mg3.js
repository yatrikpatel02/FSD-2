const mg = require('mongoose');
const validator = require("validator");
mg.connect('mongodb://127.0.0.1:27017/mdb2')

const myschema = ({
    name: {
        type: String,
        maxlength: [8, "Maximum length should be 8"],
        minlength: [4, "Minimum length should be 4"],
        required: true,
        uppercase: true,
        trim: true,
        match: [/^[A-Za-z]+[0-9]+$/, "must start with letter and end with digit only"]
    },
    email: {
        required: true,
        unique: true,
        type: String,
        match: [/\S+@\S+\.\S+/, "Email should be unique"]
    },
    alternateemail: {
        type: String,
        validate: [validator.isEmail, "Not Valid"]
    },
    age: {
        type: Number,
        max: 48,
        min: 18
    },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        default: "buyer"
    },
    product: {
        type: String,
        validate: [validator.isAlphanumeric, "Not Valid alphanumeric code!"]
    }
})

const mymodel = new mg.model("products", myschema)

const validfun = async () => {
    try {
        const data = new mymodel({
            name: "XYZ123",
            email: "xyz1@gmail.com",
            alternateemail: "xy1@gmail.com",
            age: 19,
            role: "seller",
            product: "myproduct1"
        })
        const result = await data.save()
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
}

validfun()