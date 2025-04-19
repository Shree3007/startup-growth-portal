const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentors');
const generateToken = require('../utils/generateToken');

// POST /api/login
router.post('/mentor-login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const mentor = await Mentor.findOne({ email });

    if (!mentor) {
      return res.status(401).json({ message: 'Mentor not found' });
    }

    if (mentor.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(mentor._id);

    res.json({
      token,
      mentor: {
        id: mentor._id,
        name: mentor.name,
        email: mentor.email,
        company: mentor.company,
        expertise: mentor.expertise,
        bio: mentor.bio,
      },
    });
  } catch (error) {
    console.error('Login Error:', error); 
    res.status(500).json({ message: 'Server error', error: error.message });
  }
  
});

module.exports = router;
