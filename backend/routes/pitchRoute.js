
const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const Pitch = require("../models/pitch");



router.post("/pitch", upload.single("pitchDeck"), async (req, res) => {
  try {
    const {
      title,
      companyName,
      category,
      fundingRound,
      fundingAmount,
      fundingYear,
      shortDescription,
      longDescription,
      userId,
      coverImage,
      pitchDeckLink,
    } = req.body;


    // Save pitch to MongoDB
    const newPitch = new Pitch({
      userId,
      title,
      companyName,
      category,
      fundingRound,
      fundingAmount,
      fundingYear,
      shortDescription,
      longDescription,
      coverImage,
      pitchDeckLink,
    });

    await newPitch.save();

    res.status(201).json({
      message: "Pitch submitted successfully",
      pitch: newPitch,
    });
  } catch (err) {
    console.error("Pitch upload error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
