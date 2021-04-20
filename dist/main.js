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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: link, activeBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeBoard", function() { return activeBoard; });
/* harmony import */ var _modules_cardModal_createModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cardModal/createModal */ "./src/js/modules/cardModal/createModal.js");
/* harmony import */ var _modules_cardMenu_createMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cardMenu/createMenu */ "./src/js/modules/cardMenu/createMenu.js");
/* harmony import */ var _modules_loadResourses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/loadResourses */ "./src/js/modules/loadResourses.js");
/* harmony import */ var _modules_allClose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/allClose */ "./src/js/modules/allClose.js");
/* harmony import */ var _modules_board_boardListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/board/boardListener */ "./src/js/modules/board/boardListener.js");
/* harmony import */ var _modules_column_columnListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/column/columnListener */ "./src/js/modules/column/columnListener.js");
/* harmony import */ var _modules_modal_openModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal/openModal */ "./src/js/modules/modal/openModal.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");








var link = "http://simpletrello-88eaf-default-rtdb.firebaseio.com/trello.json";
var activeBoard = [];
Object(_modules_loadResourses__WEBPACK_IMPORTED_MODULE_2__["default"])(link);
window.addEventListener("DOMContentLoaded", function () {
  Object(_modules_allClose__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_board_boardListener__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_column_columnListener__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_search__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_modal_openModal__WEBPACK_IMPORTED_MODULE_6__["default"])("column-item-content", _modules_cardModal_createModal__WEBPACK_IMPORTED_MODULE_0__["default"], "column-item-menu");
  Object(_modules_modal_openModal__WEBPACK_IMPORTED_MODULE_6__["default"])("column-item-menu", _modules_cardMenu_createMenu__WEBPACK_IMPORTED_MODULE_1__["default"], "column-item-content");
});


/***/ }),

/***/ "./src/js/modules/Classes/Board.js":
/*!*****************************************!*\
  !*** ./src/js/modules/Classes/Board.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ "./src/js/modules/Classes/Column.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");





var Board = /*#__PURE__*/function () {
  function Board(id, title) {
    var columns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Board);

    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Board, [{
    key: "init",
    value: function init() {
      var obj = {};

      for (var key in this.columns) {
        var _this$columns$key = this.columns[key],
            id = _this$columns$key.id,
            title = _this$columns$key.title,
            cards = _this$columns$key.cards;
        var column = new _Column__WEBPACK_IMPORTED_MODULE_2__["default"](id, title, cards, this.id);
        column.init();
        obj[id] = column;
      }

      this.columns = obj;
    }
  }, {
    key: "addColumn",
    value: function addColumn(id, title) {
      var column = new _Column__WEBPACK_IMPORTED_MODULE_2__["default"](id, title, null, this.id);
      this.columns[id] = column;
      column.render();
    }
  }, {
    key: "removeColumn",
    value: function removeColumn(id) {
      delete this.columns[id];
    }
  }, {
    key: "getPath",
    value: function getPath(id) {
      return "".concat(this.id, "/columns/").concat(id);
    }
  }, {
    key: "render",
    value: function render() {
      try {
        document.querySelectorAll('[data-column-id]').forEach(function (item) {
          return item.remove();
        });
      } catch (e) {}

      var currentBoard = document.querySelector('.board-current');
      var text = this.title;

      if (text.length > 15) {
        text = text.substring(0, 16) + '...';
      }

      currentBoard.textContent = text;
      currentBoard.setAttribute('data-board-id', this.id);

      for (var key in this.columns) {
        this.columns[key].render();
      }
    }
  }]);

  return Board;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/js/modules/Classes/Card.js":
/*!****************************************!*\
  !*** ./src/js/modules/Classes/Card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Card = /*#__PURE__*/function () {
  function Card(id, title, column) {
    var desc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var comments = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var checklists = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var background = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Card);

    this.id = id;
    this.title = title;
    this.column = column;
    this.desc = desc;
    this.background = background;
    this.comments = comments;
    this.checklists = checklists;
    this.domElement;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Card, [{
    key: "setTitle",
    value: function setTitle(value) {
      this.title = value;
    }
  }, {
    key: "addDesc",
    value: function addDesc(desc) {
      this.desc = desc;
    }
  }, {
    key: "addComment",
    value: function addComment(comment) {
      if (!this.comments) {
        this.comments = {};
      }

      this.comments[comment.id] = comment;
    }
  }, {
    key: "removeComment",
    value: function removeComment(id) {
      delete this.comments[id];

      if (Object.keys(this.comments).length === 0) {
        this.comments = null;
      }
    }
  }, {
    key: "setBackground",
    value: function setBackground(color) {
      this.background = color;
    }
  }, {
    key: "addChecklist",
    value: function addChecklist(id) {
      if (!this.checklists) {
        this.checklists = {};
      }

      this.checklists[id] = {
        id: id,
        title: "Чек-лист",
        tasks: {}
      };
    }
  }, {
    key: "removeChecklist",
    value: function removeChecklist(id) {
      delete this.checklists[id];

      if (Object.keys(this.checklists).length === 0) {
        this.checklists = null;
      }
    }
  }, {
    key: "addChecklistTask",
    value: function addChecklistTask(id, body) {
      if (!this.checklists[id].tasks) {
        this.checklists[id].tasks = {};
      }

      this.checklists[id].tasks[body.id] = body;
    }
  }, {
    key: "removeChecklistTask",
    value: function removeChecklistTask(idChecklist, idTask) {
      delete this.checklists[idChecklist].tasks[idTask];
    }
  }, {
    key: "changeChecklistTitle",
    value: function changeChecklistTitle(id, title) {
      this.checklists[id].title = title;
    }
  }, {
    key: "changeChecklistTask",
    value: function changeChecklistTask(id, idTask) {
      this.checklists[id].tasks[idTask].status = !this.checklists[id].tasks[idTask].status;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return "".concat(this.column.boardId, "/columns/").concat(this.column.id, "/cards/").concat(this.id);
    }
  }, {
    key: "render",
    value: function render() {
      var card = document.createElement("div");
      card.setAttribute("data-card-id", this.id);
      card.classList.add("column-item");
      card.innerHTML = "\n      <div class=\"column-item-content\">\n        <div data-column-card-title> ".concat(this.title, "</div>\n        <span class=\"column-item-menu\">&equiv;</span>\n      </div>\n      <span data-column-card-bg></span>");

      if (this.background) {
        card.children[1].classList.add("column-item__bg");
        card.children[1].style.backgroundColor = this.background;
      }

      this.domElement = card;
      this.column.domElement.querySelector(".column-item-wrapper").append(card);
    }
  }]);

  return Card;
}();

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/js/modules/Classes/Column.js":
/*!******************************************!*\
  !*** ./src/js/modules/Classes/Column.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./src/js/modules/Classes/Card.js");




var Column = /*#__PURE__*/function () {
  function Column(id, title) {
    var cards = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var boardId = arguments.length > 3 ? arguments[3] : undefined;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Column);

    this.id = id;
    this.title = title;
    this.cards = cards;
    this.boardId = boardId;
    this.domElement = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Column, [{
    key: "init",
    value: function init() {
      var obj = {};

      for (var key in this.cards) {
        var _this$cards$key = this.cards[key],
            id = _this$cards$key.id,
            title = _this$cards$key.title,
            desc = _this$cards$key.desc,
            background = _this$cards$key.background,
            comments = _this$cards$key.comments,
            checklists = _this$cards$key.checklists;
        obj[id] = new _Card__WEBPACK_IMPORTED_MODULE_2__["default"](id, title, this, desc, comments, checklists, background);
      }

      this.cards = obj;
    }
  }, {
    key: "addCard",
    value: function addCard(id, title) {
      var card = new _Card__WEBPACK_IMPORTED_MODULE_2__["default"](id, title, this);

      if (!this.cards) {
        this.cards = {};
      }

      this.cards[id] = card;
      card.render();
    }
  }, {
    key: "removeCard",
    value: function removeCard(id) {
      delete this.cards[id];
    }
  }, {
    key: "getPath",
    value: function getPath(id) {
      console.log(this.boardId);
      return "".concat(this.boardId, "/columns/").concat(this.id, "/cards/").concat(id);
    }
  }, {
    key: "render",
    value: function render() {
      var element = document.querySelector(".new__column");
      var column = document.createElement("div");
      this.domElement = column;
      column.classList.add("column");
      column.setAttribute("data-column-id", this.id);
      column.innerHTML = "\n      <div class=\"column-header\">\n        <p>".concat(this.title, "</p>\n        <span data-delete-column>&times;</span>\n      </div>\n      <div class=\"column-item-wrapper\"></div>\n      <div class=\"add-item new__card\" data-add-card>\n        <span>&plus;</span>\n        <p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</p>\n      </div>\n    ");

      for (var key in this.cards) {
        this.cards[key].render();
      }

      element.before(column);
    }
  }]);

  return Column;
}();

