"use strict";
var defaultValue = '(PARAMETER)';
var StepParameter = (function () {
    function StepParameter(value, regexp) {
        this.value = value;
        if (regexp) {
            this.regexp = new RegExp(regexp);
        }
    }
    Object.defineProperty(StepParameter.prototype, "value", {
        get: function () {
            return this._value || defaultValue;
        },
        set: function (str) {
            this._value = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepParameter.prototype, "displayValue", {
        get: function () {
            var val = this.value;
            if (this.isVariable) {
                val = '<' + val + '>';
            }
            return val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepParameter.prototype, "isSet", {
        get: function () {
            return this.value !== defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    return StepParameter;
}());
exports.StepParameter = StepParameter;
//# sourceMappingURL=step-parameter.js.map