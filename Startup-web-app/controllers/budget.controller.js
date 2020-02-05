const history = require('../models/history.model');

const deleteHistory = async (id) =>{
	console.log(id);
	const data = await history.findOneAndDelete({target: id})
	console.log(data);
}

const getHistory = async (req, res, next) => {
	try {
		const data = await history.find({});
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

const addHistory = (req, debit) => {
	const { price, name ,id} = req;
	// console.log(id);
	
	var content = { price: price || 0,name,target:id, debit, transactionDate: new Date().toDateString() };
	history.create(content);
};

module.exports = { addHistory, getHistory ,deleteHistory};
