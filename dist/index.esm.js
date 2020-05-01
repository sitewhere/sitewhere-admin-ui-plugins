/**
  * SiteWhere Admin UI Plugins v3.0.0-alpha.3
  * (c) 2020 SiteWhere LLC
  * @license CPAL-1.0
  */
import SiteWhereIdeComponents, { DialogSection, DialogComponent } from 'sitewhere-ide-components';
import Vue from 'vue';
import { Prop, Component, Ref, Watch } from 'vue-property-decorator';
import { NavigationIcon, MicroserviceIcon, listDeviceTypes, showError } from 'sitewhere-ide-common';

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

let Postgres95Fields = class Postgres95Fields extends DialogSection {
    constructor() {
        super(...arguments);
        this.hostname = null;
        this.port = null;
        this.username = null;
        this.password = null;
        this.maxConnections = null;
    }
    /** Reset section content */
    reset() {
        this.hostname = null;
        this.port = null;
        this.username = null;
        this.password = null;
        this.maxConnections = null;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(configuration) {
        this.hostname = configuration.hostname;
        this.port = configuration.port;
        this.username = configuration.username;
        this.password = configuration.password;
        this.maxConnections = configuration.maxConnections;
    }
    /** Save form data to an object */
    save() {
        return {
            hostname: this.hostname,
            port: this.port,
            username: this.username,
            password: this.password,
            maxConnections: this.maxConnections
        };
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], Postgres95Fields.prototype, "readonly", void 0);
Postgres95Fields = __decorate([
    Component({
        validations: {
            hostname: {
                required: validators_1
            }
        }
    })
], Postgres95Fields);
var script = Postgres95Fields;

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
const __vue_script__ = script;

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
    inject("data-v-69eb4638_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Postgres95Fields.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-69eb4638";
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

let DatastoreDialog = class DatastoreDialog extends DialogComponent {
    constructor() {
        super(...arguments);
        this.scope = 0;
        this.reference = null;
        this.type = "postgres95";
        /** List of supported database types */
        this.databaseTypes = [
            {
                text: "PostgreSQL",
                value: "postgres95"
            }
        ];
    }
    /** Convert to dialog */
    get dialogComponent() {
        return this.dialog;
    }
    /** Convert to dialog section */
    get detailsSection() {
        return this.details;
    }
    onScopeChanged(updated) {
        if (!this.isLocalScope) {
            if (!this.reference) {
                let refs = this.globalDatabases;
                if (refs.length) {
                    this.reference = refs[0].value;
                }
            }
        }
        this.reloadDetails();
    }
    onReferenceChanged(updated) {
        this.reloadDetails();
    }
    /** Get icon for dialog */
    get icon() {
        return NavigationIcon.Datastore;
    }
    /** Indicates if local scope is chosen */
    get isLocalScope() {
        return this.scope == 0;
    }
    /** Indicates if global scope is chosen */
    get isGlobalScope() {
        return this.scope == 1;
    }
    /** Global RDB configurations */
    get rdbConfigurations() {
        return this.instance && this.instance.persistenceConfigurations
            ? this.instance.persistenceConfigurations.rdbConfigurations
            : null;
    }
    /** Get list of available global databases */
    get globalDatabases() {
        let databases = [];
        if (this.rdbConfigurations) {
            let keys = Object.keys(this.rdbConfigurations);
            keys.forEach(key => {
                databases.push({ text: key, value: key });
            });
        }
        return databases;
    }
    /** Find a referenced persistence configuration */
    findGlobalDefinition(reference) {
        if (!this.rdbConfigurations) {
            return null;
        }
        let match = this.rdbConfigurations[reference];
        if (!match) {
            return null;
        }
        return {
            type: match.type,
            configuration: match.configuration
        };
    }
    /** Local or global datastore type */
    getDatastoreType() {
        if (!this.isLocalScope && this.reference) {
            let global = this.findGlobalDefinition(this.reference);
            return global ? global.type : null;
        }
        return this.type;
    }
    /** Local or global datastore configuration */
    getDatastoreConfiguration() {
        if (this.isLocalScope) {
            return this.configuration;
        }
        else if (this.reference) {
            let global = this.findGlobalDefinition(this.reference);
            return global ? global.configuration : {};
        }
        else {
            console.log("neither local scope or reference!");
            return {};
        }
    }
    /** Indicates whether database is Postgres95 */
    get isPostgres95() {
        let type = this.getDatastoreType();
        return type == "postgres95";
    }
    /** Generate configuration from detail panel */
    generateConfiguration() {
        let configuration = {};
        Object.assign(configuration, this.detailsSection.save());
        return configuration;
    }
    /** Generate payload from UI data */
    generatePayload() {
        if (this.scope == 1 && this.reference) {
            return {
                reference: this.reference
            };
        }
        else {
            let configuration = this.generateConfiguration();
            return { type: this.type, configuration: configuration };
        }
    }
    /** Reset dialog content to default */
    reset() {
        if (this.details) {
            this.detailsSection.reset();
        }
        this.dialogComponent.setActiveTab(0);
    }
    /** Load data from an existing configuration */
    load(payload) {
        this.reset();
        this.type = payload.type || "postgres95";
        this.configuration =
            payload.configuration || {};
        this.reference = payload.reference;
        this.scope = this.reference ? 1 : 0;
        console.log("reference", this.reference);
        this.reloadDetails();
    }
    /** Reload details panel based on updated configuration */
    reloadDetails() {
        let config = this.getDatastoreConfiguration();
        if (this.details && config) {
            this.detailsSection.load(config);
        }
    }
    // Called after create button is clicked.
    onCreateClicked(e) {
        if (!this.detailsSection.validate()) {
            this.dialogComponent.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], DatastoreDialog.prototype, "instance", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], DatastoreDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], DatastoreDialog.prototype, "createLabel", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Vue)
], DatastoreDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Vue)
], DatastoreDialog.prototype, "details", void 0);
__decorate([
    Watch("scope"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DatastoreDialog.prototype, "onScopeChanged", null);
__decorate([
    Watch("reference"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DatastoreDialog.prototype, "onReferenceChanged", null);
DatastoreDialog = __decorate([
    Component({
        components: { Postgres95Fields: __vue_component__ }
    })
], DatastoreDialog);
var script$1 = DatastoreDialog;

/* script */
const __vue_script__$1 = script$1;

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
    inject("data-v-f53e683a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DatastoreDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-f53e683a";
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

let DatastoreCreateDialog = class DatastoreCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog() {
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], DatastoreCreateDialog.prototype, "instance", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$1)
], DatastoreCreateDialog.prototype, "dialog", void 0);
DatastoreCreateDialog = __decorate([
    Component({
        components: {
            DatastoreDialog: __vue_component__$1
        }
    })
], DatastoreCreateDialog);
var script$2 = DatastoreCreateDialog;

/* script */
const __vue_script__$2 = script$2;

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
    inject("data-v-68f29977_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DatastoreCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-68f29977";
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

let DatastoreUpdateDialog = class DatastoreUpdateDialog extends Vue {
    /** Emit payload */
    onPayload(definition) {
        this.dialog.closeDialog();
        this.$emit("update", definition);
    }
    /** Open dialog */
    openDialog(definition) {
        this.dialog.openDialog();
        this.dialog.load(definition);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], DatastoreUpdateDialog.prototype, "instance", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$1)
], DatastoreUpdateDialog.prototype, "dialog", void 0);
DatastoreUpdateDialog = __decorate([
    Component({
        components: {
            DatastoreDialog: __vue_component__$1
        }
    })
], DatastoreUpdateDialog);
var script$3 = DatastoreUpdateDialog;

/* script */
const __vue_script__$3 = script$3;

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
    inject("data-v-2eb6f936_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DatastoreUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-2eb6f936";
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

let Postgres95Summary = class Postgres95Summary extends Vue {
    /** Hostname */
    get hostname() {
        return this.configuration ? this.configuration.hostname : null;
    }
    /** Port */
    get port() {
        return this.configuration ? this.configuration.port : null;
    }
    /** Username */
    get username() {
        return this.configuration ? this.configuration.username : null;
    }
    /** Password */
    get password() {
        return this.configuration ? this.configuration.password : null;
    }
    /** Max connections */
    get maxConnections() {
        return this.configuration ? this.configuration.maxConnections : null;
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], Postgres95Summary.prototype, "configuration", void 0);
Postgres95Summary = __decorate([
    Component({
        components: {}
    })
], Postgres95Summary);
var script$4 = Postgres95Summary;

/* script */
const __vue_script__$4 = script$4;

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
    inject("data-v-0c8dad33_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Postgres95Summary.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = "data-v-0c8dad33";
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

let DatastoreSelector = class DatastoreSelector extends Vue {
    /** Global RDB configurations */
    get rdbConfigurations() {
        return this.instance && this.instance.persistenceConfigurations
            ? this.instance.persistenceConfigurations.rdbConfigurations
            : null;
    }
    /** Get reference name */
    get datastoreReference() {
        return this.datastore
            ? this.datastore.reference
            : null;
    }
    /** Local or global datastore type */
    get datastoreType() {
        let reference = this.datastoreReference;
        if (reference) {
            let global = this.findGlobalDefinition(reference);
            return global ? global.type : null;
        }
        return this.datastore
            ? this.datastore.type
            : null;
    }
    /** Local or global datastore configuration */
    get configuration() {
        let reference = this.datastoreReference;
        if (reference) {
            let global = this.findGlobalDefinition(reference);
            return global ? global.configuration : null;
        }
        return this.datastore
            ? this.datastore.configuration
            : null;
    }
    /** Postgres95 datastore */
    get isPostgres95() {
        return this.datastoreType ? this.datastoreType == "postgres95" : false;
    }
    /** Find a referenced persistence configuration */
    findGlobalDefinition(reference) {
        if (!this.rdbConfigurations) {
            return null;
        }
        let match = this.rdbConfigurations[reference];
        if (!match) {
            return null;
        }
        return {
            type: match.type,
            configuration: match.configuration
        };
    }
    /** Add datastore */
    onAddDatastore() {
        this.create.openDialog();
    }
    /** Called to create datastore based on UI data */
    onDatastoreCreate(definition) {
        this.$emit("create", definition);
    }
    /** Update datastore */
    onUpdateDatastore() {
        this.update.openDialog(this.datastore);
    }
    /** Called to update datastore based on UI data */
    onDatastoreUpdate(definition) {
        this.$emit("update", definition);
    }
    /** Unset datastore */
    onUnsetDatastore() {
        this.$emit("unset");
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], DatastoreSelector.prototype, "datastore", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], DatastoreSelector.prototype, "instance", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$2)
], DatastoreSelector.prototype, "create", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$3)
], DatastoreSelector.prototype, "update", void 0);
DatastoreSelector = __decorate([
    Component({
        components: {
            DatastoreCreateDialog: __vue_component__$2,
            DatastoreUpdateDialog: __vue_component__$3,
            Postgres95Summary: __vue_component__$4
        }
    })
], DatastoreSelector);
var script$5 = DatastoreSelector;

