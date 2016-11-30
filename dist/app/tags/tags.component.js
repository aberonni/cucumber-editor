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
var tags_1 = require('./tags');
var TagsComponent = (function () {
    function TagsComponent() {
    }
    TagsComponent.prototype.addTag = function (newTag) {
        this.tags.add(newTag.value);
        newTag.value = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tags_1.Tags)
    ], TagsComponent.prototype, "tags", void 0);
    TagsComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace('/dist/', '/'),
            selector: 'tags',
            styleUrls: ['tags.component.css'],
            templateUrl: 'tags.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TagsComponent);
    return TagsComponent;
}());
exports.TagsComponent = TagsComponent;
//# sourceMappingURL=tags.component.js.map