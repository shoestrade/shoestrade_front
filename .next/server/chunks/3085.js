exports.id = 3085;
exports.ids = [3085];
exports.modules = {
  /***/ 3085: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ DocsSnippet;
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
    /* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(7424);
    /* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__
      );
    /* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(328);
    /* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__
      );
    /* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(2725);
    /* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__
      );

    const colors = [
      "blue-gray",
      "gray",
      "brown",
      "deep-orange",
      "orange",
      "amber",
      "yellow",
      "lime",
      "light-green",
      "green",
      "teal",
      "cyan",
      "light-blue",
      "blue",
      "indigo",
      "deep-purple",
      "purple",
      "pink",
      "red",
    ];
    const elementColors = [
      "blueGray",
      "gray",
      "brown",
      "deepOrange",
      "orange",
      "amber",
      "yellow",
      "lime",
      "lightGreen",
      "green",
      "teal",
      "cyan",
      "lightBlue",
      "blue",
      "indigo",
      "deepPurple",
      "purple",
      "pink",
      "red",
    ];
    const buttons = /* unused pure expression or super */ null && [
      "html",
      "javascript",
      "react",
      "vue",
      "angular",
    ];
    function DocsSnippet({
      children,
      activeColor,
      activeFramework,
      onColorClick,
      onFrameworkClick,
      onCopy,
      codeToShow,
      copyText,
    }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children: /*#__PURE__*/ (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              activeColor
                ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "div",
                    {
                      id: "colors",
                      className:
                        "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                      style: {
                        width: "100%",
                        bottom: "-14px",
                      },
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          "div",
                          {
                            className:
                              "flex flew-wrap justify-center items-center bg-white px-2",
                            children: colors.map((prop, key) => {
                              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                "span",
                                {
                                  className: `cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-${prop}${
                                    activeColor === elementColors[key]
                                      ? `${
                                          prop === "yellow" ? "-600" : "-500"
                                        } shadow-md`
                                      : "-200"
                                  }`,
                                  onClick: () => {
                                    onColorClick(elementColors[key]);
                                    onCopy(false);
                                  },
                                },
                                key
                              );
                            }),
                          }
                        ),
                    }
                  )
                : null,
              children,
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__.CopyToClipboard,
                    {
                      text: codeToShow,
                      onCopy: () => onCopy(true),
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          "button",
                          {
                            className:
                              "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                            type: "button",
                            children: copyText,
                          }
                        ),
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__.Prism,
                    {
                      language: "jsx",
                      style:
                        react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__.a11yDark,
                      children: codeToShow,
                    }
                  ),
                ],
              }),
            ],
          }),
        }
      );
    }

    /***/
  },
};
