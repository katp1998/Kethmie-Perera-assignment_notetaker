//This is to get notes
//@route GET /api/goals @access PRIVATE
const getNotes = (rq, rs) => {
  rs.status(200).json({ message: "get note!" });
};

//This is to set notes
//@route POST /api/goals @access PRIVATE
const setNotes = (rq, rs) => {
  rs.status(200).json({ message: "create note!" });
};

//This is to get notes
//@route GET /api/goals @access PRIVATE
const updateNotes = (rq, rs) => {
  rs.status(200).json({ message: `update note ${rq.params.id}!` });
};

//This is to get notes
//@route GET /api/goals @access PRIVATE
const deleteNotes = (rq, rs) => {
  rs.status(200).json({ message: `delete note ${rq.params.id}!` });
};

module.exports = {
  getNotes,
  setNotes,
  updateNotes,
  deleteNotes,
};
