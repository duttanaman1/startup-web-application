require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3000;

const mongodb = require('./mongodb/mongodb.connect');
mongodb.connect();

app.listen(port, function(e) {
	console.log('App listening on port ' + port);
});
