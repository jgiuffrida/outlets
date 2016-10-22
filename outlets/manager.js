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
            1: 12,
            2: 16,
            3: 18,
            4: 22,
            5: 32,
            6: 36,
            7: 38,
            8: 40,
            9: 7,
            10: 11,
            11: 13,
            12: 15,
            13: 29,
            14: 31,
            15: 33,
            16: 35
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
