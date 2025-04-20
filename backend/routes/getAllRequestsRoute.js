const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");
const ReviewRequest = require("../models/reviewRequest");
const verifyMentorToken = require("../middleware/verifyMentorToken"); 

router.get("/all-requests", verifyMentorToken, async (req, res) => {
    const mentorId = req.mentor.id;
  
    try {
      const allRequests = await ReviewRequest.find({ mentorId })
        .populate("pitchId")
        .populate({ path: "userId", select: "name" })
        .sort({ requestedAt: -1 });
  
      res.status(200).json(allRequests);
    } catch (error) {
      console.error("Error fetching review requests:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  

module.exports = router;
