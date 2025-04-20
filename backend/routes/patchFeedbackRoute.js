const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");

// PATCH: Add mentor feedback to a pitch
router.patch("/feedback/:pitchId", async (req, res) => {
  const { pitchId } = req.params;
  const { mentorId, mentorName, comment } = req.body;

  if (!mentorId || !mentorName || !comment || comment.trim() === "") {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const updatedPitch = await Pitch.findByIdAndUpdate(
      pitchId,
      {
        $push: {
          mentorFeedback: {
            mentorId,
            mentorName,
            comment: comment.trim(),
          },
        },
      },
      { new: true }
    );

    if (!updatedPitch) {
      return res.status(404).json({ message: "Pitch not found" });
    }

    res.status(200).json({ message: "Feedback added successfully." });
  } catch (error) {
    console.error("Error adding mentor feedback:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