/* script */
const __vue_script__$5 = script$5;

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
    inject("data-v-0afb1231_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DatastoreSelector.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-0afb1231";
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

let TenantEnginePlugin = class TenantEnginePlugin extends Vue {
    /** Get microservice information */
    get tenant() {
        return this.configuration ? this.configuration.tenant : null;
    }
    /** Get microservice information */
    get microservice() {
        return this.configuration ? this.configuration.microservice : null;
    }
    /** Get header displayed at top of page */
    get header() {
        return this.tenant && this.microservice
            ? `${this.microservice.name} Configuration for Tenant '${this.tenant.name}'`
            : null;
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], TenantEnginePlugin.prototype, "configuration", void 0);
TenantEnginePlugin = __decorate([
    Component({
        components: {}
    })
], TenantEnginePlugin);
var script$6 = TenantEnginePlugin;

/* script */
const __vue_script__$6 = script$6;

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
    inject("data-v-3fcd2675_0", { source: "\n.flex-rows[data-v-3fcd2675] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\n}\n.plugin-header[data-v-3fcd2675] {\r\n  flex: 0;\n}\n.plugin-content[data-v-3fcd2675] {\r\n  flex: 1;\r\n  background-color: #fff;\r\n  overflow-y: auto;\n}\n.plugin-footer[data-v-3fcd2675] {\r\n  flex: 0;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\Derek\\Documents\\GitHub\\sitewhere-admin-ui-plugins\\src\\components\\plugins\\tenantengines\\TenantEnginePlugin.vue"],"names":[],"mappings":";AAyDA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AACA;AACA;EACA,OAAA;AACA;AACA;EACA,OAAA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,OAAA;AACA","file":"TenantEnginePlugin.vue","sourcesContent":["<template>\r\n  <v-card flat style=\"height: 100%\">\r\n    <v-card-text>\r\n      <div class=\"flex-rows\">\r\n        <div v-if=\"microservice && tenant\" class=\"plugin-header\">\r\n          <slot name=\"header\">\r\n            <sw-page-header :text=\"header\" />\r\n          </slot>\r\n        </div>\r\n        <div class=\"plugin-content\">\r\n          <slot />\r\n        </div>\r\n        <div class=\"plugin-footer\">\r\n          <slot name=\"footer\" />\r\n        </div>\r\n      </div>\r\n    </v-card-text>\r\n    <slot name=\"dialogs\"></slot>\r\n  </v-card>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport Vue from \"vue\";\r\nimport { Component, Prop } from \"vue-property-decorator\";\r\n\r\nimport {\r\n  ITenantEngineConfiguration,\r\n  IMicroserviceSummary,\r\n  ITenant\r\n} from \"sitewhere-rest-api\";\r\n\r\n@Component({\r\n  components: {}\r\n})\r\nexport default class TenantEnginePlugin extends Vue {\r\n  @Prop() readonly configuration!: ITenantEngineConfiguration;\r\n\r\n  /** Get microservice information */\r\n  get tenant(): ITenant | null {\r\n    return this.configuration ? this.configuration.tenant : null;\r\n  }\r\n\r\n  /** Get microservice information */\r\n  get microservice(): IMicroserviceSummary | null {\r\n    return this.configuration ? this.configuration.microservice : null;\r\n  }\r\n\r\n  /** Get header displayed at top of page */\r\n  get header(): string | null {\r\n    return this.tenant && this.microservice\r\n      ? `${this.microservice.name} Configuration for Tenant '${this.tenant.name}'`\r\n      : null;\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.flex-rows {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n.plugin-header {\r\n  flex: 0;\r\n}\r\n.plugin-content {\r\n  flex: 1;\r\n  background-color: #fff;\r\n  overflow-y: auto;\r\n}\r\n.plugin-footer {\r\n  flex: 0;\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-3fcd2675";
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

let AssetManagementPlugin = class AssetManagementPlugin extends Vue {
    /** Get tenant configuration for asset management */
    get assetManagement() {
        return this.configuration ? this.configuration.tenantConfiguration : null;
    }
    /** Get instance configuraton information */
    get instanceManagement() {
        return this.configuration ? this.configuration.instanceConfiguration : null;
    }
    /** Get datastore definition */
    get datastore() {
        return this.assetManagement ? this.assetManagement.datastore : null;
    }
    /** Create new datastore */
    onCreateDatastore(definition) {
        this.assetManagement.datastore = definition;
    }
    /** Update datastore */
    onUpdateDatastore(definition) {
        this.assetManagement.datastore = definition;
    }
    /** Unset the datastore */
    onUnsetDatastore() {
        if (this.assetManagement) {
            this.assetManagement.datastore = null;
        }
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], AssetManagementPlugin.prototype, "configuration", void 0);
AssetManagementPlugin = __decorate([
    Component({
        components: { TenantEnginePlugin: __vue_component__$6, DatastoreSelector: __vue_component__$5 }
    })
], AssetManagementPlugin);
var script$7 = AssetManagementPlugin;

/* script */
const __vue_script__$7 = script$7;

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
    inject("data-v-de94e618_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"AssetManagementPlugin.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$7 = "data-v-de94e618";
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

let BatchOperationManagerFields = class BatchOperationManagerFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.throttleDelayMs = 0;
    }
    /** Reset section content */
    reset() {
        this.throttleDelayMs = 0;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.throttleDelayMs = input.throttleDelayMs || 0;
    }
    /** Save form data to an object */
    save() {
        return {
            throttleDelayMs: this.throttleDelayMs
        };
    }
};
BatchOperationManagerFields = __decorate([
    Component({
        validations: {
            throttleDelayMs: {
                required: validators_1
            }
        }
    })
], BatchOperationManagerFields);
var script$8 = BatchOperationManagerFields;

/* script */
const __vue_script__$8 = script$8;

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

let BatchOperationManagerDialog = class BatchOperationManagerDialog extends DialogComponent {
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.BatchOperations;
    }
    /** Convert to dialog section */
    get managerSection() {
        return this.manager;
    }
    /** Generate payload from UI */
    generatePayload() {
        let payload = {};
        Object.assign(payload, this.managerSection.save());
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.manager) {
            this.managerSection.reset();
        }
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.reset();
        if (this.manager) {
            this.managerSection.load(config);
        }
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        if (!this.manager.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("update", payload);
        this.closeDialog();
    }
};
__decorate([
    Ref(),
    __metadata("design:type", Object)
], BatchOperationManagerDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Vue)
], BatchOperationManagerDialog.prototype, "manager", void 0);
BatchOperationManagerDialog = __decorate([
    Component({
        components: { BatchOperationManagerFields: __vue_component__$8 }
    })
], BatchOperationManagerDialog);
var script$9 = BatchOperationManagerDialog;

/* script */
const __vue_script__$9 = script$9;

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

let BatchOperationManagerSection = class BatchOperationManagerSection extends Vue {
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.BatchOperations;
    }
    /** Get throttle delay(ms) */
    get throttleDelayMs() {
        return this.configuration ? this.configuration.throttleDelayMs : 0;
    }
    /** Called to edit batch operation manager settings */
    onEditBatchOperationManager() {
        this.dialog.openDialog();
        this.dialog.load(this.configuration);
    }
    /** Handle update */
    onBatchOperationManagerUpdate(updated) {
        this.$emit("update", updated);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], BatchOperationManagerSection.prototype, "configuration", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$9)
], BatchOperationManagerSection.prototype, "dialog", void 0);
BatchOperationManagerSection = __decorate([
    Component({
        components: { BatchOperationManagerDialog: __vue_component__$9 }
    })
], BatchOperationManagerSection);
var script$a = BatchOperationManagerSection;

/* script */
const __vue_script__$a = script$a;

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
    inject("data-v-631578ab_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"BatchOperationManagerSection.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$a = "data-v-631578ab";
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

let BatchOperationsPlugin = class BatchOperationsPlugin extends Vue {
    /** Get tenant configuration for batch operations */
    get batchOperations() {
        return this.configuration ? this.configuration.tenantConfiguration : null;
    }
    /** Get instance configuraton information */
    get instanceManagement() {
        return this.configuration ? this.configuration.instanceConfiguration : null;
    }
    /** Get datastore definition */
    get datastore() {
        return this.batchOperations ? this.batchOperations.datastore : null;
    }
    /** Get batch operation manager configuration */
    get batchOperationManager() {
        return this.batchOperations
            ? this.batchOperations.batchOperationManager
            : null;
    }
    /** Create new datastore */
    onCreateDatastore(definition) {
        this.batchOperations.datastore = definition;
    }
    /** Update datastore */
    onUpdateDatastore(definition) {
        this.batchOperations.datastore = definition;
    }
    /** Unset the datastore */
    onUnsetDatastore() {
        if (this.batchOperations) {
            this.batchOperations.datastore = null;
        }
    }
    /** Handle batch operation manager updates */
    onBatchOperationManagerUpdate(updated) {
        if (this.batchOperations) {
            this.batchOperations.batchOperationManager = updated;
        }
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], BatchOperationsPlugin.prototype, "configuration", void 0);
BatchOperationsPlugin = __decorate([
    Component({
        components: {
            TenantEnginePlugin: __vue_component__$6,
            DatastoreSelector: __vue_component__$5,
            BatchOperationManagerSection: __vue_component__$a
        }
    })
], BatchOperationsPlugin);
var script$b = BatchOperationsPlugin;

/* script */
const __vue_script__$b = script$b;

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
    inject("data-v-2ec6cee1_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"BatchOperationsPlugin.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$b = "data-v-2ec6cee1";
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

let NewCommandDestinationChooser = class NewCommandDestinationChooser extends Vue {
    /** Get page icon */
    get icon() {
        return MicroserviceIcon.CommandDelivery;
    }
    /** Open chooser */
    openChooser() {
        this.dialog.openDialog();
    }
    /** Close chooser */
    closeChooser() {
        this.dialog.closeDialog();
    }
    /** Close chooser on item click */
    onChosen(id) {
        this.closeChooser();
        this.$emit("chosen", id);
    }
};
__decorate([
    Ref(),
    __metadata("design:type", Object)
], NewCommandDestinationChooser.prototype, "dialog", void 0);
NewCommandDestinationChooser = __decorate([
    Component({
        components: {}
    })
], NewCommandDestinationChooser);
var script$c = NewCommandDestinationChooser;

/* script */
const __vue_script__$c = script$c;

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
    inject("data-v-7bc6cda0_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"NewCommandDestinationChooser.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$c = "data-v-7bc6cda0";
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

let DefaultMqttParameterExtractorFields = class DefaultMqttParameterExtractorFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.commandTopicExpression = null;
        this.systemTopicExpression = null;
    }
    /** Reset section content */
    reset() {
        this.commandTopicExpression = null;
        this.systemTopicExpression = null;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.commandTopicExpression = input.commandTopicExpression;
        this.systemTopicExpression = input.systemTopicExpression;
    }
    /** Save form data to an object */
    save() {
        return {
            commandTopicExpression: this.commandTopicExpression || "",
            systemTopicExpression: this.systemTopicExpression || ""
        };
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], DefaultMqttParameterExtractorFields.prototype, "tenantId", void 0);
DefaultMqttParameterExtractorFields = __decorate([
    Component({
        validations: {
            commandTopicExpression: {
                required: validators_1
            },
            systemTopicExpression: {
                required: validators_1
            }
        }
    })
], DefaultMqttParameterExtractorFields);
var script$d = DefaultMqttParameterExtractorFields;

/* script */
const __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function() {
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
              staticClass: "mr-3",
              attrs: {
                label: "Command topic expression",
                title: "Expression used to determine command MQTT topic.",
                icon: "settings"
              },
              model: {
                value: _vm.commandTopicExpression,
                callback: function($$v) {
                  _vm.commandTopicExpression = $$v;
                },
                expression: "commandTopicExpression"
              }
            },
            [
              !_vm.$v.commandTopicExpression.required && _vm.$v.$dirty
                ? _c("span", [_vm._v("Command topic expression is required.")])
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
                label: "System topic expression",
                title: "Expression used to determine system MQTT topic.",
                icon: "settings"
              },
              model: {
                value: _vm.systemTopicExpression,
                callback: function($$v) {
                  _vm.systemTopicExpression = $$v;
                },
                expression: "systemTopicExpression"
              }
            },
            [
              !_vm.$v.systemTopicExpression.required && _vm.$v.$dirty
                ? _c("span", [_vm._v("System topic expression is required.")])
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

let DefaultMqttParameterExtractorConfiguration = class DefaultMqttParameterExtractorConfiguration extends DialogSection {
    /** Reset section content */
    reset() {
        if (this.fields) {
            this.fields.reset();
        }
    }
    /** Perform validation */
    validate() {
        if (!this.fields.validate()) {
            return false;
        }
        return true;
    }
    /** Load form data from an object */
    load(input) {
        this.reset();
        if (this.fields) {
            this.fields.load(input);
        }
    }
    /** Save form data to an object */
    save() {
        let payload = {};
        if (this.fields) {
            Object.assign(payload, this.fields.save());
        }
        return payload;
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], DefaultMqttParameterExtractorConfiguration.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$d)
], DefaultMqttParameterExtractorConfiguration.prototype, "fields", void 0);
DefaultMqttParameterExtractorConfiguration = __decorate([
    Component({
        components: {
            DefaultMqttParameterExtractorFields: __vue_component__$d
        }
    })
], DefaultMqttParameterExtractorConfiguration);
var script$e = DefaultMqttParameterExtractorConfiguration;

/* script */
const __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("default-mqtt-parameter-extractor-fields", {
    ref: "fields",
    attrs: { tenantId: _vm.tenantId }
  })
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let ParameterExtractorConfiguration = class ParameterExtractorConfiguration extends DialogSection {
    onExtractorTypeUpdated(updated) {
        this.load(this.parameterExtractor);
    }
    /** Parameter extractor type */
    get extractorType() {
        return this.parameterExtractor ? this.parameterExtractor.type : null;
    }
    /** Reset section content */
    reset() {
        if (this.details) {
            this.details.reset();
        }
    }
    /** Perform validation */
    validate() {
        if (this.details) {
            if (!this.details.validate()) {
                return false;
            }
        }
        return true;
    }
    /** Load form data from an object */
    load(input) {
        this.$nextTick().then(() => {
            if (this.details) {
                this.details.load(input.configuration);
            }
        });
    }
    /** Save form data to an object */
    save() {
        let config = {};
        if (this.details) {
            Object.assign(config, this.details.save());
        }
        return config;
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ParameterExtractorConfiguration.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], ParameterExtractorConfiguration.prototype, "parameterExtractor", void 0);
__decorate([
    Ref(),
    __metadata("design:type", DialogSection)
], ParameterExtractorConfiguration.prototype, "details", void 0);
__decorate([
    Watch("extractorType", { immediate: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParameterExtractorConfiguration.prototype, "onExtractorTypeUpdated", null);
ParameterExtractorConfiguration = __decorate([
    Component({
        components: {
            DefaultMqttParameterExtractorConfiguration: __vue_component__$e
        }
    })
], ParameterExtractorConfiguration);
var script$f = ParameterExtractorConfiguration;

/* script */
const __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "v-card",
    { attrs: { flat: "" } },
    [
      _vm.extractorType == "mqtt-default"
        ? _c("default-mqtt-parameter-extractor-configuration", {
            ref: "details"
          })
        : _vm._e()
    ],
    1
  )
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

/** Validator for checking if id is already used */
const idConflict = validators_2.withParams({ type: "idConflict" }, (value, vm) => {
    let idsInUse = vm.idsInUse;
    let conflict = false;
    idsInUse.forEach(id => {
        if (vm.id == id)
            conflict = true;
    });
    return !conflict;
});
let CommandDestinationDialog = class CommandDestinationDialog extends Vue {
    constructor() {
        super(...arguments);
        this.id = null;
        this.parameterExtractor = null;
    }
    /** Parameter extractor type */
    get extractorType() {
        return this.parameterExtractor ? this.parameterExtractor.type : null;
    }
    /** Blank configuration if type updated */
    set extractorType(value) {
        if (value) {
            this.parameterExtractor = {
                type: value,
                configuration: {}
            };
        }
    }
    /** Save dialog fields */
    save() {
        let config = { id: this.id, type: this.type };
        return config;
    }
    /** Reset the dialog */
    reset() {
        this.id = null;
        this.setActiveTab(0);
        this.$v.$reset();
    }
    /** Validate fields */
    validate() {
        if (!this.extractor.validate()) {
            return false;
        }
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.id = config.id;
        this.parameterExtractor = config.parameterExtractor;
    }
    /** Set the active tab */
    setActiveTab(tab) {
        this.dialog.setActiveTab(tab);
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        this.$emit("createClicked", e);
    }
    /** Called after cancel button is clicked */
    onCancelClicked(e) {
        this.$emit("cancelClicked", e);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], CommandDestinationDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CommandDestinationDialog.prototype, "type", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CommandDestinationDialog.prototype, "icon", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CommandDestinationDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], CommandDestinationDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CommandDestinationDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CommandDestinationDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], CommandDestinationDialog.prototype, "visible", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], CommandDestinationDialog.prototype, "idsInUse", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], CommandDestinationDialog.prototype, "parameterExtractors", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Object)
], CommandDestinationDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Object)
], CommandDestinationDialog.prototype, "idTextField", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$f)
], CommandDestinationDialog.prototype, "extractor", void 0);
CommandDestinationDialog = __decorate([
    Component({
        components: {
            ParameterExtractorConfiguration: __vue_component__$f
        },
        validations: {
            id: {
                required: validators_1,
                idConflict
            }
        }
    })
], CommandDestinationDialog);
var script$g = CommandDestinationDialog;

