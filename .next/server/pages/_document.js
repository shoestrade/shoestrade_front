(function () {
  var exports = {};
  exports.id = 660;
  exports.ids = [660];
  exports.modules = {
    /***/ 8609: /***/ function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: function () {
          return /* binding */ CustomDocument;
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
      /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(6859);

      // ---------------------------------------------

      class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__.default {
        render() {
          return /*#__PURE__*/ (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            next_document__WEBPACK_IMPORTED_MODULE_2__.Html,
            {
              lang: "en-US",
              style: {
                scrollBehavior: "smooth !important",
              },
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  next_document__WEBPACK_IMPORTED_MODULE_2__.Head,
                  {
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        "script",
                        {
                          dangerouslySetInnerHTML: {
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KB2WKJS');`,
                          },
                        }
                      ),
                  }
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                  className: "text-gray-700 antialiased",
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      "noscript",
                      {
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            "iframe",
                            {
                              title: "google-tag-manage",
                              src: "https://www.googletagmanager.com/ns.html?id=GTM-KB2WKJS",
                              height: "0",
                              width: "0",
                              style: {
                                display: "none",
                                visibility: "hidden",
                              },
                            }
                          ),
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      next_document__WEBPACK_IMPORTED_MODULE_2__.Main,
                      {}
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript,
                      {}
                    ),
                  ],
                }),
              ],
            }
          );
        }
      }

      /***/
    },

    /***/ 227: /***/ function (module) {
      "use strict";
      module.exports = require("next/dist/next-server/lib/constants.js");

      /***/
    },

    /***/ 3932: /***/ function (module) {
      "use strict";
      module.exports = require("next/dist/next-server/lib/document-context.js");

      /***/
    },

    /***/ 816: /***/ function (module) {
      "use strict";
      module.exports = require("next/dist/next-server/lib/head-manager-context.js");

      /***/
    },

    /***/ 7579: /***/ function (module) {
      "use strict";
      module.exports = require("next/dist/next-server/lib/utils.js");

      /***/
    },

    /***/ 6171: /***/ function (module) {
      "use strict";
      module.exports = require("next/dist/next-server/server/get-page-files.js");

      /***/
    },

    /***/ 5105: /***/ function (module) {
      "use strict";
      module.exports = require("next/dist/next-server/server/utils.js");

      /***/
    },

    /***/ 4229: /***/ function (module) {
      "use strict";
      module.exports = require("prop-types");

      /***/
    },

    /***/ 9297: /***/ function (module) {
      "use strict";
      module.exports = require("react");

      /***/
    },

    /***/ 5282: /***/ function (module) {
      "use strict";
      module.exports = require("react/jsx-runtime");

      /***/
    },

    /***/ 1168: /***/ function (module) {
      "use strict";
      module.exports = require("styled-jsx/server");

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = function (moduleId) {
    return __webpack_require__((__webpack_require__.s = moduleId));
  };
  var __webpack_exports__ = __webpack_require__.X(0, [6859], function () {
    return __webpack_exec__(8609);
  });
  module.exports = __webpack_exports__;
})();
