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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container__ = __webpack_require__(2);


var _window = window,
    componentRegistry = _window.paperWasp.componentRegistry;


if (componentRegistry) {
    componentRegistry.setProperty('paper-wasp-image', 'class', __WEBPACK_IMPORTED_MODULE_0__container__["a" /* Image */]);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(3);


function Image(_ref) {
    var data = _ref.data;

    return React.createElement(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */], data);
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function Image(_ref) {
    var _ref$align = _ref.align,
        align = _ref$align === undefined ? 'left' : _ref$align,
        _ref$alt = _ref.alt,
        alt = _ref$alt === undefined ? '' : _ref$alt,
        caption = _ref.caption,
        _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className,
        _ref$fit = _ref.fit,
        fit = _ref$fit === undefined ? 'natural' : _ref$fit,
        id = _ref.id,
        link = _ref.link,
        showCaption = _ref.showCaption,
        src = _ref.src,
        title = _ref.title;


    // eslint-disable-next-line jsx-a11y/img-has-alt
    var img = React.createElement('img', { alt: alt, src: src, title: title });

    var classes = ['paper-wasp-image', 'paper-wasp-image--' + align, 'paper-wasp-image--' + fit, className].join(' ').trim();

    var hasCaption = caption && caption.length > 0;

    return React.createElement(
        'figure',
        { className: classes, id: id },
        link ? React.createElement(
            'a',
            { href: link, rel: 'noopener noreferrer', target: '_blank' },
            img
        ) : img,
        hasCaption && showCaption ? React.createElement(
            'figcaption',
            null,
            caption
        ) : null
    );
}

/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ })
/******/ ]);
//# sourceMappingURL=component.js.map