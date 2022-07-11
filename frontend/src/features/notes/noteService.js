import axios from "axios";

const API_URL = "/api/notes";

// Create new note
const createNote = async (noteTitle, noteText, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, noteTitle, noteText, config);

  return response.data;
};

// Get user notes
const getNote = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user note
const deleteNote = async (NoteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + NoteId, config);

  return response.data;
};

const noteService = {
  createNote,
  getNote,
  deleteNote,
};

export default noteService;
