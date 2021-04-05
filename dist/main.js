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
/* harmony import */ var _modules_addColumn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addColumn */ "./src/js/modules/addColumn.js");
/* harmony import */ var _modules_addCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addCard */ "./src/js/modules/addCard.js");
/* harmony import */ var _modules_removeColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/removeColumn */ "./src/js/modules/removeColumn.js");
/* harmony import */ var _modules_modal_openModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal/openModal */ "./src/js/modules/modal/openModal.js");
/* harmony import */ var _modules_modal_createModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal/createModal */ "./src/js/modules/modal/createModal.js");
/* harmony import */ var _modules_menu_createMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/menu/createMenu */ "./src/js/modules/menu/createMenu.js");






var link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/column.json";
var store = {};
window.addEventListener("DOMContentLoaded", function () {
  Object(_modules_addColumn__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_removeColumn__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_addCard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_modal_openModal__WEBPACK_IMPORTED_MODULE_3__["default"])("column-item-content", _modules_modal_createModal__WEBPACK_IMPORTED_MODULE_4__["default"], "column-item-menu");
  Object(_modules_modal_openModal__WEBPACK_IMPORTED_MODULE_3__["default"])("column-item-menu", _modules_menu_createMenu__WEBPACK_IMPORTED_MODULE_5__["default"], "column-item-content");
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
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Введите название";
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random();
    var cards = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Column);

    this.id = id;
    this.title = title;
    this.cards = cards;
    this.length = length;
    this.elemDOM = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Column, [{
    key: "addCard",
    value: function addCard(title) {
      var newCard = new Card(title);
      this.cards["id".concat(this.length)] = newCard;
      var id = "id".concat(this.length);
      this.length += 1;
      var wrapper = this.elemDOM.querySelector(".column-item-wrapper");
      wrapper.append(newCard.render(id));
    }
  }, {
    key: "removeCard",
    value: function removeCard(id) {
      delete this.cards[id];
    }
  }, {
    key: "render",
    value: function render(element) {
      var column = document.createElement("div");
      this.elemDOM = column;
      column.classList.add("column");
      column.setAttribute('data-column-id', this.id);
      column.innerHTML = "\n      <div class=\"column-header\">\n        <p>".concat(this.title, "</p>\n        <span data-delete>&times;</span>\n      </div>\n      <div class=\"column-item-wrapper\"></div>\n      <div class=\"add-item new__card\" data-add-card>\n        <span>&plus;</span>\n        <p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</p>\n      </div>\n    ");
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

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Card);

    this.title = title;
    this.desc = desc;
    this.comments = comments;
    this.checkList = checkList;
    this.background = background;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Card, [{
    key: "changeTitle",
    value: function changeTitle(value) {
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
      this.comments.push(comment);
    }
  }, {
    key: "remove",
    value: function remove(comment) {}
  }, {
    key: "addBackground",
    value: function addBackground(color) {
      this.background = color;
    }
  }, {
    key: "addChecklist",
    value: function addChecklist(id) {
      this.checkList.push({
        id: id,
        checkItems: [],
        title: "Чек-лист"
      });
    }
  }, {
    key: "removeChecklist",
    value: function removeChecklist(id) {
      var _this = this;

      this.checkList.forEach(function (item, i) {
        if (item.id == id) {
          _this.checkList.splice(i, 1);
        }
      });
    }
  }, {
    key: "addChecklistItems",
    value: function addChecklistItems(id, body) {
      this.checkList.forEach(function (item) {
        if (+item.id === +id) {
          item.checkItems.push(body);
        }
      });
    }
  }, {
    key: "removeChecklistItem",
    value: function removeChecklistItem(id, value) {
      this.checkList.forEach(function (item) {
        if (item.id == id) {
          item.checkItems.forEach(function (task, i) {
            if (task.value === value) {
              item.checkItems.splice(i, 1);
            }
          });
        }
      });
    }
  }, {
    key: "changeChecklistTitle",
    value: function changeChecklistTitle(id, title) {
      this.checkList.forEach(function (item) {
        if (+item.id === +id) {
          item.title = title;
        }
      });
    }
  }, {
    key: "changeChecklistItem",
    value: function changeChecklistItem(id, value) {
      this.checkList.forEach(function (item) {
        if (+item.id == +id) {
          item.checkItems.forEach(function (task) {
            if (task.value == value) {
              task.status = !task.status;
            }
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render(id) {
      var card = document.createElement("div");
      card.setAttribute("data-card-id", "".concat(id));
      card.classList.add("column-item");
      card.innerHTML = "\n      <div class=\"column-item-content\">\n        <div data-column-card-title> ".concat(this.title, "</div>\n        <span class=\"column-item-menu\">&equiv;</span>\n      </div>\n      <span data-column-card-bg></span>");

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
var addInput = function addInput(element, placeholder, callback, className, inputText) {
  // Если Input уже есть на странице
  if (document.querySelector('.input-add')) {
    var _input = document.querySelector('.input-add');

    var nextElement = _input.nextElementSibling;

    _input.remove();

    nextElement.style.display = '';
  }

  var input = document.createElement('div');
  input.classList.add('input-add', className);
  input.innerHTML = "\n    <input type=\"text\" placeholder=\"".concat(placeholder, "\">\n    <div class=\"input-btn\">\n      <button class=\"btn\" type=\"button\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n      <button class=\"btn\" type=\"button\">&times;</button>\n    </div>\n  ");
  element.before(input);
  inputText ? input.children[0].value = inputText : '';
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

    try {
      this.parentElement.nextElementSibling.style.display = '';
    } catch (error) {}

    this.parentElement.remove();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (addInput);

/***/ }),

/***/ "./src/js/modules/menu/createMenu.js":
/*!*******************************************!*\
  !*** ./src/js/modules/menu/createMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menuListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuListener */ "./src/js/modules/menu/menuListener.js");


var createMenu = function createMenu(card, cardElem, column) {
  var modal = document.createElement("div");
  modal.classList.add("modal-menu");
  modal.setAttribute('data-modal-close', true);
  modal.innerHTML = "\n    <div class=\"modal-menu-content\">\n      <div class=\"modal-menu-card\"></div>\n      <div class=\"modal-menu-wrap\">\n        <button>\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</button>\n        <button data-card-title>\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</button>\n        <button data-card-desc>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</button>\n        <button data-card-bg>\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443</button>\n        <button>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</button>\n      </div>\n    </div>\n  ";
  var currentCard = modal.querySelector(".modal-menu-card");
  var coords = cardElem.getBoundingClientRect();
  modal.children[0].style.marginTop = coords.top + "px";
  modal.children[0].style.marginLeft = coords.left + "px";
  currentCard.append(cardElem.cloneNode(true));
  Object(_menuListener__WEBPACK_IMPORTED_MODULE_0__["default"])(modal, card, cardElem, column);
  return modal;
};

/* harmony default export */ __webpack_exports__["default"] = (createMenu);

/***/ }),

/***/ "./src/js/modules/menu/menuListener.js":
/*!*********************************************!*\
  !*** ./src/js/modules/menu/menuListener.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_closeModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/closeModal */ "./src/js/modules/modal/closeModal.js");
/* harmony import */ var _modal_changeDesc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/changeDesc */ "./src/js/modules/modal/changeDesc.js");
/* harmony import */ var _modal_changeTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/changeTitle */ "./src/js/modules/modal/changeTitle.js");
/* harmony import */ var _modal_changeBg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/changeBg */ "./src/js/modules/modal/changeBg.js");





var menuListener = function menuListener(modal, card, cardElem, column) {
  modal.addEventListener('click', function (e) {
    var place = modal.querySelector('.modal-menu-card').children[0];
    Object(_modal_closeModal__WEBPACK_IMPORTED_MODULE_0__["default"])(e, modal);
    Object(_modal_changeTitle__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, card, cardElem, place);
    Object(_modal_changeDesc__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target, card, place);
    Object(_modal_changeBg__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, card, cardElem, place);
    removeCard(e.target, modal, cardElem, column);
    openCard(e.target, modal, cardElem);
  });
}; //? Удаление карточки


function removeCard(target, modal, cardElem, column) {
  if (target.textContent === 'Удалить карточку') {
    cardElem.remove();
    modal.remove();
    column.removeCard(cardElem.getAttribute('data-card-id'));
  }
} //? Октрыть карточку


function openCard(target, modal, cardElem) {
  if (target.textContent === 'Открыть карточку') {
    modal.remove();
    cardElem.children[0].click();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (menuListener);

/***/ }),

/***/ "./src/js/modules/modal/changeBg.js":
/*!******************************************!*\
  !*** ./src/js/modules/modal/changeBg.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var changeBg = function changeBg(target, card, cardElem, place) {
  if (target.hasAttribute('data-card-bg')) {
    if (place.parentElement.querySelector('.modal-bg-popup')) {
      return;
    }

    var columnBg = cardElem.querySelector("[data-column-card-bg]");
    var modalBg = target === place ? target.closest(".modal").querySelector(".modal-close") : null;
    var modifyClass = target === place ? 'bg__modal' : 'bg__menu';
    place = place.parentElement;
    var bgComponent = document.createElement("div");
    bgComponent.classList.add("modal-bg-popup", modifyClass);
    bgComponent.innerHTML = "\n      <p>\u0426\u0432\u0435\u0442\u0430</p>\n      <div class=\"modal-bg-color\">\n        <span data-bg=\"red\"></span>\n        <span data-bg=\"blue\"></span>\n        <span data-bg=\"green\"></span>\n        <span data-bg=\"yellow\"></span>\n        <span data-bg=\"darkred\"></span>\n        <span data-bg=\"darkgreen\"></span>\n        <span data-bg=\"darkblue\"></span>\n        <span data-bg=\"darkgrey\"></span>\n      </div>\n      <button data-delete-bg>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443</button>\n    ";
    bgComponent.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-bg')) {
        var color = getComputedStyle(e.target).backgroundColor;
        columnBg.classList.add("column-item__bg");
        columnBg.style.backgroundColor = color;
        card.addBackground(color);

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
        card.addBackground(null);

        if (modalBg) {
          modalBg.classList.remove("modal__bg");
          modalBg.style.backgroundColor = "transparent";
        }
      }

      if (!modalBg) {
        place.children[0].remove();
        place.prepend(cardElem.cloneNode(true));
      }

      bgComponent.remove();
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


function changeDesc(target, card, place) {
  if (target.hasAttribute('data-card-desc')) {
    place.style.display = 'none';

    var callback = function callback(value) {
      if (place === target) {
        target.textContent = value;
      }

      card.addDesc(value);
    };

    var placeholder = card.desc ? card.desc : 'Добавить описание';
    var className = "input-add__" + (place === target ? "modal" : "menu");
    var text = card.desc ? card.desc : '';
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(place, placeholder, callback, className, text);
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


var changeTitle = function changeTitle(target, card, cardElem, place) {
  if (target.hasAttribute('data-card-title')) {
    var callback = function callback(value) {
      cardElem.querySelector('[data-column-card-title]').textContent = value;
      card.changeTitle(value);

      if (target === place) {
        target.textContent = value;
      } else {
        var parent = place.parentElement;
        parent.textContent = '';
        parent.append(cardElem.cloneNode(true));
      }
    };

    place.style.display = 'none';
    var className = "input-add__" + (target.closest('.modal') ? "modal" : "menu");
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(place, card.title, callback, className, card.title);
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

/***/ "./src/js/modules/modal/createCheckList.js":
/*!*************************************************!*\
  !*** ./src/js/modules/modal/createCheckList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createCheckList(id) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Чек-лист";
  var checkList = document.createElement("div");
  checkList.setAttribute("data-check-id", id);
  checkList.classList.add("modal__item");
  checkList.innerHTML = "\n    <span class=\"modal-logo\">\t&#9745;</span>\n    <div class=\"modal-content\">\n      <p> <span data-check-title> ".concat(title, "</span> <span data-delete-checklist>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</span></p>\n      <div class=\"checkList\">\n        <progress value=\"\" max=\"100\"></progress>\n        <div></div>\n        <p data-modal-addcheck>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</p>\n      </div>\n    </div>\n  ");
  return checkList;
}

/* harmony default export */ __webpack_exports__["default"] = (createCheckList);

/***/ }),

/***/ "./src/js/modules/modal/createModal.js":
/*!*********************************************!*\
  !*** ./src/js/modules/modal/createModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalListener */ "./src/js/modules/modal/modalListener.js");
/* harmony import */ var _createCheckList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCheckList */ "./src/js/modules/modal/createCheckList.js");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressBar */ "./src/js/modules/modal/progressBar.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function createModal(card, elem) {
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = "\n    <div class=\"modal-popup\">\n      <div class=\"modal-close ".concat(card.background ? "modal__bg" : "", "\"\n      style=\"background-color: ").concat(card.background ? card.background : '', ";\">\n        <span data-modal-close>&times;</span>\n      </div>\n      <div class=\"wrapper\">\n        <div class=\"modal-main\">\n\n          <div class=\"title modal__item\">\n            <span class=\"modal-logo\">&#x2712;</span>\n            <div class=\"modal-content\">\n              <p data-card-title>").concat(card.title, "</p>\n            </div>\n          </div>\n\n          <div class=\"desc modal__item\">\n            <span class=\"modal-logo\"> &equiv;</span>\n            <div class=\"modal-content\">\n              <p>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</p>\n              <p data-card-desc>").concat(card.desc ? card.desc : "Добавить более подробное описание...", "</p>\n            </div>\n          </div>\n\n          <div class=\"comments modal__item\">\n            <span class=\"modal-logo\"> &#x270E;</span>\n            <div class=\"modal-content\">\n              <p>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438</p>\n              <p data-modal-comments>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</p>\n              <div class=\"comments-wrapper\"></div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"modal-add\">\n          <p>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443</p>\n          <div>\n            <button data-modal-checklist>\u0427\u0435\u043A-\u043B\u0438\u0441\u0442</button>\n            <button data-card-bg>\u041E\u0431\u043B\u043E\u0436\u043A\u0430</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  ");
  addComments(card, modal);
  addChecklist(card, modal);
  Object(_modalListener__WEBPACK_IMPORTED_MODULE_0__["default"])(modal, card, elem);
  return modal;
}

