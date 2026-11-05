const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Token Not Found",
    });
  }

  const bearerToken = token.split(" ")[1];

  jwt.verify(bearerToken, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid or Expired Token",
      });
    }

    req.admin = decoded;
    next();
  });
};

module.exports = authMiddleware;
