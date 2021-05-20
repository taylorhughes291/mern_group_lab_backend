const {Schema, model} = require("mongoose")

//Song schema
const songSchema = new Schema ({
    name: String,
    artist: String,
    time: String
}, {timestamps: true})

//Publish the model
const Song = model('Song', songSchema)

//export the published model
module.exports = Song