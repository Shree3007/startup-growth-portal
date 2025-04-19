const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Pitch = require("../models/pitch"); 

router.post("/user-pitches", async (req, res) => {
    const { userId } = req.body;

  try {
    const user = await User.findOne({ userId: stringUserId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const objectId = user._id;

    const userPitches = await Pitch.find({ userId: objectId }).select("title");

    res.status(200).json(userPitches);
  } catch (error) {
    console.error("Error fetching user pitches:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;

