const router = require('express').Router();

const soldProductController = require('../controllers/soldProduct.controller');

router.post('/', soldProductController.createsoldProduct);
router.get('/', soldProductController.getsoldProducts);
router.put('/:soldProductId', soldProductController.updatesoldProduct);
// router.delete('/:soldProductId', soldProductController.deletesoldProduct);
router.get('/delete/:soldProductId', soldProductController.deletesoldProduct);

module.exports = router;
