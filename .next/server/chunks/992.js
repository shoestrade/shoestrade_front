exports.id = 992;
exports.ids = [992];
exports.modules = {
  /***/ 992: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Input;
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

    const mtInputColors = {
      blueGray: "mt-input-blue-gray-500",
      gray: "mt-input-gray-500",
      brown: "mt-input-brown-500",
      deepOrange: "mt-input-deep-orange-500",
      orange: "mt-input-orange-500",
      amber: "mt-input-amber-500",
      yellow: "mt-input-yellow-600",
      lime: "mt-input-lime-500",
      lightGreen: "mt-input-light-green-500",
      green: "mt-input-green-500",
      teal: "mt-input-teal-500",
      cyan: "mt-input-cyan-500",
      lightBlue: "mt-input-light-blue-500",
      blue: "mt-input-blue-500",
      indigo: "mt-input-indigo-500",
      deepPurple: "mt-input-deep-purple-500",
      purple: "mt-input-purple-500",
      pink: "mt-input-pink-500",
      red: "mt-input-red-500",
    };
    const mtInputOutlineColors = {
      blueGray: "mt-input-outline-blue-gray-500",
      gray: "mt-input-outline-gray-500",
      brown: "mt-input-outline-brown-500",
      deepOrange: "mt-input-outline-deep-orange-500",
      orange: "mt-input-outline-orange-500",
      amber: "mt-input-outline-amber-500",
      yellow: "mt-input-outline-yellow-600",
      lime: "mt-input-outline-lime-500",
      lightGreen: "mt-input-outline-light-green-500",
      green: "mt-input-outline-green-500",
      teal: "mt-input-outline-teal-500",
      cyan: "mt-input-outline-cyan-500",
      lightBlue: "mt-input-outline-light-blue-500",
      blue: "mt-input-outline-blue-500",
      indigo: "mt-input-outline-indigo-500",
      deepPurple: "mt-input-outline-deep-purple-500",
      purple: "mt-input-outline-purple-500",
      pink: "mt-input-outline-pink-500",
      red: "mt-input-outline-red-500",
    };
    const borderColors = {
      blueGray: "border-blue-gray-500",
      gray: "border-gray-500",
      brown: "border-brown-500",
      deepOrange: "border-deep-orange-500",
      orange: "border-orange-500",
      amber: "border-amber-500",
      yellow: "border-yellow-600",
      lime: "border-lime-500",
      lightGreen: "border-light-green-500",
      green: "border-green-500",
      teal: "border-teal-500",
      cyan: "border-cyan-500",
      lightBlue: "border-light-blue-500",
      blue: "border-blue-500",
      indigo: "border-indigo-500",
      deepPurple: "border-deep-purple-500",
      purple: "border-purple-500",
      pink: "border-pink-500",
      red: "border-red-500",
    };
    function Input(_ref) {
      let { placeholder, color, size, outline, error, success } = _ref,
        rest = _objectWithoutProperties(_ref, [
          "placeholder",
          "color",
          "size",
          "outline",
          "error",
          "success",
        ]);

      let labelBorderColor,
        mtInputBorderColor,
        mtInputOutlineColor,
        mtInputOutlineFocusColor,
        inputClasses = [];
      let container = ["w-full", "relative"];

      if (error) {
        labelBorderColor = borderColors["red"];
        mtInputBorderColor = mtInputColors["red"];
        mtInputOutlineColor = mtInputOutlineColors["red"];
        mtInputOutlineFocusColor = borderColors["red"];
      } else if (success) {
        labelBorderColor = borderColors["green"];
        mtInputBorderColor = mtInputColors["green"];
        mtInputOutlineColor = mtInputOutlineColors["green"];
        mtInputOutlineFocusColor = borderColors["green"];
      } else {
        labelBorderColor = "border-gray-300";
        mtInputBorderColor = mtInputColors[color];
        mtInputOutlineColor = mtInputOutlineColors[color];
        mtInputOutlineFocusColor = borderColors[color];
      }

      let label = [
        "text-gray-400",
        "absolute",
        "left-0",
        `${outline ? "-top-1.5" : "-top-0.5"}`,
        "w-full",
        "h-full",
        `${!outline && "border border-t-0 border-l-0 border-r-0 border-b-1"}`,
        labelBorderColor,
        "pointer-events-none",
        `${outline && "flex"}`,
        `${outline && size === "sm" && "text-sm"}`,
        `${outline && "leading-10"}`,
        `${outline && "transition-all"}`,
        `${outline && "duration-300"}`,
      ];
      const sharedClasses = [
        "w-full",
        "h-full",
        "text-gray-800",
        "leading-normal",
        "shadow-none",
        "outline-none",
        "focus:outline-none",
        "focus:ring-0",
        "focus:text-gray-800",
      ];
      const inputSM = [
        ...sharedClasses,
        `${outline ? "px-3" : "px-0"}`,
        `${outline && "pt-1.5 pb-0.5"}`,
        "text-sm",
      ];
      const inputRegular = [
        ...sharedClasses,
        `${outline ? "px-3" : "px-0"}`,
        `${outline && "pt-2.5 pb-1.5"}`,
      ];
      const inputLG = [
        ...sharedClasses,
        `${outline ? "px-3" : "px-0"}`,
        `${outline && "pt-3.5 pb-2.5"}`,
      ];
      const inputFilled = [
        mtInputBorderColor,
        "mt-input",
        "bg-transparent",
        "border-none",
      ];
      const inputOutline = [
        mtInputOutlineColor,
        labelBorderColor,
        "mt-input-outline",
        "bg-transparent",
        "border",
        "border-1",
        "border-gray-300",
        "rounded-lg",
        "focus:border-2",
        `focus:${mtInputOutlineFocusColor}`,
      ];

      if (size === "sm") {
        container.push("h-9");
        inputClasses.push(...inputSM);
      } else if (size === "lg") {
        container.push("h-12");
        inputClasses.push(...inputLG);
      } else {
        container.push("h-11");
        inputClasses.push(...inputRegular);
      }

      outline
        ? inputClasses.push(...inputOutline)
        : inputClasses.push(...inputFilled);
      container = container.join(" ");
      label = label.join(" ");
      inputClasses = inputClasses.join(" ");
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: container,
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "input",
            _objectSpread(
              _objectSpread({}, rest),
              {},
              {
                placeholder: " ",
                className: `${inputClasses} ${
                  error && "mt-input-outline-error"
                } ${success && "mt-input-outline-success"}`,
              }
            )
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "label",
            {
              className: label,
              children: outline
                ? placeholder
                : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "span",
                    {
                      className: `${
                        size === "sm" && "text-sm"
                      } absolute top-1/4 transition-all duration-300`,
                      children: placeholder,
                    }
                  ),
            }
          ),
          error &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "span",
              {
                className: "block mt-1 text-xs text-red-500",
                children: error,
              }
            ),
          success &&
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "span",
              {
                className: "block mt-1 text-xs text-green-500",
                children: success,
              }
            ),
        ],
      });
    }
    Input.defaultProps = {
      color: "lightBlue",
      size: "regular",
      outline: false,
    };

    /***/
  },
};
