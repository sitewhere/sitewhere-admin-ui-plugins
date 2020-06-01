module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01a6":
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ "0234":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushParams = pushParams;
exports.popParams = popParams;
exports.withParams = withParams;
exports._setTarget = exports.target = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var stack = [];
var target = null;
exports.target = target;

var _setTarget = function _setTarget(x) {
  exports.target = target = x;
};

exports._setTarget = _setTarget;

function pushParams() {
  if (target !== null) {
    stack.push(target);
  }

  exports.target = target = {};
}

function popParams() {
  var lastTarget = target;
  var newTarget = exports.target = target = stack.pop() || null;

  if (newTarget) {
    if (!Array.isArray(newTarget.$sub)) {
      newTarget.$sub = [];
    }

    newTarget.$sub.push(lastTarget);
  }

  return lastTarget;
}

function addParams(params) {
  if (_typeof(params) === 'object' && !Array.isArray(params)) {
    exports.target = target = _objectSpread({}, target, {}, params);
  } else {
    throw new Error('params must be an object');
  }
}

function withParamsDirect(params, validator) {
  return withParamsClosure(function (add) {
    return function () {
      add(params);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return validator.apply(this, args);
    };
  });
}

function withParamsClosure(closure) {
  var validator = closure(addParams);
  return function () {
    pushParams();

    try {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return validator.apply(this, args);
    } finally {
      popParams();
    }
  };
}

function withParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return withParamsDirect(paramsOrClosure, maybeValidator);
  }

  return withParamsClosure(paramsOrClosure);
}

/***/ }),

/***/ "1331":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = (0, _common.regex)('integer', /(^[0-9]*$)|(^-[0-9]+$)/);

exports.default = _default;

/***/ }),

/***/ "216b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fea4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4235c6ce", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2a12":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports.default = _default;

/***/ }),

/***/ "3360":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports.default = _default;

/***/ }),

/***/ "3a54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports.default = _default;

/***/ }),

/***/ "3de8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".padded-message[data-v-ff1f015a]{padding:50px;text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3fda":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".padded-message[data-v-078e8cd9]{padding:50px;padding-top:35px;text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "403e":
/***/ (function(module, exports) {

module.exports = require("sitewhere-ide-common");

/***/ }),

/***/ "45b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports.default = _default;

/***/ }),

/***/ "46bc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports.default = _default;

/***/ }),

/***/ "4875":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib");

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4b4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConfiguration_vue_vue_type_style_index_0_id_078e8cd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("530b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConfiguration_vue_vue_type_style_index_0_id_078e8cd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConfiguration_vue_vue_type_style_index_0_id_078e8cd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConfiguration_vue_vue_type_style_index_0_id_078e8cd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "530b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3fda");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4bd351bc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5d75":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

var _default = (0, _common.regex)('email', emailRegex);

exports.default = _default;

/***/ }),

/***/ "5db3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports.default = _default;

/***/ }),

/***/ "6235":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports.default = _default;

/***/ }),

/***/ "6417":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports.default = _default;

/***/ }),

/***/ "772d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports.default = _default;

/***/ }),

/***/ "78ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withParams", {
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
});
exports.regex = exports.ref = exports.len = exports.req = void 0;

var _withParams = _interopRequireDefault(__webpack_require__("8750"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "8750":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var withParams = Object({"NODE_ENV":"production","BASE_URL":"/"}).BUILD === 'web' ? __webpack_require__("cb69").withParams : __webpack_require__("0234").withParams;
var _default = withParams;
exports.default = _default;

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9092":
/***/ (function(module, exports) {

module.exports = require("sitewhere-ide-components");

/***/ }),

/***/ "91d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports.default = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "aa82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports.default = _default;

/***/ }),

/***/ "ae2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConfiguration_vue_vue_type_style_index_0_id_ff1f015a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b34f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConfiguration_vue_vue_type_style_index_0_id_ff1f015a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConfiguration_vue_vue_type_style_index_0_id_ff1f015a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConfiguration_vue_vue_type_style_index_0_id_ff1f015a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b34f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3de8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("491339f7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b5ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alpha", {
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
});
Object.defineProperty(exports, "alphaNum", {
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
});
Object.defineProperty(exports, "numeric", {
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
});
Object.defineProperty(exports, "between", {
  enumerable: true,
  get: function get() {
    return _between.default;
  }
});
Object.defineProperty(exports, "email", {
  enumerable: true,
  get: function get() {
    return _email.default;
  }
});
Object.defineProperty(exports, "ipAddress", {
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
});
Object.defineProperty(exports, "macAddress", {
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
});
Object.defineProperty(exports, "maxLength", {
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
});
Object.defineProperty(exports, "minLength", {
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
});
Object.defineProperty(exports, "required", {
  enumerable: true,
  get: function get() {
    return _required.default;
  }
});
Object.defineProperty(exports, "requiredIf", {
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
});
Object.defineProperty(exports, "requiredUnless", {
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
});
Object.defineProperty(exports, "sameAs", {
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
});
Object.defineProperty(exports, "url", {
  enumerable: true,
  get: function get() {
    return _url.default;
  }
});
Object.defineProperty(exports, "or", {
  enumerable: true,
  get: function get() {
    return _or.default;
  }
});
Object.defineProperty(exports, "and", {
  enumerable: true,
  get: function get() {
    return _and.default;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function get() {
    return _not.default;
  }
});
Object.defineProperty(exports, "minValue", {
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
});
Object.defineProperty(exports, "maxValue", {
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
});
Object.defineProperty(exports, "integer", {
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
});
Object.defineProperty(exports, "decimal", {
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
});
exports.helpers = void 0;

var _alpha = _interopRequireDefault(__webpack_require__("6235"));

var _alphaNum = _interopRequireDefault(__webpack_require__("3a54"));

var _numeric = _interopRequireDefault(__webpack_require__("45b8"));

var _between = _interopRequireDefault(__webpack_require__("ec11"));

var _email = _interopRequireDefault(__webpack_require__("5d75"));

var _ipAddress = _interopRequireDefault(__webpack_require__("c99d"));

var _macAddress = _interopRequireDefault(__webpack_require__("91d3"));

var _maxLength = _interopRequireDefault(__webpack_require__("2a12"));

var _minLength = _interopRequireDefault(__webpack_require__("5db3"));

var _required = _interopRequireDefault(__webpack_require__("d4f4"));

var _requiredIf = _interopRequireDefault(__webpack_require__("aa82"));

var _requiredUnless = _interopRequireDefault(__webpack_require__("e652"));

var _sameAs = _interopRequireDefault(__webpack_require__("b6cb"));

var _url = _interopRequireDefault(__webpack_require__("772d"));

var _or = _interopRequireDefault(__webpack_require__("d294"));

var _and = _interopRequireDefault(__webpack_require__("3360"));

var _not = _interopRequireDefault(__webpack_require__("6417"));

var _minValue = _interopRequireDefault(__webpack_require__("eb66"));

var _maxValue = _interopRequireDefault(__webpack_require__("46bc"));

var _integer = _interopRequireDefault(__webpack_require__("1331"));

var _decimal = _interopRequireDefault(__webpack_require__("c301"));

var helpers = _interopRequireWildcard(__webpack_require__("78ef"));

exports.helpers = helpers;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "b6cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports.default = _default;

/***/ }),

/***/ "c301":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports.default = _default;

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c99d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports.default = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "cb69":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withParams = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d294":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports.default = _default;

/***/ }),

/***/ "d4f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = (0, _common.withParams)({
  type: 'required'
}, function (value) {
  if (typeof value === 'string') {
    return (0, _common.req)(value.trim());
  }

  return (0, _common.req)(value);
});

exports.default = _default;

/***/ }),

/***/ "e652":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports.default = _default;

/***/ }),

/***/ "eb66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports.default = _default;

/***/ }),

/***/ "ec11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__("78ef");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports.default = _default;

/***/ }),

/***/ "f5f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantEnginePlugin_vue_vue_type_style_index_0_id_e5693cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("216b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantEnginePlugin_vue_vue_type_style_index_0_id_e5693cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantEnginePlugin_vue_vue_type_style_index_0_id_e5693cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantEnginePlugin_vue_vue_type_style_index_0_id_e5693cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DatastoreSelector", function() { return /* reexport */ common_DatastoreSelector; });
__webpack_require__.d(__webpack_exports__, "TenantEnginePlugin", function() { return /* reexport */ tenantengines_TenantEnginePlugin; });
__webpack_require__.d(__webpack_exports__, "AssetManagementPlugin", function() { return /* reexport */ assetmanagement_AssetManagementPlugin; });
__webpack_require__.d(__webpack_exports__, "BatchOperationsPlugin", function() { return /* reexport */ batchoperations_BatchOperationsPlugin; });
__webpack_require__.d(__webpack_exports__, "CommandDeliveryPlugin", function() { return /* reexport */ commanddelivery_CommandDeliveryPlugin; });
__webpack_require__.d(__webpack_exports__, "DeviceManagementPlugin", function() { return /* reexport */ devicemanagement_DeviceManagementPlugin; });
__webpack_require__.d(__webpack_exports__, "EventSourcesPlugin", function() { return /* reexport */ eventsources_EventSourcesPlugin; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/DatastoreSelector.vue?vue&type=template&id=24cc4f56&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.datastore)?_c('v-card',{attrs:{"flat":""}},[(_vm.datastoreReference)?_c('v-card',{staticClass:"mb-3",attrs:{"flat":""}},[_c('v-icon',{staticClass:"mr-2",attrs:{"small":""}},[_vm._v("fa-globe")]),_vm._v("Configured globally as "),_c('a',{staticStyle:{"color":"#2255cc"}},[_vm._v(_vm._s(_vm.datastoreReference))]),_vm._v(". ")],1):_vm._e(),(_vm.isPostgres95)?_c('postgres-95-summary',{attrs:{"configuration":_vm.configuration}}):_vm._e(),_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-edit","text":"Update datastore settings"},on:{"linkClicked":_vm.onUpdateDatastore}}),_c('content-link',{attrs:{"icon":"fa-trash","text":"Unset datastore"},on:{"linkClicked":_vm.onUnsetDatastore}})],1):_c('v-card',{attrs:{"flat":""}},[_c('content-warning',{attrs:{"text":"No datastore is set. This will cause\n  tenant engine startup to fail!"}}),_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-plus-circle","text":"Add datastore information."},on:{"linkClicked":_vm.onAddDatastore}})],1),_c('datastore-create-dialog',{ref:"create",attrs:{"instance":_vm.instance},on:{"create":_vm.onDatastoreCreate}}),_c('datastore-update-dialog',{ref:"update",attrs:{"instance":_vm.instance},on:{"update":_vm.onDatastoreUpdate}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/DatastoreSelector.vue?vue&type=template&id=24cc4f56&scoped=true&

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__("01a6");

// EXTERNAL MODULE: external "vuetify/lib"
var lib_ = __webpack_require__("4875");

// EXTERNAL MODULE: external "sitewhere-ide-components"
var external_sitewhere_ide_components_ = __webpack_require__("9092");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/DatastoreCreateDialog.vue?vue&type=template&id=d836d36c&
var DatastoreCreateDialogvue_type_template_id_d836d36c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('datastore-dialog',{ref:"dialog",attrs:{"title":"Create Datastore","createLabel":"Create","instance":_vm.instance},on:{"payload":_vm.onPayload}})}
var DatastoreCreateDialogvue_type_template_id_d836d36c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreCreateDialog.vue?vue&type=template&id=d836d36c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/DatastoreDialog.vue?vue&type=template&id=81d1a7be&
var DatastoreDialogvue_type_template_id_81d1a7be_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":"550","loaded":true,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":"Cancel"},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('dialog-header',{staticClass:"pl-3 pr-3 pt-1"},[_c('v-layout',{staticClass:"pl-2 pr-2 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn-toggle',{staticClass:"mt-3",attrs:{"mandatory":""},model:{value:(_vm.scope),callback:function ($$v) {_vm.scope=$$v},expression:"scope"}},[_c('v-btn',{attrs:{"text":""}},[_vm._v("Local")]),_c('v-btn',{attrs:{"text":""}},[_vm._v("Global")])],1)],1),(_vm.isLocalScope)?_c('v-flex',{attrs:{"xs8":""}},[_c('v-select',{staticClass:"ml-3",attrs:{"required":true,"title":"Choose database type","label":"Database Type","items":_vm.databaseTypes,"item-text":"text","item-value":"value","prepend-icon":"fa-database","placeholder":" "},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}})],1):_c('v-flex',{attrs:{"xs8":""}},[_c('v-select',{staticClass:"ml-3",attrs:{"required":true,"title":"Choose global database reference","label":"Global Reference","items":_vm.globalDatabases,"item-text":"text","item-value":"value","prepend-icon":"fa-database","placeholder":" "},model:{value:(_vm.reference),callback:function ($$v) {_vm.reference=$$v},expression:"reference"}})],1)],1)],1),_c('v-divider',{staticClass:"mb-2"}),(_vm.isPostgres95)?_c('postgres-95-fields',{ref:"details",attrs:{"readonly":_vm.isGlobalScope}}):_vm._e()],1)}
var DatastoreDialogvue_type_template_id_81d1a7be_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreDialog.vue?vue&type=template&id=81d1a7be&

// EXTERNAL MODULE: external "sitewhere-ide-common"
var external_sitewhere_ide_common_ = __webpack_require__("403e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Fields.vue?vue&type=template&id=2ffa5f55&
var Postgres95Fieldsvue_type_template_id_2ffa5f55_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs9":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","readonly":_vm.readonly,"label":"Hostname","title":"Hostname of PostgreSQL server.","icon":"fa-server"},model:{value:(_vm.hostname),callback:function ($$v) {_vm.hostname=$$v},expression:"hostname"}})],1),_c('v-flex',{attrs:{"xs3":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Port","title":"Port for PostgreSQL server.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}})],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Max Connections","title":"Maximum number of connections to server.","type":"number","icon":"fa-stream"},model:{value:(_vm.maxConnections),callback:function ($$v) {_vm.maxConnections=$$v},expression:"maxConnections"}})],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","readonly":_vm.readonly,"label":"Username","title":"Username.","icon":"fa-user"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Password","title":"Password.","icon":"fa-lock","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1)}
var Postgres95Fieldsvue_type_template_id_2ffa5f55_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Fields.vue?vue&type=template&id=2ffa5f55&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("b5ae");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Fields.vue?vue&type=script&lang=ts&





