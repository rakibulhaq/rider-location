const router = require('express').Router();

const RiderPositionController = require('../../api/v1/rider-position').RiderPositionController;

let riderPositionController = new RiderPositionController();

router.get('/', riderPositionController.getAll);
router.get('/:id', riderPositionController.getRiderPositionInfo);
router.post('/', riderPositionController.create);
router.delete('/:id', riderPositionController.remove);
router.put('/:id', riderPositionController.update);

module.exports = router;