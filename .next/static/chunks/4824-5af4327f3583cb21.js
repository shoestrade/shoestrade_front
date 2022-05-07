(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4824],
  {
    20640: function (e, r, t) {
      "use strict";
      var n = t(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, r) {
        var t,
          l,
          i,
          a,
          c,
          u,
          p = !1;
        r || (r = {}), (t = r.debug || !1);
        try {
          if (
            ((i = n()),
            (a = document.createRange()),
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
              if ((n.stopPropagation(), r.format))
                if (
                  (n.preventDefault(), "undefined" === typeof n.clipboardData)
                ) {
                  t && console.warn("unable to use e.clipboardData"),
                    t && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var l = o[r.format] || o.default;
                  window.clipboardData.setData(l, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(r.format, e);
              r.onCopy && (n.preventDefault(), r.onCopy(n.clipboardData));
            }),
            document.body.appendChild(u),
            a.selectNodeContents(u),
            c.addRange(a),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          p = !0;
        } catch (s) {
          t && console.error("unable to copy using execCommand: ", s),
            t && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(r.format || "text", e),
              r.onCopy && r.onCopy(window.clipboardData),
              (p = !0);
          } catch (s) {
            t && console.error("unable to copy using clipboardData: ", s),
              t && console.error("falling back to prompt"),
              (l = (function (e) {
                var r =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, r);
              })(
                "message" in r ? r.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(l, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(a)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            i();
        }
        return p;
      };
    },
    74300: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CopyToClipboard = void 0);
      var n = l(t(67294)),
        o = l(t(20640));
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
      function a(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function c(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (t = l[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (t = l[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function u(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, r) {
        for (var t = 0; t < r.length; t++) {
          var n = r[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e, r) {
        return !r || ("object" !== i(r) && "function" !== typeof r) ? f(e) : r;
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
      function b(e, r) {
        return (
          (b =
            Object.setPrototypeOf ||
            function (e, r) {
              return (e.__proto__ = r), e;
            }),
          b(e, r)
        );
      }
      function y(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      var g = (function (e) {
        function r() {
          var e, t;
          u(this, r);
          for (var l = arguments.length, i = new Array(l), a = 0; a < l; a++)
            i[a] = arguments[a];
          return (
            y(
              f((t = s(this, (e = d(r)).call.apply(e, [this].concat(i))))),
              "onClick",
              function (e) {
                var r = t.props,
                  l = r.text,
                  i = r.onCopy,
                  a = r.children,
                  c = r.options,
                  u = n.default.Children.only(a),
                  p = (0, o.default)(l, c);
                i && i(l, p),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            t
          );
        }
        var t, l, i;
        return (
          (function (e, r) {
            if ("function" !== typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(r && r.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              r && b(e, r);
          })(r, e),
          (t = r),
          (l = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  r = (e.text, e.onCopy, e.options, e.children),
                  t = c(e, ["text", "onCopy", "options", "children"]),
                  o = n.default.Children.only(r);
                return n.default.cloneElement(
                  o,
                  (function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                      var t = null != arguments[r] ? arguments[r] : {};
                      r % 2
                        ? a(t, !0).forEach(function (r) {
                            y(e, r, t[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t)
                          )
                        : a(t).forEach(function (r) {
                            Object.defineProperty(
                              e,
                              r,
                              Object.getOwnPropertyDescriptor(t, r)
                            );
                          });
                    }
                    return e;
                  })({}, t, { onClick: this.onClick })
                );
              },
            },
          ]),
          l && p(t.prototype, l),
          i && p(t, i),
          r
        );
      })(n.default.PureComponent);
      (r.CopyToClipboard = g),
        y(g, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, r, t) {
      "use strict";
      var n = t(74300).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var r = document.activeElement, t = [], n = 0;
          n < e.rangeCount;
          n++
        )
          t.push(e.getRangeAt(n));
        switch (r.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            r.blur();
            break;
          default:
            r = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                t.forEach(function (r) {
                  e.addRange(r);
                }),
              r && r.focus();
          }
        );
      };
    },
    62332: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return s;
        },
      });
      var n = t(85893),
        o = (t(67294), t(45697)),
        l = t.n(o),
        i = t(73483),
        a = t(84283),
        c = t(74855),
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
        var r = e.children,
          t = e.activeColor,
          o = (e.activeFramework, e.onColorClick),
          l = (e.onFrameworkClick, e.onCopy),
          s = e.codeToShow,
          d = e.copyText;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              t
                ? (0, n.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, n.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: u.map(function (e, r) {
                        return (0, n.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  t === p[r]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              o(p[r]), l(!1);
                            },
                          },
                          r
                        );
                      }),
                    }),
                  })
                : null,
              r,
              (0, n.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, n.jsx)(c.CopyToClipboard, {
                    text: s,
                    onCopy: function () {
                      return l(!0);
                    },
                    children: (0, n.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: d,
                    }),
                  }),
                  (0, n.jsx)(i.Z, {
                    language: "jsx",
                    style: a.Vg,
                    children: s,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      s.propTypes = {
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
    20801: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return d;
        },
      });
      var n = t(85893),
        o = t(67294),
        l = t(33550),
        i = t(71635),
        a = t(65850),
        c = t(62332);
      function u(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function p(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (r) {
              u(e, r, t[r]);
            });
        }
        return e;
      }
      function s(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (t = l[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (t = l[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function d(e) {
        e.children;
        var r = e.copyText,
          t = e.onCopy,
          u = e.buttonType,
          d = e.size,
          f = e.rounded,
          b = e.placement,
          y = e.buttonText,
          g = e.rippleEffect,
          h = e.blockLevel,
          m = s(e, [
            "children",
            "copyText",
            "onCopy",
            "buttonType",
            "size",
            "rounded",
            "placement",
            "buttonText",
            "rippleEffect",
            "blockLevel",
          ]),
          w = (0, o.useState)("lightBlue"),
          v = w[0],
          O = w[1],
          x = (0, o.useState)("react"),
          j = x[0],
          C = x[1],
          k =
            'import React from "react";\nimport Dropdown from "@material-tailwind/react/Dropdown"\nimport DropdownItem from "@material-tailwind/react/DropdownItem"\nimport DropdownLink from "@material-tailwind/react/DropdownLink"\n\nexport default function Dropdown() {\n    return (\n        <Dropdown\n            color="'
              .concat(v, '"\n            placement="')
              .concat(b, '"\n            buttonText="')
              .concat(y, '"\n            buttonType="')
              .concat(u, '"\n            size="')
              .concat(d, '"\n            rounded={')
              .concat(f, "}\n            ")
              .concat(h, "\n            ")
              .concat(g, '\n        >\n            <DropdownItem color="')
              .concat(
                v,
                '" ripple="light">\n                Action\n            </DropdownItem>\n            <DropdownLink\n                href="#"\n                color={color}\n                ripple="light"\n                onClick={(e) => e.preventDefault()}\n            >\n                Another Action\n            </DropdownLink>\n            <DropdownItem color="'
              )
              .concat(
                v,
                '" ripple="light">\n                Something else\n            </DropdownItem>\n        </Dropdown>\n    )\n}'
              );
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(c.Z, {
            copyText: r,
            onCopy: t,
            activeColor: v,
            activeFramework: j,
            codeToShow: k,
            onColorClick: function (e) {
              return O(e);
            },
            onFrameworkClick: function (e) {
              return C(e);
            },
            children: (0, n.jsx)("div", {
              className:
                "block={true}" === h ? "w-full" : "flex justify-center ",
              children: (0, n.jsxs)(
                l.Z,
                p({}, m, {
                  color: v,
                  placement: b,
                  buttonText: y,
                  buttonType: u,
                  size: d,
                  rounded: f,
                  children: [
                    (0, n.jsx)(i.Z, {
                      color: v,
                      ripple: "light",
                      children: "Action",
                    }),
                    (0, n.jsx)(a.Z, {
                      href: "#",
                      color: v,
                      ripple: "light",
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      children: "Another Action",
                    }),
                    (0, n.jsx)(i.Z, {
                      color: v,
                      ripple: "light",
                      children: "Something Else",
                    }),
                  ],
                })
              ),
            }),
          }),
        });
      }
    },
    28754: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return i;
        },
      });
      var n = t(85893),
        o = (t(67294), t(45697)),
        l = t.n(o);
      function i(e) {
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
      i.propTypes = {
        title: l().oneOfType([l().string, l().node]),
        description: l().oneOfType([l().string, l().node]),
      };
    },
    71635: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return d;
        },
      });
      var n = t(85893),
        o = (t(67294), t(45697)),
        l = t.n(o),
        i = t(39931),
        a = t.n(i);
      function c(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function u(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (t = l[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (t = l[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var p = {
          blueGray: "hover:bg-blue-gray-500",
          gray: "hover:bg-gray-500",
          brown: "hover:bg-brown-500",
          deepOrange: "hover:bg-deep-orange-500",
          orange: "hover:bg-orange-500",
          amber: "hover:bg-amber-500",
          yellow: "hover:bg-yellow-600",
          lime: "hover:bg-lime-500",
          lightGreen: "hover:bg-light-green-500",
          green: "hover:bg-green-500",
          teal: "hover:bg-teal-500",
          cyan: "hover:bg-cyan-500",
          lightBlue: "hover:bg-light-blue-500",
          blue: "hover:bg-blue-500",
          indigo: "hover:bg-indigo-500",
          deepPurple: "hover:bg-deep-purple-500",
          purple: "hover:bg-purple-500",
          pink: "hover:bg-pink-500",
          red: "hover:bg-red-500",
        },
        s = {
          blueGray: "hover:shadow-md-blue-gray",
          gray: "hover:shadow-md-gray",
          brown: "hover:shadow-md-brown",
          deepOrange: "hover:shadow-md-deep-orange",
          orange: "hover:shadow-md-orange",
          amber: "hover:shadow-md-amber",
          yellow: "hover:shadow-md-yellow",
          lime: "hover:shadow-md-lime",
          lightGreen: "hover:shadow-md-light-green",
          green: "hover:shadow-md-green",
          teal: "hover:shadow-md-teal",
          cyan: "hover:shadow-md-cyan",
          lightBlue: "hover:shadow-md-light-blue",
          blue: "hover:shadow-md-blue",
          indigo: "hover:shadow-md-indigo",
          deepPurple: "hover:shadow-md-deep-purple",
          purple: "hover:shadow-md-purple",
          pink: "hover:shadow-md-pink",
          red: "hover:shadow-md-red",
        };
      function d(e) {
        var r = e.children,
          t = e.color,
          o = e.ripple,
          l = (e.className, u(e, ["children", "color", "ripple", "className"])),
          i = new (a())();
        return (0, n.jsx)(
          "span",
          (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {},
                n = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                n.forEach(function (r) {
                  c(e, r, t[r]);
                });
            }
            return e;
          })({}, l, {
            className:
              "block w-full text-sm py-3 px-4 font-normal cursor-pointer whitespace-no-wrap rounded-md text-gray-900 hover:text-white "
                .concat(p[t], " ")
                .concat(s[t], " transition-all duration-300"),
            onMouseUp: function (e) {
              "dark" === o && i.create(e, "dark"),
                "light" === o && i.create(e, "light");
            },
            children: r,
          })
        );
      }
      (d.defaultProps = { color: "lightBlue" }),
        (d.propTypes = {
          children: l().node.isRequired,
          color: l().string.isRequired,
          ripple: l().string,
        });
    },
  },
]);
