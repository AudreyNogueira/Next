module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/Components/Button.js":
/*!****************************************!*\
  !*** ./src/pages/Components/Button.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ "./src/pages/Components/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Samsung\\Desktop\\react-avacado\\ssr-exemplo\\src\\pages\\Components\\Button.js";

function Button() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    type: "button" // Note how the "error" class is accessed as a property on the imported
    // `styles` object.
    ,
    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.error,
    children: "conhecer"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/Components/Button.module.css":
/*!************************************************!*\
  !*** ./src/pages/Components/Button.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"error": "Button_error__1-GPL"
};


/***/ }),

/***/ "./src/pages/Components/Footer.js":
/*!****************************************!*\
  !*** ./src/pages/Components/Footer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Samsung\\Desktop\\react-avacado\\ssr-exemplo\\src\\pages\\Components\\Footer.js";
function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Volte sempre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\xA9 Todos os direitos reservados a Audrey e a Recode Pro "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 14
    }, this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./src/pages/Components/Image.js":
/*!***************************************!*\
  !*** ./src/pages/Components/Image.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import orgonite from '../../../public/orgonite.jpeg';
// export default function Image(){ 
//     return(
//      <div>   <img src={orgonite} className="orgonite"  />
//     </div>
//     );
// }

/***/ }),

/***/ "./src/pages/Components/Jumbotron.js":
/*!*******************************************!*\
  !*** ./src/pages/Components/Jumbotron.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Jumbotron; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
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

/***/ }),

/***/ "./src/pages/Components/Slogan.js":
/*!****************************************!*\
  !*** ./src/pages/Components/Slogan.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slogan; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Samsung\\Desktop\\react-avacado\\ssr-exemplo\\src\\pages\\Components\\Slogan.js";
function Slogan() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "p-2 bg-secondary",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Orgonite n\xE3o \xE9 apenas uma pe\xE7a de decora\xE7\xE3o bonita, feita de cristais. Essa poderosa ferramenta utiliza a energia Orgone e pode ser muito ben\xE9fica para o organismo.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 1
      }, this), "A pe\xE7a normalmente \xE9 composta por tr\xEAs elementos essenciais: org\xE2nicos, que normalmente s\xE3o resinas; metais, raspas ou pequenos elementos e cristais diversos. Opcionalmente, s\xE3o utilizadas pedras preciosas e semi-preciosas.Algumas outras subst\xE2ncias podem ser adicionadas a mistura para torn\xE1-la mais potente ou mais especializada para diferentes aplica\xE7\xF5es."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Jumbotron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Jumbotron */ "./src/pages/Components/Jumbotron.js");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Button */ "./src/pages/Components/Button.js");
