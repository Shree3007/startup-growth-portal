const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");
const protectMentor = require("../middleware/protectMentor"); 


router.patch("/feedback", protectMentor, async (req, res) => {
  const { id } = req.body;
  const { comment } = req.body;

  
  const mentorId = req.mentor._id;
  const mentorName = req.mentor.name;

  if (!comment || comment.trim() === "") {
    return res.status(400).json({ message: "Comment is required." });
  }

  try {
    const updatedPitch = await Pitch.findByIdAndUpdate(
      id,
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
