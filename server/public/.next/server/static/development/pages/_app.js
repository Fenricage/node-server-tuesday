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

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!*********************************************************************************!*\
  !*** /usr/src/app/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!******************************************************************************************!*\
  !*** /usr/src/app/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*******************************************************************************!*\
  !*** /usr/src/app/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!***************************************************************************!*\
  !*** /usr/src/app/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!************************************************************************************!*\
  !*** /usr/src/app/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*******************************************************************************!*\
  !*** /usr/src/app/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!***************************************************************************!*\
  !*** /usr/src/app/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*****************************************************************************************!*\
  !*** /usr/src/app/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/next/app.js":
/*!*********************************************!*\
  !*** /usr/src/app/node_modules/next/app.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
/*!********************************************************************!*\
  !*** /usr/src/app/node_modules/next/dist/next-server/lib/utils.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../../node_modules/next/dist/pages/_app.js":
/*!*********************************************************!*\
  !*** /usr/src/app/node_modules/next/dist/pages/_app.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "../../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_store_configureStore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_css_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/css/app.scss */ "./shared/css/app.scss");
/* harmony import */ var _shared_css_app_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shared_css_app_scss__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/usr/src/app/server/public/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_store_configureStore__WEBPACK_IMPORTED_MODULE_6__["configureStore"], {
  serializeState: state => state.toJS(),
  deserializeState: state => Object(immutable__WEBPACK_IMPORTED_MODULE_5__["fromJS"])(state)
})(MyApp));

/***/ }),

