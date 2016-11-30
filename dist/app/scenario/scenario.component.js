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
var step_1 = require('../step/step');
var scenario_1 = require('./scenario');
var scenario_table_1 = require('./scenario-table');
var step_service_1 = require('../step/step.service');
var ScenarioComponent = (function () {
    function ScenarioComponent(stepService) {
        this.stepService = stepService;
        this.sortableOptions = {
            animation: 150,
            draggable: 'step',
        };
    }
    ScenarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stepService.getSteps().then(function (steps) { return _this.stepLib = steps; });
    };
    ScenarioComponent.prototype.addStep = function (step) {
        if (!step) {
            return;
        }
        this.scenario.steps.push(new step_1.Step(step.name, step.type));
        this.newStep = new step_1.Step('', '');
    };
    ScenarioComponent.prototype.addTable = function () {
        this.scenario.table = new scenario_table_1.ScenarioTable();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', scenario_1.Scenario)
    ], ScenarioComponent.prototype, "scenario", void 0);
    ScenarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace('/dist/', '/'),
            selector: 'scenario',
            styleUrls: ['scenario.component.css'],
            templateUrl: 'scenario.component.html',
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService])
    ], ScenarioComponent);
    return ScenarioComponent;
}());
exports.ScenarioComponent = ScenarioComponent;
//# sourceMappingURL=scenario.component.js.map