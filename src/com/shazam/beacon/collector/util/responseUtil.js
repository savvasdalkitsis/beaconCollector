function textPlain(response, responseCode, responseMessage) {
    response.writeHead(responseCode, {"Content-Type" : "text/plain"});
    response.write(responseMessage);
    response.end();
}

function ok(response) {
    okMessage(response, "OK");
}

function okMessage(response, message) {
    textPlain(response, 200, message);
}

function notFound(response) {
    textPlain(response, 404, "404 Not found");
}

exports.textPlain = textPlain;
exports.ok = ok;
exports.okMessage = okMessage;
exports.notFound = notFound;