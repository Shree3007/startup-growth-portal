const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Pitch = require("../models/pitch"); 

router.post("/user-pitches", async (req, res) => {
  const { userId } = req.body; 

  if (!userId) return res.status(400).json({ message: "userId is required" });

  try {
    const user = await User.findOne({ userId });
    if (!user) return res.status(404).json({ message: "User not found" });

    const userObjectId = user._id;

    const userPitches = await Pitch.find({ userId: userObjectId }).select("title");
    res.status(200).json(userPitches);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

