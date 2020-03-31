const notesCtrl = {};
const Notice = require('../models/Notices');

notesCtrl.findNotes = async (req, res) => {
    if (req.query == {}) {
        res.send('error');
    }   else {
        var query ={$or:[ { titular: "" }, {autor:""}, { contenido: "" } ] };
        query.$or[0].titular= req.query.titular && req.query.titular.length>0 ? new RegExp(req.query.titular) : ""
        query.$or[1].autor=req.query.autor && req.query.autor.length>0 ? new RegExp(req.query.autor) : ""
        query.$or[2].contenido= req.query.contenido && req.query.contenido.length>0 ? new RegExp(req.query.contenido) : ""
        console.log(query)
        Notice.find(query)
            .then((notice) => {
                res.json(notice);
            })
            .catch((err) => {
                res.send('error: ' + err);
            });
    }
};
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
            res.send(notice)
			console.log('Registró', notice);
		})
		.catch((err) => {
			console.log('Error al crear');
			res.send('error: ' + err);
		});
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
	const query={_id: req.body._id};
	const contenidoUpdate={contenido: req.body.contenido}
	Notice.updateOne(query, contenidoUpdate)
		.then((response) => {
			res.send('do it ma frend')
        })
        .catch((err)=>{
            res.send(errr)
        })
	//const { _id, titular, autor, contenido } = req.body;
	//res.json('Note Updated');
};

module.exports = notesCtrl;