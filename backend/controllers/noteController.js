const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

//This is to get notes
//@route GET /api/goals @access PRIVATE
const getNotes = asyncHandler(async (rq, rs) => {
  rs.status(200).json({ message: "get note!" });
});

//This is to set notes
//@route POST /api/goals @access PRIVATE
const setNotes = asyncHandler(async (rq, rs) => {
  if (!rq.body.text) {
    rs.status(400);
    throw new Error("please add a text field!");
  }
  rs.status(200).json({ message: "create note!" });
});

//This is to update notes
//@route PUT /api/goals @access PRIVATE
const updateNotes = asyncHandler(async (rq, rs) => {
  rs.status(200).json({ message: `update note ${rq.params.id}!` });
});

//This is to delete notes
//@route DELETE /api/goals @access PRIVATE
const deleteNotes = asyncHandler(async (rq, rs) => {
  rs.status(200).json({ message: `delete note ${rq.params.id}!` });
});

module.exports = {
  getNotes,
  setNotes,
  updateNotes,
  deleteNotes,
};
