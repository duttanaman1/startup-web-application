const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rawMaterialSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	purchasedFrom: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		default: 0,
		min: 0,
	},
});

module.exports = mongoose.model('rawMaterial', rawMaterialSchema);