/* harmony default export */ __webpack_exports__["default"] = (Column);

/***/ }),

/***/ "./src/js/modules/addInput.js":
/*!************************************!*\
  !*** ./src/js/modules/addInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var addInput = function addInput(element, placeholder, className, inputText, callback) {
  // Если Input уже есть на странице
  if (document.querySelector(".input-add")) {
    var _input = document.querySelector(".input-add");

    var nextElement = _input.nextElementSibling;

    _input.remove();

    nextElement.style.display = "";
  }

  var input = document.createElement("div");
  input.classList.add("input-add", className);
  input.innerHTML = "\n    <input type=\"text\" placeholder=\"".concat(placeholder, "\">\n    <div class=\"input-btn\">\n      <button class=\"btn\" type=\"button\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n      <button class=\"btn\" type=\"button\">&times;</button>\n    </div>\n  ");
  element.before(input);
  inputText ? input.children[0].value = inputText : "";
  input.children[1].addEventListener("click", add);
  input.children[0].addEventListener("keypress", add);

  function add(e) {
    if (e.key && e.key !== "Enter") return;

    if (e.target.textContent === "Добавить" || e.key === "Enter") {
      var value = this.parentElement.children[0].value.trim();

      if (value.length == 0) {
        return;
      }

      callback(value);
    }

    try {
      this.parentElement.nextElementSibling.style.display = "";
    } catch (error) {}

    this.parentElement.remove();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (addInput);

/***/ }),

/***/ "./src/js/modules/allClose.js":
/*!************************************!*\
  !*** ./src/js/modules/allClose.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var allClose = function allClose() {
  var main = document.querySelector('.main');
  main.addEventListener('click', function (e) {
    if (e.target === main) {
      try {
        document.querySelectorAll('.input-btn .btn')[1].click();
      } catch (e) {}

      document.querySelector('.board-list-items').classList.add('hide');
      var res = document.querySelector('.search-results');
      res.classList.add('hide');
      res.textContent = '';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (allClose);

/***/ }),

/***/ "./src/js/modules/board/addBoard.js":
/*!******************************************!*\
  !*** ./src/js/modules/board/addBoard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _idGenerate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../idGenerate */ "./src/js/modules/idGenerate.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");
/* harmony import */ var _Classes_Board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Classes/Board */ "./src/js/modules/Classes/Board.js");






var addBoard = function addBoard() {
  var btn = document.querySelector('.board-add');
  btn.addEventListener('click', function () {
    btn.style.display = 'none';
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(btn, 'Введите название доски', 'input-add__board', false, function (value) {
      var board = document.createElement('div');
      board.classList.add("board-item");
      var id = Object(_idGenerate__WEBPACK_IMPORTED_MODULE_1__["default"])();
      board.setAttribute("data-board-id", id);
      board.innerHTML = "\n        <p data-board-title>".concat(value, "</p>\n        <button data-delete-board>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n      ");
      btn.before(board);
      btn.style.display = "";
      var currentBoard = document.querySelector('.board-current');
      currentBoard.textContent = value;
      currentBoard.setAttribute("data-board-id", id);
      localStorage.setItem("activeBoardID", id);
      var data = {
        id: id,
        title: value,
        columns: {}
      };
      var boardObj = new _Classes_Board__WEBPACK_IMPORTED_MODULE_4__["default"](data.id, data.title);
      boardObj.render();
      _index__WEBPACK_IMPORTED_MODULE_3__["activeBoard"].splice(0, 1, boardObj);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_3__["link"], data, id);
      btn.closest('.board-list-items').classList.add('hide');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addBoard);

/***/ }),

/***/ "./src/js/modules/board/boardListener.js":
/*!***********************************************!*\
  !*** ./src/js/modules/board/boardListener.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addBoard */ "./src/js/modules/board/addBoard.js");
/* harmony import */ var _chooseBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chooseBoard */ "./src/js/modules/board/chooseBoard.js");
/* harmony import */ var _removeBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeBoard */ "./src/js/modules/board/removeBoard.js");




var boardListener = function boardListener() {
  var boardsList = document.querySelector('.board-list-items');
  var btn = document.querySelector('.board-list');
  btn.addEventListener('click', function () {
    boardsList.classList.toggle('hide');
  });
  Object(_addBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_removeBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_chooseBoard__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ __webpack_exports__["default"] = (boardListener);

/***/ }),

/***/ "./src/js/modules/board/chooseBoard.js":
/*!*********************************************!*\
  !*** ./src/js/modules/board/chooseBoard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _Classes_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Classes/Board */ "./src/js/modules/Classes/Board.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preloader */ "./src/js/modules/preloader.js");





