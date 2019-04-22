webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LineGraph.js":
/*!*********************************!*\
  !*** ./components/LineGraph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _graphComponents_XAxisLines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphComponents/XAxisLines */ "./graphComponents/XAxisLines.js");
/* harmony import */ var _graphComponents_YAxisLines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphComponents/YAxisLines */ "./graphComponents/YAxisLines.js");
/* harmony import */ var _graphComponents_PolyLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphComponents/PolyLine */ "./graphComponents/PolyLine.js");
var _jsxFileName = "/Users/joshkennedy/sites/joshs/github-data-01/frontend/components/LineGraph.js";






var LineGraph = function LineGraph(_ref) {
  var data = _ref.data,
      className = _ref.className,
      xLabels = _ref.xLabels;
  var viewBox = {
    w: 400,
    h: 100
  };
  var w = viewBox.w,
      h = viewBox.h;

  var middleArray = function middleArray(arr) {
    return arr[Math.floor(arr.length / 2)];
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 ".concat(w, " ").concat(h),
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "grid grid-x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "0",
    x2: w,
    y1: h,
    y2: h,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "grid grid-y",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "0",
    x2: "0",
    y1: "0",
    y2: h,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graphComponents_XAxisLines__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dataset: data,
    viewBox: viewBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graphComponents_YAxisLines__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dataset: data,
    viewBox: viewBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graphComponents_PolyLine__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dataset: data,
    viewBox: viewBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(LineGraph).withConfig({
  displayName: "LineGraph",
  componentId: "sc-1oqvosy-0"
})(["width:100%;height:auto;background:white;.grid{stroke:black;stroke-width:3;}.increment-line{stroke:black;stroke-width:0.2;}"]));

/***/ })

})
//# sourceMappingURL=index.js.ab9323215d2e2b0011d4.hot-update.js.map