/***/ "./reducers/article.js":
/*!*****************************!*\
  !*** ./reducers/article.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/article */ "./shared/constants/article.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  data: {},
  error: null,
  isLoaded: false,
  isCreating: false,
  isPatching: false
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_INIT"]:
      return initialState;

    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_FETCH_SUCCESS"]:
      return state.merge({
        data: action.payload,
        isLoaded: true
      });

    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_FETCH_FAILURE"]:
      return state.merge({
        error: action.payload,
        isLoaded: true
      });

    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CREATE_FETCH"]:
      return state.set('isCreating', true);

    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CREATE_FETCH_SUCCESS"]:
      return state.set('isCreating', false);

    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CREATE_FETCH_FAILURE"]:
      return state.set('isCreating', false);

    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_PATCH_FETCH"]:
      return state.set('isPatching', true);

    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_PATCH_FETCH_SUCCESS"]:
      return state.set('isPatching', false);

    case _shared_constants_article__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_PATCH_FETCH_FAILURE"]:
      return state.set('isPatching', false);

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/articleCategories.js":
/*!***************************************!*\
  !*** ./reducers/articleCategories.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_articleCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/articleCategories */ "./shared/constants/articleCategories.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  data: [],
  error: null,
  isDeleting: [],
  isLoaded: false
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _shared_constants_articleCategories__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORIES_GET_ALL_FETCH"]:
      return initialState;

    case _shared_constants_articleCategories__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORIES_GET_ALL_SUCCESS"]:
      return state.merge({
        data: action.payload,
        isLoaded: true
      });

    case _shared_constants_articleCategories__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORIES_GET_ALL_FAILURE"]:
      return state.merge({
        error: action.payload,
        isLoaded: true
      });

    case _shared_constants_articleCategories__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORIES_DELETE_ARTICLE"]:
      return state.set('isDeleting', action.payload);

    case _shared_constants_articleCategories__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS"]:
      return state.merge({
        isDeleting: action.payload.isDeleting,
        data: action.payload.updatedArticleCategories
      });

    case _shared_constants_articleCategories__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE"]:
      return state.merge({
        error: action.payload.e,
        isDeleting: action.payload.isDeleting
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/articleCategory.js":
/*!*************************************!*\
  !*** ./reducers/articleCategory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/articleCategory */ "./shared/constants/articleCategory.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  data: {},
  error: null,
  isLoaded: false,
  isCreating: false,
  isPatching: false
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_INIT"]:
      return initialState;

    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_FETCH_SUCCESS"]:
      return state.merge({
        data: action.payload,
        isLoaded: true
      });

    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_FETCH_FAILURE"]:
      return state.merge({
        error: action.payload,
        isLoaded: true
      });

    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_CREATE_FETCH"]:
      return state.set('isCreating', true);

    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS"]:
      return state.set('isCreating', false);

    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_CREATE_FETCH_FAILURE"]:
      return state.set('isCreating', false);

    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_PATCH_FETCH"]:
      return state.set('isPatching', true);

    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS"]:
      return state.set('isPatching', false);

    case _shared_constants_articleCategory__WEBPACK_IMPORTED_MODULE_1__["ARTICLE_CATEGORY_PATCH_FETCH_FAILURE"]:
      return state.set('isPatching', false);

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/articles.js":
/*!******************************!*\
  !*** ./reducers/articles.js ***!
  \******************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/articles */ "./shared/constants/articles.js");

 // fromJS преобразует весь нижний обхект в immutable объекты
// массивы в List
// объекты в Map

const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  data: {},
  error: null,
  isDeleting: [],
  isLoaded: false
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _shared_constants_articles__WEBPACK_IMPORTED_MODULE_1__["ARTICLES_FETCH"]:
      return state.set('isLoaded', false);

    case _shared_constants_articles__WEBPACK_IMPORTED_MODULE_1__["ARTICLES_FETCH_SUCCESS"]:
      return state.merge({
        data: action.payload,
        isLoaded: true
      });

    case _shared_constants_articles__WEBPACK_IMPORTED_MODULE_1__["ARTICLES_FETCH_FAILURE"]:
      return state.merge({
        error: action.payload,
        isLoaded: true
      });

    case _shared_constants_articles__WEBPACK_IMPORTED_MODULE_1__["ARTICLES_DELETE_ARTICLE"]:
      return state.set('isDeleting', action.payload);

    case _shared_constants_articles__WEBPACK_IMPORTED_MODULE_1__["ARTICLES_DELETE_ARTICLE_SUCCESS"]:
      return state.set('isDeleting', action.payload.isDeleting).setIn(['data', 'records'], action.payload.updatedArticles);

    case _shared_constants_articles__WEBPACK_IMPORTED_MODULE_1__["ARTICLES_DELETE_ARTICLE_FAILURE"]:
      return state.merge({
        error: action.payload.e,
        isDeleting: action.payload.isDeleting
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/auth */ "./shared/constants/auth.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  isRegistrering: false,
  isRegistred: false,
  statusAuth: {
    statusText: '',
    statusType: ''
  },
  currentUserInfo: null
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["SET_AUTH_LOADING_STATUS"]:
      return state.setIn(['isAuthenticating'], action.payload);

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["SET_REGISTER_LOADING_STATUS"]:
      return state.setIn(['isRegistrering'], action.payload);

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["SET_STATUS_TEXT"]:
      return state.setIn(['statusAuth'], action.payload);

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["SET_TOKEN"]:
      return state.setIn(['token'], action.payload);

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGIN_USER_SUCCESS"]:
      return state.merge({
        token: action.payload,
        isAuthenticated: true,
        isAuthenticating: false,
        statusAuth: new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
          statusText: '',
          statusType: ''
        })
      });

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["AUTH_LOGIN_USER_FAILURE"]:
      return state.merge({
        token: null,
        isAuthenticated: false,
        isAuthenticating: false,
        statusAuth: new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
          statusText: action.payload.text,
          statusType: action.payload.status
        })
      });

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["REGISTER_USER_SUCCESS"]:
      return state.merge({
        isRegistrering: false,
        statusAuth: new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
          statusText: 'Register is success',
          statusType: 'success'
        })
      });

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["CHECK_AUTH_SUCCESS"]:
      return state.setIn(['isAuthenticated'], true);

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["CHECK_AUTH_FAILURE"]:
      return state.merge({
        token: null,
        isAuthenticated: false
      });

    case _shared_constants_auth__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
      return state.merge({
        token: null,
        isAuthenticated: false,
        currentUserInfo: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./reducers/auth.js");
/* harmony import */ var _articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles */ "./reducers/articles.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article */ "./reducers/article.js");
/* harmony import */ var _articleCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articleCategories */ "./reducers/articleCategories.js");
/* harmony import */ var _articleCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articleCategory */ "./reducers/articleCategory.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users */ "./reducers/users.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tags */ "./reducers/tags.js");
/* harmony import */ var redux_form_immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-form/immutable */ "redux-form/immutable");
/* harmony import */ var redux_form_immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_form_immutable__WEBPACK_IMPORTED_MODULE_8__);









