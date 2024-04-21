const express = require('express')
const router = express.Router()
const Crops = require('../models/Crop')
router.get('/', async(req, res) => {
    try {
        const crops = await Crops.find()
        res.status(200).json(crops)
    } catch (error) {
        res.status(200).json({message: "error"})
    }
})
module.exports = router