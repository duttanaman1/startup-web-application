const express = require('express');
const bodyParser = require('body-parser');

const rawMaterialRoute = require('./routes/rawMaterialRouter');
const soldProductRoute = require('./routes/soldProductRouter');
const feedbackRoute = require('./routes/feedbackRouter');
const budgetRoute = require('./routes/budgetRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/rawMaterial', rawMaterialRoute);
app.use('/soldProduct', soldProductRoute);
app.use('/feedback', feedbackRoute); // Not ready
app.use('/budget', budgetRoute);

app.get('/',(req,res,next)=>{
	res.json({message: 'Working'})
})

app.use((err, req, res, next) => {
	res.status(500).json({ message: err.message });
});

module.exports = app;
