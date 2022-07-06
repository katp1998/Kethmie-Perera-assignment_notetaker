const express = require("express");
const {
  getNotes,
  setNotes,
  updateNotes,
  deleteNotes,
} = require("../controllers/noteController");
const router = express.Router();

router.route("/").get(getNotes).post(setNotes);
router.route("/:id").put(updateNotes).delete(deleteNotes);

module.exports = router;
