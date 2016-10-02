var OutletManager = require('../outlets/manager'),
    _ = require('lodash'),
    testOutlets = [2,3,4,5,6];

setInterval(() => {
    let outlet = _.sample(testOutlets);
    OutletManager.setOutletStatus(outlet, !OutletManager.getOutletStatus(outlet));
},200);
