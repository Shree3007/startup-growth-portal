const jwt = require('jsonwebtoken');
const Mentor = require('../models/mentors');

const protectMentor = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const mentor = await Mentor.findById(decoded.id).select('-password');

    if (!mentor) {
      return res.status(401).json({ message: 'Mentor not found' });
    }

    req.mentor = mentor;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token invalid or expired' });
  }
};

module.exports = protectMentor;