var chooseBoard = function chooseBoard() {
  var header = document.querySelector('.header');
  header.addEventListener('click', function (e) {
    if (e.target.hasAttribute("data-board-title") || e.target.hasAttribute("data-board-id") && e.target.closest('.board-list-items')) {
      var newCurrentBoard = e.target.closest("[data-board-id]");
      var id = newCurrentBoard.getAttribute("data-board-id");
      localStorage.setItem("activeBoardID", id);
      var load = Object(_preloader__WEBPACK_IMPORTED_MODULE_3__["default"])(".main", "modal");
      Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getData"])(_index__WEBPACK_IMPORTED_MODULE_2__["link"], id).then(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            columns = _ref.columns;
        load.remove();
        var board = new _Classes_Board__WEBPACK_IMPORTED_MODULE_1__["default"](id, title, columns);
        board.init();
        board.render();
        _index__WEBPACK_IMPORTED_MODULE_2__["activeBoard"].splice(0, 1, board);
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (chooseBoard);

/***/ }),

/***/ "./src/js/modules/board/removeBoard.js":
/*!*********************************************!*\
  !*** ./src/js/modules/board/removeBoard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _Classes_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Classes/Board */ "./src/js/modules/Classes/Board.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");




var removeBoard = function removeBoard() {
  var header = document.querySelector('.header');
  header.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-delete-board')) {
      var board = e.target.closest('[data-board-id]');
      var id = board.getAttribute('data-board-id');
      var currentBoard = document.querySelector(".board-current");
      var idCurrent = currentBoard.getAttribute('data-board-id');
      board.remove();

      if (id === idCurrent) {
        try {
          var boardsList = document.querySelector('.board-list-items').children[0];
          var newCurrentBoard = boardsList.querySelector('[data-board-title]');
          var title = newCurrentBoard.textContent;

          var _id = newCurrentBoard.closest('[data-board-id]').getAttribute('data-board-id');

          currentBoard.textContent = title;
          currentBoard.setAttribute('data-board-id', _id);
          localStorage.setItem("activeBoardID", _id);
          Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getData"])(_index__WEBPACK_IMPORTED_MODULE_2__["link"], _id).then(function (_ref) {
            var id = _ref.id,
                title = _ref.title,
                columns = _ref.columns;
            var board = new _Classes_Board__WEBPACK_IMPORTED_MODULE_1__["default"](id, title, columns);
            board.init();
            board.render();
            _index__WEBPACK_IMPORTED_MODULE_2__["activeBoard"].splice(0, 1, board);
          });
        } catch (e) {
          currentBoard.textContent = 'Создать доску';
          localStorage.removeItem("activeBoardID");
          document.querySelectorAll('[data-column-id]').forEach(function (column) {
            return column.remove();
          });
        }
      }

      Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["deleteData"])(_index__WEBPACK_IMPORTED_MODULE_2__["link"], id);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (removeBoard);

/***/ }),

/***/ "./src/js/modules/cardMenu/createMenu.js":
/*!***********************************************!*\
  !*** ./src/js/modules/cardMenu/createMenu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menuListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuListener */ "./src/js/modules/cardMenu/menuListener.js");


var createMenu = function createMenu(card) {
  var modal = document.createElement("div");
  modal.classList.add("modal-menu");
  modal.setAttribute('data-modal-close', true);
  modal.innerHTML = "\n    <div class=\"modal-menu-content\">\n      <div class=\"modal-menu-card\"></div>\n      <div class=\"modal-menu-wrap\">\n        <button>\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</button>\n        <button data-card-title>\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</button>\n        <button data-card-desc>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</button>\n        <button data-card-bg>\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443</button>\n        <button>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</button>\n      </div>\n    </div>\n  ";
  var coords = card.domElement.getBoundingClientRect();
  modal.children[0].style.marginTop = coords.top + "px";
  modal.children[0].style.marginLeft = coords.left + "px";
  modal.querySelector(".modal-menu-card").append(card.domElement.cloneNode(true));
  Object(_menuListener__WEBPACK_IMPORTED_MODULE_0__["default"])(modal, card);
  return modal;
};

/* harmony default export */ __webpack_exports__["default"] = (createMenu);

/***/ }),

/***/ "./src/js/modules/cardMenu/menuListener.js":
/*!*************************************************!*\
  !*** ./src/js/modules/cardMenu/menuListener.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_closeModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/closeModal */ "./src/js/modules/modal/closeModal.js");
/* harmony import */ var _modal_changeDesc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/changeDesc */ "./src/js/modules/modal/changeDesc.js");
/* harmony import */ var _modal_changeTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/changeTitle */ "./src/js/modules/modal/changeTitle.js");
/* harmony import */ var _modal_changeBg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/changeBg */ "./src/js/modules/modal/changeBg.js");
/* harmony import */ var _modal_removeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/removeCard */ "./src/js/modules/modal/removeCard.js");
/* harmony import */ var _openCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openCard */ "./src/js/modules/cardMenu/openCard.js");







var menuListener = function menuListener(modal, card) {
  modal.addEventListener('click', function (e) {
    var place = modal.querySelector('.modal-menu-card').children[0];
    Object(_modal_closeModal__WEBPACK_IMPORTED_MODULE_0__["default"])(e, modal);
    Object(_modal_changeTitle__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, card, place);
    Object(_modal_changeDesc__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target, card, place);
    Object(_modal_changeBg__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, card, place);
    Object(_modal_removeCard__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, modal, card);
    Object(_openCard__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target, modal, card);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menuListener);

/***/ }),

/***/ "./src/js/modules/cardMenu/openCard.js":
/*!*********************************************!*\
  !*** ./src/js/modules/cardMenu/openCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function openCard(target, modal, card) {
  if (target.textContent === "Открыть карточку") {
    modal.remove();
    card.domElement.children[0].click();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (openCard);

/***/ }),

/***/ "./src/js/modules/cardModal/checklist/addChecklist.js":
/*!************************************************************!*\
  !*** ./src/js/modules/cardModal/checklist/addChecklist.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createChecklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createChecklist */ "./src/js/modules/cardModal/checklist/createChecklist.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _idGenerate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../idGenerate */ "./src/js/modules/idGenerate.js");





function addChecklist(target, modal, card) {
  if (target.hasAttribute("data-modal-checklist")) {
    var id = Object(_idGenerate__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var checklist = Object(_createChecklist__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
    modal.querySelector(".desc").after(checklist);
    card.addChecklist(id);
    var body = {
      id: id,
      title: 'Чек-лист'
    };
    Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], body, card.getPath(), 'checklists', id);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (addChecklist);

/***/ }),

/***/ "./src/js/modules/cardModal/checklist/addChecklistTask.js":
/*!****************************************************************!*\
  !*** ./src/js/modules/cardModal/checklist/addChecklistTask.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../progressBar */ "./src/js/modules/cardModal/progressBar.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _idGenerate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../idGenerate */ "./src/js/modules/idGenerate.js");






function addChecklistTask(target, card, modal) {
  if (target.hasAttribute("data-modal-addcheck")) {
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(target, "Введите название задачи", "input-add__modal", false, function (value) {
      var task = document.createElement("li");
      task.classList.add("checklist-item");
      var id = Object(_idGenerate__WEBPACK_IMPORTED_MODULE_4__["default"])();
      task.setAttribute('data-task-id', id);
      task.innerHTML = "\n        <label>\n          <input type=\"checkbox\" data-check>\n          ".concat(value, "\n        </label>\n        <span data-delete-task>&times;</span>\n      ");
      target.parentElement.querySelector("div").append(task);
      var idChecklist = target.closest("[data-check-id]").getAttribute("data-check-id");
      console.log(idChecklist);
      var body = {
        id: id,
        value: value,
        status: false
      };
      card.addChecklistTask(idChecklist, body);
      Object(_progressBar__WEBPACK_IMPORTED_MODULE_1__["default"])(modal);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_3__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_2__["link"], body, card.getPath(), 'checklists', idChecklist, 'tasks', body.id);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (addChecklistTask);

/***/ }),

/***/ "./src/js/modules/cardModal/checklist/changeChecklistTitle.js":
/*!********************************************************************!*\
  !*** ./src/js/modules/cardModal/checklist/changeChecklistTitle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/services */ "./src/js/services/services.js");




