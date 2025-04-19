const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  expertise: {
    type: [String],
    required: true,
    default: [],
  },
  bio: {
    type: String,
  },
  isMentor: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Mentor", mentorSchema);
