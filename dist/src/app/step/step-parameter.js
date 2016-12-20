"use strict";
var StepParameter = (function () {
    function StepParameter(value, regexp, defaultValue) {
        this.value = value;
        this._defaultValue = defaultValue;
        if (regexp) {
            this.regexp = new RegExp(regexp);
        }
    }
    Object.defineProperty(StepParameter.prototype, "value", {
        get: function () {
            return this._value || this._defaultValue;
        },
        set: function (str) {
            this._value = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepParameter.prototype, "variable", {
        get: function () {
            return this._variable || false;
        },
        set: function (isVar) {
            this._variable = isVar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepParameter.prototype, "displayValue", {
        get: function () {
            var val = this.value;
            if (this.variable) {
                val = '<' + val + '>';
            }
            return val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepParameter.prototype, "isSet", {
        get: function () {
            return this.value !== this._defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    return StepParameter;
}());
exports.StepParameter = StepParameter;
//# sourceMappingURL=step-parameter.js.map