module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/reset-css/reset.css":
/*!******************************************!*\
  !*** ./node_modules/reset-css/reset.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reset_css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reset-css/reset.css */ "./node_modules/reset-css/reset.css");
/* harmony import */ var reset_css_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reset_css_reset_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _source_styles_index_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../source/styles/index.sass */ "./source/styles/index.sass");
/* harmony import */ var _source_styles_index_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_source_styles_index_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _source_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source/components */ "./source/components/index.js");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/pages/index.jsx";





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components__WEBPACK_IMPORTED_MODULE_3__["How"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components__WEBPACK_IMPORTED_MODULE_3__["Faq"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./source/components/index.js":
/*!************************************!*\
  !*** ./source/components/index.js ***!
  \************************************/
/*! exports provided: Footer, Header, Hero, Chart, How, Faq, Button, Countdown, DropDown, Icon, Logo, Nav, Questions, Social, Steps, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/Footer/Footer */ "./source/components/layout/Footer/Footer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _layout_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/Header/Header */ "./source/components/layout/Header/Header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _layout_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _layout_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/Hero/Hero */ "./source/components/layout/Hero/Hero.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _layout_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _layout_Chart_Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/Chart/Chart */ "./source/components/layout/Chart/Chart.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _layout_Chart_Chart__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _layout_How_How__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/How/How */ "./source/components/layout/How/How.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "How", function() { return _layout_How_How__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _layout_Faq_Faq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/Faq/Faq */ "./source/components/layout/Faq/Faq.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return _layout_Faq_Faq__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/Button/Button */ "./source/components/ui/Button/Button.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _ui_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ui_Countdown_Countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/Countdown/Countdown */ "./source/components/ui/Countdown/Countdown.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return _ui_Countdown_Countdown__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ui_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/DropDown/DropDown */ "./source/components/ui/DropDown/DropDown.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return _ui_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/Icon/Icon */ "./source/components/ui/Icon/Icon.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/Logo/Logo */ "./source/components/ui/Logo/Logo.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _ui_Nav_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/Nav/Nav */ "./source/components/ui/Nav/Nav.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _ui_Nav_Nav__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ui_Questions_Questions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/Questions/Questions */ "./source/components/ui/Questions/Questions.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return _ui_Questions_Questions__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _ui_Social_Social__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/Social/Social */ "./source/components/ui/Social/Social.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Social", function() { return _ui_Social_Social__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _ui_Steps_Steps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/Steps/Steps */ "./source/components/ui/Steps/Steps.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return _ui_Steps_Steps__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _ui_Title_Title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/Title/Title */ "./source/components/ui/Title/Title.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _ui_Title_Title__WEBPACK_IMPORTED_MODULE_15__["default"]; });

// Layout Components





 // UI Components












/***/ }),