const rootReducer = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  articles: _articles__WEBPACK_IMPORTED_MODULE_2__["default"],
  article: _article__WEBPACK_IMPORTED_MODULE_3__["default"],
  articleCategories: _articleCategories__WEBPACK_IMPORTED_MODULE_4__["default"],
  articleCategory: _articleCategory__WEBPACK_IMPORTED_MODULE_5__["default"],
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"],
  tags: _tags__WEBPACK_IMPORTED_MODULE_7__["default"],
  form: redux_form_immutable__WEBPACK_IMPORTED_MODULE_8__["reducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/tags.js":
/*!**************************!*\
  !*** ./reducers/tags.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/tags */ "./shared/constants/tags.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  data: {},
  error: null,
  isLoaded: false,
  isCreating: false,
  isPatching: false,
  isDeleting: []
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_INIT"]:
      return initialState;

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_FETCH_SUCCESS"]:
      return state.merge({
        data: action.payload,
        isLoaded: true
      });

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_FETCH_FAILURE"]:
      return state.merge({
        error: action.payload,
        isLoaded: true
      });

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_CREATE_FETCH"]:
      return state.set('isCreating', true);

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_CREATE_FETCH_SUCCESS"]:
      return state.set('isCreating', false);
    //  TODO передать объект ошибки и засетить

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_CREATE_FETCH_FAILURE"]:
      return state.set('isCreating', false);

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_PATCH_FETCH"]:
      return state.set('isPatching', true);

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_PATCH_FETCH_SUCCESS"]:
      return state.set('isPatching', false);

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_PATCH_FETCH_FAILURE"]:
      return state.set('isPatching', false);

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_DELETE_TAG"]:
      return state.set('isDeleting', action.payload);

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_DELETE_TAG_SUCCESS"]:
      return state.set('isDeleting', action.payload);

    case _shared_constants_tags__WEBPACK_IMPORTED_MODULE_1__["TAGS_DELETE_TAG_FAILURE"]:
      return state.set('isDeleting', action.payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/users.js":
/*!***************************!*\
  !*** ./reducers/users.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/users */ "./shared/constants/users.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  data: [],
  error: null,
  isDeleting: [],
  isLoaded: false
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _shared_constants_users__WEBPACK_IMPORTED_MODULE_1__["USERS_INIT"]:
      return initialState;

    case _shared_constants_users__WEBPACK_IMPORTED_MODULE_1__["USERS_FETCH_SUCCESS"]:
      return state.merge({
        data: action.payload,
        isLoaded: true
      });

    case _shared_constants_users__WEBPACK_IMPORTED_MODULE_1__["USERS_FETCH_FAILURE"]:
      return state.merge({
        error: action.payload,
        isLoaded: true
      });

    case _shared_constants_users__WEBPACK_IMPORTED_MODULE_1__["USERS_DELETE_USER"]:
      return state.set('isDeleting', action.payload);

    case _shared_constants_users__WEBPACK_IMPORTED_MODULE_1__["USERS_DELETE_USER_SUCCESS"]:
      return state.merge({
        isDeleting: action.payload.isDeleting,
        data: action.payload.updatedUsers
      });

    case _shared_constants_users__WEBPACK_IMPORTED_MODULE_1__["USERS_DELETE_USER_FAILURE"]:
      return state.merge({
        error: action.payload.e,
        isDeleting: action.payload.isDeleting
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./shared/constants/article.js":
/*!*************************************!*\
  !*** ./shared/constants/article.js ***!
  \*************************************/
/*! exports provided: ARTICLE_INIT, ARTICLE_FETCH_SUCCESS, ARTICLE_FETCH_FAILURE, ARTICLE_CREATE_FETCH_FAILURE, ARTICLE_CREATE_FETCH_SUCCESS, ARTICLE_CREATE_FETCH, ARTICLE_PATCH_FETCH_FAILURE, ARTICLE_PATCH_FETCH_SUCCESS, ARTICLE_PATCH_FETCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_INIT", function() { return ARTICLE_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_FETCH_SUCCESS", function() { return ARTICLE_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_FETCH_FAILURE", function() { return ARTICLE_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CREATE_FETCH_FAILURE", function() { return ARTICLE_CREATE_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CREATE_FETCH_SUCCESS", function() { return ARTICLE_CREATE_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CREATE_FETCH", function() { return ARTICLE_CREATE_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_PATCH_FETCH_FAILURE", function() { return ARTICLE_PATCH_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_PATCH_FETCH_SUCCESS", function() { return ARTICLE_PATCH_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_PATCH_FETCH", function() { return ARTICLE_PATCH_FETCH; });
const ARTICLE_INIT = 'ARTICLE_INIT';
const ARTICLE_FETCH_SUCCESS = 'ARTICLE_FETCH_SUCCESS';
const ARTICLE_FETCH_FAILURE = 'ARTICLE_FETCH_FAILURE';
const ARTICLE_CREATE_FETCH_FAILURE = 'ARTICLE_CREATE_FETCH_FAILURE';
const ARTICLE_CREATE_FETCH_SUCCESS = 'ARTICLE_CREATE_FETCH_SUCCESS';
const ARTICLE_CREATE_FETCH = 'ARTICLE_CREATE_FETCH';
const ARTICLE_PATCH_FETCH_FAILURE = 'ARTICLE_PATCH_FETCH_FAILURE';
const ARTICLE_PATCH_FETCH_SUCCESS = 'ARTICLE_PATCH_FETCH_SUCCESS';
const ARTICLE_PATCH_FETCH = 'ARTICLE_PATCH_FETCH';

/***/ }),

/***/ "./shared/constants/articleCategories.js":
/*!***********************************************!*\
  !*** ./shared/constants/articleCategories.js ***!
  \***********************************************/
/*! exports provided: ARTICLE_CATEGORIES_GET_ALL_FETCH, ARTICLE_CATEGORIES_GET_ALL_SUCCESS, ARTICLE_CATEGORIES_GET_ALL_FAILURE, ARTICLE_CATEGORIES_DELETE_ARTICLE, ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS, ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORIES_GET_ALL_FETCH", function() { return ARTICLE_CATEGORIES_GET_ALL_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORIES_GET_ALL_SUCCESS", function() { return ARTICLE_CATEGORIES_GET_ALL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORIES_GET_ALL_FAILURE", function() { return ARTICLE_CATEGORIES_GET_ALL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORIES_DELETE_ARTICLE", function() { return ARTICLE_CATEGORIES_DELETE_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS", function() { return ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE", function() { return ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE; });
const ARTICLE_CATEGORIES_GET_ALL_FETCH = 'ARTICLE_CATEGORIES_GET_ALL_FETCH';
const ARTICLE_CATEGORIES_GET_ALL_SUCCESS = 'ARTICLE_CATEGORIES_GET_ALL_SUCCESS';
const ARTICLE_CATEGORIES_GET_ALL_FAILURE = 'ARTICLE_CATEGORIES_GET_ALL_FAILURE';
const ARTICLE_CATEGORIES_DELETE_ARTICLE = 'ARTICLE_CATEGORIES_DELETE_ARTICLE';
const ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS = 'ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS';
const ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE = 'ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE';

/***/ }),

