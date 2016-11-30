"use strict";
var tags_1 = require('../tags/tags');
var Scenario = (function () {
    function Scenario() {
        this.tags = new tags_1.Tags();
        this.steps = [];
    }
    Object.defineProperty(Scenario.prototype, "type", {
        get: function () {
            return this.table ? 'Scenario Outline' : 'Scenario';
        },
        enumerable: true,
        configurable: true
    });
    Scenario.prototype.toString = function (indent) {
        var str = "" + this.tags.toString(indent);
        str += "" + indent + this.type + ": " + this.name + "\n\n";
        this.steps.forEach(function (step) { return str += step.toString(indent + '\t'); });
        if (this.table) {
            str += this.table.toString(indent + '\t');
        }
        str += '\n';
        return str;
    };
    return Scenario;
}());
exports.Scenario = Scenario;
//# sourceMappingURL=scenario.js.map