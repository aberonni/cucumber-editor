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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var angular_sortablejs_1 = require('angular-sortablejs');
var ng2_auto_complete_1 = require('ng2-auto-complete');
var app_component_1 = require('./app.component');
var gherkin_component_1 = require('./gherkin/gherkin.component');
var tags_component_1 = require('./tags/tags.component');
var scenario_component_1 = require('./scenario/scenario.component');
var scenario_table_component_1 = require('./scenario/scenario-table.component');
var step_component_1 = require('./step/step.component');
var step_parameter_component_1 = require('./step/step-parameter.component');
var step_service_1 = require('./step/step.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent,
            ],
            declarations: [
                app_component_1.AppComponent,
                gherkin_component_1.GherkinComponent,
                tags_component_1.TagsComponent,
                scenario_component_1.ScenarioComponent,
                scenario_table_component_1.ScenarioTableComponent,
                step_component_1.StepComponent,
                step_parameter_component_1.StepParameterComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angular_sortablejs_1.SortablejsModule,
                http_1.HttpModule,
                ng2_auto_complete_1.Ng2AutoCompleteModule,
            ],
            providers: [
                step_service_1.StepService,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map