import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var SampleComponent = (function () {
    function SampleComponent() {
        this.total = 0;
    }
    SampleComponent.prototype.increaseT = function () {
        this.total++;
    };
    SampleComponent.prototype.decreaseT = function () {
        this.total--;
    };
    SampleComponent.prototype.addN = function (a, b) {
        return a + b;
    };
    SampleComponent.prototype.multiplyN = function (a, b) {
        return a * b;
    };
    SampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sample-component',
                    template: "<h1>Package Sample Component</h1>"
                },] },
    ];
    SampleComponent.ctorParameters = function () { return []; };
    return SampleComponent;
}());

var SampleService = (function () {
    function SampleService() {
    }
    SampleService.prototype.increaseTotal = function (total) {
        total++;
        return total;
    };
    SampleService.prototype.decreaseTotal = function (total) {
        total--;
        return total;
    };
    SampleService.prototype.add = function (a, b) {
        return a + b;
    };
    SampleService.prototype.multiply = function (a, b) {
        return a * b;
    };
    SampleService.decorators = [
        { type: Injectable },
    ];
    SampleService.ctorParameters = function () { return []; };
    return SampleService;
}());

var SampleModule = (function () {
    function SampleModule() {
    }
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule,
            providers: [SampleService],
        };
    };
    SampleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        SampleComponent,
                    ],
                    exports: [
                        SampleComponent,
                    ],
                },] },
    ];
    SampleModule.ctorParameters = function () { return []; };
    return SampleModule;
}());

export { SampleModule, SampleComponent, SampleService };
