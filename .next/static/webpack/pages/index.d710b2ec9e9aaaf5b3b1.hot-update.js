webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.module.scss */ \"./src/pages/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MenuDesplegable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MenuDesplegable */ \"./src/components/MenuDesplegable.jsx\");\nvar _jsxFileName = \"/Users/wisord/Documents/Work/Interview/src/pages/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar arrayMarcas = [];\nvar arrayToDisplay = [];\n\nfunction HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      marcas = _useState[0],\n      setMarcas = _useState[1];\n\n  var handleSubmitMarca = function handleSubmitMarca(e) {\n    var marcaToAdd = document.getElementById('marca').value;\n    arrayMarcas.push(marcaToAdd);\n    setMarcas(arrayMarcas);\n    arrayToDisplay = marcas;\n    console.log(marcas);\n  };\n\n  var handleSubmitItem = function handleSubmitItem() {};\n\n  return __jsx(\"div\", {\n    className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"marca\",\n    placeholder: \"Marca: \",\n    id: \"marca\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    onClick: function onClick(e) {\n      return handleSubmitMarca(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Agregar marca\"), __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return handleSubmitItem(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(_components_MenuDesplegable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    arrayMarcas: arrayMarcas,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"modelo\",\n    placeholder: \"Modelo: \",\n    id: \"modelo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"precio\",\n    placeholder: \"Precio: \",\n    id: \"precio\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Agregar Modelo\")));\n}\n\n_s(HomePage, \"F9nguhOC+iV/JYXlB9ewx8tvn8E=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbImFycmF5TWFyY2FzIiwiYXJyYXlUb0Rpc3BsYXkiLCJIb21lUGFnZSIsInVzZVN0YXRlIiwibWFyY2FzIiwic2V0TWFyY2FzIiwiaGFuZGxlU3VibWl0TWFyY2EiLCJlIiwibWFyY2FUb0FkZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0SXRlbSIsInN0eWxlIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLEVBQXJCOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDWEMsTUFEVztBQUFBLE1BQ0hDLFNBREc7O0FBR2xCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQy9CLFFBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUFwRDtBQUNBWCxlQUFXLENBQUNZLElBQVosQ0FBaUJKLFVBQWpCO0FBQ0FILGFBQVMsQ0FBQ0wsV0FBRCxDQUFUO0FBQ0FDLGtCQUFjLEdBQUdHLE1BQWpCO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFaO0FBQ0QsR0FORDs7QUFRQSxNQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU0sQ0FFOUIsQ0FGRDs7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxnRUFBSyxDQUFDQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsT0FBeEI7QUFBZ0MsZUFBVyxFQUFDLFNBQTVDO0FBQXNELE1BQUUsRUFBQyxPQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRSxpQkFBQ1YsQ0FBRDtBQUFBLGFBQU9ELGlCQUFpQixDQUFDQyxDQUFELENBQXhCO0FBQUEsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdFO0FBQU0sWUFBUSxFQUFFLGtCQUFDQSxDQUFEO0FBQUEsYUFBT1EsZ0JBQWdCLENBQUNSLENBQUQsQ0FBdkI7QUFBQSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFpQixlQUFXLEVBQUVQLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFFBQXhCO0FBQWlDLGVBQVcsRUFBQyxVQUE3QztBQUF3RCxNQUFFLEVBQUMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsUUFBeEI7QUFBaUMsZUFBVyxFQUFDLFVBQTdDO0FBQXdELE1BQUUsRUFBQyxRQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsQ0FIRixDQURGO0FBWUQ7O0dBM0JRRSxROztLQUFBQSxRO0FBNkJNQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnO1xuaW1wb3J0IE1lbnVEZXNwbGVnYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL01lbnVEZXNwbGVnYWJsZSc7XG5cbmNvbnN0IGFycmF5TWFyY2FzID0gW107XG5sZXQgYXJyYXlUb0Rpc3BsYXkgPSBbXTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFttYXJjYXMsIHNldE1hcmNhc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0TWFyY2EgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG1hcmNhVG9BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyY2EnKS52YWx1ZTtcbiAgICBhcnJheU1hcmNhcy5wdXNoKG1hcmNhVG9BZGQpO1xuICAgIHNldE1hcmNhcyhhcnJheU1hcmNhcyk7XG4gICAgYXJyYXlUb0Rpc3BsYXkgPSBtYXJjYXM7XG4gICAgY29uc29sZS5sb2cobWFyY2FzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXRJdGVtID0gKCkgPT4ge1xuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYXJjYVwiIHBsYWNlaG9sZGVyPVwiTWFyY2E6IFwiIGlkPVwibWFyY2FcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdE1hcmNhKGUpfT5BZ3JlZ2FyIG1hcmNhPC9idXR0b24+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdEl0ZW0oZSl9PlxuICAgICAgICA8TWVudURlc3BsZWdhYmxlIGFycmF5TWFyY2FzPXthcnJheU1hcmNhc30gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1vZGVsb1wiIHBsYWNlaG9sZGVyPVwiTW9kZWxvOiBcIiBpZD1cIm1vZGVsb1wiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcmVjaW9cIiBwbGFjZWhvbGRlcj1cIlByZWNpbzogXCIgaWQ9XCJwcmVjaW9cIiAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZ3JlZ2FyIE1vZGVsbzwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

})