function addComments(card, modal) {
  if (card.comments.length !== 0) {
    var wrap = modal.querySelector(".comments-wrapper");

    var _iterator = _createForOfIteratorHelper(card.comments),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        var div = document.createElement("div");
        div.innerHTML = "\n      <p>".concat(i.value, "</p>\n      <span>").concat(i.date, "</span>\n      ");
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
  if (card.checkList.length !== 0) {
    card.checkList.forEach(function (list) {
      var checkList = Object(_createCheckList__WEBPACK_IMPORTED_MODULE_1__["default"])(list.id, list.title);
      modal.querySelector(".desc").after(checkList);
      list.checkItems.forEach(function (item) {
        var wrap = modal.querySelector(".checkList div");
        var attr = item.status ? "checked" : "";
        var checkItem = document.createElement("label");
        checkItem.innerHTML = "\n        <input type=\"checkbox\" ".concat(attr, " data-check>\n        ").concat(item.value, "\n        ");
        wrap.append(checkItem);
      });
    });
    Object(_progressBar__WEBPACK_IMPORTED_MODULE_2__["default"])(modal);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createModal);

/***/ }),

/***/ "./src/js/modules/modal/modalListener.js":
/*!***********************************************!*\
  !*** ./src/js/modules/modal/modalListener.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addInput */ "./src/js/modules/addInput.js");
