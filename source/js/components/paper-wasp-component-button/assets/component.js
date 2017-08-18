/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(2);


var _window = window,
    componentRegistry = _window.paperWasp.componentRegistry;


if (componentRegistry) {
    componentRegistry.setProperty('paper-wasp-button', 'class', __WEBPACK_IMPORTED_MODULE_0__component__["a" /* Button */]);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });

/* eslint-disable react/no-danger, no-return-assign */

var _window = window,
    sanitizeHtml = _window.sanitizeHtml;


function Button(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className,
        _ref$data = _ref.data,
        _ref$data$align = _ref$data.align,
        align = _ref$data$align === undefined ? 'left' : _ref$data$align,
        _ref$data$backgroundC = _ref$data.backgroundColor,
        backgroundColor = _ref$data$backgroundC === undefined ? '' : _ref$data$backgroundC,
        _ref$data$borderColor = _ref$data.borderColor,
        borderColor = _ref$data$borderColor === undefined ? '' : _ref$data$borderColor,
        _ref$data$borderRadiu = _ref$data.borderRadius,
        borderRadius = _ref$data$borderRadiu === undefined ? 0 : _ref$data$borderRadiu,
        _ref$data$borderThick = _ref$data.borderThickness,
        borderThickness = _ref$data$borderThick === undefined ? 0 : _ref$data$borderThick,
        _ref$data$hoverColor = _ref$data.hoverColor,
        hoverColor = _ref$data$hoverColor === undefined ? '' : _ref$data$hoverColor,
        _ref$data$link = _ref$data.link,
        link = _ref$data$link === undefined ? '' : _ref$data$link,
        _ref$data$newTab = _ref$data.newTab,
        newTab = _ref$data$newTab === undefined ? false : _ref$data$newTab,
        _ref$data$textColor = _ref$data.textColor,
        textColor = _ref$data$textColor === undefined ? '' : _ref$data$textColor,
        _ref$data$text = _ref$data.text,
        text = _ref$data$text === undefined ? '' : _ref$data$text,
        id = _ref.id;


    var button = {};

    var style = {
        backgroundColor: backgroundColor,
        border: borderThickness && borderColor ? borderThickness + 'px solid ' + borderColor : '',
        borderRadius: borderRadius ? borderRadius + 'px' : '',
        color: textColor
    };

    return React.createElement(
        'div',
        { className: 'paper-wasp-text-' + align },
        React.createElement('a', {
            className: ['paper-wasp-button', className].join(' ').trim(),
            dangerouslySetInnerHTML: {
                __html: sanitizeHtml(text, {
                    allowedAttributes: { '*': ['class', 'id'] },
                    allowedTags: ['b', 'br', 'em', 'i', 'span', 'strong', 'sub', 'sup']
                })
            },
            href: link,
            id: id,
            onMouseOut: function onMouseOut() {
                return button.style.backgroundColor = backgroundColor;
            },
            onMouseOver: function onMouseOver() {
                return button.style.backgroundColor = hoverColor;
            },
            ref: function ref(el) {
                return button = el;
            },
            rel: 'noopener noreferrer',
            style: style,
            target: newTab ? '_blank' : null })
    );
}



/***/ })
/******/ ]);
//# sourceMappingURL=component.js.map