/* script */
const __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function() {
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

let NoConfiguration = class NoConfiguration extends Vue {
};
NoConfiguration = __decorate([
    Component({})
], NoConfiguration);
var script$h = NoConfiguration;

/* script */
const __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function() {
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
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = function (inject) {
    if (!inject) return
    inject("data-v-4e95005d_0", { source: "\n.padded-message[data-v-4e95005d] {\r\n  padding: 50px;\r\n  padding-top: 35px;\r\n  text-align: center;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\Derek\\Documents\\GitHub\\sitewhere-admin-ui-plugins\\src\\components\\plugins\\tenantengines\\commanddelivery\\NoConfiguration.vue"],"names":[],"mappings":";AAiBA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AACA","file":"NoConfiguration.vue","sourcesContent":["<template>\r\n  <v-card flat style=\"width: 100%;\">\r\n    <v-card-text\r\n      class=\"padded-message subheading\"\r\n    >This command destination has no configurable attributes.</v-card-text>\r\n  </v-card>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport Vue from \"vue\";\r\nimport { Component } from \"vue-property-decorator\";\r\n\r\n@Component({})\r\nexport default class NoConfiguration extends Vue {}\r\n</script>\r\n\r\n<style scoped>\r\n.padded-message {\r\n  padding: 50px;\r\n  padding-top: 35px;\r\n  text-align: center;\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$h = "data-v-4e95005d";
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

let CoapFields = class CoapFields extends DialogSection {
    /** Reset section content */
    reset() {
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) { }
    /** Save form data to an object */
    save() {
        return {};
    }
};
CoapFields = __decorate([
    Component({
        components: {
            NoConfiguration: __vue_component__$h
        },
        validations: {}
    })
], CoapFields);
var script$i = CoapFields;

/* script */
const __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("sw-dialog-form", [_c("no-configuration")], 1)
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let CoapCommandDestinationDialog = class CoapCommandDestinationDialog extends DialogComponent {
    constructor() {
        super(...arguments);
        /** List of parameter extractors */
        this.parameterExtractors = [
            {
                text: "Metadata Extractor",
                value: "coap-default"
            }
        ];
    }
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Generate payload from UI */
    generatePayload() {
        let config = {};
        Object.assign(config, this.coap.save());
        let payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.coap) {
            this.coap.reset();
        }
        this.dialog.reset();
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.coap) {
            this.coap.load(config.configuration);
        }
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.coap.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapCommandDestinationDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapCommandDestinationDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], CoapCommandDestinationDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapCommandDestinationDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapCommandDestinationDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], CoapCommandDestinationDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Object)
], CoapCommandDestinationDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$i)
], CoapCommandDestinationDialog.prototype, "coap", void 0);
CoapCommandDestinationDialog = __decorate([
    Component({
        components: {
            CommandDestinationDialog: __vue_component__$g,
            CoapFields: __vue_component__$i
        }
    })
], CoapCommandDestinationDialog);
var script$j = CoapCommandDestinationDialog;

/* script */
const __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function() {
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

let CoapCommandDestinationCreateDialog = class CoapCommandDestinationCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog(idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapCommandDestinationCreateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$j)
], CoapCommandDestinationCreateDialog.prototype, "dialog", void 0);
CoapCommandDestinationCreateDialog = __decorate([
    Component({
        components: {
            CoapCommandDestinationDialog: __vue_component__$j
        }
    })
], CoapCommandDestinationCreateDialog);
var script$k = CoapCommandDestinationCreateDialog;

/* script */
const __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function() {
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
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  const __vue_inject_styles__$k = function (inject) {
    if (!inject) return
    inject("data-v-179de1ca_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CoapCommandDestinationCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$k = "data-v-179de1ca";
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
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
    createInjector,
    undefined,
    undefined
  );

let CoapCommandDestinationUpdateDialog = class CoapCommandDestinationUpdateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.originalId = null;
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    }
    /** Open dialog */
    openDialog(config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapCommandDestinationUpdateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$j)
], CoapCommandDestinationUpdateDialog.prototype, "dialog", void 0);
CoapCommandDestinationUpdateDialog = __decorate([
    Component({
        components: {
            CoapCommandDestinationDialog: __vue_component__$j
        }
    })
], CoapCommandDestinationUpdateDialog);
var script$l = CoapCommandDestinationUpdateDialog;

/* script */
const __vue_script__$l = script$l;

/* template */
var __vue_render__$l = function() {
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
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

  /* style */
  const __vue_inject_styles__$l = function (inject) {
    if (!inject) return
    inject("data-v-5cb41a51_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CoapCommandDestinationUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$l = "data-v-5cb41a51";
  /* module identifier */
  const __vue_module_identifier__$l = undefined;
  /* functional template */
  const __vue_is_functional_template__$l = false;
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
    createInjector,
    undefined,
    undefined
  );

let MqttConnectionFields = class MqttConnectionFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.protocol = "tcp";
        this.hostname = null;
        this.port = 1883;
        this.protocols = [
            {
                text: "TCP",
                value: "tcp"
            },
            {
                text: "TLS",
                value: "tls"
            }
        ];
        this.qosValues = [
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
    }
    /** Reset section content */
    reset() {
        this.protocol = "tcp";
        this.hostname = null;
        this.port = 1883;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.protocol = input.protocol || "tcp";
        this.hostname = input.hostname;
        this.port = input.port || 1883;
    }
    /** Save form data to an object */
    save() {
        return {
            protocol: this.protocol,
            hostname: this.hostname || "",
            port: this.port
        };
    }
};
MqttConnectionFields = __decorate([
    Component({
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
var script$m = MqttConnectionFields;

/* script */
const __vue_script__$m = script$m;

/* template */
var __vue_render__$m = function() {
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
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

  /* style */
  const __vue_inject_styles__$m = undefined;
  /* scoped */
  const __vue_scope_id__$m = undefined;
  /* module identifier */
  const __vue_module_identifier__$m = undefined;
  /* functional template */
  const __vue_is_functional_template__$m = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let MqttAuthenticationFields = class MqttAuthenticationFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.username = null;
        this.password = null;
        this.clientId = null;
        this.cleanSession = null;
        this.trustStorePath = null;
        this.trustStorePassword = null;
        this.keyStorePath = null;
        this.keyStorePassword = null;
    }
    /** Reset section content */
    reset() {
        this.username = null;
        this.password = null;
        this.clientId = null;
        this.cleanSession = null;
        this.trustStorePath = null;
        this.trustStorePassword = null;
        this.keyStorePath = null;
        this.keyStorePassword = null;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.username = input.username;
        this.password = input.password;
        this.trustStorePath = input.trustStorePath;
        this.trustStorePassword = input.trustStorePassword;
        this.keyStorePath = input.keyStorePath;
        this.keyStorePassword = input.keyStorePassword;
    }
    /** Save form data to an object */
    save() {
        return {
            username: this.username || "",
            password: this.password || "",
            trustStorePath: this.trustStorePath || "",
            trustStorePassword: this.trustStorePassword || "",
            keyStorePath: this.keyStorePath || "",
            keyStorePassword: this.keyStorePassword || ""
        };
    }
};
MqttAuthenticationFields = __decorate([
    Component({})
], MqttAuthenticationFields);
var script$n = MqttAuthenticationFields;

/* script */
const __vue_script__$n = script$n;

/* template */
var __vue_render__$n = function() {
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
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

  /* style */
  const __vue_inject_styles__$n = undefined;
  /* scoped */
  const __vue_scope_id__$n = undefined;
  /* module identifier */
  const __vue_module_identifier__$n = undefined;
  /* functional template */
  const __vue_is_functional_template__$n = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let MqttCommandDestinationDialog = class MqttCommandDestinationDialog extends DialogComponent {
    constructor() {
        super(...arguments);
        /** List of parameter extractors */
        this.parameterExtractors = [
            {
                text: "Default Extractor",
                value: "mqtt-default"
            }
        ];
    }
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Generate payload from UI */
    generatePayload() {
        let config = {};
        Object.assign(config, this.connection.save());
        Object.assign(config, this.authentication.save());
        let payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.connection) {
            this.connection.reset();
        }
        if (this.authentication) {
            this.authentication.reset();
        }
        this.dialog.reset();
    }
    /** Load dialog from a given configuration */
    load(config) {
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
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
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
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttCommandDestinationDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttCommandDestinationDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], MqttCommandDestinationDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttCommandDestinationDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttCommandDestinationDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], MqttCommandDestinationDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Object)
], MqttCommandDestinationDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$m)
], MqttCommandDestinationDialog.prototype, "connection", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$n)
], MqttCommandDestinationDialog.prototype, "authentication", void 0);
MqttCommandDestinationDialog = __decorate([
    Component({
        components: {
            CommandDestinationDialog: __vue_component__$g,
            MqttConnectionFields: __vue_component__$m,
            MqttAuthenticationFields: __vue_component__$n
        }
    })
], MqttCommandDestinationDialog);
var script$o = MqttCommandDestinationDialog;

/* script */
const __vue_script__$o = script$o;

/* template */
var __vue_render__$o = function() {
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
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

  /* style */
  const __vue_inject_styles__$o = undefined;
  /* scoped */
  const __vue_scope_id__$o = undefined;
  /* module identifier */
  const __vue_module_identifier__$o = undefined;
  /* functional template */
  const __vue_is_functional_template__$o = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let MqttCommandDestinationCreateDialog = class MqttCommandDestinationCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog(idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttCommandDestinationCreateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$o)
], MqttCommandDestinationCreateDialog.prototype, "dialog", void 0);
MqttCommandDestinationCreateDialog = __decorate([
    Component({
        components: {
            MqttCommandDestinationDialog: __vue_component__$o
        }
    })
], MqttCommandDestinationCreateDialog);
var script$p = MqttCommandDestinationCreateDialog;

/* script */
const __vue_script__$p = script$p;

/* template */
var __vue_render__$p = function() {
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
var __vue_staticRenderFns__$p = [];
__vue_render__$p._withStripped = true;

  /* style */
  const __vue_inject_styles__$p = function (inject) {
    if (!inject) return
    inject("data-v-cefbab06_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MqttCommandDestinationCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$p = "data-v-cefbab06";
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

let MqttCommandDestinationUpdateDialog = class MqttCommandDestinationUpdateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.originalId = null;
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    }
    /** Open dialog */
    openDialog(config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttCommandDestinationUpdateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$o)
], MqttCommandDestinationUpdateDialog.prototype, "dialog", void 0);
MqttCommandDestinationUpdateDialog = __decorate([
    Component({
        components: {
            MqttCommandDestinationDialog: __vue_component__$o
        }
    })
], MqttCommandDestinationUpdateDialog);
var script$q = MqttCommandDestinationUpdateDialog;

/* script */
const __vue_script__$q = script$q;

