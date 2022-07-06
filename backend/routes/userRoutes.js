const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserData,
} = require("../controllers/userController");

router.post("/admin/register-user", registerUser);
router.post("/login", loginUser);
router.get("/admin", getUserData);

module.exports = router;
