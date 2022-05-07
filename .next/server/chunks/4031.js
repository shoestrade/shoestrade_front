exports.id = 4031;
exports.ids = [4031];
exports.modules = {
  /***/ 5187: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ ButtonCode;
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
    /* harmony import */ var components_Documentation_DocsSnippet_js__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(3085);
    /* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(6445);

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

    function ButtonCode(_ref) {
      let {
          children,
          copyText,
          onCopy,
          buttonType,
          size,
          rounded,
          hasIcon,
          buttonChildren,
          rippleEffect,
          blockLevel,
          withIconOnly,
        } = _ref,
        rest = _objectWithoutProperties(_ref, [
          "children",
          "copyText",
          "onCopy",
          "buttonType",
          "size",
          "rounded",
          "hasIcon",
          "buttonChildren",
          "rippleEffect",
          "blockLevel",
          "withIconOnly",
        ]);

      const { 0: color, 1: setColor } = (0,
      react__WEBPACK_IMPORTED_MODULE_1__.useState)("lightBlue");
      const { 0: type, 1: setType } = (0,
      react__WEBPACK_IMPORTED_MODULE_1__.useState)("react");
      const codeToShow = `import React from "react";
${
  hasIcon
    ? 'import Button from "@material-tailwind/react/Button";\nimport Icon from "@material-tailwind/react/Icon";'
    : 'import Button from "@material-tailwind/react/Button";'
}

export default function Button() {
    return (
        <Button
            color="${color}"
            buttonType="${buttonType}"
            size="${size}"
            rounded={${rounded}}
            ${blockLevel}
            ${withIconOnly}
            ${rippleEffect}
        >
            ${buttonChildren}
        </Button>
    )
}`;
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              components_Documentation_DocsSnippet_js__WEBPACK_IMPORTED_MODULE_2__ /* .default */.Z,
              {
                copyText: copyText,
                onCopy: onCopy,
                activeColor: color,
                activeFramework: type,
                codeToShow: codeToShow,
                onColorClick: (color) => setColor(color),
                onFrameworkClick: (type) => setType(type),
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "div",
                    {
                      className: "flex justify-center",
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ /* .default */.Z,
                          _objectSpread(
                            _objectSpread({}, rest),
                            {},
                            {
                              color: color,
                              buttonType: buttonType,
                              size: size,
                              rounded: rounded,
                              children: children,
                            }
                          )
                        ),
                    }
                  ),
              }
            ),
        }
      );
    }

    /***/
  },

  /***/ 1957: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ LargeHeader;
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

    function LargeHeader(props) {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "h2",
              {
                className: "font-serif font-medium text-xl mb-2 text-gray-900",
                children: props.title,
              }
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "p",
              {
                className: "text-gray-700 mb-4 font-light",
                children: props.description,
              }
            ),
          ],
        }
      );
    }

    /***/
  },
};