/***/ "./source/components/layout/Chart/Chart.jsx":
/*!**************************************************!*\
  !*** ./source/components/layout/Chart/Chart.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./source/components/index.js");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/layout/Chart/Chart.jsx";


var data = {
  counterTotal: {
    text: [{
      title: 'Total'
    }],
    shadow: 'Total',
    counter: '18,446,744'
  },
  counterDone: {
    text: [{
      title: 'Coins'
    }, {
      title: 'Swapped'
    }],
    shadow: 'Swapped',
    counter: '0'
  },
  periodCurrent: {
    title: {
      text: [{
        title: 'Now'
      }],
      shadow: 'Now'
    },
    periodNum: 2,
    monthFirst: {
      title: 'April',
      day: 1
    },
    monthSecond: {
      title: 'May',
      day: 31
    },
    ratio: {
      bbr: 1,
      zan: 50
    }
  },
  periodNext: {
    title: {
      text: [{
        title: 'Next'
      }],
      shadow: 'Next'
    },
    periodNum: 3,
    monthFirst: {
      title: 'July',
      day: 1
    },
    monthSecond: {
      title: 'September',
      day: 31
    },
    ratio: {
      bbr: 1,
      zan: 25
    }
  }
};

var Chart = function Chart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section visualization container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "titles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    title: data.counterTotal.text,
    shadow: data.counterTotal.shadow,
    shadowAlign: "left",
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, data.counterTotal.counter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, " BBR"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    title: data.counterDone.text,
    shadow: data.counterDone.shadow,
    shadowAlign: "right",
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, data.counterDone.counter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, " BBR")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "chart__img",
    src: "../../../../static/images/chart.png",
    alt: "Chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "periods",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "period current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    title: data.periodCurrent.title.text,
    shadow: data.periodCurrent.title.shadow,
    shadowAlign: "left",
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "period__data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "period__value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Period "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, data.periodCurrent.periodNum)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "period__value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, data.periodCurrent.monthFirst.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, data.periodCurrent.monthFirst.day, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "st")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, " \u2013 ", data.periodCurrent.monthSecond.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, data.periodCurrent.monthSecond.day, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "st"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "period__value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Swap Ratio: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, data.periodCurrent.ratio.bbr), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, " BBR = "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, data.periodCurrent.ratio.zan), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, " ZAN")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "period next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    title: data.periodNext.title.text,
    shadow: data.periodNext.title.shadow,
    shadowAlign: "right",
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "period__data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "period__value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Period "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, data.periodNext.periodNum)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "period__value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, data.periodNext.monthFirst.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, data.periodNext.monthFirst.day, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "st")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, " \u2013 ", data.periodNext.monthSecond.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, data.periodNext.monthSecond.day, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "st"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "period__value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Swap Ratio: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, data.periodNext.ratio.bbr), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, " BBR = "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "period__num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, data.periodNext.ratio.zan), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, " ZAN"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./source/components/layout/Faq/Faq.jsx":
/*!**********************************************!*\
  !*** ./source/components/layout/Faq/Faq.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../index */ "./source/components/index.js");
/* harmony import */ var _source_framework_constants_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../source/framework/constants/app */ "./source/framework/constants/app.js");








var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/layout/Faq/Faq.jsx";




var Faq =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Faq, _React$Component);

  function Faq(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Faq);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Faq).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeActiveQuestion", function (activeQuestion) {
      return _this.setState(function () {
        return {
          activeQuestion: activeQuestion
        };
      });
    });

    _this.state = {
      activeQuestion: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Faq, [{
    key: "render",
    value: function render() {
      var activeQuestion = this.state.activeQuestion;
      var questionProps = {
        questions: _source_framework_constants_app__WEBPACK_IMPORTED_MODULE_10__["QUESTIONS"],
        active: activeQuestion,
        onClick: this.changeActiveQuestion
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "section faq container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_9__["Title"], {
        title: _source_framework_constants_app__WEBPACK_IMPORTED_MODULE_10__["TITLES"].faq,
        shadow: "Faq",
        centred: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_9__["Questions"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, questionProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })));
    }
  }]);

  return Faq;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./source/components/layout/Footer/Footer.jsx":
/*!****************************************************!*\
  !*** ./source/components/layout/Footer/Footer.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../ui/Logo/Logo */ "./source/components/ui/Logo/Logo.jsx");
/* harmony import */ var _ui_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../ui/Nav/Nav */ "./source/components/ui/Nav/Nav.jsx");
/* harmony import */ var _ui_Social_Social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../ui/Social/Social */ "./source/components/ui/Social/Social.jsx");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/layout/Footer/Footer.jsx";





var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Social_Social__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Copyright \xA9 2019 ZANO.org"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./source/components/layout/Header/Header.jsx":
/*!****************************************************!*\
  !*** ./source/components/layout/Header/Header.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Logo/Logo */ "./source/components/ui/Logo/Logo.jsx");
/* harmony import */ var _ui_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Nav/Nav */ "./source/components/ui/Nav/Nav.jsx");
/* harmony import */ var _ui_Social_Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Social/Social */ "./source/components/ui/Social/Social.jsx");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/layout/Header/Header.jsx";






var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header",
    id: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('header__wrap', 'container'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Social_Social__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./source/components/layout/Hero/Hero.jsx":
/*!************************************************!*\
  !*** ./source/components/layout/Hero/Hero.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../index */ "./source/components/index.js");
/* harmony import */ var _source_framework_constants_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../source/framework/constants/app */ "./source/framework/constants/app.js");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/layout/Hero/Hero.jsx";



var DROPDOWN_ITEMS = [{
  title: 'Github',
  link: 'https://github.com/hyle-team/zano'
}];

