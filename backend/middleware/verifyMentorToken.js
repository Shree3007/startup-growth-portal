const jwt = require("jsonwebtoken");

const verifyMentorToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.mentor = decoded; // decoded includes _id and email
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

  } else {
    return res.status(403).json({ message: "No token provided" });
  }
};

module.exports = verifyMentorToken;