/* template */
var __vue_render__$q = function() {
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
var __vue_staticRenderFns__$q = [];
__vue_render__$q._withStripped = true;

  /* style */
  const __vue_inject_styles__$q = function (inject) {
    if (!inject) return
    inject("data-v-35656d2c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MqttCommandDestinationUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$q = "data-v-35656d2c";
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

let CommandDeliveryTable = class CommandDeliveryTable extends Vue {
    constructor() {
        super(...arguments);
        this.headers = [
            { text: "Id", value: "id" },
            { text: "Type", value: "type" },
            { text: "", value: "delete" }
        ];
        /** Command destinations in format for display */
        this.commandDestsAsSortedArray = [];
    }
    onCommandDestinationsUpdated(updated) {
        this.calculateCommandDestinationsAsSortedArray();
    }
    /** Get page icon */
    get icon() {
        return MicroserviceIcon.CommandDelivery;
    }
    /** Get list of ids already in use */
    findIdsInUse(exclude) {
        let ids = [];
        if (this.commandDestinations) {
            this.commandDestinations.forEach(dest => {
                if (dest.id != exclude) {
                    ids.push(dest.id);
                }
            });
        }
        return ids;
    }
    /** Get command destination index based on id */
    getCommandDestinationIndex(id) {
        let match = null;
        if (this.commandDestinations) {
            this.commandDestinations.forEach((dest, index) => {
                if (dest.id === id) {
                    match = index;
                }
            });
        }
        return match;
    }
    /** Get a command destination by id */
    getCommandDestinationById(id) {
        let index = this.getCommandDestinationIndex(id);
        if (this.commandDestinations && index != null) {
            return this.commandDestinations[index];
        }
        return null;
    }
    /** Get command destinations as a sorted array */
    calculateCommandDestinationsAsSortedArray() {
        let all = [];
        if (this.commandDestinations) {
            this.commandDestinations.forEach(dest => {
                let meta = {};
                meta.id = dest.id;
                meta.type = dest.type;
                let config = dest.configuration;
                all.push({ meta: meta, config: config });
            });
        }
        all.sort(function (a, b) {
            return a.meta.id.localeCompare(b.meta.id);
        });
        this.commandDestsAsSortedArray = all;
    }
    /** Add new command destination */
    onAddCommandDestination() {
        this.chooser.openChooser();
    }
    /** Called to create a new command destination based on type */
    onCommandDestinationCreate(id) {
        let idsInUse = this.findIdsInUse();
        if (id == "coap") {
            this.coapCreate.openDialog(idsInUse);
        }
        else if (id == "mqtt") {
            this.mqttCreate.openDialog(idsInUse);
        }
    }
    /** Called when command destination is added */
    onCommandDestinationAdded(config) {
        if (this.commandDestinations) {
            this.commandDestinations.push(config);
            this.calculateCommandDestinationsAsSortedArray();
        }
        this.$emit("create", config);
    }
    /** Open command destination by id */
    onOpenCommandDestination(id) {
        let config = this.getCommandDestinationById(id);
        let idsInUse = this.findIdsInUse(id);
        if (config) {
            if (config.type === "coap") {
                this.coapUpdate.openDialog(config, idsInUse);
            }
            else if (config.type === "mqtt") {
                this.mqttUpdate.openDialog(config, idsInUse);
            }
        }
    }
    /** Called when command destination is updated */
    onCommandDestinationUpdated(originalId, config) {
        let index = this.getCommandDestinationIndex(originalId);
        if (this.commandDestinations && index != null) {
            Vue.set(this.commandDestinations, index, config);
            this.calculateCommandDestinationsAsSortedArray();
        }
        this.$emit("update", originalId, config);
    }
    /** Delete command destination by id */
    onDeleteCommandDestination(id) {
        let index = this.getCommandDestinationIndex(id);
        if (this.commandDestinations && index != null) {
            this.commandDestinations.splice(index);
            this.calculateCommandDestinationsAsSortedArray();
        }
        this.$emit("delete", id);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], CommandDeliveryTable.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], CommandDeliveryTable.prototype, "commandDestinations", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$c)
], CommandDeliveryTable.prototype, "chooser", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$k)
], CommandDeliveryTable.prototype, "coapCreate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$l)
], CommandDeliveryTable.prototype, "coapUpdate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$p)
], CommandDeliveryTable.prototype, "mqttCreate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$q)
], CommandDeliveryTable.prototype, "mqttUpdate", void 0);
__decorate([
    Watch("commandDestinations", { immediate: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommandDeliveryTable.prototype, "onCommandDestinationsUpdated", null);
CommandDeliveryTable = __decorate([
    Component({
        components: {
            NewCommandDestinationChooser: __vue_component__$c,
            CoapCommandDestinationCreateDialog: __vue_component__$k,
            CoapCommandDestinationUpdateDialog: __vue_component__$l,
            MqttCommandDestinationCreateDialog: __vue_component__$p,
            MqttCommandDestinationUpdateDialog: __vue_component__$q
        }
    })
], CommandDeliveryTable);
var script$r = CommandDeliveryTable;

/* script */
const __vue_script__$r = script$r;

/* template */
var __vue_render__$r = function() {
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
var __vue_staticRenderFns__$r = [];
__vue_render__$r._withStripped = true;

  /* style */
  const __vue_inject_styles__$r = function (inject) {
    if (!inject) return
    inject("data-v-22f6052c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CommandDestinationsTable.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$r = "data-v-22f6052c";
  /* module identifier */
  const __vue_module_identifier__$r = undefined;
  /* functional template */
  const __vue_is_functional_template__$r = false;
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
    createInjector,
    undefined,
    undefined
  );

let NewCommandRouterChooser = class NewCommandRouterChooser extends Vue {
    /** Get page icon */
    get icon() {
        return MicroserviceIcon.CommandDelivery;
    }
    /** Open chooser */
    openChooser() {
        this.dialog.openDialog();
    }
    /** Close chooser */
    closeChooser() {
        this.dialog.closeDialog();
    }
    /** Close chooser on item click */
    onChosen(id) {
        this.closeChooser();
        this.$emit("chosen", id);
    }
};
__decorate([
    Ref(),
    __metadata("design:type", Object)
], NewCommandRouterChooser.prototype, "dialog", void 0);
NewCommandRouterChooser = __decorate([
    Component({
        components: {}
    })
], NewCommandRouterChooser);
var script$s = NewCommandRouterChooser;

/* script */
const __vue_script__$s = script$s;

/* template */
var __vue_render__$s = function() {
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
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

  /* style */
  const __vue_inject_styles__$s = function (inject) {
    if (!inject) return
    inject("data-v-5ff98cc4_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"NewCommandRouterChooser.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$s = "data-v-5ff98cc4";
  /* module identifier */
  const __vue_module_identifier__$s = undefined;
  /* functional template */
  const __vue_is_functional_template__$s = false;
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
    createInjector,
    undefined,
    undefined
  );

let DeviceTypeMappingRouterSummary = class DeviceTypeMappingRouterSummary extends Vue {
    /** Get device type mapping router configuration */
    get configuration() {
        return this.router
            ? this.router.configuration
            : null;
    }
    /** Indicates if there are mappings */
    get hasMappings() {
        return this.mappings ? this.mappings.length > 0 : false;
    }
    /** Current list of device type mappings */
    get mappings() {
        return this.configuration ? this.configuration.mappings : null;
    }
    /** Get default destination */
    get defaultDestination() {
        return this.configuration ? this.configuration.defaultDestination : null;
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], DeviceTypeMappingRouterSummary.prototype, "router", void 0);
DeviceTypeMappingRouterSummary = __decorate([
    Component({})
], DeviceTypeMappingRouterSummary);
var script$t = DeviceTypeMappingRouterSummary;

/* script */
const __vue_script__$t = script$t;

/* template */
var __vue_render__$t = function() {
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
var __vue_staticRenderFns__$t = [];
__vue_render__$t._withStripped = true;

  /* style */
  const __vue_inject_styles__$t = function (inject) {
    if (!inject) return
    inject("data-v-018d226a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DeviceTypeMappingRouterSummary.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$t = "data-v-018d226a";
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

let DeviceTypeMappingRouterFields = class DeviceTypeMappingRouterFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.defaultDestination = null;
    }
    /** Reset section content */
    reset() {
        this.defaultDestination = null;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.defaultDestination = input.defaultDestination || null;
    }
    /** Save form data to an object */
    save() {
        return {
            mappings: [],
            defaultDestination: this.defaultDestination || ""
        };
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Array)
], DeviceTypeMappingRouterFields.prototype, "deviceTypes", void 0);
DeviceTypeMappingRouterFields = __decorate([
    Component({})
], DeviceTypeMappingRouterFields);
var script$u = DeviceTypeMappingRouterFields;

/* script */
const __vue_script__$u = script$u;

/* template */
var __vue_render__$u = function() {
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
var __vue_staticRenderFns__$u = [];
__vue_render__$u._withStripped = true;

  /* style */
  const __vue_inject_styles__$u = undefined;
  /* scoped */
  const __vue_scope_id__$u = undefined;
  /* module identifier */
  const __vue_module_identifier__$u = undefined;
  /* functional template */
  const __vue_is_functional_template__$u = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let DeviceTypeMappingRouterDialog = class DeviceTypeMappingRouterDialog extends DialogComponent {
    constructor() {
        super(...arguments);
        this.deviceTypes = [];
    }
    /** Generate payload from UI */
    generatePayload() {
        let payload = {};
        Object.assign(payload, this.mappings.save());
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        this.loadDeviceTypes();
        if (this.mappings) {
            this.mappings.reset();
        }
    }
    /** Load device types asynchronously */
    loadDeviceTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let criteria = { pageNumber: 1, pageSize: 0 };
                let format = {};
                let response = yield listDeviceTypes(this.$store, criteria, format);
                this.deviceTypes = response.data.results;
            }
            catch (err) {
                showError(this, err);
            }
        });
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.reset();
        if (this.mappings) {
            this.mappings.load(config);
        }
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        if (!this.mappings.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
        this.closeDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], DeviceTypeMappingRouterDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], DeviceTypeMappingRouterDialog.prototype, "createLabel", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Object)
], DeviceTypeMappingRouterDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$u)
], DeviceTypeMappingRouterDialog.prototype, "mappings", void 0);
DeviceTypeMappingRouterDialog = __decorate([
    Component({
        components: { DeviceTypeMappingRouterFields: __vue_component__$u }
    })
], DeviceTypeMappingRouterDialog);
var script$v = DeviceTypeMappingRouterDialog;

/* script */
const __vue_script__$v = script$v;

/* template */
var __vue_render__$v = function() {
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
var __vue_staticRenderFns__$v = [];
__vue_render__$v._withStripped = true;

  /* style */
  const __vue_inject_styles__$v = undefined;
  /* scoped */
  const __vue_scope_id__$v = undefined;
  /* module identifier */
  const __vue_module_identifier__$v = undefined;
  /* functional template */
  const __vue_is_functional_template__$v = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let DeviceTypeMappingRouterCreateDialog = class DeviceTypeMappingRouterCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog() {
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$v)
], DeviceTypeMappingRouterCreateDialog.prototype, "dialog", void 0);
DeviceTypeMappingRouterCreateDialog = __decorate([
    Component({
        components: {
            DeviceTypeMappingRouterDialog: __vue_component__$v
        }
    })
], DeviceTypeMappingRouterCreateDialog);
var script$w = DeviceTypeMappingRouterCreateDialog;

/* script */
const __vue_script__$w = script$w;

/* template */
var __vue_render__$w = function() {
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
var __vue_staticRenderFns__$w = [];
__vue_render__$w._withStripped = true;

  /* style */
  const __vue_inject_styles__$w = function (inject) {
    if (!inject) return
    inject("data-v-916dfc20_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DeviceTypeMappingRouterCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$w = "data-v-916dfc20";
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

let CommandRouterSection = class CommandRouterSection extends Vue {
    /** Check for device type mapping router */
    get isDeviceTypeMappingRouter() {
        return this.router && this.router.type == "device-type-mapping";
    }
    /** Send event to unset the router */
    onUnsetCommandRouter() {
        this.$emit("unset");
    }
    /** Open chooser for adding command router */
    onAddCommandRouter() {
        this.chooser.openChooser();
    }
    /** Update command router settings */
    onUpdateCommandRouter() { }
    /** Show dialog for creating command router */
    onCommandRouterChosen(type) {
        if (type == "device-type-mapping") {
            this.dtmRouterCreate.openDialog();
        }
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], CommandRouterSection.prototype, "router", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], CommandRouterSection.prototype, "commandDestinations", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$s)
], CommandRouterSection.prototype, "chooser", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$w)
], CommandRouterSection.prototype, "dtmRouterCreate", void 0);
CommandRouterSection = __decorate([
    Component({
        components: {
            NewCommandRouterChooser: __vue_component__$s,
            DeviceTypeMappingRouterSummary: __vue_component__$t,
            DeviceTypeMappingRouterCreateDialog: __vue_component__$w
        }
    })
], CommandRouterSection);
var script$x = CommandRouterSection;

/* script */
const __vue_script__$x = script$x;

