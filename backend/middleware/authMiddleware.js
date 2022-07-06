const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (rq, rs, next) => {
  let token;

  if (
    rq.headers.authorization &&
    rq.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = rq.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      rq.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      rs.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    rs.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
