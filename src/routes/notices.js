const { Router } = require('express');
const router = Router();

const { getNotes, createNote,findNotes,deleteNote, updateNote } = require('../controllers/notices.controller');

router.route('/')
    .get(getNotes)    
    .post(createNote);

router.route('/change')
    .delete(deleteNote)
    .put(updateNote);

router.route('/search')
    .get(findNotes);

module.exports = router;