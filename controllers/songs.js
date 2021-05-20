const Song = require("../models/song")
const {Router} = require('express')
const { findByIdAndUpdate } = require("../models/song")
const router = Router()

//test route
router.get('/', async (req, res) => {
    res.json({
        status: 200,
        message: "You've hit the router"
    })
})





module.exports = router