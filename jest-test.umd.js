(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['jest-test'] = {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

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
        { type: _angular_core.Component, args: [{
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
        { type: _angular_core.Injectable },
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
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
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

exports.SampleModule = SampleModule;
exports.SampleComponent = SampleComponent;
exports.SampleService = SampleService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
