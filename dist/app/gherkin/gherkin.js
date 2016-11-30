"use strict";
var scenario_1 = require('../scenario/scenario');
var tags_1 = require('../tags/tags');
var Gherkin = (function () {
    function Gherkin() {
        this.name = 'My gherkin';
        this.scenarios = [new scenario_1.Scenario()];
        this.tags = new tags_1.Tags();
    }
    Gherkin.prototype.toString = function () {
        var str = "" + this.tags.toString();
        str += "Feature: " + this.name + "\n\n";
        this.scenarios.forEach(function (scenario) { return str += scenario.toString('\t'); });
        return str;
    };
    return Gherkin;
}());
exports.Gherkin = Gherkin;
//# sourceMappingURL=gherkin.js.map