function changeChecklistTitle(target, card) {
  if (target.hasAttribute("data-check-title")) {
    target.parentElement.style.display = "none";
    var text = target.textContent.trim() === "Чек-лист" ? '' : target.textContent;
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(target.parentElement, target.textContent, "input-add__modal", text, function (value) {
      target.textContent = value;
      var id = target.closest("[data-check-id]").getAttribute("data-check-id");
      card.changeChecklistTitle(id, value);
      target.parentElement.style.display = "";
      Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], {
        title: value
      }, card.getPath(), 'checklists', id);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (changeChecklistTitle);

/***/ }),

/***/ "./src/js/modules/cardModal/checklist/createChecklist.js":
/*!***************************************************************!*\
  !*** ./src/js/modules/cardModal/checklist/createChecklist.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createChecklist(id) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Чек-лист";
  var checkList = document.createElement("div");
  checkList.setAttribute("data-check-id", id);
  checkList.classList.add("modal__item");
  checkList.innerHTML = "\n    <span class=\"modal-logo\">\t&#9745;</span>\n    <div class=\"modal-content\">\n      <p> <span data-check-title> ".concat(title, "</span> <span data-delete-checklist>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</span></p>\n      <div class=\"checklist\">\n        <progress value=\"\" max=\"100\"></progress>\n        <div></div>\n        <p data-modal-addcheck>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</p>\n      </div>\n    </div>\n  ");
  return checkList;
}

/* harmony default export */ __webpack_exports__["default"] = (createChecklist);

/***/ }),

/***/ "./src/js/modules/cardModal/checklist/removeChecklist.js":
/*!***************************************************************!*\
  !*** ./src/js/modules/cardModal/checklist/removeChecklist.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/services */ "./src/js/services/services.js");



function removeChecklist(target, card) {
  if (target.hasAttribute("data-delete-checklist")) {
    var checklist = target.closest("[data-check-id]");
    var id = checklist.getAttribute("data-check-id");
    checklist.remove();
    card.removeChecklist(id);
    Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["deleteData"])(_index__WEBPACK_IMPORTED_MODULE_0__["link"], card.getPath(), 'checklists', id);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (removeChecklist);

/***/ }),

/***/ "./src/js/modules/cardModal/checklist/removeChecklistTask.js":
/*!*******************************************************************!*\
  !*** ./src/js/modules/cardModal/checklist/removeChecklistTask.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/services */ "./src/js/services/services.js");



function removeChecklistTask(target, card) {
  if (target.hasAttribute("data-delete-task")) {
    var idChecklist = target.closest("[data-check-id]").getAttribute("data-check-id");
    var idTask = target.closest('[data-task-id]').getAttribute('data-task-id');
    target.parentElement.remove();
    card.removeChecklistTask(idChecklist, idTask);
    Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["deleteData"])(_index__WEBPACK_IMPORTED_MODULE_0__["link"], card.getPath(), 'checklists', idChecklist, 'tasks', idTask);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (removeChecklistTask);

/***/ }),

/***/ "./src/js/modules/cardModal/checklist/toggleChecklistTask.js":
/*!*******************************************************************!*\
  !*** ./src/js/modules/cardModal/checklist/toggleChecklistTask.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../progressBar */ "./src/js/modules/cardModal/progressBar.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/services */ "./src/js/services/services.js");




function toggleChecklistTask(target, card, modal) {
  if (target.hasAttribute("data-check")) {
    var idChecklist = target.closest("[data-check-id]").getAttribute("data-check-id");
    var idTask = target.closest("[data-task-id]").getAttribute("data-task-id");
    card.changeChecklistTask(idChecklist, idTask);
    var body;

    if (target.hasAttribute("checked")) {
      target.removeAttribute("checked");
      body = {
        status: false
      };
    } else {
      target.setAttribute("checked", "true");
      body = {
        status: true
      };
    }

    Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], body, card.getPath(), "checklists", idChecklist, "tasks", idTask);
    Object(_progressBar__WEBPACK_IMPORTED_MODULE_0__["default"])(modal);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (toggleChecklistTask);

/***/ }),

/***/ "./src/js/modules/cardModal/comments/addComment.js":
/*!*********************************************************!*\
  !*** ./src/js/modules/cardModal/comments/addComment.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../..//../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _idGenerate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../idGenerate */ "./src/js/modules/idGenerate.js");





function addComment(target, card) {
  if (target.hasAttribute("data-modal-comments")) {
    target.style.display = "none";
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(target, "Добавте комментарий", "input-add__modal", false, function (value) {
      value = value.trim();
      var wrap = target.nextElementSibling;
      var div = document.createElement("div");
      var id = Object(_idGenerate__WEBPACK_IMPORTED_MODULE_3__["default"])();
      div.setAttribute('data-comment-id', id);
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      };
      var date = new Date().toLocaleString("ru", options);
      div.innerHTML = "\n        <div>\n          <p>".concat(value, "</p>\n          <span data-delete-comment>&times;</span>\n        </div>\n        <span>").concat(date, "</span>\n      ");
      wrap.prepend(div);
      var body = {
        id: id,
        value: value,
        date: date
      };
      card.addComment(body);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], body, card.column.boardId, 'columns', card.column.id, 'cards', card.id, 'comments', body.id);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (addComment);

/***/ }),

/***/ "./src/js/modules/cardModal/comments/removeComment.js":
/*!************************************************************!*\
  !*** ./src/js/modules/cardModal/comments/removeComment.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../index */ "./src/js/index.js");



function removeComment(target, card) {
  if (target.hasAttribute('data-delete-comment')) {
    var id = target.closest('[data-comment-id]').getAttribute('data-comment-id');
    target.parentElement.parentElement.remove();
    card.removeComment(id);
    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["deleteData"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], card.column.boardId, 'columns', card.column.id, 'cards', card.id, 'comments', id);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (removeComment);

/***/ }),

/***/ "./src/js/modules/cardModal/createModal.js":
/*!*************************************************!*\
  !*** ./src/js/modules/cardModal/createModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalListener */ "./src/js/modules/cardModal/modalListener.js");
/* harmony import */ var _checklist_createChecklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist/createChecklist */ "./src/js/modules/cardModal/checklist/createChecklist.js");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressBar */ "./src/js/modules/cardModal/progressBar.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function createModal(card) {
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = "\n    <div class=\"modal-popup\">\n      <div class=\"modal-close ".concat(card.background ? "modal__bg" : "", "\"\n      style=\"background-color: ").concat(card.background ? card.background : '', ";\">\n        <span data-modal-close>&times;</span>\n      </div>\n      <div class=\"wrapper\">\n        <div class=\"modal-main\">\n\n          <div class=\"title modal__item\">\n            <span class=\"modal-logo\">&#x2712;</span>\n            <div class=\"modal-content\">\n              <p data-card-title>").concat(card.title, "</p>\n            </div>\n          </div>\n\n          <div class=\"desc modal__item\">\n            <span class=\"modal-logo\"> &equiv;</span>\n            <div class=\"modal-content\">\n              <p>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</p>\n              <p data-card-desc>").concat(card.desc ? card.desc : "Добавить более подробное описание...", "</p>\n            </div>\n          </div>\n\n          <div class=\"comments modal__item\">\n            <span class=\"modal-logo\"> &#x270E;</span>\n            <div class=\"modal-content\">\n              <p>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438</p>\n              <p data-modal-comments>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</p>\n              <div class=\"comments-wrapper\"></div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"modal-add\">\n          <p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</p>\n          <div>\n            <button data-modal-checklist>\u0427\u0435\u043A-\u043B\u0438\u0441\u0442</button>\n            <button data-card-bg>\u041E\u0431\u043B\u043E\u0436\u043A\u0430</button>\n            <button data-delete-card>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  ");
  addComments(card, modal);
  addChecklist(card, modal);
  Object(_modalListener__WEBPACK_IMPORTED_MODULE_0__["default"])(modal, card);
  return modal;
}

