const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notices.controller');

router.route('/')
    .get(getNotes)    
    .post(createNote);

router.route('/change')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote);

module.exports = router;