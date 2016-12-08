"use strict";
var step_parameter_1 = require('./step-parameter');
var REGEXP_TESTER = /\(([^\)]+)\)/g;
var REGEXP_DISPLAY_NAME = '(PARAMETER)';
var Step = (function () {
    function Step(name, type) {
        this.type = type;
        this.name = this.sanitizeName(name);
        this.displayName = this.name.replace(REGEXP_TESTER, REGEXP_DISPLAY_NAME);
        this.parameters = this.toChunks(this.name);
    }
    Step.prototype.toString = function (indent) {
        var str = "" + indent + this.type + " ";
        str += this.parameters.reduce(function (a, b) {
            return a + b.displayValue;
        }, '');
        str += '\n';
        return str;
    };
    Step.prototype.sanitizeName = function (str) {
        if (str[0] === '^') {
            str = str.substr(1);
        }
        if (str.charAt(str.length - 1) === '$') {
            str = str.slice(0, -1);
        }
        str = str.replace(/\(\?:([^\|]+)+\|+([^\)]+)?\)/, '$1');
        return str;
    };
    Step.prototype.toChunks = function (str) {
        var chunks = [];
        var insideRegexp = false;
        while (str.length > 0) {
            var value = void 0;
            var regexp = void 0;
            if (insideRegexp) {
                regexp = str.substring(1, str.indexOf(')'));
                str = str.substring(str.indexOf(')') + 1);
                insideRegexp = false;
            }
            else if (str.indexOf('(') >= 0) {
                value = str.substr(0, str.indexOf('('));
                str = str.substring(str.indexOf('('));
                insideRegexp = true;
            }
            else {
                value = str;
                str = '';
            }
            if ((value && value.length > 0) || regexp) {
                chunks.push(new step_parameter_1.StepParameter(value, regexp));
            }
        }
        return chunks;
    };
    return Step;
}());
exports.Step = Step;
//# sourceMappingURL=step.js.map