(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    49107: function (e) {
      "use strict";
      var t = Object.assign.bind(Object);
      (e.exports = t), (e.exports.default = e.exports);
    },
    82642: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(59368);
        },
      ]);
    },
    86436: function () {
      throw new Error(
        "Module build failed (from ../../../../opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: unsupported file type: undefined (file: undefined)\n    at lookup (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:1951)\n    at Object.imageSize [as default] (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:2628)\n    at Object.getImageSize (/opt/homebrew/lib/node_modules/next/dist/server/image-optimizer.js:648:56)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:85\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:47\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at Object.nextImageLoader (/opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:24:28)"
      );
    },
    8351: function () {
      throw new Error(
        "Module build failed (from ../../../../opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: unsupported file type: undefined (file: undefined)\n    at lookup (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:1951)\n    at Object.imageSize [as default] (/opt/homebrew/lib/node_modules/next/dist/compiled/image-size/index.js:1:2628)\n    at Object.getImageSize (/opt/homebrew/lib/node_modules/next/dist/server/image-optimizer.js:648:56)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:85\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at /opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:38:47\n    at Span.traceAsyncFn (/opt/homebrew/lib/node_modules/next/dist/trace/trace.js:79:26)\n    at Object.nextImageLoader (/opt/homebrew/lib/node_modules/next/dist/build/webpack/loaders/next-image-loader.js:24:28)"
      );
    },
    59368: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(85893),
        a = n(67294),
        o = n(22175);
      n(62066), n(78311);
      function r(e, t, n) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              r(e, t, n[t]);
            });
        }
        return e;
      }
      function l(e) {
        var t = e.Component,
          r = e.pageProps;
        return (0, i.jsxs)(a.Fragment, {
          children: [
            (0, i.jsxs)(o.default, {
              children: [
                (0, i.jsx)("meta", { charSet: "utf-8" }),
                (0, i.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, i.jsx)("meta", { name: "theme-color", content: "#03a9f4" }),
                (0, i.jsx)("link", {
                  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                  rel: "stylesheet",
                }),
                (0, i.jsx)("link", {
                  rel: "stylesheet",
                  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
                  integrity:
                    "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
                  crossOrigin: "anonymous",
                }),
                (0, i.jsx)("link", { rel: "shortcut icon", href: n(8351) }),
                (0, i.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "76x76",
                  href: n(86436),
                }),
                (0, i.jsx)("meta", {
                  name: "keywords",
                  content:
                    "open source, tailwind, tailwindcss, tailwind css, components, library, components library, material design, material design components, tailwind components, tailwindcss components, tailwind css components, react, reactjs, react js, react components, reactjs components, react js components",
                }),
                (0, i.jsx)("meta", {
                  name: "description",
                  content:
                    "Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines. Coming soon components for VueJS, Angular and many more.",
                }),
                (0, i.jsx)("meta", {
                  itemProp: "name",
                  content:
                    "Material Tailwind by Creative Tim | Material components for Tailwind CSS",
                }),
                (0, i.jsx)("meta", {
                  itemProp: "description",
                  content:
                    "Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines. Coming soon components for VueJS, Angular and many more.",
                }),
                (0, i.jsx)("meta", {
                  itemProp: "image",
                  content:
                    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-tailwind/material-tailwind-share-image.png",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:card",
                  content: "product",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:site",
                  content: "@creativetim",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:title",
                  content:
                    "Material Tailwind by Creative Tim | Material components for Tailwind CSS",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:description",
                  content:
                    "Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines. Coming soon components for VueJS, Angular and many more.",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:creator",
                  content: "@creativetim",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:image",
                  content:
                    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-tailwind/material-tailwind-share-image.png",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:data1",
                  content:
                    "Material Tailwind by Creative Tim | Material components for Tailwind CSS",
                }),
                (0, i.jsx)("meta", {
                  name: "twitter:label1",
                  content: "Product Type",
                }),
                (0, i.jsx)("meta", { name: "twitter:data2", content: "Free" }),
                (0, i.jsx)("meta", {
                  name: "twitter:label2",
                  content: "Price",
                }),
                (0, i.jsx)("meta", {
                  property: "fb:app_id",
                  content: "655968634437471",
                }),
                (0, i.jsx)("meta", {
                  property: "og:title",
                  content:
                    "Material Tailwind by Creative Tim | Material components for Tailwind CSS",
                }),
                (0, i.jsx)("meta", { property: "og:type", content: "article" }),
                (0, i.jsx)("meta", {
                  property: "og:image",
                  content:
                    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-tailwind/material-tailwind-share-image.png",
                }),
                (0, i.jsx)("meta", {
                  property: "og:description",
                  content:
                    "Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines. Coming soon components for VueJS, Angular and many more.",
                }),
                (0, i.jsx)("meta", {
                  property: "og:site_name",
                  content: "Creative Tim",
                }),
                (0, i.jsx)("title", {
                  children: "Material Tailwind by Creative Tim",
                }),
              ],
            }),
            (0, i.jsx)(t, s({}, r)),
          ],
        });
      }
    },
    62066: function () {},
    78311: function () {},
    22175: function (e, t, n) {
      e.exports = n(95906);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [9774, 179], function () {
      return t(82642), t(15975);
    });
    var n = e.O();
    _N_E = n;
  },
]);
