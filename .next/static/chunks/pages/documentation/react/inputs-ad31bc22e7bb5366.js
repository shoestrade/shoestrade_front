(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8262],
  {
    20640: function (e, t, n) {
      "use strict";
      var r = n(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          l,
          u,
          a,
          c,
          p = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((l = r()),
            (u = document.createRange()),
            (a = document.getSelection()),
            ((c = document.createElement("span")).textContent = e),
            (c.style.all = "unset"),
            (c.style.position = "fixed"),
            (c.style.top = 0),
            (c.style.clip = "rect(0, 0, 0, 0)"),
            (c.style.whiteSpace = "pre"),
            (c.style.webkitUserSelect = "text"),
            (c.style.MozUserSelect = "text"),
            (c.style.msUserSelect = "text"),
            (c.style.userSelect = "text"),
            c.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = o[t.format] || o.default;
                  window.clipboardData.setData(i, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(c),
            u.selectNodeContents(c),
            a.addRange(u),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          p = !0;
        } catch (s) {
          n && console.error("unable to copy using execCommand: ", s),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (p = !0);
          } catch (s) {
            n && console.error("unable to copy using clipboardData: ", s),
              n && console.error("falling back to prompt"),
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
          a &&
            ("function" == typeof a.removeRange
              ? a.removeRange(u)
              : a.removeAllRanges()),
            c && document.body.removeChild(c),
            l();
        }
        return p;
      };
    },
    74300: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var r = i(n(67294)),
        o = i(n(20640));
      function i(e) {
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
      function u(e, t) {
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
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t) {
        return !t || ("object" !== l(t) && "function" !== typeof t) ? m(e) : t;
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
      function m(e) {
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
      function f(e, t, n) {
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
          c(this, t);
          for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
            l[u] = arguments[u];
          return (
            f(
              m((n = s(this, (e = d(t)).call.apply(e, [this].concat(l))))),
              "onClick",
              function (e) {
                var t = n.props,
                  i = t.text,
                  l = t.onCopy,
                  u = t.children,
                  a = t.options,
                  c = r.default.Children.only(u),
                  p = (0, o.default)(i, a);
                l && l(i, p),
                  c &&
                    c.props &&
                    "function" === typeof c.props.onClick &&
                    c.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, i, l;
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
          (i = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = a(e, ["text", "onCopy", "options", "children"]),
                  o = r.default.Children.only(t);
                return r.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? u(n, !0).forEach(function (t) {
                            f(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : u(n).forEach(function (t) {
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
          i && p(n.prototype, i),
          l && p(n, l),
          t
        );
      })(r.default.PureComponent);
      (t.CopyToClipboard = b),
        f(b, "defaultProps", { onCopy: void 0, options: void 0 });
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
    5567: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/inputs",
        function () {
          return n(96860);
        },
      ]);
    },
    62332: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        i = n.n(o),
        l = n(73483),
        u = n(84283),
        a = n(74855),
        c = [
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
        p = [
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
      function s(e) {
        var t = e.children,
          n = e.activeColor,
          o = (e.activeFramework, e.onColorClick),
          i = (e.onFrameworkClick, e.onCopy),
          s = e.codeToShow,
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
                      children: c.map(function (e, t) {
                        return (0, r.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  n === p[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              o(p[t]), i(!1);
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
                  (0, r.jsx)(a.CopyToClipboard, {
                    text: s,
                    onCopy: function () {
                      return i(!0);
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
                    style: u.Vg,
                    children: s,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      s.propTypes = {
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
    28754: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        i = n.n(o);
      function l(e) {
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
      l.propTypes = {
        title: i().oneOfType([i().string, i().node]),
        description: i().oneOfType([i().string, i().node]),
      };
    },
    64189: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        i = n.n(o);
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t, n) {
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
      function a(e) {
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
              u(e, t, n[t]);
            });
        }
        return e;
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
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function p(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return l(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var s = {
          blueGray: "mt-input-blue-gray-500",
          gray: "mt-input-gray-500",
          brown: "mt-input-brown-500",
          deepOrange: "mt-input-deep-orange-500",
          orange: "mt-input-orange-500",
          amber: "mt-input-amber-500",
          yellow: "mt-input-yellow-600",
          lime: "mt-input-lime-500",
          lightGreen: "mt-input-light-green-500",
          green: "mt-input-green-500",
          teal: "mt-input-teal-500",
          cyan: "mt-input-cyan-500",
          lightBlue: "mt-input-light-blue-500",
          blue: "mt-input-blue-500",
          indigo: "mt-input-indigo-500",
          deepPurple: "mt-input-deep-purple-500",
          purple: "mt-input-purple-500",
          pink: "mt-input-pink-500",
          red: "mt-input-red-500",
        },
        d = {
          blueGray: "mt-input-outline-blue-gray-500",
          gray: "mt-input-outline-gray-500",
          brown: "mt-input-outline-brown-500",
          deepOrange: "mt-input-outline-deep-orange-500",
          orange: "mt-input-outline-orange-500",
          amber: "mt-input-outline-amber-500",
          yellow: "mt-input-outline-yellow-600",
          lime: "mt-input-outline-lime-500",
          lightGreen: "mt-input-outline-light-green-500",
          green: "mt-input-outline-green-500",
          teal: "mt-input-outline-teal-500",
          cyan: "mt-input-outline-cyan-500",
          lightBlue: "mt-input-outline-light-blue-500",
          blue: "mt-input-outline-blue-500",
          indigo: "mt-input-outline-indigo-500",
          deepPurple: "mt-input-outline-deep-purple-500",
          purple: "mt-input-outline-purple-500",
          pink: "mt-input-outline-pink-500",
          red: "mt-input-outline-red-500",
        },
        m = {
          blueGray: "border-blue-gray-500",
          gray: "border-gray-500",
          brown: "border-brown-500",
          deepOrange: "border-deep-orange-500",
          orange: "border-orange-500",
          amber: "border-amber-500",
          yellow: "border-yellow-600",
          lime: "border-lime-500",
          lightGreen: "border-light-green-500",
          green: "border-green-500",
          teal: "border-teal-500",
          cyan: "border-cyan-500",
          lightBlue: "border-light-blue-500",
          blue: "border-blue-500",
          indigo: "border-indigo-500",
          deepPurple: "border-deep-purple-500",
          purple: "border-purple-500",
          pink: "border-pink-500",
          red: "border-red-500",
        };
      function y(e) {
        var t,
          n,
          o,
          i,
          l,
          u,
          y = e.placeholder,
          f = e.color,
          b = e.size,
          g = e.outline,
          h = e.error,
          x = e.success,
          w = c(e, [
            "placeholder",
            "color",
            "size",
            "outline",
            "error",
            "success",
          ]),
          j = [],
          v = ["w-full", "relative"];
        h
          ? ((o = m.red), (i = s.red), (l = d.red), (u = m.red))
          : x
          ? ((o = m.green), (i = s.green), (l = d.green), (u = m.green))
          : ((o = "border-gray-300"), (i = s[f]), (l = d[f]), (u = m[f]));
        var O,
          C = [
            "text-gray-400",
            "absolute",
            "left-0",
            "".concat(g ? "-top-1.5" : "-top-0.5"),
            "w-full",
            "h-full",
            "".concat(
              !g && "border border-t-0 border-l-0 border-r-0 border-b-1"
            ),
            o,
            "pointer-events-none",
            "".concat(g && "flex"),
            "".concat(g && "sm" === b && "text-sm"),
            "".concat(g && "leading-10"),
            "".concat(g && "transition-all"),
            "".concat(g && "duration-300"),
          ],
          I = [
            "w-full",
            "h-full",
            "text-gray-800",
            "leading-normal",
            "shadow-none",
            "outline-none",
            "focus:outline-none",
            "focus:ring-0",
            "focus:text-gray-800",
          ],
          k = p(I).concat([
            "".concat(g ? "px-3" : "px-0"),
            "".concat(g && "pt-1.5 pb-0.5"),
            "text-sm",
          ]),
          S = p(I).concat([
            "".concat(g ? "px-3" : "px-0"),
            "".concat(g && "pt-2.5 pb-1.5"),
          ]),
          P = p(I).concat([
            "".concat(g ? "px-3" : "px-0"),
            "".concat(g && "pt-3.5 pb-2.5"),
          ]),
          N = [i, "mt-input", "bg-transparent", "border-none"],
          T = [
            l,
            o,
            "mt-input-outline",
            "bg-transparent",
            "border",
            "border-1",
            "border-gray-300",
            "rounded-lg",
            "focus:border-2",
            "focus:".concat(u),
          ];
        if ("sm" === b) v.push("h-9"), (O = j).push.apply(O, p(k));
        else if ("lg" === b) {
          var B;
          v.push("h-12"), (B = j).push.apply(B, p(P));
        } else {
          var E;
          v.push("h-11"), (E = j).push.apply(E, p(S));
        }
        return (
          g ? (t = j).push.apply(t, p(T)) : (n = j).push.apply(n, p(N)),
          (v = v.join(" ")),
          (C = C.join(" ")),
          (j = j.join(" ")),
          (0, r.jsxs)("div", {
            className: v,
            children: [
              (0, r.jsx)(
                "input",
                a({}, w, {
                  placeholder: " ",
                  className: ""
                    .concat(j, " ")
                    .concat(h && "mt-input-outline-error", " ")
                    .concat(x && "mt-input-outline-success"),
                })
              ),
              (0, r.jsx)("label", {
                className: C,
                children: g
                  ? y
                  : (0, r.jsx)("span", {
                      className: "".concat(
                        "sm" === b && "text-sm",
                        " absolute top-1/4 transition-all duration-300"
                      ),
                      children: y,
                    }),
              }),
              h &&
                (0, r.jsx)("span", {
                  className: "block mt-1 text-xs text-red-500",
                  children: h,
                }),
              x &&
                (0, r.jsx)("span", {
                  className: "block mt-1 text-xs text-green-500",
                  children: x,
                }),
            ],
          })
        );
      }
      (y.defaultProps = { color: "lightBlue", size: "regular", outline: !1 }),
        (y.propTypes = {
          placeholder: i().string.isRequired,
          color: i().string.isRequired,
          size: i().string.isRequired,
          outline: i().bool.isRequired,
          error: i().string,
          success: i().string,
        });
    },
    56489: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        i = n.n(o);
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t, n) {
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
      function a(e) {
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
              u(e, t, n[t]);
            });
        }
        return e;
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
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function p(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return l(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var s = {
          blueGray: "mt-input-blue-gray-500",
          gray: "mt-input-gray-500",
          brown: "mt-input-brown-500",
          deepOrange: "mt-input-deep-orange-500",
          orange: "mt-input-orange-500",
          amber: "mt-input-amber-500",
          yellow: "mt-input-yellow-600",
          lime: "mt-input-lime-500",
          lightGreen: "mt-input-light-green-500",
          green: "mt-input-green-500",
          teal: "mt-input-teal-500",
          cyan: "mt-input-cyan-500",
          lightBlue: "mt-input-light-blue-500",
          blue: "mt-input-blue-500",
          indigo: "mt-input-indigo-500",
          deepPurple: "mt-input-deep-purple-500",
          purple: "mt-input-purple-500",
          pink: "mt-input-pink-500",
          red: "mt-input-red-500",
        },
        d = {
          blueGray: "mt-input-outline-blue-gray-500",
          gray: "mt-input-outline-gray-500",
          brown: "mt-input-outline-brown-500",
          deepOrange: "mt-input-outline-deep-orange-500",
          orange: "mt-input-outline-orange-500",
          amber: "mt-input-outline-amber-500",
          yellow: "mt-input-outline-yellow-600",
          lime: "mt-input-outline-lime-500",
          lightGreen: "mt-input-outline-light-green-500",
          green: "mt-input-outline-green-500",
          teal: "mt-input-outline-teal-500",
          cyan: "mt-input-outline-cyan-500",
          lightBlue: "mt-input-outline-light-blue-500",
          blue: "mt-input-outline-blue-500",
          indigo: "mt-input-outline-indigo-500",
          deepPurple: "mt-input-outline-deep-purple-500",
          purple: "mt-input-outline-purple-500",
          pink: "mt-input-outline-pink-500",
          red: "mt-input-outline-red-500",
        },
        m = {
          blueGray: "border-blue-gray-500",
          gray: "border-gray-500",
          brown: "border-brown-500",
          deepOrange: "border-deep-orange-500",
          orange: "border-orange-500",
          amber: "border-amber-500",
          yellow: "border-yellow-600",
          lime: "border-lime-500",
          lightGreen: "border-light-green-500",
          green: "border-green-500",
          teal: "border-teal-500",
          cyan: "border-cyan-500",
          lightBlue: "border-light-blue-500",
          blue: "border-blue-500",
          indigo: "border-indigo-500",
          deepPurple: "border-deep-purple-500",
          purple: "border-purple-500",
          pink: "border-pink-500",
          red: "border-red-500",
        };
      function y(e) {
        var t,
          n,
          o,
          i,
          l,
          u,
          y,
          f,
          b = e.placeholder,
          g = e.color,
          h = e.size,
          x = e.outline,
          w = e.error,
          j = e.success,
          v = e.iconFamily,
          O = e.iconName,
          C = c(e, [
            "placeholder",
            "color",
            "size",
            "outline",
            "error",
            "success",
            "iconFamily",
            "iconName",
          ]),
          I = [],
          k = ["w-full", "relative"];
        w
          ? ((l = m.red), (u = s.red), (y = d.red), (f = m.red))
          : j
          ? ((l = m.green), (u = s.green), (y = d.green), (f = m.green))
          : ((l = "border-gray-300"), (u = s[g]), (y = d[g]), (f = m[g]));
        var S,
          P = [
            "text-gray-500",
            "absolute",
            "left-0",
            "".concat(x ? "-top-1.5" : "-top-0.5"),
            "w-full",
            "h-full",
            l,
            "pointer-events-none",
            "".concat(
              !x && "border border-t-0 border-l-0 border-r-0 border-b-1"
            ),
            "".concat(x && "flex"),
            "".concat(x && "sm" === h && "text-sm"),
            "".concat(x && "leading-10"),
            "".concat(x && "transition-all"),
            "".concat(x && "duration-300"),
          ],
          N = [
            "w-full",
            "h-full",
            "text-gray-800",
            "leading-normal",
            "shadow-none",
            "outline-none",
            "focus:outline-none",
            "focus:ring-0",
            "focus:text-gray-800",
          ],
          T = p(N).concat([
            "".concat(x ? "pl-2 pr-7" : "pl-0 pr-6"),
            "".concat(x && "pt-1.5 pb-0.5"),
            "text-sm",
          ]),
          B = p(N).concat([
            "".concat(x ? "pl-3 pr-9" : "pl-0 pr-7"),
            "".concat(x && "pt-2.5 pb-1.5"),
          ]),
          E = p(N).concat([
            "".concat(x ? "pl-3 pr-9" : "pl-0 pr-7"),
            "".concat(x && "pt-3.5 pb-2.5"),
          ]),
          R = [u, "mt-input", "bg-transparent", "border", "border-none"],
          z = [
            y,
            l,
            "mt-input-outline",
            "bg-transparent",
            "border",
            "border-1",
            "border-gray-300",
            "rounded-lg",
            "focus:border-2",
            "focus:".concat(f),
          ];
        if ("sm" === h)
          k.push("h-9"), (S = I).push.apply(S, p(T)), (i = "text-lg");
        else if ("lg" === h) {
          var Z;
          k.push("h-12"), (Z = I).push.apply(Z, p(E)), (i = "text-xl");
        } else {
          var D;
          k.push("h-11"), (D = I).push.apply(D, p(B)), (i = "text-2xl");
        }
        return (
          x ? (t = I).push.apply(t, p(z)) : (n = I).push.apply(n, p(R)),
          (k = k.join(" ")),
          (P = P.join(" ")),
          (I = I.join(" ")),
          "material-icons" === v
            ? (o = (0, r.jsx)(
                "span",
                a({}, C, {
                  className: ""
                    .concat(
                      v,
                      " p-0 text-gray-600 text-opacity-60 border-none absolute top-1/2 "
                    )
                    .concat(
                      x ? ("sm" === h ? "right-2" : "right-3") : "right-0",
                      " transform -translate-y-1/2 "
                    )
                    .concat(i),
                  children: O,
                })
              ))
            : "font-awesome" === v &&
              (o = (0, r.jsx)(
                "i",
                a({}, C, {
                  className: "fas "
                    .concat(
                      O,
                      " text-gray-600 text-opacity-60 border-none absolute top-1/2 "
                    )
                    .concat(
                      x ? ("sm" === h ? "right-2" : "right-3") : "right-0",
                      " transform -translate-y-1/2 "
                    )
                    .concat(i),
                })
              )),
          (0, r.jsxs)("div", {
            className: k,
            children: [
              o,
              (0, r.jsx)(
                "input",
                a({}, C, {
                  placeholder: " ",
                  className: ""
                    .concat(I, " ")
                    .concat(w && "mt-input-outline-error", " ")
                    .concat(j && "mt-input-outline-success"),
                })
              ),
              (0, r.jsx)("label", {
                className: P,
                children: x
                  ? b
                  : (0, r.jsx)("span", {
                      className: "".concat(
                        "sm" === h && "text-sm",
                        " absolute top-1/4 transition-all duration-300"
                      ),
                      children: b,
                    }),
              }),
              w &&
                (0, r.jsx)("span", {
                  className: "block mt-1 text-xs text-red-500",
                  children: w,
                }),
            ],
          })
        );
      }
      (y.defaultProps = {
        color: "lightBlue",
        size: "regular",
        outline: !1,
        iconFamily: "material-icons",
      }),
        (y.propTypes = {
          placeholder: i().string.isRequired,
          color: i().string.isRequired,
          size: i().string.isRequired,
          outline: i().bool.isRequired,
          error: i().string,
          success: i().string,
          iconFamily: i().string.isRequired,
          iconName: i().string.isRequired,
        });
    },
    96860: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(85893),
        o = n(67294),
        i = n(94254),
        l = n(84790),
        u = n(91169),
        a = n(27460),
        c = n(28754),
        p = n(62332),
        s = n(64189);
      function d(e, t, n) {
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
      function m(e) {
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
              d(e, t, n[t]);
            });
        }
        return e;
      }
      function y(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function f(e) {
        var t = e.copyText,
          n = e.onCopy,
          i = e.placeholder,
          l = e.size,
          u = e.outline,
          a = e.errorMessage,
          c = e.successMessage,
          d = y(e, [
            "copyText",
            "onCopy",
            "placeholder",
            "size",
            "outline",
            "errorMessage",
            "successMessage",
          ]),
          f = (0, o.useState)("lightBlue"),
          b = f[0],
          g = f[1],
          h = (0, o.useState)("react"),
          x = h[0],
          w = h[1],
          j =
            'import React from "react";\nimport Input from "@material-tailwind/react/Input";\n\nexport default function Input() {\n    return (\n        <Input\n            type="text"\n            color="'
              .concat(b, '"\n            size="')
              .concat(l, '"\n            outline={')
              .concat(u, '}\n            placeholder="')
              .concat(i, '"')
              .concat(a ? '\n            error="'.concat(a, '"') : "")
              .concat(
                c ? '\n            success="'.concat(c, '"') : "",
                "\n        />\n    )\n}"
              );
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(p.Z, {
            copyText: t,
            onCopy: n,
            activeColor: b,
            activeFramework: x,
            codeToShow: j,
            onColorClick: function (e) {
              return g(e);
            },
            onFrameworkClick: function (e) {
              return w(e);
            },
            children: (0, r.jsx)("div", {
              className: "w-72 mx-auto ".concat(a || c ? "mb-10" : ""),
              children: (0, r.jsx)(
                s.Z,
                m(
                  {
                    type: "text",
                    color: b,
                    size: l,
                    outline: u,
                    placeholder: i,
                  },
                  d
                )
              ),
            }),
          }),
        });
      }
      var b = n(56489);
      function g(e) {
        var t = e.copyText,
          n = e.onCopy,
          i = e.placeholder,
          l = e.size,
          u = e.outline,
          a = (0, o.useState)("lightBlue"),
          c = a[0],
          s = a[1],
          d = (0, o.useState)("react"),
          m = d[0],
          y = d[1],
          f =
            'import React from "react";\nimport InputIcon from "@material-tailwind/react/InputIcon";\n\nexport default function Input() {\n    return (\n        <InputIcon\n            type="text"\n            color="'
              .concat(c, '"\n            size="')
              .concat(l, '"\n            outline={')
              .concat(u, '}\n            placeholder="')
              .concat(
                i,
                '"\n            iconFamily="material-icons"\n            iconName="person"\n        />\n    )\n}'
              );
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(p.Z, {
            copyText: t,
            onCopy: n,
            activeColor: c,
            activeFramework: m,
            codeToShow: f,
            onColorClick: function (e) {
              return s(e);
            },
            onFrameworkClick: function (e) {
              return y(e);
            },
            children: (0, r.jsx)("div", {
              className: "w-72 mx-auto",
              children: (0, r.jsx)(b.Z, {
                type: "text",
                color: c,
                size: l,
                outline: u,
                placeholder: i,
                iconFamily: "material-icons",
                iconName: "person",
              }),
            }),
          }),
        });
      }
      function h() {
        var e = (0, o.useState)(null),
          t = e[0],
          n = e[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.Z, { title: "React Inputs" }),
            (0, r.jsx)(u.Z, {}),
            (0, r.jsxs)(l.Z, {
              children: [
                (0, r.jsx)(a.Z, {
                  title: "React Inputs",
                  description:
                    "Easily create inputs with different status and sizes using Material Tailwind inputs",
                }),
                (0, r.jsx)(c.Z, { title: "Input" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Input",
                  size: "regular",
                  outline: !1,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Outline Input" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Input",
                  size: "regular",
                  outline: !0,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Small Input" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Small Input",
                  size: "sm",
                  outline: !1,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Large Input" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Large Input",
                  size: "lg",
                  outline: !1,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Small Outline Input" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Small Outline Input",
                  size: "sm",
                  outline: !0,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Large Outline Input" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Large Outline Input",
                  size: "lg",
                  outline: !0,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Input with Icon" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Input with Icon",
                  size: "regular",
                  outline: !1,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Outline Input with Icon" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Input with Icon",
                  size: "regular",
                  outline: !0,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Input with Error" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Input with Error",
                  size: "Regular",
                  outline: !1,
                  errorMessage: "Its an error",
                  error: "Its an error",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Outline Input with Error" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Input with Error",
                  size: "Regular",
                  outline: !0,
                  errorMessage: "Its an error",
                  error: "Its an error",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Input with Success" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Input with Success",
                  size: "Regular",
                  outline: !1,
                  successMessage: "Its a success",
                  success: "Its a success",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Outline Input with Success" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Input with Success",
                  size: "Regular",
                  outline: !0,
                  successMessage: "Its a success",
                  success: "Its a success",
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
      return (t = 5567), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