function addComments(card, modal) {
  if (card.comments) {
    var wrap = modal.querySelector(".comments-wrapper");
    var sorted = Object.entries(card.comments).sort(function (a, b) {
      return a[1].date > b[1].date ? 1 : -1;
    });

    var _iterator = _createForOfIteratorHelper(sorted),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        var div = document.createElement("div");
        div.setAttribute("data-comment-id", i[1].id);
        div.innerHTML = "\n      <div>\n        <p>".concat(i[1].value, "</p>\n        <span data-delete-comment>&times;</span>\n      </div>\n      <span>").concat(i[1].date, "</span>\n      ");
        wrap.prepend(div);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

function addChecklist(card, modal) {
  if (card.checklists) {
    for (var key in card.checklists) {
      var item = card.checklists[key];
      var checklist = Object(_checklist_createChecklist__WEBPACK_IMPORTED_MODULE_1__["default"])(item.id, item.title);
      modal.querySelector(".comments").before(checklist);

      for (var _key in item.tasks) {
        var tasksItem = item.tasks[_key];
        var wrap = checklist.querySelector(".checklist div");
        var attr = tasksItem.status ? "checked" : "";
        var task = document.createElement("li");
        task.classList.add("checklist-item");
        task.setAttribute('data-task-id', tasksItem.id);
        task.innerHTML = "\n          <label>\n            <input type=\"checkbox\" ".concat(attr, " data-check>\n            ").concat(tasksItem.value, "\n          </label>\n          <span data-delete-task>&times;</span>\n        ");
        wrap.append(task);
      }
    }

    Object(_progressBar__WEBPACK_IMPORTED_MODULE_2__["default"])(modal);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createModal);

/***/ }),

/***/ "./src/js/modules/cardModal/modalListener.js":
/*!***************************************************!*\
  !*** ./src/js/modules/cardModal/modalListener.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_closeModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/closeModal */ "./src/js/modules/modal/closeModal.js");
/* harmony import */ var _modal_changeTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/changeTitle */ "./src/js/modules/modal/changeTitle.js");
/* harmony import */ var _modal_changeDesc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/changeDesc */ "./src/js/modules/modal/changeDesc.js");
/* harmony import */ var _modal_changeBg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/changeBg */ "./src/js/modules/modal/changeBg.js");
/* harmony import */ var _modal_removeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/removeCard */ "./src/js/modules/modal/removeCard.js");
/* harmony import */ var _comments_addComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments/addComment */ "./src/js/modules/cardModal/comments/addComment.js");
/* harmony import */ var _comments_removeComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments/removeComment */ "./src/js/modules/cardModal/comments/removeComment.js");
/* harmony import */ var _checklist_addChecklist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checklist/addChecklist */ "./src/js/modules/cardModal/checklist/addChecklist.js");
/* harmony import */ var _checklist_removeChecklist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checklist/removeChecklist */ "./src/js/modules/cardModal/checklist/removeChecklist.js");
/* harmony import */ var _checklist_changeChecklistTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checklist/changeChecklistTitle */ "./src/js/modules/cardModal/checklist/changeChecklistTitle.js");
/* harmony import */ var _checklist_addChecklistTask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checklist/addChecklistTask */ "./src/js/modules/cardModal/checklist/addChecklistTask.js");
/* harmony import */ var _checklist_removeChecklistTask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checklist/removeChecklistTask */ "./src/js/modules/cardModal/checklist/removeChecklistTask.js");
/* harmony import */ var _checklist_toggleChecklistTask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checklist/toggleChecklistTask */ "./src/js/modules/cardModal/checklist/toggleChecklistTask.js");














var modalListener = function modalListener(modal, card) {
  modal.addEventListener('click', function (e) {
    Object(_modal_removeCard__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, modal, card);
    Object(_modal_closeModal__WEBPACK_IMPORTED_MODULE_0__["default"])(e, modal);
    Object(_modal_changeTitle__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target, card, e.target);
    Object(_modal_changeDesc__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, card, e.target);
    Object(_modal_changeBg__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, card, e.target);
    Object(_comments_addComment__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target, card);
    Object(_comments_removeComment__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, card); // Чек-лист

    Object(_checklist_addChecklist__WEBPACK_IMPORTED_MODULE_7__["default"])(e.target, modal, card);
    Object(_checklist_removeChecklist__WEBPACK_IMPORTED_MODULE_8__["default"])(e.target, card);
    Object(_checklist_changeChecklistTitle__WEBPACK_IMPORTED_MODULE_9__["default"])(e.target, card);
    Object(_checklist_addChecklistTask__WEBPACK_IMPORTED_MODULE_10__["default"])(e.target, card, modal);
    Object(_checklist_toggleChecklistTask__WEBPACK_IMPORTED_MODULE_12__["default"])(e.target, card, modal);
    Object(_checklist_removeChecklistTask__WEBPACK_IMPORTED_MODULE_11__["default"])(e.target, card);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modalListener);

/***/ }),

/***/ "./src/js/modules/cardModal/progressBar.js":
/*!*************************************************!*\
  !*** ./src/js/modules/cardModal/progressBar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function progressBar(modal) {
  var progress = modal.querySelector("PROGRESS");
  progress.value = 0;
  var checkItems = Array.from(progress.nextElementSibling.children);
  var step = Math.ceil(100 / checkItems.length);
  checkItems.forEach(function (item) {
    var input = item.querySelector('INPUT');
    var start = progress.value;

    if (input.hasAttribute("checked")) {
      progress.value += step;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (progressBar);

/***/ }),

/***/ "./src/js/modules/column/addCard.js":
/*!******************************************!*\
  !*** ./src/js/modules/column/addCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");
/* harmony import */ var _idGenerate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../idGenerate */ "./src/js/modules/idGenerate.js");





var addCard = function addCard() {
  var main = document.querySelector('.main');
  main.addEventListener('click', function (e) {
    var parent = e.target.parentElement;

    if (parent.classList.contains('new__card')) {
      parent.style.display = 'none';
      Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(parent, 'Введите заголовок карточки', 'card', false, function (value) {
        var idColumn = e.target.closest('[data-column-id]').getAttribute('data-column-id');
        var column = _index__WEBPACK_IMPORTED_MODULE_2__["activeBoard"][0].columns[idColumn];
        var id = Object(_idGenerate__WEBPACK_IMPORTED_MODULE_3__["default"])();
        var body = {
          id: id,
          title: value,
          desc: null,
          comments: null,
          checklists: null,
          background: null
        };
        column.addCard(body.id, body.title);
        Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_2__["link"], body, column.getPath(id));
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addCard);

/***/ }),

/***/ "./src/js/modules/column/addColumn.js":
/*!********************************************!*\
  !*** ./src/js/modules/column/addColumn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _idGenerate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../idGenerate */ "./src/js/modules/idGenerate.js");
/* harmony import */ var _noticeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../noticeModal */ "./src/js/modules/noticeModal.js");






