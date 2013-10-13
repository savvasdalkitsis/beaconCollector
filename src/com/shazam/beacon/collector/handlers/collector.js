var respondWith = require("../util/responseUtil.js")
var url = require("url");


function handle(request, response) {
    console.log("Collecting beacon");
    var identifier = identifierFrom(request);
    if (identifier) {
        respondWith.okMessage(response, identifier);
    } else {
        respondWith.textPlain(response, 400, "Client should supply a beacon identifier");
    }
}

function identifierFrom(request) {
    return path(request)[2];
}

function shouldHandle(request) {
    var firstSegment = path(request)[1];
    return "collect" === firstSegment;
}

function getHandlerName() {
    return "Beacon collector";
}

function path(request) {
    return url.parse(request.url).pathname.split("/");
}

exports.handle = handle;
exports.shouldHandle = shouldHandle;
exports.getHandlerName = getHandlerName;