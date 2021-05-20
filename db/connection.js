require("dotenv").config();
const mongoose = require("mongoose");

const {MONGODB_URL} = process.env;

// connect
const db = mongoose.connection
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// message
db.on("open", () => console.log("connected to mongo"))
.on("close", () => console.log("disconnected to mongo"))
.on("error", (error) => console.log(error))


module.exports = mongoose