/* harmony import */ var _closeModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeModal */ "./src/js/modules/modal/closeModal.js");
/* harmony import */ var _changeTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeTitle */ "./src/js/modules/modal/changeTitle.js");
/* harmony import */ var _changeDesc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeDesc */ "./src/js/modules/modal/changeDesc.js");
/* harmony import */ var _changeBg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeBg */ "./src/js/modules/modal/changeBg.js");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progressBar */ "./src/js/modules/modal/progressBar.js");
/* harmony import */ var _createCheckList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createCheckList */ "./src/js/modules/modal/createCheckList.js");








var modalListener = function modalListener(modal, card, cardElem) {
  modal.addEventListener('click', function (e) {
    Object(_closeModal__WEBPACK_IMPORTED_MODULE_1__["default"])(e, modal);
    Object(_changeTitle__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, card, cardElem, e.target);
    Object(_changeDesc__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, card, e.target);
    Object(_changeBg__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, card, cardElem, e.target);
    addComment(e.target, card); // Чек-лист

    addChecklist(e.target, modal, card);
    removeChecklist(e.target, card);
    toggleChecklistItemStatus(e.target, card, modal);
    changeChecklistTitle(e.target, card);
    addChecklistItem(e.target, card, modal);
    removeChecklistItem(e, card);
  });
}; //? Добавление комментария


