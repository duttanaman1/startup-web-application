const router = require('express').Router();

const budgetController = require('../controllers/budget.controller');

router.get('/', budgetController.getHistory);
router.post('/', budgetController.addHistory); // Not used

module.exports = router;
