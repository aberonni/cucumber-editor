"use strict";
var path = require('path');
var Config = (function () {
    function Config() {
        var _this = this;
        this.stepsFolder = 'features/step_definitions';
        this.componentsFile = 'scripts/libs/components.js';
        var userOptions = {};
        try {
            userOptions = require(path.join(process.cwd(), '.gherkineditor.json'));
        }
        catch (e) {
            console.log('No .gherkin-editor.json file found, using defaults.');
        }
        Object.keys(userOptions).forEach(function (opt) {
            if (_this[opt]) {
                _this[opt] = userOptions[opt];
            }
        });
    }
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map