/* template */
var __vue_render__$x = function() {
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
var __vue_staticRenderFns__$x = [];
__vue_render__$x._withStripped = true;

  /* style */
  const __vue_inject_styles__$x = function (inject) {
    if (!inject) return
    inject("data-v-79cf907e_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CommandRouterSection.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$x = "data-v-79cf907e";
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

let CommandDeliveryPlugin = class CommandDeliveryPlugin extends Vue {
    /** Get page icon */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Tenant id */
    get tenantId() {
        return this.configuration ? this.configuration.tenant.token : null;
    }
    /** Get tenant configuration for command delivery */
    get commandDeliveryConfiguration() {
        return this.configuration ? this.configuration.tenantConfiguration : null;
    }
    /** Get instance configuraton information */
    get instanceManagement() {
        return this.configuration ? this.configuration.instanceConfiguration : null;
    }
    /** Get command destinations list */
    get commandDestinations() {
        return this.commandDeliveryConfiguration
            ? this.commandDeliveryConfiguration.commandDestinations
            : null;
    }
    /** Get configured router */
    get router() {
        return this.commandDeliveryConfiguration
            ? this.commandDeliveryConfiguration.router
            : null;
    }
    /** Handle command destination created */
    onCommandDestinationCreated(config) {
        this.markDirty();
    }
    /** Handle command destination updated */
    onCommandDestinationUpdated(originalId, config) {
        this.markDirty();
    }
    /** Handle command destination deleted */
    onCommandDestinationDeleted(id) {
        this.markDirty();
    }
    /** Handle unsetting router */
    onUnsetCommandRouter() {
        if (this.commandDeliveryConfiguration) {
            this.commandDeliveryConfiguration.router = null;
        }
        this.markDirty();
    }
    /** Mark data as having been updated */
    markDirty() {
        this.$emit("dirty");
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], CommandDeliveryPlugin.prototype, "configuration", void 0);
CommandDeliveryPlugin = __decorate([
    Component({
        components: {
            TenantEnginePlugin: __vue_component__$6,
            CommandDestinationsTable: __vue_component__$r,
            CommandRouterSection: __vue_component__$x
        }
    })
], CommandDeliveryPlugin);
var script$y = CommandDeliveryPlugin;

/* script */
const __vue_script__$y = script$y;

/* template */
var __vue_render__$y = function() {
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
var __vue_staticRenderFns__$y = [];
__vue_render__$y._withStripped = true;

  /* style */
  const __vue_inject_styles__$y = function (inject) {
    if (!inject) return
    inject("data-v-26bb3bd6_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CommandDeliveryPlugin.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$y = "data-v-26bb3bd6";
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

let DeviceManagementPlugin = class DeviceManagementPlugin extends Vue {
    /** Get tenant configuration for device management */
    get deviceManagement() {
        return this.configuration ? this.configuration.tenantConfiguration : null;
    }
    /** Get instance configuraton information */
    get instanceManagement() {
        return this.configuration ? this.configuration.instanceConfiguration : null;
    }
    /** Get datastore definition */
    get datastore() {
        return this.deviceManagement ? this.deviceManagement.datastore : null;
    }
    onUnsetDatastore() {
        if (this.deviceManagement) {
            this.deviceManagement.datastore = null;
        }
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], DeviceManagementPlugin.prototype, "configuration", void 0);
DeviceManagementPlugin = __decorate([
    Component({
        components: { TenantEnginePlugin: __vue_component__$6, DatastoreSelector: __vue_component__$5 }
    })
], DeviceManagementPlugin);
var script$z = DeviceManagementPlugin;

/* script */
const __vue_script__$z = script$z;

/* template */
var __vue_render__$z = function() {
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
var __vue_staticRenderFns__$z = [];
__vue_render__$z._withStripped = true;

  /* style */
  const __vue_inject_styles__$z = function (inject) {
    if (!inject) return
    inject("data-v-d231dc24_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"DeviceManagementPlugin.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$z = "data-v-d231dc24";
  /* module identifier */
  const __vue_module_identifier__$z = undefined;
  /* functional template */
  const __vue_is_functional_template__$z = false;
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
    createInjector,
    undefined,
    undefined
  );

let NewEventSourceChooser = class NewEventSourceChooser extends Vue {
    /** Get page icon */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Open chooser */
    openChooser() {
        this.dialog.openDialog();
    }
    /** Close chooser */
    closeChooser() {
        this.dialog.closeDialog();
    }
    /** Close chooser on item click */
    onChosen(id) {
        this.closeChooser();
        this.$emit("chosen", id);
    }
};
__decorate([
    Ref(),
    __metadata("design:type", Object)
], NewEventSourceChooser.prototype, "dialog", void 0);
NewEventSourceChooser = __decorate([
    Component({
        components: {}
    })
], NewEventSourceChooser);
var script$A = NewEventSourceChooser;

/* script */
const __vue_script__$A = script$A;

/* template */
var __vue_render__$A = function() {
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
var __vue_staticRenderFns__$A = [];
__vue_render__$A._withStripped = true;

  /* style */
  const __vue_inject_styles__$A = function (inject) {
    if (!inject) return
    inject("data-v-731ee5d4_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"NewEventSourceChooser.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$A = "data-v-731ee5d4";
  /* module identifier */
  const __vue_module_identifier__$A = undefined;
  /* functional template */
  const __vue_is_functional_template__$A = false;
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
    createInjector,
    undefined,
    undefined
  );

let NoConfiguration$1 = class NoConfiguration extends Vue {
};
NoConfiguration$1 = __decorate([
    Component({})
], NoConfiguration$1);
var script$B = NoConfiguration$1;

/* script */
const __vue_script__$B = script$B;

/* template */
var __vue_render__$B = function() {
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
var __vue_staticRenderFns__$B = [];
__vue_render__$B._withStripped = true;

  /* style */
  const __vue_inject_styles__$B = function (inject) {
    if (!inject) return
    inject("data-v-2333d534_0", { source: "\n.padded-message[data-v-2333d534] {\r\n  padding: 50px;\r\n  text-align: center;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\Derek\\Documents\\GitHub\\sitewhere-admin-ui-plugins\\src\\components\\plugins\\tenantengines\\eventsources\\decoders\\NoConfiguration.vue"],"names":[],"mappings":";AAeA;EACA,aAAA;EACA,kBAAA;AACA","file":"NoConfiguration.vue","sourcesContent":["<template>\r\n  <v-card flat>\r\n    <v-card-text class=\"padded-message subheading\">This decoder has no configurable attributes.</v-card-text>\r\n  </v-card>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport Vue from \"vue\";\r\nimport { Component } from \"vue-property-decorator\";\r\n\r\n@Component({})\r\nexport default class NoConfiguration extends Vue {}\r\n</script>\r\n\r\n<style scoped>\r\n.padded-message {\r\n  padding: 50px;\r\n  text-align: center;\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$B = "data-v-2333d534";
  /* module identifier */
  const __vue_module_identifier__$B = undefined;
  /* functional template */
  const __vue_is_functional_template__$B = false;
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
    createInjector,
    undefined,
    undefined
  );

let JsonDecoderConfiguration = class JsonDecoderConfiguration extends DialogSection {
    /** Reset section content */
    reset() { }
    /** Perform validation */
    validate() {
        return true;
    }
    /** Load form data from an object */
    load(input) { }
    /** Save form data to an object */
    save() {
        return {};
    }
};
JsonDecoderConfiguration = __decorate([
    Component({
        components: {
            NoConfiguration: __vue_component__$B
        }
    })
], JsonDecoderConfiguration);
var script$C = JsonDecoderConfiguration;

/* script */
const __vue_script__$C = script$C;

/* template */
var __vue_render__$C = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("no-configuration")
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

let ProtobufDecoderConfiguration = class ProtobufDecoderConfiguration extends DialogSection {
    /** Reset section content */
    reset() { }
    /** Perform validation */
    validate() {
        return true;
    }
    /** Load form data from an object */
    load(input) { }
    /** Save form data to an object */
    save() {
        return {};
    }
};
ProtobufDecoderConfiguration = __decorate([
    Component({
        components: {
            NoConfiguration: __vue_component__$B
        }
    })
], ProtobufDecoderConfiguration);
var script$D = ProtobufDecoderConfiguration;

/* script */
const __vue_script__$D = script$D;

/* template */
var __vue_render__$D = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("no-configuration")
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

let ScriptedDecoderFields = class ScriptedDecoderFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.scriptId = null;
    }
    /** Reset section content */
    reset() {
        if (this.chooser) {
            this.chooser.reset();
        }
        this.scriptId = null;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.scriptId = input.scriptId || null;
    }
    /** Save form data to an object */
    save() {
        return {
            scriptId: this.scriptId || ""
        };
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ScriptedDecoderFields.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Object)
], ScriptedDecoderFields.prototype, "chooser", void 0);
ScriptedDecoderFields = __decorate([
    Component({
        validations: {
            scriptId: {
                required: validators_1
            }
        }
    })
], ScriptedDecoderFields);
var script$E = ScriptedDecoderFields;

/* script */
const __vue_script__$E = script$E;

/* template */
var __vue_render__$E = function() {
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

let ScriptedEventDecoderConfiguration = class ScriptedEventDecoderConfiguration extends DialogSection {
    /** Reset section content */
    reset() {
        if (this.script) {
            this.script.reset();
        }
    }
    /** Perform validation */
    validate() {
        if (!this.script.validate()) {
            return false;
        }
        return true;
    }
    /** Load form data from an object */
    load(input) {
        this.reset();
        if (this.script) {
            this.script.load(input);
        }
    }
    /** Save form data to an object */
    save() {
        let payload = {};
        if (this.script) {
            Object.assign(payload, this.script.save());
        }
        return payload;
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ScriptedEventDecoderConfiguration.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$E)
], ScriptedEventDecoderConfiguration.prototype, "script", void 0);
ScriptedEventDecoderConfiguration = __decorate([
    Component({
        components: {
            ScriptedEventDecoderFields: __vue_component__$E
        }
    })
], ScriptedEventDecoderConfiguration);
var script$F = ScriptedEventDecoderConfiguration;

/* script */
const __vue_script__$F = script$F;

/* template */
var __vue_render__$F = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("scripted-event-decoder-fields", {
    ref: "script",
    attrs: { tenantId: _vm.tenantId }
  })
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

let DecoderConfiguration = class DecoderConfiguration extends DialogSection {
    onDecoderTypeUpdated(updated) {
        this.load(this.decoder);
    }
    /** Decoder type */
    get decoderType() {
        return this.decoder ? this.decoder.type : null;
    }
    /** Reset section content */
    reset() {
        if (this.details) {
            this.details.reset();
        }
    }
    /** Perform validation */
    validate() {
        if (this.details) {
            if (!this.details.validate()) {
                return false;
            }
        }
        return true;
    }
    /** Load form data from an object */
    load(input) {
        this.$nextTick().then(() => {
            if (this.details) {
                this.details.load(input.configuration);
            }
        });
    }
    /** Save form data to an object */
    save() {
        let config = {};
        if (this.details) {
            Object.assign(config, this.details.save());
        }
        return config;
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], DecoderConfiguration.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], DecoderConfiguration.prototype, "decoder", void 0);
__decorate([
    Ref(),
    __metadata("design:type", DialogSection)
], DecoderConfiguration.prototype, "details", void 0);
__decorate([
    Watch("decoderType", { immediate: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DecoderConfiguration.prototype, "onDecoderTypeUpdated", null);
DecoderConfiguration = __decorate([
    Component({
        components: {
            JsonDecoderConfiguration: __vue_component__$C,
            ProtobufDecoderConfiguration: __vue_component__$D,
            ScriptedEventDecoderConfiguration: __vue_component__$F
        }
    })
], DecoderConfiguration);
var script$G = DecoderConfiguration;

/* script */
const __vue_script__$G = script$G;

/* template */
var __vue_render__$G = function() {
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

/** Validator for checking if id is already used */
const idConflict$1 = validators_2.withParams({ type: "idConflict" }, (value, vm) => {
    let idsInUse = vm.idsInUse;
    let conflict = false;
    idsInUse.forEach(id => {
        if (vm.id == id)
            conflict = true;
    });
    return !conflict;
});
let EventSourceDialog = class EventSourceDialog extends DialogComponent {
    constructor() {
        super(...arguments);
        this.defaultDecoder = {
            type: "json",
            configuration: {}
        };
        this.id = null;
        this.decoder = this.defaultDecoder;
        /** List of decoder types */
        this.decoderTypes = [
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
    }
    /** Decoder type */
    get decoderType() {
        return this.decoder ? this.decoder.type : null;
    }
    /** Blank configuration if type updated */
    set decoderType(value) {
        if (value) {
            this.decoder = {
                type: value,
                configuration: {}
            };
        }
    }
    /** Save dialog fields */
    save() {
        let config = { id: this.id, type: this.type };
        this.decoder.configuration = this.decoderConfiguration.save();
        let decoder = {
            decoder: this.decoder
        };
        Object.assign(config, decoder);
        return config;
    }
    /** Reset the dialog */
    reset() {
        this.id = null;
        this.decoder = this.defaultDecoder;
        this.setActiveTab(0);
        this.decoderConfiguration.reset();
        this.$v.$reset();
    }
    /** Validate fields */
    validate() {
        if (!this.decoderConfiguration.validate()) {
            return false;
        }
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.id = config.id;
        this.decoder = config.decoder;
    }
    /** Set the active tab */
    setActiveTab(tab) {
        this.dialog.setActiveTab(tab);
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        this.$emit("createClicked", e);
    }
    /** Called after cancel button is clicked */
    onCancelClicked(e) {
        this.$emit("cancelClicked", e);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventSourceDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventSourceDialog.prototype, "type", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventSourceDialog.prototype, "icon", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventSourceDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], EventSourceDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventSourceDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventSourceDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], EventSourceDialog.prototype, "visible", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], EventSourceDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Vue)
], EventSourceDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Vue)
], EventSourceDialog.prototype, "idTextField", void 0);
__decorate([
    Ref(),
    __metadata("design:type", Vue)
], EventSourceDialog.prototype, "decoderConfiguration", void 0);
EventSourceDialog = __decorate([
    Component({
        components: { DecoderConfiguration: __vue_component__$G },
        validations: {
            id: {
                required: validators_1,
                idConflict: idConflict$1
            }
        }
    })
], EventSourceDialog);
var script$H = EventSourceDialog;

/* script */
const __vue_script__$H = script$H;

/* template */
var __vue_render__$H = function() {
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
var __vue_staticRenderFns__$H = [];
__vue_render__$H._withStripped = true;

  /* style */
  const __vue_inject_styles__$H = undefined;
  /* scoped */
  const __vue_scope_id__$H = undefined;
  /* module identifier */
  const __vue_module_identifier__$H = undefined;
  /* functional template */
  const __vue_is_functional_template__$H = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let ActiveMqBrokerFields = class ActiveMqBrokerFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.brokerName = "sitewhere";
        this.transportUri = "";
        this.queueName = "sitewhere";
        this.numConsumers = 3;
    }
    /** Reset section content */
    reset() {
        this.brokerName = "sitewhere";
        this.transportUri = "";
        this.queueName = "sitewhere";
        this.numConsumers = 3;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.brokerName = input.brokerName || "sitewhere";
        this.transportUri = input.transportUri || "";
        this.queueName = input.queueName || "sitewhere";
        this.numConsumers = input.numConsumers || 3;
    }
    /** Save form data to an object */
    save() {
        return {
            brokerName: this.brokerName,
            transportUri: this.transportUri,
            queueName: this.queueName,
            numConsumers: this.numConsumers
        };
    }
};
ActiveMqBrokerFields = __decorate([
    Component({
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
var script$I = ActiveMqBrokerFields;

/* script */
const __vue_script__$I = script$I;

/* template */
var __vue_render__$I = function() {
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
var __vue_staticRenderFns__$I = [];
__vue_render__$I._withStripped = true;

  /* style */
  const __vue_inject_styles__$I = undefined;
  /* scoped */
  const __vue_scope_id__$I = undefined;
  /* module identifier */
  const __vue_module_identifier__$I = undefined;
  /* functional template */
  const __vue_is_functional_template__$I = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let ActiveMqBrokerEventSourceDialog = class ActiveMqBrokerEventSourceDialog extends DialogComponent {
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Generate payload from UI */
    generatePayload() {
        let config = {};
        Object.assign(config, this.broker.save());
        let payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.broker) {
            this.broker.reset();
        }
        this.dialog.reset();
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.broker) {
            this.broker.load(config.configuration);
        }
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.broker.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqBrokerEventSourceDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqBrokerEventSourceDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], ActiveMqBrokerEventSourceDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqBrokerEventSourceDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqBrokerEventSourceDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], ActiveMqBrokerEventSourceDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$H)
], ActiveMqBrokerEventSourceDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$I)
], ActiveMqBrokerEventSourceDialog.prototype, "broker", void 0);
ActiveMqBrokerEventSourceDialog = __decorate([
    Component({
        components: {
            EventSourceDialog: __vue_component__$H,
            ActiveMqBrokerFields: __vue_component__$I
        }
    })
], ActiveMqBrokerEventSourceDialog);
var script$J = ActiveMqBrokerEventSourceDialog;

/* script */
const __vue_script__$J = script$J;

/* template */
var __vue_render__$J = function() {
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

let ActiveMqBrokerEventSourceCreateDialog = class ActiveMqBrokerEventSourceCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog(idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqBrokerEventSourceCreateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$J)
], ActiveMqBrokerEventSourceCreateDialog.prototype, "dialog", void 0);
ActiveMqBrokerEventSourceCreateDialog = __decorate([
    Component({
        components: {
            ActiveMqBrokerEventSourceDialog: __vue_component__$J
        }
    })
], ActiveMqBrokerEventSourceCreateDialog);
var script$K = ActiveMqBrokerEventSourceCreateDialog;

/* script */
const __vue_script__$K = script$K;

/* template */
var __vue_render__$K = function() {
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
var __vue_staticRenderFns__$K = [];
__vue_render__$K._withStripped = true;

  /* style */
  const __vue_inject_styles__$K = function (inject) {
    if (!inject) return
    inject("data-v-7ab8a4ca_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ActiveMqBrokerEventSourceCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$K = "data-v-7ab8a4ca";
  /* module identifier */
  const __vue_module_identifier__$K = undefined;
  /* functional template */
  const __vue_is_functional_template__$K = false;
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
    createInjector,
    undefined,
    undefined
  );

let ActiveMqBrokerEventSourceUpdateDialog = class ActiveMqBrokerEventSourceUpdateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.originalId = null;
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    }
    /** Open dialog */
    openDialog(config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqBrokerEventSourceUpdateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$J)
], ActiveMqBrokerEventSourceUpdateDialog.prototype, "dialog", void 0);
ActiveMqBrokerEventSourceUpdateDialog = __decorate([
    Component({
        components: {
            ActiveMqBrokerEventSourceDialog: __vue_component__$J
        }
    })
], ActiveMqBrokerEventSourceUpdateDialog);
var script$L = ActiveMqBrokerEventSourceUpdateDialog;

/* script */
const __vue_script__$L = script$L;

/* template */
var __vue_render__$L = function() {
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
var __vue_staticRenderFns__$L = [];
__vue_render__$L._withStripped = true;

  /* style */
  const __vue_inject_styles__$L = function (inject) {
    if (!inject) return
    inject("data-v-385c1259_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ActiveMqBrokerEventSourceUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$L = "data-v-385c1259";
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

let ActiveMqClientFields = class ActiveMqClientFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.remoteUri = "";
        this.queueName = "sitewhere";
        this.numConsumers = 3;
    }
    /** Reset section content */
    reset() {
        this.remoteUri = "";
        this.queueName = "sitewhere";
        this.numConsumers = 3;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.remoteUri = input.remoteUri || "";
        this.queueName = input.queueName || "sitewhere";
        this.numConsumers = input.numConsumers || 3;
    }
    /** Save form data to an object */
    save() {
        return {
            remoteUri: this.remoteUri,
            queueName: this.queueName,
            numConsumers: this.numConsumers
        };
    }
};
ActiveMqClientFields = __decorate([
    Component({
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
var script$M = ActiveMqClientFields;

/* script */
const __vue_script__$M = script$M;

/* template */
var __vue_render__$M = function() {
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
var __vue_staticRenderFns__$M = [];
__vue_render__$M._withStripped = true;

  /* style */
  const __vue_inject_styles__$M = undefined;
  /* scoped */
  const __vue_scope_id__$M = undefined;
  /* module identifier */
  const __vue_module_identifier__$M = undefined;
  /* functional template */
  const __vue_is_functional_template__$M = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let ActiveMqClientEventSourceDialog = class ActiveMqClientEventSourceDialog extends DialogComponent {
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Generate payload from UI */
    generatePayload() {
        let config = {};
        Object.assign(config, this.$refs.client.save());
        let payload = {};
        Object.assign(payload, this.$refs.dialog.save());
        payload.configuration = config;
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.client) {
            this.client.reset();
        }
        this.dialog.reset();
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.client) {
            this.client.load(config.configuration);
        }
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.client.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqClientEventSourceDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqClientEventSourceDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], ActiveMqClientEventSourceDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqClientEventSourceDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqClientEventSourceDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], ActiveMqClientEventSourceDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$H)
], ActiveMqClientEventSourceDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$M)
], ActiveMqClientEventSourceDialog.prototype, "client", void 0);
ActiveMqClientEventSourceDialog = __decorate([
    Component({
        components: {
            EventSourceDialog: __vue_component__$H,
            ActiveMqClientFields: __vue_component__$M
        }
    })
], ActiveMqClientEventSourceDialog);
var script$N = ActiveMqClientEventSourceDialog;

/* script */
const __vue_script__$N = script$N;

/* template */
var __vue_render__$N = function() {
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

let ActiveMqBrokerEventSourceCreateDialog$1 = class ActiveMqBrokerEventSourceCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog(idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqBrokerEventSourceCreateDialog$1.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$N)
], ActiveMqBrokerEventSourceCreateDialog$1.prototype, "dialog", void 0);
ActiveMqBrokerEventSourceCreateDialog$1 = __decorate([
    Component({
        components: {
            ActiveMqClientEventSourceDialog: __vue_component__$N
        }
    })
], ActiveMqBrokerEventSourceCreateDialog$1);
var script$O = ActiveMqBrokerEventSourceCreateDialog$1;

/* script */
const __vue_script__$O = script$O;

/* template */
var __vue_render__$O = function() {
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
var __vue_staticRenderFns__$O = [];
__vue_render__$O._withStripped = true;

  /* style */
  const __vue_inject_styles__$O = function (inject) {
    if (!inject) return
    inject("data-v-bb51c3d0_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ActiveMqClientEventSourceCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$O = "data-v-bb51c3d0";
  /* module identifier */
  const __vue_module_identifier__$O = undefined;
  /* functional template */
  const __vue_is_functional_template__$O = false;
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
    createInjector,
    undefined,
    undefined
  );

let ActiveMqClientEventSourceUpdateDialog = class ActiveMqClientEventSourceUpdateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.originalId = null;
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    }
    /** Open dialog */
    openDialog(config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], ActiveMqClientEventSourceUpdateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$N)
], ActiveMqClientEventSourceUpdateDialog.prototype, "dialog", void 0);
ActiveMqClientEventSourceUpdateDialog = __decorate([
    Component({
        components: {
            ActiveMqClientEventSourceDialog: __vue_component__$N
        }
    })
], ActiveMqClientEventSourceUpdateDialog);
var script$P = ActiveMqClientEventSourceUpdateDialog;

