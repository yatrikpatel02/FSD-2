const mg = require("mongoose")
mg.connect('mongodb://127.0.0.1:27017/mdb2')
const myschema = new mg.Schema({
    course: String, category: String,
    instructor: String, fees: Number,
    duration: Number, active: Boolean,
    mode: { type: String, enum: ["online", "offline"] }
})

const mymodel = new mg.model("courses", myschema)
const myfun = async () => {
    try {
        /* const data = [
            { course: "MERN", category: "WD", instructor: "ABC", fees: 25000, duration: 4, active: true, mode: "offline" },
            { course: "Python", category: "Programming", instructor: "XYZ", fees: 18000, duration: 3, active: false, mode: "online" },
            { course: "ML", category: "AI", instructor: "MNO", fees: 30000, duration: 6, active: true, mode: "offline" },
            { course: "Data Science", category: "Data Analytics", instructor: "DEF", fees: 28000, duration: 6, active: true, mode: "online" },
            { course: "UI/UX Design", category: "Design", instructor: "PQR", fees: 12000, duration: 2, active: false, mode: "offline" }
        ]
        const result = await mymodel.insertMany(data)
        console.log(result)
        */

        /* const res1 = await mymodel.findOne({ active: true })
        console.log(res1)
        const res2 = await mymodel.findByIdAndUpdate(res1.id, { $set: { fees: 37000, duration: 5 } }, { new: true })
        console.log(res2)
        const res3 = await mymodel.findByIdAndDelete(res1.id);
        if (res3) {
            console.log("deleted", res3);
        } else {
            console.log("No Document Found")
        }
            */
        const res4 = await mymodel.find({}, { name: 1, duration: 1, fees: 1, _id: 0 }).sort({ fees: -1 })
        console.log(res4[1])
        const res5 = await mymodel.find({ mode: "online", fees: { $gt: 25000 } })
        console.log(res5)
        const res6 = await mymodel.updateMany({ course: "Cloud Computing" }, { $set: { fees: 32000, duration: 5, active: true } }, { upsert: true })
        console.log(res6)
        const res7 = await mymodel.countDocuments({ active: true, mode: "offline" })
        console.log(res7)
        // const res8=await mymodel.updateMany({},{$inc:{duration:-1}})
        const res9 = await mymodel.find({ $and: [{ active: true }, { duration: { $gt: 4 } }], $nor: [{ mode: "offline" }] })
        console.log(res9)
        const res10 = await mymodel.updateMany({}, { $mul: { fees: 0.9 } })
        console.log(res10)
    }
    catch (e) { console.log(e) }
}

myfun();
