"use strict";
var step_1 = require('../app/step/step');
var NightwatchParser = (function () {
    function NightwatchParser() {
        this.When = this.addStep('When');
        this.Given = this.addStep('Given');
        this.Then = this.addStep('Then');
    }
    NightwatchParser.prototype.getSteps = function (file) {
        this.steps = [];
        require(file).apply(this);
        return Promise.resolve(this.steps);
    };
    ;
    NightwatchParser.prototype.getComponents = function (file) {
        var components = require(file)._components || [];
        switch (components.constructor) {
            case Array:
                break;
            case Object:
                components = Object.keys(require(file)._components);
                break;
            default:
                components = [];
        }
        return Promise.resolve(components);
    };
    ;
    NightwatchParser.prototype.addStep = function (type) {
        var _this = this;
        return function (signature, fn) {
            _this.steps.push(new step_1.Step(signature.source, type));
        };
    };
    ;
    return NightwatchParser;
}());
exports.NightwatchParser = NightwatchParser;
;
//# sourceMappingURL=nightwatchParser.js.map