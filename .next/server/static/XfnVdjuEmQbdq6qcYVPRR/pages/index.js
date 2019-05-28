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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+m2t":
/***/ (function(module, exports) {



/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TstN":
/***/ (function(module, exports) {



/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/reset-css/reset.css
var reset_css_reset = __webpack_require__("+m2t");

// EXTERNAL MODULE: ./source/styles/index.sass
var styles = __webpack_require__("TstN");

// CONCATENATED MODULE: ./source/components/ui/Logo/Logo.jsx


var Logo_Logo = function Logo() {
  return external_react_default.a.createElement("a", {
    className: "logo",
    href: "/"
  }, external_react_default.a.createElement("img", {
    className: "logo__image",
    src: "static/images/logo.svg",
    alt: "Zano"
  }), external_react_default.a.createElement("span", {
    className: "logo__text"
  }, "Zano"));
};

/* harmony default export */ var ui_Logo_Logo = (Logo_Logo);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./source/framework/constants/app.js
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
// CONCATENATED MODULE: ./source/components/ui/Nav/Nav.jsx




var Nav_Nav = function Nav() {
  return external_react_default.a.createElement("nav", {
    className: "navigation"
  }, MENU_ITEMS.map(function (item, index) {
    return external_react_default.a.createElement("a", {
      className: external_classnames_default()('navigation__link', {
        'disabled': index === 1
      }),
      href: item.link,
      key: index
    }, item.title);
  }));
};

/* harmony default export */ var ui_Nav_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./source/components/ui/Icon/Icon.jsx



var Icon_Icon = function Icon(props) {
  return external_react_default.a.createElement("span", {
    className: external_classnames_default()('icon', props.title)
  });
};

/* harmony default export */ var ui_Icon_Icon = (Icon_Icon);
// CONCATENATED MODULE: ./source/components/ui/Social/Social.jsx




var Social_Social = function Social() {
  return external_react_default.a.createElement("ul", {
    className: "social"
  }, SOCIAL_ICONS.map(function (icon, index) {
    return external_react_default.a.createElement("li", {
      className: "social__el",
      key: index
    }, external_react_default.a.createElement("a", {
      className: "social__link",
      href: icon.link,
      title: icon.title
    }, external_react_default.a.createElement(ui_Icon_Icon, {
      title: icon.title
    })));
  }));
};

/* harmony default export */ var ui_Social_Social = (Social_Social);
// CONCATENATED MODULE: ./source/components/layout/Footer/Footer.jsx





var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "footer"
  }, external_react_default.a.createElement(ui_Logo_Logo, null), external_react_default.a.createElement(ui_Nav_Nav, null), external_react_default.a.createElement(ui_Social_Social, null), external_react_default.a.createElement("span", {
    className: "copyright"
  }, "Copyright \xA9 2019 ZANO.org"));
};

/* harmony default export */ var layout_Footer_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./source/components/layout/Header/Header.jsx






var Header_Header = function Header() {
  return external_react_default.a.createElement("header", {
    className: "header",
    id: "header"
  }, external_react_default.a.createElement("div", {
    className: external_classnames_default()('header__wrap', 'container')
  }, external_react_default.a.createElement("div", {
    className: "header__left"
  }, external_react_default.a.createElement(ui_Logo_Logo, null)), external_react_default.a.createElement("div", {
    className: "header__center"
  }, external_react_default.a.createElement(ui_Nav_Nav, null)), external_react_default.a.createElement("div", {
    className: "header__right"
  }, external_react_default.a.createElement(ui_Social_Social, null))));
};

/* harmony default export */ var layout_Header_Header = (Header_Header);
// CONCATENATED MODULE: ./source/components/layout/Hero/Hero.jsx



var DROPDOWN_ITEMS = [{
  title: 'Github',
  link: 'https://github.com/hyle-team/zano'
}];

var Hero_Hero = function Hero() {
  return external_react_default.a.createElement("section", {
    className: "section hero"
  }, external_react_default.a.createElement(ui_Title_Title, {
    title: TITLES.hero,
    shadow: "Coinswap",
    centred: true
  }), external_react_default.a.createElement("p", {
    className: "section__text"
  }, "Boolberry holders can swap their coins for Zano, learn more in the whitepaper and FAQ below."), external_react_default.a.createElement("div", {
    className: "buttons"
  }, external_react_default.a.createElement(ui_DropDown_DropDown, {
    className: "hero-button",
    items: DROPDOWN_ITEMS
  }, external_react_default.a.createElement("span", null, "Whitepaper"), external_react_default.a.createElement(ui_Icon_Icon, {
    title: "triangle"
  })), external_react_default.a.createElement(ui_Button_Button, {
    className: "hero-button"
  }, "Manual"), external_react_default.a.createElement(ui_Countdown_Countdown, null)));
};

/* harmony default export */ var layout_Hero_Hero = (Hero_Hero);
// CONCATENATED MODULE: ./source/components/layout/Chart/Chart.jsx


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

var Chart_Chart = function Chart() {
  return external_react_default.a.createElement("section", {
    className: "section visualization container"
  }, external_react_default.a.createElement("div", {
    className: "titles"
  }, external_react_default.a.createElement("div", {
    className: "left"
  }, external_react_default.a.createElement(ui_Title_Title, {
    title: data.counterTotal.text,
    shadow: data.counterTotal.shadow,
    shadowAlign: "left",
    small: true
  }), external_react_default.a.createElement("div", {
    className: "count"
  }, external_react_default.a.createElement("span", null, data.counterTotal.counter), external_react_default.a.createElement("span", {
    className: "text-blue"
  }, " BBR"))), external_react_default.a.createElement("div", {
    className: "right"
  }, external_react_default.a.createElement(ui_Title_Title, {
    title: data.counterDone.text,
    shadow: data.counterDone.shadow,
    shadowAlign: "right",
    small: true
  }), external_react_default.a.createElement("div", {
    className: "count"
  }, external_react_default.a.createElement("span", null, data.counterDone.counter), external_react_default.a.createElement("span", {
    className: "text-blue"
  }, " BBR")))), external_react_default.a.createElement("div", {
    className: "chart"
  }, external_react_default.a.createElement("img", {
    className: "chart__img",
    src: "../../../../static/images/chart.png",
    alt: "Chart"
  })), external_react_default.a.createElement("div", {
    className: "periods"
  }, external_react_default.a.createElement("div", {
    className: "period current"
  }, external_react_default.a.createElement(ui_Title_Title, {
    title: data.periodCurrent.title.text,
    shadow: data.periodCurrent.title.shadow,
    shadowAlign: "left",
    small: true
  }), external_react_default.a.createElement("div", {
    className: "period__data"
  }, external_react_default.a.createElement("p", {
    className: "period__value"
  }, external_react_default.a.createElement("span", null, "Period "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodCurrent.periodNum)), external_react_default.a.createElement("p", {
    className: "period__value"
  }, external_react_default.a.createElement("span", null, data.periodCurrent.monthFirst.title, " "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodCurrent.monthFirst.day, external_react_default.a.createElement("sup", null, "st")), external_react_default.a.createElement("span", null, " \u2013 ", data.periodCurrent.monthSecond.title, " "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodCurrent.monthSecond.day, external_react_default.a.createElement("sup", null, "st"))), external_react_default.a.createElement("p", {
    className: "period__value"
  }, external_react_default.a.createElement("span", null, "Swap Ratio: "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodCurrent.ratio.bbr), external_react_default.a.createElement("span", null, " BBR = "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodCurrent.ratio.zan), external_react_default.a.createElement("span", null, " ZAN")))), external_react_default.a.createElement("div", {
    className: "period next"
  }, external_react_default.a.createElement(ui_Title_Title, {
    title: data.periodNext.title.text,
    shadow: data.periodNext.title.shadow,
    shadowAlign: "right",
    small: true
  }), external_react_default.a.createElement("div", {
    className: "period__data"
  }, external_react_default.a.createElement("p", {
    className: "period__value"
  }, external_react_default.a.createElement("span", null, "Period "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodNext.periodNum)), external_react_default.a.createElement("p", {
    className: "period__value"
  }, external_react_default.a.createElement("span", null, data.periodNext.monthFirst.title, " "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodNext.monthFirst.day, external_react_default.a.createElement("sup", null, "st")), external_react_default.a.createElement("span", null, " \u2013 ", data.periodNext.monthSecond.title, " "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodNext.monthSecond.day, external_react_default.a.createElement("sup", null, "st"))), external_react_default.a.createElement("p", {
    className: "period__value"
  }, external_react_default.a.createElement("span", null, "Swap Ratio: "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodNext.ratio.bbr), external_react_default.a.createElement("span", null, " BBR = "), external_react_default.a.createElement("span", {
    className: "period__num"
  }, data.periodNext.ratio.zan), external_react_default.a.createElement("span", null, " ZAN"))))));
};

/* harmony default export */ var layout_Chart_Chart = (Chart_Chart);
// CONCATENATED MODULE: ./source/components/layout/How/How.jsx



var How_description = 'Every Boolberry holder is invited to participate. It can be done with either the Boolberry wallet or the exchange wallet; simply follow the steps described on the cards to the left. Swapped coins will no longer exist in the Boolberry network and this action is irreversible.';

var How_How = function How() {
  return external_react_default.a.createElement("section", {
    className: "section how"
  }, external_react_default.a.createElement("div", {
    className: "section-wrap container"
  }, external_react_default.a.createElement("div", {
    className: "section-left"
  }, external_react_default.a.createElement(ui_Title_Title, {
    title: TITLES.how,
    shadow: "How",
    centred: true
  }), external_react_default.a.createElement("p", {
    className: "section-text"
  }, How_description)), external_react_default.a.createElement("div", {
    className: "section-right"
  }, external_react_default.a.createElement(ui_Steps_Steps, {
    steps: STEPS
  }))));
};

/* harmony default export */ var layout_How_How = (How_How);
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./source/components/layout/Faq/Faq.jsx











var Faq_Faq =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Faq, _React$Component);

  function Faq(props) {
    var _this;

    _classCallCheck(this, Faq);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Faq).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "changeActiveQuestion", function (activeQuestion) {
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

  _createClass(Faq, [{
    key: "render",
    value: function render() {
      var activeQuestion = this.state.activeQuestion;
      var questionProps = {
        questions: QUESTIONS,
        active: activeQuestion,
        onClick: this.changeActiveQuestion
      };
      return external_react_default.a.createElement("section", {
        className: "section faq container"
      }, external_react_default.a.createElement(ui_Title_Title, {
        title: TITLES.faq,
        shadow: "Faq",
        centred: true
      }), external_react_default.a.createElement(ui_Questions_Questions, questionProps));
    }
  }]);

  return Faq;
}(external_react_default.a.Component);

