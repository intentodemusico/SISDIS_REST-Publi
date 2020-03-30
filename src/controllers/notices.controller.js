const notesCtrl = {};
const Notice = require('../models/Notices');

notesCtrl.getNotes = async (req, res) => {
	console.log('hola');
	const notice = await Notice.find();
	res.json(notice);
};

notesCtrl.createNote = async (req, res) => {
	console.log('error');
	console.log(req.body);
	const noticeData = {
		titular: req.body.titular,
		autor: req.body.autor,
		contenido: req.body.contenido
	};
	console.log('body', noticeData);
	Notice.create(noticeData)
		.then((notice) => {
			console.log('Registró', notice);
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
	const query = { _id: req.body._id };
	Notice.deleteOne(query)
		.then((response) => {
            res.send(response)
			console.log('Eliminado', response);
		})
		.catch((err) => {
            console.log(err);
            res.send(err)
		});
};

notesCtrl.updateNote = async (req, res) => {
	const { _id, titular, autor, contenido } = req.body;
	res.json('Note Updated');
};

module.exports = notesCtrl;