var addColumn = function addColumn() {
  var elem = document.querySelector('.new__column');
  elem.addEventListener('click', function () {
    var currentBoard = document.querySelector('.board-current');

    if (currentBoard.textContent === 'Создать доску') {
      return Object(_noticeModal__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }

    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(elem, 'Введите заголовок списка', 'input-add__column', false, function (value) {
      var body = {
        id: Object(_idGenerate__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        title: value
      };
      var board = _index__WEBPACK_IMPORTED_MODULE_1__["activeBoard"][0];
      board.addColumn(body.id, body.title);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], body, board.getPath(body.id));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addColumn);

/***/ }),

/***/ "./src/js/modules/column/columnListener.js":
/*!*************************************************!*\
  !*** ./src/js/modules/column/columnListener.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addColumn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addColumn */ "./src/js/modules/column/addColumn.js");
/* harmony import */ var _removeColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeColumn */ "./src/js/modules/column/removeColumn.js");
/* harmony import */ var _addCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCard */ "./src/js/modules/column/addCard.js");




var columnListener = function columnListener() {
  Object(_addColumn__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_removeColumn__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_addCard__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ __webpack_exports__["default"] = (columnListener);

/***/ }),

/***/ "./src/js/modules/column/removeColumn.js":
/*!***********************************************!*\
  !*** ./src/js/modules/column/removeColumn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");



var removeColumn = function removeColumn() {
  var main = document.querySelector('.main');
  main.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-delete-column')) {
      var idColumn = e.target.closest("[data-column-id]").getAttribute("data-column-id"); // const idBoard = document
      //   .querySelector('.board-current')
      //   .getAttribute('data-board-id');

      e.target.parentElement.parentElement.remove();
      _index__WEBPACK_IMPORTED_MODULE_1__["activeBoard"][0].removeColumn(idColumn);
      var path = _index__WEBPACK_IMPORTED_MODULE_1__["activeBoard"][0].getPath(idColumn);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["deleteData"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], path);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (removeColumn);

/***/ }),

/***/ "./src/js/modules/errorModal.js":
/*!**************************************!*\
  !*** ./src/js/modules/errorModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var errorModal = function errorModal(word) {
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = "\n    <div class=\"modal-error\">\n      <p>\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430! \u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C ".concat(word, "!</p>\n    </div>\n  ");
  modal.addEventListener('click', function (e) {
    return modal.remove();
  });
  document.querySelector(".main").append(modal);
  return modal;
};

/* harmony default export */ __webpack_exports__["default"] = (errorModal);

/***/ }),

/***/ "./src/js/modules/idGenerate.js":
/*!**************************************!*\
  !*** ./src/js/modules/idGenerate.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var idGenerate = function idGenerate() {
  var id = String(Math.random()).split('').map(function (i) {
    if (i == '.') {
      return '_';
    } else {
      return String.fromCharCode(+i + 66);
    }
  }).join('');
  return id;
};

/* harmony default export */ __webpack_exports__["default"] = (idGenerate);

/***/ }),

/***/ "./src/js/modules/loadResourses.js":
/*!*****************************************!*\
  !*** ./src/js/modules/loadResourses.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/js/index.js");
/* harmony import */ var _Classes_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/Board */ "./src/js/modules/Classes/Board.js");
/* harmony import */ var _welcomeModal_welcomeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcomeModal/welcomeModal */ "./src/js/modules/welcomeModal/welcomeModal.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preloader */ "./src/js/modules/preloader.js");






var loadResourses = function loadResourses(link) {
  var idLastActive = localStorage.getItem('activeBoardID');
  var load = Object(_preloader__WEBPACK_IMPORTED_MODULE_4__["default"])(".main", "modal");
  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getData"])(link).then(function (data) {
    load.remove();

    if (!data) {
      return Object(_welcomeModal_welcomeModal__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }

    for (var key in data) {
      var _data$key = data[key],
          id = _data$key.id,
          title = _data$key.title,
          columns = _data$key.columns;
      var boardList = document.querySelector('.board-list-items');
      var boardElem = document.createElement('div');
      boardElem.classList.add("board-item");
      boardElem.setAttribute("data-board-id", id);
      boardElem.innerHTML = "\n      <p data-board-title>".concat(title, "</p>\n        <button data-delete-board>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n      ");
      boardList.prepend(boardElem);
      var board = new _Classes_Board__WEBPACK_IMPORTED_MODULE_2__["default"](id, title, columns);
      board.init();

      if (id === idLastActive) {
        board.render();
        _index__WEBPACK_IMPORTED_MODULE_1__["activeBoard"].push(board);
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (loadResourses);

/***/ }),

/***/ "./src/js/modules/modal/changeBg.js":
/*!******************************************!*\
  !*** ./src/js/modules/modal/changeBg.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");



var changeBg = function changeBg(target, card, place) {
  if (target.hasAttribute('data-card-bg')) {
    if (place.parentElement.querySelector('.modal-bg-popup')) {
      return;
    }

    var columnBg = card.domElement.querySelector("[data-column-card-bg]");
    var modalBg = target === place ? target.closest(".modal").querySelector(".modal-close") : null;
    var modifyClass = target === place ? 'bg__modal' : 'bg__menu';
    place = place.parentElement;
    var bgComponent = document.createElement("div");
    bgComponent.classList.add("modal-bg-popup", modifyClass);
    bgComponent.innerHTML = "\n      <p>\u0426\u0432\u0435\u0442\u0430</p>\n      <div class=\"modal-bg-color\">\n        <span data-bg=\"red\"></span>\n        <span data-bg=\"blue\"></span>\n        <span data-bg=\"green\"></span>\n        <span data-bg=\"yellow\"></span>\n        <span data-bg=\"darkred\"></span>\n        <span data-bg=\"darkgreen\"></span>\n        <span data-bg=\"darkblue\"></span>\n        <span data-bg=\"darkgrey\"></span>\n      </div>\n      <button data-delete-bg>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443</button>\n    ";
    bgComponent.addEventListener('click', function (e) {
      var color;

      if (e.target.hasAttribute('data-bg')) {
        color = getComputedStyle(e.target).backgroundColor;
        columnBg.classList.add("column-item__bg");
        columnBg.style.backgroundColor = color;
        card.setBackground(color);

        if (modalBg) {
          if (!modalBg.classList.contains("modal__bg")) {
            modalBg.classList.add("modal__bg");
          }

          modalBg.style.backgroundColor = color;
        }
      }

      if (e.target.hasAttribute('data-delete-bg')) {
        columnBg.classList.remove("column-item__bg");
        columnBg.style.backgroundColor = 'transparent';
        color = null;
        card.setBackground(null);

        if (modalBg) {
          modalBg.classList.remove("modal__bg");
          modalBg.style.backgroundColor = "transparent";
        }
      }

      if (!modalBg) {
        place.children[0].remove();
        place.prepend(card.domElement.cloneNode(true));
      }

      bgComponent.remove();
      Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], {
        background: color
      }, card.getPath());
    });
    place.append(bgComponent);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (changeBg);

/***/ }),

