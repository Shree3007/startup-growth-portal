const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");

router.get("/feedback/:pitchId", async (req, res) => {
  const { pitchId } = req.params;

  try {
    const pitch = await Pitch.findById(pitchId).select("mentorFeedback");

    if (!pitch) {
      return res.status(404).json({ message: "Pitch not found" });
    }

    const feedback = pitch.mentorFeedback.map((entry) => ({
      mentorName: entry.mentorName,
      comment: entry.comment,
      date: entry.date,
    }));

    res.status(200).json(feedback);
  } catch (error) {
    console.error("Error fetching mentor feedback:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
