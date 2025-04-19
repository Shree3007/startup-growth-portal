const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch"); 

router.get("/getpitches", async (req, res) => {
  try {
    const pitches = await Pitch.find();

    const formattedPitches = pitches.map(pitch => ({
      _id: pitch._id,
      userId: pitch.userId,
      title: pitch.title,
      companyName: pitch.companyName,
      shortDescription: pitch.shortDescription,
      longDescription: pitch.longDescription,
      category: pitch.category,
      fundingRound: pitch.fundingRound,
      fundingAmount: pitch.fundingAmount,
      fundingYear: pitch.fundingYear,
      pitchDeckLink: pitch.pitchDeckLink,
      coverImage: pitch.coverImage,
      views: pitch.views,
      likes: pitch.likes,
      submittedAt: pitch.submittedAt,
      commentCount: pitch.comments?.length || 0,
    }));

    res.status(200).json(formattedPitches);
  } catch (error) {
    console.error("Error fetching pitches:", error);
    res.status(500).json({ message: "Server error while fetching pitches." });
  }
});

module.exports = router;
