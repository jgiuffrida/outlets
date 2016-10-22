var OutletManager = require('../outlets/manager'),
    _ = require('lodash'),
    testOutlets = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16],
    idx = 0,
    delta = 1;

var interval = setInterval(() => {
    let outlet = testOutlets[idx];
    OutletManager.setOutletStatus(outlet, false);
    

    idx = idx+delta;
    if(idx === testOutlets.length) {
        clearInterval(interval);
    }
},200);
