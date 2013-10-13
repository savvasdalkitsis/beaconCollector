var args = require("../util/args.js");
var PORT = 8888;

function port() {
    return args.arg("port", PORT);
}

exports.port = port;