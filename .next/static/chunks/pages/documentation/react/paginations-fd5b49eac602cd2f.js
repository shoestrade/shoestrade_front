(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4273],
  {
    20640: function (e, t, n) {
      "use strict";
      var r = n(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          a,
          i,
          l,
          c,
          s,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((i = r()),
            (l = document.createRange()),
            (c = document.getSelection()),
            ((s = document.createElement("span")).textContent = e),
            (s.style.all = "unset"),
            (s.style.position = "fixed"),
            (s.style.top = 0),
            (s.style.clip = "rect(0, 0, 0, 0)"),
            (s.style.whiteSpace = "pre"),
            (s.style.webkitUserSelect = "text"),
            (s.style.MozUserSelect = "text"),
            (s.style.msUserSelect = "text"),
            (s.style.userSelect = "text"),
            s.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var a = o[t.format] || o.default;
                  window.clipboardData.setData(a, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(s),
            l.selectNodeContents(s),
            c.addRange(l),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (p) {
          n && console.error("unable to copy using execCommand: ", p),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (p) {
            n && console.error("unable to copy using clipboardData: ", p),
              n && console.error("falling back to prompt"),
              (a = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(a, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(l)
              : c.removeAllRanges()),
            s && document.body.removeChild(s),
            i();
        }
        return u;
      };
    },
    74300: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var r = a(n(67294)),
        o = a(n(20640));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return (
          (i =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return !t || ("object" !== i(t) && "function" !== typeof t) ? f(e) : t;
      }
      function d(e) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          d(e)
        );
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e, t) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          m(e, t)
        );
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var b = (function (e) {
        function t() {
          var e, n;
          s(this, t);
          for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            g(
              f((n = p(this, (e = d(t)).call.apply(e, [this].concat(i))))),
              "onClick",
              function (e) {
                var t = n.props,
                  a = t.text,
                  i = t.onCopy,
                  l = t.children,
                  c = t.options,
                  s = r.default.Children.only(l),
                  u = (0, o.default)(a, c);
                i && i(a, u),
                  s &&
                    s.props &&
                    "function" === typeof s.props.onClick &&
                    s.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, a, i;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && m(e, t);
          })(t, e),
          (n = t),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = c(e, ["text", "onCopy", "options", "children"]),
                  o = r.default.Children.only(t);
                return r.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(n, !0).forEach(function (t) {
                            g(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : l(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({}, n, { onClick: this.onClick })
                );
              },
            },
          ]),
          a && u(n.prototype, a),
          i && u(n, i),
          t
        );
      })(r.default.PureComponent);
      (t.CopyToClipboard = b),
        g(b, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, t, n) {
      "use strict";
      var r = n(74300).CopyToClipboard;
      (r.CopyToClipboard = r), (e.exports = r);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    38331: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/paginations",
        function () {
          return n(20035);
        },
      ]);
    },
    62332: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        a = n.n(o),
        i = n(73483),
        l = n(84283),
        c = n(74855),
        s = [
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
        ],
        u = [
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
      function p(e) {
        var t = e.children,
          n = e.activeColor,
          o = (e.activeFramework, e.onColorClick),
          a = (e.onFrameworkClick, e.onCopy),
          p = e.codeToShow,
          d = e.copyText;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              n
                ? (0, r.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, r.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: s.map(function (e, t) {
                        return (0, r.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  n === u[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              o(u[t]), a(!1);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  })
                : null,
              t,
              (0, r.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, r.jsx)(c.CopyToClipboard, {
                    text: p,
                    onCopy: function () {
                      return a(!0);
                    },
                    children: (0, r.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: d,
                    }),
                  }),
                  (0, r.jsx)(i.Z, {
                    language: "jsx",
                    style: l.Vg,
                    children: p,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      p.propTypes = {
        copyText: a().string.isRequired,
        onCopy: a().func.isRequired,
        activeColor: a().oneOf([
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
          !1,
        ]),
        activeFramework: a().oneOf(["html", "react", "vue", "angular"]),
        codeToShow: a().string.isRequired,
        children: a().node.isRequired,
        onColorClick: a().func,
        onFrameworkClick: a().func,
      };
    },
    79827: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        switch (e) {
          case "react":
          case "angular":
          case "html":
          case "vue":
          case "javascript":
            break;
          default:
            t(!0), n(e);
        }
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    28754: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        a = n.n(o);
      function i(e) {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("h2", {
              className: "font-serif font-medium text-xl mb-2 text-gray-900",
              children: e.title,
            }),
            (0, r.jsx)("p", {
              className: "text-gray-700 mb-4 font-light",
              children: e.description,
            }),
          ],
        });
      }
      i.propTypes = {
        title: a().oneOfType([a().string, a().node]),
        description: a().oneOfType([a().string, a().node]),
      };
    },
    46352: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        a = n.n(o);
      function i(e) {
        var t = e.children;
        return (0, r.jsx)("div", {
          className: "py-2",
          children: (0, r.jsx)("div", {
            className: "block",
            children: (0, r.jsx)("ul", {
              className: "flex pl-0 rounded list-none",
              children: t,
            }),
          }),
        });
      }
      i.propTypes = { children: a().node.isRequired };
    },
    12863: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        a = n.n(o),
        i = n(39931),
        l = n.n(i);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              c(e, t, n[t]);
            });
        }
        return e;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var p = {
        blueGray: "bg-blue-gray-500",
        gray: "bg-gray-500",
        brown: "bg-brown-500",
        deepOrange: "bg-deep-orange-500",
        orange: "bg-orange-500",
        amber: "bg-amber-500",
        yellow: "bg-yellow-600",
        lime: "bg-lime-500",
        lightGreen: "bg-light-green-500",
        green: "bg-green-500",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        lightBlue: "bg-light-blue-500",
        blue: "bg-blue-500",
        indigo: "bg-indigo-500",
        deepPurple: "bg-deep-purple-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
        red: "bg-red-500",
      };
      function d(e) {
        var t = e.children,
          n = e.color,
          o = e.button,
          a = e.ripple,
          i = e.className,
          c = u(e, ["children", "color", "button", "ripple", "className"]),
          d = new (l())();
        return (0, r.jsx)("li", {
          className: "grid place-items-center",
          children: (0, r.jsx)(
            "a",
            s({}, c, {
              className: "text-sm leading-none flex "
                .concat(
                  o ? "tracking-wider rounded-lg w-14" : "rounded-full w-8",
                  " h-8 mx-1 p-0 items-center justify-center "
                )
                .concat(
                  n
                    ? "".concat(p[n], " text-white")
                    : "bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 focus:bg-gray-500 focus:bg-opacity-20 active:bg-gray-500 active:bg-opacity-40",
                  " transition-all duration-300 "
                )
                .concat(i),
              onMouseUp: function (e) {
                "dark" === a && d.create(e, "dark"),
                  "light" === a && d.create(e, "light");
              },
              children: t,
            })
          ),
        });
      }
      (d.defaultProps = { button: !1 }),
        (d.propTypes = {
          children: a().node.isRequired,
          color: a().string,
          button: a().bool.isRequired,
          ripple: a().string,
        });
    },
    20035: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(85893),
        o = n(67294),
        a = n(94254),
        i = n(84790),
        l = n(91169),
        c = n(27460),
        s = n(28754),
        u = n(62332),
        p = n(79827),
        d = n(46352),
        f = n(12863),
        m = n(5128);
      function g(e) {
        var t = e.copyText,
          n = e.onCopy,
          a = (0, o.useState)("lightBlue"),
          i = a[0],
          l = a[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          g = s[0],
          b = s[1],
          h = (0, o.useState)(),
          y = h[0],
          x = h[1],
          w = (0, p.Z)(c, b, x),
          j =
            'import React from "react";\nimport Pagination from "@material-tailwind/react/Pagination";\nimport PaginationItem from "@material-tailwind/react/PaginationItem";\nimport Icon from "@material-tailwind/react/Icon";\n\nexport default function Pagination() {\n    return (\n        <Pagination>\n            <PaginationItem href="#last" ripple="dark">\n                <Icon name="keyboard_arrow_left" />\n            </PaginationItem>\n            <PaginationItem color="'.concat(
              i,
              '" href="#1" ripple="light">1</PaginationItem>\n            <PaginationItem href="#2" ripple="dark">2</PaginationItem>\n            <PaginationItem href="#3" ripple="dark">3</PaginationItem>\n            <PaginationItem href="#4" ripple="dark">4</PaginationItem>\n            <PaginationItem href="#5" ripple="dark">5</PaginationItem>\n            <PaginationItem href="#last" ripple="dark">\n                <Icon name="keyboard_arrow_right" />\n            </PaginationItem>\n        </Pagination>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            g
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return b(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return b(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  y,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(u.Z, {
              copyText: t,
              onCopy: n,
              activeColor: i,
              activeFramework: c,
              codeToShow: j,
              onColorClick: function (e) {
                return l(e);
              },
              onFrameworkClick: w,
              children: (0, r.jsx)("div", {
                className: "flex justify-center",
                children: (0, r.jsxs)(d.Z, {
                  children: [
                    (0, r.jsx)(f.Z, {
                      href: "#last",
                      ripple: "dark",
                      children: (0, r.jsx)(m.Z, {
                        name: "keyboard_arrow_left",
                      }),
                    }),
                    (0, r.jsx)(f.Z, {
                      color: i,
                      href: "#1",
                      ripple: "light",
                      children: "1",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#2",
                      ripple: "dark",
                      children: "2",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#3",
                      ripple: "dark",
                      children: "3",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#4",
                      ripple: "dark",
                      children: "4",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#5",
                      ripple: "dark",
                      children: "5",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#last",
                      ripple: "dark",
                      children: (0, r.jsx)(m.Z, {
                        name: "keyboard_arrow_right",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function b(e) {
        var t = e.copyText,
          n = e.onCopy,
          a = (0, o.useState)("lightBlue"),
          i = a[0],
          l = a[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          g = s[0],
          b = s[1],
          h = (0, o.useState)(),
          y = h[0],
          x = h[1],
          w = (0, p.Z)(c, b, x),
          j =
            'import React from "react";\nimport Pagination from "@material-tailwind/react/Pagination";\nimport PaginationItem from "@material-tailwind/react/PaginationItem";\nimport Icon from "@material-tailwind/react/Icon";\n\nexport default function Pagination() {\n    return (\n        <Pagination>\n            <PaginationItem button href="#last" ripple="dark">\n                First\n            </PaginationItem>\n            <PaginationItem href="#last" ripple="dark">\n                <Icon name="keyboard_arrow_left" />\n            </PaginationItem>\n            <PaginationItem color="'.concat(
              i,
              '" href="#1" ripple="light">1</PaginationItem>\n            <PaginationItem href="#2" ripple="dark">2</PaginationItem>\n            <PaginationItem href="#3" ripple="dark">3</PaginationItem>\n            <PaginationItem href="#4" ripple="dark">4</PaginationItem>\n            <PaginationItem href="#5" ripple="dark">5</PaginationItem>\n            <PaginationItem href="#last" ripple="dark">\n                <Icon name="keyboard_arrow_right" />\n            </PaginationItem>\n            <PaginationItem button href="#last" ripple="dark">\n                Last\n            </PaginationItem>\n        </Pagination>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            g
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return b(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return b(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  y,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(u.Z, {
              copyText: t,
              onCopy: n,
              activeColor: i,
              activeFramework: c,
              codeToShow: j,
              onColorClick: function (e) {
                return l(e);
              },
              onFrameworkClick: w,
              children: (0, r.jsx)("div", {
                className: "flex justify-center",
                children: (0, r.jsxs)(d.Z, {
                  children: [
                    (0, r.jsx)(f.Z, {
                      button: !0,
                      href: "#last",
                      ripple: "dark",
                      children: "First",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#last",
                      ripple: "dark",
                      children: (0, r.jsx)(m.Z, {
                        name: "keyboard_arrow_left",
                      }),
                    }),
                    (0, r.jsx)(f.Z, {
                      color: i,
                      href: "#1",
                      ripple: "light",
                      children: "1",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#2",
                      ripple: "dark",
                      children: "2",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#3",
                      ripple: "dark",
                      children: "3",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#4",
                      ripple: "dark",
                      children: "4",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#5",
                      ripple: "dark",
                      children: "5",
                    }),
                    (0, r.jsx)(f.Z, {
                      href: "#last",
                      ripple: "dark",
                      children: (0, r.jsx)(m.Z, {
                        name: "keyboard_arrow_right",
                      }),
                    }),
                    (0, r.jsx)(f.Z, {
                      button: !0,
                      href: "#last",
                      ripple: "dark",
                      children: "Last",
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function h() {
        var e = (0, o.useState)(null),
          t = e[0],
          n = e[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a.Z, { title: "React Paginations" }),
            (0, r.jsx)(l.Z, {}),
            (0, r.jsxs)(i.Z, {
              children: [
                (0, r.jsx)(c.Z, {
                  title: "React Paginations",
                  description:
                    "Material Tailwind pagination component consists of button-like styled links, that are arranged side by side in a horizontal list. Pagination is built with list HTML elements so screen readers can announce the number of available links.",
                }),
                (0, r.jsx)(s.Z, { title: "Simple Pagination" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, {
                  title: "Pagination with first & last buttons",
                }),
                (0, r.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [9774, 3335, 573, 7554, 2730, 2888, 179], function () {
      return (t = 38331), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
