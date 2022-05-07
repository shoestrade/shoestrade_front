exports.id = 3209;
exports.ids = [3209];
exports.modules = {
  /***/ 3209: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Progress;
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

    const wrapperBgColors = {
      blueGray: "bg-blue-gray-200",
      gray: "bg-gray-200",
      brown: "bg-brown-200",
      deepOrange: "bg-deep-orange-200",
      orange: "bg-orange-200",
      amber: "bg-amber-200",
      yellow: "bg-yellow-200",
      lime: "bg-lime-200",
      lightGreen: "bg-light-green-200",
      green: "bg-green-200",
      teal: "bg-teal-200",
      cyan: "bg-cyan-200",
      lightBlue: "bg-light-blue-200",
      blue: "bg-blue-200",
      indigo: "bg-indigo-200",
      deepPurple: "bg-deep-purple-200",
      purple: "bg-purple-200",
      pink: "bg-pink-200",
      red: "bg-red-200",
    };
    const bgColors = {
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
    function Progress({ color, value, percentage }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "div",
              {
                className: `overflow-hidden ${
                  percentage ? "h-6" : "h-2"
                } flex rounded ${wrapperBgColors[color]}`,
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "div",
                    {
                      style: {
                        width: `${value}%`,
                      },
                      className: `flex justify-center items-center rounded text-xs font-medium ${bgColors[color]} text-white`,
                      children: percentage ? `${value}% Completed` : "",
                    }
                  ),
              }
            ),
        }
      );
    }
    Progress.defaultProps = {
      color: "lightBlue",
      percentage: false,
    };

    /***/
  },
};
