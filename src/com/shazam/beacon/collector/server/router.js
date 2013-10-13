var responseUtil = require("../util/responseUtil.js");

var requestHandlers = [];

function hasHandlers(handlers) {
    requestHandlers = handlers;
}

function route(request, response) {
    console.log("Received request to " + request.url);
    var handled = false;
    requestHandlers.forEach(function(handler) {
        if (!handled && handler.shouldHandle(request)) {
            console.log("Routing to handler: " + handler.getHandlerName());
            try {
                handler.handle(request, response);
            } catch (err) {
                console.error(err);
                responseUtil.textPlain(response, 500, err.toString());
            }
            handled = true;
        }
    });
    if (!handled) {
        console.warn("No request handler found for: " + request.url);
        responseUtil.notFound(response);
    }
}

exports.route = route;
exports.hasHandlers = hasHandlers;