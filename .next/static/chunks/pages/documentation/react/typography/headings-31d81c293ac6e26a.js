(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2462],
  {
    20640: function (e, t, n) {
      "use strict";
      var r = n(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          l,
          i,
          a,
          c,
          s,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((i = r()),
            (a = document.createRange()),
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
                  var l = o[t.format] || o.default;
                  window.clipboardData.setData(l, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(s),
            a.selectNodeContents(s),
            c.addRange(a),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (d) {
          n && console.error("unable to copy using execCommand: ", d),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (d) {
            n && console.error("unable to copy using clipboardData: ", d),
              n && console.error("falling back to prompt"),
              (l = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(l, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(a)
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
      var r = l(n(67294)),
        o = l(n(20640));
      function l(e) {
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
      function a(e, t) {
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
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
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
      function d(e, t) {
        return !t || ("object" !== i(t) && "function" !== typeof t) ? f(e) : t;
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
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e, t) {
        return (
          (x =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          x(e, t)
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
          s(this, t);
          for (var l = arguments.length, i = new Array(l), a = 0; a < l; a++)
            i[a] = arguments[a];
          return (
            m(
              f((n = d(this, (e = p(t)).call.apply(e, [this].concat(i))))),
              "onClick",
              function (e) {
                var t = n.props,
                  l = t.text,
                  i = t.onCopy,
                  a = t.children,
                  c = t.options,
                  s = r.default.Children.only(a),
                  u = (0, o.default)(l, c);
                i && i(l, u),
                  s &&
                    s.props &&
                    "function" === typeof s.props.onClick &&
                    s.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, l, i;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && x(e, t);
          })(t, e),
          (n = t),
          (l = [
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
                        ? a(n, !0).forEach(function (t) {
                            m(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : a(n).forEach(function (t) {
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
          l && u(n.prototype, l),
          i && u(n, i),
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
    23739: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/typography/headings",
        function () {
          return n(92590);
        },
      ]);
    },
    62332: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        l = n.n(o),
        i = n(73483),
        a = n(84283),
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
      function d(e) {
        var t = e.children,
          n = e.activeColor,
          o = (e.activeFramework, e.onColorClick),
          l = (e.onFrameworkClick, e.onCopy),
          d = e.codeToShow,
          p = e.copyText;
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
                              o(u[t]), l(!1);
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
                    text: d,
                    onCopy: function () {
                      return l(!0);
                    },
                    children: (0, r.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: p,
                    }),
                  }),
                  (0, r.jsx)(i.Z, {
                    language: "jsx",
                    style: a.Vg,
                    children: d,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      d.propTypes = {
        copyText: l().string.isRequired,
        onCopy: l().func.isRequired,
        activeColor: l().oneOf([
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
        activeFramework: l().oneOf(["html", "react", "vue", "angular"]),
        codeToShow: l().string.isRequired,
        children: l().node.isRequired,
        onColorClick: l().func,
        onFrameworkClick: l().func,
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
        l = n.n(o);
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
        title: l().oneOfType([l().string, l().node]),
        description: l().oneOfType([l().string, l().node]),
      };
    },
    46464: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        l = n.n(o);
      function i(e, t, n) {
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
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
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
      function s(e) {
        var t = e.children,
          n = e.color,
          o = a(e, ["children", "color"]);
        return (0, r.jsx)(
          "h1",
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
                  i(e, t, n[t]);
                });
            }
            return e;
          })({}, o, {
            className: "".concat(
              c[n],
              " text-6xl font-serif font-bold leading-normal mt-0 mb-2"
            ),
            children: t,
          })
        );
      }
      (s.defaultProps = { color: "gray" }),
        (s.propTypes = {
          children: l().node.isRequired,
          color: l().string.isRequired,
        });
    },
    80471: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        l = n.n(o);
      function i(e, t, n) {
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
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
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
      function s(e) {
        var t = e.children,
          n = e.color,
          o = a(e, ["children", "color"]);
        return (0, r.jsx)(
          "h1",
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
                  i(e, t, n[t]);
                });
            }
            return e;
          })({}, o, {
            className: "".concat(
              c[n],
              " text-5xl font-serif font-bold leading-normal mt-0 mb-2"
            ),
            children: t,
          })
        );
      }
      (s.defaultProps = { color: "gray" }),
        (s.propTypes = {
          children: l().node.isRequired,
          color: l().string.isRequired,
        });
    },
    45918: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        l = n.n(o);
      function i(e, t, n) {
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
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
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
      function s(e) {
        var t = e.children,
          n = e.color,
          o = a(e, ["children", "color"]);
        return (0, r.jsx)(
          "h1",
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
                  i(e, t, n[t]);
                });
            }
            return e;
          })({}, o, {
            className: "".concat(
              c[n],
              " text-4xl font-serif font-bold leading-normal mt-0 mb-2"
            ),
            children: t,
          })
        );
      }
      (s.defaultProps = { color: "gray" }),
        (s.propTypes = {
          children: l().node.isRequired,
          color: l().string.isRequired,
        });
    },
    74731: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        l = n.n(o);
      function i(e, t, n) {
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
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
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
      function s(e) {
        var t = e.children,
          n = e.color,
          o = a(e, ["children", "color"]);
        return (0, r.jsx)(
          "h1",
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
                  i(e, t, n[t]);
                });
            }
            return e;
          })({}, o, {
            className: "".concat(
              c[n],
              " text-3xl font-serif font-bold leading-normal mt-0 mb-2"
            ),
            children: t,
          })
        );
      }
      (s.defaultProps = { color: "gray" }),
        (s.propTypes = {
          children: l().node.isRequired,
          color: l().string.isRequired,
        });
    },
    18513: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        l = n.n(o);
      function i(e, t, n) {
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
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
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
      function s(e) {
        var t = e.children,
          n = e.color,
          o = a(e, ["children", "color"]);
        return (0, r.jsx)(
          "h1",
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
                  i(e, t, n[t]);
                });
            }
            return e;
          })({}, o, {
            className: "".concat(
              c[n],
              " text-2xl font-serif font-bold leading-normal mt-0 mb-2"
            ),
            children: t,
          })
        );
      }
      (s.defaultProps = { color: "gray" }),
        (s.propTypes = {
          children: l().node.isRequired,
          color: l().string.isRequired,
        });
    },
    74975: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(85893),
        o = (n(67294), n(45697)),
        l = n.n(o);
      function i(e, t, n) {
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
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
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
      function s(e) {
        var t = e.children,
          n = e.color,
          o = a(e, ["children", "color"]);
        return (0, r.jsx)(
          "h1",
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
                  i(e, t, n[t]);
                });
            }
            return e;
          })({}, o, {
            className: "".concat(
              c[n],
              " text-xl font-serif font-bold leading-normal mt-0 mb-2"
            ),
            children: t,
          })
        );
      }
      (s.defaultProps = { color: "gray" }),
        (s.propTypes = {
          children: l().node.isRequired,
          color: l().string.isRequired,
        });
    },
    92590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var r = n(85893),
        o = n(67294),
        l = n(94254),
        i = n(84790),
        a = n(91169),
        c = n(27460),
        s = n(28754),
        u = n(62332),
        d = n(79827),
        p = n(46464);
      function f(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          i = l[0],
          a = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          f = s[0],
          x = s[1],
          m = (0, o.useState)(),
          b = m[0],
          y = m[1],
          g = (0, d.Z)(c, x, y),
          h =
            'import React from "react";\nimport H1 from "@material-tailwind/react/Heading1";\n\nexport default function H1() {\n    return (\n        <H1 color="'.concat(
              i,
              '">Material Tailwind</H1>\n    );\n}'
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
                        return x(!1);
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
                                    return x(!1);
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
              activeColor: i,
              activeFramework: c,
              codeToShow: h,
              onColorClick: function (e) {
                return a(e);
              },
              onFrameworkClick: g,
              children: (0, r.jsx)(p.Z, {
                color: i,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var x = n(80471);
      function m(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          i = l[0],
          a = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          m = (0, o.useState)(),
          b = m[0],
          y = m[1],
          g = (0, d.Z)(c, f, y),
          h =
            'import React from "react";\nimport H2 from "@material-tailwind/react/Heading2";\n\nexport default function H2() {\n    return (\n        <H2 color="'.concat(
              i,
              '">Material Tailwind</H2>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
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
                                    return f(!1);
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
              activeColor: i,
              activeFramework: c,
              codeToShow: h,
              onColorClick: function (e) {
                return a(e);
              },
              onFrameworkClick: g,
              children: (0, r.jsx)(x.Z, {
                color: i,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var b = n(45918);
      function y(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          i = l[0],
          a = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          x = (0, o.useState)(),
          m = x[0],
          y = x[1],
          g = (0, d.Z)(c, f, y),
          h =
            'import React from "react";\nimport H3 from "@material-tailwind/react/Heading3";\n\nexport default function H3() {\n    return (\n        <H3 color="'.concat(
              i,
              '">Material Tailwind</H3>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
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
                                    return f(!1);
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
                                  m,
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
              codeToShow: h,
              onColorClick: function (e) {
                return a(e);
              },
              onFrameworkClick: g,
              children: (0, r.jsx)(b.Z, {
                color: i,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var g = n(74731);
      function h(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          i = l[0],
          a = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          x = (0, o.useState)(),
          m = x[0],
          b = x[1],
          y = (0, d.Z)(c, f, b),
          h =
            'import React from "react";\nimport H4 from "@material-tailwind/react/Heading4";\n\nexport default function H4() {\n    return (\n        <H4 color="'.concat(
              i,
              '">Material Tailwind</H4>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
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
                                    return f(!1);
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
                                  m,
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
              codeToShow: h,
              onColorClick: function (e) {
                return a(e);
              },
              onFrameworkClick: y,
              children: (0, r.jsx)(g.Z, {
                color: i,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var w = n(18513);
      function v(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          i = l[0],
          a = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          x = (0, o.useState)(),
          m = x[0],
          b = x[1],
          y = (0, d.Z)(c, f, b),
          g =
            'import React from "react";\nimport H5 from "@material-tailwind/react/Heading5";\n\nexport default function H5() {\n    return (\n        <H5 color="'.concat(
              i,
              '">Material Tailwind</H5>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
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
                                    return f(!1);
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
                                  m,
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
              codeToShow: g,
              onColorClick: function (e) {
                return a(e);
              },
              onFrameworkClick: y,
              children: (0, r.jsx)(w.Z, {
                color: i,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var j = n(74975);
      function O(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          i = l[0],
          a = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          x = (0, o.useState)(),
          m = x[0],
          b = x[1],
          y = (0, d.Z)(c, f, b),
          g =
            'import React from "react";\nimport H6 from "@material-tailwind/react/Heading6";\n\nexport default function H6() {\n    return (\n        <H6 color="'.concat(
              i,
              '">Material Tailwind</H6>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
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
                                    return f(!1);
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
                                  m,
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
              codeToShow: g,
              onColorClick: function (e) {
                return a(e);
              },
              onFrameworkClick: y,
              children: (0, r.jsx)(j.Z, {
                color: i,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      function k() {
        var e = (0, o.useState)(null),
          t = e[0],
          n = e[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.Z, { title: "React Headings" }),
            (0, r.jsx)(a.Z, {}),
            (0, r.jsxs)(i.Z, {
              children: [
                (0, r.jsx)(c.Z, {
                  title: "React Headings",
                  description:
                    "Different levels of headings for creating titles.",
                }),
                (0, r.jsx)(s.Z, { title: "Heading 1" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 2" }),
                (0, r.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 3" }),
                (0, r.jsx)(y, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 4" }),
                (0, r.jsx)(h, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 5" }),
                (0, r.jsx)(v, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 6" }),
                (0, r.jsx)(O, {
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
      return (t = 23739), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