/* script */
const __vue_script__$P = script$P;

/* template */
var __vue_render__$P = function() {
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
var __vue_staticRenderFns__$P = [];
__vue_render__$P._withStripped = true;

  /* style */
  const __vue_inject_styles__$P = function (inject) {
    if (!inject) return
    inject("data-v-51a33b06_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"ActiveMqClientEventSourceUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$P = "data-v-51a33b06";
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

let CoapServerFields = class CoapServerFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.port = 8583;
    }
    /** Reset section content */
    reset() {
        this.port = 8583;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.port = input.port || 8583;
    }
    /** Save form data to an object */
    save() {
        return {
            port: this.port
        };
    }
};
CoapServerFields = __decorate([
    Component({
        validations: {
            port: {
                required: validators_1
            }
        }
    })
], CoapServerFields);
var script$Q = CoapServerFields;

/* script */
const __vue_script__$Q = script$Q;

/* template */
var __vue_render__$Q = function() {
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
var __vue_staticRenderFns__$Q = [];
__vue_render__$Q._withStripped = true;

  /* style */
  const __vue_inject_styles__$Q = undefined;
  /* scoped */
  const __vue_scope_id__$Q = undefined;
  /* module identifier */
  const __vue_module_identifier__$Q = undefined;
  /* functional template */
  const __vue_is_functional_template__$Q = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let CoapEventSourceDialog = class CoapEventSourceDialog extends DialogComponent {
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Generate payload from UI */
    generatePayload() {
        let config = {};
        Object.assign(config, this.server.save());
        let payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.server) {
            this.server.reset();
        }
        this.dialog.reset();
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.server) {
            this.server.load(config.configuration);
        }
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.server.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapEventSourceDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapEventSourceDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], CoapEventSourceDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapEventSourceDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapEventSourceDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], CoapEventSourceDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$H)
], CoapEventSourceDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$Q)
], CoapEventSourceDialog.prototype, "server", void 0);
CoapEventSourceDialog = __decorate([
    Component({
        components: {
            EventSourceDialog: __vue_component__$H,
            CoapServerFields: __vue_component__$Q
        }
    })
], CoapEventSourceDialog);
var script$R = CoapEventSourceDialog;

/* script */
const __vue_script__$R = script$R;

/* template */
var __vue_render__$R = function() {
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

let CoapEventSourceCreateDialog = class CoapEventSourceCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog(idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapEventSourceCreateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$R)
], CoapEventSourceCreateDialog.prototype, "dialog", void 0);
CoapEventSourceCreateDialog = __decorate([
    Component({
        components: {
            CoapEventSourceDialog: __vue_component__$R
        }
    })
], CoapEventSourceCreateDialog);
var script$S = CoapEventSourceCreateDialog;

/* script */
const __vue_script__$S = script$S;

/* template */
var __vue_render__$S = function() {
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
var __vue_staticRenderFns__$S = [];
__vue_render__$S._withStripped = true;

  /* style */
  const __vue_inject_styles__$S = function (inject) {
    if (!inject) return
    inject("data-v-a87ba9f8_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CoapEventSourceCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$S = "data-v-a87ba9f8";
  /* module identifier */
  const __vue_module_identifier__$S = undefined;
  /* functional template */
  const __vue_is_functional_template__$S = false;
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
    createInjector,
    undefined,
    undefined
  );

let CoapEventSourceUpdateDialog = class CoapEventSourceUpdateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.originalId = null;
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    }
    /** Open dialog */
    openDialog(config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], CoapEventSourceUpdateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$R)
], CoapEventSourceUpdateDialog.prototype, "dialog", void 0);
CoapEventSourceUpdateDialog = __decorate([
    Component({
        components: {
            CoapEventSourceDialog: __vue_component__$R
        }
    })
], CoapEventSourceUpdateDialog);
var script$T = CoapEventSourceUpdateDialog;

/* script */
const __vue_script__$T = script$T;

