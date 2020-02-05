const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/startup', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to mongoDB');
	} catch (error) {
		console.error(error);
		console.log('Could not connect');
	}
}

module.exports = { connect };
