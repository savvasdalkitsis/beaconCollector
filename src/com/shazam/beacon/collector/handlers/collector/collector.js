var respondWith = require("../../util/responseUtil.js")
var url = require("url");
var gatherFor = require("./gatherFor.js")

function handle(request, response) {
    console.log("Collecting beacon");
    var identifier = identifierFrom(request);
    if (identifier) {
        var parameters = params(request);
        try {
            gatherFor.gather(identifier, parameters);
            respondWith.okMessage(response, "Saved " + parameters + " for id" + identifier);
        } catch (err) {
            console.error(err);
            var error = "Could not save parameters " + parameters + " for id " + identifier + "\nReason: " + err.toString();
            respondWith.textPlain(response, 500, error)
        }
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