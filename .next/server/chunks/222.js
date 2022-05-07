exports.id = 222;
exports.ids = [222];
exports.modules = {
  /***/ 222: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Quote;
      },
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5282);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(9297);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }

    const textColors = {
      white: "text-gray-200",
      blueGray: "text-blue-gray-700",
      gray: "text-gray-700",
      brown: "text-brown-700",
      deepOrange: "text-deep-orange-700",
      orange: "text-orange-700",
      amber: "text-amber-700",
      yellow: "text-yellow-600",
      lime: "text-lime-700",
      lightGreen: "text-light-green-700",
      green: "text-green-700",
      teal: "text-teal-700",
      cyan: "text-cyan-700",
      lightBlue: "text-light-blue-700",
      blue: "text-blue-700",
      indigo: "text-indigo-700",
      deepPurple: "text-deep-purple-700",
      purple: "text-purple-700",
      pink: "text-pink-700",
      red: "text-red-700",
    };
    const citeColors = {
      white: "text-white",
      blueGray: "text-blue-gray-800",
      gray: "text-gray-800",
      brown: "text-brown-800",
      deepOrange: "text-deep-orange-800",
      orange: "text-orange-800",
      amber: "text-amber-800",
      yellow: "text-yellow-800",
      lime: "text-lime-800",
      lightGreen: "text-light-green-800",
      green: "text-green-800",
      teal: "text-teal-800",
      cyan: "text-cyan-800",
      lightBlue: "text-light-blue-800",
      blue: "text-blue-800",
      indigo: "text-indigo-800",
      deepPurple: "text-deep-purple-800",
      purple: "text-purple-800",
      pink: "text-pink-800",
      red: "text-red-800",
    };
    function Quote(_ref) {
      let { children, color, footer, cite } = _ref,
        rest = _objectWithoutProperties(_ref, [
          "children",
          "color",
          "footer",
          "cite",
        ]);

      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "div",
        _objectSpread(
          _objectSpread({}, rest),
          {},
          {
            className: "mb-2",
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                "p",
                {
                  className: `${textColors[color]} text-base font-light leading-relaxed mt-0 mb-2`,
                  children: children,
                }
              ),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: `block ${citeColors[color]}`,
                children: [
                  "- ",
                  footer,
                  " ",
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "cite",
                    {
                      children: cite,
                    }
                  ),
                ],
              }),
            ],
          }
        )
      );
    }
    Quote.defaultProps = {
      color: "blueGray",
    };

    /***/
  },
};
