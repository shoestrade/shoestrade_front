exports.id = 6220;
exports.ids = [6220];
exports.modules = {
  /***/ 6220: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Radio;
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

    const colors = {
      blueGray: "mt-radio-blue-gray-500",
      gray: "mt-radio-gray-500",
      brown: "mt-radio-brown-500",
      deepOrange: "mt-radio-deep-orange-500",
      orange: "mt-radio-orange-500",
      amber: "mt-radio-amber-500",
      yellow: "mt-radio-yellow-600",
      lime: "mt-radio-lime-500",
      lightGreen: "mt-radio-light-green-500",
      green: "mt-radio-green-500",
      teal: "mt-radio-teal-500",
      cyan: "mt-radio-cyan-500",
      lightBlue: "mt-radio-light-blue-500",
      blue: "mt-radio-blue-500",
      indigo: "mt-radio-indigo-500",
      deepPurple: "mt-radio-deep-purple-500",
      purple: "mt-radio-purple-500",
      pink: "mt-radio-pink-500",
      red: "mt-radio-red-500",
    };
    function Radio(_ref) {
      let { color, text, id } = _ref,
        rest = _objectWithoutProperties(_ref, ["color", "text", "id"]);

      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "input",
            _objectSpread(
              _objectSpread({}, rest),
              {},
              {
                id: id,
                type: "radio",
                className: `mt-radio ${colors[color]} hidden overflow-hidden`,
              }
            )
          ),
          /*#__PURE__*/ (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            htmlFor: id,
            className:
              "flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300",
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                "span",
                {
                  className:
                    "relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300",
                }
              ),
              text,
            ],
          }),
        ],
      });
    }
    Radio.defaultProps = {
      color: "lightBlue",
    };

    /***/
  },
};
