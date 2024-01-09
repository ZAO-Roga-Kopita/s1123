(self["webpackChunks11123"] = self["webpackChunks11123"] || []).push([["main"],{

/***/ 5720:
/*!***************************************************!*\
  !*** ./src/app/Components/auth/auth.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AuthComponent {
  static #_ = this.ɵfac = function AuthComponent_Factory(t) {
    return new (t || AuthComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AuthComponent,
    selectors: [["app-auth"]],
    decls: 14,
    vars: 0,
    consts: [[1, "flex", "flex-col", "h-screen", "bg-gray-100"], [1, "grid", "place-items-center", "mx-2", "my-20", "sm:my-auto"], [1, "w-11/12", "p-12", "sm:w-8/12", "md:w-6/12", "lg:w-5/12", "2xl:w-4/12", "px-6", "py-10", "sm:px-10", "sm:py-6", "bg-white", "rounded-lg", "shadow-md", "lg:shadow-lg"], [1, "text-center", "font-semibold", "text-3xl", "lg:text-4xl", "text-gray-800"], [1, "mt-10"], ["for", "email", 1, "block", "text-xs", "font-semibold", "text-gray-600", "uppercase"], ["id", "email", "name", "email", "autocomplete", "email", "required", "", 1, "block", "w-full", "py-3", "px-1", "mt-2", "text-gray-800", "appearance-none", "border-b-2", "border-gray-100", "focus:text-gray-500", "focus:outline-none", "focus:border-gray-200"], ["for", "password", 1, "block", "mt-2", "text-xs", "font-semibold", "text-gray-600", "uppercase"], ["id", "password", "type", "password", "name", "password", "placeholder", "password", "autocomplete", "current-password", "required", "", 1, "block", "w-full", "py-3", "px-1", "mt-2", "mb-4", "text-gray-800", "appearance-none", "border-b-2", "border-gray-100", "focus:text-gray-500", "focus:outline-none", "focus:border-gray-200"], [1, "w-full", "py-3", "mt-10", "bg-green-600", "font-medium", "text-white", "uppercase", "focus:outline-none", "hover:bg-green-500", "hover:shadow-none"]],
    template: function AuthComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041B\u043E\u0433\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0412\u043E\u0439\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4284:
/*!***************************************************************!*\
  !*** ./src/app/Components/bms-scheme/bms-scheme.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BmsSchemeComponent: () => (/* binding */ BmsSchemeComponent)
/* harmony export */ });
/* harmony import */ var chartjs_adapter_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-adapter-moment */ 5980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Services_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/DataService */ 2165);
/* harmony import */ var _Services_DataGetters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/DataGetters */ 3075);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/chart.component */ 9235);







function BmsSchemeComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BmsSchemeComponent_object_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "object", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 22)(2, "style", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " .in1_inv_down { stroke-width:5; stroke:red; } .in1_inv_up { stroke-width:10; stroke:red; } .inv_bus { stroke:blue; stroke-width:5; } .line_bms_inv { stroke-width:10; stroke:green; } .line_inv_bms { stroke:red; stroke-width:10; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "defs", 24)(5, "linearGradient", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "stop", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "linearGradient", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "stop", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "linearGradient", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "stop", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "linearGradient", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "stop", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "linearGradient", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "stop", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "linearGradient", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "stop", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "linearGradient", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "stop", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "linearGradient", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "stop", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "linearGradient", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "stop", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "linearGradient", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "stop", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "linearGradient", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "stop", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "linearGradient", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "stop", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "linearGradient", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "stop", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "linearGradient", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "stop", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "linearGradient", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "stop", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "linearGradient", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "stop", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "linearGradient", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "stop", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "linearGradient", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "stop", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "linearGradient", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "stop", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "linearGradient", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "stop", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "linearGradient", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "stop", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "linearGradient", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "stop", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "linearGradient", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "stop", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "linearGradient", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "stop", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "linearGradient", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "stop", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "linearGradient", 75)(56, "linearGradient", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "g", 77)(58, "g", 78)(59, "g", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "rect", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "text", 81)(62, "tspan", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "U20");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "text", 83)(65, "tspan", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "text", 85)(68, "tspan", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "g", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "rect", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "text", 89)(73, "tspan", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "U19");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "text", 91)(76, "tspan", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "text", 93)(79, "tspan", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "g", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "rect", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "text", 97)(84, "tspan", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "U18");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "text", 99)(87, "tspan", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "text", 101)(90, "tspan", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "g", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "rect", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "text", 105)(95, "tspan", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "U17");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "text", 107)(98, "tspan", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "text", 109)(101, "tspan", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "g", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "rect", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "text", 113)(106, "tspan", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "U16");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "text", 115)(109, "tspan", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "text", 117)(112, "tspan", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "g", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "rect", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "text", 121)(117, "tspan", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "U15");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "text", 123)(120, "tspan", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "text", 125)(123, "tspan", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "g", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](126, "rect", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "text", 129)(128, "tspan", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "U14");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "text", 131)(131, "tspan", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "text", 133)(134, "tspan", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "g", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](137, "rect", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "text", 137)(139, "tspan", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "U13");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "text", 139)(142, "tspan", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "text", 141)(145, "tspan", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "g", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](148, "rect", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "text", 145)(150, "tspan", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "U12");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "text", 147)(153, "tspan", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "text", 149)(156, "tspan", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "g", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](159, "rect", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "text", 153)(161, "tspan", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "U11");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "text", 155)(164, "tspan", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "text", 157)(167, "tspan", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "g", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](170, "rect", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "text", 161)(172, "tspan", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "U10");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "text", 163)(175, "tspan", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "text", 165)(178, "tspan", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "g", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](181, "rect", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "text", 169)(183, "tspan", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "U51");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "text", 171)(186, "tspan", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "text", 173)(189, "tspan", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "g", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](192, "rect", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "text", 177)(194, "tspan", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "U50");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "text", 179)(197, "tspan", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "text", 181)(200, "tspan", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "g", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](203, "rect", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "text", 185)(205, "tspan", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, "U49");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "text", 187)(208, "tspan", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "text", 189)(211, "tspan", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "g", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](214, "rect", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "text", 193)(216, "tspan", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "U48");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "text", 195)(219, "tspan", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "text", 197)(222, "tspan", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "g", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](225, "rect", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "text", 201)(227, "tspan", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228, "U47");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "text", 203)(230, "tspan", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](231, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "text", 205)(233, "tspan", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](234, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "g", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](236, "rect", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "text", 209)(238, "tspan", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "U46");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "text", 211)(241, "tspan", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "text", 213)(244, "tspan", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](245, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "g", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](247, "rect", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "text", 217)(249, "tspan", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, "U45");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "text", 219)(252, "tspan", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "text", 221)(255, "tspan", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "g", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](258, "rect", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "text", 225)(260, "tspan", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "U44");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "text", 227)(263, "tspan", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](265, "text", 229)(266, "tspan", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](267, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "g", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](269, "rect", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "text", 233)(271, "tspan", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, "U43");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "text", 235)(274, "tspan", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "text", 237)(277, "tspan", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](278, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "g", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](280, "rect", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "text", 241)(282, "tspan", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](283, "U42");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "text", 243)(285, "tspan", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](286, "12 kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "text", 245)(288, "tspan", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](289, "60 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "g", 247)(291, "text", 248)(292, "tspan", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](293);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](294, "text", 250)(295, "tspan", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296, "\u0417\u0430\u0440\u044F\u0434\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "tspan", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](298, "\u0421\u041D\u042D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "text", 253)(300, "tspan", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](301);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](302, "rect", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "g", 256)(304, "text", 257)(305, "tspan", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](306);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](307, "text", 259)(308, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](309, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0431\u0443\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "text", 261)(311, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](312);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "rect", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_object_16_Template__svg_rect_click_313_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.getBMSData("bus"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](314, "g", 264)(315, "text", 265)(316, "tspan", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](317);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](318, "text", 267)(319, "tspan", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "text", 269)(322, "tspan", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323, "\u0421\u0438\u043B\u043E\u0432\u043E\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "tspan", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](325, "\u0432\u0432\u043E\u0434 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "text", 272)(327, "tspan", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](329, "rect", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "g", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](331, "path", 276)(332, "path", 277)(333, "path", 278)(334, "path", 279)(335, "path", 280)(336, "path", 281)(337, "path", 282)(338, "path", 283)(339, "path", 284)(340, "path", 285)(341, "path", 286)(342, "path", 287)(343, "path", 288)(344, "path", 289)(345, "path", 290)(346, "path", 291)(347, "path", 292)(348, "path", 293)(349, "path", 294)(350, "path", 295)(351, "path", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](352, "g", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](353, "path", 298)(354, "path", 299)(355, "path", 300)(356, "path", 301)(357, "path", 302)(358, "path", 303)(359, "path", 304)(360, "path", 305)(361, "path", 306)(362, "path", 307)(363, "path", 308)(364, "path", 309)(365, "path", 310)(366, "path", 311)(367, "path", 312)(368, "path", 313)(369, "path", 314)(370, "path", 315)(371, "path", 316)(372, "path", 317)(373, "path", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](374, "g", 319)(375, "rect", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_object_16_Template__svg_rect_click_375_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.getBMSData("bms"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](376, "text", 321)(377, "tspan", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](378, "\u0421\u041D\u042D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](379, "g", 323)(380, "rect", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_object_16_Template__svg_rect_click_380_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.getBMSData("battery1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](381, "text", 325)(382, "tspan", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](383, "\u0411\u0430\u0442\u0430\u0440\u0435\u044F 1 (DL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](384, "text", 327)(385, "tspan", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](386);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "g", 329)(388, "rect", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_object_16_Template__svg_rect_click_388_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.getBMSData("battery2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](389, "text", 331)(390, "tspan", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](391, "\u0411\u0430\u0442\u0430\u0440\u0435\u044F 2 (DL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "text", 333)(393, "tspan", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](394);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](395, "g", 335)(396, "rect", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_object_16_Template__svg_rect_click_396_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.getBMSData("battery3"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](397, "text", 337)(398, "tspan", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](399, "\u0411\u0430\u0442\u0430\u0440\u0435\u044F 3 (DL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "text", 339)(401, "tspan", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](402);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](403, "g", 341)(404, "rect", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_object_16_Template__svg_rect_click_404_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.getBMSData("battery4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](405, "text", 343)(406, "tspan", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](407, "\u0411\u0430\u0442\u0430\u0440\u0435\u044F 4 (DL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "text", 345)(409, "tspan", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](410);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](411, "text", 347)(412, "tspan", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](413);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "text", 349)(415, "tspan", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](416);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](417, "text", 351)(418, "tspan", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](419);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "text", 353)(421, "tspan", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](422);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](423, "text", 355)(424, "tspan", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](425);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "text", 357)(427, "tspan", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](428);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](429, "text", 359)(430, "tspan", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](431);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](432, "text", 361)(433, "tspan", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](434);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](435, "text", 363)(436, "tspan", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](437);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](438, "text", 365)(439, "tspan", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](440);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](441, "text", 367)(442, "tspan", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](443);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "g", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](445, "path", 370)(446, "path", 371)(447, "path", 372)(448, "path", 373)(449, "path", 374)(450, "path", 375)(451, "path", 376)(452, "path", 377)(453, "path", 378)(454, "path", 379)(455, "path", 380)(456, "path", 381)(457, "path", 382)(458, "path", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](459, "g", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](460, "path", 385)(461, "path", 386)(462, "path", 387)(463, "path", 388)(464, "path", 389)(465, "path", 390)(466, "path", 391)(467, "path", 392)(468, "path", 393)(469, "path", 394)(470, "path", 395)(471, "path", 396)(472, "path", 397)(473, "path", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](293);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.bmsLast.bmsLastData && ctx_r1.bmsLast.Current !== undefined ? ctx_r1.bmsLast.bmsLastData.Current : 0, " A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.bmsLast.bmsLastData && ctx_r1.bmsLast.bmsLastData.Total_Voltage !== undefined ? ctx_r1.bmsLast.bmsLastData.Total_Voltage : 0, " V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.pantographData.pantografData.out_current, " A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.pantographData.pantografData.out_power, " kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Vbc: ", ctx_r1.powerInputData.powerInputData.Vbc, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Vab: ", ctx_r1.powerInputData.powerInputData.Vab, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Vca: ", ctx_r1.powerInputData.powerInputData.Vca, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack1 && ctx_r1.batteriesData.battariesData.s11123_battery_pack1.StateOfCharge !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack1.StateOfCharge : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack2 && ctx_r1.batteriesData.battariesData.s11123_battery_pack2.StateOfCharge !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack2.StateOfCharge : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack3 && ctx_r1.batteriesData.battariesData.s11123_battery_pack3.StateOfCharge !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack3.StateOfCharge : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack4 && ctx_r1.batteriesData.battariesData.s11123_battery_pack4.StateOfCharge !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack4.StateOfCharge : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.bmsLast.bmsLastData && ctx_r1.bmsLast.bmsLastData.SOC !== undefined ? ctx_r1.bmsLast.bmsLastData.SOC : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack1 && ctx_r1.batteriesData.battariesData.s11123_battery_pack1.BatteryVoltage !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack1.BatteryVoltage : 0, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack1 && ctx_r1.batteriesData.battariesData.s11123_battery_pack1.BatteryCurrent !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack1.BatteryCurrent : 0, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack2 && ctx_r1.batteriesData.battariesData.s11123_battery_pack2.BatteryVoltage !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack2.BatteryVoltage : 0, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack2 && ctx_r1.batteriesData.battariesData.s11123_battery_pack2.BatteryCurrent !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack2.BatteryCurrent : 0, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack3 && ctx_r1.batteriesData.battariesData.s11123_battery_pack3.BatteryVoltage !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack3.BatteryVoltage : 0, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack3 && ctx_r1.batteriesData.battariesData.s11123_battery_pack3.BatteryCurrent !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack3.BatteryCurrent : 0, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack4 && ctx_r1.batteriesData.battariesData.s11123_battery_pack4.BatteryVoltage !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack4.BatteryVoltage : 0, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.batteriesData.battariesData && ctx_r1.batteriesData.battariesData.s11123_battery_pack4 && ctx_r1.batteriesData.battariesData.s11123_battery_pack4.BatteryCurrent !== undefined ? ctx_r1.batteriesData.battariesData.s11123_battery_pack4.BatteryCurrent : 0, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.bmsLast.bmsLastData && ctx_r1.bmsLast.bmsLastData.Total_Voltage !== undefined ? ctx_r1.bmsLast.bmsLastData.Total_Voltage : 0, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.bmsLast.bmsLastData && ctx_r1.bmsLast.bmsLastData.Current !== undefined ? ctx_r1.bmsLast.bmsLastData.Current : 0, "A");
  }
}
function BmsSchemeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 399);
  }
}
function BmsSchemeComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 400);
  }
}
function BmsSchemeComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 401);
  }
}
function BmsSchemeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 399);
  }
}
function BmsSchemeComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 400);
  }
}
function BmsSchemeComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 401);
  }
}
function BmsSchemeComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 399);
  }
}
function BmsSchemeComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 400);
  }
}
function BmsSchemeComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 401);
  }
}
function BmsSchemeComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 399);
  }
}
function BmsSchemeComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 400);
  }
}
function BmsSchemeComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 401);
  }
}
function BmsSchemeComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 399);
  }
}
function BmsSchemeComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 400);
  }
}
function BmsSchemeComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 401);
  }
}
function BmsSchemeComponent_div_55_ng_container_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 423)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r27.key, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r27.value);
  }
}
function BmsSchemeComponent_div_55_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BmsSchemeComponent_div_55_ng_container_28_div_1_Template, 5, 2, "div", 422);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r27.key !== "name");
  }
}
function BmsSchemeComponent_div_55_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-chart", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const isLast_r31 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("chartId", item_r30.key)("chartData", item_r30.value)("showX", isLast_r31);
  }
}
function BmsSchemeComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 402)(1, "div", 403)(2, "div", 404)(3, "span", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_div_55_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.showPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 407)(7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 408)(10, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_div_55_Template_label_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.getBMSData(ctx_r34.selectedDataName, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "1 \u0447\u0430\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_div_55_Template_label_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.getBMSData(ctx_r35.selectedDataName, 4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "4 \u0447\u0430\u0441\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_div_55_Template_label_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.getBMSData(ctx_r36.selectedDataName, 8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "8 \u0447\u0430\u0441\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BmsSchemeComponent_div_55_Template_label_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.getBMSData(ctx_r37.selectedDataName, 14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "14 \u0447\u0430\u0441\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 418)(27, "div", 419);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, BmsSchemeComponent_div_55_ng_container_28_Template, 2, 1, "ng-container", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, BmsSchemeComponent_div_55_ng_container_31_Template, 2, 3, "ng-container", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r17.resultLastData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 3, ctx_r17.resultLastData));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 5, ctx_r17.chartData));
  }
}
class BmsSchemeComponent {
  constructor(dataService, dataGetters, titleService) {
    this.dataService = dataService;
    this.dataGetters = dataGetters;
    this.titleService = titleService;
    this.pantographData = {};
    this.cellsData = {};
    this.batteriesData = {};
    this.bmsLast = {};
    this.powerInputData = {};
    this.selectedDataName = "";
    this.showPopup = false;
    this.resultObject = {};
    this.resultLastData = {};
    this.chartData = {};
    this.Object = Object;
    setInterval(() => {
      this.batteriesData = this.dataGetters.getBattariesData();
      this.cellsData = this.dataGetters.getCellsData();
      this.bmsLast = this.dataGetters.getBMSLast();
      this.pantographData = this.dataGetters.getPantografData();
      this.powerInputData = this.dataGetters.getPowerInputData();
    }, 1000);
  }
  ngOnInit() {
    this.setTitle('S11123 - BMS');
  }
  setTitle(newTitle) {
    this.titleService.setTitle(newTitle);
  }
  getBMSData(dataName, hours = 1) {
    this.resultObject = {};
    this.resultLastData = {};
    this.chartData = {};
    this.selectedDataName = dataName;
    this.showPopup = true;
    this.dataService.getData(this.selectedDataName, hours).then(data => {
      this.resultObject = data.reduce((acc, {
        _field,
        _value,
        _time
      }) => {
        if (!acc[_field]) {
          acc[_field] = [];
          acc[_field + 'Time'] = [];
        }
        acc[_field].push(_value.toFixed(2));
        acc[_field + 'Time'].push(new Date(_time).getTime());
        return acc;
      }, {});
      this.resultLastData = Object.keys(this.resultObject).reduce((acc, key) => {
        if (!key.includes('Time')) {
          acc[key] = this.resultObject[key][this.resultObject[key].length - 1];
        }
        return acc;
      }, {});
      this.resultLastData.name = data[0]._measurement;
      for (let item in this.resultObject) {
        if (!item.includes('Time')) {
          let tempArray = [];
          this.resultObject[item].map((elem, index) => {
            tempArray.push([this.resultObject[`${item}Time`][index], +elem]);
          });
          this.chartData[item] = tempArray;
        }
      }
    });
  }
  static #_ = this.ɵfac = function BmsSchemeComponent_Factory(t) {
    return new (t || BmsSchemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Services_DataService__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Services_DataGetters__WEBPACK_IMPORTED_MODULE_2__.DataGetters), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BmsSchemeComponent,
    selectors: [["app-bms-scheme"]],
    decls: 56,
    vars: 18,
    consts: [[1, "min-h-full"], [1, "bg-[#23CE6B]"], [1, "mx-auto", "max-w-7xl", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "h-16", "items-center", "justify-between"], [1, "flex", "items-center"], [1, "ml-10", "flex", "items-baseline", "space-x-4"], ["href", "/", "aria-current", "page", 1, "bg-green-600", "text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/ocpp", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/users", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/schedule", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["class", "loader", 4, "ngIf"], ["id", "obj", "class", "block", 4, "ngIf"], [1, "absolute", "bottom-0", "p-5", "bg-gray-50", "shadow-xl"], [1, "text-xl"], [1, "mr-3"], ["class", "w-3 h-3 rounded-full bg-green-400 border border-black", 4, "ngIf"], ["class", "w-3 h-3 rounded-full bg-white border border-black", 4, "ngIf"], ["class", "w-3 h-3 rounded-full bg-red-500 border border-black", 4, "ngIf"], ["class", "popup", 4, "ngIf"], [1, "loader"], ["src", "./assets/ZC9Y.gif"], ["id", "obj", 1, "block"], ["width", "1920", "height", "1080", "viewBox", "0 0 508 285", "preserveAspectRatio", "xMinYMin meet", "version", "1.1", "id", "svg1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "svg", "http://www.w3.org/2000/svg"], ["id", "style9"], ["id", "defs1"], ["id", "swatch1"], ["offset", "0", "id", "stop1", 2, "stop-color", "#ffffff", "stop-opacity", "1"], ["id", "swatch446"], ["offset", "0", "id", "stop446", 2, "stop-color", "#000000", "stop-opacity", "1"], ["id", "swatch400"], ["offset", "0", "id", "stop400", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch385"], ["offset", "0", "id", "stop385", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch384"], ["offset", "0", "id", "stop384", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch383"], ["offset", "0", "id", "stop383", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch382"], ["offset", "0", "id", "stop382", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch381"], ["offset", "0", "id", "stop381", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch380"], ["offset", "0", "id", "stop380", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch379"], ["offset", "0", "id", "stop379", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch378"], ["offset", "0", "id", "stop378", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch377"], ["offset", "0", "id", "stop377", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch376"], ["offset", "0", "id", "stop376", 2, "stop-color", "#4db139", "stop-opacity", "1"], ["id", "swatch375"], ["offset", "0", "id", "stop375", 2, "stop-color", "#000000", "stop-opacity", "1"], ["id", "swatch374"], ["offset", "0", "id", "stop374", 2, "stop-color", "#000000", "stop-opacity", "1"], ["id", "swatch373"], ["offset", "0", "id", "stop373", 2, "stop-color", "#000000", "stop-opacity", "1"], ["id", "swatch372"], ["offset", "0", "id", "stop372", 2, "stop-color", "#000000", "stop-opacity", "1"], ["id", "swatch363"], ["offset", "0", "id", "stop363", 2, "stop-color", "#c921bd", "stop-opacity", "1"], ["id", "swatch349"], ["offset", "0", "id", "stop349", 2, "stop-color", "#c921bd", "stop-opacity", "1"], ["id", "swatch341"], ["offset", "0", "id", "stop341", 2, "stop-color", "#0f2cf7", "stop-opacity", "1"], ["id", "swatch334"], ["offset", "0", "id", "stop334", 2, "stop-color", "#0f2cf7", "stop-opacity", "1"], ["id", "swatch333"], ["offset", "0", "id", "stop333", 2, "stop-color", "#0f2cf7", "stop-opacity", "1"], ["id", "swatch332"], ["offset", "0", "id", "stop332", 2, "stop-color", "#0f2cf7", "stop-opacity", "1"], ["id", "swatch310"], ["offset", "0", "id", "stop310", 2, "stop-color", "#ff1919", "stop-opacity", "1"], ["id", "swatch297"], ["offset", "0", "id", "stop297", 2, "stop-color", "#000000", "stop-opacity", "1"], [0, "xlink", "href", "#swatch446", "id", "linearGradient446", "x1", "-273.10803", "y1", "-132.4375", "x2", "896.63342", "y2", "-132.4375", "gradientUnits", "userSpaceOnUse"], [0, "xlink", "href", "#swatch1", "id", "linearGradient1", "x1", "677.84282", "y1", "-483.27226", "x2", "806.35566", "y2", "-483.27226", "gradientUnits", "userSpaceOnUse"], ["id", "layer1"], ["id", "g297", "transform", "matrix(0.28266575,0,0,0.28266575,177.65799,183.12161)"], ["id", "g38", "transform", "translate(-483.10806,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect35", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text36", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan36", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u20_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan37", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u20_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan38", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g48", "transform", "translate(-363.10806,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect46", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text46", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan46", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u19_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan47", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u19_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan48", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g51", "transform", "translate(-243.10807,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect48", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text49", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan49", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u18_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan50", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u18_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan51", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g54", "transform", "translate(-123.10808,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect51", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text52", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan52", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u17_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan53", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u17_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan54", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g57", "transform", "translate(-3.1080857,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect54", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text55", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan55", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u16_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan56", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u16_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan57", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g60", "transform", "translate(116.89191,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect57", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "0", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text58", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan58", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u15_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan59", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u15_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan60", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g63", "transform", "translate(236.8919,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect60", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text61", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan61", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u14_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan62", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u14_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan63", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g77", "transform", "translate(356.89189,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect75", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text75", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan75", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u13_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan76", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u13_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan77", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g80", "transform", "translate(476.89184,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none", "fill-rule", "nonzero"], ["id", "rect77", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none", "fill-rule", "nonzero"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text78", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none", "fill-rule", "nonzero"], ["x", "112.2231", "y", "209.0289", "id", "tspan78", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none", "fill-rule", "nonzero"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u12_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none", "fill-rule", "nonzero"], ["x", "103.24033", "y", "256.46667", "id", "tspan79", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none", "fill-rule", "nonzero"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u12_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none", "fill-rule", "nonzero"], ["x", "103.47694", "y", "234.77951", "id", "tspan80", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none", "fill-rule", "nonzero"], ["id", "g83", "transform", "translate(596.89184,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect80", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "0", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text81", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan81", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u11_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan82", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u11_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan83", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g86", "transform", "translate(716.89184,0.34549512)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect83", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "0", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text84", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan84", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u10_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan85", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u10_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan86", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g95", "transform", "translate(-363.10803,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect92", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "0", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text93", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan93", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u51_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan94", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u51_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan95", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g98", "transform", "translate(-243.10804,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect95", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text96", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan96", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u50_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan97", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u50_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan98", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g101", "transform", "translate(-123.10805,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect98", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text99", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan99", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u49_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan100", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u49_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan101", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g104", "transform", "translate(-3.1080557,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect101", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text102", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan102", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u48_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan103", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u48_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan104", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g107", "transform", "translate(116.89194,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect104", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text105", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan105", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u47_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan106", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u47_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan107", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g110", "transform", "translate(236.89193,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect107", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text108", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan108", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u46_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan109", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u46_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan110", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g113", "transform", "translate(356.89192,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect110", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text111", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan111", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u45_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan112", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u45_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan113", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g116", "transform", "translate(476.89184,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect113", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text114", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan114", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u44_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan115", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u44_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan116", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g119", "transform", "translate(596.89184,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect116", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text117", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan117", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u43_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan118", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u43_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan119", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g122", "transform", "translate(716.89184,-164.87499)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect119", "width", "80", "height", "80", "x", "95", "y", "185", 2, "fill", "#fdfdfd", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "112.2231", "y", "209.0289", "id", "text120", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "112.2231", "y", "209.0289", "id", "tspan120", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "25.4px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.24033", "y", "256.46667", "id", "u42_inv_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.24033", "y", "256.46667", "id", "tspan121", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "103.47694", "y", "234.77951", "id", "u42_inv_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "103.47694", "y", "234.77951", "id", "tspan122", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "18px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "g129", "transform", "matrix(0.28266575,0,0,0.28266575,-1.3706443,160.54369)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "226.87488", "y", "-36.812168", "id", "bms_charger_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "226.87488", "y", "-36.812168", "id", "tspan95-4", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "248.35806", "y", "-95.125008", "id", "text95-4-8", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "line-height", "0", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "tspan164", "x", "248.35806", "y", "-95.125008", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "1.9", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "248.35806", "y", "-77.416534", "id", "tspan129", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "0", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "226.63828", "y", "-15.125006", "id", "bms_charger_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["x", "226.63828", "y", "-15.125006", "id", "tspan94-1", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.53775", "stroke-dasharray", "none"], ["id", "rect129", "width", "156.47478", "height", "165.84225", "x", "168.94165", "y", "-136.55084", 1, "cursor-pointer", 2, "fill", "#ffffff", "fill-opacity", "0", "stroke", "#000000", "stroke-width", "3.53775", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "g168", "transform", "matrix(0.29202185,0,0,0.29202185,-44.714512,231.83511)", 2, "stroke-width", "3.4244", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "266.66983", "y", "-11.585861", "id", "bus_charger_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["x", "266.66983", "y", "-11.585861", "id", "tspan165", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.4244", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "287.08215", "y", "-63.191528", "id", "text167", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "line-height", "0", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["x", "287.08215", "y", "-63.191528", "id", "tspan167", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "0", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.4244", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "266.11588", "y", "17.618332", "id", "bus_charger_kw", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["x", "266.11588", "y", "17.618332", "id", "tspan168", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["id", "rect168", "width", "115.59911", "height", "236.52203", "x", "229.11722", "y", "-136.57823", 1, "cursor-pointer", 2, "fill", "#ffffff", "fill-opacity", "0", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none", "stroke-opacity", "1", "opacity", "1", 3, "click"], ["id", "g432", "transform", "matrix(0.28266575,0,0,0.28266575,177.65799,183.12161)", 2, "stroke-width", "3.53775", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "240.66983", "y", "-11.585861", "id", "power_input_charger_current", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["x", "240.66983", "y", "-11.585861", "id", "tspan165-1", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.4244", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "240.66983", "y", "-15.585861", "id", "power_input_charger_current", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["x", "240.66983", "y", "-40.585861", "id", "tspan165-1", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.4244", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "270.05032", "y", "-75.702744", "id", "text167-1", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "18px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["x", "280.05032", "y", "-105.702744", "id", "tspan167-3", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["x", "271.05032", "y", "-80.898285", "id", "tspan285", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.4244", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "240.11588", "y", "17.618332", "id", "power_input_charger_kw", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "bold", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Bold'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "none", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["x", "240.11588", "y", "17.618332", "id", "tspan168-9", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.4244", "stroke-dasharray", "none"], ["id", "rect168-3", "width", "115.59911", "height", "236.52203", "x", "229.11722", "y", "-136.57823", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 1, "cursor-pointer", 2, "fill", "#ff2121", "fill-opacity", "0", "stroke", "#000000", "stroke-width", "3.4244", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "g296", "transform", "matrix(0.28266575,0,0,0.28266575,177.65799,183.12161)", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["d", "m -348.10805,265.34549 v 38.05816 L 928,304 V 144 h 40.4647", "id", "path211", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -228.10806,265.34549 V 304", "id", "path212", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -108.10807,265.34549 V 304", "id", "path213", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 11.89192,265.34549 V 304", "id", "path214", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 131.89191,265.34549 V 304", "id", "path215", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 251.89191,265.34549 V 304", "id", "path216", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 371.8919,265.34549 V 304", "id", "path217", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 491.8919,265.34549 V 304", "id", "path218", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 611.89184,265.34549 V 304", "id", "path219", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 731.89184,265.34549 V 304", "id", "path220", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 851.89183,265.34549 V 304", "id", "path221", 1, "in1_inv_down", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 927.99999,144 V -16 H -228.10803 v 36.12501", "id", "path210", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -108.10804,20.12501 V -16", "id", "path302", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 11.89195,20.12501 V -16", "id", "path303", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 131.89194,20.12501 V -16", "id", "path304", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 251.89194,20.12501 V -16", "id", "path305", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 371.89193,20.12501 V -16", "id", "path306", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 491.89192,20.12501 V -16", "id", "path307", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 611.89184,20.12501 V -16", "id", "path308", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 851.89183,20.12501 V -16", "id", "path310", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 731.89184,20.12501 V -16", "id", "path309", 1, "in1_inv_up", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "g310", "transform", "matrix(0.28266575,0,0,0.28266575,177.65799,183.12161)", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["d", "M 731.89184,185.34549 V 153.41271", "id", "path244", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 611.89184,185.34549 V 153.41271", "id", "path245", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 491.8919,185.34549 V 153.41271", "id", "path246", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 371.8919,185.34549 V 153.41271", "id", "path247", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 251.89191,185.34549 V 153.41271", "id", "path248", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 131.89191,185.34549 v 0 -31.93278", "id", "path249", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 11.89192,185.34549 V 153.41271", "id", "path250", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -108.10807,185.34549 V 153.41271", "id", "path251", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -228.10806,185.34549 V 153.41271", "id", "path252", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -348.10805,185.34549 V 153.41271", "id", "path253", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 851.90451,185.34978 v 0 -31.94123 l -1282.47596,0.004", "id", "path254", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 851.89181,153.41271 v -53.2877", "id", "path275", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 611.89184,153.41271 v -53.2877", "id", "path276", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 491.8919,153.41271 v -53.2877", "id", "path277", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 371.89193,100.12501 -3e-5,53.2877", "id", "path278", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 251.89194,100.12501 -3e-5,53.2877", "id", "path279", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 131.89194,100.12501 -3e-5,53.2877", "id", "path280", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 11.89195,100.12501 -3e-5,53.2877", "id", "path281", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m -108.10807,153.41271 3e-5,-53.2877", "id", "path283", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m -228.10806,153.41271 3e-5,-53.2877", "id", "path284", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "m 731.89184,153.41271 v -53.2877", "id", "path285", 1, "inv_bus", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "g427", "transform", "matrix(0.28266575,0,0,0.28266575,177.65799,183.12161)"], ["id", "rect122", "width", "1159.7415", "height", "164.875", "x", "-268.10803", "y", "-214.875", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "url(#linearGradient446)", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], [0, "xml", "space", "preserve", "x", "273.25964", "y", "-169.69083", "id", "text292", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "31.75px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "1", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan292", "x", "273.25964", "y", "-169.69083", 2, "font-size", "31.75px", "stroke-width", "1"], ["id", "g428", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["id", "rect122-4", "width", "281.27847", "height", "271.84323", "x", "-267.84799", "y", "-512.16901", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], [0, "xml", "space", "preserve", "x", "-125.80752", "y", "-475.19168", "id", "text291", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "0", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan291", "x", "-125.80752", "y", "-475.19168", 2, "fill", "#000000", "fill-opacity", "1", "stroke-width", "4", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "-129.20554", "y", "-358.18958", "id", "battery_1_percent", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "50.8px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan432", "x", "-129.20554", "y", "-358.18958", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["id", "g431", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["id", "rect173", "width", "281.27847", "height", "271.84323", "x", "24.245586", "y", "-512", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], [0, "xml", "space", "preserve", "x", "167.99055", "y", "-480.92157", "id", "text291-9", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "0", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan291-6", "x", "167.99055", "y", "-480.92157", 2, "fill", "#000000", "fill-opacity", "1", "stroke-width", "4", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "162.88805", "y", "-358.02057", "id", "battery_2_percent", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "50.8px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan433", "x", "162.88805", "y", "-358.02057", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["id", "g430", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["id", "rect174", "width", "281.27847", "height", "271.84323", "x", "318.10458", "y", "-512.16901", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], [0, "xml", "space", "preserve", "x", "461.78864", "y", "-478.71185", "id", "text291-7", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "0", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan291-7", "x", "461.78864", "y", "-478.71185", 2, "fill", "#000000", "fill-opacity", "1", "stroke-width", "4", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "456.74704", "y", "-358.18958", "id", "battery_3_percent", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "50.8px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan434", "x", "456.74704", "y", "-358.18958", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["id", "g429", 2, "stroke-width", "4", "stroke-dasharray", "none", "fill", "#ffffff", "fill-opacity", "1"], ["id", "rect175", "width", "281.27847", "height", "271.84323", "x", "610.19824", "y", "-512", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], [0, "xml", "space", "preserve", "x", "742.02069", "y", "-478.54285", "id", "text291-4", "transform", "translate(6.6332757e-7)", 2, "stroke-width", "4", "stroke-dasharray", "none", "fill", "#000000", "fill-opacity", "1", "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "16.9333px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "stroke", "none", "stroke-opacity", "1"], ["id", "tspan291-0", "x", "742.02069", "y", "-478.54285", 2, "fill", "#000000", "fill-opacity", "1", "stroke-width", "4", "stroke-dasharray", "none"], [0, "xml", "space", "preserve", "x", "748.8407", "y", "-358.02057", "id", "battery_4_percent", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "50.8px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan435", "x", "748.8407", "y", "-358.02057", 2, "stroke-width", "4", "stroke-dasharray", "none", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "269.5947", "y", "-96.491638", "id", "bms_percent", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "50.8px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "1", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan434-3", "x", "269.5947", "y", "-96.491638", 2, "stroke-width", "1"], [0, "xml", "space", "preserve", "x", "-209.85123", "y", "-257.78244", "id", "battery_1_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "28px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan436", "x", "-220", "y", "-257.78244", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "-46.343517", "y", "-257.78244", "id", "battery_1_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan436-3", "x", "-55", "y", "-257.78244", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "86.867577", "y", "-257.78244", "id", "battery_2_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan437", "x", "70", "y", "-257.78244", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "250.37529", "y", "-257.78244", "id", "battery_2_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan438", "x", "235.37529", "y", "-257.78244", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "383.58636", "y", "-257.78244", "id", "battery_3_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan439", "x", "365.58636", "y", "-257.78244", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "547.09412", "y", "-257.78244", "id", "battery_3_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan440", "x", "530.09412", "y", "-257.78244", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "674.48431", "y", "-257.78244", "id", "battery_4_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan441", "x", "654.48431", "y", "-257.78244", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "837.99207", "y", "-257.78244", "id", "battery_4_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan442", "x", "825.99207", "y", "-257.78244", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "154.69078", "y", "-102.858", "id", "bms_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan443", "x", "154.69078", "y", "-102.858", 2, "font-size", "24px", "stroke-width", "4"], [0, "xml", "space", "preserve", "x", "384.56891", "y", "-102.51591", "id", "bms_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32.4556px", "line-height", "0.7", "font-family", "'Roboto Mono'", "-inkscape-font-specification", "'Roboto Mono, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "text-align", "center", "text-anchor", "middle", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "4", "stroke-dasharray", "none", "stroke-opacity", "1"], ["id", "tspan444", "x", "384.56891", "y", "-102.51591", 2, "font-size", "24px", "stroke-width", "4"], ["id", "g348", "transform", "matrix(0.28266575,0,0,0.28266575,177.65799,183.12161)", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["d", "m -268.10803,100.12501 -0.50001,32.16665 H -386.179 V -50.583581", "id", "path332", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m -268.60804,132.29166 120,0.5 0.5,-32.66665", "id", "path333", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m -148.60804,132.79166 119.999991,0.50205 0.499999,-33.1687", "id", "path334", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m -28.608049,133.29371 119.999992,0.50206 0.500001,-33.67076", "id", "path335", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m 91.391943,133.79577 119.999997,0.50206 0.5,-34.17282", "id", "path336", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m 211.39194,134.29783 119.99998,0.50206 0.50001,-34.67488", "id", "path337", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m 331.39192,134.79989 119.99999,0.50206 0.50001,-35.17694", "id", "path338", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m 451.39191,135.30195 119.99992,0.50206 0.50001,-35.679", "id", "path339", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m 571.39183,135.80401 120,0.50206 0.50001,-36.18106", "id", "path340", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m 691.39183,136.30607 119.99999,0.50207 0.50001,-36.68313", "id", "path341", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m -1082.125,-365.66527 0.8931,-330.89431 H 19.587823 v 44.79006", "id", "path286", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m -264.27271,-651.93312 v -44.62646", "id", "path287", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m -548.71675,-651.76952 v -44.79006", "id", "path288", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["d", "m -831.45193,-651.93312 v -44.62646", "id", "path289", "transform", "matrix(1.0330995,0,0,1.0330995,731.76381,161.34277)", 1, "line_inv_bms", 2, "fill-opacity", "0", "stroke", "#ff00ff", "stroke-dasharray", "none"], ["id", "g372", "transform", "matrix(0.28266575,0,0,0.28266575,177.65799,183.12161)", 2, "stroke-width", "4", "stroke-dasharray", "none"], ["d", "M -127.20875,-240.32577 V -214.875", "id", "path177", 1, "line_bms_inv", 2, "fill", "#000000", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 164.88481,-240.15677 V -214.875", "id", "path178", 1, "line_bms_inv", 2, "fill", "#000000", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 458.74381,-240.32577 V -214.875", "id", "path179", 1, "line_bms_inv", 2, "fill", "#000000", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 750.83746,-240.15677 V -214.875", "id", "path180", 1, "line_bms_inv", 2, "fill", "#000000", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -148.10804,20.12501 V -50", "id", "path364", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -28.10805,20.12501 V -50", "id", "path365", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 91.891944,20.12501 V -50", "id", "path366", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 211.89194,20.12501 V -50", "id", "path367", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 331.89193,20.12501 V -50", "id", "path368", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 451.89192,20.12501 V -50", "id", "path369", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 571.89184,20.12501 V -50", "id", "path370", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 691.89184,20.12501 V -50", "id", "path371", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M 811.89183,20.12501 V -50", "id", "path372", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], ["d", "M -268.10803,20.12501 V -50", "id", "path363", 1, "line_bms_inv", 2, "fill", "none", "fill-opacity", "0", "stroke-dasharray", "none", "stroke-opacity", "1"], [1, "w-3", "h-3", "rounded-full", "bg-green-400", "border", "border-black"], [1, "w-3", "h-3", "rounded-full", "bg-white", "border", "border-black"], [1, "w-3", "h-3", "rounded-full", "bg-red-500", "border", "border-black"], [1, "popup"], [1, "popup-content"], [1, "flex", "justify-between", "items-center"], [1, "text-2xl", "mb-4"], [1, "cl-btn-7", 3, "click"], [1, "flex", "justify-end", "items-center"], [1, "form_radio_group"], [1, "form_radio_group-item"], ["id", "radio-1", "type", "radio", "name", "radio", "value", "1", "checked", ""], ["for", "radio-1", 3, "click"], ["id", "radio-2", "type", "radio", "name", "radio", "value", "2"], ["for", "radio-2", 3, "click"], ["id", "radio-3", "type", "radio", "name", "radio", "value", "3"], ["for", "radio-3", 3, "click"], ["id", "radio-4", "type", "radio", "name", "radio", "value", "4"], ["for", "radio-4", 3, "click"], [1, "flex", "justify-between"], [1, "flex", "flex-col", "justify-around", "align-middle"], [4, "ngFor", "ngForOf"], [1, "w-full"], ["class", "data", 4, "ngIf"], [1, "data"], [3, "chartId", "chartData", "showX"]],
    template: function BmsSchemeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "BMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "OCPP");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, BmsSchemeComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, BmsSchemeComponent_object_16_Template, 474, 22, "object", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " \u0414\u0430\u043D\u043D\u044B\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 4)(21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, BmsSchemeComponent_div_22_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, BmsSchemeComponent_div_23_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, BmsSchemeComponent_div_24_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " BMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 4)(28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, BmsSchemeComponent_div_29_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, BmsSchemeComponent_div_30_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, BmsSchemeComponent_div_31_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Battaries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 4)(35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, BmsSchemeComponent_div_36_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, BmsSchemeComponent_div_37_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, BmsSchemeComponent_div_38_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Invertors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 4)(42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, BmsSchemeComponent_div_43_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, BmsSchemeComponent_div_44_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, BmsSchemeComponent_div_45_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " Pantograf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 4)(49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, BmsSchemeComponent_div_50_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, BmsSchemeComponent_div_51_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, BmsSchemeComponent_div_52_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Power Input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, BmsSchemeComponent_div_55_Template, 33, 7, "div", 18);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Object.keys(ctx.pantographData).length === 0 || ctx.Object.keys(ctx.cellsData).length === 0 || ctx.Object.keys(ctx.batteriesData).length === 0 || ctx.Object.keys(ctx.bmsLast).length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bmsLast.bmsLastData !== undefined && ctx.Object.keys(ctx.bmsLast.bmsLastData).length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bmsLast.isBMSDataGetted !== true && ctx.bmsLast.isBMSDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bmsLast.isBMSDataGetted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bmsLast.isBMSDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.batteriesData.isBattariesDataGetted !== true && ctx.batteriesData.isBattariesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.batteriesData.isBattariesDataGetted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.batteriesData.isBattariesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cellsData.isCellsDataGetted !== true && ctx.cellsData.isCellsDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cellsData.isCellsDataGetted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cellsData.isCellsDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pantographData.isPantografDataGetted !== true && ctx.pantographData.isPantografDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pantographData.isPantografDataGetted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pantographData.isPantografDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.powerInputData.isPowerInputDataGot !== true && ctx.powerInputData.isPowerInputDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.powerInputData.isPowerInputDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.powerInputData.isPowerInputDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showPopup);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe],
    styles: [".block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  height: 100%;\n}\nsvg[_ngcontent-%COMP%] {\n  height: 92vh;\n  width: 90vw;\n  margin: 0;\n  padding: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  background-color: #5aff07;\n}\n\n.loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\n.red[_ngcontent-%COMP%] {\n  stroke: red;\n}\n\n.blue[_ngcontent-%COMP%] {\n  stroke: blue;\n}\n\n.magento[_ngcontent-%COMP%] {\n  stroke: magenta;\n}\n\n.green[_ngcontent-%COMP%] {\n  stroke: green;\n}\n\n.black[_ngcontent-%COMP%] {\n  stroke: black !important;\n  stroke-width: 3;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9ibXMtc2NoZW1lL2Jtcy1zY2hlbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuc3ZnIHtcclxuICBoZWlnaHQ6IDkydmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFmZjA3O1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBzdHJva2U6IHJlZDtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIHN0cm9rZTogYmx1ZTtcclxufVxyXG5cclxuLm1hZ2VudG8ge1xyXG4gIHN0cm9rZTogbWFnZW50YTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBzdHJva2U6IGdyZWVuO1xyXG59XHJcblxyXG4uYmxhY2sge1xyXG4gIHN0cm9rZTogYmxhY2sgIWltcG9ydGFudDtcclxuICBzdHJva2Utd2lkdGg6IDM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9235:
/*!****************************************************************!*\
  !*** ./src/app/Components/bms-scheme/chart/chart.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartComponent: () => (/* binding */ ChartComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 7005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ChartComponent {
  constructor() {
    this.showX = false;
    this.chart = null;
    this.data = [];
    setTimeout(() => {
      this.data = this.chartData;
      this.inicializeChart();
    }, 1000);
  }
  inicializeChart() {
    chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);
    this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(this.chartId, {
      type: 'line',
      data: {
        datasets: [{
          data: this.data,
          pointHitRadius: 15,
          pointBorderColor: 'transparent',
          pointBackgroundColor: 'transparent',
          pointHoverBorderColor: '#009fff',
          pointHoverBackgroundColor: '#009fff',
          fill: true
        }]
      },
      options: {
        scales: {
          x: {
            display: this.showX,
            type: 'time',
            time: {
              parser: 'X',
              tooltipFormat: 'll HH:mm',
              displayFormats: {
                minute: 'HH:mm',
                hour: 'HH:mm'
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
  static #_ = this.ɵfac = function ChartComponent_Factory(t) {
    return new (t || ChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ChartComponent,
    selectors: [["app-chart"]],
    inputs: {
      chartId: "chartId",
      chartData: "chartData",
      showX: "showX"
    },
    decls: 1,
    vars: 1,
    consts: [["height", "30px", 3, "id"]],
    template: function ChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx.chartId);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3027:
/*!***************************************************!*\
  !*** ./src/app/Components/ocpp/ocpp.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcppComponent: () => (/* binding */ OcppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Services_DataGetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/DataGetters */ 3075);
/* harmony import */ var _Services_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/DataService */ 2165);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _bms_scheme_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bms-scheme/chart/chart.component */ 9235);






function OcppComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OcppComponent_object_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "object", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "defs", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "style", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " .st0{fill:#E6E6E6;stroke:#00FF21;stroke-width:2.0477;stroke-miterlimit:15.1181;} .st1{fill:#404040;stroke:#404040;stroke-width:3.5419;stroke-miterlimit:15.1181;} .st2{fill:#6699FF;stroke:#6699FF;stroke-width:3.5419;stroke-miterlimit:15.1181;} .st3{fill:#3366CC;stroke:#3366CC;stroke-width:3.5419;stroke-miterlimit:15.1181;} .st4{fill:#003399;stroke:#003399;stroke-width:3.5419;stroke-miterlimit:15.1181;} .st5{fill:#99CC33;stroke:#99CC33;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st6{fill:#669900;} .st7{fill:#FFCC00;stroke:#FFCC00;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st8{fill:#FF9900;stroke:#FF9900;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st9{fill:#0000FF;stroke:#404040;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st10{fill:none;stroke:#6699FF;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st11{fill:#6699FF;stroke:#6699FF;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st12{fill:none;stroke:#3366CC;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st13{fill:none;stroke:#003399;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st14{fill:none;stroke:#99CC33;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st15{fill:none;stroke:#669900;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st16{fill:none;stroke:#FFCC00;stroke-width:3.7795;stroke-miterlimit:15.1181;} .st17{fill:none;stroke:#FF9900;stroke-width:3.7795;stroke-miterlimit:15.1181;} ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "g", 27)(6, "g", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "rect", 29)(8, "rect", 30)(9, "rect", 31)(10, "rect", 32)(11, "rect", 33)(12, "rect", 34)(13, "rect", 35)(14, "rect", 36)(15, "rect", 37)(16, "rect", 38)(17, "rect", 39)(18, "rect", 40)(19, "rect", 41)(20, "rect", 42)(21, "rect", 43)(22, "rect", 44)(23, "rect", 45)(24, "rect", 46)(25, "rect", 47)(26, "rect", 48)(27, "rect", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "g", 50)(29, "rect", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_object_16_Template__svg_rect_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.getOcppData("ocpp700405"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "rect", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_object_16_Template__svg_rect_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.getOcppData("ocpp700406"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "rect", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_object_16_Template__svg_rect_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.getOcppData("ocpp700407"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "rect", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_object_16_Template__svg_rect_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.getOcppData("ocpp700408"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "rect", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_object_16_Template__svg_rect_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.getOcppData("ocpp700409"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "rect", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_object_16_Template__svg_rect_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.getOcppData("ocpp700410"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "rect", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_object_16_Template__svg_rect_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.getOcppData("ocpp700411"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "rect", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_object_16_Template__svg_rect_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.getOcppData("ocpp700412"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "g", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "path", 60)(39, "path", 61)(40, "path", 62)(41, "path", 63)(42, "path", 64)(43, "path", 65)(44, "path", 66)(45, "path", 67)(46, "path", 68)(47, "path", 69)(48, "path", 70)(49, "path", 71)(50, "path", 72)(51, "path", 73)(52, "path", 74)(53, "path", 75)(54, "path", 76)(55, "path", 77)(56, "path", 78)(57, "path", 79)(58, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "g", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "path", 82)(61, "path", 83)(62, "path", 84)(63, "path", 85)(64, "path", 86)(65, "path", 87)(66, "path", 88)(67, "path", 89)(68, "path", 90)(69, "path", 91)(70, "path", 92)(71, "path", 93)(72, "path", 94)(73, "path", 95)(74, "path", 96)(75, "path", 97)(76, "path", 98)(77, "path", 99)(78, "path", 100)(79, "path", 101)(80, "path", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "g", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "path", 104)(83, "path", 105)(84, "path", 106)(85, "path", 107)(86, "path", 108)(87, "path", 109)(88, "path", 110)(89, "path", 111)(90, "path", 112)(91, "path", 113)(92, "path", 114)(93, "path", 115)(94, "path", 116)(95, "path", 117)(96, "path", 118)(97, "path", 119)(98, "path", 120)(99, "path", 121)(100, "path", 122)(101, "path", 123)(102, "path", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "g", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "path", 126)(105, "path", 127)(106, "path", 128)(107, "path", 129)(108, "path", 130)(109, "path", 131)(110, "path", 132)(111, "path", 133)(112, "path", 134)(113, "path", 135)(114, "path", 136)(115, "path", 137)(116, "path", 138)(117, "path", 139)(118, "path", 140)(119, "path", 141)(120, "path", 142)(121, "path", 143)(122, "path", 144)(123, "path", 145)(124, "path", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "g", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "path", 148)(127, "path", 149)(128, "path", 150)(129, "path", 151)(130, "path", 152)(131, "path", 153)(132, "path", 154)(133, "path", 155)(134, "path", 156)(135, "path", 157)(136, "path", 158)(137, "path", 159)(138, "path", 160)(139, "path", 161)(140, "path", 162)(141, "path", 163)(142, "path", 164)(143, "path", 165)(144, "path", 166)(145, "path", 167)(146, "path", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "g", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "path", 170)(149, "path", 171)(150, "path", 172)(151, "path", 173)(152, "path", 174)(153, "path", 175)(154, "path", 176)(155, "path", 177)(156, "path", 178)(157, "path", 179)(158, "path", 180)(159, "path", 181)(160, "path", 182)(161, "path", 183)(162, "path", 184)(163, "path", 185)(164, "path", 186)(165, "path", 187)(166, "path", 188)(167, "path", 189)(168, "path", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "g", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "path", 192)(171, "path", 193)(172, "path", 194)(173, "path", 195)(174, "path", 196)(175, "path", 197)(176, "path", 198)(177, "path", 199)(178, "path", 200)(179, "path", 201)(180, "path", 202)(181, "path", 203)(182, "path", 204)(183, "path", 205)(184, "path", 206)(185, "path", 207)(186, "path", 208)(187, "path", 209)(188, "path", 210)(189, "path", 211)(190, "path", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "g", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "path", 214)(193, "path", 215)(194, "path", 216)(195, "path", 217)(196, "path", 218)(197, "path", 219)(198, "path", 220)(199, "path", 221)(200, "path", 222)(201, "path", 223)(202, "path", 224)(203, "path", 225)(204, "path", 226)(205, "path", 227)(206, "path", 228)(207, "path", 229)(208, "path", 230)(209, "path", 231)(210, "path", 232)(211, "path", 233)(212, "path", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "text", 235)(214, "tspan", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "U21");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "text", 237)(217, "tspan", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, "U22");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "text", 239)(220, "tspan", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "U23");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "text", 241)(223, "tspan", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "U24");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "text", 243)(226, "tspan", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "U25");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "text", 245)(229, "tspan", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, "U26");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "text", 247)(232, "tspan", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "U27");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "text", 249)(235, "tspan", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "U28");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "text", 251)(238, "tspan", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "U29");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "text", 253)(241, "tspan", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "U30");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "text", 255)(244, "tspan", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "U31");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "text", 257)(247, "tspan", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "U32");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "text", 259)(250, "tspan", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](251, "U33");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "text", 261)(253, "tspan", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "U34");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "text", 263)(256, "tspan", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "U35");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "text", 265)(259, "tspan", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "U36");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "text", 267)(262, "tspan", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "U37");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "text", 269)(265, "tspan", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "U38");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "text", 271)(268, "tspan", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "U39");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "text", 273)(271, "tspan", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "U40");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "text", 275)(274, "tspan", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "U41");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "text", 277)(277, "tspan", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "700405");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "text", 279)(280, "tspan", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "700406");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "text", 281)(283, "tspan", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "700407");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "text", 283)(286, "tspan", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, "700408");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "text", 285)(289, "tspan", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "700409");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "text", 287)(292, "tspan", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, "700410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "text", 289)(295, "tspan", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "700411");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "text", 291)(298, "tspan", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "700412");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "g", 293)(301, "text", 294)(302, "tspan", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "0/0V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "text", 296)(305, "tspan", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, "0/0 \u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "text", 298)(308, "tspan", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "0kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "g", 300)(311, "text", 301)(312, "tspan", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](313, "0kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](314, "text", 303)(315, "tspan", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](316, "0/0V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "text", 305)(318, "tspan", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](319, "0/0 \u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "g", 307)(321, "text", 308)(322, "tspan", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323, "0kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "text", 310)(325, "tspan", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "0/0V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "text", 312)(328, "tspan", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](329, "0/0 \u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "g", 314)(331, "text", 315)(332, "tspan", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "0kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "text", 317)(335, "tspan", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](336, "0/0V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](337, "text", 319)(338, "tspan", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](339, "0/0 \u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "g", 321)(341, "text", 322)(342, "tspan", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "0kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "text", 324)(345, "tspan", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, "0/0V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](347, "text", 326)(348, "tspan", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](349, "0/0 \u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "g", 328)(351, "text", 329)(352, "tspan", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "0kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "text", 331)(355, "tspan", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](356, "0/0V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "text", 333)(358, "tspan", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "0/0 \u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "g", 335)(361, "text", 336)(362, "tspan", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "0kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "text", 338)(365, "tspan", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](366, "0/0V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](367, "text", 340)(368, "tspan", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, "0/0 \u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "g", 342)(371, "text", 343)(372, "tspan", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](373, "0kW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "text", 345)(375, "tspan", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, "0/0V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "text", 347)(378, "tspan", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](379, "0/0 \u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
}
function OcppComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_ng_container_86_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 349);
  }
}
function OcppComponent_ng_container_86_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 350);
  }
}
function OcppComponent_ng_container_86_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 351);
  }
}
function OcppComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, OcppComponent_ng_container_86_div_3_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, OcppComponent_ng_container_86_div_4_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OcppComponent_ng_container_86_div_5_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.linesData.isLinesDataGot !== true && ctx_r29.linesData.isLinesDataError !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.linesData.isLinesDataGot);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.linesData.isLinesDataError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r40, " ");
  }
}
function OcppComponent_div_87_ng_container_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 372)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r46.key, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r46.value);
  }
}
function OcppComponent_div_87_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OcppComponent_div_87_ng_container_29_div_1_Template, 5, 2, "div", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.key !== "name");
  }
}
function OcppComponent_div_87_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-chart", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const isLast_r50 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chartId", item_r49.key)("chartData", item_r49.value)("showX", isLast_r50);
  }
}
function OcppComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 352)(1, "div", 353)(2, "div")(3, "div", 354)(4, "span", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_div_87_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r51.showPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 357)(8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 358)(11, "div", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_div_87_Template_label_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r53.getOcppData(ctx_r53.selectedDataName, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "1 \u0447\u0430\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_div_87_Template_label_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r54.getOcppData(ctx_r54.selectedDataName, 4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "4 \u0447\u0430\u0441\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_div_87_Template_label_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r55.getOcppData(ctx_r55.selectedDataName, 8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "8 \u0447\u0430\u0441\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OcppComponent_div_87_Template_label_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r56.getOcppData(ctx_r56.selectedDataName, 14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "14 \u0447\u0430\u0441\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 368)(28, "div", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, OcppComponent_div_87_ng_container_29_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, OcppComponent_div_87_ng_container_32_Template, 2, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r30.resultLastData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 3, ctx_r30.resultLastData));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 5, ctx_r30.chartData));
  }
}
class OcppComponent {
  constructor(dataGetters, dataService, titleService) {
    this.dataGetters = dataGetters;
    this.dataService = dataService;
    this.titleService = titleService;
    this.linesData = {};
    this.lines = [];
    this.ocppData = {};
    this.resultObject = {};
    this.resultLastData = {};
    this.chartData = {};
    this.selectedDataName = "";
    this.showPopup = false;
    this.coolArray = [];
    this.Object = Object;
    setInterval(() => {
      this.ocppData = this.dataGetters.getOcppColData();
      this.linesData = this.dataGetters.getLines();
    }, 1000);
  }
  ngOnInit() {
    for (let i = 21; i <= 41; i++) {
      this.coolArray.push(`U${i}`);
    }
    this.setTitle('S11123 - OCPP');
  }
  setTitle(newTitle) {
    this.titleService.setTitle(newTitle);
  }
  getOcppData(dataName, hours = 1) {
    this.resultObject = {};
    this.resultLastData = {};
    this.chartData = {};
    this.selectedDataName = dataName;
    this.showPopup = true;
    this.dataService.getData(this.selectedDataName, hours).then(data => {
      this.resultObject = data.reduce((acc, {
        _field,
        _value,
        _time
      }) => {
        if (!acc[_field]) {
          acc[_field] = [];
          acc[_field + 'Time'] = [];
        }
        acc[_field].push(_value.toFixed(2));
        acc[_field + 'Time'].push(new Date(_time).getTime());
        return acc;
      }, {});
      this.resultLastData = Object.keys(this.resultObject).reduce((acc, key) => {
        if (!key.includes('Time')) {
          acc[key] = this.resultObject[key][this.resultObject[key].length - 1];
        }
        return acc;
      }, {});
      this.resultLastData.name = data[0]._measurement;
      for (let item in this.resultObject) {
        if (!item.includes('Time')) {
          let tempArray = [];
          this.resultObject[item].map((elem, index) => {
            tempArray.push([this.resultObject[`${item}Time`][index], +elem]);
          });
          this.chartData[item] = tempArray;
        }
      }
    });
  }
  static #_ = this.ɵfac = function OcppComponent_Factory(t) {
    return new (t || OcppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_DataGetters__WEBPACK_IMPORTED_MODULE_0__.DataGetters), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_DataService__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: OcppComponent,
    selectors: [["app-ocpp"]],
    decls: 88,
    vars: 31,
    consts: [[1, "min-h-full"], [1, "bg-[#23CE6B]"], [1, "mx-auto", "max-w-7xl", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "h-16", "items-center", "justify-between"], [1, "flex", "items-center"], [1, "ml-10", "flex", "items-baseline", "space-x-4"], ["href", "/", "aria-current", "page", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/ocpp", 1, "bg-green-600", "text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/users", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/schedule", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["class", "loader", 4, "ngIf"], ["class", "block", 4, "ngIf"], [1, "absolute", "bottom-0", "p-5", "bg-gray-50", "shadow-xl"], [1, "text-xl"], [1, "mr-3"], ["class", "w-3 h-3 rounded-full bg-green-400 border border-black", 4, "ngIf"], ["class", "w-3 h-3 rounded-full bg-white border border-black", 4, "ngIf"], ["class", "w-3 h-3 rounded-full bg-red-500 border border-black", 4, "ngIf"], [1, "absolute", "bottom-0", "right-0", "p-5", "bg-gray-50", "shadow-xl"], [4, "ngFor", "ngForOf"], ["class", "popup", 4, "ngIf"], [1, "loader"], ["src", "./assets/ZC9Y.gif"], [1, "block"], ["preserveAspectRatio", "xMinYMin", "viewBox", "0 0 1000 1200", "version", "1.1", "id", "svg1", "width", "1400", "height", "768", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "svg", "http://www.w3.org/2000/svg"], ["id", "defs1"], ["type", "text/css", "id", "style1"], ["id", "layer1", "transform", "translate(45.791931,97.2164)"], ["id", "g54", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv21", "x", "1", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv22", "x", "93.300003", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv23", "x", "185.5", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv24", "x", "277.79999", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv25", "x", "370.10001", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv26", "x", "462.29999", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv27", "x", "554.59998", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv28", "x", "646.79999", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv29", "x", "739.09998", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv30", "x", "831.29999", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv31", "x", "923.59998", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv32", "x", "1015.8", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv33", "x", "1108.1", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv34", "x", "1200.4", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv35", "x", "1292.6", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv36", "x", "1384.9", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv37", "x", "1477.1", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv38", "x", "1569.4", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv39", "x", "1661.6", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv40", "x", "1753.9", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "inv41", "x", "1846.2", "y", "1006.2", "width", "72.800003", "height", "72.800003", 1, "st0", 2, "fill", "none", "stroke", "#000000", "stroke-opacity", "1"], ["id", "g55", "transform", "translate(6.8983269e-5)", 2, "stroke", "none"], ["id", "700405", "x", "2.5165415", "y", "3.8110108", "width", "221.76691", "height", "378.07245", 1, "st1", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], ["id", "700406", "x", "244.41653", "y", "3.8110108", "width", "221.76691", "height", "378.07245", 1, "st2", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], ["id", "700407", "x", "486.31656", "y", "3.8110108", "width", "221.76691", "height", "378.07245", 1, "st3", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], ["id", "700408", "x", "727.5", "y", "1.8", "width", "223.2", "height", "380.79999", 1, "st4", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], ["id", "700409", "x", "969.40002", "y", "1.8", "width", "223.2", "height", "380.79999", 1, "st5", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], ["id", "700510", "x", "1211.3", "y", "1.8", "width", "223.2", "height", "380.79999", 1, "st6", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-width", "3.78", "stroke-dasharray", "none", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], ["id", "700411", "x", "1453.2", "y", "1.8", "width", "223.2", "height", "380.79999", 1, "st7", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], ["id", "700412", "x", "1695.1", "y", "1.8", "width", "223.2", "height", "380.79999", 1, "st8", 2, "fill", "#ffffff", "fill-opacity", "1", "stroke", "#000000", "stroke-opacity", "1", "cursor", "pointer", 3, "click"], ["id", "g56"], ["id", "700405_to_inv21", "d", "M 37.4,1006.2 113.3,382.6", 1, "st9"], ["id", "700405_to_inv22", "d", "m 113.4,382.5 16.3,623.6", 1, "st9"], ["id", "700405_to_inv23", "d", "M 113.4,382.5 222,1006.1", 1, "st9"], ["id", "700405_to_inv24", "d", "m 113.4,382.5 200.9,623.6", 1, "st9"], ["id", "700405_to_inv25", "d", "m 113.4,382.5 293.1,623.6", 1, "st9"], ["id", "700405_to_inv26", "d", "m 113.4,382.5 385.4,623.6", 1, "st9"], ["id", "700405_to_inv27", "d", "M 113.4,382.5 591,1006.2", 1, "st9"], ["id", "700405_to_inv28", "d", "m 113.4,382.5 569.9,623.6", 1, "st9"], ["id", "700405_to_inv29", "d", "m 113.4,382.5 662.1,623.6", 1, "st9"], ["id", "700405_to_inv30", "d", "m 113.4,382.5 754.4,623.6", 1, "st9"], ["id", "700405_to_inv31", "d", "M 113.4,382.5 960,1006.2", 1, "st9"], ["id", "700405_to_inv32", "d", "m 113.4,382.5 938.9,623.6", 1, "st9"], ["id", "700405_to_inv33", "d", "M 1144.5,1006.2 113.4,382.5", 1, "st9"], ["id", "700405_to_inv34", "d", "M 1236.8,1006.2 113.4,382.5", 1, "st9"], ["id", "700405_to_inv35", "d", "M 1329,1006.2 113.4,382.5", 1, "st9"], ["id", "700405_to_inv36", "d", "M 1421.3,1006.2 113.4,382.5", 1, "st9"], ["id", "700405_to_inv37", "d", "M 1513.5,1006.2 113.4,382.5", 1, "st9"], ["id", "700405_to_inv38", "d", "M 1605.8,1006.2 113.4,382.5", 1, "st9"], ["id", "700405_to_inv39", "d", "M 1698.1,1006.2 113.4,382.5", 1, "st9"], ["id", "700405_to_inv40", "d", "M 1790.3,1006.2 113.3,382.6", 1, "st9"], ["id", "700405_to_inv41", "d", "M 1882.6,1006.2 113.4,382.5", 1, "st9"], ["id", "g76"], ["id", "700406_to_inv21", "d", "M 37.4,1006.2 355.2,382.6", 1, "st10"], ["id", "700406_to_inv22", "d", "M 129.7,1006.2 355.3,382.6", 1, "st11"], ["id", "700406_to_inv23", "d", "M 221.9,1006.2 355.2,382.6", 1, "st11"], ["id", "700406_to_inv24", "d", "m 314.2,1006.2 41,-623.6", 1, "st11"], ["id", "700406_to_inv25", "d", "M 406.5,1006.2 355.3,382.6", 1, "st11"], ["id", "700406_to_inv26", "d", "M 498.7,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv27", "d", "M 591,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv28", "d", "M 683.2,1006.2 355.2,382.6", 1, "st11"], ["id", "700406_to_inv29", "d", "M 775.5,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv30", "d", "M 867.7,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv31", "d", "M 960,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv32", "d", "M 1052.3,1006.2 355.3,382.6", 1, "st11"], ["id", "700406_to_inv33", "d", "M 1144.5,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv34", "d", "M 1236.8,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv35", "d", "M 1329,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv36", "d", "M 1421.3,1006.2 355.3,382.6", 1, "st11"], ["id", "700406_to_inv37", "d", "M 1513.5,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv38", "d", "M 1605.8,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv39", "d", "M 1698.1,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv40", "d", "M 1790.3,1006.2 355.3,382.5", 1, "st11"], ["id", "700406_to_inv41", "d", "M 1882.6,1006.2 355.3,382.5", 1, "st11"], ["id", "g97"], ["id", "700407_to_inv21", "d", "M 37.4,1006.2 597.1,382.6", 1, "st12"], ["id", "700407_to_inv22", "d", "M 129.7,1006.2 597.2,382.6", 1, "st12"], ["id", "700407_to_inv23", "d", "M 221.9,1006.2 597.1,382.6", 1, "st12"], ["id", "700407_to_inv24", "d", "M 314.2,1006.2 597.1,382.6", 1, "st12"], ["id", "700407_to_inv25", "d", "M 406.5,1006.2 597.2,382.6", 1, "st12"], ["id", "700407_to_inv26", "d", "M 498.7,1006.2 597.1,382.6", 1, "st12"], ["id", "700407_to_inv27", "d", "m 591,1006.2 6.2,-623.6", 1, "st12"], ["id", "700407_to_inv28", "d", "M 683.2,1006.2 597.1,382.6", 1, "st12"], ["id", "700407_to_inv29", "d", "M 775.5,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv30", "d", "M 867.7,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv31", "d", "M 960,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv32", "d", "M 1052.3,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv33", "d", "M 1144.5,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv34", "d", "M 1236.8,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv35", "d", "M 1329,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv36", "d", "M 1421.3,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv37", "d", "M 1513.5,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv38", "d", "M 1605.8,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv39", "d", "M 1698.1,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv40", "d", "M 1790.3,1006.2 597.2,382.5", 1, "st12"], ["id", "700407_to_inv41", "d", "M 1882.6,1006.2 597.2,382.5", 1, "st12"], ["id", "g118"], ["id", "700408_to_inv21", "d", "M 37.4,1006.2 839,382.6", 1, "st13"], ["id", "700408_to_inv22", "d", "M 129.7,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv23", "d", "M 221.9,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv24", "d", "M 314.2,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv25", "d", "M 406.5,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv26", "d", "M 498.7,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv27", "d", "M 591,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv28", "d", "M 683.2,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv29", "d", "M 775.5,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv30", "d", "M 867.7,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv31", "d", "M 960,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv32", "d", "M 1052.3,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv33", "d", "M 1144.5,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv34", "d", "M 1236.8,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv35", "d", "M 1329,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv36", "d", "M 1421.3,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv37", "d", "M 1513.5,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv38", "d", "M 1605.8,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv39", "d", "M 1698.1,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv40", "d", "M 1790.3,1006.2 839,382.5", 1, "st13"], ["id", "700408_to_inv41", "d", "M 1882.6,1006.2 839,382.5", 1, "st13"], ["id", "g139"], ["id", "700409_to_inv21", "d", "M 37.4,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv22", "d", "M 129.7,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv23", "d", "m 221.9,1006.2 859,-623.6", 1, "st14"], ["id", "700409_to_inv24", "d", "M 314.2,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv25", "d", "M 406.5,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv26", "d", "M 498.7,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv27", "d", "M 591,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv28", "d", "M 683.2,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv29", "d", "M 775.5,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv30", "d", "M 867.7,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv31", "d", "M 960,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv32", "d", "M 1052.3,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv34", "d", "M 1236.8,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv33", "d", "M 1144.5,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv35", "d", "M 1329,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv36", "d", "M 1421.3,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv37", "d", "M 1513.5,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv38", "d", "M 1605.8,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv39", "d", "M 1698.1,1006.2 1081,382.6", 1, "st14"], ["id", "700409_to_inv40", "d", "M 1790.3,1006.2 1080.9,382.6", 1, "st14"], ["id", "700409_to_inv41", "d", "M 1882.6,1006.2 1081,382.6", 1, "st14"], ["id", "g160"], ["id", "700410_to_inv21", "d", "M 37.4,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv22", "d", "M 129.7,1006.2 1322.9,382.6", 1, "st15"], ["id", "700410_to_inv23", "d", "M 221.9,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv24", "d", "M 1322.8,382.5 314.2,1006.2 1322.8,382.5", 1, "st15"], ["id", "700410_to_inv25", "d", "M 406.5,1006.2 1322.9,382.6", 1, "st15"], ["id", "700410_to_inv26", "d", "M 498.7,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv27", "d", "M 591,1006.2 1322.9,382.6", 1, "st15"], ["id", "700410_to_inv28", "d", "M 683.2,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv29", "d", "M 775.5,1006.2 1322.9,382.6", 1, "st15"], ["id", "700410_to_inv30", "d", "M 867.7,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv31", "d", "M 960,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv32", "d", "M 1052.3,1006.2 1322.9,382.6", 1, "st15"], ["id", "700410_to_inv33", "d", "M 1144.5,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv34", "d", "m 1236.8,1006.2 86.1,-623.6", 1, "st15"], ["id", "700410_to_inv35", "d", "m 1329,1006.2 -6.2,-623.6", 1, "st15"], ["id", "700410_to_inv36", "d", "M 1421.3,1006.2 1322.9,382.6", 1, "st15"], ["id", "700410_to_inv37", "d", "M 1513.5,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv38", "d", "M 1605.8,1006.2 1322.9,382.6", 1, "st15"], ["id", "700410_to_inv39", "d", "M 1698.1,1006.2 1322.9,382.6", 1, "st15"], ["id", "700410_to_inv40", "d", "M 1790.3,1006.2 1322.8,382.6", 1, "st15"], ["id", "700410_to_inv41", "d", "M 1882.6,1006.2 1322.9,382.6", 1, "st15"], ["id", "g181"], ["id", "700411_to_inv21", "d", "M 37.4,1006.2 1564.7,382.6", 1, "st16"], ["id", "700411_to_inv22", "d", "M 129.7,1006.2 1564.8,382.6", 1, "st7"], ["id", "700411_to_inv23", "d", "M 221.9,1006.2 1564.7,382.6", 1, "st7"], ["id", "700411_to_inv24", "d", "M 314.2,1006.2 1564.7,382.6", 1, "st7"], ["id", "700411_to_inv25", "d", "M 406.5,1006.2 1564.8,382.6", 1, "st7"], ["id", "700411_to_inv26", "d", "m 498.7,1006.2 1066,-623.6", 1, "st7"], ["id", "700411_to_inv27", "d", "M 591,1006.2 1564.8,382.6", 1, "st7"], ["id", "700411_to_inv28", "d", "M 683.2,1006.2 1564.7,382.6", 1, "st7"], ["id", "700411_to_inv29", "d", "M 775.5,1006.2 1564.8,382.6", 1, "st7"], ["id", "700411_to_inv30", "d", "m 867.7,1006.2 697,-623.6", 1, "st7"], ["id", "700411_to_inv31", "d", "M 960,1006.2 1564.7,382.6", 1, "st7"], ["id", "700411_to_inv32", "d", "M 1052.3,1006.2 1564.8,382.6", 1, "st7"], ["id", "700411_to_inv33", "d", "M 1144.5,1006.2 1564.7,382.6", 1, "st7"], ["id", "700411_to_inv34", "d", "m 1236.8,1006.2 328,-623.6", 1, "st7"], ["id", "700411_to_inv35", "d", "M 1329,1006.2 1564.7,382.6", 1, "st7"], ["id", "700411_to_inv36", "d", "M 1421.3,1006.2 1564.8,382.6", 1, "st7"], ["id", "700411_to_inv37", "d", "m 1513.5,1006.2 51.2,-623.6", 1, "st7"], ["id", "700411_to_inv38", "d", "m 1605.8,1006.2 -41,-623.6", 1, "st7"], ["id", "700411_to_inv39", "d", "M 1698.1,1006.2 1564.8,382.6", 1, "st7"], ["id", "700411_to_inv40", "d", "M 1790.3,1006.2 1564.7,382.6", 1, "st7"], ["id", "700411_to_inv41", "d", "M 1882.6,1006.2 1564.8,382.6", 1, "st7"], ["id", "g202"], ["id", "700412_to_inv21", "d", "M 37.4,1006.2 1806.6,382.6", 1, "st17"], ["id", "700412_to_inv22", "d", "m 129.7,1006.2 1677,-623.6", 1, "st8"], ["id", "700412_to_inv23", "d", "M 221.9,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv24", "d", "M 314.2,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv25", "d", "M 406.5,1006.2 1806.7,382.6", 1, "st8"], ["id", "700412_to_inv26", "d", "M 498.7,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv27", "d", "M 591,1006.2 1806.7,382.6", 1, "st8"], ["id", "700412_to_inv28", "d", "M 683.2,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv29", "d", "M 775.5,1006.2 1806.7,382.6", 1, "st8"], ["id", "700412_to_inv30", "d", "M 867.7,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv31", "d", "M 960,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv32", "d", "M 1052.3,1006.2 1806.7,382.6", 1, "st8"], ["id", "700412_to_inv33", "d", "M 1144.5,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv34", "d", "M 1236.8,1006.2 1806.7,382.6", 1, "st8"], ["id", "700412_to_inv35", "d", "M 1329,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv36", "d", "M 1421.3,1006.2 1806.7,382.6", 1, "st8"], ["id", "700412_to_inv37", "d", "M 1513.5,1006.2 1806.6,382.6", 1, "st8"], ["id", "700412_to_inv38", "d", "M 1605.8,1006.2 1806.7,382.6", 1, "st8"], ["id", "700412_to_inv39", "d", "M 1698.1,1006.2 1806.7,382.6", 1, "st8"], ["id", "700412_to_inv40", "d", "m 1790.3,1006.2 16.3,-623.6", 1, "st8"], ["id", "700412_to_inv41", "d", "M 1882.6,1006.2 1806.7,382.6", 1, "st8"], [0, "xml", "space", "preserve", "x", "5.0653272", "y", "1053.588", "id", "text1", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1", "x", "5.0653272", "y", "1053.588", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "98.902168", "y", "1052.2374", "id", "text1-1", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-0", "x", "98.902168", "y", "1052.2374", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "189.81172", "y", "1052.2424", "id", "text1-0", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-8", "x", "189.81172", "y", "1052.2424", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "282.94739", "y", "1053.1973", "id", "text1-9", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-85", "x", "282.94739", "y", "1053.1973", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "375.48508", "y", "1054.6897", "id", "text1-3", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-2", "x", "375.48508", "y", "1054.6897", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "467.47", "y", "1054.8958", "id", "text1-6", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-5", "x", "467.47", "y", "1054.8958", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "560.20868", "y", "1053.9611", "id", "text1-67", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-1", "x", "560.20868", "y", "1053.9611", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "653.10822", "y", "1053.9962", "id", "text1-7", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-4", "x", "653.10822", "y", "1053.9962", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "744.073", "y", "1054.1721", "id", "text1-2", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-80", "x", "744.073", "y", "1054.1721", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "836.92731", "y", "1053.4283", "id", "text1-28", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3", "x", "836.92731", "y", "1053.4283", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "929.04791", "y", "1053.4736", "id", "text1-28-0", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-0", "x", "929.04791", "y", "1053.4736", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1019.8268", "y", "1054.0717", "id", "text1-28-5", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9", "x", "1019.8268", "y", "1054.0717", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1112.3242", "y", "1054.3027", "id", "text1-28-5-8", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["x", "1112.3242", "y", "1054.3027", "id", "tspan3", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1204.7665", "y", "1054.0012", "id", "text1-28-5-0", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9-8", "x", "1204.7665", "y", "1054.0012", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1296.5457", "y", "1054.7134", "id", "text1-28-5-89", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9-5", "x", "1296.5457", "y", "1054.7134", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1388.6482", "y", "1055.5682", "id", "text1-28-5-88", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9-7", "x", "1388.6482", "y", "1055.5682", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1480.9944", "y", "1055.8302", "id", "text1-28-5-4", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9-9", "x", "1480.9944", "y", "1055.8302", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1573.1111", "y", "1055.8768", "id", "text1-28-5-07", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9-82", "x", "1573.1111", "y", "1055.8768", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1666.3396", "y", "1056.1946", "id", "text1-28-5-00", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9-73", "x", "1666.3396", "y", "1056.1946", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1756.2745", "y", "1056.7368", "id", "text1-28-5-1", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9-2", "x", "1756.2745", "y", "1056.7368", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "1852.234", "y", "1055.8109", "id", "text1-28-5-5", 2, "fill", "#fdfdfd", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan1-3-9-4", "x", "1852.234", "y", "1055.8109", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1"], [0, "xml", "space", "preserve", "x", "40", "y", "62.526821", "id", "text4", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "42.6667px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan4", "x", "40", "y", "62.526821"], [0, "xml", "space", "preserve", "x", "285", "y", "61.517117", "id", "text4-1", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "42.6667px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan4-6", "x", "285", "y", "61.517117"], [0, "xml", "space", "preserve", "x", "525", "y", "60.194572", "id", "text4-1-0", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "42.6667px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan4-6-3", "x", "525", "y", "60.194572"], [0, "xml", "space", "preserve", "x", "765", "y", "59.822884", "id", "text4-1-2", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "42.6667px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan4-6-38", "x", "765", "y", "59.822884"], [0, "xml", "space", "preserve", "x", "1010", "y", "59.327625", "id", "text4-1-7", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "42.6667px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan4-6-9", "x", "1010", "y", "59.327625"], [0, "xml", "space", "preserve", "x", "1250", "y", "59.909248", "id", "text4-1-29", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "42.6667px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan4-6-98", "x", "1250", "y", "59.909248"], [0, "xml", "space", "preserve", "x", "1495", "y", "61.330723", "id", "text4-1-5", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "42.6667px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan4-6-8", "x", "1495", "y", "61.330723"], [0, "xml", "space", "preserve", "x", "1735", "y", "61.105587", "id", "text4-1-3", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "42.6667px", "font-family", "sans-serif", "-inkscape-font-specification", "'sans-serif, Normal'", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "7.42677", "stroke-opacity", "0"], ["id", "tspan4-6-6", "x", "1735", "y", "61.105587"], ["id", "g18", "transform", "translate(-58.309859,14.366197)"], [0, "xml", "space", "preserve", "x", "72.116699", "y", "145.16312", "id", "700405_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan9", "x", "72.116699", "y", "145.16312"], [0, "xml", "space", "preserve", "x", "71.561615", "y", "191.89207", "id", "700405_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan11", "x", "71.561615", "y", "191.89207"], [0, "xml", "space", "preserve", "x", "70.926582", "y", "237.15814", "id", "700405_power", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan6", "x", "70.926582", "y", "237.15814"], ["id", "g17", "transform", "translate(3.8397843,71.995956)"], [0, "xml", "space", "preserve", "x", "254.31874", "y", "172.52264", "id", "700406_power", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan6-7", "x", "254.31874", "y", "172.52264"], [0, "xml", "space", "preserve", "x", "254.96167", "y", "85.886711", "id", "700406_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan9-2", "x", "254.96167", "y", "85.886711"], [0, "xml", "space", "preserve", "x", "255.06108", "y", "127.93439", "id", "700406_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan11-8", "x", "255.06108", "y", "127.93439"], ["id", "g16", "transform", "translate(-8.9877162,5.5901729)"], [0, "xml", "space", "preserve", "x", "508.66626", "y", "236.72169", "id", "700407_power", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan6-5", "x", "508.66626", "y", "236.72169"], [0, "xml", "space", "preserve", "x", "508.41022", "y", "152.92175", "id", "700407_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan9-4", "x", "508.41022", "y", "152.92175"], [0, "xml", "space", "preserve", "x", "509.1236", "y", "195.80074", "id", "700407_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan11-9", "x", "509.1236", "y", "195.80074"], ["id", "g15"], [0, "xml", "space", "preserve", "x", "741.76025", "y", "236.44008", "id", "700408_power", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan6-3", "x", "741.76025", "y", "236.44008"], [0, "xml", "space", "preserve", "x", "743.3017", "y", "156.94324", "id", "700408_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan9-27", "x", "743.3017", "y", "156.94324"], [0, "xml", "space", "preserve", "x", "743.41266", "y", "196.32837", "id", "700408_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan11-7", "x", "743.41266", "y", "196.32837"], ["id", "g14", "transform", "translate(-43.32384,22.360692)"], [0, "xml", "space", "preserve", "x", "1029.4095", "y", "213.11166", "id", "700409_power", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan6-0", "x", "1029.4095", "y", "213.11166"], [0, "xml", "space", "preserve", "x", "1029.9414", "y", "132.61728", "id", "700409_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", ";font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan9-9", "x", "1029.9414", "y", "132.61728"], [0, "xml", "space", "preserve", "x", "1029.3536", "y", "172.60486", "id", "700409_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan11-5", "x", "1029.3536", "y", "172.60486"], ["id", "g13"], [0, "xml", "space", "preserve", "x", "1229.8419", "y", "230.72617", "id", "700410_power", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan6-1", "x", "1229.8419", "y", "230.72617"], [0, "xml", "space", "preserve", "x", "1230.2817", "y", "153.74277", "id", "700410_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan9-1", "x", "1230.2817", "y", "153.74277"], [0, "xml", "space", "preserve", "x", "1230.3927", "y", "193.1279", "id", "700410_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan11-2", "x", "1230.3927", "y", "193.1279"], ["id", "g12"], [0, "xml", "space", "preserve", "x", "1469.4043", "y", "226.88953", "id", "700411_power", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan6-73", "x", "1469.4043", "y", "226.88953"], [0, "xml", "space", "preserve", "x", "1470.8851", "y", "152.67625", "id", "700411_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan9-14", "x", "1470.8851", "y", "152.67625"], [0, "xml", "space", "preserve", "x", "1470.2974", "y", "189.2663", "id", "700411_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan11-58", "x", "1470.2974", "y", "189.2663"], ["id", "g11", "transform", "translate(-10.481574,15.372976)"], [0, "xml", "space", "preserve", "x", "1717.3734", "y", "211.51653", "id", "700412_power", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan6-36", "x", "1717.3734", "y", "211.51653"], [0, "xml", "space", "preserve", "x", "1719.1084", "y", "137.08521", "id", "700412_voltage", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan9-97", "x", "1719.1084", "y", "137.08521"], [0, "xml", "space", "preserve", "x", "1718.5206", "y", "173.67523", "id", "700412_current", 2, "font-style", "normal", "font-variant", "normal", "font-weight", "normal", "font-stretch", "normal", "font-size", "32px", "font-variant-ligatures", "normal", "font-variant-caps", "normal", "font-variant-numeric", "normal", "font-variant-east-asian", "normal", "fill", "#000000", "fill-opacity", "1", "stroke", "none", "stroke-width", "3.78", "stroke-opacity", "1"], ["id", "tspan11-6", "x", "1718.5206", "y", "173.67523"], [1, "w-3", "h-3", "rounded-full", "bg-green-400", "border", "border-black"], [1, "w-3", "h-3", "rounded-full", "bg-white", "border", "border-black"], [1, "w-3", "h-3", "rounded-full", "bg-red-500", "border", "border-black"], [1, "popup"], [1, "popup-content"], [1, "flex", "justify-between", "items-center"], [1, "text-2xl", "mb-4"], [1, "cl-btn-7", 3, "click"], [1, "flex", "justify-end", "items-center"], [1, "form_radio_group"], [1, "form_radio_group-item"], ["id", "radio-1", "type", "radio", "name", "radio", "value", "1", "checked", ""], ["for", "radio-1", 3, "click"], ["id", "radio-2", "type", "radio", "name", "radio", "value", "2"], ["for", "radio-2", 3, "click"], ["id", "radio-3", "type", "radio", "name", "radio", "value", "3"], ["for", "radio-3", 3, "click"], ["id", "radio-4", "type", "radio", "name", "radio", "value", "4"], ["for", "radio-4", 3, "click"], [1, "flex", "justify-around"], [1, "flex", "flex-col", "justify-around", "align-middle"], [1, "w-2/3"], ["class", "data", 4, "ngIf"], [1, "data"], [3, "chartId", "chartData", "showX"]],
    template: function OcppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "BMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "OCPP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, OcppComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, OcppComponent_object_16_Template, 380, 0, "object", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " \u0414\u0430\u043D\u043D\u044B\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 4)(21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, OcppComponent_div_22_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, OcppComponent_div_23_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, OcppComponent_div_24_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " 700405 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 4)(28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, OcppComponent_div_29_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, OcppComponent_div_30_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, OcppComponent_div_31_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " 700406 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 4)(35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, OcppComponent_div_36_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, OcppComponent_div_37_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, OcppComponent_div_38_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " 700407 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 4)(42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, OcppComponent_div_43_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, OcppComponent_div_44_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, OcppComponent_div_45_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " 700408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 4)(49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, OcppComponent_div_50_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, OcppComponent_div_51_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, OcppComponent_div_52_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " 700409 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 4)(56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, OcppComponent_div_57_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, OcppComponent_div_58_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, OcppComponent_div_59_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " 700410 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 4)(63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, OcppComponent_div_64_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, OcppComponent_div_65_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, OcppComponent_div_66_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " 700411 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 4)(70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, OcppComponent_div_71_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, OcppComponent_div_72_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, OcppComponent_div_73_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " 700412 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 4)(77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, OcppComponent_div_78_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, OcppComponent_div_79_Template, 1, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, OcppComponent_div_80_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " KM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 18)(84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " \u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, OcppComponent_ng_container_86_Template, 8, 4, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, OcppComponent_div_87_Template, 34, 7, "div", 20);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.lines === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.lines !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot !== true && ctx.linesData.isLinesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot !== true && ctx.linesData.isLinesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot !== true && ctx.linesData.isLinesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot !== true && ctx.linesData.isLinesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot !== true && ctx.linesData.isLinesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot !== true && ctx.linesData.isLinesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot !== true && ctx.linesData.isLinesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot !== true && ctx.linesData.isLinesDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.linesData.isLinesDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ocppData.isColsDataGot !== true && ctx.ocppData.isColsDataError !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ocppData.isColsDataGot);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ocppData.isColsDataError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.coolArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPopup);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _bms_scheme_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe],
    styles: [".block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\nsvg[_ngcontent-%COMP%] {\n  height: 90vh;\n  width: 90vw;\n  margin: 0;\n  padding: 0;\n}\n\nobject[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9vY3BwL29jcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuc3ZnIHtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm9iamVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7726:
/*!***********************************************************!*\
  !*** ./src/app/Components/schedule/schedule.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleComponent: () => (/* binding */ ScheduleComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data.js */ 2938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function ScheduleComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0433\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0434\u0435\u043D\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_div_31_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r9.getColor(item_r10.mode));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r10.time, " - ", i_r11 < ctx_r9.dataGetter(true).length - 1 ? ctx_r9.dataGetter(true)[i_r11 + 1].time : "23:59", " ");
  }
}
function ScheduleComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ScheduleComponent_div_31_ng_container_4_Template, 3, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_div_31_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.newScheduleWorker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0433\u043E\u0434 (", ctx_r4.year, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.dataGetter(true));
  }
}
function ScheduleComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](day_r14);
  }
}
function ScheduleComponent_tr_37_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_tr_37_td_1_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const i_r18 = restoredCtx.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.dayScheduleWorker(i_r18 + 1, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r16.getColor(item_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r15[0]);
  }
}
function ScheduleComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScheduleComponent_tr_37_td_1_Template, 4, 3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, row_r15, 1));
  }
}
function ScheduleComponent_div_38_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r22.getColor(item_r23.mode));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r23.time, " - ", i_r24 < ctx_r22.responseData.length - 1 ? ctx_r22.responseData[i_r24 + 1].time : "23:59", " ");
  }
}
function ScheduleComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0434\u0435\u043D\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ScheduleComponent_div_38_ng_container_5_Template, 3, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_div_38_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.newScheduleWorker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r7.selectedMonth, " ", ctx_r7.selectedDay, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.responseData);
  }
}
function ScheduleComponent_div_39_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r27.selectedMonth, " ", ctx_r27.selectedDay, "");
  }
}
function ScheduleComponent_div_39_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.year);
  }
}
function ScheduleComponent_div_39_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r29.getColor(item_r32.mode));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r32.time, " - ", i_r33 < ctx_r29.responseData.length - 1 ? ctx_r29.responseData[i_r33 + 1].time : "23:59", " ");
  }
}
function ScheduleComponent_div_39_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const time_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", time_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](time_r34);
  }
}
function ScheduleComponent_div_39_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r31.getColor(item_r35.mode));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r35.time, " - ", i_r36 < ctx_r31.newSchedule.length - 1 ? ctx_r31.newSchedule[i_r36 + 1].time : "23:59", " ");
  }
}
function ScheduleComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScheduleComponent_div_39_div_3_Template, 2, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ScheduleComponent_div_39_div_4_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_div_39_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.showPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ScheduleComponent_div_39_ng_container_10_Template, 3, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u041D\u043E\u0432\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 38)(14, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScheduleComponent_div_39_Template_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.selectedTime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ScheduleComponent_div_39_ng_container_15_Template, 3, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 40)(17, "div", 41)(18, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_div_39_Template_input_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.selectedMode = "CHARGE");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0417\u0430\u0440\u044F\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 41)(22, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_div_39_Template_input_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r41.selectedMode = "DISCHARGE");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0420\u0430\u0437\u0440\u044F\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 41)(26, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_div_39_Template_input_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.selectedMode = "WAIT");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_div_39_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.addNewSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ScheduleComponent_div_39_ng_container_31_Template, 3, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_div_39_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r44.saveSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.isDaySchedule);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.isYearSchedule);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.responseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.selectedTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.newSchedule);
  }
}
class ScheduleComponent {
  constructor(http, titleService) {
    this.http = http;
    this.titleService = titleService;
    this.hours = [];
    this.days = [];
    this.selectedMonth = '';
    this.selectedDay = 0;
    this.isDaySchedule = false;
    this.isYearSchedule = false;
    this.schedule = [];
    this.resultSchedule = [];
    this.allYearSchedule = [];
    this.responseData = [];
    this.showPopup = false;
    this.newSchedule = [];
    this.selectedTime = '';
    this.selectedMode = 'WAIT';
    this.storageKey = 'dataStorage';
    const date = new Date();
    this.month = date.getMonth();
    this.selectedDay = date.getDate();
    this.selectedMonth = date.toLocaleString('default', {
      month: 'long'
    });
    this.year = date.getFullYear();
    this.updateDays();
    this.initializeData();
    this.schedule = this.getData();
    this.getSchedule();
  }
  ngOnInit() {
    this.setTitle('S11123 - Расписание');
  }
  setTitle(newTitle) {
    this.titleService.setTitle(newTitle);
  }
  initializeData() {
    if (!this.getData()) {
      this.setData(_assets_data_js__WEBPACK_IMPORTED_MODULE_0__.Schedule);
    }
  }
  getData() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }
  setData(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
  updateData(newData) {
    let data = this.getData();
    const index = data.findIndex(item => item.id === newData.id);
    if (index !== -1) {
      data[index] = newData;
      this.setData(data);
    }
  }
  addData(newData) {
    let data = this.getData();
    data.push(newData);
    this.setData(data);
  }
  getSchedule() {
    this.hours = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j += 30) {
        let hour = i < 10 ? '0' + i : i;
        let minute = j == 0 ? '00' : j;
        this.hours.push(hour + ':' + minute);
      }
    }
    this.hours.push('23:59');
    /*this.http.get("http://127.0.0.1:8000/schedule/").subscribe({next:(response: any) => {
        this.schedule = response;
             let test: any = [];
             this.allYearSchedule = this.transform(this.schedule, this.hours).filter(item => item.date === 'all');
             this.days.map(day => {
          let a: any[]=[];
          this.transform(this.schedule, this.hours).filter(item => {
            if(item.date.slice(0,2).includes(day) && item.date.slice(3,5).includes(this.month + 1)){
              a.push(item)
            }
          })
          test.push(a);
        })
             test.map(item => {
          if (item.length === 0) {
            this.allYearSchedule.map(scheduleItem => {
              item.push(scheduleItem)
            })
          }
        })
             this.resultSchedule = test[0].map((_, index) => {
          let time = test[0][index].time;
          let modes = test.map(array => array[index].mode);
          return [time, ...modes];
        });
    }});*/
    let test = [];
    this.allYearSchedule = this.transform(this.schedule, this.hours).filter(item => item.date === 'all');
    console.log(this.days);
    this.days.map(day => {
      let a = [];
      this.transform(this.schedule, this.hours).filter(item => {
        if (item.date.slice(0, 2) == (day < 10 ? `0${day}` : day) && item.date.slice(3, 5).includes(this.month + 1)) {
          console.log(day < 10 ? `0${day}` : day);
          a.push(item);
        }
      });
      test.push(a);
    });
    test.map(item => {
      if (item.length === 0) {
        this.allYearSchedule.map(scheduleItem => {
          item.push(scheduleItem);
        });
      }
    });
    this.resultSchedule = test[0].map((_, index) => {
      let time = test[0][index].time;
      let modes = test.map(array => {
        if (array[index] !== undefined) return array[index].mode;
      });
      return [time, ...modes];
    });
  }
  dataGetter(isYear, date) {
    if (isYear) {
      return this.schedule.filter(item => item.date == 'all');
    }
  }
  transform(objects, times) {
    let result = [];
    let dates = [...new Set(objects.map(obj => obj.date))];
    dates.forEach(date => {
      let filteredObjects = objects.filter(obj => obj.date === date);
      filteredObjects.sort((a, b) => a.time.localeCompare(b.time));
      let currentObject = filteredObjects[0];
      times.forEach(time => {
        let nextObject = filteredObjects.find(obj => obj.time === time);
        if (nextObject) {
          currentObject = nextObject;
        }
        result.push({
          ...currentObject,
          time: time
        });
      });
    });
    return result;
  }
  nextMonth() {
    const date = new Date();
    this.month = (this.month + 1) % 12;
    date.setMonth(this.month);
    this.selectedMonth = date.toLocaleString('default', {
      month: 'long'
    });
    if (this.month === 0) {
      this.year++;
    }
    this.updateDays();
    this.getSchedule();
  }
  prevMonth() {
    this.month = (this.month - 1 + 12) % 12;
    const date = new Date();
    date.setMonth(this.month);
    this.selectedMonth = date.toLocaleString('default', {
      month: 'long'
    });
    if (this.month === 11) {
      this.year--;
    }
    this.updateDays();
    this.getSchedule();
  }
  updateDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    this.days = Array.from({
      length: daysInMonth
    }, (_, i) => i + 1);
  }
  dayScheduleWorker(day = new Date().getDate(), isCalenderClick = false) {
    this.isYearSchedule = false;
    this.responseData = this.schedule.filter(item => {
      if (item.date.slice(0, 2) == (day < 10 ? `0${day}` : day)) {
        return item;
      }
    });
    if (this.responseData.length === 0) {
      this.responseData = this.schedule.filter(item => item.date === 'all');
    }
    this.selectedDay = day;
    if (!isCalenderClick) {
      this.isDaySchedule = !this.isDaySchedule;
    } else {
      this.isDaySchedule = true;
    }
  }
  yearScheduleWorker() {
    this.isDaySchedule = false;
    this.isYearSchedule = !this.isYearSchedule;
  }
  newScheduleWorker() {
    if (this.isDaySchedule && this.responseData.length == 0) {
      this.responseData = this.schedule.filter(item => item.date.slice(0, 2) == this.selectedDay);
    } else if (this.isYearSchedule) {
      this.responseData = this.schedule.filter(item => item.date == 'all');
    }
    this.newSchedule = [];
    this.showPopup = true;
  }
  addNewSchedule() {
    let newId = this.schedule[this.schedule.length - 1].id + 1;
    this.newSchedule.push({
      id: newId,
      date: this.isDaySchedule ? `${this.selectedDay < 10 ? `0${this.selectedDay}` : this.selectedDay}.${this.month + 1 < 10 ? `0${this.month + 1}` : this.month}.${this.year}` : 'all',
      time: this.selectedTime,
      mode: this.selectedMode
    });
  }
  saveSchedule() {
    if (this.isDaySchedule) {
      let currentDay = this.schedule.find(item => item.date.slice(0, 2) == this.selectedDay);
      if (currentDay === undefined) {
        this.newSchedule.map(item => this.schedule.push(item));
      } else {
        this.schedule = this.schedule.filter(item => item.date.slice(0, 2) != this.selectedDay);
        this.newSchedule.map(item => this.schedule.push(item));
      }
    } else if (this.isYearSchedule) {
      this.schedule = this.schedule.filter(item => item.date !== 'all');
      this.newSchedule.map(item => this.schedule.push(item));
    }
    this.setData(this.schedule);
    this.getSchedule();
  }
  getColor(mode) {
    let colors = ['#ff304f', '#23CE6B', '#582df1'];
    return mode == 'DISCHARGE' ? colors[0] : mode == 'CHARGE' ? colors[1] : colors[2];
  }
  checkFields(array) {
    if (array.length === 0) {
      return true;
    }
    const firstObject = array[0];
    for (let i = 1; i < array.length; i++) {
      for (let key in firstObject) {
        if (firstObject[key] !== array[i][key]) {
          return false;
        }
      }
    }
    return true;
  }
  static #_ = this.ɵfac = function ScheduleComponent_Factory(t) {
    return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ScheduleComponent,
    selectors: [["app-schedule"]],
    decls: 40,
    vars: 11,
    consts: [[1, "min-h-full"], [1, "bg-[#23CE6B]"], [1, "mx-auto", "max-w-7xl", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "h-16", "items-center", "justify-between"], [1, "flex", "items-center"], [1, "ml-10", "flex", "items-baseline", "space-x-4"], ["href", "/", "aria-current", "page", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/ocpp", "aria-current", "page", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/users", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/schedule", 1, "bg-green-600", "text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], [1, "flex", "justify-between", "items-center"], ["type", "button", 1, "mx-3", "w-1/5", "focus:outline-none", "text-white", "bg-[#23CE6B]", "hover:bg-green-500", "focus:ring-4", "focus:ring-green-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "me-2", 3, "click"], [4, "ngIf"], [1, "m-3", "flex", "justify-center", "items-center"], ["type", "button", 1, "mx-3", "focus:outline-none", "text-white", "bg-[#23CE6B]", "hover:bg-green-500", "focus:ring-4", "focus:ring-green-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "me-2", 3, "click"], [1, "flex"], ["class", "bg-gray-100 w-1/3", 4, "ngIf"], [1, "bg-gray-50", "border"], ["class", "p-2 bg-gray-100 text-center", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "absolute top-0 h-screen w-full bg-black bg-opacity-50 flex items-center justify-center", 4, "ngIf"], [1, "bg-gray-100", "w-1/3"], [1, "text-2xl", "text-center"], [1, "p-2", "m-3", "text-white", "text-xl", "font-bold", "text-center", "bg-[#23CE6B]", "hover:bg-green-500", "rounded", "cursor-pointer", 3, "click"], [1, "p-2", "m-3", "text-white", "text-xl", "font-bold", "text-center", "rounded"], [1, "p-2", "bg-gray-100", "text-center"], ["class", "p-1 has-details cursor-pointer", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "p-1", "has-details", "cursor-pointer", 3, "click"], [1, "details"], [1, "text-xl", "text-center"], [1, "absolute", "top-0", "h-screen", "w-full", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center"], [1, "bg-white", "w-1/2", "h-1/2", "rounded"], [1, "flex", "justify-between", "items-center", "pr-5"], ["class", "text-xl text-center p-5 uppercase font-bold", 4, "ngIf"], [1, "cl-btn-7", 3, "click"], [1, "text-xl", "px-5"], [1, "flex", "justify-around"], [1, "text-xl", "px-5", "mb-2"], [1, "px-5", "flex", "items-center"], [1, "p-2", "border", "rounded", "mr-3", "cursor-pointer", 3, "ngModel", "ngModelChange"], [1, "form_radio_group"], [1, "form_radio_group-item"], ["id", "radio-1", "type", "radio", "name", "radio", "value", "CHARGE", 3, "click"], ["for", "radio-1"], ["id", "radio-2", "type", "radio", "name", "radio", "value", "DISCHARGE", 3, "click"], ["for", "radio-2"], ["id", "radio-3", "type", "radio", "name", "radio", "value", "WAIT", "checked", "", 3, "click"], ["for", "radio-3"], [1, "mx-3", "focus:outline-none", "text-white", "bg-[#23CE6B]", "hover:bg-green-500", "focus:ring-4", "focus:ring-green-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "me-2", 3, "click"], [1, "text-xl", "text-center", "p-5", "uppercase", "font-bold"], [1, "p-2", "m-3", "w-full", "text-center", "text-white", "font-bold", "rounded"], [1, "cursor-pointer", 3, "value"], [1, "p-2", "m-3", "text-center", "text-white", "font-bold", "rounded"]],
    template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "BMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "OCPP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "div", 10)(17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_Template_button_click_17_listener() {
          return ctx.yearScheduleWorker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ScheduleComponent_span_18_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ScheduleComponent_span_19_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13)(21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_Template_button_click_21_listener() {
          return ctx.prevMonth();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u041D\u0430\u0437\u0430\u0434 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_Template_button_click_25_listener() {
          return ctx.nextMonth();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u0412\u043F\u0435\u0440\u0435\u0434 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleComponent_Template_button_click_27_listener() {
          return ctx.dayScheduleWorker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ScheduleComponent_span_28_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ScheduleComponent_span_29_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ScheduleComponent_div_31_Template, 7, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "table")(33, "thead")(34, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ScheduleComponent_th_35_Template, 2, 1, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ScheduleComponent_tr_37_Template, 3, 4, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ScheduleComponent_div_38_Template, 8, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ScheduleComponent_div_39_Template, 34, 6, "div", 20);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isYearSchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isYearSchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.selectedMonth, " ", ctx.year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDaySchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDaySchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isYearSchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.resultSchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDaySchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPopup);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
    styles: ["table[_ngcontent-%COMP%] {\n  text-align: left;\n  position: relative;\n\n  height: 80vh;\n  width: 100%;\n  border-collapse: separate;\n  overflow: hidden;\n  border-spacing: 5px 0;\n}\n\ntd[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 30px;\n  height: 16.2px;\n}\n\n.has-details[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  left: 0;\n  transform: translateY(50%) scale(0);\n  transition: transform 0.1s ease-in;\n  transform-origin: left;\n  display: block;\n  background: white;\n  z-index: 999;\n\n  padding: 1rem;\n  border: 1px solid black;\n  border-radius: 5px;\n}\n\n.has-details[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\n  transform: translateY(5%) scale(1);\n  z-index: 999;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTs7RUFFWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGhlaWdodDogODB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDVweCAwO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDE2LjJweDtcclxufVxyXG5cclxuLmhhcy1kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHNjYWxlKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW47XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcblxyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaGFzLWRldGFpbHM6aG92ZXIgZGl2IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNSUpIHNjYWxlKDEpO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7473:
/*!*****************************************************!*\
  !*** ./src/app/Components/users/users.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class UsersComponent {
  constructor(titleService) {
    this.titleService = titleService;
  }
  ngOnInit() {
    this.setTitle('S11123 - Пользователи');
  }
  setTitle(newTitle) {
    this.titleService.setTitle(newTitle);
  }
  static #_ = this.ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["app-users"]],
    decls: 15,
    vars: 0,
    consts: [[1, "min-h-full"], [1, "bg-[#23CE6B]"], [1, "mx-auto", "max-w-7xl", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "h-16", "items-center", "justify-between"], [1, "flex", "items-center"], [1, "ml-10", "flex", "items-baseline", "space-x-4"], ["href", "/", "aria-current", "page", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/ocpp", "aria-current", "page", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/users", 1, "bg-green-600", "text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"], ["href", "/#/schedule", 1, "text-white", "hover:bg-green-600", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-bold"]],
    template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "OCPP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3075:
/*!*****************************************!*\
  !*** ./src/app/Services/DataGetters.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataGetters: () => (/* binding */ DataGetters)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataService */ 2165);


class DataGetters {
  constructor(dataService) {
    this.dataService = dataService;
    this.batteriesData = {};
    this.cellsData = [];
    this.pantographData = {};
    this.powerInputData = {};
    this.bmsLastData = {};
    this.ocppData = {};
    this.lines = [];
    this.isCellsDataGot = false;
    this.isCellsDataError = false;
    this.isBMSDataGot = false;
    this.isBMSDataError = false;
    this.isBastardisesGot = false;
    this.isBatteriesDataError = false;
    this.isPantographGot = false;
    this.isPantographDataError = false;
    this.isPowerInputDataGot = false;
    this.isPowerInputDataError = false;
    this.isColsDataGot = false;
    this.isColsDataError = false;
    this.isLinesDataGot = false;
    this.isLinesDataError = false;
  }
  getPantografData() {
    this.dataService.getData('pantograf').then(responseData => {
      this.pantographData = responseData.reduce((acc, {
        _field,
        _value
      }) => {
        if (!acc[_field]) {
          acc[_field] = {};
        }
        acc[_field] = _value.toFixed(0);
        return acc;
      }, {});
      this.isPantographGot = !this.isPantographGot;
    }).catch(() => {
      this.isPantographGot = false;
      this.isPantographDataError = true;
    });
    return {
      "pantografData": this.pantographData,
      "isPantografDataGetted": this.isPantographGot,
      "isPantografDataError": this.isPantographDataError
    };
  }
  getCellsData() {
    this.dataService.getData('cells').then(data => {
      this.cellsData = data.reduce((acc, {
        _field,
        _value,
        _measurement
      }) => {
        if (!acc[_measurement]) {
          acc[_measurement] = {};
        }
        acc[_measurement][_field] = _value;
        return acc;
      }, {});
      this.isCellsDataGot = !this.isCellsDataGot;
    }).catch(error => {
      this.isCellsDataError = true;
      this.isCellsDataGot = false;
    });
    for (let item in this.cellsData) {
      this.cellsData[item]['kW'] = (this.cellsData[item].set_current * this.cellsData[item].set_voltage / 1000).toFixed(0);
    }
    let newObj = {};
    for (let cellKey in this.cellsData) {
      let cellNumber = cellKey.split('_')[1].toLowerCase();
      newObj[cellNumber + '_inv_kw'] = this.cellsData[cellKey].kW + 'kW';
      newObj[cellNumber + '_inv_current'] = this.cellsData[cellKey].set_current.toFixed(2) + 'A';
    }
    for (let key in newObj) {
      let element = document.getElementById(key);
      if (element) {
        element.textContent = newObj[key];
      }
    }
    return {
      "isCellsDataGetted": this.isCellsDataGot,
      "isCellsDataError": this.isCellsDataError
    };
  }
  getBattariesData() {
    this.dataService.getData('lastBattaries').then(data => {
      this.batteriesData = data.reduce((acc, {
        _field,
        _value,
        _measurement
      }) => {
        if (!acc[_measurement]) {
          acc[_measurement] = {};
        }
        acc[_measurement][_field] = _value.toFixed(1);
        return acc;
      }, {});
      this.isBastardisesGot = !this.isBastardisesGot;
    }).catch(error => {
      this.isBastardisesGot = false;
      this.isBatteriesDataError = true;
    });
    return {
      "battariesData": this.batteriesData,
      "isBattariesDataGetted": this.isBastardisesGot,
      "isBattariesDataError": this.isBatteriesDataError
    };
  }
  getBMSLast() {
    this.dataService.getData('lastBms').then(responseData => {
      this.bmsLastData = responseData.reduce((acc, {
        _field,
        _value
      }) => {
        if (!acc[_field]) {
          acc[_field] = {};
        }
        acc[_field] = _value.toFixed(0);
        return acc;
      }, {});
      this.isBMSDataGot = !this.isBMSDataGot;
    }).catch(error => {
      this.isBMSDataGot = false;
      this.isBMSDataError = true;
    });
    return {
      "bmsLastData": this.bmsLastData,
      "isBMSDataGetted": this.isBMSDataGot,
      "isBMSDataError": this.isBMSDataError
    };
  }
  getPowerInputData() {
    this.dataService.getData('powerInput').then(responseData => {
      this.powerInputData = responseData.reduce((acc, {
        _field,
        _value
      }) => {
        if (!acc[_field]) {
          acc[_field] = {};
        }
        acc[_field] = _value.toFixed(0);
        return acc;
      }, {});
      this.isPowerInputDataGot = !this.isPowerInputDataGot;
    }).catch(error => {
      this.isPowerInputDataGot = false;
      this.isPowerInputDataError = true;
    });
    return {
      "powerInputData": this.powerInputData,
      "isPowerInputDataGot": this.isPowerInputDataGot,
      "isPowerInputDataError": this.isPowerInputDataError
    };
  }
  getOcppColData() {
    this.dataService.getData('ocpp').then(responseData => {
      this.ocppData = responseData.reduce((acc, {
        _field,
        _value,
        _measurement
      }) => {
        acc[`${_measurement}_${_field}`] = _value.toFixed(0);
        return acc;
      }, {});
      this.isColsDataGot = !this.isColsDataGot;
    }).catch(() => {
      this.isColsDataError = true;
    });
    let newObj = {};
    for (let key in this.ocppData) {
      let splitKey = key.split('_');
      let newKey = splitKey[0] + '_' + splitKey[2];
      if (newObj[newKey] === undefined) {
        newObj[newKey] = this.ocppData[key];
      } else {
        newObj[newKey] = newObj[newKey] + '/' + this.ocppData[key];
      }
    }
    for (let key in newObj) {
      if (key.includes('current')) {
        newObj[key] += 'A';
      } else if (key.includes('voltage')) {
        newObj[key] += 'V';
      } else if (key.includes('power')) {
        newObj[key] += 'kW';
      }
    }
    for (let key in newObj) {
      let element = document.getElementById(key);
      if (element) {
        element.textContent = newObj[key];
      }
    }
    return {
      ocppData: newObj,
      isColsDataGot: this.isColsDataGot,
      isColsDataError: this.isColsDataError
    };
  }
  updateVisibility(lines) {
    for (let key in lines) {
      let element = document.getElementById(key);
      if (element) {
        element.style.opacity = lines[key] ? "1" : "0";
      }
    }
  }
  getLines() {
    this.dataService.getData('cellsSession').then(responseData => {
      this.lines = responseData.reduce((acc, {
        _value,
        _measurement
      }) => {
        let num2 = parseInt(_measurement.slice(6));
        for (let i = 700405; i <= 700412; i++) {
          let newKey = i + "_to_inv" + num2;
          acc[newKey] = _value !== 255 && 700412 - i === _value;
        }
        return acc;
      }, {});
      this.isLinesDataGot = !this.isLinesDataGot;
      this.updateVisibility(this.lines);
    }).catch(() => {
      this.isLinesDataError = true;
    });
    return {
      lines: this.lines,
      isLinesDataGot: this.isLinesDataGot,
      isLinesDataError: this.isLinesDataError
    };
  }
  static #_ = this.ɵfac = function DataGetters_Factory(t) {
    return new (t || DataGetters)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_DataService__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DataGetters,
    factory: DataGetters.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2165:
/*!*****************************************!*\
  !*** ./src/app/Services/DataService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _influxdata_influxdb_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @influxdata/influxdb-client */ 6099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class DataService {
  constructor() {
    this.org = `belorusneft`;
    this.token = `HlvnKwhT4oKDf7NXZyZFDlpG5m29Bmp2zPY2ZXbaptJUPZjpOZ7vw5wF2mkI3w4h9iPKSyYCp71IsNyR5Okung==`;
    this.url = 'http://134.17.16.108:8086';
    this.client = new _influxdata_influxdb_client__WEBPACK_IMPORTED_MODULE_0__.InfluxDB({
      url: this.url,
      token: this.token
    });
  }
  getData(queryId, hours = 1) {
    let query = this.getQuery(queryId, hours);
    return new Promise((resolve, reject) => {
      let queryClient = this.client.getQueryApi(this.org);
      let fluxQuery = query;
      let tableObject = [];
      queryClient.queryRows(fluxQuery, {
        next: (row, tableMeta) => {
          tableObject.push(tableMeta.toObject(row));
        },
        error: error => {
          reject(error);
        },
        complete: () => {
          resolve(tableObject);
        }
      });
    });
  }
  getQuery(queryId, hours = 1) {
    switch (queryId) {
      case 'powerInput':
        return `from(bucket: "BKM")
               |> range(start: 0, stop: now())
               |> filter(fn: (r) => r["_measurement"] == "CELL_U10")
               |> filter(fn: (r) => r["_field"] == "Vab" or r["_field"] == "Vbc" or r["_field"] == "Vca")
               |> last()`;
      case 'pantograf':
        return `from(bucket: "BKM")
                |> range(start: 0, stop: now())
                |> filter(fn: (r) => r["_measurement"] == "PANTOGRAF")
                |> filter(fn: (r) => r["_field"] == "out_power" or r["_field"] == "out_current")
                |> last()`;
      case 'cells':
        return `from(bucket: "BKM")
                |> range(start: 0, stop: now())
                |> filter(fn: (r) => r["_measurement"] == "CELL_U10" or r["_measurement"] == "CELL_U51" or r["_measurement"] == "CELL_U50" or r["_measurement"] == "CELL_U49" or r["_measurement"] == "CELL_U48" or r["_measurement"] == "CELL_U47" or r["_measurement"] == "CELL_U46" or r["_measurement"] == "CELL_U45" or r["_measurement"] == "CELL_U44" or r["_measurement"] == "CELL_U43" or r["_measurement"] == "CELL_U42" or r["_measurement"] == "CELL_U41" or r["_measurement"] == "CELL_U40" or r["_measurement"] == "CELL_U39" or r["_measurement"] == "CELL_U38" or r["_measurement"] == "CELL_U37" or r["_measurement"] == "CELL_U36" or r["_measurement"] == "CELL_U35" or r["_measurement"] == "CELL_U34" or r["_measurement"] == "CELL_U33" or r["_measurement"] == "CELL_U32" or r["_measurement"] == "CELL_U31" or r["_measurement"] == "CELL_U30" or r["_measurement"] == "CELL_U29" or r["_measurement"] == "CELL_U28" or r["_measurement"] == "CELL_U27" or r["_measurement"] == "CELL_U26" or r["_measurement"] == "CELL_U25" or r["_measurement"] == "CELL_U24" or r["_measurement"] == "CELL_U23" or r["_measurement"] == "CELL_U22" or r["_measurement"] == "CELL_U21" or r["_measurement"] == "CELL_U20" or r["_measurement"] == "CELL_U19" or r["_measurement"] == "CELL_U18" or r["_measurement"] == "CELL_U17" or r["_measurement"] == "CELL_U16" or r["_measurement"] == "CELL_U14" or r["_measurement"] == "CELL_U15" or r["_measurement"] == "CELL_U13" or r["_measurement"] == "CELL_U11" or r["_measurement"] == "CELL_U12")
                |> filter(fn: (r) => r["_field"] == "set_current" or r["_field"] == "set_voltage")
                |> last()`;
      case 'bms':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "s11123_battery_main")
                |> filter(fn: (r) => r["_field"] == "SOC" or r["_field"] == "SOH" or r["_field"] == "ChargeCurrentLimit" or r["_field"] == "ChargePermission" or r["_field"] == "DischargeCurrentLimit" or r["_field"] == "DischargePermission" or r["_field"] == "Current" or r["_field"] == "LogicTMax" or r["_field"] == "MaxCellTemperature" or r["_field"] == "MinCellTemperature" or r["_field"] == "Total_Voltage")
                |> yield(name: "mean")`;
      case 'lastBms':
        return `from(bucket: "BKM")
                |> range(start: 0, stop: now())
                |> filter(fn: (r) => r["_measurement"] == "s11123_battery_main")
                |> filter(fn: (r) => r["_field"] == "Current" or r["_field"] == "Total_Voltage" or r["_field"] == "SOC")
                |> last()`;
      case 'battery1':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "s11123_battery_pack1")
                |> filter(fn: (r) => r["_field"] == "BatteryVoltage" or r["_field"] == "BatteryCurrent" or r["_field"] == "StateOfCharge" or r["_field"] == "MaximumCellTemper" or r["_field"] == "MinimumCellTemper" or r["_field"] == "DischargingContFeedb" or r["_field"] == "ChargingContFeedb" or r["_field"] == "InhibitCharging" or r["_field"] == "InhibitDischarging")
                |> yield(name: "mean")`;
      case 'battery2':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "s11123_battery_pack2")
                |> filter(fn: (r) => r["_field"] == "BatteryVoltage" or r["_field"] == "BatteryCurrent" or r["_field"] == "StateOfCharge" or r["_field"] == "MaximumCellTemper" or r["_field"] == "MinimumCellTemper" or r["_field"] == "DischargingContFeedb" or r["_field"] == "ChargingContFeedb" or r["_field"] == "InhibitCharging" or r["_field"] == "InhibitDischarging")
                |> yield(name: "mean")`;
      case 'battery3':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "s11123_battery_pack3")
                |> filter(fn: (r) => r["_field"] == "BatteryVoltage" or r["_field"] == "BatteryCurrent" or r["_field"] == "StateOfCharge" or r["_field"] == "MaximumCellTemper" or r["_field"] == "MinimumCellTemper" or r["_field"] == "DischargingContFeedb" or r["_field"] == "ChargingContFeedb" or r["_field"] == "InhibitCharging" or r["_field"] == "InhibitDischarging")
                |> yield(name: "mean")`;
      case 'battery4':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "s11123_battery_pack4")
                |> filter(fn: (r) => r["_field"] == "BatteryVoltage" or r["_field"] == "BatteryCurrent" or r["_field"] == "StateOfCharge" or r["_field"] == "MaximumCellTemper" or r["_field"] == "MinimumCellTemper" or r["_field"] == "DischargingContFeedb" or r["_field"] == "ChargingContFeedb" or r["_field"] == "InhibitCharging" or r["_field"] == "InhibitDischarging")
                |> yield(name: "mean")`;
      case 'lastBattaries':
        return `from(bucket: "BKM")
                |> range(start: 0, stop: now())
                |> filter(fn: (r) => r["_measurement"] == "s11123_battery_pack1" or r["_measurement"] == "s11123_battery_pack2" or r["_measurement"] == "s11123_battery_pack3" or r["_measurement"] == "s11123_battery_pack4")
                |> filter(fn: (r) => r["_field"] == "BatteryVoltage" or r["_field"] == "BatteryCurrent" or r["_field"] == "StateOfCharge")
                |> last()`;
      case 'ocpp':
        return `from(bucket: "BKM")
                |> range(start: 0, stop: now())
                |> filter(fn: (r) => r["_measurement"] == "700405" or r["_measurement"] == "700407" or r["_measurement"] == "700406" or r["_measurement"] == "700409" or r["_measurement"] == "700408" or r["_measurement"] == "700410" or r["_measurement"] == "700411" or r["_measurement"] == "700412")
                |> filter(fn: (r) => r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "out_power" or r["_field"] == "out_current" or r["_field"] == "out_voltage")
                |> last()`;
      case 'cellsSession':
        return `from(bucket: "BKM")
                |> range(start: 0, stop: now())
                |> filter(fn: (r) => r["_measurement"] == "CELL_U21" or r["_measurement"] == "CELL_U22" or r["_measurement"] == "CELL_U23" or r["_measurement"] == "CELL_U24" or r["_measurement"] == "CELL_U25" or r["_measurement"] == "CELL_U26" or r["_measurement"] == "CELL_U27" or r["_measurement"] == "CELL_U28" or r["_measurement"] == "CELL_U29" or r["_measurement"] == "CELL_U30" or r["_measurement"] == "CELL_U31" or r["_measurement"] == "CELL_U32" or r["_measurement"] == "CELL_U33" or r["_measurement"] == "CELL_U34" or r["_measurement"] == "CELL_U35" or r["_measurement"] == "CELL_U36" or r["_measurement"] == "CELL_U37" or r["_measurement"] == "CELL_U38" or r["_measurement"] == "CELL_U39" or r["_measurement"] == "CELL_U40" or r["_measurement"] == "CELL_U41")
                |> filter(fn: (r) => r["_field"] == "in_session")
                |> last()`;
      case 'ocpp700405':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "700405")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      case 'ocpp700406':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "700406")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      case 'ocpp700407':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "700407")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      case 'ocpp700408':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "700408")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      case 'ocpp700409':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "700409")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      case 'ocpp700410':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "700410")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      case 'ocpp700411':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "700411")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      case 'ocpp700412':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "700412")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_current" or r["_field"] == "set_voltage" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      case 'bus':
        return `from(bucket: "BKM")
                |> range(start: -${hours}h)
                |> filter(fn: (r) => r["_measurement"] == "PANTOGRAF")
                |> filter(fn: (r) => r["_field"] == "out_current" or r["_field"] == "out_power" or r["_field"] == "out_voltage" or r["_field"] == "set_voltage" or r["_field"] == "set_current" or r["_field"] == "set_power" or r["_field"] == "cells_num")
                |> yield(name: "mean")`;
      default:
        return '';
    }
  }
  static #_ = this.ɵfac = function DataService_Factory(t) {
    return new (t || DataService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DataService,
    factory: DataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4195:
/*!************************************************!*\
  !*** ./src/app/Services/ResizableDirective.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResizableDirective: () => (/* binding */ ResizableDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ResizableDirective {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.resizing = false;
  }
  onMouseDown(event) {
    if (this.isInResizeArea(event)) {
      this.resizing = true;
    }
  }
  onMouseMove(event) {
    if (this.resizing) {
      this.renderer.setStyle(this.el.nativeElement, 'width', `${event.clientX}px`);
    }
  }
  onMouseUp(event) {
    if (this.resizing) {
      this.resizing = false;
    }
  }
  isInResizeArea(event) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return event.clientX > rect.right - 10 && event.clientX < rect.right + 10;
  }
  static #_ = this.ɵfac = function ResizableDirective_Factory(t) {
    return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ResizableDirective,
    selectors: [["", "appResizable", ""]],
    hostBindings: function ResizableDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizableDirective_mousedown_HostBindingHandler($event) {
          return ctx.onMouseDown($event);
        })("mousemove", function ResizableDirective_mousemove_HostBindingHandler($event) {
          return ctx.onMouseMove($event);
        })("mouseup", function ResizableDirective_mouseup_HostBindingHandler($event) {
          return ctx.onMouseUp($event);
        });
      }
    }
  });
}

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _Components_bms_scheme_bms_scheme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/bms-scheme/bms-scheme.component */ 4284);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _Components_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/users/users.component */ 7473);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! highcharts-angular */ 8578);
/* harmony import */ var _Components_bms_scheme_chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/bms-scheme/chart/chart.component */ 9235);
/* harmony import */ var _Components_ocpp_ocpp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/ocpp/ocpp.component */ 3027);
/* harmony import */ var _Components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/auth/auth.component */ 5720);
/* harmony import */ var _Components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/schedule/schedule.component */ 7726);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-resizable-element */ 9175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _Services_ResizableDirective__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/ResizableDirective */ 4195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);

















const appRoutes = [{
  path: '',
  component: _Components_bms_scheme_bms_scheme_component__WEBPACK_IMPORTED_MODULE_1__.BmsSchemeComponent,
  data: {
    title: 'S11123 - BMS'
  } /*canActivate: [AuthGuard]*/
}, {
  path: 'users',
  component: _Components_users_users_component__WEBPACK_IMPORTED_MODULE_2__.UsersComponent,
  data: {
    title: 'S11123 - Пользователи'
  } /*canActivate: [AuthGuard]*/
}, {
  path: 'ocpp',
  component: _Components_ocpp_ocpp_component__WEBPACK_IMPORTED_MODULE_4__.OcppComponent,
  data: {
    title: 'S11123 - OCPP'
  } /*canActivate: [AuthGuard]*/
}, {
  path: 'schedule',
  component: _Components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__.ScheduleComponent,
  data: {
    title: 'S11123 - Расписание'
  } /*canActivate: [AuthGuard]*/
}, {
  path: 'auth',
  component: _Components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__.AuthComponent
}];
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.HashLocationStrategy
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_13__.HighchartsChartModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_14__.ResizableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _Components_bms_scheme_bms_scheme_component__WEBPACK_IMPORTED_MODULE_1__.BmsSchemeComponent, _Components_users_users_component__WEBPACK_IMPORTED_MODULE_2__.UsersComponent, _Components_bms_scheme_chart_chart_component__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _Components_ocpp_ocpp_component__WEBPACK_IMPORTED_MODULE_4__.OcppComponent, _Components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__.AuthComponent, _Components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__.ScheduleComponent, _Services_ResizableDirective__WEBPACK_IMPORTED_MODULE_7__.ResizableDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_13__.HighchartsChartModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_14__.ResizableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2938:
/*!****************************!*\
  !*** ./src/assets/data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Schedule: () => (/* binding */ Schedule)
/* harmony export */ });
var Schedule = [{
  id: 1,
  date: '01.01.2024',
  time: '00:00',
  mode: 'CHARGE'
}, {
  id: 2,
  date: '01.01.2024',
  time: '10:00',
  mode: 'WAIT'
}, {
  id: 3,
  date: '01.01.2024',
  time: '20:00',
  mode: 'DISCHARGE'
}, {
  id: 4,
  date: 'all',
  time: '00:00',
  mode: 'WAIT'
}, {
  id: 5,
  date: 'all',
  time: '12:00',
  mode: 'CHARGE'
}, {
  id: 6,
  date: 'all',
  time: '18:00',
  mode: 'DISCHARGE'
}];

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 5528,
	"./af.js": 5528,
	"./ar": 1036,
	"./ar-dz": 7579,
	"./ar-dz.js": 7579,
	"./ar-kw": 9588,
	"./ar-kw.js": 9588,
	"./ar-ly": 1650,
	"./ar-ly.js": 1650,
	"./ar-ma": 3258,
	"./ar-ma.js": 3258,
	"./ar-sa": 4085,
	"./ar-sa.js": 4085,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 1036,
	"./az": 9757,
	"./az.js": 9757,
	"./be": 9620,
	"./be.js": 9620,
	"./bg": 1139,
	"./bg.js": 1139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 9641,
	"./bn-bd": 9126,
	"./bn-bd.js": 9126,
	"./bn.js": 9641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 934,
	"./br.js": 934,
	"./bs": 6274,
	"./bs.js": 6274,
	"./ca": 5831,
	"./ca.js": 5831,
	"./cs": 2354,
	"./cs.js": 2354,
	"./cv": 9692,
	"./cv.js": 9692,
	"./cy": 8774,
	"./cy.js": 8774,
	"./da": 8955,
	"./da.js": 8955,
	"./de": 1557,
	"./de-at": 4954,
	"./de-at.js": 4954,
	"./de-ch": 1881,
	"./de-ch.js": 1881,
	"./de.js": 1557,
	"./dv": 6475,
	"./dv.js": 6475,
	"./el": 8877,
	"./el.js": 8877,
	"./en-au": 454,
	"./en-au.js": 454,
	"./en-ca": 7356,
	"./en-ca.js": 7356,
	"./en-gb": 456,
	"./en-gb.js": 456,
	"./en-ie": 8789,
	"./en-ie.js": 8789,
	"./en-il": 5471,
	"./en-il.js": 5471,
	"./en-in": 9664,
	"./en-in.js": 9664,
	"./en-nz": 7672,
	"./en-nz.js": 7672,
	"./en-sg": 805,
	"./en-sg.js": 805,
	"./eo": 7390,
	"./eo.js": 7390,
	"./es": 1564,
	"./es-do": 1473,
	"./es-do.js": 1473,
	"./es-mx": 2089,
	"./es-mx.js": 2089,
	"./es-us": 4156,
	"./es-us.js": 4156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 2687,
	"./fi.js": 2687,
	"./fil": 32,
	"./fil.js": 32,
	"./fo": 6845,
	"./fo.js": 6845,
	"./fr": 8875,
	"./fr-ca": 6425,
	"./fr-ca.js": 6425,
	"./fr-ch": 1746,
	"./fr-ch.js": 1746,
	"./fr.js": 8875,
	"./fy": 7037,
	"./fy.js": 7037,
	"./ga": 1217,
	"./ga.js": 1217,
	"./gd": 7010,
	"./gd.js": 7010,
	"./gl": 1931,
	"./gl.js": 1931,
	"./gom-deva": 4488,
	"./gom-deva.js": 4488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 4984,
	"./gu.js": 4984,
	"./he": 9090,
	"./he.js": 9090,
	"./hi": 2085,
	"./hi.js": 2085,
	"./hr": 8787,
	"./hr.js": 8787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 9819,
	"./hy-am.js": 9819,
	"./id": 4074,
	"./id.js": 4074,
	"./is": 715,
	"./is.js": 715,
	"./it": 3838,
	"./it-ch": 7040,
	"./it-ch.js": 7040,
	"./it.js": 3838,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 4346,
	"./jv.js": 4346,
	"./ka": 5538,
	"./ka.js": 5538,
	"./kk": 9772,
	"./kk.js": 9772,
	"./km": 7905,
	"./km.js": 7905,
	"./kn": 9125,
	"./kn.js": 9125,
	"./ko": 9140,
	"./ko.js": 9140,
	"./ku": 6780,
	"./ku.js": 6780,
	"./ky": 3768,
	"./ky.js": 3768,
	"./lb": 4016,
	"./lb.js": 4016,
	"./lo": 3169,
	"./lo.js": 3169,
	"./lt": 2353,
	"./lt.js": 2353,
	"./lv": 3243,
	"./lv.js": 3243,
	"./me": 2338,
	"./me.js": 2338,
	"./mi": 5555,
	"./mi.js": 5555,
	"./mk": 5794,
	"./mk.js": 5794,
	"./ml": 3151,
	"./ml.js": 3151,
	"./mn": 6458,
	"./mn.js": 6458,
	"./mr": 9165,
	"./mr.js": 9165,
	"./ms": 8680,
	"./ms-my": 7477,
	"./ms-my.js": 7477,
	"./ms.js": 8680,
	"./mt": 9684,
	"./mt.js": 9684,
	"./my": 285,
	"./my.js": 285,
	"./nb": 5922,
	"./nb.js": 5922,
	"./ne": 9040,
	"./ne.js": 9040,
	"./nl": 5066,
	"./nl-be": 4460,
	"./nl-be.js": 4460,
	"./nl.js": 5066,
	"./nn": 3693,
	"./nn.js": 3693,
	"./oc-lnc": 8676,
	"./oc-lnc.js": 8676,
	"./pa-in": 2341,
	"./pa-in.js": 2341,
	"./pl": 7416,
	"./pl.js": 7416,
	"./pt": 4344,
	"./pt-br": 113,
	"./pt-br.js": 113,
	"./pt.js": 4344,
	"./ro": 2643,
	"./ro.js": 2643,
	"./ru": 1305,
	"./ru.js": 1305,
	"./sd": 6095,
	"./sd.js": 6095,
	"./se": 4486,
	"./se.js": 4486,
	"./si": 8742,
	"./si.js": 8742,
	"./sk": 6722,
	"./sk.js": 6722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 2416,
	"./sq.js": 2416,
	"./sr": 9450,
	"./sr-cyrl": 501,
	"./sr-cyrl.js": 501,
	"./sr.js": 9450,
	"./ss": 2222,
	"./ss.js": 2222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 9638,
	"./sw.js": 9638,
	"./ta": 6494,
	"./ta.js": 6494,
	"./te": 4435,
	"./te.js": 4435,
	"./tet": 5003,
	"./tet.js": 5003,
	"./tg": 3706,
	"./tg.js": 3706,
	"./th": 6025,
	"./th.js": 6025,
	"./tk": 9780,
	"./tk.js": 9780,
	"./tl-ph": 2068,
	"./tl-ph.js": 2068,
	"./tlh": 9167,
	"./tlh.js": 9167,
	"./tr": 2494,
	"./tr.js": 2494,
	"./tzl": 8707,
	"./tzl.js": 8707,
	"./tzm": 1296,
	"./tzm-latn": 4532,
	"./tzm-latn.js": 4532,
	"./tzm.js": 1296,
	"./ug-cn": 2086,
	"./ug-cn.js": 2086,
	"./uk": 5069,
	"./uk.js": 5069,
	"./ur": 9304,
	"./ur.js": 9304,
	"./uz": 5115,
	"./uz-latn": 7609,
	"./uz-latn.js": 7609,
	"./uz.js": 5115,
	"./vi": 4802,
	"./vi.js": 4802,
	"./x-pseudo": 5605,
	"./x-pseudo.js": 5605,
	"./yo": 8456,
	"./yo.js": 8456,
	"./zh-cn": 3272,
	"./zh-cn.js": 3272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 8101,
	"./zh-mo.js": 8101,
	"./zh-tw": 262,
	"./zh-tw.js": 262
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map