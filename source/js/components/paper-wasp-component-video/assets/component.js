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
    componentRegistry.setProperty('paper-wasp-video', 'class', __WEBPACK_IMPORTED_MODULE_0__container__["a" /* Video */]);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoConnect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_paper_wasp_action_creators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





// Custom prop type function so we don't have to import the whole 'prop-types' library
function isObject(props, propName) {
    var componentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ANONYMOUS';
    var location = arguments[3];
    var propFullName = arguments[4];

    if (props[propName]) {
        var propValue = props[propName];
        var preciseType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
        var expectedType = 'object';
        if (preciseType !== expectedType) {
            var msg = 'Invalid ' + location + ' \'' + propFullName + '\' of type \'' + preciseType + '\' supplied to \'' + componentName + '\', expected \'' + expectedType + '\'.';
            return new Error(msg);
        }
    }

    // assume all ok
    return null;
}

function getEmbedShortcode(url, width, height) {
    // Default width and height to WordPress defaults for video shortcode
    // See wp_video_shortcode() defaults in wp-includes/media.php
    return '[embed width="' + (width || 640) + '" height="' + (height || 360) + '"]' + url + '[/embed]';
}

function VideoConnect(props, _ref) {
    var _ref$store = _ref.store,
        dispatch = _ref$store.dispatch,
        getState = _ref$store.getState;

    var state = getState();
    var _state$container = state.container,
        ajaxUrl = _state$container.ajaxUrl,
        postId = _state$container.postId,
        context = state.context;

    return React.createElement(__WEBPACK_IMPORTED_MODULE_1__component__["a" /* default */], _extends({
        context: context,
        updateEmbed: function updateEmbed() {
            var uid = props.uid;

            var formData = new window.FormData();
            formData.append('action', 'parse-embed');
            formData.append('post_ID', postId);
            formData.append('shortcode', getEmbedShortcode.apply(undefined, arguments));
            formData.append('type', 'embed');

            fetch(ajaxUrl, {
                body: formData,
                credentials: 'same-origin',
                method: 'POST'
            }).then(function (response) {
                if (response.ok) {
                    response.json().then(function (json) {
                        if (json.success && json.data && json.data.body) {
                            dispatch(__WEBPACK_IMPORTED_MODULE_0_paper_wasp_action_creators__["a" /* updateComponentData */](uid, { embed: json.data.body }));
                        } else {
                            dispatch(__WEBPACK_IMPORTED_MODULE_0_paper_wasp_action_creators__["a" /* updateComponentData */](uid, { embed: '<p style="color: red;">ERROR: Video Not Embeddable - Double Click to Edit</p>' }));
                        }
                    });
                }
            });
        }
    }, props));
}

