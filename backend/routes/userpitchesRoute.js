const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");

router.get("/user/:userId/pitches", async (req, res) => {
  const { userId } = req.params;

  try {
    const pitches = await Pitch.find({ userId }, "_id title");

    res.status(200).json(pitches);
  } catch (error) {
    console.error("Error fetching user pitches:", error);
    res.status(500).json({ message: "Failed to fetch user pitches." });
  }
});

module.exports = router;
