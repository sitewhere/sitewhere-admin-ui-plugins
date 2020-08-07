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

/***/ "2287":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".datatable[data-v-558cb726]{width:50%}.datatable[data-v-558cb726] tr{height:30px}.datatable[data-v-558cb726] tr:hover{background:#fff!important}.datatable[data-v-558cb726] td,.datatable[data-v-558cb726] th{padding:5px!important}.datatable[data-v-558cb726] td{height:30px}", ""]);
// Exports
module.exports = exports;


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

/***/ "8783":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".padded-message[data-v-5cea9d8b]{padding:50px;padding-top:35px;text-align:center}", ""]);
// Exports
module.exports = exports;


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

/***/ "a443":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_style_index_0_id_558cb726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe9e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_style_index_0_id_558cb726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_style_index_0_id_558cb726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_style_index_0_id_558cb726_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "cb38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoFields_vue_vue_type_style_index_0_id_5cea9d8b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ff99");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoFields_vue_vue_type_style_index_0_id_5cea9d8b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoFields_vue_vue_type_style_index_0_id_5cea9d8b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoFields_vue_vue_type_style_index_0_id_5cea9d8b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
__webpack_require__.d(__webpack_exports__, "TenantEnginePlugin", function() { return /* reexport */ tenantengines_TenantEnginePlugin; });
__webpack_require__.d(__webpack_exports__, "RdbDatastoreSelector", function() { return /* reexport */ datastore_RdbDatastoreSelector; });
__webpack_require__.d(__webpack_exports__, "TsDatastoreSelector", function() { return /* reexport */ datastore_TsDatastoreSelector; });
__webpack_require__.d(__webpack_exports__, "Postgres95Fields", function() { return /* reexport */ postgres95_Postgres95Fields; });
__webpack_require__.d(__webpack_exports__, "Warp10Fields", function() { return /* reexport */ warp10_Warp10Fields; });
__webpack_require__.d(__webpack_exports__, "InfluxDbFields", function() { return /* reexport */ influxdb_InfluxDbFields; });
__webpack_require__.d(__webpack_exports__, "NoFields", function() { return /* reexport */ datastore_NoFields; });
__webpack_require__.d(__webpack_exports__, "AssetManagementPlugin", function() { return /* reexport */ assetmanagement_AssetManagementPlugin; });
__webpack_require__.d(__webpack_exports__, "BatchOperationsPlugin", function() { return /* reexport */ batchoperations_BatchOperationsPlugin; });
__webpack_require__.d(__webpack_exports__, "CommandDeliveryPlugin", function() { return /* reexport */ commanddelivery_CommandDeliveryPlugin; });
__webpack_require__.d(__webpack_exports__, "DeviceManagementPlugin", function() { return /* reexport */ devicemanagement_DeviceManagementPlugin; });
__webpack_require__.d(__webpack_exports__, "DeviceRegistrationPlugin", function() { return /* reexport */ DeviceRegistrationPlugin; });
__webpack_require__.d(__webpack_exports__, "DeviceStatePlugin", function() { return /* reexport */ devicestate_DeviceStatePlugin; });
__webpack_require__.d(__webpack_exports__, "EventManagementPlugin", function() { return /* reexport */ eventmanagement_EventManagementPlugin; });
__webpack_require__.d(__webpack_exports__, "EventSourcesPlugin", function() { return /* reexport */ eventsources_EventSourcesPlugin; });
__webpack_require__.d(__webpack_exports__, "InboundProcessingPlugin", function() { return /* reexport */ inboundprocessing_InboundProcessingPlugin; });
__webpack_require__.d(__webpack_exports__, "LabelGenerationPlugin", function() { return /* reexport */ labelgeneration_LabelGenerationPlugin; });
__webpack_require__.d(__webpack_exports__, "OutboundConnectorsPlugin", function() { return /* reexport */ outboundconnectors_OutboundConnectorsPlugin; });
__webpack_require__.d(__webpack_exports__, "ScheduleManagementPlugin", function() { return /* reexport */ schedulemanagement_ScheduleManagementPlugin; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/TenantEnginePlugin.vue?vue&type=template&id=e5693cf6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticStyle:{"height":"100%"},attrs:{"flat":"","tile":""}},[_c('v-card-text',[_c('div',{staticClass:"flex-rows"},[(_vm.microservice && _vm.tenant)?_c('div',{staticClass:"plugin-header"},[_vm._t("header",[_c('page-header',{attrs:{"text":_vm.header}})])],2):_vm._e(),_c('div',{staticClass:"plugin-content"},[_vm._t("default")],2),_c('div',{staticClass:"plugin-footer"},[_vm._t("footer")],2)])]),_vm._t("dialogs")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/TenantEnginePlugin.vue?vue&type=template&id=e5693cf6&scoped=true&

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

// EXTERNAL MODULE: external "sitewhere-ide-components"
var external_sitewhere_ide_components_ = __webpack_require__("9092");

// EXTERNAL MODULE: external "vuetify/lib"
var lib_ = __webpack_require__("4875");

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

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/TenantEnginePlugin.vue






/* normalize component */

var component = normalizeComponent(
  tenantengines_TenantEnginePluginvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "e5693cf6",
  null
  
)

/* harmony default export */ var tenantengines_TenantEnginePlugin = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/RdbDatastoreSelector.vue?vue&type=template&id=ad677c7e&
var RdbDatastoreSelectorvue_type_template_id_ad677c7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.datastore)?_c('v-card',{attrs:{"flat":""}},[(_vm.datastoreReference)?_c('v-card',{staticClass:"mb-5",attrs:{"flat":""}},[_c('v-icon',{staticClass:"mr-2",attrs:{"small":""}},[_vm._v("fa-globe")]),_vm._v("Configured globally as "),_c('strong',[_vm._v(_vm._s(_vm.datastoreReference))]),_vm._v(". ")],1):_vm._e(),(_vm.isPostgres95)?_c('postgres-95-summary',{attrs:{"configuration":_vm.configuration}}):_vm._e(),_c('content-link',{staticClass:"mt-5 mb-2",attrs:{"icon":"fa-edit","text":"Update datastore settings"},on:{"linkClicked":_vm.onUpdateDatastore}}),_c('content-link',{attrs:{"icon":"fa-trash","text":"Unset datastore"},on:{"linkClicked":_vm.onUnsetDatastore}})],1):_c('v-card',{attrs:{"flat":""}},[_c('content-warning',{attrs:{"text":"No datastore is set. This will cause tenant engine startup to fail!"}}),_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-plus-circle","text":"Add datastore information."},on:{"linkClicked":_vm.onAddDatastore}})],1),_c('rdb-datastore-create-dialog',{ref:"create",attrs:{"instance":_vm.instance},on:{"create":_vm.onDatastoreCreate}}),_c('rdb-datastore-update-dialog',{ref:"update",attrs:{"instance":_vm.instance},on:{"update":_vm.onDatastoreUpdate}})],1)}
var RdbDatastoreSelectorvue_type_template_id_ad677c7e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreSelector.vue?vue&type=template&id=ad677c7e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/RdbDatastoreCreateDialog.vue?vue&type=template&id=b392c5f0&
var RdbDatastoreCreateDialogvue_type_template_id_b392c5f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('rdb-datastore-dialog',{ref:"dialog",attrs:{"title":"Create Relational Datastore","createLabel":"Create","instance":_vm.instance},on:{"payload":_vm.onPayload}})}
var RdbDatastoreCreateDialogvue_type_template_id_b392c5f0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreCreateDialog.vue?vue&type=template&id=b392c5f0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/RdbDatastoreDialog.vue?vue&type=template&id=2ddff97a&
var RdbDatastoreDialogvue_type_template_id_2ddff97a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":"550","loaded":true,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":"Cancel"},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('dialog-header',[_c('v-layout',{staticClass:"pl-3 pr-3 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn-toggle',{staticClass:"mt-3",attrs:{"mandatory":""},model:{value:(_vm.scope),callback:function ($$v) {_vm.scope=$$v},expression:"scope"}},[_c('v-btn',{attrs:{"text":""}},[_vm._v("Local")]),_c('v-btn',{attrs:{"text":""}},[_vm._v("Global")])],1)],1),(_vm.isLocalScope)?_c('v-flex',{attrs:{"xs8":""}},[_c('v-select',{staticClass:"ml-3",attrs:{"required":true,"title":"Choose database type","label":"Database Type","items":_vm.databaseTypes,"item-text":"text","item-value":"value","prepend-icon":"fa-database","placeholder":" "},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}})],1):_c('v-flex',{attrs:{"xs8":""}},[_c('v-select',{staticClass:"ml-3",attrs:{"required":true,"title":"Choose global database reference","label":"Global Reference","items":_vm.globalDatabases,"item-text":"text","item-value":"value","prepend-icon":"fa-database","placeholder":" "},model:{value:(_vm.reference),callback:function ($$v) {_vm.reference=$$v},expression:"reference"}})],1)],1)],1),_c('v-divider',{staticClass:"mb-2"}),(_vm.isPostgres95)?_c('postgres-95-fields',{ref:"details",attrs:{"readonly":_vm.isGlobalScope}}):_vm._e()],1)}
var RdbDatastoreDialogvue_type_template_id_2ddff97a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreDialog.vue?vue&type=template&id=2ddff97a&

// EXTERNAL MODULE: external "sitewhere-ide-common"
var external_sitewhere_ide_common_ = __webpack_require__("403e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Fields.vue?vue&type=template&id=1a674a09&
var Postgres95Fieldsvue_type_template_id_1a674a09_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs9":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","readonly":_vm.readonly,"label":"Hostname","title":"Hostname of PostgreSQL server.","icon":"fa-server"},model:{value:(_vm.hostname),callback:function ($$v) {_vm.hostname=$$v},expression:"hostname"}},[(_vm.$v.hostname.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Hostname is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs3":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Port","title":"Port for PostgreSQL server.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}},[(_vm.$v.port.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Port is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Max Connections","title":"Maximum number of connections to server.","type":"number","icon":"fa-stream"},model:{value:(_vm.maxConnections),callback:function ($$v) {_vm.maxConnections=$$v},expression:"maxConnections"}},[(_vm.$v.maxConnections.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Max connections is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","readonly":_vm.readonly,"label":"Username","title":"Username.","icon":"fa-user"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}},[(_vm.$v.username.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Username is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Password","title":"Password.","icon":"fa-lock","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}},[(_vm.$v.password.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Password is required.")]):_vm._e()])],1)],1)}
var Postgres95Fieldsvue_type_template_id_1a674a09_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Fields.vue?vue&type=template&id=1a674a09&

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
                },
                port: {
                    required: validators["required"]
                },
                maxConnections: {
                    required: validators["required"]
                },
                username: {
                    required: validators["required"]
                },
                password: {
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
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Fields.vue





/* normalize component */

var Postgres95Fields_component = normalizeComponent(
  postgres95_Postgres95Fieldsvue_type_script_lang_ts_,
  Postgres95Fieldsvue_type_template_id_1a674a09_render,
  Postgres95Fieldsvue_type_template_id_1a674a09_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var postgres95_Postgres95Fields = (Postgres95Fields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/RdbDatastoreDialog.vue?vue&type=script&lang=ts&






var RdbDatastoreDialogvue_type_script_lang_ts_RdbDatastoreDialog = /** @class */ (function (_super) {
    __extends(RdbDatastoreDialog, _super);
    function RdbDatastoreDialog() {
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
    RdbDatastoreDialog.prototype.onScopeChanged = function () {
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
    RdbDatastoreDialog.prototype.onReferenceChanged = function () {
        this.reloadDetails();
    };
    Object.defineProperty(RdbDatastoreDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["NavigationIcon"].Datastore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RdbDatastoreDialog.prototype, "isLocalScope", {
        /** Indicates if local scope is chosen */
        get: function () {
            return this.scope == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RdbDatastoreDialog.prototype, "isGlobalScope", {
        /** Indicates if global scope is chosen */
        get: function () {
            return this.scope == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RdbDatastoreDialog.prototype, "rdbConfigurations", {
        /** Global RDB configurations */
        get: function () {
            return this.instance && this.instance.persistenceConfigurations
                ? this.instance.persistenceConfigurations.rdbConfigurations
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RdbDatastoreDialog.prototype, "globalDatabases", {
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
    RdbDatastoreDialog.prototype.findGlobalDefinition = function (reference) {
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
    RdbDatastoreDialog.prototype.getDatastoreType = function () {
        if (!this.isLocalScope && this.reference) {
            var global = this.findGlobalDefinition(this.reference);
            return global ? global.type : null;
        }
        return this.type;
    };
    /** Local or global datastore configuration */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    RdbDatastoreDialog.prototype.getDatastoreConfiguration = function () {
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
    Object.defineProperty(RdbDatastoreDialog.prototype, "isPostgres95", {
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
    RdbDatastoreDialog.prototype.generateConfiguration = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var configuration = {};
        Object.assign(configuration, this.details.save());
        return configuration;
    };
    /** Generate payload from UI data */
    RdbDatastoreDialog.prototype.generatePayload = function () {
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
    RdbDatastoreDialog.prototype.reset = function () {
        if (this.details) {
            this.details.reset();
        }
    };
    /** Load data from an existing configuration */
    RdbDatastoreDialog.prototype.load = function (payload) {
        this.reset();
        this.type = payload.type || "postgres95";
        this.configuration =
            payload.configuration || {};
        this.reference = payload.reference;
        this.scope = this.reference ? 1 : 0;
        this.reloadDetails();
    };
    /** Reload details panel based on updated configuration */
    RdbDatastoreDialog.prototype.reloadDetails = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = this.getDatastoreConfiguration();
        if (this.details && config) {
            this.details.load(config);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    RdbDatastoreDialog.prototype.onCreateClicked = function (e) {
        if (!this.details.validate()) {
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RdbDatastoreDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RdbDatastoreDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RdbDatastoreDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RdbDatastoreDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RdbDatastoreDialog.prototype, "details", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("scope")
    ], RdbDatastoreDialog.prototype, "onScopeChanged", null);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("reference")
    ], RdbDatastoreDialog.prototype, "onReferenceChanged", null);
    RdbDatastoreDialog = __decorate([
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
    ], RdbDatastoreDialog);
    return RdbDatastoreDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var RdbDatastoreDialogvue_type_script_lang_ts_ = (RdbDatastoreDialogvue_type_script_lang_ts_RdbDatastoreDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_RdbDatastoreDialogvue_type_script_lang_ts_ = (RdbDatastoreDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreDialog.vue





/* normalize component */

var RdbDatastoreDialog_component = normalizeComponent(
  datastore_RdbDatastoreDialogvue_type_script_lang_ts_,
  RdbDatastoreDialogvue_type_template_id_2ddff97a_render,
  RdbDatastoreDialogvue_type_template_id_2ddff97a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_RdbDatastoreDialog = (RdbDatastoreDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/RdbDatastoreCreateDialog.vue?vue&type=script&lang=ts&




var RdbDatastoreCreateDialogvue_type_script_lang_ts_RdbDatastoreCreateDialog = /** @class */ (function (_super) {
    __extends(RdbDatastoreCreateDialog, _super);
    function RdbDatastoreCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    RdbDatastoreCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    RdbDatastoreCreateDialog.prototype.openDialog = function () {
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RdbDatastoreCreateDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RdbDatastoreCreateDialog.prototype, "dialog", void 0);
    RdbDatastoreCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                RdbDatastoreDialog: datastore_RdbDatastoreDialog
            }
        })
    ], RdbDatastoreCreateDialog);
    return RdbDatastoreCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var RdbDatastoreCreateDialogvue_type_script_lang_ts_ = (RdbDatastoreCreateDialogvue_type_script_lang_ts_RdbDatastoreCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_RdbDatastoreCreateDialogvue_type_script_lang_ts_ = (RdbDatastoreCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreCreateDialog.vue





/* normalize component */

var RdbDatastoreCreateDialog_component = normalizeComponent(
  datastore_RdbDatastoreCreateDialogvue_type_script_lang_ts_,
  RdbDatastoreCreateDialogvue_type_template_id_b392c5f0_render,
  RdbDatastoreCreateDialogvue_type_template_id_b392c5f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_RdbDatastoreCreateDialog = (RdbDatastoreCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/RdbDatastoreUpdateDialog.vue?vue&type=template&id=a1536d1c&
var RdbDatastoreUpdateDialogvue_type_template_id_a1536d1c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('rdb-datastore-dialog',{ref:"dialog",attrs:{"title":"Update Relational Datastore","createLabel":"Update","instance":_vm.instance},on:{"payload":_vm.onPayload}})}
var RdbDatastoreUpdateDialogvue_type_template_id_a1536d1c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreUpdateDialog.vue?vue&type=template&id=a1536d1c&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/RdbDatastoreUpdateDialog.vue?vue&type=script&lang=ts&




var RdbDatastoreUpdateDialogvue_type_script_lang_ts_RdbDatastoreUpdateDialog = /** @class */ (function (_super) {
    __extends(RdbDatastoreUpdateDialog, _super);
    function RdbDatastoreUpdateDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Emit payload */
    RdbDatastoreUpdateDialog.prototype.onPayload = function (definition) {
        this.dialog.closeDialog();
        this.$emit("update", definition);
    };
    /** Open dialog */
    RdbDatastoreUpdateDialog.prototype.openDialog = function (definition) {
        this.dialog.openDialog();
        this.dialog.load(definition);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RdbDatastoreUpdateDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RdbDatastoreUpdateDialog.prototype, "dialog", void 0);
    RdbDatastoreUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                RdbDatastoreDialog: datastore_RdbDatastoreDialog
            }
        })
    ], RdbDatastoreUpdateDialog);
    return RdbDatastoreUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var RdbDatastoreUpdateDialogvue_type_script_lang_ts_ = (RdbDatastoreUpdateDialogvue_type_script_lang_ts_RdbDatastoreUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_RdbDatastoreUpdateDialogvue_type_script_lang_ts_ = (RdbDatastoreUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreUpdateDialog.vue





/* normalize component */

var RdbDatastoreUpdateDialog_component = normalizeComponent(
  datastore_RdbDatastoreUpdateDialogvue_type_script_lang_ts_,
  RdbDatastoreUpdateDialogvue_type_template_id_a1536d1c_render,
  RdbDatastoreUpdateDialogvue_type_template_id_a1536d1c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_RdbDatastoreUpdateDialog = (RdbDatastoreUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Summary.vue?vue&type=template&id=7c614893&
var Postgres95Summaryvue_type_template_id_7c614893_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('content-field',{attrs:{"name":"type","value":"PostgreSQL"}}),_c('content-field',{attrs:{"alt":true,"name":"dialect","value":"postgres95"}}),_c('content-field',{attrs:{"name":"hostname","value":_vm.hostname}}),_c('content-field',{attrs:{"alt":true,"name":"port","value":_vm.port}}),_c('content-field',{attrs:{"name":"username","value":_vm.username}}),_c('content-field',{attrs:{"alt":true,"name":"password","password":true,"value":_vm.password}}),_c('content-field',{attrs:{"name":"max connections","value":_vm.maxConnections}})],1)}
var Postgres95Summaryvue_type_template_id_7c614893_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/postgres95/Postgres95Summary.vue?vue&type=template&id=7c614893&

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
  Postgres95Summaryvue_type_template_id_7c614893_render,
  Postgres95Summaryvue_type_template_id_7c614893_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var postgres95_Postgres95Summary = (Postgres95Summary_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/RdbDatastoreSelector.vue?vue&type=script&lang=ts&








var RdbDatastoreSelectorvue_type_script_lang_ts_RdbDatastoreSelector = /** @class */ (function (_super) {
    __extends(RdbDatastoreSelector, _super);
    function RdbDatastoreSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RdbDatastoreSelector.prototype, "rdbConfigurations", {
        /** Global RDB configurations */
        get: function () {
            return this.instance && this.instance.persistenceConfigurations
                ? this.instance.persistenceConfigurations.rdbConfigurations
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RdbDatastoreSelector.prototype, "datastoreReference", {
        /** Get reference name */
        get: function () {
            return this.datastore
                ? this.datastore.reference
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RdbDatastoreSelector.prototype, "datastoreType", {
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
    Object.defineProperty(RdbDatastoreSelector.prototype, "configuration", {
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
    Object.defineProperty(RdbDatastoreSelector.prototype, "isPostgres95", {
        /** Postgres95 datastore */
        get: function () {
            return this.datastoreType ? this.datastoreType == "postgres95" : false;
        },
        enumerable: true,
        configurable: true
    });
    /** Find a referenced persistence configuration */
    RdbDatastoreSelector.prototype.findGlobalDefinition = function (reference) {
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
    RdbDatastoreSelector.prototype.onAddDatastore = function () {
        this.create.openDialog();
    };
    /** Called to create datastore based on UI data */
    RdbDatastoreSelector.prototype.onDatastoreCreate = function (definition) {
        this.$emit("create", definition);
    };
    /** Update datastore */
    RdbDatastoreSelector.prototype.onUpdateDatastore = function () {
        this.update.openDialog(this.datastore);
    };
    /** Called to update datastore based on UI data */
    RdbDatastoreSelector.prototype.onDatastoreUpdate = function (definition) {
        this.$emit("update", definition);
    };
    /** Unset datastore */
    RdbDatastoreSelector.prototype.onUnsetDatastore = function () {
        this.$emit("unset");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RdbDatastoreSelector.prototype, "datastore", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], RdbDatastoreSelector.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RdbDatastoreSelector.prototype, "create", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], RdbDatastoreSelector.prototype, "update", void 0);
    RdbDatastoreSelector = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VCard: lib_["VCard"],
                VIcon: lib_["VIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                ContentWarning: external_sitewhere_ide_components_["ContentWarning"],
                RdbDatastoreCreateDialog: datastore_RdbDatastoreCreateDialog,
                RdbDatastoreUpdateDialog: datastore_RdbDatastoreUpdateDialog,
                Postgres95Summary: postgres95_Postgres95Summary
            }
        })
    ], RdbDatastoreSelector);
    return RdbDatastoreSelector;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var RdbDatastoreSelectorvue_type_script_lang_ts_ = (RdbDatastoreSelectorvue_type_script_lang_ts_RdbDatastoreSelector);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreSelector.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_RdbDatastoreSelectorvue_type_script_lang_ts_ = (RdbDatastoreSelectorvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/RdbDatastoreSelector.vue





/* normalize component */

var RdbDatastoreSelector_component = normalizeComponent(
  datastore_RdbDatastoreSelectorvue_type_script_lang_ts_,
  RdbDatastoreSelectorvue_type_template_id_ad677c7e_render,
  RdbDatastoreSelectorvue_type_template_id_ad677c7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_RdbDatastoreSelector = (RdbDatastoreSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/TsDatastoreSelector.vue?vue&type=template&id=1544e2a1&
var TsDatastoreSelectorvue_type_template_id_1544e2a1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.datastore)?_c('v-card',{attrs:{"flat":""}},[(_vm.datastoreReference)?_c('v-card',{staticClass:"mb-5",attrs:{"flat":""}},[_c('v-icon',{staticClass:"mr-2",attrs:{"small":""}},[_vm._v("fa-globe")]),_vm._v("Configured globally as "),_c('strong',[_vm._v(_vm._s(_vm.datastoreReference))]),_vm._v(". ")],1):_vm._e(),_c('warp-10-summary',{directives:[{name:"show",rawName:"v-show",value:(_vm.isWarp10),expression:"isWarp10"}],ref:"warp10",attrs:{"configuration":_vm.configuration}}),_c('influx-db-summary',{directives:[{name:"show",rawName:"v-show",value:(_vm.isInfluxDB),expression:"isInfluxDB"}],ref:"influxdb",attrs:{"configuration":_vm.configuration}}),_c('no-summary',{directives:[{name:"show",rawName:"v-show",value:(_vm.isUnknown),expression:"isUnknown"}],ref:"unknown"}),_c('content-link',{staticClass:"mt-5 mb-2",attrs:{"icon":"fa-edit","text":"Update datastore settings"},on:{"linkClicked":_vm.onUpdateDatastore}}),_c('content-link',{attrs:{"icon":"fa-trash","text":"Unset datastore"},on:{"linkClicked":_vm.onUnsetDatastore}})],1):_c('v-card',{attrs:{"flat":""}},[_c('content-warning',{attrs:{"text":"No datastore is set. This will cause tenant engine startup to fail!"}}),_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-plus-circle","text":"Add datastore information."},on:{"linkClicked":_vm.onAddDatastore}})],1),_c('ts-datastore-create-dialog',{ref:"create",attrs:{"instance":_vm.instance},on:{"create":_vm.onDatastoreCreate}}),_c('ts-datastore-update-dialog',{ref:"update",attrs:{"instance":_vm.instance},on:{"update":_vm.onDatastoreUpdate}})],1)}
var TsDatastoreSelectorvue_type_template_id_1544e2a1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreSelector.vue?vue&type=template&id=1544e2a1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/TsDatastoreCreateDialog.vue?vue&type=template&id=6a2a8a0e&
var TsDatastoreCreateDialogvue_type_template_id_6a2a8a0e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ts-datastore-dialog',{ref:"dialog",attrs:{"title":"Create Time Series Datastore","createLabel":"Create","instance":_vm.instance},on:{"payload":_vm.onPayload}})}
var TsDatastoreCreateDialogvue_type_template_id_6a2a8a0e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreCreateDialog.vue?vue&type=template&id=6a2a8a0e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/TsDatastoreDialog.vue?vue&type=template&id=2e77d89c&
var TsDatastoreDialogvue_type_template_id_2e77d89c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":"550","loaded":true,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":"Cancel"},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('dialog-header',[_c('v-layout',{staticClass:"pl-3 pr-3 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn-toggle',{staticClass:"mt-3",attrs:{"mandatory":""},model:{value:(_vm.scope),callback:function ($$v) {_vm.scope=$$v},expression:"scope"}},[_c('v-btn',{attrs:{"text":""}},[_vm._v("Local")]),_c('v-btn',{attrs:{"text":""}},[_vm._v("Global")])],1)],1),(_vm.isLocalScope)?_c('v-flex',{attrs:{"xs8":""}},[_c('v-select',{staticClass:"ml-3",attrs:{"required":true,"title":"Choose database type","label":"Database Type","items":_vm.databaseTypes,"item-text":"text","item-value":"value","prepend-icon":"fa-database","placeholder":" "},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}})],1):_c('v-flex',{attrs:{"xs8":""}},[_c('v-select',{staticClass:"ml-3",attrs:{"required":true,"title":"Choose global database reference","label":"Global Reference","items":_vm.globalDatabases,"item-text":"text","item-value":"value","prepend-icon":"fa-database","placeholder":" "},model:{value:(_vm.reference),callback:function ($$v) {_vm.reference=$$v},expression:"reference"}})],1)],1)],1),_c('v-divider',{staticClass:"mb-2"}),_c('warp-10-fields',{directives:[{name:"show",rawName:"v-show",value:(_vm.isWarp10),expression:"isWarp10"}],ref:"warp10",attrs:{"readonly":_vm.isGlobalScope}}),_c('influx-db-fields',{directives:[{name:"show",rawName:"v-show",value:(_vm.isInfluxDB),expression:"isInfluxDB"}],ref:"influxdb",attrs:{"readonly":_vm.isGlobalScope}}),_c('no-fields',{directives:[{name:"show",rawName:"v-show",value:(_vm.isUnknown),expression:"isUnknown"}],ref:"unknown",attrs:{"readonly":_vm.isGlobalScope}})],1)}
var TsDatastoreDialogvue_type_template_id_2e77d89c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreDialog.vue?vue&type=template&id=2e77d89c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Fields.vue?vue&type=template&id=5e5d397f&
var Warp10Fieldsvue_type_template_id_5e5d397f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs9":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","readonly":_vm.readonly,"label":"Hostname","title":"Hostname of Warp 10 server.","icon":"fa-server"},model:{value:(_vm.hostname),callback:function ($$v) {_vm.hostname=$$v},expression:"hostname"}},[(_vm.$v.hostname.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Hostname is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs3":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Port","title":"Port for Warp 10 server.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}},[(_vm.$v.port.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Port is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Application","title":"Warp 10 application name.","icon":"fa-stream"},model:{value:(_vm.application),callback:function ($$v) {_vm.application=$$v},expression:"application"}},[(_vm.$v.application.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Application is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Token secret","title":"Warp 10 token secret.","icon":"fa-stream"},model:{value:(_vm.tokenSecret),callback:function ($$v) {_vm.tokenSecret=$$v},expression:"tokenSecret"}},[(_vm.$v.tokenSecret.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Token secret is required.")]):_vm._e()])],1)],1)}
var Warp10Fieldsvue_type_template_id_5e5d397f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Fields.vue?vue&type=template&id=5e5d397f&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Fields.vue?vue&type=script&lang=ts&





var Warp10Fieldsvue_type_script_lang_ts_Warp10Fields = /** @class */ (function (_super) {
    __extends(Warp10Fields, _super);
    function Warp10Fields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hostname = null;
        _this.port = null;
        _this.application = null;
        _this.tokenSecret = null;
        return _this;
    }
    /** Reset section content */
    Warp10Fields.prototype.reset = function () {
        this.hostname = null;
        this.port = null;
        this.application = null;
        this.tokenSecret = null;
        this.$v.$reset();
    };
    /** Perform validation */
    Warp10Fields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    Warp10Fields.prototype.load = function (configuration) {
        this.hostname = configuration.hostname;
        this.port = configuration.port;
        this.application = configuration.application;
        this.tokenSecret = configuration.tokenSecret;
    };
    /** Save form data to an object */
    Warp10Fields.prototype.save = function () {
        return {
            hostname: this.hostname,
            port: this.port,
            application: this.application,
            tokenSecret: this.tokenSecret
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], Warp10Fields.prototype, "readonly", void 0);
    Warp10Fields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"], VFlex: lib_["VFlex"] },
            validations: {
                hostname: {
                    required: validators["required"]
                },
                port: {
                    required: validators["required"]
                },
                application: {
                    required: validators["required"]
                },
                tokenSecret: {
                    required: validators["required"]
                }
            }
        })
    ], Warp10Fields);
    return Warp10Fields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var Warp10Fieldsvue_type_script_lang_ts_ = (Warp10Fieldsvue_type_script_lang_ts_Warp10Fields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Fields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var warp10_Warp10Fieldsvue_type_script_lang_ts_ = (Warp10Fieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Fields.vue





/* normalize component */

var Warp10Fields_component = normalizeComponent(
  warp10_Warp10Fieldsvue_type_script_lang_ts_,
  Warp10Fieldsvue_type_template_id_5e5d397f_render,
  Warp10Fieldsvue_type_template_id_5e5d397f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var warp10_Warp10Fields = (Warp10Fields_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbFields.vue?vue&type=template&id=692d1601&
var InfluxDbFieldsvue_type_template_id_692d1601_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs9":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","readonly":_vm.readonly,"label":"Hostname","title":"Hostname of InfluxDB server.","icon":"fa-server"},model:{value:(_vm.hostname),callback:function ($$v) {_vm.hostname=$$v},expression:"hostname"}},[(_vm.$v.hostname.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Hostname is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs3":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Port","title":"Port for InfluxDB server.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}},[(_vm.$v.port.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Port is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","readonly":_vm.readonly,"label":"Database name","title":"InfluxDB database name.","icon":"fa-stream"},model:{value:(_vm.databaseName),callback:function ($$v) {_vm.databaseName=$$v},expression:"databaseName"}},[(_vm.$v.databaseName.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Database name is required.")]):_vm._e()])],1)],1)}
var InfluxDbFieldsvue_type_template_id_692d1601_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbFields.vue?vue&type=template&id=692d1601&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbFields.vue?vue&type=script&lang=ts&





var InfluxDbFieldsvue_type_script_lang_ts_InfluxDbFields = /** @class */ (function (_super) {
    __extends(InfluxDbFields, _super);
    function InfluxDbFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hostname = null;
        _this.port = null;
        _this.databaseName = null;
        return _this;
    }
    /** Reset section content */
    InfluxDbFields.prototype.reset = function () {
        this.hostname = null;
        this.port = null;
        this.databaseName = null;
        this.$v.$reset();
    };
    /** Perform validation */
    InfluxDbFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    InfluxDbFields.prototype.load = function (configuration) {
        this.hostname = configuration.hostname;
        this.port = configuration.port;
        this.databaseName = configuration.databaseName;
    };
    /** Save form data to an object */
    InfluxDbFields.prototype.save = function () {
        return {
            hostname: this.hostname,
            port: this.port,
            databaseName: this.databaseName
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], InfluxDbFields.prototype, "readonly", void 0);
    InfluxDbFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"], VFlex: lib_["VFlex"] },
            validations: {
                hostname: {
                    required: validators["required"]
                },
                port: {
                    required: validators["required"]
                },
                databaseName: {
                    required: validators["required"]
                }
            }
        })
    ], InfluxDbFields);
    return InfluxDbFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var InfluxDbFieldsvue_type_script_lang_ts_ = (InfluxDbFieldsvue_type_script_lang_ts_InfluxDbFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var influxdb_InfluxDbFieldsvue_type_script_lang_ts_ = (InfluxDbFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbFields.vue





/* normalize component */

var InfluxDbFields_component = normalizeComponent(
  influxdb_InfluxDbFieldsvue_type_script_lang_ts_,
  InfluxDbFieldsvue_type_template_id_692d1601_render,
  InfluxDbFieldsvue_type_template_id_692d1601_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var influxdb_InfluxDbFields = (InfluxDbFields_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/NoFields.vue?vue&type=template&id=5cea9d8b&scoped=true&
var NoFieldsvue_type_template_id_5cea9d8b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticStyle:{"width":"100%"},attrs:{"flat":""}},[_c('v-card-text',{staticClass:"padded-message subheading"},[_vm._v("This database type is not currently supported.")])],1)}
var NoFieldsvue_type_template_id_5cea9d8b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/NoFields.vue?vue&type=template&id=5cea9d8b&scoped=true&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/NoFields.vue?vue&type=script&lang=ts&




var NoFieldsvue_type_script_lang_ts_NoFields = /** @class */ (function (_super) {
    __extends(NoFields, _super);
    function NoFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Reset section content */
    NoFields.prototype.reset = function () {
        this.$v.$reset();
    };
    /** Perform validation */
    NoFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    NoFields.prototype.load = function (configuration) { };
    /** Save form data to an object */
    NoFields.prototype.save = function () {
        return {};
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], NoFields.prototype, "readonly", void 0);
    NoFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VCard: lib_["VCard"], VCardText: lib_["VCardText"] },
            validations: {}
        })
    ], NoFields);
    return NoFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var NoFieldsvue_type_script_lang_ts_ = (NoFieldsvue_type_script_lang_ts_NoFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/NoFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_NoFieldsvue_type_script_lang_ts_ = (NoFieldsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/plugins/tenantengines/common/datastore/NoFields.vue?vue&type=style&index=0&id=5cea9d8b&scoped=true&lang=css&
var NoFieldsvue_type_style_index_0_id_5cea9d8b_scoped_true_lang_css_ = __webpack_require__("cb38");

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/NoFields.vue






/* normalize component */

var NoFields_component = normalizeComponent(
  datastore_NoFieldsvue_type_script_lang_ts_,
  NoFieldsvue_type_template_id_5cea9d8b_scoped_true_render,
  NoFieldsvue_type_template_id_5cea9d8b_scoped_true_staticRenderFns,
  false,
  null,
  "5cea9d8b",
  null
  
)

/* harmony default export */ var datastore_NoFields = (NoFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/TsDatastoreDialog.vue?vue&type=script&lang=ts&








var TsDatastoreDialogvue_type_script_lang_ts_TsDatastoreDialog = /** @class */ (function (_super) {
    __extends(TsDatastoreDialog, _super);
    function TsDatastoreDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scope = 0;
        _this.reference = null;
        _this.type = "warp10";
        /** List of supported database types */
        _this.databaseTypes = [
            {
                text: "Warp 10",
                value: "warp10"
            },
            {
                text: "InfluxDB",
                value: "influxdb"
            }
        ];
        return _this;
    }
    Object.defineProperty(TsDatastoreDialog.prototype, "details", {
        /** Get displayed summary panel */
        get: function () {
            if (this.isWarp10) {
                return this.warp10;
            }
            else if (this.isInfluxDB) {
                return this.influxdb;
            }
            else {
                return this.unknown;
            }
        },
        enumerable: true,
        configurable: true
    });
    TsDatastoreDialog.prototype.onScopeChanged = function () {
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
    TsDatastoreDialog.prototype.onReferenceChanged = function () {
        this.reloadDetails();
    };
    Object.defineProperty(TsDatastoreDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["NavigationIcon"].Datastore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreDialog.prototype, "isLocalScope", {
        /** Indicates if local scope is chosen */
        get: function () {
            return this.scope == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreDialog.prototype, "isGlobalScope", {
        /** Indicates if global scope is chosen */
        get: function () {
            return this.scope == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreDialog.prototype, "timeSeriesConfigurations", {
        /** Global time series configurations */
        get: function () {
            return this.instance && this.instance.persistenceConfigurations
                ? this.instance.persistenceConfigurations.timeSeriesConfigurations
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreDialog.prototype, "globalDatabases", {
        /** Get list of available global time series databases */
        get: function () {
            var databases = [];
            if (this.timeSeriesConfigurations) {
                var keys = Object.keys(this.timeSeriesConfigurations);
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
    TsDatastoreDialog.prototype.findGlobalDefinition = function (reference) {
        if (!this.timeSeriesConfigurations) {
            return null;
        }
        var match = this.timeSeriesConfigurations[reference];
        if (!match) {
            return null;
        }
        return {
            type: match.type,
            configuration: match.configuration
        };
    };
    /** Local or global datastore type */
    TsDatastoreDialog.prototype.getDatastoreType = function () {
        if (!this.isLocalScope && this.reference) {
            var global = this.findGlobalDefinition(this.reference);
            return global ? global.type : null;
        }
        return this.type;
    };
    /** Local or global datastore configuration */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    TsDatastoreDialog.prototype.getDatastoreConfiguration = function () {
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
    Object.defineProperty(TsDatastoreDialog.prototype, "isWarp10", {
        /** Indicates whether database is Warp 10 */
        get: function () {
            var type = this.getDatastoreType();
            return type == "warp10";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreDialog.prototype, "isInfluxDB", {
        /** Indicates whether database is InfluxDB */
        get: function () {
            var type = this.getDatastoreType();
            return type == "influxdb";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreDialog.prototype, "isUnknown", {
        /** Indicates if database type is unknown */
        get: function () {
            return !this.isWarp10 && !this.isInfluxDB;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate configuration from detail panel */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    TsDatastoreDialog.prototype.generateConfiguration = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var configuration = {};
        Object.assign(configuration, this.details.save());
        return configuration;
    };
    /** Generate payload from UI data */
    TsDatastoreDialog.prototype.generatePayload = function () {
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
    TsDatastoreDialog.prototype.reset = function () {
        if (this.details) {
            this.details.reset();
        }
    };
    /** Load data from an existing configuration */
    TsDatastoreDialog.prototype.load = function (payload) {
        this.reset();
        this.type = payload.type || "warp10";
        this.configuration =
            payload.configuration || {};
        this.reference = payload.reference;
        this.scope = this.reference ? 1 : 0;
        this.reloadDetails();
    };
    /** Reload details panel based on updated configuration */
    TsDatastoreDialog.prototype.reloadDetails = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = this.getDatastoreConfiguration();
        if (this.details && config) {
            this.details.load(config);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    TsDatastoreDialog.prototype.onCreateClicked = function (e) {
        if (!this.details.validate()) {
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], TsDatastoreDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], TsDatastoreDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], TsDatastoreDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreDialog.prototype, "warp10", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreDialog.prototype, "influxdb", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreDialog.prototype, "unknown", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("scope")
    ], TsDatastoreDialog.prototype, "onScopeChanged", null);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("reference")
    ], TsDatastoreDialog.prototype, "onReferenceChanged", null);
    TsDatastoreDialog = __decorate([
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
                Warp10Fields: warp10_Warp10Fields,
                InfluxDbFields: influxdb_InfluxDbFields,
                NoFields: datastore_NoFields
            }
        })
    ], TsDatastoreDialog);
    return TsDatastoreDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var TsDatastoreDialogvue_type_script_lang_ts_ = (TsDatastoreDialogvue_type_script_lang_ts_TsDatastoreDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_TsDatastoreDialogvue_type_script_lang_ts_ = (TsDatastoreDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreDialog.vue





/* normalize component */

var TsDatastoreDialog_component = normalizeComponent(
  datastore_TsDatastoreDialogvue_type_script_lang_ts_,
  TsDatastoreDialogvue_type_template_id_2e77d89c_render,
  TsDatastoreDialogvue_type_template_id_2e77d89c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_TsDatastoreDialog = (TsDatastoreDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/TsDatastoreCreateDialog.vue?vue&type=script&lang=ts&




var TsDatastoreCreateDialogvue_type_script_lang_ts_TsDatastoreCreateDialog = /** @class */ (function (_super) {
    __extends(TsDatastoreCreateDialog, _super);
    function TsDatastoreCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    TsDatastoreCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    TsDatastoreCreateDialog.prototype.openDialog = function () {
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], TsDatastoreCreateDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreCreateDialog.prototype, "dialog", void 0);
    TsDatastoreCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                TsDatastoreDialog: datastore_TsDatastoreDialog
            }
        })
    ], TsDatastoreCreateDialog);
    return TsDatastoreCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var TsDatastoreCreateDialogvue_type_script_lang_ts_ = (TsDatastoreCreateDialogvue_type_script_lang_ts_TsDatastoreCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_TsDatastoreCreateDialogvue_type_script_lang_ts_ = (TsDatastoreCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreCreateDialog.vue





/* normalize component */

var TsDatastoreCreateDialog_component = normalizeComponent(
  datastore_TsDatastoreCreateDialogvue_type_script_lang_ts_,
  TsDatastoreCreateDialogvue_type_template_id_6a2a8a0e_render,
  TsDatastoreCreateDialogvue_type_template_id_6a2a8a0e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_TsDatastoreCreateDialog = (TsDatastoreCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/TsDatastoreUpdateDialog.vue?vue&type=template&id=6781a004&
var TsDatastoreUpdateDialogvue_type_template_id_6781a004_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ts-datastore-dialog',{ref:"dialog",attrs:{"title":"Update Time Series Datastore","createLabel":"Update","instance":_vm.instance},on:{"payload":_vm.onPayload}})}
var TsDatastoreUpdateDialogvue_type_template_id_6781a004_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreUpdateDialog.vue?vue&type=template&id=6781a004&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/TsDatastoreUpdateDialog.vue?vue&type=script&lang=ts&




var TsDatastoreUpdateDialogvue_type_script_lang_ts_TsDatastoreUpdateDialog = /** @class */ (function (_super) {
    __extends(TsDatastoreUpdateDialog, _super);
    function TsDatastoreUpdateDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Emit payload */
    TsDatastoreUpdateDialog.prototype.onPayload = function (definition) {
        this.dialog.closeDialog();
        this.$emit("update", definition);
    };
    /** Open dialog */
    TsDatastoreUpdateDialog.prototype.openDialog = function (definition) {
        this.dialog.openDialog();
        this.dialog.load(definition);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], TsDatastoreUpdateDialog.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreUpdateDialog.prototype, "dialog", void 0);
    TsDatastoreUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                TsDatastoreDialog: datastore_TsDatastoreDialog
            }
        })
    ], TsDatastoreUpdateDialog);
    return TsDatastoreUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var TsDatastoreUpdateDialogvue_type_script_lang_ts_ = (TsDatastoreUpdateDialogvue_type_script_lang_ts_TsDatastoreUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_TsDatastoreUpdateDialogvue_type_script_lang_ts_ = (TsDatastoreUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreUpdateDialog.vue





/* normalize component */

var TsDatastoreUpdateDialog_component = normalizeComponent(
  datastore_TsDatastoreUpdateDialogvue_type_script_lang_ts_,
  TsDatastoreUpdateDialogvue_type_template_id_6781a004_render,
  TsDatastoreUpdateDialogvue_type_template_id_6781a004_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_TsDatastoreUpdateDialog = (TsDatastoreUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Summary.vue?vue&type=template&id=04d59c36&
var Warp10Summaryvue_type_template_id_04d59c36_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('content-field',{attrs:{"name":"type","value":"Warp 10"}}),_c('content-field',{attrs:{"alt":true,"name":"hostname","value":"hostname"}}),_c('content-field',{attrs:{"name":"port","value":_vm.port}}),_c('content-field',{attrs:{"alt":true,"name":"application","value":"application"}}),_c('content-field',{attrs:{"name":"tokenSecret","value":_vm.tokenSecret}})],1)}
var Warp10Summaryvue_type_template_id_04d59c36_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Summary.vue?vue&type=template&id=04d59c36&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Summary.vue?vue&type=script&lang=ts&





var Warp10Summaryvue_type_script_lang_ts_Warp10Summary = /** @class */ (function (_super) {
    __extends(Warp10Summary, _super);
    function Warp10Summary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Warp10Summary.prototype, "hostname", {
        /** Hostname */
        get: function () {
            return this.configuration ? this.configuration.hostname : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Warp10Summary.prototype, "port", {
        /** Port */
        get: function () {
            return this.configuration ? this.configuration.port : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Warp10Summary.prototype, "application", {
        /** Application */
        get: function () {
            return this.configuration ? this.configuration.application : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Warp10Summary.prototype, "tokenSecret", {
        /** Token secret */
        get: function () {
            return this.configuration ? this.configuration.tokenSecret : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], Warp10Summary.prototype, "configuration", void 0);
    Warp10Summary = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VCard: lib_["VCard"], ContentField: external_sitewhere_ide_components_["ContentField"] }
        })
    ], Warp10Summary);
    return Warp10Summary;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var Warp10Summaryvue_type_script_lang_ts_ = (Warp10Summaryvue_type_script_lang_ts_Warp10Summary);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Summary.vue?vue&type=script&lang=ts&
 /* harmony default export */ var warp10_Warp10Summaryvue_type_script_lang_ts_ = (Warp10Summaryvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/warp10/Warp10Summary.vue





/* normalize component */

var Warp10Summary_component = normalizeComponent(
  warp10_Warp10Summaryvue_type_script_lang_ts_,
  Warp10Summaryvue_type_template_id_04d59c36_render,
  Warp10Summaryvue_type_template_id_04d59c36_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var warp10_Warp10Summary = (Warp10Summary_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbSummary.vue?vue&type=template&id=79d36974&
var InfluxDbSummaryvue_type_template_id_79d36974_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('content-field',{attrs:{"name":"type","value":"InfluxDB"}}),_c('content-field',{attrs:{"alt":true,"name":"hostname","value":_vm.hostname}}),_c('content-field',{attrs:{"name":"port","value":_vm.port}}),_c('content-field',{attrs:{"alt":true,"name":"database name","value":_vm.databaseName}})],1)}
var InfluxDbSummaryvue_type_template_id_79d36974_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbSummary.vue?vue&type=template&id=79d36974&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbSummary.vue?vue&type=script&lang=ts&





var InfluxDbSummaryvue_type_script_lang_ts_InfluxDbSummary = /** @class */ (function (_super) {
    __extends(InfluxDbSummary, _super);
    function InfluxDbSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InfluxDbSummary.prototype, "hostname", {
        /** Hostname */
        get: function () {
            return this.configuration ? this.configuration.hostname : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfluxDbSummary.prototype, "port", {
        /** Port */
        get: function () {
            return this.configuration ? this.configuration.port : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfluxDbSummary.prototype, "databaseName", {
        /** Application */
        get: function () {
            return this.configuration ? this.configuration.databaseName : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], InfluxDbSummary.prototype, "configuration", void 0);
    InfluxDbSummary = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VCard: lib_["VCard"], ContentField: external_sitewhere_ide_components_["ContentField"] }
        })
    ], InfluxDbSummary);
    return InfluxDbSummary;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var InfluxDbSummaryvue_type_script_lang_ts_ = (InfluxDbSummaryvue_type_script_lang_ts_InfluxDbSummary);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbSummary.vue?vue&type=script&lang=ts&
 /* harmony default export */ var influxdb_InfluxDbSummaryvue_type_script_lang_ts_ = (InfluxDbSummaryvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/influxdb/InfluxDbSummary.vue





/* normalize component */

var InfluxDbSummary_component = normalizeComponent(
  influxdb_InfluxDbSummaryvue_type_script_lang_ts_,
  InfluxDbSummaryvue_type_template_id_79d36974_render,
  InfluxDbSummaryvue_type_template_id_79d36974_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var influxdb_InfluxDbSummary = (InfluxDbSummary_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/NoSummary.vue?vue&type=template&id=50523800&
var NoSummaryvue_type_template_id_50523800_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('content-field',{attrs:{"name":"unknown","value":"Database type is unknown"}})],1)}
var NoSummaryvue_type_template_id_50523800_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/NoSummary.vue?vue&type=template&id=50523800&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/NoSummary.vue?vue&type=script&lang=ts&





var NoSummaryvue_type_script_lang_ts_NoSummary = /** @class */ (function (_super) {
    __extends(NoSummary, _super);
    function NoSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoSummary = __decorate([
        Object(external_vue_property_decorator_["Component"])({ components: { VCard: lib_["VCard"], ContentField: external_sitewhere_ide_components_["ContentField"] } })
    ], NoSummary);
    return NoSummary;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var NoSummaryvue_type_script_lang_ts_ = (NoSummaryvue_type_script_lang_ts_NoSummary);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/NoSummary.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_NoSummaryvue_type_script_lang_ts_ = (NoSummaryvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/NoSummary.vue





/* normalize component */

var NoSummary_component = normalizeComponent(
  datastore_NoSummaryvue_type_script_lang_ts_,
  NoSummaryvue_type_template_id_50523800_render,
  NoSummaryvue_type_template_id_50523800_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_NoSummary = (NoSummary_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/common/datastore/TsDatastoreSelector.vue?vue&type=script&lang=ts&










var TsDatastoreSelectorvue_type_script_lang_ts_TsDatastoreSelector = /** @class */ (function (_super) {
    __extends(TsDatastoreSelector, _super);
    function TsDatastoreSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TsDatastoreSelector.prototype, "summary", {
        /** Get displayed summary panel */
        get: function () {
            if (this.isWarp10) {
                return this.warp10;
            }
            else if (this.isInfluxDB) {
                return this.influxdb;
            }
            else {
                return this.unknown;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreSelector.prototype, "timeSeriesConfigurations", {
        /** Global time series configurations */
        get: function () {
            return this.instance && this.instance.persistenceConfigurations
                ? this.instance.persistenceConfigurations.timeSeriesConfigurations
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreSelector.prototype, "datastoreReference", {
        /** Get reference name */
        get: function () {
            return this.datastore
                ? this.datastore.reference
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreSelector.prototype, "datastoreType", {
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
    Object.defineProperty(TsDatastoreSelector.prototype, "configuration", {
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
    Object.defineProperty(TsDatastoreSelector.prototype, "isWarp10", {
        /** Warp 10 datastore */
        get: function () {
            return this.datastoreType ? this.datastoreType == "warp10" : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreSelector.prototype, "isInfluxDB", {
        /** InfluxDB datastore */
        get: function () {
            return this.datastoreType ? this.datastoreType == "influxdb" : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TsDatastoreSelector.prototype, "isUnknown", {
        /** Unknown datastore */
        get: function () {
            return !this.isWarp10 && !this.isInfluxDB;
        },
        enumerable: true,
        configurable: true
    });
    /** Find a referenced persistence configuration */
    TsDatastoreSelector.prototype.findGlobalDefinition = function (reference) {
        if (!this.timeSeriesConfigurations) {
            return null;
        }
        var match = this.timeSeriesConfigurations[reference];
        if (!match) {
            return null;
        }
        return {
            type: match.type,
            configuration: match.configuration
        };
    };
    /** Add datastore */
    TsDatastoreSelector.prototype.onAddDatastore = function () {
        this.create.openDialog();
    };
    /** Called to create datastore based on UI data */
    TsDatastoreSelector.prototype.onDatastoreCreate = function (definition) {
        this.$emit("create", definition);
    };
    /** Update datastore */
    TsDatastoreSelector.prototype.onUpdateDatastore = function () {
        this.update.openDialog(this.datastore);
    };
    /** Called to update datastore based on UI data */
    TsDatastoreSelector.prototype.onDatastoreUpdate = function (definition) {
        this.$emit("update", definition);
    };
    /** Unset datastore */
    TsDatastoreSelector.prototype.onUnsetDatastore = function () {
        this.$emit("unset");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], TsDatastoreSelector.prototype, "datastore", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], TsDatastoreSelector.prototype, "instance", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreSelector.prototype, "create", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreSelector.prototype, "update", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreSelector.prototype, "warp10", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreSelector.prototype, "influxdb", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], TsDatastoreSelector.prototype, "unknown", void 0);
    TsDatastoreSelector = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VCard: lib_["VCard"],
                VIcon: lib_["VIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                ContentWarning: external_sitewhere_ide_components_["ContentWarning"],
                TsDatastoreCreateDialog: datastore_TsDatastoreCreateDialog,
                TsDatastoreUpdateDialog: datastore_TsDatastoreUpdateDialog,
                Warp10Summary: warp10_Warp10Summary,
                InfluxDbSummary: influxdb_InfluxDbSummary,
                NoSummary: datastore_NoSummary
            }
        })
    ], TsDatastoreSelector);
    return TsDatastoreSelector;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var TsDatastoreSelectorvue_type_script_lang_ts_ = (TsDatastoreSelectorvue_type_script_lang_ts_TsDatastoreSelector);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreSelector.vue?vue&type=script&lang=ts&
 /* harmony default export */ var datastore_TsDatastoreSelectorvue_type_script_lang_ts_ = (TsDatastoreSelectorvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/common/datastore/TsDatastoreSelector.vue





/* normalize component */

var TsDatastoreSelector_component = normalizeComponent(
  datastore_TsDatastoreSelectorvue_type_script_lang_ts_,
  TsDatastoreSelectorvue_type_template_id_1544e2a1_render,
  TsDatastoreSelectorvue_type_template_id_1544e2a1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datastore_TsDatastoreSelector = (TsDatastoreSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue?vue&type=template&id=775757e0&
var AssetManagementPluginvue_type_template_id_775757e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Asset Management Datastore"}},[_c('rdb-datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"create":_vm.onCreateDatastore,"update":_vm.onUpdateDatastore,"unset":_vm.onUnsetDatastore}})],1)],1)}
var AssetManagementPluginvue_type_template_id_775757e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/assetmanagement/AssetManagementPlugin.vue?vue&type=template&id=775757e0&

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
        this.markDirty();
    };
    /** Unset the datastore */
    AssetManagementPlugin.prototype.onUnsetDatastore = function () {
        if (this.assetManagement) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.assetManagement.datastore = null;
            this.markDirty();
        }
    };
    /** Mark data as having been updated */
    AssetManagementPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], AssetManagementPlugin.prototype, "configuration", void 0);
    AssetManagementPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { ContentSection: external_sitewhere_ide_components_["ContentSection"], TenantEnginePlugin: tenantengines_TenantEnginePlugin, RdbDatastoreSelector: datastore_RdbDatastoreSelector }
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
  AssetManagementPluginvue_type_template_id_775757e0_render,
  AssetManagementPluginvue_type_template_id_775757e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var assetmanagement_AssetManagementPlugin = (AssetManagementPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue?vue&type=template&id=51a21e82&
var BatchOperationsPluginvue_type_template_id_51a21e82_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Batch Operations Datastore"}},[_c('rdb-datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"create":_vm.onCreateDatastore,"update":_vm.onUpdateDatastore,"unset":_vm.onUnsetDatastore}})],1),_c('v-divider',{staticClass:"mt-4 mb-4"}),_c('batch-operation-manager-section',{attrs:{"configuration":_vm.batchOperationManager},on:{"update":_vm.onBatchOperationManagerUpdate}})],1)}
var BatchOperationsPluginvue_type_template_id_51a21e82_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/BatchOperationsPlugin.vue?vue&type=template&id=51a21e82&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerSection.vue?vue&type=template&id=4c195150&
var BatchOperationManagerSectionvue_type_template_id_4c195150_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('content-section',{attrs:{"icon":_vm.icon,"title":"Batch Operation Manager"}},[_c('content-field',{staticClass:"mt-5",attrs:{"name":"throttle delay(ms)","value":_vm.throttleDelayMs}}),_c('content-link',{staticClass:"mt-5",attrs:{"icon":"fa-edit","text":"Edit batch operation manager settings."},on:{"linkClicked":_vm.onEditBatchOperationManager}}),_c('batch-operation-manager-dialog',{ref:"dialog",on:{"update":_vm.onBatchOperationManagerUpdate}})],1)}
var BatchOperationManagerSectionvue_type_template_id_4c195150_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerSection.vue?vue&type=template&id=4c195150&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerDialog.vue?vue&type=template&id=39986495&
var BatchOperationManagerDialogvue_type_template_id_39986495_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Edit Batch Operation Manager Settings","width":"500","loaded":true,"visible":_vm.dialogVisible,"createLabel":"Update","cancelLabel":"Cancel"},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"tabs"},[_c('v-tab',{key:"manager"},[_vm._v("Manager")])],1),_c('template',{slot:"tab-items"},[_c('v-tab-item',{key:"manager"},[_c('batch-operation-manager-fields',{ref:"manager"})],1)],1)],2)}
var BatchOperationManagerDialogvue_type_template_id_39986495_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerDialog.vue?vue&type=template&id=39986495&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/batchoperations/batchoperationmanager/BatchOperationManagerFields.vue?vue&type=template&id=b799d2bc&
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
  BatchOperationManagerSectionvue_type_template_id_4c195150_render,
  BatchOperationManagerSectionvue_type_template_id_4c195150_staticRenderFns,
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
        this.markDirty();
    };
    /** Unset the datastore */
    BatchOperationsPlugin.prototype.onUnsetDatastore = function () {
        if (this.batchOperations) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.batchOperations.datastore = null;
            this.markDirty();
        }
    };
    /** Handle batch operation manager updates */
    BatchOperationsPlugin.prototype.onBatchOperationManagerUpdate = function (updated) {
        if (this.batchOperations) {
            this.batchOperations.batchOperationManager = updated;
            this.markDirty();
        }
    };
    /** Mark data as having been updated */
    BatchOperationsPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
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
                RdbDatastoreSelector: datastore_RdbDatastoreSelector,
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
  BatchOperationsPluginvue_type_template_id_51a21e82_render,
  BatchOperationsPluginvue_type_template_id_51a21e82_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var batchoperations_BatchOperationsPlugin = (BatchOperationsPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue?vue&type=template&id=63c1d72b&
var CommandDeliveryPluginvue_type_template_id_63c1d72b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('command-destinations-table',{attrs:{"tenantId":_vm.tenantId,"destinations":_vm.destinations},on:{"create":_vm.onCommandDestinationCreated,"update":_vm.onCommandDestinationUpdated,"delete":_vm.onCommandDestinationDeleted}}),_c('content-divider'),_c('command-router-section',{attrs:{"router":_vm.router,"destinations":_vm.destinations},on:{"update":_vm.onCommandRouterUpdated,"unset":_vm.onUnsetCommandRouter}})],1)}
var CommandDeliveryPluginvue_type_template_id_63c1d72b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDeliveryPlugin.vue?vue&type=template&id=63c1d72b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDestinationsTable.vue?vue&type=template&id=60bfaf3d&
var CommandDestinationsTablevue_type_template_id_60bfaf3d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('content-section',{attrs:{"icon":_vm.icon,"title":"Command Destinations"}},[_c('section-overview',{attrs:{"title":"Configured Command Destinations"}},[_vm._v(" Command destinations are configured to deliver device commands over various communication protocols. A command router chooses which destinations will receive a given command. ")]),_c('datatable-section',{attrs:{"headers":_vm.headers,"items":_vm.displayCommandDestinations,"no-data-text":"No commmand destinations have been defined","width":"50%"},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_c('tr',[_c('td',{attrs:{"width":"48%"}},[_c('datatable-link',{attrs:{"text":props.item.meta.id},on:{"linkClicked":function($event){return _vm.onOpenCommandDestination(props.item.meta.id)}}})],1),_c('td',{attrs:{"width":"48%"}},[_vm._v(_vm._s(props.item.meta.type))]),_c('td',{attrs:{"width":"4%"}},[_c('content-delete-icon',{on:{"delete":function($event){return _vm.onDeleteCommandDestination(props.item.meta.id)}}})],1)])]}},{key:"datatable-footer",fn:function(){return [_c('content-link',{staticClass:"mt-5",attrs:{"icon":"fa-plus-circle","text":"Add new command destination."},on:{"linkClicked":_vm.onAddCommandDestination}})]},proxy:true},{key:"datatable-dialogs",fn:function(){return [_c('new-command-destination-chooser',{ref:"chooser",on:{"chosen":_vm.onCommandDestinationCreate}}),_c('coap-command-destination-create-dialog',{ref:"coapCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onCommandDestinationAdded}}),_c('coap-command-destination-update-dialog',{ref:"coapUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onCommandDestinationUpdated}}),_c('mqtt-command-destination-create-dialog',{ref:"mqttCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onCommandDestinationAdded}}),_c('mqtt-command-destination-update-dialog',{ref:"mqttUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onCommandDestinationUpdated}})]},proxy:true}])})],1)}
var CommandDestinationsTablevue_type_template_id_60bfaf3d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDestinationsTable.vue?vue&type=template&id=60bfaf3d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NewCommandDestinationChooser.vue?vue&type=template&id=386c7d50&
var NewCommandDestinationChooservue_type_template_id_386c7d50_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('new-element-chooser',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Add Command Destination","width":"500"}},[_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"coap"},on:{"chosen":_vm.onChosen}},[_vm._v("CoAP Command Destination")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"mqtt"},on:{"chosen":_vm.onChosen}},[_vm._v("MQTT Command Destination")])],1)}
var NewCommandDestinationChooservue_type_template_id_386c7d50_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NewCommandDestinationChooser.vue?vue&type=template&id=386c7d50&

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
  NewCommandDestinationChooservue_type_template_id_386c7d50_render,
  NewCommandDestinationChooservue_type_template_id_386c7d50_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var commanddelivery_NewCommandDestinationChooser = (NewCommandDestinationChooser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationCreateDialog.vue?vue&type=template&id=30271060&
var CoapCommandDestinationCreateDialogvue_type_template_id_30271060_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('coap-command-destination-dialog',{ref:"dialog",attrs:{"title":"Create CoAP Command Destination","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var CoapCommandDestinationCreateDialogvue_type_template_id_30271060_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationCreateDialog.vue?vue&type=template&id=30271060&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationDialog.vue?vue&type=template&id=8dd18bfc&
var CoapCommandDestinationDialogvue_type_template_id_8dd18bfc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-destination-dialog',{ref:"dialog",attrs:{"type":"coap","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel,"parameterExtractors":_vm.parameterExtractors},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"command-destination-tabs"},[_c('v-tab',{key:"coap"},[_vm._v("Configuration")])],1),_c('template',{slot:"command-destination-tab-items"},[_c('v-tab-item',{key:"coap",attrs:{"eager":""}},[_c('coap-fields',{ref:"coap"})],1)],1)],2)}
var CoapCommandDestinationDialogvue_type_template_id_8dd18bfc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationDialog.vue?vue&type=template&id=8dd18bfc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandDestinationDialog.vue?vue&type=template&id=ad32c380&
var CommandDestinationDialogvue_type_template_id_ad32c380_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"visible":_vm.visible,"createLabel":_vm.createLabel || 'Create',"cancelLabel":_vm.cancelLabel || 'Cancel'},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"header"},[_c('dialog-header',[_c('v-layout',{staticClass:"pl-4 pr-4 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs5":""}},[(_vm.visible)?_c('form-text',{staticClass:"mr-3",attrs:{"label":"Command destination id","title":"Unique command destination identifier.","icon":"info","dense":true,"autofocus":true},model:{value:(_vm.id),callback:function ($$v) {_vm.id=$$v},expression:"id"}},[(!_vm.$v.id.required && _vm.$v.$dirty)?_c('span',[_vm._v("Id is required.")]):_vm._e(),(!_vm.$v.id.idConflict && _vm.$v.$dirty)?_c('span',[_vm._v("Id already in use.")]):_vm._e()]):_vm._e()],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-select',{attrs:{"items":_vm.parameterExtractors,"title":"Choose parameter extractor for command destination","label":"Parameter extractor","item-text":"text","item-value":"value","icon":"settings"},model:{value:(_vm.extractorType),callback:function ($$v) {_vm.extractorType=$$v},expression:"extractorType"}})],1)],1)],1)],1),_c('template',{slot:"tabs"},[_vm._t("command-destination-tabs"),_c('v-tab',{key:"extractor"},[_vm._v("Parameter Extractor")])],2),_c('template',{slot:"tab-items"},[_vm._t("command-destination-tab-items"),_c('v-tab-item',{key:"extractor",attrs:{"eager":""}},[_c('parameter-extractor-configuration',{ref:"extractor",attrs:{"parameterExtractor":_vm.parameterExtractor,"tenantId":_vm.tenantId}})],1)],2)],2)}
var CommandDestinationDialogvue_type_template_id_ad32c380_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandDestinationDialog.vue?vue&type=template&id=ad32c380&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/ParameterExtractorConfiguration.vue?vue&type=template&id=08ae0c4e&
var ParameterExtractorConfigurationvue_type_template_id_08ae0c4e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[(_vm.extractorType == 'mqtt-default')?_c('default-mqtt-parameter-extractor-configuration',{ref:"details"}):_vm._e(),(_vm.extractorType == 'coap-default')?_c('metadata-coap-parameter-extractor-configuration',{ref:"details"}):_vm._e()],1)}
var ParameterExtractorConfigurationvue_type_template_id_08ae0c4e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/ParameterExtractorConfiguration.vue?vue&type=template&id=08ae0c4e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorConfiguration.vue?vue&type=template&id=86c9f9ca&
var DefaultMqttParameterExtractorConfigurationvue_type_template_id_86c9f9ca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('default-mqtt-parameter-extractor-fields',{ref:"fields",attrs:{"tenantId":_vm.tenantId}})}
var DefaultMqttParameterExtractorConfigurationvue_type_template_id_86c9f9ca_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorConfiguration.vue?vue&type=template&id=86c9f9ca&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorFields.vue?vue&type=template&id=2a45ccad&
var DefaultMqttParameterExtractorFieldsvue_type_template_id_2a45ccad_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Command topic expression","title":"Expression used to determine command MQTT topic.","icon":"settings"},model:{value:(_vm.commandTopicExpression),callback:function ($$v) {_vm.commandTopicExpression=$$v},expression:"commandTopicExpression"}},[(!_vm.$v.commandTopicExpression.required && _vm.$v.$dirty)?_c('span',[_vm._v("Command topic expression is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"System topic expression","title":"Expression used to determine system MQTT topic.","icon":"settings"},model:{value:(_vm.systemTopicExpression),callback:function ($$v) {_vm.systemTopicExpression=$$v},expression:"systemTopicExpression"}},[(!_vm.$v.systemTopicExpression.required && _vm.$v.$dirty)?_c('span',[_vm._v("System topic expression is required.")]):_vm._e()])],1)],1)}
var DefaultMqttParameterExtractorFieldsvue_type_template_id_2a45ccad_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/mqtt/DefaultMqttParameterExtractorFields.vue?vue&type=template&id=2a45ccad&

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
        this.commandTopicExpression =
            input.commandTopicExpression || "SiteWhere/${tenant}/command/${device}";
        this.systemTopicExpression =
            input.systemTopicExpression || "SiteWhere/${tenant}/system/${device}";
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
  DefaultMqttParameterExtractorFieldsvue_type_template_id_2a45ccad_render,
  DefaultMqttParameterExtractorFieldsvue_type_template_id_2a45ccad_staticRenderFns,
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
  DefaultMqttParameterExtractorConfigurationvue_type_template_id_86c9f9ca_render,
  DefaultMqttParameterExtractorConfigurationvue_type_template_id_86c9f9ca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_DefaultMqttParameterExtractorConfiguration = (DefaultMqttParameterExtractorConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorConfiguration.vue?vue&type=template&id=5c6ae16c&
var MetadataCoapParameterExtractorConfigurationvue_type_template_id_5c6ae16c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('metadata-coap-parameter-extractor-fields',{ref:"fields",attrs:{"tenantId":_vm.tenantId}})}
var MetadataCoapParameterExtractorConfigurationvue_type_template_id_5c6ae16c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorConfiguration.vue?vue&type=template&id=5c6ae16c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorFields.vue?vue&type=template&id=1d923e8c&
var MetadataCoapParameterExtractorFieldsvue_type_template_id_1d923e8c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Hostname metadata field","title":"Metadata field that provides CoAP server hostname.","icon":"settings"},model:{value:(_vm.hostnameMetadataField),callback:function ($$v) {_vm.hostnameMetadataField=$$v},expression:"hostnameMetadataField"}},[(!_vm.$v.hostnameMetadataField.required && _vm.$v.$dirty)?_c('span',[_vm._v("Hostname metadata field is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Port metadata field","title":"Metadata field that provides CoAP server port.","icon":"settings"},model:{value:(_vm.portMetadataField),callback:function ($$v) {_vm.portMetadataField=$$v},expression:"portMetadataField"}},[(!_vm.$v.portMetadataField.required && _vm.$v.$dirty)?_c('span',[_vm._v("Port metadata field is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"URL metadata field","title":"Metadata field that provides CoAP server URL.","icon":"settings"},model:{value:(_vm.urlMetadataField),callback:function ($$v) {_vm.urlMetadataField=$$v},expression:"urlMetadataField"}},[(!_vm.$v.urlMetadataField.required && _vm.$v.$dirty)?_c('span',[_vm._v("URL metadata field is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Method metadata field","title":"Metadata field that provides CoAP server method.","icon":"settings"},model:{value:(_vm.methodMetadataField),callback:function ($$v) {_vm.methodMetadataField=$$v},expression:"methodMetadataField"}},[(!_vm.$v.methodMetadataField.required && _vm.$v.$dirty)?_c('span',[_vm._v("Method metadata field is required.")]):_vm._e()])],1)],1)}
var MetadataCoapParameterExtractorFieldsvue_type_template_id_1d923e8c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorFields.vue?vue&type=template&id=1d923e8c&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorFields.vue?vue&type=script&lang=ts&





var MetadataCoapParameterExtractorFieldsvue_type_script_lang_ts_MetadataCoapParameterExtractorFields = /** @class */ (function (_super) {
    __extends(MetadataCoapParameterExtractorFields, _super);
    function MetadataCoapParameterExtractorFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hostnameMetadataField = null;
        _this.portMetadataField = null;
        _this.urlMetadataField = null;
        _this.methodMetadataField = null;
        return _this;
    }
    /** Reset section content */
    MetadataCoapParameterExtractorFields.prototype.reset = function () {
        this.hostnameMetadataField = null;
        this.portMetadataField = null;
        this.urlMetadataField = null;
        this.methodMetadataField = null;
        this.$v.$reset();
    };
    /** Perform validation */
    MetadataCoapParameterExtractorFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    MetadataCoapParameterExtractorFields.prototype.load = function (input) {
        this.hostnameMetadataField = input.hostnameMetadataField || "coap_hostname";
        this.portMetadataField = input.portMetadataField || "coap_port";
        this.urlMetadataField = input.urlMetadataField || "coap_url";
        this.methodMetadataField = input.methodMetadataField || "coap_method";
    };
    /** Save form data to an object */
    MetadataCoapParameterExtractorFields.prototype.save = function () {
        return {
            hostnameMetadataField: this.hostnameMetadataField || "",
            portMetadataField: this.portMetadataField || "",
            urlMetadataField: this.urlMetadataField || "",
            methodMetadataField: this.methodMetadataField || ""
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MetadataCoapParameterExtractorFields.prototype, "tenantId", void 0);
    MetadataCoapParameterExtractorFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogSection: external_sitewhere_ide_components_["DialogSection"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] },
            validations: {
                hostnameMetadataField: {
                    required: validators["required"]
                },
                portMetadataField: {
                    required: validators["required"]
                },
                urlMetadataField: {
                    required: validators["required"]
                },
                methodMetadataField: {
                    required: validators["required"]
                }
            }
        })
    ], MetadataCoapParameterExtractorFields);
    return MetadataCoapParameterExtractorFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var MetadataCoapParameterExtractorFieldsvue_type_script_lang_ts_ = (MetadataCoapParameterExtractorFieldsvue_type_script_lang_ts_MetadataCoapParameterExtractorFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_MetadataCoapParameterExtractorFieldsvue_type_script_lang_ts_ = (MetadataCoapParameterExtractorFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorFields.vue





/* normalize component */

var MetadataCoapParameterExtractorFields_component = normalizeComponent(
  coap_MetadataCoapParameterExtractorFieldsvue_type_script_lang_ts_,
  MetadataCoapParameterExtractorFieldsvue_type_template_id_1d923e8c_render,
  MetadataCoapParameterExtractorFieldsvue_type_template_id_1d923e8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_MetadataCoapParameterExtractorFields = (MetadataCoapParameterExtractorFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorConfiguration.vue?vue&type=script&lang=ts&




var MetadataCoapParameterExtractorConfigurationvue_type_script_lang_ts_MetadataCoapParameterExtractorConfiguration = /** @class */ (function (_super) {
    __extends(MetadataCoapParameterExtractorConfiguration, _super);
    function MetadataCoapParameterExtractorConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Reset section content */
    MetadataCoapParameterExtractorConfiguration.prototype.reset = function () {
        if (this.fields) {
            this.fields.reset();
        }
    };
    /** Perform validation */
    MetadataCoapParameterExtractorConfiguration.prototype.validate = function () {
        if (!this.fields.validate()) {
            return false;
        }
        return true;
    };
    /** Load form data from an object */
    MetadataCoapParameterExtractorConfiguration.prototype.load = function (input) {
        this.reset();
        if (this.fields) {
            this.fields.load(input);
        }
    };
    /** Save form data to an object */
    MetadataCoapParameterExtractorConfiguration.prototype.save = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        if (this.fields) {
            Object.assign(payload, this.fields.save());
        }
        return payload;
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MetadataCoapParameterExtractorConfiguration.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MetadataCoapParameterExtractorConfiguration.prototype, "fields", void 0);
    MetadataCoapParameterExtractorConfiguration = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                MetadataCoapParameterExtractorFields: coap_MetadataCoapParameterExtractorFields
            }
        })
    ], MetadataCoapParameterExtractorConfiguration);
    return MetadataCoapParameterExtractorConfiguration;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var MetadataCoapParameterExtractorConfigurationvue_type_script_lang_ts_ = (MetadataCoapParameterExtractorConfigurationvue_type_script_lang_ts_MetadataCoapParameterExtractorConfiguration);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorConfiguration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var coap_MetadataCoapParameterExtractorConfigurationvue_type_script_lang_ts_ = (MetadataCoapParameterExtractorConfigurationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/extractors/coap/MetadataCoapParameterExtractorConfiguration.vue





/* normalize component */

var MetadataCoapParameterExtractorConfiguration_component = normalizeComponent(
  coap_MetadataCoapParameterExtractorConfigurationvue_type_script_lang_ts_,
  MetadataCoapParameterExtractorConfigurationvue_type_template_id_5c6ae16c_render,
  MetadataCoapParameterExtractorConfigurationvue_type_template_id_5c6ae16c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coap_MetadataCoapParameterExtractorConfiguration = (MetadataCoapParameterExtractorConfiguration_component.exports);
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
            components: {
                VCard: lib_["VCard"],
                DefaultMqttParameterExtractorConfiguration: mqtt_DefaultMqttParameterExtractorConfiguration,
                MetadataCoapParameterExtractorConfiguration: coap_MetadataCoapParameterExtractorConfiguration
            }
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
  ParameterExtractorConfigurationvue_type_template_id_08ae0c4e_render,
  ParameterExtractorConfigurationvue_type_template_id_08ae0c4e_staticRenderFns,
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
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    CommandDestinationDialog.prototype.save = function () {
        if (this.id && this.type && this.extractorType && this.extractor) {
            var peConfig = this.extractor.save();
            var parameterExtractor = {
                type: this.extractorType,
                configuration: peConfig
            };
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            var config = {
                id: this.id,
                type: this.type,
                parameterExtractor: parameterExtractor
            };
            return config;
        }
    };
    /** Reset the dialog */
    CommandDestinationDialog.prototype.reset = function () {
        this.id = null;
        this.setActiveTab(0);
        this.$v.$reset();
        /** Reset to choose first available extractor */
        if (this.parameterExtractors) {
            var etype = this.parameterExtractors[0].value;
            this.extractorType = etype;
        }
    };
    /** Validate fields */
    CommandDestinationDialog.prototype.validate = function () {
        if (!this.extractor || !this.extractor.validate()) {
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
  CommandDestinationDialogvue_type_template_id_ad32c380_render,
  CommandDestinationDialogvue_type_template_id_ad32c380_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var commanddelivery_CommandDestinationDialog = (CommandDestinationDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapFields.vue?vue&type=template&id=1a5924a4&
var CoapFieldsvue_type_template_id_1a5924a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('no-configuration')],1)}
var CoapFieldsvue_type_template_id_1a5924a4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/coap/CoapFields.vue?vue&type=template&id=1a5924a4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NoConfiguration.vue?vue&type=template&id=078e8cd9&scoped=true&
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
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    CoapFields.prototype.reset = function () { };
    /** Perform validation */
    CoapFields.prototype.validate = function () {
        return true;
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
  CoapFieldsvue_type_template_id_1a5924a4_render,
  CoapFieldsvue_type_template_id_1a5924a4_staticRenderFns,
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
        if (this.dialog) {
            this.dialog.reset();
        }
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
  CoapCommandDestinationDialogvue_type_template_id_8dd18bfc_render,
  CoapCommandDestinationDialogvue_type_template_id_8dd18bfc_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/coap/CoapCommandDestinationUpdateDialog.vue?vue&type=template&id=2130d30a&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationCreateDialog.vue?vue&type=template&id=3c5219c7&
var MqttCommandDestinationCreateDialogvue_type_template_id_3c5219c7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mqtt-command-destination-dialog',{ref:"dialog",attrs:{"title":"Create MQTT Command Destination","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var MqttCommandDestinationCreateDialogvue_type_template_id_3c5219c7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationCreateDialog.vue?vue&type=template&id=3c5219c7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationDialog.vue?vue&type=template&id=7550561c&
var MqttCommandDestinationDialogvue_type_template_id_7550561c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('command-destination-dialog',{ref:"dialog",attrs:{"type":"mqtt","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel,"parameterExtractors":_vm.parameterExtractors},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"command-destination-tabs"},[_c('v-tab',{key:"connection"},[_vm._v("Connection")]),_c('v-tab',{key:"authentication"},[_vm._v("Authentication")])],1),_c('template',{slot:"command-destination-tab-items"},[_c('v-tab-item',{key:"connection",attrs:{"eager":""}},[_c('mqtt-connection-fields',{ref:"connection"})],1),_c('v-tab-item',{key:"authentication",attrs:{"eager":""}},[_c('mqtt-authentication-fields',{ref:"authentication"})],1)],1)],2)}
var MqttCommandDestinationDialogvue_type_template_id_7550561c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationDialog.vue?vue&type=template&id=7550561c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttConnectionFields.vue?vue&type=template&id=f297cdfc&
var MqttConnectionFieldsvue_type_template_id_f297cdfc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs2":""}},[_c('form-select',{attrs:{"items":_vm.protocols,"title":"Choose connection protocol","label":"Protocol","item-text":"text","item-value":"value","icon":"lock"},model:{value:(_vm.protocol),callback:function ($$v) {_vm.protocol=$$v},expression:"protocol"}})],1),_c('v-flex',{attrs:{"xs8":""}},[_c('form-text',{staticClass:"ml-3 mr-3",attrs:{"required":"","label":"Hostname","title":"MQTT broker hostname.","icon":"router"},model:{value:(_vm.hostname),callback:function ($$v) {_vm.hostname=$$v},expression:"hostname"}},[(!_vm.$v.hostname.required && _vm.$v.$dirty)?_c('span',[_vm._v("Hostname is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs2":""}},[_c('form-text',{attrs:{"required":"","label":"Port","title":"MQTT broker port.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}},[(!_vm.$v.port.required && _vm.$v.$dirty)?_c('span',[_vm._v("Required.")]):_vm._e()])],1)],1)}
var MqttConnectionFieldsvue_type_template_id_f297cdfc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttConnectionFields.vue?vue&type=template&id=f297cdfc&

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
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"], FormSelect: external_sitewhere_ide_components_["FormSelect"], VFlex: lib_["VFlex"], VTab: lib_["VTab"], VTabItem: lib_["VTabItem"] },
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
  MqttConnectionFieldsvue_type_template_id_f297cdfc_render,
  MqttConnectionFieldsvue_type_template_id_f297cdfc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttConnectionFields = (MqttConnectionFields_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=62565818&
var MqttAuthenticationFieldsvue_type_template_id_62565818_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Username","title":"Username for authentication.","icon":"account_circle"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Password","title":"Password for authentication.","icon":"lock","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Truststore path","title":"Truststore path.","icon":"info"},model:{value:(_vm.trustStorePath),callback:function ($$v) {_vm.trustStorePath=$$v},expression:"trustStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Truststore password","title":"Truststore password.","icon":"lock","type":"password"},model:{value:(_vm.trustStorePassword),callback:function ($$v) {_vm.trustStorePassword=$$v},expression:"trustStorePassword"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Keystore path","title":"Keystore path.","icon":"info"},model:{value:(_vm.keyStorePath),callback:function ($$v) {_vm.keyStorePath=$$v},expression:"keyStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Keystore password","title":"Keystore password.","icon":"lock","type":"password"},model:{value:(_vm.keyStorePassword),callback:function ($$v) {_vm.keyStorePassword=$$v},expression:"keyStorePassword"}})],1)],1)}
var MqttAuthenticationFieldsvue_type_template_id_62565818_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=62565818&

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
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogSection: external_sitewhere_ide_components_["DialogSection"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] },
            validations: {}
        })
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
  MqttAuthenticationFieldsvue_type_template_id_62565818_render,
  MqttAuthenticationFieldsvue_type_template_id_62565818_staticRenderFns,
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
        if (this.dialog) {
            this.dialog.reset();
        }
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
  MqttCommandDestinationDialogvue_type_template_id_7550561c_render,
  MqttCommandDestinationDialogvue_type_template_id_7550561c_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/mqtt/MqttCommandDestinationUpdateDialog.vue?vue&type=template&id=4dc49373&
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
        return _this;
    }
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
        if (this.destinations) {
            this.destinations.forEach(function (dest) {
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
        if (this.destinations) {
            this.destinations.forEach(function (dest, index) {
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
        if (this.destinations && index != null) {
            return this.destinations[index];
        }
        return null;
    };
    Object.defineProperty(CommandDeliveryTable.prototype, "displayCommandDestinations", {
        /** Get command destinations as a sorted array */
        get: function () {
            var all = [];
            if (this.destinations) {
                this.destinations.forEach(function (dest) {
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
            return all;
        },
        enumerable: true,
        configurable: true
    });
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
        if (this.destinations) {
            this.destinations.push(config);
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
        if (this.destinations && index != null) {
            external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.destinations, index, config);
        }
        this.$emit("update", originalId, config);
    };
    /** Delete command destination by id */
    CommandDeliveryTable.prototype.onDeleteCommandDestination = function (id) {
        var index = this.getCommandDestinationIndex(id);
        if (this.destinations && index != null) {
            this.destinations.splice(index, 1);
        }
        this.$emit("delete", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDeliveryTable.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandDeliveryTable.prototype, "destinations", void 0);
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
    CommandDeliveryTable = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                DatatableSection: external_sitewhere_ide_components_["DatatableSection"],
                DatatableLink: external_sitewhere_ide_components_["DatatableLink"],
                ContentDeleteIcon: external_sitewhere_ide_components_["ContentDeleteIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                SectionOverview: external_sitewhere_ide_components_["SectionOverview"],
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
  CommandDestinationsTablevue_type_template_id_60bfaf3d_render,
  CommandDestinationsTablevue_type_template_id_60bfaf3d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CommandDestinationsTable = (CommandDestinationsTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/CommandRouterSection.vue?vue&type=template&id=371ab6b3&
var CommandRouterSectionvue_type_template_id_371ab6b3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('content-section',{attrs:{"icon":"fa-sitemap","fa":true,"title":"Command Router"}},[(_vm.router)?_c('v-card',{attrs:{"flat":""}},[(_vm.isDeviceTypeMappingRouter)?_c('device-type-mapping-router-summary',{staticClass:"mb-2",attrs:{"destinations":_vm.destinations,"router":_vm.router},on:{"update":_vm.onCommandRouterUpdate}}):_vm._e(),_c('content-link',{attrs:{"icon":"fa-trash","text":"Unset command router"},on:{"linkClicked":_vm.onUnsetCommandRouter}})],1):_c('v-card',{attrs:{"flat":""}},[_c('content-warning',{attrs:{"text":"No command router is set. This will cause tenant engine startup to fail!"}}),_c('content-link',{staticClass:"mt-3",attrs:{"icon":"fa-plus-circle","text":"Add new command router"},on:{"linkClicked":_vm.onAddCommandRouter}})],1),_c('new-command-router-chooser',{ref:"chooser",on:{"chosen":_vm.onCommandRouterChosen}}),_c('device-type-mapping-router-create-dialog',{ref:"dtmRouterCreate"})],1)}
var CommandRouterSectionvue_type_template_id_371ab6b3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/CommandRouterSection.vue?vue&type=template&id=371ab6b3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/NewCommandRouterChooser.vue?vue&type=template&id=19995281&
var NewCommandRouterChooservue_type_template_id_19995281_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('new-element-chooser',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Add Command Router","width":"500"}},[_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"device-type-mapping"},on:{"chosen":_vm.onChosen}},[_vm._v("Device Type Mapping Router")])],1)}
var NewCommandRouterChooservue_type_template_id_19995281_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/NewCommandRouterChooser.vue?vue&type=template&id=19995281&

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
  NewCommandRouterChooservue_type_template_id_19995281_render,
  NewCommandRouterChooservue_type_template_id_19995281_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var commanddelivery_NewCommandRouterChooser = (NewCommandRouterChooser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/Summary.vue?vue&type=template&id=558cb726&scoped=true&
var Summaryvue_type_template_id_558cb726_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[_c('section-overview',{attrs:{"title":"Device Type Mapping Router"}},[_vm._v(" The mappings below will direct device commands to be delivered via command destinations based on device type. Any commands that do not match the mappings are delivered to the default destination. ")]),_c('datatable-section',{attrs:{"headers":_vm.headers,"items":_vm.displayedMappings,"no-data-text":"No mappings have been defined","width":"50%"},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_c('tr',[_c('td',{attrs:{"width":"48%"}},[_vm._v(_vm._s(props.item.deviceTypeName))]),_c('td',{attrs:{"width":"48%"}},[_vm._v(_vm._s(props.item.destinationId))]),_c('td',{attrs:{"width":"4%"}},[_c('content-delete-icon',{on:{"delete":function($event){return _vm.onDeleteMapping(props.item.deviceTypeToken, props.item.destinationId)}}})],1)])]}}])}),(_vm.defaultDestination)?_c('v-card',{staticClass:"mb-7",attrs:{"flat":""}},[_c('content-field',{attrs:{"name":"default destination","value":_vm.defaultDestination}})],1):_c('v-card',{staticClass:"mb-7",attrs:{"flat":""}},[_c('content-warning',{attrs:{"text":"No default destination is set. This will cause tenant engine startup to fail!"}})],1),_c('content-link',{staticClass:"mb-2",attrs:{"icon":"fa-plus-circle","text":"Add device type mapping"},on:{"linkClicked":_vm.onAddMapping}}),_c('content-link',{attrs:{"icon":"fa-edit","text":"Update default destination"},on:{"linkClicked":_vm.onUpdateSettings}}),_c('settings-update-dialog',{ref:"settings",attrs:{"destinations":_vm.destinations},on:{"update":_vm.onSettingsUpdated}}),_c('mapping-create-dialog',{ref:"mapping",attrs:{"destinations":_vm.destinations,"deviceTypes":_vm.deviceTypes},on:{"create":_vm.onMappingAdded}})],1)}
var Summaryvue_type_template_id_558cb726_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/Summary.vue?vue&type=template&id=558cb726&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsUpdateDialog.vue?vue&type=template&id=582d03f5&
var SettingsUpdateDialogvue_type_template_id_582d03f5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('settings-dialog',{ref:"dialog",attrs:{"title":"Update Device Type Mapping Router","createLabel":"Update","destinations":_vm.destinations},on:{"payload":_vm.onPayload}})}
var SettingsUpdateDialogvue_type_template_id_582d03f5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsUpdateDialog.vue?vue&type=template&id=582d03f5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsDialog.vue?vue&type=template&id=0f9071b6&
var SettingsDialogvue_type_template_id_0f9071b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":"fa-sitemap","title":_vm.title,"width":"500","loaded":true,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":"Cancel"},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"tabs"},[_c('v-tab',{key:"manager"},[_vm._v("Settings")])],1),_c('template',{slot:"tab-items"},[_c('v-tab-item',{key:"manager"},[_c('settings-fields',{ref:"settings",attrs:{"destinations":_vm.destinations}})],1)],1)],2)}
var SettingsDialogvue_type_template_id_0f9071b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsDialog.vue?vue&type=template&id=0f9071b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsFields.vue?vue&type=template&id=235610b4&
var SettingsFieldsvue_type_template_id_235610b4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-select',{attrs:{"items":_vm.destinations,"title":"Choose default command destination","label":"Default Destination","item-text":"id","item-value":"id","icon":"fa-check"},model:{value:(_vm.defaultDestination),callback:function ($$v) {_vm.defaultDestination=$$v},expression:"defaultDestination"}})],1)],1)}
var SettingsFieldsvue_type_template_id_235610b4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsFields.vue?vue&type=template&id=235610b4&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsFields.vue?vue&type=script&lang=ts&





var SettingsFieldsvue_type_script_lang_ts_SettingsFields = /** @class */ (function (_super) {
    __extends(SettingsFields, _super);
    function SettingsFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultDestination = null;
        return _this;
    }
    /** Reset section content */
    SettingsFields.prototype.reset = function () {
        this.defaultDestination = null;
        this.$v.$reset();
    };
    /** Perform validation */
    SettingsFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    SettingsFields.prototype.load = function (input) {
        this.configuration = input;
        this.defaultDestination = input.defaultDestination || null;
    };
    /** Save form data to an object */
    SettingsFields.prototype.save = function () {
        return {
            mappings: [],
            defaultDestination: this.defaultDestination || ""
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsFields.prototype, "destinations", void 0);
    SettingsFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogSection: external_sitewhere_ide_components_["DialogSection"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormSelect: external_sitewhere_ide_components_["FormSelect"] },
            validations: {
                defaultDestination: {
                    required: validators["required"]
                }
            }
        })
    ], SettingsFields);
    return SettingsFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var SettingsFieldsvue_type_script_lang_ts_ = (SettingsFieldsvue_type_script_lang_ts_SettingsFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_SettingsFieldsvue_type_script_lang_ts_ = (SettingsFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsFields.vue





/* normalize component */

var SettingsFields_component = normalizeComponent(
  devicetypemapping_SettingsFieldsvue_type_script_lang_ts_,
  SettingsFieldsvue_type_template_id_235610b4_render,
  SettingsFieldsvue_type_template_id_235610b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicetypemapping_SettingsFields = (SettingsFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsDialog.vue?vue&type=script&lang=ts&





var SettingsDialogvue_type_script_lang_ts_SettingsDialog = /** @class */ (function (_super) {
    __extends(SettingsDialog, _super);
    function SettingsDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Generate payload from UI */
    SettingsDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.settings.save());
        return payload;
    };
    /** Reset dialog fields */
    SettingsDialog.prototype.reset = function () {
        if (this.settings) {
            this.settings.reset();
        }
    };
    /** Load dialog from a given configuration */
    SettingsDialog.prototype.load = function (config) {
        if (this.settings) {
            this.settings.load(config);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    SettingsDialog.prototype.onCreateClicked = function (e) {
        if (!this.settings.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
        this.closeDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsDialog.prototype, "destinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], SettingsDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], SettingsDialog.prototype, "settings", void 0);
    SettingsDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                DialogComponent: external_sitewhere_ide_components_["DialogComponent"],
                BaseDialog: external_sitewhere_ide_components_["BaseDialog"],
                SettingsFields: devicetypemapping_SettingsFields
            }
        })
    ], SettingsDialog);
    return SettingsDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var SettingsDialogvue_type_script_lang_ts_ = (SettingsDialogvue_type_script_lang_ts_SettingsDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_SettingsDialogvue_type_script_lang_ts_ = (SettingsDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsDialog.vue





/* normalize component */

var SettingsDialog_component = normalizeComponent(
  devicetypemapping_SettingsDialogvue_type_script_lang_ts_,
  SettingsDialogvue_type_template_id_0f9071b6_render,
  SettingsDialogvue_type_template_id_0f9071b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicetypemapping_SettingsDialog = (SettingsDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsUpdateDialog.vue?vue&type=script&lang=ts&




var SettingsUpdateDialogvue_type_script_lang_ts_SettingsUpdateDialog = /** @class */ (function (_super) {
    __extends(SettingsUpdateDialog, _super);
    function SettingsUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    SettingsUpdateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("update", payload);
    };
    /** Open dialog for edit */
    SettingsUpdateDialog.prototype.openDialog = function (config) {
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsUpdateDialog.prototype, "destinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], SettingsUpdateDialog.prototype, "dialog", void 0);
    SettingsUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                SettingsDialog: devicetypemapping_SettingsDialog
            }
        })
    ], SettingsUpdateDialog);
    return SettingsUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var SettingsUpdateDialogvue_type_script_lang_ts_ = (SettingsUpdateDialogvue_type_script_lang_ts_SettingsUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_SettingsUpdateDialogvue_type_script_lang_ts_ = (SettingsUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsUpdateDialog.vue





/* normalize component */

var SettingsUpdateDialog_component = normalizeComponent(
  devicetypemapping_SettingsUpdateDialogvue_type_script_lang_ts_,
  SettingsUpdateDialogvue_type_template_id_582d03f5_render,
  SettingsUpdateDialogvue_type_template_id_582d03f5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicetypemapping_SettingsUpdateDialog = (SettingsUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingCreateDialog.vue?vue&type=template&id=e27b7cee&
var MappingCreateDialogvue_type_template_id_e27b7cee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mapping-dialog',{ref:"dialog",attrs:{"title":"Create Device Type Mapping","createLabel":"Create","destinations":_vm.destinations,"deviceTypes":_vm.deviceTypes},on:{"payload":_vm.onPayload}})}
var MappingCreateDialogvue_type_template_id_e27b7cee_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingCreateDialog.vue?vue&type=template&id=e27b7cee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingDialog.vue?vue&type=template&id=364dd9f7&
var MappingDialogvue_type_template_id_364dd9f7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":"fa-sitemap","title":_vm.title,"width":"500","loaded":true,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":"Cancel"},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"tabs"},[_c('v-tab',{key:"mapping"},[_vm._v("Mapping")])],1),_c('template',{slot:"tab-items"},[_c('v-tab-item',{key:"mapping"},[_c('mapping-fields',{ref:"mapping",attrs:{"destinations":_vm.destinations,"deviceTypes":_vm.deviceTypes}})],1)],1)],2)}
var MappingDialogvue_type_template_id_364dd9f7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingDialog.vue?vue&type=template&id=364dd9f7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingFields.vue?vue&type=template&id=39d4a7f6&
var MappingFieldsvue_type_template_id_39d4a7f6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-select',{attrs:{"items":_vm.deviceTypes,"title":"Choose device type to map","label":"Device Type","item-text":"name","item-value":"token","icon":"settings"},model:{value:(_vm.deviceType),callback:function ($$v) {_vm.deviceType=$$v},expression:"deviceType"}},[(_vm.$v.deviceType.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Device type is required.")]):_vm._e()])],1),_c('v-flex',{staticClass:"mb-2",attrs:{"xs12":""}},[_c('form-select',{attrs:{"items":_vm.destinations,"title":"Choose command destination","label":"Command Destination","item-text":"id","item-value":"id","icon":"fa-sitemap"},model:{value:(_vm.destination),callback:function ($$v) {_vm.destination=$$v},expression:"destination"}},[(_vm.$v.destination.$invalid && _vm.$v.$dirty)?_c('span',[_vm._v("Destination is required.")]):_vm._e()])],1)],1)}
var MappingFieldsvue_type_template_id_39d4a7f6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingFields.vue?vue&type=template&id=39d4a7f6&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingFields.vue?vue&type=script&lang=ts&





var MappingFieldsvue_type_script_lang_ts_MappingsFields = /** @class */ (function (_super) {
    __extends(MappingsFields, _super);
    function MappingsFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceType = null;
        _this.destination = null;
        return _this;
    }
    /** Reset section content */
    MappingsFields.prototype.reset = function () {
        this.deviceType = null;
        this.destination = null;
        this.$v.$reset();
    };
    /** Perform validation */
    MappingsFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    MappingsFields.prototype.load = function (input) {
        this.deviceType = input.deviceTypeToken;
        this.destination = input.destinationId;
    };
    /** Save form data to an object */
    MappingsFields.prototype.save = function () {
        return {
            deviceTypeToken: this.deviceType || "",
            destinationId: this.destination || ""
        };
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MappingsFields.prototype, "destinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MappingsFields.prototype, "deviceTypes", void 0);
    MappingsFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { VFlex: lib_["VFlex"], DialogSection: external_sitewhere_ide_components_["DialogSection"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormSelect: external_sitewhere_ide_components_["FormSelect"] },
            validations: {
                deviceType: {
                    required: validators["required"]
                },
                destination: {
                    required: validators["required"]
                }
            }
        })
    ], MappingsFields);
    return MappingsFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var MappingFieldsvue_type_script_lang_ts_ = (MappingFieldsvue_type_script_lang_ts_MappingsFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_MappingFieldsvue_type_script_lang_ts_ = (MappingFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingFields.vue





/* normalize component */

var MappingFields_component = normalizeComponent(
  devicetypemapping_MappingFieldsvue_type_script_lang_ts_,
  MappingFieldsvue_type_template_id_39d4a7f6_render,
  MappingFieldsvue_type_template_id_39d4a7f6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MappingFields = (MappingFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingDialog.vue?vue&type=script&lang=ts&





var MappingDialogvue_type_script_lang_ts_SettingsDialog = /** @class */ (function (_super) {
    __extends(SettingsDialog, _super);
    function SettingsDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Generate payload from UI */
    SettingsDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.mapping.save());
        return payload;
    };
    /** Reset dialog fields */
    SettingsDialog.prototype.reset = function () {
        if (this.mapping) {
            this.mapping.reset();
        }
    };
    /** Load dialog from a given configuration */
    SettingsDialog.prototype.load = function (config) {
        if (this.mapping) {
            this.mapping.load(config);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    SettingsDialog.prototype.onCreateClicked = function (e) {
        if (!this.mapping.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
        this.closeDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsDialog.prototype, "destinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsDialog.prototype, "deviceTypes", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], SettingsDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], SettingsDialog.prototype, "mapping", void 0);
    SettingsDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                DialogComponent: external_sitewhere_ide_components_["DialogComponent"],
                BaseDialog: external_sitewhere_ide_components_["BaseDialog"],
                MappingFields: MappingFields
            }
        })
    ], SettingsDialog);
    return SettingsDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var MappingDialogvue_type_script_lang_ts_ = (MappingDialogvue_type_script_lang_ts_SettingsDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_MappingDialogvue_type_script_lang_ts_ = (MappingDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingDialog.vue





/* normalize component */

var MappingDialog_component = normalizeComponent(
  devicetypemapping_MappingDialogvue_type_script_lang_ts_,
  MappingDialogvue_type_template_id_364dd9f7_render,
  MappingDialogvue_type_template_id_364dd9f7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MappingDialog = (MappingDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingCreateDialog.vue?vue&type=script&lang=ts&




var MappingCreateDialogvue_type_script_lang_ts_MappingCreateDialog = /** @class */ (function (_super) {
    __extends(MappingCreateDialog, _super);
    function MappingCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    MappingCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    MappingCreateDialog.prototype.openDialog = function () {
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MappingCreateDialog.prototype, "destinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MappingCreateDialog.prototype, "deviceTypes", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MappingCreateDialog.prototype, "dialog", void 0);
    MappingCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                MappingDialog: MappingDialog
            }
        })
    ], MappingCreateDialog);
    return MappingCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var MappingCreateDialogvue_type_script_lang_ts_ = (MappingCreateDialogvue_type_script_lang_ts_MappingCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_MappingCreateDialogvue_type_script_lang_ts_ = (MappingCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/MappingCreateDialog.vue





/* normalize component */

var MappingCreateDialog_component = normalizeComponent(
  devicetypemapping_MappingCreateDialogvue_type_script_lang_ts_,
  MappingCreateDialogvue_type_template_id_e27b7cee_render,
  MappingCreateDialogvue_type_template_id_e27b7cee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicetypemapping_MappingCreateDialog = (MappingCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/Summary.vue?vue&type=script&lang=ts&








var Summaryvue_type_script_lang_ts_DeviceTypeMappingRouterSummary = /** @class */ (function (_super) {
    __extends(DeviceTypeMappingRouterSummary, _super);
    function DeviceTypeMappingRouterSummary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceTypes = [];
        /** Table headers */
        _this.headers = [
            { text: "Device Type", value: "type" },
            { text: "Command Destination", value: "destination" },
            { text: "", value: "delete" }
        ];
        return _this;
    }
    /** Called when component is created */
    DeviceTypeMappingRouterSummary.prototype.created = function () {
        this.loadDeviceTypes();
    };
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
    Object.defineProperty(DeviceTypeMappingRouterSummary.prototype, "displayedMappings", {
        /** Create sorted list of displayed mappings */
        get: function () {
            var _this = this;
            var mappings = [];
            if (this.configuration) {
                this.configuration.mappings.forEach(function (mapping) {
                    var type = _this.getDeviceTypeByToken(mapping.deviceTypeToken);
                    var display = {
                        deviceTypeToken: mapping.deviceTypeToken,
                        deviceTypeName: type ? type.name : mapping.deviceTypeToken,
                        destinationId: mapping.destinationId
                    };
                    mappings.push(display);
                });
            }
            mappings.sort(function (a, b) { return a.deviceTypeName.localeCompare(b.deviceTypeName); });
            return mappings;
        },
        enumerable: true,
        configurable: true
    });
    /** Add a new device type mapping */
    DeviceTypeMappingRouterSummary.prototype.onAddMapping = function () {
        this.mapping.openDialog();
    };
    /** Called after a new mapping is added */
    DeviceTypeMappingRouterSummary.prototype.onMappingAdded = function (mapping) {
        if (this.configuration) {
            this.configuration.mappings.push(mapping);
            this.$emit("update");
        }
    };
    /** Get mapping index */
    DeviceTypeMappingRouterSummary.prototype.getMappingIndex = function (deviceTypeToken, destinationId) {
        var match = null;
        if (this.mappings) {
            this.mappings.forEach(function (mapping, index) {
                if (mapping.deviceTypeToken === deviceTypeToken &&
                    mapping.destinationId === destinationId) {
                    match = index;
                }
            });
        }
        return match;
    };
    /** Called to remove an existing mapping */
    DeviceTypeMappingRouterSummary.prototype.onDeleteMapping = function (deviceTypeToken, destinationId) {
        var index = this.getMappingIndex(deviceTypeToken, destinationId);
        if (this.mappings && index != null) {
            this.mappings.splice(index, 1);
        }
        this.$emit("update");
    };
    /** Update command router settings */
    DeviceTypeMappingRouterSummary.prototype.onUpdateSettings = function () {
        this.settings.openDialog(this.router.configuration);
    };
    /** Called after router settings have been updated. */
    DeviceTypeMappingRouterSummary.prototype.onSettingsUpdated = function (updated) {
        this.router.configuration = updated;
        this.$emit("update");
    };
    /** Load device types asynchronously */
    DeviceTypeMappingRouterSummary.prototype.loadDeviceTypes = function () {
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
    /** Get a device type by token */
    DeviceTypeMappingRouterSummary.prototype.getDeviceTypeByToken = function (token) {
        var match = null;
        this.deviceTypes.forEach(function (deviceType) {
            if (deviceType.token === token) {
                match = deviceType;
            }
        });
        return match;
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceTypeMappingRouterSummary.prototype, "destinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceTypeMappingRouterSummary.prototype, "router", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DeviceTypeMappingRouterSummary.prototype, "settings", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], DeviceTypeMappingRouterSummary.prototype, "mapping", void 0);
    DeviceTypeMappingRouterSummary = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VCard: lib_["VCard"],
                VDivider: lib_["VDivider"],
                ContentField: external_sitewhere_ide_components_["ContentField"],
                ContentWarning: external_sitewhere_ide_components_["ContentWarning"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                DatatableSection: external_sitewhere_ide_components_["DatatableSection"],
                ContentDeleteIcon: external_sitewhere_ide_components_["ContentDeleteIcon"],
                SectionOverview: external_sitewhere_ide_components_["SectionOverview"],
                SettingsUpdateDialog: devicetypemapping_SettingsUpdateDialog,
                MappingCreateDialog: devicetypemapping_MappingCreateDialog
            }
        })
    ], DeviceTypeMappingRouterSummary);
    return DeviceTypeMappingRouterSummary;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var Summaryvue_type_script_lang_ts_ = (Summaryvue_type_script_lang_ts_DeviceTypeMappingRouterSummary);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/Summary.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_Summaryvue_type_script_lang_ts_ = (Summaryvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/Summary.vue?vue&type=style&index=0&id=558cb726&scoped=true&lang=css&
var Summaryvue_type_style_index_0_id_558cb726_scoped_true_lang_css_ = __webpack_require__("a443");

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/Summary.vue






/* normalize component */

var Summary_component = normalizeComponent(
  devicetypemapping_Summaryvue_type_script_lang_ts_,
  Summaryvue_type_template_id_558cb726_scoped_true_render,
  Summaryvue_type_template_id_558cb726_scoped_true_staticRenderFns,
  false,
  null,
  "558cb726",
  null
  
)

/* harmony default export */ var Summary = (Summary_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsCreateDialog.vue?vue&type=template&id=1bf0e8b6&
var SettingsCreateDialogvue_type_template_id_1bf0e8b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('settings-dialog',{ref:"dialog",attrs:{"title":"Create Device Type Mapping Router","createLabel":"Create","destinations":_vm.destinations},on:{"payload":_vm.onPayload}})}
var SettingsCreateDialogvue_type_template_id_1bf0e8b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsCreateDialog.vue?vue&type=template&id=1bf0e8b6&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsCreateDialog.vue?vue&type=script&lang=ts&




var SettingsCreateDialogvue_type_script_lang_ts_SettingsCreateDialog = /** @class */ (function (_super) {
    __extends(SettingsCreateDialog, _super);
    function SettingsCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    SettingsCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    SettingsCreateDialog.prototype.openDialog = function () {
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], SettingsCreateDialog.prototype, "destinations", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], SettingsCreateDialog.prototype, "dialog", void 0);
    SettingsCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                SettingsDialog: devicetypemapping_SettingsDialog
            }
        })
    ], SettingsCreateDialog);
    return SettingsCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var SettingsCreateDialogvue_type_script_lang_ts_ = (SettingsCreateDialogvue_type_script_lang_ts_SettingsCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicetypemapping_SettingsCreateDialogvue_type_script_lang_ts_ = (SettingsCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/commanddelivery/routers/devicetypemapping/SettingsCreateDialog.vue





/* normalize component */

var SettingsCreateDialog_component = normalizeComponent(
  devicetypemapping_SettingsCreateDialogvue_type_script_lang_ts_,
  SettingsCreateDialogvue_type_template_id_1bf0e8b6_render,
  SettingsCreateDialogvue_type_template_id_1bf0e8b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicetypemapping_SettingsCreateDialog = (SettingsCreateDialog_component.exports);
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
    /** Show dialog for creating command router */
    CommandRouterSection.prototype.onCommandRouterChosen = function (type) {
        if (type == "device-type-mapping") {
            this.dtmRouterCreate.openDialog();
        }
    };
    /** Indicate that updates were made to command router */
    CommandRouterSection.prototype.onCommandRouterUpdate = function () {
        this.$emit("update");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandRouterSection.prototype, "router", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], CommandRouterSection.prototype, "destinations", void 0);
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
                DeviceTypeMappingRouterSummary: Summary,
                DeviceTypeMappingRouterCreateDialog: devicetypemapping_SettingsCreateDialog
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
  CommandRouterSectionvue_type_template_id_371ab6b3_render,
  CommandRouterSectionvue_type_template_id_371ab6b3_staticRenderFns,
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
    Object.defineProperty(CommandDeliveryPlugin.prototype, "destinations", {
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
    /** Handle command router updated */
    CommandDeliveryPlugin.prototype.onCommandRouterUpdated = function () {
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
                TenantEnginePlugin: tenantengines_TenantEnginePlugin,
                CommandDestinationsTable: CommandDestinationsTable,
                CommandRouterSection: commanddelivery_CommandRouterSection,
                ContentDivider: external_sitewhere_ide_components_["ContentDivider"]
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
  CommandDeliveryPluginvue_type_template_id_63c1d72b_render,
  CommandDeliveryPluginvue_type_template_id_63c1d72b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var commanddelivery_CommandDeliveryPlugin = (CommandDeliveryPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue?vue&type=template&id=6135ee9c&
var DeviceManagementPluginvue_type_template_id_6135ee9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Device Management Datastore"}},[_c('rdb-datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"create":_vm.onCreateDatastore,"update":_vm.onUpdateDatastore,"unset":_vm.onUnsetDatastore}})],1)],1)}
var DeviceManagementPluginvue_type_template_id_6135ee9c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/devicemanagement/DeviceManagementPlugin.vue?vue&type=template&id=6135ee9c&

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
    /** Create new datastore */
    DeviceManagementPlugin.prototype.onCreateDatastore = function (definition) {
        this.deviceManagement.datastore = definition;
    };
    /** Update datastore */
    DeviceManagementPlugin.prototype.onUpdateDatastore = function (definition) {
        this.deviceManagement.datastore = definition;
        this.markDirty();
    };
    /** Unset the datastore */
    DeviceManagementPlugin.prototype.onUnsetDatastore = function () {
        if (this.deviceManagement) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.deviceManagement.datastore = null;
            this.markDirty();
        }
    };
    /** Mark data as having been updated */
    DeviceManagementPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceManagementPlugin.prototype, "configuration", void 0);
    DeviceManagementPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { ContentSection: external_sitewhere_ide_components_["ContentSection"], TenantEnginePlugin: tenantengines_TenantEnginePlugin, RdbDatastoreSelector: datastore_RdbDatastoreSelector }
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
  DeviceManagementPluginvue_type_template_id_6135ee9c_render,
  DeviceManagementPluginvue_type_template_id_6135ee9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicemanagement_DeviceManagementPlugin = (DeviceManagementPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/deviceregistration/DeviceRegistrationPlugin.vue?vue&type=template&id=044d03d1&
var DeviceRegistrationPluginvue_type_template_id_044d03d1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-check","title":"Device Registration"}},[_c('section-overview',{attrs:{"title":"Automatic Registration"}},[_vm._v(" New devices may be automatically registered with the system if they provide a valid token for the given tenant. If new device registration is permitted, the devices may be assigned to assets, customers, or areas. ")]),_c('v-checkbox',{staticClass:"pt-1",attrs:{"dense":""},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('span',{staticClass:"body-2"},[_vm._v("Allow new device registration for this tenant")])]},proxy:true}]),model:{value:(_vm.allowNewRegistrations),callback:function ($$v) {_vm.allowNewRegistrations=$$v},expression:"allowNewRegistrations"}}),_c('section-overview',{directives:[{name:"show",rawName:"v-show",value:(_vm.allowNewRegistrations),expression:"allowNewRegistrations"}],attrs:{"title":"Defaults for New Devices"}},[_vm._v(" If registration requests for new devices do not provide metadata regarding aspects such as device type or preferred assignment information, the values may be automatically assigned. Choose default behavior below. ")]),_c('v-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.allowNewRegistrations),expression:"allowNewRegistrations"}],attrs:{"flat":"","width":"60%"}},[_c('optional-selection',{staticClass:"mb-3",attrs:{"items":_vm.deviceTypes,"checkboxTitle":"Use default device type if not provided","selectLabel":"Choose device type","selectTitle":"Choose a default device type for new devices","selectItemText":"name","selectItemValue":"token"},model:{value:(_vm.deviceTypeToken),callback:function ($$v) {_vm.deviceTypeToken=$$v},expression:"deviceTypeToken"}}),_c('optional-selection',{staticClass:"mb-3",attrs:{"items":_vm.customers,"checkboxTitle":"Use default customer if not provided","selectLabel":"Choose customer","selectTitle":"Choose a default customer for device assignment","selectItemText":"name","selectItemValue":"token"},model:{value:(_vm.customerToken),callback:function ($$v) {_vm.customerToken=$$v},expression:"customerToken"}}),_c('optional-selection',{attrs:{"items":_vm.areas,"checkboxTitle":"Use default area if not provided","selectLabel":"Choose area","selectTitle":"Choose a default area for device assignment","selectItemText":"name","selectItemValue":"token"},model:{value:(_vm.areaToken),callback:function ($$v) {_vm.areaToken=$$v},expression:"areaToken"}})],1)],1)],1)}
var DeviceRegistrationPluginvue_type_template_id_044d03d1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/deviceregistration/DeviceRegistrationPlugin.vue?vue&type=template&id=044d03d1&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/deviceregistration/DeviceRegistrationPlugin.vue?vue&type=script&lang=ts&







var DeviceRegistrationPluginvue_type_script_lang_ts_DeviceRegsitrationPlugin = /** @class */ (function (_super) {
    __extends(DeviceRegsitrationPlugin, _super);
    function DeviceRegsitrationPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allowNewRegistrations = false;
        _this.deviceTypes = [];
        _this.deviceTypeToken = null;
        _this.customers = [];
        _this.customerToken = null;
        _this.areas = [];
        _this.areaToken = null;
        return _this;
    }
    Object.defineProperty(DeviceRegsitrationPlugin.prototype, "deviceRegistration", {
        /** Get tenant configuration for device registration */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceRegsitrationPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    DeviceRegsitrationPlugin.prototype.onConfigurationUpdated = function (updated) {
        // Load data for dropdowns.
        this.loadDeviceTypes();
        this.loadCustomers();
        this.loadAreas();
        // Verify that config structure is valid.
        this.assureAssignmentDefaults();
        // Set local variables from configuration.
        this.allowNewRegistrations = this.deviceRegistration.allowNewDevices;
        this.deviceTypeToken = this.deviceRegistration.assignmentDefaults.defaultDeviceTypeToken;
        this.customerToken = this.deviceRegistration.assignmentDefaults.defaultCustomerToken;
        this.areaToken = this.deviceRegistration.assignmentDefaults.defaultAreaToken;
    };
    DeviceRegsitrationPlugin.prototype.onAllowNewRegistrationsUpdate = function (updated) {
        this.deviceRegistration.allowNewDevices = updated;
        this.markDirty();
    };
    DeviceRegsitrationPlugin.prototype.onDeviceTypeTokenUpdated = function (updated) {
        this.deviceRegistration.assignmentDefaults.defaultDeviceTypeToken = updated;
        this.markDirty();
    };
    DeviceRegsitrationPlugin.prototype.onCustomerTokenUpdated = function (updated) {
        this.deviceRegistration.assignmentDefaults.defaultCustomerToken = updated;
        this.markDirty();
    };
    DeviceRegsitrationPlugin.prototype.onAreaTokenUpdated = function (updated) {
        this.deviceRegistration.assignmentDefaults.defaultAreaToken = updated;
        this.markDirty();
    };
    /** Assure assignment defaults section if null */
    DeviceRegsitrationPlugin.prototype.assureAssignmentDefaults = function () {
        if (!this.deviceRegistration.assignmentDefaults) {
            this.deviceRegistration.assignmentDefaults = {
                defaultDeviceTypeToken: null,
                defaultCustomerToken: null,
                defaultAreaToken: null
            };
        }
    };
    /** Load device types asynchronously */
    DeviceRegsitrationPlugin.prototype.loadDeviceTypes = function () {
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
    /** Load customers asynchronously */
    DeviceRegsitrationPlugin.prototype.loadCustomers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var criteria, format, response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        criteria = {
                            pageNumber: 1,
                            pageSize: 0
                        };
                        format = {};
                        return [4 /*yield*/, Object(external_sitewhere_ide_common_["listCustomers"])(this.$store, criteria, format)];
                    case 1:
                        response = _a.sent();
                        this.customers = response.data.results;
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        Object(external_sitewhere_ide_common_["showError"])(this, err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** Load areas asynchronously */
    DeviceRegsitrationPlugin.prototype.loadAreas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var criteria, format, response, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        criteria = {
                            pageNumber: 1,
                            pageSize: 0
                        };
                        format = {};
                        return [4 /*yield*/, Object(external_sitewhere_ide_common_["listAreas"])(this.$store, criteria, format)];
                    case 1:
                        response = _a.sent();
                        this.areas = response.data.results;
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        Object(external_sitewhere_ide_common_["showError"])(this, err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** Mark data as having been updated */
    DeviceRegsitrationPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceRegsitrationPlugin.prototype, "configuration", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("deviceRegistration", { immediate: true })
    ], DeviceRegsitrationPlugin.prototype, "onConfigurationUpdated", null);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("allowNewRegistrations")
    ], DeviceRegsitrationPlugin.prototype, "onAllowNewRegistrationsUpdate", null);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("deviceTypeToken")
    ], DeviceRegsitrationPlugin.prototype, "onDeviceTypeTokenUpdated", null);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("customerToken")
    ], DeviceRegsitrationPlugin.prototype, "onCustomerTokenUpdated", null);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("areaToken")
    ], DeviceRegsitrationPlugin.prototype, "onAreaTokenUpdated", null);
    DeviceRegsitrationPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VCheckbox: lib_["VCheckbox"],
                VCard: lib_["VCard"],
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                TenantEnginePlugin: tenantengines_TenantEnginePlugin,
                SectionOverview: external_sitewhere_ide_components_["SectionOverview"],
                FormSelect: external_sitewhere_ide_components_["FormSelect"],
                OptionalSelection: external_sitewhere_ide_components_["OptionalSelection"]
            }
        })
    ], DeviceRegsitrationPlugin);
    return DeviceRegsitrationPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DeviceRegistrationPluginvue_type_script_lang_ts_ = (DeviceRegistrationPluginvue_type_script_lang_ts_DeviceRegsitrationPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/deviceregistration/DeviceRegistrationPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var deviceregistration_DeviceRegistrationPluginvue_type_script_lang_ts_ = (DeviceRegistrationPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/deviceregistration/DeviceRegistrationPlugin.vue





/* normalize component */

var DeviceRegistrationPlugin_component = normalizeComponent(
  deviceregistration_DeviceRegistrationPluginvue_type_script_lang_ts_,
  DeviceRegistrationPluginvue_type_template_id_044d03d1_render,
  DeviceRegistrationPluginvue_type_template_id_044d03d1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DeviceRegistrationPlugin = (DeviceRegistrationPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/devicestate/DeviceStatePlugin.vue?vue&type=template&id=12934e46&
var DeviceStatePluginvue_type_template_id_12934e46_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Device State Datastore"}},[_c('rdb-datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"create":_vm.onCreateDatastore,"update":_vm.onUpdateDatastore,"unsetDatastore":_vm.onUnsetDatastore}})],1)],1)}
var DeviceStatePluginvue_type_template_id_12934e46_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/devicestate/DeviceStatePlugin.vue?vue&type=template&id=12934e46&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/devicestate/DeviceStatePlugin.vue?vue&type=script&lang=ts&






var DeviceStatePluginvue_type_script_lang_ts_DeviceStatePlugin = /** @class */ (function (_super) {
    __extends(DeviceStatePlugin, _super);
    function DeviceStatePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceStatePlugin.prototype, "deviceState", {
        /** Get tenant configuration for device state */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceStatePlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceStatePlugin.prototype, "datastore", {
        /** Get datastore definition */
        get: function () {
            return this.deviceState ? this.deviceState.datastore : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Create new datastore */
    DeviceStatePlugin.prototype.onCreateDatastore = function (definition) {
        this.deviceState.datastore = definition;
    };
    /** Update datastore */
    DeviceStatePlugin.prototype.onUpdateDatastore = function (definition) {
        this.deviceState.datastore = definition;
        this.markDirty();
    };
    /** Unset the datastore */
    DeviceStatePlugin.prototype.onUnsetDatastore = function () {
        if (this.deviceState) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.deviceState.datastore = null;
            this.markDirty();
        }
    };
    /** Mark data as having been updated */
    DeviceStatePlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], DeviceStatePlugin.prototype, "configuration", void 0);
    DeviceStatePlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { ContentSection: external_sitewhere_ide_components_["ContentSection"], TenantEnginePlugin: tenantengines_TenantEnginePlugin, RdbDatastoreSelector: datastore_RdbDatastoreSelector }
        })
    ], DeviceStatePlugin);
    return DeviceStatePlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DeviceStatePluginvue_type_script_lang_ts_ = (DeviceStatePluginvue_type_script_lang_ts_DeviceStatePlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/devicestate/DeviceStatePlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var devicestate_DeviceStatePluginvue_type_script_lang_ts_ = (DeviceStatePluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/devicestate/DeviceStatePlugin.vue





/* normalize component */

var DeviceStatePlugin_component = normalizeComponent(
  devicestate_DeviceStatePluginvue_type_script_lang_ts_,
  DeviceStatePluginvue_type_template_id_12934e46_render,
  DeviceStatePluginvue_type_template_id_12934e46_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var devicestate_DeviceStatePlugin = (DeviceStatePlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventmanagement/EventManagementPlugin.vue?vue&type=template&id=0a37c152&
var EventManagementPluginvue_type_template_id_0a37c152_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Event Management Datastore"}},[_c('ts-datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"create":_vm.onCreateDatastore,"update":_vm.onUpdateDatastore,"unset":_vm.onUnsetDatastore}})],1)],1)}
var EventManagementPluginvue_type_template_id_0a37c152_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventmanagement/EventManagementPlugin.vue?vue&type=template&id=0a37c152&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventmanagement/EventManagementPlugin.vue?vue&type=script&lang=ts&






var EventManagementPluginvue_type_script_lang_ts_EventManagementPlugin = /** @class */ (function (_super) {
    __extends(EventManagementPlugin, _super);
    function EventManagementPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventManagementPlugin.prototype, "eventManagement", {
        /** Get tenant configuration for event management */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventManagementPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventManagementPlugin.prototype, "datastore", {
        /** Get datastore definition */
        get: function () {
            return this.eventManagement ? this.eventManagement.datastore : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Create new datastore */
    EventManagementPlugin.prototype.onCreateDatastore = function (definition) {
        this.eventManagement.datastore = definition;
    };
    /** Update datastore */
    EventManagementPlugin.prototype.onUpdateDatastore = function (definition) {
        this.eventManagement.datastore = definition;
        this.markDirty();
    };
    /** Unset the datastore */
    EventManagementPlugin.prototype.onUnsetDatastore = function () {
        if (this.eventManagement) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.eventManagement.datastore = null;
            this.markDirty();
        }
    };
    /** Mark data as having been updated */
    EventManagementPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], EventManagementPlugin.prototype, "configuration", void 0);
    EventManagementPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { ContentSection: external_sitewhere_ide_components_["ContentSection"], TenantEnginePlugin: tenantengines_TenantEnginePlugin, TsDatastoreSelector: datastore_TsDatastoreSelector }
        })
    ], EventManagementPlugin);
    return EventManagementPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var EventManagementPluginvue_type_script_lang_ts_ = (EventManagementPluginvue_type_script_lang_ts_EventManagementPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventmanagement/EventManagementPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var eventmanagement_EventManagementPluginvue_type_script_lang_ts_ = (EventManagementPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventmanagement/EventManagementPlugin.vue





/* normalize component */

var EventManagementPlugin_component = normalizeComponent(
  eventmanagement_EventManagementPluginvue_type_script_lang_ts_,
  EventManagementPluginvue_type_template_id_0a37c152_render,
  EventManagementPluginvue_type_template_id_0a37c152_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventmanagement_EventManagementPlugin = (EventManagementPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue?vue&type=template&id=5f6048b3&
var EventSourcesPluginvue_type_template_id_5f6048b3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('event-sources-table',{attrs:{"tenantId":_vm.tenantId,"eventSources":_vm.eventSources},on:{"create":_vm.onEventSourceCreated,"update":_vm.onEventSourceUpdated,"delete":_vm.onEventSourceDeleted}})],1)}
var EventSourcesPluginvue_type_template_id_5f6048b3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourcesPlugin.vue?vue&type=template&id=5f6048b3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourcesTable.vue?vue&type=template&id=17ae5b0a&scoped=true&
var EventSourcesTablevue_type_template_id_17ae5b0a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('content-section',{attrs:{"icon":_vm.icon,"title":"Event Sources"}},[_c('section-overview',{attrs:{"title":"Configured Event Sources"}},[_vm._v(" Event sources receive events from external providers and covert them into a standardized format for further processing. ")]),_c('datatable-section',{attrs:{"headers":_vm.headers,"items":_vm.eventSourcesAsSortedArray,"width":"50%"},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_c('tr',[_c('td',{attrs:{"width":"32%"}},[_c('datatable-link',{attrs:{"text":props.item.meta.id},on:{"linkClicked":function($event){return _vm.onOpenEventSource(props.item.meta.id)}}})],1),_c('td',{attrs:{"width":"32%"}},[_vm._v(_vm._s(props.item.meta.type))]),_c('td',{attrs:{"width":"32%"}},[_vm._v(_vm._s(props.item.decoder.type))]),_c('td',{attrs:{"width":"4%"}},[_c('content-delete-icon',{on:{"delete":function($event){return _vm.onDeleteEventSource(props.item.meta.id)}}})],1)])]}},{key:"datatable-footer",fn:function(){return [_c('content-link',{staticClass:"mt-7",attrs:{"icon":"fa-plus-circle","text":"Add new event source."},on:{"linkClicked":_vm.onAddEventSource}})]},proxy:true},{key:"datatable-dialogs",fn:function(){return [_c('new-event-source-chooser',{ref:"chooser",on:{"chosen":_vm.onEventSourceCreate}}),_c('active-mq-broker-event-source-create-dialog',{ref:"amqBrokerCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('active-mq-broker-event-source-update-dialog',{ref:"amqBrokerUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('active-mq-client-event-source-create-dialog',{ref:"amqClientCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('active-mq-client-event-source-update-dialog',{ref:"amqClientUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('coap-event-source-create-dialog',{ref:"coapCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('coap-event-source-update-dialog',{ref:"coapUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('event-hub-event-source-create-dialog',{ref:"eventHubCreate",on:{"create":_vm.onEventSourceAdded}}),_c('event-hub-event-source-update-dialog',{ref:"eventHubUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('mqtt-event-source-create-dialog',{ref:"mqttCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('mqtt-event-source-update-dialog',{ref:"mqttUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}}),_c('rabbit-mq-event-source-create-dialog',{ref:"rabbitMqCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onEventSourceAdded}}),_c('rabbit-mq-event-source-update-dialog',{ref:"rabbitMqUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onEventSourceUpdated}})]},proxy:true}])})],1)}
var EventSourcesTablevue_type_template_id_17ae5b0a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourcesTable.vue?vue&type=template&id=17ae5b0a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/NewEventSourceChooser.vue?vue&type=template&id=3d83f064&
var NewEventSourceChooservue_type_template_id_3d83f064_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('new-element-chooser',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Add Event Source","width":"500"}},[_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"activemq-broker"},on:{"chosen":_vm.onChosen}},[_vm._v("ActiveMQ Broker Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"activemq-client"},on:{"chosen":_vm.onChosen}},[_vm._v("ActiveMQ Client Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"eventhub"},on:{"chosen":_vm.onChosen}},[_vm._v("Azure Event Hub Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"coap"},on:{"chosen":_vm.onChosen}},[_vm._v("CoAP Server Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"mqtt"},on:{"chosen":_vm.onChosen}},[_vm._v("MQTT Event Source")]),_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"rabbitmq"},on:{"chosen":_vm.onChosen}},[_vm._v("RabbitMQ Event Source")])],1)}
var NewEventSourceChooservue_type_template_id_3d83f064_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/NewEventSourceChooser.vue?vue&type=template&id=3d83f064&

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
  NewEventSourceChooservue_type_template_id_3d83f064_render,
  NewEventSourceChooservue_type_template_id_3d83f064_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventsources_NewEventSourceChooser = (NewEventSourceChooser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceCreateDialog.vue?vue&type=template&id=31472f16&
var ActiveMqBrokerEventSourceCreateDialogvue_type_template_id_31472f16_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('active-mq-broker-event-source-dialog',{ref:"dialog",attrs:{"title":"Create ActiveMQ Broker Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var ActiveMqBrokerEventSourceCreateDialogvue_type_template_id_31472f16_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceCreateDialog.vue?vue&type=template&id=31472f16&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceDialog.vue?vue&type=template&id=8769847a&
var ActiveMqBrokerEventSourceDialogvue_type_template_id_8769847a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"activemq-broker","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"broker"},[_vm._v("Broker")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"broker",attrs:{"eager":""}},[_c('active-mq-broker-fields',{ref:"broker"})],1)],1)],2)}
var ActiveMqBrokerEventSourceDialogvue_type_template_id_8769847a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceDialog.vue?vue&type=template&id=8769847a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/EventSourceDialog.vue?vue&type=template&id=1e8a069f&
var EventSourceDialogvue_type_template_id_1e8a069f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"visible":_vm.visible,"createLabel":_vm.createLabel || 'Create',"cancelLabel":_vm.cancelLabel || 'Cancel'},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"header"},[_c('dialog-header',[_c('v-layout',{staticClass:"pl-4 pr-4 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs5":""}},[(_vm.visible)?_c('form-text',{staticClass:"mr-3",attrs:{"label":"Event source id","title":"Unique event source identifier.","icon":"info","dense":true,"autofocus":true},model:{value:(_vm.id),callback:function ($$v) {_vm.id=$$v},expression:"id"}},[(!_vm.$v.id.required && _vm.$v.$dirty)?_c('span',[_vm._v("Id is required.")]):_vm._e(),(!_vm.$v.id.idConflict && _vm.$v.$dirty)?_c('span',[_vm._v("Id already in use.")]):_vm._e()]):_vm._e()],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-select',{attrs:{"items":_vm.decoderTypes,"title":"Choose decoder for event source","label":"Decoder","item-text":"text","item-value":"value","icon":"settings"},model:{value:(_vm.decoderType),callback:function ($$v) {_vm.decoderType=$$v},expression:"decoderType"}})],1)],1)],1)],1),_c('template',{slot:"tabs"},[_vm._t("event-source-tabs"),_c('v-tab',{key:"decoder"},[_vm._v("Decoder")])],2),_c('template',{slot:"tab-items"},[_vm._t("event-source-tab-items"),_c('v-tab-item',{key:"decoder",attrs:{"eager":""}},[_c('decoder-configuration',{ref:"decoderConfiguration",attrs:{"decoder":_vm.decoder,"tenantId":_vm.tenantId}})],1)],2)],2)}
var EventSourceDialogvue_type_template_id_1e8a069f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/EventSourceDialog.vue?vue&type=template&id=1e8a069f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/DecoderConfiguration.vue?vue&type=template&id=3dbd4fee&
var DecoderConfigurationvue_type_template_id_3dbd4fee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"flat":""}},[(_vm.decoderType == 'json')?_c('json-decoder-configuration',{ref:"details"}):_vm._e(),(_vm.decoderType == 'protobuf')?_c('protobuf-decoder-configuration',{ref:"details"}):_vm._e(),(_vm.decoderType == 'scripted')?_c('scripted-event-decoder-configuration',{ref:"details",attrs:{"tenantId":_vm.tenantId}}):_vm._e()],1)}
var DecoderConfigurationvue_type_template_id_3dbd4fee_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/DecoderConfiguration.vue?vue&type=template&id=3dbd4fee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/json/JsonDecoderConfiguration.vue?vue&type=template&id=4706678f&
var JsonDecoderConfigurationvue_type_template_id_4706678f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('no-configuration')}
var JsonDecoderConfigurationvue_type_template_id_4706678f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/json/JsonDecoderConfiguration.vue?vue&type=template&id=4706678f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/NoConfiguration.vue?vue&type=template&id=ff1f015a&scoped=true&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/protobuf/ProtobufDecoderConfiguration.vue?vue&type=template&id=7861155c&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderConfiguration.vue?vue&type=template&id=e83a6384&
var ScriptedEventDecoderConfigurationvue_type_template_id_e83a6384_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('scripted-event-decoder-fields',{ref:"script",attrs:{"tenantId":_vm.tenantId}})}
var ScriptedEventDecoderConfigurationvue_type_template_id_e83a6384_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderConfiguration.vue?vue&type=template&id=e83a6384&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/decoders/scripted/ScriptedEventDecoderFields.vue?vue&type=template&id=c534bf74&
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
        if (this.details && !this.details.validate()) {
            return false;
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
  DecoderConfigurationvue_type_template_id_3dbd4fee_render,
  DecoderConfigurationvue_type_template_id_3dbd4fee_staticRenderFns,
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
        if (this.decoderConfiguration) {
            this.decoderConfiguration.reset();
        }
        this.$v.$reset();
    };
    /** Validate fields */
    EventSourceDialog.prototype.validate = function () {
        if (this.decoderConfiguration && !this.decoderConfiguration.validate()) {
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
                VLayout: lib_["VLayout"],
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
  EventSourceDialogvue_type_template_id_1e8a069f_render,
  EventSourceDialogvue_type_template_id_1e8a069f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventsources_EventSourceDialog = (EventSourceDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerFields.vue?vue&type=template&id=43ba2606&
var ActiveMqBrokerFieldsvue_type_template_id_43ba2606_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","label":"Broker name","title":"Broker name.","icon":"info"},model:{value:(_vm.brokerName),callback:function ($$v) {_vm.brokerName=$$v},expression:"brokerName"}},[(!_vm.$v.brokerName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Broker name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{attrs:{"required":"","label":"Transport URI","title":"Transport URI.","icon":"router"},model:{value:(_vm.transportUri),callback:function ($$v) {_vm.transportUri=$$v},expression:"transportUri"}},[(!_vm.$v.transportUri.required && _vm.$v.$dirty)?_c('span',[_vm._v("Transport URI is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"required":"","label":"Queue name","title":"Queue name.","icon":"info"},model:{value:(_vm.queueName),callback:function ($$v) {_vm.queueName=$$v},expression:"queueName"}},[(!_vm.$v.queueName.required && _vm.$v.$dirty)?_c('span',[_vm._v("Queue name is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Number of consumers","title":"Number of consumers.","icon":"settings","type":"number"},model:{value:(_vm.numConsumers),callback:function ($$v) {_vm.numConsumers=$$v},expression:"numConsumers"}},[(!_vm.$v.numConsumers.required && _vm.$v.$dirty)?_c('span',[_vm._v("Number of consumers is required.")]):_vm._e()])],1)],1)}
var ActiveMqBrokerFieldsvue_type_template_id_43ba2606_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerFields.vue?vue&type=template&id=43ba2606&

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
  ActiveMqBrokerFieldsvue_type_template_id_43ba2606_render,
  ActiveMqBrokerFieldsvue_type_template_id_43ba2606_staticRenderFns,
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
  ActiveMqBrokerEventSourceDialogvue_type_template_id_8769847a_render,
  ActiveMqBrokerEventSourceDialogvue_type_template_id_8769847a_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqBrokerEventSourceUpdateDialog.vue?vue&type=template&id=1a344a0c&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceCreateDialog.vue?vue&type=template&id=22cf6ec0&
var ActiveMqClientEventSourceCreateDialogvue_type_template_id_22cf6ec0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('active-mq-client-event-source-dialog',{ref:"dialog",attrs:{"title":"Create ActiveMQ Client Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var ActiveMqClientEventSourceCreateDialogvue_type_template_id_22cf6ec0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceCreateDialog.vue?vue&type=template&id=22cf6ec0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceDialog.vue?vue&type=template&id=0a36f18e&
var ActiveMqClientEventSourceDialogvue_type_template_id_0a36f18e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"activemq-client","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"client"},[_vm._v("Client")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"client",attrs:{"eager":""}},[_c('active-mq-client-fields',{ref:"client"})],1)],1)],2)}
var ActiveMqClientEventSourceDialogvue_type_template_id_0a36f18e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceDialog.vue?vue&type=template&id=0a36f18e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientFields.vue?vue&type=template&id=43a8b8cb&
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
  ActiveMqClientEventSourceDialogvue_type_template_id_0a36f18e_render,
  ActiveMqClientEventSourceDialogvue_type_template_id_0a36f18e_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/activemq/ActiveMqClientEventSourceUpdateDialog.vue?vue&type=template&id=d2aac8a2&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceCreateDialog.vue?vue&type=template&id=4d5c7d2a&
var CoapEventSourceCreateDialogvue_type_template_id_4d5c7d2a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('coap-event-source-dialog',{ref:"dialog",attrs:{"title":"Create CoAP Server Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var CoapEventSourceCreateDialogvue_type_template_id_4d5c7d2a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceCreateDialog.vue?vue&type=template&id=4d5c7d2a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceDialog.vue?vue&type=template&id=1fe6757a&
var CoapEventSourceDialogvue_type_template_id_1fe6757a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"coap","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"server"},[_vm._v("Server")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"server",attrs:{"eager":""}},[_c('coap-server-fields',{ref:"server"})],1)],1)],2)}
var CoapEventSourceDialogvue_type_template_id_1fe6757a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceDialog.vue?vue&type=template&id=1fe6757a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapServerFields.vue?vue&type=template&id=200abc8a&
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
  CoapEventSourceDialogvue_type_template_id_1fe6757a_render,
  CoapEventSourceDialogvue_type_template_id_1fe6757a_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/coap/CoapEventSourceUpdateDialog.vue?vue&type=template&id=2f67a5e7&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceCreateDialog.vue?vue&type=template&id=67d40668&
var EventHubEventSourceCreateDialogvue_type_template_id_67d40668_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-hub-event-source-dialog',{ref:"dialog",attrs:{"title":"Create Azure Event Hub Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var EventHubEventSourceCreateDialogvue_type_template_id_67d40668_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceCreateDialog.vue?vue&type=template&id=67d40668&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceDialog.vue?vue&type=template&id=3be01832&
var EventHubEventSourceDialogvue_type_template_id_3be01832_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"eventhub","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"connection"},[_vm._v("Connection")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"connection",attrs:{"eager":""}},[_c('event-hub-fields',{ref:"connection"})],1)],1)],2)}
var EventHubEventSourceDialogvue_type_template_id_3be01832_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceDialog.vue?vue&type=template&id=3be01832&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubFields.vue?vue&type=template&id=4ced9c11&
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
  EventHubEventSourceDialogvue_type_template_id_3be01832_render,
  EventHubEventSourceDialogvue_type_template_id_3be01832_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/azure/EventHubEventSourceUpdateDialog.vue?vue&type=template&id=65772122&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceCreateDialog.vue?vue&type=template&id=1a7dd8bb&
var MqttEventSourceCreateDialogvue_type_template_id_1a7dd8bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mqtt-event-source-dialog',{ref:"dialog",attrs:{"title":"Create MQTT Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var MqttEventSourceCreateDialogvue_type_template_id_1a7dd8bb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceCreateDialog.vue?vue&type=template&id=1a7dd8bb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceDialog.vue?vue&type=template&id=4b073c9e&
var MqttEventSourceDialogvue_type_template_id_4b073c9e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"mqtt","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"connection"},[_vm._v("Connection")]),_c('v-tab',{key:"authentication"},[_vm._v("Authentication")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"connection",attrs:{"eager":""}},[_c('mqtt-connection-fields',{ref:"connection"})],1),_c('v-tab-item',{key:"authentication",attrs:{"eager":""}},[_c('mqtt-authentication-fields',{ref:"authentication"})],1)],1)],2)}
var MqttEventSourceDialogvue_type_template_id_4b073c9e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceDialog.vue?vue&type=template&id=4b073c9e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttConnectionFields.vue?vue&type=template&id=16a68db7&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=263e83f2&
var MqttAuthenticationFieldsvue_type_template_id_263e83f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Username","title":"Username for authentication.","icon":"account_circle"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Password","title":"Password for authentication.","icon":"lock","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Truststore path","title":"Truststore path.","icon":"info"},model:{value:(_vm.trustStorePath),callback:function ($$v) {_vm.trustStorePath=$$v},expression:"trustStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Truststore password","title":"Truststore password.","icon":"lock","type":"password"},model:{value:(_vm.trustStorePassword),callback:function ($$v) {_vm.trustStorePassword=$$v},expression:"trustStorePassword"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Keystore path","title":"Keystore path.","icon":"info"},model:{value:(_vm.keyStorePath),callback:function ($$v) {_vm.keyStorePath=$$v},expression:"keyStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Keystore password","title":"Keystore password.","icon":"lock","type":"password"},model:{value:(_vm.keyStorePassword),callback:function ($$v) {_vm.keyStorePassword=$$v},expression:"keyStorePassword"}})],1)],1)}
var MqttAuthenticationFieldsvue_type_template_id_263e83f2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=263e83f2&

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
        Object(external_vue_property_decorator_["Component"])({ components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] }, validations: {} })
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
  MqttAuthenticationFieldsvue_type_template_id_263e83f2_render,
  MqttAuthenticationFieldsvue_type_template_id_263e83f2_staticRenderFns,
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
  MqttEventSourceDialogvue_type_template_id_4b073c9e_render,
  MqttEventSourceDialogvue_type_template_id_4b073c9e_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/mqtt/MqttEventSourceUpdateDialog.vue?vue&type=template&id=380de0d4&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceCreateDialog.vue?vue&type=template&id=12249a2b&
var RabbitMqEventSourceCreateDialogvue_type_template_id_12249a2b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('rabbit-mq-event-source-dialog',{ref:"dialog",attrs:{"title":"Create RabbitMQ Event Source","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var RabbitMqEventSourceCreateDialogvue_type_template_id_12249a2b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceCreateDialog.vue?vue&type=template&id=12249a2b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceDialog.vue?vue&type=template&id=3458e370&
var RabbitMqEventSourceDialogvue_type_template_id_3458e370_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('event-source-dialog',{ref:"dialog",attrs:{"type":"rabbitmq","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"event-source-tabs"},[_c('v-tab',{key:"client"},[_vm._v("Client")])],1),_c('template',{slot:"event-source-tab-items"},[_c('v-tab-item',{key:"client",attrs:{"eager":""}},[_c('rabbit-mq-fields',{ref:"client"})],1)],1)],2)}
var RabbitMqEventSourceDialogvue_type_template_id_3458e370_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceDialog.vue?vue&type=template&id=3458e370&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqFields.vue?vue&type=template&id=d8edb300&
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
  RabbitMqEventSourceDialogvue_type_template_id_3458e370_render,
  RabbitMqEventSourceDialogvue_type_template_id_3458e370_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/eventsources/rabbitmq/RabbitMqEventSourceUpdateDialog.vue?vue&type=template&id=75b37b02&scoped=true&
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
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                DatatableSection: external_sitewhere_ide_components_["DatatableSection"],
                DatatableLink: external_sitewhere_ide_components_["DatatableLink"],
                ContentDeleteIcon: external_sitewhere_ide_components_["ContentDeleteIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                SectionOverview: external_sitewhere_ide_components_["SectionOverview"],
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
  EventSourcesTablevue_type_template_id_17ae5b0a_scoped_true_render,
  EventSourcesTablevue_type_template_id_17ae5b0a_scoped_true_staticRenderFns,
  false,
  null,
  "17ae5b0a",
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/inboundprocessing/InboundProcessingPlugin.vue?vue&type=template&id=361bcc95&
var InboundProcessingPluginvue_type_template_id_361bcc95_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-cogs","title":"Inbound Processing"}},[_c('section-overview',{staticClass:"mb-5",attrs:{"title":"Configure Inbound Processing Settings"}},[_vm._v(" The following settings may be adjusted to configure how inbound decoded events are processed and forwarded to other microservices. ")]),_c('v-card',{staticStyle:{"width":"50%"},attrs:{"tile":"","flat":"","color":"transparent"}},[_c('v-text-field',{attrs:{"label":"Processing thread count"},model:{value:(_vm.processingThreadCount),callback:function ($$v) {_vm.processingThreadCount=$$v},expression:"processingThreadCount"}})],1)],1)],1)}
var InboundProcessingPluginvue_type_template_id_361bcc95_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/inboundprocessing/InboundProcessingPlugin.vue?vue&type=template&id=361bcc95&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/inboundprocessing/InboundProcessingPlugin.vue?vue&type=script&lang=ts&






var InboundProcessingPluginvue_type_script_lang_ts_InboundProcessingPlugin = /** @class */ (function (_super) {
    __extends(InboundProcessingPlugin, _super);
    function InboundProcessingPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processingThreadCount = 10;
        return _this;
    }
    Object.defineProperty(InboundProcessingPlugin.prototype, "inboundProcessing", {
        /** Get tenant configuration for inbound processing */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    InboundProcessingPlugin.prototype.onConfigurationUpdated = function (updated) {
        this.processingThreadCount = updated.processingThreadCount;
    };
    InboundProcessingPlugin.prototype.onProcessingThreadCountUpdated = function (updated) {
        this.inboundProcessing.processingThreadCount = updated;
        this.markDirty();
    };
    /** Mark data as having been updated */
    InboundProcessingPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], InboundProcessingPlugin.prototype, "configuration", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("inboundProcessing", { immediate: true })
    ], InboundProcessingPlugin.prototype, "onConfigurationUpdated", null);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("processingThreadCount")
    ], InboundProcessingPlugin.prototype, "onProcessingThreadCountUpdated", null);
    InboundProcessingPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VCard: lib_["VCard"],
                VTextField: lib_["VTextField"],
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                TenantEnginePlugin: tenantengines_TenantEnginePlugin,
                SectionOverview: external_sitewhere_ide_components_["SectionOverview"]
            }
        })
    ], InboundProcessingPlugin);
    return InboundProcessingPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var InboundProcessingPluginvue_type_script_lang_ts_ = (InboundProcessingPluginvue_type_script_lang_ts_InboundProcessingPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/inboundprocessing/InboundProcessingPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var inboundprocessing_InboundProcessingPluginvue_type_script_lang_ts_ = (InboundProcessingPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/inboundprocessing/InboundProcessingPlugin.vue





/* normalize component */

var InboundProcessingPlugin_component = normalizeComponent(
  inboundprocessing_InboundProcessingPluginvue_type_script_lang_ts_,
  InboundProcessingPluginvue_type_template_id_361bcc95_render,
  InboundProcessingPluginvue_type_template_id_361bcc95_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var inboundprocessing_InboundProcessingPlugin = (InboundProcessingPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsPlugin.vue?vue&type=template&id=9c63a3ee&
var OutboundConnectorsPluginvue_type_template_id_9c63a3ee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('outbound-connectors-table',{attrs:{"tenantId":_vm.tenantId,"connectors":_vm.outboundConnectors},on:{"create":_vm.onOutboundConnectorCreated,"update":_vm.onOutboundConnectorUpdated,"delete":_vm.onOutboundConnectorDeleted}})],1)}
var OutboundConnectorsPluginvue_type_template_id_9c63a3ee_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsPlugin.vue?vue&type=template&id=9c63a3ee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsTable.vue?vue&type=template&id=89f28f1e&
var OutboundConnectorsTablevue_type_template_id_89f28f1e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('content-section',{attrs:{"icon":_vm.icon,"title":"Outbound Connectors"}},[_c('section-overview',{attrs:{"title":"Configured Outbound Connectors"}},[_vm._v(" Outbound connectors allow device event data to be forwarded to external systems for further processing. ")]),_c('datatable-section',{attrs:{"headers":_vm.headers,"items":_vm.connectorsAsSortedArray,"width":"50%"},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_c('tr',[_c('td',{attrs:{"width":"32%"}},[_c('datatable-link',{attrs:{"text":props.item.meta.id},on:{"linkClicked":function($event){return _vm.onOpenConnector(props.item.meta.id)}}})],1),_c('td',{attrs:{"width":"32%"}},[_vm._v(_vm._s(props.item.meta.type))]),_c('td',{attrs:{"width":"4%"}},[_c('content-delete-icon',{on:{"delete":function($event){return _vm.onDeleteConnector(props.item.meta.id)}}})],1)])]}},{key:"datatable-footer",fn:function(){return [_c('content-link',{staticClass:"mt-7",attrs:{"icon":"fa-plus-circle","text":"Add new outbound connector."},on:{"linkClicked":_vm.onAddConnector}})]},proxy:true},{key:"datatable-dialogs",fn:function(){return [_c('new-outbound-connector-chooser',{ref:"chooser",on:{"chosen":_vm.onConnectorCreate}}),_c('mqtt-outbound-connector-create-dialog',{ref:"mqttCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onConnectorAdded}}),_c('mqtt-outbound-connector-update-dialog',{ref:"mqttUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onConnectorUpdated}})]},proxy:true}])})],1)}
var OutboundConnectorsTablevue_type_template_id_89f28f1e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsTable.vue?vue&type=template&id=89f28f1e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/NewOutboundConnectorChooser.vue?vue&type=template&id=10252bee&
var NewOutboundConnectorChooservue_type_template_id_10252bee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('new-element-chooser',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Add Outbound Connector","width":"500"}},[_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"mqtt"},on:{"chosen":_vm.onChosen}},[_vm._v("MQTT Outbound Connector")])],1)}
var NewOutboundConnectorChooservue_type_template_id_10252bee_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/NewOutboundConnectorChooser.vue?vue&type=template&id=10252bee&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/NewOutboundConnectorChooser.vue?vue&type=script&lang=ts&





var NewOutboundConnectorChooservue_type_script_lang_ts_NewOutboundConnectorChooser = /** @class */ (function (_super) {
    __extends(NewOutboundConnectorChooser, _super);
    function NewOutboundConnectorChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NewOutboundConnectorChooser.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].OutboundConnectors;
        },
        enumerable: true,
        configurable: true
    });
    /** Open chooser */
    NewOutboundConnectorChooser.prototype.openChooser = function () {
        this.dialog.openDialog();
    };
    /** Close chooser */
    NewOutboundConnectorChooser.prototype.closeChooser = function () {
        this.dialog.closeDialog();
    };
    /** Close chooser on item click */
    NewOutboundConnectorChooser.prototype.onChosen = function (id) {
        this.closeChooser();
        this.$emit("chosen", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], NewOutboundConnectorChooser.prototype, "dialog", void 0);
    NewOutboundConnectorChooser = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { NewElementChooser: external_sitewhere_ide_components_["NewElementChooser"], NewElementEntry: external_sitewhere_ide_components_["NewElementEntry"] }
        })
    ], NewOutboundConnectorChooser);
    return NewOutboundConnectorChooser;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var NewOutboundConnectorChooservue_type_script_lang_ts_ = (NewOutboundConnectorChooservue_type_script_lang_ts_NewOutboundConnectorChooser);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/NewOutboundConnectorChooser.vue?vue&type=script&lang=ts&
 /* harmony default export */ var outboundconnectors_NewOutboundConnectorChooservue_type_script_lang_ts_ = (NewOutboundConnectorChooservue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/NewOutboundConnectorChooser.vue





/* normalize component */

var NewOutboundConnectorChooser_component = normalizeComponent(
  outboundconnectors_NewOutboundConnectorChooservue_type_script_lang_ts_,
  NewOutboundConnectorChooservue_type_template_id_10252bee_render,
  NewOutboundConnectorChooservue_type_template_id_10252bee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var outboundconnectors_NewOutboundConnectorChooser = (NewOutboundConnectorChooser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorCreateDialog.vue?vue&type=template&id=d0ea7f7e&
var MqttOutboundConnectorCreateDialogvue_type_template_id_d0ea7f7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mqtt-outbound-connector-dialog',{ref:"dialog",attrs:{"title":"Create MQTT Outbound Connector","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var MqttOutboundConnectorCreateDialogvue_type_template_id_d0ea7f7e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorCreateDialog.vue?vue&type=template&id=d0ea7f7e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorDialog.vue?vue&type=template&id=a7f9600e&
var MqttOutboundConnectorDialogvue_type_template_id_a7f9600e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('outbound-connector-dialog',{ref:"dialog",attrs:{"type":"mqtt","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"outbound-connector-tabs"},[_c('v-tab',{key:"connection"},[_vm._v("Connection")]),_c('v-tab',{key:"authentication"},[_vm._v("Authentication")])],1),_c('template',{slot:"outbound-connector-tab-items"},[_c('v-tab-item',{key:"connection",attrs:{"eager":""}},[_c('mqtt-connection-fields',{ref:"connection"})],1),_c('v-tab-item',{key:"authentication",attrs:{"eager":""}},[_c('mqtt-authentication-fields',{ref:"authentication"})],1)],1)],2)}
var MqttOutboundConnectorDialogvue_type_template_id_a7f9600e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorDialog.vue?vue&type=template&id=a7f9600e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorDialog.vue?vue&type=template&id=a9f975f0&
var OutboundConnectorDialogvue_type_template_id_a9f975f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"visible":_vm.visible,"createLabel":_vm.createLabel || 'Create',"cancelLabel":_vm.cancelLabel || 'Cancel'},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"header"},[_c('dialog-header',[_c('v-layout',{staticClass:"pl-4 pr-4 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[(_vm.visible)?_c('form-text',{attrs:{"label":"Outbound connector id","title":"Unique outbound connector identifier.","icon":"info","dense":true,"autofocus":true},model:{value:(_vm.id),callback:function ($$v) {_vm.id=$$v},expression:"id"}},[(!_vm.$v.id.required && _vm.$v.$dirty)?_c('span',[_vm._v("Id is required.")]):_vm._e(),(!_vm.$v.id.idConflict && _vm.$v.$dirty)?_c('span',[_vm._v("Id already in use.")]):_vm._e()]):_vm._e()],1)],1)],1)],1),_c('template',{slot:"tabs"},[_vm._t("outbound-connector-tabs")],2),_c('template',{slot:"tab-items"},[_vm._t("outbound-connector-tab-items")],2)],2)}
var OutboundConnectorDialogvue_type_template_id_a9f975f0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorDialog.vue?vue&type=template&id=a9f975f0&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorDialog.vue?vue&type=script&lang=ts&





/** Validator for checking if id is already used */
var OutboundConnectorDialogvue_type_script_lang_ts_idConflict = validators["helpers"].withParams({ type: "idConflict" }, 
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
var OutboundConnectorDialogvue_type_script_lang_ts_OutboundConnectorDialog = /** @class */ (function (_super) {
    __extends(OutboundConnectorDialog, _super);
    function OutboundConnectorDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        return _this;
    }
    /** Save dialog fields */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    OutboundConnectorDialog.prototype.save = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = { id: this.id, type: this.type };
        return config;
    };
    /** Reset the dialog */
    OutboundConnectorDialog.prototype.reset = function () {
        this.id = null;
        this.setActiveTab(0);
        this.$v.$reset();
    };
    /** Validate fields */
    OutboundConnectorDialog.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load dialog from a given configuration */
    OutboundConnectorDialog.prototype.load = function (config) {
        this.id = config.id;
    };
    /** Set the active tab */
    OutboundConnectorDialog.prototype.setActiveTab = function (tab) {
        this.dialog.setActiveTab(tab);
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    OutboundConnectorDialog.prototype.onCreateClicked = function (e) {
        this.$emit("createClicked", e);
    };
    /** Called after cancel button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    OutboundConnectorDialog.prototype.onCancelClicked = function (e) {
        this.$emit("cancelClicked", e);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "type", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "icon", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "visible", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], OutboundConnectorDialog.prototype, "dialog", void 0);
    OutboundConnectorDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                BaseDialog: external_sitewhere_ide_components_["BaseDialog"],
                DialogHeader: external_sitewhere_ide_components_["DialogHeader"],
                FormText: external_sitewhere_ide_components_["FormText"],
                FormSelect: external_sitewhere_ide_components_["FormSelect"],
                VFlex: lib_["VFlex"],
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                VLayout: lib_["VLayout"]
            },
            validations: {
                id: {
                    required: validators["required"],
                    idConflict: OutboundConnectorDialogvue_type_script_lang_ts_idConflict
                }
            }
        })
    ], OutboundConnectorDialog);
    return OutboundConnectorDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var OutboundConnectorDialogvue_type_script_lang_ts_ = (OutboundConnectorDialogvue_type_script_lang_ts_OutboundConnectorDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var outboundconnectors_OutboundConnectorDialogvue_type_script_lang_ts_ = (OutboundConnectorDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorDialog.vue





/* normalize component */

var OutboundConnectorDialog_component = normalizeComponent(
  outboundconnectors_OutboundConnectorDialogvue_type_script_lang_ts_,
  OutboundConnectorDialogvue_type_template_id_a9f975f0_render,
  OutboundConnectorDialogvue_type_template_id_a9f975f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var outboundconnectors_OutboundConnectorDialog = (OutboundConnectorDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttConnectionFields.vue?vue&type=template&id=97225962&
var MqttConnectionFieldsvue_type_template_id_97225962_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs2":""}},[_c('form-select',{attrs:{"items":_vm.protocols,"title":"Choose connection protocol","label":"Protocol","item-text":"text","item-value":"value","icon":"lock"},model:{value:(_vm.protocol),callback:function ($$v) {_vm.protocol=$$v},expression:"protocol"}})],1),_c('v-flex',{attrs:{"xs8":""}},[_c('form-text',{staticClass:"ml-3 mr-3",attrs:{"required":"","label":"Hostname","title":"MQTT broker hostname.","icon":"router"},model:{value:(_vm.hostname),callback:function ($$v) {_vm.hostname=$$v},expression:"hostname"}},[(!_vm.$v.hostname.required && _vm.$v.$dirty)?_c('span',[_vm._v("Hostname is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs2":""}},[_c('form-text',{attrs:{"required":"","label":"Port","title":"MQTT broker port.","type":"number"},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}},[(!_vm.$v.port.required && _vm.$v.$dirty)?_c('span',[_vm._v("Required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs12":""}},[_c('form-text',{staticClass:"mb-4",attrs:{"required":"","label":"Topic","title":"MQTT topic to listen on.","icon":"arrow_forward"},model:{value:(_vm.topic),callback:function ($$v) {_vm.topic=$$v},expression:"topic"}},[(!_vm.$v.topic.required && _vm.$v.$dirty)?_c('span',[_vm._v("Topic is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-select',{staticClass:"mr-3",attrs:{"items":_vm.qosValues,"title":"Choose quality of service (QoS)","label":"QoS","item-text":"text","item-value":"value","icon":"done"},model:{value:(_vm.qos),callback:function ($$v) {_vm.qos=$$v},expression:"qos"}})],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Number of threads","title":"Number of threads used to handle processing.","icon":"settings","type":"number"},model:{value:(_vm.numThreads),callback:function ($$v) {_vm.numThreads=$$v},expression:"numThreads"}},[(!_vm.$v.numThreads.required && _vm.$v.$dirty)?_c('span',[_vm._v("Number of threads is required.")]):_vm._e()])],1)],1)}
var MqttConnectionFieldsvue_type_template_id_97225962_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttConnectionFields.vue?vue&type=template&id=97225962&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttConnectionFields.vue?vue&type=script&lang=ts&





var outboundconnectors_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_MqttConnectionFields = /** @class */ (function (_super) {
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
/* harmony default export */ var outboundconnectors_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_ = (outboundconnectors_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_MqttConnectionFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttConnectionFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tenantengines_outboundconnectors_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_ = (outboundconnectors_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttConnectionFields.vue





/* normalize component */

var outboundconnectors_mqtt_MqttConnectionFields_component = normalizeComponent(
  tenantengines_outboundconnectors_mqtt_MqttConnectionFieldsvue_type_script_lang_ts_,
  MqttConnectionFieldsvue_type_template_id_97225962_render,
  MqttConnectionFieldsvue_type_template_id_97225962_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var outboundconnectors_mqtt_MqttConnectionFields = (outboundconnectors_mqtt_MqttConnectionFields_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=120e639f&
var MqttAuthenticationFieldsvue_type_template_id_120e639f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Username","title":"Username for authentication.","icon":"account_circle"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Password","title":"Password for authentication.","icon":"lock","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Truststore path","title":"Truststore path.","icon":"info"},model:{value:(_vm.trustStorePath),callback:function ($$v) {_vm.trustStorePath=$$v},expression:"trustStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Truststore password","title":"Truststore password.","icon":"lock","type":"password"},model:{value:(_vm.trustStorePassword),callback:function ($$v) {_vm.trustStorePassword=$$v},expression:"trustStorePassword"}})],1),_c('v-flex',{attrs:{"xs7":""}},[_c('form-text',{staticClass:"mr-3",attrs:{"label":"Keystore path","title":"Keystore path.","icon":"info"},model:{value:(_vm.keyStorePath),callback:function ($$v) {_vm.keyStorePath=$$v},expression:"keyStorePath"}})],1),_c('v-flex',{attrs:{"xs5":""}},[_c('form-text',{attrs:{"label":"Keystore password","title":"Keystore password.","icon":"lock","type":"password"},model:{value:(_vm.keyStorePassword),callback:function ($$v) {_vm.keyStorePassword=$$v},expression:"keyStorePassword"}})],1)],1)}
var MqttAuthenticationFieldsvue_type_template_id_120e639f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttAuthenticationFields.vue?vue&type=template&id=120e639f&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttAuthenticationFields.vue?vue&type=script&lang=ts&




var outboundconnectors_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_MqttAuthenticationFields = /** @class */ (function (_super) {
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
        Object(external_vue_property_decorator_["Component"])({ components: { VFlex: lib_["VFlex"], DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"] }, validations: {} })
    ], MqttAuthenticationFields);
    return MqttAuthenticationFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var outboundconnectors_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_ = (outboundconnectors_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_MqttAuthenticationFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttAuthenticationFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var tenantengines_outboundconnectors_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_ = (outboundconnectors_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttAuthenticationFields.vue





/* normalize component */

var outboundconnectors_mqtt_MqttAuthenticationFields_component = normalizeComponent(
  tenantengines_outboundconnectors_mqtt_MqttAuthenticationFieldsvue_type_script_lang_ts_,
  MqttAuthenticationFieldsvue_type_template_id_120e639f_render,
  MqttAuthenticationFieldsvue_type_template_id_120e639f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var outboundconnectors_mqtt_MqttAuthenticationFields = (outboundconnectors_mqtt_MqttAuthenticationFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorDialog.vue?vue&type=script&lang=ts&








var MqttOutboundConnectorDialogvue_type_script_lang_ts_MqttOutboundConnectorDialog = /** @class */ (function (_super) {
    __extends(MqttOutboundConnectorDialog, _super);
    function MqttOutboundConnectorDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MqttOutboundConnectorDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    MqttOutboundConnectorDialog.prototype.generatePayload = function () {
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
    MqttOutboundConnectorDialog.prototype.reset = function () {
        if (this.connection) {
            this.connection.reset();
        }
        if (this.authentication) {
            this.authentication.reset();
        }
        this.dialog.reset();
    };
    /** Load dialog from a given configuration */
    MqttOutboundConnectorDialog.prototype.load = function (config) {
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
    MqttOutboundConnectorDialog.prototype.onCreateClicked = function (e) {
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
    ], MqttOutboundConnectorDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttOutboundConnectorDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttOutboundConnectorDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttOutboundConnectorDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttOutboundConnectorDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttOutboundConnectorDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttOutboundConnectorDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttOutboundConnectorDialog.prototype, "connection", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttOutboundConnectorDialog.prototype, "authentication", void 0);
    MqttOutboundConnectorDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                OutboundConnectorDialog: outboundconnectors_OutboundConnectorDialog,
                MqttConnectionFields: outboundconnectors_mqtt_MqttConnectionFields,
                MqttAuthenticationFields: outboundconnectors_mqtt_MqttAuthenticationFields
            }
        })
    ], MqttOutboundConnectorDialog);
    return MqttOutboundConnectorDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var MqttOutboundConnectorDialogvue_type_script_lang_ts_ = (MqttOutboundConnectorDialogvue_type_script_lang_ts_MqttOutboundConnectorDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttOutboundConnectorDialogvue_type_script_lang_ts_ = (MqttOutboundConnectorDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorDialog.vue





/* normalize component */

var MqttOutboundConnectorDialog_component = normalizeComponent(
  mqtt_MqttOutboundConnectorDialogvue_type_script_lang_ts_,
  MqttOutboundConnectorDialogvue_type_template_id_a7f9600e_render,
  MqttOutboundConnectorDialogvue_type_template_id_a7f9600e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttOutboundConnectorDialog = (MqttOutboundConnectorDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorCreateDialog.vue?vue&type=script&lang=ts&




var MqttOutboundConnectorCreateDialogvue_type_script_lang_ts_MqttOutboundConnectorCreateDialog = /** @class */ (function (_super) {
    __extends(MqttOutboundConnectorCreateDialog, _super);
    function MqttOutboundConnectorCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    MqttOutboundConnectorCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    MqttOutboundConnectorCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttOutboundConnectorCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttOutboundConnectorCreateDialog.prototype, "dialog", void 0);
    MqttOutboundConnectorCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                MqttOutboundConnectorDialog: mqtt_MqttOutboundConnectorDialog
            }
        })
    ], MqttOutboundConnectorCreateDialog);
    return MqttOutboundConnectorCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var MqttOutboundConnectorCreateDialogvue_type_script_lang_ts_ = (MqttOutboundConnectorCreateDialogvue_type_script_lang_ts_MqttOutboundConnectorCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttOutboundConnectorCreateDialogvue_type_script_lang_ts_ = (MqttOutboundConnectorCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorCreateDialog.vue





/* normalize component */

var MqttOutboundConnectorCreateDialog_component = normalizeComponent(
  mqtt_MqttOutboundConnectorCreateDialogvue_type_script_lang_ts_,
  MqttOutboundConnectorCreateDialogvue_type_template_id_d0ea7f7e_render,
  MqttOutboundConnectorCreateDialogvue_type_template_id_d0ea7f7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttOutboundConnectorCreateDialog = (MqttOutboundConnectorCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorUpdateDialog.vue?vue&type=template&id=1ada6978&
var MqttOutboundConnectorUpdateDialogvue_type_template_id_1ada6978_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mqtt-outbound-connector-dialog',{ref:"dialog",attrs:{"title":"Update MQTT Outbound Connector","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var MqttOutboundConnectorUpdateDialogvue_type_template_id_1ada6978_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorUpdateDialog.vue?vue&type=template&id=1ada6978&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorUpdateDialog.vue?vue&type=script&lang=ts&




var MqttOutboundConnectorUpdateDialogvue_type_script_lang_ts_MqttOutboundConnectorUpdateDialog = /** @class */ (function (_super) {
    __extends(MqttOutboundConnectorUpdateDialog, _super);
    function MqttOutboundConnectorUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    MqttOutboundConnectorUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    MqttOutboundConnectorUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], MqttOutboundConnectorUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], MqttOutboundConnectorUpdateDialog.prototype, "dialog", void 0);
    MqttOutboundConnectorUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                MqttOutboundConnectorDialog: mqtt_MqttOutboundConnectorDialog
            }
        })
    ], MqttOutboundConnectorUpdateDialog);
    return MqttOutboundConnectorUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var MqttOutboundConnectorUpdateDialogvue_type_script_lang_ts_ = (MqttOutboundConnectorUpdateDialogvue_type_script_lang_ts_MqttOutboundConnectorUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var mqtt_MqttOutboundConnectorUpdateDialogvue_type_script_lang_ts_ = (MqttOutboundConnectorUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/mqtt/MqttOutboundConnectorUpdateDialog.vue





/* normalize component */

var MqttOutboundConnectorUpdateDialog_component = normalizeComponent(
  mqtt_MqttOutboundConnectorUpdateDialogvue_type_script_lang_ts_,
  MqttOutboundConnectorUpdateDialogvue_type_template_id_1ada6978_render,
  MqttOutboundConnectorUpdateDialogvue_type_template_id_1ada6978_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mqtt_MqttOutboundConnectorUpdateDialog = (MqttOutboundConnectorUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsTable.vue?vue&type=script&lang=ts&








var OutboundConnectorsTablevue_type_script_lang_ts_OutboundConnectorsTable = /** @class */ (function (_super) {
    __extends(OutboundConnectorsTable, _super);
    function OutboundConnectorsTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        _this.headers = [
            { text: "Id", value: "id" },
            { text: "Type", value: "type" },
            { text: "", value: "delete" }
        ];
        /** Event sources in format for display */
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        _this.connectorsAsSortedArray = [];
        return _this;
    }
    OutboundConnectorsTable.prototype.onConnectorsUpdated = function () {
        this.calculateConnectorsAsSortedArray();
    };
    Object.defineProperty(OutboundConnectorsTable.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    /** Get list of ids already in use */
    OutboundConnectorsTable.prototype.findIdsInUse = function (exclude) {
        var ids = [];
        if (this.connectors) {
            this.connectors.forEach(function (conn) {
                if (conn.id != exclude) {
                    ids.push(conn.id);
                }
            });
        }
        return ids;
    };
    /** Get connector index based on id */
    OutboundConnectorsTable.prototype.getConnectorIndex = function (id) {
        var match = null;
        if (this.connectors) {
            this.connectors.forEach(function (conn, index) {
                if (conn.id === id) {
                    match = index;
                }
            });
        }
        return match;
    };
    /** Get a connector by id */
    OutboundConnectorsTable.prototype.getConnectorById = function (id) {
        var index = this.getConnectorIndex(id);
        if (this.connectors && index != null) {
            return this.connectors[index];
        }
        return null;
    };
    /** Get connectors as a sorted array */
    OutboundConnectorsTable.prototype.calculateConnectorsAsSortedArray = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var all = [];
        if (this.connectors) {
            this.connectors.forEach(function (conn) {
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                var meta = {};
                meta.id = conn.id;
                meta.type = conn.type;
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                var config = conn.configuration;
                all.push({ meta: meta, config: config });
            });
        }
        all.sort(function (a, b) {
            return a.meta.id.localeCompare(b.meta.id);
        });
        this.connectorsAsSortedArray = all;
    };
    /** Add new connector */
    OutboundConnectorsTable.prototype.onAddConnector = function () {
        this.chooser.openChooser();
    };
    /** Called to create a new connector based on type */
    OutboundConnectorsTable.prototype.onConnectorCreate = function (id) {
        var idsInUse = this.findIdsInUse();
        if (id == "mqtt") {
            this.mqttCreate.openDialog(idsInUse);
        }
    };
    /** Called when connector is added */
    OutboundConnectorsTable.prototype.onConnectorAdded = function (config) {
        if (this.connectors) {
            this.connectors.push(config);
            this.calculateConnectorsAsSortedArray();
        }
        this.$emit("create", config);
    };
    /** Open connector by id */
    OutboundConnectorsTable.prototype.onOpenConnector = function (id) {
        var config = this.getConnectorById(id);
        var idsInUse = this.findIdsInUse(id);
        if (config) {
            if (config.type === "mqtt") {
                this.mqttUpdate.openDialog(config, idsInUse);
            }
        }
    };
    /** Called when connector is updated */
    OutboundConnectorsTable.prototype.onConnectorUpdated = function (originalId, config) {
        var index = this.getConnectorIndex(originalId);
        if (this.connectors && index != null) {
            external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.connectors, index, config);
            this.calculateConnectorsAsSortedArray();
        }
        this.$emit("update", originalId, config);
    };
    /** Delete connector by id */
    OutboundConnectorsTable.prototype.onDeleteConnector = function (id) {
        var index = this.getConnectorIndex(id);
        if (this.connectors && index != null) {
            this.connectors.splice(index, 1);
            this.calculateConnectorsAsSortedArray();
        }
        this.$emit("delete", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorsTable.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorsTable.prototype, "connectors", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], OutboundConnectorsTable.prototype, "chooser", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], OutboundConnectorsTable.prototype, "mqttCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], OutboundConnectorsTable.prototype, "mqttUpdate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])("connectors", { immediate: true })
    ], OutboundConnectorsTable.prototype, "onConnectorsUpdated", null);
    OutboundConnectorsTable = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                DatatableSection: external_sitewhere_ide_components_["DatatableSection"],
                DatatableLink: external_sitewhere_ide_components_["DatatableLink"],
                ContentDeleteIcon: external_sitewhere_ide_components_["ContentDeleteIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                SectionOverview: external_sitewhere_ide_components_["SectionOverview"],
                NewOutboundConnectorChooser: outboundconnectors_NewOutboundConnectorChooser,
                MqttOutboundConnectorCreateDialog: mqtt_MqttOutboundConnectorCreateDialog,
                MqttOutboundConnectorUpdateDialog: mqtt_MqttOutboundConnectorUpdateDialog
            }
        })
    ], OutboundConnectorsTable);
    return OutboundConnectorsTable;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var OutboundConnectorsTablevue_type_script_lang_ts_ = (OutboundConnectorsTablevue_type_script_lang_ts_OutboundConnectorsTable);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsTable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var outboundconnectors_OutboundConnectorsTablevue_type_script_lang_ts_ = (OutboundConnectorsTablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsTable.vue





/* normalize component */

var OutboundConnectorsTable_component = normalizeComponent(
  outboundconnectors_OutboundConnectorsTablevue_type_script_lang_ts_,
  OutboundConnectorsTablevue_type_template_id_89f28f1e_render,
  OutboundConnectorsTablevue_type_template_id_89f28f1e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var outboundconnectors_OutboundConnectorsTable = (OutboundConnectorsTable_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsPlugin.vue?vue&type=script&lang=ts&






var OutboundConnectorsPluginvue_type_script_lang_ts_OutboundConnectorsPlugin = /** @class */ (function (_super) {
    __extends(OutboundConnectorsPlugin, _super);
    function OutboundConnectorsPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OutboundConnectorsPlugin.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].EventSources;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutboundConnectorsPlugin.prototype, "tenantId", {
        /** Tenant id */
        get: function () {
            return this.configuration ? this.configuration.tenant.token : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutboundConnectorsPlugin.prototype, "connectorsConfiguration", {
        /** Get tenant configuration for outbound connectors */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutboundConnectorsPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutboundConnectorsPlugin.prototype, "outboundConnectors", {
        /** Get outbound connectors list */
        get: function () {
            return this.connectorsConfiguration
                ? this.connectorsConfiguration.outboundConnectors
                : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Handle outbound connector created */
    OutboundConnectorsPlugin.prototype.onOutboundConnectorCreated = function (
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config) {
        this.markDirty();
    };
    /** Handle outbound connector updated */
    OutboundConnectorsPlugin.prototype.onOutboundConnectorUpdated = function (
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    originalId, 
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config) {
        this.markDirty();
    };
    /** Handle event source deleted */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    OutboundConnectorsPlugin.prototype.onOutboundConnectorDeleted = function (id) {
        this.markDirty();
    };
    /** Mark data as having been updated */
    OutboundConnectorsPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], OutboundConnectorsPlugin.prototype, "configuration", void 0);
    OutboundConnectorsPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { TenantEnginePlugin: tenantengines_TenantEnginePlugin, OutboundConnectorsTable: outboundconnectors_OutboundConnectorsTable }
        })
    ], OutboundConnectorsPlugin);
    return OutboundConnectorsPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var OutboundConnectorsPluginvue_type_script_lang_ts_ = (OutboundConnectorsPluginvue_type_script_lang_ts_OutboundConnectorsPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var outboundconnectors_OutboundConnectorsPluginvue_type_script_lang_ts_ = (OutboundConnectorsPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/outboundconnectors/OutboundConnectorsPlugin.vue





/* normalize component */

var OutboundConnectorsPlugin_component = normalizeComponent(
  outboundconnectors_OutboundConnectorsPluginvue_type_script_lang_ts_,
  OutboundConnectorsPluginvue_type_template_id_9c63a3ee_render,
  OutboundConnectorsPluginvue_type_template_id_9c63a3ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var outboundconnectors_OutboundConnectorsPlugin = (OutboundConnectorsPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/schedulemanagement/ScheduleManagementPlugin.vue?vue&type=template&id=de1c984c&
var ScheduleManagementPluginvue_type_template_id_de1c984c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('content-section',{attrs:{"icon":"fa-database","title":"Schedule Management Datastore"}},[_c('rdb-datastore-selector',{attrs:{"datastore":_vm.datastore,"instance":_vm.instanceManagement},on:{"create":_vm.onCreateDatastore,"update":_vm.onUpdateDatastore,"unset":_vm.onUnsetDatastore}})],1)],1)}
var ScheduleManagementPluginvue_type_template_id_de1c984c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/schedulemanagement/ScheduleManagementPlugin.vue?vue&type=template&id=de1c984c&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/schedulemanagement/ScheduleManagementPlugin.vue?vue&type=script&lang=ts&






var ScheduleManagementPluginvue_type_script_lang_ts_ScheduleManagementPlugin = /** @class */ (function (_super) {
    __extends(ScheduleManagementPlugin, _super);
    function ScheduleManagementPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ScheduleManagementPlugin.prototype, "scheduleManagement", {
        /** Get tenant configuration for schedule management */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleManagementPlugin.prototype, "instanceManagement", {
        /** Get instance configuraton information */
        get: function () {
            return this.configuration ? this.configuration.instanceConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleManagementPlugin.prototype, "datastore", {
        /** Get datastore definition */
        get: function () {
            return this.scheduleManagement ? this.scheduleManagement.datastore : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Create new datastore */
    ScheduleManagementPlugin.prototype.onCreateDatastore = function (definition) {
        this.scheduleManagement.datastore = definition;
    };
    /** Update datastore */
    ScheduleManagementPlugin.prototype.onUpdateDatastore = function (definition) {
        this.scheduleManagement.datastore = definition;
        this.markDirty();
    };
    /** Unset the datastore */
    ScheduleManagementPlugin.prototype.onUnsetDatastore = function () {
        if (this.scheduleManagement) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            this.scheduleManagement.datastore = null;
            this.markDirty();
        }
    };
    /** Mark data as having been updated */
    ScheduleManagementPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], ScheduleManagementPlugin.prototype, "configuration", void 0);
    ScheduleManagementPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { ContentSection: external_sitewhere_ide_components_["ContentSection"], TenantEnginePlugin: tenantengines_TenantEnginePlugin, RdbDatastoreSelector: datastore_RdbDatastoreSelector }
        })
    ], ScheduleManagementPlugin);
    return ScheduleManagementPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var ScheduleManagementPluginvue_type_script_lang_ts_ = (ScheduleManagementPluginvue_type_script_lang_ts_ScheduleManagementPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/schedulemanagement/ScheduleManagementPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var schedulemanagement_ScheduleManagementPluginvue_type_script_lang_ts_ = (ScheduleManagementPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/schedulemanagement/ScheduleManagementPlugin.vue





/* normalize component */

var ScheduleManagementPlugin_component = normalizeComponent(
  schedulemanagement_ScheduleManagementPluginvue_type_script_lang_ts_,
  ScheduleManagementPluginvue_type_template_id_de1c984c_render,
  ScheduleManagementPluginvue_type_template_id_de1c984c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var schedulemanagement_ScheduleManagementPlugin = (ScheduleManagementPlugin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/LabelGenerationPlugin.vue?vue&type=template&id=34316d8c&
var LabelGenerationPluginvue_type_template_id_34316d8c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tenant-engine-plugin',{attrs:{"configuration":_vm.configuration}},[_c('label-generators-table',{attrs:{"tenantId":_vm.tenantId,"generators":_vm.labelGenerators},on:{"create":_vm.onLabelGeneratorCreated,"update":_vm.onLabelGeneratorUpdated,"delete":_vm.onLabelGeneratorDeleted}})],1)}
var LabelGenerationPluginvue_type_template_id_34316d8c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGenerationPlugin.vue?vue&type=template&id=34316d8c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorsTable.vue?vue&type=template&id=43bb51a9&
var LabelGeneratorsTablevue_type_template_id_43bb51a9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('content-section',{attrs:{"icon":_vm.icon,"title":"Label Generators"}},[_c('section-overview',{attrs:{"title":"Configured Label Generators"}},[_vm._v(" Label generators are used to generate images, bar codes, or other artifacts which are based on device information. ")]),_c('datatable-section',{attrs:{"headers":_vm.headers,"items":_vm.displayLabelGenerators,"no-data-text":"No label generators have been defined","width":"50%"},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_c('tr',[_c('td',{attrs:{"width":"48%"}},[_c('datatable-link',{attrs:{"text":props.item.meta.id},on:{"linkClicked":function($event){return _vm.onOpenLabelGenerator(props.item.meta.id)}}})],1),_c('td',{attrs:{"width":"48%"}},[_vm._v(_vm._s(props.item.meta.type))]),_c('td',{attrs:{"width":"4%"}},[_c('content-delete-icon',{on:{"delete":function($event){return _vm.onDeleteLabelGenerator(props.item.meta.id)}}})],1)])]}},{key:"datatable-footer",fn:function(){return [_c('content-link',{staticClass:"mt-5",attrs:{"icon":"fa-plus-circle","text":"Add new label generator."},on:{"linkClicked":_vm.onAddLabelGenerator}})]},proxy:true},{key:"datatable-dialogs",fn:function(){return [_c('new-label-generator-chooser',{ref:"chooser",on:{"chosen":_vm.onLabelGeneratorCreate}}),_c('qr-code-label-generator-create-dialog',{ref:"qrcodeCreate",attrs:{"tenantId":_vm.tenantId},on:{"create":_vm.onLabelGeneratorAdded}}),_c('qr-code-label-generator-update-dialog',{ref:"qrcodeUpdate",attrs:{"tenantId":_vm.tenantId},on:{"update":_vm.onLabelGeneratorUpdated}})]},proxy:true}])})],1)}
var LabelGeneratorsTablevue_type_template_id_43bb51a9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorsTable.vue?vue&type=template&id=43bb51a9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/NewLabelGeneratorChooser.vue?vue&type=template&id=1a39d757&
var NewLabelGeneratorChooservue_type_template_id_1a39d757_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('new-element-chooser',{ref:"dialog",attrs:{"icon":_vm.icon,"title":"Add Label Generator","width":"500"}},[_c('new-element-entry',{attrs:{"icon":"fa-globe","item-id":"qr-code"},on:{"chosen":_vm.onChosen}},[_vm._v("QR Code Generator")])],1)}
var NewLabelGeneratorChooservue_type_template_id_1a39d757_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/NewLabelGeneratorChooser.vue?vue&type=template&id=1a39d757&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/NewLabelGeneratorChooser.vue?vue&type=script&lang=ts&





var NewLabelGeneratorChooservue_type_script_lang_ts_NewLabelGeneratorChooser = /** @class */ (function (_super) {
    __extends(NewLabelGeneratorChooser, _super);
    function NewLabelGeneratorChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NewLabelGeneratorChooser.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].LabelGeneration;
        },
        enumerable: true,
        configurable: true
    });
    /** Open chooser */
    NewLabelGeneratorChooser.prototype.openChooser = function () {
        this.dialog.openDialog();
    };
    /** Close chooser */
    NewLabelGeneratorChooser.prototype.closeChooser = function () {
        this.dialog.closeDialog();
    };
    /** Close chooser on item click */
    NewLabelGeneratorChooser.prototype.onChosen = function (id) {
        this.closeChooser();
        this.$emit("chosen", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], NewLabelGeneratorChooser.prototype, "dialog", void 0);
    NewLabelGeneratorChooser = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { NewElementChooser: external_sitewhere_ide_components_["NewElementChooser"], NewElementEntry: external_sitewhere_ide_components_["NewElementEntry"] }
        })
    ], NewLabelGeneratorChooser);
    return NewLabelGeneratorChooser;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var NewLabelGeneratorChooservue_type_script_lang_ts_ = (NewLabelGeneratorChooservue_type_script_lang_ts_NewLabelGeneratorChooser);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/NewLabelGeneratorChooser.vue?vue&type=script&lang=ts&
 /* harmony default export */ var labelgeneration_NewLabelGeneratorChooservue_type_script_lang_ts_ = (NewLabelGeneratorChooservue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/NewLabelGeneratorChooser.vue





/* normalize component */

var NewLabelGeneratorChooser_component = normalizeComponent(
  labelgeneration_NewLabelGeneratorChooservue_type_script_lang_ts_,
  NewLabelGeneratorChooservue_type_template_id_1a39d757_render,
  NewLabelGeneratorChooservue_type_template_id_1a39d757_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var labelgeneration_NewLabelGeneratorChooser = (NewLabelGeneratorChooser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorCreateDialog.vue?vue&type=template&id=76209307&
var QrCodeLabelGeneratorCreateDialogvue_type_template_id_76209307_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('qr-code-label-generator-dialog',{ref:"dialog",attrs:{"title":"Create QR Code Label Generator","width":"700","createLabel":"Create","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var QrCodeLabelGeneratorCreateDialogvue_type_template_id_76209307_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorCreateDialog.vue?vue&type=template&id=76209307&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorDialog.vue?vue&type=template&id=8e416970&
var QrCodeLabelGeneratorDialogvue_type_template_id_8e416970_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label-generator-dialog',{ref:"dialog",attrs:{"type":"qr-code","tenantId":_vm.tenantId,"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"idsInUse":_vm.idsInUse,"visible":_vm.dialogVisible,"createLabel":_vm.createLabel,"cancelLabel":_vm.cancelLabel,"parameterExtractors":_vm.parameterExtractors},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"label-generator-tabs"},[_c('v-tab',{key:"style"},[_vm._v("QR Code Style")])],1),_c('template',{slot:"label-generator-tab-items"},[_c('v-tab-item',{key:"style",attrs:{"eager":""}},[_c('qr-code-generator-fields',{ref:"style"})],1)],1)],2)}
var QrCodeLabelGeneratorDialogvue_type_template_id_8e416970_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorDialog.vue?vue&type=template&id=8e416970&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorDialog.vue?vue&type=template&id=232f036e&
var LabelGeneratorDialogvue_type_template_id_232f036e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-dialog',{ref:"dialog",attrs:{"icon":_vm.icon,"title":_vm.title,"width":_vm.width,"loaded":true,"visible":_vm.visible,"createLabel":_vm.createLabel || 'Create',"cancelLabel":_vm.cancelLabel || 'Cancel'},on:{"createClicked":_vm.onCreateClicked,"cancelClicked":_vm.onCancelClicked}},[_c('template',{slot:"header"},[_c('dialog-header',[_c('v-layout',{staticClass:"pl-4 pr-4 pt-0 pb-0",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[(_vm.visible)?_c('form-text',{attrs:{"label":"Label generator id","title":"Unique label generator identifier.","icon":"info","dense":true,"autofocus":true},model:{value:(_vm.id),callback:function ($$v) {_vm.id=$$v},expression:"id"}},[(!_vm.$v.id.required && _vm.$v.$dirty)?_c('span',[_vm._v("Id is required.")]):_vm._e(),(!_vm.$v.id.idConflict && _vm.$v.$dirty)?_c('span',[_vm._v("Id already in use.")]):_vm._e()]):_vm._e()],1)],1)],1)],1),_c('template',{slot:"tabs"},[_vm._t("label-generator-tabs")],2),_c('template',{slot:"tab-items"},[_vm._t("label-generator-tab-items")],2)],2)}
var LabelGeneratorDialogvue_type_template_id_232f036e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorDialog.vue?vue&type=template&id=232f036e&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorDialog.vue?vue&type=script&lang=ts&





/** Validator for checking if id is already used */
var LabelGeneratorDialogvue_type_script_lang_ts_idConflict = validators["helpers"].withParams({ type: "idConflict" }, 
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
var LabelGeneratorDialogvue_type_script_lang_ts_LabelGeneratorDialog = /** @class */ (function (_super) {
    __extends(LabelGeneratorDialog, _super);
    function LabelGeneratorDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        return _this;
    }
    /** Save dialog fields */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    LabelGeneratorDialog.prototype.save = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = { id: this.id, type: this.type };
        return config;
    };
    /** Reset the dialog */
    LabelGeneratorDialog.prototype.reset = function () {
        this.id = null;
        this.setActiveTab(0);
        this.$v.$reset();
    };
    /** Validate fields */
    LabelGeneratorDialog.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load dialog from a given configuration */
    LabelGeneratorDialog.prototype.load = function (config) {
        this.id = config.id;
    };
    /** Set the active tab */
    LabelGeneratorDialog.prototype.setActiveTab = function (tab) {
        this.dialog.setActiveTab(tab);
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    LabelGeneratorDialog.prototype.onCreateClicked = function (e) {
        this.$emit("createClicked", e);
    };
    /** Called after cancel button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    LabelGeneratorDialog.prototype.onCancelClicked = function (e) {
        this.$emit("cancelClicked", e);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "type", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "icon", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "visible", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], LabelGeneratorDialog.prototype, "dialog", void 0);
    LabelGeneratorDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                BaseDialog: external_sitewhere_ide_components_["BaseDialog"],
                DialogHeader: external_sitewhere_ide_components_["DialogHeader"],
                FormText: external_sitewhere_ide_components_["FormText"],
                VFlex: lib_["VFlex"],
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                VLayout: lib_["VLayout"]
            },
            validations: {
                id: {
                    required: validators["required"],
                    idConflict: LabelGeneratorDialogvue_type_script_lang_ts_idConflict
                }
            }
        })
    ], LabelGeneratorDialog);
    return LabelGeneratorDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var LabelGeneratorDialogvue_type_script_lang_ts_ = (LabelGeneratorDialogvue_type_script_lang_ts_LabelGeneratorDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var labelgeneration_LabelGeneratorDialogvue_type_script_lang_ts_ = (LabelGeneratorDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorDialog.vue





/* normalize component */

var LabelGeneratorDialog_component = normalizeComponent(
  labelgeneration_LabelGeneratorDialogvue_type_script_lang_ts_,
  LabelGeneratorDialogvue_type_template_id_232f036e_render,
  LabelGeneratorDialogvue_type_template_id_232f036e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var labelgeneration_LabelGeneratorDialog = (LabelGeneratorDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeGeneratorFields.vue?vue&type=template&id=0c9c28ec&
var QrCodeGeneratorFieldsvue_type_template_id_0c9c28ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dialog-form',[_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Width","title":"QR code image width in pixels.","icon":"info","type":"number"},model:{value:(_vm.width),callback:function ($$v) {_vm.width=$$v},expression:"width"}},[(!_vm.$v.width.required && _vm.$v.$dirty)?_c('span',[_vm._v("Width is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('form-text',{attrs:{"required":"","label":"Height","title":"QR code image height in pixels.","icon":"info","type":"number"},model:{value:(_vm.height),callback:function ($$v) {_vm.height=$$v},expression:"height"}},[(!_vm.$v.height.required && _vm.$v.$dirty)?_c('span',[_vm._v("Height is required.")]):_vm._e()])],1),_c('v-flex',{attrs:{"xs6":""}},[_c('color-input-field',{attrs:{"label":"Foreground color","title":"QR code foreground color."},model:{value:(_vm.foregroundColor),callback:function ($$v) {_vm.foregroundColor=$$v},expression:"foregroundColor"}})],1),_c('v-flex',{attrs:{"xs6":""}},[_c('color-input-field',{attrs:{"label":"Background color","title":"QR code background color."},model:{value:(_vm.backgroundColor),callback:function ($$v) {_vm.backgroundColor=$$v},expression:"backgroundColor"}})],1)],1)}
var QrCodeGeneratorFieldsvue_type_template_id_0c9c28ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeGeneratorFields.vue?vue&type=template&id=0c9c28ec&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeGeneratorFields.vue?vue&type=script&lang=ts&





var QrCodeGeneratorFieldsvue_type_script_lang_ts_QrCodeGeneratorFields = /** @class */ (function (_super) {
    __extends(QrCodeGeneratorFields, _super);
    function QrCodeGeneratorFields() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 200;
        _this.height = 200;
        _this.foregroundColor = "333333FF";
        _this.backgroundColor = "FFFFFFFF";
        return _this;
    }
    /** Reset section content */
    QrCodeGeneratorFields.prototype.reset = function () {
        this.width = 200;
        this.height = 200;
        this.foregroundColor = "333333FF";
        this.backgroundColor = "FFFFFFFF";
        this.$v.$reset();
    };
    /** Perform validation */
    QrCodeGeneratorFields.prototype.validate = function () {
        this.$v.$touch();
        return !this.$v.$invalid;
    };
    /** Load form data from an object */
    QrCodeGeneratorFields.prototype.load = function (input) {
        this.width = input.width || 200;
        this.height = input.height || 200;
        this.foregroundColor = input.foregroundColor || "#333333FF";
        this.backgroundColor = input.backgroundColor || "#FFFFFFFF";
    };
    /** Save form data to an object */
    QrCodeGeneratorFields.prototype.save = function () {
        return {
            width: this.width,
            height: this.height,
            foregroundColor: this.foregroundColor,
            backgroundColor: this.backgroundColor
        };
    };
    QrCodeGeneratorFields = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { DialogForm: external_sitewhere_ide_components_["DialogForm"], FormText: external_sitewhere_ide_components_["FormText"], VFlex: lib_["VFlex"], ColorInputField: external_sitewhere_ide_components_["ColorInputField"] },
            validations: {
                width: {
                    required: validators["required"]
                },
                height: {
                    required: validators["required"]
                },
                foregroundColor: {
                    required: validators["required"]
                },
                backgroundColor: {
                    required: validators["required"]
                }
            }
        })
    ], QrCodeGeneratorFields);
    return QrCodeGeneratorFields;
}(external_sitewhere_ide_components_["DialogSection"]));
/* harmony default export */ var QrCodeGeneratorFieldsvue_type_script_lang_ts_ = (QrCodeGeneratorFieldsvue_type_script_lang_ts_QrCodeGeneratorFields);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeGeneratorFields.vue?vue&type=script&lang=ts&
 /* harmony default export */ var qrcode_QrCodeGeneratorFieldsvue_type_script_lang_ts_ = (QrCodeGeneratorFieldsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeGeneratorFields.vue





/* normalize component */

var QrCodeGeneratorFields_component = normalizeComponent(
  qrcode_QrCodeGeneratorFieldsvue_type_script_lang_ts_,
  QrCodeGeneratorFieldsvue_type_template_id_0c9c28ec_render,
  QrCodeGeneratorFieldsvue_type_template_id_0c9c28ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var qrcode_QrCodeGeneratorFields = (QrCodeGeneratorFields_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorDialog.vue?vue&type=script&lang=ts&







var QrCodeLabelGeneratorDialogvue_type_script_lang_ts_QrCodeLabelGeneratorDialog = /** @class */ (function (_super) {
    __extends(QrCodeLabelGeneratorDialog, _super);
    function QrCodeLabelGeneratorDialog() {
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
    Object.defineProperty(QrCodeLabelGeneratorDialog.prototype, "icon", {
        /** Get icon for dialog */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].LabelGeneration;
        },
        enumerable: true,
        configurable: true
    });
    /** Generate payload from UI */
    QrCodeLabelGeneratorDialog.prototype.generatePayload = function () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var config = {};
        Object.assign(config, this.style.save());
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        var payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    };
    /** Reset dialog contents */
    QrCodeLabelGeneratorDialog.prototype.reset = function () {
        if (this.style) {
            this.style.reset();
        }
        if (this.dialog) {
            this.dialog.reset();
        }
    };
    /** Load dialog from a given configuration */
    QrCodeLabelGeneratorDialog.prototype.load = function (config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.style) {
            this.style.load(config.configuration);
        }
    };
    /** Called after create button is clicked */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
    QrCodeLabelGeneratorDialog.prototype.onCreateClicked = function (e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.style.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], QrCodeLabelGeneratorDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], QrCodeLabelGeneratorDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], QrCodeLabelGeneratorDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], QrCodeLabelGeneratorDialog.prototype, "createLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], QrCodeLabelGeneratorDialog.prototype, "cancelLabel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], QrCodeLabelGeneratorDialog.prototype, "idsInUse", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], QrCodeLabelGeneratorDialog.prototype, "dialog", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], QrCodeLabelGeneratorDialog.prototype, "style", void 0);
    QrCodeLabelGeneratorDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                VTab: lib_["VTab"],
                VTabItem: lib_["VTabItem"],
                LabelGeneratorDialog: labelgeneration_LabelGeneratorDialog,
                QrCodeGeneratorFields: qrcode_QrCodeGeneratorFields
            }
        })
    ], QrCodeLabelGeneratorDialog);
    return QrCodeLabelGeneratorDialog;
}(external_sitewhere_ide_components_["DialogComponent"]));
/* harmony default export */ var QrCodeLabelGeneratorDialogvue_type_script_lang_ts_ = (QrCodeLabelGeneratorDialogvue_type_script_lang_ts_QrCodeLabelGeneratorDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var qrcode_QrCodeLabelGeneratorDialogvue_type_script_lang_ts_ = (QrCodeLabelGeneratorDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorDialog.vue





/* normalize component */

var QrCodeLabelGeneratorDialog_component = normalizeComponent(
  qrcode_QrCodeLabelGeneratorDialogvue_type_script_lang_ts_,
  QrCodeLabelGeneratorDialogvue_type_template_id_8e416970_render,
  QrCodeLabelGeneratorDialogvue_type_template_id_8e416970_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var qrcode_QrCodeLabelGeneratorDialog = (QrCodeLabelGeneratorDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorCreateDialog.vue?vue&type=script&lang=ts&




var QrCodeLabelGeneratorCreateDialogvue_type_script_lang_ts_QrCodeLabelGeneratorCreateDialog = /** @class */ (function (_super) {
    __extends(QrCodeLabelGeneratorCreateDialog, _super);
    function QrCodeLabelGeneratorCreateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    QrCodeLabelGeneratorCreateDialog.prototype.onPayload = function (payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    };
    /** Open dialog */
    QrCodeLabelGeneratorCreateDialog.prototype.openDialog = function (idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], QrCodeLabelGeneratorCreateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], QrCodeLabelGeneratorCreateDialog.prototype, "dialog", void 0);
    QrCodeLabelGeneratorCreateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                QrCodeLabelGeneratorDialog: qrcode_QrCodeLabelGeneratorDialog
            }
        })
    ], QrCodeLabelGeneratorCreateDialog);
    return QrCodeLabelGeneratorCreateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var QrCodeLabelGeneratorCreateDialogvue_type_script_lang_ts_ = (QrCodeLabelGeneratorCreateDialogvue_type_script_lang_ts_QrCodeLabelGeneratorCreateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorCreateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var qrcode_QrCodeLabelGeneratorCreateDialogvue_type_script_lang_ts_ = (QrCodeLabelGeneratorCreateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorCreateDialog.vue





/* normalize component */

var QrCodeLabelGeneratorCreateDialog_component = normalizeComponent(
  qrcode_QrCodeLabelGeneratorCreateDialogvue_type_script_lang_ts_,
  QrCodeLabelGeneratorCreateDialogvue_type_template_id_76209307_render,
  QrCodeLabelGeneratorCreateDialogvue_type_template_id_76209307_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var qrcode_QrCodeLabelGeneratorCreateDialog = (QrCodeLabelGeneratorCreateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a74f47f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorUpdateDialog.vue?vue&type=template&id=3166820c&
var QrCodeLabelGeneratorUpdateDialogvue_type_template_id_3166820c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('qr-code-label-generator-dialog',{ref:"dialog",attrs:{"title":"Update QR Code Label Generator","width":"700","createLabel":"Update","cancelLabel":"Cancel","idsInUse":_vm.idsInUse,"tenantId":_vm.tenantId},on:{"payload":_vm.onPayload}})}
var QrCodeLabelGeneratorUpdateDialogvue_type_template_id_3166820c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorUpdateDialog.vue?vue&type=template&id=3166820c&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorUpdateDialog.vue?vue&type=script&lang=ts&




var QrCodeLabelGeneratorUpdateDialogvue_type_script_lang_ts_QrCodeLabelGeneratorUpdateDialog = /** @class */ (function (_super) {
    __extends(QrCodeLabelGeneratorUpdateDialog, _super);
    function QrCodeLabelGeneratorUpdateDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalId = null;
        _this.idsInUse = [];
        return _this;
    }
    /** Emit payload */
    QrCodeLabelGeneratorUpdateDialog.prototype.onPayload = function (config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    };
    /** Open dialog */
    QrCodeLabelGeneratorUpdateDialog.prototype.openDialog = function (config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], QrCodeLabelGeneratorUpdateDialog.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], QrCodeLabelGeneratorUpdateDialog.prototype, "dialog", void 0);
    QrCodeLabelGeneratorUpdateDialog = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                QrCodeLabelGeneratorDialog: qrcode_QrCodeLabelGeneratorDialog
            }
        })
    ], QrCodeLabelGeneratorUpdateDialog);
    return QrCodeLabelGeneratorUpdateDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var QrCodeLabelGeneratorUpdateDialogvue_type_script_lang_ts_ = (QrCodeLabelGeneratorUpdateDialogvue_type_script_lang_ts_QrCodeLabelGeneratorUpdateDialog);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorUpdateDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var qrcode_QrCodeLabelGeneratorUpdateDialogvue_type_script_lang_ts_ = (QrCodeLabelGeneratorUpdateDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/generators/qrcode/QrCodeLabelGeneratorUpdateDialog.vue





/* normalize component */

var QrCodeLabelGeneratorUpdateDialog_component = normalizeComponent(
  qrcode_QrCodeLabelGeneratorUpdateDialogvue_type_script_lang_ts_,
  QrCodeLabelGeneratorUpdateDialogvue_type_template_id_3166820c_render,
  QrCodeLabelGeneratorUpdateDialogvue_type_template_id_3166820c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var qrcode_QrCodeLabelGeneratorUpdateDialog = (QrCodeLabelGeneratorUpdateDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorsTable.vue?vue&type=script&lang=ts&








var LabelGeneratorsTablevue_type_script_lang_ts_LabelGeneratorTable = /** @class */ (function (_super) {
    __extends(LabelGeneratorTable, _super);
    function LabelGeneratorTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headers = [
            { text: "Id", value: "id" },
            { text: "Type", value: "type" },
            { text: "", value: "delete" }
        ];
        return _this;
    }
    Object.defineProperty(LabelGeneratorTable.prototype, "icon", {
        /** Get page icon */
        get: function () {
            return external_sitewhere_ide_common_["MicroserviceIcon"].LabelGeneration;
        },
        enumerable: true,
        configurable: true
    });
    /** Get list of ids already in use */
    LabelGeneratorTable.prototype.findIdsInUse = function (exclude) {
        var ids = [];
        if (this.generators) {
            this.generators.forEach(function (generator) {
                if (generator.id != exclude) {
                    ids.push(generator.id);
                }
            });
        }
        return ids;
    };
    /** Get label generator index based on id */
    LabelGeneratorTable.prototype.getLabelGeneratorIndex = function (id) {
        var match = null;
        if (this.generators) {
            this.generators.forEach(function (dest, index) {
                if (dest.id === id) {
                    match = index;
                }
            });
        }
        return match;
    };
    /** Get a label generator by id */
    LabelGeneratorTable.prototype.getLabelGeneratorById = function (id) {
        var index = this.getLabelGeneratorIndex(id);
        if (this.generators && index != null) {
            return this.generators[index];
        }
        return null;
    };
    Object.defineProperty(LabelGeneratorTable.prototype, "displayLabelGenerators", {
        /** Get label generators as a sorted array */
        get: function () {
            var all = [];
            if (this.generators) {
                this.generators.forEach(function (generator) {
                    var meta = {
                        id: generator.id,
                        type: generator.type
                    };
                    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                    var config = generator.configuration;
                    all.push({ meta: meta, config: config });
                });
            }
            all.sort(function (a, b) {
                return a.meta.id.localeCompare(b.meta.id);
            });
            return all;
        },
        enumerable: true,
        configurable: true
    });
    /** Add new label generator */
    LabelGeneratorTable.prototype.onAddLabelGenerator = function () {
        this.chooser.openChooser();
    };
    /** Called to create a new label generator based on type */
    LabelGeneratorTable.prototype.onLabelGeneratorCreate = function (id) {
        var idsInUse = this.findIdsInUse();
        if (id == "qr-code") {
            this.qrcodeCreate.openDialog(idsInUse);
        }
    };
    /** Called when label generator is added */
    LabelGeneratorTable.prototype.onLabelGeneratorAdded = function (config) {
        if (this.generators) {
            this.generators.push(config);
        }
        this.$emit("create", config);
    };
    /** Open label generator by id */
    LabelGeneratorTable.prototype.onOpenLabelGenerator = function (id) {
        var config = this.getLabelGeneratorById(id);
        var idsInUse = this.findIdsInUse(id);
        if (config) {
            if (config.type === "qr-code") {
                this.qrcodeUpdate.openDialog(config, idsInUse);
            }
        }
    };
    /** Called when label generator is updated */
    LabelGeneratorTable.prototype.onLabelGeneratorUpdated = function (originalId, config) {
        var index = this.getLabelGeneratorIndex(originalId);
        if (this.generators && index != null) {
            external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.generators, index, config);
        }
        this.$emit("update", originalId, config);
    };
    /** Delete label generator by id */
    LabelGeneratorTable.prototype.onDeleteLabelGenerator = function (id) {
        var index = this.getLabelGeneratorIndex(id);
        if (this.generators && index != null) {
            this.generators.splice(index, 1);
        }
        this.$emit("delete", id);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorTable.prototype, "tenantId", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGeneratorTable.prototype, "generators", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], LabelGeneratorTable.prototype, "chooser", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], LabelGeneratorTable.prototype, "qrcodeCreate", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Ref"])()
    ], LabelGeneratorTable.prototype, "qrcodeUpdate", void 0);
    LabelGeneratorTable = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                ContentSection: external_sitewhere_ide_components_["ContentSection"],
                DatatableSection: external_sitewhere_ide_components_["DatatableSection"],
                DatatableLink: external_sitewhere_ide_components_["DatatableLink"],
                ContentDeleteIcon: external_sitewhere_ide_components_["ContentDeleteIcon"],
                ContentLink: external_sitewhere_ide_components_["ContentLink"],
                SectionOverview: external_sitewhere_ide_components_["SectionOverview"],
                NewLabelGeneratorChooser: labelgeneration_NewLabelGeneratorChooser,
                QrCodeLabelGeneratorCreateDialog: qrcode_QrCodeLabelGeneratorCreateDialog,
                QrCodeLabelGeneratorUpdateDialog: qrcode_QrCodeLabelGeneratorUpdateDialog
            }
        })
    ], LabelGeneratorTable);
    return LabelGeneratorTable;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var LabelGeneratorsTablevue_type_script_lang_ts_ = (LabelGeneratorsTablevue_type_script_lang_ts_LabelGeneratorTable);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorsTable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var labelgeneration_LabelGeneratorsTablevue_type_script_lang_ts_ = (LabelGeneratorsTablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGeneratorsTable.vue





/* normalize component */

var LabelGeneratorsTable_component = normalizeComponent(
  labelgeneration_LabelGeneratorsTablevue_type_script_lang_ts_,
  LabelGeneratorsTablevue_type_template_id_43bb51a9_render,
  LabelGeneratorsTablevue_type_template_id_43bb51a9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LabelGeneratorsTable = (LabelGeneratorsTable_component.exports);
// CONCATENATED MODULE: ./node_modules/ts-loader??ref--13-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/tenantengines/labelgeneration/LabelGenerationPlugin.vue?vue&type=script&lang=ts&





var LabelGenerationPluginvue_type_script_lang_ts_LabelGenerationPlugin = /** @class */ (function (_super) {
    __extends(LabelGenerationPlugin, _super);
    function LabelGenerationPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LabelGenerationPlugin.prototype, "tenantId", {
        /** Tenant id */
        get: function () {
            return this.configuration ? this.configuration.tenant.token : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelGenerationPlugin.prototype, "labelGenerationConfiguration", {
        /** Get tenant configuration for label generation */
        get: function () {
            return this.configuration ? this.configuration.tenantConfiguration : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelGenerationPlugin.prototype, "labelGenerators", {
        /** Get label generators list */
        get: function () {
            return this.labelGenerationConfiguration
                ? this.labelGenerationConfiguration.generators
                : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Handle label generator created */
    LabelGenerationPlugin.prototype.onLabelGeneratorCreated = function (
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config) {
        this.markDirty();
    };
    /** Handle label generator updated */
    LabelGenerationPlugin.prototype.onLabelGeneratorUpdated = function (
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    originalId, 
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    config) {
        this.markDirty();
    };
    /** Handle label generator deleted */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    LabelGenerationPlugin.prototype.onLabelGeneratorDeleted = function (id) {
        this.markDirty();
    };
    /** Mark data as having been updated */
    LabelGenerationPlugin.prototype.markDirty = function () {
        this.$emit("dirty");
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], LabelGenerationPlugin.prototype, "configuration", void 0);
    LabelGenerationPlugin = __decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: {
                TenantEnginePlugin: tenantengines_TenantEnginePlugin,
                LabelGeneratorsTable: LabelGeneratorsTable
            }
        })
    ], LabelGenerationPlugin);
    return LabelGenerationPlugin;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var LabelGenerationPluginvue_type_script_lang_ts_ = (LabelGenerationPluginvue_type_script_lang_ts_LabelGenerationPlugin);

// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGenerationPlugin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var labelgeneration_LabelGenerationPluginvue_type_script_lang_ts_ = (LabelGenerationPluginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/plugins/tenantengines/labelgeneration/LabelGenerationPlugin.vue





/* normalize component */

var LabelGenerationPlugin_component = normalizeComponent(
  labelgeneration_LabelGenerationPluginvue_type_script_lang_ts_,
  LabelGenerationPluginvue_type_template_id_34316d8c_render,
  LabelGenerationPluginvue_type_template_id_34316d8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var labelgeneration_LabelGenerationPlugin = (LabelGenerationPlugin_component.exports);
// CONCATENATED MODULE: ./src/index.ts



















/** Common */

/** Form elements */

/** Plugins */


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fe9e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2287");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("07232b7e", content, true, {"sourceMap":false,"shadowMode":false});

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


/***/ }),

/***/ "ff99":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8783");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6f5b31fb", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ });
//# sourceMappingURL=sitewhere-admin-ui-plugins.common.js.map