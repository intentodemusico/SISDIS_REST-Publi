const notesCtrl = {};
const Notice = require('../models/Notices');

notesCtrl.findNotes = async (req, res) => {

    res.log("ola");
	
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
	const titular={titular: req.body.titular};
    const autor={autor: req.body.autor};
    const contenido={contenido: req.body.contenido};
    if (titular!= null){
        const find=Notice.findOne(titular);
        return find;
    }
    if (autor!= null){
        const find=Notice.findOne(autor);
        return find;
    }
    if (contenido!= null){
        const find=Notice.findOne(contenido);
        return find;
    }
};

notesCtrl.deleteNote = async (req, res) => {
	res.send('depost');
};

notesCtrl.updateNote = async (req, res) => {
    const { _id, titular, autor, contenido } = req.body;
	res.json('Note Updated');
};

module.exports = notesCtrl;
