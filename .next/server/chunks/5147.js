exports.id = 5147;
exports.ids = [5147];
exports.modules = {
  /***/ 84: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Modal;
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

    function Modal({ children, size, active, toggler }) {
      let modalSize;

      if (size === "sm") {
        modalSize = "max-w-sm";
      } else if (size === "lg") {
        modalSize = "max-w-6xl";
      } else {
        modalSize = "max-w-3xl";
      }

      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "div",
              {
                className: `${
                  active
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                } grid place-items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500`,
                onClick: toggler,
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "div",
                    {
                      className: `transform ${
                        active
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-10"
                      } w-auto my-6 mx-auto ${modalSize} transition-all duration-500`,
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          "div",
                          {
                            className: `border-0 p-6 ${
                              size === "lg"
                                ? "rounded-xl shadow-xl"
                                : "rounded-lg shadow-lg"
                            } flex flex-col w-full bg-white outline-none focus:outline-none`,
                            onClick: (e) => e.stopPropagation(),
                            children: children,
                          }
                        ),
                    }
                  ),
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "div",
              {
                className: `${
                  active
                    ? "opacity-25 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                } fixed inset-0 z-40 bg-black transition-all duration-500`,
              }
            ),
          ],
        }
      );
    }
    Modal.defaultProps = {
      size: "regular",
    };

    /***/
  },

  /***/ 7541: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ ModalBody;
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

    function ModalBody({ children }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: "relative flex-auto mb-6",
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 2759: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ ModalFooter;
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

    function ModalFooter({ children }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: "flex items-center justify-end gap-4",
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 5148: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ ModalHeader;
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

    function ModalHeader({ children, toggler }) {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-between mb-6",
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "h5",
            {
              className: "text-gray-900 text-2xl font-bold mt-0 mb-0",
              children: children,
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "button",
            {
              className:
                "p-1 bg-transparent absolute top-2 right-4 text-gray-900 text-3xl leading-none outline-none focus:outline-none",
              onClick: toggler,
              children:
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  "span",
                  {
                    className: "text-gray-900 text-3xl block",
                    children: "\xD7",
                  }
                ),
            }
          ),
        ],
      });
    }

    /***/
  },
};
