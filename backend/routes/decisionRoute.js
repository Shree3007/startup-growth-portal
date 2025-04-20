const express = require("express");
const router = express.Router();
const ReviewRequest = require("../models/reviewRequest");
const Pitch = require("../models/pitch");



router.patch("/decision/:id", async (req, res) => {
  const { id } = req.params; // reviewRequestId
  const { action } = req.body;

  try {
    if (!["approved", "rejected"].includes(action)) {
      return res.status(400).json({ message: "Invalid action. Must be 'approved' or 'rejected'." });
    }

    const reviewRequest = await ReviewRequest.findById(id);
    if (!reviewRequest) {
      return res.status(404).json({ message: "Review request not found." });
    }

    if (reviewRequest.status !== "pending") {
      return res.status(400).json({ message: "This request has already been processed." });
    }


    // Update reviewRequest status
    reviewRequest.status = action;
    await reviewRequest.save();


    res.status(200).json({
      message: `Request ${action} successfully.`,
      status: reviewRequest.status,
    });
  } catch (error) {
    console.error("Error handling review request decision:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
