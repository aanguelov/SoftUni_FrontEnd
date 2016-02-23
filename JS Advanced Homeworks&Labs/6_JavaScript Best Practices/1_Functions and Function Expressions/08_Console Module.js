var specialConsole = (function() {
    function formatText(msg, args){
        var reg = /{(\d+)}/g, match, index, replacement;

        while (match = reg.exec(msg)){
                index = Number(match[1]);
                replacement = args[index];

            if (replacement === undefined){
                console.log("Wrong number of arguments");
                return null;
            }

            msg = msg.replace(match[0], args[index].toString());
        }

        return msg;
    }

    function getOutput(arr) {
        var output, msg;

        if (arr.length === 1){
            output = arr[0];
        }else {
            msg = arr[0];
            Array.prototype.shift.apply(arr);
            output = formatText(msg, arr);
        }

        if (output !== null){
            return output;
        }
    }

    function writeLine() {
        var args = Array.prototype.slice.call(arguments);

        console.log(getOutput(args))
    }

    function writeInfo(){
        var args = Array.prototype.slice.call(arguments);

        console.log(getOutput(args));
    }

    function writeWarning(){
        var args = Array.prototype.slice.call(arguments);

        console.log(getOutput(args));
    }

    function writeError(){
        var args = Array.prototype.slice.call(arguments);

        console.log(getOutput(args));
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
    }
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});