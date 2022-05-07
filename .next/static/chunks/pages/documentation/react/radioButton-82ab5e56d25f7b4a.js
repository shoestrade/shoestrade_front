(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1409],
  {
    20640: function (e, t, r) {
      "use strict";
      var n = r(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          i,
          a,
          l,
          c,
          u,
          s = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((a = n()),
            (l = document.createRange()),
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
            u.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format))
                if (
                  (n.preventDefault(), "undefined" === typeof n.clipboardData)
                ) {
                  r && console.warn("unable to use e.clipboardData"),
                    r && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = o[t.format] || o.default;
                  window.clipboardData.setData(i, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(u),
            l.selectNodeContents(u),
            c.addRange(l),
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
              (i = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(l)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            a();
        }
        return s;
      };
    },
    74300: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var n = i(r(67294)),
        o = i(r(20640));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        return (
          (a =
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
          a(e)
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
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
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
        return !t || ("object" !== a(t) && "function" !== typeof t) ? f(e) : t;
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
      function m(e, t, r) {
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
      var b = (function (e) {
        function t() {
          var e, r;
          u(this, t);
          for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++)
            a[l] = arguments[l];
          return (
            m(
              f((r = p(this, (e = d(t)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var t = r.props,
                  i = t.text,
                  a = t.onCopy,
                  l = t.children,
                  c = t.options,
                  u = n.default.Children.only(l),
                  s = (0, o.default)(i, c);
                a && a(i, s),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            r
          );
        }
        var r, i, a;
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
          (r = t),
          (i = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = c(e, ["text", "onCopy", "options", "children"]),
                  o = n.default.Children.only(t);
                return n.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(r, !0).forEach(function (t) {
                            m(e, t, r[t]);
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
          i && s(r.prototype, i),
          a && s(r, a),
          t
        );
      })(n.default.PureComponent);
      (t.CopyToClipboard = b),
        m(b, "defaultProps", { onCopy: void 0, options: void 0 });
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
    688: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/radioButton",
        function () {
          return r(33011);
        },
      ]);
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
        i = r.n(o),
        a = r(73483),
        l = r(84283),
        c = r(74855),
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
          i = (e.onFrameworkClick, e.onCopy),
          p = e.codeToShow,
          d = e.copyText;
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
                              o(s[t]), i(!1);
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
                  (0, n.jsx)(c.CopyToClipboard, {
                    text: p,
                    onCopy: function () {
                      return i(!0);
                    },
                    children: (0, n.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: d,
                    }),
                  }),
                  (0, n.jsx)(a.Z, {
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
        copyText: i().string.isRequired,
        onCopy: i().func.isRequired,
        activeColor: i().oneOf([
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
        activeFramework: i().oneOf(["html", "react", "vue", "angular"]),
        codeToShow: i().string.isRequired,
        children: i().node.isRequired,
        onColorClick: i().func,
        onFrameworkClick: i().func,
      };
    },
    61715: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        i = r.n(o);
      function a(e, t, r) {
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
              a(e, t, r[t]);
            });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = {
        blueGray: "mt-radio-blue-gray-500",
        gray: "mt-radio-gray-500",
        brown: "mt-radio-brown-500",
        deepOrange: "mt-radio-deep-orange-500",
        orange: "mt-radio-orange-500",
        amber: "mt-radio-amber-500",
        yellow: "mt-radio-yellow-600",
        lime: "mt-radio-lime-500",
        lightGreen: "mt-radio-light-green-500",
        green: "mt-radio-green-500",
        teal: "mt-radio-teal-500",
        cyan: "mt-radio-cyan-500",
        lightBlue: "mt-radio-light-blue-500",
        blue: "mt-radio-blue-500",
        indigo: "mt-radio-indigo-500",
        deepPurple: "mt-radio-deep-purple-500",
        purple: "mt-radio-purple-500",
        pink: "mt-radio-pink-500",
        red: "mt-radio-red-500",
      };
      function s(e) {
        var t = e.color,
          r = e.text,
          o = e.id,
          i = c(e, ["color", "text", "id"]);
        return (0, n.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, n.jsx)(
              "input",
              l({}, i, {
                id: o,
                type: "radio",
                className: "mt-radio ".concat(u[t], " hidden overflow-hidden"),
              })
            ),
            (0, n.jsxs)("label", {
              htmlFor: o,
              className:
                "flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300",
              children: [
                (0, n.jsx)("span", {
                  className:
                    "relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300",
                }),
                r,
              ],
            }),
          ],
        });
      }
      (s.defaultProps = { color: "lightBlue" }),
        (s.propTypes = {
          color: i().string.isRequired,
          text: i().string.isRequired,
          id: i().string.isRequired,
        });
    },
    33011: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return d;
          },
        });
      var n = r(85893),
        o = r(67294),
        i = r(94254),
        a = r(84790),
        l = r(91169),
        c = r(27460),
        u = r(62332),
        s = r(61715);
      function p(e) {
        var t = e.copyText,
          r = e.onCopy,
          i = (0, o.useState)("lightBlue"),
          a = i[0],
          l = i[1],
          c = (0, o.useState)("react"),
          p = c[0],
          d = c[1],
          f =
            'import React from "react";\nimport Radio from "@material-tailwind/react/Radio"\n\nexport default function RadioButton() {\n    return (\n        <Radio\n            color="'
              .concat(
                a,
                '"\n            text="Option 1"\n            id="option-1"\n            name="option"\n        />\n        <Radio\n            color="'
              )
              .concat(
                a,
                '"\n            text="Option 2"\n            id="option-2"\n            name="option"\n        />\n    )\n}'
              );
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(u.Z, {
            copyText: t,
            onCopy: r,
            activeColor: a,
            activeFramework: p,
            codeToShow: f,
            onColorClick: function (e) {
              return l(e);
            },
            onFrameworkClick: function (e) {
              return d(e);
            },
            children: (0, n.jsxs)("div", {
              className: "flex justify-center py-5",
              children: [
                (0, n.jsx)("div", {
                  className: "mr-10",
                  children: (0, n.jsx)(s.Z, {
                    color: a,
                    text: "Option 1",
                    id: "option-1",
                    name: "option",
                  }),
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(s.Z, {
                    color: a,
                    text: "Option 2",
                    id: "option-2",
                    name: "option",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function d() {
        var e = (0, o.useState)(null),
          t = e[0],
          r = e[1];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.Z, { title: "React Radio Button" }),
            (0, n.jsx)(l.Z, {}),
            (0, n.jsxs)(a.Z, {
              children: [
                (0, n.jsx)(c.Z, {
                  title: "React Radio Button",
                  description:
                    "Easy to use Material Tailwind radio button component.",
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
      return (t = 688), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
