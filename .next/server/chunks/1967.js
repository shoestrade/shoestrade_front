exports.id = 1967;
exports.ids = [1967];
exports.modules = {
  /***/ 2313: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ CardFooter;
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

    function CardFooter({ children, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `p-4 ${className}`,
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 3438: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ CardHeader;
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

    const fromColors = {
      blueGray: "from-blue-gray-500",
      gray: "from-gray-500",
      brown: "from-brown-500",
      deepOrange: "from-deep-orange-500",
      orange: "from-orange-500",
      amber: "from-amber-500",
      yellow: "from-yellow-600",
      lime: "from-lime-500",
      lightGreen: "from-light-green-500",
      green: "from-green-500",
      teal: "from-teal-500",
      cyan: "from-cyan-500",
      lightBlue: "from-light-blue-500",
      blue: "from-blue-500",
      indigo: "from-indigo-500",
      deepPurple: "from-deep-purple-500",
      purple: "from-purple-500",
      pink: "from-pink-500",
      red: "from-red-500",
    };
    const toColors = {
      blueGray: "to-blue-gray-700",
      gray: "to-gray-700",
      brown: "to-brown-700",
      deepOrange: "to-deep-orange-700",
      orange: "to-orange-700",
      amber: "to-amber-700",
      yellow: "to-yellow-800",
      lime: "to-lime-700",
      lightGreen: "to-light-green-700",
      green: "to-green-700",
      teal: "to-teal-700",
      cyan: "to-cyan-700",
      lightBlue: "to-light-blue-700",
      blue: "to-blue-700",
      indigo: "to-indigo-700",
      deepPurple: "to-deep-purple-700",
      purple: "to-purple-700",
      pink: "to-pink-700",
      red: "to-red-700",
    };
    const shadowColors = {
      blueGray: "shadow-lg-blue-gray",
      gray: "shadow-lg-gray",
      brown: "shadow-lg-brown",
      deepOrange: "shadow-lg-deep-orange",
      orange: "shadow-lg-orange",
      amber: "shadow-lg-amber",
      yellow: "shadow-lg-yellow",
      lime: "shadow-lg-lime",
      lightGreen: "shadow-lg-light-green",
      green: "shadow-lg-green",
      teal: "shadow-lg-teal",
      cyan: "shadow-lg-cyan",
      lightBlue: "shadow-lg-light-blue",
      blue: "shadow-lg-blue",
      indigo: "shadow-lg-indigo",
      deepPurple: "shadow-lg-deep-purple",
      purple: "shadow-lg-purple",
      pink: "shadow-lg-pink",
      red: "shadow-lg-red",
    };
    const positions = {
      left: "justify-start",
      right: "justify-end",
      center: "justify-center",
    };
    function CardHeader({
      children,
      color,
      size,
      contentPosition,
      iconOnly,
      className,
    }) {
      let headerSize = [];
      const smallHeader = [
        iconOnly ? "w-20" : "w-full",
        "h-20",
        "py-4",
        iconOnly ? "px-4" : "px-8",
        positions[contentPosition],
      ];
      const regularHeader = [
        iconOnly ? "w-24" : "w-full",
        "h-24",
        "py-4",
        iconOnly ? "px-4" : "px-8",
        positions[contentPosition],
      ];
      const largeHeader = [
        iconOnly ? "w-28" : "w-full",
        "h-28",
        "py-4",
        iconOnly ? "px-4" : "px-8",
        positions[contentPosition],
      ];

      if (size === "sm") {
        headerSize.push(...smallHeader);
      } else if (size === "lg") {
        headerSize.push(...largeHeader);
      } else {
        headerSize.push(...regularHeader);
      }

      headerSize = headerSize.join(" ");
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `bg-gradient-to-tr ${fromColors[color]} ${toColors[color]} -mt-10 mb-4 rounded-xl text-white grid items-center ${headerSize} ${shadowColors[color]} ${className}`,
          children: children,
        }
      );
    }
    CardHeader.defaultProps = {
      color: "lightBlue",
      size: "regular",
      contentPosition: "center",
      iconOnly: false,
    };

    /***/
  },

  /***/ 9919: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ CardRow;
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

    function CardRow({ children, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `flex flex-wrap border-b border-gray-200 ${className}`,
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 863: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ CardStatus;
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

    function CardStatus({ title, amount, className }) {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right ${className}`,
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "h5",
            {
              className:
                "text-gray-500 font-light tracking-wide text-base mb-1",
              children: title,
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "span",
            {
              className: "text-3xl text-gray-900",
              children: amount,
            }
          ),
        ],
      });
    }

    /***/
  },

  /***/ 6993: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ CardStatusFooter;
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

    const Colors = {
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
    function CardStatusFooter({ children, color, amount, date, className }) {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `text-sm text-gray-700 pt-4 flex items-center ${className}`,
        children: [
          children,
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "span",
            {
              className: `${Colors[color]} ml-1 mr-2`,
              children: amount,
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "span",
            {
              className: "font-light whitespace-nowrap",
              children: date,
            }
          ),
        ],
      });
    }
    CardStatusFooter.defaultProps = {
      color: "lightBlue",
    };

    /***/
  },
};