/* harmony import */ var _Components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Image */ "./src/pages/Components/Image.js");
/* harmony import */ var _Components_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Components_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Slogan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Slogan */ "./src/pages/Components/Slogan.js");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Footer */ "./src/pages/Components/Footer.js");

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Jumbotron__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Slogan__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
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

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Db21wb25lbnRzL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Db21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcG9uZW50cy9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcG9uZW50cy9KdW1ib3Ryb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXBvbmVudHMvU2xvZ2FuLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZXMiLCJlcnJvciIsIkZvb3RlciIsIkp1bWJvdHJvbiIsIlNsb2dhbiIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQ2pDLHNCQUNJO0FBQ0UsUUFBSSxFQUFDLFFBRFAsQ0FFRTtBQUNBO0FBSEY7QUFJRSxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLEtBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVQyxDOzs7Ozs7Ozs7OztBQ1pEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGUsU0FBU0MsTUFBVCxHQUFrQjtBQUM3QixzQkFDRTtBQUFBLGtDQUFPO0FBQUEsOEJBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURDLGVBRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZDLGVBSUY7QUFBQSxxQ0FBUztBQUFBLGtDQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURRLGVBRVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUgsQzs7Ozs7Ozs7Ozs7QUNiRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGUsU0FBU0MsU0FBVCxHQUFxQjtBQUNoQyxzQkFDSTtBQUFBLDJCQUVSO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZRLG1CQURKO0FBV0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmMsU0FBU0MsTUFBVCxHQUFpQjtBQUM1QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDJCQUNFO0FBQUEsd05BRVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0MsUUFBVCxHQUFvQjtBQUNqQixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUlFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztBQUVhQSx1RUFBZixFOzs7Ozs7Ozs7OztBQ2hDQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oKSB7XHJcbnJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAvLyBOb3RlIGhvdyB0aGUgXCJlcnJvclwiIGNsYXNzIGlzIGFjY2Vzc2VkIGFzIGEgcHJvcGVydHkgb24gdGhlIGltcG9ydGVkXHJcbiAgICAgIC8vIGBzdHlsZXNgIG9iamVjdC5cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9XHJcbiAgICA+XHJcbiAgICAgIGNvbmhlY2VyXHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlcnJvclwiOiBcIkJ1dHRvbl9lcnJvcl9fMS1HUExcIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+ICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICA8Y2VudGVyPiA8cD5cclxuICAgICAgICAgICAgPGI+Vm9sdGUgc2VtcHJlPC9iPlxyXG4gICAgICAgICAgICA8cD4mY29weTsgVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcyBhIEF1ZHJleSBlIGEgUmVjb2RlIFBybyA8L3A+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgPC9mb290ZXI+IDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCIvLyBpbXBvcnQgb3Jnb25pdGUgZnJvbSAnLi4vLi4vLi4vcHVibGljL29yZ29uaXRlLmpwZWcnO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoKXsgXHJcbi8vICAgICByZXR1cm4oXHJcbi8vICAgICAgPGRpdj4gICA8aW1nIHNyYz17b3Jnb25pdGV9IGNsYXNzTmFtZT1cIm9yZ29uaXRlXCIgIC8+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vIH1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSnVtYm90cm9uKCkge1xyXG4gICAgcmV0dXJuKCAgXHJcbiAgICAgICAgPD4gIFxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24ganVtYm90cm9uLWZsdWlkXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1wcmltYXJ5XCI+QG9yZ29uaXhfbXlzdGljYXJ0PC9oMT5cclxuICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1pbmZvXCI+VmVuaGEgY29uaGVjZXIgdW0gcG91Y28gbWFpcyBzb2JyZSBvcmdvbml0ZXM8L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48Lz5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbG9nYW4oKXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgPHA+XHJcbk9yZ29uaXRlIG7Do28gw6kgYXBlbmFzIHVtYSBwZcOnYSBkZSBkZWNvcmHDp8OjbyBib25pdGEsIGZlaXRhIGRlIGNyaXN0YWlzLiBFc3NhIHBvZGVyb3NhIGZlcnJhbWVudGEgdXRpbGl6YSBhIGVuZXJnaWEgT3Jnb25lIGUgcG9kZSBzZXIgbXVpdG8gYmVuw6lmaWNhIHBhcmEgbyBvcmdhbmlzbW8uXHJcbjxici8+QSBwZcOnYSBub3JtYWxtZW50ZSDDqSBjb21wb3N0YSBwb3IgdHLDqnMgZWxlbWVudG9zIGVzc2VuY2lhaXM6IG9yZ8Oibmljb3MsIHF1ZSBub3JtYWxtZW50ZSBzw6NvIHJlc2luYXM7IG1ldGFpcywgcmFzcGFzIG91IHBlcXVlbm9zIGVsZW1lbnRvcyBlIGNyaXN0YWlzIGRpdmVyc29zLlxyXG5PcGNpb25hbG1lbnRlLCBzw6NvIHV0aWxpemFkYXMgcGVkcmFzIHByZWNpb3NhcyBlIHNlbWktcHJlY2lvc2FzLkFsZ3VtYXMgb3V0cmFzIHN1YnN0w6JuY2lhcyBwb2RlbSBzZXIgYWRpY2lvbmFkYXMgYSBtaXN0dXJhIHBhcmEgdG9ybsOhLWxhIG1haXMgcG90ZW50ZSBvdSBtYWlzIGVzcGVjaWFsaXphZGEgcGFyYSBkaWZlcmVudGVzIGFwbGljYcOnw7Vlcy5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IEp1bWJvdHJvbiBmcm9tICcuL0NvbXBvbmVudHMvSnVtYm90cm9uJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQ29tcG9uZW50cy9CdXR0b24nXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0NvbXBvbmVudHMvSW1hZ2UnXHJcbmltcG9ydCBTbG9nYW4gZnJvbSAnLi9Db21wb25lbnRzL1Nsb2dhbidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuLy8gaW1wb3J0IGRlZmF1bHQgQnV0dG9uIGZ1bmN0aW9uICcuL0NvbXBvbmVudHMvQnV0dG9uJ1xyXG5cclxuLy8gaW1wb3J0IGdpZiBmcm9tICcuLi9zcmMvY2FycmVnYS5naWYnO1xyXG4vLyBpbXBvcnQgY3Vwb20gZnJvbSAnLi4vLi4vc3JjL2N1cG9tLmdpZic7XHJcbi8vIGltcG9ydCB7IGxhenksIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gY29uc3QgQnV0dG9uID0gbGF6eSgoKT0+IGltcG9ydCgnLi9Db21wb25lbnRzL0J1dHRvbicpKTtcclxuLy8gY29uc3QgSW1hZ2UgPSBsYXp5KCgpPT4gaW1wb3J0KCcuL2NvZGUtc3BsaXR0aW5nL0ltYWdlJykpO1xyXG4vLyBjb25zdCBTbG9nYW4gPSBsYXp5KCgpPT4gaW1wb3J0KCcuL2NvZGUtc3BsaXR0aW5nL3Nsb2dhbicpKTtcclxuLy8gY29uc3QgRm9vdGVyID0gbGF6eSgoKT0+IGltcG9ydCgnLi9Db21wb25lbnRzL0Zvb3RlcicpKTtcclxuLy8gY29uc3QgSnVtYm90cm9uID0gbGF6eSgoKT0+IGltcG9ydCgnLi9Db21wb25lbnRzL0p1bWJvdHJvbicpKTtcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgcmV0dXJuKFxyXG4gICAgIDxkaXY+XHJcbiAgICAgICA8SnVtYm90cm9uIC8+XHJcbiAgICAgICA8QnV0dG9uIC8+XHJcbiAgICAgICB7LyogPEltYWdlIC8+ICovfVxyXG4gICAgICAgPFNsb2dhbiAvPlxyXG4gICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgXHJcbiAgICAgPC9kaXY+XHJcbiAgIClcclxuIH1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9