/* template */
var __vue_render__$T = function() {
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
var __vue_staticRenderFns__$T = [];
__vue_render__$T._withStripped = true;

  /* style */
  const __vue_inject_styles__$T = function (inject) {
    if (!inject) return
    inject("data-v-95249282_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"CoapEventSourceUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$T = "data-v-95249282";
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

let EventHubFields = class EventHubFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.consumerGroupName = "";
        this.namespaceName = "";
        this.eventHubName = "";
        this.sasKeyName = "";
        this.sasKey = "";
        this.storageConnectionString = "";
        this.storageContainerName = "";
        this.hostNamePrefix = "";
    }
    /** Reset section content */
    reset() {
        this.consumerGroupName = "";
        this.namespaceName = "";
        this.eventHubName = "";
        this.sasKeyName = "";
        this.sasKey = "";
        this.storageConnectionString = "";
        this.storageContainerName = "";
        this.hostNamePrefix = "";
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.consumerGroupName = input.consumerGroupName || "";
        this.namespaceName = input.namespaceName || "";
        this.eventHubName = input.eventHubName || "";
        this.sasKeyName = input.sasKeyName || "";
        this.sasKey = input.sasKey || "";
        this.storageConnectionString = input.storageConnectionString || "";
        this.storageContainerName = input.storageContainerName || "";
        this.hostNamePrefix = input.hostNamePrefix || "";
    }
    /** Save form data to an object */
    save() {
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
    }
};
EventHubFields = __decorate([
    Component({
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
var script$U = EventHubFields;

/* script */
const __vue_script__$U = script$U;

/* template */
var __vue_render__$U = function() {
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
var __vue_staticRenderFns__$U = [];
__vue_render__$U._withStripped = true;

  /* style */
  const __vue_inject_styles__$U = undefined;
  /* scoped */
  const __vue_scope_id__$U = undefined;
  /* module identifier */
  const __vue_module_identifier__$U = undefined;
  /* functional template */
  const __vue_is_functional_template__$U = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let EventHubEventSourceDialog = class EventHubEventSourceDialog extends DialogComponent {
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Generate payload from UI */
    generatePayload() {
        let config = {};
        Object.assign(config, this.connection.save());
        let payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.connection) {
            this.connection.reset();
        }
        this.dialog.reset();
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.connection) {
            this.connection.load(config.configuration);
        }
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.connection.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventHubEventSourceDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventHubEventSourceDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], EventHubEventSourceDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventHubEventSourceDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventHubEventSourceDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], EventHubEventSourceDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$H)
], EventHubEventSourceDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$U)
], EventHubEventSourceDialog.prototype, "connection", void 0);
EventHubEventSourceDialog = __decorate([
    Component({
        components: {
            EventSourceDialog: __vue_component__$H,
            EventHubFields: __vue_component__$U
        }
    })
], EventHubEventSourceDialog);
var script$V = EventHubEventSourceDialog;

/* script */
const __vue_script__$V = script$V;

/* template */
var __vue_render__$V = function() {
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

let EventHubEventSourceCreateDialog = class EventHubEventSourceCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog(idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventHubEventSourceCreateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$V)
], EventHubEventSourceCreateDialog.prototype, "dialog", void 0);
EventHubEventSourceCreateDialog = __decorate([
    Component({
        components: {
            EventHubEventSourceDialog: __vue_component__$V
        }
    })
], EventHubEventSourceCreateDialog);
var script$W = EventHubEventSourceCreateDialog;

/* script */
const __vue_script__$W = script$W;

/* template */
var __vue_render__$W = function() {
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
var __vue_staticRenderFns__$W = [];
__vue_render__$W._withStripped = true;

  /* style */
  const __vue_inject_styles__$W = function (inject) {
    if (!inject) return
    inject("data-v-3ad9ef03_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EventHubEventSourceCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$W = "data-v-3ad9ef03";
  /* module identifier */
  const __vue_module_identifier__$W = undefined;
  /* functional template */
  const __vue_is_functional_template__$W = false;
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
    createInjector,
    undefined,
    undefined
  );

let EventHubEventSourceUpdateDialog = class EventHubEventSourceUpdateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.originalId = null;
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    }
    /** Open dialog */
    openDialog(config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventHubEventSourceUpdateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$V)
], EventHubEventSourceUpdateDialog.prototype, "dialog", void 0);
EventHubEventSourceUpdateDialog = __decorate([
    Component({
        components: {
            EventHubEventSourceDialog: __vue_component__$V
        }
    })
], EventHubEventSourceUpdateDialog);
var script$X = EventHubEventSourceUpdateDialog;

/* script */
const __vue_script__$X = script$X;

/* template */
var __vue_render__$X = function() {
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
var __vue_staticRenderFns__$X = [];
__vue_render__$X._withStripped = true;

  /* style */
  const __vue_inject_styles__$X = function (inject) {
    if (!inject) return
    inject("data-v-767e548c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EventHubEventSourceUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$X = "data-v-767e548c";
  /* module identifier */
  const __vue_module_identifier__$X = undefined;
  /* functional template */
  const __vue_is_functional_template__$X = false;
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
    createInjector,
    undefined,
    undefined
  );

let MqttConnectionFields$1 = class MqttConnectionFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.protocol = "tcp";
        this.hostname = null;
        this.port = 1883;
        this.topic = null;
        this.qos = 1;
        this.numThreads = 3;
        this.protocols = [
            {
                text: "TCP",
                value: "tcp"
            },
            {
                text: "TLS",
                value: "tls"
            }
        ];
        this.qosValues = [
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
    }
    /** Reset section content */
    reset() {
        this.protocol = "tcp";
        this.hostname = null;
        this.port = 1883;
        this.topic = null;
        this.qos = 0;
        this.numThreads = 3;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.protocol = input.protocol || "tcp";
        this.hostname = input.hostname;
        this.port = input.port || 1883;
        this.topic = input.topic;
        this.qos = input.qos || 0;
        this.numThreads = input.numThreads || 3;
    }
    /** Save form data to an object */
    save() {
        return {
            protocol: this.protocol,
            hostname: this.hostname || "",
            port: this.port,
            topic: this.topic || "",
            qos: this.qos,
            numThreads: this.numThreads
        };
    }
};
MqttConnectionFields$1 = __decorate([
    Component({
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
], MqttConnectionFields$1);
var script$Y = MqttConnectionFields$1;

/* script */
const __vue_script__$Y = script$Y;

/* template */
var __vue_render__$Y = function() {
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
var __vue_staticRenderFns__$Y = [];
__vue_render__$Y._withStripped = true;

  /* style */
  const __vue_inject_styles__$Y = undefined;
  /* scoped */
  const __vue_scope_id__$Y = undefined;
  /* module identifier */
  const __vue_module_identifier__$Y = undefined;
  /* functional template */
  const __vue_is_functional_template__$Y = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let MqttAuthenticationFields$1 = class MqttAuthenticationFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.username = null;
        this.password = null;
        this.clientId = null;
        this.cleanSession = null;
        this.trustStorePath = null;
        this.trustStorePassword = null;
        this.keyStorePath = null;
        this.keyStorePassword = null;
    }
    /** Reset section content */
    reset() {
        this.username = null;
        this.password = null;
        this.clientId = null;
        this.cleanSession = null;
        this.trustStorePath = null;
        this.trustStorePassword = null;
        this.keyStorePath = null;
        this.keyStorePassword = null;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.username = input.username;
        this.password = input.password;
        this.trustStorePath = input.trustStorePath;
        this.trustStorePassword = input.trustStorePassword;
        this.keyStorePath = input.keyStorePath;
        this.keyStorePassword = input.keyStorePassword;
    }
    /** Save form data to an object */
    save() {
        return {
            username: this.username || "",
            password: this.password || "",
            trustStorePath: this.trustStorePath || "",
            trustStorePassword: this.trustStorePassword || "",
            keyStorePath: this.keyStorePath || "",
            keyStorePassword: this.keyStorePassword || ""
        };
    }
};
MqttAuthenticationFields$1 = __decorate([
    Component({})
], MqttAuthenticationFields$1);
var script$Z = MqttAuthenticationFields$1;

/* script */
const __vue_script__$Z = script$Z;

/* template */
var __vue_render__$Z = function() {
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
var __vue_staticRenderFns__$Z = [];
__vue_render__$Z._withStripped = true;

  /* style */
  const __vue_inject_styles__$Z = undefined;
  /* scoped */
  const __vue_scope_id__$Z = undefined;
  /* module identifier */
  const __vue_module_identifier__$Z = undefined;
  /* functional template */
  const __vue_is_functional_template__$Z = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let MqttEventSourceDialog = class MqttEventSourceDialog extends DialogComponent {
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Generate payload from UI */
    generatePayload() {
        let config = {};
        Object.assign(config, this.connection.save());
        Object.assign(config, this.authentication.save());
        let payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.connection) {
            this.connection.reset();
        }
        if (this.authentication) {
            this.authentication.reset();
        }
        this.dialog.reset();
    }
    /** Load dialog from a given configuration */
    load(config) {
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
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
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
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttEventSourceDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttEventSourceDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], MqttEventSourceDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttEventSourceDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttEventSourceDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], MqttEventSourceDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$H)
], MqttEventSourceDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$Y)
], MqttEventSourceDialog.prototype, "connection", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$Z)
], MqttEventSourceDialog.prototype, "authentication", void 0);
MqttEventSourceDialog = __decorate([
    Component({
        components: {
            EventSourceDialog: __vue_component__$H,
            MqttConnectionFields: __vue_component__$Y,
            MqttAuthenticationFields: __vue_component__$Z
        }
    })
], MqttEventSourceDialog);
var script$_ = MqttEventSourceDialog;

/* script */
const __vue_script__$_ = script$_;

/* template */
var __vue_render__$_ = function() {
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

let MqttEventSourceCreateDialog = class MqttEventSourceCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog(idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttEventSourceCreateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$_)
], MqttEventSourceCreateDialog.prototype, "dialog", void 0);
MqttEventSourceCreateDialog = __decorate([
    Component({
        components: {
            MqttEventSourceDialog: __vue_component__$_
        }
    })
], MqttEventSourceCreateDialog);
var script$$ = MqttEventSourceCreateDialog;

/* script */
const __vue_script__$$ = script$$;

/* template */
var __vue_render__$$ = function() {
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
var __vue_staticRenderFns__$$ = [];
__vue_render__$$._withStripped = true;

  /* style */
  const __vue_inject_styles__$$ = function (inject) {
    if (!inject) return
    inject("data-v-80c23bc0_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MqttEventSourceCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$$ = "data-v-80c23bc0";
  /* module identifier */
  const __vue_module_identifier__$$ = undefined;
  /* functional template */
  const __vue_is_functional_template__$$ = false;
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
    createInjector,
    undefined,
    undefined
  );

let MqttEventSourceUpdateDialog = class MqttEventSourceUpdateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.originalId = null;
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    }
    /** Open dialog */
    openDialog(config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], MqttEventSourceUpdateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$_)
], MqttEventSourceUpdateDialog.prototype, "dialog", void 0);
MqttEventSourceUpdateDialog = __decorate([
    Component({
        components: {
            MqttEventSourceDialog: __vue_component__$_
        }
    })
], MqttEventSourceUpdateDialog);
var script$10 = MqttEventSourceUpdateDialog;

/* script */
const __vue_script__$10 = script$10;

/* template */
var __vue_render__$10 = function() {
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
var __vue_staticRenderFns__$10 = [];
__vue_render__$10._withStripped = true;

  /* style */
  const __vue_inject_styles__$10 = function (inject) {
    if (!inject) return
    inject("data-v-489c24fb_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"MqttEventSourceUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$10 = "data-v-489c24fb";
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

let RabbitMqFields = class RabbitMqFields extends DialogSection {
    constructor() {
        super(...arguments);
        this.connectionUri = "";
        this.queueName = "";
        this.numConsumers = 5;
        this.reconnectInterval = 10;
    }
    /** Reset section content */
    reset() {
        this.connectionUri = "";
        this.queueName = "";
        this.numConsumers = 5;
        this.reconnectInterval = 10;
        this.$v.$reset();
    }
    /** Perform validation */
    validate() {
        this.$v.$touch();
        return !this.$v.$invalid;
    }
    /** Load form data from an object */
    load(input) {
        this.connectionUri = input.connectionUri || "";
        this.queueName = input.queueName || "";
        this.numConsumers = input.numConsumers || 5;
        this.reconnectInterval = input.reconnectInterval || 10;
    }
    /** Save form data to an object */
    save() {
        return {
            connectionUri: this.connectionUri,
            queueName: this.queueName,
            numConsumers: this.numConsumers,
            reconnectInterval: this.reconnectInterval
        };
    }
};
RabbitMqFields = __decorate([
    Component({
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
var script$11 = RabbitMqFields;

/* script */
const __vue_script__$11 = script$11;

/* template */
var __vue_render__$11 = function() {
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
var __vue_staticRenderFns__$11 = [];
__vue_render__$11._withStripped = true;

  /* style */
  const __vue_inject_styles__$11 = undefined;
  /* scoped */
  const __vue_scope_id__$11 = undefined;
  /* module identifier */
  const __vue_module_identifier__$11 = undefined;
  /* functional template */
  const __vue_is_functional_template__$11 = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let RabbitMqEventSourceDialog = class RabbitMqEventSourceDialog extends DialogComponent {
    /** Get icon for dialog */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Generate payload from UI */
    generatePayload() {
        let config = {};
        Object.assign(config, this.client.save());
        let payload = {};
        Object.assign(payload, this.dialog.save());
        payload.configuration = config;
        return payload;
    }
    /** Reset dialog contents */
    reset() {
        if (this.client) {
            this.client.reset();
        }
        this.dialog.reset();
    }
    /** Load dialog from a given configuration */
    load(config) {
        this.reset();
        if (this.dialog) {
            this.dialog.load(config);
        }
        if (this.client) {
            this.client.load(config.configuration);
        }
    }
    /** Called after create button is clicked */
    onCreateClicked(e) {
        if (!this.dialog.validate()) {
            return;
        }
        if (!this.client.validate()) {
            this.dialog.setActiveTab(0);
            return;
        }
        var payload = this.generatePayload();
        this.$emit("payload", payload);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], RabbitMqEventSourceDialog.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], RabbitMqEventSourceDialog.prototype, "title", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], RabbitMqEventSourceDialog.prototype, "width", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], RabbitMqEventSourceDialog.prototype, "createLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], RabbitMqEventSourceDialog.prototype, "cancelLabel", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], RabbitMqEventSourceDialog.prototype, "idsInUse", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$H)
], RabbitMqEventSourceDialog.prototype, "dialog", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$11)
], RabbitMqEventSourceDialog.prototype, "client", void 0);
RabbitMqEventSourceDialog = __decorate([
    Component({
        components: {
            EventSourceDialog: __vue_component__$H,
            RabbitMqFields: __vue_component__$11
        }
    })
], RabbitMqEventSourceDialog);
var script$12 = RabbitMqEventSourceDialog;

/* script */
const __vue_script__$12 = script$12;

/* template */
var __vue_render__$12 = function() {
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
var __vue_staticRenderFns__$12 = [];
__vue_render__$12._withStripped = true;

  /* style */
  const __vue_inject_styles__$12 = undefined;
  /* scoped */
  const __vue_scope_id__$12 = undefined;
  /* module identifier */
  const __vue_module_identifier__$12 = undefined;
  /* functional template */
  const __vue_is_functional_template__$12 = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

let RabbitMqEventSourceCreateDialog = class RabbitMqEventSourceCreateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(payload) {
        this.dialog.closeDialog();
        this.$emit("create", payload);
    }
    /** Open dialog */
    openDialog(idsInUse) {
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], RabbitMqEventSourceCreateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$12)
], RabbitMqEventSourceCreateDialog.prototype, "dialog", void 0);
RabbitMqEventSourceCreateDialog = __decorate([
    Component({
        components: {
            RabbitMqEventSourceDialog: __vue_component__$12
        }
    })
], RabbitMqEventSourceCreateDialog);
var script$13 = RabbitMqEventSourceCreateDialog;

