"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2730],
  {
    84790: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return v;
        },
      });
      var n = r(85893),
        a = r(67294),
        i = [
          {
            name: "Getting Started",
            icon: "fas fa-rocket",
            path: "/documentation/quick-start",
            routes: [
              { path: "/documentation/license", name: "License" },
              { path: "/documentation/quick-start", name: "Quick Start" },
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
              { path: "/documentation/react/alerts", name: "Alerts" },
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
                  { path: "/documentation/react/buttons/link", name: "Link" },
                ],
              },
              { path: "/documentation/react/cards", name: "Cards" },
              { path: "/documentation/react/checkbox", name: "Checkbox" },
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
                  { path: "/documentation/react/dropdowns/link", name: "Link" },
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
                  { path: "/documentation/react/dropups/link", name: "Link" },
                ],
              },
              { path: "/documentation/react/images", name: "Images" },
              { path: "/documentation/react/inputs", name: "Inputs" },
              { path: "/documentation/react/labels", name: "Labels" },
              { path: "/documentation/react/menus", name: "Menus" },
              { path: "/documentation/react/modals", name: "Modals" },
              { path: "/documentation/react/navbars", name: "Navbars" },
              { path: "/documentation/react/paginations", name: "Paginations" },
              { path: "/documentation/react/popovers", name: "Popovers" },
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
                  { path: "/documentation/react/tabs/text", name: "Text" },
                  { path: "/documentation/react/tabs/icon", name: "Icon" },
                ],
              },
              { path: "/documentation/react/textareas", name: "Text Areas" },
              { path: "/documentation/react/tooltips", name: "Tooltips" },
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
        ],
        o = r(52086),
        l = r.n(o),
        s = r(58220);
      function c(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
        );
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              d(e, t, r[t]);
            });
        }
        return e;
      }
      function h(e, t) {
        return !t || ("object" !== b(t) && "function" !== typeof t) ? c(e) : t;
      }
      function f(e, t) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          f(e, t)
        );
      }
      var b = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function x(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = m(e);
          if (t) {
            var a = m(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return h(this, r);
        };
      }
      var g = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(o, e);
          var t,
            r,
            a,
            i = x(o);
          function o(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              d(c((t = i.call(this, e))), "getCollapseStates", function (e) {
                var r = {};
                return (
                  e &&
                    e.map(function (e, n) {
                      return (
                        e.subRoutes
                          ? (r = p(
                              d(
                                {},
                                e.state,
                                t.getCollapseInitialState(e.subRoutes)
                              ),
                              t.getCollapseStates(e.subRoutes),
                              r
                            ))
                          : e.routes &&
                            (r = p({}, t.getCollapseStates(e.routes), r)),
                        null
                      );
                    }),
                  r
                );
              }),
              d(c(t), "getRoutes", function (e) {
                return e.map(function (e, r) {
                  return e.disabled
                    ? (0, n.jsx)(
                        "li",
                        {
                          children: (0, n.jsx)("a", {
                            href: "#pablo",
                            onClick: function (e) {
                              return e.preventDefault();
                            },
                            className:
                              "text-gray-400 text-sm block mb-2 mx-4 no-underline cursor-not-allowed",
                            children: e.name,
                          }),
                        },
                        r
                      )
                    : e.routes
                    ? (0, n.jsxs)(
                        "div",
                        {
                          className: "mb-8",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, n.jsx)("i", {
                                  className: "".concat(
                                    e.icon,
                                    " bg-gradient-to-tr from-light-blue-700 to-light-blue-500 p-2 leading-none rounded-lg text-xs text-white"
                                  ),
                                }),
                                (0, n.jsx)("h4", {
                                  className:
                                    "font-serif text-gray-900 text-base font-medium",
                                  children: e.name,
                                }),
                              ],
                            }),
                            (0, n.jsx)("ul", {
                              className:
                                "block flex-wrap list-none pl-0 mb-0 mt-3",
                              children: t.getRoutes(e.routes),
                            }),
                          ],
                        },
                        r
                      )
                    : e.redirect
                    ? null
                    : e.subRoutes
                    ? (0, n.jsxs)(
                        "li",
                        {
                          className: "",
                          children: [
                            (0, n.jsxs)("a", {
                              href: "#pablo",
                              className:
                                (t.state[e.state]
                                  ? "text-light-blue-500"
                                  : "text-gray-700 hover:text-gray-900 ") +
                                " capitalize text-sm px-2.5 py-1.5 ml-7 rounded-lg block transition-all duration-300",
                              onClick: function (r) {
                                r.preventDefault(),
                                  t.setState(d({}, e.state, !t.state[e.state]));
                              },
                              children: [
                                e.name,
                                " ",
                                (0, n.jsxs)("span", {
                                  className:
                                    "material-icons text-xs align-middle",
                                  style: {
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  },
                                  children: [
                                    "keyboard_arrow_",
                                    t.state[e.state] ? "up" : "down",
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("ul", {
                              className:
                                (t.state[e.state] ? "block " : "hidden ") +
                                "flex-wrap list-none ml-2",
                              children: t.getRoutes(e.subRoutes),
                            }),
                          ],
                        },
                        r
                      )
                    : (0, n.jsx)(
                        "li",
                        {
                          children: (0, n.jsx)(l(), {
                            href: e.path,
                            children: (0, n.jsx)("a", {
                              className:
                                (-1 !== t.props.router.pathname.indexOf(e.path)
                                  ? "bg-gray-200 text-gray-900 "
                                  : "text-gray-700 hover:text-gray-900 ") +
                                "capitalize text-sm text-gray-700 px-2.5 py-1.5 ml-7 rounded-lg block transition-all duration-300",
                              children: e.name,
                            }),
                          }),
                        },
                        r
                      );
                });
              }),
              (t.state = t.getCollapseStates(e.routes)),
              t
            );
          }
          return (
            (t = o),
            (r = [
              {
                key: "getCollapseInitialState",
                value: function (e) {
                  for (var t = 0; t < e.length; t++) {
                    if (
                      e[t].subRoutes &&
                      this.getCollapseInitialState(e[t].subRoutes)
                    )
                      return !0;
                    if (-1 !== this.props.router.pathname.indexOf(e[t].path))
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, n.jsx)("div", {
                    className:
                      "w-72 h-screen px-6 pt-10 pb-16 sticky top-16 z-30 overflow-y-scroll border border-t-0 border-b-0 border-l-0 border-r flex-none lg:block hidden",
                    children: this.getRoutes(this.props.routes),
                  });
                },
              },
            ]),
            r && u(t.prototype, r),
            a && u(t, a),
            o
          );
        })(a.Component),
        y = (0, s.withRouter)(g);
      function j() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("footer", {
            className:
              "w-full py-5 px-9 border border-t border-b-0 border-r-0 border-l-0 border-gray-200 mt-16",
            children: (0, n.jsxs)("div", {
              className: "flex justify-between",
              children: [
                (0, n.jsxs)("p", {
                  className: "text-gray-700 text-center",
                  children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " Material Tailwind",
                  ],
                }),
                (0, n.jsxs)("ul", {
                  className: "list-none flex gap-8",
                  children: [
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)("a", {
                        className:
                          "text-gray-700 hover:text-gray-900 block pb-2 text-sm",
                        href: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=material-tailwind",
                        target: "_blank",
                        children: "MIT License",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)("a", {
                        className:
                          "text-gray-700 hover:text-gray-900 block pb-2 text-sm",
                        href: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind",
                        target: "_blank",
                        children: "Contribute",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)("a", {
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
      }
      function v(e) {
        var t = e.children;
        return (0, n.jsx)("div", {
          className: "container max-w-full flex",
          children: (0, n.jsxs)("div", {
            className: "flex w-full",
            children: [
              (0, n.jsx)(y, { routes: i }),
              (0, n.jsxs)("div", {
                className: "w-full flex flex-col justify-between",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "pt-9 px-9 min-w-0 w-full flex-auto flex items-start gap-10",
                    children: (0, n.jsx)("div", {
                      className: "w-full lg:w-8/12",
                      children: t,
                    }),
                  }),
                  (0, n.jsx)(j, {}),
                ],
              }),
            ],
          }),
        });
      }
    },
    27460: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(85893),
        a = (r(67294), r(45697)),
        i = r.n(a);
      function o(e) {
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("h1", {
              className: "text-3xl font-serif font-medium text-gray-900 mb-4",
              children: e.title,
            }),
            (0, n.jsx)("p", {
              className: "w-10/12 text-gray-700 font-light",
              children: e.description,
            }),
            (0, n.jsx)("hr", {
              className:
                "border border-t border-b-0 border-l-0 border-r-0 border-gray-200 mt-10 mb-12",
            }),
          ],
        });
      }
      o.propTypes = {
        title: i().oneOfType([i().string, i().node]),
        description: i().oneOfType([i().string, i().node]),
      };
    },
    91169: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return j;
        },
      });
      var n = r(85893),
        a = r(67294),
        i = r(52086),
        o = r.n(i),
        l = r(87979),
        s = (r(73660), r(46459)),
        c = r(45189),
        u = r(69885),
        d = r(38054),
        m = r(59167),
        p = r(13554),
        h = r(15890),
        f = r(33550),
        b = r(65850),
        x = r(5128);
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                i = [],
                o = !0,
                l = !1;
              try {
                for (
                  r = r.call(e);
                  !(o = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  o = !0
                );
              } catch (s) {
                (l = !0), (a = s);
              } finally {
                try {
                  o || null == r.return || r.return();
                } finally {
                  if (l) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return g(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return g(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function j() {
        var e = y(a.useState(!1), 2),
          t = e[0],
          r = e[1];
        return (0, n.jsx)(l.Z, {
          color: "lightBlue",
          navbar: !0,
          children: (0, n.jsxs)("div", {
            className:
              "container max-w-full flex flex-col lg:flex-row lg:items-center px-4",
            children: [
              (0, n.jsxs)(s.Z, {
                children: [
                  (0, n.jsx)(o(), {
                    href: "/",
                    children: (0, n.jsx)("a", {
                      children: (0, n.jsx)(c.Z, {
                        children: "Material Tailwind",
                      }),
                    }),
                  }),
                  (0, n.jsx)(u.Z, {
                    onClick: function () {
                      return r(!t);
                    },
                    ripple: "light",
                  }),
                ],
              }),
              (0, n.jsx)(d.Z, {
                open: t,
                children: (0, n.jsxs)(m.Z, {
                  children: [
                    (0, n.jsx)(o(), {
                      href: "/documentation/quick-start",
                      children: (0, n.jsx)("a", {
                        children: (0, n.jsxs)(p.Z, {
                          ripple: "light",
                          children: [
                            (0, n.jsx)(x.Z, {
                              name: "description",
                              size: "2xl",
                            }),
                            "\xa0Docs",
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(o(), {
                      href: "/components",
                      children: (0, n.jsx)("a", {
                        children: (0, n.jsxs)(p.Z, {
                          ripple: "light",
                          children: [
                            (0, n.jsx)(x.Z, { name: "apps", size: "2xl" }),
                            "\xa0Components",
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsxs)(f.Z, {
                      color: "transparent",
                      buttonType: "link",
                      buttonText: (0, n.jsxs)("div", {
                        className: "flex items-center text-xs uppercase",
                        children: [
                          (0, n.jsx)(x.Z, {
                            name: "view_carousel",
                            size: "2xl",
                          }),
                          "\xa0Templates",
                        ],
                      }),
                      ripple: "light",
                      style: {
                        justifyContent: "start",
                        padding: "1.05rem 1.2rem",
                        fontWeight: 500,
                        color: "#fff",
                      },
                      children: [
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/landing",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Landing",
                        }),
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/profile",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Profile",
                        }),
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/login",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Login",
                        }),
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/register",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Register",
                        }),
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-dashboard-react/#/",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Dashboard",
                        }),
                      ],
                    }),
                    (0, n.jsxs)(h.Z, {
                      href: "https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind",
                      target: "_blank",
                      rel: "noreferrer",
                      ripple: "light",
                      children: [
                        (0, n.jsx)(x.Z, {
                          family: "font-awesome",
                          name: "fab fa-github",
                          size: "xl",
                        }),
                        "\xa0Github",
                      ],
                    }),
                    (0, n.jsx)(h.Z, {
                      href: "https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind",
                      target: "_blank",
                      rel: "noreferrer",
                      ripple: "light",
                      children: "Issues",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
  },
]);
