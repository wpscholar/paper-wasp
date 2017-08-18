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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_editor__ = __webpack_require__(5);


var _window = window,
    componentRegistry = _window.paperWasp.componentRegistry;


if (componentRegistry) {
    componentRegistry.setProperty('paper-wasp-button', 'classEditor', __WEBPACK_IMPORTED_MODULE_0__component_editor__["a" /* ButtonEditor */]);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonEditor; });


function ButtonEditor(_ref) {
    var _ref$data = _ref.data,
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
        onChange = _ref.onChange;

    return React.createElement(
        'div',
        { className: 'paper-wasp-button-editor' },
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Button Text'
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
                    return onChange({ text: e.target.value });
                }),
                type: 'text',
                value: text })
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Button URL'
            ),
            React.createElement('input', {
                onChange: function (_onChange2) {
                    function onChange(_x2) {
                        return _onChange2.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange2.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ link: e.target.value });
                }),
                type: 'text',
                value: link })
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement('input', {
                checked: newTab,
                name: 'newTab',
                onChange: function (_onChange3) {
                    function onChange(_x3) {
                        return _onChange3.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange3.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ newTab: e.target.checked });
                }),
                type: 'checkbox' }),
            React.createElement(
                'span',
                null,
                'Open in new tab?'
            )
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Button Alignment'
            ),
            React.createElement(
                'select',
                {
                    onChange: function (_onChange4) {
                        function onChange(_x4) {
                            return _onChange4.apply(this, arguments);
                        }

                        onChange.toString = function () {
                            return _onChange4.toString();
                        };

                        return onChange;
                    }(function (e) {
                        return onChange({ align: e.target.value });
                    }),
                    value: align },
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
                'Background Color'
            ),
            React.createElement('input', {
                onChange: function (_onChange5) {
                    function onChange(_x5) {
                        return _onChange5.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange5.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ backgroundColor: e.target.value });
                }),
                type: 'text',
                value: backgroundColor })
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Text Color'
            ),
            React.createElement('input', {
                onChange: function (_onChange6) {
                    function onChange(_x6) {
                        return _onChange6.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange6.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ textColor: e.target.value });
                }),
                type: 'text',
                value: textColor })
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Border Thickness (px)'
            ),
            React.createElement('input', {
                onChange: function (_onChange7) {
                    function onChange(_x7) {
                        return _onChange7.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange7.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ borderThickness: e.target.value });
                }),
                step: '1',
                type: 'number',
                value: borderThickness })
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Border Color'
            ),
            React.createElement('input', {
                onChange: function (_onChange8) {
                    function onChange(_x8) {
                        return _onChange8.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange8.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ borderColor: e.target.value });
                }),
                type: 'text',
                value: borderColor })
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Border Radius (px)'
            ),
            React.createElement('input', {
                onChange: function (_onChange9) {
                    function onChange(_x9) {
                        return _onChange9.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange9.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ borderRadius: e.target.value });
                }),
                step: '1',
                type: 'number',
                value: borderRadius })
        ),
        React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Hover Color'
            ),
            React.createElement('input', {
                onChange: function (_onChange10) {
                    function onChange(_x10) {
                        return _onChange10.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange10.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ hoverColor: e.target.value });
                }),
                type: 'text',
                value: hoverColor })
        )
    );
}



/***/ })
/******/ ]);
//# sourceMappingURL=component-editor.js.map