const { Schema, model } = require('mongoose');

const StoreSchema = new Schema(
	{
		titular: String,
		autor: String,
		contenido: String
	},
	{
		timestamps: true
	}
);

module.exports = model('Notices', StoreSchema);