function addComment(target, card) {
  if (target.hasAttribute("data-modal-comments")) {
    var callback = function callback(value) {
      var wrap = target.nextElementSibling;
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
      div.innerHTML = "\n            <p>".concat(value, "</p>\n            <span>").concat(date, "</span>\n          ");
      wrap.prepend(div);
      card.addComment({
        value: value,
        date: date
      });
    };

    target.style.display = "none";
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(target, "", callback, "input-add__modal");
  }
} //* ЧЕК-ЛИСТ
//? Добавление Чек-листа на страницу


function addChecklist(target, modal, card) {
  if (target.hasAttribute("data-modal-checklist")) {
    var id = Math.random();
    var checklist = Object(_createCheckList__WEBPACK_IMPORTED_MODULE_6__["default"])(id);
    modal.querySelector(".desc").after(checklist);
    card.addChecklist(id);
  }
} //? Удаление Чек-листа


function removeChecklist(target, card) {
  if (target.hasAttribute('data-delete-checklist')) {
    var checklist = target.closest('[data-check-id]');
    var id = checklist.getAttribute('data-check-id');
    checklist.remove();
    card.removeChecklist(id);
  }
} //? Изменение названи Чек-листа


function changeChecklistTitle(target, card) {
  if (target.hasAttribute("data-check-title")) {
    var callback = function callback(value) {
      target.textContent = value;
      var id = target.closest('[data-check-id]').getAttribute("data-check-id");
      card.changeChecklistTitle(id, value);
      target.parentElement.style.display = '';
    };

    target.parentElement.style.display = 'none';
    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(target.parentElement, target.textContent, callback, "input-add__modal");
  }
} //? Добавление задачи в Чек-лист


