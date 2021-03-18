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
/* harmony import */ var _modules_addItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addItem */ "./src/js/modules/addItem.js");
/* harmony import */ var _modules_openCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/openCard */ "./src/js/modules/openCard.js");
/* harmony import */ var _modules_deleteColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/deleteColumn */ "./src/js/modules/deleteColumn.js");



var link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/column.json";
var store = {};
window.addEventListener("DOMContentLoaded", function () {
  Object(_modules_addItem__WEBPACK_IMPORTED_MODULE_0__["addColumn"])("new__column", {});
  Object(_modules_addItem__WEBPACK_IMPORTED_MODULE_0__["addCard"])();
  Object(_modules_deleteColumn__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_openCard__WEBPACK_IMPORTED_MODULE_1__["openCard"])();
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Column = /*#__PURE__*/function () {
  function Column() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? "Введите название" : _ref$title,
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? null : _ref$id;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Column);

    this.id = id;
    this.title = title;
    this.cards = {};
    this.length = 0;
    this.elemDOM = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Column, [{
    key: "addCard",
    value: function addCard(title) {
      var newCard = new Card(title);
      this.cards["id".concat(this.length)] = newCard;
      this.length += 1;
      var wrapper = this.elemDOM.querySelector(".column-item-wrapper");
      var card = document.createElement("div");
      card.setAttribute('data-card-id', "id".concat(this.length - 1));
      card.classList.add("column-item");
      card.innerHTML = "<div class=\"column-item-title\"> ".concat(title, "</div>");
      wrapper.append(card);
    }
  }, {
    key: "render",
    value: function render(element) {
      var column = document.createElement("div");
      this.elemDOM = column;
      column.classList.add("column");
      column.setAttribute('data-column-id', this.id);
      column.innerHTML = "\n      <div class=\"column-header\">\n        <p>".concat(this.title, "</p>\n        <span data-delete>&times;</span>\n      </div>\n      <div class=\"column-item-wrapper\"></div>\n      <div class=\"column-add\" data-add-card>\n        <span>&plus;</span>\n        <p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</p>\n      </div>\n    ");
      element.before(column);
    }
  }]);

  return Column;
}();

var Card = /*#__PURE__*/function () {
  function Card(title) {
    var desc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Добавить более подробное описание...";

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Card);

    this.title = title;
    this.desc = desc;
    this.comments = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Card, [{
    key: "addDesc",
    value: function addDesc(desc) {
      this.desc = desc;
    }
  }, {
    key: "addComment",
    value: function addComment(text) {
      this.comments.push(text);
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var elem = document.createElement('div');
      elem.classList.add('card-modal');
      elem.innerHTML = "\n\n    ";
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/js/modules/addItem.js":
/*!***********************************!*\
  !*** ./src/js/modules/addItem.js ***!
  \***********************************/
/*! exports provided: addColumn, addCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addColumn", function() { return addColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Column */ "./src/js/modules/Column.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/js/index.js");

 // import {postData, getData} from '../services/services';

var addColumn = function addColumn() {
  var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "new__column";

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "колонку" : _ref$title,
      _ref$attr = _ref.attr,
      attr = _ref$attr === void 0 ? "data-add-column" : _ref$attr,
      className = _ref.className;

  var body = document.querySelector("body");
  body.addEventListener("click", function (e) {
    var target = null;

    if (e.target.classList.contains(trigger)) {
      target = e.target;
    } else if (e.target.parentElement.classList.contains(trigger)) {
      target = e.target.parentElement;
    }

    if (target) {
      var input = createInputElement(title, attr, className);
      target.before(input);
      var btns = input.querySelectorAll("BUTTON");
      btns.forEach(function (btn) {
        return btn.addEventListener("click", function () {
          var value = btn.parentElement.previousElementSibling.value;

          if (btn.hasAttribute(attr) && value.length > 0) {
            var id = Math.random();
            var column = new _Column__WEBPACK_IMPORTED_MODULE_0__["Column"]({
              title: value,
              id: id
            });
            column.render(input);
            _index__WEBPACK_IMPORTED_MODULE_1__["store"][id] = column;
          }

          input.remove();
        });
      });
    }
  });
};

var addCard = function addCard() {
  var body = document.querySelector('body');
  body.addEventListener('click', function (e) {
    if (e.target.parentElement.hasAttribute("data-add-card")) {
      var input = createInputElement("карточку", "data-add-card", "input__card");
      e.target.parentElement.before(input);
      input.nextElementSibling.style.display = 'none';
      var btns = input.querySelectorAll('BUTTON');
      btns.forEach(function (btn) {
        return btn.addEventListener("click", function () {
          var value = btn.parentElement.previousElementSibling.value;

          if (btn.hasAttribute("data-add-card")) {
            var id = input.parentElement.getAttribute('data-column-id');
            var column = _index__WEBPACK_IMPORTED_MODULE_1__["store"][id];
            column.addCard(value);
          }

          input.nextElementSibling.style.display = "";
          input.remove();
        });
      });
    }
  });
};

function createInputElement(title, attr, className) {
  var elem = document.createElement("div");
  elem.classList.add("column", className);
  elem.innerHTML = "\n    <input class=\"column-item input column-item-title\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A\">\n    <div class=\"input-btn\">\n      <button class=\"btn-add\" ".concat(attr, "><span>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ").concat(title, "</span></button>\n      <button class=\"btn-add\"><span>&times;</span></button>\n    </div>\n  ");
  return elem;
}



/***/ }),

/***/ "./src/js/modules/deleteColumn.js":
/*!****************************************!*\
  !*** ./src/js/modules/deleteColumn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var deleteColumn = function deleteColumn() {
  var mainSection = document.querySelector('.main');
  mainSection.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-delete')) {
      e.target.parentElement.parentElement.remove();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (deleteColumn);

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


var openCard = function openCard() {
  var main = document.querySelector(".main");
  main.addEventListener("click", function (e) {
    var target;

    if (e.target.hasAttribute("data-card-id")) {
      target = e.target;
    } else if (e.target.parentElement.hasAttribute("data-card-id")) {
      target = e.target.parentElement;
    }

    if (target) {
      var parent = target.parentElement.parentElement;
      var idCard = target.getAttribute("data-card-id");
      var idColumn = parent.getAttribute('data-column-id');
      var card = _index__WEBPACK_IMPORTED_MODULE_0__["store"][idColumn].cards[idCard];
    }
  });
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map