/***/ "./shared/constants/articleCategory.js":
/*!*********************************************!*\
  !*** ./shared/constants/articleCategory.js ***!
  \*********************************************/
/*! exports provided: ARTICLE_CATEGORY_INIT, ARTICLE_CATEGORY_FETCH_SUCCESS, ARTICLE_CATEGORY_FETCH_FAILURE, ARTICLE_CATEGORY_CREATE_FETCH_FAILURE, ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS, ARTICLE_CATEGORY_CREATE_FETCH, ARTICLE_CATEGORY_PATCH_FETCH_FAILURE, ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS, ARTICLE_CATEGORY_PATCH_FETCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_INIT", function() { return ARTICLE_CATEGORY_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_FETCH_SUCCESS", function() { return ARTICLE_CATEGORY_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_FETCH_FAILURE", function() { return ARTICLE_CATEGORY_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_CREATE_FETCH_FAILURE", function() { return ARTICLE_CATEGORY_CREATE_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS", function() { return ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_CREATE_FETCH", function() { return ARTICLE_CATEGORY_CREATE_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_PATCH_FETCH_FAILURE", function() { return ARTICLE_CATEGORY_PATCH_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS", function() { return ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_CATEGORY_PATCH_FETCH", function() { return ARTICLE_CATEGORY_PATCH_FETCH; });
const ARTICLE_CATEGORY_INIT = 'ARTICLE_CATEGORY_INIT';
const ARTICLE_CATEGORY_FETCH_SUCCESS = 'ARTICLE_CATEGORY_FETCH_SUCCESS';
const ARTICLE_CATEGORY_FETCH_FAILURE = 'ARTICLE_CATEGORY_FETCH_FAILURE';
const ARTICLE_CATEGORY_CREATE_FETCH_FAILURE = 'ARTICLE_CATEGORY_CREATE_FETCH_FAILURE';
const ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS = 'ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS';
const ARTICLE_CATEGORY_CREATE_FETCH = 'ARTICLE_CATEGORY_CREATE_FETCH';
const ARTICLE_CATEGORY_PATCH_FETCH_FAILURE = 'ARTICLE_CATEGORY_PATCH_FETCH_FAILURE';
const ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS = 'ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS';
const ARTICLE_CATEGORY_PATCH_FETCH = 'ARTICLE_CATEGORY_PATCH_FETCH';

/***/ }),

