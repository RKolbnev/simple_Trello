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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: link, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _modules_addColumn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addColumn */ "./src/js/modules/addColumn.js");
/* harmony import */ var _modules_addCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addCard */ "./src/js/modules/addCard.js");
/* harmony import */ var _modules_removeColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/removeColumn */ "./src/js/modules/removeColumn.js");
/* harmony import */ var _modules_openCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/openCard */ "./src/js/modules/openCard.js");




var link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/column.json";
var store = {};
window.addEventListener("DOMContentLoaded", function () {
  Object(_modules_addColumn__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_removeColumn__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_addCard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_openCard__WEBPACK_IMPORTED_MODULE_3__["openCard"])();
});


/***/ }),

/***/ "./src/js/modules/Column.js":
/*!**********************************!*\
  !*** ./src/js/modules/Column.js ***!
  \**********************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var Column = /*#__PURE__*/function () {
  function Column() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Введите название";
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random();
    var card = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Column);

    this.id = id;
    this.title = title;
    this.cards = card;
    this.length = length;
    this.elemDOM = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Column, [{
    key: "addCard",
    value: function addCard(title) {
      var newCard = new Card(title);
      this.cards["id".concat(this.length)] = newCard;
      var id = "id".concat(this.length);
      this.length += 1;
      var wrapper = this.elemDOM.querySelector(".column-item-wrapper");
      wrapper.append(newCard.render(title, id));
    }
  }, {
    key: "render",
    value: function render(element) {
      var column = document.createElement("div");
      this.elemDOM = column;
      column.classList.add("column");
      column.setAttribute('data-column-id', this.id);
      column.innerHTML = "\n      <div class=\"column-header\">\n        <p>".concat(this.title, "</p>\n        <span data-delete>&times;</span>\n      </div>\n      <div class=\"column-item-wrapper\"></div>\n      <div class=\"add-item new__card\" data-add-card>\n        <span>&plus;</span>\n        <p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</p>\n      </div>\n    ");

      if (this.length > 0) {
        var wrap = column.querySelector('column-item-wrapper');

        for (var _i = 0, _Object$entries = Object.entries(this.cards); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          wrap.append(value.render(value.title, key));
        }
      }

      element.before(column);
    }
  }]);

  return Column;
}();

