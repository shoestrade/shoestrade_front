(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3605],
  {
    20640: function (e, t, n) {
      "use strict";
      var r = n(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          a,
          l,
          i,
          c,
          u,
          s = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((l = r()),
            (i = document.createRange()),
            (c = document.getSelection()),
            ((u = document.createElement("span")).textContent = e),
            (u.style.all = "unset"),
            (u.style.position = "fixed"),
            (u.style.top = 0),
            (u.style.clip = "rect(0, 0, 0, 0)"),
            (u.style.whiteSpace = "pre"),
            (u.style.webkitUserSelect = "text"),
            (u.style.MozUserSelect = "text"),
            (u.style.msUserSelect = "text"),
            (u.style.userSelect = "text"),
            u.addEventListener("copy", function (r) {
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
            document.body.appendChild(u),
            i.selectNodeContents(u),
            c.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          s = !0;
        } catch (p) {
          n && console.error("unable to copy using execCommand: ", p),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (s = !0);
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
              ? c.removeRange(i)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            l();
        }
        return s;
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
      function l(e) {
        return (
          (l =
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
          l(e)
        );
      }
      function i(e, t) {
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
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return !t || ("object" !== l(t) && "function" !== typeof t) ? f(e) : t;
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
      function y(e, t) {
        return (
          (y =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          y(e, t)
        );
      }
      function m(e, t, n) {
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
          u(this, t);
          for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++)
            l[i] = arguments[i];
          return (
            m(
              f((n = p(this, (e = d(t)).call.apply(e, [this].concat(l))))),
              "onClick",
              function (e) {
                var t = n.props,
                  a = t.text,
                  l = t.onCopy,
                  i = t.children,
                  c = t.options,
                  u = r.default.Children.only(i),
                  s = (0, o.default)(a, c);
                l && l(a, s),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, a, l;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
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
                        ? i(n, !0).forEach(function (t) {
                            m(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : i(n).forEach(function (t) {
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
          a && s(n.prototype, a),
          l && s(n, l),
          t
        );
      })(r.default.PureComponent);
      (t.CopyToClipboard = b),
        m(b, "defaultProps", { onCopy: void 0, options: void 0 });
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
    33417: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/typography/leadText",
        function () {
          return n(94198);
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
        l = n(73483),
        i = n(84283),
        c = n(74855),
        u = [
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
        s = [
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
                      children: u.map(function (e, t) {
                        return (0, r.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  n === s[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              o(s[t]), a(!1);
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
                  (0, r.jsx)(l.Z, {
                    language: "jsx",
                    style: i.Vg,
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
    79388: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        a = n.n(o);
      function l(e, t, n) {
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
      function i(e, t) {
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
      var c = {
        white: "text-gray-200",
        blueGray: "text-blue-gray-700",
        gray: "text-gray-700",
        brown: "text-brown-700",
        deepOrange: "text-deep-orange-700",
        orange: "text-orange-700",
        amber: "text-amber-700",
        yellow: "text-yellow-600",
        lime: "text-lime-700",
        lightGreen: "text-light-green-700",
        green: "text-green-700",
        teal: "text-teal-700",
        cyan: "text-cyan-700",
        lightBlue: "text-light-blue-700",
        blue: "text-blue-700",
        indigo: "text-indigo-700",
        deepPurple: "text-deep-purple-700",
        purple: "text-purple-700",
        pink: "text-pink-700",
        red: "text-red-700",
      };
      function u(e) {
        var t = e.children,
          n = e.color,
          o = i(e, ["children", "color"]);
        return (0, r.jsx)(
          "p",
          (function (e) {
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
                  l(e, t, n[t]);
                });
            }
            return e;
          })({}, o, {
            className: "".concat(
              c[n],
              " text-lg font-light leading-relaxed mt-6 mb-4"
            ),
            children: t,
          })
        );
      }
      (u.defaultProps = { color: "blueGray" }),
        (u.propTypes = {
          children: a().node.isRequired,
          color: a().string.isRequired,
        });
    },
    94198: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(85893),
        o = n(67294),
        a = n(94254),
        l = n(84790),
        i = n(91169),
        c = n(27460),
        u = n(62332),
        s = n(79827),
        p = n(79388);
      function d(e) {
        var t = e.copyText,
          n = e.onCopy,
          a = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          l = a[0],
          i = a[1],
          c = (0, o.useState)("react")[0],
          d = (0, o.useState)(!1),
          f = d[0],
          y = d[1],
          m = (0, o.useState)(),
          b = m[0],
          g = m[1],
          x = (0, s.Z)(c, y, g),
          h =
            'import React from "react";\nimport LeadText from "@material-tailwind/react/LeadText";\n\nexport default function LeadText() {\n    return (\n        <LeadText color="'.concat(
              l,
              "\">\n            Lorem Ipsum is simply dummy text of the printing and typesetting\n            industry. Lorem Ipsum has been the industry's standard dummy\n            text ever since the 1500s, when an unknown printer took a galley\n            of type and scrambled it to make a type specimen book.\n        </LeadText>\n    );\n}"
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            f
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return y(!1);
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
                                    return y(!1);
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
                                  b,
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
              activeColor: l,
              activeFramework: c,
              codeToShow: h,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: x,
              children: (0, r.jsx)(p.Z, {
                color: l,
                children:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              }),
            }),
          ],
        });
      }
      function f() {
        var e = (0, o.useState)(null),
          t = e[0],
          n = e[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a.Z, { title: "React Lead Text" }),
            (0, r.jsx)(i.Z, {}),
            (0, r.jsxs)(l.Z, {
              children: [
                (0, r.jsx)(c.Z, {
                  title: "React Lead Text",
                  description:
                    "Show important content using Material Tailwind lead text.",
                }),
                (0, r.jsx)(d, {
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
      return (t = 33417), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
