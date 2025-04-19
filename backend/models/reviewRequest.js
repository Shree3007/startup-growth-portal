const mongoose = require("mongoose");

const reviewRequestSchema = new mongoose.Schema({
  pitchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pitch",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("reviewRequest", reviewRequestSchema);