var Postgres95Fieldsvue_type_script_lang_ts_Postgres95Fields = /** @class */ (function (_super) {
    __extends(Postgres95Fields, _super);
    function Postgres95Fields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hostname = null;
        _this.port = null;
        _this.username = null;
        _this.password = null;
        _this.maxConnections = null;
        return _this;
    }
    /** Reset section content */
    Postgres95Fields.prototype.reset = function () {
        this.hostname = null;
        this.port = null;
        this.username = null;
        this.password = null;
        this.maxConnections = null;
        this.$v.$reset();
    };
    /** Perform validation */
    Postgres95Fields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    Postgres95Fields.prototype.load = function (configuration) {
        this.hostname = configuration.hostname;
        this.port = configuration.port;
        this.username = configuration.username;
        this.password = configuration.password;
        this.maxConnections = configuration.maxConnections;
    };
    /** Save form data to an object */
    Postgres95Fields.prototype.save = function () {
        return {
            hostname: this.hostname,
            port: this.port,
            username: this.username,
            password: this.password,
            maxConnections: this.maxConnections
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], Postgres95Fields.prototype, "readonly", void 0);
    Postgres95Fields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"], VFlex: lib_["VFlex"] },
            validations: {
                hostname: {
                    required: validators["required"]
                }
            }
        })
    ], Postgres95Fields);
    return Postgres95Fields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var Postgres95Fieldsvue_type_script_lang_ts_ = (Postgres95Fieldsvue_type_script_lang_ts_Postgres95Fields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Fields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var postgres95_Postgres95Fieldsvue_type_script_lang_ts_ = (Postgres95Fieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Fields.vue





/* normalize component */

var component = normalizeComponent(
  postgres95_Postgres95Fieldsvue_type_script_lang_ts_,
  Postgres95Fieldsvue_type_template_id_2ffa5f55_render,
  Postgres95Fieldsvue_type_template_id_2ffa5f55_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var postgres95_Postgres95Fields = (component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/DatastoreDialog.vue?vue&type=script&lang=ts&






var DatastoreDialogvue_type_script_lang_ts_DatastoreDialog = /** @class */ (function (_super) {
    __extends(DatastoreDialog, _super);
    function DatastoreDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scope = 0;
        _this.reference = null;
        _this.type = "postgres95";
        /** List of supported database types */
        _this.databaseTypes = [
            {
                text: "PostgreSQL",
                value: "postgres95"
            }
        ];
        return _this;
    }
    Object.defineProperty(DatastoreDialog.prototype, "dialogComponent", {
        /** Convert to dialog */
        get: function () {
            return this.dialog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreDialog.prototype, "detailsSection", {
        /** Convert to dialog section */
        get: function () {
            return this.details;
        },
        enumerable: true,
        configurable: true
    });
    DatastoreDialog.prototype.onScopeChanged = function () {
        if (!this.isLocalScope) {
            if (!this.reference) {
                var refs = this.globalDatabases;
                if (refs.length) {
                    this.reference = refs[0].value;
                }
            }
        }
        this.reloadDetails();
    };
    DatastoreDialog.prototype.onReferenceChanged = function () {
        this.reloadDetails();
    };
    Object.defineProperty(DatastoreDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["NavigationIcon"].Datastore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreDialog.prototype, "isLocalScope", {
        /** Indicates if local scope is chosen */
        get: function () {
            return this.scope == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreDialog.prototype, "isGlobalScope", {
        /** Indicates if global scope is chosen */
        get: function () {
            return this.scope == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreDialog.prototype, "rdbConfigurations", {
        /** Global RDB configurations */
        get: function () {
            return this.instance && this.instance.persistenceConfigurations
                ? this.instance.persistenceConfigurations.rdbConfigurations
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreDialog.prototype, "globalDatabases", {
        /** Get list of available global databases */
        get: function () {
            var databases = [];
            if (this.rdbConfigurations) {
                var keys = Object.keys(this.rdbConfigurations);
                keys.forEach(function (key) {
                    databases.push({ text: key, value: key });
                });
            }
            return databases;
        },
        enumerable: true,
        configurable: true
    });
    /** Find a referenced persistence configuration */
    DatastoreDialog.prototype.findGlobalDefinition = function (reference) {
        if (!this.rdbConfigurations) {
            return null;
        }
        var match = this.rdbConfigurations[reference];
        if (!match) {
            return null;
        }
        return {
            type: match.type,
            configuration: match.configuration
        };
    };
    /** Local or global datastore type */
    DatastoreDialog.prototype.getDatastoreType = function () {
        if (!this.isLocalScope && this.reference) {
            var global = this.findGlobalDefinition(this.reference);
            return global ? global.type : null;
        }
        return this.type;
    };
    /** Local or global datastore configuration */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    DatastoreDialog.prototype.getDatastoreConfiguration = function () {
        if (this.isLocalScope) {
            return this.configuration;
        }
        else if (this.reference) {
            var global = this.findGlobalDefinition(this.reference);
            return global ? global.configuration : {};
        }
        else {
            throw new Error("Neither local nor reference!");
        }
    };
    Object.defineProperty(DatastoreDialog.prototype, "isPostgres95", {
        /** Indicates whether database is Postgres95 */
        get: function () {
            var type = this.getDatastoreType();
            return type == "postgres95";
        },
        enumerable: true,
        configurable: true
    });
    /** Generate configuration from detail panel */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    DatastoreDialog.prototype.generateConfiguration = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var configuration = {};
        Object.assign(configuration, this.detailsSection.save());
        return configuration;
    };
    /** Generate payload from UI data */
    DatastoreDialog.prototype.generatePayload = function () {
        if (this.scope == 1 && this.reference) {
            return {
                reference: this.reference
            };
        }
        else {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            var configuration = this.generateConfiguration();
            return { type: this.type, configuration: configuration };
        }
    };
    /** Reset dialog content to default */
    DatastoreDialog.prototype.reset = function () {
        if (this.details) {
            this.detailsSection.reset();
        }
        this.dialogComponent.setActiveTab(0);
    };
    /** Load data from an existing configuration */
    DatastoreDialog.prototype.load = function (payload) {
        this.reset();
        this.type = payload.type || "postgres95";
        this.configuration =
            payload.configuration || {};
        this.reference = payload.reference;
        this.scope = this.reference ? 1 : 0;
        this.reloadDetails();
    };
    /** Reload details panel based on updated configuration */
    DatastoreDialog.prototype.reloadDetails = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = this.getDatastoreConfiguration();
        if (this.details && config) {
            this.detailsSection.load(config);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    DatastoreDialog.prototype.onCreateClicked = function (e) {
        if (!this.detailsSection.validate()) {
            this.dialogComponent.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DatastoreDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DatastoreDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DatastoreDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DatastoreDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DatastoreDialog.prototype, "details", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("scope")
    ], DatastoreDialog.prototype, "onScopeChanged", null);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("reference")
    ], DatastoreDialog.prototype, "onReferenceChanged", null);
    DatastoreDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                BaseDialog: external_sitewhere_ide_components_["BaseDialog"],
                DialogHeader: external_sitewhere_ide_components_["DialogHeader"],
                VLayout: lib_["VLayout"],
                VFlex: lib_["VFlex"],
                VBtnToggle: lib_["VBtnToggle"],
                VBtn: lib_["VBtn"],
                VSelect: lib_["VSelect"],
                VDivider: lib_["VDivider"],
                Postgres95Fields: postgres95_Postgres95Fields
            }
        })
    ], DatastoreDialog);
    return DatastoreDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var DatastoreDialogvue_type_script_lang_ts_ = (DatastoreDialogvue_type_script_lang_ts_DatastoreDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_DatastoreDialogvue_type_script_lang_ts_ = (DatastoreDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreDialog.vue





/* normalize component */

var DatastoreDialog_component = normalizeComponent(
  datastore_DatastoreDialogvue_type_script_lang_ts_,
  DatastoreDialogvue_type_template_id_81d1a7be_render,
  DatastoreDialogvue_type_template_id_81d1a7be_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_DatastoreDialog = (DatastoreDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/DatastoreCreateDialog.vue?vue&type=script&lang=ts&




var DatastoreCreateDialogvue_type_script_lang_ts_DatastoreCreateDialog = /** @class */ (function (_super) {
    __extends(DatastoreCreateDialog, _super);
    function DatastoreCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    DatastoreCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    DatastoreCreateDialog.prototype.openDialog = function () {
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DatastoreCreateDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DatastoreCreateDialog.prototype, "dialog", void 0);
    DatastoreCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                DatastoreDialog: datastore_DatastoreDialog
            }
        })
    ], DatastoreCreateDialog);
    return DatastoreCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DatastoreCreateDialogvue_type_script_lang_ts_ = (DatastoreCreateDialogvue_type_script_lang_ts_DatastoreCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_DatastoreCreateDialogvue_type_script_lang_ts_ = (DatastoreCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreCreateDialog.vue





/* normalize component */

var DatastoreCreateDialog_component = normalizeComponent(
  datastore_DatastoreCreateDialogvue_type_script_lang_ts_,
  DatastoreCreateDialogvue_type_template_id_d836d36c_render,
  DatastoreCreateDialogvue_type_template_id_d836d36c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_DatastoreCreateDialog = (DatastoreCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/DatastoreUpdateDialog.vue?vue&type=template&id=26c26f99&
var DatastoreUpdateDialogvue_type_template_id_26c26f99_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('datastore-dialog',{ref:"dialog",attrs:{"title":"Update Datastore","createLabel":"Update","instance":_vm.instance},on:{"payload":_vm.onPayload}})}
var DatastoreUpdateDialogvue_type_template_id_26c26f99_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreUpdateDialog.vue?vue&type=template&id=26c26f99&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/DatastoreUpdateDialog.vue?vue&type=script&lang=ts&




var DatastoreUpdateDialogvue_type_script_lang_ts_DatastoreUpdateDialog = /** @class */ (function (_super) {
    __extends(DatastoreUpdateDialog, _super);
    function DatastoreUpdateDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Emit payload */
    DatastoreUpdateDialog.prototype.onPayload = function (definition) {
        this.dialog.closeDialog();
        this.$emit("update", definition);
    };
    /** Open dialog */
    DatastoreUpdateDialog.prototype.openDialog = function (definition) {
        this.dialog.openDialog();
        this.dialog.load(definition);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DatastoreUpdateDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DatastoreUpdateDialog.prototype, "dialog", void 0);
    DatastoreUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                DatastoreDialog: datastore_DatastoreDialog
            }
        })
    ], DatastoreUpdateDialog);
    return DatastoreUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DatastoreUpdateDialogvue_type_script_lang_ts_ = (DatastoreUpdateDialogvue_type_script_lang_ts_DatastoreUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_DatastoreUpdateDialogvue_type_script_lang_ts_ = (DatastoreUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/DatastoreUpdateDialog.vue





/* normalize component */

var DatastoreUpdateDialog_component = normalizeComponent(
  datastore_DatastoreUpdateDialogvue_type_script_lang_ts_,
  DatastoreUpdateDialogvue_type_template_id_26c26f99_render,
  DatastoreUpdateDialogvue_type_template_id_26c26f99_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_DatastoreUpdateDialog = (DatastoreUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Summary.vue?vue&type=template&id=1a218c85&scoped=true&
var Postgres95Summaryvue_type_template_id_1a218c85_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('content-field',{attrs:{"name":"type","value":"PostgreSQL"}}),_c('content-field',{attrs:{"alt":true,"name":"dialect","value":"postgres95"}}),_c('content-field',{attrs:{"name":"hostname","value":_vm.hostname}}),_c('content-field',{attrs:{"alt":true,"name":"port","value":_vm.port}}),_c('content-field',{attrs:{"name":"username","value":_vm.username}}),_c('content-field',{attrs:{"alt":true,"name":"password","password":true,"value":_vm.password}}),_c('content-field',{attrs:{"name":"max connections","value":_vm.maxConnections}})],1)}
var Postgres95Summaryvue_type_template_id_1a218c85_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Summary.vue?vue&type=template&id=1a218c85&scoped=true&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Summary.vue?vue&type=script&lang=ts&





var Postgres95Summaryvue_type_script_lang_ts_Postgres95Summary = /** @class */ (function (_super) {
    __extends(Postgres95Summary, _super);
    function Postgres95Summary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Postgres95Summary.prototype, "hostname", {
        /** Hostname */
        get: function () {
            return this.configuration ? this.configuration.hostname : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Postgres95Summary.prototype, "port", {
        /** Port */
        get: function () {
            return this.configuration ? this.configuration.port : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Postgres95Summary.prototype, "username", {
        /** Username */
        get: function () {
            return this.configuration ? this.configuration.username : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Postgres95Summary.prototype, "password", {
        /** Password */
        get: function () {
            return this.configuration ? this.configuration.password : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Postgres95Summary.prototype, "maxConnections", {
        /** Max connections */
        get: function () {
            return this.configuration ? this.configuration.maxConnections : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], Postgres95Summary.prototype, "configuration", void 0);
    Postgres95Summary = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VCard: lib_["VCard"], ContentField: external_sitewhere_ide_components_["ContentField"] }
        })
    ], Postgres95Summary);
    return Postgres95Summary;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var Postgres95Summaryvue_type_script_lang_ts_ = (Postgres95Summaryvue_type_script_lang_ts_Postgres95Summary);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Summary.vue?vue&type=script&lang=ts&
 /* harmony default export */ var postgres95_Postgres95Summaryvue_type_script_lang_ts_ = (Postgres95Summaryvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Summary.vue





/* normalize component */

var Postgres95Summary_component = normalizeComponent(
  postgres95_Postgres95Summaryvue_type_script_lang_ts_,
  Postgres95Summaryvue_type_template_id_1a218c85_scoped_true_render,
  Postgres95Summaryvue_type_template_id_1a218c85_scoped_true_staticRenderFns,
  false,
  null,
  "1a218c85",
  null
  
)

/* harmony default export */ var postgres95_Postgres95Summary = (Postgres95Summary_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/DatastoreSelector.vue?vue&type=script&lang=ts&








var DatastoreSelectorvue_type_script_lang_ts_DatastoreSelector = /** @class */ (function (_super) {
    __extends(DatastoreSelector, _super);
    function DatastoreSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DatastoreSelector.prototype, "rdbConfigurations", {
        /** Global RDB configurations */
        get: function () {
            return this.instance && this.instance.persistenceConfigurations
                ? this.instance.persistenceConfigurations.rdbConfigurations
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreSelector.prototype, "datastoreReference", {
        /** Get reference name */
        get: function () {
            return this.datastore
                ? this.datastore.reference
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreSelector.prototype, "datastoreType", {
        /** Local or global datastore type */
        get: function () {
            var reference = this.datastoreReference;
            if (reference) {
                var global = this.findGlobalDefinition(reference);
                return global ? global.type : null;
            }
            return this.datastore
                ? this.datastore.type
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreSelector.prototype, "configuration", {
        /** Local or global datastore configuration */
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        get: function () {
            var reference = this.datastoreReference;
            if (reference) {
                var global = this.findGlobalDefinition(reference);
                return global ? global.configuration : null;
            }
            return this.datastore
                ? this.datastore.configuration
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatastoreSelector.prototype, "isPostgres95", {
        /** Postgres95 datastore */
        get: function () {
            return this.datastoreType ? this.datastoreType == "postgres95" : false;
        },
        enumerable: true,
        configurable: true
    });
    /** Find a referenced persistence configuration */
    DatastoreSelector.prototype.findGlobalDefinition = function (reference) {
        if (!this.rdbConfigurations) {
            return null;
        }
        var match = this.rdbConfigurations[reference];
        if (!match) {
            return null;
        }
        return {
            type: match.type,
            configuration: match.configuration
        };
    };
    /** Add datastore */
    DatastoreSelector.prototype.onAddDatastore = function () {
        this.create.openDialog();
    };
    /** Called to create datastore based on UI data */
    DatastoreSelector.prototype.onDatastoreCreate = function (definition) {
        this.$emit("create", definition);
    };
    /** Update datastore */
    DatastoreSelector.prototype.onUpdateDatastore = function () {
        this.update.openDialog(this.datastore);
    };
    /** Called to update datastore based on UI data */
    DatastoreSelector.prototype.onDatastoreUpdate = function (definition) {
        this.$emit("update", definition);
    };
    /** Unset datastore */
    DatastoreSelector.prototype.onUnsetDatastore = function () {
        this.$emit("unset");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DatastoreSelector.prototype, "datastore", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DatastoreSelector.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DatastoreSelector.prototype, "create", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DatastoreSelector.prototype, "update", void 0);
    DatastoreSelector = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VCard: lib_["VCard"],
                VIcon: lib_["VIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                ContentWarning: external_sitewhere_ide_components_["ContentWarning"],
                DatastoreCreateDialog: datastore_DatastoreCreateDialog,
                DatastoreUpdateDialog: datastore_DatastoreUpdateDialog,
                Postgres95Summary: postgres95_Postgres95Summary
            }
        })
    ], DatastoreSelector);
    return DatastoreSelector;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DatastoreSelectorvue_type_script_lang_ts_ = (DatastoreSelectorvue_type_script_lang_ts_DatastoreSelector);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/DatastoreSelector.vue?vue&type=script&lang=ts&
 /* harmony default export */ var common_DatastoreSelectorvue_type_script_lang_ts_ = (DatastoreSelectorvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/DatastoreSelector.vue





/* normalize component */

var DatastoreSelector_component = normalizeComponent(
  common_DatastoreSelectorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "24cc4f56",
  null
  
)

/* harmony default export */ var common_DatastoreSelector = (DatastoreSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/TenantEnginePlugin.vue?vue&type=template&id=e5693cf6&scoped=true&
var TenantEnginePluginvue_type_template_id_e5693cf6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticStyle:{"height":"100%"},attrs:{"flat":"","tile":""}},[_c('v-card-text',[_c('div',{staticClass:"flex-rows"},[(_vm.microservice && _vm.tenant)?_c('div',{staticClass:"plugin-header"},[_vm._t("header",[_c('page-header',{attrs:{"text":_vm.header}})])],2):_vm._e(),_c('div',{staticClass:"plugin-content"},[_vm._t("default")],2),_c('div',{staticClass:"plugin-footer"},[_vm._t("footer")],2)])]),_vm._t("dialogs")],2)}
var TenantEnginePluginvue_type_template_id_e5693cf6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/TenantEnginePlugin.vue?vue&type=template&id=e5693cf6&scoped=true&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/TenantEnginePlugin.vue?vue&type=script&lang=ts&





var TenantEnginePluginvue_type_script_lang_ts_TenantEnginePlugin = /** @class */ (function (_super) {
    __extends(TenantEnginePlugin, _super);
    function TenantEnginePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TenantEnginePlugin.prototype, "tenant", {
        /** Get microservice information */
        get: function () {
            return this.configuration ? this.configuration.tenant : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TenantEnginePlugin.prototype, "microservice", {
        /** Get microservice information */
        get: function () {
            return this.configuration ? this.configuration.microservice : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TenantEnginePlugin.prototype, "header", {
        /** Get header displayed at top of page */
        get: function () {
            return this.tenant && this.microservice
                ? this.microservice.name + " Configuration for Tenant '" + this.tenant.name + "'"
                : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], TenantEnginePlugin.prototype, "configuration", void 0);
    TenantEnginePlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VCard: lib_["VCard"], VCardText: lib_["VCardText"], PageHeader: external_sitewhere_ide_components_["PageHeader"] }
        })
    ], TenantEnginePlugin);
    return TenantEnginePlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var TenantEnginePluginvue_type_script_lang_ts_ = (TenantEnginePluginvue_type_script_lang_ts_TenantEnginePlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/TenantEnginePlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tenantengines_TenantEnginePluginvue_type_script_lang_ts_ = (TenantEnginePluginvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/plugins/tenantengines/TenantEnginePlugin.vue?vue&type=style&index=0&id=e5693cf6&scoped=true&lang=css&
var TenantEnginePluginvue_type_style_index_0_id_e5693cf6_scoped_true_lang_css_ = __webpack_require__("f5f6");

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/TenantEnginePlugin.vue






/* normalize component */

var TenantEnginePlugin_component = normalizeComponent(
  tenantengines_TenantEnginePluginvue_type_script_lang_ts_,
  TenantEnginePluginvue_type_template_id_e5693cf6_scoped_true_render,
  TenantEnginePluginvue_type_template_id_e5693cf6_scoped_true_staticRenderFns,
  false,
  null,
  "e5693cf6",
  null
  
)

/* harmony default export */ var tenantengines_TenantEnginePlugin = (TenantEnginePlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue?vue&type=template&id=5c6ec298&
var AssetManagementPluginvue_type_template_id_5c6ec298_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Asset Management Datastore"}},[_c('datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"create":_vm.onCreateDatastore,"update":_vm.onUpdateDatastore,"unset":_vm.onUnsetDatastore}})],1)],1)}
var AssetManagementPluginvue_type_template_id_5c6ec298_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue?vue&type=template&id=5c6ec298&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue?vue&type=script&lang=ts&






var AssetManagementPluginvue_type_script_lang_ts_AssetManagementPlugin = /** @class */ (function (_super) {
    __extends(AssetManagementPlugin, _super);
    function AssetManagementPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AssetManagementPlugin.prototype, "assetManagement", {
        /** Get tenant configuration for asset management */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetManagementPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetManagementPlugin.prototype, "datastore", {
        /** Get datastore definition */
        get: function () {
            return this.assetManagement ? this.assetManagement.datastore : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Create new datastore */
    AssetManagementPlugin.prototype.onCreateDatastore = function (definition) {
        this.assetManagement.datastore = definition;
    };
    /** Update datastore */
    AssetManagementPlugin.prototype.onUpdateDatastore = function (definition) {
        this.assetManagement.datastore = definition;
    };
    /** Unset the datastore */
    AssetManagementPlugin.prototype.onUnsetDatastore = function () {
        if (this.assetManagement) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.assetManagement.datastore = null;
        }
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], AssetManagementPlugin.prototype, "configuration", void 0);
    AssetManagementPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { ContentSection: external_sitewhere_ide_components_["ContentSection"], TenantEnginePlugin: tenantengines_TenantEnginePlugin, DatastoreSelector: common_DatastoreSelector }
        })
    ], AssetManagementPlugin);
    return AssetManagementPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var AssetManagementPluginvue_type_script_lang_ts_ = (AssetManagementPluginvue_type_script_lang_ts_AssetManagementPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var assetmanagement_AssetManagementPluginvue_type_script_lang_ts_ = (AssetManagementPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue





/* normalize component */

var AssetManagementPlugin_component = normalizeComponent(
  assetmanagement_AssetManagementPluginvue_type_script_lang_ts_,
  AssetManagementPluginvue_type_template_id_5c6ec298_render,
  AssetManagementPluginvue_type_template_id_5c6ec298_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var assetmanagement_AssetManagementPlugin = (AssetManagementPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue?vue&type=template&id=101bb958&scoped=true&
var BatchOperationsPluginvue_type_template_id_101bb958_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Batch Operations Datastore"}},[_c('datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"create":_vm.onCreateDatastore,"update":_vm.onUpdateDatastore,"unset":_vm.onUnsetDatastore}})],1),_c('v-divider',{staticClass:"mt-4 mb-4"}),_c('batch-operation-manager-section',{attrs:{"configuration":_vm.batchOperationManager},on:{"update":_vm.onBatchOperationManagerUpdate}})],1)}
var BatchOperationsPluginvue_type_template_id_101bb958_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue?vue&type=template&id=101bb958&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerSection.vue?vue&type=template&id=964fadf4&
var BatchOperationManagerSectionvue_type_template_id_964fadf4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('content-section',{attrs:{"icon":_vm.icon,"title":"Batch Operation Manager"}},[_c('content-field',{attrs:{"name":"throttle delay(ms)","value":_vm.throttleDelayMs}}),_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-edit","text":"Edit batch operation manager settings."},on:{"linkClicked":_vm.onEditBatchOperationManager}}),_c('batch-operation-manager-dialog',{ref:"dialog",on:{"update":_vm.onBatchOperationManagerUpdate}})],1)}
var BatchOperationManagerSectionvue_type_template_id_964fadf4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerSection.vue?vue&type=template&id=964fadf4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerDialog.vue?vue&type=template&id=39986495&
var BatchOperationManagerDialogvue_type_template_id_39986495_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Edit Batch Operation Manager Settings","width":"500","loaded":true,"visible":_vm.dialogVisible,"createLabel":"Update","cancelLabel":"Cancel"},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"tabs"},[_c('v-tab',{key:"manager"},[_vm._v("Manager")])],1),_c('template',{slot:"tab-items"},[_c('v-tab-item',{key:"manager"},[_c('batch-operation-manager-fields',{ref:"manager"})],1)],1)],2)}
var BatchOperationManagerDialogvue_type_template_id_39986495_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerDialog.vue?vue&type=template&id=39986495&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerFields.vue?vue&type=template&id=b799d2bc&
var BatchOperationManagerFieldsvue_type_template_id_b799d2bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","label":"Throttle delay(ms)","title":"Throttle delay in milliseconds.","icon":"fa-clock","type":"number"},model:{value:(_vm.throttleDelayMs),callback:function ($$v) {_vm.throttleDelayMs=$$v},expression:"throttleDelayMs"}},[(!_vm.$v.throttleDelayMs.required && _vm.$v.$dirty)?_c('span',[_vm._v("Throttle delay is required.")]):_vm._e()])],1)],1)}
var BatchOperationManagerFieldsvue_type_template_id_b799d2bc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerFields.vue?vue&type=template&id=b799d2bc&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerFields.vue?vue&type=script&lang=ts&





var BatchOperationManagerFieldsvue_type_script_lang_ts_BatchOperationManagerFields = /** @class */ (function (_super) {
    __extends(BatchOperationManagerFields, _super);
    function BatchOperationManagerFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.throttleDelayMs = 0;
        return _this;
    }
    /** Reset section content */
    BatchOperationManagerFields.prototype.reset = function () {
        this.throttleDelayMs = 0;
        this.$v.$reset();
    };
    /** Perform validation */
    BatchOperationManagerFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    BatchOperationManagerFields.prototype.load = function (input) {
        this.throttleDelayMs = input.throttleDelayMs || 0;
    };
    /** Save form data to an object */
    BatchOperationManagerFields.prototype.save = function () {
        return {
            throttleDelayMs: this.throttleDelayMs
        };
    };
    BatchOperationManagerFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] },
            validations: {
                throttleDelayMs: {
                    required: validators["required"]
                }
            }
        })
    ], BatchOperationManagerFields);
    return BatchOperationManagerFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var BatchOperationManagerFieldsvue_type_script_lang_ts_ = (BatchOperationManagerFieldsvue_type_script_lang_ts_BatchOperationManagerFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var batchoperationmanager_BatchOperationManagerFieldsvue_type_script_lang_ts_ = (BatchOperationManagerFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerFields.vue





/* normalize component */

var BatchOperationManagerFields_component = normalizeComponent(
  batchoperationmanager_BatchOperationManagerFieldsvue_type_script_lang_ts_,
  BatchOperationManagerFieldsvue_type_template_id_b799d2bc_render,
  BatchOperationManagerFieldsvue_type_template_id_b799d2bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var batchoperationmanager_BatchOperationManagerFields = (BatchOperationManagerFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerDialog.vue?vue&type=script&lang=ts&






var BatchOperationManagerDialogvue_type_script_lang_ts_BatchOperationManagerDialog = /** @class */ (function (_super) {
    __extends(BatchOperationManagerDialog, _super);
    function BatchOperationManagerDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BatchOperationManagerDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].BatchOperations;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    BatchOperationManagerDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.manager.save());
        return payload;
    };
    /** Reset dialog contents */
    BatchOperationManagerDialog.prototype.reset = function () {
        if (this.manager) {
            this.manager.reset();
        }
    };
    /** Load dialog from a given configuration */
    BatchOperationManagerDialog.prototype.load = function (config) {
        this.reset();
        if (this.manager) {
            this.manager.load(config);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    BatchOperationManagerDialog.prototype.onCreateClicked = function (e) {
        if (!this.manager.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("update", payload);
        this.closeDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], BatchOperationManagerDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], BatchOperationManagerDialog.prototype, "manager", void 0);
    BatchOperationManagerDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VTab: lib_["VTab"], VTabItem: lib_["VTabItem"], BaseDialog: external_sitewhere_ide_components_["BaseDialog"], BatchOperationManagerFields: batchoperationmanager_BatchOperationManagerFields }
        })
    ], BatchOperationManagerDialog);
    return BatchOperationManagerDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var BatchOperationManagerDialogvue_type_script_lang_ts_ = (BatchOperationManagerDialogvue_type_script_lang_ts_BatchOperationManagerDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var batchoperationmanager_BatchOperationManagerDialogvue_type_script_lang_ts_ = (BatchOperationManagerDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerDialog.vue





/* normalize component */

var BatchOperationManagerDialog_component = normalizeComponent(
  batchoperationmanager_BatchOperationManagerDialogvue_type_script_lang_ts_,
  BatchOperationManagerDialogvue_type_template_id_39986495_render,
  BatchOperationManagerDialogvue_type_template_id_39986495_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var batchoperationmanager_BatchOperationManagerDialog = (BatchOperationManagerDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerSection.vue?vue&type=script&lang=ts&






var BatchOperationManagerSectionvue_type_script_lang_ts_BatchOperationManagerSection = /** @class */ (function (_super) {
    __extends(BatchOperationManagerSection, _super);
    function BatchOperationManagerSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BatchOperationManagerSection.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].BatchOperations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatchOperationManagerSection.prototype, "throttleDelayMs", {
        /** Get throttle delay(ms) */
        get: function () {
            return this.configuration ? this.configuration.throttleDelayMs : 0;
        },
        enumerable: true,
        configurable: true
    });
    /** Called to edit batch operation manager settings */
    BatchOperationManagerSection.prototype.onEditBatchOperationManager = function () {
        this.dialog.openDialog();
        this.dialog.load(this.configuration);
    };
    /** Handle update */
    BatchOperationManagerSection.prototype.onBatchOperationManagerUpdate = function (updated) {
        this.$emit("update", updated);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], BatchOperationManagerSection.prototype, "configuration", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], BatchOperationManagerSection.prototype, "dialog", void 0);
    BatchOperationManagerSection = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                ContentField: external_sitewhere_ide_components_["ContentField"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                BatchOperationManagerDialog: batchoperationmanager_BatchOperationManagerDialog
            }
        })
    ], BatchOperationManagerSection);
    return BatchOperationManagerSection;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var BatchOperationManagerSectionvue_type_script_lang_ts_ = (BatchOperationManagerSectionvue_type_script_lang_ts_BatchOperationManagerSection);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerSection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var batchoperationmanager_BatchOperationManagerSectionvue_type_script_lang_ts_ = (BatchOperationManagerSectionvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerSection.vue





/* normalize component */

var BatchOperationManagerSection_component = normalizeComponent(
  batchoperationmanager_BatchOperationManagerSectionvue_type_script_lang_ts_,
  BatchOperationManagerSectionvue_type_template_id_964fadf4_render,
  BatchOperationManagerSectionvue_type_template_id_964fadf4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var batchoperationmanager_BatchOperationManagerSection = (BatchOperationManagerSection_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue?vue&type=script&lang=ts&








var BatchOperationsPluginvue_type_script_lang_ts_BatchOperationsPlugin = /** @class */ (function (_super) {
    __extends(BatchOperationsPlugin, _super);
    function BatchOperationsPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BatchOperationsPlugin.prototype, "batchOperations", {
        /** Get tenant configuration for batch operations */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatchOperationsPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatchOperationsPlugin.prototype, "datastore", {
        /** Get datastore definition */
        get: function () {
            return this.batchOperations ? this.batchOperations.datastore : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatchOperationsPlugin.prototype, "batchOperationManager", {
        /** Get batch operation manager configuration */
        get: function () {
            return this.batchOperations
                ? this.batchOperations.batchOperationManager
                : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Create new datastore */
    BatchOperationsPlugin.prototype.onCreateDatastore = function (definition) {
        this.batchOperations.datastore = definition;
    };
    /** Update datastore */
    BatchOperationsPlugin.prototype.onUpdateDatastore = function (definition) {
        this.batchOperations.datastore = definition;
    };
    /** Unset the datastore */
    BatchOperationsPlugin.prototype.onUnsetDatastore = function () {
        if (this.batchOperations) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.batchOperations.datastore = null;
        }
    };
    /** Handle batch operation manager updates */
    BatchOperationsPlugin.prototype.onBatchOperationManagerUpdate = function (updated) {
        if (this.batchOperations) {
            this.batchOperations.batchOperationManager = updated;
        }
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], BatchOperationsPlugin.prototype, "configuration", void 0);
    BatchOperationsPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VDivider: lib_["VDivider"],
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                TenantEnginePlugin: tenantengines_TenantEnginePlugin,
                DatastoreSelector: common_DatastoreSelector,
                BatchOperationManagerSection: batchoperationmanager_BatchOperationManagerSection
            }
        })
    ], BatchOperationsPlugin);
    return BatchOperationsPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var BatchOperationsPluginvue_type_script_lang_ts_ = (BatchOperationsPluginvue_type_script_lang_ts_BatchOperationsPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var batchoperations_BatchOperationsPluginvue_type_script_lang_ts_ = (BatchOperationsPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue





/* normalize component */

var BatchOperationsPlugin_component = normalizeComponent(
  batchoperations_BatchOperationsPluginvue_type_script_lang_ts_,
  BatchOperationsPluginvue_type_template_id_101bb958_scoped_true_render,
  BatchOperationsPluginvue_type_template_id_101bb958_scoped_true_staticRenderFns,
  false,
  null,
  "101bb958",
  null
  
)

/* harmony default export */ var batchoperations_BatchOperationsPlugin = (BatchOperationsPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue?vue&type=template&id=497c7afc&scoped=true&
var CommandDeliveryPluginvue_type_template_id_497c7afc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('command-destinations-table',{attrs:{"tenantId":_vm.tenantId,"commandDestinations":_vm.commandDestinations},on:{"create":_vm.onCommandDestinationCreated,"update":_vm.onCommandDestinationUpdated,"delete":_vm.onCommandDestinationDeleted}}),_c('v-divider',{staticClass:"mt-4 mb-4"}),_c('command-router-section',{attrs:{"router":_vm.router,"commandDestinations":_vm.commandDestinations},on:{"unset":_vm.onUnsetCommandRouter}})],1)}
var CommandDeliveryPluginvue_type_template_id_497c7afc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue?vue&type=template&id=497c7afc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDestinationsTable.vue?vue&type=template&id=c66cd04c&
var CommandDestinationsTablevue_type_template_id_c66cd04c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('datatable-section',{attrs:{"icon":_vm.icon,"title":"Command Destinations","headers":_vm.headers,"items":_vm.commandDestsAsSortedArray,"width":"50%"},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_c('td',[_c('datatable-link',{attrs:{"text":props.item.meta.id},on:{"linkClicked":function($event){return _vm.onOpenCommandDestination(props.item.meta.id)}}})],1),_c('td',[_vm._v(_vm._s(props.item.meta.type))]),_c('td',[_c('content-delete-icon',{on:{"delete":function($event){return _vm.onDeleteCommandDestination(props.item.meta.id)}}})],1)]}},{key:"datatable-footer",fn:function(){return [_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-plus-circle","text":"Add new command destination."},on:{"linkClicked":_vm.onAddCommandDestination}})]},proxy:true},{key:"datatable-dialogs",fn:function(){return [_c('new-command-destination-chooser',{ref:"chooser",on:{"chosen":_vm.onCommandDestinationCreate}}),_c('coap-command-destination-create-dialog',{ref:"coapCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onCommandDestinationAdded}}),_c('coap-command-destination-update-dialog',{ref:"coapUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onCommandDestinationUpdated}}),_c('mqtt-command-destination-create-dialog',{ref:"mqttCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onCommandDestinationAdded}}),_c('mqtt-command-destination-update-dialog',{ref:"mqttUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onCommandDestinationUpdated}})]},proxy:true}])})}
var CommandDestinationsTablevue_type_template_id_c66cd04c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDestinationsTable.vue?vue&type=template&id=c66cd04c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NewCommandDestinationChooser.vue?vue&type=template&id=2775238a&
var NewCommandDestinationChooservue_type_template_id_2775238a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('new-element-chooser',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Add Command Destination","width":"500"}},[_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"coap"},on:{"chosen":_vm.onChosen}},[_vm._v("CoAP Command Destination")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"mqtt"},on:{"chosen":_vm.onChosen}},[_vm._v("MQTT Command Destination")])],1)}
var NewCommandDestinationChooservue_type_template_id_2775238a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NewCommandDestinationChooser.vue?vue&type=template&id=2775238a&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NewCommandDestinationChooser.vue?vue&type=script&lang=ts&





var NewCommandDestinationChooservue_type_script_lang_ts_NewCommandDestinationChooser = /** @class */ (function (_super) {
    __extends(NewCommandDestinationChooser, _super);
    function NewCommandDestinationChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NewCommandDestinationChooser.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].CommandDelivery;
        },
        enumerable: true,
        configurable: true
    });
    /** Open chooser */
    NewCommandDestinationChooser.prototype.openChooser = function () {
        this.dialog.openDialog();
    };
    /** Close chooser */
    NewCommandDestinationChooser.prototype.closeChooser = function () {
        this.dialog.closeDialog();
    };
    /** Close chooser on item click */
    NewCommandDestinationChooser.prototype.onChosen = function (id) {
        this.closeChooser();
        this.$emit("chosen", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], NewCommandDestinationChooser.prototype, "dialog", void 0);
    NewCommandDestinationChooser = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { NewElementChooser: external_sitewhere_ide_components_["NewElementChooser"], NewElementEntry: external_sitewhere_ide_components_["NewElementEntry"] }
        })
    ], NewCommandDestinationChooser);
    return NewCommandDestinationChooser;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var NewCommandDestinationChooservue_type_script_lang_ts_ = (NewCommandDestinationChooservue_type_script_lang_ts_NewCommandDestinationChooser);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NewCommandDestinationChooser.vue?vue&type=script&lang=ts&
 /* harmony default export */ var commanddelivery_NewCommandDestinationChooservue_type_script_lang_ts_ = (NewCommandDestinationChooservue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NewCommandDestinationChooser.vue





/* normalize component */

var NewCommandDestinationChooser_component = normalizeComponent(
  commanddelivery_NewCommandDestinationChooservue_type_script_lang_ts_,
  NewCommandDestinationChooservue_type_template_id_2775238a_render,
  NewCommandDestinationChooservue_type_template_id_2775238a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var commanddelivery_NewCommandDestinationChooser = (NewCommandDestinationChooser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationCreateDialog.vue?vue&type=template&id=30271060&
var CoapCommandDestinationCreateDialogvue_type_template_id_30271060_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('coap-command-destination-dialog',{ref:"dialog",attrs:{"title":"Create CoAP Command Destination","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var CoapCommandDestinationCreateDialogvue_type_template_id_30271060_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationCreateDialog.vue?vue&type=template&id=30271060&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationDialog.vue?vue&type=template&id=8f2063b8&
var CoapCommandDestinationDialogvue_type_template_id_8f2063b8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-destination-dialog',{ref:"dialog",attrs:{"type":"coap","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel,"parameterExtractors":_vm.parameterExtractors},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"command-destination-tabs"},[_c('v-tab',{key:"coap"},[_vm._v("Configuration")])],1),_c('template',{slot:"command-destination-tab-items"},[_c('v-tab-item',{key:"coap"},[_c('coap-fields',{ref:"coap"})],1)],1)],2)}
var CoapCommandDestinationDialogvue_type_template_id_8f2063b8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationDialog.vue?vue&type=template&id=8f2063b8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDestinationDialog.vue?vue&type=template&id=47143d9a&
var CommandDestinationDialogvue_type_template_id_47143d9a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"visible":_vm.visible,"createLabel":_vm.createLabel || 'Create',"cancelLabel":_vm.cancelLabel || 'Cancel'},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"header"},[_c('dialog-header',{staticClass:"pl-3 pr-3 pt-2 pb-2"},[_c('v-layout',{staticClass:"pl-2 pr-2 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs5":""}},[(_vm.visible)?_c('form-text',{staticClass:"mr-3",attrs:{"label":"Command destination id","title":"Unique command destination identifier.","icon":"info","dense":true,"autofocus":true},model:{value:(_vm.id),callback:function ($$v) {_vm.id=$$v},expression:"id"}},[(!_vm.$v.id.required && _vm.$v.$dirty)?_c('span',[_vm._v("Id is required.")]):_vm._e(),(!_vm.$v.id.idConflict && _vm.$v.$dirty)?_c('span',[_vm._v("Id already in use.")]):_vm._e()]):_vm._e()],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-select',{attrs:{"items":_vm.parameterExtractors,"title":"Choose parameter extractor for command destination","label":"Parameter extractor","item-text":"text","item-value":"value","icon":"settings"},model:{value:(_vm.extractorType),callback:function ($$v) {_vm.extractorType=$$v},expression:"extractorType"}})],1)],1)],1)],1),_c('template',{slot:"tabs"},[_vm._t("command-destination-tabs"),_c('v-tab',{key:"extractor"},[_vm._v("Parameter Extractor")])],2),_c('template',{slot:"tab-items"},[_vm._t("command-destination-tab-items"),_c('v-tab-item',{key:"extractor"},[_c('parameter-extractor-configuration',{ref:"extractor",attrs:{"parameterExtractor":_vm.parameterExtractor,"tenantId":_vm.tenantId}})],1)],2)],2)}
var CommandDestinationDialogvue_type_template_id_47143d9a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDestinationDialog.vue?vue&type=template&id=47143d9a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/ParameterExtractorConfiguration.vue?vue&type=template&id=53dd936d&
var ParameterExtractorConfigurationvue_type_template_id_53dd936d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[(_vm.extractorType == 'mqtt-default')?_c('default-mqtt-parameter-extractor-configuration',{ref:"details"}):_vm._e()],1)}
var ParameterExtractorConfigurationvue_type_template_id_53dd936d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/ParameterExtractorConfiguration.vue?vue&type=template&id=53dd936d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorConfiguration.vue?vue&type=template&id=5d42595f&
var DefaultMqttParameterExtractorConfigurationvue_type_template_id_5d42595f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('default-mqtt-parameter-extractor-fields',{ref:"fields",attrs:{"tenantId":_vm.tenantId}})}
var DefaultMqttParameterExtractorConfigurationvue_type_template_id_5d42595f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorConfiguration.vue?vue&type=template&id=5d42595f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorFields.vue?vue&type=template&id=565a9782&
var DefaultMqttParameterExtractorFieldsvue_type_template_id_565a9782_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Command topic expression","title":"Expression used to determine command MQTT topic.","icon":"settings"},model:{value:(_vm.commandTopicExpression),callback:function ($$v) {_vm.commandTopicExpression=$$v},expression:"commandTopicExpression"}},[(!_vm.$v.commandTopicExpression.required && _vm.$v.$dirty)?_c('span',[_vm._v("Command topic expression is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"System topic expression","title":"Expression used to determine system MQTT topic.","icon":"settings"},model:{value:(_vm.systemTopicExpression),callback:function ($$v) {_vm.systemTopicExpression=$$v},expression:"systemTopicExpression"}},[(!_vm.$v.systemTopicExpression.required && _vm.$v.$dirty)?_c('span',[_vm._v("System topic expression is required.")]):_vm._e()])],1)],1)}
var DefaultMqttParameterExtractorFieldsvue_type_template_id_565a9782_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorFields.vue?vue&type=template&id=565a9782&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorFields.vue?vue&type=script&lang=ts&





var DefaultMqttParameterExtractorFieldsvue_type_script_lang_ts_DefaultMqttParameterExtractorFields = /** @class */ (function (_super) {
    __extends(DefaultMqttParameterExtractorFields, _super);
    function DefaultMqttParameterExtractorFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.commandTopicExpression = null;
        _this.systemTopicExpression = null;
        return _this;
    }
    /** Reset section content */
    DefaultMqttParameterExtractorFields.prototype.reset = function () {
        this.commandTopicExpression = null;
        this.systemTopicExpression = null;
        this.$v.$reset();
    };
    /** Perform validation */
    DefaultMqttParameterExtractorFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    DefaultMqttParameterExtractorFields.prototype.load = function (input) {
        this.commandTopicExpression = input.commandTopicExpression;
        this.systemTopicExpression = input.systemTopicExpression;
    };
    /** Save form data to an object */
    DefaultMqttParameterExtractorFields.prototype.save = function () {
        return {
            commandTopicExpression: this.commandTopicExpression || "",
            systemTopicExpression: this.systemTopicExpression || ""
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DefaultMqttParameterExtractorFields.prototype, "tenantId", void 0);
    DefaultMqttParameterExtractorFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogSection: external_sitewhere_ide_components_["DialogSection"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] },
            validations: {
                commandTopicExpression: {
                    required: validators["required"]
                },
                systemTopicExpression: {
                    required: validators["required"]
                }
            }
        })
    ], DefaultMqttParameterExtractorFields);
    return DefaultMqttParameterExtractorFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var DefaultMqttParameterExtractorFieldsvue_type_script_lang_ts_ = (DefaultMqttParameterExtractorFieldsvue_type_script_lang_ts_DefaultMqttParameterExtractorFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_DefaultMqttParameterExtractorFieldsvue_type_script_lang_ts_ = (DefaultMqttParameterExtractorFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorFields.vue





/* normalize component */

var DefaultMqttParameterExtractorFields_component = normalizeComponent(
  mqtt_DefaultMqttParameterExtractorFieldsvue_type_script_lang_ts_,
  DefaultMqttParameterExtractorFieldsvue_type_template_id_565a9782_render,
  DefaultMqttParameterExtractorFieldsvue_type_template_id_565a9782_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_DefaultMqttParameterExtractorFields = (DefaultMqttParameterExtractorFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorConfiguration.vue?vue&type=script&lang=ts&




var DefaultMqttParameterExtractorConfigurationvue_type_script_lang_ts_DefaultMqttParameterExtractorConfiguration = /** @class */ (function (_super) {
    __extends(DefaultMqttParameterExtractorConfiguration, _super);
    function DefaultMqttParameterExtractorConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Reset section content */
    DefaultMqttParameterExtractorConfiguration.prototype.reset = function () {
        if (this.fields) {
            this.fields.reset();
        }
    };
    /** Perform validation */
    DefaultMqttParameterExtractorConfiguration.prototype.validate = function () {
        if (!this.fields.validate()) {
            return false;
        }
        return true;
    };
    /** Load form data from an object */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    DefaultMqttParameterExtractorConfiguration.prototype.load = function (input) {
        this.reset();
        if (this.fields) {
            this.fields.load(input);
        }
    };
    /** Save form data to an object */
    DefaultMqttParameterExtractorConfiguration.prototype.save = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        if (this.fields) {
            Object.assign(payload, this.fields.save());
        }
        return payload;
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DefaultMqttParameterExtractorConfiguration.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DefaultMqttParameterExtractorConfiguration.prototype, "fields", void 0);
    DefaultMqttParameterExtractorConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                DefaultMqttParameterExtractorFields: mqtt_DefaultMqttParameterExtractorFields
            }
        })
    ], DefaultMqttParameterExtractorConfiguration);
    return DefaultMqttParameterExtractorConfiguration;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var DefaultMqttParameterExtractorConfigurationvue_type_script_lang_ts_ = (DefaultMqttParameterExtractorConfigurationvue_type_script_lang_ts_DefaultMqttParameterExtractorConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_DefaultMqttParameterExtractorConfigurationvue_type_script_lang_ts_ = (DefaultMqttParameterExtractorConfigurationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorConfiguration.vue





/* normalize component */

var DefaultMqttParameterExtractorConfiguration_component = normalizeComponent(
  mqtt_DefaultMqttParameterExtractorConfigurationvue_type_script_lang_ts_,
  DefaultMqttParameterExtractorConfigurationvue_type_template_id_5d42595f_render,
  DefaultMqttParameterExtractorConfigurationvue_type_template_id_5d42595f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_DefaultMqttParameterExtractorConfiguration = (DefaultMqttParameterExtractorConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/ParameterExtractorConfiguration.vue?vue&type=script&lang=ts&





var ParameterExtractorConfigurationvue_type_script_lang_ts_ParameterExtractorConfiguration = /** @class */ (function (_super) {
    __extends(ParameterExtractorConfiguration, _super);
    function ParameterExtractorConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParameterExtractorConfiguration.prototype.onExtractorTypeUpdated = function () {
        this.load(this.parameterExtractor);
    };
    Object.defineProperty(ParameterExtractorConfiguration.prototype, "extractorType", {
        /** Parameter extractor type */
        get: function () {
            return this.parameterExtractor ? this.parameterExtractor.type : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Reset section content */
    ParameterExtractorConfiguration.prototype.reset = function () {
        if (this.details) {
            this.details.reset();
        }
    };
    /** Perform validation */
    ParameterExtractorConfiguration.prototype.validate = function () {
        if (this.details) {
            if (!this.details.validate()) {
                return false;
            }
        }
        return true;
    };
    /** Load form data from an object */
    ParameterExtractorConfiguration.prototype.load = function (input) {
        var _this = this;
        this.$nextTick().then(function () {
            if (_this.details) {
                _this.details.load(input.configuration);
            }
        });
    };
    /** Save form data to an object */
    ParameterExtractorConfiguration.prototype.save = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        if (this.details) {
            Object.assign(config, this.details.save());
        }
        return config;
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ParameterExtractorConfiguration.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ParameterExtractorConfiguration.prototype, "parameterExtractor", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ParameterExtractorConfiguration.prototype, "details", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("extractorType", { immediate: true })
    ], ParameterExtractorConfiguration.prototype, "onExtractorTypeUpdated", null);
    ParameterExtractorConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VCard: lib_["VCard"], DefaultMqttParameterExtractorConfiguration: mqtt_DefaultMqttParameterExtractorConfiguration }
        })
    ], ParameterExtractorConfiguration);
    return ParameterExtractorConfiguration;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var ParameterExtractorConfigurationvue_type_script_lang_ts_ = (ParameterExtractorConfigurationvue_type_script_lang_ts_ParameterExtractorConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/ParameterExtractorConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var extractors_ParameterExtractorConfigurationvue_type_script_lang_ts_ = (ParameterExtractorConfigurationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/ParameterExtractorConfiguration.vue





/* normalize component */

var ParameterExtractorConfiguration_component = normalizeComponent(
  extractors_ParameterExtractorConfigurationvue_type_script_lang_ts_,
  ParameterExtractorConfigurationvue_type_template_id_53dd936d_render,
  ParameterExtractorConfigurationvue_type_template_id_53dd936d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var extractors_ParameterExtractorConfiguration = (ParameterExtractorConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDestinationDialog.vue?vue&type=script&lang=ts&







/** Validator for checking if id is already used */
var idConflict = validators["helpers"].withParams({ type: "idConflict" }, 
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function (value, vm) {
    var idsInUse = vm.idsInUse;
    var conflict = false;
    idsInUse.forEach(function (id) {
        if (vm.id == id)
            conflict = true;
    });
    return !conflict;
});
var CommandDestinationDialogvue_type_script_lang_ts_CommandDestinationDialog = /** @class */ (function (_super) {
    __extends(CommandDestinationDialog, _super);
    function CommandDestinationDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        _this.parameterExtractor = null;
        return _this;
    }
    Object.defineProperty(CommandDestinationDialog.prototype, "extractorType", {
        /** Parameter extractor type */
        get: function () {
            return this.parameterExtractor ? this.parameterExtractor.type : null;
        },
        /** Blank configuration if type updated */
        set: function (value) {
            if (value) {
                this.parameterExtractor = {
                    type: value,
                    configuration: {}
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Save dialog fields */
    CommandDestinationDialog.prototype.save = function () {
        var config = {
            id: this.id,
            type: this.type
        };
        return config;
    };
    /** Reset the dialog */
    CommandDestinationDialog.prototype.reset = function () {
        this.id = null;
        this.setActiveTab(0);
        this.$v.$reset();
    };
    /** Validate fields */
    CommandDestinationDialog.prototype.validate = function () {
        if (!this.extractor.validate()) {
            return false;
        }
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load dialog from a given configuration */
    CommandDestinationDialog.prototype.load = function (config) {
        this.id = config.id;
        this.parameterExtractor = config.parameterExtractor;
    };
    /** Set the active tab */
    CommandDestinationDialog.prototype.setActiveTab = function (tab) {
        this.dialog.setActiveTab(tab);
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    CommandDestinationDialog.prototype.onCreateClicked = function (e) {
        this.$emit("createClicked", e);
    };
    /** Called after cancel button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    CommandDestinationDialog.prototype.onCancelClicked = function (e) {
        this.$emit("cancelClicked", e);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "type", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "icon", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "visible", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDestinationDialog.prototype, "parameterExtractors", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandDestinationDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandDestinationDialog.prototype, "extractor", void 0);
    CommandDestinationDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                BaseDialog: external_sitewhere_ide_components_["BaseDialog"],
                DialogHeader: external_sitewhere_ide_components_["DialogHeader"],
                FormText: external_sitewhere_ide_components_["FormText"],
                FormSelect: external_sitewhere_ide_components_["FormSelect"],
                VFlex: lib_["VFlex"],
                VLayout: lib_["VLayout"],
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                ParameterExtractorConfiguration: extractors_ParameterExtractorConfiguration
            },
            validations: {
                id: {
                    required: validators["required"],
                    idConflict: idConflict
                }
            }
        })
    ], CommandDestinationDialog);
    return CommandDestinationDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var CommandDestinationDialogvue_type_script_lang_ts_ = (CommandDestinationDialogvue_type_script_lang_ts_CommandDestinationDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDestinationDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var commanddelivery_CommandDestinationDialogvue_type_script_lang_ts_ = (CommandDestinationDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDestinationDialog.vue





/* normalize component */

var CommandDestinationDialog_component = normalizeComponent(
  commanddelivery_CommandDestinationDialogvue_type_script_lang_ts_,
  CommandDestinationDialogvue_type_template_id_47143d9a_render,
  CommandDestinationDialogvue_type_template_id_47143d9a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var commanddelivery_CommandDestinationDialog = (CommandDestinationDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapFields.vue?vue&type=template&id=9fc85192&
var CoapFieldsvue_type_template_id_9fc85192_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('sw-dialog-form',[_c('no-configuration')],1)}
var CoapFieldsvue_type_template_id_9fc85192_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapFields.vue?vue&type=template&id=9fc85192&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NoConfiguration.vue?vue&type=template&id=078e8cd9&scoped=true&
var NoConfigurationvue_type_template_id_078e8cd9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticStyle:{"width":"100%"},attrs:{"flat":""}},[_c('v-card-text',{staticClass:"padded-message subheading"},[_vm._v("This command destination has no configurable attributes.")])],1)}
var NoConfigurationvue_type_template_id_078e8cd9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NoConfiguration.vue?vue&type=template&id=078e8cd9&scoped=true&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NoConfiguration.vue?vue&type=script&lang=ts&




var NoConfigurationvue_type_script_lang_ts_NoConfiguration = /** @class */ (function (_super) {
    __extends(NoConfiguration, _super);
    function NoConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({ components: { VCard: lib_["VCard"], VCardText: lib_["VCardText"] } })
    ], NoConfiguration);
    return NoConfiguration;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var NoConfigurationvue_type_script_lang_ts_ = (NoConfigurationvue_type_script_lang_ts_NoConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NoConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var commanddelivery_NoConfigurationvue_type_script_lang_ts_ = (NoConfigurationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/plugins/tenantengines/commanddelivery/NoConfiguration.vue?vue&type=style&index=0&id=078e8cd9&scoped=true&lang=css&
var NoConfigurationvue_type_style_index_0_id_078e8cd9_scoped_true_lang_css_ = __webpack_require__("4b4c");

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NoConfiguration.vue






/* normalize component */

var NoConfiguration_component = normalizeComponent(
  commanddelivery_NoConfigurationvue_type_script_lang_ts_,
  NoConfigurationvue_type_template_id_078e8cd9_scoped_true_render,
  NoConfigurationvue_type_template_id_078e8cd9_scoped_true_staticRenderFns,
  false,
  null,
  "078e8cd9",
  null
  
)

/* harmony default export */ var commanddelivery_NoConfiguration = (NoConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapFields.vue?vue&type=script&lang=ts&




var CoapFieldsvue_type_script_lang_ts_CoapFields = /** @class */ (function (_super) {
    __extends(CoapFields, _super);
    function CoapFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Reset section content */
    CoapFields.prototype.reset = function () {
        this.$v.$reset();
    };
    /** Perform validation */
    CoapFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
    CoapFields.prototype.load = function (input) { };
    /** Save form data to an object */
    CoapFields.prototype.save = function () {
        return {};
    };
    CoapFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], NoConfiguration: commanddelivery_NoConfiguration }
        })
    ], CoapFields);
    return CoapFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var CoapFieldsvue_type_script_lang_ts_ = (CoapFieldsvue_type_script_lang_ts_CoapFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_CoapFieldsvue_type_script_lang_ts_ = (CoapFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapFields.vue





/* normalize component */

var CoapFields_component = normalizeComponent(
  coap_CoapFieldsvue_type_script_lang_ts_,
  CoapFieldsvue_type_template_id_9fc85192_render,
  CoapFieldsvue_type_template_id_9fc85192_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_CoapFields = (CoapFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationDialog.vue?vue&type=script&lang=ts&







var CoapCommandDestinationDialogvue_type_script_lang_ts_CoapCommandDestinationDialog = /** @class */ (function (_super) {
    __extends(CoapCommandDestinationDialog, _super);
    function CoapCommandDestinationDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** List of parameter extractors */
        _this.parameterExtractors = [
            {
                text: "Metadata Extractor",
                value: "coap-default"
            }
        ];
        return _this;
    }
    Object.defineProperty(CoapCommandDestinationDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    CoapCommandDestinationDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        Object.assign(config, this.coap.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    CoapCommandDestinationDialog.prototype.reset = function () {
        if (this.coap) {
            this.coap.reset();
        }
        this.dialog.reset();
    };
    /** Load dialog from a given configuration */
    CoapCommandDestinationDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.coap) {
            this.coap.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    CoapCommandDestinationDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.coap.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapCommandDestinationDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapCommandDestinationDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapCommandDestinationDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapCommandDestinationDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapCommandDestinationDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapCommandDestinationDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CoapCommandDestinationDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CoapCommandDestinationDialog.prototype, "coap", void 0);
    CoapCommandDestinationDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VTab: lib_["VTab"], VTabItem: lib_["VTabItem"], CommandDestinationDialog: commanddelivery_CommandDestinationDialog, CoapFields: coap_CoapFields }
        })
    ], CoapCommandDestinationDialog);
    return CoapCommandDestinationDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var CoapCommandDestinationDialogvue_type_script_lang_ts_ = (CoapCommandDestinationDialogvue_type_script_lang_ts_CoapCommandDestinationDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_CoapCommandDestinationDialogvue_type_script_lang_ts_ = (CoapCommandDestinationDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationDialog.vue





/* normalize component */

var CoapCommandDestinationDialog_component = normalizeComponent(
  coap_CoapCommandDestinationDialogvue_type_script_lang_ts_,
  CoapCommandDestinationDialogvue_type_template_id_8f2063b8_render,
  CoapCommandDestinationDialogvue_type_template_id_8f2063b8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_CoapCommandDestinationDialog = (CoapCommandDestinationDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationCreateDialog.vue?vue&type=script&lang=ts&




var CoapCommandDestinationCreateDialogvue_type_script_lang_ts_CoapCommandDestinationCreateDialog = /** @class */ (function (_super) {
    __extends(CoapCommandDestinationCreateDialog, _super);
    function CoapCommandDestinationCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    CoapCommandDestinationCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    CoapCommandDestinationCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapCommandDestinationCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CoapCommandDestinationCreateDialog.prototype, "dialog", void 0);
    CoapCommandDestinationCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                CoapCommandDestinationDialog: coap_CoapCommandDestinationDialog
            }
        })
    ], CoapCommandDestinationCreateDialog);
    return CoapCommandDestinationCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var CoapCommandDestinationCreateDialogvue_type_script_lang_ts_ = (CoapCommandDestinationCreateDialogvue_type_script_lang_ts_CoapCommandDestinationCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_CoapCommandDestinationCreateDialogvue_type_script_lang_ts_ = (CoapCommandDestinationCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationCreateDialog.vue





/* normalize component */

var CoapCommandDestinationCreateDialog_component = normalizeComponent(
  coap_CoapCommandDestinationCreateDialogvue_type_script_lang_ts_,
  CoapCommandDestinationCreateDialogvue_type_template_id_30271060_render,
  CoapCommandDestinationCreateDialogvue_type_template_id_30271060_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_CoapCommandDestinationCreateDialog = (CoapCommandDestinationCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationUpdateDialog.vue?vue&type=template&id=2130d30a&
var CoapCommandDestinationUpdateDialogvue_type_template_id_2130d30a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('coap-command-destination-dialog',{ref:"dialog",attrs:{"title":"Update CoAP Command Destination","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var CoapCommandDestinationUpdateDialogvue_type_template_id_2130d30a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationUpdateDialog.vue?vue&type=template&id=2130d30a&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationUpdateDialog.vue?vue&type=script&lang=ts&




var CoapCommandDestinationUpdateDialogvue_type_script_lang_ts_CoapCommandDestinationUpdateDialog = /** @class */ (function (_super) {
    __extends(CoapCommandDestinationUpdateDialog, _super);
    function CoapCommandDestinationUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    CoapCommandDestinationUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    CoapCommandDestinationUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapCommandDestinationUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CoapCommandDestinationUpdateDialog.prototype, "dialog", void 0);
    CoapCommandDestinationUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                CoapCommandDestinationDialog: coap_CoapCommandDestinationDialog
            }
        })
    ], CoapCommandDestinationUpdateDialog);
    return CoapCommandDestinationUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var CoapCommandDestinationUpdateDialogvue_type_script_lang_ts_ = (CoapCommandDestinationUpdateDialogvue_type_script_lang_ts_CoapCommandDestinationUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_CoapCommandDestinationUpdateDialogvue_type_script_lang_ts_ = (CoapCommandDestinationUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationUpdateDialog.vue





/* normalize component */

var CoapCommandDestinationUpdateDialog_component = normalizeComponent(
  coap_CoapCommandDestinationUpdateDialogvue_type_script_lang_ts_,
  CoapCommandDestinationUpdateDialogvue_type_template_id_2130d30a_render,
  CoapCommandDestinationUpdateDialogvue_type_template_id_2130d30a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_CoapCommandDestinationUpdateDialog = (CoapCommandDestinationUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationCreateDialog.vue?vue&type=template&id=3c5219c7&
var MqttCommandDestinationCreateDialogvue_type_template_id_3c5219c7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mqtt-command-destination-dialog',{ref:"dialog",attrs:{"title":"Create MQTT Command Destination","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var MqttCommandDestinationCreateDialogvue_type_template_id_3c5219c7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationCreateDialog.vue?vue&type=template&id=3c5219c7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationDialog.vue?vue&type=template&id=ad952d30&
var MqttCommandDestinationDialogvue_type_template_id_ad952d30_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-destination-dialog',{ref:"dialog",attrs:{"type":"mqtt","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel,"parameterExtractors":_vm.parameterExtractors},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"command-destination-tabs"},[_c('v-tab',{key:"connection"},[_vm._v("Connection")]),_c('v-tab',{key:"authentication"},[_vm._v("Authentication")])],1),_c('template',{slot:"command-destination-tab-items"},[_c('v-tab-item',{key:"connection"},[_c('mqtt-connection-fields',{ref:"connection"})],1),_c('v-tab-item',{key:"authentication"},[_c('mqtt-authentication-fields',{ref:"authentication"})],1)],1)],2)}
var MqttCommandDestinationDialogvue_type_template_id_ad952d30_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationDialog.vue?vue&type=template&id=ad952d30&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttConnectionFields.vue?vue&type=template&id=2f43f4a9&
var MqttConnectionFieldsvue_type_template_id_2f43f4a9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs2":""}},[_c('form-select',{attrs:{"items":_vm.protocols,"title":"Choose connection protocol","label":"Protocol","item-text":"text","item-value":"value","icon":"lock"},model:{value:(_vm.protocol),callback:function ($$v) {_vm.protocol=$$v},expression:"protocol"}})],1),_c('v-flex',{attrs:{"xs8":""}},[_c('form-text',{staticClass:"ml-3 mr-3",attrs:{"required":"","label":"Hostname","title":"MQTT broker hostname.","icon":"router"},model:{value:(_vm.hostname),callback:function ($$v) {_vm.hostname=$$v},expression:"hostname"}},[(!_vm.$v.hostname.required && _vm.$v.$dirty)?_c('span',[_vm._v("Hostname is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs2":""}},[_c('form-text',{attrs:{"required":"","label":"Port","title":"MQTT broker port.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}},[(!_vm.$v.port.required && _vm.$v.$dirty)?_c('span',[_vm._v("Required.")]):_vm._e()])],1)],1)}
var MqttConnectionFieldsvue_type_template_id_2f43f4a9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttConnectionFields.vue?vue&type=template&id=2f43f4a9&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttConnectionFields.vue?vue&type=script&lang=ts&





var MqttConnectionFieldsvue_type_script_lang_ts_MqttConnectionFields = /** @class */ (function (_super) {
    __extends(MqttConnectionFields, _super);
    function MqttConnectionFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.protocol = "tcp";
        _this.hostname = null;
        _this.port = 1883;
        _this.protocols = [
            {
                text: "TCP",
                value: "tcp"
            },
            {
                text: "TLS",
                value: "tls"
            }
        ];
        _this.qosValues = [
            {
                text: "0 - At Most Once",
                value: 0
            },
            {
                text: "1 - At Least Once",
                value: 1
            },
            {
                text: "2 - Exactly Once",
                value: 3
            }
        ];
        return _this;
    }
    /** Reset section content */
    MqttConnectionFields.prototype.reset = function () {
        this.protocol = "tcp";
        this.hostname = null;
        this.port = 1883;
        this.$v.$reset();
    };
    /** Perform validation */
    MqttConnectionFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    MqttConnectionFields.prototype.load = function (input) {
        this.protocol = input.protocol || "tcp";
        this.hostname = input.hostname;
        this.port = input.port || 1883;
    };
    /** Save form data to an object */
    MqttConnectionFields.prototype.save = function () {
        return {
            protocol: this.protocol,
            hostname: this.hostname || "",
            port: this.port
        };
    };
    MqttConnectionFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"], VFlex: lib_["VFlex"], VTab: lib_["VTab"], VTabItem: lib_["VTabItem"] },
            validations: {
                protocol: {
                    required: validators["required"]
                },
                hostname: {
                    required: validators["required"]
                },
                port: {
                    required: validators["required"]
                }
            }
        })
    ], MqttConnectionFields);
    return MqttConnectionFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var MqttConnectionFieldsvue_type_script_lang_ts_ = (MqttConnectionFieldsvue_type_script_lang_ts_MqttConnectionFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttConnectionFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttConnectionFieldsvue_type_script_lang_ts_ = (MqttConnectionFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttConnectionFields.vue





/* normalize component */

var MqttConnectionFields_component = normalizeComponent(
  mqtt_MqttConnectionFieldsvue_type_script_lang_ts_,
  MqttConnectionFieldsvue_type_template_id_2f43f4a9_render,
  MqttConnectionFieldsvue_type_template_id_2f43f4a9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttConnectionFields = (MqttConnectionFields_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=1d3de08b&
var MqttAuthenticationFieldsvue_type_template_id_1d3de08b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Username","title":"Username for authentication.","icon":"account_circle"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Password","title":"Password for authentication.","icon":"lock","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Truststore path","title":"Truststore path.","icon":"info"},model:{value:(_vm.trustStorePath),callback:function ($$v) {_vm.trustStorePath=$$v},expression:"trustStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Truststore password","title":"Truststore password.","icon":"lock","type":"password"},model:{value:(_vm.trustStorePassword),callback:function ($$v) {_vm.trustStorePassword=$$v},expression:"trustStorePassword"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Keystore path","title":"Keystore path.","icon":"info"},model:{value:(_vm.keyStorePath),callback:function ($$v) {_vm.keyStorePath=$$v},expression:"keyStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Keystore password","title":"Keystore password.","icon":"lock","type":"password"},model:{value:(_vm.keyStorePassword),callback:function ($$v) {_vm.keyStorePassword=$$v},expression:"keyStorePassword"}})],1)],1)}
var MqttAuthenticationFieldsvue_type_template_id_1d3de08b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=1d3de08b&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttAuthenticationFields.vue?vue&type=script&lang=ts&




var MqttAuthenticationFieldsvue_type_script_lang_ts_MqttAuthenticationFields = /** @class */ (function (_super) {
    __extends(MqttAuthenticationFields, _super);
    function MqttAuthenticationFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = null;
        _this.password = null;
        _this.clientId = null;
        _this.cleanSession = null;
        _this.trustStorePath = null;
        _this.trustStorePassword = null;
        _this.keyStorePath = null;
        _this.keyStorePassword = null;
        return _this;
    }
    /** Reset section content */
    MqttAuthenticationFields.prototype.reset = function () {
        this.username = null;
        this.password = null;
        this.clientId = null;
        this.cleanSession = null;
        this.trustStorePath = null;
        this.trustStorePassword = null;
        this.keyStorePath = null;
        this.keyStorePassword = null;
        this.$v.$reset();
    };
    /** Perform validation */
    MqttAuthenticationFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    MqttAuthenticationFields.prototype.load = function (input) {
        this.username = input.username;
        this.password = input.password;
        this.trustStorePath = input.trustStorePath;
        this.trustStorePassword = input.trustStorePassword;
        this.keyStorePath = input.keyStorePath;
        this.keyStorePassword = input.keyStorePassword;
    };
    /** Save form data to an object */
    MqttAuthenticationFields.prototype.save = function () {
        return {
            username: this.username || "",
            password: this.password || "",
            trustStorePath: this.trustStorePath || "",
            trustStorePassword: this.trustStorePassword || "",
            keyStorePath: this.keyStorePath || "",
            keyStorePassword: this.keyStorePassword || ""
        };
    };
    MqttAuthenticationFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({ components: { VFlex: lib_["VFlex"], DialogSection: external_sitewhere_ide_components_["DialogSection"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] } })
    ], MqttAuthenticationFields);
    return MqttAuthenticationFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var MqttAuthenticationFieldsvue_type_script_lang_ts_ = (MqttAuthenticationFieldsvue_type_script_lang_ts_MqttAuthenticationFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttAuthenticationFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_ = (MqttAuthenticationFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttAuthenticationFields.vue





/* normalize component */

var MqttAuthenticationFields_component = normalizeComponent(
  mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_,
  MqttAuthenticationFieldsvue_type_template_id_1d3de08b_render,
  MqttAuthenticationFieldsvue_type_template_id_1d3de08b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttAuthenticationFields = (MqttAuthenticationFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationDialog.vue?vue&type=script&lang=ts&








var MqttCommandDestinationDialogvue_type_script_lang_ts_MqttCommandDestinationDialog = /** @class */ (function (_super) {
    __extends(MqttCommandDestinationDialog, _super);
    function MqttCommandDestinationDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** List of parameter extractors */
        _this.parameterExtractors = [
            {
                text: "Default Extractor",
                value: "mqtt-default"
            }
        ];
        return _this;
    }
    Object.defineProperty(MqttCommandDestinationDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    MqttCommandDestinationDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        Object.assign(config, this.connection.save());
        Object.assign(config, this.authentication.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    MqttCommandDestinationDialog.prototype.reset = function () {
        if (this.connection) {
            this.connection.reset();
        }
        if (this.authentication) {
            this.authentication.reset();
        }
        this.dialog.reset();
    };
    /** Load dialog from a given configuration */
    MqttCommandDestinationDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.connection) {
            this.connection.load(config.configuration);
        }
        if (this.authentication) {
            this.authentication.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    MqttCommandDestinationDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.connection.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        if (!this.authentication.validate()) {
            this.dialog.setActiveTab(1);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttCommandDestinationDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttCommandDestinationDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttCommandDestinationDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttCommandDestinationDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttCommandDestinationDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttCommandDestinationDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttCommandDestinationDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttCommandDestinationDialog.prototype, "connection", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttCommandDestinationDialog.prototype, "authentication", void 0);
    MqttCommandDestinationDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                CommandDestinationDialog: commanddelivery_CommandDestinationDialog,
                MqttConnectionFields: mqtt_MqttConnectionFields,
                MqttAuthenticationFields: mqtt_MqttAuthenticationFields
            }
        })
    ], MqttCommandDestinationDialog);
    return MqttCommandDestinationDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var MqttCommandDestinationDialogvue_type_script_lang_ts_ = (MqttCommandDestinationDialogvue_type_script_lang_ts_MqttCommandDestinationDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttCommandDestinationDialogvue_type_script_lang_ts_ = (MqttCommandDestinationDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationDialog.vue





/* normalize component */

var MqttCommandDestinationDialog_component = normalizeComponent(
  mqtt_MqttCommandDestinationDialogvue_type_script_lang_ts_,
  MqttCommandDestinationDialogvue_type_template_id_ad952d30_render,
  MqttCommandDestinationDialogvue_type_template_id_ad952d30_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttCommandDestinationDialog = (MqttCommandDestinationDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationCreateDialog.vue?vue&type=script&lang=ts&




var MqttCommandDestinationCreateDialogvue_type_script_lang_ts_MqttCommandDestinationCreateDialog = /** @class */ (function (_super) {
    __extends(MqttCommandDestinationCreateDialog, _super);
    function MqttCommandDestinationCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    MqttCommandDestinationCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    MqttCommandDestinationCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttCommandDestinationCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttCommandDestinationCreateDialog.prototype, "dialog", void 0);
    MqttCommandDestinationCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                MqttCommandDestinationDialog: mqtt_MqttCommandDestinationDialog
            }
        })
    ], MqttCommandDestinationCreateDialog);
    return MqttCommandDestinationCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var MqttCommandDestinationCreateDialogvue_type_script_lang_ts_ = (MqttCommandDestinationCreateDialogvue_type_script_lang_ts_MqttCommandDestinationCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttCommandDestinationCreateDialogvue_type_script_lang_ts_ = (MqttCommandDestinationCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationCreateDialog.vue





/* normalize component */

var MqttCommandDestinationCreateDialog_component = normalizeComponent(
  mqtt_MqttCommandDestinationCreateDialogvue_type_script_lang_ts_,
  MqttCommandDestinationCreateDialogvue_type_template_id_3c5219c7_render,
  MqttCommandDestinationCreateDialogvue_type_template_id_3c5219c7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttCommandDestinationCreateDialog = (MqttCommandDestinationCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationUpdateDialog.vue?vue&type=template&id=4dc49373&
var MqttCommandDestinationUpdateDialogvue_type_template_id_4dc49373_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mqtt-command-destination-dialog',{ref:"dialog",attrs:{"title":"Update MQTT Command Destination","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var MqttCommandDestinationUpdateDialogvue_type_template_id_4dc49373_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationUpdateDialog.vue?vue&type=template&id=4dc49373&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationUpdateDialog.vue?vue&type=script&lang=ts&




var MqttCommandDestinationUpdateDialogvue_type_script_lang_ts_MqttCommandDestinationUpdateDialog = /** @class */ (function (_super) {
    __extends(MqttCommandDestinationUpdateDialog, _super);
    function MqttCommandDestinationUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    MqttCommandDestinationUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    MqttCommandDestinationUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttCommandDestinationUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttCommandDestinationUpdateDialog.prototype, "dialog", void 0);
    MqttCommandDestinationUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                MqttCommandDestinationDialog: mqtt_MqttCommandDestinationDialog
            }
        })
    ], MqttCommandDestinationUpdateDialog);
    return MqttCommandDestinationUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var MqttCommandDestinationUpdateDialogvue_type_script_lang_ts_ = (MqttCommandDestinationUpdateDialogvue_type_script_lang_ts_MqttCommandDestinationUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttCommandDestinationUpdateDialogvue_type_script_lang_ts_ = (MqttCommandDestinationUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationUpdateDialog.vue





/* normalize component */

var MqttCommandDestinationUpdateDialog_component = normalizeComponent(
  mqtt_MqttCommandDestinationUpdateDialogvue_type_script_lang_ts_,
  MqttCommandDestinationUpdateDialogvue_type_template_id_4dc49373_render,
  MqttCommandDestinationUpdateDialogvue_type_template_id_4dc49373_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttCommandDestinationUpdateDialog = (MqttCommandDestinationUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDestinationsTable.vue?vue&type=script&lang=ts&










var CommandDestinationsTablevue_type_script_lang_ts_CommandDeliveryTable = /** @class */ (function (_super) {
    __extends(CommandDeliveryTable, _super);
    function CommandDeliveryTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headers = [
            { text: "Id", value: "id" },
            { text: "Type", value: "type" },
            { text: "", value: "delete" }
        ];
        /** Command destinations in format for display */
        _this.commandDestsAsSortedArray = [];
        return _this;
    }
    CommandDeliveryTable.prototype.onCommandDestinationsUpdated = function () {
        this.calculateCommandDestinationsAsSortedArray();
    };
    Object.defineProperty(CommandDeliveryTable.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].CommandDelivery;
        },
        enumerable: true,
        configurable: true
    });
    /** Get list of ids already in use */
    CommandDeliveryTable.prototype.findIdsInUse = function (exclude) {
        var ids = [];
        if (this.commandDestinations) {
            this.commandDestinations.forEach(function (dest) {
                if (dest.id != exclude) {
                    ids.push(dest.id);
                }
            });
        }
        return ids;
    };
    /** Get command destination index based on id */
    CommandDeliveryTable.prototype.getCommandDestinationIndex = function (id) {
        var match = null;
        if (this.commandDestinations) {
            this.commandDestinations.forEach(function (dest, index) {
                if (dest.id === id) {
                    match = index;
                }
            });
        }
        return match;
    };
    /** Get a command destination by id */
    CommandDeliveryTable.prototype.getCommandDestinationById = function (id) {
        var index = this.getCommandDestinationIndex(id);
        if (this.commandDestinations && index != null) {
            return this.commandDestinations[index];
        }
        return null;
    };
    /** Get command destinations as a sorted array */
    CommandDeliveryTable.prototype.calculateCommandDestinationsAsSortedArray = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var all = [];
        if (this.commandDestinations) {
            this.commandDestinations.forEach(function (dest) {
                var meta = {
                    id: dest.id,
                    type: dest.type
                };
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                var config = dest.configuration;
                all.push({ meta: meta, config: config });
            });
        }
        all.sort(function (a, b) {
            return a.meta.id.localeCompare(b.meta.id);
        });
        this.commandDestsAsSortedArray = all;
    };
    /** Add new command destination */
    CommandDeliveryTable.prototype.onAddCommandDestination = function () {
        this.chooser.openChooser();
    };
    /** Called to create a new command destination based on type */
    CommandDeliveryTable.prototype.onCommandDestinationCreate = function (id) {
        var idsInUse = this.findIdsInUse();
        if (id == "coap") {
            this.coapCreate.openDialog(idsInUse);
        }
        else if (id == "mqtt") {
            this.mqttCreate.openDialog(idsInUse);
        }
    };
    /** Called when command destination is added */
    CommandDeliveryTable.prototype.onCommandDestinationAdded = function (config) {
        if (this.commandDestinations) {
            this.commandDestinations.push(config);
            this.calculateCommandDestinationsAsSortedArray();
        }
        this.$emit("create", config);
    };
    /** Open command destination by id */
    CommandDeliveryTable.prototype.onOpenCommandDestination = function (id) {
        var config = this.getCommandDestinationById(id);
        var idsInUse = this.findIdsInUse(id);
        if (config) {
            if (config.type === "coap") {
                this.coapUpdate.openDialog(config, idsInUse);
            }
            else if (config.type === "mqtt") {
                this.mqttUpdate.openDialog(config, idsInUse);
            }
        }
    };
    /** Called when command destination is updated */
    CommandDeliveryTable.prototype.onCommandDestinationUpdated = function (originalId, config) {
        var index = this.getCommandDestinationIndex(originalId);
        if (this.commandDestinations && index != null) {
            external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.commandDestinations, index, config);
            this.calculateCommandDestinationsAsSortedArray();
        }
        this.$emit("update", originalId, config);
    };
    /** Delete command destination by id */
    CommandDeliveryTable.prototype.onDeleteCommandDestination = function (id) {
        var index = this.getCommandDestinationIndex(id);
        if (this.commandDestinations && index != null) {
            this.commandDestinations.splice(index);
            this.calculateCommandDestinationsAsSortedArray();
        }
        this.$emit("delete", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDeliveryTable.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDeliveryTable.prototype, "commandDestinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandDeliveryTable.prototype, "chooser", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandDeliveryTable.prototype, "coapCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandDeliveryTable.prototype, "coapUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandDeliveryTable.prototype, "mqttCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandDeliveryTable.prototype, "mqttUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("commandDestinations", { immediate: true })
    ], CommandDeliveryTable.prototype, "onCommandDestinationsUpdated", null);
    CommandDeliveryTable = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                DatatableSection: external_sitewhere_ide_components_["DatatableSection"],
                DatatableLink: external_sitewhere_ide_components_["DatatableLink"],
                ContentDeleteIcon: external_sitewhere_ide_components_["ContentDeleteIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                NewCommandDestinationChooser: commanddelivery_NewCommandDestinationChooser,
                CoapCommandDestinationCreateDialog: coap_CoapCommandDestinationCreateDialog,
                CoapCommandDestinationUpdateDialog: coap_CoapCommandDestinationUpdateDialog,
                MqttCommandDestinationCreateDialog: mqtt_MqttCommandDestinationCreateDialog,
                MqttCommandDestinationUpdateDialog: mqtt_MqttCommandDestinationUpdateDialog
            }
        })
    ], CommandDeliveryTable);
    return CommandDeliveryTable;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var CommandDestinationsTablevue_type_script_lang_ts_ = (CommandDestinationsTablevue_type_script_lang_ts_CommandDeliveryTable);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDestinationsTable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var commanddelivery_CommandDestinationsTablevue_type_script_lang_ts_ = (CommandDestinationsTablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDestinationsTable.vue





/* normalize component */

var CommandDestinationsTable_component = normalizeComponent(
  commanddelivery_CommandDestinationsTablevue_type_script_lang_ts_,
  CommandDestinationsTablevue_type_template_id_c66cd04c_render,
  CommandDestinationsTablevue_type_template_id_c66cd04c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CommandDestinationsTable = (CommandDestinationsTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandRouterSection.vue?vue&type=template&id=22af55d2&
var CommandRouterSectionvue_type_template_id_22af55d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('content-section',{attrs:{"icon":"fa-sitemap","fa":true,"title":"Command Router"}},[(_vm.router)?_c('v-card',{attrs:{"flat":""}},[(_vm.isDeviceTypeMappingRouter)?_c('device-type-mapping-router-summary',{attrs:{"router":_vm.router}}):_vm._e(),_c('content-link',{staticClass:"mb-2",attrs:{"icon":"fa-edit","text":"Edit command router settings"},on:{"linkClicked":_vm.onUpdateCommandRouter}}),_c('content-link',{attrs:{"icon":"fa-trash","text":"Unset command router"},on:{"linkClicked":_vm.onUnsetCommandRouter}})],1):_c('v-card',{attrs:{"flat":""}},[_c('content-warning',{attrs:{"text":"No command router is set. This will cause tenant engine startup to fail!"}}),_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-plus-circle","text":"Add new command router"},on:{"linkClicked":_vm.onAddCommandRouter}})],1),_c('new-command-router-chooser',{ref:"chooser",on:{"chosen":_vm.onCommandRouterChosen}}),_c('device-type-mapping-router-create-dialog',{ref:"dtmRouterCreate"})],1)}
var CommandRouterSectionvue_type_template_id_22af55d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandRouterSection.vue?vue&type=template&id=22af55d2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NewCommandRouterChooser.vue?vue&type=template&id=43bca90c&
var NewCommandRouterChooservue_type_template_id_43bca90c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('new-element-chooser',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Add Command Router","width":"500"}},[_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"device-type-mapping"},on:{"chosen":_vm.onChosen}},[_vm._v("Device Type Mapping Router")])],1)}
var NewCommandRouterChooservue_type_template_id_43bca90c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NewCommandRouterChooser.vue?vue&type=template&id=43bca90c&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NewCommandRouterChooser.vue?vue&type=script&lang=ts&





var NewCommandRouterChooservue_type_script_lang_ts_NewCommandRouterChooser = /** @class */ (function (_super) {
    __extends(NewCommandRouterChooser, _super);
    function NewCommandRouterChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NewCommandRouterChooser.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].CommandDelivery;
        },
        enumerable: true,
        configurable: true
    });
    /** Open chooser */
    NewCommandRouterChooser.prototype.openChooser = function () {
        this.dialog.openDialog();
    };
    /** Close chooser */
    NewCommandRouterChooser.prototype.closeChooser = function () {
        this.dialog.closeDialog();
    };
    /** Close chooser on item click */
    NewCommandRouterChooser.prototype.onChosen = function (id) {
        this.closeChooser();
        this.$emit("chosen", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], NewCommandRouterChooser.prototype, "dialog", void 0);
    NewCommandRouterChooser = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { NewElementChooser: external_sitewhere_ide_components_["NewElementChooser"], NewElementEntry: external_sitewhere_ide_components_["NewElementEntry"] }
        })
    ], NewCommandRouterChooser);
    return NewCommandRouterChooser;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var NewCommandRouterChooservue_type_script_lang_ts_ = (NewCommandRouterChooservue_type_script_lang_ts_NewCommandRouterChooser);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NewCommandRouterChooser.vue?vue&type=script&lang=ts&
 /* harmony default export */ var commanddelivery_NewCommandRouterChooservue_type_script_lang_ts_ = (NewCommandRouterChooservue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NewCommandRouterChooser.vue





/* normalize component */

var NewCommandRouterChooser_component = normalizeComponent(
  commanddelivery_NewCommandRouterChooservue_type_script_lang_ts_,
  NewCommandRouterChooservue_type_template_id_43bca90c_render,
  NewCommandRouterChooservue_type_template_id_43bca90c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var commanddelivery_NewCommandRouterChooser = (NewCommandRouterChooser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterSummary.vue?vue&type=template&id=79b4d3e8&scoped=true&
var DeviceTypeMappingRouterSummaryvue_type_template_id_79b4d3e8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('div',[_vm._v("Device Type Mapping Router")]),_c('v-divider',{staticClass:"mt-2 mb-3",staticStyle:{"width":"50%"}}),(_vm.hasMappings)?_c('v-card',{staticClass:"mb-3",attrs:{"flat":""}},_vm._l((_vm.mappings),function(mapping,index){return _c('content-field',{key:mapping.token,attrs:{"name":mapping.token,"value":_vm.mappings[mapping.token],"alt":index % 2 == 1}})}),1):_c('v-card',{staticClass:"mb-3",attrs:{"flat":""}},[_vm._v("No mappings have been assigned.")]),(_vm.defaultDestination)?_c('v-card',{staticClass:"mb-4",attrs:{"flat":""}},[_c('content-field',{attrs:{"name":"default destination","value":_vm.defaultDestination}})],1):_c('v-card',{staticClass:"mb-4",attrs:{"flat":""}},[_c('content-warning',{attrs:{"text":"No default destination is set. This will cause tenant engine startup to fail!"}})],1)],1)}
var DeviceTypeMappingRouterSummaryvue_type_template_id_79b4d3e8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterSummary.vue?vue&type=template&id=79b4d3e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterSummary.vue?vue&type=script&lang=ts&





var DeviceTypeMappingRouterSummaryvue_type_script_lang_ts_DeviceTypeMappingRouterSummary = /** @class */ (function (_super) {
    __extends(DeviceTypeMappingRouterSummary, _super);
    function DeviceTypeMappingRouterSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceTypeMappingRouterSummary.prototype, "configuration", {
        /** Get device type mapping router configuration */
        get: function () {
            return this.router
                ? this.router.configuration
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceTypeMappingRouterSummary.prototype, "hasMappings", {
        /** Indicates if there are mappings */
        get: function () {
            return this.mappings ? this.mappings.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceTypeMappingRouterSummary.prototype, "mappings", {
        /** Current list of device type mappings */
        get: function () {
            return this.configuration ? this.configuration.mappings : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceTypeMappingRouterSummary.prototype, "defaultDestination", {
        /** Get default destination */
        get: function () {
            return this.configuration ? this.configuration.defaultDestination : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceTypeMappingRouterSummary.prototype, "router", void 0);
    DeviceTypeMappingRouterSummary = __decorate([
        Object(external_vue_property_decorator_["Component"])({ components: { VCard: lib_["VCard"], VDivider: lib_["VDivider"], ContentField: external_sitewhere_ide_components_["ContentField"], ContentWarning: external_sitewhere_ide_components_["ContentWarning"] } })
    ], DeviceTypeMappingRouterSummary);
    return DeviceTypeMappingRouterSummary;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DeviceTypeMappingRouterSummaryvue_type_script_lang_ts_ = (DeviceTypeMappingRouterSummaryvue_type_script_lang_ts_DeviceTypeMappingRouterSummary);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterSummary.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_DeviceTypeMappingRouterSummaryvue_type_script_lang_ts_ = (DeviceTypeMappingRouterSummaryvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterSummary.vue





/* normalize component */

var DeviceTypeMappingRouterSummary_component = normalizeComponent(
  devicetypemapping_DeviceTypeMappingRouterSummaryvue_type_script_lang_ts_,
  DeviceTypeMappingRouterSummaryvue_type_template_id_79b4d3e8_scoped_true_render,
  DeviceTypeMappingRouterSummaryvue_type_template_id_79b4d3e8_scoped_true_staticRenderFns,
  false,
  null,
  "79b4d3e8",
  null
  
)

/* harmony default export */ var devicetypemapping_DeviceTypeMappingRouterSummary = (DeviceTypeMappingRouterSummary_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterCreateDialog.vue?vue&type=template&id=2f1180d0&
var DeviceTypeMappingRouterCreateDialogvue_type_template_id_2f1180d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('device-type-mapping-router-dialog',{ref:"dialog",attrs:{"title":"Create Device Type Mapping Router","createLabel":"Create"},on:{"payload":_vm.onPayload}})}
var DeviceTypeMappingRouterCreateDialogvue_type_template_id_2f1180d0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterCreateDialog.vue?vue&type=template&id=2f1180d0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterDialog.vue?vue&type=template&id=f2183af2&
var DeviceTypeMappingRouterDialogvue_type_template_id_f2183af2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":"fa-sitemap","title":_vm.title,"width":"500","loaded":true,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":"Cancel"},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"tabs"},[_c('v-tab',{key:"manager"},[_vm._v("Mappings")])],1),_c('template',{slot:"tab-items"},[_c('v-tab-item',{key:"manager"},[_c('device-type-mapping-router-fields',{ref:"mappings",attrs:{"deviceTypes":_vm.deviceTypes}})],1)],1)],2)}
var DeviceTypeMappingRouterDialogvue_type_template_id_f2183af2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterDialog.vue?vue&type=template&id=f2183af2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterFields.vue?vue&type=template&id=0de7a184&
var DeviceTypeMappingRouterFieldsvue_type_template_id_0de7a184_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-select',{attrs:{"items":_vm.deviceTypes,"title":"Choose default command destination","label":"Default Destination","item-text":"name","item-value":"token","icon":"fa-check"},model:{value:(_vm.defaultDestination),callback:function ($$v) {_vm.defaultDestination=$$v},expression:"defaultDestination"}})],1)],1)}
var DeviceTypeMappingRouterFieldsvue_type_template_id_0de7a184_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterFields.vue?vue&type=template&id=0de7a184&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterFields.vue?vue&type=script&lang=ts&





var DeviceTypeMappingRouterFieldsvue_type_script_lang_ts_DeviceTypeMappingRouterFields = /** @class */ (function (_super) {
    __extends(DeviceTypeMappingRouterFields, _super);
    function DeviceTypeMappingRouterFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultDestination = null;
        return _this;
    }
    /** Reset section content */
    DeviceTypeMappingRouterFields.prototype.reset = function () {
        this.defaultDestination = null;
        this.$v.$reset();
    };
    /** Perform validation */
    DeviceTypeMappingRouterFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    DeviceTypeMappingRouterFields.prototype.load = function (input) {
        this.defaultDestination = input.defaultDestination || null;
    };
    /** Save form data to an object */
    DeviceTypeMappingRouterFields.prototype.save = function () {
        return {
            mappings: [],
            defaultDestination: this.defaultDestination || ""
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceTypeMappingRouterFields.prototype, "deviceTypes", void 0);
    DeviceTypeMappingRouterFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogSection: external_sitewhere_ide_components_["DialogSection"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormSelect: external_sitewhere_ide_components_["FormSelect"] },
            validations: {
                defaultDestination: {
                    required: validators["required"]
                }
            }
        })
    ], DeviceTypeMappingRouterFields);
    return DeviceTypeMappingRouterFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var DeviceTypeMappingRouterFieldsvue_type_script_lang_ts_ = (DeviceTypeMappingRouterFieldsvue_type_script_lang_ts_DeviceTypeMappingRouterFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_DeviceTypeMappingRouterFieldsvue_type_script_lang_ts_ = (DeviceTypeMappingRouterFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterFields.vue





/* normalize component */

var DeviceTypeMappingRouterFields_component = normalizeComponent(
  devicetypemapping_DeviceTypeMappingRouterFieldsvue_type_script_lang_ts_,
  DeviceTypeMappingRouterFieldsvue_type_template_id_0de7a184_render,
  DeviceTypeMappingRouterFieldsvue_type_template_id_0de7a184_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicetypemapping_DeviceTypeMappingRouterFields = (DeviceTypeMappingRouterFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterDialog.vue?vue&type=script&lang=ts&






var DeviceTypeMappingRouterDialogvue_type_script_lang_ts_DeviceTypeMappingRouterDialog = /** @class */ (function (_super) {
    __extends(DeviceTypeMappingRouterDialog, _super);
    function DeviceTypeMappingRouterDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceTypes = [];
        return _this;
    }
    /** Generate payload from UI */
    DeviceTypeMappingRouterDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.mappings.save());
        return payload;
    };
    /** Reset dialog contents */
    DeviceTypeMappingRouterDialog.prototype.reset = function () {
        this.loadDeviceTypes();
        if (this.mappings) {
            this.mappings.reset();
        }
    };
    /** Load device types asynchronously */
    DeviceTypeMappingRouterDialog.prototype.loadDeviceTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var criteria, format, response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        criteria = {
                            pageNumber: 1,
                            pageSize: 0
                        };
                        format = {};
                        return [4 /*yield*/, Object(external_sitewhere_ide_common_["listDeviceTypes"])(this.$store, criteria, format)];
                    case 1:
                        response = _a.sent();
                        this.deviceTypes = response.data.results;
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        Object(external_sitewhere_ide_common_["showError"])(this, err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** Load dialog from a given configuration */
    DeviceTypeMappingRouterDialog.prototype.load = function (config) {
        this.reset();
        if (this.mappings) {
            this.mappings.load(config);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    DeviceTypeMappingRouterDialog.prototype.onCreateClicked = function (e) {
        if (!this.mappings.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
        this.closeDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceTypeMappingRouterDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceTypeMappingRouterDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DeviceTypeMappingRouterDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DeviceTypeMappingRouterDialog.prototype, "mappings", void 0);
    DeviceTypeMappingRouterDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                DialogComponent: external_sitewhere_ide_components_["DialogComponent"],
                BaseDialog: external_sitewhere_ide_components_["BaseDialog"],
                DeviceTypeMappingRouterFields: devicetypemapping_DeviceTypeMappingRouterFields
            }
        })
    ], DeviceTypeMappingRouterDialog);
    return DeviceTypeMappingRouterDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var DeviceTypeMappingRouterDialogvue_type_script_lang_ts_ = (DeviceTypeMappingRouterDialogvue_type_script_lang_ts_DeviceTypeMappingRouterDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_DeviceTypeMappingRouterDialogvue_type_script_lang_ts_ = (DeviceTypeMappingRouterDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterDialog.vue





/* normalize component */

var DeviceTypeMappingRouterDialog_component = normalizeComponent(
  devicetypemapping_DeviceTypeMappingRouterDialogvue_type_script_lang_ts_,
  DeviceTypeMappingRouterDialogvue_type_template_id_f2183af2_render,
  DeviceTypeMappingRouterDialogvue_type_template_id_f2183af2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicetypemapping_DeviceTypeMappingRouterDialog = (DeviceTypeMappingRouterDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterCreateDialog.vue?vue&type=script&lang=ts&




var DeviceTypeMappingRouterCreateDialogvue_type_script_lang_ts_DeviceTypeMappingRouterCreateDialog = /** @class */ (function (_super) {
    __extends(DeviceTypeMappingRouterCreateDialog, _super);
    function DeviceTypeMappingRouterCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    DeviceTypeMappingRouterCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    DeviceTypeMappingRouterCreateDialog.prototype.openDialog = function () {
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DeviceTypeMappingRouterCreateDialog.prototype, "dialog", void 0);
    DeviceTypeMappingRouterCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                DeviceTypeMappingRouterDialog: devicetypemapping_DeviceTypeMappingRouterDialog
            }
        })
    ], DeviceTypeMappingRouterCreateDialog);
    return DeviceTypeMappingRouterCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DeviceTypeMappingRouterCreateDialogvue_type_script_lang_ts_ = (DeviceTypeMappingRouterCreateDialogvue_type_script_lang_ts_DeviceTypeMappingRouterCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_DeviceTypeMappingRouterCreateDialogvue_type_script_lang_ts_ = (DeviceTypeMappingRouterCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/DeviceTypeMappingRouterCreateDialog.vue





/* normalize component */

var DeviceTypeMappingRouterCreateDialog_component = normalizeComponent(
  devicetypemapping_DeviceTypeMappingRouterCreateDialogvue_type_script_lang_ts_,
  DeviceTypeMappingRouterCreateDialogvue_type_template_id_2f1180d0_render,
  DeviceTypeMappingRouterCreateDialogvue_type_template_id_2f1180d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicetypemapping_DeviceTypeMappingRouterCreateDialog = (DeviceTypeMappingRouterCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandRouterSection.vue?vue&type=script&lang=ts&








var CommandRouterSectionvue_type_script_lang_ts_CommandRouterSection = /** @class */ (function (_super) {
    __extends(CommandRouterSection, _super);
    function CommandRouterSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CommandRouterSection.prototype, "isDeviceTypeMappingRouter", {
        /** Check for device type mapping router */
        get: function () {
            return this.router && this.router.type == "device-type-mapping";
        },
        enumerable: true,
        configurable: true
    });
    /** Send event to unset the router */
    CommandRouterSection.prototype.onUnsetCommandRouter = function () {
        this.$emit("unset");
    };
    /** Open chooser for adding command router */
    CommandRouterSection.prototype.onAddCommandRouter = function () {
        this.chooser.openChooser();
    };
    /** Update command router settings */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    CommandRouterSection.prototype.onUpdateCommandRouter = function () { };
    /** Show dialog for creating command router */
    CommandRouterSection.prototype.onCommandRouterChosen = function (type) {
        if (type == "device-type-mapping") {
            this.dtmRouterCreate.openDialog();
        }
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandRouterSection.prototype, "router", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandRouterSection.prototype, "commandDestinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandRouterSection.prototype, "chooser", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CommandRouterSection.prototype, "dtmRouterCreate", void 0);
    CommandRouterSection = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VCard: lib_["VCard"],
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                ContentWarning: external_sitewhere_ide_components_["ContentWarning"],
                NewCommandRouterChooser: commanddelivery_NewCommandRouterChooser,
                DeviceTypeMappingRouterSummary: devicetypemapping_DeviceTypeMappingRouterSummary,
                DeviceTypeMappingRouterCreateDialog: devicetypemapping_DeviceTypeMappingRouterCreateDialog
            }
        })
    ], CommandRouterSection);
    return CommandRouterSection;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var CommandRouterSectionvue_type_script_lang_ts_ = (CommandRouterSectionvue_type_script_lang_ts_CommandRouterSection);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandRouterSection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var commanddelivery_CommandRouterSectionvue_type_script_lang_ts_ = (CommandRouterSectionvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandRouterSection.vue





/* normalize component */

var CommandRouterSection_component = normalizeComponent(
  commanddelivery_CommandRouterSectionvue_type_script_lang_ts_,
  CommandRouterSectionvue_type_template_id_22af55d2_render,
  CommandRouterSectionvue_type_template_id_22af55d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var commanddelivery_CommandRouterSection = (CommandRouterSection_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue?vue&type=script&lang=ts&








var CommandDeliveryPluginvue_type_script_lang_ts_CommandDeliveryPlugin = /** @class */ (function (_super) {
    __extends(CommandDeliveryPlugin, _super);
    function CommandDeliveryPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CommandDeliveryPlugin.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandDeliveryPlugin.prototype, "tenantId", {
        /** Tenant id */
        get: function () {
            return this.configuration ? this.configuration.tenant.token : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandDeliveryPlugin.prototype, "commandDeliveryConfiguration", {
        /** Get tenant configuration for command delivery */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandDeliveryPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandDeliveryPlugin.prototype, "commandDestinations", {
        /** Get command destinations list */
        get: function () {
            return this.commandDeliveryConfiguration
                ? this.commandDeliveryConfiguration.commandDestinations
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandDeliveryPlugin.prototype, "router", {
        /** Get configured router */
        get: function () {
            return this.commandDeliveryConfiguration
                ? this.commandDeliveryConfiguration.router
                : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Handle command destination created */
    CommandDeliveryPlugin.prototype.onCommandDestinationCreated = function (
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config) {
        this.markDirty();
    };
    /** Handle command destination updated */
    CommandDeliveryPlugin.prototype.onCommandDestinationUpdated = function (
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    originalId, 
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config) {
        this.markDirty();
    };
    /** Handle command destination deleted */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    CommandDeliveryPlugin.prototype.onCommandDestinationDeleted = function (id) {
        this.markDirty();
    };
    /** Handle unsetting router */
    CommandDeliveryPlugin.prototype.onUnsetCommandRouter = function () {
        if (this.commandDeliveryConfiguration) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.commandDeliveryConfiguration.router = null;
        }
        this.markDirty();
    };
    /** Mark data as having been updated */
    CommandDeliveryPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDeliveryPlugin.prototype, "configuration", void 0);
    CommandDeliveryPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VDivider: lib_["VDivider"],
                TenantEnginePlugin: tenantengines_TenantEnginePlugin,
                CommandDestinationsTable: CommandDestinationsTable,
                CommandRouterSection: commanddelivery_CommandRouterSection
            }
        })
    ], CommandDeliveryPlugin);
    return CommandDeliveryPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var CommandDeliveryPluginvue_type_script_lang_ts_ = (CommandDeliveryPluginvue_type_script_lang_ts_CommandDeliveryPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var commanddelivery_CommandDeliveryPluginvue_type_script_lang_ts_ = (CommandDeliveryPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue





/* normalize component */

var CommandDeliveryPlugin_component = normalizeComponent(
  commanddelivery_CommandDeliveryPluginvue_type_script_lang_ts_,
  CommandDeliveryPluginvue_type_template_id_497c7afc_scoped_true_render,
  CommandDeliveryPluginvue_type_template_id_497c7afc_scoped_true_staticRenderFns,
  false,
  null,
  "497c7afc",
  null
  
)

/* harmony default export */ var commanddelivery_CommandDeliveryPlugin = (CommandDeliveryPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue?vue&type=template&id=533c5c06&
var DeviceManagementPluginvue_type_template_id_533c5c06_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Device Management Datastore"}},[_c('datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"unsetDatastore":_vm.onUnsetDatastore}})],1)],1)}
var DeviceManagementPluginvue_type_template_id_533c5c06_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue?vue&type=template&id=533c5c06&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue?vue&type=script&lang=ts&






var DeviceManagementPluginvue_type_script_lang_ts_DeviceManagementPlugin = /** @class */ (function (_super) {
    __extends(DeviceManagementPlugin, _super);
    function DeviceManagementPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceManagementPlugin.prototype, "deviceManagement", {
        /** Get tenant configuration for device management */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceManagementPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceManagementPlugin.prototype, "datastore", {
        /** Get datastore definition */
        get: function () {
            return this.deviceManagement ? this.deviceManagement.datastore : null;
        },
        enumerable: true,
        configurable: true
    });
    DeviceManagementPlugin.prototype.onUnsetDatastore = function () {
        if (this.deviceManagement) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.deviceManagement.datastore = null;
        }
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceManagementPlugin.prototype, "configuration", void 0);
    DeviceManagementPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { ContentSection: external_sitewhere_ide_components_["ContentSection"], TenantEnginePlugin: tenantengines_TenantEnginePlugin, DatastoreSelector: common_DatastoreSelector }
        })
    ], DeviceManagementPlugin);
    return DeviceManagementPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DeviceManagementPluginvue_type_script_lang_ts_ = (DeviceManagementPluginvue_type_script_lang_ts_DeviceManagementPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicemanagement_DeviceManagementPluginvue_type_script_lang_ts_ = (DeviceManagementPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue





/* normalize component */

var DeviceManagementPlugin_component = normalizeComponent(
  devicemanagement_DeviceManagementPluginvue_type_script_lang_ts_,
  DeviceManagementPluginvue_type_template_id_533c5c06_render,
  DeviceManagementPluginvue_type_template_id_533c5c06_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicemanagement_DeviceManagementPlugin = (DeviceManagementPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue?vue&type=template&id=5f6048b3&
var EventSourcesPluginvue_type_template_id_5f6048b3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('event-sources-table',{attrs:{"tenantId":_vm.tenantId,"eventSources":_vm.eventSources},on:{"create":_vm.onEventSourceCreated,"update":_vm.onEventSourceUpdated,"delete":_vm.onEventSourceDeleted}})],1)}
var EventSourcesPluginvue_type_template_id_5f6048b3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue?vue&type=template&id=5f6048b3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourcesTable.vue?vue&type=template&id=446c8345&scoped=true&
var EventSourcesTablevue_type_template_id_446c8345_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('datatable-section',{attrs:{"icon":_vm.icon,"title":"Event Sources","headers":_vm.headers,"items":_vm.eventSourcesAsSortedArray,"width":"50%"},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_c('td',[_c('datatable-link',{attrs:{"text":props.item.meta.id},on:{"linkClicked":function($event){return _vm.onOpenEventSource(props.item.meta.id)}}})],1),_c('td',[_vm._v(_vm._s(props.item.meta.type))]),_c('td',[_vm._v(_vm._s(props.item.decoder.type))]),_c('td',[_c('content-delete-icon',{on:{"delete":function($event){return _vm.onDeleteEventSource(props.item.meta.id)}}})],1)]}},{key:"datatable-footer",fn:function(){return [_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-plus-circle","text":"Add new event source."},on:{"linkClicked":_vm.onAddEventSource}})]},proxy:true},{key:"datatable-dialogs",fn:function(){return [_c('new-event-source-chooser',{ref:"chooser",on:{"chosen":_vm.onEventSourceCreate}}),_c('active-mq-broker-event-source-create-dialog',{ref:"amqBrokerCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('active-mq-broker-event-source-update-dialog',{ref:"amqBrokerUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('active-mq-client-event-source-create-dialog',{ref:"amqClientCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('active-mq-client-event-source-update-dialog',{ref:"amqClientUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('coap-event-source-create-dialog',{ref:"coapCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('coap-event-source-update-dialog',{ref:"coapUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('event-hub-event-source-create-dialog',{ref:"eventHubCreate",on:{"create":_vm.onEventSourceAdded}}),_c('event-hub-event-source-update-dialog',{ref:"eventHubUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('mqtt-event-source-create-dialog',{ref:"mqttCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('mqtt-event-source-update-dialog',{ref:"mqttUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('rabbit-mq-event-source-create-dialog',{ref:"rabbitMqCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('rabbit-mq-event-source-update-dialog',{ref:"rabbitMqUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}})]},proxy:true}])})}
var EventSourcesTablevue_type_template_id_446c8345_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourcesTable.vue?vue&type=template&id=446c8345&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/NewEventSourceChooser.vue?vue&type=template&id=7b712fe0&
var NewEventSourceChooservue_type_template_id_7b712fe0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('new-element-chooser',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Add Event Source","width":"500"}},[_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"activemq-broker"},on:{"chosen":_vm.onChosen}},[_vm._v("ActiveMQ Broker Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"activemq-client"},on:{"chosen":_vm.onChosen}},[_vm._v("ActiveMQ Client Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"eventhub"},on:{"chosen":_vm.onChosen}},[_vm._v("Azure Event Hub Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"coap"},on:{"chosen":_vm.onChosen}},[_vm._v("CoAP Server Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"mqtt"},on:{"chosen":_vm.onChosen}},[_vm._v("MQTT Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","itemid":"rabbitmq"},on:{"chosen":_vm.onChosen}},[_vm._v("RabbitMQ Event Source")])],1)}
var NewEventSourceChooservue_type_template_id_7b712fe0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/NewEventSourceChooser.vue?vue&type=template&id=7b712fe0&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/NewEventSourceChooser.vue?vue&type=script&lang=ts&





var NewEventSourceChooservue_type_script_lang_ts_NewEventSourceChooser = /** @class */ (function (_super) {
    __extends(NewEventSourceChooser, _super);
    function NewEventSourceChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NewEventSourceChooser.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Open chooser */
    NewEventSourceChooser.prototype.openChooser = function () {
        this.dialog.openDialog();
    };
    /** Close chooser */
    NewEventSourceChooser.prototype.closeChooser = function () {
        this.dialog.closeDialog();
    };
    /** Close chooser on item click */
    NewEventSourceChooser.prototype.onChosen = function (id) {
        this.closeChooser();
        this.$emit("chosen", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], NewEventSourceChooser.prototype, "dialog", void 0);
    NewEventSourceChooser = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { NewElementChooser: external_sitewhere_ide_components_["NewElementChooser"], NewElementEntry: external_sitewhere_ide_components_["NewElementEntry"] }
        })
    ], NewEventSourceChooser);
    return NewEventSourceChooser;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var NewEventSourceChooservue_type_script_lang_ts_ = (NewEventSourceChooservue_type_script_lang_ts_NewEventSourceChooser);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/NewEventSourceChooser.vue?vue&type=script&lang=ts&
 /* harmony default export */ var eventsources_NewEventSourceChooservue_type_script_lang_ts_ = (NewEventSourceChooservue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/NewEventSourceChooser.vue





/* normalize component */

var NewEventSourceChooser_component = normalizeComponent(
  eventsources_NewEventSourceChooservue_type_script_lang_ts_,
  NewEventSourceChooservue_type_template_id_7b712fe0_render,
  NewEventSourceChooservue_type_template_id_7b712fe0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventsources_NewEventSourceChooser = (NewEventSourceChooser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceCreateDialog.vue?vue&type=template&id=31472f16&
var ActiveMqBrokerEventSourceCreateDialogvue_type_template_id_31472f16_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('active-mq-broker-event-source-dialog',{ref:"dialog",attrs:{"title":"Create ActiveMQ Broker Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var ActiveMqBrokerEventSourceCreateDialogvue_type_template_id_31472f16_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceCreateDialog.vue?vue&type=template&id=31472f16&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceDialog.vue?vue&type=template&id=7f1478aa&
var ActiveMqBrokerEventSourceDialogvue_type_template_id_7f1478aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"activemq-broker","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"broker"},[_vm._v("Broker")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"broker"},[_c('active-mq-broker-fields',{ref:"broker"})],1)],1)],2)}
var ActiveMqBrokerEventSourceDialogvue_type_template_id_7f1478aa_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceDialog.vue?vue&type=template&id=7f1478aa&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourceDialog.vue?vue&type=template&id=2bc0b976&
var EventSourceDialogvue_type_template_id_2bc0b976_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"visible":_vm.visible,"createLabel":_vm.createLabel || 'Create',"cancelLabel":_vm.cancelLabel || 'Cancel'},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"header"},[_c('dialog-header',{staticClass:"pl-3 pr-3 pt-2 pb-1"},[_c('v-layout',{staticClass:"pl-2 pr-2 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs5":""}},[(_vm.visible)?_c('form-text',{staticClass:"mr-3",attrs:{"label":"Event source id","title":"Unique event source identifier.","icon":"info","dense":true,"autofocus":true},model:{value:(_vm.id),callback:function ($$v) {_vm.id=$$v},expression:"id"}},[(!_vm.$v.id.required && _vm.$v.$dirty)?_c('span',[_vm._v("Id is required.")]):_vm._e(),(!_vm.$v.id.idConflict && _vm.$v.$dirty)?_c('span',[_vm._v("Id already in use.")]):_vm._e()]):_vm._e()],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-select',{attrs:{"items":_vm.decoderTypes,"title":"Choose decoder for event source","label":"Decoder","item-text":"text","item-value":"value","icon":"settings"},model:{value:(_vm.decoderType),callback:function ($$v) {_vm.decoderType=$$v},expression:"decoderType"}})],1)],1)],1)],1),_c('template',{slot:"tabs"},[_vm._t("event-source-tabs"),_c('v-tab',{key:"decoder"},[_vm._v("Decoder")])],2),_c('template',{slot:"tab-items"},[_vm._t("event-source-tab-items"),_c('v-tab-item',{key:"decoder"},[_c('decoder-configuration',{ref:"decoder",attrs:{"decoder":_vm.decoder,"tenantId":_vm.tenantId}})],1)],2)],2)}
var EventSourceDialogvue_type_template_id_2bc0b976_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourceDialog.vue?vue&type=template&id=2bc0b976&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/DecoderConfiguration.vue?vue&type=template&id=7df94056&
var DecoderConfigurationvue_type_template_id_7df94056_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[(_vm.decoderType == 'json')?_c('json-decoder-configuration',{ref:"details"}):_vm._e(),(_vm.decoderType == 'protobuf')?_c('protobuf-decoder-configuration',{ref:"details"}):_vm._e(),(_vm.decoderType == 'scripted')?_c('scripted-event-decoder-configuration',{ref:"details",attrs:{"tenantId":_vm.tenantId}}):_vm._e()],1)}
var DecoderConfigurationvue_type_template_id_7df94056_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/DecoderConfiguration.vue?vue&type=template&id=7df94056&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/json/JsonDecoderConfiguration.vue?vue&type=template&id=4706678f&
var JsonDecoderConfigurationvue_type_template_id_4706678f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('no-configuration')}
var JsonDecoderConfigurationvue_type_template_id_4706678f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/json/JsonDecoderConfiguration.vue?vue&type=template&id=4706678f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/NoConfiguration.vue?vue&type=template&id=ff1f015a&scoped=true&
var NoConfigurationvue_type_template_id_ff1f015a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('v-card-text',{staticClass:"padded-message subheading"},[_vm._v("This decoder has no configurable attributes.")])],1)}
var NoConfigurationvue_type_template_id_ff1f015a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/NoConfiguration.vue?vue&type=template&id=ff1f015a&scoped=true&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/NoConfiguration.vue?vue&type=script&lang=ts&




var decoders_NoConfigurationvue_type_script_lang_ts_NoConfiguration = /** @class */ (function (_super) {
    __extends(NoConfiguration, _super);
    function NoConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({ components: { VCard: lib_["VCard"], VCardText: lib_["VCardText"] } })
    ], NoConfiguration);
    return NoConfiguration;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var decoders_NoConfigurationvue_type_script_lang_ts_ = (decoders_NoConfigurationvue_type_script_lang_ts_NoConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/NoConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var eventsources_decoders_NoConfigurationvue_type_script_lang_ts_ = (decoders_NoConfigurationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/NoConfiguration.vue?vue&type=style&index=0&id=ff1f015a&scoped=true&lang=css&
var NoConfigurationvue_type_style_index_0_id_ff1f015a_scoped_true_lang_css_ = __webpack_require__("ae2b");

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/NoConfiguration.vue






/* normalize component */

var decoders_NoConfiguration_component = normalizeComponent(
  eventsources_decoders_NoConfigurationvue_type_script_lang_ts_,
  NoConfigurationvue_type_template_id_ff1f015a_scoped_true_render,
  NoConfigurationvue_type_template_id_ff1f015a_scoped_true_staticRenderFns,
  false,
  null,
  "ff1f015a",
  null
  
)

/* harmony default export */ var decoders_NoConfiguration = (decoders_NoConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/json/JsonDecoderConfiguration.vue?vue&type=script&lang=ts&




var JsonDecoderConfigurationvue_type_script_lang_ts_JsonDecoderConfiguration = /** @class */ (function (_super) {
    __extends(JsonDecoderConfiguration, _super);
    function JsonDecoderConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Reset section content */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    JsonDecoderConfiguration.prototype.reset = function () { };
    /** Perform validation */
    JsonDecoderConfiguration.prototype.validate = function () {
        return true;
    };
    /** Load form data from an object */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    JsonDecoderConfiguration.prototype.load = function (input) { };
    /** Save form data to an object */
    JsonDecoderConfiguration.prototype.save = function () {
        return {};
    };
    JsonDecoderConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                NoConfiguration: decoders_NoConfiguration
            }
        })
    ], JsonDecoderConfiguration);
    return JsonDecoderConfiguration;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var JsonDecoderConfigurationvue_type_script_lang_ts_ = (JsonDecoderConfigurationvue_type_script_lang_ts_JsonDecoderConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/json/JsonDecoderConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var json_JsonDecoderConfigurationvue_type_script_lang_ts_ = (JsonDecoderConfigurationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/json/JsonDecoderConfiguration.vue





/* normalize component */

var JsonDecoderConfiguration_component = normalizeComponent(
  json_JsonDecoderConfigurationvue_type_script_lang_ts_,
  JsonDecoderConfigurationvue_type_template_id_4706678f_render,
  JsonDecoderConfigurationvue_type_template_id_4706678f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var json_JsonDecoderConfiguration = (JsonDecoderConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/protobuf/ProtobufDecoderConfiguration.vue?vue&type=template&id=7861155c&
var ProtobufDecoderConfigurationvue_type_template_id_7861155c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('no-configuration')}
var ProtobufDecoderConfigurationvue_type_template_id_7861155c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/protobuf/ProtobufDecoderConfiguration.vue?vue&type=template&id=7861155c&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/protobuf/ProtobufDecoderConfiguration.vue?vue&type=script&lang=ts&




var ProtobufDecoderConfigurationvue_type_script_lang_ts_ProtobufDecoderConfiguration = /** @class */ (function (_super) {
    __extends(ProtobufDecoderConfiguration, _super);
    function ProtobufDecoderConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Reset section content */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    ProtobufDecoderConfiguration.prototype.reset = function () { };
    /** Perform validation */
    ProtobufDecoderConfiguration.prototype.validate = function () {
        return true;
    };
    /** Load form data from an object */
    /* eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    ProtobufDecoderConfiguration.prototype.load = function (input) { };
    /** Save form data to an object */
    ProtobufDecoderConfiguration.prototype.save = function () {
        return {};
    };
    ProtobufDecoderConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                NoConfiguration: decoders_NoConfiguration
            }
        })
    ], ProtobufDecoderConfiguration);
    return ProtobufDecoderConfiguration;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var ProtobufDecoderConfigurationvue_type_script_lang_ts_ = (ProtobufDecoderConfigurationvue_type_script_lang_ts_ProtobufDecoderConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/protobuf/ProtobufDecoderConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var protobuf_ProtobufDecoderConfigurationvue_type_script_lang_ts_ = (ProtobufDecoderConfigurationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/protobuf/ProtobufDecoderConfiguration.vue





/* normalize component */

var ProtobufDecoderConfiguration_component = normalizeComponent(
  protobuf_ProtobufDecoderConfigurationvue_type_script_lang_ts_,
  ProtobufDecoderConfigurationvue_type_template_id_7861155c_render,
  ProtobufDecoderConfigurationvue_type_template_id_7861155c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var protobuf_ProtobufDecoderConfiguration = (ProtobufDecoderConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderConfiguration.vue?vue&type=template&id=e83a6384&
var ScriptedEventDecoderConfigurationvue_type_template_id_e83a6384_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('scripted-event-decoder-fields',{ref:"script",attrs:{"tenantId":_vm.tenantId}})}
var ScriptedEventDecoderConfigurationvue_type_template_id_e83a6384_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderConfiguration.vue?vue&type=template&id=e83a6384&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderFields.vue?vue&type=template&id=c534bf74&
var ScriptedEventDecoderFieldsvue_type_template_id_c534bf74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('sw-dialog-form',[_c('v-flex',{attrs:{"xs8":""}},[_c('sw-script-chooser',{ref:"chooser",staticClass:"mr-3",attrs:{"label":"Event Decoder Script","title":"Script used to decode event payloads.","tenantId":_vm.tenantId,"functionalArea":"event-sources","category":"event-sources-event-decoder-category","icon":"fa-code"},model:{value:(_vm.scriptId),callback:function ($$v) {_vm.scriptId=$$v},expression:"scriptId"}},[(!_vm.$v.scriptId.required && _vm.$v.$dirty)?_c('span',[_vm._v("Event decoder script is required.")]):_vm._e()])],1)],1)}
var ScriptedEventDecoderFieldsvue_type_template_id_c534bf74_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderFields.vue?vue&type=template&id=c534bf74&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderFields.vue?vue&type=script&lang=ts&





var ScriptedEventDecoderFieldsvue_type_script_lang_ts_ScriptedDecoderFields = /** @class */ (function (_super) {
    __extends(ScriptedDecoderFields, _super);
    function ScriptedDecoderFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scriptId = null;
        return _this;
    }
    /** Reset section content */
    ScriptedDecoderFields.prototype.reset = function () {
        if (this.chooser) {
            this.chooser.reset();
        }
        this.scriptId = null;
        this.$v.$reset();
    };
    /** Perform validation */
    ScriptedDecoderFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    ScriptedDecoderFields.prototype.load = function (input) {
        this.scriptId = input.scriptId || null;
    };
    /** Save form data to an object */
    ScriptedDecoderFields.prototype.save = function () {
        return {
            scriptId: this.scriptId || ""
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ScriptedDecoderFields.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ScriptedDecoderFields.prototype, "chooser", void 0);
    ScriptedDecoderFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], ScriptChooser: external_sitewhere_ide_components_["ScriptChooser"] },
            validations: {
                scriptId: {
                    required: validators["required"]
                }
            }
        })
    ], ScriptedDecoderFields);
    return ScriptedDecoderFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var ScriptedEventDecoderFieldsvue_type_script_lang_ts_ = (ScriptedEventDecoderFieldsvue_type_script_lang_ts_ScriptedDecoderFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var scripted_ScriptedEventDecoderFieldsvue_type_script_lang_ts_ = (ScriptedEventDecoderFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderFields.vue





/* normalize component */

var ScriptedEventDecoderFields_component = normalizeComponent(
  scripted_ScriptedEventDecoderFieldsvue_type_script_lang_ts_,
  ScriptedEventDecoderFieldsvue_type_template_id_c534bf74_render,
  ScriptedEventDecoderFieldsvue_type_template_id_c534bf74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ScriptedEventDecoderFields = (ScriptedEventDecoderFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderConfiguration.vue?vue&type=script&lang=ts&




var ScriptedEventDecoderConfigurationvue_type_script_lang_ts_ScriptedEventDecoderConfiguration = /** @class */ (function (_super) {
    __extends(ScriptedEventDecoderConfiguration, _super);
    function ScriptedEventDecoderConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Reset section content */
    ScriptedEventDecoderConfiguration.prototype.reset = function () {
        if (this.script) {
            this.script.reset();
        }
    };
    /** Perform validation */
    ScriptedEventDecoderConfiguration.prototype.validate = function () {
        if (!this.script.validate()) {
            return false;
        }
        return true;
    };
    /** Load form data from an object */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    ScriptedEventDecoderConfiguration.prototype.load = function (input) {
        this.reset();
        if (this.script) {
            this.script.load(input);
        }
    };
    /** Save form data to an object */
    ScriptedEventDecoderConfiguration.prototype.save = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        if (this.script) {
            Object.assign(payload, this.script.save());
        }
        return payload;
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ScriptedEventDecoderConfiguration.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ScriptedEventDecoderConfiguration.prototype, "script", void 0);
    ScriptedEventDecoderConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ScriptedEventDecoderFields: ScriptedEventDecoderFields
            }
        })
    ], ScriptedEventDecoderConfiguration);
    return ScriptedEventDecoderConfiguration;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var ScriptedEventDecoderConfigurationvue_type_script_lang_ts_ = (ScriptedEventDecoderConfigurationvue_type_script_lang_ts_ScriptedEventDecoderConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var scripted_ScriptedEventDecoderConfigurationvue_type_script_lang_ts_ = (ScriptedEventDecoderConfigurationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderConfiguration.vue





/* normalize component */

var ScriptedEventDecoderConfiguration_component = normalizeComponent(
  scripted_ScriptedEventDecoderConfigurationvue_type_script_lang_ts_,
  ScriptedEventDecoderConfigurationvue_type_template_id_e83a6384_render,
  ScriptedEventDecoderConfigurationvue_type_template_id_e83a6384_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var scripted_ScriptedEventDecoderConfiguration = (ScriptedEventDecoderConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/DecoderConfiguration.vue?vue&type=script&lang=ts&







var DecoderConfigurationvue_type_script_lang_ts_DecoderConfiguration = /** @class */ (function (_super) {
    __extends(DecoderConfiguration, _super);
    function DecoderConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecoderConfiguration.prototype.onDecoderTypeUpdated = function () {
        this.load(this.decoder);
    };
    Object.defineProperty(DecoderConfiguration.prototype, "decoderType", {
        /** Decoder type */
        get: function () {
            return this.decoder ? this.decoder.type : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Reset section content */
    DecoderConfiguration.prototype.reset = function () {
        if (this.details) {
            this.details.reset();
        }
    };
    /** Perform validation */
    DecoderConfiguration.prototype.validate = function () {
        if (this.details) {
            if (!this.details.validate()) {
                return false;
            }
        }
        return true;
    };
    /** Load form data from an object */
    DecoderConfiguration.prototype.load = function (input) {
        var _this = this;
        this.$nextTick().then(function () {
            if (_this.details) {
                _this.details.load(input.configuration);
            }
        });
    };
    /** Save form data to an object */
    DecoderConfiguration.prototype.save = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        if (this.details) {
            Object.assign(config, this.details.save());
        }
        return config;
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DecoderConfiguration.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DecoderConfiguration.prototype, "decoder", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DecoderConfiguration.prototype, "details", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("decoderType", { immediate: true })
    ], DecoderConfiguration.prototype, "onDecoderTypeUpdated", null);
    DecoderConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VCard: lib_["VCard"],
                JsonDecoderConfiguration: json_JsonDecoderConfiguration,
                ProtobufDecoderConfiguration: protobuf_ProtobufDecoderConfiguration,
                ScriptedEventDecoderConfiguration: scripted_ScriptedEventDecoderConfiguration
            }
        })
    ], DecoderConfiguration);
    return DecoderConfiguration;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var DecoderConfigurationvue_type_script_lang_ts_ = (DecoderConfigurationvue_type_script_lang_ts_DecoderConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/DecoderConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var decoders_DecoderConfigurationvue_type_script_lang_ts_ = (DecoderConfigurationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/DecoderConfiguration.vue





/* normalize component */

var DecoderConfiguration_component = normalizeComponent(
  decoders_DecoderConfigurationvue_type_script_lang_ts_,
  DecoderConfigurationvue_type_template_id_7df94056_render,
  DecoderConfigurationvue_type_template_id_7df94056_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var decoders_DecoderConfiguration = (DecoderConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourceDialog.vue?vue&type=script&lang=ts&






/** Validator for checking if id is already used */
var EventSourceDialogvue_type_script_lang_ts_idConflict = validators["helpers"].withParams({ type: "idConflict" }, 
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function (value, vm) {
    var idsInUse = vm.idsInUse;
    var conflict = false;
    idsInUse.forEach(function (id) {
        if (vm.id == id)
            conflict = true;
    });
    return !conflict;
});
var EventSourceDialogvue_type_script_lang_ts_EventSourceDialog = /** @class */ (function (_super) {
    __extends(EventSourceDialog, _super);
    function EventSourceDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultDecoder = {
            type: "json",
            configuration: {}
        };
        _this.id = null;
        _this.decoder = _this.defaultDecoder;
        /** List of decoder types */
        _this.decoderTypes = [
            {
                text: "JSON",
                value: "json"
            },
            {
                text: "Google Protocol Buffers",
                value: "protobuf"
            },
            {
                text: "Scripted Event Decoder",
                value: "scripted"
            }
        ];
        return _this;
    }
    Object.defineProperty(EventSourceDialog.prototype, "decoderType", {
        /** Decoder type */
        get: function () {
            return this.decoder ? this.decoder.type : null;
        },
        /** Blank configuration if type updated */
        set: function (value) {
            if (value) {
                this.decoder = {
                    type: value,
                    configuration: {}
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Save dialog fields */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    EventSourceDialog.prototype.save = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = { id: this.id, type: this.type };
        this.decoder.configuration = this.decoderConfiguration.save();
        var decoder = {
            decoder: this.decoder
        };
        Object.assign(config, decoder);
        return config;
    };
    /** Reset the dialog */
    EventSourceDialog.prototype.reset = function () {
        this.id = null;
        this.decoder = this.defaultDecoder;
        this.setActiveTab(0);
        this.decoderConfiguration.reset();
        this.$v.$reset();
    };
    /** Validate fields */
    EventSourceDialog.prototype.validate = function () {
        if (!this.decoderConfiguration.validate()) {
            return false;
        }
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load dialog from a given configuration */
    EventSourceDialog.prototype.load = function (config) {
        this.id = config.id;
        this.decoder = config.decoder;
    };
    /** Set the active tab */
    EventSourceDialog.prototype.setActiveTab = function (tab) {
        this.dialog.setActiveTab(tab);
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    EventSourceDialog.prototype.onCreateClicked = function (e) {
        this.$emit("createClicked", e);
    };
    /** Called after cancel button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    EventSourceDialog.prototype.onCancelClicked = function (e) {
        this.$emit("cancelClicked", e);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "type", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "icon", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "visible", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourceDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourceDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourceDialog.prototype, "decoderConfiguration", void 0);
    EventSourceDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                BaseDialog: external_sitewhere_ide_components_["BaseDialog"],
                DialogHeader: external_sitewhere_ide_components_["DialogHeader"],
                FormText: external_sitewhere_ide_components_["FormText"],
                FormSelect: external_sitewhere_ide_components_["FormSelect"],
                VFlex: lib_["VFlex"],
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                DecoderConfiguration: decoders_DecoderConfiguration
            },
            validations: {
                id: {
                    required: validators["required"],
                    idConflict: EventSourceDialogvue_type_script_lang_ts_idConflict
                }
            }
        })
    ], EventSourceDialog);
    return EventSourceDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var EventSourceDialogvue_type_script_lang_ts_ = (EventSourceDialogvue_type_script_lang_ts_EventSourceDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourceDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var eventsources_EventSourceDialogvue_type_script_lang_ts_ = (EventSourceDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourceDialog.vue





/* normalize component */

var EventSourceDialog_component = normalizeComponent(
  eventsources_EventSourceDialogvue_type_script_lang_ts_,
  EventSourceDialogvue_type_template_id_2bc0b976_render,
  EventSourceDialogvue_type_template_id_2bc0b976_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventsources_EventSourceDialog = (EventSourceDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerFields.vue?vue&type=template&id=b0838686&
var ActiveMqBrokerFieldsvue_type_template_id_b0838686_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('sw-dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('sw-form-text',{attrs:{"required":"","label":"Broker name","title":"Broker name.","icon":"info"},model:{value:(_vm.brokerName),callback:function ($$v) {_vm.brokerName=$$v},expression:"brokerName"}},[(!_vm.$v.brokerName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Broker name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('sw-form-text',{attrs:{"required":"","label":"Transport URI","title":"Transport URI.","icon":"router"},model:{value:(_vm.transportUri),callback:function ($$v) {_vm.transportUri=$$v},expression:"transportUri"}},[(!_vm.$v.transportUri.required && _vm.$v.$dirty)?_c('span',[_vm._v("Transport URI is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('sw-form-text',{staticClass:"mr-3",attrs:{"required":"","label":"Queue name","title":"Queue name.","icon":"info"},model:{value:(_vm.queueName),callback:function ($$v) {_vm.queueName=$$v},expression:"queueName"}},[(!_vm.$v.queueName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Queue name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('sw-form-text',{attrs:{"required":"","label":"Number of consumers","title":"Number of consumers.","icon":"settings","type":"number"},model:{value:(_vm.numConsumers),callback:function ($$v) {_vm.numConsumers=$$v},expression:"numConsumers"}},[(!_vm.$v.numConsumers.required && _vm.$v.$dirty)?_c('span',[_vm._v("Number of consumers is required.")]):_vm._e()])],1)],1)}
var ActiveMqBrokerFieldsvue_type_template_id_b0838686_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerFields.vue?vue&type=template&id=b0838686&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerFields.vue?vue&type=script&lang=ts&





var ActiveMqBrokerFieldsvue_type_script_lang_ts_ActiveMqBrokerFields = /** @class */ (function (_super) {
    __extends(ActiveMqBrokerFields, _super);
    function ActiveMqBrokerFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brokerName = "sitewhere";
        _this.transportUri = "";
        _this.queueName = "sitewhere";
        _this.numConsumers = 3;
        return _this;
    }
    /** Reset section content */
    ActiveMqBrokerFields.prototype.reset = function () {
        this.brokerName = "sitewhere";
        this.transportUri = "";
        this.queueName = "sitewhere";
        this.numConsumers = 3;
        this.$v.$reset();
    };
    /** Perform validation */
    ActiveMqBrokerFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    ActiveMqBrokerFields.prototype.load = function (input) {
        this.brokerName = input.brokerName || "sitewhere";
        this.transportUri = input.transportUri || "";
        this.queueName = input.queueName || "sitewhere";
        this.numConsumers = input.numConsumers || 3;
    };
    /** Save form data to an object */
    ActiveMqBrokerFields.prototype.save = function () {
        return {
            brokerName: this.brokerName,
            transportUri: this.transportUri,
            queueName: this.queueName,
            numConsumers: this.numConsumers
        };
    };
    ActiveMqBrokerFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] },
            validations: {
                brokerName: {
                    required: validators["required"]
                },
                transportUri: {
                    required: validators["required"]
                },
                queueName: {
                    required: validators["required"]
                },
                numConsumers: {
                    required: validators["required"]
                }
            }
        })
    ], ActiveMqBrokerFields);
    return ActiveMqBrokerFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var ActiveMqBrokerFieldsvue_type_script_lang_ts_ = (ActiveMqBrokerFieldsvue_type_script_lang_ts_ActiveMqBrokerFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var activemq_ActiveMqBrokerFieldsvue_type_script_lang_ts_ = (ActiveMqBrokerFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerFields.vue





/* normalize component */

var ActiveMqBrokerFields_component = normalizeComponent(
  activemq_ActiveMqBrokerFieldsvue_type_script_lang_ts_,
  ActiveMqBrokerFieldsvue_type_template_id_b0838686_render,
  ActiveMqBrokerFieldsvue_type_template_id_b0838686_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var activemq_ActiveMqBrokerFields = (ActiveMqBrokerFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceDialog.vue?vue&type=script&lang=ts&







var ActiveMqBrokerEventSourceDialogvue_type_script_lang_ts_ActiveMqBrokerEventSourceDialog = /** @class */ (function (_super) {
    __extends(ActiveMqBrokerEventSourceDialog, _super);
    function ActiveMqBrokerEventSourceDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ActiveMqBrokerEventSourceDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    ActiveMqBrokerEventSourceDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        Object.assign(config, this.broker.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    ActiveMqBrokerEventSourceDialog.prototype.reset = function () {
        if (this.broker) {
            this.broker.reset();
        }
        this.dialog.reset();
    };
    /** Load dialog from a given configuration */
    ActiveMqBrokerEventSourceDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.broker) {
            this.broker.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    ActiveMqBrokerEventSourceDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.broker.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ActiveMqBrokerEventSourceDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ActiveMqBrokerEventSourceDialog.prototype, "broker", void 0);
    ActiveMqBrokerEventSourceDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                EventSourceDialog: eventsources_EventSourceDialog,
                ActiveMqBrokerFields: activemq_ActiveMqBrokerFields
            }
        })
    ], ActiveMqBrokerEventSourceDialog);
    return ActiveMqBrokerEventSourceDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var ActiveMqBrokerEventSourceDialogvue_type_script_lang_ts_ = (ActiveMqBrokerEventSourceDialogvue_type_script_lang_ts_ActiveMqBrokerEventSourceDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var activemq_ActiveMqBrokerEventSourceDialogvue_type_script_lang_ts_ = (ActiveMqBrokerEventSourceDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceDialog.vue





/* normalize component */

var ActiveMqBrokerEventSourceDialog_component = normalizeComponent(
  activemq_ActiveMqBrokerEventSourceDialogvue_type_script_lang_ts_,
  ActiveMqBrokerEventSourceDialogvue_type_template_id_7f1478aa_render,
  ActiveMqBrokerEventSourceDialogvue_type_template_id_7f1478aa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var activemq_ActiveMqBrokerEventSourceDialog = (ActiveMqBrokerEventSourceDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceCreateDialog.vue?vue&type=script&lang=ts&




var ActiveMqBrokerEventSourceCreateDialogvue_type_script_lang_ts_ActiveMqBrokerEventSourceCreateDialog = /** @class */ (function (_super) {
    __extends(ActiveMqBrokerEventSourceCreateDialog, _super);
    function ActiveMqBrokerEventSourceCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    ActiveMqBrokerEventSourceCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    ActiveMqBrokerEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ActiveMqBrokerEventSourceCreateDialog.prototype, "dialog", void 0);
    ActiveMqBrokerEventSourceCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ActiveMqBrokerEventSourceDialog: activemq_ActiveMqBrokerEventSourceDialog
            }
        })
    ], ActiveMqBrokerEventSourceCreateDialog);
    return ActiveMqBrokerEventSourceCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var ActiveMqBrokerEventSourceCreateDialogvue_type_script_lang_ts_ = (ActiveMqBrokerEventSourceCreateDialogvue_type_script_lang_ts_ActiveMqBrokerEventSourceCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var activemq_ActiveMqBrokerEventSourceCreateDialogvue_type_script_lang_ts_ = (ActiveMqBrokerEventSourceCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceCreateDialog.vue





/* normalize component */

var ActiveMqBrokerEventSourceCreateDialog_component = normalizeComponent(
  activemq_ActiveMqBrokerEventSourceCreateDialogvue_type_script_lang_ts_,
  ActiveMqBrokerEventSourceCreateDialogvue_type_template_id_31472f16_render,
  ActiveMqBrokerEventSourceCreateDialogvue_type_template_id_31472f16_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var activemq_ActiveMqBrokerEventSourceCreateDialog = (ActiveMqBrokerEventSourceCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceUpdateDialog.vue?vue&type=template&id=1a344a0c&
var ActiveMqBrokerEventSourceUpdateDialogvue_type_template_id_1a344a0c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('active-mq-broker-event-source-dialog',{ref:"dialog",attrs:{"title":"Update ActiveMQ Broker Event Source","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var ActiveMqBrokerEventSourceUpdateDialogvue_type_template_id_1a344a0c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceUpdateDialog.vue?vue&type=template&id=1a344a0c&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceUpdateDialog.vue?vue&type=script&lang=ts&




var ActiveMqBrokerEventSourceUpdateDialogvue_type_script_lang_ts_ActiveMqBrokerEventSourceUpdateDialog = /** @class */ (function (_super) {
    __extends(ActiveMqBrokerEventSourceUpdateDialog, _super);
    function ActiveMqBrokerEventSourceUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    ActiveMqBrokerEventSourceUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    ActiveMqBrokerEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ActiveMqBrokerEventSourceUpdateDialog.prototype, "dialog", void 0);
    ActiveMqBrokerEventSourceUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ActiveMqBrokerEventSourceDialog: activemq_ActiveMqBrokerEventSourceDialog
            }
        })
    ], ActiveMqBrokerEventSourceUpdateDialog);
    return ActiveMqBrokerEventSourceUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var ActiveMqBrokerEventSourceUpdateDialogvue_type_script_lang_ts_ = (ActiveMqBrokerEventSourceUpdateDialogvue_type_script_lang_ts_ActiveMqBrokerEventSourceUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var activemq_ActiveMqBrokerEventSourceUpdateDialogvue_type_script_lang_ts_ = (ActiveMqBrokerEventSourceUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceUpdateDialog.vue





/* normalize component */

var ActiveMqBrokerEventSourceUpdateDialog_component = normalizeComponent(
  activemq_ActiveMqBrokerEventSourceUpdateDialogvue_type_script_lang_ts_,
  ActiveMqBrokerEventSourceUpdateDialogvue_type_template_id_1a344a0c_render,
  ActiveMqBrokerEventSourceUpdateDialogvue_type_template_id_1a344a0c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var activemq_ActiveMqBrokerEventSourceUpdateDialog = (ActiveMqBrokerEventSourceUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceCreateDialog.vue?vue&type=template&id=22cf6ec0&
var ActiveMqClientEventSourceCreateDialogvue_type_template_id_22cf6ec0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('active-mq-client-event-source-dialog',{ref:"dialog",attrs:{"title":"Create ActiveMQ Client Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var ActiveMqClientEventSourceCreateDialogvue_type_template_id_22cf6ec0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceCreateDialog.vue?vue&type=template&id=22cf6ec0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceDialog.vue?vue&type=template&id=3572b4a1&
var ActiveMqClientEventSourceDialogvue_type_template_id_3572b4a1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"activemq-client","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"client"},[_vm._v("Client")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"client"},[_c('active-mq-client-fields',{ref:"client"})],1)],1)],2)}
var ActiveMqClientEventSourceDialogvue_type_template_id_3572b4a1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceDialog.vue?vue&type=template&id=3572b4a1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientFields.vue?vue&type=template&id=43a8b8cb&
var ActiveMqClientFieldsvue_type_template_id_43a8b8cb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","label":"Remote URI","title":"Remote URI.","icon":"router"},model:{value:(_vm.remoteUri),callback:function ($$v) {_vm.remoteUri=$$v},expression:"remoteUri"}},[(!_vm.$v.remoteUri.required && _vm.$v.$dirty)?_c('span',[_vm._v("Remote URI is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","label":"Queue name","title":"Queue name.","icon":"info"},model:{value:(_vm.queueName),callback:function ($$v) {_vm.queueName=$$v},expression:"queueName"}},[(!_vm.$v.queueName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Queue name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Number of consumers","title":"Number of consumers.","icon":"settings","type":"number"},model:{value:(_vm.numConsumers),callback:function ($$v) {_vm.numConsumers=$$v},expression:"numConsumers"}},[(!_vm.$v.numConsumers.required && _vm.$v.$dirty)?_c('span',[_vm._v("Number of consumers is required.")]):_vm._e()])],1)],1)}
var ActiveMqClientFieldsvue_type_template_id_43a8b8cb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientFields.vue?vue&type=template&id=43a8b8cb&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientFields.vue?vue&type=script&lang=ts&





var ActiveMqClientFieldsvue_type_script_lang_ts_ActiveMqClientFields = /** @class */ (function (_super) {
    __extends(ActiveMqClientFields, _super);
    function ActiveMqClientFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.remoteUri = "";
        _this.queueName = "sitewhere";
        _this.numConsumers = 3;
        return _this;
    }
    /** Reset section content */
    ActiveMqClientFields.prototype.reset = function () {
        this.remoteUri = "";
        this.queueName = "sitewhere";
        this.numConsumers = 3;
        this.$v.$reset();
    };
    /** Perform validation */
    ActiveMqClientFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    ActiveMqClientFields.prototype.load = function (input) {
        this.remoteUri = input.remoteUri || "";
        this.queueName = input.queueName || "sitewhere";
        this.numConsumers = input.numConsumers || 3;
    };
    /** Save form data to an object */
    ActiveMqClientFields.prototype.save = function () {
        return {
            remoteUri: this.remoteUri,
            queueName: this.queueName,
            numConsumers: this.numConsumers
        };
    };
    ActiveMqClientFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] },
            validations: {
                remoteUri: {
                    required: validators["required"]
                },
                queueName: {
                    required: validators["required"]
                },
                numConsumers: {
                    required: validators["required"]
                }
            }
        })
    ], ActiveMqClientFields);
    return ActiveMqClientFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var ActiveMqClientFieldsvue_type_script_lang_ts_ = (ActiveMqClientFieldsvue_type_script_lang_ts_ActiveMqClientFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var activemq_ActiveMqClientFieldsvue_type_script_lang_ts_ = (ActiveMqClientFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientFields.vue





/* normalize component */

var ActiveMqClientFields_component = normalizeComponent(
  activemq_ActiveMqClientFieldsvue_type_script_lang_ts_,
  ActiveMqClientFieldsvue_type_template_id_43a8b8cb_render,
  ActiveMqClientFieldsvue_type_template_id_43a8b8cb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var activemq_ActiveMqClientFields = (ActiveMqClientFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceDialog.vue?vue&type=script&lang=ts&







var ActiveMqClientEventSourceDialogvue_type_script_lang_ts_ActiveMqClientEventSourceDialog = /** @class */ (function (_super) {
    __extends(ActiveMqClientEventSourceDialog, _super);
    function ActiveMqClientEventSourceDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ActiveMqClientEventSourceDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    ActiveMqClientEventSourceDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        Object.assign(config, this.client.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    ActiveMqClientEventSourceDialog.prototype.reset = function () {
        if (this.client) {
            this.client.reset();
        }
        this.dialog.reset();
    };
    /** Load dialog from a given configuration */
    ActiveMqClientEventSourceDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.client) {
            this.client.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    ActiveMqClientEventSourceDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.client.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqClientEventSourceDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqClientEventSourceDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqClientEventSourceDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqClientEventSourceDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqClientEventSourceDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqClientEventSourceDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ActiveMqClientEventSourceDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ActiveMqClientEventSourceDialog.prototype, "client", void 0);
    ActiveMqClientEventSourceDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                EventSourceDialog: eventsources_EventSourceDialog,
                ActiveMqClientFields: activemq_ActiveMqClientFields
            }
        })
    ], ActiveMqClientEventSourceDialog);
    return ActiveMqClientEventSourceDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var ActiveMqClientEventSourceDialogvue_type_script_lang_ts_ = (ActiveMqClientEventSourceDialogvue_type_script_lang_ts_ActiveMqClientEventSourceDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var activemq_ActiveMqClientEventSourceDialogvue_type_script_lang_ts_ = (ActiveMqClientEventSourceDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceDialog.vue





/* normalize component */

var ActiveMqClientEventSourceDialog_component = normalizeComponent(
  activemq_ActiveMqClientEventSourceDialogvue_type_script_lang_ts_,
  ActiveMqClientEventSourceDialogvue_type_template_id_3572b4a1_render,
  ActiveMqClientEventSourceDialogvue_type_template_id_3572b4a1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var activemq_ActiveMqClientEventSourceDialog = (ActiveMqClientEventSourceDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceCreateDialog.vue?vue&type=script&lang=ts&




var ActiveMqClientEventSourceCreateDialogvue_type_script_lang_ts_ActiveMqBrokerEventSourceCreateDialog = /** @class */ (function (_super) {
    __extends(ActiveMqBrokerEventSourceCreateDialog, _super);
    function ActiveMqBrokerEventSourceCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    ActiveMqBrokerEventSourceCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    ActiveMqBrokerEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqBrokerEventSourceCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ActiveMqBrokerEventSourceCreateDialog.prototype, "dialog", void 0);
    ActiveMqBrokerEventSourceCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ActiveMqClientEventSourceDialog: activemq_ActiveMqClientEventSourceDialog
            }
        })
    ], ActiveMqBrokerEventSourceCreateDialog);
    return ActiveMqBrokerEventSourceCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var ActiveMqClientEventSourceCreateDialogvue_type_script_lang_ts_ = (ActiveMqClientEventSourceCreateDialogvue_type_script_lang_ts_ActiveMqBrokerEventSourceCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var activemq_ActiveMqClientEventSourceCreateDialogvue_type_script_lang_ts_ = (ActiveMqClientEventSourceCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceCreateDialog.vue





/* normalize component */

var ActiveMqClientEventSourceCreateDialog_component = normalizeComponent(
  activemq_ActiveMqClientEventSourceCreateDialogvue_type_script_lang_ts_,
  ActiveMqClientEventSourceCreateDialogvue_type_template_id_22cf6ec0_render,
  ActiveMqClientEventSourceCreateDialogvue_type_template_id_22cf6ec0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ActiveMqClientEventSourceCreateDialog = (ActiveMqClientEventSourceCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceUpdateDialog.vue?vue&type=template&id=d2aac8a2&
var ActiveMqClientEventSourceUpdateDialogvue_type_template_id_d2aac8a2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('active-mq-client-event-source-dialog',{ref:"dialog",attrs:{"title":"Update ActiveMQ Client Event Source","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var ActiveMqClientEventSourceUpdateDialogvue_type_template_id_d2aac8a2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceUpdateDialog.vue?vue&type=template&id=d2aac8a2&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceUpdateDialog.vue?vue&type=script&lang=ts&




var ActiveMqClientEventSourceUpdateDialogvue_type_script_lang_ts_ActiveMqClientEventSourceUpdateDialog = /** @class */ (function (_super) {
    __extends(ActiveMqClientEventSourceUpdateDialog, _super);
    function ActiveMqClientEventSourceUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    ActiveMqClientEventSourceUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    ActiveMqClientEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ActiveMqClientEventSourceUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], ActiveMqClientEventSourceUpdateDialog.prototype, "dialog", void 0);
    ActiveMqClientEventSourceUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ActiveMqClientEventSourceDialog: activemq_ActiveMqClientEventSourceDialog
            }
        })
    ], ActiveMqClientEventSourceUpdateDialog);
    return ActiveMqClientEventSourceUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var ActiveMqClientEventSourceUpdateDialogvue_type_script_lang_ts_ = (ActiveMqClientEventSourceUpdateDialogvue_type_script_lang_ts_ActiveMqClientEventSourceUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var activemq_ActiveMqClientEventSourceUpdateDialogvue_type_script_lang_ts_ = (ActiveMqClientEventSourceUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceUpdateDialog.vue





/* normalize component */

var ActiveMqClientEventSourceUpdateDialog_component = normalizeComponent(
  activemq_ActiveMqClientEventSourceUpdateDialogvue_type_script_lang_ts_,
  ActiveMqClientEventSourceUpdateDialogvue_type_template_id_d2aac8a2_render,
  ActiveMqClientEventSourceUpdateDialogvue_type_template_id_d2aac8a2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var activemq_ActiveMqClientEventSourceUpdateDialog = (ActiveMqClientEventSourceUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceCreateDialog.vue?vue&type=template&id=4d5c7d2a&
var CoapEventSourceCreateDialogvue_type_template_id_4d5c7d2a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('coap-event-source-dialog',{ref:"dialog",attrs:{"title":"Create CoAP Server Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var CoapEventSourceCreateDialogvue_type_template_id_4d5c7d2a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceCreateDialog.vue?vue&type=template&id=4d5c7d2a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceDialog.vue?vue&type=template&id=3783c35b&
var CoapEventSourceDialogvue_type_template_id_3783c35b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"coap","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"server"},[_vm._v("Server")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"server"},[_c('coap-server-fields',{ref:"server"})],1)],1)],2)}
var CoapEventSourceDialogvue_type_template_id_3783c35b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceDialog.vue?vue&type=template&id=3783c35b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapServerFields.vue?vue&type=template&id=200abc8a&
var CoapServerFieldsvue_type_template_id_200abc8a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","label":"Server port","title":"CoAP server port.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}},[(!_vm.$v.port.required && _vm.$v.$dirty)?_c('span',[_vm._v("Port is required.")]):_vm._e()])],1)],1)}
var CoapServerFieldsvue_type_template_id_200abc8a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapServerFields.vue?vue&type=template&id=200abc8a&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapServerFields.vue?vue&type=script&lang=ts&





var CoapServerFieldsvue_type_script_lang_ts_CoapServerFields = /** @class */ (function (_super) {
    __extends(CoapServerFields, _super);
    function CoapServerFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.port = 8583;
        return _this;
    }
    /** Reset section content */
    CoapServerFields.prototype.reset = function () {
        this.port = 8583;
        this.$v.$reset();
    };
    /** Perform validation */
    CoapServerFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    CoapServerFields.prototype.load = function (input) {
        this.port = input.port || 8583;
    };
    /** Save form data to an object */
    CoapServerFields.prototype.save = function () {
        return {
            port: this.port
        };
    };
    CoapServerFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] },
            validations: {
                port: {
                    required: validators["required"]
                }
            }
        })
    ], CoapServerFields);
    return CoapServerFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var CoapServerFieldsvue_type_script_lang_ts_ = (CoapServerFieldsvue_type_script_lang_ts_CoapServerFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapServerFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_CoapServerFieldsvue_type_script_lang_ts_ = (CoapServerFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapServerFields.vue





/* normalize component */

var CoapServerFields_component = normalizeComponent(
  coap_CoapServerFieldsvue_type_script_lang_ts_,
  CoapServerFieldsvue_type_template_id_200abc8a_render,
  CoapServerFieldsvue_type_template_id_200abc8a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_CoapServerFields = (CoapServerFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceDialog.vue?vue&type=script&lang=ts&







var CoapEventSourceDialogvue_type_script_lang_ts_CoapEventSourceDialog = /** @class */ (function (_super) {
    __extends(CoapEventSourceDialog, _super);
    function CoapEventSourceDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CoapEventSourceDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    CoapEventSourceDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        Object.assign(config, this.server.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    CoapEventSourceDialog.prototype.reset = function () {
        if (this.server) {
            this.server.reset();
        }
        this.dialog.reset();
    };
    /** Load dialog from a given configuration */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    CoapEventSourceDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.server) {
            this.server.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    CoapEventSourceDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.server.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapEventSourceDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapEventSourceDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapEventSourceDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapEventSourceDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapEventSourceDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapEventSourceDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CoapEventSourceDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CoapEventSourceDialog.prototype, "server", void 0);
    CoapEventSourceDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VTab: lib_["VTab"], VTabItem: lib_["VTabItem"], EventSourceDialog: eventsources_EventSourceDialog, CoapServerFields: coap_CoapServerFields }
        })
    ], CoapEventSourceDialog);
    return CoapEventSourceDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var CoapEventSourceDialogvue_type_script_lang_ts_ = (CoapEventSourceDialogvue_type_script_lang_ts_CoapEventSourceDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_CoapEventSourceDialogvue_type_script_lang_ts_ = (CoapEventSourceDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceDialog.vue





/* normalize component */

var CoapEventSourceDialog_component = normalizeComponent(
  coap_CoapEventSourceDialogvue_type_script_lang_ts_,
  CoapEventSourceDialogvue_type_template_id_3783c35b_render,
  CoapEventSourceDialogvue_type_template_id_3783c35b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_CoapEventSourceDialog = (CoapEventSourceDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceCreateDialog.vue?vue&type=script&lang=ts&




var CoapEventSourceCreateDialogvue_type_script_lang_ts_CoapEventSourceCreateDialog = /** @class */ (function (_super) {
    __extends(CoapEventSourceCreateDialog, _super);
    function CoapEventSourceCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    CoapEventSourceCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    CoapEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapEventSourceCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CoapEventSourceCreateDialog.prototype, "dialog", void 0);
    CoapEventSourceCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                CoapEventSourceDialog: coap_CoapEventSourceDialog
            }
        })
    ], CoapEventSourceCreateDialog);
    return CoapEventSourceCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var CoapEventSourceCreateDialogvue_type_script_lang_ts_ = (CoapEventSourceCreateDialogvue_type_script_lang_ts_CoapEventSourceCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_CoapEventSourceCreateDialogvue_type_script_lang_ts_ = (CoapEventSourceCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceCreateDialog.vue





/* normalize component */

var CoapEventSourceCreateDialog_component = normalizeComponent(
  coap_CoapEventSourceCreateDialogvue_type_script_lang_ts_,
  CoapEventSourceCreateDialogvue_type_template_id_4d5c7d2a_render,
  CoapEventSourceCreateDialogvue_type_template_id_4d5c7d2a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_CoapEventSourceCreateDialog = (CoapEventSourceCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceUpdateDialog.vue?vue&type=template&id=2f67a5e7&
var CoapEventSourceUpdateDialogvue_type_template_id_2f67a5e7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('coap-event-source-dialog',{ref:"dialog",attrs:{"title":"Update CoAP Server Event Source","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var CoapEventSourceUpdateDialogvue_type_template_id_2f67a5e7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceUpdateDialog.vue?vue&type=template&id=2f67a5e7&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceUpdateDialog.vue?vue&type=script&lang=ts&




var CoapEventSourceUpdateDialogvue_type_script_lang_ts_CoapEventSourceUpdateDialog = /** @class */ (function (_super) {
    __extends(CoapEventSourceUpdateDialog, _super);
    function CoapEventSourceUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    CoapEventSourceUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    CoapEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CoapEventSourceUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], CoapEventSourceUpdateDialog.prototype, "dialog", void 0);
    CoapEventSourceUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                CoapEventSourceDialog: coap_CoapEventSourceDialog
            }
        })
    ], CoapEventSourceUpdateDialog);
    return CoapEventSourceUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var CoapEventSourceUpdateDialogvue_type_script_lang_ts_ = (CoapEventSourceUpdateDialogvue_type_script_lang_ts_CoapEventSourceUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_CoapEventSourceUpdateDialogvue_type_script_lang_ts_ = (CoapEventSourceUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceUpdateDialog.vue





/* normalize component */

var CoapEventSourceUpdateDialog_component = normalizeComponent(
  coap_CoapEventSourceUpdateDialogvue_type_script_lang_ts_,
  CoapEventSourceUpdateDialogvue_type_template_id_2f67a5e7_render,
  CoapEventSourceUpdateDialogvue_type_template_id_2f67a5e7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_CoapEventSourceUpdateDialog = (CoapEventSourceUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceCreateDialog.vue?vue&type=template&id=67d40668&
var EventHubEventSourceCreateDialogvue_type_template_id_67d40668_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-hub-event-source-dialog',{ref:"dialog",attrs:{"title":"Create Azure Event Hub Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var EventHubEventSourceCreateDialogvue_type_template_id_67d40668_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceCreateDialog.vue?vue&type=template&id=67d40668&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceDialog.vue?vue&type=template&id=64c2eabf&
var EventHubEventSourceDialogvue_type_template_id_64c2eabf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"eventhub","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"connection"},[_vm._v("Connection")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"connection"},[_c('event-hub-fields',{ref:"connection"})],1)],1)],2)}
var EventHubEventSourceDialogvue_type_template_id_64c2eabf_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceDialog.vue?vue&type=template&id=64c2eabf&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubFields.vue?vue&type=template&id=4ced9c11&
var EventHubFieldsvue_type_template_id_4ced9c11_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","label":"Consumer group name","title":"Consumer group name.","icon":"info"},model:{value:(_vm.consumerGroupName),callback:function ($$v) {_vm.consumerGroupName=$$v},expression:"consumerGroupName"}},[(!_vm.$v.consumerGroupName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Consumer group name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Namespace name","title":"Namespace name.","icon":"info"},model:{value:(_vm.namespaceName),callback:function ($$v) {_vm.namespaceName=$$v},expression:"namespaceName"}},[(!_vm.$v.namespaceName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Namespace name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","label":"Event Hub name","title":"Event Hub name.","icon":"info"},model:{value:(_vm.eventHubName),callback:function ($$v) {_vm.eventHubName=$$v},expression:"eventHubName"}},[(!_vm.$v.eventHubName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Event Hub name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Host name prefix","title":"Host name prefix.","icon":"info"},model:{value:(_vm.hostNamePrefix),callback:function ($$v) {_vm.hostNamePrefix=$$v},expression:"hostNamePrefix"}},[(!_vm.$v.hostNamePrefix.required && _vm.$v.$dirty)?_c('span',[_vm._v("Host name prefix is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","label":"SAS key name","title":"SAS key name.","icon":"info"},model:{value:(_vm.sasKeyName),callback:function ($$v) {_vm.sasKeyName=$$v},expression:"sasKeyName"}},[(!_vm.$v.sasKeyName.required && _vm.$v.$dirty)?_c('span',[_vm._v("SAS key name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"SAS key","title":"SAS key.","icon":"info"},model:{value:(_vm.sasKey),callback:function ($$v) {_vm.sasKey=$$v},expression:"sasKey"}},[(!_vm.$v.sasKey.required && _vm.$v.$dirty)?_c('span',[_vm._v("SAS key is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","label":"Storage connection string","title":"Storage connection string.","icon":"info"},model:{value:(_vm.storageConnectionString),callback:function ($$v) {_vm.storageConnectionString=$$v},expression:"storageConnectionString"}},[(!_vm.$v.storageConnectionString.required && _vm.$v.$dirty)?_c('span',[_vm._v("Storage connection string is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Storage container name","title":"Storage container name.","icon":"info"},model:{value:(_vm.storageContainerName),callback:function ($$v) {_vm.storageContainerName=$$v},expression:"storageContainerName"}},[(!_vm.$v.storageContainerName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Storage container name is required.")]):_vm._e()])],1)],1)}
var EventHubFieldsvue_type_template_id_4ced9c11_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubFields.vue?vue&type=template&id=4ced9c11&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubFields.vue?vue&type=script&lang=ts&





var EventHubFieldsvue_type_script_lang_ts_EventHubFields = /** @class */ (function (_super) {
    __extends(EventHubFields, _super);
    function EventHubFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.consumerGroupName = "";
        _this.namespaceName = "";
        _this.eventHubName = "";
        _this.sasKeyName = "";
        _this.sasKey = "";
        _this.storageConnectionString = "";
        _this.storageContainerName = "";
        _this.hostNamePrefix = "";
        return _this;
    }
    /** Reset section content */
    EventHubFields.prototype.reset = function () {
        this.consumerGroupName = "";
        this.namespaceName = "";
        this.eventHubName = "";
        this.sasKeyName = "";
        this.sasKey = "";
        this.storageConnectionString = "";
        this.storageContainerName = "";
        this.hostNamePrefix = "";
        this.$v.$reset();
    };
    /** Perform validation */
    EventHubFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    EventHubFields.prototype.load = function (input) {
        this.consumerGroupName = input.consumerGroupName || "";
        this.namespaceName = input.namespaceName || "";
        this.eventHubName = input.eventHubName || "";
        this.sasKeyName = input.sasKeyName || "";
        this.sasKey = input.sasKey || "";
        this.storageConnectionString = input.storageConnectionString || "";
        this.storageContainerName = input.storageContainerName || "";
        this.hostNamePrefix = input.hostNamePrefix || "";
    };
    /** Save form data to an object */
    EventHubFields.prototype.save = function () {
        return {
            consumerGroupName: this.consumerGroupName,
            namespaceName: this.namespaceName,
            eventHubName: this.eventHubName,
            sasKeyName: this.sasKeyName,
            sasKey: this.sasKey,
            storageConnectionString: this.storageConnectionString,
            storageContainerName: this.storageContainerName,
            hostNamePrefix: this.hostNamePrefix
        };
    };
    EventHubFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] },
            validations: {
                consumerGroupName: {
                    required: validators["required"]
                },
                namespaceName: {
                    required: validators["required"]
                },
                eventHubName: {
                    required: validators["required"]
                },
                sasKeyName: {
                    required: validators["required"]
                },
                sasKey: {
                    required: validators["required"]
                },
                storageConnectionString: {
                    required: validators["required"]
                },
                storageContainerName: {
                    required: validators["required"]
                },
                hostNamePrefix: {
                    required: validators["required"]
                }
            }
        })
    ], EventHubFields);
    return EventHubFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var EventHubFieldsvue_type_script_lang_ts_ = (EventHubFieldsvue_type_script_lang_ts_EventHubFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var azure_EventHubFieldsvue_type_script_lang_ts_ = (EventHubFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubFields.vue





/* normalize component */

var EventHubFields_component = normalizeComponent(
  azure_EventHubFieldsvue_type_script_lang_ts_,
  EventHubFieldsvue_type_template_id_4ced9c11_render,
  EventHubFieldsvue_type_template_id_4ced9c11_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var azure_EventHubFields = (EventHubFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceDialog.vue?vue&type=script&lang=ts&







var EventHubEventSourceDialogvue_type_script_lang_ts_EventHubEventSourceDialog = /** @class */ (function (_super) {
    __extends(EventHubEventSourceDialog, _super);
    function EventHubEventSourceDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventHubEventSourceDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    EventHubEventSourceDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        Object.assign(config, this.connection.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    EventHubEventSourceDialog.prototype.reset = function () {
        if (this.connection) {
            this.connection.reset();
        }
        this.dialog.reset();
    };
    /** Load dialog from a given configuration */
    EventHubEventSourceDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.connection) {
            this.connection.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    EventHubEventSourceDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.connection.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventHubEventSourceDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventHubEventSourceDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventHubEventSourceDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventHubEventSourceDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventHubEventSourceDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventHubEventSourceDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventHubEventSourceDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventHubEventSourceDialog.prototype, "connection", void 0);
    EventHubEventSourceDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                EventSourceDialog: eventsources_EventSourceDialog,
                EventHubFields: azure_EventHubFields
            }
        })
    ], EventHubEventSourceDialog);
    return EventHubEventSourceDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var EventHubEventSourceDialogvue_type_script_lang_ts_ = (EventHubEventSourceDialogvue_type_script_lang_ts_EventHubEventSourceDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var azure_EventHubEventSourceDialogvue_type_script_lang_ts_ = (EventHubEventSourceDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceDialog.vue





/* normalize component */

var EventHubEventSourceDialog_component = normalizeComponent(
  azure_EventHubEventSourceDialogvue_type_script_lang_ts_,
  EventHubEventSourceDialogvue_type_template_id_64c2eabf_render,
  EventHubEventSourceDialogvue_type_template_id_64c2eabf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var azure_EventHubEventSourceDialog = (EventHubEventSourceDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceCreateDialog.vue?vue&type=script&lang=ts&




var EventHubEventSourceCreateDialogvue_type_script_lang_ts_EventHubEventSourceCreateDialog = /** @class */ (function (_super) {
    __extends(EventHubEventSourceCreateDialog, _super);
    function EventHubEventSourceCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    EventHubEventSourceCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    EventHubEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventHubEventSourceCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventHubEventSourceCreateDialog.prototype, "dialog", void 0);
    EventHubEventSourceCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                EventHubEventSourceDialog: azure_EventHubEventSourceDialog
            }
        })
    ], EventHubEventSourceCreateDialog);
    return EventHubEventSourceCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var EventHubEventSourceCreateDialogvue_type_script_lang_ts_ = (EventHubEventSourceCreateDialogvue_type_script_lang_ts_EventHubEventSourceCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var azure_EventHubEventSourceCreateDialogvue_type_script_lang_ts_ = (EventHubEventSourceCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceCreateDialog.vue





/* normalize component */

var EventHubEventSourceCreateDialog_component = normalizeComponent(
  azure_EventHubEventSourceCreateDialogvue_type_script_lang_ts_,
  EventHubEventSourceCreateDialogvue_type_template_id_67d40668_render,
  EventHubEventSourceCreateDialogvue_type_template_id_67d40668_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var azure_EventHubEventSourceCreateDialog = (EventHubEventSourceCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceUpdateDialog.vue?vue&type=template&id=65772122&
var EventHubEventSourceUpdateDialogvue_type_template_id_65772122_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-hub-event-source-dialog',{ref:"dialog",attrs:{"title":"Update Azure Event Hub Event Source","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var EventHubEventSourceUpdateDialogvue_type_template_id_65772122_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceUpdateDialog.vue?vue&type=template&id=65772122&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceUpdateDialog.vue?vue&type=script&lang=ts&




var EventHubEventSourceUpdateDialogvue_type_script_lang_ts_EventHubEventSourceUpdateDialog = /** @class */ (function (_super) {
    __extends(EventHubEventSourceUpdateDialog, _super);
    function EventHubEventSourceUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    EventHubEventSourceUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    EventHubEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventHubEventSourceUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventHubEventSourceUpdateDialog.prototype, "dialog", void 0);
    EventHubEventSourceUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                EventHubEventSourceDialog: azure_EventHubEventSourceDialog
            }
        })
    ], EventHubEventSourceUpdateDialog);
    return EventHubEventSourceUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var EventHubEventSourceUpdateDialogvue_type_script_lang_ts_ = (EventHubEventSourceUpdateDialogvue_type_script_lang_ts_EventHubEventSourceUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var azure_EventHubEventSourceUpdateDialogvue_type_script_lang_ts_ = (EventHubEventSourceUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceUpdateDialog.vue





/* normalize component */

var EventHubEventSourceUpdateDialog_component = normalizeComponent(
  azure_EventHubEventSourceUpdateDialogvue_type_script_lang_ts_,
  EventHubEventSourceUpdateDialogvue_type_template_id_65772122_render,
  EventHubEventSourceUpdateDialogvue_type_template_id_65772122_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var azure_EventHubEventSourceUpdateDialog = (EventHubEventSourceUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceCreateDialog.vue?vue&type=template&id=1a7dd8bb&
var MqttEventSourceCreateDialogvue_type_template_id_1a7dd8bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mqtt-event-source-dialog',{ref:"dialog",attrs:{"title":"Create MQTT Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var MqttEventSourceCreateDialogvue_type_template_id_1a7dd8bb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceCreateDialog.vue?vue&type=template&id=1a7dd8bb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceDialog.vue?vue&type=template&id=ee2ba3c4&
var MqttEventSourceDialogvue_type_template_id_ee2ba3c4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"mqtt","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"connection"},[_vm._v("Connection")]),_c('v-tab',{key:"authentication"},[_vm._v("Authentication")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"connection"},[_c('mqtt-connection-fields',{ref:"connection"})],1),_c('v-tab-item',{key:"authentication"},[_c('mqtt-authentication-fields',{ref:"authentication"})],1)],1)],2)}
var MqttEventSourceDialogvue_type_template_id_ee2ba3c4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceDialog.vue?vue&type=template&id=ee2ba3c4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttConnectionFields.vue?vue&type=template&id=16a68db7&
var MqttConnectionFieldsvue_type_template_id_16a68db7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs2":""}},[_c('form-select',{attrs:{"items":_vm.protocols,"title":"Choose connection protocol","label":"Protocol","item-text":"text","item-value":"value","icon":"lock"},model:{value:(_vm.protocol),callback:function ($$v) {_vm.protocol=$$v},expression:"protocol"}})],1),_c('v-flex',{attrs:{"xs8":""}},[_c('form-text',{staticClass:"ml-3 mr-3",attrs:{"required":"","label":"Hostname","title":"MQTT broker hostname.","icon":"router"},model:{value:(_vm.hostname),callback:function ($$v) {_vm.hostname=$$v},expression:"hostname"}},[(!_vm.$v.hostname.required && _vm.$v.$dirty)?_c('span',[_vm._v("Hostname is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs2":""}},[_c('form-text',{attrs:{"required":"","label":"Port","title":"MQTT broker port.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}},[(!_vm.$v.port.required && _vm.$v.$dirty)?_c('span',[_vm._v("Required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mb-4",attrs:{"required":"","label":"Topic","title":"MQTT topic to listen on.","icon":"arrow_forward"},model:{value:(_vm.topic),callback:function ($$v) {_vm.topic=$$v},expression:"topic"}},[(!_vm.$v.topic.required && _vm.$v.$dirty)?_c('span',[_vm._v("Topic is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-select',{staticClass:"mr-3",attrs:{"items":_vm.qosValues,"title":"Choose quality of service (QoS)","label":"QoS","item-text":"text","item-value":"value","icon":"done"},model:{value:(_vm.qos),callback:function ($$v) {_vm.qos=$$v},expression:"qos"}})],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Number of threads","title":"Number of threads used to handle processing.","icon":"settings","type":"number"},model:{value:(_vm.numThreads),callback:function ($$v) {_vm.numThreads=$$v},expression:"numThreads"}},[(!_vm.$v.numThreads.required && _vm.$v.$dirty)?_c('span',[_vm._v("Number of threads is required.")]):_vm._e()])],1)],1)}
var MqttConnectionFieldsvue_type_template_id_16a68db7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttConnectionFields.vue?vue&type=template&id=16a68db7&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttConnectionFields.vue?vue&type=script&lang=ts&





var mqtt_MqttConnectionFieldsvue_type_script_lang_ts_MqttConnectionFields = /** @class */ (function (_super) {
    __extends(MqttConnectionFields, _super);
    function MqttConnectionFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.protocol = "tcp";
        _this.hostname = null;
        _this.port = 1883;
        _this.topic = null;
        _this.qos = 1;
        _this.numThreads = 3;
        _this.protocols = [
            {
                text: "TCP",
                value: "tcp"
            },
            {
                text: "TLS",
                value: "tls"
            }
        ];
        _this.qosValues = [
            {
                text: "0 - At Most Once",
                value: 0
            },
            {
                text: "1 - At Least Once",
                value: 1
            },
            {
                text: "2 - Exactly Once",
                value: 3
            }
        ];
        return _this;
    }
    /** Reset section content */
    MqttConnectionFields.prototype.reset = function () {
        this.protocol = "tcp";
        this.hostname = null;
        this.port = 1883;
        this.topic = null;
        this.qos = 0;
        this.numThreads = 3;
        this.$v.$reset();
    };
    /** Perform validation */
    MqttConnectionFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    MqttConnectionFields.prototype.load = function (input) {
        this.protocol = input.protocol || "tcp";
        this.hostname = input.hostname;
        this.port = input.port || 1883;
        this.topic = input.topic;
        this.qos = input.qos || 0;
        this.numThreads = input.numThreads || 3;
    };
    /** Save form data to an object */
    MqttConnectionFields.prototype.save = function () {
        return {
            protocol: this.protocol,
            hostname: this.hostname || "",
            port: this.port,
            topic: this.topic || "",
            qos: this.qos,
            numThreads: this.numThreads
        };
    };
    MqttConnectionFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"], FormSelect: external_sitewhere_ide_components_["FormSelect"], VFlex: lib_["VFlex"] },
            validations: {
                protocol: {
                    required: validators["required"]
                },
                hostname: {
                    required: validators["required"]
                },
                port: {
                    required: validators["required"]
                },
                topic: {
                    required: validators["required"]
                },
                qos: {
                    required: validators["required"]
                },
                numThreads: {
                    required: validators["required"]
                }
            }
        })
    ], MqttConnectionFields);
    return MqttConnectionFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var eventsources_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_ = (mqtt_MqttConnectionFieldsvue_type_script_lang_ts_MqttConnectionFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttConnectionFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tenantengines_eventsources_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_ = (eventsources_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttConnectionFields.vue





/* normalize component */

var mqtt_MqttConnectionFields_component = normalizeComponent(
  tenantengines_eventsources_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_,
  MqttConnectionFieldsvue_type_template_id_16a68db7_render,
  MqttConnectionFieldsvue_type_template_id_16a68db7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventsources_mqtt_MqttConnectionFields = (mqtt_MqttConnectionFields_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=57decddd&
var MqttAuthenticationFieldsvue_type_template_id_57decddd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Username","title":"Username for authentication.","icon":"account_circle"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Password","title":"Password for authentication.","icon":"lock","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Truststore path","title":"Truststore path.","icon":"info"},model:{value:(_vm.trustStorePath),callback:function ($$v) {_vm.trustStorePath=$$v},expression:"trustStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Truststore password","title":"Truststore password.","icon":"lock","type":"password"},model:{value:(_vm.trustStorePassword),callback:function ($$v) {_vm.trustStorePassword=$$v},expression:"trustStorePassword"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Keystore path","title":"Keystore path.","icon":"info"},model:{value:(_vm.keyStorePath),callback:function ($$v) {_vm.keyStorePath=$$v},expression:"keyStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Keystore password","title":"Keystore password.","icon":"lock","type":"password"},model:{value:(_vm.keyStorePassword),callback:function ($$v) {_vm.keyStorePassword=$$v},expression:"keyStorePassword"}})],1)],1)}
var MqttAuthenticationFieldsvue_type_template_id_57decddd_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=57decddd&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttAuthenticationFields.vue?vue&type=script&lang=ts&




var mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_MqttAuthenticationFields = /** @class */ (function (_super) {
    __extends(MqttAuthenticationFields, _super);
    function MqttAuthenticationFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = null;
        _this.password = null;
        _this.clientId = null;
        _this.cleanSession = null;
        _this.trustStorePath = null;
        _this.trustStorePassword = null;
        _this.keyStorePath = null;
        _this.keyStorePassword = null;
        return _this;
    }
    /** Reset section content */
    MqttAuthenticationFields.prototype.reset = function () {
        this.username = null;
        this.password = null;
        this.clientId = null;
        this.cleanSession = null;
        this.trustStorePath = null;
        this.trustStorePassword = null;
        this.keyStorePath = null;
        this.keyStorePassword = null;
        this.$v.$reset();
    };
    /** Perform validation */
    MqttAuthenticationFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    MqttAuthenticationFields.prototype.load = function (input) {
        this.username = input.username;
        this.password = input.password;
        this.trustStorePath = input.trustStorePath;
        this.trustStorePassword = input.trustStorePassword;
        this.keyStorePath = input.keyStorePath;
        this.keyStorePassword = input.keyStorePassword;
    };
    /** Save form data to an object */
    MqttAuthenticationFields.prototype.save = function () {
        return {
            username: this.username || "",
            password: this.password || "",
            trustStorePath: this.trustStorePath || "",
            trustStorePassword: this.trustStorePassword || "",
            keyStorePath: this.keyStorePath || "",
            keyStorePassword: this.keyStorePassword || ""
        };
    };
    MqttAuthenticationFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({ components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] } })
    ], MqttAuthenticationFields);
    return MqttAuthenticationFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var eventsources_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_ = (mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_MqttAuthenticationFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttAuthenticationFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tenantengines_eventsources_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_ = (eventsources_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttAuthenticationFields.vue





/* normalize component */

var mqtt_MqttAuthenticationFields_component = normalizeComponent(
  tenantengines_eventsources_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_,
  MqttAuthenticationFieldsvue_type_template_id_57decddd_render,
  MqttAuthenticationFieldsvue_type_template_id_57decddd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventsources_mqtt_MqttAuthenticationFields = (mqtt_MqttAuthenticationFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceDialog.vue?vue&type=script&lang=ts&








var MqttEventSourceDialogvue_type_script_lang_ts_MqttEventSourceDialog = /** @class */ (function (_super) {
    __extends(MqttEventSourceDialog, _super);
    function MqttEventSourceDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MqttEventSourceDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    MqttEventSourceDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        Object.assign(config, this.connection.save());
        Object.assign(config, this.authentication.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    MqttEventSourceDialog.prototype.reset = function () {
        if (this.connection) {
            this.connection.reset();
        }
        if (this.authentication) {
            this.authentication.reset();
        }
        this.dialog.reset();
    };
    /** Load dialog from a given configuration */
    MqttEventSourceDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.connection) {
            this.connection.load(config.configuration);
        }
        if (this.authentication) {
            this.authentication.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    MqttEventSourceDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.connection.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        if (!this.authentication.validate()) {
            this.dialog.setActiveTab(1);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttEventSourceDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttEventSourceDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttEventSourceDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttEventSourceDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttEventSourceDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttEventSourceDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttEventSourceDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttEventSourceDialog.prototype, "connection", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttEventSourceDialog.prototype, "authentication", void 0);
    MqttEventSourceDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                EventSourceDialog: eventsources_EventSourceDialog,
                MqttConnectionFields: eventsources_mqtt_MqttConnectionFields,
                MqttAuthenticationFields: eventsources_mqtt_MqttAuthenticationFields
            }
        })
    ], MqttEventSourceDialog);
    return MqttEventSourceDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var MqttEventSourceDialogvue_type_script_lang_ts_ = (MqttEventSourceDialogvue_type_script_lang_ts_MqttEventSourceDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttEventSourceDialogvue_type_script_lang_ts_ = (MqttEventSourceDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceDialog.vue





/* normalize component */

var MqttEventSourceDialog_component = normalizeComponent(
  mqtt_MqttEventSourceDialogvue_type_script_lang_ts_,
  MqttEventSourceDialogvue_type_template_id_ee2ba3c4_render,
  MqttEventSourceDialogvue_type_template_id_ee2ba3c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttEventSourceDialog = (MqttEventSourceDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceCreateDialog.vue?vue&type=script&lang=ts&




var MqttEventSourceCreateDialogvue_type_script_lang_ts_MqttEventSourceCreateDialog = /** @class */ (function (_super) {
    __extends(MqttEventSourceCreateDialog, _super);
    function MqttEventSourceCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    MqttEventSourceCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    MqttEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttEventSourceCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttEventSourceCreateDialog.prototype, "dialog", void 0);
    MqttEventSourceCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                MqttEventSourceDialog: mqtt_MqttEventSourceDialog
            }
        })
    ], MqttEventSourceCreateDialog);
    return MqttEventSourceCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var MqttEventSourceCreateDialogvue_type_script_lang_ts_ = (MqttEventSourceCreateDialogvue_type_script_lang_ts_MqttEventSourceCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttEventSourceCreateDialogvue_type_script_lang_ts_ = (MqttEventSourceCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceCreateDialog.vue





/* normalize component */

var MqttEventSourceCreateDialog_component = normalizeComponent(
  mqtt_MqttEventSourceCreateDialogvue_type_script_lang_ts_,
  MqttEventSourceCreateDialogvue_type_template_id_1a7dd8bb_render,
  MqttEventSourceCreateDialogvue_type_template_id_1a7dd8bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttEventSourceCreateDialog = (MqttEventSourceCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceUpdateDialog.vue?vue&type=template&id=380de0d4&
var MqttEventSourceUpdateDialogvue_type_template_id_380de0d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mqtt-event-source-dialog',{ref:"dialog",attrs:{"title":"Update MQTT Event Source","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var MqttEventSourceUpdateDialogvue_type_template_id_380de0d4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceUpdateDialog.vue?vue&type=template&id=380de0d4&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceUpdateDialog.vue?vue&type=script&lang=ts&




var MqttEventSourceUpdateDialogvue_type_script_lang_ts_MqttEventSourceUpdateDialog = /** @class */ (function (_super) {
    __extends(MqttEventSourceUpdateDialog, _super);
    function MqttEventSourceUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    MqttEventSourceUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    MqttEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttEventSourceUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttEventSourceUpdateDialog.prototype, "dialog", void 0);
    MqttEventSourceUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                MqttEventSourceDialog: mqtt_MqttEventSourceDialog
            }
        })
    ], MqttEventSourceUpdateDialog);
    return MqttEventSourceUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var MqttEventSourceUpdateDialogvue_type_script_lang_ts_ = (MqttEventSourceUpdateDialogvue_type_script_lang_ts_MqttEventSourceUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttEventSourceUpdateDialogvue_type_script_lang_ts_ = (MqttEventSourceUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceUpdateDialog.vue





/* normalize component */

var MqttEventSourceUpdateDialog_component = normalizeComponent(
  mqtt_MqttEventSourceUpdateDialogvue_type_script_lang_ts_,
  MqttEventSourceUpdateDialogvue_type_template_id_380de0d4_render,
  MqttEventSourceUpdateDialogvue_type_template_id_380de0d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttEventSourceUpdateDialog = (MqttEventSourceUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceCreateDialog.vue?vue&type=template&id=12249a2b&
var RabbitMqEventSourceCreateDialogvue_type_template_id_12249a2b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('rabbit-mq-event-source-dialog',{ref:"dialog",attrs:{"title":"Create RabbitMQ Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var RabbitMqEventSourceCreateDialogvue_type_template_id_12249a2b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceCreateDialog.vue?vue&type=template&id=12249a2b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceDialog.vue?vue&type=template&id=12ba8ad0&
var RabbitMqEventSourceDialogvue_type_template_id_12ba8ad0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"rabbitmq","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"client"},[_vm._v("Client")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"client"},[_c('rabbit-mq-fields',{ref:"client"})],1)],1)],2)}
var RabbitMqEventSourceDialogvue_type_template_id_12ba8ad0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceDialog.vue?vue&type=template&id=12ba8ad0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqFields.vue?vue&type=template&id=d8edb300&
var RabbitMqFieldsvue_type_template_id_d8edb300_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","label":"Connection URI","title":"Connection URI.","icon":"router"},model:{value:(_vm.connectionUri),callback:function ($$v) {_vm.connectionUri=$$v},expression:"connectionUri"}},[(!_vm.$v.connectionUri.required && _vm.$v.$dirty)?_c('span',[_vm._v("Connection URI is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","label":"Queue name","title":"Queue name.","icon":"info"},model:{value:(_vm.queueName),callback:function ($$v) {_vm.queueName=$$v},expression:"queueName"}},[(!_vm.$v.queueName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Queue name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Number of consumers","title":"Number of consumers.","icon":"settings","type":"number"},model:{value:(_vm.numConsumers),callback:function ($$v) {_vm.numConsumers=$$v},expression:"numConsumers"}},[(!_vm.$v.numConsumers.required && _vm.$v.$dirty)?_c('span',[_vm._v("Number of consumers is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Reconnection interval","title":"Reconnection interval (in seconds).","icon":"settings","type":"number"},model:{value:(_vm.reconnectInterval),callback:function ($$v) {_vm.reconnectInterval=$$v},expression:"reconnectInterval"}},[(!_vm.$v.reconnectInterval.required && _vm.$v.$dirty)?_c('span',[_vm._v("Number of consumers is required.")]):_vm._e()])],1)],1)}
var RabbitMqFieldsvue_type_template_id_d8edb300_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqFields.vue?vue&type=template&id=d8edb300&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqFields.vue?vue&type=script&lang=ts&





var RabbitMqFieldsvue_type_script_lang_ts_RabbitMqFields = /** @class */ (function (_super) {
    __extends(RabbitMqFields, _super);
    function RabbitMqFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.connectionUri = "";
        _this.queueName = "";
        _this.numConsumers = 5;
        _this.reconnectInterval = 10;
        return _this;
    }
    /** Reset section content */
    RabbitMqFields.prototype.reset = function () {
        this.connectionUri = "";
        this.queueName = "";
        this.numConsumers = 5;
        this.reconnectInterval = 10;
        this.$v.$reset();
    };
    /** Perform validation */
    RabbitMqFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    RabbitMqFields.prototype.load = function (input) {
        this.connectionUri = input.connectionUri || "";
        this.queueName = input.queueName || "";
        this.numConsumers = input.numConsumers || 5;
        this.reconnectInterval = input.reconnectInterval || 10;
    };
    /** Save form data to an object */
    RabbitMqFields.prototype.save = function () {
        return {
            connectionUri: this.connectionUri,
            queueName: this.queueName,
            numConsumers: this.numConsumers,
            reconnectInterval: this.reconnectInterval
        };
    };
    RabbitMqFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"], VFlex: lib_["VFlex"] },
            validations: {
                connectionUri: {
                    required: validators["required"]
                },
                queueName: {
                    required: validators["required"]
                },
                numConsumers: {
                    required: validators["required"]
                },
                reconnectInterval: {
                    required: validators["required"]
                }
            }
        })
    ], RabbitMqFields);
    return RabbitMqFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var RabbitMqFieldsvue_type_script_lang_ts_ = (RabbitMqFieldsvue_type_script_lang_ts_RabbitMqFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var rabbitmq_RabbitMqFieldsvue_type_script_lang_ts_ = (RabbitMqFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqFields.vue





/* normalize component */

var RabbitMqFields_component = normalizeComponent(
  rabbitmq_RabbitMqFieldsvue_type_script_lang_ts_,
  RabbitMqFieldsvue_type_template_id_d8edb300_render,
  RabbitMqFieldsvue_type_template_id_d8edb300_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var rabbitmq_RabbitMqFields = (RabbitMqFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceDialog.vue?vue&type=script&lang=ts&







var RabbitMqEventSourceDialogvue_type_script_lang_ts_RabbitMqEventSourceDialog = /** @class */ (function (_super) {
    __extends(RabbitMqEventSourceDialog, _super);
    function RabbitMqEventSourceDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RabbitMqEventSourceDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    RabbitMqEventSourceDialog.prototype.generatePayload = function () {
        var config = {};
        Object.assign(config, this.client.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.client.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    RabbitMqEventSourceDialog.prototype.reset = function () {
        if (this.client) {
            this.client.reset();
        }
        this.client.reset();
    };
    /** Load dialog from a given configuration */
    RabbitMqEventSourceDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.client) {
            this.client.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    RabbitMqEventSourceDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.client.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RabbitMqEventSourceDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RabbitMqEventSourceDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RabbitMqEventSourceDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RabbitMqEventSourceDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RabbitMqEventSourceDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RabbitMqEventSourceDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RabbitMqEventSourceDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RabbitMqEventSourceDialog.prototype, "client", void 0);
    RabbitMqEventSourceDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VTab: lib_["VTab"], VTabItem: lib_["VTabItem"], EventSourceDialog: eventsources_EventSourceDialog, RabbitMqFields: rabbitmq_RabbitMqFields }
        })
    ], RabbitMqEventSourceDialog);
    return RabbitMqEventSourceDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var RabbitMqEventSourceDialogvue_type_script_lang_ts_ = (RabbitMqEventSourceDialogvue_type_script_lang_ts_RabbitMqEventSourceDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var rabbitmq_RabbitMqEventSourceDialogvue_type_script_lang_ts_ = (RabbitMqEventSourceDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceDialog.vue





/* normalize component */

var RabbitMqEventSourceDialog_component = normalizeComponent(
  rabbitmq_RabbitMqEventSourceDialogvue_type_script_lang_ts_,
  RabbitMqEventSourceDialogvue_type_template_id_12ba8ad0_render,
  RabbitMqEventSourceDialogvue_type_template_id_12ba8ad0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var rabbitmq_RabbitMqEventSourceDialog = (RabbitMqEventSourceDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceCreateDialog.vue?vue&type=script&lang=ts&




var RabbitMqEventSourceCreateDialogvue_type_script_lang_ts_RabbitMqEventSourceCreateDialog = /** @class */ (function (_super) {
    __extends(RabbitMqEventSourceCreateDialog, _super);
    function RabbitMqEventSourceCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    RabbitMqEventSourceCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    RabbitMqEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RabbitMqEventSourceCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RabbitMqEventSourceCreateDialog.prototype, "dialog", void 0);
    RabbitMqEventSourceCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                RabbitMqEventSourceDialog: rabbitmq_RabbitMqEventSourceDialog
            }
        })
    ], RabbitMqEventSourceCreateDialog);
    return RabbitMqEventSourceCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var RabbitMqEventSourceCreateDialogvue_type_script_lang_ts_ = (RabbitMqEventSourceCreateDialogvue_type_script_lang_ts_RabbitMqEventSourceCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var rabbitmq_RabbitMqEventSourceCreateDialogvue_type_script_lang_ts_ = (RabbitMqEventSourceCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceCreateDialog.vue





/* normalize component */

var RabbitMqEventSourceCreateDialog_component = normalizeComponent(
  rabbitmq_RabbitMqEventSourceCreateDialogvue_type_script_lang_ts_,
  RabbitMqEventSourceCreateDialogvue_type_template_id_12249a2b_render,
  RabbitMqEventSourceCreateDialogvue_type_template_id_12249a2b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var rabbitmq_RabbitMqEventSourceCreateDialog = (RabbitMqEventSourceCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cb5119c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceUpdateDialog.vue?vue&type=template&id=75b37b02&scoped=true&
var RabbitMqEventSourceUpdateDialogvue_type_template_id_75b37b02_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('rabbit-mq-event-source-dialog',{ref:"dialog",attrs:{"title":"Update RabbitMQ Event Source","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var RabbitMqEventSourceUpdateDialogvue_type_template_id_75b37b02_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceUpdateDialog.vue?vue&type=template&id=75b37b02&scoped=true&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceUpdateDialog.vue?vue&type=script&lang=ts&




var RabbitMqEventSourceUpdateDialogvue_type_script_lang_ts_RabbitMqEventSourceUpdateDialog = /** @class */ (function (_super) {
    __extends(RabbitMqEventSourceUpdateDialog, _super);
    function RabbitMqEventSourceUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    RabbitMqEventSourceUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    RabbitMqEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RabbitMqEventSourceUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RabbitMqEventSourceUpdateDialog.prototype, "dialog", void 0);
    RabbitMqEventSourceUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                RabbitMqEventSourceDialog: rabbitmq_RabbitMqEventSourceDialog
            }
        })
    ], RabbitMqEventSourceUpdateDialog);
    return RabbitMqEventSourceUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var RabbitMqEventSourceUpdateDialogvue_type_script_lang_ts_ = (RabbitMqEventSourceUpdateDialogvue_type_script_lang_ts_RabbitMqEventSourceUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var rabbitmq_RabbitMqEventSourceUpdateDialogvue_type_script_lang_ts_ = (RabbitMqEventSourceUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceUpdateDialog.vue





/* normalize component */

var RabbitMqEventSourceUpdateDialog_component = normalizeComponent(
  rabbitmq_RabbitMqEventSourceUpdateDialogvue_type_script_lang_ts_,
  RabbitMqEventSourceUpdateDialogvue_type_template_id_75b37b02_scoped_true_render,
  RabbitMqEventSourceUpdateDialogvue_type_template_id_75b37b02_scoped_true_staticRenderFns,
  false,
  null,
  "75b37b02",
  null
  
)

/* harmony default export */ var rabbitmq_RabbitMqEventSourceUpdateDialog = (RabbitMqEventSourceUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourcesTable.vue?vue&type=script&lang=ts&


















var EventSourcesTablevue_type_script_lang_ts_EventSourcesTable = /** @class */ (function (_super) {
    __extends(EventSourcesTable, _super);
    function EventSourcesTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        _this.headers = [
            { text: "Id", value: "id" },
            { text: "Type", value: "type" },
            { text: "Decoder", value: "decoder" },
            { text: "", value: "delete" }
        ];
        /** Event sources in format for display */
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        _this.eventSourcesAsSortedArray = [];
        return _this;
    }
    EventSourcesTable.prototype.onEventSourcesUpdated = function () {
        this.calculateEventSourcesAsSortedArray();
    };
    Object.defineProperty(EventSourcesTable.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Get list of ids already in use */
    EventSourcesTable.prototype.findIdsInUse = function (exclude) {
        var ids = [];
        if (this.eventSources) {
            this.eventSources.forEach(function (source) {
                if (source.id != exclude) {
                    ids.push(source.id);
                }
            });
        }
        return ids;
    };
    /** Get event source index based on id */
    EventSourcesTable.prototype.getEventSourceIndex = function (id) {
        var match = null;
        if (this.eventSources) {
            this.eventSources.forEach(function (source, index) {
                if (source.id === id) {
                    match = index;
                }
            });
        }
        return match;
    };
    /** Get an event source by id */
    EventSourcesTable.prototype.getEventSourceById = function (id) {
        var index = this.getEventSourceIndex(id);
        if (this.eventSources && index != null) {
            return this.eventSources[index];
        }
        return null;
    };
    /** Get event sources as a sorted array */
    EventSourcesTable.prototype.calculateEventSourcesAsSortedArray = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var all = [];
        if (this.eventSources) {
            this.eventSources.forEach(function (source) {
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                var meta = {};
                meta.id = source.id;
                meta.type = source.type;
                meta.decoder = source.decoder;
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                var config = source.configuration;
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                var decoder = source.decoder;
                all.push({ meta: meta, config: config, decoder: decoder });
            });
        }
        all.sort(function (a, b) {
            return a.meta.id.localeCompare(b.meta.id);
        });
        this.eventSourcesAsSortedArray = all;
    };
    /** Add new event source */
    EventSourcesTable.prototype.onAddEventSource = function () {
        this.chooser.openChooser();
    };
    /** Called to create a new event source based on type */
    EventSourcesTable.prototype.onEventSourceCreate = function (id) {
        var idsInUse = this.findIdsInUse();
        if (id == "activemq-broker") {
            this.amqBrokerCreate.openDialog(idsInUse);
        }
        else if (id == "activemq-client") {
            this.amqClientCreate.openDialog(idsInUse);
        }
        else if (id == "coap") {
            this.coapCreate.openDialog(idsInUse);
        }
        else if (id == "eventhub") {
            this.eventHubCreate.openDialog(idsInUse);
        }
        else if (id == "mqtt") {
            this.mqttCreate.openDialog(idsInUse);
        }
        else if (id == "rabbitmq") {
            this.rabbitMqCreate.openDialog(idsInUse);
        }
    };
    /** Called when event source is added */
    EventSourcesTable.prototype.onEventSourceAdded = function (config) {
        if (this.eventSources) {
            this.eventSources.push(config);
            this.calculateEventSourcesAsSortedArray();
        }
        this.$emit("create", config);
    };
    /** Open event source by id */
    EventSourcesTable.prototype.onOpenEventSource = function (id) {
        var config = this.getEventSourceById(id);
        var idsInUse = this.findIdsInUse(id);
        if (config) {
            if (config.type === "activemq-broker") {
                this.amqBrokerUpdate.openDialog(config, idsInUse);
            }
            else if (config.type === "activemq-client") {
                this.amqClientUpdate.openDialog(config, idsInUse);
            }
            else if (config.type === "coap") {
                this.coapUpdate.openDialog(config, idsInUse);
            }
            else if (config.type === "eventhub") {
                this.eventHubUpdate.openDialog(config, idsInUse);
            }
            else if (config.type === "mqtt") {
                this.mqttUpdate.openDialog(config, idsInUse);
            }
            else if (config.type === "rabbitmq") {
                this.rabbitMqUpdate.openDialog(config, idsInUse);
            }
        }
    };
    /** Called when event source is updated */
    EventSourcesTable.prototype.onEventSourceUpdated = function (originalId, config) {
        var index = this.getEventSourceIndex(originalId);
        if (this.eventSources && index != null) {
            external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.eventSources, index, config);
            this.calculateEventSourcesAsSortedArray();
        }
        this.$emit("update", originalId, config);
    };
    /** Delete event source by id */
    EventSourcesTable.prototype.onDeleteEventSource = function (id) {
        var index = this.getEventSourceIndex(id);
        if (this.eventSources && index != null) {
            this.eventSources.splice(index);
            this.calculateEventSourcesAsSortedArray();
        }
        this.$emit("delete", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourcesTable.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourcesTable.prototype, "eventSources", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "chooser", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "amqBrokerCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "amqBrokerUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "amqClientCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "amqClientUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "coapCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "coapUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "eventHubCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "eventHubUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "mqttCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "mqttUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "rabbitMqCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], EventSourcesTable.prototype, "rabbitMqUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("eventSources", { immediate: true })
    ], EventSourcesTable.prototype, "onEventSourcesUpdated", null);
    EventSourcesTable = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                DatatableSection: external_sitewhere_ide_components_["DatatableSection"],
                DatatableLink: external_sitewhere_ide_components_["DatatableLink"],
                ContentDeleteIcon: external_sitewhere_ide_components_["ContentDeleteIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                NewEventSourceChooser: eventsources_NewEventSourceChooser,
                ActiveMqBrokerEventSourceCreateDialog: activemq_ActiveMqBrokerEventSourceCreateDialog,
                ActiveMqBrokerEventSourceUpdateDialog: activemq_ActiveMqBrokerEventSourceUpdateDialog,
                ActiveMqClientEventSourceCreateDialog: ActiveMqClientEventSourceCreateDialog,
                ActiveMqClientEventSourceUpdateDialog: activemq_ActiveMqClientEventSourceUpdateDialog,
                CoapEventSourceCreateDialog: coap_CoapEventSourceCreateDialog,
                CoapEventSourceUpdateDialog: coap_CoapEventSourceUpdateDialog,
                EventHubEventSourceCreateDialog: azure_EventHubEventSourceCreateDialog,
                EventHubEventSourceUpdateDialog: azure_EventHubEventSourceUpdateDialog,
                MqttEventSourceCreateDialog: mqtt_MqttEventSourceCreateDialog,
                MqttEventSourceUpdateDialog: mqtt_MqttEventSourceUpdateDialog,
                RabbitMqEventSourceCreateDialog: rabbitmq_RabbitMqEventSourceCreateDialog,
                RabbitMqEventSourceUpdateDialog: rabbitmq_RabbitMqEventSourceUpdateDialog
            }
        })
    ], EventSourcesTable);
    return EventSourcesTable;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var EventSourcesTablevue_type_script_lang_ts_ = (EventSourcesTablevue_type_script_lang_ts_EventSourcesTable);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourcesTable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var eventsources_EventSourcesTablevue_type_script_lang_ts_ = (EventSourcesTablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourcesTable.vue





/* normalize component */

var EventSourcesTable_component = normalizeComponent(
  eventsources_EventSourcesTablevue_type_script_lang_ts_,
  EventSourcesTablevue_type_template_id_446c8345_scoped_true_render,
  EventSourcesTablevue_type_template_id_446c8345_scoped_true_staticRenderFns,
  false,
  null,
  "446c8345",
  null
  
)

/* harmony default export */ var eventsources_EventSourcesTable = (EventSourcesTable_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue?vue&type=script&lang=ts&






var EventSourcesPluginvue_type_script_lang_ts_EventSourcesPlugin = /** @class */ (function (_super) {
    __extends(EventSourcesPlugin, _super);
    function EventSourcesPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventSourcesPlugin.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSourcesPlugin.prototype, "tenantId", {
        /** Tenant id */
        get: function () {
            return this.configuration ? this.configuration.tenant.token : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSourcesPlugin.prototype, "eventSourcesConfiguration", {
        /** Get tenant configuration for event sources */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSourcesPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSourcesPlugin.prototype, "eventSources", {
        /** Get event sources list */
        get: function () {
            return this.eventSourcesConfiguration
                ? this.eventSourcesConfiguration.eventSources
                : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Handle event source created */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    EventSourcesPlugin.prototype.onEventSourceCreated = function (config) {
        this.markDirty();
    };
    /** Handle event source updated */
    EventSourcesPlugin.prototype.onEventSourceUpdated = function (
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    originalId, 
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config) {
        this.markDirty();
    };
    /** Handle event source deleted */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    EventSourcesPlugin.prototype.onEventSourceDeleted = function (id) {
        this.markDirty();
    };
    /** Mark data as having been updated */
    EventSourcesPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventSourcesPlugin.prototype, "configuration", void 0);
    EventSourcesPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { TenantEnginePlugin: tenantengines_TenantEnginePlugin, EventSourcesTable: eventsources_EventSourcesTable }
        })
    ], EventSourcesPlugin);
    return EventSourcesPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var EventSourcesPluginvue_type_script_lang_ts_ = (EventSourcesPluginvue_type_script_lang_ts_EventSourcesPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var eventsources_EventSourcesPluginvue_type_script_lang_ts_ = (EventSourcesPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue





/* normalize component */

var EventSourcesPlugin_component = normalizeComponent(
  eventsources_EventSourcesPluginvue_type_script_lang_ts_,
  EventSourcesPluginvue_type_template_id_5f6048b3_render,
  EventSourcesPluginvue_type_template_id_5f6048b3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventsources_EventSourcesPlugin = (EventSourcesPlugin_component.exports);
// CONCATENATED MODULE: ./src/index.ts







/** Common */

/** Plugins */


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fea4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flex-rows[data-v-e5693cf6]{display:flex;flex-direction:column;height:100%}.plugin-header[data-v-e5693cf6]{flex:0}.plugin-content[data-v-e5693cf6]{flex:1;background-color:#fff;overflow-y:auto}.plugin-footer[data-v-e5693cf6]{flex:0}", ""]);
// Exports
module.exports = exports;


/***/ })

/******/ });
//# sourceMappingURL=sitewhere-admin-ui-plugins.common.js.map