(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4537],
  {
    20640: function (e, t, r) {
      "use strict";
      var n = r(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          c,
          i,
          l,
          a,
          u,
          s = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((i = n()),
            (l = document.createRange()),
            (a = document.getSelection()),
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
            u.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format))
                if (
                  (n.preventDefault(), "undefined" === typeof n.clipboardData)
                ) {
                  r && console.warn("unable to use e.clipboardData"),
                    r && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var c = o[t.format] || o.default;
                  window.clipboardData.setData(c, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(u),
            l.selectNodeContents(u),
            a.addRange(l),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          s = !0;
        } catch (p) {
          r && console.error("unable to copy using execCommand: ", p),
            r && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (s = !0);
          } catch (p) {
            r && console.error("unable to copy using clipboardData: ", p),
              r && console.error("falling back to prompt"),
              (c = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(c, e);
          }
        } finally {
          a &&
            ("function" == typeof a.removeRange
              ? a.removeRange(l)
              : a.removeAllRanges()),
            u && document.body.removeChild(u),
            i();
        }
        return s;
      };
    },
    74300: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var n = c(r(67294)),
        o = c(r(20640));
      function c(e) {
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
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++)
              (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (n = 0; n < c.length; n++)
            (r = c[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t) {
        return !t || ("object" !== i(t) && "function" !== typeof t) ? d(e) : t;
      }
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          f(e)
        );
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e, t) {
        return (
          (b =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          b(e, t)
        );
      }
      function y(e, t, r) {
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
      var m = (function (e) {
        function t() {
          var e, r;
          u(this, t);
          for (var c = arguments.length, i = new Array(c), l = 0; l < c; l++)
            i[l] = arguments[l];
          return (
            y(
              d((r = p(this, (e = f(t)).call.apply(e, [this].concat(i))))),
              "onClick",
              function (e) {
                var t = r.props,
                  c = t.text,
                  i = t.onCopy,
                  l = t.children,
                  a = t.options,
                  u = n.default.Children.only(l),
                  s = (0, o.default)(c, a);
                i && i(c, s),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            r
          );
        }
        var r, c, i;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && b(e, t);
          })(t, e),
          (r = t),
          (c = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = a(e, ["text", "onCopy", "options", "children"]),
                  o = n.default.Children.only(t);
                return n.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(r, !0).forEach(function (t) {
                            y(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : l(r).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t)
                            );
                          });
                    }
                    return e;
                  })({}, r, { onClick: this.onClick })
                );
              },
            },
          ]),
          c && s(r.prototype, c),
          i && s(r, i),
          t
        );
      })(n.default.PureComponent);
      (t.CopyToClipboard = m),
        y(m, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, t, r) {
      "use strict";
      var n = r(74300).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n));
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
                r.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    34935: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/checkbox",
        function () {
          return r(47985);
        },
      ]);
    },
    22208: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        c = r.n(o);
      function i(e, t, r) {
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
      function l(e) {
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
              i(e, t, r[t]);
            });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++)
              (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (n = 0; n < c.length; n++)
            (r = c[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = {
        blueGray: "mt-checkbox-blue-gray-500",
        gray: "mt-checkbox-gray-500",
        brown: "mt-checkbox-brown-500",
        deepOrange: "mt-checkbox-deep-orange-500",
        orange: "mt-checkbox-orange-500",
        amber: "mt-checkbox-amber-500",
        yellow: "mt-checkbox-yellow-600",
        lime: "mt-checkbox-lime-500",
        lightGreen: "mt-checkbox-light-green-500",
        green: "mt-checkbox-green-500",
        teal: "mt-checkbox-teal-500",
        cyan: "mt-checkbox-cyan-500",
        lightBlue: "mt-checkbox-light-blue-500",
        blue: "mt-checkbox-blue-500",
        indigo: "mt-checkbox-indigo-500",
        deepPurple: "mt-checkbox-deep-purple-500",
        purple: "mt-checkbox-purple-500",
        pink: "mt-checkbox-pink-500",
        red: "mt-checkbox-red-500",
      };
      function s(e) {
        var t = e.color,
          r = e.text,
          o = e.id,
          c = a(e, ["color", "text", "id"]);
        return (0, n.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, n.jsx)(
              "input",
              l({}, c, {
                id: o,
                type: "checkbox",
                className: "mt-checkbox ".concat(
                  u[t],
                  " hidden overflow-hidden"
                ),
              })
            ),
            (0, n.jsxs)("label", {
              htmlFor: o,
              className:
                "flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300",
              children: [
                (0, n.jsx)("span", {
                  className:
                    "relative w-5 h-5 inline-block mr-2 rounded border border-gray-500 transition-all duration-300",
                }),
                r,
              ],
            }),
          ],
        });
      }
      (s.defaultProps = { color: "lightBlue" }),
        (s.propTypes = {
          color: c().string.isRequired,
          text: c().string.isRequired,
          id: c().string.isRequired,
        });
    },
    62332: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        c = r.n(o),
        i = r(73483),
        l = r(84283),
        a = r(74855),
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
          r = e.activeColor,
          o = (e.activeFramework, e.onColorClick),
          c = (e.onFrameworkClick, e.onCopy),
          p = e.codeToShow,
          f = e.copyText;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              r
                ? (0, n.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, n.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: u.map(function (e, t) {
                        return (0, n.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  r === s[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              o(s[t]), c(!1);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  })
                : null,
              t,
              (0, n.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, n.jsx)(a.CopyToClipboard, {
                    text: p,
                    onCopy: function () {
                      return c(!0);
                    },
                    children: (0, n.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: f,
                    }),
                  }),
                  (0, n.jsx)(i.Z, {
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
        copyText: c().string.isRequired,
        onCopy: c().func.isRequired,
        activeColor: c().oneOf([
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
        activeFramework: c().oneOf(["html", "react", "vue", "angular"]),
        codeToShow: c().string.isRequired,
        children: c().node.isRequired,
        onColorClick: c().func,
        onFrameworkClick: c().func,
      };
    },
    47985: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r(85893),
        o = r(67294),
        c = r(94254),
        i = r(84790),
        l = r(91169),
        a = r(27460),
        u = r(62332),
        s = r(22208);
      function p(e) {
        var t = e.copyText,
          r = e.onCopy,
          c = (0, o.useState)("lightBlue"),
          i = c[0],
          l = c[1],
          a = (0, o.useState)("react"),
          p = a[0],
          f = a[1],
          d =
            'import React from "react";\nimport Checkbox from "@material-tailwind/react/Checkbox"\n\nexport default function Checkbox() {\n    return (\n        <Checkbox\n            color="'.concat(
              i,
              '"\n            text="Checkbox"\n            id="checkbox"\n        />\n    )\n}'
            );
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(u.Z, {
            copyText: t,
            onCopy: r,
            activeColor: i,
            activeFramework: p,
            codeToShow: d,
            onColorClick: function (e) {
              return l(e);
            },
            onFrameworkClick: function (e) {
              return f(e);
            },
            children: (0, n.jsx)("div", {
              className: "flex justify-center py-5",
              children: (0, n.jsx)(s.Z, {
                color: i,
                text: "Checkbox",
                id: "checkbox",
              }),
            }),
          }),
        });
      }
      function f() {
        var e = (0, o.useState)(null),
          t = e[0],
          r = e[1];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(c.Z, { title: "React Checkbox" }),
            (0, n.jsx)(l.Z, {}),
            (0, n.jsxs)(i.Z, {
              children: [
                (0, n.jsx)(a.Z, {
                  title: "React Checkbox",
                  description:
                    "Easy to use Material Tailwind checkbox component.",
                }),
                (0, n.jsx)(p, {
                  copyText: "Alerts" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Alerts" : "");
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
      return (t = 34935), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
