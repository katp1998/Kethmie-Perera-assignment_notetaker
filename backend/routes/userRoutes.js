const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserData,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/admin/register-user", protect, registerUser);
router.post("/login", loginUser);
router.get("/admin", getUserData);

module.exports = router;
