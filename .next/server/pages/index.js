module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/MenuDesplegable.jsx":
/*!********************************************!*\
  !*** ./src/components/MenuDesplegable.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/wisord/Documents/Work/Interview/src/components/MenuDesplegable.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst MenuDesplegable = ({\n  arrayMarcas\n}) => {\n  console.log('comp', arrayMarcas);\n  return __jsx(\"select\", {\n    name: \"marca\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, arrayMarcas.length > 0 ? arrayMarcas.map((item, index) => // eslint-disable-next-line react/no-array-index-key\n  __jsx(\"option\", {\n    key: index,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, item)) : null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuDesplegable);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51RGVzcGxlZ2FibGUuanN4P2M3ZjUiXSwibmFtZXMiOlsiTWVudURlc3BsZWdhYmxlIiwiYXJyYXlNYXJjYXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLE1BQU1BLGVBQWUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFxQjtBQUMzQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkYsV0FBcEI7QUFDQSxTQUNFO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJQSxXQUFXLENBQUNHLE1BQVosR0FBcUIsQ0FBckIsR0FDSUgsV0FBVyxDQUFDSSxHQUFaLENBQWdCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUNoQjtBQUNBO0FBQVEsT0FBRyxFQUFFQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsSUFESCxDQUZBLENBREosR0FPSSxJQVRSLENBREY7QUFhQSxDQWZGOztBQWlCZU4sOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51RGVzcGxlZ2FibGUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWVudURlc3BsZWdhYmxlID0gKHsgYXJyYXlNYXJjYXMgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnY29tcCcsIGFycmF5TWFyY2FzKTtcbiAgcmV0dXJuIChcbiAgICA8c2VsZWN0IG5hbWU9XCJtYXJjYVwiPlxuICAgICAge1xuICAgICAgICBhcnJheU1hcmNhcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBhcnJheU1hcmNhcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgPC9zZWxlY3Q+XG4pfTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudURlc3BsZWdhYmxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MenuDesplegable.jsx\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.module.scss */ \"./src/pages/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MenuDesplegable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MenuDesplegable */ \"./src/components/MenuDesplegable.jsx\");\nvar _jsxFileName = \"/Users/wisord/Documents/Work/Interview/src/pages/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst arrayMarcas = [];\n\nfunction HomePage() {\n  const {\n    0: marcas,\n    1: setMarcas\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: items,\n    1: setItems\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  function addMarca(marcaToAdd) {\n    setMarcas([...marcas, marcaToAdd]);\n  }\n\n  const handleSubmitMarca = e => {\n    const marcaToAdd = document.getElementById('marca').value;\n    addMarca(marcaToAdd);\n    console.log(marcas);\n  };\n\n  const addItem = nuevoItem => {\n    setItems([...items, nuevoItem]);\n  };\n\n  const handleSubmitItem = e => {\n    e.preventDefault();\n    const marca = e.target.marca.value;\n    const modelo = e.target.modelo.value;\n    const precio = e.target.precio.value;\n    const nuevoItem = {\n      marca,\n      modelo,\n      precio,\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])()\n    };\n    addItem(nuevoItem);\n  };\n\n  const deleteItem = itemId => {\n    const newArray = items.filter(item => item.id !== itemId);\n    setItems(newArray);\n  };\n\n  const handleDelete = e => {\n    const itemId = e.target.parentNode.id;\n    deleteItem(itemId);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"marca\",\n    placeholder: \"Marca: \",\n    id: \"marca\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    onClick: e => handleSubmitMarca(e),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, \"Agregar marca\"), __jsx(\"form\", {\n    onSubmit: e => handleSubmitItem(e),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(_components_MenuDesplegable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    arrayMarcas: marcas,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"modelo\",\n    placeholder: \"Modelo: \",\n    id: \"modelo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"precio\",\n    placeholder: \"Precio: \",\n    id: \"precio\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"Agregar Modelo\")), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, items.length > 0 ? items.map(item => __jsx(\"li\", {\n    key: item.id,\n    id: item.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, item.marca, ' ', \"-\", item.modelo, ' ', \"-\", item.precio, ' ', \"-\", __jsx(\"button\", {\n    type: \"button\",\n    onClick: e => handleDelete(e),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, \" DELETE \"))) : null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanN4PzBlZDciXSwibmFtZXMiOlsiYXJyYXlNYXJjYXMiLCJIb21lUGFnZSIsIm1hcmNhcyIsInNldE1hcmNhcyIsInVzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImFkZE1hcmNhIiwibWFyY2FUb0FkZCIsImhhbmRsZVN1Ym1pdE1hcmNhIiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRJdGVtIiwibnVldm9JdGVtIiwiaGFuZGxlU3VibWl0SXRlbSIsInByZXZlbnREZWZhdWx0IiwibWFyY2EiLCJ0YXJnZXQiLCJtb2RlbG8iLCJwcmVjaW8iLCJpZCIsInV1aWR2NCIsImRlbGV0ZUl0ZW0iLCJpdGVtSWQiLCJuZXdBcnJheSIsImZpbHRlciIsIml0ZW0iLCJoYW5kbGVEZWxldGUiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJjb250YWluZXIiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBRyxFQUFwQjs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsV0FBU0csUUFBVCxDQUFrQkMsVUFBbEIsRUFBOEI7QUFDNUJMLGFBQVMsQ0FBQyxDQUFDLEdBQUdELE1BQUosRUFBWU0sVUFBWixDQUFELENBQVQ7QUFDRDs7QUFFRCxRQUFNQyxpQkFBaUIsR0FBSUMsQ0FBRCxJQUFPO0FBQy9CLFVBQU1GLFVBQVUsR0FBR0csUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUFwRDtB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RUEsSUFBSSxDQUFDTixFQUFkO0FBQWtCLE1BQUUsRUFBRU0sSUFBSSxDQUFDTixFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dNLElBQUksQ0FBQ1YsS0FEUixFQUVHLEdBRkgsT0FJR1UsSUFBSSxDQUFDUixNQUpSLEVBS0csR0FMSCxPQU9HUSxJQUFJLENBQUNQLE1BUFIsRUFRRyxHQVJILE9BVUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUdiLENBQUQsSUFBT3FCLFlBQVksQ0FBQ3JCLENBQUQsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixDQURBLENBREgsR0FlRyxJQWhCTixDQVRGLENBREY7QUErQkQ7O0FBRWNULHVFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnO1xuaW1wb3J0IE1lbnVEZXNwbGVnYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL01lbnVEZXNwbGVnYWJsZSc7XG5cbmNvbnN0IGFycmF5TWFyY2FzID0gW107XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbbWFyY2FzLCBzZXRNYXJjYXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBhZGRNYXJjYShtYXJjYVRvQWRkKSB7XG4gICAgc2V0TWFyY2FzKFsuLi5tYXJjYXMsIG1hcmNhVG9BZGRdKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdE1hcmNhID0gKGUpID0+IHtcbiAgICBjb25zdCBtYXJjYVRvQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmNhJykudmFsdWU7XG4gICAgYWRkTWFyY2EobWFyY2FUb0FkZCk7XG4gICAgY29uc29sZS5sb2cobWFyY2FzKTtcbiAgfTtcblxuICBjb25zdCBhZGRJdGVtID0gKG51ZXZvSXRlbSkgPT4ge1xuICAgIHNldEl0ZW1zKFsuLi5pdGVtcywgbnVldm9JdGVtXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0SXRlbSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1hcmNhID0gZS50YXJnZXQubWFyY2EudmFsdWU7XG4gICAgY29uc3QgbW9kZWxvID0gZS50YXJnZXQubW9kZWxvLnZhbHVlO1xuICAgIGNvbnN0IHByZWNpbyA9IGUudGFyZ2V0LnByZWNpby52YWx1ZTtcbiAgICBjb25zdCBudWV2b0l0ZW0gPSB7XG4gICAgICBtYXJjYSxcbiAgICAgIG1vZGVsbyxcbiAgICAgIHByZWNpbyxcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICB9O1xuICAgIGFkZEl0ZW0obnVldm9JdGVtKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW1JZCkgPT4ge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gaXRlbXMuZmlsdGVyKCBpdGVtID0+IGl0ZW0uaWQgIT09IGl0ZW1JZCk7XG4gICAgc2V0SXRlbXMobmV3QXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgaXRlbUlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcbiAgICBkZWxldGVJdGVtKGl0ZW1JZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYXJjYVwiIHBsYWNlaG9sZGVyPVwiTWFyY2E6IFwiIGlkPVwibWFyY2FcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdE1hcmNhKGUpfT5BZ3JlZ2FyIG1hcmNhPC9idXR0b24+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdEl0ZW0oZSl9PlxuICAgICAgICA8TWVudURlc3BsZWdhYmxlIGFycmF5TWFyY2FzPXttYXJjYXN9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtb2RlbG9cIiBwbGFjZWhvbGRlcj1cIk1vZGVsbzogXCIgaWQ9XCJtb2RlbG9cIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJlY2lvXCIgcGxhY2Vob2xkZXI9XCJQcmVjaW86IFwiIGlkPVwicHJlY2lvXCIgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWdyZWdhciBNb2RlbG88L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gaWQ9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICB7aXRlbS5tYXJjYX1cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICB7aXRlbS5tb2RlbG99XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAge2l0ZW0ucHJlY2lvfVxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVEZWxldGUoZSl9PiBERUxFVEUgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuXG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "./src/pages/styles/index.module.scss":
/*!********************************************!*\
  !*** ./src/pages/styles/index.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__3NwDZ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzP2Q2NjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fM053RFpcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/styles/index.module.scss\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });