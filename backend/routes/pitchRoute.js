const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const Pitch = require("../models/pitch");
const User = require("../models/user"); 

router.post("/pitch", upload.single("pitchDeck"), async (req, res) => {
  try {
    const {
      title,
      companyName,
      category,
      fundingRound,
      fundingAmount,
      fundingYear,
      shortDescription,
      longDescription,
      userId: userStringId, 
      coverImage,
      pitchDeckLink,
    } = req.body;

    
    const user = await User.findOne({ userId: userStringId });

    if (!user) {
      return res.status(404).json({ message: "User not found with this userId" });
    }

    
    const newPitch = new Pitch({
      userId: user._id, 
      title,
      companyName,
      category,
      fundingRound,
      fundingAmount,
      fundingYear,
      shortDescription,
      longDescription,
      coverImage,
      pitchDeckLink,
    });

    await newPitch.save();

    res.status(201).json({
      message: "Pitch submitted successfully",
      pitch: newPitch,
    });
  } catch (err) {
    console.error("Pitch upload error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
