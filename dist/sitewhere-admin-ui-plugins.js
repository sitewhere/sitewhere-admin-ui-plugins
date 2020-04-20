/**
  * SiteWhere Admin UI Plugins v3.0.0-alpha.1
  * (c) 2020 SiteWhere LLC
  * @license CPAL-1.0
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('sitewhere-ide-common')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue', 'sitewhere-ide-common'], factory) :
    (global = global || self, factory(global.SiteWhereAdminUiPlugins = {}, global.Vue, global.sitewhereIdeCommon));
}(this, (function (exports, Vue, sitewhereIdeCommon) { 'use strict';

    Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var withParamsBrowser = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.withParams = void 0;

    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    var root = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : {};

    var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
      if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
        return maybeValidator;
      }

      return paramsOrClosure(function () {});
    };

    var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
    exports.withParams = withParams;
    });

    unwrapExports(withParamsBrowser);
    var withParamsBrowser_1 = withParamsBrowser.withParams;

    var params = createCommonjsModule(function (module, exports) {

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
    });

    unwrapExports(params);
    var params_1 = params.pushParams;
    var params_2 = params.popParams;
    var params_3 = params.withParams;
    var params_4 = params._setTarget;
    var params_5 = params.target;

    var withParams_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var withParams = process.env.BUILD === 'web' ? withParamsBrowser.withParams : params.withParams;
    var _default = withParams;
    exports.default = _default;
    });

    unwrapExports(withParams_1);

    var common = createCommonjsModule(function (module, exports) {

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

    var _withParams = _interopRequireDefault(withParams_1);

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
    });

    unwrapExports(common);
    var common_1 = common.regex;
    var common_2 = common.ref;
    var common_3 = common.len;
    var common_4 = common.req;

    var alpha = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = (0, common.regex)('alpha', /^[a-zA-Z]*$/);

    exports.default = _default;
    });

    unwrapExports(alpha);

    var alphaNum = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = (0, common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

    exports.default = _default;
    });

    unwrapExports(alphaNum);

    var numeric = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = (0, common.regex)('numeric', /^[0-9]*$/);

    exports.default = _default;
    });

    unwrapExports(numeric);

    var between = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(min, max) {
      return (0, common.withParams)({
        type: 'between',
        min: min,
        max: max
      }, function (value) {
        return !(0, common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
      });
    };

    exports.default = _default;
    });

    unwrapExports(between);

    var email = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

    var _default = (0, common.regex)('email', emailRegex);

    exports.default = _default;
    });

    unwrapExports(email);

    var ipAddress = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = (0, common.withParams)({
      type: 'ipAddress'
    }, function (value) {
      if (!(0, common.req)(value)) {
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
    });

    unwrapExports(ipAddress);

    var macAddress = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default() {
      var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
      return (0, common.withParams)({
        type: 'macAddress'
      }, function (value) {
        if (!(0, common.req)(value)) {
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
    });

    unwrapExports(macAddress);

    var maxLength = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(length) {
      return (0, common.withParams)({
        type: 'maxLength',
        max: length
      }, function (value) {
        return !(0, common.req)(value) || (0, common.len)(value) <= length;
      });
    };

    exports.default = _default;
    });

    unwrapExports(maxLength);

    var minLength = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(length) {
      return (0, common.withParams)({
        type: 'minLength',
        min: length
      }, function (value) {
        return !(0, common.req)(value) || (0, common.len)(value) >= length;
      });
    };

    exports.default = _default;
    });

    unwrapExports(minLength);

    var required = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = (0, common.withParams)({
      type: 'required'
    }, function (value) {
      if (typeof value === 'string') {
        return (0, common.req)(value.trim());
      }

      return (0, common.req)(value);
    });

    exports.default = _default;
    });

    unwrapExports(required);

    var requiredIf = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(prop) {
      return (0, common.withParams)({
        type: 'requiredIf',
        prop: prop
      }, function (value, parentVm) {
        return (0, common.ref)(prop, this, parentVm) ? (0, common.req)(value) : true;
      });
    };

    exports.default = _default;
    });

    unwrapExports(requiredIf);

    var requiredUnless = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(prop) {
      return (0, common.withParams)({
        type: 'requiredUnless',
        prop: prop
      }, function (value, parentVm) {
        return !(0, common.ref)(prop, this, parentVm) ? (0, common.req)(value) : true;
      });
    };

    exports.default = _default;
    });

    unwrapExports(requiredUnless);

    var sameAs = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(equalTo) {
      return (0, common.withParams)({
        type: 'sameAs',
        eq: equalTo
      }, function (value, parentVm) {
        return value === (0, common.ref)(equalTo, this, parentVm);
      });
    };

    exports.default = _default;
    });

    unwrapExports(sameAs);

    var url = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    var _default = (0, common.regex)('url', urlRegex);

    exports.default = _default;
    });

    unwrapExports(url);

    var or = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default() {
      for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
        validators[_key] = arguments[_key];
      }

      return (0, common.withParams)({
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
    });

    unwrapExports(or);

    var and = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default() {
      for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
        validators[_key] = arguments[_key];
      }

      return (0, common.withParams)({
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
    });

    unwrapExports(and);

    var not = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(validator) {
      return (0, common.withParams)({
        type: 'not'
      }, function (value, vm) {
        return !(0, common.req)(value) || !validator.call(this, value, vm);
      });
    };

    exports.default = _default;
    });

    unwrapExports(not);

    var minValue = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(min) {
      return (0, common.withParams)({
        type: 'minValue',
        min: min
      }, function (value) {
        return !(0, common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
      });
    };

    exports.default = _default;
    });

    unwrapExports(minValue);

    var maxValue = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = function _default(max) {
      return (0, common.withParams)({
        type: 'maxValue',
        max: max
      }, function (value) {
        return !(0, common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
      });
    };

    exports.default = _default;
    });

    unwrapExports(maxValue);

    var integer = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = (0, common.regex)('integer', /(^[0-9]*$)|(^-[0-9]+$)/);

    exports.default = _default;
    });

    unwrapExports(integer);

    var decimal = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;



    var _default = (0, common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

    exports.default = _default;
    });

    unwrapExports(decimal);

    var validators = createCommonjsModule(function (module, exports) {

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

    var _alpha = _interopRequireDefault(alpha);

    var _alphaNum = _interopRequireDefault(alphaNum);

    var _numeric = _interopRequireDefault(numeric);

    var _between = _interopRequireDefault(between);

    var _email = _interopRequireDefault(email);

    var _ipAddress = _interopRequireDefault(ipAddress);

    var _macAddress = _interopRequireDefault(macAddress);

    var _maxLength = _interopRequireDefault(maxLength);

    var _minLength = _interopRequireDefault(minLength);

    var _required = _interopRequireDefault(required);

    var _requiredIf = _interopRequireDefault(requiredIf);

    var _requiredUnless = _interopRequireDefault(requiredUnless);

    var _sameAs = _interopRequireDefault(sameAs);

    var _url = _interopRequireDefault(url);

    var _or = _interopRequireDefault(or);

    var _and = _interopRequireDefault(and);

    var _not = _interopRequireDefault(not);

    var _minValue = _interopRequireDefault(minValue);

    var _maxValue = _interopRequireDefault(maxValue);

    var _integer = _interopRequireDefault(integer);

    var _decimal = _interopRequireDefault(decimal);

    var helpers = _interopRequireWildcard(common);

    exports.helpers = helpers;

    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    });

    unwrapExports(validators);
    var validators_1 = validators.required;
    var validators_2 = validators.helpers;

    var Postgres95Fields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Boolean)
        ], Postgres95Fields.prototype, "readonly", void 0);
        Postgres95Fields = __decorate([
            sitewhereIdeCommon.Component({
                validations: {
                    hostname: {
                        required: validators_1
                    }
                }
            })
        ], Postgres95Fields);
        return Postgres95Fields;
    }(sitewhereIdeCommon.DialogSection));

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
        if (typeof shadowMode !== 'boolean') {
            createInjectorSSR = createInjector;
            createInjector = shadowMode;
            shadowMode = false;
        }
        // Vue.extend constructor export interop.
        const options = typeof script === 'function' ? script.options : script;
        // render functions
        if (template && template.render) {
            options.render = template.render;
            options.staticRenderFns = template.staticRenderFns;
            options._compiled = true;
            // functional template
            if (isFunctionalTemplate) {
                options.functional = true;
            }
        }
        // scopedId
        if (scopeId) {
            options._scopeId = scopeId;
        }
        let hook;
        if (moduleIdentifier) {
            // server build
            hook = function (context) {
                // 2.3 injection
                context =
                    context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (style) {
                    style.call(this, createInjectorSSR(context));
                }
                // register component module identifier for async chunk inference
                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
        }
        else if (style) {
            hook = shadowMode
                ? function (context) {
                    style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
                }
                : function (context) {
                    style.call(this, createInjector(context));
                };
        }
        if (hook) {
            if (options.functional) {
                // register for functional component in vue file
                const originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            }
            else {
                // inject component registration as beforeCreate hook
                const existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
        return script;
    }

    const isOldIE = typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function createInjector(context) {
        return (id, style) => addStyle(id, style);
    }
    let HEAD;
    const styles = {};
    function addStyle(id, css) {
        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
        if (!style.ids.has(id)) {
            style.ids.add(id);
            let code = css.source;
            if (css.map) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                // http://stackoverflow.com/a/26603875
                code +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                        ' */';
            }
            if (!style.element) {
                style.element = document.createElement('style');
                style.element.type = 'text/css';
                if (css.media)
                    style.element.setAttribute('media', css.media);
                if (HEAD === undefined) {
                    HEAD = document.head || document.getElementsByTagName('head')[0];
                }
                HEAD.appendChild(style.element);
            }
            if ('styleSheet' in style.element) {
                style.styles.push(code);
                style.element.styleSheet.cssText = style.styles
                    .filter(Boolean)
                    .join('\n');
            }
            else {
                const index = style.ids.size - 1;
                const textNode = document.createTextNode(code);
                const nodes = style.element.childNodes;
                if (nodes[index])
                    style.element.removeChild(nodes[index]);
                if (nodes.length)
                    style.element.insertBefore(textNode, nodes[index]);
                else
                    style.element.appendChild(textNode);
            }
        }
    }

    /* script */
    const __vue_script__ = Postgres95Fields;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs9: "" } },
            [
              _c("sw-form-text", {
                staticClass: "mr-3",
                attrs: {
                  required: "",
                  readonly: _vm.readonly,
                  label: "Hostname",
                  title: "Hostname of PostgreSQL server.",
                  icon: "fa-server"
                },
                model: {
                  value: _vm.hostname,
                  callback: function($$v) {
                    _vm.hostname = $$v;
                  },
                  expression: "hostname"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs3: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  required: "",
                  readonly: _vm.readonly,
                  label: "Port",
                  title: "Port for PostgreSQL server.",
                  type: "number"
                },
                model: {
                  value: _vm.port,
                  callback: function($$v) {
                    _vm.port = $$v;
                  },
                  expression: "port"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  required: "",
                  readonly: _vm.readonly,
                  label: "Max Connections",
                  title: "Maximum number of connections to server.",
                  type: "number",
                  icon: "fa-stream"
                },
                model: {
                  value: _vm.maxConnections,
                  callback: function($$v) {
                    _vm.maxConnections = $$v;
                  },
                  expression: "maxConnections"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c("sw-form-text", {
                staticClass: "mr-3",
                attrs: {
                  required: "",
                  readonly: _vm.readonly,
                  label: "Username",
                  title: "Username.",
                  icon: "fa-user"
                },
                model: {
                  value: _vm.username,
                  callback: function($$v) {
                    _vm.username = $$v;
                  },
                  expression: "username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  required: "",
                  readonly: _vm.readonly,
                  label: "Password",
                  title: "Password.",
                  icon: "fa-lock",
                  type: "password"
                },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v;
                  },
                  expression: "password"
                }
              })
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = function (inject) {
        if (!inject) return
        inject("data-v-3eb6c03a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Postgres95Fields.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__ = "data-v-3eb6c03a";
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__ = normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        false,
        createInjector,
        undefined,
        undefined
      );

    var DatastoreDialog = /** @class */ (function (_super) {
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
        DatastoreDialog.prototype.onScopeChanged = function (updated) {
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
        DatastoreDialog.prototype.onReferenceChanged = function (updated) {
            this.reloadDetails();
        };
        Object.defineProperty(DatastoreDialog.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.NavigationIcon.Datastore;
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
        DatastoreDialog.prototype.getDatastoreConfiguration = function () {
            if (this.isLocalScope) {
                return this.configuration;
            }
            else if (this.reference) {
                var global = this.findGlobalDefinition(this.reference);
                return global ? global.configuration : {};
            }
            else {
                console.log("neither local scope or reference!");
                return {};
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
        DatastoreDialog.prototype.generateConfiguration = function () {
            var configuration = {};
            Object.assign(configuration, this.$refs.details.save());
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
                var configuration = this.generateConfiguration();
                return { type: this.type, configuration: configuration };
            }
        };
        /** Reset dialog content to default */
        DatastoreDialog.prototype.reset = function () {
            if (this.$refs.details) {
                this.$refs.details.reset();
            }
            this.$refs.dialog.setActiveTab(0);
        };
        /** Load data from an existing configuration */
        DatastoreDialog.prototype.load = function (payload) {
            this.reset();
            this.type = payload.type || "postgres95";
            this.configuration =
                payload.configuration || {};
            this.reference = payload.reference;
            this.scope = this.reference ? 1 : 0;
            console.log("reference", this.reference);
            this.reloadDetails();
        };
        /** Reload details panel based on updated configuration */
        DatastoreDialog.prototype.reloadDetails = function () {
            var config = this.getDatastoreConfiguration();
            if (this.$refs.details && config) {
                this.$refs.details.load(config);
            }
        };
        // Called after create button is clicked.
        DatastoreDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.details.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], DatastoreDialog.prototype, "instance", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], DatastoreDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], DatastoreDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Watch("scope"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], DatastoreDialog.prototype, "onScopeChanged", null);
        __decorate([
            sitewhereIdeCommon.Watch("reference"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], DatastoreDialog.prototype, "onReferenceChanged", null);
        DatastoreDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: { Postgres95Fields: __vue_component__ }
            })
        ], DatastoreDialog);
        return DatastoreDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$1 = DatastoreDialog;

    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-base-dialog",
        {
          ref: "dialog",
          attrs: {
            icon: _vm.icon,
            title: _vm.title,
            width: "550",
            loaded: true,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: "Cancel"
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "sw-dialog-header",
            { staticClass: "pl-3 pr-3 pt-1" },
            [
              _c(
                "v-layout",
                {
                  staticClass: "pl-2 pr-2 pt-0 pb-0",
                  attrs: { row: "", wrap: "" }
                },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs4: "" } },
                    [
                      _c(
                        "v-btn-toggle",
                        {
                          staticClass: "mt-3",
                          attrs: { mandatory: "" },
                          model: {
                            value: _vm.scope,
                            callback: function($$v) {
                              _vm.scope = $$v;
                            },
                            expression: "scope"
                          }
                        },
                        [
                          _c("v-btn", { attrs: { flat: "" } }, [_vm._v("Local")]),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { flat: "" } }, [_vm._v("Global")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.isLocalScope
                    ? _c(
                        "v-flex",
                        { attrs: { xs8: "" } },
                        [
                          _c("v-select", {
                            staticClass: "ml-3",
                            attrs: {
                              required: true,
                              title: "Choose database type",
                              label: "Database Type",
                              items: _vm.databaseTypes,
                              "item-text": "text",
                              "item-value": "value",
                              "prepend-icon": "fa-database",
                              placeholder: " "
                            },
                            model: {
                              value: _vm.type,
                              callback: function($$v) {
                                _vm.type = $$v;
                              },
                              expression: "type"
                            }
                          })
                        ],
                        1
                      )
                    : _c(
                        "v-flex",
                        { attrs: { xs8: "" } },
                        [
                          _c("v-select", {
                            staticClass: "ml-3",
                            attrs: {
                              required: true,
                              title: "Choose global database reference",
                              label: "Global Reference",
                              items: _vm.globalDatabases,
                              "item-text": "text",
                              "item-value": "value",
                              "prepend-icon": "fa-database",
                              placeholder: " "
                            },
                            model: {
                              value: _vm.reference,
                              callback: function($$v) {
                                _vm.reference = $$v;
                              },
                              expression: "reference"
                            }
                          })
                        ],
                        1
                      )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider", { staticClass: "mb-2" }),
          _vm._v(" "),
          _vm.isPostgres95
            ? _c("postgres-95-fields", {
                ref: "details",
                attrs: { readonly: _vm.isGlobalScope }
              })
            : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      const __vue_inject_styles__$1 = function (inject) {
        if (!inject) return
        inject("data-v-5621e09b_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DatastoreDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$1 = "data-v-5621e09b";
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$1 = normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        false,
        createInjector,
        undefined,
        undefined
      );

    var DatastoreCreateDialog = /** @class */ (function (_super) {
        __extends(DatastoreCreateDialog, _super);
        function DatastoreCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        DatastoreCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        DatastoreCreateDialog.prototype.openDialog = function () {
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], DatastoreCreateDialog.prototype, "instance", void 0);
        DatastoreCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    DatastoreDialog: __vue_component__$1
                }
            })
        ], DatastoreCreateDialog);
        return DatastoreCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$2 = DatastoreCreateDialog;

    /* template */
    var __vue_render__$2 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("datastore-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create Datastore",
          createLabel: "Create",
          instance: _vm.instance
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$2 = [];
    __vue_render__$2._withStripped = true;

      /* style */
      const __vue_inject_styles__$2 = function (inject) {
        if (!inject) return
        inject("data-v-509d7c0c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DatastoreCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$2 = "data-v-509d7c0c";
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$2 = normalizeComponent(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        false,
        createInjector,
        undefined,
        undefined
      );

    var DatastoreUpdateDialog = /** @class */ (function (_super) {
        __extends(DatastoreUpdateDialog, _super);
        function DatastoreUpdateDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** Emit payload */
        DatastoreUpdateDialog.prototype.onPayload = function (definition) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", definition);
        };
        /** Open dialog */
        DatastoreUpdateDialog.prototype.openDialog = function (definition) {
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(definition);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], DatastoreUpdateDialog.prototype, "instance", void 0);
        DatastoreUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    DatastoreDialog: __vue_component__$1
                }
            })
        ], DatastoreUpdateDialog);
        return DatastoreUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$3 = DatastoreUpdateDialog;

    /* template */
    var __vue_render__$3 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("datastore-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update Datastore",
          createLabel: "Update",
          instance: _vm.instance
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$3 = [];
    __vue_render__$3._withStripped = true;

      /* style */
      const __vue_inject_styles__$3 = function (inject) {
        if (!inject) return
        inject("data-v-01347b36_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DatastoreUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$3 = "data-v-01347b36";
      /* module identifier */
      const __vue_module_identifier__$3 = undefined;
      /* functional template */
      const __vue_is_functional_template__$3 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$3 = normalizeComponent(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        false,
        createInjector,
        undefined,
        undefined
      );

    var Postgres95Summary = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], Postgres95Summary.prototype, "configuration", void 0);
        Postgres95Summary = __decorate([
            sitewhereIdeCommon.Component({
                components: {}
            })
        ], Postgres95Summary);
        return Postgres95Summary;
    }(Vue));

    /* script */
    const __vue_script__$4 = Postgres95Summary;

    /* template */
    var __vue_render__$4 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c("sw-content-field", { attrs: { name: "type", value: "PostgreSQL" } }),
          _vm._v(" "),
          _c("sw-content-field", {
            attrs: { alt: true, name: "dialect", value: "postgres95" }
          }),
          _vm._v(" "),
          _c("sw-content-field", {
            attrs: { name: "hostname", value: _vm.hostname }
          }),
          _vm._v(" "),
          _c("sw-content-field", {
            attrs: { alt: true, name: "port", value: _vm.port }
          }),
          _vm._v(" "),
          _c("sw-content-field", {
            attrs: { name: "username", value: _vm.username }
          }),
          _vm._v(" "),
          _c("sw-content-field", {
            attrs: {
              alt: true,
              name: "password",
              password: true,
              value: _vm.password
            }
          }),
          _vm._v(" "),
          _c("sw-content-field", {
            attrs: { name: "max connections", value: _vm.maxConnections }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$4 = [];
    __vue_render__$4._withStripped = true;

      /* style */
      const __vue_inject_styles__$4 = function (inject) {
        if (!inject) return
        inject("data-v-0ce4ebed_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Postgres95Summary.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$4 = "data-v-0ce4ebed";
      /* module identifier */
      const __vue_module_identifier__$4 = undefined;
      /* functional template */
      const __vue_is_functional_template__$4 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$4 = normalizeComponent(
        { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
        __vue_inject_styles__$4,
        __vue_script__$4,
        __vue_scope_id__$4,
        __vue_is_functional_template__$4,
        __vue_module_identifier__$4,
        false,
        createInjector,
        undefined,
        undefined
      );

    var DatastoreSelector = /** @class */ (function (_super) {
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
            this.$refs.create.openDialog();
        };
        /** Called to create datastore based on UI data */
        DatastoreSelector.prototype.onDatastoreCreate = function (definition) {
            this.$emit("create", definition);
        };
        /** Update datastore */
        DatastoreSelector.prototype.onUpdateDatastore = function () {
            this.$refs.update.openDialog(this.datastore);
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], DatastoreSelector.prototype, "datastore", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], DatastoreSelector.prototype, "instance", void 0);
        DatastoreSelector = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    DatastoreCreateDialog: __vue_component__$2,
                    DatastoreUpdateDialog: __vue_component__$3,
                    Postgres95Summary: __vue_component__$4
                }
            })
        ], DatastoreSelector);
        return DatastoreSelector;
    }(Vue));

    /* script */
    const __vue_script__$5 = DatastoreSelector;

    /* template */
    var __vue_render__$5 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          _vm.datastore
            ? _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _vm.datastoreReference
                    ? _c(
                        "v-card",
                        { staticClass: "mb-3", attrs: { flat: "" } },
                        [
                          _c(
                            "v-icon",
                            { staticClass: "mr-2", attrs: { small: "" } },
                            [_vm._v("fa-globe")]
                          ),
                          _vm._v("Configured globally as\n      "),
                          _c("a", { staticStyle: { color: "#2255cc" } }, [
                            _vm._v(_vm._s(_vm.datastoreReference))
                          ]),
                          _vm._v(".\n    ")
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isPostgres95
                    ? _c("postgres-95-summary", {
                        attrs: { configuration: _vm.configuration }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("sw-content-link", {
                    staticClass: "mt-3",
                    attrs: { icon: "fa-edit", text: "Update datastore settings" },
                    on: { linkClicked: _vm.onUpdateDatastore }
                  }),
                  _vm._v(" "),
                  _c("sw-content-link", {
                    attrs: { icon: "fa-trash", text: "Unset datastore" },
                    on: { linkClicked: _vm.onUnsetDatastore }
                  })
                ],
                1
              )
            : _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("sw-content-warning", {
                    attrs: {
                      text:
                        "No datastore is set. This will cause\n  tenant engine startup to fail!"
                    }
                  }),
                  _vm._v(" "),
                  _c("sw-content-link", {
                    staticClass: "mt-3",
                    attrs: {
                      icon: "fa-plus-circle",
                      text: "Add datastore information."
                    },
                    on: { linkClicked: _vm.onAddDatastore }
                  })
                ],
                1
              ),
          _vm._v(" "),
          _c("datastore-create-dialog", {
            ref: "create",
            attrs: { instance: _vm.instance },
            on: { create: _vm.onDatastoreCreate }
          }),
          _vm._v(" "),
          _c("datastore-update-dialog", {
            ref: "update",
            attrs: { instance: _vm.instance },
            on: { update: _vm.onDatastoreUpdate }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$5 = [];
    __vue_render__$5._withStripped = true;

      /* style */
      const __vue_inject_styles__$5 = function (inject) {
        if (!inject) return
        inject("data-v-a05ced16_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DatastoreSelector.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$5 = "data-v-a05ced16";
      /* module identifier */
      const __vue_module_identifier__$5 = undefined;
      /* functional template */
      const __vue_is_functional_template__$5 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$5 = normalizeComponent(
        { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
        __vue_inject_styles__$5,
        __vue_script__$5,
        __vue_scope_id__$5,
        __vue_is_functional_template__$5,
        __vue_module_identifier__$5,
        false,
        createInjector,
        undefined,
        undefined
      );

    var TenantEnginePlugin = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], TenantEnginePlugin.prototype, "configuration", void 0);
        TenantEnginePlugin = __decorate([
            sitewhereIdeCommon.Component({
                components: {}
            })
        ], TenantEnginePlugin);
        return TenantEnginePlugin;
    }(Vue));

    /* script */
    const __vue_script__$6 = TenantEnginePlugin;

    /* template */
    var __vue_render__$6 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "v-card",
        { staticStyle: { height: "100%" }, attrs: { flat: "" } },
        [
          _c("v-card-text", [
            _c("div", { staticClass: "flex-rows" }, [
              _vm.microservice && _vm.tenant
                ? _c(
                    "div",
                    { staticClass: "plugin-header" },
                    [
                      _vm._t("header", [
                        _c("sw-page-header", { attrs: { text: _vm.header } })
                      ])
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "plugin-content" }, [_vm._t("default")], 2),
              _vm._v(" "),
              _c("div", { staticClass: "plugin-footer" }, [_vm._t("footer")], 2)
            ])
          ]),
          _vm._v(" "),
          _vm._t("dialogs")
        ],
        2
      )
    };
    var __vue_staticRenderFns__$6 = [];
    __vue_render__$6._withStripped = true;

      /* style */
      const __vue_inject_styles__$6 = function (inject) {
        if (!inject) return
        inject("data-v-0a4101e6_0", { source: "\n.flex-rows[data-v-0a4101e6] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\n}\n.plugin-header[data-v-0a4101e6] {\r\n  flex: 0;\n}\n.plugin-content[data-v-0a4101e6] {\r\n  flex: 1;\r\n  background-color: #fff;\r\n  overflow-y: auto;\n}\n.plugin-footer[data-v-0a4101e6] {\r\n  flex: 0;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\Derek\\Documents\\GitHub\\sitewhere-admin-ui-plugins\\src\\components\\plugins\\tenantengines\\TenantEnginePlugin.vue"],"names":[],"mappings":";AAyDA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AACA;AACA;EACA,OAAA;AACA;AACA;EACA,OAAA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,OAAA;AACA","file":"TenantEnginePlugin.vue","sourcesContent":["<template>\r\n  <v-card flat style=\"height: 100%\">\r\n    <v-card-text>\r\n      <div class=\"flex-rows\">\r\n        <div v-if=\"microservice && tenant\" class=\"plugin-header\">\r\n          <slot name=\"header\">\r\n            <sw-page-header :text=\"header\" />\r\n          </slot>\r\n        </div>\r\n        <div class=\"plugin-content\">\r\n          <slot />\r\n        </div>\r\n        <div class=\"plugin-footer\">\r\n          <slot name=\"footer\" />\r\n        </div>\r\n      </div>\r\n    </v-card-text>\r\n    <slot name=\"dialogs\"></slot>\r\n  </v-card>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport Vue from \"vue\";\r\nimport { Component, Prop } from \"sitewhere-ide-common\";\r\n\r\nimport {\r\n  ITenantEngineConfiguration,\r\n  IMicroserviceSummary,\r\n  ITenant\r\n} from \"sitewhere-rest-api\";\r\n\r\n@Component({\r\n  components: {}\r\n})\r\nexport default class TenantEnginePlugin extends Vue {\r\n  @Prop() readonly configuration!: ITenantEngineConfiguration;\r\n\r\n  /** Get microservice information */\r\n  get tenant(): ITenant | null {\r\n    return this.configuration ? this.configuration.tenant : null;\r\n  }\r\n\r\n  /** Get microservice information */\r\n  get microservice(): IMicroserviceSummary | null {\r\n    return this.configuration ? this.configuration.microservice : null;\r\n  }\r\n\r\n  /** Get header displayed at top of page */\r\n  get header(): string | null {\r\n    return this.tenant && this.microservice\r\n      ? `${this.microservice.name} Configuration for Tenant '${this.tenant.name}'`\r\n      : null;\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.flex-rows {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n.plugin-header {\r\n  flex: 0;\r\n}\r\n.plugin-content {\r\n  flex: 1;\r\n  background-color: #fff;\r\n  overflow-y: auto;\r\n}\r\n.plugin-footer {\r\n  flex: 0;\r\n}\r\n</style>\r\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$6 = "data-v-0a4101e6";
      /* module identifier */
      const __vue_module_identifier__$6 = undefined;
      /* functional template */
      const __vue_is_functional_template__$6 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$6 = normalizeComponent(
        { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
        __vue_inject_styles__$6,
        __vue_script__$6,
        __vue_scope_id__$6,
        __vue_is_functional_template__$6,
        __vue_module_identifier__$6,
        false,
        createInjector,
        undefined,
        undefined
      );

    var AssetManagementPlugin = /** @class */ (function (_super) {
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
                this.assetManagement.datastore = null;
            }
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], AssetManagementPlugin.prototype, "configuration", void 0);
        AssetManagementPlugin = __decorate([
            sitewhereIdeCommon.Component({
                components: { TenantEnginePlugin: __vue_component__$6, DatastoreSelector: __vue_component__$5 }
            })
        ], AssetManagementPlugin);
        return AssetManagementPlugin;
    }(Vue));

    /* script */
    const __vue_script__$7 = AssetManagementPlugin;

    /* template */
    var __vue_render__$7 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "tenant-engine-plugin",
        { attrs: { configuration: _vm.configuration } },
        [
          _c(
            "sw-content-section",
            { attrs: { icon: "fa-database", title: "Asset Management Datastore" } },
            [
              _c("datastore-selector", {
                attrs: {
                  datastore: _vm.datastore,
                  instance: _vm.instanceManagement
                },
                on: {
                  create: _vm.onCreateDatastore,
                  update: _vm.onUpdateDatastore,
                  unset: _vm.onUnsetDatastore
                }
              })
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$7 = [];
    __vue_render__$7._withStripped = true;

      /* style */
      const __vue_inject_styles__$7 = function (inject) {
        if (!inject) return
        inject("data-v-71b73da5_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"AssetManagementPlugin.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$7 = "data-v-71b73da5";
      /* module identifier */
      const __vue_module_identifier__$7 = undefined;
      /* functional template */
      const __vue_is_functional_template__$7 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$7 = normalizeComponent(
        { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
        __vue_inject_styles__$7,
        __vue_script__$7,
        __vue_scope_id__$7,
        __vue_is_functional_template__$7,
        __vue_module_identifier__$7,
        false,
        createInjector,
        undefined,
        undefined
      );

    var BatchOperationManagerFields = /** @class */ (function (_super) {
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
            console.log("load from", input);
            this.throttleDelayMs = input.throttleDelayMs || 0;
        };
        /** Save form data to an object */
        BatchOperationManagerFields.prototype.save = function () {
            return {
                throttleDelayMs: this.throttleDelayMs
            };
        };
        BatchOperationManagerFields = __decorate([
            sitewhereIdeCommon.Component({
                validations: {
                    throttleDelayMs: {
                        required: validators_1
                    }
                }
            })
        ], BatchOperationManagerFields);
        return BatchOperationManagerFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$8 = BatchOperationManagerFields;

    /* template */
    var __vue_render__$8 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Throttle delay(ms)",
                    title: "Throttle delay in milliseconds.",
                    icon: "fa-clock",
                    type: "number"
                  },
                  model: {
                    value: _vm.throttleDelayMs,
                    callback: function($$v) {
                      _vm.throttleDelayMs = $$v;
                    },
                    expression: "throttleDelayMs"
                  }
                },
                [
                  !_vm.$v.throttleDelayMs.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Throttle delay is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$8 = [];
    __vue_render__$8._withStripped = true;

      /* style */
      const __vue_inject_styles__$8 = undefined;
      /* scoped */
      const __vue_scope_id__$8 = undefined;
      /* module identifier */
      const __vue_module_identifier__$8 = undefined;
      /* functional template */
      const __vue_is_functional_template__$8 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$8 = normalizeComponent(
        { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
        __vue_inject_styles__$8,
        __vue_script__$8,
        __vue_scope_id__$8,
        __vue_is_functional_template__$8,
        __vue_module_identifier__$8,
        false,
        undefined,
        undefined,
        undefined
      );

    var BatchOperationManagerDialog = /** @class */ (function (_super) {
        __extends(BatchOperationManagerDialog, _super);
        function BatchOperationManagerDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BatchOperationManagerDialog.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.BatchOperations;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        BatchOperationManagerDialog.prototype.generatePayload = function () {
            var payload = {};
            Object.assign(payload, this.$refs.manager.save());
            return payload;
        };
        /** Reset dialog contents */
        BatchOperationManagerDialog.prototype.reset = function () {
            if (this.$refs.manager) {
                this.$refs.manager.reset();
            }
        };
        /** Load dialog from a given configuration */
        BatchOperationManagerDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.manager) {
                this.$refs.manager.load(config);
            }
        };
        /** Called after create button is clicked */
        BatchOperationManagerDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.manager.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("update", payload);
            this.closeDialog();
        };
        BatchOperationManagerDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: { BatchOperationManagerFields: __vue_component__$8 }
            })
        ], BatchOperationManagerDialog);
        return BatchOperationManagerDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$9 = BatchOperationManagerDialog;

    /* template */
    var __vue_render__$9 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-base-dialog",
        {
          ref: "dialog",
          attrs: {
            icon: _vm.icon,
            title: "Edit Batch Operation Manager Settings",
            width: "500",
            loaded: true,
            visible: _vm.dialogVisible,
            createLabel: "Update",
            cancelLabel: "Cancel"
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "tabs" },
            [_c("v-tab", { key: "manager" }, [_vm._v("Manager")])],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "manager" },
                [_c("batch-operation-manager-fields", { ref: "manager" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$9 = [];
    __vue_render__$9._withStripped = true;

      /* style */
      const __vue_inject_styles__$9 = undefined;
      /* scoped */
      const __vue_scope_id__$9 = undefined;
      /* module identifier */
      const __vue_module_identifier__$9 = undefined;
      /* functional template */
      const __vue_is_functional_template__$9 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$9 = normalizeComponent(
        { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
        __vue_inject_styles__$9,
        __vue_script__$9,
        __vue_scope_id__$9,
        __vue_is_functional_template__$9,
        __vue_module_identifier__$9,
        false,
        undefined,
        undefined,
        undefined
      );

    var BatchOperationManagerSection = /** @class */ (function (_super) {
        __extends(BatchOperationManagerSection, _super);
        function BatchOperationManagerSection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BatchOperationManagerSection.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.BatchOperations;
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
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(this.configuration);
        };
        /** Handle update */
        BatchOperationManagerSection.prototype.onBatchOperationManagerUpdate = function (updated) {
            this.$emit("update", updated);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], BatchOperationManagerSection.prototype, "configuration", void 0);
        BatchOperationManagerSection = __decorate([
            sitewhereIdeCommon.Component({
                components: { BatchOperationManagerDialog: __vue_component__$9 }
            })
        ], BatchOperationManagerSection);
        return BatchOperationManagerSection;
    }(Vue));

    /* script */
    const __vue_script__$a = BatchOperationManagerSection;

    /* template */
    var __vue_render__$a = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-content-section",
        { attrs: { icon: _vm.icon, title: "Batch Operation Manager" } },
        [
          _c("sw-content-field", {
            attrs: { name: "throttle delay(ms)", value: _vm.throttleDelayMs }
          }),
          _vm._v(" "),
          _c("sw-content-link", {
            staticClass: "mt-3",
            attrs: {
              icon: "fa-edit",
              text: "Edit batch operation manager settings."
            },
            on: { linkClicked: _vm.onEditBatchOperationManager }
          }),
          _vm._v(" "),
          _c("batch-operation-manager-dialog", {
            ref: "dialog",
            on: { update: _vm.onBatchOperationManagerUpdate }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$a = [];
    __vue_render__$a._withStripped = true;

      /* style */
      const __vue_inject_styles__$a = function (inject) {
        if (!inject) return
        inject("data-v-79b82228_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"BatchOperationManagerSection.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$a = "data-v-79b82228";
      /* module identifier */
      const __vue_module_identifier__$a = undefined;
      /* functional template */
      const __vue_is_functional_template__$a = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$a = normalizeComponent(
        { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
        __vue_inject_styles__$a,
        __vue_script__$a,
        __vue_scope_id__$a,
        __vue_is_functional_template__$a,
        __vue_module_identifier__$a,
        false,
        createInjector,
        undefined,
        undefined
      );

    var BatchOperationsPlugin = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], BatchOperationsPlugin.prototype, "configuration", void 0);
        BatchOperationsPlugin = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    TenantEnginePlugin: __vue_component__$6,
                    DatastoreSelector: __vue_component__$5,
                    BatchOperationManagerSection: __vue_component__$a
                }
            })
        ], BatchOperationsPlugin);
        return BatchOperationsPlugin;
    }(Vue));

    /* script */
    const __vue_script__$b = BatchOperationsPlugin;

    /* template */
    var __vue_render__$b = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "tenant-engine-plugin",
        { attrs: { configuration: _vm.configuration } },
        [
          _c(
            "sw-content-section",
            { attrs: { icon: "fa-database", title: "Batch Operations Datastore" } },
            [
              _c("datastore-selector", {
                attrs: {
                  datastore: _vm.datastore,
                  instance: _vm.instanceManagement
                },
                on: {
                  create: _vm.onCreateDatastore,
                  update: _vm.onUpdateDatastore,
                  unset: _vm.onUnsetDatastore
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider", { staticClass: "mt-4 mb-4" }),
          _vm._v(" "),
          _c("batch-operation-manager-section", {
            attrs: { configuration: _vm.batchOperationManager },
            on: { update: _vm.onBatchOperationManagerUpdate }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$b = [];
    __vue_render__$b._withStripped = true;

      /* style */
      const __vue_inject_styles__$b = function (inject) {
        if (!inject) return
        inject("data-v-0050e0dc_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"BatchOperationsPlugin.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$b = "data-v-0050e0dc";
      /* module identifier */
      const __vue_module_identifier__$b = undefined;
      /* functional template */
      const __vue_is_functional_template__$b = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$b = normalizeComponent(
        { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
        __vue_inject_styles__$b,
        __vue_script__$b,
        __vue_scope_id__$b,
        __vue_is_functional_template__$b,
        __vue_module_identifier__$b,
        false,
        createInjector,
        undefined,
        undefined
      );

    var NewCommandDestinationChooser = /** @class */ (function (_super) {
        __extends(NewCommandDestinationChooser, _super);
        function NewCommandDestinationChooser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NewCommandDestinationChooser.prototype, "icon", {
            /** Get page icon */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.CommandDelivery;
            },
            enumerable: true,
            configurable: true
        });
        /** Open chooser */
        NewCommandDestinationChooser.prototype.openChooser = function () {
            this.$refs.dialog.openDialog();
        };
        /** Close chooser */
        NewCommandDestinationChooser.prototype.closeChooser = function () {
            this.$refs.dialog.closeDialog();
        };
        /** Close chooser on item click */
        NewCommandDestinationChooser.prototype.onChosen = function (id) {
            this.closeChooser();
            this.$emit("chosen", id);
        };
        NewCommandDestinationChooser = __decorate([
            sitewhereIdeCommon.Component({
                components: {}
            })
        ], NewCommandDestinationChooser);
        return NewCommandDestinationChooser;
    }(Vue));

    /* script */
    const __vue_script__$c = NewCommandDestinationChooser;

    /* template */
    var __vue_render__$c = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-new-element-chooser",
        {
          ref: "dialog",
          attrs: { icon: _vm.icon, title: "Add Command Destination", width: "500" }
        },
        [
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "coap" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("CoAP Command Destination")]
          ),
          _vm._v(" "),
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "mqtt" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("MQTT Command Destination")]
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$c = [];
    __vue_render__$c._withStripped = true;

      /* style */
      const __vue_inject_styles__$c = function (inject) {
        if (!inject) return
        inject("data-v-82e99b78_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"NewCommandDestinationChooser.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$c = "data-v-82e99b78";
      /* module identifier */
      const __vue_module_identifier__$c = undefined;
      /* functional template */
      const __vue_is_functional_template__$c = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$c = normalizeComponent(
        { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
        __vue_inject_styles__$c,
        __vue_script__$c,
        __vue_scope_id__$c,
        __vue_is_functional_template__$c,
        __vue_module_identifier__$c,
        false,
        createInjector,
        undefined,
        undefined
      );

    /** Validator for checking if id is already used */
    var idConflict = validators_2.withParams({ type: "idConflict" }, function (value, vm) {
        var idsInUse = vm.idsInUse;
        var conflict = false;
        idsInUse.forEach(function (id) {
            if (vm.id == id)
                conflict = true;
        });
        return !conflict;
    });
    var CommandDestinationDialog = /** @class */ (function (_super) {
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
            var config = { id: this.id, type: this.type };
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
            if (!this.$refs.extractor.validate()) {
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
            this.$refs.dialog.setActiveTab(tab);
        };
        /** Called after create button is clicked */
        CommandDestinationDialog.prototype.onCreateClicked = function (e) {
            this.$emit("createClicked", e);
        };
        /** Called after cancel button is clicked */
        CommandDestinationDialog.prototype.onCancelClicked = function (e) {
            this.$emit("cancelClicked", e);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CommandDestinationDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CommandDestinationDialog.prototype, "type", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CommandDestinationDialog.prototype, "icon", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CommandDestinationDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], CommandDestinationDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CommandDestinationDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CommandDestinationDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Boolean)
        ], CommandDestinationDialog.prototype, "visible", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], CommandDestinationDialog.prototype, "idsInUse", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], CommandDestinationDialog.prototype, "parameterExtractors", void 0);
        CommandDestinationDialog = __decorate([
            sitewhereIdeCommon.Component({
                validations: {
                    id: {
                        required: validators_1,
                        idConflict: idConflict
                    }
                }
            })
        ], CommandDestinationDialog);
        return CommandDestinationDialog;
    }(Vue));

    /* script */
    const __vue_script__$d = CommandDestinationDialog;

    /* template */
    var __vue_render__$d = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-base-dialog",
        {
          ref: "dialog",
          attrs: {
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            visible: _vm.visible,
            createLabel: _vm.createLabel || "Create",
            cancelLabel: _vm.cancelLabel || "Cancel"
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "header" },
            [
              _c(
                "sw-dialog-header",
                { staticClass: "pl-3 pr-3 pt-2 pb-2" },
                [
                  _c(
                    "v-layout",
                    {
                      staticClass: "pl-2 pr-2 pt-0 pb-0",
                      attrs: { row: "", wrap: "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs5: "" } },
                        [
                          _vm.visible
                            ? _c(
                                "sw-form-text",
                                {
                                  staticClass: "mr-3",
                                  attrs: {
                                    label: "Command destination id",
                                    title: "Unique command destination identifier.",
                                    icon: "info",
                                    dense: true,
                                    autofocus: true
                                  },
                                  model: {
                                    value: _vm.id,
                                    callback: function($$v) {
                                      _vm.id = $$v;
                                    },
                                    expression: "id"
                                  }
                                },
                                [
                                  !_vm.$v.id.required && _vm.$v.$dirty
                                    ? _c("span", [_vm._v("Id is required.")])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.$v.id.idConflict && _vm.$v.$dirty
                                    ? _c("span", [_vm._v("Id already in use.")])
                                    : _vm._e()
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs7: "" } },
                        [
                          _c("sw-form-select", {
                            attrs: {
                              items: _vm.parameterExtractors,
                              title:
                                "Choose parameter extractor for command destination",
                              label: "Parameter extractor",
                              "item-text": "text",
                              "item-value": "value",
                              icon: "settings"
                            },
                            model: {
                              value: _vm.extractorType,
                              callback: function($$v) {
                                _vm.extractorType = $$v;
                              },
                              expression: "extractorType"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "tabs" },
            [
              _vm._t("command-destination-tabs"),
              _vm._v(" "),
              _c("v-tab", { key: "extractor" }, [_vm._v("Parameter Extractor")])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "tab-items" },
            [
              _vm._t("command-destination-tab-items"),
              _vm._v(" "),
              _c(
                "v-tab-item",
                { key: "extractor" },
                [
                  _c("parameter-extractor-configuration", {
                    ref: "extractor",
                    attrs: {
                      parameterExtractor: _vm.parameterExtractor,
                      tenantId: _vm.tenantId
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$d = [];
    __vue_render__$d._withStripped = true;

      /* style */
      const __vue_inject_styles__$d = undefined;
      /* scoped */
      const __vue_scope_id__$d = undefined;
      /* module identifier */
      const __vue_module_identifier__$d = undefined;
      /* functional template */
      const __vue_is_functional_template__$d = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$d = normalizeComponent(
        { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
        __vue_inject_styles__$d,
        __vue_script__$d,
        __vue_scope_id__$d,
        __vue_is_functional_template__$d,
        __vue_module_identifier__$d,
        false,
        undefined,
        undefined,
        undefined
      );

    var NoConfiguration = /** @class */ (function (_super) {
        __extends(NoConfiguration, _super);
        function NoConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NoConfiguration = __decorate([
            sitewhereIdeCommon.Component({})
        ], NoConfiguration);
        return NoConfiguration;
    }(Vue));

    /* script */
    const __vue_script__$e = NoConfiguration;

    /* template */
    var __vue_render__$e = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "v-card",
        { staticStyle: { width: "100%" }, attrs: { flat: "" } },
        [
          _c("v-card-text", { staticClass: "padded-message subheading" }, [
            _vm._v("This command destination has no configurable attributes.")
          ])
        ],
        1
      )
    };
    var __vue_staticRenderFns__$e = [];
    __vue_render__$e._withStripped = true;

      /* style */
      const __vue_inject_styles__$e = function (inject) {
        if (!inject) return
        inject("data-v-f5646f50_0", { source: "\n.padded-message[data-v-f5646f50] {\r\n  padding: 50px;\r\n  padding-top: 35px;\r\n  text-align: center;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\Derek\\Documents\\GitHub\\sitewhere-admin-ui-plugins\\src\\components\\plugins\\tenantengines\\commanddelivery\\NoConfiguration.vue"],"names":[],"mappings":";AAiBA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AACA","file":"NoConfiguration.vue","sourcesContent":["<template>\r\n  <v-card flat style=\"width: 100%;\"\r\n    ><v-card-text class=\"padded-message subheading\"\r\n      >This command destination has no configurable attributes.</v-card-text\r\n    ></v-card\r\n  >\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport Vue from \"vue\";\r\nimport { Component } from \"sitewhere-ide-common\";\r\n\r\n@Component({})\r\nexport default class NoConfiguration extends Vue {}\r\n</script>\r\n\r\n<style scoped>\r\n.padded-message {\r\n  padding: 50px;\r\n  padding-top: 35px;\r\n  text-align: center;\r\n}\r\n</style>\r\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$e = "data-v-f5646f50";
      /* module identifier */
      const __vue_module_identifier__$e = undefined;
      /* functional template */
      const __vue_is_functional_template__$e = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$e = normalizeComponent(
        { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
        __vue_inject_styles__$e,
        __vue_script__$e,
        __vue_scope_id__$e,
        __vue_is_functional_template__$e,
        __vue_module_identifier__$e,
        false,
        createInjector,
        undefined,
        undefined
      );

    var CoapFields = /** @class */ (function (_super) {
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
        CoapFields.prototype.load = function (input) { };
        /** Save form data to an object */
        CoapFields.prototype.save = function () {
            return {};
        };
        CoapFields = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    NoConfiguration: __vue_component__$e
                },
                validations: {}
            })
        ], CoapFields);
        return CoapFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$f = CoapFields;

    /* template */
    var __vue_render__$f = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("sw-dialog-form", [_c("no-configuration")], 1)
    };
    var __vue_staticRenderFns__$f = [];
    __vue_render__$f._withStripped = true;

      /* style */
      const __vue_inject_styles__$f = undefined;
      /* scoped */
      const __vue_scope_id__$f = undefined;
      /* module identifier */
      const __vue_module_identifier__$f = undefined;
      /* functional template */
      const __vue_is_functional_template__$f = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$f = normalizeComponent(
        { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
        __vue_inject_styles__$f,
        __vue_script__$f,
        __vue_scope_id__$f,
        __vue_is_functional_template__$f,
        __vue_module_identifier__$f,
        false,
        undefined,
        undefined,
        undefined
      );

    var CoapCommandDestinationDialog = /** @class */ (function (_super) {
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
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        CoapCommandDestinationDialog.prototype.generatePayload = function () {
            var config = {};
            Object.assign(config, this.$refs.coap.save());
            var payload = {};
            Object.assign(payload, this.$refs.dialog.save());
            payload.configuration = config;
            return payload;
        };
        /** Reset dialog contents */
        CoapCommandDestinationDialog.prototype.reset = function () {
            if (this.$refs.coap) {
                this.$refs.coap.reset();
            }
            this.$refs.dialog.reset();
        };
        /** Load dialog from a given configuration */
        CoapCommandDestinationDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.dialog) {
                this.$refs.dialog.load(config);
            }
            if (this.$refs.coap) {
                this.$refs.coap.load(config.configuration);
            }
        };
        /** Called after create button is clicked */
        CoapCommandDestinationDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.dialog.validate()) {
                return;
            }
            if (!this.$refs.coap.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapCommandDestinationDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapCommandDestinationDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], CoapCommandDestinationDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapCommandDestinationDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapCommandDestinationDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], CoapCommandDestinationDialog.prototype, "idsInUse", void 0);
        CoapCommandDestinationDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    CommandDestinationDialog: __vue_component__$d,
                    CoapFields: __vue_component__$f
                }
            })
        ], CoapCommandDestinationDialog);
        return CoapCommandDestinationDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$g = CoapCommandDestinationDialog;

    /* template */
    var __vue_render__$g = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "command-destination-dialog",
        {
          ref: "dialog",
          attrs: {
            type: "coap",
            tenantId: _vm.tenantId,
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            idsInUse: _vm.idsInUse,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: _vm.cancelLabel,
            parameterExtractors: _vm.parameterExtractors
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "command-destination-tabs" },
            [_c("v-tab", { key: "coap" }, [_vm._v("Configuration")])],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "command-destination-tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "coap" },
                [_c("coap-fields", { ref: "coap" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$g = [];
    __vue_render__$g._withStripped = true;

      /* style */
      const __vue_inject_styles__$g = undefined;
      /* scoped */
      const __vue_scope_id__$g = undefined;
      /* module identifier */
      const __vue_module_identifier__$g = undefined;
      /* functional template */
      const __vue_is_functional_template__$g = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$g = normalizeComponent(
        { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
        __vue_inject_styles__$g,
        __vue_script__$g,
        __vue_scope_id__$g,
        __vue_is_functional_template__$g,
        __vue_module_identifier__$g,
        false,
        undefined,
        undefined,
        undefined
      );

    var CoapCommandDestinationCreateDialog = /** @class */ (function (_super) {
        __extends(CoapCommandDestinationCreateDialog, _super);
        function CoapCommandDestinationCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        CoapCommandDestinationCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        CoapCommandDestinationCreateDialog.prototype.openDialog = function (idsInUse) {
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapCommandDestinationCreateDialog.prototype, "tenantId", void 0);
        CoapCommandDestinationCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    CoapCommandDestinationDialog: __vue_component__$g
                }
            })
        ], CoapCommandDestinationCreateDialog);
        return CoapCommandDestinationCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$h = CoapCommandDestinationCreateDialog;

    /* template */
    var __vue_render__$h = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("coap-command-destination-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create CoAP Command Destination",
          width: "700",
          createLabel: "Create",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$h = [];
    __vue_render__$h._withStripped = true;

      /* style */
      const __vue_inject_styles__$h = function (inject) {
        if (!inject) return
        inject("data-v-5399f761_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CoapCommandDestinationCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$h = "data-v-5399f761";
      /* module identifier */
      const __vue_module_identifier__$h = undefined;
      /* functional template */
      const __vue_is_functional_template__$h = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$h = normalizeComponent(
        { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
        __vue_inject_styles__$h,
        __vue_script__$h,
        __vue_scope_id__$h,
        __vue_is_functional_template__$h,
        __vue_module_identifier__$h,
        false,
        createInjector,
        undefined,
        undefined
      );

    var CoapCommandDestinationUpdateDialog = /** @class */ (function (_super) {
        __extends(CoapCommandDestinationUpdateDialog, _super);
        function CoapCommandDestinationUpdateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.originalId = null;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        CoapCommandDestinationUpdateDialog.prototype.onPayload = function (config) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", this.originalId, config);
        };
        /** Open dialog */
        CoapCommandDestinationUpdateDialog.prototype.openDialog = function (config, idsInUse) {
            this.originalId = config.id;
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(config);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapCommandDestinationUpdateDialog.prototype, "tenantId", void 0);
        CoapCommandDestinationUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    CoapCommandDestinationDialog: __vue_component__$g
                }
            })
        ], CoapCommandDestinationUpdateDialog);
        return CoapCommandDestinationUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$i = CoapCommandDestinationUpdateDialog;

    /* template */
    var __vue_render__$i = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("coap-command-destination-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update CoAP Command Destination",
          width: "700",
          createLabel: "Update",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$i = [];
    __vue_render__$i._withStripped = true;

      /* style */
      const __vue_inject_styles__$i = function (inject) {
        if (!inject) return
        inject("data-v-1547f81a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CoapCommandDestinationUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$i = "data-v-1547f81a";
      /* module identifier */
      const __vue_module_identifier__$i = undefined;
      /* functional template */
      const __vue_is_functional_template__$i = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$i = normalizeComponent(
        { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
        __vue_inject_styles__$i,
        __vue_script__$i,
        __vue_scope_id__$i,
        __vue_is_functional_template__$i,
        __vue_module_identifier__$i,
        false,
        createInjector,
        undefined,
        undefined
      );

    var MqttConnectionFields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({
                validations: {
                    protocol: {
                        required: validators_1
                    },
                    hostname: {
                        required: validators_1
                    },
                    port: {
                        required: validators_1
                    }
                }
            })
        ], MqttConnectionFields);
        return MqttConnectionFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$j = MqttConnectionFields;

    /* template */
    var __vue_render__$j = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c("sw-form-select", {
                attrs: {
                  items: _vm.protocols,
                  title: "Choose connection protocol",
                  label: "Protocol",
                  "item-text": "text",
                  "item-value": "value",
                  icon: "lock"
                },
                model: {
                  value: _vm.protocol,
                  callback: function($$v) {
                    _vm.protocol = $$v;
                  },
                  expression: "protocol"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs8: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "ml-3 mr-3",
                  attrs: {
                    required: "",
                    label: "Hostname",
                    title: "MQTT broker hostname.",
                    icon: "router"
                  },
                  model: {
                    value: _vm.hostname,
                    callback: function($$v) {
                      _vm.hostname = $$v;
                    },
                    expression: "hostname"
                  }
                },
                [
                  !_vm.$v.hostname.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Hostname is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Port",
                    title: "MQTT broker port.",
                    type: "number"
                  },
                  model: {
                    value: _vm.port,
                    callback: function($$v) {
                      _vm.port = $$v;
                    },
                    expression: "port"
                  }
                },
                [
                  !_vm.$v.port.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$j = [];
    __vue_render__$j._withStripped = true;

      /* style */
      const __vue_inject_styles__$j = undefined;
      /* scoped */
      const __vue_scope_id__$j = undefined;
      /* module identifier */
      const __vue_module_identifier__$j = undefined;
      /* functional template */
      const __vue_is_functional_template__$j = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$j = normalizeComponent(
        { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
        __vue_inject_styles__$j,
        __vue_script__$j,
        __vue_scope_id__$j,
        __vue_is_functional_template__$j,
        __vue_module_identifier__$j,
        false,
        undefined,
        undefined,
        undefined
      );

    var MqttAuthenticationFields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({})
        ], MqttAuthenticationFields);
        return MqttAuthenticationFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$k = MqttAuthenticationFields;

    /* template */
    var __vue_render__$k = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs7: "" } },
            [
              _c("sw-form-text", {
                staticClass: "mr-3",
                attrs: {
                  label: "Username",
                  title: "Username for authentication.",
                  icon: "account_circle"
                },
                model: {
                  value: _vm.username,
                  callback: function($$v) {
                    _vm.username = $$v;
                  },
                  expression: "username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs5: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  label: "Password",
                  title: "Password for authentication.",
                  icon: "lock",
                  type: "password"
                },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v;
                  },
                  expression: "password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs7: "" } },
            [
              _c("sw-form-text", {
                staticClass: "mr-3",
                attrs: {
                  label: "Truststore path",
                  title: "Truststore path.",
                  icon: "info"
                },
                model: {
                  value: _vm.trustStorePath,
                  callback: function($$v) {
                    _vm.trustStorePath = $$v;
                  },
                  expression: "trustStorePath"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs5: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  label: "Truststore password",
                  title: "Truststore password.",
                  icon: "lock",
                  type: "password"
                },
                model: {
                  value: _vm.trustStorePassword,
                  callback: function($$v) {
                    _vm.trustStorePassword = $$v;
                  },
                  expression: "trustStorePassword"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs7: "" } },
            [
              _c("sw-form-text", {
                staticClass: "mr-3",
                attrs: {
                  label: "Keystore path",
                  title: "Keystore path.",
                  icon: "info"
                },
                model: {
                  value: _vm.keyStorePath,
                  callback: function($$v) {
                    _vm.keyStorePath = $$v;
                  },
                  expression: "keyStorePath"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs5: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  label: "Keystore password",
                  title: "Keystore password.",
                  icon: "lock",
                  type: "password"
                },
                model: {
                  value: _vm.keyStorePassword,
                  callback: function($$v) {
                    _vm.keyStorePassword = $$v;
                  },
                  expression: "keyStorePassword"
                }
              })
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$k = [];
    __vue_render__$k._withStripped = true;

      /* style */
      const __vue_inject_styles__$k = undefined;
      /* scoped */
      const __vue_scope_id__$k = undefined;
      /* module identifier */
      const __vue_module_identifier__$k = undefined;
      /* functional template */
      const __vue_is_functional_template__$k = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$k = normalizeComponent(
        { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
        __vue_inject_styles__$k,
        __vue_script__$k,
        __vue_scope_id__$k,
        __vue_is_functional_template__$k,
        __vue_module_identifier__$k,
        false,
        undefined,
        undefined,
        undefined
      );

    var MqttCommandDestinationDialog = /** @class */ (function (_super) {
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
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        MqttCommandDestinationDialog.prototype.generatePayload = function () {
            var config = {};
            Object.assign(config, this.$refs.connection.save());
            Object.assign(config, this.$refs.authentication.save());
            var payload = {};
            Object.assign(payload, this.$refs.dialog.save());
            payload.configuration = config;
            return payload;
        };
        /** Reset dialog contents */
        MqttCommandDestinationDialog.prototype.reset = function () {
            if (this.$refs.connection) {
                this.$refs.connection.reset();
            }
            if (this.$refs.authentication) {
                this.$refs.authentication.reset();
            }
            this.$refs.dialog.reset();
        };
        /** Load dialog from a given configuration */
        MqttCommandDestinationDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.dialog) {
                this.$refs.dialog.load(config);
            }
            if (this.$refs.connection) {
                this.$refs.connection.load(config.configuration);
            }
            if (this.$refs.authentication) {
                this.$refs.authentication.load(config.configuration);
            }
        };
        /** Called after create button is clicked */
        MqttCommandDestinationDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.dialog.validate()) {
                return;
            }
            if (!this.$refs.connection.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            if (!this.$refs.authentication.validate()) {
                this.$refs.dialog.setActiveTab(1);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttCommandDestinationDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttCommandDestinationDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], MqttCommandDestinationDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttCommandDestinationDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttCommandDestinationDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], MqttCommandDestinationDialog.prototype, "idsInUse", void 0);
        MqttCommandDestinationDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    CommandDestinationDialog: __vue_component__$d,
                    MqttConnectionFields: __vue_component__$j,
                    MqttAuthenticationFields: __vue_component__$k
                }
            })
        ], MqttCommandDestinationDialog);
        return MqttCommandDestinationDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$l = MqttCommandDestinationDialog;

    /* template */
    var __vue_render__$l = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "command-destination-dialog",
        {
          ref: "dialog",
          attrs: {
            type: "mqtt",
            tenantId: _vm.tenantId,
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            idsInUse: _vm.idsInUse,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: _vm.cancelLabel,
            parameterExtractors: _vm.parameterExtractors
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "command-destination-tabs" },
            [
              _c("v-tab", { key: "connection" }, [_vm._v("Connection")]),
              _vm._v(" "),
              _c("v-tab", { key: "authentication" }, [_vm._v("Authentication")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "command-destination-tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "connection" },
                [_c("mqtt-connection-fields", { ref: "connection" })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                { key: "authentication" },
                [_c("mqtt-authentication-fields", { ref: "authentication" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$l = [];
    __vue_render__$l._withStripped = true;

      /* style */
      const __vue_inject_styles__$l = undefined;
      /* scoped */
      const __vue_scope_id__$l = undefined;
      /* module identifier */
      const __vue_module_identifier__$l = undefined;
      /* functional template */
      const __vue_is_functional_template__$l = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$l = normalizeComponent(
        { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
        __vue_inject_styles__$l,
        __vue_script__$l,
        __vue_scope_id__$l,
        __vue_is_functional_template__$l,
        __vue_module_identifier__$l,
        false,
        undefined,
        undefined,
        undefined
      );

    var MqttCommandDestinationCreateDialog = /** @class */ (function (_super) {
        __extends(MqttCommandDestinationCreateDialog, _super);
        function MqttCommandDestinationCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        MqttCommandDestinationCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        MqttCommandDestinationCreateDialog.prototype.openDialog = function (idsInUse) {
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttCommandDestinationCreateDialog.prototype, "tenantId", void 0);
        MqttCommandDestinationCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    MqttCommandDestinationDialog: __vue_component__$l
                }
            })
        ], MqttCommandDestinationCreateDialog);
        return MqttCommandDestinationCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$m = MqttCommandDestinationCreateDialog;

    /* template */
    var __vue_render__$m = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("mqtt-command-destination-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create MQTT Command Destination",
          width: "700",
          createLabel: "Create",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$m = [];
    __vue_render__$m._withStripped = true;

      /* style */
      const __vue_inject_styles__$m = function (inject) {
        if (!inject) return
        inject("data-v-7a25791c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MqttCommandDestinationCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$m = "data-v-7a25791c";
      /* module identifier */
      const __vue_module_identifier__$m = undefined;
      /* functional template */
      const __vue_is_functional_template__$m = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$m = normalizeComponent(
        { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
        __vue_inject_styles__$m,
        __vue_script__$m,
        __vue_scope_id__$m,
        __vue_is_functional_template__$m,
        __vue_module_identifier__$m,
        false,
        createInjector,
        undefined,
        undefined
      );

    var MqttCommandDestinationUpdateDialog = /** @class */ (function (_super) {
        __extends(MqttCommandDestinationUpdateDialog, _super);
        function MqttCommandDestinationUpdateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.originalId = null;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        MqttCommandDestinationUpdateDialog.prototype.onPayload = function (config) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", this.originalId, config);
        };
        /** Open dialog */
        MqttCommandDestinationUpdateDialog.prototype.openDialog = function (config, idsInUse) {
            this.originalId = config.id;
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(config);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttCommandDestinationUpdateDialog.prototype, "tenantId", void 0);
        MqttCommandDestinationUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    MqttCommandDestinationDialog: __vue_component__$l
                }
            })
        ], MqttCommandDestinationUpdateDialog);
        return MqttCommandDestinationUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$n = MqttCommandDestinationUpdateDialog;

    /* template */
    var __vue_render__$n = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("mqtt-command-destination-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update MQTT Command Destination",
          width: "700",
          createLabel: "Update",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$n = [];
    __vue_render__$n._withStripped = true;

      /* style */
      const __vue_inject_styles__$n = function (inject) {
        if (!inject) return
        inject("data-v-22c90e9f_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MqttCommandDestinationUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$n = "data-v-22c90e9f";
      /* module identifier */
      const __vue_module_identifier__$n = undefined;
      /* functional template */
      const __vue_is_functional_template__$n = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$n = normalizeComponent(
        { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
        __vue_inject_styles__$n,
        __vue_script__$n,
        __vue_scope_id__$n,
        __vue_is_functional_template__$n,
        __vue_module_identifier__$n,
        false,
        createInjector,
        undefined,
        undefined
      );

    var CommandDeliveryTable = /** @class */ (function (_super) {
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
        CommandDeliveryTable.prototype.onCommandDestinationsUpdated = function (updated) {
            this.calculateCommandDestinationsAsSortedArray();
        };
        Object.defineProperty(CommandDeliveryTable.prototype, "icon", {
            /** Get page icon */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.CommandDelivery;
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
            var all = [];
            if (this.commandDestinations) {
                this.commandDestinations.forEach(function (dest) {
                    var meta = {};
                    meta.id = dest.id;
                    meta.type = dest.type;
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
            this.$refs.chooser.openChooser();
        };
        /** Called to create a new command destination based on type */
        CommandDeliveryTable.prototype.onCommandDestinationCreate = function (id) {
            var idsInUse = this.findIdsInUse();
            if (id == "coap") {
                this.$refs.coapCreate.openDialog(idsInUse);
            }
            else if (id == "mqtt") {
                this.$refs.mqttCreate.openDialog(idsInUse);
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
                    this.$refs.coapUpdate.openDialog(config, idsInUse);
                }
                else if (config.type === "mqtt") {
                    this.$refs.mqttUpdate.openDialog(config, idsInUse);
                }
            }
        };
        /** Called when command destination is updated */
        CommandDeliveryTable.prototype.onCommandDestinationUpdated = function (originalId, config) {
            var index = this.getCommandDestinationIndex(originalId);
            if (this.commandDestinations && index != null) {
                Vue.set(this.commandDestinations, index, config);
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CommandDeliveryTable.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], CommandDeliveryTable.prototype, "commandDestinations", void 0);
        __decorate([
            sitewhereIdeCommon.Watch("commandDestinations", { immediate: true }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], CommandDeliveryTable.prototype, "onCommandDestinationsUpdated", null);
        CommandDeliveryTable = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    NewCommandDestinationChooser: __vue_component__$c,
                    CoapCommandDestinationCreateDialog: __vue_component__$h,
                    CoapCommandDestinationUpdateDialog: __vue_component__$i,
                    MqttCommandDestinationCreateDialog: __vue_component__$m,
                    MqttCommandDestinationUpdateDialog: __vue_component__$n
                }
            })
        ], CommandDeliveryTable);
        return CommandDeliveryTable;
    }(Vue));

    /* script */
    const __vue_script__$o = CommandDeliveryTable;

    /* template */
    var __vue_render__$o = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("sw-datatable-section", {
        attrs: {
          icon: _vm.icon,
          title: "Command Destinations",
          headers: _vm.headers,
          items: _vm.commandDestsAsSortedArray,
          width: "50%"
        },
        scopedSlots: _vm._u([
          {
            key: "items",
            fn: function(props) {
              return [
                _c(
                  "td",
                  [
                    _c("sw-datatable-link", {
                      attrs: { text: props.item.meta.id },
                      on: {
                        linkClicked: function($event) {
                          return _vm.onOpenCommandDestination(props.item.meta.id)
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(props.item.meta.type))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c("sw-content-delete-icon", {
                      on: {
                        delete: function($event) {
                          return _vm.onDeleteCommandDestination(props.item.meta.id)
                        }
                      }
                    })
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "datatable-footer",
            fn: function() {
              return [
                _c("sw-content-link", {
                  staticClass: "mt-3",
                  attrs: {
                    icon: "fa-plus-circle",
                    text: "Add new command destination."
                  },
                  on: { linkClicked: _vm.onAddCommandDestination }
                })
              ]
            },
            proxy: true
          },
          {
            key: "datatable-dialogs",
            fn: function() {
              return [
                _c("new-command-destination-chooser", {
                  ref: "chooser",
                  on: { chosen: _vm.onCommandDestinationCreate }
                }),
                _vm._v(" "),
                _c("coap-command-destination-create-dialog", {
                  ref: "coapCreate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { create: _vm.onCommandDestinationAdded }
                }),
                _vm._v(" "),
                _c("coap-command-destination-update-dialog", {
                  ref: "coapUpdate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { update: _vm.onCommandDestinationUpdated }
                }),
                _vm._v(" "),
                _c("mqtt-command-destination-create-dialog", {
                  ref: "mqttCreate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { create: _vm.onCommandDestinationAdded }
                }),
                _vm._v(" "),
                _c("mqtt-command-destination-update-dialog", {
                  ref: "mqttUpdate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { update: _vm.onCommandDestinationUpdated }
                })
              ]
            },
            proxy: true
          }
        ])
      })
    };
    var __vue_staticRenderFns__$o = [];
    __vue_render__$o._withStripped = true;

      /* style */
      const __vue_inject_styles__$o = function (inject) {
        if (!inject) return
        inject("data-v-7809fd91_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CommandDestinationsTable.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$o = "data-v-7809fd91";
      /* module identifier */
      const __vue_module_identifier__$o = undefined;
      /* functional template */
      const __vue_is_functional_template__$o = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$o = normalizeComponent(
        { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
        __vue_inject_styles__$o,
        __vue_script__$o,
        __vue_scope_id__$o,
        __vue_is_functional_template__$o,
        __vue_module_identifier__$o,
        false,
        createInjector,
        undefined,
        undefined
      );

    var NewCommandRouterChooser = /** @class */ (function (_super) {
        __extends(NewCommandRouterChooser, _super);
        function NewCommandRouterChooser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NewCommandRouterChooser.prototype, "icon", {
            /** Get page icon */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.CommandDelivery;
            },
            enumerable: true,
            configurable: true
        });
        /** Open chooser */
        NewCommandRouterChooser.prototype.openChooser = function () {
            this.$refs.dialog.openDialog();
        };
        /** Close chooser */
        NewCommandRouterChooser.prototype.closeChooser = function () {
            this.$refs.dialog.closeDialog();
        };
        /** Close chooser on item click */
        NewCommandRouterChooser.prototype.onChosen = function (id) {
            this.closeChooser();
            this.$emit("chosen", id);
        };
        NewCommandRouterChooser = __decorate([
            sitewhereIdeCommon.Component({
                components: {}
            })
        ], NewCommandRouterChooser);
        return NewCommandRouterChooser;
    }(Vue));

    /* script */
    const __vue_script__$p = NewCommandRouterChooser;

    /* template */
    var __vue_render__$p = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-new-element-chooser",
        {
          ref: "dialog",
          attrs: { icon: _vm.icon, title: "Add Command Router", width: "500" }
        },
        [
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "device-type-mapping" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("Device Type Mapping Router")]
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$p = [];
    __vue_render__$p._withStripped = true;

      /* style */
      const __vue_inject_styles__$p = function (inject) {
        if (!inject) return
        inject("data-v-03ad7fd8_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"NewCommandRouterChooser.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$p = "data-v-03ad7fd8";
      /* module identifier */
      const __vue_module_identifier__$p = undefined;
      /* functional template */
      const __vue_is_functional_template__$p = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$p = normalizeComponent(
        { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
        __vue_inject_styles__$p,
        __vue_script__$p,
        __vue_scope_id__$p,
        __vue_is_functional_template__$p,
        __vue_module_identifier__$p,
        false,
        createInjector,
        undefined,
        undefined
      );

    var DeviceTypeMappingRouterSummary = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], DeviceTypeMappingRouterSummary.prototype, "router", void 0);
        DeviceTypeMappingRouterSummary = __decorate([
            sitewhereIdeCommon.Component({})
        ], DeviceTypeMappingRouterSummary);
        return DeviceTypeMappingRouterSummary;
    }(Vue));

    /* script */
    const __vue_script__$q = DeviceTypeMappingRouterSummary;

    /* template */
    var __vue_render__$q = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c("div", [_vm._v("Device Type Mapping Router")]),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "mt-2 mb-3",
            staticStyle: { width: "50%" }
          }),
          _vm._v(" "),
          _vm.hasMappings
            ? _c(
                "v-card",
                { staticClass: "mb-3", attrs: { flat: "" } },
                _vm._l(_vm.mappings, function(mapping, index) {
                  return _c("sw-content-field", {
                    key: mapping.token,
                    attrs: {
                      name: mapping.token,
                      value: _vm.mappings[mapping.token],
                      alt: index % 2 == 1
                    }
                  })
                }),
                1
              )
            : _c("v-card", { staticClass: "mb-3", attrs: { flat: "" } }, [
                _vm._v("No mappings have been assigned.")
              ]),
          _vm._v(" "),
          _vm.defaultDestination
            ? _c(
                "v-card",
                { staticClass: "mb-4", attrs: { flat: "" } },
                [
                  _c("sw-content-field", {
                    attrs: {
                      name: "default destination",
                      value: _vm.defaultDestination
                    }
                  })
                ],
                1
              )
            : _c(
                "v-card",
                { staticClass: "mb-4", attrs: { flat: "" } },
                [
                  _c("sw-content-warning", {
                    attrs: {
                      text:
                        "No default destination is set. This will cause tenant engine startup to fail!"
                    }
                  })
                ],
                1
              )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$q = [];
    __vue_render__$q._withStripped = true;

      /* style */
      const __vue_inject_styles__$q = function (inject) {
        if (!inject) return
        inject("data-v-7866b9f2_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DeviceTypeMappingRouterSummary.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$q = "data-v-7866b9f2";
      /* module identifier */
      const __vue_module_identifier__$q = undefined;
      /* functional template */
      const __vue_is_functional_template__$q = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$q = normalizeComponent(
        { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
        __vue_inject_styles__$q,
        __vue_script__$q,
        __vue_scope_id__$q,
        __vue_is_functional_template__$q,
        __vue_module_identifier__$q,
        false,
        createInjector,
        undefined,
        undefined
      );

    var DeviceTypeMappingRouterFields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], DeviceTypeMappingRouterFields.prototype, "deviceTypes", void 0);
        DeviceTypeMappingRouterFields = __decorate([
            sitewhereIdeCommon.Component({})
        ], DeviceTypeMappingRouterFields);
        return DeviceTypeMappingRouterFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$r = DeviceTypeMappingRouterFields;

    /* template */
    var __vue_render__$r = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("sw-form-select", {
                attrs: {
                  items: _vm.deviceTypes,
                  title: "Choose default command destination",
                  label: "Default Destination",
                  "item-text": "name",
                  "item-value": "token",
                  icon: "fa-check"
                },
                model: {
                  value: _vm.defaultDestination,
                  callback: function($$v) {
                    _vm.defaultDestination = $$v;
                  },
                  expression: "defaultDestination"
                }
              })
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$r = [];
    __vue_render__$r._withStripped = true;

      /* style */
      const __vue_inject_styles__$r = undefined;
      /* scoped */
      const __vue_scope_id__$r = undefined;
      /* module identifier */
      const __vue_module_identifier__$r = undefined;
      /* functional template */
      const __vue_is_functional_template__$r = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$r = normalizeComponent(
        { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
        __vue_inject_styles__$r,
        __vue_script__$r,
        __vue_scope_id__$r,
        __vue_is_functional_template__$r,
        __vue_module_identifier__$r,
        false,
        undefined,
        undefined,
        undefined
      );

    var DeviceTypeMappingRouterDialog = /** @class */ (function (_super) {
        __extends(DeviceTypeMappingRouterDialog, _super);
        function DeviceTypeMappingRouterDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.deviceTypes = [];
            return _this;
        }
        /** Generate payload from UI */
        DeviceTypeMappingRouterDialog.prototype.generatePayload = function () {
            var payload = {};
            Object.assign(payload, this.$refs.mappings.save());
            return payload;
        };
        /** Reset dialog contents */
        DeviceTypeMappingRouterDialog.prototype.reset = function () {
            this.loadDeviceTypes();
            if (this.$refs.mappings) {
                this.$refs.mappings.reset();
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
                            criteria = { pageNumber: 1, pageSize: 0 };
                            format = {};
                            return [4 /*yield*/, sitewhereIdeCommon.listDeviceTypes(this.$store, criteria, format)];
                        case 1:
                            response = _a.sent();
                            this.deviceTypes = response.data.results;
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            sitewhereIdeCommon.showError(this, err_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /** Load dialog from a given configuration */
        DeviceTypeMappingRouterDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.mappings) {
                this.$refs.mappings.load(config);
            }
        };
        /** Called after create button is clicked */
        DeviceTypeMappingRouterDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.mappings.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
            this.closeDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], DeviceTypeMappingRouterDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], DeviceTypeMappingRouterDialog.prototype, "createLabel", void 0);
        DeviceTypeMappingRouterDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: { DeviceTypeMappingRouterFields: __vue_component__$r }
            })
        ], DeviceTypeMappingRouterDialog);
        return DeviceTypeMappingRouterDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$s = DeviceTypeMappingRouterDialog;

    /* template */
    var __vue_render__$s = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-base-dialog",
        {
          ref: "dialog",
          attrs: {
            icon: "fa-sitemap",
            title: _vm.title,
            width: "500",
            loaded: true,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: "Cancel"
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "tabs" },
            [_c("v-tab", { key: "manager" }, [_vm._v("Mappings")])],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "manager" },
                [
                  _c("device-type-mapping-router-fields", {
                    ref: "mappings",
                    attrs: { deviceTypes: _vm.deviceTypes }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$s = [];
    __vue_render__$s._withStripped = true;

      /* style */
      const __vue_inject_styles__$s = undefined;
      /* scoped */
      const __vue_scope_id__$s = undefined;
      /* module identifier */
      const __vue_module_identifier__$s = undefined;
      /* functional template */
      const __vue_is_functional_template__$s = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$s = normalizeComponent(
        { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
        __vue_inject_styles__$s,
        __vue_script__$s,
        __vue_scope_id__$s,
        __vue_is_functional_template__$s,
        __vue_module_identifier__$s,
        false,
        undefined,
        undefined,
        undefined
      );

    var DeviceTypeMappingRouterCreateDialog = /** @class */ (function (_super) {
        __extends(DeviceTypeMappingRouterCreateDialog, _super);
        function DeviceTypeMappingRouterCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        DeviceTypeMappingRouterCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        DeviceTypeMappingRouterCreateDialog.prototype.openDialog = function () {
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        DeviceTypeMappingRouterCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    DeviceTypeMappingRouterDialog: __vue_component__$s
                }
            })
        ], DeviceTypeMappingRouterCreateDialog);
        return DeviceTypeMappingRouterCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$t = DeviceTypeMappingRouterCreateDialog;

    /* template */
    var __vue_render__$t = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("device-type-mapping-router-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create Device Type Mapping Router",
          createLabel: "Create"
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$t = [];
    __vue_render__$t._withStripped = true;

      /* style */
      const __vue_inject_styles__$t = function (inject) {
        if (!inject) return
        inject("data-v-904dd628_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DeviceTypeMappingRouterCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$t = "data-v-904dd628";
      /* module identifier */
      const __vue_module_identifier__$t = undefined;
      /* functional template */
      const __vue_is_functional_template__$t = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$t = normalizeComponent(
        { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
        __vue_inject_styles__$t,
        __vue_script__$t,
        __vue_scope_id__$t,
        __vue_is_functional_template__$t,
        __vue_module_identifier__$t,
        false,
        createInjector,
        undefined,
        undefined
      );

    var CommandRouterSection = /** @class */ (function (_super) {
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
            this.$refs.chooser.openChooser();
        };
        /** Update command router settings */
        CommandRouterSection.prototype.onUpdateCommandRouter = function () { };
        /** Show dialog for creating command router */
        CommandRouterSection.prototype.onCommandRouterChosen = function (type) {
            if (type == "device-type-mapping") {
                this.$refs.dtmRouterCreate.openDialog();
            }
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], CommandRouterSection.prototype, "router", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], CommandRouterSection.prototype, "commandDestinations", void 0);
        CommandRouterSection = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    NewCommandRouterChooser: __vue_component__$p,
                    DeviceTypeMappingRouterSummary: __vue_component__$q,
                    DeviceTypeMappingRouterCreateDialog: __vue_component__$t
                }
            })
        ], CommandRouterSection);
        return CommandRouterSection;
    }(Vue));

    /* script */
    const __vue_script__$u = CommandRouterSection;

    /* template */
    var __vue_render__$u = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-content-section",
        { attrs: { icon: "fa-sitemap", fa: true, title: "Command Router" } },
        [
          _vm.router
            ? _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _vm.isDeviceTypeMappingRouter
                    ? _c("device-type-mapping-router-summary", {
                        attrs: { router: _vm.router }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("sw-content-link", {
                    staticClass: "mb-2",
                    attrs: {
                      icon: "fa-edit",
                      text: "Edit command router settings"
                    },
                    on: { linkClicked: _vm.onUpdateCommandRouter }
                  }),
                  _vm._v(" "),
                  _c("sw-content-link", {
                    attrs: { icon: "fa-trash", text: "Unset command router" },
                    on: { linkClicked: _vm.onUnsetCommandRouter }
                  })
                ],
                1
              )
            : _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("sw-content-warning", {
                    attrs: {
                      text:
                        "No command router is set. This will cause tenant engine startup to fail!"
                    }
                  }),
                  _vm._v(" "),
                  _c("sw-content-link", {
                    staticClass: "mt-3",
                    attrs: {
                      icon: "fa-plus-circle",
                      text: "Add new command router"
                    },
                    on: { linkClicked: _vm.onAddCommandRouter }
                  })
                ],
                1
              ),
          _vm._v(" "),
          _c("new-command-router-chooser", {
            ref: "chooser",
            on: { chosen: _vm.onCommandRouterChosen }
          }),
          _vm._v(" "),
          _c("device-type-mapping-router-create-dialog", { ref: "dtmRouterCreate" })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$u = [];
    __vue_render__$u._withStripped = true;

      /* style */
      const __vue_inject_styles__$u = function (inject) {
        if (!inject) return
        inject("data-v-1cf8327c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CommandRouterSection.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$u = "data-v-1cf8327c";
      /* module identifier */
      const __vue_module_identifier__$u = undefined;
      /* functional template */
      const __vue_is_functional_template__$u = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$u = normalizeComponent(
        { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
        __vue_inject_styles__$u,
        __vue_script__$u,
        __vue_scope_id__$u,
        __vue_is_functional_template__$u,
        __vue_module_identifier__$u,
        false,
        createInjector,
        undefined,
        undefined
      );

    var CommandDeliveryPlugin = /** @class */ (function (_super) {
        __extends(CommandDeliveryPlugin, _super);
        function CommandDeliveryPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CommandDeliveryPlugin.prototype, "icon", {
            /** Get page icon */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
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
        CommandDeliveryPlugin.prototype.onCommandDestinationCreated = function (config) {
            this.markDirty();
        };
        /** Handle command destination updated */
        CommandDeliveryPlugin.prototype.onCommandDestinationUpdated = function (originalId, config) {
            this.markDirty();
        };
        /** Handle command destination deleted */
        CommandDeliveryPlugin.prototype.onCommandDestinationDeleted = function (id) {
            this.markDirty();
        };
        /** Handle unsetting router */
        CommandDeliveryPlugin.prototype.onUnsetCommandRouter = function () {
            if (this.commandDeliveryConfiguration) {
                this.commandDeliveryConfiguration.router = null;
            }
            this.markDirty();
        };
        /** Mark data as having been updated */
        CommandDeliveryPlugin.prototype.markDirty = function () {
            this.$emit("dirty");
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], CommandDeliveryPlugin.prototype, "configuration", void 0);
        CommandDeliveryPlugin = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    TenantEnginePlugin: __vue_component__$6,
                    CommandDestinationsTable: __vue_component__$o,
                    CommandRouterSection: __vue_component__$u
                }
            })
        ], CommandDeliveryPlugin);
        return CommandDeliveryPlugin;
    }(Vue));

    /* script */
    const __vue_script__$v = CommandDeliveryPlugin;

    /* template */
    var __vue_render__$v = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "tenant-engine-plugin",
        { attrs: { configuration: _vm.configuration } },
        [
          _c("command-destinations-table", {
            attrs: {
              tenantId: _vm.tenantId,
              commandDestinations: _vm.commandDestinations
            },
            on: {
              create: _vm.onCommandDestinationCreated,
              update: _vm.onCommandDestinationUpdated,
              delete: _vm.onCommandDestinationDeleted
            }
          }),
          _vm._v(" "),
          _c("v-divider", { staticClass: "mt-4 mb-4" }),
          _vm._v(" "),
          _c("command-router-section", {
            attrs: {
              router: _vm.router,
              commandDestinations: _vm.commandDestinations
            },
            on: { unset: _vm.onUnsetCommandRouter }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$v = [];
    __vue_render__$v._withStripped = true;

      /* style */
      const __vue_inject_styles__$v = function (inject) {
        if (!inject) return
        inject("data-v-397f7bdc_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CommandDeliveryPlugin.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$v = "data-v-397f7bdc";
      /* module identifier */
      const __vue_module_identifier__$v = undefined;
      /* functional template */
      const __vue_is_functional_template__$v = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$v = normalizeComponent(
        { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
        __vue_inject_styles__$v,
        __vue_script__$v,
        __vue_scope_id__$v,
        __vue_is_functional_template__$v,
        __vue_module_identifier__$v,
        false,
        createInjector,
        undefined,
        undefined
      );

    var DeviceManagementPlugin = /** @class */ (function (_super) {
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
                this.deviceManagement.datastore = null;
            }
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], DeviceManagementPlugin.prototype, "configuration", void 0);
        DeviceManagementPlugin = __decorate([
            sitewhereIdeCommon.Component({
                components: { TenantEnginePlugin: __vue_component__$6, DatastoreSelector: __vue_component__$5 }
            })
        ], DeviceManagementPlugin);
        return DeviceManagementPlugin;
    }(Vue));

    /* script */
    const __vue_script__$w = DeviceManagementPlugin;

    /* template */
    var __vue_render__$w = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "tenant-engine-plugin",
        { attrs: { configuration: _vm.configuration } },
        [
          _c(
            "sw-content-section",
            {
              attrs: { icon: "fa-database", title: "Device Management Datastore" }
            },
            [
              _c("datastore-selector", {
                attrs: {
                  datastore: _vm.datastore,
                  instance: _vm.instanceManagement
                },
                on: { unsetDatastore: _vm.onUnsetDatastore }
              })
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$w = [];
    __vue_render__$w._withStripped = true;

      /* style */
      const __vue_inject_styles__$w = function (inject) {
        if (!inject) return
        inject("data-v-012e731f_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DeviceManagementPlugin.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$w = "data-v-012e731f";
      /* module identifier */
      const __vue_module_identifier__$w = undefined;
      /* functional template */
      const __vue_is_functional_template__$w = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$w = normalizeComponent(
        { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
        __vue_inject_styles__$w,
        __vue_script__$w,
        __vue_scope_id__$w,
        __vue_is_functional_template__$w,
        __vue_module_identifier__$w,
        false,
        createInjector,
        undefined,
        undefined
      );

    var NewEventSourceChooser = /** @class */ (function (_super) {
        __extends(NewEventSourceChooser, _super);
        function NewEventSourceChooser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NewEventSourceChooser.prototype, "icon", {
            /** Get page icon */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Open chooser */
        NewEventSourceChooser.prototype.openChooser = function () {
            this.$refs.dialog.openDialog();
        };
        /** Close chooser */
        NewEventSourceChooser.prototype.closeChooser = function () {
            this.$refs.dialog.closeDialog();
        };
        /** Close chooser on item click */
        NewEventSourceChooser.prototype.onChosen = function (id) {
            this.closeChooser();
            this.$emit("chosen", id);
        };
        NewEventSourceChooser = __decorate([
            sitewhereIdeCommon.Component({
                components: {}
            })
        ], NewEventSourceChooser);
        return NewEventSourceChooser;
    }(Vue));

    /* script */
    const __vue_script__$x = NewEventSourceChooser;

    /* template */
    var __vue_render__$x = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-new-element-chooser",
        {
          ref: "dialog",
          attrs: { icon: _vm.icon, title: "Add Event Source", width: "500" }
        },
        [
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "activemq-broker" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("ActiveMQ Broker Event Source")]
          ),
          _vm._v(" "),
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "activemq-client" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("ActiveMQ Client Event Source")]
          ),
          _vm._v(" "),
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "eventhub" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("Azure Event Hub Event Source")]
          ),
          _vm._v(" "),
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "coap" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("CoAP Server Event Source")]
          ),
          _vm._v(" "),
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "mqtt" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("MQTT Event Source")]
          ),
          _vm._v(" "),
          _c(
            "sw-new-element-entry",
            {
              attrs: { icon: "fa-globe", itemid: "rabbitmq" },
              on: { chosen: _vm.onChosen }
            },
            [_vm._v("RabbitMQ Event Source")]
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$x = [];
    __vue_render__$x._withStripped = true;

      /* style */
      const __vue_inject_styles__$x = function (inject) {
        if (!inject) return
        inject("data-v-6bde6aaa_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"NewEventSourceChooser.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$x = "data-v-6bde6aaa";
      /* module identifier */
      const __vue_module_identifier__$x = undefined;
      /* functional template */
      const __vue_is_functional_template__$x = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$x = normalizeComponent(
        { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
        __vue_inject_styles__$x,
        __vue_script__$x,
        __vue_scope_id__$x,
        __vue_is_functional_template__$x,
        __vue_module_identifier__$x,
        false,
        createInjector,
        undefined,
        undefined
      );

    var NoConfiguration$1 = /** @class */ (function (_super) {
        __extends(NoConfiguration, _super);
        function NoConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NoConfiguration = __decorate([
            sitewhereIdeCommon.Component({})
        ], NoConfiguration);
        return NoConfiguration;
    }(Vue));

    /* script */
    const __vue_script__$y = NoConfiguration$1;

    /* template */
    var __vue_render__$y = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c("v-card-text", { staticClass: "padded-message subheading" }, [
            _vm._v("This decoder has no configurable attributes.")
          ])
        ],
        1
      )
    };
    var __vue_staticRenderFns__$y = [];
    __vue_render__$y._withStripped = true;

      /* style */
      const __vue_inject_styles__$y = function (inject) {
        if (!inject) return
        inject("data-v-43498f83_0", { source: "\n.padded-message[data-v-43498f83] {\r\n  padding: 50px;\r\n  text-align: center;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\Derek\\Documents\\GitHub\\sitewhere-admin-ui-plugins\\src\\components\\plugins\\tenantengines\\eventsources\\decoders\\NoConfiguration.vue"],"names":[],"mappings":";AAiBA;EACA,aAAA;EACA,kBAAA;AACA","file":"NoConfiguration.vue","sourcesContent":["<template>\r\n  <v-card flat\r\n    ><v-card-text class=\"padded-message subheading\"\r\n      >This decoder has no configurable attributes.</v-card-text\r\n    ></v-card\r\n  >\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport Vue from \"vue\";\r\nimport { Component } from \"sitewhere-ide-common\";\r\n\r\n@Component({})\r\nexport default class NoConfiguration extends Vue {}\r\n</script>\r\n\r\n<style scoped>\r\n.padded-message {\r\n  padding: 50px;\r\n  text-align: center;\r\n}\r\n</style>\r\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$y = "data-v-43498f83";
      /* module identifier */
      const __vue_module_identifier__$y = undefined;
      /* functional template */
      const __vue_is_functional_template__$y = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$y = normalizeComponent(
        { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
        __vue_inject_styles__$y,
        __vue_script__$y,
        __vue_scope_id__$y,
        __vue_is_functional_template__$y,
        __vue_module_identifier__$y,
        false,
        createInjector,
        undefined,
        undefined
      );

    var JsonDecoderConfiguration = /** @class */ (function (_super) {
        __extends(JsonDecoderConfiguration, _super);
        function JsonDecoderConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** Reset section content */
        JsonDecoderConfiguration.prototype.reset = function () { };
        /** Perform validation */
        JsonDecoderConfiguration.prototype.validate = function () {
            return true;
        };
        /** Load form data from an object */
        JsonDecoderConfiguration.prototype.load = function (input) { };
        /** Save form data to an object */
        JsonDecoderConfiguration.prototype.save = function () {
            return {};
        };
        JsonDecoderConfiguration = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    NoConfiguration: __vue_component__$y
                }
            })
        ], JsonDecoderConfiguration);
        return JsonDecoderConfiguration;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$z = JsonDecoderConfiguration;

    /* template */
    var __vue_render__$z = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("no-configuration")
    };
    var __vue_staticRenderFns__$z = [];
    __vue_render__$z._withStripped = true;

      /* style */
      const __vue_inject_styles__$z = undefined;
      /* scoped */
      const __vue_scope_id__$z = undefined;
      /* module identifier */
      const __vue_module_identifier__$z = undefined;
      /* functional template */
      const __vue_is_functional_template__$z = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$z = normalizeComponent(
        { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
        __vue_inject_styles__$z,
        __vue_script__$z,
        __vue_scope_id__$z,
        __vue_is_functional_template__$z,
        __vue_module_identifier__$z,
        false,
        undefined,
        undefined,
        undefined
      );

    var ProtobufDecoderConfiguration = /** @class */ (function (_super) {
        __extends(ProtobufDecoderConfiguration, _super);
        function ProtobufDecoderConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** Reset section content */
        ProtobufDecoderConfiguration.prototype.reset = function () { };
        /** Perform validation */
        ProtobufDecoderConfiguration.prototype.validate = function () {
            return true;
        };
        /** Load form data from an object */
        ProtobufDecoderConfiguration.prototype.load = function (input) { };
        /** Save form data to an object */
        ProtobufDecoderConfiguration.prototype.save = function () {
            return {};
        };
        ProtobufDecoderConfiguration = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    NoConfiguration: __vue_component__$y
                }
            })
        ], ProtobufDecoderConfiguration);
        return ProtobufDecoderConfiguration;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$A = ProtobufDecoderConfiguration;

    /* template */
    var __vue_render__$A = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("no-configuration")
    };
    var __vue_staticRenderFns__$A = [];
    __vue_render__$A._withStripped = true;

      /* style */
      const __vue_inject_styles__$A = undefined;
      /* scoped */
      const __vue_scope_id__$A = undefined;
      /* module identifier */
      const __vue_module_identifier__$A = undefined;
      /* functional template */
      const __vue_is_functional_template__$A = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$A = normalizeComponent(
        { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
        __vue_inject_styles__$A,
        __vue_script__$A,
        __vue_scope_id__$A,
        __vue_is_functional_template__$A,
        __vue_module_identifier__$A,
        false,
        undefined,
        undefined,
        undefined
      );

    var ScriptedDecoderFields = /** @class */ (function (_super) {
        __extends(ScriptedDecoderFields, _super);
        function ScriptedDecoderFields() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.scriptId = null;
            return _this;
        }
        /** Reset section content */
        ScriptedDecoderFields.prototype.reset = function () {
            if (this.$refs.chooser) {
                this.$refs.chooser.reset();
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ScriptedDecoderFields.prototype, "tenantId", void 0);
        ScriptedDecoderFields = __decorate([
            sitewhereIdeCommon.Component({
                validations: {
                    scriptId: {
                        required: validators_1
                    }
                }
            })
        ], ScriptedDecoderFields);
        return ScriptedDecoderFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$B = ScriptedDecoderFields;

    /* template */
    var __vue_render__$B = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs8: "" } },
            [
              _c(
                "sw-script-chooser",
                {
                  ref: "chooser",
                  staticClass: "mr-3",
                  attrs: {
                    label: "Event Decoder Script",
                    title: "Script used to decode event payloads.",
                    tenantId: _vm.tenantId,
                    functionalArea: "event-sources",
                    category: "event-sources-event-decoder-category",
                    icon: "fa-code"
                  },
                  model: {
                    value: _vm.scriptId,
                    callback: function($$v) {
                      _vm.scriptId = $$v;
                    },
                    expression: "scriptId"
                  }
                },
                [
                  !_vm.$v.scriptId.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Event decoder script is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$B = [];
    __vue_render__$B._withStripped = true;

      /* style */
      const __vue_inject_styles__$B = undefined;
      /* scoped */
      const __vue_scope_id__$B = undefined;
      /* module identifier */
      const __vue_module_identifier__$B = undefined;
      /* functional template */
      const __vue_is_functional_template__$B = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$B = normalizeComponent(
        { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
        __vue_inject_styles__$B,
        __vue_script__$B,
        __vue_scope_id__$B,
        __vue_is_functional_template__$B,
        __vue_module_identifier__$B,
        false,
        undefined,
        undefined,
        undefined
      );

    var ScriptedEventDecoderConfiguration = /** @class */ (function (_super) {
        __extends(ScriptedEventDecoderConfiguration, _super);
        function ScriptedEventDecoderConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** Reset section content */
        ScriptedEventDecoderConfiguration.prototype.reset = function () {
            if (this.$refs.script) {
                this.$refs.script.reset();
            }
        };
        /** Perform validation */
        ScriptedEventDecoderConfiguration.prototype.validate = function () {
            if (!this.$refs.script.validate()) {
                return false;
            }
            return true;
        };
        /** Load form data from an object */
        ScriptedEventDecoderConfiguration.prototype.load = function (input) {
            this.reset();
            if (this.$refs.script) {
                this.$refs.script.load(input);
            }
        };
        /** Save form data to an object */
        ScriptedEventDecoderConfiguration.prototype.save = function () {
            var payload = {};
            if (this.$refs.script) {
                Object.assign(payload, this.$refs.script.save());
            }
            return payload;
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ScriptedEventDecoderConfiguration.prototype, "tenantId", void 0);
        ScriptedEventDecoderConfiguration = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    ScriptedEventDecoderFields: __vue_component__$B
                }
            })
        ], ScriptedEventDecoderConfiguration);
        return ScriptedEventDecoderConfiguration;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$C = ScriptedEventDecoderConfiguration;

    /* template */
    var __vue_render__$C = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("scripted-event-decoder-fields", {
        ref: "script",
        attrs: { tenantId: _vm.tenantId }
      })
    };
    var __vue_staticRenderFns__$C = [];
    __vue_render__$C._withStripped = true;

      /* style */
      const __vue_inject_styles__$C = undefined;
      /* scoped */
      const __vue_scope_id__$C = undefined;
      /* module identifier */
      const __vue_module_identifier__$C = undefined;
      /* functional template */
      const __vue_is_functional_template__$C = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$C = normalizeComponent(
        { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
        __vue_inject_styles__$C,
        __vue_script__$C,
        __vue_scope_id__$C,
        __vue_is_functional_template__$C,
        __vue_module_identifier__$C,
        false,
        undefined,
        undefined,
        undefined
      );

    var DecoderConfiguration = /** @class */ (function (_super) {
        __extends(DecoderConfiguration, _super);
        function DecoderConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DecoderConfiguration.prototype.onDecoderTypeUpdated = function (updated) {
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
            if (this.$refs.details) {
                this.$refs.details.reset();
            }
        };
        /** Perform validation */
        DecoderConfiguration.prototype.validate = function () {
            if (this.$refs.details) {
                if (!this.$refs.details.validate()) {
                    return false;
                }
            }
            return true;
        };
        /** Load form data from an object */
        DecoderConfiguration.prototype.load = function (input) {
            var _this = this;
            this.$nextTick().then(function () {
                if (_this.$refs.details) {
                    _this.$refs.details.load(input.configuration);
                }
            });
        };
        /** Save form data to an object */
        DecoderConfiguration.prototype.save = function () {
            var config = {};
            if (this.$refs.details) {
                Object.assign(config, this.$refs.details.save());
            }
            return config;
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], DecoderConfiguration.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], DecoderConfiguration.prototype, "decoder", void 0);
        __decorate([
            sitewhereIdeCommon.Watch("decoderType", { immediate: true }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], DecoderConfiguration.prototype, "onDecoderTypeUpdated", null);
        DecoderConfiguration = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    JsonDecoderConfiguration: __vue_component__$z,
                    ProtobufDecoderConfiguration: __vue_component__$A,
                    ScriptedEventDecoderConfiguration: __vue_component__$C
                }
            })
        ], DecoderConfiguration);
        return DecoderConfiguration;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$D = DecoderConfiguration;

    /* template */
    var __vue_render__$D = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _vm.decoderType == "json"
            ? _c("json-decoder-configuration", { ref: "details" })
            : _vm._e(),
          _vm._v(" "),
          _vm.decoderType == "protobuf"
            ? _c("protobuf-decoder-configuration", { ref: "details" })
            : _vm._e(),
          _vm._v(" "),
          _vm.decoderType == "scripted"
            ? _c("scripted-event-decoder-configuration", {
                ref: "details",
                attrs: { tenantId: _vm.tenantId }
              })
            : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$D = [];
    __vue_render__$D._withStripped = true;

      /* style */
      const __vue_inject_styles__$D = undefined;
      /* scoped */
      const __vue_scope_id__$D = undefined;
      /* module identifier */
      const __vue_module_identifier__$D = undefined;
      /* functional template */
      const __vue_is_functional_template__$D = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$D = normalizeComponent(
        { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
        __vue_inject_styles__$D,
        __vue_script__$D,
        __vue_scope_id__$D,
        __vue_is_functional_template__$D,
        __vue_module_identifier__$D,
        false,
        undefined,
        undefined,
        undefined
      );

    /** Validator for checking if id is already used */
    var idConflict$1 = validators_2.withParams({ type: "idConflict" }, function (value, vm) {
        var idsInUse = vm.idsInUse;
        var conflict = false;
        idsInUse.forEach(function (id) {
            if (vm.id == id)
                conflict = true;
        });
        return !conflict;
    });
    var EventSourceDialog = /** @class */ (function (_super) {
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
        EventSourceDialog.prototype.save = function () {
            var config = { id: this.id, type: this.type };
            this.decoder.configuration = this.$refs.decoder.save();
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
            this.$refs.decoder.reset();
            this.$v.$reset();
        };
        /** Validate fields */
        EventSourceDialog.prototype.validate = function () {
            if (!this.$refs.decoder.validate()) {
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
            this.$refs.dialog.setActiveTab(tab);
        };
        /** Called after create button is clicked */
        EventSourceDialog.prototype.onCreateClicked = function (e) {
            this.$emit("createClicked", e);
        };
        /** Called after cancel button is clicked */
        EventSourceDialog.prototype.onCancelClicked = function (e) {
            this.$emit("cancelClicked", e);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventSourceDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventSourceDialog.prototype, "type", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventSourceDialog.prototype, "icon", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventSourceDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], EventSourceDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventSourceDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventSourceDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Boolean)
        ], EventSourceDialog.prototype, "visible", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], EventSourceDialog.prototype, "idsInUse", void 0);
        EventSourceDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: { DecoderConfiguration: __vue_component__$D },
                validations: {
                    id: {
                        required: validators_1,
                        idConflict: idConflict$1
                    }
                }
            })
        ], EventSourceDialog);
        return EventSourceDialog;
    }(Vue));

    /* script */
    const __vue_script__$E = EventSourceDialog;

    /* template */
    var __vue_render__$E = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-base-dialog",
        {
          ref: "dialog",
          attrs: {
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            visible: _vm.visible,
            createLabel: _vm.createLabel || "Create",
            cancelLabel: _vm.cancelLabel || "Cancel"
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "header" },
            [
              _c(
                "sw-dialog-header",
                { staticClass: "pl-3 pr-3 pt-2 pb-1" },
                [
                  _c(
                    "v-layout",
                    {
                      staticClass: "pl-2 pr-2 pt-0 pb-0",
                      attrs: { row: "", wrap: "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs5: "" } },
                        [
                          _vm.visible
                            ? _c(
                                "sw-form-text",
                                {
                                  staticClass: "mr-3",
                                  attrs: {
                                    label: "Event source id",
                                    title: "Unique event source identifier.",
                                    icon: "info",
                                    dense: true,
                                    autofocus: true
                                  },
                                  model: {
                                    value: _vm.id,
                                    callback: function($$v) {
                                      _vm.id = $$v;
                                    },
                                    expression: "id"
                                  }
                                },
                                [
                                  !_vm.$v.id.required && _vm.$v.$dirty
                                    ? _c("span", [_vm._v("Id is required.")])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.$v.id.idConflict && _vm.$v.$dirty
                                    ? _c("span", [_vm._v("Id already in use.")])
                                    : _vm._e()
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs7: "" } },
                        [
                          _c("sw-form-select", {
                            attrs: {
                              items: _vm.decoderTypes,
                              title: "Choose decoder for event source",
                              label: "Decoder",
                              "item-text": "text",
                              "item-value": "value",
                              icon: "settings"
                            },
                            model: {
                              value: _vm.decoderType,
                              callback: function($$v) {
                                _vm.decoderType = $$v;
                              },
                              expression: "decoderType"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "tabs" },
            [
              _vm._t("event-source-tabs"),
              _vm._v(" "),
              _c("v-tab", { key: "decoder" }, [_vm._v("Decoder")])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "tab-items" },
            [
              _vm._t("event-source-tab-items"),
              _vm._v(" "),
              _c(
                "v-tab-item",
                { key: "decoder" },
                [
                  _c("decoder-configuration", {
                    ref: "decoder",
                    attrs: { decoder: _vm.decoder, tenantId: _vm.tenantId }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$E = [];
    __vue_render__$E._withStripped = true;

      /* style */
      const __vue_inject_styles__$E = undefined;
      /* scoped */
      const __vue_scope_id__$E = undefined;
      /* module identifier */
      const __vue_module_identifier__$E = undefined;
      /* functional template */
      const __vue_is_functional_template__$E = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$E = normalizeComponent(
        { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
        __vue_inject_styles__$E,
        __vue_script__$E,
        __vue_scope_id__$E,
        __vue_is_functional_template__$E,
        __vue_module_identifier__$E,
        false,
        undefined,
        undefined,
        undefined
      );

    var ActiveMqBrokerFields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({
                validations: {
                    brokerName: {
                        required: validators_1
                    },
                    transportUri: {
                        required: validators_1
                    },
                    queueName: {
                        required: validators_1
                    },
                    numConsumers: {
                        required: validators_1
                    }
                }
            })
        ], ActiveMqBrokerFields);
        return ActiveMqBrokerFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$F = ActiveMqBrokerFields;

    /* template */
    var __vue_render__$F = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Broker name",
                    title: "Broker name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.brokerName,
                    callback: function($$v) {
                      _vm.brokerName = $$v;
                    },
                    expression: "brokerName"
                  }
                },
                [
                  !_vm.$v.brokerName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Broker name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Transport URI",
                    title: "Transport URI.",
                    icon: "router"
                  },
                  model: {
                    value: _vm.transportUri,
                    callback: function($$v) {
                      _vm.transportUri = $$v;
                    },
                    expression: "transportUri"
                  }
                },
                [
                  !_vm.$v.transportUri.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Transport URI is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "mr-3",
                  attrs: {
                    required: "",
                    label: "Queue name",
                    title: "Queue name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.queueName,
                    callback: function($$v) {
                      _vm.queueName = $$v;
                    },
                    expression: "queueName"
                  }
                },
                [
                  !_vm.$v.queueName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Queue name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Number of consumers",
                    title: "Number of consumers.",
                    icon: "settings",
                    type: "number"
                  },
                  model: {
                    value: _vm.numConsumers,
                    callback: function($$v) {
                      _vm.numConsumers = $$v;
                    },
                    expression: "numConsumers"
                  }
                },
                [
                  !_vm.$v.numConsumers.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Number of consumers is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$F = [];
    __vue_render__$F._withStripped = true;

      /* style */
      const __vue_inject_styles__$F = undefined;
      /* scoped */
      const __vue_scope_id__$F = undefined;
      /* module identifier */
      const __vue_module_identifier__$F = undefined;
      /* functional template */
      const __vue_is_functional_template__$F = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$F = normalizeComponent(
        { render: __vue_render__$F, staticRenderFns: __vue_staticRenderFns__$F },
        __vue_inject_styles__$F,
        __vue_script__$F,
        __vue_scope_id__$F,
        __vue_is_functional_template__$F,
        __vue_module_identifier__$F,
        false,
        undefined,
        undefined,
        undefined
      );

    var ActiveMqBrokerEventSourceDialog = /** @class */ (function (_super) {
        __extends(ActiveMqBrokerEventSourceDialog, _super);
        function ActiveMqBrokerEventSourceDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActiveMqBrokerEventSourceDialog.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        ActiveMqBrokerEventSourceDialog.prototype.generatePayload = function () {
            var config = {};
            Object.assign(config, this.$refs.broker.save());
            var payload = {};
            Object.assign(payload, this.$refs.dialog.save());
            payload.configuration = config;
            return payload;
        };
        /** Reset dialog contents */
        ActiveMqBrokerEventSourceDialog.prototype.reset = function () {
            if (this.$refs.broker) {
                this.$refs.broker.reset();
            }
            this.$refs.dialog.reset();
        };
        /** Load dialog from a given configuration */
        ActiveMqBrokerEventSourceDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.dialog) {
                this.$refs.dialog.load(config);
            }
            if (this.$refs.broker) {
                this.$refs.broker.load(config.configuration);
            }
        };
        /** Called after create button is clicked */
        ActiveMqBrokerEventSourceDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.dialog.validate()) {
                return;
            }
            if (!this.$refs.broker.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqBrokerEventSourceDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqBrokerEventSourceDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], ActiveMqBrokerEventSourceDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqBrokerEventSourceDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqBrokerEventSourceDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], ActiveMqBrokerEventSourceDialog.prototype, "idsInUse", void 0);
        ActiveMqBrokerEventSourceDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    EventSourceDialog: __vue_component__$E,
                    ActiveMqBrokerFields: __vue_component__$F
                }
            })
        ], ActiveMqBrokerEventSourceDialog);
        return ActiveMqBrokerEventSourceDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$G = ActiveMqBrokerEventSourceDialog;

    /* template */
    var __vue_render__$G = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "event-source-dialog",
        {
          ref: "dialog",
          attrs: {
            type: "activemq-broker",
            tenantId: _vm.tenantId,
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            idsInUse: _vm.idsInUse,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: _vm.cancelLabel
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "event-source-tabs" },
            [_c("v-tab", { key: "broker" }, [_vm._v("Broker")])],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "event-source-tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "broker" },
                [_c("active-mq-broker-fields", { ref: "broker" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$G = [];
    __vue_render__$G._withStripped = true;

      /* style */
      const __vue_inject_styles__$G = undefined;
      /* scoped */
      const __vue_scope_id__$G = undefined;
      /* module identifier */
      const __vue_module_identifier__$G = undefined;
      /* functional template */
      const __vue_is_functional_template__$G = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$G = normalizeComponent(
        { render: __vue_render__$G, staticRenderFns: __vue_staticRenderFns__$G },
        __vue_inject_styles__$G,
        __vue_script__$G,
        __vue_scope_id__$G,
        __vue_is_functional_template__$G,
        __vue_module_identifier__$G,
        false,
        undefined,
        undefined,
        undefined
      );

    var ActiveMqBrokerEventSourceCreateDialog = /** @class */ (function (_super) {
        __extends(ActiveMqBrokerEventSourceCreateDialog, _super);
        function ActiveMqBrokerEventSourceCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        ActiveMqBrokerEventSourceCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        ActiveMqBrokerEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqBrokerEventSourceCreateDialog.prototype, "tenantId", void 0);
        ActiveMqBrokerEventSourceCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    ActiveMqBrokerEventSourceDialog: __vue_component__$G
                }
            })
        ], ActiveMqBrokerEventSourceCreateDialog);
        return ActiveMqBrokerEventSourceCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$H = ActiveMqBrokerEventSourceCreateDialog;

    /* template */
    var __vue_render__$H = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("active-mq-broker-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create ActiveMQ Broker Event Source",
          width: "700",
          createLabel: "Create",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$H = [];
    __vue_render__$H._withStripped = true;

      /* style */
      const __vue_inject_styles__$H = function (inject) {
        if (!inject) return
        inject("data-v-495d76ca_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ActiveMqBrokerEventSourceCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$H = "data-v-495d76ca";
      /* module identifier */
      const __vue_module_identifier__$H = undefined;
      /* functional template */
      const __vue_is_functional_template__$H = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$H = normalizeComponent(
        { render: __vue_render__$H, staticRenderFns: __vue_staticRenderFns__$H },
        __vue_inject_styles__$H,
        __vue_script__$H,
        __vue_scope_id__$H,
        __vue_is_functional_template__$H,
        __vue_module_identifier__$H,
        false,
        createInjector,
        undefined,
        undefined
      );

    var ActiveMqBrokerEventSourceUpdateDialog = /** @class */ (function (_super) {
        __extends(ActiveMqBrokerEventSourceUpdateDialog, _super);
        function ActiveMqBrokerEventSourceUpdateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.originalId = null;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        ActiveMqBrokerEventSourceUpdateDialog.prototype.onPayload = function (config) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", this.originalId, config);
        };
        /** Open dialog */
        ActiveMqBrokerEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
            this.originalId = config.id;
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(config);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqBrokerEventSourceUpdateDialog.prototype, "tenantId", void 0);
        ActiveMqBrokerEventSourceUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    ActiveMqBrokerEventSourceDialog: __vue_component__$G
                }
            })
        ], ActiveMqBrokerEventSourceUpdateDialog);
        return ActiveMqBrokerEventSourceUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$I = ActiveMqBrokerEventSourceUpdateDialog;

    /* template */
    var __vue_render__$I = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("active-mq-broker-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update ActiveMQ Broker Event Source",
          width: "700",
          createLabel: "Update",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$I = [];
    __vue_render__$I._withStripped = true;

      /* style */
      const __vue_inject_styles__$I = function (inject) {
        if (!inject) return
        inject("data-v-23b2c714_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ActiveMqBrokerEventSourceUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$I = "data-v-23b2c714";
      /* module identifier */
      const __vue_module_identifier__$I = undefined;
      /* functional template */
      const __vue_is_functional_template__$I = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$I = normalizeComponent(
        { render: __vue_render__$I, staticRenderFns: __vue_staticRenderFns__$I },
        __vue_inject_styles__$I,
        __vue_script__$I,
        __vue_scope_id__$I,
        __vue_is_functional_template__$I,
        __vue_module_identifier__$I,
        false,
        createInjector,
        undefined,
        undefined
      );

    var ActiveMqClientFields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({
                validations: {
                    remoteUri: {
                        required: validators_1
                    },
                    queueName: {
                        required: validators_1
                    },
                    numConsumers: {
                        required: validators_1
                    }
                }
            })
        ], ActiveMqClientFields);
        return ActiveMqClientFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$J = ActiveMqClientFields;

    /* template */
    var __vue_render__$J = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Remote URI",
                    title: "Remote URI.",
                    icon: "router"
                  },
                  model: {
                    value: _vm.remoteUri,
                    callback: function($$v) {
                      _vm.remoteUri = $$v;
                    },
                    expression: "remoteUri"
                  }
                },
                [
                  !_vm.$v.remoteUri.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Remote URI is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "mr-3",
                  attrs: {
                    required: "",
                    label: "Queue name",
                    title: "Queue name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.queueName,
                    callback: function($$v) {
                      _vm.queueName = $$v;
                    },
                    expression: "queueName"
                  }
                },
                [
                  !_vm.$v.queueName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Queue name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Number of consumers",
                    title: "Number of consumers.",
                    icon: "settings",
                    type: "number"
                  },
                  model: {
                    value: _vm.numConsumers,
                    callback: function($$v) {
                      _vm.numConsumers = $$v;
                    },
                    expression: "numConsumers"
                  }
                },
                [
                  !_vm.$v.numConsumers.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Number of consumers is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$J = [];
    __vue_render__$J._withStripped = true;

      /* style */
      const __vue_inject_styles__$J = undefined;
      /* scoped */
      const __vue_scope_id__$J = undefined;
      /* module identifier */
      const __vue_module_identifier__$J = undefined;
      /* functional template */
      const __vue_is_functional_template__$J = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$J = normalizeComponent(
        { render: __vue_render__$J, staticRenderFns: __vue_staticRenderFns__$J },
        __vue_inject_styles__$J,
        __vue_script__$J,
        __vue_scope_id__$J,
        __vue_is_functional_template__$J,
        __vue_module_identifier__$J,
        false,
        undefined,
        undefined,
        undefined
      );

    var ActiveMqClientEventSourceDialog = /** @class */ (function (_super) {
        __extends(ActiveMqClientEventSourceDialog, _super);
        function ActiveMqClientEventSourceDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActiveMqClientEventSourceDialog.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        ActiveMqClientEventSourceDialog.prototype.generatePayload = function () {
            var config = {};
            Object.assign(config, this.$refs.client.save());
            var payload = {};
            Object.assign(payload, this.$refs.dialog.save());
            payload.configuration = config;
            return payload;
        };
        /** Reset dialog contents */
        ActiveMqClientEventSourceDialog.prototype.reset = function () {
            if (this.$refs.client) {
                this.$refs.client.reset();
            }
            this.$refs.dialog.reset();
        };
        /** Load dialog from a given configuration */
        ActiveMqClientEventSourceDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.dialog) {
                this.$refs.dialog.load(config);
            }
            if (this.$refs.client) {
                this.$refs.client.load(config.configuration);
            }
        };
        /** Called after create button is clicked */
        ActiveMqClientEventSourceDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.dialog.validate()) {
                return;
            }
            if (!this.$refs.client.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqClientEventSourceDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqClientEventSourceDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], ActiveMqClientEventSourceDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqClientEventSourceDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqClientEventSourceDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], ActiveMqClientEventSourceDialog.prototype, "idsInUse", void 0);
        ActiveMqClientEventSourceDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    EventSourceDialog: __vue_component__$E,
                    ActiveMqClientFields: __vue_component__$J
                }
            })
        ], ActiveMqClientEventSourceDialog);
        return ActiveMqClientEventSourceDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$K = ActiveMqClientEventSourceDialog;

    /* template */
    var __vue_render__$K = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "event-source-dialog",
        {
          ref: "dialog",
          attrs: {
            type: "activemq-client",
            tenantId: _vm.tenantId,
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            idsInUse: _vm.idsInUse,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: _vm.cancelLabel
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "event-source-tabs" },
            [_c("v-tab", { key: "client" }, [_vm._v("Client")])],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "event-source-tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "client" },
                [_c("active-mq-client-fields", { ref: "client" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$K = [];
    __vue_render__$K._withStripped = true;

      /* style */
      const __vue_inject_styles__$K = undefined;
      /* scoped */
      const __vue_scope_id__$K = undefined;
      /* module identifier */
      const __vue_module_identifier__$K = undefined;
      /* functional template */
      const __vue_is_functional_template__$K = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$K = normalizeComponent(
        { render: __vue_render__$K, staticRenderFns: __vue_staticRenderFns__$K },
        __vue_inject_styles__$K,
        __vue_script__$K,
        __vue_scope_id__$K,
        __vue_is_functional_template__$K,
        __vue_module_identifier__$K,
        false,
        undefined,
        undefined,
        undefined
      );

    var ActiveMqBrokerEventSourceCreateDialog$1 = /** @class */ (function (_super) {
        __extends(ActiveMqBrokerEventSourceCreateDialog, _super);
        function ActiveMqBrokerEventSourceCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        ActiveMqBrokerEventSourceCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        ActiveMqBrokerEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqBrokerEventSourceCreateDialog.prototype, "tenantId", void 0);
        ActiveMqBrokerEventSourceCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    ActiveMqClientEventSourceDialog: __vue_component__$K
                }
            })
        ], ActiveMqBrokerEventSourceCreateDialog);
        return ActiveMqBrokerEventSourceCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$L = ActiveMqBrokerEventSourceCreateDialog$1;

    /* template */
    var __vue_render__$L = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("active-mq-client-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create ActiveMQ Client Event Source",
          width: "700",
          createLabel: "Create",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$L = [];
    __vue_render__$L._withStripped = true;

      /* style */
      const __vue_inject_styles__$L = function (inject) {
        if (!inject) return
        inject("data-v-479d0845_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ActiveMqClientEventSourceCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$L = "data-v-479d0845";
      /* module identifier */
      const __vue_module_identifier__$L = undefined;
      /* functional template */
      const __vue_is_functional_template__$L = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$L = normalizeComponent(
        { render: __vue_render__$L, staticRenderFns: __vue_staticRenderFns__$L },
        __vue_inject_styles__$L,
        __vue_script__$L,
        __vue_scope_id__$L,
        __vue_is_functional_template__$L,
        __vue_module_identifier__$L,
        false,
        createInjector,
        undefined,
        undefined
      );

    var ActiveMqClientEventSourceUpdateDialog = /** @class */ (function (_super) {
        __extends(ActiveMqClientEventSourceUpdateDialog, _super);
        function ActiveMqClientEventSourceUpdateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.originalId = null;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        ActiveMqClientEventSourceUpdateDialog.prototype.onPayload = function (config) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", this.originalId, config);
        };
        /** Open dialog */
        ActiveMqClientEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
            this.originalId = config.id;
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(config);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], ActiveMqClientEventSourceUpdateDialog.prototype, "tenantId", void 0);
        ActiveMqClientEventSourceUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    ActiveMqClientEventSourceDialog: __vue_component__$K
                }
            })
        ], ActiveMqClientEventSourceUpdateDialog);
        return ActiveMqClientEventSourceUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$M = ActiveMqClientEventSourceUpdateDialog;

    /* template */
    var __vue_render__$M = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("active-mq-client-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update ActiveMQ Client Event Source",
          width: "700",
          createLabel: "Update",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$M = [];
    __vue_render__$M._withStripped = true;

      /* style */
      const __vue_inject_styles__$M = function (inject) {
        if (!inject) return
        inject("data-v-7fd51f76_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ActiveMqClientEventSourceUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$M = "data-v-7fd51f76";
      /* module identifier */
      const __vue_module_identifier__$M = undefined;
      /* functional template */
      const __vue_is_functional_template__$M = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$M = normalizeComponent(
        { render: __vue_render__$M, staticRenderFns: __vue_staticRenderFns__$M },
        __vue_inject_styles__$M,
        __vue_script__$M,
        __vue_scope_id__$M,
        __vue_is_functional_template__$M,
        __vue_module_identifier__$M,
        false,
        createInjector,
        undefined,
        undefined
      );

    var CoapServerFields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({
                validations: {
                    port: {
                        required: validators_1
                    }
                }
            })
        ], CoapServerFields);
        return CoapServerFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$N = CoapServerFields;

    /* template */
    var __vue_render__$N = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Server port",
                    title: "CoAP server port.",
                    type: "number"
                  },
                  model: {
                    value: _vm.port,
                    callback: function($$v) {
                      _vm.port = $$v;
                    },
                    expression: "port"
                  }
                },
                [
                  !_vm.$v.port.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Port is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$N = [];
    __vue_render__$N._withStripped = true;

      /* style */
      const __vue_inject_styles__$N = undefined;
      /* scoped */
      const __vue_scope_id__$N = undefined;
      /* module identifier */
      const __vue_module_identifier__$N = undefined;
      /* functional template */
      const __vue_is_functional_template__$N = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$N = normalizeComponent(
        { render: __vue_render__$N, staticRenderFns: __vue_staticRenderFns__$N },
        __vue_inject_styles__$N,
        __vue_script__$N,
        __vue_scope_id__$N,
        __vue_is_functional_template__$N,
        __vue_module_identifier__$N,
        false,
        undefined,
        undefined,
        undefined
      );

    var CoapEventSourceDialog = /** @class */ (function (_super) {
        __extends(CoapEventSourceDialog, _super);
        function CoapEventSourceDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CoapEventSourceDialog.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        CoapEventSourceDialog.prototype.generatePayload = function () {
            var config = {};
            Object.assign(config, this.$refs.server.save());
            var payload = {};
            Object.assign(payload, this.$refs.dialog.save());
            payload.configuration = config;
            return payload;
        };
        /** Reset dialog contents */
        CoapEventSourceDialog.prototype.reset = function () {
            if (this.$refs.server) {
                this.$refs.server.reset();
            }
            this.$refs.dialog.reset();
        };
        /** Load dialog from a given configuration */
        CoapEventSourceDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.dialog) {
                this.$refs.dialog.load(config);
            }
            if (this.$refs.server) {
                this.$refs.server.load(config.configuration);
            }
        };
        /** Called after create button is clicked */
        CoapEventSourceDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.dialog.validate()) {
                return;
            }
            if (!this.$refs.server.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapEventSourceDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapEventSourceDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], CoapEventSourceDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapEventSourceDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapEventSourceDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], CoapEventSourceDialog.prototype, "idsInUse", void 0);
        CoapEventSourceDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    EventSourceDialog: __vue_component__$E,
                    CoapServerFields: __vue_component__$N
                }
            })
        ], CoapEventSourceDialog);
        return CoapEventSourceDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$O = CoapEventSourceDialog;

    /* template */
    var __vue_render__$O = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "event-source-dialog",
        {
          ref: "dialog",
          attrs: {
            type: "coap",
            tenantId: _vm.tenantId,
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            idsInUse: _vm.idsInUse,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: _vm.cancelLabel
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "event-source-tabs" },
            [_c("v-tab", { key: "server" }, [_vm._v("Server")])],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "event-source-tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "server" },
                [_c("coap-server-fields", { ref: "server" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$O = [];
    __vue_render__$O._withStripped = true;

      /* style */
      const __vue_inject_styles__$O = undefined;
      /* scoped */
      const __vue_scope_id__$O = undefined;
      /* module identifier */
      const __vue_module_identifier__$O = undefined;
      /* functional template */
      const __vue_is_functional_template__$O = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$O = normalizeComponent(
        { render: __vue_render__$O, staticRenderFns: __vue_staticRenderFns__$O },
        __vue_inject_styles__$O,
        __vue_script__$O,
        __vue_scope_id__$O,
        __vue_is_functional_template__$O,
        __vue_module_identifier__$O,
        false,
        undefined,
        undefined,
        undefined
      );

    var CoapEventSourceCreateDialog = /** @class */ (function (_super) {
        __extends(CoapEventSourceCreateDialog, _super);
        function CoapEventSourceCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        CoapEventSourceCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        CoapEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapEventSourceCreateDialog.prototype, "tenantId", void 0);
        CoapEventSourceCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    CoapEventSourceDialog: __vue_component__$O
                }
            })
        ], CoapEventSourceCreateDialog);
        return CoapEventSourceCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$P = CoapEventSourceCreateDialog;

    /* template */
    var __vue_render__$P = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("coap-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create CoAP Server Event Source",
          width: "700",
          createLabel: "Create",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$P = [];
    __vue_render__$P._withStripped = true;

      /* style */
      const __vue_inject_styles__$P = function (inject) {
        if (!inject) return
        inject("data-v-d962d522_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CoapEventSourceCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$P = "data-v-d962d522";
      /* module identifier */
      const __vue_module_identifier__$P = undefined;
      /* functional template */
      const __vue_is_functional_template__$P = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$P = normalizeComponent(
        { render: __vue_render__$P, staticRenderFns: __vue_staticRenderFns__$P },
        __vue_inject_styles__$P,
        __vue_script__$P,
        __vue_scope_id__$P,
        __vue_is_functional_template__$P,
        __vue_module_identifier__$P,
        false,
        createInjector,
        undefined,
        undefined
      );

    var CoapEventSourceUpdateDialog = /** @class */ (function (_super) {
        __extends(CoapEventSourceUpdateDialog, _super);
        function CoapEventSourceUpdateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.originalId = null;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        CoapEventSourceUpdateDialog.prototype.onPayload = function (config) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", this.originalId, config);
        };
        /** Open dialog */
        CoapEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
            this.originalId = config.id;
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(config);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], CoapEventSourceUpdateDialog.prototype, "tenantId", void 0);
        CoapEventSourceUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    CoapEventSourceDialog: __vue_component__$O
                }
            })
        ], CoapEventSourceUpdateDialog);
        return CoapEventSourceUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$Q = CoapEventSourceUpdateDialog;

    /* template */
    var __vue_render__$Q = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("coap-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update CoAP Server Event Source",
          width: "700",
          createLabel: "Update",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$Q = [];
    __vue_render__$Q._withStripped = true;

      /* style */
      const __vue_inject_styles__$Q = function (inject) {
        if (!inject) return
        inject("data-v-7c740a2c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CoapEventSourceUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$Q = "data-v-7c740a2c";
      /* module identifier */
      const __vue_module_identifier__$Q = undefined;
      /* functional template */
      const __vue_is_functional_template__$Q = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$Q = normalizeComponent(
        { render: __vue_render__$Q, staticRenderFns: __vue_staticRenderFns__$Q },
        __vue_inject_styles__$Q,
        __vue_script__$Q,
        __vue_scope_id__$Q,
        __vue_is_functional_template__$Q,
        __vue_module_identifier__$Q,
        false,
        createInjector,
        undefined,
        undefined
      );

    var EventHubFields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({
                validations: {
                    consumerGroupName: {
                        required: validators_1
                    },
                    namespaceName: {
                        required: validators_1
                    },
                    eventHubName: {
                        required: validators_1
                    },
                    sasKeyName: {
                        required: validators_1
                    },
                    sasKey: {
                        required: validators_1
                    },
                    storageConnectionString: {
                        required: validators_1
                    },
                    storageContainerName: {
                        required: validators_1
                    },
                    hostNamePrefix: {
                        required: validators_1
                    }
                }
            })
        ], EventHubFields);
        return EventHubFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$R = EventHubFields;

    /* template */
    var __vue_render__$R = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "mr-3",
                  attrs: {
                    required: "",
                    label: "Consumer group name",
                    title: "Consumer group name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.consumerGroupName,
                    callback: function($$v) {
                      _vm.consumerGroupName = $$v;
                    },
                    expression: "consumerGroupName"
                  }
                },
                [
                  !_vm.$v.consumerGroupName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Consumer group name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Namespace name",
                    title: "Namespace name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.namespaceName,
                    callback: function($$v) {
                      _vm.namespaceName = $$v;
                    },
                    expression: "namespaceName"
                  }
                },
                [
                  !_vm.$v.namespaceName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Namespace name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "mr-3",
                  attrs: {
                    required: "",
                    label: "Event Hub name",
                    title: "Event Hub name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.eventHubName,
                    callback: function($$v) {
                      _vm.eventHubName = $$v;
                    },
                    expression: "eventHubName"
                  }
                },
                [
                  !_vm.$v.eventHubName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Event Hub name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Host name prefix",
                    title: "Host name prefix.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.hostNamePrefix,
                    callback: function($$v) {
                      _vm.hostNamePrefix = $$v;
                    },
                    expression: "hostNamePrefix"
                  }
                },
                [
                  !_vm.$v.hostNamePrefix.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Host name prefix is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "mr-3",
                  attrs: {
                    required: "",
                    label: "SAS key name",
                    title: "SAS key name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.sasKeyName,
                    callback: function($$v) {
                      _vm.sasKeyName = $$v;
                    },
                    expression: "sasKeyName"
                  }
                },
                [
                  !_vm.$v.sasKeyName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("SAS key name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "SAS key",
                    title: "SAS key.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.sasKey,
                    callback: function($$v) {
                      _vm.sasKey = $$v;
                    },
                    expression: "sasKey"
                  }
                },
                [
                  !_vm.$v.sasKey.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("SAS key is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "mr-3",
                  attrs: {
                    required: "",
                    label: "Storage connection string",
                    title: "Storage connection string.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.storageConnectionString,
                    callback: function($$v) {
                      _vm.storageConnectionString = $$v;
                    },
                    expression: "storageConnectionString"
                  }
                },
                [
                  !_vm.$v.storageConnectionString.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Storage connection string is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Storage container name",
                    title: "Storage container name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.storageContainerName,
                    callback: function($$v) {
                      _vm.storageContainerName = $$v;
                    },
                    expression: "storageContainerName"
                  }
                },
                [
                  !_vm.$v.storageContainerName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Storage container name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$R = [];
    __vue_render__$R._withStripped = true;

      /* style */
      const __vue_inject_styles__$R = undefined;
      /* scoped */
      const __vue_scope_id__$R = undefined;
      /* module identifier */
      const __vue_module_identifier__$R = undefined;
      /* functional template */
      const __vue_is_functional_template__$R = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$R = normalizeComponent(
        { render: __vue_render__$R, staticRenderFns: __vue_staticRenderFns__$R },
        __vue_inject_styles__$R,
        __vue_script__$R,
        __vue_scope_id__$R,
        __vue_is_functional_template__$R,
        __vue_module_identifier__$R,
        false,
        undefined,
        undefined,
        undefined
      );

    var EventHubEventSourceDialog = /** @class */ (function (_super) {
        __extends(EventHubEventSourceDialog, _super);
        function EventHubEventSourceDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(EventHubEventSourceDialog.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        EventHubEventSourceDialog.prototype.generatePayload = function () {
            var config = {};
            Object.assign(config, this.$refs.connection.save());
            var payload = {};
            Object.assign(payload, this.$refs.dialog.save());
            payload.configuration = config;
            return payload;
        };
        /** Reset dialog contents */
        EventHubEventSourceDialog.prototype.reset = function () {
            if (this.$refs.connection) {
                this.$refs.connection.reset();
            }
            this.$refs.dialog.reset();
        };
        /** Load dialog from a given configuration */
        EventHubEventSourceDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.dialog) {
                this.$refs.dialog.load(config);
            }
            if (this.$refs.connection) {
                this.$refs.connection.load(config.configuration);
            }
        };
        /** Called after create button is clicked */
        EventHubEventSourceDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.dialog.validate()) {
                return;
            }
            if (!this.$refs.connection.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventHubEventSourceDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventHubEventSourceDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], EventHubEventSourceDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventHubEventSourceDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventHubEventSourceDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], EventHubEventSourceDialog.prototype, "idsInUse", void 0);
        EventHubEventSourceDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    EventSourceDialog: __vue_component__$E,
                    EventHubFields: __vue_component__$R
                }
            })
        ], EventHubEventSourceDialog);
        return EventHubEventSourceDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$S = EventHubEventSourceDialog;

    /* template */
    var __vue_render__$S = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "event-source-dialog",
        {
          ref: "dialog",
          attrs: {
            type: "eventhub",
            tenantId: _vm.tenantId,
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            idsInUse: _vm.idsInUse,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: _vm.cancelLabel
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "event-source-tabs" },
            [_c("v-tab", { key: "connection" }, [_vm._v("Connection")])],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "event-source-tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "connection" },
                [_c("event-hub-fields", { ref: "connection" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$S = [];
    __vue_render__$S._withStripped = true;

      /* style */
      const __vue_inject_styles__$S = undefined;
      /* scoped */
      const __vue_scope_id__$S = undefined;
      /* module identifier */
      const __vue_module_identifier__$S = undefined;
      /* functional template */
      const __vue_is_functional_template__$S = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$S = normalizeComponent(
        { render: __vue_render__$S, staticRenderFns: __vue_staticRenderFns__$S },
        __vue_inject_styles__$S,
        __vue_script__$S,
        __vue_scope_id__$S,
        __vue_is_functional_template__$S,
        __vue_module_identifier__$S,
        false,
        undefined,
        undefined,
        undefined
      );

    var EventHubEventSourceCreateDialog = /** @class */ (function (_super) {
        __extends(EventHubEventSourceCreateDialog, _super);
        function EventHubEventSourceCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        EventHubEventSourceCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        EventHubEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventHubEventSourceCreateDialog.prototype, "tenantId", void 0);
        EventHubEventSourceCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    EventHubEventSourceDialog: __vue_component__$S
                }
            })
        ], EventHubEventSourceCreateDialog);
        return EventHubEventSourceCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$T = EventHubEventSourceCreateDialog;

    /* template */
    var __vue_render__$T = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("event-hub-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create Azure Event Hub Event Source",
          width: "700",
          createLabel: "Create",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$T = [];
    __vue_render__$T._withStripped = true;

      /* style */
      const __vue_inject_styles__$T = function (inject) {
        if (!inject) return
        inject("data-v-69f53158_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EventHubEventSourceCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$T = "data-v-69f53158";
      /* module identifier */
      const __vue_module_identifier__$T = undefined;
      /* functional template */
      const __vue_is_functional_template__$T = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$T = normalizeComponent(
        { render: __vue_render__$T, staticRenderFns: __vue_staticRenderFns__$T },
        __vue_inject_styles__$T,
        __vue_script__$T,
        __vue_scope_id__$T,
        __vue_is_functional_template__$T,
        __vue_module_identifier__$T,
        false,
        createInjector,
        undefined,
        undefined
      );

    var EventHubEventSourceUpdateDialog = /** @class */ (function (_super) {
        __extends(EventHubEventSourceUpdateDialog, _super);
        function EventHubEventSourceUpdateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.originalId = null;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        EventHubEventSourceUpdateDialog.prototype.onPayload = function (config) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", this.originalId, config);
        };
        /** Open dialog */
        EventHubEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
            this.originalId = config.id;
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(config);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventHubEventSourceUpdateDialog.prototype, "tenantId", void 0);
        EventHubEventSourceUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    EventHubEventSourceDialog: __vue_component__$S
                }
            })
        ], EventHubEventSourceUpdateDialog);
        return EventHubEventSourceUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$U = EventHubEventSourceUpdateDialog;

    /* template */
    var __vue_render__$U = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("event-hub-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update Azure Event Hub Event Source",
          width: "700",
          createLabel: "Update",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$U = [];
    __vue_render__$U._withStripped = true;

      /* style */
      const __vue_inject_styles__$U = function (inject) {
        if (!inject) return
        inject("data-v-159c6767_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EventHubEventSourceUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$U = "data-v-159c6767";
      /* module identifier */
      const __vue_module_identifier__$U = undefined;
      /* functional template */
      const __vue_is_functional_template__$U = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$U = normalizeComponent(
        { render: __vue_render__$U, staticRenderFns: __vue_staticRenderFns__$U },
        __vue_inject_styles__$U,
        __vue_script__$U,
        __vue_scope_id__$U,
        __vue_is_functional_template__$U,
        __vue_module_identifier__$U,
        false,
        createInjector,
        undefined,
        undefined
      );

    var MqttConnectionFields$1 = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({
                validations: {
                    protocol: {
                        required: validators_1
                    },
                    hostname: {
                        required: validators_1
                    },
                    port: {
                        required: validators_1
                    },
                    topic: {
                        required: validators_1
                    },
                    qos: {
                        required: validators_1
                    },
                    numThreads: {
                        required: validators_1
                    }
                }
            })
        ], MqttConnectionFields);
        return MqttConnectionFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$V = MqttConnectionFields$1;

    /* template */
    var __vue_render__$V = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c("sw-form-select", {
                attrs: {
                  items: _vm.protocols,
                  title: "Choose connection protocol",
                  label: "Protocol",
                  "item-text": "text",
                  "item-value": "value",
                  icon: "lock"
                },
                model: {
                  value: _vm.protocol,
                  callback: function($$v) {
                    _vm.protocol = $$v;
                  },
                  expression: "protocol"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs8: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "ml-3 mr-3",
                  attrs: {
                    required: "",
                    label: "Hostname",
                    title: "MQTT broker hostname.",
                    icon: "router"
                  },
                  model: {
                    value: _vm.hostname,
                    callback: function($$v) {
                      _vm.hostname = $$v;
                    },
                    expression: "hostname"
                  }
                },
                [
                  !_vm.$v.hostname.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Hostname is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Port",
                    title: "MQTT broker port.",
                    type: "number"
                  },
                  model: {
                    value: _vm.port,
                    callback: function($$v) {
                      _vm.port = $$v;
                    },
                    expression: "port"
                  }
                },
                [
                  !_vm.$v.port.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "mb-4",
                  attrs: {
                    required: "",
                    label: "Topic",
                    title: "MQTT topic to listen on.",
                    icon: "arrow_forward"
                  },
                  model: {
                    value: _vm.topic,
                    callback: function($$v) {
                      _vm.topic = $$v;
                    },
                    expression: "topic"
                  }
                },
                [
                  !_vm.$v.topic.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Topic is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c("sw-form-select", {
                staticClass: "mr-3",
                attrs: {
                  items: _vm.qosValues,
                  title: "Choose quality of service (QoS)",
                  label: "QoS",
                  "item-text": "text",
                  "item-value": "value",
                  icon: "done"
                },
                model: {
                  value: _vm.qos,
                  callback: function($$v) {
                    _vm.qos = $$v;
                  },
                  expression: "qos"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Number of threads",
                    title: "Number of threads used to handle processing.",
                    icon: "settings",
                    type: "number"
                  },
                  model: {
                    value: _vm.numThreads,
                    callback: function($$v) {
                      _vm.numThreads = $$v;
                    },
                    expression: "numThreads"
                  }
                },
                [
                  !_vm.$v.numThreads.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Number of threads is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$V = [];
    __vue_render__$V._withStripped = true;

      /* style */
      const __vue_inject_styles__$V = undefined;
      /* scoped */
      const __vue_scope_id__$V = undefined;
      /* module identifier */
      const __vue_module_identifier__$V = undefined;
      /* functional template */
      const __vue_is_functional_template__$V = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$V = normalizeComponent(
        { render: __vue_render__$V, staticRenderFns: __vue_staticRenderFns__$V },
        __vue_inject_styles__$V,
        __vue_script__$V,
        __vue_scope_id__$V,
        __vue_is_functional_template__$V,
        __vue_module_identifier__$V,
        false,
        undefined,
        undefined,
        undefined
      );

    var MqttAuthenticationFields$1 = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({})
        ], MqttAuthenticationFields);
        return MqttAuthenticationFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$W = MqttAuthenticationFields$1;

    /* template */
    var __vue_render__$W = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs7: "" } },
            [
              _c("sw-form-text", {
                staticClass: "mr-3",
                attrs: {
                  label: "Username",
                  title: "Username for authentication.",
                  icon: "account_circle"
                },
                model: {
                  value: _vm.username,
                  callback: function($$v) {
                    _vm.username = $$v;
                  },
                  expression: "username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs5: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  label: "Password",
                  title: "Password for authentication.",
                  icon: "lock",
                  type: "password"
                },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v;
                  },
                  expression: "password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs7: "" } },
            [
              _c("sw-form-text", {
                staticClass: "mr-3",
                attrs: {
                  label: "Truststore path",
                  title: "Truststore path.",
                  icon: "info"
                },
                model: {
                  value: _vm.trustStorePath,
                  callback: function($$v) {
                    _vm.trustStorePath = $$v;
                  },
                  expression: "trustStorePath"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs5: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  label: "Truststore password",
                  title: "Truststore password.",
                  icon: "lock",
                  type: "password"
                },
                model: {
                  value: _vm.trustStorePassword,
                  callback: function($$v) {
                    _vm.trustStorePassword = $$v;
                  },
                  expression: "trustStorePassword"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs7: "" } },
            [
              _c("sw-form-text", {
                staticClass: "mr-3",
                attrs: {
                  label: "Keystore path",
                  title: "Keystore path.",
                  icon: "info"
                },
                model: {
                  value: _vm.keyStorePath,
                  callback: function($$v) {
                    _vm.keyStorePath = $$v;
                  },
                  expression: "keyStorePath"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs5: "" } },
            [
              _c("sw-form-text", {
                attrs: {
                  label: "Keystore password",
                  title: "Keystore password.",
                  icon: "lock",
                  type: "password"
                },
                model: {
                  value: _vm.keyStorePassword,
                  callback: function($$v) {
                    _vm.keyStorePassword = $$v;
                  },
                  expression: "keyStorePassword"
                }
              })
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$W = [];
    __vue_render__$W._withStripped = true;

      /* style */
      const __vue_inject_styles__$W = undefined;
      /* scoped */
      const __vue_scope_id__$W = undefined;
      /* module identifier */
      const __vue_module_identifier__$W = undefined;
      /* functional template */
      const __vue_is_functional_template__$W = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$W = normalizeComponent(
        { render: __vue_render__$W, staticRenderFns: __vue_staticRenderFns__$W },
        __vue_inject_styles__$W,
        __vue_script__$W,
        __vue_scope_id__$W,
        __vue_is_functional_template__$W,
        __vue_module_identifier__$W,
        false,
        undefined,
        undefined,
        undefined
      );

    var MqttEventSourceDialog = /** @class */ (function (_super) {
        __extends(MqttEventSourceDialog, _super);
        function MqttEventSourceDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MqttEventSourceDialog.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        MqttEventSourceDialog.prototype.generatePayload = function () {
            var config = {};
            Object.assign(config, this.$refs.connection.save());
            Object.assign(config, this.$refs.authentication.save());
            var payload = {};
            Object.assign(payload, this.$refs.dialog.save());
            payload.configuration = config;
            return payload;
        };
        /** Reset dialog contents */
        MqttEventSourceDialog.prototype.reset = function () {
            if (this.$refs.connection) {
                this.$refs.connection.reset();
            }
            if (this.$refs.authentication) {
                this.$refs.authentication.reset();
            }
            this.$refs.dialog.reset();
        };
        /** Load dialog from a given configuration */
        MqttEventSourceDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.dialog) {
                this.$refs.dialog.load(config);
            }
            if (this.$refs.connection) {
                this.$refs.connection.load(config.configuration);
            }
            if (this.$refs.authentication) {
                this.$refs.authentication.load(config.configuration);
            }
        };
        /** Called after create button is clicked */
        MqttEventSourceDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.dialog.validate()) {
                return;
            }
            if (!this.$refs.connection.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            if (!this.$refs.authentication.validate()) {
                this.$refs.dialog.setActiveTab(1);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttEventSourceDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttEventSourceDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], MqttEventSourceDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttEventSourceDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttEventSourceDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], MqttEventSourceDialog.prototype, "idsInUse", void 0);
        MqttEventSourceDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    EventSourceDialog: __vue_component__$E,
                    MqttConnectionFields: __vue_component__$V,
                    MqttAuthenticationFields: __vue_component__$W
                }
            })
        ], MqttEventSourceDialog);
        return MqttEventSourceDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$X = MqttEventSourceDialog;

    /* template */
    var __vue_render__$X = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "event-source-dialog",
        {
          ref: "dialog",
          attrs: {
            type: "mqtt",
            tenantId: _vm.tenantId,
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            idsInUse: _vm.idsInUse,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: _vm.cancelLabel
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "event-source-tabs" },
            [
              _c("v-tab", { key: "connection" }, [_vm._v("Connection")]),
              _vm._v(" "),
              _c("v-tab", { key: "authentication" }, [_vm._v("Authentication")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "event-source-tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "connection" },
                [_c("mqtt-connection-fields", { ref: "connection" })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                { key: "authentication" },
                [_c("mqtt-authentication-fields", { ref: "authentication" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$X = [];
    __vue_render__$X._withStripped = true;

      /* style */
      const __vue_inject_styles__$X = undefined;
      /* scoped */
      const __vue_scope_id__$X = undefined;
      /* module identifier */
      const __vue_module_identifier__$X = undefined;
      /* functional template */
      const __vue_is_functional_template__$X = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$X = normalizeComponent(
        { render: __vue_render__$X, staticRenderFns: __vue_staticRenderFns__$X },
        __vue_inject_styles__$X,
        __vue_script__$X,
        __vue_scope_id__$X,
        __vue_is_functional_template__$X,
        __vue_module_identifier__$X,
        false,
        undefined,
        undefined,
        undefined
      );

    var MqttEventSourceCreateDialog = /** @class */ (function (_super) {
        __extends(MqttEventSourceCreateDialog, _super);
        function MqttEventSourceCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        MqttEventSourceCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        MqttEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttEventSourceCreateDialog.prototype, "tenantId", void 0);
        MqttEventSourceCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    MqttEventSourceDialog: __vue_component__$X
                }
            })
        ], MqttEventSourceCreateDialog);
        return MqttEventSourceCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$Y = MqttEventSourceCreateDialog;

    /* template */
    var __vue_render__$Y = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("mqtt-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create MQTT Event Source",
          width: "700",
          createLabel: "Create",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$Y = [];
    __vue_render__$Y._withStripped = true;

      /* style */
      const __vue_inject_styles__$Y = function (inject) {
        if (!inject) return
        inject("data-v-00d7fb1e_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MqttEventSourceCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$Y = "data-v-00d7fb1e";
      /* module identifier */
      const __vue_module_identifier__$Y = undefined;
      /* functional template */
      const __vue_is_functional_template__$Y = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$Y = normalizeComponent(
        { render: __vue_render__$Y, staticRenderFns: __vue_staticRenderFns__$Y },
        __vue_inject_styles__$Y,
        __vue_script__$Y,
        __vue_scope_id__$Y,
        __vue_is_functional_template__$Y,
        __vue_module_identifier__$Y,
        false,
        createInjector,
        undefined,
        undefined
      );

    var MqttEventSourceUpdateDialog = /** @class */ (function (_super) {
        __extends(MqttEventSourceUpdateDialog, _super);
        function MqttEventSourceUpdateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.originalId = null;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        MqttEventSourceUpdateDialog.prototype.onPayload = function (config) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", this.originalId, config);
        };
        /** Open dialog */
        MqttEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
            this.originalId = config.id;
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(config);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], MqttEventSourceUpdateDialog.prototype, "tenantId", void 0);
        MqttEventSourceUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    MqttEventSourceDialog: __vue_component__$X
                }
            })
        ], MqttEventSourceUpdateDialog);
        return MqttEventSourceUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$Z = MqttEventSourceUpdateDialog;

    /* template */
    var __vue_render__$Z = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("mqtt-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update MQTT Event Source",
          width: "700",
          createLabel: "Update",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$Z = [];
    __vue_render__$Z._withStripped = true;

      /* style */
      const __vue_inject_styles__$Z = function (inject) {
        if (!inject) return
        inject("data-v-56e96894_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MqttEventSourceUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$Z = "data-v-56e96894";
      /* module identifier */
      const __vue_module_identifier__$Z = undefined;
      /* functional template */
      const __vue_is_functional_template__$Z = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$Z = normalizeComponent(
        { render: __vue_render__$Z, staticRenderFns: __vue_staticRenderFns__$Z },
        __vue_inject_styles__$Z,
        __vue_script__$Z,
        __vue_scope_id__$Z,
        __vue_is_functional_template__$Z,
        __vue_module_identifier__$Z,
        false,
        createInjector,
        undefined,
        undefined
      );

    var RabbitMqFields = /** @class */ (function (_super) {
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
            sitewhereIdeCommon.Component({
                validations: {
                    connectionUri: {
                        required: validators_1
                    },
                    queueName: {
                        required: validators_1
                    },
                    numConsumers: {
                        required: validators_1
                    },
                    reconnectInterval: {
                        required: validators_1
                    }
                }
            })
        ], RabbitMqFields);
        return RabbitMqFields;
    }(sitewhereIdeCommon.DialogSection));

    /* script */
    const __vue_script__$_ = RabbitMqFields;

    /* template */
    var __vue_render__$_ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "sw-dialog-form",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Connection URI",
                    title: "Connection URI.",
                    icon: "router"
                  },
                  model: {
                    value: _vm.connectionUri,
                    callback: function($$v) {
                      _vm.connectionUri = $$v;
                    },
                    expression: "connectionUri"
                  }
                },
                [
                  !_vm.$v.connectionUri.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Connection URI is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "sw-form-text",
                {
                  staticClass: "mr-3",
                  attrs: {
                    required: "",
                    label: "Queue name",
                    title: "Queue name.",
                    icon: "info"
                  },
                  model: {
                    value: _vm.queueName,
                    callback: function($$v) {
                      _vm.queueName = $$v;
                    },
                    expression: "queueName"
                  }
                },
                [
                  !_vm.$v.queueName.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Queue name is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Number of consumers",
                    title: "Number of consumers.",
                    icon: "settings",
                    type: "number"
                  },
                  model: {
                    value: _vm.numConsumers,
                    callback: function($$v) {
                      _vm.numConsumers = $$v;
                    },
                    expression: "numConsumers"
                  }
                },
                [
                  !_vm.$v.numConsumers.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Number of consumers is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "sw-form-text",
                {
                  attrs: {
                    required: "",
                    label: "Reconnection interval",
                    title: "Reconnection interval (in seconds).",
                    icon: "settings",
                    type: "number"
                  },
                  model: {
                    value: _vm.reconnectInterval,
                    callback: function($$v) {
                      _vm.reconnectInterval = $$v;
                    },
                    expression: "reconnectInterval"
                  }
                },
                [
                  !_vm.$v.reconnectInterval.required && _vm.$v.$dirty
                    ? _c("span", [_vm._v("Number of consumers is required.")])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$_ = [];
    __vue_render__$_._withStripped = true;

      /* style */
      const __vue_inject_styles__$_ = undefined;
      /* scoped */
      const __vue_scope_id__$_ = undefined;
      /* module identifier */
      const __vue_module_identifier__$_ = undefined;
      /* functional template */
      const __vue_is_functional_template__$_ = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$_ = normalizeComponent(
        { render: __vue_render__$_, staticRenderFns: __vue_staticRenderFns__$_ },
        __vue_inject_styles__$_,
        __vue_script__$_,
        __vue_scope_id__$_,
        __vue_is_functional_template__$_,
        __vue_module_identifier__$_,
        false,
        undefined,
        undefined,
        undefined
      );

    var RabbitMqEventSourceDialog = /** @class */ (function (_super) {
        __extends(RabbitMqEventSourceDialog, _super);
        function RabbitMqEventSourceDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RabbitMqEventSourceDialog.prototype, "icon", {
            /** Get icon for dialog */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
            },
            enumerable: true,
            configurable: true
        });
        /** Generate payload from UI */
        RabbitMqEventSourceDialog.prototype.generatePayload = function () {
            var config = {};
            Object.assign(config, this.$refs.client.save());
            var payload = {};
            Object.assign(payload, this.$refs.dialog.save());
            payload.configuration = config;
            return payload;
        };
        /** Reset dialog contents */
        RabbitMqEventSourceDialog.prototype.reset = function () {
            if (this.$refs.client) {
                this.$refs.client.reset();
            }
            this.$refs.dialog.reset();
        };
        /** Load dialog from a given configuration */
        RabbitMqEventSourceDialog.prototype.load = function (config) {
            this.reset();
            if (this.$refs.dialog) {
                this.$refs.dialog.load(config);
            }
            if (this.$refs.client) {
                this.$refs.client.load(config.configuration);
            }
        };
        /** Called after create button is clicked */
        RabbitMqEventSourceDialog.prototype.onCreateClicked = function (e) {
            if (!this.$refs.dialog.validate()) {
                return;
            }
            if (!this.$refs.client.validate()) {
                this.$refs.dialog.setActiveTab(0);
                return;
            }
            var payload = this.generatePayload();
            this.$emit("payload", payload);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], RabbitMqEventSourceDialog.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], RabbitMqEventSourceDialog.prototype, "title", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Number)
        ], RabbitMqEventSourceDialog.prototype, "width", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], RabbitMqEventSourceDialog.prototype, "createLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], RabbitMqEventSourceDialog.prototype, "cancelLabel", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], RabbitMqEventSourceDialog.prototype, "idsInUse", void 0);
        RabbitMqEventSourceDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    EventSourceDialog: __vue_component__$E,
                    RabbitMqFields: __vue_component__$_
                }
            })
        ], RabbitMqEventSourceDialog);
        return RabbitMqEventSourceDialog;
    }(sitewhereIdeCommon.DialogComponent));

    /* script */
    const __vue_script__$$ = RabbitMqEventSourceDialog;

    /* template */
    var __vue_render__$$ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "event-source-dialog",
        {
          ref: "dialog",
          attrs: {
            type: "rabbitmq",
            tenantId: _vm.tenantId,
            icon: _vm.icon,
            title: _vm.title,
            width: _vm.width,
            loaded: true,
            idsInUse: _vm.idsInUse,
            visible: _vm.dialogVisible,
            createLabel: _vm.createLabel,
            cancelLabel: _vm.cancelLabel
          },
          on: {
            createClicked: _vm.onCreateClicked,
            cancelClicked: _vm.onCancelClicked
          }
        },
        [
          _c(
            "template",
            { slot: "event-source-tabs" },
            [_c("v-tab", { key: "client" }, [_vm._v("Client")])],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "event-source-tab-items" },
            [
              _c(
                "v-tab-item",
                { key: "client" },
                [_c("rabbit-mq-fields", { ref: "client" })],
                1
              )
            ],
            1
          )
        ],
        2
      )
    };
    var __vue_staticRenderFns__$$ = [];
    __vue_render__$$._withStripped = true;

      /* style */
      const __vue_inject_styles__$$ = undefined;
      /* scoped */
      const __vue_scope_id__$$ = undefined;
      /* module identifier */
      const __vue_module_identifier__$$ = undefined;
      /* functional template */
      const __vue_is_functional_template__$$ = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$$ = normalizeComponent(
        { render: __vue_render__$$, staticRenderFns: __vue_staticRenderFns__$$ },
        __vue_inject_styles__$$,
        __vue_script__$$,
        __vue_scope_id__$$,
        __vue_is_functional_template__$$,
        __vue_module_identifier__$$,
        false,
        undefined,
        undefined,
        undefined
      );

    var RabbitMqEventSourceCreateDialog = /** @class */ (function (_super) {
        __extends(RabbitMqEventSourceCreateDialog, _super);
        function RabbitMqEventSourceCreateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        RabbitMqEventSourceCreateDialog.prototype.onPayload = function (payload) {
            this.$refs.dialog.closeDialog();
            this.$emit("create", payload);
        };
        /** Open dialog */
        RabbitMqEventSourceCreateDialog.prototype.openDialog = function (idsInUse) {
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], RabbitMqEventSourceCreateDialog.prototype, "tenantId", void 0);
        RabbitMqEventSourceCreateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    RabbitMqEventSourceDialog: __vue_component__$$
                }
            })
        ], RabbitMqEventSourceCreateDialog);
        return RabbitMqEventSourceCreateDialog;
    }(Vue));

    /* script */
    const __vue_script__$10 = RabbitMqEventSourceCreateDialog;

    /* template */
    var __vue_render__$10 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("rabbit-mq-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Create RabbitMQ Event Source",
          width: "700",
          createLabel: "Create",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$10 = [];
    __vue_render__$10._withStripped = true;

      /* style */
      const __vue_inject_styles__$10 = function (inject) {
        if (!inject) return
        inject("data-v-b956c218_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"RabbitMqEventSourceCreateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$10 = "data-v-b956c218";
      /* module identifier */
      const __vue_module_identifier__$10 = undefined;
      /* functional template */
      const __vue_is_functional_template__$10 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$10 = normalizeComponent(
        { render: __vue_render__$10, staticRenderFns: __vue_staticRenderFns__$10 },
        __vue_inject_styles__$10,
        __vue_script__$10,
        __vue_scope_id__$10,
        __vue_is_functional_template__$10,
        __vue_module_identifier__$10,
        false,
        createInjector,
        undefined,
        undefined
      );

    var RabbitMqEventSourceUpdateDialog = /** @class */ (function (_super) {
        __extends(RabbitMqEventSourceUpdateDialog, _super);
        function RabbitMqEventSourceUpdateDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.originalId = null;
            _this.idsInUse = [];
            return _this;
        }
        /** Emit payload */
        RabbitMqEventSourceUpdateDialog.prototype.onPayload = function (config) {
            this.$refs.dialog.closeDialog();
            this.$emit("update", this.originalId, config);
        };
        /** Open dialog */
        RabbitMqEventSourceUpdateDialog.prototype.openDialog = function (config, idsInUse) {
            this.originalId = config.id;
            this.idsInUse = idsInUse;
            this.$refs.dialog.reset();
            this.$refs.dialog.openDialog();
            this.$refs.dialog.load(config);
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], RabbitMqEventSourceUpdateDialog.prototype, "tenantId", void 0);
        RabbitMqEventSourceUpdateDialog = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    RabbitMqEventSourceDialog: __vue_component__$$
                }
            })
        ], RabbitMqEventSourceUpdateDialog);
        return RabbitMqEventSourceUpdateDialog;
    }(Vue));

    /* script */
    const __vue_script__$11 = RabbitMqEventSourceUpdateDialog;

    /* template */
    var __vue_render__$11 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("rabbit-mq-event-source-dialog", {
        ref: "dialog",
        attrs: {
          title: "Update RabbitMQ Event Source",
          width: "700",
          createLabel: "Update",
          cancelLabel: "Cancel",
          idsInUse: _vm.idsInUse,
          tenantId: _vm.tenantId
        },
        on: { payload: _vm.onPayload }
      })
    };
    var __vue_staticRenderFns__$11 = [];
    __vue_render__$11._withStripped = true;

      /* style */
      const __vue_inject_styles__$11 = function (inject) {
        if (!inject) return
        inject("data-v-499c13fe_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"RabbitMqEventSourceUpdateDialog.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$11 = "data-v-499c13fe";
      /* module identifier */
      const __vue_module_identifier__$11 = undefined;
      /* functional template */
      const __vue_is_functional_template__$11 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$11 = normalizeComponent(
        { render: __vue_render__$11, staticRenderFns: __vue_staticRenderFns__$11 },
        __vue_inject_styles__$11,
        __vue_script__$11,
        __vue_scope_id__$11,
        __vue_is_functional_template__$11,
        __vue_module_identifier__$11,
        false,
        createInjector,
        undefined,
        undefined
      );

    var EventSourcesTable = /** @class */ (function (_super) {
        __extends(EventSourcesTable, _super);
        function EventSourcesTable() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.headers = [
                { text: "Id", value: "id" },
                { text: "Type", value: "type" },
                { text: "Decoder", value: "decoder" },
                { text: "", value: "delete" }
            ];
            /** Event sources in format for display */
            _this.eventSourcesAsSortedArray = [];
            return _this;
        }
        EventSourcesTable.prototype.onEventSourcesUpdated = function (updated) {
            this.calculateEventSourcesAsSortedArray();
        };
        Object.defineProperty(EventSourcesTable.prototype, "icon", {
            /** Get page icon */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
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
            var all = [];
            if (this.eventSources) {
                this.eventSources.forEach(function (source) {
                    var meta = {};
                    meta.id = source.id;
                    meta.type = source.type;
                    meta.decoder = source.decoder;
                    var config = source.configuration;
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
            this.$refs.chooser.openChooser();
        };
        /** Called to create a new event source based on type */
        EventSourcesTable.prototype.onEventSourceCreate = function (id) {
            var idsInUse = this.findIdsInUse();
            if (id == "activemq-broker") {
                this.$refs.amqBrokerCreate.openDialog(idsInUse);
            }
            else if (id == "activemq-client") {
                this.$refs.amqClientCreate.openDialog(idsInUse);
            }
            else if (id == "coap") {
                this.$refs.coapCreate.openDialog(idsInUse);
            }
            else if (id == "eventhub") {
                this.$refs.eventHubCreate.openDialog(idsInUse);
            }
            else if (id == "mqtt") {
                this.$refs.mqttCreate.openDialog(idsInUse);
            }
            else if (id == "rabbitmq") {
                this.$refs.rabbitMqCreate.openDialog(idsInUse);
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
                    this.$refs.amqBrokerUpdate.openDialog(config, idsInUse);
                }
                else if (config.type === "activemq-client") {
                    this.$refs.amqClientUpdate.openDialog(config, idsInUse);
                }
                else if (config.type === "coap") {
                    this.$refs.coapUpdate.openDialog(config, idsInUse);
                }
                else if (config.type === "eventhub") {
                    this.$refs.eventHubUpdate.openDialog(config, idsInUse);
                }
                else if (config.type === "mqtt") {
                    this.$refs.mqttUpdate.openDialog(config, idsInUse);
                }
                else if (config.type === "rabbitmq") {
                    this.$refs.rabbitMqUpdate.openDialog(config, idsInUse);
                }
            }
        };
        /** Called when event source is updated */
        EventSourcesTable.prototype.onEventSourceUpdated = function (originalId, config) {
            var index = this.getEventSourceIndex(originalId);
            if (this.eventSources && index != null) {
                Vue.set(this.eventSources, index, config);
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
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", String)
        ], EventSourcesTable.prototype, "tenantId", void 0);
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Array)
        ], EventSourcesTable.prototype, "eventSources", void 0);
        __decorate([
            sitewhereIdeCommon.Watch("eventSources", { immediate: true }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], EventSourcesTable.prototype, "onEventSourcesUpdated", null);
        EventSourcesTable = __decorate([
            sitewhereIdeCommon.Component({
                components: {
                    NewEventSourceChooser: __vue_component__$x,
                    ActiveMqBrokerEventSourceCreateDialog: __vue_component__$H,
                    ActiveMqBrokerEventSourceUpdateDialog: __vue_component__$I,
                    ActiveMqClientEventSourceCreateDialog: __vue_component__$L,
                    ActiveMqClientEventSourceUpdateDialog: __vue_component__$M,
                    CoapEventSourceCreateDialog: __vue_component__$P,
                    CoapEventSourceUpdateDialog: __vue_component__$Q,
                    EventHubEventSourceCreateDialog: __vue_component__$T,
                    EventHubEventSourceUpdateDialog: __vue_component__$U,
                    MqttEventSourceCreateDialog: __vue_component__$Y,
                    MqttEventSourceUpdateDialog: __vue_component__$Z,
                    RabbitMqEventSourceCreateDialog: __vue_component__$10,
                    RabbitMqEventSourceUpdateDialog: __vue_component__$11
                }
            })
        ], EventSourcesTable);
        return EventSourcesTable;
    }(Vue));

    /* script */
    const __vue_script__$12 = EventSourcesTable;

    /* template */
    var __vue_render__$12 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("sw-datatable-section", {
        attrs: {
          icon: _vm.icon,
          title: "Event Sources",
          headers: _vm.headers,
          items: _vm.eventSourcesAsSortedArray,
          width: "50%"
        },
        scopedSlots: _vm._u([
          {
            key: "items",
            fn: function(props) {
              return [
                _c(
                  "td",
                  [
                    _c("sw-datatable-link", {
                      attrs: { text: props.item.meta.id },
                      on: {
                        linkClicked: function($event) {
                          return _vm.onOpenEventSource(props.item.meta.id)
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(props.item.meta.type))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(props.item.decoder.type))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c("sw-content-delete-icon", {
                      on: {
                        delete: function($event) {
                          return _vm.onDeleteEventSource(props.item.meta.id)
                        }
                      }
                    })
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "datatable-footer",
            fn: function() {
              return [
                _c("sw-content-link", {
                  staticClass: "mt-3",
                  attrs: { icon: "fa-plus-circle", text: "Add new event source." },
                  on: { linkClicked: _vm.onAddEventSource }
                })
              ]
            },
            proxy: true
          },
          {
            key: "datatable-dialogs",
            fn: function() {
              return [
                _c("new-event-source-chooser", {
                  ref: "chooser",
                  on: { chosen: _vm.onEventSourceCreate }
                }),
                _vm._v(" "),
                _c("active-mq-broker-event-source-create-dialog", {
                  ref: "amqBrokerCreate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { create: _vm.onEventSourceAdded }
                }),
                _vm._v(" "),
                _c("active-mq-broker-event-source-update-dialog", {
                  ref: "amqBrokerUpdate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { update: _vm.onEventSourceUpdated }
                }),
                _vm._v(" "),
                _c("active-mq-client-event-source-create-dialog", {
                  ref: "amqClientCreate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { create: _vm.onEventSourceAdded }
                }),
                _vm._v(" "),
                _c("active-mq-client-event-source-update-dialog", {
                  ref: "amqClientUpdate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { update: _vm.onEventSourceUpdated }
                }),
                _vm._v(" "),
                _c("coap-event-source-create-dialog", {
                  ref: "coapCreate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { create: _vm.onEventSourceAdded }
                }),
                _vm._v(" "),
                _c("coap-event-source-update-dialog", {
                  ref: "coapUpdate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { update: _vm.onEventSourceUpdated }
                }),
                _vm._v(" "),
                _c("event-hub-event-source-create-dialog", {
                  ref: "eventHubCreate",
                  on: { create: _vm.onEventSourceAdded }
                }),
                _vm._v(" "),
                _c("event-hub-event-source-update-dialog", {
                  ref: "eventHubUpdate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { update: _vm.onEventSourceUpdated }
                }),
                _vm._v(" "),
                _c("mqtt-event-source-create-dialog", {
                  ref: "mqttCreate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { create: _vm.onEventSourceAdded }
                }),
                _vm._v(" "),
                _c("mqtt-event-source-update-dialog", {
                  ref: "mqttUpdate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { update: _vm.onEventSourceUpdated }
                }),
                _vm._v(" "),
                _c("rabbit-mq-event-source-create-dialog", {
                  ref: "rabbitMqCreate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { create: _vm.onEventSourceAdded }
                }),
                _vm._v(" "),
                _c("rabbit-mq-event-source-update-dialog", {
                  ref: "rabbitMqUpdate",
                  attrs: { tenantId: _vm.tenantId },
                  on: { update: _vm.onEventSourceUpdated }
                })
              ]
            },
            proxy: true
          }
        ])
      })
    };
    var __vue_staticRenderFns__$12 = [];
    __vue_render__$12._withStripped = true;

      /* style */
      const __vue_inject_styles__$12 = function (inject) {
        if (!inject) return
        inject("data-v-cb65d786_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EventSourcesTable.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$12 = "data-v-cb65d786";
      /* module identifier */
      const __vue_module_identifier__$12 = undefined;
      /* functional template */
      const __vue_is_functional_template__$12 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$12 = normalizeComponent(
        { render: __vue_render__$12, staticRenderFns: __vue_staticRenderFns__$12 },
        __vue_inject_styles__$12,
        __vue_script__$12,
        __vue_scope_id__$12,
        __vue_is_functional_template__$12,
        __vue_module_identifier__$12,
        false,
        createInjector,
        undefined,
        undefined
      );

    var EventSourcesPlugin = /** @class */ (function (_super) {
        __extends(EventSourcesPlugin, _super);
        function EventSourcesPlugin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(EventSourcesPlugin.prototype, "icon", {
            /** Get page icon */
            get: function () {
                return sitewhereIdeCommon.MicroserviceIcon.EventSources;
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
        EventSourcesPlugin.prototype.onEventSourceCreated = function (config) {
            this.markDirty();
        };
        /** Handle event source updated */
        EventSourcesPlugin.prototype.onEventSourceUpdated = function (originalId, config) {
            this.markDirty();
        };
        /** Handle event source deleted */
        EventSourcesPlugin.prototype.onEventSourceDeleted = function (id) {
            this.markDirty();
        };
        /** Mark data as having been updated */
        EventSourcesPlugin.prototype.markDirty = function () {
            this.$emit("dirty");
        };
        __decorate([
            sitewhereIdeCommon.Prop(),
            __metadata("design:type", Object)
        ], EventSourcesPlugin.prototype, "configuration", void 0);
        EventSourcesPlugin = __decorate([
            sitewhereIdeCommon.Component({
                components: { TenantEnginePlugin: __vue_component__$6, EventSourcesTable: __vue_component__$12 }
            })
        ], EventSourcesPlugin);
        return EventSourcesPlugin;
    }(Vue));

    /* script */
    const __vue_script__$13 = EventSourcesPlugin;

    /* template */
    var __vue_render__$13 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "tenant-engine-plugin",
        { attrs: { configuration: _vm.configuration } },
        [
          _c("event-sources-table", {
            attrs: { tenantId: _vm.tenantId, eventSources: _vm.eventSources },
            on: {
              create: _vm.onEventSourceCreated,
              update: _vm.onEventSourceUpdated,
              delete: _vm.onEventSourceDeleted
            }
          })
        ],
        1
      )
    };
    var __vue_staticRenderFns__$13 = [];
    __vue_render__$13._withStripped = true;

      /* style */
      const __vue_inject_styles__$13 = function (inject) {
        if (!inject) return
        inject("data-v-3ec9ce6d_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EventSourcesPlugin.vue"}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$13 = "data-v-3ec9ce6d";
      /* module identifier */
      const __vue_module_identifier__$13 = undefined;
      /* functional template */
      const __vue_is_functional_template__$13 = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$13 = normalizeComponent(
        { render: __vue_render__$13, staticRenderFns: __vue_staticRenderFns__$13 },
        __vue_inject_styles__$13,
        __vue_script__$13,
        __vue_scope_id__$13,
        __vue_is_functional_template__$13,
        __vue_module_identifier__$13,
        false,
        createInjector,
        undefined,
        undefined
      );

    // Process as Vue plugin.
    function AdminUiPlugins(Vue) {
      Vue.component("sw-datastore-selector", __vue_component__$5);
      Vue.component("sw-tenant-engine-plugin", __vue_component__$6);

      Vue.component("sw-asset-management-config-plugin", __vue_component__$7);
      Vue.component("sw-batch-operations-config-plugin", __vue_component__$b);
      Vue.component("sw-command-delivery-config-plugin", __vue_component__$v);
      Vue.component("sw-device-management-config-plugin", __vue_component__$w);
      Vue.component("sw-event-sources-config-plugin", __vue_component__$13);
    }

    exports.default = AdminUiPlugins;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