function addChecklistItem(target, card, modal) {
  if (target.hasAttribute("data-modal-addcheck")) {
    var callback = function callback(value) {
      var checkItem = document.createElement("li");
      checkItem.classList.add('checkList-item');
      checkItem.innerHTML = "\n        <label>\n          <input type=\"checkbox\" data-check>\n          ".concat(value, "\n        </label>\n        <span data-delete-checkItem>&times;</span>\n        ");
      target.parentElement.querySelector("div").append(checkItem);
      var id = target.closest("[data-check-id]").getAttribute("data-check-id");
      card.addChecklistItems(id, {
        value: value,
        status: false
      });
      Object(_progressBar__WEBPACK_IMPORTED_MODULE_5__["default"])(modal);
    };

    Object(_addInput__WEBPACK_IMPORTED_MODULE_0__["default"])(target, "", callback, "input-add__modal");
  }
} //? Удаление задачи из Чек-листа


function removeChecklistItem(e, card) {
  if (e.target.hasAttribute('data-delete-checkItem')) {
    var id = e.target.closest('[data-check-id]').getAttribute('data-check-id');
    var value = e.target.previousElementSibling.textContent;
    e.target.parentElement.remove();
    card.removeChecklistItem(id, value.trim());
  }
} //? Изменение в экземпляре класса Card статуса задачи в чек-листе


function toggleChecklistItemStatus(target, card, modal) {
  if (target.hasAttribute("data-check")) {
    var id = target.closest('[data-check-id]').getAttribute('data-check-id');
    var value = target.parentElement.textContent;
    card.changeChecklistItem(id, value.trim());

    if (target.hasAttribute('checked')) {
      target.removeAttribute('checked');
    } else {
      target.setAttribute('checked', 'true');
    }

    Object(_progressBar__WEBPACK_IMPORTED_MODULE_5__["default"])(modal);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modalListener);

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
    if (e.target.classList.contains(className) || e.target.parentElement.classList.contains(className) && !e.target.classList.contains(notContains)) {
      try {
        var column = e.target.closest("[data-column-id]");
        var idColumn = column.getAttribute("data-column-id");
        var cardElem = e.target.closest("[data-card-id]");
        var idCard = cardElem.getAttribute("data-card-id");
        var card = _index__WEBPACK_IMPORTED_MODULE_0__["store"][idColumn].cards[idCard];
        var modal = func(card, cardElem, _index__WEBPACK_IMPORTED_MODULE_0__["store"][idColumn]);
        main.append(modal);
      } catch (error) {}
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (openModal);

/***/ }),

/***/ "./src/js/modules/modal/progressBar.js":
/*!*********************************************!*\
  !*** ./src/js/modules/modal/progressBar.js ***!
  \*********************************************/
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

    if (input.hasAttribute("checked")) {
      progress.value += step;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (progressBar);

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