VideoConnect.contextTypes = {
    store: isObject
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context__ = __webpack_require__(5);
/* unused harmony namespace reexport */



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_COMPONENT */
/* unused harmony export DELETE_COMPONENT */
/* unused harmony export INSERT_COMPONENTS */
/* unused harmony export MOVE_COMPONENT */
/* unused harmony export REORDER_COMPONENTS */
/* unused harmony export UPDATE_COMPONENT */
/* unused harmony export UPDATE_COMPONENT_DATA */
/* unused harmony export addComponent */
/* unused harmony export deleteComponent */
/* unused harmony export insertComponents */
/* unused harmony export moveComponent */
/* unused harmony export reorderComponents */
/* unused harmony export updateComponent */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateComponentData;


var ADD_COMPONENT = 'ADD_COMPONENT';

var DELETE_COMPONENT = 'DELETE_COMPONENT';
var INSERT_COMPONENTS = 'INSERT_COMPONENTS';
var MOVE_COMPONENT = 'MOVE_COMPONENT';
var REORDER_COMPONENTS = 'REORDER_COMPONENTS';
var UPDATE_COMPONENT = 'UPDATE_COMPONENT';
var UPDATE_COMPONENT_DATA = 'UPDATE_COMPONENT_DATA';

/**
 * Action creator function
 * Add a new component
 *
 * @param component {Component}
 * @returns {Object}
 */
function addComponent(component) {
    return Object.assign({}, component, { componentType: component.type, type: ADD_COMPONENT });
}

/**
 * Action creator function
 * Delete a component
 *
 * @param uid {int}
 * @returns {{uid: number, type: string}}
 */
function deleteComponent(uid) {
    return { type: DELETE_COMPONENT, uid: uid };
}

/**
 * Action creator function
 * Insert multiple components
 *
 * @param components {ComponentCollection}
 * @returns {{components: ComponentCollection, type: string}}
 */
function insertComponents(components) {
    return { components: components, type: INSERT_COMPONENTS };
}

/**
 * Action creator function
 * Move a component from one parent to another.
 *
 * @param uid {int}
 * @param parent {int}
 * @returns {{uid: number, parent: number, type: string}}
 */
function moveComponent(uid, parent) {
    return { parent: parent, type: MOVE_COMPONENT, uid: uid };
}

/**
 * Action creator function
 * Reorder components
 *
 * @param orderedIds {int[]}
 * @returns {{orderedIds: Array.<number>, type: string}}
 */
function reorderComponents(orderedIds) {
    return { orderedIds: orderedIds, type: REORDER_COMPONENTS };
}

/**
 * Action creator function
 * Update a component's top-level properties
 *
 * @param uid {int}
 * @param component {Component}
 * @returns {Object}
 */
function updateComponent(uid, component) {
    var action = Object.assign({}, component, { type: UPDATE_COMPONENT, uid: uid });
    if (component.type) {
        action.componentType = component.type;
    }
    return action;
}

/**
 * Action creator function
 * Update a component's data object
 *
 * @param uid {int}
 * @param data {Object}
 * @returns {{data: Object, uid: number, type: string}}
 */
function updateComponentData(uid, data) {
    return { data: data, type: UPDATE_COMPONENT_DATA, uid: uid };
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_EDIT_CONTEXT */
/* unused harmony export SET_VIEW_CONTEXT */
/* unused harmony export setEditContext */
/* unused harmony export setViewContext */

/* eslint-disable sorting/sort-object-props */

var SET_EDIT_CONTEXT = 'SET_EDIT_CONTEXT';
var SET_VIEW_CONTEXT = 'SET_VIEW_CONTEXT';

/**
 * Action creator
 * Sets the context to edit mode.
 *
 * @returns {{type: string}}
 */
function setEditContext() {
  return { type: SET_EDIT_CONTEXT };
}

/**
 * Action creator
 * Sets the context to view mode.
 *
 * @returns {{type: string}}
 */
function setViewContext() {
  return { type: SET_VIEW_CONTEXT };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Video = function (_Component) {
    _inherits(Video, _Component);

    function Video() {
        _classCallCheck(this, Video);

        return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
    }

    _createClass(Video, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                _props$data = _props.data,
                embed = _props$data.embed,
                _props$data$height = _props$data.height,
                height = _props$data$height === undefined ? 0 : _props$data$height,
                _props$data$width = _props$data.width,
                width = _props$data$width === undefined ? 0 : _props$data$width,
                url = _props$data.url,
                updateEmbed = _props.updateEmbed;

            if (url && url.length && !embed) {
                updateEmbed(url, width, height);
            }
        }

        // eslint-disable-next-line react/sort-comp

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _prevProps$data = prevProps.data;
            _prevProps$data = _prevProps$data === undefined ? {} : _prevProps$data;
            var _prevProps$data$heigh = _prevProps$data.height,
                prevHeight = _prevProps$data$heigh === undefined ? 0 : _prevProps$data$heigh,
                _prevProps$data$width = _prevProps$data.width,
                prevWidth = _prevProps$data$width === undefined ? 0 : _prevProps$data$width,
                prevUrl = _prevProps$data.url;
            var _props2 = this.props,
                _props2$data = _props2.data,
                _props2$data$height = _props2$data.height,
                height = _props2$data$height === undefined ? 0 : _props2$data$height,
                _props2$data$width = _props2$data.width,
                width = _props2$data$width === undefined ? 0 : _props2$data$width,
                url = _props2$data.url,
                updateEmbed = _props2.updateEmbed;

            if (prevUrl !== url || prevHeight !== height || prevWidth !== width) {
                updateEmbed(url, width, height);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                className = _props3.className,
                context = _props3.context,
                data = _props3.data,
                id = _props3.id;
            var _data$align = data.align,
                align = _data$align === undefined ? 'left' : _data$align,
                embed = data.embed,
                _data$height = data.height,
                height = _data$height === undefined ? 0 : _data$height,
                _data$isResponsive = data.isResponsive,
                isResponsive = _data$isResponsive === undefined ? true : _data$isResponsive,
                _data$width = data.width,
                width = _data$width === undefined ? 0 : _data$width,
                url = data.url;

            var classes = ['paper-wasp-video', className];
            if (isResponsive) {
                classes.push('paper-wasp-video--responsive');
            } else {
                classes.push('paper-wasp-video--' + align);
            }
            return React.createElement(
                'div',
                { className: classes.join(' ').trim(), id: id },
                context === 'view' ? getVideoShortcode(url, width, height) : React.createElement('div', { dangerouslySetInnerHTML: { __html: embed } })
            );
        }
    }]);

    return Video;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function getVideoShortcode(url, width, height) {
    var widthAttr = width ? ' width="' + width + '"' : '';
    var heightAttr = height ? ' height="' + height + '"' : '';
    return '[video src="' + url + '"' + widthAttr + heightAttr + ' /]';
}

/* harmony default export */ __webpack_exports__["a"] = (Video);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = React;

/***/ })
/******/ ]);
//# sourceMappingURL=component.js.map