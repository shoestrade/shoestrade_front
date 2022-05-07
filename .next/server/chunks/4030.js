exports.id = 4030;
exports.ids = [4030];
exports.modules = {
  /***/ 4030: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ DropdownItem;
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

    const Colors = {
      blueGray: "hover:bg-blue-gray-500",
      gray: "hover:bg-gray-500",
      brown: "hover:bg-brown-500",
      deepOrange: "hover:bg-deep-orange-500",
      orange: "hover:bg-orange-500",
      amber: "hover:bg-amber-500",
      yellow: "hover:bg-yellow-600",
      lime: "hover:bg-lime-500",
      lightGreen: "hover:bg-light-green-500",
      green: "hover:bg-green-500",
      teal: "hover:bg-teal-500",
      cyan: "hover:bg-cyan-500",
      lightBlue: "hover:bg-light-blue-500",
      blue: "hover:bg-blue-500",
      indigo: "hover:bg-indigo-500",
      deepPurple: "hover:bg-deep-purple-500",
      purple: "hover:bg-purple-500",
      pink: "hover:bg-pink-500",
      red: "hover:bg-red-500",
    };
    const ShadowColors = {
      blueGray: "hover:shadow-md-blue-gray",
      gray: "hover:shadow-md-gray",
      brown: "hover:shadow-md-brown",
      deepOrange: "hover:shadow-md-deep-orange",
      orange: "hover:shadow-md-orange",
      amber: "hover:shadow-md-amber",
      yellow: "hover:shadow-md-yellow",
      lime: "hover:shadow-md-lime",
      lightGreen: "hover:shadow-md-light-green",
      green: "hover:shadow-md-green",
      teal: "hover:shadow-md-teal",
      cyan: "hover:shadow-md-cyan",
      lightBlue: "hover:shadow-md-light-blue",
      blue: "hover:shadow-md-blue",
      indigo: "hover:shadow-md-indigo",
      deepPurple: "hover:shadow-md-deep-purple",
      purple: "hover:shadow-md-purple",
      pink: "hover:shadow-md-pink",
      red: "hover:shadow-md-red",
    };
    function DropdownItem(_ref) {
      let { children, color, ripple, className } = _ref,
        rest = _objectWithoutProperties(_ref, [
          "children",
          "color",
          "ripple",
          "className",
        ]);

      const rippleEffect =
        new (material_ripple_effects__WEBPACK_IMPORTED_MODULE_2___default())();
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "span",
        _objectSpread(
          _objectSpread({}, rest),
          {},
          {
            className: `block w-full text-sm py-3 px-4 font-normal cursor-pointer whitespace-no-wrap rounded-md text-gray-900 hover:text-white ${Colors[color]} ${ShadowColors[color]} transition-all duration-300`,
            onMouseUp: (e) => {
              ripple === "dark" && rippleEffect.create(e, "dark");
              ripple === "light" && rippleEffect.create(e, "light");
            },
            children: children,
          }
        )
      );
    }
    DropdownItem.defaultProps = {
      color: "lightBlue",
    };

    /***/
  },
};
