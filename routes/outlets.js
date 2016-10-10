var express = require('express');
var router = express.Router();
var OutletManager = require('../outlets/manager');

module.exports = function (expressWs) {
    router.ws('/status', (ws, req) => {
        ws.on('status', () => {
            ws.send(OutletManager.getStatus());
        });
    });

    var wss = expressWs.getWss('/status');
    console.log(wss);
    
    /* GET outlets listing. */
    router.get('/', function (req, res, next) {
        res.json(OutletManager.getStatus());
    });

    // get status of an outlet?
    router.get('/:outletId', function (req, res, next) {
        res.json(OutletManager.getOutletStatus(req.params.outletId));
    });

    // Post to on/off outlets
    router.post('/:outletId', (req, res, next) => {
        OutletManager.setOutletStatus(req.params.outletId, req.body.value);
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

    return router;
};
