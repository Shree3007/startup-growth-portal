const express = require("express");
const router = express.Router();
const ReviewRequest = require("../models/reviewRequest");


router.get("/pending/:mentorId", async (req, res) => {
  const { mentorId } = req.params;

  try {
    const pendingRequests = await ReviewRequest.find({
      mentorId,
      status: "pending",
    })
      .populate("userId", "name") 
      .populate("pitchId", "title") 
      .sort({ createdAt: -1 }); 

    res.status(200).json(pendingRequests);
  } catch (error) {
    console.error("Error fetching pending requests:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
