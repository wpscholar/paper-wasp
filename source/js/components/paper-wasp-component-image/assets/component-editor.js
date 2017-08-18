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
    componentRegistry.setProperty('paper-wasp-image', 'classEditor', __WEBPACK_IMPORTED_MODULE_0__component_editor__["a" /* ImageEditor */]);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wp_image_upload__ = __webpack_require__(7);


/**
 * Handler to set props based on data passed by WordPress after uploading an image.
 *
 * @param img {Object}
 * @returns {Object}
 */
function onImageUpdate(img) {

    // Update props with data from WordPress image object
    if (img) {
        return {
            alt: img.alt || '',
            attachmentId: parseInt(img.id, 10) || 0,
            caption: img.caption || '',
            src: img.url || '',
            title: img.title || ''
        };
    }

    // Reset props if image was deleted
    return {
        alt: '',
        attachmentId: 0,
        caption: '',
        showCaption: false,
        src: '',
        title: ''
    };
}

/**
 * Handler to set props after image src is updated.
 *
 * @param src {string}
 * @returns {Object}
 */
function onSrcChange(src) {
    if (!src) {
        return {
            alt: '',
            caption: '',
            showCaption: false,
            src: src,
            title: ''
        };
    }
    return { src: src };
}

function ImageEditor(_ref) {
    var _ref$data = _ref.data,
        alt = _ref$data.alt,
        align = _ref$data.align,
        attachmentId = _ref$data.attachmentId,
        caption = _ref$data.caption,
        fit = _ref$data.fit,
        link = _ref$data.link,
        showCaption = _ref$data.showCaption,
        src = _ref$data.src,
        title = _ref$data.title,
        onChange = _ref.onChange;


    var hasImage = src && src.length > 0;
    var hasCaption = caption && caption.length > 0;
    var isUpload = attachmentId && attachmentId > 0;

    return React.createElement(
        'div',
        null,
        !hasImage || hasImage && isUpload ? React.createElement(__WEBPACK_IMPORTED_MODULE_0_wp_image_upload__["a" /* default */], {
            alt: alt,
            className: 'paper-wasp-field',
            onChange: function (_onChange) {
                function onChange(_x) {
                    return _onChange.apply(this, arguments);
                }

                onChange.toString = function () {
                    return _onChange.toString();
                };

                return onChange;
            }(function (data) {
                return onChange(onImageUpdate(data));
            }),
            src: src }) : null,
        !isUpload ? React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Image URL'
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
                    return onChange(onSrcChange(e.target.value));
                }),
                type: 'text',
                value: src || ''
            })
        ) : null,
        hasImage && !isUpload ? React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Alt Text'
            ),
            React.createElement('input', {
                onChange: function (_onChange3) {
                    function onChange(_x3) {
                        return _onChange3.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange3.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ alt: e.target.value });
                }),
                type: 'text',
                value: alt || '' })
        ) : null,
        hasImage ? React.createElement(
            'div',
            { className: 'paper-wasp-field', style: { display: 'flex', justifyContent: 'space-between' } },
            React.createElement(
                'label',
                { style: { flexBasis: '50%', marginRight: '10px' } },
                React.createElement(
                    'span',
                    null,
                    'Image Alignment'
                ),
                React.createElement(
                    'select',
                    { onChange: function (_onChange4) {
                            function onChange(_x4) {
                                return _onChange4.apply(this, arguments);
                            }

                            onChange.toString = function () {
                                return _onChange4.toString();
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
            ),
            React.createElement(
                'label',
                { style: { flexBasis: '50%' } },
                React.createElement(
                    'span',
                    null,
                    'Image Fit'
                ),
                React.createElement(
                    'select',
                    { onChange: function (_onChange5) {
                            function onChange(_x5) {
                                return _onChange5.apply(this, arguments);
                            }

                            onChange.toString = function () {
                                return _onChange5.toString();
                            };

                            return onChange;
                        }(function (e) {
                            return onChange({ fit: e.target.value });
                        }), value: fit || 'natural' },
                    React.createElement(
                        'option',
                        { value: 'natural' },
                        'Natural'
                    ),
                    React.createElement(
                        'option',
                        { value: 'cover' },
                        'Cover'
                    )
                )
            )
        ) : null,
        hasImage ? React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Link URL'
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
                    return onChange({ link: e.target.value });
                }),
                type: 'text',
                value: link || ''
            })
        ) : null,
        hasImage && !isUpload ? React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Caption'
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
                    return onChange({ caption: e.target.value });
                }),
                type: 'text',
                value: caption || '' })
        ) : null,
        hasCaption ? React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement('input', {
                checked: showCaption || false,
                onChange: function (_onChange8) {
                    function onChange(_x8) {
                        return _onChange8.apply(this, arguments);
                    }

                    onChange.toString = function () {
                        return _onChange8.toString();
                    };

                    return onChange;
                }(function (e) {
                    return onChange({ showCaption: Boolean(e.target.checked) });
                }),
                type: 'checkbox',
                value: 1 }),
            React.createElement(
                'span',
                null,
                'Show Caption?'
            )
        ) : null,
        hasImage && !isUpload ? React.createElement(
            'label',
            { className: 'paper-wasp-field' },
            React.createElement(
                'span',
                null,
                'Title'
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
                    return onChange({ title: e.target.value });
                }),
                type: 'text',
                value: title || '' })
        ) : null
    );
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var WordPressImageUpload = function (_Component) {
    _inherits(WordPressImageUpload, _Component);

    function WordPressImageUpload() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WordPressImageUpload);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WordPressImageUpload.__proto__ || Object.getPrototypeOf(WordPressImageUpload)).call.apply(_ref, [this].concat(args))), _this), _this.onAddImage = function () {
            _this.uploader.open();
        }, _this.onDeleteImage = function (e) {
            e.preventDefault();
            _this.unsetImage();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // eslint-disable-next-line react/sort-comp


    _createClass(WordPressImageUpload, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.uploader = window.wp.media({
                button: { text: 'Use Image' },
                library: { type: 'image' },
                multiple: false,
                title: 'Select an Image'
            });
            this.uploader.on('select', this.setImage.bind(this));
        }
    }, {
        key: 'setImage',
        value: function setImage() {
            this.props.onChange(this.uploader.state().get('selection').first().toJSON());
        }
    }, {
        key: 'unsetImage',
        value: function unsetImage() {
            this.props.onChange(null);
        }
    }, {
        key: 'renderThumbnail',
        value: function renderThumbnail() {
            var onDeleteImage = this.onDeleteImage,
                _props = this.props,
                alt = _props.alt,
                src = _props.src;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'thumbnail', style: { marginBottom: '1em' } },
                    React.createElement('img', { alt: alt, src: src })
                ),
                React.createElement(
                    'button',
                    { className: 'paper-wasp-button-secondary', onClick: onDeleteImage },
                    'Delete Image'
                )
            );
        }
    }, {
        key: 'renderButton',
        value: function renderButton() {
            var addImageText = this.props.addImageText;

            return React.createElement(
                'button',
                { className: 'paper-wasp-button-secondary', onClick: this.onAddImage, type: 'button' },
                addImageText
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                src = _props2.src;

            return React.createElement(
                'div',
                { className: ['paper-wasp-wp-image-upload', className].join(' ').trim() },
                src ? this.renderThumbnail() : this.renderButton()
            );
        }
    }]);

    return WordPressImageUpload;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

WordPressImageUpload.defaultProps = {
    addImageText: 'Add Image',
    className: ''
};


/* harmony default export */ __webpack_exports__["a"] = (WordPressImageUpload);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = React;

/***/ })
/******/ ]);
//# sourceMappingURL=component-editor.js.map