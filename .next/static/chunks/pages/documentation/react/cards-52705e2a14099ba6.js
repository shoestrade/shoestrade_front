(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [143],
  {
    20640: function (e, t, r) {
      "use strict";
      var n = r(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          a,
          l,
          i,
          s,
          c,
          d = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((l = n()),
            (i = document.createRange()),
            (s = document.getSelection()),
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
                  var a = o[t.format] || o.default;
                  window.clipboardData.setData(a, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(c),
            i.selectNodeContents(c),
            s.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          d = !0;
        } catch (u) {
          r && console.error("unable to copy using execCommand: ", u),
            r && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (d = !0);
          } catch (u) {
            r && console.error("unable to copy using clipboardData: ", u),
              r && console.error("falling back to prompt"),
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
          s &&
            ("function" == typeof s.removeRange
              ? s.removeRange(i)
              : s.removeAllRanges()),
            c && document.body.removeChild(c),
            l();
        }
        return d;
      };
    },
    74300: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var n = a(r(67294)),
        o = a(r(20640));
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
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
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
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function u(e, t) {
        return !t || ("object" !== l(t) && "function" !== typeof t) ? m(e) : t;
      }
      function p(e) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          p(e)
        );
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
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
      function g(e, t, r) {
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
      var h = (function (e) {
        function t() {
          var e, r;
          c(this, t);
          for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++)
            l[i] = arguments[i];
          return (
            g(
              m((r = u(this, (e = p(t)).call.apply(e, [this].concat(l))))),
              "onClick",
              function (e) {
                var t = r.props,
                  a = t.text,
                  l = t.onCopy,
                  i = t.children,
                  s = t.options,
                  c = n.default.Children.only(i),
                  d = (0, o.default)(a, s);
                l && l(a, d),
                  c &&
                    c.props &&
                    "function" === typeof c.props.onClick &&
                    c.props.onClick(e);
              }
            ),
            r
          );
        }
        var r, a, l;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(t, e),
          (r = t),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = s(e, ["text", "onCopy", "options", "children"]),
                  o = n.default.Children.only(t);
                return n.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? i(r, !0).forEach(function (t) {
                            g(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : i(r).forEach(function (t) {
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
          a && d(r.prototype, a),
          l && d(r, l),
          t
        );
      })(n.default.PureComponent);
      (t.CopyToClipboard = h),
        g(h, "defaultProps", { onCopy: void 0, options: void 0 });
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
    49571: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/cards",
        function () {
          return r(49021);
        },
      ]);
    },
    80087: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        a = r.n(o);
      function l(e) {
        var t = e.children,
          r = e.className;
        return (0, n.jsx)("div", { className: "p-4 ".concat(r), children: t });
      }
      l.propTypes = { children: a().node.isRequired };
    },
    37968: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        a = r.n(o);
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function i(e) {
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
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
          blueGray: "from-blue-gray-500",
          gray: "from-gray-500",
          brown: "from-brown-500",
          deepOrange: "from-deep-orange-500",
          orange: "from-orange-500",
          amber: "from-amber-500",
          yellow: "from-yellow-600",
          lime: "from-lime-500",
          lightGreen: "from-light-green-500",
          green: "from-green-500",
          teal: "from-teal-500",
          cyan: "from-cyan-500",
          lightBlue: "from-light-blue-500",
          blue: "from-blue-500",
          indigo: "from-indigo-500",
          deepPurple: "from-deep-purple-500",
          purple: "from-purple-500",
          pink: "from-pink-500",
          red: "from-red-500",
        },
        c = {
          blueGray: "to-blue-gray-700",
          gray: "to-gray-700",
          brown: "to-brown-700",
          deepOrange: "to-deep-orange-700",
          orange: "to-orange-700",
          amber: "to-amber-700",
          yellow: "to-yellow-800",
          lime: "to-lime-700",
          lightGreen: "to-light-green-700",
          green: "to-green-700",
          teal: "to-teal-700",
          cyan: "to-cyan-700",
          lightBlue: "to-light-blue-700",
          blue: "to-blue-700",
          indigo: "to-indigo-700",
          deepPurple: "to-deep-purple-700",
          purple: "to-purple-700",
          pink: "to-pink-700",
          red: "to-red-700",
        },
        d = {
          blueGray: "shadow-lg-blue-gray",
          gray: "shadow-lg-gray",
          brown: "shadow-lg-brown",
          deepOrange: "shadow-lg-deep-orange",
          orange: "shadow-lg-orange",
          amber: "shadow-lg-amber",
          yellow: "shadow-lg-yellow",
          lime: "shadow-lg-lime",
          lightGreen: "shadow-lg-light-green",
          green: "shadow-lg-green",
          teal: "shadow-lg-teal",
          cyan: "shadow-lg-cyan",
          lightBlue: "shadow-lg-light-blue",
          blue: "shadow-lg-blue",
          indigo: "shadow-lg-indigo",
          deepPurple: "shadow-lg-deep-purple",
          purple: "shadow-lg-purple",
          pink: "shadow-lg-pink",
          red: "shadow-lg-red",
        },
        u = {
          left: "justify-start",
          right: "justify-end",
          center: "justify-center",
        };
      function p(e) {
        var t,
          r = e.children,
          o = e.color,
          a = e.size,
          l = e.contentPosition,
          p = e.iconOnly,
          m = e.className,
          f = [],
          g = [
            p ? "w-20" : "w-full",
            "h-20",
            "py-4",
            p ? "px-4" : "px-8",
            u[l],
          ],
          h = [
            p ? "w-24" : "w-full",
            "h-24",
            "py-4",
            p ? "px-4" : "px-8",
            u[l],
          ],
          x = [
            p ? "w-28" : "w-full",
            "h-28",
            "py-4",
            p ? "px-4" : "px-8",
            u[l],
          ];
        if ("sm" === a) (t = f).push.apply(t, i(g));
        else if ("lg" === a) {
          var y;
          (y = f).push.apply(y, i(x));
        } else {
          var b;
          (b = f).push.apply(b, i(h));
        }
        return (
          (f = f.join(" ")),
          (0, n.jsx)("div", {
            className: "bg-gradient-to-tr "
              .concat(s[o], " ")
              .concat(
                c[o],
                " -mt-10 mb-4 rounded-xl text-white grid items-center "
              )
              .concat(f, " ")
              .concat(d[o], " ")
              .concat(m),
            children: r,
          })
        );
      }
      (p.defaultProps = {
        color: "lightBlue",
        size: "regular",
        contentPosition: "center",
        iconOnly: !1,
      }),
        (p.propTypes = {
          children: a().node.isRequired,
          color: a().string.isRequired,
          contentPosition: a().string.isRequired,
          iconOnly: a().bool.isRequired,
        });
    },
    66218: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        a = r.n(o);
      function l(e) {
        var t = e.children,
          r = e.className;
        return (0, n.jsx)("div", {
          className: "flex flex-wrap border-b border-gray-200 ".concat(r),
          children: t,
        });
      }
      l.propTypes = { children: a().node.isRequired };
    },
    69904: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        a = r.n(o);
      function l(e) {
        var t = e.title,
          r = e.amount,
          o = e.className;
        return (0, n.jsxs)("div", {
          className:
            "w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right ".concat(
              o
            ),
          children: [
            (0, n.jsx)("h5", {
              className:
                "text-gray-500 font-light tracking-wide text-base mb-1",
              children: t,
            }),
            (0, n.jsx)("span", {
              className: "text-3xl text-gray-900",
              children: r,
            }),
          ],
        });
      }
      l.propTypes = {
        title: a().string.isRequired,
        amount: a().string.isRequired,
      };
    },
    54739: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        a = r.n(o),
        l = {
          blueGray: "text-blue-gray-500",
          gray: "text-gray-500",
          brown: "text-brown-500",
          deepOrange: "text-deep-orange-500",
          orange: "text-orange-500",
          amber: "text-amber-500",
          yellow: "text-yellow-600",
          lime: "text-lime-500",
          lightGreen: "text-light-green-500",
          green: "text-green-500",
          teal: "text-teal-500",
          cyan: "text-cyan-500",
          lightBlue: "text-light-blue-500",
          blue: "text-blue-500",
          indigo: "text-indigo-500",
          deepPurple: "text-deep-purple-500",
          purple: "text-purple-500",
          pink: "text-pink-500",
          red: "text-red-500",
        };
      function i(e) {
        var t = e.children,
          r = e.color,
          o = e.amount,
          a = e.date,
          i = e.className;
        return (0, n.jsxs)("div", {
          className: "text-sm text-gray-700 pt-4 flex items-center ".concat(i),
          children: [
            t,
            (0, n.jsx)("span", {
              className: "".concat(l[r], " ml-1 mr-2"),
              children: o,
            }),
            (0, n.jsx)("span", {
              className: "font-light whitespace-nowrap",
              children: a,
            }),
          ],
        });
      }
      (i.defaultProps = { color: "lightBlue" }),
        (i.propTypes = {
          children: a().node,
          color: a().string.isRequired,
          amount: a().string.isRequired,
          date: a().string.isRequired,
        });
    },
    62332: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        a = r.n(o),
        l = r(73483),
        i = r(84283),
        s = r(74855),
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
        d = [
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
      function u(e) {
        var t = e.children,
          r = e.activeColor,
          o = (e.activeFramework, e.onColorClick),
          a = (e.onFrameworkClick, e.onCopy),
          u = e.codeToShow,
          p = e.copyText;
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
                                  r === d[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              o(d[t]), a(!1);
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
                  (0, n.jsx)(s.CopyToClipboard, {
                    text: u,
                    onCopy: function () {
                      return a(!0);
                    },
                    children: (0, n.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: p,
                    }),
                  }),
                  (0, n.jsx)(l.Z, {
                    language: "jsx",
                    style: i.Vg,
                    children: u,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      u.propTypes = {
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
    79827: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        switch (e) {
          case "react":
          case "angular":
          case "html":
          case "vue":
          case "javascript":
            break;
          default:
            t(!0), r(e);
        }
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    28754: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(85893),
        o = (r(67294), r(45697)),
        a = r.n(o);
      function l(e) {
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
      l.propTypes = {
        title: a().oneOfType([a().string, a().node]),
        description: a().oneOfType([a().string, a().node]),
      };
    },
    49021: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return Z;
          },
        });
      var n = r(85893),
        o = r(67294),
        a = r(94254),
        l = r(84790),
        i = r(91169),
        s = r(27460),
        c = r(28754),
        d = r(62332),
        u = r(79827),
        p = r(99059),
        m = r(44104),
        f = r(18723),
        g = r(80087),
        h = r(74975),
        x = r(69651),
        y = r(61398);
      function b(e) {
        var t = e.copyText,
          r = e.onCopy,
          a = (0, o.useState)("react")[0],
          l = (0, o.useState)(!1),
          i = l[0],
          s = l[1],
          c = (0, o.useState)(),
          b = c[0],
          w = c[1],
          v = (0, u.Z)(a, s, w);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            i
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return s(!1);
                      },
                      children: (0, n.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, n.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, n.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, n.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return s(!1);
                                  },
                                  children: (0, n.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, n.jsxs)("p", {
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
                    (0, n.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, n.jsx)(d.Z, {
              copyText: t,
              onCopy: r,
              activeFramework: a,
              codeToShow:
                'import React from "react";\nimport Card from "@material-tailwind/react/Card";\nimport CardImage from "@material-tailwind/react/CardImage";\nimport CardBody from "@material-tailwind/react/CardBody";\nimport CardFooter from "@material-tailwind/react/CardFooter";\nimport H6 from "@material-tailwind/react/Heading6";\nimport Paragraph from "@material-tailwind/react/Paragraph";\nimport Button from "@material-tailwind/react/Button";\n\nexport default function Card() {\n    return (\n        <Card>\n            <CardImage\n                src="shorturl.at/psBK0"\n                alt="Card Image"\n            />\n\n            <CardBody>\n                <H6 color="gray">Card Title</H6>\n                <Paragraph color="gray">\n                    Don\'t be scared of the truth because we need to restart the human\n                    foundation in truth And I love you like Kanye loves Kanye I love\n                    Rick Owens\u2019 bed design but the back is...\n                </Paragraph>\n            </CardBody>\n\n            <CardFooter>\n                <Button color="lightBlue" size="lg" ripple="light">\n                    Read More\n                </Button>\n            </CardFooter>\n        </Card>\n    );\n}',
              onFrameworkClick: v,
              children: (0, n.jsx)("div", {
                className: "flex justify-center bg-gray-100 rounded",
                children: (0, n.jsx)("div", {
                  className: "w-96 pb-10 pt-16",
                  children: (0, n.jsxs)(p.Z, {
                    children: [
                      (0, n.jsx)(m.Z, {
                        src: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
                        alt: "Card Image",
                      }),
                      (0, n.jsxs)(f.Z, {
                        children: [
                          (0, n.jsx)(h.Z, {
                            color: "gray",
                            children: "Card Title",
                          }),
                          (0, n.jsx)(x.Z, {
                            color: "gray",
                            children:
                              "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...",
                          }),
                        ],
                      }),
                      (0, n.jsx)(g.Z, {
                        children: (0, n.jsx)(y.Z, {
                          color: "lightBlue",
                          size: "lg",
                          ripple: "light",
                          children: "Read More",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var w = r(37968),
        v = r(56489),
        j = r(18513);
      function C(e) {
        var t = e.copyText,
          r = e.onCopy,
          a = (0, o.useState)("react")[0],
          l = (0, o.useState)(!1),
          i = l[0],
          s = l[1],
          c = (0, o.useState)(),
          m = c[0],
          h = c[1],
          x = (0, u.Z)(a, s, h);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            i
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return s(!1);
                      },
                      children: (0, n.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, n.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, n.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, n.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return s(!1);
                                  },
                                  children: (0, n.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, n.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  m,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, n.jsx)(d.Z, {
              copyText: t,
              onCopy: r,
              activeFramework: a,
              codeToShow:
                'import React from "react";\nimport Card from "@material-tailwind/react/Card";\nimport CardHeader from "@material-tailwind/react/CardHeader";\nimport CardBody from "@material-tailwind/react/CardBody";\nimport CardFooter from "@material-tailwind/react/CardFooter";\nimport InputIcon from "@material-tailwind/react/InputIcon";\nimport Button from "@material-tailwind/react/Button";\nimport H5 from "@material-tailwind/react/Heading5";\n\nexport default function Card() {\n    return (\n        <Card>\n            <CardHeader color="lightBlue" size="lg">\n                <H5 color="white">Login</H5>\n            </CardHeader>\n\n            <CardBody>\n                <div className="mt-4 mb-8 px-4">\n                    <InputIcon\n                        type="text"\n                        color="lightBlue"\n                        placeholder="First Name"\n                        iconName="account_circle"\n                    />\n                </div>\n                <div className="mb-8 px-4">\n                    <InputIcon\n                        type="email"\n                        color="lightBlue"\n                        placeholder="Email Address"\n                        iconName="email"\n                    />\n                </div>\n                <div className="mb-4 px-4">\n                    <InputIcon\n                        type="password"\n                        color="lightBlue"\n                        placeholder="password"\n                        iconName="lock"\n                    />\n                </div>\n            </CardBody>\n            <CardFooter>\n                <div className="flex justify-center">\n                    <Button\n                        color="lightBlue"\n                        buttonType="link"\n                        size="lg"\n                        ripple="dark"\n                    >\n                        Get Started\n                    </Button>\n                </div>\n            </CardFooter>\n        </Card>\n    );\n}',
              onFrameworkClick: x,
              children: (0, n.jsx)("div", {
                className: "flex justify-center bg-gray-100 rounded",
                children: (0, n.jsx)("div", {
                  className: "w-96 pb-10 pt-16",
                  children: (0, n.jsxs)(p.Z, {
                    children: [
                      (0, n.jsx)(w.Z, {
                        color: "lightBlue",
                        size: "lg",
                        children: (0, n.jsx)(j.Z, {
                          color: "white",
                          children: "Login",
                        }),
                      }),
                      (0, n.jsxs)(f.Z, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "mt-4 mb-8 px-4",
                            children: (0, n.jsx)(v.Z, {
                              type: "text",
                              color: "lightBlue",
                              placeholder: "First Name",
                              iconName: "account_circle",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "mb-8 px-4",
                            children: (0, n.jsx)(v.Z, {
                              type: "email",
                              color: "lightBlue",
                              placeholder: "Email Address",
                              iconName: "email",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "mb-4 px-4",
                            children: (0, n.jsx)(v.Z, {
                              type: "password",
                              color: "lightBlue",
                              placeholder: "password",
                              iconName: "lock",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)(g.Z, {
                        children: (0, n.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, n.jsx)(y.Z, {
                            color: "lightBlue",
                            buttonType: "link",
                            size: "lg",
                            ripple: "dark",
                            children: "Get Started",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var k = r(66218),
        N = r(69904),
        O = r(54739),
        S = r(5128);
      function T(e) {
        var t = e.copyText,
          r = e.onCopy,
          a = (0, o.useState)("react")[0],
          l = (0, o.useState)(!1),
          i = l[0],
          s = l[1],
          c = (0, o.useState)(),
          m = c[0],
          f = c[1],
          g = (0, u.Z)(a, s, f);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            i
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return s(!1);
                      },
                      children: (0, n.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, n.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, n.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, n.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return s(!1);
                                  },
                                  children: (0, n.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, n.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  m,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, n.jsx)(d.Z, {
              copyText: t,
              onCopy: r,
              activeFramework: a,
              codeToShow:
                'import React from "react";\nimport Card from "@material-tailwind/react/Card";\nimport CardRow from "@material-tailwind/react/CardRow";\nimport CardHeader from "@material-tailwind/react/CardHeader";\nimport CardStatus from "@material-tailwind/react/CardStatus";\nimport CardStatusFooter from "@material-tailwind/react/CardStatusFooter";\nimport Icon from "@material-tailwind/react/Icon";\n\nexport default function Card() {\n    return (\n        <Card>\n            <CardRow>\n                <CardHeader color="lightBlue" size="lg" iconOnly>\n                    <Icon name="groups" size="5xl" color="white" />\n                </CardHeader>\n\n                <CardStatus title="Users" amount="350,000" />\n            </CardRow>\n\n            <CardStatusFooter color="green" amount="97%" date="Since one week">\n                <Icon color="green" name="arrow_upward" />\n            </CardStatusFooter>\n        </Card>\n    );\n}',
              onFrameworkClick: g,
              children: (0, n.jsx)("div", {
                className: "flex justify-center bg-gray-100 rounded",
                children: (0, n.jsx)("div", {
                  className: "w-96 pb-10 pt-16",
                  children: (0, n.jsxs)(p.Z, {
                    children: [
                      (0, n.jsxs)(k.Z, {
                        children: [
                          (0, n.jsx)(w.Z, {
                            color: "lightBlue",
                            size: "lg",
                            iconOnly: !0,
                            children: (0, n.jsx)(S.Z, {
                              name: "groups",
                              size: "5xl",
                              color: "white",
                            }),
                          }),
                          (0, n.jsx)(N.Z, {
                            title: "Users",
                            amount: "350,000",
                          }),
                        ],
                      }),
                      (0, n.jsx)(O.Z, {
                        color: "green",
                        amount: "97%",
                        date: "Since one week",
                        children: (0, n.jsx)(S.Z, {
                          color: "green",
                          name: "arrow_upward",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function Z() {
        var e = (0, o.useState)(null),
          t = e[0],
          r = e[1];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(a.Z, { title: "React Cards" }),
            (0, n.jsx)(i.Z, {}),
            (0, n.jsxs)(l.Z, {
              children: [
                (0, n.jsx)(s.Z, {
                  title: "React Cards",
                  description:
                    "Material Tailwind cards provide a flexible and extensible content container with multiple variants and options, more cards coming soon.",
                }),
                (0, n.jsx)(c.Z, { title: "Blog Card" }),
                (0, n.jsx)(b, {
                  copyText: "Alerts" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Alerts" : "");
                  },
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Login Card" }),
                (0, n.jsx)(C, {
                  copyText: "Alerts" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Alerts" : "");
                  },
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Status Card" }),
                (0, n.jsx)(T, {
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
    e.O(0, [9774, 3335, 573, 7554, 2730, 6954, 2888, 179], function () {
      return (t = 49571), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
