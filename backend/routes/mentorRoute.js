const express = require("express");
const mentors = require('../models/mentors');
const router = express.Router();

router.get('/mentors', async(req, res) => {
    try {
        const result = await mentors.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "Error ", error})
    }
});

module.exports = router;