function textPlain(response, responseCode, responseMessage) {
    response.writeHead(responseCode, {"Content-Type" : "text/plain"});
    response.write(responseMessage);
    response.end();
}

function ok(response) {
    textPlain(response, 200, "OK");
}

function notFound(response) {
    textPlain(response, 404, "404 Not found");
}

exports.textPlain = textPlain;
exports.ok = ok;
exports.notFound = notFound;