/***/ "./src/js/modules/modal/changeDesc.js":
/*!********************************************!*\
  !*** ./src/js/modules/modal/changeDesc.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");




function changeDesc(target, card, place) {
  if (target.hasAttribute('data-card-desc')) {
    place.style.display = 'none';
    var placeholder = card.desc ? card.desc : 'Добавить описание';
    var className = "input-add__" + (place === target ? "modal" : "menu");
    var text = card.desc ? card.desc : '';
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(place, placeholder, className, text, function (value) {
      value = value.trim();

      if (place === target) {
        target.textContent = value;
      }

      card.addDesc(value);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_1__["link"], {
        desc: value
      }, card.getPath());
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (changeDesc);

/***/ }),

/***/ "./src/js/modules/modal/changeTitle.js":
/*!*********************************************!*\
  !*** ./src/js/modules/modal/changeTitle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");




var changeTitle = function changeTitle(target, card, place) {
  if (target.hasAttribute('data-card-title')) {
    place.style.display = 'none';
    var className = "input-add__" + (target.closest('.modal') ? "modal" : "menu");
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(place, card.title, className, card.title, function (value) {
      value = value.trim();
      card.domElement.querySelector("[data-column-card-title]").textContent = value;
      card.setTitle(value);

      if (target === place) {
        target.textContent = value;
      } else {
        var parent = place.parentElement;
        parent.textContent = "";
        parent.append(card.domElement.cloneNode(true));
      }

      var body = {
        title: value
      };
      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["patchReq"])(_index__WEBPACK_IMPORTED_MODULE_2__["link"], body, card.getPath());
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (changeTitle);

/***/ }),

/***/ "./src/js/modules/modal/closeModal.js":
/*!********************************************!*\
  !*** ./src/js/modules/modal/closeModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var closeModal = function closeModal(event, modalWindow) {
  if (event.target.hasAttribute("data-modal-close") || event.target === modalWindow) {
    event.stopPropagation();
    modalWindow.remove();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (closeModal);

/***/ }),

/***/ "./src/js/modules/modal/openModal.js":
/*!*******************************************!*\
  !*** ./src/js/modules/modal/openModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");


var openModal = function openModal(className, func, notContains) {
  var main = document.querySelector(".main");
  main.addEventListener("click", function (e) {
    if (!document.querySelector('.modal-menu') && (e.target.classList.contains(className) || e.target.parentElement.classList.contains(className) && !e.target.classList.contains(notContains))) {
      var idColumn = e.target.closest("[data-column-id]").getAttribute("data-column-id");
      var idCard = e.target.closest("[data-card-id]").getAttribute("data-card-id");
      var card = _index__WEBPACK_IMPORTED_MODULE_0__["activeBoard"][0].columns[idColumn].cards[idCard];
      var modal = func(card);
      main.append(modal);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (openModal);

/***/ }),

/***/ "./src/js/modules/modal/removeCard.js":
/*!********************************************!*\
  !*** ./src/js/modules/modal/removeCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/js/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");



function removeCard(target, modal, card) {
  if (target.textContent === "Удалить карточку") {
    card.domElement.remove();
    modal.remove();
    card.column.removeCard(card.id);
    Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["deleteData"])(_index__WEBPACK_IMPORTED_MODULE_0__["link"], card.getPath());
  }
}

/* harmony default export */ __webpack_exports__["default"] = (removeCard);

/***/ }),

/***/ "./src/js/modules/noticeModal.js":
/*!***************************************!*\
  !*** ./src/js/modules/noticeModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noticeModal = function noticeModal() {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = "\n    <div class=\"modal-welcome\">\n      <img\n      src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/1200px-Trello-logo-blue.svg.png\"\n      alt=\"Trello\"/>\n      <p>\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u043F\u0435\u0440\u0432\u0443\u044E \u0434\u043E\u0441\u043A\u0443!</p>\n      <div class=\"btn-group\"\">\n        <button>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>\n      </div>\n    </div>\n  ";
  modal.addEventListener('click', function (e) {
    e.stopPropagation();

    if (e.target.tagName === "BUTTON" || e.target.classList.contains('modal')) {
      modal.remove();
    }
  });
  document.querySelector(".main").append(modal);
};

/* harmony default export */ __webpack_exports__["default"] = (noticeModal);

/***/ }),

/***/ "./src/js/modules/preloader.js":
/*!*************************************!*\
  !*** ./src/js/modules/preloader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var preloader = function preloader(selector, className) {
  var modal = document.createElement("div");
  modal.classList.add(className);
  modal.innerHTML = "\n    <div id=\"fountainG\" class=\"modal-preload\">\n      <div id=\"fountainG_1\" class=\"fountainG\"></div>\n      <div id=\"fountainG_2\" class=\"fountainG\"></div>\n      <div id=\"fountainG_3\" class=\"fountainG\"></div>\n      <div id=\"fountainG_4\" class=\"fountainG\"></div>\n      <div id=\"fountainG_5\" class=\"fountainG\"></div>\n      <div id=\"fountainG_6\" class=\"fountainG\"></div>\n      <div id=\"fountainG_7\" class=\"fountainG\"></div>\n      <div id=\"fountainG_8\" class=\"fountainG\"></div>\n    </div>\n  ";
  var elem = document.querySelector(selector);
  elem.classList.remove('hide');
  elem.append(modal);
  return modal;
};

/* harmony default export */ __webpack_exports__["default"] = (preloader);

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/js/index.js");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preloader */ "./src/js/modules/preloader.js");
/* harmony import */ var _Classes_Board_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Classes/Board.js */ "./src/js/modules/Classes/Board.js");