var Card = /*#__PURE__*/function () {
  function Card(title) {
    var desc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var comments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var checkList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var background = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Card);

    this.title = title;
    this.desc = desc;
    this.comments = comments;
    this.checkList = checkList;
    this.background = background;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Card, [{
    key: "addDesc",
    value: function addDesc(desc) {
      this.desc = desc;
    }
  }, {
    key: "addComment",
    value: function addComment(comment) {
      this.comments.push(comment);
    }
  }, {
    key: "addBackground",
    value: function addBackground(color) {
      this.background = color;
    }
  }, {
    key: "render",
    value: function render(title, id) {
      var card = document.createElement('div');
      card.setAttribute("data-card-id", "".concat(id));
      card.classList.add("column-item");
      card.innerHTML = "<div class=\"column-item-title\"> ".concat(title, "</div>");

      if (this.background) {
        card.style.background = this.background;
      }

      return card;
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/js/modules/addCard.js":
/*!***********************************!*\
  !*** ./src/js/modules/addCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/js/index.js");



var addCard = function addCard() {
  var main = document.querySelector('.main');
  main.addEventListener('click', function (e) {
    if (e.target.parentElement.classList.contains('new__card')) {
      var callback = function callback(value) {
        var id = e.target.parentElement.parentElement.getAttribute("data-column-id");
        var column = _index__WEBPACK_IMPORTED_MODULE_1__["store"][id];
        column.addCard(value);
      };

      e.target.parentElement.style.display = 'none';
      Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.parentElement, 'Введите заголовок карточки', callback, 'card');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addCard);

/***/ }),

/***/ "./src/js/modules/addColumn.js":
/*!*************************************!*\
  !*** ./src/js/modules/addColumn.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column */ "./src/js/modules/Column.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/js/index.js");




var addColumn = function addColumn() {
  var elem = document.querySelector('.new__column');
  elem.addEventListener('click', function () {
    if (document.querySelector('.input-add')) {
      return;
    }

    var callback = function callback(value) {
      var newColumn = new _Column__WEBPACK_IMPORTED_MODULE_1__["Column"](value);
      _index__WEBPACK_IMPORTED_MODULE_2__["store"][newColumn.id] = newColumn;
      newColumn.render(elem);
    };

    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(elem, 'Введите заголовок списка', callback, 'input-add__column');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addColumn);

/***/ }),

/***/ "./src/js/modules/addInput.js":
/*!************************************!*\
  !*** ./src/js/modules/addInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var addInput = function addInput(element, placeholder, callback, className) {
  var input = document.createElement('div');
  input.classList.add('input-add', className);
  input.innerHTML = "\n    <input type=\"text\" placeholder=\"".concat(placeholder, "\">\n    <div class=\"input-btn\">\n      <button class=\"btn\" type=\"button\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n      <button class=\"btn\" type=\"button\">&times;</button>\n    </div>\n  ");
  element.before(input);

  if (className == 'input-add__modal') {
    input.children[0].value = placeholder;
  }

  input.children[1].addEventListener("click", add);
  input.children[0].addEventListener("keypress", add);

  function add(e) {
    if (e.key && e.key !== "Enter") return;

    if (e.target.textContent === "Добавить" || e.key === "Enter") {
      var value = this.parentElement.children[0].value;

      if (value.length == 0) {
        return;
      }

      callback(value);
    }

    this.parentElement.nextElementSibling.style.display = '';
    this.parentElement.remove();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (addInput); // Удалаять ли элемент который вызывает функцию
// Что делать с данными которые получает инпут.
// Передавать стартовые данные для инпута
// ! Сделать функцию универсальной

/***/ }),

/***/ "./src/js/modules/modalListener.js":
/*!*****************************************!*\
  !*** ./src/js/modules/modalListener.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addInput */ "./src/js/modules/addInput.js");


var modalListener = function modalListener(modal, card) {
  modal.addEventListener('click', function (e) {
    // Закрытие модального окна
    if (e.target.hasAttribute("data-delete-modal") || e.target === modal) {
      e.stopPropagation();
      modal.remove();
    } // Добавление/изменение описания задачи


    if (e.target.hasAttribute("data-modal-desc")) {
      var callback = function callback(value) {
        e.target.textContent = value;
        card.addDesc(value);
      };

      e.target.style.display = "none";
      Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target, e.target.textContent, callback, "input-add__modal");
    } // Добавление комментариев


    if (e.target.hasAttribute("data-modal-comments")) {
      var _callback = function _callback(value) {
        var wrap = e.target.nextElementSibling;
        var div = document.createElement("div");
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
        div.innerHTML = "\n          <p>".concat(value, "</p>\n          <span>").concat(date, "</span>\n        ");
        wrap.prepend(div);
        card.addComment({
          value: value,
          date: date
        });
      };

      e.target.style.display = "none";
      Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target, "", _callback, "input-add__modal");
    } // Открытие popup Bg


    if (e.target.textContent === 'Обложка') {
      e.target.nextElementSibling.classList.toggle('hide');
    } // Смена bg


    if (e.target.hasAttribute('data-modal-bg')) {
      var color = window.getComputedStyle(e.target).backgroundColor;
      var bg = modal.querySelector('.modal-close');

      if (!bg.classList.contains('modal__bg')) {
        bg.classList.add('modal__bg');
      }

      bg.style.backgroundColor = color;
      card.addBackground(color);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modalListener);

/***/ }),

