webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.module.scss */ \"./src/pages/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MenuDesplegable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MenuDesplegable */ \"./src/components/MenuDesplegable.jsx\");\n\n\nvar _jsxFileName = \"/Users/wisord/Documents/Work/Interview/src/pages/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar arrayMarcas = [];\n\nfunction HomePage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      marcas = _useState[0],\n      setMarcas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      items = _useState2[0],\n      setItems = _useState2[1];\n\n  function addMarca(marcaToAdd) {\n    setMarcas([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(marcas), [marcaToAdd]));\n  }\n\n  var handleSubmitMarca = function handleSubmitMarca(e) {\n    var marcaToAdd = document.getElementById('marca').value;\n    addMarca(marcaToAdd);\n    console.log(marcas);\n  };\n\n  var addItem = function addItem(nuevoItem) {\n    setItems([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items), [nuevoItem]));\n  };\n\n  var handleSubmitItem = function handleSubmitItem(e) {\n    e.preventDefault();\n    var marca = e.target.marca.value;\n    var modelo = e.target.modelo.value;\n    var precio = e.target.precio.value;\n    var nuevoItem = {\n      marca: marca,\n      modelo: modelo,\n      precio: precio\n    };\n    addItem(nuevoItem);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"marca\",\n    placeholder: \"Marca: \",\n    id: \"marca\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    onClick: function onClick(e) {\n      return handleSubmitMarca(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"Agregar marca\"), __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return handleSubmitItem(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(_components_MenuDesplegable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    arrayMarcas: marcas,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"modelo\",\n    placeholder: \"Modelo: \",\n    id: \"modelo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"precio\",\n    placeholder: \"Precio: \",\n    id: \"precio\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"Agregar Modelo\")), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, items.length > 0 ? items.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: \"item-\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }\n    }, item.marca, \" - \", item.modelo, \" - \", item.precio, \" -\", __jsx(\"button\", {\n      type: \"button\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }, \"DELETE\"));\n  }) : null));\n}\n\n_s(HomePage, \"PnlTaozuAKn+ENNlSlTRnum41qU=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbImFycmF5TWFyY2FzIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsIm1hcmNhcyIsInNldE1hcmNhcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJhZGRNYXJjYSIsIm1hcmNhVG9BZGQiLCJoYW5kbGVTdWJtaXRNYXJjYSIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYWRkSXRlbSIsIm51ZXZvSXRlbSIsImhhbmRsZVN1Ym1pdEl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsIm1hcmNhIiwidGFyZ2V0IiwibW9kZWxvIiwicHJlY2lvIiwic3R5bGUiLCJjb250YWluZXIiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsRUFBcEI7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNYQyxNQURXO0FBQUEsTUFDSEMsU0FERzs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFWEcsS0FGVztBQUFBLE1BRUpDLFFBRkk7O0FBSWxCLFdBQVNDLFFBQVQsQ0FBa0JDLFVBQWxCLEVBQThCO0FBQzVCSixhQUFTLHdHQUFLRCxNQUFMLElBQWFLLFVBQWIsR0FBVDtBQUNEOztBQUVELE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQy9CLFFBQU1GLFVBQVUsR0FBR0csUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUFwRDtBQUNBTixZQUFRLENBQUNDLFVBQUQsQ0FBUjtBQUNBTSxXQUFPLENBQUNDLEdBQVIsQ0FBWVosTUFBWjtBQUNELEdB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IjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBNZW51RGVzcGxlZ2FibGUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51RGVzcGxlZ2FibGUnO1xuXG5jb25zdCBhcnJheU1hcmNhcyA9IFtdO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW21hcmNhcywgc2V0TWFyY2FzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZnVuY3Rpb24gYWRkTWFyY2EobWFyY2FUb0FkZCkge1xuICAgIHNldE1hcmNhcyhbLi4ubWFyY2FzLCBtYXJjYVRvQWRkXSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXRNYXJjYSA9IChlKSA9PiB7XG4gICAgY29uc3QgbWFyY2FUb0FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJjYScpLnZhbHVlO1xuICAgIGFkZE1hcmNhKG1hcmNhVG9BZGQpO1xuICAgIGNvbnNvbGUubG9nKG1hcmNhcyk7XG4gIH07XG5cbiAgY29uc3QgYWRkSXRlbSA9IChudWV2b0l0ZW0pID0+IHtcbiAgICBzZXRJdGVtcyhbLi4uaXRlbXMsIG51ZXZvSXRlbV0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0SXRlbSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1hcmNhID0gZS50YXJnZXQubWFyY2EudmFsdWU7XG4gICAgY29uc3QgbW9kZWxvID0gZS50YXJnZXQubW9kZWxvLnZhbHVlO1xuICAgIGNvbnN0IHByZWNpbyA9IGUudGFyZ2V0LnByZWNpby52YWx1ZTtcbiAgICBjb25zdCBudWV2b0l0ZW0gPSB7XG4gICAgICBtYXJjYSxcbiAgICAgIG1vZGVsbyxcbiAgICAgIHByZWNpbyxcbiAgICB9O1xuICAgIGFkZEl0ZW0obnVldm9JdGVtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1hcmNhXCIgcGxhY2Vob2xkZXI9XCJNYXJjYTogXCIgaWQ9XCJtYXJjYVwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWl0TWFyY2EoZSl9PkFncmVnYXIgbWFyY2E8L2J1dHRvbj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0SXRlbShlKX0+XG4gICAgICAgIDxNZW51RGVzcGxlZ2FibGUgYXJyYXlNYXJjYXM9e21hcmNhc30gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1vZGVsb1wiIHBsYWNlaG9sZGVyPVwiTW9kZWxvOiBcIiBpZD1cIm1vZGVsb1wiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcmVjaW9cIiBwbGFjZWhvbGRlcj1cIlByZWNpbzogXCIgaWQ9XCJwcmVjaW9cIiAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZ3JlZ2FyIE1vZGVsbzwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHVsPlxuICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgXG4gICAgICA/IGl0ZW1zLm1hcCggKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICA8bGkga2V5PXtgaXRlbS0ke2luZGV4fWB9PlxuICAgICAgICAgICAge2l0ZW0ubWFyY2F9IC0ge2l0ZW0ubW9kZWxvfSAtIHtpdGVtLnByZWNpb30gLSBcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkRFTEVURTwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

})