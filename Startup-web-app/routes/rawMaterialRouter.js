const router = require('express').Router();
const rawMaterialController = require('../controllers/rawMaterial.controller');

router.post('/', rawMaterialController.createRawMaterial);
router.get('/', rawMaterialController.getRawMaterials);
router.put('/:rawMaterialId', rawMaterialController.updateRawMaterial);
// router.delete('/:rawMaterialId', rawMaterialController.deleteRawMaterial);
router.get('/delete/:rawMaterialId', rawMaterialController.deleteRawMaterial);

module.exports = router;
