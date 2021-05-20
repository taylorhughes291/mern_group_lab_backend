const {Schema, model} = require("mongoose")

//Song schema
const songSchema = new Schema ({
    name: String,
    artist: String,
    time: String,
    isFavorite: {type: Boolean, default: false}
}, {timestamps: true})

//Publish the model
const Song = model('Song', songSchema)

//export the published model
module.exports = Song