/* script */
const __vue_script__$13 = script$13;

/* template */
var __vue_render__$13 = function() {
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
var __vue_staticRenderFns__$13 = [];
__vue_render__$13._withStripped = true;

  /* style */
  const __vue_inject_styles__$13 = function (inject) {
    if (!inject) return
    inject("data-v-b048adba_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"RabbitMqEventSourceCreateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$13 = "data-v-b048adba";
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

let RabbitMqEventSourceUpdateDialog = class RabbitMqEventSourceUpdateDialog extends Vue {
    constructor() {
        super(...arguments);
        this.originalId = null;
        this.idsInUse = [];
    }
    /** Emit payload */
    onPayload(config) {
        this.dialog.closeDialog();
        this.$emit("update", this.originalId, config);
    }
    /** Open dialog */
    openDialog(config, idsInUse) {
        this.originalId = config.id;
        this.idsInUse = idsInUse;
        this.dialog.reset();
        this.dialog.openDialog();
        this.dialog.load(config);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], RabbitMqEventSourceUpdateDialog.prototype, "tenantId", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$12)
], RabbitMqEventSourceUpdateDialog.prototype, "dialog", void 0);
RabbitMqEventSourceUpdateDialog = __decorate([
    Component({
        components: {
            RabbitMqEventSourceDialog: __vue_component__$12
        }
    })
], RabbitMqEventSourceUpdateDialog);
var script$14 = RabbitMqEventSourceUpdateDialog;

/* script */
const __vue_script__$14 = script$14;

/* template */
var __vue_render__$14 = function() {
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
var __vue_staticRenderFns__$14 = [];
__vue_render__$14._withStripped = true;

  /* style */
  const __vue_inject_styles__$14 = function (inject) {
    if (!inject) return
    inject("data-v-ab09920c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"RabbitMqEventSourceUpdateDialog.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$14 = "data-v-ab09920c";
  /* module identifier */
  const __vue_module_identifier__$14 = undefined;
  /* functional template */
  const __vue_is_functional_template__$14 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$14 = normalizeComponent(
    { render: __vue_render__$14, staticRenderFns: __vue_staticRenderFns__$14 },
    __vue_inject_styles__$14,
    __vue_script__$14,
    __vue_scope_id__$14,
    __vue_is_functional_template__$14,
    __vue_module_identifier__$14,
    false,
    createInjector,
    undefined,
    undefined
  );

let EventSourcesTable = class EventSourcesTable extends Vue {
    constructor() {
        super(...arguments);
        this.headers = [
            { text: "Id", value: "id" },
            { text: "Type", value: "type" },
            { text: "Decoder", value: "decoder" },
            { text: "", value: "delete" }
        ];
        /** Event sources in format for display */
        this.eventSourcesAsSortedArray = [];
    }
    onEventSourcesUpdated(updated) {
        this.calculateEventSourcesAsSortedArray();
    }
    /** Get page icon */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Get list of ids already in use */
    findIdsInUse(exclude) {
        let ids = [];
        if (this.eventSources) {
            this.eventSources.forEach(source => {
                if (source.id != exclude) {
                    ids.push(source.id);
                }
            });
        }
        return ids;
    }
    /** Get event source index based on id */
    getEventSourceIndex(id) {
        let match = null;
        if (this.eventSources) {
            this.eventSources.forEach((source, index) => {
                if (source.id === id) {
                    match = index;
                }
            });
        }
        return match;
    }
    /** Get an event source by id */
    getEventSourceById(id) {
        let index = this.getEventSourceIndex(id);
        if (this.eventSources && index != null) {
            return this.eventSources[index];
        }
        return null;
    }
    /** Get event sources as a sorted array */
    calculateEventSourcesAsSortedArray() {
        let all = [];
        if (this.eventSources) {
            this.eventSources.forEach(source => {
                let meta = {};
                meta.id = source.id;
                meta.type = source.type;
                meta.decoder = source.decoder;
                let config = source.configuration;
                let decoder = source.decoder;
                all.push({ meta: meta, config: config, decoder: decoder });
            });
        }
        all.sort(function (a, b) {
            return a.meta.id.localeCompare(b.meta.id);
        });
        this.eventSourcesAsSortedArray = all;
    }
    /** Add new event source */
    onAddEventSource() {
        this.chooser.openChooser();
    }
    /** Called to create a new event source based on type */
    onEventSourceCreate(id) {
        let idsInUse = this.findIdsInUse();
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
    }
    /** Called when event source is added */
    onEventSourceAdded(config) {
        if (this.eventSources) {
            this.eventSources.push(config);
            this.calculateEventSourcesAsSortedArray();
        }
        this.$emit("create", config);
    }
    /** Open event source by id */
    onOpenEventSource(id) {
        let config = this.getEventSourceById(id);
        let idsInUse = this.findIdsInUse(id);
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
    }
    /** Called when event source is updated */
    onEventSourceUpdated(originalId, config) {
        let index = this.getEventSourceIndex(originalId);
        if (this.eventSources && index != null) {
            Vue.set(this.eventSources, index, config);
            this.calculateEventSourcesAsSortedArray();
        }
        this.$emit("update", originalId, config);
    }
    /** Delete event source by id */
    onDeleteEventSource(id) {
        let index = this.getEventSourceIndex(id);
        if (this.eventSources && index != null) {
            this.eventSources.splice(index);
            this.calculateEventSourcesAsSortedArray();
        }
        this.$emit("delete", id);
    }
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], EventSourcesTable.prototype, "tenantId", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], EventSourcesTable.prototype, "eventSources", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$A)
], EventSourcesTable.prototype, "chooser", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$A)
], EventSourcesTable.prototype, "amqBrokerCreate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$L)
], EventSourcesTable.prototype, "amqBrokerUpdate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$O)
], EventSourcesTable.prototype, "amqClientCreate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$P)
], EventSourcesTable.prototype, "amqClientUpdate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$S)
], EventSourcesTable.prototype, "coapCreate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$T)
], EventSourcesTable.prototype, "coapUpdate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$W)
], EventSourcesTable.prototype, "eventHubCreate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$X)
], EventSourcesTable.prototype, "eventHubUpdate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$$)
], EventSourcesTable.prototype, "mqttCreate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$10)
], EventSourcesTable.prototype, "mqttUpdate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$13)
], EventSourcesTable.prototype, "rabbitMqCreate", void 0);
__decorate([
    Ref(),
    __metadata("design:type", __vue_component__$14)
], EventSourcesTable.prototype, "rabbitMqUpdate", void 0);
__decorate([
    Watch("eventSources", { immediate: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventSourcesTable.prototype, "onEventSourcesUpdated", null);
EventSourcesTable = __decorate([
    Component({
        components: {
            NewEventSourceChooser: __vue_component__$A,
            ActiveMqBrokerEventSourceCreateDialog: __vue_component__$K,
            ActiveMqBrokerEventSourceUpdateDialog: __vue_component__$L,
            ActiveMqClientEventSourceCreateDialog: __vue_component__$O,
            ActiveMqClientEventSourceUpdateDialog: __vue_component__$P,
            CoapEventSourceCreateDialog: __vue_component__$S,
            CoapEventSourceUpdateDialog: __vue_component__$T,
            EventHubEventSourceCreateDialog: __vue_component__$W,
            EventHubEventSourceUpdateDialog: __vue_component__$X,
            MqttEventSourceCreateDialog: __vue_component__$$,
            MqttEventSourceUpdateDialog: __vue_component__$10,
            RabbitMqEventSourceCreateDialog: __vue_component__$13,
            RabbitMqEventSourceUpdateDialog: __vue_component__$14
        }
    })
], EventSourcesTable);
var script$15 = EventSourcesTable;

/* script */
const __vue_script__$15 = script$15;

/* template */
var __vue_render__$15 = function() {
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
var __vue_staticRenderFns__$15 = [];
__vue_render__$15._withStripped = true;

  /* style */
  const __vue_inject_styles__$15 = function (inject) {
    if (!inject) return
    inject("data-v-0658fbe6_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EventSourcesTable.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$15 = "data-v-0658fbe6";
  /* module identifier */
  const __vue_module_identifier__$15 = undefined;
  /* functional template */
  const __vue_is_functional_template__$15 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$15 = normalizeComponent(
    { render: __vue_render__$15, staticRenderFns: __vue_staticRenderFns__$15 },
    __vue_inject_styles__$15,
    __vue_script__$15,
    __vue_scope_id__$15,
    __vue_is_functional_template__$15,
    __vue_module_identifier__$15,
    false,
    createInjector,
    undefined,
    undefined
  );

let EventSourcesPlugin = class EventSourcesPlugin extends Vue {
    /** Get page icon */
    get icon() {
        return MicroserviceIcon.EventSources;
    }
    /** Tenant id */
    get tenantId() {
        return this.configuration ? this.configuration.tenant.token : null;
    }
    /** Get tenant configuration for event sources */
    get eventSourcesConfiguration() {
        return this.configuration ? this.configuration.tenantConfiguration : null;
    }
    /** Get instance configuraton information */
    get instanceManagement() {
        return this.configuration ? this.configuration.instanceConfiguration : null;
    }
    /** Get event sources list */
    get eventSources() {
        return this.eventSourcesConfiguration
            ? this.eventSourcesConfiguration.eventSources
            : null;
    }
    /** Handle event source created */
    onEventSourceCreated(config) {
        this.markDirty();
    }
    /** Handle event source updated */
    onEventSourceUpdated(originalId, config) {
        this.markDirty();
    }
    /** Handle event source deleted */
    onEventSourceDeleted(id) {
        this.markDirty();
    }
    /** Mark data as having been updated */
    markDirty() {
        this.$emit("dirty");
    }
};
__decorate([
    Prop(),
    __metadata("design:type", Object)
], EventSourcesPlugin.prototype, "configuration", void 0);
EventSourcesPlugin = __decorate([
    Component({
        components: { TenantEnginePlugin: __vue_component__$6, EventSourcesTable: __vue_component__$15 }
    })
], EventSourcesPlugin);
var script$16 = EventSourcesPlugin;

/* script */
const __vue_script__$16 = script$16;

/* template */
var __vue_render__$16 = function() {
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
var __vue_staticRenderFns__$16 = [];
__vue_render__$16._withStripped = true;

  /* style */
  const __vue_inject_styles__$16 = function (inject) {
    if (!inject) return
    inject("data-v-916fe66c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EventSourcesPlugin.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$16 = "data-v-916fe66c";
  /* module identifier */
  const __vue_module_identifier__$16 = undefined;
  /* functional template */
  const __vue_is_functional_template__$16 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$16 = normalizeComponent(
    { render: __vue_render__$16, staticRenderFns: __vue_staticRenderFns__$16 },
    __vue_inject_styles__$16,
    __vue_script__$16,
    __vue_scope_id__$16,
    __vue_is_functional_template__$16,
    __vue_module_identifier__$16,
    false,
    createInjector,
    undefined,
    undefined
  );

/** Process as Vue plugin */
function AdminUiPlugins(Vue) {
  Vue.use(SiteWhereIdeComponents);

  Vue.component("sw-datastore-selector", __vue_component__$5);
  Vue.component("sw-tenant-engine-plugin", __vue_component__$6);

  Vue.component("sw-asset-management-config-plugin", __vue_component__$7);
  Vue.component("sw-batch-operations-config-plugin", __vue_component__$b);
  Vue.component("sw-command-delivery-config-plugin", __vue_component__$y);
  Vue.component("sw-device-management-config-plugin", __vue_component__$z);
  Vue.component("sw-event-sources-config-plugin", __vue_component__$16);
}

export default AdminUiPlugins;
export { __vue_component__$7 as AssetManagementPlugin, __vue_component__$b as BatchOperationsPlugin, __vue_component__$y as CommandDeliveryPlugin, __vue_component__$z as DeviceManagementPlugin, __vue_component__$16 as EventSourcesPlugin, __vue_component__$6 as TenantEnginePlugin };
