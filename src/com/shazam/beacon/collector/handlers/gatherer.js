var respondWith = require("../util/responseUtil.js")

var beaconsCollection = [];

function gather (identifier, params) {
    var beacons = beaconsCollection[identifier];
    if (!beacons) {
        beaconsCollection[identifier] = [];
    }
    beaconsCollection[identifier].push(params);
}

function beaconsFor(identifier) {
    return beaconsCollection[identifier];
}

exports.gather = gather;
exports.beaconsFor = beaconsFor;