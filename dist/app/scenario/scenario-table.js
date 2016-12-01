"use strict";
var PREFIX_COL = 'variable-';
var PREFIX_ROW = 'value-';
var ScenarioTable = (function () {
    function ScenarioTable() {
        this.columns = [];
        this.rows = [];
    }
    ScenarioTable.prototype.addColumn = function (col) {
        this.columns.push(col.value);
        this.rows.forEach(function (row, index) {
            row[col.value] = PREFIX_ROW + (index + 1);
        });
        if (this.columns.length === 1) {
            this.addRow();
        }
        col.value = '';
    };
    ScenarioTable.prototype.addRow = function () {
        var _this = this;
        var row = {};
        this.columns.forEach(function (col) {
            row[col] = PREFIX_ROW + (_this.rows.length + 1);
        });
        this.rows.push(row);
    };
    ScenarioTable.prototype.toString = function (indent) {
        var _this = this;
        var str = "\n" + indent + "Examples:";
        str += this.columns.reduce(function (a, col) {
            return a + " " + _this.pad(col, col) + " |";
        }, "\n" + indent + "|");
        this.rows.forEach(function (row) {
            str += _this.columns.reduce(function (a, col) {
                return a + " " + _this.pad(row[col], col) + " |";
            }, "\n" + indent + "|");
        });
        str += '\n';
        return str;
    };
    Object.defineProperty(ScenarioTable.prototype, "isValid", {
        get: function () {
            return this.columns.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ScenarioTable.prototype.pad = function (val, col) {
        var maxLength = this.rows.reduce(function (a, row) {
            return Math.max(a, row[col].length);
        }, col.length);
        while (val.length < maxLength) {
            val += ' ';
        }
        return val;
    };
    return ScenarioTable;
}());
exports.ScenarioTable = ScenarioTable;
//# sourceMappingURL=scenario-table.js.map