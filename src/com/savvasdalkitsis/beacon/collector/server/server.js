var http = require("http");

function start(port, route) {
    http
        .createServer(route)
        .listen(port);

    console.log("Server has started listening on PORT: " + port);
}

exports.start = start;