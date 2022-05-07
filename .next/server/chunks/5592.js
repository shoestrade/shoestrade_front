exports.id = 5592;
exports.ids = [5592];
exports.modules = {
  /***/ 2830: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: function () {
        return /* binding */ Container;
      },
    });

    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(5282);
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(9297);
    var external_react_default =
      /*#__PURE__*/ __webpack_require__.n(external_react_); // CONCATENATED MODULE: ./routes.js
    const routes = [
      {
        name: "Getting Started",
        icon: "fas fa-rocket",
        path: "/documentation/quick-start",
        routes: [
          {
            path: "/documentation/license",
            name: "License",
          },
          {
            path: "/documentation/quick-start",
            name: "Quick Start",
          },
          {
            path: "/documentation/what-is-tailwind-css",
            name: "What is Tailwind CSS",
          },
        ],
      },
      {
        name: "React.js Components",
        icon: "fab fa-react",
        path: "/documentation/react/alerts",
        routes: [
          {
            path: "/documentation/react/alerts",
            name: "Alerts",
          },
          {
            name: "Buttons",
            state: "reactButtonsState",
            subRoutes: [
              {
                path: "/documentation/react/buttons/filled",
                name: "Filled",
              },
              {
                path: "/documentation/react/buttons/outline",
                name: "Outline",
              },
              {
                path: "/documentation/react/buttons/link",
                name: "Link",
              },
            ],
          },
          {
            path: "/documentation/react/cards",
            name: "Cards",
          },
          {
            path: "/documentation/react/checkbox",
            name: "Checkbox",
          },
          {
            name: "Dropdowns",
            state: "reactDropdownsState",
            subRoutes: [
              {
                path: "/documentation/react/dropdowns/filled",
                name: "Filled",
              },
              {
                path: "/documentation/react/dropdowns/outline",
                name: "Outline",
              },
              {
                path: "/documentation/react/dropdowns/link",
                name: "Link",
              },
            ],
          },
          {
            name: "Dropups",
            state: "reactDropupsState",
            subRoutes: [
              {
                path: "/documentation/react/dropups/filled",
                name: "Filled",
              },
              {
                path: "/documentation/react/dropups/outline",
                name: "Outline",
              },
              {
                path: "/documentation/react/dropups/link",
                name: "Link",
              },
            ],
          },
          {
            path: "/documentation/react/images",
            name: "Images",
          },
          {
            path: "/documentation/react/inputs",
            name: "Inputs",
          },
          {
            path: "/documentation/react/labels",
            name: "Labels",
          },
          {
            path: "/documentation/react/menus",
            name: "Menus",
          },
          {
            path: "/documentation/react/modals",
            name: "Modals",
          },
          {
            path: "/documentation/react/navbars",
            name: "Navbars",
          },
          {
            path: "/documentation/react/paginations",
            name: "Paginations",
          },
          {
            path: "/documentation/react/popovers",
            name: "Popovers",
          },
          {
            path: "/documentation/react/progressbars",
            name: "Progressbars",
          },
          {
            path: "/documentation/react/radioButton",
            name: "Radio Button",
          },
          {
            name: "Tabs",
            state: "reactTabsState",
            subRoutes: [
              {
                path: "/documentation/react/tabs/text",
                name: "Text",
              },
              {
                path: "/documentation/react/tabs/icon",
                name: "Icon",
              },
            ],
          },
          {
            path: "/documentation/react/textareas",
            name: "Text Areas",
          },
          {
            path: "/documentation/react/tooltips",
            name: "Tooltips",
          },
          {
            name: "Typography",
            state: "reactTypographyState",
            subRoutes: [
              {
                path: "/documentation/react/typography/headings",
                name: "Headings",
              },
              {
                path: "/documentation/react/typography/paragraph",
                name: "Paragraph",
              },
              {
                path: "/documentation/react/typography/leadText",
                name: "Lead Text",
              },
              {
                path: "/documentation/react/typography/quote",
                name: "Quote",
              },
              {
                path: "/documentation/react/typography/small",
                name: "Small",
              },
            ],
          },
        ],
      },
    ];
    /* harmony default export */ var routes_0 = routes;
    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(1664);
    // EXTERNAL MODULE: external "next/router"
    var router_ = __webpack_require__(6731); // CONCATENATED MODULE: ./components/Documentation/Sidebar.js
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

    class Sidebar extends external_react_default().Component {
      constructor(props) {
        super(props);

        _defineProperty(this, "getCollapseStates", (routes) => {
          let initialState = {};
          routes &&
            routes.map((prop, key) => {
              if (prop.subRoutes) {
                initialState = _objectSpread(
                  _objectSpread(
                    {
                      [prop.state]: this.getCollapseInitialState(
                        prop.subRoutes
                      ),
                    },
                    this.getCollapseStates(prop.subRoutes)
                  ),
                  initialState
                );
              } else if (prop.routes) {
                initialState = _objectSpread(
                  _objectSpread({}, this.getCollapseStates(prop.routes)),
                  initialState
                );
              }

              return null;
            });
          return initialState;
        });

        _defineProperty(this, "getRoutes", (routes) => {
          return routes.map((prop, key) => {
            if (prop.disabled) {
              return /*#__PURE__*/ jsx_runtime_.jsx(
                "li",
                {
                  children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#pablo",
                    onClick: (e) => e.preventDefault(),
                    className:
                      "text-gray-400 text-sm block mb-2 mx-4 no-underline cursor-not-allowed",
                    children: prop.name,
                  }),
                },
                key
              );
            }

            if (prop.routes) {
              return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                "div",
                {
                  className: "mb-8",
                  children: [
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                          className: `${prop.icon} bg-gradient-to-tr from-light-blue-700 to-light-blue-500 p-2 leading-none rounded-lg text-xs text-white`,
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                          className:
                            "font-serif text-gray-900 text-base font-medium",
                          children: prop.name,
                        }),
                      ],
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                      className: "block flex-wrap list-none pl-0 mb-0 mt-3",
                      children: this.getRoutes(prop.routes),
                    }),
                  ],
                },
                key
              );
            } else if (prop.redirect) {
              return null;
            } else if (prop.subRoutes) {
              return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                "li",
                {
                  className: "",
                  children: [
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)("a", {
                      href: "#pablo",
                      className:
                        (this.state[prop.state]
                          ? "text-light-blue-500"
                          : "text-gray-700 hover:text-gray-900 ") +
                        " capitalize text-sm px-2.5 py-1.5 ml-7 rounded-lg block transition-all duration-300",
                      onClick: (e) => {
                        e.preventDefault();
                        this.setState({
                          [prop.state]: !this.state[prop.state],
                        });
                      },
                      children: [
                        prop.name,
                        " ",
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)("span", {
                          className: "material-icons text-xs align-middle",
                          style: {
                            fontSize: "16px",
                            fontWeight: "bold",
                          },
                          children: [
                            "keyboard_arrow_",
                            this.state[prop.state] ? "up" : "down",
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                      className:
                        (this.state[prop.state] ? "block " : "hidden ") +
                        "flex-wrap list-none ml-2",
                      children: this.getRoutes(prop.subRoutes),
                    }),
                  ],
                },
                key
              );
            } else {
              return /*#__PURE__*/ jsx_runtime_.jsx(
                "li",
                {
                  children: /*#__PURE__*/ jsx_runtime_.jsx(next_link.default, {
                    href: prop.path,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                      className:
                        (this.props.router.pathname.indexOf(prop.path) !== -1
                          ? "bg-gray-200 text-gray-900 "
                          : "text-gray-700 hover:text-gray-900 ") +
                        "capitalize text-sm text-gray-700 px-2.5 py-1.5 ml-7 rounded-lg block transition-all duration-300",
                      children: prop.name,
                    }),
                  }),
                },
                key
              );
            }
          });
        });

        this.state = this.getCollapseStates(props.routes);
      } // this creates the intial state of this component based on the collapse routes
      // that it gets through this.props.routes

      // this verifies if any of the collapses should be default opened on a rerender of this component
      // for example, on the refresh of the page,
      // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
      getCollapseInitialState(routes) {
        for (let i = 0; i < routes.length; i++) {
          if (
            routes[i].subRoutes &&
            this.getCollapseInitialState(routes[i].subRoutes)
          ) {
            return true;
          } else if (
            this.props.router.pathname.indexOf(routes[i].path) !== -1
          ) {
            return true;
          }
        }

        return false;
      }

      render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
          className:
            "w-72 h-screen px-6 pt-10 pb-16 sticky top-16 z-30 overflow-y-scroll border border-t-0 border-b-0 border-l-0 border-r flex-none lg:block hidden",
          children: this.getRoutes(this.props.routes),
        });
      }
    }

    /* harmony default export */ var Documentation_Sidebar = (0,
    router_.withRouter)(Sidebar); // CONCATENATED MODULE: ./components/Documentation/Footer.js
    function IndexFooter() {
      return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
          className:
            "w-full py-5 px-9 border border-t border-b-0 border-r-0 border-l-0 border-gray-200 mt-16",
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
            className: "flex justify-between",
            children: [
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)("p", {
                className: "text-gray-700 text-center",
                children: [
                  "\xA9 ",
                  new Date().getFullYear(),
                  " Material Tailwind",
                ],
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)("ul", {
                className: "list-none flex gap-8",
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                      className:
                        "text-gray-700 hover:text-gray-900 block pb-2 text-sm",
                      href: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=material-tailwind",
                      target: "_blank",
                      children: "MIT License",
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                      className:
                        "text-gray-700 hover:text-gray-900 block pb-2 text-sm",
                      href: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind",
                      target: "_blank",
                      children: "Contribute",
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                      className:
                        "text-gray-700 hover:text-gray-900 block pb-2 text-sm",
                      href: "https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=material-tailwind",
                      target: "_blank",
                      children: "Code of Conduct",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    } // CONCATENATED MODULE: ./components/Documentation/Container.js
    function Container({ children }) {
      return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container max-w-full flex",
        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
          className: "flex w-full",
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Documentation_Sidebar, {
              routes: routes_0,
            }),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
              className: "w-full flex flex-col justify-between",
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                  className:
                    "pt-9 px-9 min-w-0 w-full flex-auto flex items-start gap-10",
                  children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full lg:w-8/12",
                    children: children,
                  }),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(IndexFooter, {}),
              ],
            }),
          ],
        }),
      });
    }

    /***/
  },

  /***/ 5981: /***/ function (
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
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "h1",
            {
              className: "text-3xl font-serif font-medium text-gray-900 mb-4",
              children: props.title,
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "p",
            {
              className: "w-10/12 text-gray-700 font-light",
              children: props.description,
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            "hr",
            {
              className:
                "border border-t border-b-0 border-l-0 border-r-0 border-gray-200 mt-10 mb-12",
            }
          ),
        ],
      });
    }

    /***/
  },

  /***/ 8286: /***/ function (
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
      const [openNavbar, setOpenNavbar] =
        react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ /* .default */.Z,
        {
          color: "lightBlue",
          navbar: true,
          children: /*#__PURE__*/ (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className:
              "container max-w-full flex flex-col lg:flex-row lg:items-center px-4",
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
                                    children: "Material Tailwind",
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
                        ripple: "light",
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
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    components_Nav_NavItem__WEBPACK_IMPORTED_MODULE_10__ /* .default */.Z,
                                    {
                                      ripple: "light",
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          next_link__WEBPACK_IMPORTED_MODULE_2__.default,
                          {
                            href: "/components",
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                "a",
                                {
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    components_Nav_NavItem__WEBPACK_IMPORTED_MODULE_10__ /* .default */.Z,
                                    {
                                      ripple: "light",
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
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_12__ /* .default */.Z,
                          {
                            color: "transparent",
                            buttonType: "link",
                            buttonText: /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              "div",
                              {
                                className:
                                  "flex items-center text-xs uppercase",
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
                            ripple: "light",
                            style: {
                              justifyContent: "start",
                              padding: "1.05rem 1.2rem",
                              fontWeight: 500,
                              color: "#fff",
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
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          components_Nav_NavLink__WEBPACK_IMPORTED_MODULE_11__ /* .default */.Z,
                          {
                            href: "https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind",
                            target: "_blank",
                            rel: "noreferrer",
                            ripple: "light",
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          components_Nav_NavLink__WEBPACK_IMPORTED_MODULE_11__ /* .default */.Z,
                          {
                            href: "https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind",
                            target: "_blank",
                            rel: "noreferrer",
                            ripple: "light",
                            children: "Issues",
                          }
                        ),
                      ],
                    }
                  ),
                }
              ),
            ],
          }),
        }
      );
    }

    /***/
  },
};