var search = function search() {
  var input = document.querySelector('.search-area');
  var btn = document.querySelector('.search-btn');
  var results = document.querySelector('.search-results');
  btn.addEventListener("click", letSearch);
  input.addEventListener("keypress", letSearch);
  results.addEventListener('click', goToResult);

  function letSearch(e) {
    if (e.key && e.key !== "Enter") return;

    if (e.target === btn || e.key === "Enter") {
      results.textContent = '';
      var value = input.value.trim();
      input.value = '';

      if (value.length == 0) {
        return;
      }

      var loader = Object(_preloader__WEBPACK_IMPORTED_MODULE_4__["default"])('.search-results', '.search-loader');
      Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["getData"])(_index__WEBPACK_IMPORTED_MODULE_3__["link"]).then(function (data) {
        var res = searching(data, value);

        if (res.length === 0) {
          return results.innerHTML = '<span class="result-zero"> Поиск не дал результатов</span>';
        }

        res.forEach(function (item) {
          if (item.length < 4) {
            createResult(item[item.length - 1], 'boards', item[0]);
          } else {
            for (var i = item.length - 1; i != 0; i--) {
              if (["checklists", "comments", "cards", "columns"].includes(item[i])) {
                return createResult(item[item.length - 1], item[i], item.slice(0, i + 2));
              }
            }
          }
        });
        loader.remove();
      });
    }
  }

  function searching(data, value) {
    var path = [];

    var _loop = function _loop(key) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(data[key]) === "object" && data[key] !== null) {
        var res = searching(data[key], value);

        if (res.length > 0) {
          res.map(function (i) {
            return i.unshift(key);
          });
          path.push.apply(path, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(res));
        }
      } else {
        String(data[key]).indexOf(value) !== -1 ? path.push([key, data[key]]) : '';
      }
    };

    for (var key in data) {
      _loop(key);
    }

    return path;
  }

  function createResult(value, place, path) {
    var places = {
      checklists: 'Чек-лист',
      comments: 'Комментарий',
      cards: 'Карточка',
      columns: 'Колонка',
      boards: 'Доска'
    };
    var div = document.createElement('div');
    div.classList.add('search-result');

    try {
      path = path.join('-');
    } catch (e) {}

    div.setAttribute('data-path', path);
    div.innerHTML = "\n      <span>".concat(places[place], ":</span>\n      <span>").concat(value, "</span>\n      <button>\u041F\u0435\u0440\u0435\u0439\u0442\u0438</button>\n    ");
    document.querySelector(".search-results").append(div);
  }

  function goToResult(e) {
    if (e.target.closest(".search-result")) {
      var path = e.target.closest(".search-result").getAttribute('data-path');
      path = path.split('-');
      e.target.closest(".search-results").classList.add('hide');
      e.target.closest('.search-results').textContent = '';
      var load = Object(_preloader__WEBPACK_IMPORTED_MODULE_4__["default"])(".main", "modal");
      localStorage.setItem("activeBoardID", path[0]);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["getData"])(_index__WEBPACK_IMPORTED_MODULE_3__["link"], path[0]).then(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            columns = _ref.columns;
        load.remove();
        var board = new _Classes_Board_js__WEBPACK_IMPORTED_MODULE_5__["default"](id, title, columns);
        board.init();
        board.render();
        _index__WEBPACK_IMPORTED_MODULE_3__["activeBoard"].splice(0, 1, board);

        try {
          var idx = path.indexOf("cards");
          document.querySelector("[data-card-id=\"".concat(path[idx + 1], "\"] div")).click();
        } catch (e) {}
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/js/modules/training.js":
/*!************************************!*\
  !*** ./src/js/modules/training.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _column_columnListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column/columnListener */ "./src/js/modules/column/columnListener.js");




function training() {
  return _training.apply(this, arguments);
}

function _training() {
  _training = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var main, modal, guide, boardList, btnBoardList, addBoard, inputAdd, btnAdd;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            main = document.querySelector('.main');
            modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = '<div class="training"></div>';
            guide = modal.querySelector('div');
            modal.style.zIndex = 100;
            main.append(modal);
            boardList = document.querySelector('.board-list-items');
            btnBoardList = document.querySelector('.board-list');
            addBoard = document.querySelector('.board-add');
            btnBoardList.click();
            addBoard.click();
            boardList.style.zIndex = 101;
            btnBoardList.style.zIndex = 101;
            inputAdd = document.querySelector(".input-add");
            btnAdd = inputAdd.querySelector(".btn");
            console.log(btnAdd);
            btnAdd.addEventListener('click', function () {
              console.log(boardList, btnBoardList);
              boardList.style = '';
              btnBoardList.style = '';
              document.querySelector('.new__column').click();
              var inputAdd = document.querySelector(".input-add");
              inputAdd.style.zIndex = 101;
              var btnAdd = inputAdd.querySelector(".btn");
              btnAdd.addEventListener('click', function () {
                var column = document.querySelector('[data-column-id]');
                column.style.zIndex = 101;
              });
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _training.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (training);

/***/ }),

/***/ "./src/js/modules/welcomeModal/welcomeModal.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/welcomeModal/welcomeModal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadResourses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loadResourses */ "./src/js/modules/loadResourses.js");
/* harmony import */ var _training__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../training */ "./src/js/modules/training.js");



var welcomeModal = function welcomeModal() {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = "\n    <div class=\"modal-welcome\">\n      <img\n      src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/1200px-Trello-logo-blue.svg.png\"\n      alt=\"Trello\"/>\n      <p>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0443\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Trello!</p>\n      <p>\u0416\u0435\u043B\u0430\u0435\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0434\u043E\u0441\u043A\u0443, \u0438\u043B\u0438 \u043D\u0430\u0447\u043D\u0435\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u0430 ?</p>\n      <div class=\"btn-group\"\">\n        <button>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0434\u043E\u0441\u043A\u0443</button>\n        <button>\u041D\u0430\u0447\u0430\u0442\u044C \u0441 \u043F\u0440\u0438\u043C\u0435\u0440\u0430</button>\n      </div>\n    </div>\n  ";
  modal.addEventListener('click', function (e) {
    if (e.target.textContent === 'Создать новую доску') {
      modal.remove();
      document.querySelector('.board-list').click();
      var add = document.querySelector('.board-add');
      add.click();
    }

    if (e.target.textContent === "Начать с примера") {
      modal.remove();
      Object(_training__WEBPACK_IMPORTED_MODULE_1__["default"])(); // const link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/example.json";
      // loadResourses(link);
    }
  });
  document.querySelector('.main').append(modal);
};

/* harmony default export */ __webpack_exports__["default"] = (welcomeModal);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: getData, patchReq, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchReq", function() { return patchReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_errorModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/errorModal */ "./src/js/modules/errorModal.js");




var getData = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(link) {
    var _len,
        path,
        _key,
        data,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            for (_len = _args.length, path = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              path[_key - 1] = _args[_key];
            }

            path = path.map(function (id) {
              return "/".concat(id);
            }).join("");
            link = link.replace(/\.json/, "".concat(path, ".json"));
            _context.next = 5;
            return fetch(link);

          case 5:
            data = _context.sent;

            if (data.ok) {
              _context.next = 9;
              break;
            }

            Object(_modules_errorModal__WEBPACK_IMPORTED_MODULE_2__["default"])('загрузить');
            throw new Error("Could not fetch ".concat(link, ", status: ").concat(data.status));

          case 9:
            _context.next = 11;
            return data.json();

          case 11:
            return _context.abrupt("return", _context.sent);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var patchReq = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(link, body) {
    var _len2,
        path,
        _key2,
        _args2 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            for (_len2 = _args2.length, path = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              path[_key2 - 2] = _args2[_key2];
            }

            path = path.map(function (id) {
              return "/".concat(id);
            }).join('');
            link = link.replace(/\.json/, "".concat(path, ".json"));
            _context2.next = 5;
            return fetch(link, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function patchReq(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var deleteData = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(link) {
    var _len3,
        path,
        _key3,
        res,
        _args3 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            for (_len3 = _args3.length, path = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              path[_key3 - 1] = _args3[_key3];
            }

            path = path.map(function (id) {
              return "/".concat(id);
            }).join("");
            link = link.replace(/\.json/, "/".concat(path, ".json"));
            _context3.next = 5;
            return fetch(link, {
              method: "DELETE"
            });

          case 5:
            res = _context3.sent;

            if (res.ok) {
              console.log("Task is delete");
            } else {
              Object(_modules_errorModal__WEBPACK_IMPORTED_MODULE_2__["default"])("удалить");
            }

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteData(_x4) {
    return _ref3.apply(this, arguments);
  };
}();





/***/ })

/******/ });
//# sourceMappingURL=main.js.map