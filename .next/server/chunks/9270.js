exports.id = 9270;
exports.ids = [9270];
exports.modules = {
  /***/ 9041: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Header;
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
    /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(701);
    /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_2__
      );
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(6731);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_3__
      );

    function Header({ title }) {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        next_head__WEBPACK_IMPORTED_MODULE_2___default(),
        {
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "link",
              {
                rel: "canonical",
                href: "https://material-tailwind.com" + router.pathname,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "meta",
              {
                property: "og:url",
                content: "https://material-tailwind.com" + router.pathname,
              }
            ),
            /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
              children: [title, " | Material Tailwind by Creative Tim"],
            }),
          ],
        }
      );
    }

    /***/
  },

  /***/ 5952: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Dropdown;
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
    /* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(7836);
    /* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        _tippyjs_react__WEBPACK_IMPORTED_MODULE_3__
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

    const filledBgColors = {
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
    const filledBgHoverColors = {
      blueGray: "hover:bg-blue-gray-700",
      gray: "hover:bg-gray-700",
      brown: "hover:bg-brown-700",
      deepOrange: "hover:bg-deep-orange-700",
      orange: "hover:bg-orange-700",
      amber: "hover:bg-amber-700",
      yellow: "hover:bg-yellow-700",
      lime: "hover:bg-lime-700",
      lightGreen: "hover:bg-light-green-700",
      green: "hover:bg-green-700",
      teal: "hover:bg-teal-700",
      cyan: "hover:bg-cyan-700",
      lightBlue: "hover:bg-light-blue-700",
      blue: "hover:bg-blue-700",
      indigo: "hover:bg-indigo-700",
      deepPurple: "hover:bg-deep-purple-700",
      purple: "hover:bg-purple-700",
      pink: "hover:bg-pink-700",
      red: "hover:bg-red-700",
    };
    const filledBgFocusColors = {
      blueGray: "focus:bg-blue-gray-400",
      gray: "focus:bg-gray-400",
      brown: "focus:bg-brown-400",
      deepOrange: "focus:bg-deep-orange-400",
      orange: "focus:bg-orange-400",
      amber: "focus:bg-amber-400",
      yellow: "focus:bg-yellow-500",
      lime: "focus:bg-lime-400",
      lightGreen: "focus:bg-light-green-400",
      green: "focus:bg-green-400",
      teal: "focus:bg-teal-400",
      cyan: "focus:bg-cyan-400",
      lightBlue: "focus:bg-light-blue-400",
      blue: "focus:bg-blue-400",
      indigo: "focus:bg-indigo-400",
      deepPurple: "focus:bg-deep-purple-400",
      purple: "focus:bg-purple-400",
      pink: "focus:bg-pink-400",
      red: "focus:bg-red-400",
    };
    const filledBgActiveColors = {
      blueGray: "active:bg-blue-gray-800",
      gray: "active:bg-gray-800",
      brown: "active:bg-brown-800",
      deepOrange: "active:bg-deep-orange-800",
      orange: "active:bg-orange-800",
      amber: "active:bg-amber-800",
      yellow: "active:bg-yellow-800",
      lime: "active:bg-lime-800",
      lightGreen: "active:bg-light-green-800",
      green: "active:bg-green-800",
      teal: "active:bg-teal-800",
      cyan: "active:bg-cyan-800",
      lightBlue: "active:bg-light-blue-800",
      blue: "active:bg-blue-800",
      indigo: "active:bg-indigo-800",
      deepPurple: "active:bg-deep-purple-800",
      purple: "active:bg-purple-800",
      pink: "active:bg-pink-800",
      red: "active:bg-red-800",
    };
    const filledShadowColors = {
      blueGray: "shadow-md-blue-gray",
      gray: "shadow-md-gray",
      brown: "shadow-md-brown",
      deepOrange: "shadow-md-deep-orange",
      orange: "shadow-md-orange",
      amber: "shadow-md-amber",
      yellow: "shadow-md-yellow",
      lime: "shadow-md-lime",
      lightGreen: "shadow-md-light-green",
      green: "shadow-md-green",
      teal: "shadow-md-teal",
      cyan: "shadow-md-cyan",
      lightBlue: "shadow-md-light-blue",
      blue: "shadow-md-blue",
      indigo: "shadow-md-indigo",
      deepPurple: "shadow-md-deep-purple",
      purple: "shadow-md-purple",
      pink: "shadow-md-pink",
      red: "shadow-md-red",
    };
    const filledShadowHoverColors = {
      blueGray: "hover:shadow-lg-blue-gray",
      gray: "hover:shadow-lg-gray",
      brown: "hover:shadow-lg-brown",
      deepOrange: "hover:shadow-lg-deep-orange",
      orange: "hover:shadow-lg-orange",
      amber: "hover:shadow-lg-amber",
      yellow: "hover:shadow-lg-yellow",
      lime: "hover:shadow-lg-lime",
      lightGreen: "hover:shadow-lg-light-green",
      green: "hover:shadow-lg-green",
      teal: "hover:shadow-lg-teal",
      cyan: "hover:shadow-lg-cyan",
      lightBlue: "hover:shadow-lg-light-blue",
      blue: "hover:shadow-lg-blue",
      indigo: "hover:shadow-lg-indigo",
      deepPurple: "hover:shadow-lg-deep-purple",
      purple: "hover:shadow-lg-purple",
      pink: "hover:shadow-lg-pink",
      red: "hover:shadow-lg-red",
    };
    const outlineTextColors = {
      blueGray: "text-blue-gray-500",
      gray: "text-gray-500",
      brown: "text-brown-500",
      deepOrange: "text-deep-orange-500",
      orange: "text-orange-500",
      amber: "text-amber-500",
      yellow: "text-yellow-600",
      lime: "text-lime-500",
      lightGreen: "text-light-green-500",
      green: "text-green-500",
      teal: "text-teal-500",
      cyan: "text-cyan-500",
      lightBlue: "text-light-blue-500",
      blue: "text-blue-500",
      indigo: "text-indigo-500",
      deepPurple: "text-deep-purple-500",
      purple: "text-purple-500",
      pink: "text-pink-500",
      red: "text-red-500",
    };
    const outlineBorderColors = {
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
    const outlineBgHoverColors = {
      blueGray: "hover:bg-blue-gray-50",
      gray: "hover:bg-gray-50",
      brown: "hover:bg-brown-50",
      deepOrange: "hover:bg-deep-orange-50",
      orange: "hover:bg-orange-50",
      amber: "hover:bg-amber-50",
      yellow: "hover:bg-yellow-50",
      lime: "hover:bg-lime-50",
      lightGreen: "hover:bg-light-green-50",
      green: "hover:bg-green-50",
      teal: "hover:bg-teal-50",
      cyan: "hover:bg-cyan-50",
      lightBlue: "hover:bg-light-blue-50",
      blue: "hover:bg-blue-50",
      indigo: "hover:bg-indigo-50",
      deepPurple: "hover:bg-deep-purple-50",
      purple: "hover:bg-purple-50",
      pink: "hover:bg-pink-50",
      red: "hover:bg-red-50",
    };
    const outlineBorderHoverColors = {
      blueGray: "border:border-blue-gray-700",
      gray: "border:border-gray-700",
      brown: "border:border-brown-700",
      deepOrange: "border:border-deep-orange-700",
      orange: "border:border-orange-700",
      amber: "border:border-amber-700",
      yellow: "border:border-yellow-700",
      lime: "border:border-lime-700",
      lightGreen: "border:border-light-green-700",
      green: "border:border-green-700",
      teal: "border:border-teal-700",
      cyan: "border:border-cyan-700",
      lightBlue: "border:border-light-blue-700",
      blue: "border:border-blue-700",
      indigo: "border:border-indigo-700",
      deepPurple: "border:border-deep-purple-700",
      purple: "border:border-purple-700",
      pink: "border:border-pink-700",
      red: "border:border-red-700",
    };
    const outlineTextHoverColors = {
      blueGray: "hover:text-blue-gray-700",
      gray: "hover:text-gray-700",
      brown: "hover:text-brown-700",
      deepOrange: "hover:text-deep-orange-700",
      orange: "hover:text-orange-700",
      amber: "hover:text-amber-700",
      yellow: "hover:text-yellow-700",
      lime: "hover:text-lime-700",
      lightGreen: "hover:text-light-green-700",
      green: "hover:text-green-700",
      teal: "hover:text-teal-700",
      cyan: "hover:text-cyan-700",
      lightBlue: "hover:text-light-blue-700",
      blue: "hover:text-blue-700",
      indigo: "hover:text-indigo-700",
      deepPurple: "hover:text-deep-purple-700",
      purple: "hover:text-purple-700",
      pink: "hover:text-pink-700",
      red: "hover:text-red-700",
    };
    const outlineBgActiveColors = {
      blueGray: "active:bg-blue-gray-100",
      gray: "active:bg-gray-100",
      brown: "active:bg-brown-100",
      deepOrange: "active:bg-deep-orange-100",
      orange: "active:bg-orange-100",
      amber: "active:bg-amber-100",
      yellow: "active:bg-yellow-100",
      lime: "active:bg-lime-100",
      lightGreen: "active:bg-light-green-100",
      green: "active:bg-green-100",
      teal: "active:bg-teal-100",
      cyan: "active:bg-cyan-100",
      lightBlue: "active:bg-light-blue-100",
      blue: "active:bg-blue-100",
      indigo: "active:bg-indigo-100",
      deepPurple: "active:bg-deep-purple-100",
      purple: "active:bg-purple-100",
      pink: "active:bg-pink-100",
      red: "active:bg-red-100",
    };
    function Dropdown(_ref) {
      let {
          children,
          buttonText,
          color,
          buttonType,
          size = "regular",
          placement = "bottom-start",
          rounded,
          block,
          ripple,
          className,
        } = _ref,
        rest = _objectWithoutProperties(_ref, [
          "children",
          "buttonText",
          "color",
          "buttonType",
          "size",
          "placement",
          "rounded",
          "block",
          "ripple",
          "className",
        ]);

      const [dropdownShow, setDropdownShow] =
        react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
      const rippleEffect =
        new (material_ripple_effects__WEBPACK_IMPORTED_MODULE_2___default())(); // Styles

      let classes = [];
      rounded = rounded ? "rounded-full" : "rounded";
      const sharedClasses = [
        block && "w-full",
        "flex",
        "items-center",
        "justify-center",
        "gap-1",
        "rounded-lg",
        "font-bold",
        "outline-none",
        "capitalize",
        "tracking-wider",
        "focus:outline-none",
        "transition-all",
        "duration-300",
        rounded,
      ];
      const buttonFilled = [
        "text-white",
        filledBgColors[color],
        filledBgHoverColors[color],
        filledBgFocusColors[color],
        filledBgActiveColors[color],
        filledShadowColors[color],
        filledShadowHoverColors[color],
      ];
      const buttonOutline = [
        "bg-transparent",
        "border",
        "border-solid",
        "shadow-none",
        outlineTextColors[color],
        outlineBorderColors[color],
        outlineBgHoverColors[color],
        outlineBorderHoverColors[color],
        outlineTextHoverColors[color],
        outlineBgHoverColors[color],
        outlineBgActiveColors[color],
      ];
      const buttonLink = [
        `bg-transparent`,
        outlineTextColors[color],
        outlineBgHoverColors[color],
        outlineTextHoverColors[color],
        outlineBgHoverColors[color],
        outlineBgActiveColors[color],
      ];
      const buttonSM = [
        ...sharedClasses,
        "py-1.5 pl-5 pr-3",
        "text-sm",
        "leading-normal",
      ];
      const buttonRegular = [
        ...sharedClasses,
        "p-2.5 pl-7 pr-5",
        "text-sm",
        "leading-normal",
      ];
      const buttonLG = [
        ...sharedClasses,
        "py-3 pl-8 pr-6",
        "text-base",
        "leading-relaxed",
      ];

      if (size === "sm") {
        classes.push(...buttonSM);
      } else if (size === "lg") {
        classes.push(...buttonLG);
      } else {
        classes.push(...buttonRegular);
      }

      if (buttonType === "outline") {
        classes.push(...buttonOutline);
      } else if (buttonType === "link") {
        classes.push(...buttonLink);
      } else {
        classes.push(...buttonFilled);
      }

      classes = classes.join(" ");
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              _tippyjs_react__WEBPACK_IMPORTED_MODULE_3___default(),
              {
                content:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "div",
                    {
                      className: `bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 p-2 overflow-hidden transition-all duration-500`,
                      style: {
                        minWidth: "10rem",
                      },
                      children: children,
                    }
                  ),
                animation: "scale",
                trigger: "click",
                offset: [0, 0],
                placement: placement,
                interactive: true,
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "button",
                  _objectSpread(
                    _objectSpread({}, rest),
                    {},
                    {
                      className: `${classes} ${className}`,
                      type: "button",
                      onClick: () => setDropdownShow(!dropdownShow),
                      onMouseUp: (e) => {
                        ripple === "dark" && rippleEffect.create(e, "dark");
                        ripple === "light" && rippleEffect.create(e, "light");
                      },
                      children: [
                        buttonText,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          "span",
                          {
                            className:
                              "material-icons text-lg leading-none align-middle",
                            children: dropdownShow
                              ? "arrow_drop_up"
                              : "arrow_drop_down",
                          }
                        ),
                      ],
                    }
                  )
                ),
              }
            ),
        }
      );
    }
    Dropdown.defaultProps = {
      color: "lightBlue",
      buttonType: "filled",
      size: "regular",
      placement: "bottom-start",
      rounded: false,
      block: false,
    };

    /***/
  },

  /***/ 4929: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ DropdownLink;
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
    function DropdownLink(_ref) {
      let { children, color, ripple } = _ref,
        rest = _objectWithoutProperties(_ref, ["children", "color", "ripple"]);

      const rippleEffect =
        new (material_ripple_effects__WEBPACK_IMPORTED_MODULE_2___default())();
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "a",
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
    DropdownLink.defaultProps = {
      color: "lightBlue",
    };

    /***/
  },

  /***/ 8300: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Icon;
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
    /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(4229);
    /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_2__
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
      white: "text-white",
      blueGray: "text-blue-gray-500",
      gray: "text-gray-500",
      brown: "text-brown-500",
      deepOrange: "text-deep-orange-500",
      orange: "text-orange-500",
      amber: "text-amber-500",
      yellow: "text-yellow-600",
      lime: "text-lime-500",
      lightGreen: "text-light-green-500",
      green: "text-green-500",
      teal: "text-teal-500",
      cyan: "text-cyan-500",
      lightBlue: "text-light-blue-500",
      blue: "text-blue-500",
      indigo: "text-indigo-500",
      deepPurple: "text-deep-purple-500",
      purple: "text-purple-500",
      pink: "text-pink-500",
      red: "text-red-500",
    };
    const sizes = {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    };
    function Icon(_ref) {
      let { family, name, color, size } = _ref,
        rest = _objectWithoutProperties(_ref, [
          "family",
          "name",
          "color",
          "size",
        ]);

      let iconUI;

      if (family === "material-icons") {
        iconUI =
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "span",
            _objectSpread(
              _objectSpread({}, rest),
              {},
              {
                className: `${family} ${colors[color]} ${
                  size ? sizes[size] : "text-base"
                } leading-none`,
                children: name,
              }
            )
          );
      } else if (family === "font-awesome") {
        iconUI =
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "i",
            _objectSpread(
              _objectSpread({}, rest),
              {},
              {
                className: `${name} ${colors[color]} ${sizes[size]}`,
              }
            )
          );
      }

      return iconUI;
    }
    Icon.defaultProps = {
      family: "material-icons",
      size: "base",
    };
    Icon.propTypes = {
      family:
        prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,
      name: prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,
      color: prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,
      size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,
    };

    /***/
  },

  /***/ 4743: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Nav;
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

    function Nav({ children, leftSide, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "ul",
        {
          className: `flex lg:items-center flex-col lg:flex-row list-none ${
            leftSide ? "mr-auto" : "ml-auto"
          } ${className}`,
          children: children,
        }
      );
    }
    Nav.defaultProps = {
      leftSide: false,
    };

    /***/
  },

  /***/ 4158: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ NavItem;
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

    function NavItem(_ref) {
      let { children, active, ripple } = _ref,
        rest = _objectWithoutProperties(_ref, ["children", "active", "ripple"]);

      const rippleEffect =
        new (material_ripple_effects__WEBPACK_IMPORTED_MODULE_2___default())();
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "li",
        _objectSpread(
          _objectSpread({}, rest),
          {},
          {
            className: `${active === "dark" && "bg-black bg-opacity-20"} ${
              active === "light" && "bg-white bg-opacity-20"
            } px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg`,
            onMouseUp: (e) => {
              ripple === "dark" && rippleEffect.create(e, "dark");
              ripple === "light" && rippleEffect.create(e, "light");
            },
            children: children,
          }
        )
      );
    }

    /***/
  },

  /***/ 9492: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ NavLink;
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

    function NavLink(_ref) {
      let { children, active, ripple } = _ref,
        rest = _objectWithoutProperties(_ref, ["children", "active", "ripple"]);

      const rippleEffect =
        new (material_ripple_effects__WEBPACK_IMPORTED_MODULE_2___default())();
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "a",
        _objectSpread(
          _objectSpread({}, rest),
          {},
          {
            className: `${active === "dark" && "bg-black bg-opacity-20"} ${
              active === "light" && "bg-white bg-opacity-20"
            } px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg`,
            onMouseUp: (e) => {
              ripple === "dark" && rippleEffect.create(e, "dark");
              ripple === "light" && rippleEffect.create(e, "light");
            },
            children: children,
          }
        )
      );
    }

    /***/
  },

  /***/ 3004: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Navbar;
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
    function Navbar({ children, color, navbar, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "nav",
              {
                className: `flex flex-wrap items-center justify-between py-2.5 px-3 mb-3 ${
                  colors[color]
                } ${!navbar && "rounded-lg"} ${className}`,
                children: children,
              }
            ),
        }
      );
    }
    Navbar.defaultProps = {
      color: "lightBlue",
      navbar: false,
    };

    /***/
  },

  /***/ 158: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ NavbarBrand;
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

    const colors = {
      white: "text-white",
      blueGray: "text-blue-gray-900",
      gray: "text-gray-900",
      brown: "text-brown-500",
      deepOrange: "text-deep-orange-500",
      orange: "text-orange-500",
      amber: "text-amber-500",
      yellow: "text-yellow-600",
      lime: "text-lime-500",
      lightGreen: "text-light-green-500",
      green: "text-green-500",
      teal: "text-teal-500",
      cyan: "text-cyan-500",
      lightBlue: "text-light-blue-500",
      blue: "text-blue-500",
      indigo: "text-indigo-500",
      deepPurple: "text-deep-purple-500",
      purple: "text-purple-500",
      pink: "text-pink-500",
      red: "text-red-500",
    };
    function NavbarBrand({ children, color }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "span",
        {
          className: `text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase ${colors[color]}`,
          children: children,
        }
      );
    }
    NavbarBrand.defaultProps = {
      color: "white",
    };

    /***/
  },

  /***/ 9330: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ NavbarCollapse;
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

    function NavbarCollapse({ children, className, open }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `lg:flex flex-grow items-center ${
            open ? "block" : "hidden"
          } ${className}`,
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 1065: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ NavbarContainer;
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

    function NavbarContainer({ children, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between ${className}`,
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 6265: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ NavbarToggler;
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
      white: "bg-white",
      blueGray: "bg-blue-gray-500",
      gray: "bg-gray-700",
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
    const bgHoverColors = {
      white: "hover:bg-white hover:bg-opacity-20",
      blueGray: "hover:bg-blue-gray-50",
      gray: "hover:bg-gray-50",
      brown: "hover:bg-brown-50",
      deepOrange: "hover:bg-deep-orange-50",
      orange: "hover:bg-orange-50",
      amber: "hover:bg-amber-50",
      yellow: "hover:bg-yellow-50",
      lime: "hover:bg-lime-50",
      lightGreen: "hover:bg-light-green-50",
      green: "hover:bg-green-50",
      teal: "hover:bg-teal-50",
      cyan: "hover:bg-cyan-50",
      lightBlue: "hover:bg-light-blue-50",
      blue: "hover:bg-blue-50",
      indigo: "hover:bg-indigo-50",
      deepPurple: "hover:bg-deep-purple-50",
      purple: "hover:bg-purple-50",
      pink: "hover:bg-pink-50",
      red: "hover:bg-red-50",
    };
    function NavbarToggler(_ref) {
      let { color, ripple } = _ref,
        rest = _objectWithoutProperties(_ref, ["color", "ripple"]);

      const rippleEffect =
        new (material_ripple_effects__WEBPACK_IMPORTED_MODULE_2___default())();
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "button",
        _objectSpread(
          _objectSpread({}, rest),
          {},
          {
            className: `cursor-pointer text-xl leading-none py-1 px-1.5 rounded-full border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none ${bgHoverColors[color]} transition-all duration-300`,
            type: "button",
            onMouseUp: (e) => {
              ripple === "dark" && rippleEffect.create(e, "dark");
              ripple === "light" && rippleEffect.create(e, "light");
            },
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                "span",
                {
                  className: `block relative w-6 h-px rounded-sm ${colors[color]}`,
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                "span",
                {
                  className: `block relative w-6 h-px rounded-sm ${colors[color]} mt-1`,
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                "span",
                {
                  className: `block relative w-6 h-px rounded-sm ${colors[color]} mt-1`,
                }
              ),
            ],
          }
        )
      );
    }
    NavbarToggler.defaultProps = {
      color: "white",
    };

    /***/
  },

  /***/ 9145: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ NavbarWrapper;
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

    function NavbarWrapper({ children, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start ${className}`,
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 4453: /***/ function () {
    /* (ignored) */
    /***/
  },
};
