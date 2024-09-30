// Controller Controlling? Functionality of Data based on HTTP methods and REST routing
const Note = require('../models/note');

// CRUD ---> find() findById() findByIdandUpdate() findByIdAndDelete()

const fetchNotes = async(req,res) => {
    const notes = await Note.find();
    res.json(notes);

};
// -------------[READ]
const fetchNote = async(req,res) => {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);
};
// -------------[READ]
const createNote = async(req,res) => {
    const {title,body} = req.body;
    const note = await Note.create({
        title: title,
        body: body
    });
    res.json({note:note});
};
// -------------[CREATE]
const updateNote = async(req,res) => {
    const noteId = req.params.noteId
    const {title,body} = req.body;
    const note =await Note.findByIdAndUpdate(noteId, {
        title:title,
        body:body
}

// -------------[UPDATE]
const deleteNote = () => {};
// -------------[DELETE]

module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote
}