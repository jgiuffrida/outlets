var _ = require('lodash'),
    gpio = require('rpi-gpio'),
    q = require('q');

class OutletManager {
    constructor() {
        // Load config junk, set pin mappings and stuff
        this.outletStatus = {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false
        };
        this.outletToPins = {
            1: 40,
            2: 38,
            3: 36,
            4: 32,
            5: 22,
            6: 18,
            7: 16,
            8: 12,
            9: 35,
            10: 33,
            11: 31,
            12: 29,
            13: 15,
            14: 13,
            15: 11,
            16: 7
        };
    }

    getStatus() {
        return this.outletStatus;
    }

    getOutletStatus(outletId) {
        return _.get(this.outletStatus, outletId, false);
    }

    setOutletStatus(outletId, status) {
        var def = q.defer();
        gpio.setup(this.outletToPins[outletId], gpio.DIR_OUT, (err) => {
            if(err) {
                def.reject(err);
            } else {
                // Write reverse status to pin... gotta figure this one out later
                // TOOD: Why do i need to reverse the status?
                gpio.write(this.outletToPins[outletId], !status, (err) => {
                    if(err) {
                        def.reject(err);
                    } else {
                        def.resolve(_.set(this.outletStatus, outletId, status));
                    }
                });
            }
        });

        return def.promise;
    }
}

module.exports = new OutletManager();
