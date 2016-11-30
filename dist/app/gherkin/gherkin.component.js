"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var scenario_1 = require('../scenario/scenario');
var gherkin_1 = require('./gherkin');
var GherkinComponent = (function () {
    function GherkinComponent() {
    }
    GherkinComponent.prototype.onAdd = function () {
        this.gherkin.scenarios.push(new scenario_1.Scenario());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gherkin_1.Gherkin)
    ], GherkinComponent.prototype, "gherkin", void 0);
    GherkinComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace('/dist/', '/'),
            selector: 'gherkin',
            styleUrls: ['gherkin.component.css'],
            templateUrl: 'gherkin.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], GherkinComponent);
    return GherkinComponent;
}());
exports.GherkinComponent = GherkinComponent;
//# sourceMappingURL=gherkin.component.js.map