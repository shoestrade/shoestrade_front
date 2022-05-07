(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7739],
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
          u,
          c,
          s = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((a = n()),
            (l = document.createRange()),
            (u = document.getSelection()),
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
            c.addEventListener("copy", function (n) {
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
            document.body.appendChild(c),
            l.selectNodeContents(c),
            u.addRange(l),
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
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(l)
              : u.removeAllRanges()),
            c && document.body.removeChild(c),
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
      function u(e, t) {
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
      function c(e, t) {
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
      function b(e, t, r) {
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
          c(this, t);
          for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++)
            a[l] = arguments[l];
          return (
            b(
              f((r = p(this, (e = d(t)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var t = r.props,
                  i = t.text,
                  a = t.onCopy,
                  l = t.children,
                  u = t.options,
                  c = n.default.Children.only(l),
                  s = (0, o.default)(i, u);
                a && a(i, s),
                  c &&
                    c.props &&
                    "function" === typeof c.props.onClick &&
                    c.props.onClick(e);
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
                  r = u(e, ["text", "onCopy", "options", "children"]),
                  o = n.default.Children.only(t);
                return n.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(r, !0).forEach(function (t) {
                            b(e, t, r[t]);
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
      (t.CopyToClipboard = m),
        b(m, "defaultProps", { onCopy: void 0, options: void 0 });
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
    2979: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/textareas",
        function () {
          return r(82378);
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
        u = r(74855),
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
                      children: c.map(function (e, t) {
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
                  (0, n.jsx)(u.CopyToClipboard, {
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
    28754: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        i = r.n(o);
      function a(e) {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("h2", {
              className: "font-serif font-medium text-xl mb-2 text-gray-900",
              children: e.title,
            }),
            (0, n.jsx)("p", {
              className: "text-gray-700 mb-4 font-light",
              children: e.description,
            }),
          ],
        });
      }
      a.propTypes = {
        title: i().oneOfType([i().string, i().node]),
        description: i().oneOfType([i().string, i().node]),
      };
    },
    77808: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return y;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        i = r.n(o);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function l(e, t, r) {
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
      function u(e) {
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
              l(e, t, r[t]);
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
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
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
            if ("string" === typeof e) return a(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return a(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var p = {
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
        f = {
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
          r,
          o,
          i,
          a,
          l = e.placeholder,
          y = e.color,
          b = e.size,
          m = e.outline,
          g = e.error,
          h = e.success,
          x = c(e, [
            "placeholder",
            "color",
            "size",
            "outline",
            "error",
            "success",
          ]),
          w = [],
          j = ["w-full", "h-auto", "relative"];
        g
          ? ((o = f.red), (i = p.red), (a = d.red))
          : h
          ? ((o = f.green), (i = p.green), (a = d.green))
          : ((o = "border-gray-300"), (i = p[y]), (a = d[y]));
        var v,
          O,
          C = [
            "text-gray-400",
            "absolute",
            "left-0",
            "".concat(m ? "-top-1.5" : "-top-0.5"),
            "w-full",
            "h-full",
            "".concat(
              !m && "border border-t-0 border-l-0 border-r-0 border-b-1"
            ),
            o,
            "pointer-events-none",
            "".concat(m && "flex"),
            "".concat(m && "sm" === b && "text-sm"),
            "".concat(m && "leading-10"),
            "".concat(m && "transition-all"),
            "".concat(m && "duration-300"),
          ],
          T = [
            "w-full",
            "h-full",
            "text-gray-800",
            "leading-normal",
            "shadow-none",
            "outline-none",
            "resize-none",
            "focus:outline-none",
            "focus:ring-0",
            "focus:text-gray-800",
          ],
          k = s(T).concat([
            "".concat(m ? "px-3" : "px-0"),
            "".concat(m && "pt-1.5 pb-0.5"),
            "text-sm",
          ]),
          P = s(T).concat([
            "".concat(m ? "px-3" : "px-0"),
            "".concat(m && "pt-2.5 pb-1.5"),
          ]),
          S = [i, "mt-input", "texterea", "bg-transparent", "border-none"],
          E = [
            a,
            o,
            "mt-input-outline",
            "bg-transparent",
            "border",
            "border-1",
            "border-gray-300",
            "rounded-lg",
            "focus:border-2",
          ];
        "sm" === b ? (v = w).push.apply(v, s(k)) : (O = w).push.apply(O, s(P));
        return (
          m ? (t = w).push.apply(t, s(E)) : (r = w).push.apply(r, s(S)),
          (j = j.join(" ")),
          (C = C.join(" ")),
          (w = w.join(" ")),
          (0, n.jsxs)("div", {
            className: j,
            children: [
              (0, n.jsx)(
                "textarea",
                u({}, x, {
                  placeholder: " ",
                  className: "\n                    "
                    .concat(w, "\n                    ")
                    .concat(
                      g && m && "mt-input-outline-error",
                      "\n                    "
                    )
                    .concat(h && m && "mt-input-outline-success"),
                  rows: "7",
                })
              ),
              (0, n.jsx)("label", {
                className: C,
                children: m
                  ? l
                  : (0, n.jsx)("span", {
                      className: "".concat(
                        "sm" === b && "text-sm",
                        " absolute top-0 transition-all duration-300"
                      ),
                      children: l,
                    }),
              }),
              g &&
                (0, n.jsx)("span", {
                  className: "block absolute ".concat(
                    m ? "-bottom-4" : "-bottom-5",
                    " text-xs text-red-500"
                  ),
                  children: g,
                }),
              h &&
                (0, n.jsx)("span", {
                  className: "block absolute ".concat(
                    m ? "-bottom-4" : "-bottom-5",
                    " text-xs text-green-500"
                  ),
                  children: h,
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
    82378: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return m;
          },
        });
      var n = r(85893),
        o = r(67294),
        i = r(94254),
        a = r(84790),
        l = r(91169),
        u = r(27460),
        c = r(28754),
        s = r(62332),
        p = r(77808);
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
      function f(e) {
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
      function y(e, t) {
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
      function b(e) {
        var t = e.copyText,
          r = e.onCopy,
          i = e.placeholder,
          a = e.size,
          l = e.outline,
          u = e.errorMessage,
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
          b = (0, o.useState)("lightBlue"),
          m = b[0],
          g = b[1],
          h = (0, o.useState)("react"),
          x = h[0],
          w = h[1],
          j =
            'import React from "react";\nimport Textarea from "@material-tailwind/react/Textarea";\n\nexport default function Textarea() {\n    return (\n        <Textarea\n            color="'
              .concat(m, '"\n            size="')
              .concat(a, '"\n            outline={')
              .concat(l, '}\n            placeholder="')
              .concat(i, '"')
              .concat(u ? '\n            error="'.concat(u, '"') : "")
              .concat(
                c ? '\n            success="'.concat(c, '"') : "",
                "\n        />\n    )\n}"
              );
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(s.Z, {
            copyText: t,
            onCopy: r,
            activeColor: m,
            activeFramework: x,
            codeToShow: j,
            onColorClick: function (e) {
              return g(e);
            },
            onFrameworkClick: function (e) {
              return w(e);
            },
            children: (0, n.jsx)("div", {
              className: "w-full p-10  mx-auto ".concat(u || c ? "mb-10" : ""),
              children: (0, n.jsx)(
                p.Z,
                f({ color: m, size: a, outline: l, placeholder: i }, d)
              ),
            }),
          }),
        });
      }
      function m() {
        var e = (0, o.useState)(null),
          t = e[0],
          r = e[1];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.Z, { title: "React Textarea" }),
            (0, n.jsx)(l.Z, {}),
            (0, n.jsxs)(a.Z, {
              children: [
                (0, n.jsx)(u.Z, {
                  title: "React Textarea",
                  description:
                    "Easily create textarea with different status and sizes using Material Tailwind textarea component",
                }),
                (0, n.jsx)(c.Z, { title: "Textarea" }),
                (0, n.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Textarea",
                  size: "regular",
                  outline: !1,
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Outline Textare" }),
                (0, n.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Textarea",
                  size: "regular",
                  outline: !0,
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Textarea with small font size" }),
                (0, n.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Textarea with small font size",
                  size: "sm",
                  outline: !1,
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, {
                  title: "Outline Textarea with small font size",
                }),
                (0, n.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Textarea with small font size",
                  size: "sm",
                  outline: !0,
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Textarea with Error" }),
                (0, n.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Textarea with Error",
                  size: "Regular",
                  outline: !1,
                  errorMessage: "Its an error",
                  error: "Its an error",
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Outline Textarea with Error" }),
                (0, n.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Textarea with Error",
                  size: "Regular",
                  outline: !0,
                  errorMessage: "Its an error",
                  error: "Its an error",
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Textarea with Success" }),
                (0, n.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Textarea with Success",
                  size: "Regular",
                  outline: !1,
                  successMessage: "Its a success",
                  success: "Its a success",
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Outline Textarea with Success" }),
                (0, n.jsx)(b, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Textarea with Success",
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
      return (t = 2979), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
