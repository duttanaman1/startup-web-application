const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
	transactionDate: {
		type: Date,
		default: new Date().toDateString(),
	},
	price: {
		type: Number,
		default: 0,
	},
	debit: {
		type: Boolean,
		required: true,
	},
	name:{
		type: String,
		required: true
	},
	target:{
		type: Schema.ObjectId
	}
});

module.exports = mongoose.model('history', historySchema);
