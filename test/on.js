var OutletManager = require('../outlets/manager'),
    _ = require('lodash'),
    testOutlets = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    idx = 0,
    delta = 1;

var interval = setInterval(() => {
    let outlet = testOutlets[idx];
    OutletManager.setOutletStatus(outlet, true);
    

    idx = idx+delta;
    if(idx > testOutlets.length) {
        clearInterval(interval);
        process.exit();
    }
},200);
