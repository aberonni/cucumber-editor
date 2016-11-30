"use strict";
var Tag = (function () {
    function Tag() {
    }
    return Tag;
}());
var Tags = (function () {
    function Tags() {
        this.values = [];
    }
    Tags.prototype.add = function (value) {
        this.values.push({ value: value });
    };
    Tags.prototype.toString = function (indent) {
        if (indent === void 0) { indent = ''; }
        return this.values.reduce(function (a, b) {
            return a + indent + '@' + b.value + '\n';
        }, '');
    };
    return Tags;
}());
exports.Tags = Tags;
//# sourceMappingURL=tags.js.map