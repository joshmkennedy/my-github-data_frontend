webpackHotUpdate("static/development/pages/index.js",{

/***/ "./graphComponents/Bar.js":
/*!********************************!*\
  !*** ./graphComponents/Bar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/joshkennedy/sites/joshs/github-data-01/frontend/graphComponents/Bar.js";


var Bar = function Bar(_ref) {
  var text = _ref.text,
      rect = _ref.rect,
      viewBox = _ref.viewBox;
  var w = viewBox.w,
      h = viewBox.h;
  var barHeight = rect.barHeight,
      barWidth = rect.barWidth,
      barY = rect.barY;
  /* const { tX, tY, dY, repoTitle } = text; */

  var neverZero = function neverZero(num, multiplier) {
    return num !== 0 ? num : num + multiplier / 100;
  };

  var width = neverZero(barWidth, w);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: width,
    height: Math.floor(barHeight - barHeight * 0.1),
    y: barY,
    fill: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ })

})
//# sourceMappingURL=index.js.fea74aa13888425c7766.hot-update.js.map