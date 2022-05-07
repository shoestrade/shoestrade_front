exports.id = 4777;
exports.ids = [4777];
exports.modules = {
  /***/ 7265: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ DropdownCode;
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
    /* harmony import */ var components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(5952);
    /* harmony import */ var components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(4030);
    /* harmony import */ var components_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(4929);
    /* harmony import */ var components_Documentation_DocsSnippet_js__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(3085);

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

    function DropdownCode(_ref) {
      let {
          children,
          copyText,
          onCopy,
          buttonType,
          size,
          rounded,
          placement,
          buttonText,
          rippleEffect,
          blockLevel,
        } = _ref,
        rest = _objectWithoutProperties(_ref, [
          "children",
          "copyText",
          "onCopy",
          "buttonType",
          "size",
          "rounded",
          "placement",
          "buttonText",
          "rippleEffect",
          "blockLevel",
        ]);

      const { 0: color, 1: setColor } = (0,
      react__WEBPACK_IMPORTED_MODULE_1__.useState)("lightBlue");
      const { 0: type, 1: setType } = (0,
      react__WEBPACK_IMPORTED_MODULE_1__.useState)("react");
      const codeToShow = `import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"

export default function Dropdown() {
    return (
        <Dropdown
            color="${color}"
            placement="${placement}"
            buttonText="${buttonText}"
            buttonType="${buttonType}"
            size="${size}"
            rounded={${rounded}}
            ${blockLevel}
            ${rippleEffect}
        >
            <DropdownItem color="${color}" ripple="light">
                Action
            </DropdownItem>
            <DropdownLink
                href="#"
                color={color}
                ripple="light"
                onClick={(e) => e.preventDefault()}
            >
                Another Action
            </DropdownLink>
            <DropdownItem color="${color}" ripple="light">
                Something else
            </DropdownItem>
        </Dropdown>
    )
}`;
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              components_Documentation_DocsSnippet_js__WEBPACK_IMPORTED_MODULE_5__ /* .default */.Z,
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
                      className:
                        blockLevel === "block={true}"
                          ? "w-full"
                          : "flex justify-center ",
                      children: /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ /* .default */.Z,
                        _objectSpread(
                          _objectSpread({}, rest),
                          {},
                          {
                            color: color,
                            placement: placement,
                            buttonText: buttonText,
                            buttonType: buttonType,
                            size: size,
                            rounded: rounded,
                            children: [
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_3__ /* .default */.Z,
                                {
                                  color: color,
                                  ripple: "light",
                                  children: "Action",
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                components_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_4__ /* .default */.Z,
                                {
                                  href: "#",
                                  color: color,
                                  ripple: "light",
                                  onClick: (e) => e.preventDefault(),
                                  children: "Another Action",
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_3__ /* .default */.Z,
                                {
                                  color: color,
                                  ripple: "light",
                                  children: "Something Else",
                                }
                              ),
                            ],
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
