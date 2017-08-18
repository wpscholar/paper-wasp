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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoEditor; });


function VideoEditor(_ref) {
    var _ref$data = _ref.data,
        _ref$data$align = _ref$data.align,
        align = _ref$data$align === undefined ? 'left' : _ref$data$align,
        _ref$data$height = _ref$data.height,
        height = _ref$data$height === undefined ? 0 : _ref$data$height,
        _ref$data$isResponsiv = _ref$data.isResponsive,
        isResponsive = _ref$data$isResponsiv === undefined ? true : _ref$data$isResponsiv,
        _ref$data$width = _ref$data.width,
        width = _ref$data$width === undefined ? 0 : _ref$data$width,
        _ref$data$url = _ref$data.url,
        url = _ref$data$url === undefined ? '' : _ref$data$url,
        onChange = _ref.onChange;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Video URL'
            ),
            React.createElement('input', {
                onChange: function (_onChange) {
                    function onChange(_x) {
                        return _onChange.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ url: e.target.value });
                }),
                type: 'text',
                value: url })
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement('input', {
                checked: isResponsive,
                onChange: function (_onChange2) {
                    function onChange(_x2) {
                        return _onChange2.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange2.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ isResponsive: e.target.checked });
                }),
                type: 'checkbox' }),
            React.createElement(
                'span',
                null,
                'Make video responsive'
            )
        ),
        !isResponsive ? React.createElement(
            'div',
            null,
            React.createElement(
                'label',
                { className: 'paper-wasp-field' },
                React.createElement(
                    'span',
                    null,
                    'Alignment'
                ),
                React.createElement(
                    'select',
                    { onChange: function (_onChange3) {
                            function onChange(_x3) {
                                return _onChange3.apply(this, arguments);
                            }

                            onChange.toString = function () {
                                return _onChange3.toString();
                            };

                            return onChange;
                        }(function (e) {
                            return onChange({ align: e.target.value });
                        }), value: align },
                    React.createElement(
                        'option',
                        { value: 'left' },
                        'Left'
                    ),
                    React.createElement(
                        'option',
                        { value: 'center' },
                        'Center'
                    ),
                    React.createElement(
                        'option',
                        { value: 'right' },
                        'Right'
                    )
                )
            ),
            React.createElement(
                'label',
                { className: 'paper-wasp-field' },
                React.createElement(
                    'span',
                    null,
                    'Width'
                ),
                React.createElement('input', {
                    min: '0',
                    onChange: function (_onChange4) {
                        function onChange(_x4) {
                            return _onChange4.apply(this, arguments);
                        }

                        onChange.toString = function () {
                            return _onChange4.toString();
                        };

                        return onChange;
                    }(function (e) {
                        return onChange({ width: parseInt(e.target.value, 10) || 0 });
                    }),
                    step: '1',
                    type: 'number',
                    value: width })
            ),
            React.createElement(
                'label',
                { className: 'paper-wasp-field' },
                React.createElement(
                    'span',
                    null,
                    'Height'
                ),
                React.createElement('input', {
                    min: '0',
                    onChange: function (_onChange5) {
                        function onChange(_x5) {
                            return _onChange5.apply(this, arguments);
                        }

                        onChange.toString = function () {
                            return _onChange5.toString();
                        };

                        return onChange;
                    }(function (e) {
                        return onChange({ height: parseInt(e.target.value, 10) || 0 });
                    }),
                    step: '1',
                    type: 'number',
                    value: height })
            )
        ) : null
    );
}



/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_editor__ = __webpack_require__(10);


var _window = window,
    componentRegistry = _window.paperWasp.componentRegistry;


if (componentRegistry) {
    componentRegistry.setProperty('paper-wasp-video', 'classEditor', __WEBPACK_IMPORTED_MODULE_0__component_editor__["a" /* VideoEditor */]);
}

/***/ })

/******/ });
//# sourceMappingURL=component-editor.js.map