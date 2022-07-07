const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");
const User = require("../models/userModel");

//This is to get notes
//@route GET /api/goals @access PRIVATE
const getNotes = asyncHandler(async (rq, rs) => {
  const notes = await Note.find({ user: rq.user.id });
  rs.status(200).json(notes);
});

//This is to set notes
//@route POST /api/goals @access PRIVATE
const setNotes = asyncHandler(async (rq, rs) => {
  if (!rq.body.text) {
    rs.status(400);
    throw new Error("please add a text field!");
  }
  const note = await Note.create({
    text: rq.body.text,
    title: rq.body.text,
    user: rq.user.id,
  });

  rs.status(200).json(note);
});

//This is to update notes
//@route PUT /api/goals @access PRIVATE
const updateNotes = asyncHandler(async (rq, rs) => {
  const note = await Note.findById(rq.params.id);

  //if the id is not set
  if (!note) {
    rs.status(400);
    throw new Error("note not found");
  }

  //checking for user
  if (!rq.user) {
    rs.status(401);
    throw new Error("User not found");
  }

  //checking if the same user is making the changes
  if (note.user.toString() !== rq.user.id) {
    rs.status(401);
    throw new Error("Not the same user");
  }
  const updatedNote = await Note.findByIdAndUpdate(rq.params.id, rq.body, {
    new: true,
  });

  rs.status(200).json(updatedNote);
});

//This is to delete notes
//@route DELETE /api/goals @access PRIVATE
const deleteNotes = asyncHandler(async (rq, rs) => {
  const note = await Note.findById(rq.params.id);

  //no note is detected
  if (!note) {
    rs.status(400);
    throw new Error("note not found!");
  }

  //checking for user
  if (!rq.user) {
    rs.status(401);
    throw new Error("User not found");
  }

  //checking if the same user is making the changes
  if (note.user.toString() !== rq.user.id) {
    rs.status(401);
    throw new Error("Not the same user");
  }

  await Note.remove();
  rs.status(200).json({ id: rq.params.id });
});

module.exports = {
  getNotes,
  setNotes,
  updateNotes,
  deleteNotes,
};
