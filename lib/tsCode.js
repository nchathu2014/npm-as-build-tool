"use strict";
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        return "A type script greetingn to you " + name;
    };
    return Greeter;
}());
module.exports = Greeter;