/***/ "./shared/constants/articles.js":
/*!**************************************!*\
  !*** ./shared/constants/articles.js ***!
  \**************************************/
/*! exports provided: ARTICLES_FETCH, ARTICLES_FETCH_SUCCESS, ARTICLES_FETCH_FAILURE, ARTICLES_DELETE_ARTICLE, ARTICLES_DELETE_ARTICLE_SUCCESS, ARTICLES_DELETE_ARTICLE_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES_FETCH", function() { return ARTICLES_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES_FETCH_SUCCESS", function() { return ARTICLES_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES_FETCH_FAILURE", function() { return ARTICLES_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES_DELETE_ARTICLE", function() { return ARTICLES_DELETE_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES_DELETE_ARTICLE_SUCCESS", function() { return ARTICLES_DELETE_ARTICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES_DELETE_ARTICLE_FAILURE", function() { return ARTICLES_DELETE_ARTICLE_FAILURE; });
const ARTICLES_FETCH = 'ARTICLES_FETCH';
const ARTICLES_FETCH_SUCCESS = 'ARTICLES_FETCH_SUCCESS';
const ARTICLES_FETCH_FAILURE = 'ARTICLES_FETCH_FAILURE';
const ARTICLES_DELETE_ARTICLE = 'ARTICLES_DELETE_ARTICLE';
const ARTICLES_DELETE_ARTICLE_SUCCESS = 'ARTICLES_DELETE_ARTICLE_SUCCESS';
const ARTICLES_DELETE_ARTICLE_FAILURE = 'ARTICLES_DELETE_ARTICLE_FAILURE';

/***/ }),

/***/ "./shared/constants/auth.js":
/*!**********************************!*\
  !*** ./shared/constants/auth.js ***!
  \**********************************/
/*! exports provided: SET_AUTH_LOADING_STATUS, SET_REGISTER_LOADING_STATUS, SET_STATUS_TEXT, SET_TOKEN, AUTH_LOGIN_USER_SUCCESS, AUTH_LOGIN_USER_FAILURE, REGISTER_USER_SUCCESS, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE, LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH_LOADING_STATUS", function() { return SET_AUTH_LOADING_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REGISTER_LOADING_STATUS", function() { return SET_REGISTER_LOADING_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STATUS_TEXT", function() { return SET_STATUS_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN_USER_SUCCESS", function() { return AUTH_LOGIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN_USER_FAILURE", function() { return AUTH_LOGIN_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_SUCCESS", function() { return REGISTER_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AUTH_SUCCESS", function() { return CHECK_AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AUTH_FAILURE", function() { return CHECK_AUTH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
const SET_AUTH_LOADING_STATUS = "SET_AUTH_LOADING_STATUS";
const SET_REGISTER_LOADING_STATUS = "SET_AUTH_REGISTER_STATUS";
const SET_STATUS_TEXT = "SET_STATUS_TEXT";
const SET_TOKEN = "SET_TOKEN";
const AUTH_LOGIN_USER_SUCCESS = "AUTH_LOGIN_USER_SUCCESS";
const AUTH_LOGIN_USER_FAILURE = "AUTH_LOGIN_USER_FAILURE";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const CHECK_AUTH_SUCCESS = "CHECK_AUTH_SUCCESS";
const CHECK_AUTH_FAILURE = "CHECK_AUTH_FAILURE";
const LOGOUT = "LOGOUT";

/***/ }),

/***/ "./shared/constants/tags.js":
/*!**********************************!*\
  !*** ./shared/constants/tags.js ***!
  \**********************************/
