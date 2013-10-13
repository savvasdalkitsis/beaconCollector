function arg(key, defaultValue) {
    var value = defaultValue;
    var regExp = new RegExp(key + "=(.+)");
    process.argv.slice(2).forEach(function(arg){
        var match = arg.match(regExp);
        if (match != null && match.length > 0) {
            value = match[1];
        }
    });
    return value;
}

exports.arg = arg;