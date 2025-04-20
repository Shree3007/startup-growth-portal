const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch"); // adjust the path as needed

router.get("/comments/:pitchId", async (req, res) => {
  const { pitchId } = req.params;

  try {
    const pitch = await Pitch.findById(pitchId).select("comments");

    if (!pitch) {
      return res.status(404).json({ message: "Pitch not found" });
    }

    // Only return name and commentText
    const comments = pitch.comments.map((comment) => ({
      name: comment.name,
      commentText: comment.commentText,
      commentedAt: comment.commentedAt,
    }));

    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