/***/ "./src/js/modules/openCard.js":
/*!************************************!*\
  !*** ./src/js/modules/openCard.js ***!
  \************************************/
/*! exports provided: openCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return openCard; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/js/index.js");
/* harmony import */ var _modalListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalListener */ "./src/js/modules/modalListener.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var openCard = function openCard() {
  var main = document.querySelector(".main");
  main.addEventListener("click", function (e) {
    if (e.target.hasAttribute('data-card-id')) {
      var parent = e.target.parentElement.parentElement;
      var idCard = e.target.getAttribute("data-card-id");
      var idColumn = parent.getAttribute('data-column-id');
      var card = _index__WEBPACK_IMPORTED_MODULE_0__["store"][idColumn].cards[idCard];
      var modal = createModal(card);
      main.append(modal);
    }
  });
};

function createModal(card) {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = "\n    <div class=\"modal-popup\">\n      <div class=\"modal-close\">\n        <span data-delete-modal>&times;</span>\n      </div>\n      <div class=\"wrapper\">\n        <div class=\"modal-main\">\n\n          <div class=\"title modal__item\">\n            <span class=\"modal-logo\">&#x2712;</span>\n            <div class=\"modal-content\">\n              <p>".concat(card.title, "</p>\n            </div>\n          </div>\n\n          <div class=\"desc modal__item\">\n            <span class=\"modal-logo\"> &equiv;</span>\n            <div class=\"modal-content\">\n              <p>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</p>\n              <p data-modal-desc>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435..</p>\n            </div>\n          </div>\n\n          <div class=\"comments modal__item\">\n            <span class=\"modal-logo\"> &#x270E;</span>\n            <div class=\"modal-content\">\n              <p>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438</p>\n              <p data-modal-comments>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</p>\n              <div class=\"comments-wrapper\"></div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"modal-add\">\n          <p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</p>\n          <div>\n            <button>\u0427\u0435\u043A-\u043B\u0438\u0441\u0442</button>\n            <button>\u041E\u0431\u043B\u043E\u0436\u043A\u0430</button>\n            <div class=\"modal-bg-popup hide\">\n              <p>\u0426\u0432\u0435\u0442\u0430</p>\n              <div class=\"modal-bg-color\">\n                <span data-modal-bg=\"modal__bg-red\"></span>\n                <span data-modal-bg=\"modal__bg-blue\"></span>\n                <span data-modal-bg=\"modal__bg-green\"></span>\n                <span data-modal-bg=\"modal__bg-yellow\"></span>\n                <span data-modal-bg=\"modal__bg-darkred\"></span>\n                <span data-modal-bg=\"modal__bg-darkgreen\"></span>\n                <span data-modal-bg=\"modal__bg-darkblue\"></span>\n                <span data-modal-bg=\"modal__bg-darkgrey\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  ");

  if (card.desc) {
    var desc = modal.querySelector('[data-modal-desc]');
    console.log(desc);
    desc.textContent = card.desc;
  }

  if (card.comments.length !== 0) {
    var wrap = modal.querySelector(".comments-wrapper");

    var _iterator = _createForOfIteratorHelper(card.comments),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        var div = document.createElement("div");
        div.innerHTML = "\n        <p>".concat(i.value, "</p>\n        <span>").concat(i.date, "</span>\n      ");
        wrap.prepend(div);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (card.background) {
    var bg = modal.querySelector('.modal-close');
    bg.classList.add('modal__bg');
    bg.style.backgroundColor = card.background;
  }

  Object(_modalListener__WEBPACK_IMPORTED_MODULE_1__["default"])(modal, card);
  return modal;
}



/***/ }),

/***/ "./src/js/modules/removeColumn.js":
/*!****************************************!*\
  !*** ./src/js/modules/removeColumn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var removeColumn = function removeColumn() {
  var main = document.querySelector('.main');
  main.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-delete')) {
      e.target.parentElement.parentElement.remove();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (removeColumn);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map