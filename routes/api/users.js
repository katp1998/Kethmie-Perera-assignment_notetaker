const express = require("express");
const router = express.Router();

//user model
const User = require("../../models/Users");

//route to GET all api/users -- no authentication added
router.get("/", (rq, rs) => {
  User.find().then((users) => rs.json(users));
});

module.exports = router;
