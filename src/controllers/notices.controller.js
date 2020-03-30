const notesCtrl = {};
const Notice= require('../models/Notices');



notesCtrl.getNotes = async (req, res) => {
   
    const lostPet=await Notice.find();
    res.json(lostPet);
};

notesCtrl.createNote = async (req, res) => {
    res.send("crepost");
};

notesCtrl.getNote = async (req, res) => {
    res.send("getonepost");
}

notesCtrl.deleteNote = async (req, res) => {
    res.send("depost");
}

notesCtrl.updateNote = async (req, res) => {
   
    res.json('Note Updated');
}

module.exports = notesCtrl;