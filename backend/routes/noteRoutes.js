const express = require("express");
const {
  getNotes,
  setNotes,
  updateNotes,
  deleteNotes,
} = require("../controllers/noteController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes).post(protect, setNotes);
router.route("/:id").put(protect, updateNotes).delete(protect, deleteNotes);

module.exports = router;
