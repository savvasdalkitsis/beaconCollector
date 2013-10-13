var server = require("./server/server.js");
var router = require("./server/router.js");
var port = require("./server/port.js");

router.hasHandlers([
    require("./handlers/collector.js"),
    require("./handlers/verifier.js")
]);
server.start(port.port(), router.route);