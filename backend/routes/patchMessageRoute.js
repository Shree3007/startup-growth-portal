const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");

router.patch("/pitches/comment", async (req, res) => {
  const { id, userId, name, commentText } = req.body;

  if (!id || !userId || !name || !commentText) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const updatedPitch = await Pitch.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: {
            userId,
            name,
            commentText,
            commentedAt: new Date(),
          },
        },
      },
      { new: true }
    );

    if (!updatedPitch) {
      return res.status(404).json({ message: "Pitch not found" });
    }

    res.status(200).json({ message: "Comment added", pitch: updatedPitch });
  } catch (error) {
    console.error("Error updating pitch with comment:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
