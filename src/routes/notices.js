const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote,findNotes, t,deleteNote, test, updateNote } = require('../controllers/notices.controller');

router.route('/')
    .get(getNotes)    
    .post(createNote);
router.route("/test")
    .get(test);

router.route('/t')
    .get(t);


router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote);

router.route('/:search')
    .get(findNotes);

module.exports = router;