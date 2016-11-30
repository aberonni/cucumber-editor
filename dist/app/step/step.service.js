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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var StepService = (function () {
    function StepService(http) {
        this.http = http;
    }
    StepService.prototype.getSteps = function () {
        var _this = this;
        if (this.steps != null) {
            return Promise.resolve(this.steps);
        }
        return this.http.get('steps')
            .toPromise()
            .then(function (response) {
            return _this.steps = response.json();
        })
            .catch(this.handleError);
    };
    StepService.prototype.getComponents = function () {
        var _this = this;
        if (this.components != null) {
            return Promise.resolve(this.components);
        }
        return this.http.get('components')
            .toPromise()
            .then(function (response) {
            return _this.components = response.json();
        })
            .catch(this.handleError);
    };
    StepService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    StepService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StepService);
    return StepService;
}());
exports.StepService = StepService;
//# sourceMappingURL=step.service.js.map