var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    title: _source_framework_constants_app__WEBPACK_IMPORTED_MODULE_2__["TITLES"].hero,
    shadow: "Coinswap",
    centred: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Boolberry holders can swap their coins for Zano, learn more in the whitepaper and FAQ below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["DropDown"], {
    className: "hero-button",
    items: DROPDOWN_ITEMS,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Whitepaper"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    title: "triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "hero-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Manual"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Countdown"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./source/components/layout/How/How.jsx":
/*!**********************************************!*\
  !*** ./source/components/layout/How/How.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../index */ "./source/components/index.js");
/* harmony import */ var _source_framework_constants_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../source/framework/constants/app */ "./source/framework/constants/app.js");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/layout/How/How.jsx";



var description = 'Every Boolberry holder is invited to participate. It can be done with either the Boolberry wallet or the exchange wallet; simply follow the steps described on the cards to the left. Swapped coins will no longer exist in the Boolberry network and this action is irreversible.';

var How = function How() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section how",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-wrap container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    title: _source_framework_constants_app__WEBPACK_IMPORTED_MODULE_2__["TITLES"].how,
    shadow: "How",
    centred: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "section-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
    steps: _source_framework_constants_app__WEBPACK_IMPORTED_MODULE_2__["STEPS"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (How);

/***/ }),

/***/ "./source/components/ui/Button/Button.jsx":
/*!************************************************!*\
  !*** ./source/components/ui/Button/Button.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Button/Button.jsx";



var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      blue = _ref.blue,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', className, {
      'disabled': disabled,
      'blue': blue
    }),
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "button-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, children));
};

Button.defaultProps = {
  onClick: function onClick() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./source/components/ui/Countdown/Countdown.jsx":
/*!******************************************************!*\
  !*** ./source/components/ui/Countdown/Countdown.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Countdown/Countdown.jsx";


var Countdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Countdown, _React$Component);

  function Countdown(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Countdown);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Countdown).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateDistance", function () {
      var distance = _this.calculateTime();

      _this.setState(function () {
        return {
          distance: distance
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calculateTime", function () {
      var currentTime = new Date().getTime(); // difference with future date and current time

      var dist = _this.futureDate - currentTime;
      var distance = {
        days: [0, 0],
        hours: [0, 0],
        minutes: [0, 0],
        seconds: [0, 0]
      };
      distance.days = Math.floor(dist / (1000 * 60 * 60 * 24)).toString().split('');
      distance.hours = Math.floor(dist % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString().split('');
      distance.minutes = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60)).toString().split('');
      distance.seconds = Math.floor(dist % (1000 * 60) / 1000).toString().split('');
      return distance;
    });

    _this.futureDate = new Date('1 Mar, 2020').getTime();
    _this.timer = null;
    _this.state = {
      distance: {
        days: [0, 0],
        hours: [0, 0],
        minutes: [0, 0],
        seconds: [0, 0]
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.timeout = setInterval(this.updateDistance, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: "render",
    value: function render() {
      var distance = this.state.distance;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "countdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "countdown-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Coinswap ends in"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "countdown-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "countdown-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "countdown-section-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, distance.days.map(function (el, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "countdown-item",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, el);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "countdown-section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Days")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "countdown-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "countdown-section-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, distance.hours.map(function (el, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "countdown-item",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, el);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "countdown-section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Hours")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "countdown-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "countdown-section-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, distance.minutes.map(function (el, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "countdown-item",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, el);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "countdown-section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Minutes")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "countdown-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "countdown-section-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, distance.seconds.map(function (el, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "countdown-item",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, el);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "countdown-section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Seconds"))));
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./source/components/ui/DropDown/DropDown.jsx":
/*!****************************************************!*\
  !*** ./source/components/ui/DropDown/DropDown.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../index */ "./source/components/index.js");







var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/DropDown/DropDown.jsx";




var DropDown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DropDown, _React$Component);

  function DropDown(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DropDown);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DropDown).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMouseEnter", function () {
      return _this.setState(function () {
        return {
          menuOpened: true
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMouseLeave", function () {
      return _this.setState(function () {
        return {
          menuOpened: false
        };
      });
    });

    _this.state = {
      menuOpened: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DropDown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          items = _this$props.items;
      var menuOpened = this.state.menuOpened;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('drop-down', className, {
          'opened': menuOpened
        }),
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "drop-down-toggler",
        blue: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('drop-down-menu', {
          'visible': this.state.menuOpened
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, items.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "drop-down-link",
          key: index,
          href: item.link,
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, item.title);
      })));
    }
  }]);

  return DropDown;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DropDown);

