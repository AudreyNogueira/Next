webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/Components/Jumbotron.js":
/*!*******************************************!*\
  !*** ./src/pages/Components/Jumbotron.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Jumbotron; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\Samsung\\Desktop\\react-avacado\\ssr-exemplo\\src\\pages\\Components\\Jumbotron.js";
function Jumbotron() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jumbotron jumbotron-fluid",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4 text-primary",
          children: "@orgonix_mysticart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead text-info",
          children: "Venha conhecer um pouco mais sobre orgonites"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 1
    }, this)
  }, void 0, false);
}
_c = Jumbotron;

var _c;

$RefreshReg$(_c, "Jumbotron");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Button */ "./src/pages/Components/Button.js");
/* harmony import */ var _Components_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Jumbotron */ "./src/pages/Components/Jumbotron.js");

var _jsxFileName = "C:\\Users\\Samsung\\Desktop\\react-avacado\\ssr-exemplo\\src\\pages\\index.js";

 // import default Button function './Components/Button'
// import gif from '../src/carrega.gif';
// import cupom from '../../src/cupom.gif';
// import { lazy, Suspense } from 'react';
// const Button = lazy(()=> import('./Components/Button'));
// const Image = lazy(()=> import('./code-splitting/Image'));
// const Slogan = lazy(()=> import('./code-splitting/slogan'));
// const Footer = lazy(()=> import('./Components/Footer'));
// const Jumbotron = lazy(()=> import('./Components/Jumbotron'));

function HomePage() {
  function HomePage() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Jumbotron__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("slogan", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Footer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 8
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }, this);
  }
}
_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NvbXBvbmVudHMvSnVtYm90cm9uLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSnVtYm90cm9uIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsU0FBVCxHQUFxQjtBQUNoQyxzQkFDSTtBQUFBLDJCQUVSO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZRLG1CQURKO0FBV0g7S0FadUJBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4QjtDQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQyxRQUFULEdBQW9CO0FBRWxDLFdBQVNBLFFBQVQsR0FBb0I7QUFDbEIsd0JBQ0U7QUFBQSw4QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBVUQ7QUFFRDtLQWZ1QkEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YTcxNjc1ODlhYmNmNGM5NmExNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSnVtYm90cm9uKCkge1xyXG4gICAgcmV0dXJuKCAgXHJcbiAgICAgICAgPD4gIFxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24ganVtYm90cm9uLWZsdWlkXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1wcmltYXJ5XCI+QG9yZ29uaXhfbXlzdGljYXJ0PC9oMT5cclxuICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1pbmZvXCI+VmVuaGEgY29uaGVjZXIgdW0gcG91Y28gbWFpcyBzb2JyZSBvcmdvbml0ZXM8L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQ29tcG9uZW50cy9CdXR0b24nXHJcbmltcG9ydCBKdW1ib3Ryb24gZnJvbSAnLi9Db21wb25lbnRzL0p1bWJvdHJvbidcclxuXHJcblxyXG4vLyBpbXBvcnQgZGVmYXVsdCBCdXR0b24gZnVuY3Rpb24gJy4vQ29tcG9uZW50cy9CdXR0b24nXHJcblxyXG4vLyBpbXBvcnQgZ2lmIGZyb20gJy4uL3NyYy9jYXJyZWdhLmdpZic7XHJcbi8vIGltcG9ydCBjdXBvbSBmcm9tICcuLi8uLi9zcmMvY3Vwb20uZ2lmJztcclxuLy8gaW1wb3J0IHsgbGF6eSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBjb25zdCBCdXR0b24gPSBsYXp5KCgpPT4gaW1wb3J0KCcuL0NvbXBvbmVudHMvQnV0dG9uJykpO1xyXG4vLyBjb25zdCBJbWFnZSA9IGxhenkoKCk9PiBpbXBvcnQoJy4vY29kZS1zcGxpdHRpbmcvSW1hZ2UnKSk7XHJcbi8vIGNvbnN0IFNsb2dhbiA9IGxhenkoKCk9PiBpbXBvcnQoJy4vY29kZS1zcGxpdHRpbmcvc2xvZ2FuJykpO1xyXG4vLyBjb25zdCBGb290ZXIgPSBsYXp5KCgpPT4gaW1wb3J0KCcuL0NvbXBvbmVudHMvRm9vdGVyJykpO1xyXG4vLyBjb25zdCBKdW1ib3Ryb24gPSBsYXp5KCgpPT4gaW1wb3J0KCcuL0NvbXBvbmVudHMvSnVtYm90cm9uJykpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gXHJcbiBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgcmV0dXJuKFxyXG4gICAgIDxkaXY+XHJcbiAgICAgICA8SnVtYm90cm9uIC8+XHJcbiAgICAgICA8QnV0dG9uIC8+XHJcbiAgICAgICA8SW1hZ2UgLz5cclxuICAgICAgIDxzbG9nYW4gLz5cclxuICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgIFxyXG4gICAgIDwvZGl2PlxyXG4gICApXHJcbiB9XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=