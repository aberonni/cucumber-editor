"use strict";
var tags_1 = require('../tags/tags');
var scenario_table_1 = require('./scenario-table');
var Scenario = (function () {
    function Scenario() {
        this.tags = new tags_1.Tags();
        this.steps = [];
        this.table = new scenario_table_1.ScenarioTable();
    }
    Object.defineProperty(Scenario.prototype, "type", {
        get: function () {
            return this.table.isValid ? 'Scenario Outline' : 'Scenario';
        },
        enumerable: true,
        configurable: true
    });
    Scenario.prototype.toString = function (indent) {
        var str = "" + this.tags.toString(indent);
        str += "" + indent + this.type + ": " + this.name + "\n\n";
        this.steps.forEach(function (step) { return str += step.toString(indent + '\t'); });
        if (this.table.isValid) {
            str += this.table.toString(indent + '\t');
        }
        str += '\n';
        return str;
    };
    return Scenario;
}());
exports.Scenario = Scenario;
//# sourceMappingURL=scenario.js.map