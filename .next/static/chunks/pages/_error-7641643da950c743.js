(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4820],
  {
    11021: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return e(30619);
        },
      ]);
    },
    30619: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          default: function () {
            return h;
          },
        });
      var r = e(85893),
        o = e(67294),
        u = e(58220),
        c = e.n(u);
      function i(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function f(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function l(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function p(t) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          p(t)
        );
      }
      function s(t, n) {
        return !n || ("object" !== b(n) && "function" !== typeof n) ? i(t) : n;
      }
      function y(t, n) {
        return (
          (y =
            Object.setPrototypeOf ||
            function (t, n) {
              return (t.__proto__ = n), t;
            }),
          y(t, n)
        );
      }
      var b = function (t) {
        return t && "undefined" !== typeof Symbol && t.constructor === Symbol
          ? "symbol"
          : typeof t;
      };
      function _(t) {
        var n = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            r = p(t);
          if (n) {
            var o = p(this).constructor;
            e = Reflect.construct(r, arguments, o);
          } else e = r.apply(this, arguments);
          return s(this, e);
        };
      }
      var h = (function (t) {
        !(function (t, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(n && n.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            n && y(t, n);
        })(p, t);
        var n,
          e,
          o,
          u = _(p);
        function p() {
          var t;
          return (
            f(this, p),
            l(
              i((t = u.apply(this, arguments))),
              "componentDidMount",
              function () {
                c().push("/presentation");
              }
            ),
            t
          );
        }
        return (
          (n = p),
          (e = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("div", {});
              },
            },
          ]) && a(n.prototype, e),
          o && a(n, o),
          p
        );
      })(o.Component);
    },
    58220: function (t, n, e) {
      t.exports = e(15975);
    },
  },
  function (t) {
    t.O(0, [9774, 2888, 179], function () {
      return (n = 11021), t((t.s = n));
      var n;
    });
    var n = t.O();
    _N_E = n;
  },
]);
