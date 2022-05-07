exports.id = 9556;
exports.ids = [9556];
exports.modules = {
  /***/ 5910: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ IndexNavbar;
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
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1664);
    /* harmony import */ var components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(3004);
    /* harmony import */ var components_Navbar_NavbarContainer__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(1065);
    /* harmony import */ var components_Navbar_NavbarWrapper__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(9145);
    /* harmony import */ var components_Navbar_NavbarBrand__WEBPACK_IMPORTED_MODULE_6__ =
      __webpack_require__(158);
    /* harmony import */ var components_Navbar_NavbarToggler__WEBPACK_IMPORTED_MODULE_7__ =
      __webpack_require__(6265);
    /* harmony import */ var components_Navbar_NavbarCollapse__WEBPACK_IMPORTED_MODULE_8__ =
      __webpack_require__(9330);
    /* harmony import */ var components_Nav_Nav__WEBPACK_IMPORTED_MODULE_9__ =
      __webpack_require__(4743);
    /* harmony import */ var components_Nav_NavItem__WEBPACK_IMPORTED_MODULE_10__ =
      __webpack_require__(4158);
    /* harmony import */ var components_Nav_NavLink__WEBPACK_IMPORTED_MODULE_11__ =
      __webpack_require__(9492);
    /* harmony import */ var components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_12__ =
      __webpack_require__(5952);
    /* harmony import */ var components_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_13__ =
      __webpack_require__(4929);
    /* harmony import */ var components_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ =
      __webpack_require__(8300);

    function IndexNavbar() {
      const { 0: openNavbar, 1: setOpenNavbar } = (0,
      react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ /* .default */.Z,
        {
          color: "white",
          navbar: true,
          children: /*#__PURE__*/ (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            components_Navbar_NavbarContainer__WEBPACK_IMPORTED_MODULE_4__ /* .default */.Z,
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  components_Navbar_NavbarWrapper__WEBPACK_IMPORTED_MODULE_5__ /* .default */.Z,
                  {
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_2__.default,
                        {
                          href: "/",
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              "a",
                              {
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    components_Navbar_NavbarBrand__WEBPACK_IMPORTED_MODULE_6__ /* .default */.Z,
                                    {
                                      color: "gray",
                                      children: "Shoes Trade",
                                    }
                                  ),
                              }
                            ),
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        components_Navbar_NavbarToggler__WEBPACK_IMPORTED_MODULE_7__ /* .default */.Z,
                        {
                          onClick: () => setOpenNavbar(!openNavbar),
                          ripple: "dark",
                          color: "gray",
                        }
                      ),
                    ],
                  }
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  components_Navbar_NavbarCollapse__WEBPACK_IMPORTED_MODULE_8__ /* .default */.Z,
                  {
                    open: openNavbar,
                    children: /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      components_Nav_Nav__WEBPACK_IMPORTED_MODULE_9__ /* .default */.Z,
                      {
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_2__.default,
                            {
                              href: "/documentation/quick-start",
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  "a",
                                  {
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        components_Nav_NavItem__WEBPACK_IMPORTED_MODULE_10__ /* .default */.Z,
                                        {
                                          ripple: "dark",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                            "p",
                                            {
                                              className:
                                                "text-gray-900 flex items-center",
                                              children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                  components_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ /* .default */.Z,
                                                  {
                                                    name: "description",
                                                    size: "2xl",
                                                  }
                                                ),
                                                "\xA0Docs",
                                              ],
                                            }
                                          ),
                                        }
                                      ),
                                  }
                                ),
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            next_link__WEBPACK_IMPORTED_MODULE_2__.default,
                            {
                              href: "/components",
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  "a",
                                  {
                                    children:
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        components_Nav_NavItem__WEBPACK_IMPORTED_MODULE_10__ /* .default */.Z,
                                        {
                                          ripple: "dark",
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                            "p",
                                            {
                                              className:
                                                "text-gray-900 flex items-center",
                                              children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                  components_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ /* .default */.Z,
                                                  {
                                                    name: "apps",
                                                    size: "2xl",
                                                  }
                                                ),
                                                "\xA0Components",
                                              ],
                                            }
                                          ),
                                        }
                                      ),
                                  }
                                ),
                            }
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_12__ /* .default */.Z,
                            {
                              color: "transparent",
                              buttonType: "link",
                              buttonText:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                  {
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                      "p",
                                      {
                                        className:
                                          "text-gray-900 flex items-center uppercase text-xs",
                                        children: [
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            components_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ /* .default */.Z,
                                            {
                                              name: "view_carousel",
                                              size: "2xl",
                                            }
                                          ),
                                          "\xA0Templates",
                                        ],
                                      }
                                    ),
                                  }
                                ),
                              ripple: "dark",
                              style: {
                                justifyContent: "start",
                                padding: "1.05rem 1.2rem",
                                fontWeight: 500,
                              },
                              children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  components_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_13__ /* .default */.Z,
                                  {
                                    href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/landing",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    color: "lightBlue",
                                    ripple: "light",
                                    children: "Landing",
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  components_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_13__ /* .default */.Z,
                                  {
                                    href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/profile",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    color: "lightBlue",
                                    ripple: "light",
                                    children: "Profile",
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  components_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_13__ /* .default */.Z,
                                  {
                                    href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/login",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    color: "lightBlue",
                                    ripple: "light",
                                    children: "Login",
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  components_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_13__ /* .default */.Z,
                                  {
                                    href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/register",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    color: "lightBlue",
                                    ripple: "light",
                                    children: "Register",
                                  }
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  components_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_13__ /* .default */.Z,
                                  {
                                    href: "https://demos.creative-tim.com/material-tailwind-dashboard-react/#/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    color: "lightBlue",
                                    ripple: "light",
                                    children: "Dashboard",
                                  }
                                ),
                              ],
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            components_Nav_NavLink__WEBPACK_IMPORTED_MODULE_11__ /* .default */.Z,
                            {
                              href: "https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind",
                              target: "_blank",
                              rel: "noreferrer",
                              ripple: "dark",
                              children: /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                "div",
                                {
                                  className: "text-gray-900 flex items-center",
                                  children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      components_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ /* .default */.Z,
                                      {
                                        family: "font-awesome",
                                        name: "fab fa-github",
                                        size: "xl",
                                      }
                                    ),
                                    "\xA0Github",
                                  ],
                                }
                              ),
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            components_Nav_NavLink__WEBPACK_IMPORTED_MODULE_11__ /* .default */.Z,
                            {
                              href: "https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind",
                              target: "_blank",
                              rel: "noreferrer",
                              ripple: "dark",
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  "div",
                                  {
                                    className: "text-gray-900",
                                    children: "Issues",
                                  }
                                ),
                            }
                          ),
                        ],
                      }
                    ),
                  }
                ),
              ],
            }
          ),
        }
      );
    }

    /***/
  },

  /***/ 6373: /***/ function (module) {
    module.exports =
      "/_next/static/images/material-tailwind-logo-5ef8a2a5e2cff5cd644d1fdaa926a098.png";

    /***/
  },
};