/***/ }),

/***/ "./source/components/ui/Icon/Icon.jsx":
/*!********************************************!*\
  !*** ./source/components/ui/Icon/Icon.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Icon/Icon.jsx";



var Icon = function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('icon', props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./source/components/ui/Logo/Logo.jsx":
/*!********************************************!*\
  !*** ./source/components/ui/Logo/Logo.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Logo/Logo.jsx";


var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "logo",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "logo__image",
    src: "static/images/logo.svg",
    alt: "Zano",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "logo__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Zano"));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./source/components/ui/Nav/Nav.jsx":
/*!******************************************!*\
  !*** ./source/components/ui/Nav/Nav.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _framework_constants_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/constants/app */ "./source/framework/constants/app.js");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Nav/Nav.jsx";




var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, _framework_constants_app__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navigation__link', {
        'disabled': index === 1
      }),
      href: item.link,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, item.title);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./source/components/ui/Questions/Questions.jsx":
/*!******************************************************!*\
  !*** ./source/components/ui/Questions/Questions.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Questions/Questions.jsx";



var Questions = function Questions(_ref) {
  var questions = _ref.questions,
      active = _ref.active,
      _onClick = _ref.onClick;

  var getQuestions = function getQuestions() {
    return questions.map(function (question, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('question', {
          'active': active === index
        }),
        key: index,
        onClick: function onClick() {
          return _onClick(index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "question__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "question__icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "question__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, question.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "question__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, question.description));
    });
  };

  return questions.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "questions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, getQuestions()) : false;
};

Questions.defaultProps = {
  questions: [],
  active: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Questions);

/***/ }),

/***/ "./source/components/ui/Social/Social.jsx":
/*!************************************************!*\
  !*** ./source/components/ui/Social/Social.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/Icon */ "./source/components/ui/Icon/Icon.jsx");
/* harmony import */ var _framework_constants_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/constants/app */ "./source/framework/constants/app.js");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Social/Social.jsx";




var Social = function Social() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _framework_constants_app__WEBPACK_IMPORTED_MODULE_2__["SOCIAL_ICONS"].map(function (icon, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "social__el",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "social__link",
      href: icon.link,
      title: icon.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: icon.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./source/components/ui/Steps/Step.jsx":
/*!*********************************************!*\
  !*** ./source/components/ui/Steps/Step.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../index */ "./source/components/index.js");
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Steps/Step.jsx";




var Step = function Step(_ref) {
  var classNames = _ref.classNames,
      icon = _ref.icon,
      title = _ref.title,
      active = _ref.active,
      subtitle = _ref.subtitle,
      description = _ref.description,
      button = _ref.button;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('step', classNames, {
      'step-active': active
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "step-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    title: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "step-title-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "step-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "step-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, description), button && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "step-button",
    blue: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, button.title));
};

/* harmony default export */ __webpack_exports__["default"] = (Step);

/***/ }),

/***/ "./source/components/ui/Steps/Steps.jsx":
/*!**********************************************!*\
  !*** ./source/components/ui/Steps/Steps.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Step */ "./source/components/ui/Steps/Step.jsx");






var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Steps/Steps.jsx";



var Steps =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Steps, _React$Component);

  function Steps(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Steps);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Steps).call(this, props));
    _this.state = {
      active: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Steps, [{
    key: "render",
    value: function render() {
      var steps = this.props.steps;
      var active = this.state.active;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "steps",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, steps.map(function (step, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Step__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, step, {
          active: index === active,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }));
      }));
    }
  }]);

  return Steps;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./source/components/ui/Title/Title.jsx":
/*!**********************************************!*\
  !*** ./source/components/ui/Title/Title.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ant1k/dev/work/zano/zano-coinswap/source/components/ui/Title/Title.jsx";



var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('title', {
      'centred': props.centred,
      'small': props.small
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.title.map(function (word, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('title__word', {
        'blue': word.blue
      }),
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, word.title);
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('title__shadow', props.shadowAlign),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.shadow));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./source/framework/constants/app.js":
/*!*******************************************!*\
  !*** ./source/framework/constants/app.js ***!
  \*******************************************/
