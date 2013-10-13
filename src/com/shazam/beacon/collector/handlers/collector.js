var respondWith = require("../util/responseUtil.js")
var url = require("url");

var pathRegex = /\/collect(\/(.*))*$/;

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
    var match = pathRegex.exec(path(request));
    var identifier = null;
    if (match) {
        identifier = match[2];
    }
    return identifier;
}

function shouldHandle(request) {
    return pathRegex.test(path(request));
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