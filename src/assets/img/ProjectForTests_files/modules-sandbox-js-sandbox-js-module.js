(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sandbox-js-sandbox-js-module"],{

/***/ "./src/app/modules/sandbox-js/sanbox-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/sandbox-js/sanbox-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SandboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxRoutingModule", function() { return SandboxRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sanbox_sanbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanbox/sanbox.component */ "./src/app/modules/sandbox-js/sanbox/sanbox.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





const routes = [
    { path: '', component: _sanbox_sanbox_component__WEBPACK_IMPORTED_MODULE_1__["SanboxComponent"] }
];
class SandboxRoutingModule {
}
SandboxRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SandboxRoutingModule });
SandboxRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SandboxRoutingModule_Factory(t) { return new (t || SandboxRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SandboxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SandboxRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/sandbox-js/sanbox/sanbox.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/sandbox-js/sanbox/sanbox.component.ts ***!
  \***************************************************************/
/*! exports provided: SanboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanboxComponent", function() { return SanboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class SanboxComponent {
    constructor() {
        this.editorOptions = { theme: 'vs-dark', language: 'javascript' };
        this.code = 'function x() {\nconsole.log("Hello world!");\n}';
    }
    ngOnInit() {
    }
}
SanboxComponent.ɵfac = function SanboxComponent_Factory(t) { return new (t || SanboxComponent)(); };
SanboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SanboxComponent, selectors: [["app-sanbox"]], decls: 1, vars: 2, consts: [[3, "options", "ngModel", "ngModelChange"]], template: function SanboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-monaco-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SanboxComponent_Template_ngx_monaco_editor_ngModelChange_0_listener($event) { return ctx.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.editorOptions)("ngModel", ctx.code);
    } }, directives: [ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FuZGJveC1qcy9zYW5ib3gvc2FuYm94LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SanboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sanbox',
                templateUrl: './sanbox.component.html',
                styleUrls: ['./sanbox.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/sandbox-js/sandbox-js.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/sandbox-js/sandbox-js.module.ts ***!
  \*********************************************************/
/*! exports provided: SandboxJsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxJsModule", function() { return SandboxJsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sanbox_sanbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sanbox/sanbox.component */ "./src/app/modules/sandbox-js/sanbox/sanbox.component.ts");
/* harmony import */ var _sanbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sanbox-routing.module */ "./src/app/modules/sandbox-js/sanbox-routing.module.ts");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class SandboxJsModule {
}
SandboxJsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SandboxJsModule });
SandboxJsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SandboxJsModule_Factory(t) { return new (t || SandboxJsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sanbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["SandboxRoutingModule"],
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SandboxJsModule, { declarations: [_sanbox_sanbox_component__WEBPACK_IMPORTED_MODULE_2__["SanboxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sanbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["SandboxRoutingModule"],
        ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SandboxJsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sanbox_sanbox_component__WEBPACK_IMPORTED_MODULE_2__["SanboxComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sanbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["SandboxRoutingModule"],
                    ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-sandbox-js-sandbox-js-module.js.map