/*! exports provided: MENU_ITEMS, SOCIAL_ICONS, TITLES, STEPS, QUESTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_ICONS", function() { return SOCIAL_ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLES", function() { return TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTIONS", function() { return QUESTIONS; });
var MENU_ITEMS = [{
  title: 'Home',
  link: 'https:/zano.org'
}, {
  title: 'Coinswap',
  link: '/'
}, {
  title: 'Blog',
  link: 'https://medium.com/@zano_project'
}, {
  title: 'Rescources',
  link: 'https://docs.zano.org/'
}];
var SOCIAL_ICONS = [{
  title: 'twitter',
  link: 'https://twitter.com/zano_project'
}, {
  title: 'medium',
  link: 'https://medium.com/@zano_project'
}, {
  title: 'discord',
  link: 'https://discord.gg/wE3rmYY'
}, {
  title: 'telegram',
  link: 'https://t.me/zanocoin'
}];
var TITLES = {
  hero: [{
    title: 'Zano'
  }, {
    title: 'Coin',
    blue: true
  }, {
    title: 'Swap'
  }],
  how: [{
    title: 'How'
  }, {
    title: 'to'
  }, {
    title: 'Swap'
  }, {
    title: 'Your'
  }, {
    title: 'Coins',
    blue: true
  }],
  faq: [{
    title: 'FAQ',
    blue: false
  }]
};
var STEPS = [{
  icon: 'step-one',
  title: 'Step 1',
  subtitle: 'Download the wallet',
  description: 'Download the appropriate wallet app for your OS.',
  button: {
    title: 'Download'
  }
}, {
  icon: 'step-two',
  title: 'Step 2',
  subtitle: 'Create the wallet',
  description: 'Create your wallet, this is the address you’ll use to swap your Boolberry (BBR) coins. Make sure you store your seed phrase in a safe place.'
}, {
  icon: 'step-three',
  title: 'Step 3',
  subtitle: 'Swap the coins',
  description: 'Send the swap transaction from your BBR wallet; it will be marked as a Zano transaction in your wallet. After this step, your BBR coins will be no longer accessible.'
}, {
  icon: 'step-four',
  title: 'Step 4',
  subtitle: 'Confirm the receipt of your coins in your Zano wallet',
  description: 'After 20 confirmations your Zano coins will arrive at the address you specified.'
}];
var QUESTIONS = [{
  title: 'What is Zano total supply?',
  description: 'Total Zano supply is equal to Total Boolberry supply which is 18,446,744. Initial exchange ratio is 1:1.'
}, {
  title: 'What’s the ratio?',
  description: 'For the first three month of the swap ratio is fixed at 1:1 and later will gradually decrease until the end of the swap period, that should be one-year total. More details could be found in Coinswap Whitepaper available here.'
}, {
  title: 'How long coins swap will run?',
  description: 'One year.'
}, {
  title: 'How long coins swap will run?',
  description: 'One year.'
}, {
  title: 'How many coins reserved for the swap?',
  description: 'Current Boolberry supply +20% premine for a development fund.'
}, {
  title: 'What will happen with unswapped coins?',
  description: 'After the swap is concluded the remaining unswapped coins will be added back to emission to be later distributed as block reward and 20% of it will be kept for developer fund.'
}, {
  title: 'Why aren’t the unswapped coins being burned?',
  description: 'Lower supply means low liquidity and higher risk of PoW double spend attack due to cheap hash power. This is less critical for a Hybrid PoW/PoS blockchain such as Zano but it’s still an important factor.'
}, {
  title: 'What if I store my coins on exchange?',
  description: 'You can still send them to your Zano address, it doesn’t matter where they came from.'
}, {
  title: 'Is swap reversable?',
  description: 'No, this is irreversible transaction so please make sure you absolutely understand what are you doing before sending your BBR coins to your Zano wallet.'
}];

/***/ }),

/***/ "./source/styles/index.sass":
/*!**********************************!*\
  !*** ./source/styles/index.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ant1k/dev/work/zano/zano-coinswap/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map