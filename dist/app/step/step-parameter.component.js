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
var step_service_1 = require('./step.service');
var scenario_1 = require('../scenario/scenario');
var step_parameter_1 = require('./step-parameter');
var StepParameterComponent = (function () {
    function StepParameterComponent(stepService) {
        this.stepService = stepService;
        this.showTooltip = false;
        this.inputTypes = ['Component', 'Variable', 'Free'];
        this.inputType = 0;
    }
    StepParameterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stepService.getComponents().then(function (components) { return _this.componentLib = components; });
    };
    StepParameterComponent.prototype.setInputType = function (type) {
        this.inputType = type;
        this.parameter.isVariable = this.inputType === 1;
    };
    StepParameterComponent.prototype.getClasses = function () {
        var classes = this.parameter.isSet ? ['text-success', 'bg-success'] : [];
        return classes;
    };
    StepParameterComponent.prototype.getParameters = function () {
        return this.inputType === 0 ? this.componentLib : this.scenario.table.columns;
    };
    StepParameterComponent.prototype.showAutocomplete = function () {
        return this.inputType === 0 || (this.scenario.table && this.inputType === 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', step_parameter_1.StepParameter)
    ], StepParameterComponent.prototype, "parameter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', scenario_1.Scenario)
    ], StepParameterComponent.prototype, "scenario", void 0);
    StepParameterComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace('/dist/', '/'),
            selector: 'step-parameter',
            styleUrls: ['step-parameter.component.css'],
            templateUrl: 'step-parameter.component.html',
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService])
    ], StepParameterComponent);
    return StepParameterComponent;
}());
exports.StepParameterComponent = StepParameterComponent;
//# sourceMappingURL=step-parameter.component.js.map