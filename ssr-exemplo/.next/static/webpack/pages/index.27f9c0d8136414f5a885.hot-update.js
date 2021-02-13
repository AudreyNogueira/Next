webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Samsung\\Desktop\\react-avacado\\ssr-exemplo\\src\\pages\\index.js";
// import gif from '../src/carrega.gif';
// import cupom from '../../src/cupom.gif';
 // const Button = lazy(()=> import('./Components/Button'));
// const Image = lazy(()=> import('./code-splitting/Image'));
// const Slogan = lazy(()=> import('./code-splitting/slogan'));

const Footer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c = () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Components/Footer */ "./src/pages/Components/Footer.js")));
_c2 = Footer;
const Jumbotron = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c3 = () => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Components/Jumbotron */ "./src/pages/Components/Jumbotron.js")));
_c4 = Jumbotron;
function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "N\xE3o desista de n\xF3s.. estamos trabalhando nissoo...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Jumbotron, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "N\xE3o desista de n\xF3s.. estamos trabalhando nissoo...."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 23
    }, this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, this);
}
_c5 = HomePage;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Footer$lazy");
$RefreshReg$(_c2, "Footer");
$RefreshReg$(_c3, "Jumbotron$lazy");
$RefreshReg$(_c4, "Jumbotron");
$RefreshReg$(_c5, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsImxhenkiLCJKdW1ib3Ryb24iLCJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxNQUFNLGdCQUFHQyxrREFBSSxNQUFDLE1BQUssNElBQU4sQ0FBbkI7TUFBTUQsTTtBQUNOLE1BQU1FLFNBQVMsZ0JBQUdELGtEQUFJLE9BQUMsTUFBSyxrSkFBTixDQUF0QjtNQUFNQyxTO0FBR1MsU0FBU0MsUUFBVCxHQUFvQjtBQUNqQyxTQUFPLGtGQUFDLDhDQUFEO0FBQVUsWUFBUSxlQUN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLO0FBQUEsMkJBRUoscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkk7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFLUCxxRUFBQyw4Q0FBRDtBQUFVLFlBQVEsZUFBRTtBQUFBLDZCQUVsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXBCO0FBQUEsMkJBR0cscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxBO0FBYUQ7TUFkdUJBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjdmOWMwZDgxMzY0MTRmNWE4ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBnaWYgZnJvbSAnLi4vc3JjL2NhcnJlZ2EuZ2lmJztcclxuLy8gaW1wb3J0IGN1cG9tIGZyb20gJy4uLy4uL3NyYy9jdXBvbS5naWYnO1xyXG5pbXBvcnQgeyBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGNvbnN0IEJ1dHRvbiA9IGxhenkoKCk9PiBpbXBvcnQoJy4vQ29tcG9uZW50cy9CdXR0b24nKSk7XHJcbi8vIGNvbnN0IEltYWdlID0gbGF6eSgoKT0+IGltcG9ydCgnLi9jb2RlLXNwbGl0dGluZy9JbWFnZScpKTtcclxuLy8gY29uc3QgU2xvZ2FuID0gbGF6eSgoKT0+IGltcG9ydCgnLi9jb2RlLXNwbGl0dGluZy9zbG9nYW4nKSk7XHJcbmNvbnN0IEZvb3RlciA9IGxhenkoKCk9PiBpbXBvcnQoJy4vQ29tcG9uZW50cy9Gb290ZXInKSk7XHJcbmNvbnN0IEp1bWJvdHJvbiA9IGxhenkoKCk9PiBpbXBvcnQoJy4vQ29tcG9uZW50cy9KdW1ib3Ryb24nKSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxTdXNwZW5zZSBmYWxsYmFjaz17XHJcbiAgICA8cD5Ow6NvIGRlc2lzdGEgZGUgbsOzcy4uIGVzdGFtb3MgdHJhYmFsaGFuZG8gbmlzc29vLi4uLjwvcD59PlxyXG4gICAgIDxKdW1ib3Ryb24gLz5cclxuICAgICA8L1N1c3BlbnNlPixcclxuICBcclxuICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxjZW50ZXI+XHJcbiAgICB7LyogPGltZyBzcmM9e2N1cG9tfSBhbHQ9XCJjdXBvbVwiLz4gPC9jZW50ZXI+fT4gKi99XHJcbiAgICA8cD5Ow6NvIGRlc2lzdGEgZGUgbsOzcy4uIGVzdGFtb3MgdHJhYmFsaGFuZG8gbmlzc29vLi4uLjwvcD48L2NlbnRlcj59PlxyXG4gICAgIDxGb290ZXIgLz5cclxuICAgICA8L1N1c3BlbnNlPlxyXG5cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==