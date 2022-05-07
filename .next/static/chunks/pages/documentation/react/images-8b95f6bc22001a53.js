(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1162],
  {
    20640: function (e, t, n) {
      "use strict";
      var o = n(11742),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          a,
          l,
          s,
          d,
          c = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((a = o()),
            (l = document.createRange()),
            (s = document.getSelection()),
            ((d = document.createElement("span")).textContent = e),
            (d.style.all = "unset"),
            (d.style.position = "fixed"),
            (d.style.top = 0),
            (d.style.clip = "rect(0, 0, 0, 0)"),
            (d.style.whiteSpace = "pre"),
            (d.style.webkitUserSelect = "text"),
            (d.style.MozUserSelect = "text"),
            (d.style.msUserSelect = "text"),
            (d.style.userSelect = "text"),
            d.addEventListener("copy", function (o) {
              if ((o.stopPropagation(), t.format))
                if (
                  (o.preventDefault(), "undefined" === typeof o.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = r[t.format] || r.default;
                  window.clipboardData.setData(i, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(t.format, e);
              t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
            }),
            document.body.appendChild(d),
            l.selectNodeContents(d),
            s.addRange(l),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          c = !0;
        } catch (u) {
          n && console.error("unable to copy using execCommand: ", u),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (c = !0);
          } catch (u) {
            n && console.error("unable to copy using clipboardData: ", u),
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
          s &&
            ("function" == typeof s.removeRange
              ? s.removeRange(l)
              : s.removeAllRanges()),
            d && document.body.removeChild(d),
            a();
        }
        return c;
      };
    },
    74300: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var o = i(n(67294)),
        r = i(n(20640));
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
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function u(e, t) {
        return !t || ("object" !== a(t) && "function" !== typeof t) ? m(e) : t;
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
      var y = (function (e) {
        function t() {
          var e, n;
          d(this, t);
          for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++)
            a[l] = arguments[l];
          return (
            f(
              m((n = u(this, (e = p(t)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var t = n.props,
                  i = t.text,
                  a = t.onCopy,
                  l = t.children,
                  s = t.options,
                  d = o.default.Children.only(l),
                  c = (0, r.default)(i, s);
                a && a(i, c),
                  d &&
                    d.props &&
                    "function" === typeof d.props.onClick &&
                    d.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, i, a;
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
          (n = t),
          (i = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = s(e, ["text", "onCopy", "options", "children"]),
                  r = o.default.Children.only(t);
                return o.default.cloneElement(
                  r,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(n, !0).forEach(function (t) {
                            f(e, t, n[t]);
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
          i && c(n.prototype, i),
          a && c(n, a),
          t
        );
      })(o.default.PureComponent);
      (t.CopyToClipboard = y),
        f(y, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, t, n) {
      "use strict";
      var o = n(74300).CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], o = 0;
          o < e.rangeCount;
          o++
        )
          n.push(e.getRangeAt(o));
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
    12569: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/images",
        function () {
          return n(49744);
        },
      ]);
    },
    42360: function () {
      throw new Error(
        "Module build failed (from ../../../../opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: unsupported file type: undefined (file: undefined)\n    at lookup (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:1951)\n    at Object.imageSize [as default] (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:2628)\n    at Object.getImageSize (/opt/homebrew/lib/node_modules/next/dist/server/image-optimizer.js:648:56)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:85\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:47\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at Object.nextImageLoader (/opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:24:28)"
      );
    },
    98219: function () {
      throw new Error(
        "Module build failed (from ../../../../opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: unsupported file type: undefined (file: undefined)\n    at lookup (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:1951)\n    at Object.imageSize [as default] (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:2628)\n    at Object.getImageSize (/opt/homebrew/lib/node_modules/next/dist/server/image-optimizer.js:648:56)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:85\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:47\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at Object.nextImageLoader (/opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:24:28)"
      );
    },
    75654: function () {
      throw new Error(
        "Module build failed (from ../../../../opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: unsupported file type: undefined (file: undefined)\n    at lookup (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:1951)\n    at Object.imageSize [as default] (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:2628)\n    at Object.getImageSize (/opt/homebrew/lib/node_modules/next/dist/server/image-optimizer.js:648:56)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:85\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:47\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at Object.nextImageLoader (/opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:24:28)"
      );
    },
    93872: function () {
      throw new Error(
        "Module build failed (from ../../../../opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: unsupported file type: undefined (file: undefined)\n    at lookup (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:1951)\n    at Object.imageSize [as default] (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:2628)\n    at Object.getImageSize (/opt/homebrew/lib/node_modules/next/dist/server/image-optimizer.js:648:56)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:85\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:47\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at Object.nextImageLoader (/opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:24:28)"
      );
    },
    62332: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = n(85893),
        r = (n(67294), n(45697)),
        i = n.n(r),
        a = n(73483),
        l = n(84283),
        s = n(74855),
        d = [
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
        c = [
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
          n = e.activeColor,
          r = (e.activeFramework, e.onColorClick),
          i = (e.onFrameworkClick, e.onCopy),
          u = e.codeToShow,
          p = e.copyText;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              n
                ? (0, o.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, o.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: d.map(function (e, t) {
                        return (0, o.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  n === c[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              r(c[t]), i(!1);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  })
                : null,
              t,
              (0, o.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, o.jsx)(s.CopyToClipboard, {
                    text: u,
                    onCopy: function () {
                      return i(!0);
                    },
                    children: (0, o.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: p,
                    }),
                  }),
                  (0, o.jsx)(a.Z, {
                    language: "jsx",
                    style: l.Vg,
                    children: u,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      u.propTypes = {
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
          return a;
        },
      });
      var o = n(85893),
        r = (n(67294), n(45697)),
        i = n.n(r);
      function a(e) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("h2", {
              className: "font-serif font-medium text-xl mb-2 text-gray-900",
              children: e.title,
            }),
            (0, o.jsx)("p", {
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
    91744: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var o = n(85893),
        r = (n(67294), n(45697)),
        i = n.n(r);
      function a(e, t, n) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              a(e, t, n[t]);
            });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function d(e) {
        var t = e.src,
          n = e.raised,
          r = e.rounded,
          i = e.className,
          a = s(e, ["src", "raised", "rounded", "className"]);
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(
            "img",
            l({}, a, {
              src: t,
              className: ""
                .concat(r ? "rounded-full" : "rounded-xl", " ")
                .concat(
                  n ? "shadow-lg" : "",
                  " max-w-full h-auto align-middle border-none "
                )
                .concat(i),
            })
          ),
        });
      }
      (d.defaultProps = { raised: !1, rounded: !1 }),
        (d.propTypes = {
          src: i().string.isRequired,
          raised: i().bool.isRequired,
          rounded: i().bool.isRequired,
        });
    },
    49744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var o = n(85893),
        r = n(67294),
        i = n(94254),
        a = n(84790),
        l = n(91169),
        s = n(27460),
        d = n(28754),
        c = n(62332),
        u = n(91744);
      function p(e) {
        var t = e.copyText,
          n = e.onCopy,
          r = e.src,
          i = e.rounded,
          a = e.raised,
          l = e.alt,
          s =
            'import React from "react";\nimport Image from "@material-tailwind/react/Image";\n\nexport default function Image() {\n    return (\n        <Image\n            src="image-link-here"\n            rounded={'
              .concat(i, "}\n            raised={")
              .concat(a, '}\n            alt="')
              .concat(l, '"\n        />\n    )\n}');
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(c.Z, {
            copyText: t,
            onCopy: n,
            codeToShow: s,
            children: (0, o.jsx)("div", {
              className: "flex justify-center w-full",
              children: (0, o.jsx)("div", {
                className: "w-72",
                children: (0, o.jsx)(u.Z, {
                  src: r,
                  rounded: i,
                  raised: a,
                  alt: l,
                }),
              }),
            }),
          }),
        });
      }
      function m() {
        var e = (0, r.useState)(null),
          t = e[0],
          c = e[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.Z, { title: "React Images" }),
            (0, o.jsx)(l.Z, {}),
            (0, o.jsxs)(a.Z, {
              children: [
                (0, o.jsx)(s.Z, {
                  title: "React Images",
                  description:
                    "Material Tailwind images for display different images in different forms.",
                }),
                (0, o.jsx)(d.Z, { title: "Image" }),
                (0, o.jsx)(p, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return c(e ? "Buttons" : "");
                  },
                  src: n(42360),
                  raised: !1,
                  rounded: !1,
                  alt: "Image",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(d.Z, { title: "Rounded Image" }),
                (0, o.jsx)(p, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return c(e ? "Buttons" : "");
                  },
                  src: n(98219),
                  raised: !1,
                  rounded: !0,
                  alt: "Rounded Image",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(d.Z, { title: "Raised Image" }),
                (0, o.jsx)(p, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return c(e ? "Buttons" : "");
                  },
                  src: n(75654),
                  raised: !0,
                  rounded: !1,
                  alt: "Raised Image",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(d.Z, { title: "Rounded Raised Image" }),
                (0, o.jsx)(p, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return c(e ? "Buttons" : "");
                  },
                  src: n(93872),
                  raised: !0,
                  rounded: !0,
                  alt: "Rounded Raised Image",
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
      return (t = 12569), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
