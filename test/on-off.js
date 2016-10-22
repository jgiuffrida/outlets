var OutletManager = require('../outlets/manager'),
    _ = require('lodash'),
    testOutlets = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16],
    idx = 0,
    delta = 1;

setInterval(() => {
    let outlet = testOutlets[idx];
    OutletManager.setOutletStatus(outlet, !OutletManager.getOutletStatus(outlet));
    if(delta == 1 && idx>=testOutlets.length) {
        delta = -1;
    }

    if(delta == -1 && idx <= 0) {
        delta = 1;
    }

    idx = idx+delta;
},200);
