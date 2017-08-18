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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_editor__ = __webpack_require__(6);


var _window = window,
    componentRegistry = _window.paperWasp.componentRegistry;


if (componentRegistry) {
    componentRegistry.setProperty('paper-wasp-heading', 'classEditor', __WEBPACK_IMPORTED_MODULE_0__component_editor__["a" /* HeadingEditor */]);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadingEditor; });


function HeadingEditor(_ref) {
    var _ref$data = _ref.data,
        align = _ref$data.align,
        color = _ref$data.color,
        _ref$data$tag = _ref$data.tag,
        tag = _ref$data$tag === undefined ? 'h1' : _ref$data$tag,
        _ref$data$text = _ref$data.text,
        text = _ref$data$text === undefined ? '' : _ref$data$text,
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
                'Heading Text'
            ),
            React.createElement('input', { onChange: function (_onChange) {
                    function onChange(_x) {
                        return _onChange.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ text: e.target.value });
                }), type: 'text', value: text })
        ),
        React.createElement(
            'div',
            { className: 'paper-wasp-field', style: { display: 'flex', justifyContent: 'space-between' } },
            React.createElement(
                'label',
                { style: { flexBasis: '50%', marginRight: '10px' } },
                React.createElement(
                    'span',
                    null,
                    'Heading Type'
                ),
                React.createElement(
                    'select',
                    { onChange: function (_onChange2) {
                            function onChange(_x2) {
                                return _onChange2.apply(this, arguments);
                            }

                            onChange.toString = function () {
                                return _onChange2.toString();
                            };

                            return onChange;
                        }(function (e) {
                            return onChange({ tag: e.target.value });
                        }), value: tag },
                    React.createElement(
                        'option',
                        { value: 'h1' },
                        'Heading 1'
                    ),
                    React.createElement(
                        'option',
                        { value: 'h2' },
                        'Heading 2'
                    ),
                    React.createElement(
                        'option',
                        { value: 'h3' },
                        'Heading 3'
                    ),
                    React.createElement(
                        'option',
                        { value: 'h4' },
                        'Heading 4'
                    ),
                    React.createElement(
                        'option',
                        { value: 'h5' },
                        'Heading 5'
                    )
                )
            ),
            React.createElement(
                'label',
                { style: { flexBasis: '50%' } },
                React.createElement(
                    'span',
                    null,
                    'Text Alignment'
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
                        }), value: align || 'left' },
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
            )
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Color'
            ),
            React.createElement('input', { onChange: function (_onChange4) {
                    function onChange(_x4) {
                        return _onChange4.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange4.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ color: e.target.value });
                }), type: 'text', value: color || '' })
        )
    );
}



/***/ })
/******/ ]);
//# sourceMappingURL=component-editor.js.map