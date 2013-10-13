var respondWith = require("../util/responseUtil.js")
var url = require("url");
var gatherer = require("./gatherer.js")

function handle(request, response) {
    var identifier = identifierFrom(request);
    console.log("Verifying beacon for id: " + identifier);
    var beacons = gatherer.beaconsFor(identifier);
    var message = "";
    beacons.forEach(function(beacon){
       message += beacon + "\n";
    });
    respondWith.okMessage(response, message);
}

function shouldHandle(request) {
    return "verify" === path(request)[1];
}

function getHandlerName() {
    return "Beacon verifier";
}

function identifierFrom(request) {
    return path(request)[2];
}

function path(request) {
    return url.parse(request.url).pathname.split("/");
}

exports.handle = handle;
exports.shouldHandle = shouldHandle;
exports.getHandlerName = getHandlerName;