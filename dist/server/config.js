"use strict";
var fs = require('fs');
var path = require('path');
var Config = (function () {
    function Config() {
        var _this = this;
        this.stepsFolder = 'features/step_definitions';
        this.componentsFile = 'scripts/libs/components.js';
        var userOptions = {};
        try {
            userOptions = JSON.parse(fs.readFileSync(path.join(process.cwd(), '.cucumbereditor'), 'utf8'));
        }
        catch (e) {
            console.log('No .cucumbereditor file found, using defaults.');
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