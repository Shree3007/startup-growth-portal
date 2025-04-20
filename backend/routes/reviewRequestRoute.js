const express = require("express");
const router = express.Router();
const User = require("../models/user");
const ReviewRequest = require("../models/reviewRequest");

router.post("/review-request", async (req, res) => {
  const { userId: firebaseUid, pitchId, mentorId } = req.body;

  try {
    const user = await User.findOne({ userId: firebaseUid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    const existingRequest = await ReviewRequest.findOne({
      userId: user._id,
      pitchId,
      mentorId,
    });

    if (existingRequest) {
      return res.status(409).json({ message: "Review request already submitted" });
    }

    const newRequest = new ReviewRequest({
      pitchId,
      mentorId,
      userId: user._id,
    });

    await newRequest.save();
    res.status(200).json(newRequest);
    
  } catch (error) {
    console.error("Error creating review request:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;