var respondWith = require("../util/responseUtil.js")
var url = require("url");

function handle(request, response) {
    console.log("Verifying beacon");
    respondWith.ok(response);
}

function shouldHandle(request) {
    var pathName = url.parse(request.url).pathname;
    return "/verify" == pathName;
}

function getHandlerName() {
    return "Beacon verifier";
}

exports.handle = handle;
exports.shouldHandle = shouldHandle;
exports.getHandlerName = getHandlerName;