;
/* harmony default export */ var layout_Faq_Faq = (Faq_Faq);
// CONCATENATED MODULE: ./source/components/ui/Button/Button.jsx



var Button_Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      blue = _ref.blue,
      onClick = _ref.onClick;
  return external_react_default.a.createElement("button", {
    className: external_classnames_default()('button', className, {
      'disabled': disabled,
      'blue': blue
    }),
    onClick: onClick
  }, external_react_default.a.createElement("span", {
    className: "button-text"
  }, children));
};

Button_Button.defaultProps = {
  onClick: function onClick() {}
};
/* harmony default export */ var ui_Button_Button = (Button_Button);
// CONCATENATED MODULE: ./source/components/ui/Countdown/Countdown.jsx









var Countdown_Countdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Countdown, _React$Component);

  function Countdown(props) {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Countdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateDistance", function () {
      var distance = _this.calculateTime();

      _this.setState(function () {
        return {
          distance: distance
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "calculateTime", function () {
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

  _createClass(Countdown, [{
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
      return external_react_default.a.createElement("div", {
        className: "countdown"
      }, external_react_default.a.createElement("h4", {
        className: "countdown-title"
      }, "Coinswap ends in"), external_react_default.a.createElement("div", {
        className: "countdown-time"
      }, external_react_default.a.createElement("div", {
        className: "countdown-section"
      }, external_react_default.a.createElement("span", {
        className: "countdown-section-data"
      }, distance.days.map(function (el, index) {
        return external_react_default.a.createElement("span", {
          className: "countdown-item",
          key: index
        }, el);
      })), external_react_default.a.createElement("span", {
        className: "countdown-section-title"
      }, "Days")), external_react_default.a.createElement("div", {
        className: "countdown-section"
      }, external_react_default.a.createElement("span", {
        className: "countdown-section-data"
      }, distance.hours.map(function (el, index) {
        return external_react_default.a.createElement("span", {
          className: "countdown-item",
          key: index
        }, el);
      })), external_react_default.a.createElement("span", {
        className: "countdown-section-title"
      }, "Hours")), external_react_default.a.createElement("div", {
        className: "countdown-section"
      }, external_react_default.a.createElement("span", {
        className: "countdown-section-data"
      }, distance.minutes.map(function (el, index) {
        return external_react_default.a.createElement("span", {
          className: "countdown-item",
          key: index
        }, el);
      })), external_react_default.a.createElement("span", {
        className: "countdown-section-title"
      }, "Minutes")), external_react_default.a.createElement("div", {
        className: "countdown-section"
      }, external_react_default.a.createElement("span", {
        className: "countdown-section-data"
      }, distance.seconds.map(function (el, index) {
        return external_react_default.a.createElement("span", {
          className: "countdown-item",
          key: index
        }, el);
      })), external_react_default.a.createElement("span", {
        className: "countdown-section-title"
      }, "Seconds"))));
    }
  }]);

  return Countdown;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Countdown_Countdown = (Countdown_Countdown);
// CONCATENATED MODULE: ./source/components/ui/DropDown/DropDown.jsx











var DropDown_DropDown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown(props) {
    var _this;

    _classCallCheck(this, DropDown);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(DropDown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      return _this.setState(function () {
        return {
          menuOpened: true
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
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

  _createClass(DropDown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          items = _this$props.items;
      var menuOpened = this.state.menuOpened;
      return external_react_default.a.createElement("div", {
        className: external_classnames_default()('drop-down', className, {
          'opened': menuOpened
        }),
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }, external_react_default.a.createElement(ui_Button_Button, {
        className: "drop-down-toggler",
        blue: true
      }, this.props.children), external_react_default.a.createElement("div", {
        className: external_classnames_default()('drop-down-menu', {
          'visible': this.state.menuOpened
        })
      }, items.map(function (item, index) {
        return external_react_default.a.createElement("a", {
          className: "drop-down-link",
          key: index,
          href: item.link,
          target: "_blank"
        }, item.title);
      })));
    }
  }]);

  return DropDown;
}(external_react_default.a.Component);

/* harmony default export */ var ui_DropDown_DropDown = (DropDown_DropDown);
// CONCATENATED MODULE: ./source/components/ui/Questions/Questions.jsx



var Questions_Questions = function Questions(_ref) {
  var questions = _ref.questions,
      active = _ref.active,
      _onClick = _ref.onClick;

  var getQuestions = function getQuestions() {
    return questions.map(function (question, index) {
      return external_react_default.a.createElement("li", {
        className: external_classnames_default()('question', {
          'active': active === index
        }),
        key: index,
        onClick: function onClick() {
          return _onClick(index);
        }
      }, external_react_default.a.createElement("div", {
        className: "question__header"
      }, external_react_default.a.createElement("span", {
        className: "question__icon"
      }), external_react_default.a.createElement("h5", {
        className: "question__title"
      }, question.title)), external_react_default.a.createElement("p", {
        className: "question__description"
      }, question.description));
    });
  };

  return questions.length ? external_react_default.a.createElement("ul", {
    className: "questions"
  }, getQuestions()) : false;
};

Questions_Questions.defaultProps = {
  questions: [],
  active: 0
};
/* harmony default export */ var ui_Questions_Questions = (Questions_Questions);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// CONCATENATED MODULE: ./source/components/ui/Steps/Step.jsx




var Step_Step = function Step(_ref) {
  var classNames = _ref.classNames,
      icon = _ref.icon,
      title = _ref.title,
      active = _ref.active,
      subtitle = _ref.subtitle,
      description = _ref.description,
      button = _ref.button;
  return external_react_default.a.createElement("div", {
    className: external_classnames_default()('step', classNames, {
      'step-active': active
    })
  }, external_react_default.a.createElement("div", {
    className: "step-title"
  }, external_react_default.a.createElement(ui_Icon_Icon, {
    title: icon
  }), external_react_default.a.createElement("span", {
    className: "step-title-text"
  }, title)), external_react_default.a.createElement("h5", {
    className: "step-subtitle"
  }, subtitle), external_react_default.a.createElement("p", {
    className: "step-description"
  }, description), button && external_react_default.a.createElement(ui_Button_Button, {
    className: "step-button",
    blue: true
  }, button.title));
};

/* harmony default export */ var Steps_Step = (Step_Step);
// CONCATENATED MODULE: ./source/components/ui/Steps/Steps.jsx









var Steps_Steps =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Steps, _React$Component);

  function Steps(props) {
    var _this;

    _classCallCheck(this, Steps);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Steps).call(this, props));
    _this.state = {
      active: 0
    };
    return _this;
  }

  _createClass(Steps, [{
    key: "render",
    value: function render() {
      var steps = this.props.steps;
      var active = this.state.active;
      return external_react_default.a.createElement("div", {
        className: "steps"
      }, steps.map(function (step, index) {
        return external_react_default.a.createElement(Steps_Step, _extends({}, step, {
          active: index === active,
          key: index
        }));
      }));
    }
  }]);

  return Steps;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Steps_Steps = (Steps_Steps);
// CONCATENATED MODULE: ./source/components/ui/Title/Title.jsx



var Title_Title = function Title(props) {
  return external_react_default.a.createElement("h1", {
    className: external_classnames_default()('title', {
      'centred': props.centred,
      'small': props.small
    })
  }, props.title.map(function (word, index) {
    return external_react_default.a.createElement("span", {
      className: external_classnames_default()('title__word', {
        'blue': word.blue
      }),
      key: index
    }, word.title);
  }), external_react_default.a.createElement("span", {
    className: external_classnames_default()('title__shadow', props.shadowAlign)
  }, props.shadow));
};

/* harmony default export */ var ui_Title_Title = (Title_Title);
// CONCATENATED MODULE: ./source/components/index.js
// Layout Components





 // UI Components











// CONCATENATED MODULE: ./pages/index.jsx





var pages_Index = function Index() {
  return external_react_default.a.createElement("div", {
    className: "App"
  }, external_react_default.a.createElement(layout_Header_Header, null), external_react_default.a.createElement(layout_Hero_Hero, null), external_react_default.a.createElement(layout_Chart_Chart, null), external_react_default.a.createElement(layout_How_How, null), external_react_default.a.createElement(layout_Faq_Faq, null), external_react_default.a.createElement(layout_Footer_Footer, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });