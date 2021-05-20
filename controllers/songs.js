const Song = require("../models/song")
const {Router} = require('express')
const { findByIdAndUpdate } = require("../models/song")
const router = Router()

//get/index route
router.get('/', async (req, res) => {
    const songs = await Song.find({})
    res.json({
        status: 200,
        data: songs
    })
})

//Post route
router.post('/', async (req, res) => {
    const body = req.body
    const newSong = await Song.create(body)
    res.json({
        status: 200,
        data: newSong
    })
})

// Delete songs route
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await Song.findByIdAndDelete(id)
    res.json({
        status: 200,
        message: "Successfully deleted"
    })
})




module.exports = router