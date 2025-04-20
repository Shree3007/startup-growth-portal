const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");
const ReviewRequest = require("../models/reviewRequest");

router.get("/all-requests/:mentorId", async (req, res) => {
  const { mentorId } = req.params;

  try {
    const allRequests = await ReviewRequest.find({ mentorId })
      .populate({
        path: "pitchId",          
        model: "Pitch"
      })
      .populate({
        path: "userId",           
        model: "user",
        select: "name"
      })
      .sort({ requestedAt: -1 });

    res.status(200).json(allRequests);
  } catch (error) {
    console.error("Error fetching review requests:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
