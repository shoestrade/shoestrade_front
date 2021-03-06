(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6375],
  {
    43926: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/quick-start",
        function () {
          return t(86154);
        },
      ]);
    },
    61398: function (e, r, t) {
      "use strict";
      var o = t(85893),
        l = t(67294),
        n = t(45697),
        a = t.n(n),
        i = t(39931),
        g = t.n(i);
      function d(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
        return o;
      }
      function b(e, r, t) {
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
          o,
          l = (function (e, r) {
            if (null == e) return {};
            var t,
              o,
              l = {},
              n = Object.keys(e);
            for (o = 0; o < n.length; o++)
              (t = n[o]), r.indexOf(t) >= 0 || (l[t] = e[t]);
            return l;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (o = 0; o < n.length; o++)
            (t = n[o]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (l[t] = e[t]));
        }
        return l;
      }
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return d(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, r) {
            if (!e) return;
            if ("string" === typeof e) return d(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return d(e, r);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
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
        },
        h = {
          blueGray: "hover:bg-blue-gray-700",
          gray: "hover:bg-gray-700",
          brown: "hover:bg-brown-700",
          deepOrange: "hover:bg-deep-orange-700",
          orange: "hover:bg-orange-700",
          amber: "hover:bg-amber-700",
          yellow: "hover:bg-yellow-700",
          lime: "hover:bg-lime-700",
          lightGreen: "hover:bg-light-green-700",
          green: "hover:bg-green-700",
          teal: "hover:bg-teal-700",
          cyan: "hover:bg-cyan-700",
          lightBlue: "hover:bg-light-blue-700",
          blue: "hover:bg-blue-700",
          indigo: "hover:bg-indigo-700",
          deepPurple: "hover:bg-deep-purple-700",
          purple: "hover:bg-purple-700",
          pink: "hover:bg-pink-700",
          red: "hover:bg-red-700",
        },
        c = {
          blueGray: "focus:bg-blue-gray-400",
          gray: "focus:bg-gray-400",
          brown: "focus:bg-brown-400",
          deepOrange: "focus:bg-deep-orange-400",
          orange: "focus:bg-orange-400",
          amber: "focus:bg-amber-400",
          yellow: "focus:bg-yellow-500",
          lime: "focus:bg-lime-400",
          lightGreen: "focus:bg-light-green-400",
          green: "focus:bg-green-400",
          teal: "focus:bg-teal-400",
          cyan: "focus:bg-cyan-400",
          lightBlue: "focus:bg-light-blue-400",
          blue: "focus:bg-blue-400",
          indigo: "focus:bg-indigo-400",
          deepPurple: "focus:bg-deep-purple-400",
          purple: "focus:bg-purple-400",
          pink: "focus:bg-pink-400",
          red: "focus:bg-red-400",
        },
        y = {
          blueGray: "active:bg-blue-gray-800",
          gray: "active:bg-gray-800",
          brown: "active:bg-brown-800",
          deepOrange: "active:bg-deep-orange-800",
          orange: "active:bg-orange-800",
          amber: "active:bg-amber-800",
          yellow: "active:bg-yellow-800",
          lime: "active:bg-lime-800",
          lightGreen: "active:bg-light-green-800",
          green: "active:bg-green-800",
          teal: "active:bg-teal-800",
          cyan: "active:bg-cyan-800",
          lightBlue: "active:bg-light-blue-800",
          blue: "active:bg-blue-800",
          indigo: "active:bg-indigo-800",
          deepPurple: "active:bg-deep-purple-800",
          purple: "active:bg-purple-800",
          pink: "active:bg-pink-800",
          red: "active:bg-red-800",
        },
        v = {
          blueGray: "shadow-md-blue-gray",
          gray: "shadow-md-gray",
          brown: "shadow-md-brown",
          deepOrange: "shadow-md-deep-orange",
          orange: "shadow-md-orange",
          amber: "shadow-md-amber",
          yellow: "shadow-md-yellow",
          lime: "shadow-md-lime",
          lightGreen: "shadow-md-light-green",
          green: "shadow-md-green",
          teal: "shadow-md-teal",
          cyan: "shadow-md-cyan",
          lightBlue: "shadow-md-light-blue",
          blue: "shadow-md-blue",
          indigo: "shadow-md-indigo",
          deepPurple: "shadow-md-deep-purple",
          purple: "shadow-md-purple",
          pink: "shadow-md-pink",
          red: "shadow-md-red",
        },
        m = {
          blueGray: "hover:shadow-lg-blue-gray",
          gray: "hover:shadow-lg-gray",
          brown: "hover:shadow-lg-brown",
          deepOrange: "hover:shadow-lg-deep-orange",
          orange: "hover:shadow-lg-orange",
          amber: "hover:shadow-lg-amber",
          yellow: "hover:shadow-lg-yellow",
          lime: "hover:shadow-lg-lime",
          lightGreen: "hover:shadow-lg-light-green",
          green: "hover:shadow-lg-green",
          teal: "hover:shadow-lg-teal",
          cyan: "hover:shadow-lg-cyan",
          lightBlue: "hover:shadow-lg-light-blue",
          blue: "hover:shadow-lg-blue",
          indigo: "hover:shadow-lg-indigo",
          deepPurple: "hover:shadow-lg-deep-purple",
          purple: "hover:shadow-lg-purple",
          pink: "hover:shadow-lg-pink",
          red: "hover:shadow-lg-red",
        },
        w = {
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
        },
        x = {
          blueGray: "hover:bg-blue-gray-50",
          gray: "hover:bg-gray-50",
          brown: "hover:bg-brown-50",
          deepOrange: "hover:bg-deep-orange-50",
          orange: "hover:bg-orange-50",
          amber: "hover:bg-amber-50",
          yellow: "hover:bg-yellow-50",
          lime: "hover:bg-lime-50",
          lightGreen: "hover:bg-light-green-50",
          green: "hover:bg-green-50",
          teal: "hover:bg-teal-50",
          cyan: "hover:bg-cyan-50",
          lightBlue: "hover:bg-light-blue-50",
          blue: "hover:bg-blue-50",
          indigo: "hover:bg-indigo-50",
          deepPurple: "hover:bg-deep-purple-50",
          purple: "hover:bg-purple-50",
          pink: "hover:bg-pink-50",
          red: "hover:bg-red-50",
        },
        j = {
          blueGray: "hover:border-blue-gray-700",
          gray: "hover:border-gray-700",
          brown: "hover:border-brown-700",
          deepOrange: "hover:border-deep-orange-700",
          orange: "hover:border-orange-700",
          amber: "hover:border-amber-700",
          yellow: "hover:border-yellow-700",
          lime: "hover:border-lime-700",
          lightGreen: "hover:border-light-green-700",
          green: "hover:border-green-700",
          teal: "hover:border-teal-700",
          cyan: "hover:border-cyan-700",
          lightBlue: "hover:border-light-blue-700",
          blue: "hover:border-blue-700",
          indigo: "hover:border-indigo-700",
          deepPurple: "hover:border-deep-purple-700",
          purple: "hover:border-purple-700",
          pink: "hover:border-pink-700",
          red: "hover:border-red-700",
        },
        k = {
          blueGray: "hover:text-blue-gray-700",
          gray: "hover:text-gray-700",
          brown: "hover:text-brown-700",
          deepOrange: "hover:text-deep-orange-700",
          orange: "hover:text-orange-700",
          amber: "hover:text-amber-700",
          yellow: "hover:text-yellow-700",
          lime: "hover:text-lime-700",
          lightGreen: "hover:text-light-green-700",
          green: "hover:text-green-700",
          teal: "hover:text-teal-700",
          cyan: "hover:text-cyan-700",
          lightBlue: "hover:text-light-blue-700",
          blue: "hover:text-blue-700",
          indigo: "hover:text-indigo-700",
          deepPurple: "hover:text-deep-purple-700",
          purple: "hover:text-purple-700",
          pink: "hover:text-pink-700",
          red: "hover:text-red-700",
        },
        O = {
          blueGray: "active:bg-blue-gray-100",
          gray: "active:bg-gray-100",
          brown: "active:bg-brown-100",
          deepOrange: "active:bg-deep-orange-100",
          orange: "active:bg-orange-100",
          amber: "active:bg-amber-100",
          yellow: "active:bg-yellow-100",
          lime: "active:bg-lime-100",
          lightGreen: "active:bg-light-green-100",
          green: "active:bg-green-100",
          teal: "active:bg-teal-100",
          cyan: "active:bg-cyan-100",
          lightBlue: "active:bg-light-blue-100",
          blue: "active:bg-blue-100",
          indigo: "active:bg-indigo-100",
          deepPurple: "active:bg-deep-purple-100",
          purple: "active:bg-purple-100",
          pink: "active:bg-pink-100",
          red: "active:bg-red-100",
        },
        G = (0, l.forwardRef)(function (e, r) {
          var t,
            l,
            n = e.children,
            a = e.color,
            i = e.buttonType,
            d = e.size,
            G = e.rounded,
            B = e.iconOnly,
            P = e.block,
            N = e.ripple,
            T = e.className,
            Z = u(e, [
              "children",
              "color",
              "buttonType",
              "size",
              "rounded",
              "iconOnly",
              "block",
              "ripple",
              "className",
            ]),
            S = new (g())(),
            I = [],
            M = [
              P && "w-full",
              "flex",
              "items-center",
              "justify-center",
              "gap-1",
              "font-bold",
              "outline-none",
              "uppercase",
              "tracking-wider",
              "focus:outline-none",
              "focus:shadow-none",
              "transition-all",
              "duration-300",
              (G = G ? "rounded-full" : "rounded-lg"),
            ],
            E = ["text-white", p[a], h[a], c[a], y[a], v[a], m[a]],
            _ = [
              "bg-transparent",
              "border",
              "border-solid",
              "shadow-none",
              w[a],
              f[a],
              x[a],
              j[a],
              k[a],
              x[a],
              O[a],
            ],
            A = ["bg-transparent", w[a], x[a], k[a], x[a], O[a]],
            F = s(M).concat([
              B ? "w-8 h-8 p-0 grid place-items-center" : "py-1.5 px-4",
              "text-xs",
              "leading-normal",
            ]),
            q = s(M).concat([
              B ? "w-10 h-10 p-0 grid place-items-center" : "py-2.5 px-6",
              "text-xs",
              "leading-normal",
            ]),
            R = s(M).concat([
              B ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
              "text-sm",
              "leading-relaxed",
            ]);
          if ("sm" === d) (t = I).push.apply(t, s(F));
          else if ("lg" === d) {
            var L;
            (L = I).push.apply(L, s(R));
          } else {
            var z;
            (z = I).push.apply(z, s(q));
          }
          if ("outline" === i) (l = I).push.apply(l, s(_));
          else if ("link" === i) {
            var V;
            (V = I).push.apply(V, s(A));
          } else {
            var C;
            (C = I).push.apply(C, s(E));
          }
          return (
            (I = I.join(" ")),
            (0, o.jsx)(
              "button",
              (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {},
                    o = Object.keys(t);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(t).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })
                    )),
                    o.forEach(function (r) {
                      b(e, r, t[r]);
                    });
                }
                return e;
              })({}, Z, {
                className: "".concat(I, " ").concat(T),
                ref: r,
                onMouseUp: function (e) {
                  "dark" === N && S.create(e, "dark"),
                    "light" === N && S.create(e, "light");
                },
                children: n,
              })
            )
          );
        });
      (G.defaultProps = {
        color: "lightBlue",
        buttonType: "filled",
        size: "regular",
        rounded: !1,
        block: !1,
      }),
        (G.propTypes = {
          children: a().node.isRequired,
          color: a().string.isRequired,
          buttonType: a().string.isRequired,
          size: a().string.isRequired,
          rounded: a().bool.isRequired,
          block: a().bool.isRequired,
          ripple: a().string,
        }),
        (r.Z = G);
    },
    28754: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = t(85893),
        l = (t(67294), t(45697)),
        n = t.n(l);
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
        title: n().oneOfType([n().string, n().node]),
        description: n().oneOfType([n().string, n().node]),
      };
    },
    86154: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return s;
          },
        });
      var o = t(85893),
        l = (t(67294), t(94254)),
        n = t(84790),
        a = t(91169),
        i = t(73483),
        g = t(84283),
        d = t(27460),
        b = t(28754),
        u = t(61398);
      function s() {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.Z, { title: "Quick Start Guide" }),
            (0, o.jsx)(a.Z, {}),
            (0, o.jsxs)(n.Z, {
              children: [
                (0, o.jsx)(d.Z, {
                  title: "Quick Start",
                  description:
                    "Learn how to use Material Tailwind components from this documentation to quickly and easily create elegant and flexible pages.",
                }),
                (0, o.jsx)(d.Z, { title: "Installation" }),
                (0, o.jsx)(b.Z, {
                  title: "NPM",
                  description: (0, o.jsx)(o.Fragment, {
                    children: "Install Material Tailwind via NPM",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mb-12",
                  children: (0, o.jsx)(i.Z, {
                    language: "html",
                    style: g.Vg,
                    children: "npm i -E @material-tailwind/react",
                  }),
                }),
                (0, o.jsx)(b.Z, {
                  title: "Yarn",
                  description: (0, o.jsx)(o.Fragment, {
                    children: "Install Material Tailwind via Yarn",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mb-12",
                  children: (0, o.jsx)(i.Z, {
                    language: "html",
                    style: g.Vg,
                    children: "yarn add @material-tailwind/react -E",
                  }),
                }),
                (0, o.jsx)(b.Z, {
                  title: "Import Material Tailwind Style Sheet",
                  description: (0, o.jsxs)(o.Fragment, {
                    children: [
                      "Import the",
                      " ",
                      (0, o.jsx)("code", {
                        className: "text-light-blue-500",
                        children: "tailwind.css",
                      }),
                      " ",
                      "into your",
                      " ",
                      (0, o.jsx)("code", {
                        className: "text-light-blue-500",
                        children: "app.js",
                      }),
                      " ",
                      "file. Make sure to import the",
                      " ",
                      (0, o.jsx)("code", {
                        className: "text-light-blue-500",
                        children: "tailwind.css",
                      }),
                      " ",
                      "style sheet after all other style sheets.",
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mb-12",
                  children: (0, o.jsx)(i.Z, {
                    language: "jsx",
                    style: g.Vg,
                    children: 'import "@material-tailwind/react/tailwind.css";',
                  }),
                }),
                (0, o.jsx)(b.Z, {
                  title: "Link Material Icons Fonts to your project",
                  description: (0, o.jsx)(o.Fragment, {
                    children:
                      "Add a link for the material icons fonts inside the head of your project, so to use the material icons with material tailwind components. You can also use font awesome font family for the project just add a link for it inside the head of your project.",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mb-12",
                  children: (0, o.jsx)(i.Z, {
                    language: "jsx",
                    style: g.Vg,
                    children:
                      '// Material Icons Link\n<link\n    href="https://fonts.googleapis.com/icon?family=Material+Icons"\n    rel="stylesheet"\n/>\n\n// Font Awesome Link\n<link\n    rel="stylesheet"\n    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"\n    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="\n    crossOrigin="anonymous"\n/>',
                  }),
                }),
                (0, o.jsx)(b.Z, {
                  title: "Example",
                  description: (0, o.jsx)(o.Fragment, {
                    children: "Import the components you need",
                  }),
                }),
                (0, o.jsxs)("div", {
                  className:
                    "border border-solid border-gray-300 rounded-lg my-4 p-4 pt-6 relative",
                  children: [
                    (0, o.jsx)("div", {
                      className: "pb-4",
                      children: (0, o.jsx)(u.Z, {
                        color: "lightBlue",
                        ripple: "light",
                        children: "Button",
                      }),
                    }),
                    (0, o.jsxs)(i.Z, {
                      language: "jsx",
                      style: g.Vg,
                      children: [
                        'import React from "react";\nimport Button from "@material-tailwind/react/Button";\n\nexport default function Example() {\n    return (\n        <Button color="lightBlue" ripple="light">Button</Button>\n    )\n}',
                        ";",
                      ],
                    }),
                  ],
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
      return (r = 43926), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
