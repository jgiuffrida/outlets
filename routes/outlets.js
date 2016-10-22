var express = require('express');
var router = express.Router();
var OutletManager = require('../outlets/manager');

/* GET outlets listing. */
router.get('/', function(req, res, next) {
    res.json(OutletManager.getStatus());
});

// get status of an outlet?
router.get('/:outletId', function(req, res, next) {
    res.json(OutletManager.getOutletStatus(req.params.outletId));
});

// Post to on/off outlets
router.post('/:outletId', (req, res, next) => {
    console.log('setting',req.params.outletId,'to',req.body.value, typeof req.body.value);
    OutletManager.setOutletStatus(req.params.outletId, parseInt(req.body.value,10));   
    res.json(OutletManager.getOutletStatus(req.params.outletId));
});

router.get('/:outletId/on', (req, res, next) => {
    OutletManager.setOutletStatus(req.params.outletId, true);
    res.json(OutletManager.getOutletStatus(req.params.outletId));
});

router.get('/:outletId/off', (req, res, next) => {
    OutletManager.setOutletStatus(req.params.outletId, false);
    res.json(OutletManager.getOutletStatus(req.params.outletId));
});

module.exports = router;
