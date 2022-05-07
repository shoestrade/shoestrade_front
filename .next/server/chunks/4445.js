exports.id = 4445;
exports.ids = [4445];
exports.modules = {
  /***/ 7262: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
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
    /* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(7836);
    /* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        _tippyjs_react__WEBPACK_IMPORTED_MODULE_2__
      );
    /* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(973);
    /* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        tippy_js__WEBPACK_IMPORTED_MODULE_3__
      );

    const Popover = /*#__PURE__*/ (0,
    react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
      ({ children, placement }, ref) => {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          _tippyjs_react__WEBPACK_IMPORTED_MODULE_2___default(),
          {
            content: children,
            placement: placement,
            reference: ref,
            trigger: "click",
            animation: "shift-away",
            arrow: tippy_js__WEBPACK_IMPORTED_MODULE_3__.roundArrow,
            className: "arrow-light",
            interactive: true,
          }
        );
      }
    );
    Popover.defaultProps = {
      placement: "top",
    };
    /* harmony default export */ __webpack_exports__["Z"] = Popover;

    /***/
  },

  /***/ 7520: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ PopoverHeader;
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

    function PopoverHeader({ children, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `text-gray-700 font-normal px-4 pb-4 ${className}`,
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 4165: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ PopoverContainer;
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

    function PopoverContainer({ children, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-xl ${className}`,
          children: children,
        }
      );
    }

    /***/
  },

  /***/ 9743: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ PopoverHeader;
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

    function PopoverHeader({ children, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        "div",
        {
          className: `text-gray-900 p-4 pb-2 uppercase font-bold ${className}`,
          children: children,
        }
      );
    }

    /***/
  },
};
