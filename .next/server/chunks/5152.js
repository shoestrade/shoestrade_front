exports.id = 5152;
exports.ids = [5152];
exports.modules = {
  /***/ 2381: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Pagination;
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

    function Pagination({ children }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: "py-2",
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "div",
              {
                className: "block",
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "ul",
                    {
                      className: "flex pl-0 rounded list-none",
                      children: children,
                    }
                  ),
              }
            ),
        }
      );
    }

    /***/
  },

  /***/ 7725: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ PaginationItem;
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
    /* harmony import */ var material_ripple_effects__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1670);
    /* harmony import */ var material_ripple_effects__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        material_ripple_effects__WEBPACK_IMPORTED_MODULE_2__
      );

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

    const colors = {
      blueGray: "bg-blue-gray-500",
      gray: "bg-gray-500",
      brown: "bg-brown-500",
      deepOrange: "bg-deep-orange-500",
      orange: "bg-orange-500",
      amber: "bg-amber-500",
      yellow: "bg-yellow-600",
      lime: "bg-lime-500",
      lightGreen: "bg-light-green-500",
      green: "bg-green-500",
      teal: "bg-teal-500",
      cyan: "bg-cyan-500",
      lightBlue: "bg-light-blue-500",
      blue: "bg-blue-500",
      indigo: "bg-indigo-500",
      deepPurple: "bg-deep-purple-500",
      purple: "bg-purple-500",
      pink: "bg-pink-500",
      red: "bg-red-500",
    };
    function PaginationItem(_ref) {
      let { children, color, button, ripple, className } = _ref,
        rest = _objectWithoutProperties(_ref, [
          "children",
          "color",
          "button",
          "ripple",
          "className",
        ]);

      const rippleEffect =
        new (material_ripple_effects__WEBPACK_IMPORTED_MODULE_2___default())();
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "li",
        {
          className: "grid place-items-center",
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "a",
              _objectSpread(
                _objectSpread({}, rest),
                {},
                {
                  className: `text-sm leading-none flex ${
                    button
                      ? "tracking-wider rounded-lg w-14"
                      : "rounded-full w-8"
                  } h-8 mx-1 p-0 items-center justify-center ${
                    color
                      ? `${colors[color]} text-white`
                      : "bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 focus:bg-gray-500 focus:bg-opacity-20 active:bg-gray-500 active:bg-opacity-40"
                  } transition-all duration-300 ${className}`,
                  onMouseUp: (e) => {
                    ripple === "dark" && rippleEffect.create(e, "dark");
                    ripple === "light" && rippleEffect.create(e, "light");
                  },
                  children: children,
                }
              )
            ),
        }
      );
    }
    PaginationItem.defaultProps = {
      button: false,
    };

    /***/
  },
};
