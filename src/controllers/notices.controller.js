const notesCtrl = {};
const Notice = require('../models/Notices');

notesCtrl.test = async (req, res) => {
    res.json("{res:1}");
};

notesCtrl.t=async (req, res) => {
    res.send('hello world');
};

notesCtrl.findNotes = async (req, res) => {
    const noticeData = {
        search: req.body.search}
        
    var selector = {"Search": {$regex: /.*/, $options:"i"}}
    Notice.findOne().then(() => {
        console.log('Registró');
    })
    .catch((err) => {
        console.log('Error al crear');
        res.send('error: ' + err);
        res.json(notice);
    });
	
};

notesCtrl.getNotes = async (req, res) => {
	const notice = await Notice.find();
	res.json(notice);
};

notesCtrl.createNote = async (req, res) => {
	
	const noticeData = {
		titular: req.body.titular,
		autor: req.body.autor,
		contenido: req.body.contenido
	};
	Notice.create(noticeData)
		.then((notice) => {
			console.log('Registró',notice);
		})
		.catch((err) => {
			console.log('Error al crear');
			res.send('error: ' + err);
		});
};

notesCtrl.getNote = async (req, res) => {
	res.send('getonepost');
};

notesCtrl.deleteNote = async (req, res) => {
	res.send('depost');
};

notesCtrl.updateNote = async (req, res) => {
    const { _id, titular, autor, contenido } = req.body;
	res.json('Note Updated');
};

module.exports = notesCtrl;
