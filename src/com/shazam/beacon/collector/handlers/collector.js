var respondWith = require("../util/responseUtil.js")
var url = require("url");
var gatherer = require("./gatherer.js")

function handle(request, response) {
    console.log("Collecting beacon");
    var identifier = identifierFrom(request);
    if (identifier) {
        var parameters = params(request);
        gatherer.gather(identifier, parameters);
        respondWith.okMessage(response, "Saved " + parameters + " for id" + identifier);
    } else {
        respondWith.textPlain(response, 400, "Client should supply a beacon identifier");
    }
}

function identifierFrom(request) {
    return path(request)[2];
}

function params(request) {
    return url.parse(request.url).search;
}

function shouldHandle(request) {
    return "collect" === path(request)[1];
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