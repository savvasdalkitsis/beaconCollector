var respondWith = require("../util/responseUtil.js")
var url = require("url");

var pathRegex = /\/collect(\/(.*))*$/;

function handle(request, response) {
    console.log("Collecting beacon");
    respondWith.ok(response);
}

function shouldHandle(request) {
    var pathName = path(request);
    return pathRegex.test(pathName);
}

function getHandlerName() {
    return "Beacon collector";
}

function path(request) {
    return url.parse(request.url).pathname;
}

exports.handle = handle;
exports.shouldHandle = shouldHandle;
exports.getHandlerName = getHandlerName;