/*! exports provided: TAGS_INIT, TAGS_FETCH_SUCCESS, TAGS_FETCH_FAILURE, TAGS_DELETE_TAG, TAGS_DELETE_TAG_SUCCESS, TAGS_DELETE_TAG_FAILURE, TAGS_CREATE_FETCH_FAILURE, TAGS_CREATE_FETCH_SUCCESS, TAGS_CREATE_FETCH, TAGS_PATCH_FETCH_FAILURE, TAGS_PATCH_FETCH_SUCCESS, TAGS_PATCH_FETCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_INIT", function() { return TAGS_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_FETCH_SUCCESS", function() { return TAGS_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_FETCH_FAILURE", function() { return TAGS_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_DELETE_TAG", function() { return TAGS_DELETE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_DELETE_TAG_SUCCESS", function() { return TAGS_DELETE_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_DELETE_TAG_FAILURE", function() { return TAGS_DELETE_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_CREATE_FETCH_FAILURE", function() { return TAGS_CREATE_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_CREATE_FETCH_SUCCESS", function() { return TAGS_CREATE_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_CREATE_FETCH", function() { return TAGS_CREATE_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_PATCH_FETCH_FAILURE", function() { return TAGS_PATCH_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_PATCH_FETCH_SUCCESS", function() { return TAGS_PATCH_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_PATCH_FETCH", function() { return TAGS_PATCH_FETCH; });
const TAGS_INIT = 'TAGS_INIT';
const TAGS_FETCH_SUCCESS = 'TAGS_FETCH_SUCCESS';
const TAGS_FETCH_FAILURE = 'TAGS_FETCH_FAILURE';
const TAGS_DELETE_TAG = 'TAGS_DELETE_TAG';
const TAGS_DELETE_TAG_SUCCESS = 'TAGS_DELETE_TAG_SUCCESS';
const TAGS_DELETE_TAG_FAILURE = 'TAGS_DELETE_TAG_FAILURE';
const TAGS_CREATE_FETCH_FAILURE = 'TAGS_CREATE_FETCH_FAILURE';
const TAGS_CREATE_FETCH_SUCCESS = 'TAGS_CREATE_FETCH_SUCCESS';
const TAGS_CREATE_FETCH = 'TAGS_CREATE_FETCH';
const TAGS_PATCH_FETCH_FAILURE = 'TAGS_PATCH_FETCH_FAILURE';
const TAGS_PATCH_FETCH_SUCCESS = 'TAGS_PATCH_FETCH_SUCCESS';
const TAGS_PATCH_FETCH = 'TAGS_PATCH_FETCH';

/***/ }),

/***/ "./shared/constants/users.js":
/*!***********************************!*\
  !*** ./shared/constants/users.js ***!
  \***********************************/
/*! exports provided: USERS_INIT, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE, USERS_DELETE_USER, USERS_DELETE_USER_SUCCESS, USERS_DELETE_USER_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_INIT", function() { return USERS_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_FETCH_SUCCESS", function() { return USERS_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_FETCH_FAILURE", function() { return USERS_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_DELETE_USER", function() { return USERS_DELETE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_DELETE_USER_SUCCESS", function() { return USERS_DELETE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_DELETE_USER_FAILURE", function() { return USERS_DELETE_USER_FAILURE; });
const USERS_INIT = 'USERS_INIT';
const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE';
const USERS_DELETE_USER = 'USERS_DELETE_USER';
const USERS_DELETE_USER_SUCCESS = 'USERS_DELETE_USER_SUCCESS';
const USERS_DELETE_USER_FAILURE = 'USERS_DELETE_USER_FAILURE';

/***/ }),

/***/ "./shared/css/app.scss":
/*!*****************************!*\
  !*** ./shared/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/configureStore.dev.js":
/*!*************************************!*\
  !*** ./store/configureStore.dev.js ***!
  \*************************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");






const defaultInitialState = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])({});
const configureStore = (initialState = defaultInitialState) => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a))); // import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '../reducers';
//
// export default function configureStore(initialState, history) {
//   const store = createStore(
//     rootReducer(history),
//     initialState,
//     composeWithDevTools(applyMiddleware(
//       thunk,
//       routerMiddleware(history),
//     )),
//   );
//   return store;
// }

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./configureStore.dev */ "./store/configureStore.dev.js"); // eslint-disable-line global-require
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-form/immutable":
/*!***************************************!*\
  !*** external "redux-form/immutable" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),

/***/ "redux-immutable":
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map