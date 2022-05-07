(function () {
  var exports = {};
  exports.id = 4820;
  exports.ids = [4820];
  exports.modules = {
    /***/ 591: /***/ function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: function () {
          return /* binding */ _error;
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
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(6731);
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_2__
        );

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

      class _error extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "componentDidMount", () => {
            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(
              "/presentation"
            );
          });
        }

        render() {
          return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "div",
            {}
          );
        }
      }

      /***/
    },

    /***/ 6731: /***/ function (module) {
      "use strict";
      module.exports = require("next/router");

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
  };
  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = function (moduleId) {
    return __webpack_require__((__webpack_require__.s = moduleId));
  };
  var __webpack_exports__ = __webpack_exec__(591);
  module.exports = __webpack_exports__;
})();
