(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3335],
  {
    31736: function (e, t, n) {
      "use strict";
      var r = n(369),
        o = n(67294),
        i = n(73935);
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var s = "undefined" !== typeof window && "undefined" !== typeof document;
      function c(e, t) {
        e &&
          ("function" === typeof e && e(t),
          {}.hasOwnProperty.call(e, "current") && (e.current = t));
      }
      function u() {
        return s && document.createElement("div");
      }
      function f(e, t) {
        if (e === t) return !0;
        if (
          "object" === typeof e &&
          null != e &&
          "object" === typeof t &&
          null != t
        ) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (var n in e) {
            if (!t.hasOwnProperty(n)) return !1;
            if (!f(e[n], t[n])) return !1;
          }
          return !0;
        }
        return !1;
      }
      function p(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            t.find(function (t) {
              return f(e, t);
            }) || t.push(e);
          }),
          t
        );
      }
      function l(e, t) {
        var n, r;
        return Object.assign({}, t, {
          popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
            modifiers: p(
              [].concat(
                (null == (n = e.popperOptions) ? void 0 : n.modifiers) || [],
                (null == (r = t.popperOptions) ? void 0 : r.modifiers) || []
              )
            ),
          }),
        });
      }
      var d = s ? o.useLayoutEffect : o.useEffect;
      function v(e) {
        var t = (0, o.useRef)();
        return (
          t.current || (t.current = "function" === typeof e ? e() : e),
          t.current
        );
      }
      function m(e, t, n) {
        n.split(/\s+/).forEach(function (n) {
          n && e.classList[t](n);
        });
      }
      var h = {
        name: "className",
        defaultValue: "",
        fn: function (e) {
          var t = e.popper.firstElementChild,
            n = function () {
              var t;
              return !!(null == (t = e.props.render) ? void 0 : t.$$tippy);
            };
          function r() {
            (e.props.className && !n()) || m(t, "add", e.props.className);
          }
          return {
            onCreate: r,
            onBeforeUpdate: function () {
              n() && m(t, "remove", e.props.className);
            },
            onAfterUpdate: r,
          };
        },
      };
      function y(e) {
        return function (t) {
          var n = t.children,
            r = t.content,
            s = t.visible,
            f = t.singleton,
            p = t.render,
            m = t.reference,
            y = t.disabled,
            g = void 0 !== y && y,
            b = t.ignoreAttributes,
            w = void 0 === b || b,
            O =
              (t.__source,
              t.__self,
              a(t, [
                "children",
                "content",
                "visible",
                "singleton",
                "render",
                "reference",
                "disabled",
                "ignoreAttributes",
                "__source",
                "__self",
              ])),
            x = void 0 !== s,
            E = void 0 !== f,
            T = (0, o.useState)(!1),
            j = T[0],
            A = T[1],
            C = (0, o.useState)({}),
            k = C[0],
            L = C[1],
            D = (0, o.useState)(),
            P = D[0],
            M = D[1],
            S = v(function () {
              return { container: u(), renders: 1 };
            }),
            R = Object.assign({ ignoreAttributes: w }, O, {
              content: S.container,
            });
          x && ((R.trigger = "manual"), (R.hideOnClick = !1)), E && (g = !0);
          var I = R,
            _ = R.plugins || [];
          p &&
            (I = Object.assign({}, R, {
              plugins: E
                ? [].concat(_, [
                    {
                      fn: function () {
                        return {
                          onTrigger: function (e, t) {
                            var n = f.data.children.find(function (e) {
                              return e.instance.reference === t.currentTarget;
                            }).content;
                            M(n);
                          },
                        };
                      },
                    },
                  ])
                : _,
              render: function () {
                return { popper: S.container };
              },
            }));
          var H = [m].concat(n ? [n.type] : []);
          return (
            d(function () {
              var t = m;
              m && m.hasOwnProperty("current") && (t = m.current);
              var n = e(
                t || S.ref || u(),
                Object.assign({}, I, { plugins: [h].concat(R.plugins || []) })
              );
              return (
                (S.instance = n),
                g && n.disable(),
                s && n.show(),
                E && f.hook({ instance: n, content: r, props: I }),
                A(!0),
                function () {
                  n.destroy(), null == f || f.cleanup(n);
                }
              );
            }, H),
            d(function () {
              var e;
              if (1 !== S.renders) {
                var t = S.instance;
                t.setProps(l(t.props, I)),
                  null == (e = t.popperInstance) || e.forceUpdate(),
                  g ? t.disable() : t.enable(),
                  x && (s ? t.show() : t.hide()),
                  E && f.hook({ instance: t, content: r, props: I });
              } else S.renders++;
            }),
            d(function () {
              var e;
              if (p) {
                var t = S.instance;
                t.setProps({
                  popperOptions: Object.assign({}, t.props.popperOptions, {
                    modifiers: [].concat(
                      (
                        (null == (e = t.props.popperOptions)
                          ? void 0
                          : e.modifiers) || []
                      ).filter(function (e) {
                        return "$$tippyReact" !== e.name;
                      }),
                      [
                        {
                          name: "$$tippyReact",
                          enabled: !0,
                          phase: "beforeWrite",
                          requires: ["computeStyles"],
                          fn: function (e) {
                            var t,
                              n = e.state,
                              r =
                                null == (t = n.modifiersData) ? void 0 : t.hide;
                            (k.placement === n.placement &&
                              k.referenceHidden ===
                                (null == r ? void 0 : r.isReferenceHidden) &&
                              k.escaped ===
                                (null == r ? void 0 : r.hasPopperEscaped)) ||
                              L({
                                placement: n.placement,
                                referenceHidden:
                                  null == r ? void 0 : r.isReferenceHidden,
                                escaped:
                                  null == r ? void 0 : r.hasPopperEscaped,
                              }),
                              (n.attributes.popper = {});
                          },
                        },
                      ]
                    ),
                  }),
                });
              }
            }, [k.placement, k.referenceHidden, k.escaped].concat(H)),
            o.createElement(
              o.Fragment,
              null,
              n
                ? (0, o.cloneElement)(n, {
                    ref: function (e) {
                      (S.ref = e), c(n.ref, e);
                    },
                  })
                : null,
              j &&
                (0, i.createPortal)(
                  p
                    ? p(
                        (function (e) {
                          var t = { "data-placement": e.placement };
                          return (
                            e.referenceHidden &&
                              (t["data-reference-hidden"] = ""),
                            e.escaped && (t["data-escaped"] = ""),
                            t
                          );
                        })(k),
                        P,
                        S.instance
                      )
                    : r,
                  S.container
                )
            )
          );
        };
      }
      function g(e) {
        return function (t) {
          var n = void 0 === t ? {} : t,
            r = n.disabled,
            i = void 0 !== r && r,
            s = n.overrides,
            c = void 0 === s ? [] : s,
            u = (0, o.useState)(!1),
            f = u[0],
            p = u[1],
            m = v({ children: [], renders: 1 });
          return (
            d(
              function () {
                if (f) {
                  var t = m.children,
                    n = m.sourceData;
                  if (n) {
                    var r = e(
                      t.map(function (e) {
                        return e.instance;
                      }),
                      Object.assign({}, n.props, {
                        popperOptions: n.instance.props.popperOptions,
                        overrides: c,
                        plugins: [h].concat(n.props.plugins || []),
                      })
                    );
                    return (
                      (m.instance = r),
                      i && r.disable(),
                      function () {
                        r.destroy(),
                          (m.children = t.filter(function (e) {
                            return !e.instance.state.isDestroyed;
                          }));
                      }
                    );
                  }
                } else p(!0);
              },
              [f]
            ),
            d(function () {
              if (f)
                if (1 !== m.renders) {
                  var e = m.children,
                    t = m.instance,
                    n = m.sourceData;
                  if (t && n) {
                    var r = n.props,
                      o = (r.content, a(r, ["content"]));
                    t.setProps(
                      l(t.props, Object.assign({}, o, { overrides: c }))
                    ),
                      t.setInstances(
                        e.map(function (e) {
                          return e.instance;
                        })
                      ),
                      i ? t.disable() : t.enable();
                  }
                } else m.renders++;
            }),
            (0, o.useMemo)(function () {
              return [
                {
                  data: m,
                  hook: function (e) {
                    m.sourceData = e;
                  },
                  cleanup: function () {
                    m.sourceData = null;
                  },
                },
                {
                  hook: function (e) {
                    m.children.find(function (t) {
                      var n = t.instance;
                      return e.instance === n;
                    }) ||
                      (m.children.push(e),
                      m.instance &&
                        !m.instance.state.isDestroyed &&
                        m.instance.setInstances(
                          m.children.map(function (e) {
                            return e.instance;
                          })
                        ));
                  },
                  cleanup: function (e) {
                    (m.children = m.children.filter(function (t) {
                      return t.instance !== e;
                    })),
                      m.instance &&
                        !m.instance.state.isDestroyed &&
                        m.instance.setInstances(
                          m.children.map(function (e) {
                            return e.instance;
                          })
                        );
                  },
                },
              ];
            }, [])
          );
        };
      }
      var b = function (e, t) {
          return (0, o.forwardRef)(function (n, r) {
            var i = n.children,
              s = a(n, ["children"]);
            return o.createElement(
              e,
              Object.assign({}, t, s),
              i
                ? (0, o.cloneElement)(i, {
                    ref: function (e) {
                      c(r, e), c(i.ref, e);
                    },
                  })
                : null
            );
          });
        },
        w = (r.XB, b(y(r.ZP)));
      t.ZP = w;
    },
    39931: function (e) {
      e.exports = class {
        constructor() {
          (this.x = 0), (this.y = 0), (this.z = 0);
        }
        findFurthestPoint(e, t, n, r, o, i) {
          return (
            (this.x = e - n > t / 2 ? 0 : t),
            (this.y = r - i > o / 2 ? 0 : o),
            (this.z = Math.hypot(this.x - (e - n), this.y - (r - i))),
            this.z
          );
        }
        appyStyles(e, t, n, r, o) {
          e.classList.add("ripple"),
            (e.style.backgroundColor =
              "dark" === t ? "rgba(0,0,0, 0.2)" : "rgba(255,255,255, 0.3)"),
            (e.style.borderRadius = "50%"),
            (e.style.pointerEvents = "none"),
            (e.style.position = "absolute"),
            (e.style.left = o.clientX - n.left - r + "px"),
            (e.style.top = o.clientY - n.top - r + "px"),
            (e.style.width = e.style.height = 2 * r + "px");
        }
        applyAnimation(e) {
          e.animate(
            [
              { transform: "scale(0)", opacity: 1 },
              { transform: "scale(1.5)", opacity: 0 },
            ],
            { duration: 500, easing: "linear" }
          );
        }
        create(e, t) {
          const n = e.currentTarget;
          (n.style.position = "relative"), (n.style.overflow = "hidden");
          const r = n.getBoundingClientRect(),
            o = this.findFurthestPoint(
              e.clientX,
              n.offsetWidth,
              r.left,
              e.clientY,
              n.offsetHeight,
              r.top
            ),
            i = document.createElement("span");
          this.appyStyles(i, t, r, o, e),
            this.applyAnimation(i),
            n.appendChild(i),
            setTimeout(() => i.remove(), 500);
        }
      };
    },
    92703: function (e, t, n) {
      "use strict";
      var r = n(50414);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, a) {
            if (a !== r) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    45697: function (e, t, n) {
      e.exports = n(92703)();
    },
    50414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    369: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.getBoundingClientRect();
        return {
          width: t.width,
          height: t.height,
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          x: t.left,
          y: t.top,
        };
      }
      function o(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function i(e) {
        var t = o(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function a(e) {
        return e instanceof o(e).Element || e instanceof Element;
      }
      function s(e) {
        return e instanceof o(e).HTMLElement || e instanceof HTMLElement;
      }
      function c(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function u(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function f(e) {
        return ((a(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function p(e) {
        return r(f(e)).left + i(e).scrollLeft;
      }
      function l(e) {
        return o(e).getComputedStyle(e);
      }
      function d(e) {
        var t = l(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function v(e, t, n) {
        void 0 === n && (n = !1);
        var a = f(t),
          c = r(e),
          l = s(t),
          v = { scrollLeft: 0, scrollTop: 0 },
          m = { x: 0, y: 0 };
        return (
          (l || (!l && !n)) &&
            (("body" !== u(t) || d(a)) &&
              (v = (function (e) {
                return e !== o(e) && s(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : i(e);
                var t;
              })(t)),
            s(t)
              ? (((m = r(t)).x += t.clientLeft), (m.y += t.clientTop))
              : a && (m.x = p(a))),
          {
            x: c.left + v.scrollLeft - m.x,
            y: c.top + v.scrollTop - m.y,
            width: c.width,
            height: c.height,
          }
        );
      }
      function m(e) {
        var t = r(e),
          n = e.offsetWidth,
          o = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - o) <= 1 && (o = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
        );
      }
      function h(e) {
        return "html" === u(e)
          ? e
          : e.assignedSlot || e.parentNode || (c(e) ? e.host : null) || f(e);
      }
      function y(e) {
        return ["html", "body", "#document"].indexOf(u(e)) >= 0
          ? e.ownerDocument.body
          : s(e) && d(e)
          ? e
          : y(h(e));
      }
      function g(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = y(e),
          i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = o(r),
          s = i ? [a].concat(a.visualViewport || [], d(r) ? r : []) : r,
          c = t.concat(s);
        return i ? c : c.concat(g(h(s)));
      }
      function b(e) {
        return ["table", "td", "th"].indexOf(u(e)) >= 0;
      }
      function w(e) {
        return s(e) && "fixed" !== l(e).position ? e.offsetParent : null;
      }
      function O(e) {
        for (var t = o(e), n = w(e); n && b(n) && "static" === l(n).position; )
          n = w(n);
        return n &&
          ("html" === u(n) || ("body" === u(n) && "static" === l(n).position))
          ? t
          : n ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  s(e) &&
                  "fixed" === l(e).position
                )
                  return null;
                for (
                  var n = h(e);
                  s(n) && ["html", "body"].indexOf(u(n)) < 0;

                ) {
                  var r = l(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      n.d(t, {
        XB: function () {
          return ft;
        },
        ZP: function () {
          return pt;
        },
        ki: function () {
          return ye;
        },
      });
      var x = "top",
        E = "bottom",
        T = "right",
        j = "left",
        A = "auto",
        C = [x, E, T, j],
        k = "start",
        L = "end",
        D = "viewport",
        P = "popper",
        M = C.reduce(function (e, t) {
          return e.concat([t + "-" + k, t + "-" + L]);
        }, []),
        S = [].concat(C, [A]).reduce(function (e, t) {
          return e.concat([t, t + "-" + k, t + "-" + L]);
        }, []),
        R = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function I(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      function _(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (t = void 0), n(e());
                });
              })),
            t
          );
        };
      }
      var H = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function B() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function W(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? H : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, H, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            s = [],
            c = !1,
            u = {
              state: o,
              setOptions: function (n) {
                f(),
                  (o.options = Object.assign({}, i, o.options, n)),
                  (o.scrollParents = {
                    reference: a(e)
                      ? g(e)
                      : e.contextElement
                      ? g(e.contextElement)
                      : [],
                    popper: g(t),
                  });
                var c = (function (e) {
                  var t = I(e);
                  return R.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, o.options.modifiers))
                );
                return (
                  (o.orderedModifiers = c.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      i = e.effect;
                    if ("function" === typeof i) {
                      var a = i({ state: o, name: t, instance: u, options: r }),
                        c = function () {};
                      s.push(a || c);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = o.elements,
                    t = e.reference,
                    n = e.popper;
                  if (B(t, n)) {
                    (o.rects = {
                      reference: v(t, O(n), "fixed" === o.options.strategy),
                      popper: m(n),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < o.orderedModifiers.length; r++)
                      if (!0 !== o.reset) {
                        var i = o.orderedModifiers[r],
                          a = i.fn,
                          s = i.options,
                          f = void 0 === s ? {} : s,
                          p = i.name;
                        "function" === typeof a &&
                          (o =
                            a({ state: o, options: f, name: p, instance: u }) ||
                            o);
                      } else (o.reset = !1), (r = -1);
                  }
                }
              },
              update: _(function () {
                return new Promise(function (e) {
                  u.forceUpdate(), e(o);
                });
              }),
              destroy: function () {
                f(), (c = !0);
              },
            };
          if (!B(e, t)) return u;
          function f() {
            s.forEach(function (e) {
              return e();
            }),
              (s = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var N = { passive: !0 };
      var V = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            i = r.scroll,
            a = void 0 === i || i,
            s = r.resize,
            c = void 0 === s || s,
            u = o(t.elements.popper),
            f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              f.forEach(function (e) {
                e.addEventListener("scroll", n.update, N);
              }),
            c && u.addEventListener("resize", n.update, N),
            function () {
              a &&
                f.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, N);
                }),
                c && u.removeEventListener("resize", n.update, N);
            }
          );
        },
        data: {},
      };
      function U(e) {
        return e.split("-")[0];
      }
      function q(e) {
        return e.split("-")[1];
      }
      function $(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function F(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? U(o) : null,
          a = o ? q(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case x:
            t = { x: s, y: n.y - r.height };
            break;
          case E:
            t = { x: s, y: n.y + n.height };
            break;
          case T:
            t = { x: n.x + n.width, y: c };
            break;
          case j:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = i ? $(i) : null;
        if (null != u) {
          var f = "y" === u ? "height" : "width";
          switch (a) {
            case k:
              t[u] = t[u] - (n[f] / 2 - r[f] / 2);
              break;
            case L:
              t[u] = t[u] + (n[f] / 2 - r[f] / 2);
          }
        }
        return t;
      }
      var z = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = F({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        },
        X = Math.max,
        Y = Math.min,
        K = Math.round,
        Z = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function J(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          i = e.placement,
          a = e.offsets,
          s = e.position,
          c = e.gpuAcceleration,
          u = e.adaptive,
          p = e.roundOffsets,
          d =
            !0 === p
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: K(K(t * r) / r) || 0, y: K(K(n * r) / r) || 0 };
                })(a)
              : "function" === typeof p
              ? p(a)
              : a,
          v = d.x,
          m = void 0 === v ? 0 : v,
          h = d.y,
          y = void 0 === h ? 0 : h,
          g = a.hasOwnProperty("x"),
          b = a.hasOwnProperty("y"),
          w = j,
          A = x,
          C = window;
        if (u) {
          var k = O(n),
            L = "clientHeight",
            D = "clientWidth";
          k === o(n) &&
            "static" !== l((k = f(n))).position &&
            ((L = "scrollHeight"), (D = "scrollWidth")),
            (k = k),
            i === x && ((A = E), (y -= k[L] - r.height), (y *= c ? 1 : -1)),
            i === j && ((w = T), (m -= k[D] - r.width), (m *= c ? 1 : -1));
        }
        var P,
          M = Object.assign({ position: s }, u && Z);
        return c
          ? Object.assign(
              {},
              M,
              (((P = {})[A] = b ? "0" : ""),
              (P[w] = g ? "0" : ""),
              (P.transform =
                (C.devicePixelRatio || 1) < 2
                  ? "translate(" + m + "px, " + y + "px)"
                  : "translate3d(" + m + "px, " + y + "px, 0)"),
              P)
            )
          : Object.assign(
              {},
              M,
              (((t = {})[A] = b ? y + "px" : ""),
              (t[w] = g ? m + "px" : ""),
              (t.transform = ""),
              t)
            );
      }
      var G = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              o = t.elements[e];
            s(o) &&
              u(o) &&
              (Object.assign(o.style, n),
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t
                  ? o.removeAttribute(e)
                  : o.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                  o = t.attributes[e] || {},
                  i = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                s(r) &&
                  u(r) &&
                  (Object.assign(r.style, i),
                  Object.keys(o).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      var Q = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name,
              o = n.offset,
              i = void 0 === o ? [0, 0] : o,
              a = S.reduce(function (e, n) {
                return (
                  (e[n] = (function (e, t, n) {
                    var r = U(e),
                      o = [j, x].indexOf(r) >= 0 ? -1 : 1,
                      i =
                        "function" === typeof n
                          ? n(Object.assign({}, t, { placement: e }))
                          : n,
                      a = i[0],
                      s = i[1];
                    return (
                      (a = a || 0),
                      (s = (s || 0) * o),
                      [j, T].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                    );
                  })(n, t.rects, i)),
                  e
                );
              }, {}),
              s = a[t.placement],
              c = s.x,
              u = s.y;
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += c),
              (t.modifiersData.popperOffsets.y += u)),
              (t.modifiersData[r] = a);
          },
        },
        ee = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function te(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ee[e];
        });
      }
      var ne = { start: "end", end: "start" };
      function re(e) {
        return e.replace(/start|end/g, function (e) {
          return ne[e];
        });
      }
      function oe(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && c(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function ie(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ae(e, t) {
        return t === D
          ? ie(
              (function (e) {
                var t = o(e),
                  n = f(e),
                  r = t.visualViewport,
                  i = n.clientWidth,
                  a = n.clientHeight,
                  s = 0,
                  c = 0;
                return (
                  r &&
                    ((i = r.width),
                    (a = r.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((s = r.offsetLeft), (c = r.offsetTop))),
                  { width: i, height: a, x: s + p(e), y: c }
                );
              })(e)
            )
          : s(t)
          ? (function (e) {
              var t = r(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : ie(
              (function (e) {
                var t,
                  n = f(e),
                  r = i(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = X(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  s = X(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  c = -r.scrollLeft + p(e),
                  u = -r.scrollTop;
                return (
                  "rtl" === l(o || n).direction &&
                    (c += X(n.clientWidth, o ? o.clientWidth : 0) - a),
                  { width: a, height: s, x: c, y: u }
                );
              })(f(e))
            );
      }
      function se(e, t, n) {
        var r =
            "clippingParents" === t
              ? (function (e) {
                  var t = g(h(e)),
                    n =
                      ["absolute", "fixed"].indexOf(l(e).position) >= 0 && s(e)
                        ? O(e)
                        : e;
                  return a(n)
                    ? t.filter(function (e) {
                        return a(e) && oe(e, n) && "body" !== u(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(r, [n]),
          i = o[0],
          c = o.reduce(function (t, n) {
            var r = ae(e, n);
            return (
              (t.top = X(r.top, t.top)),
              (t.right = Y(r.right, t.right)),
              (t.bottom = Y(r.bottom, t.bottom)),
              (t.left = X(r.left, t.left)),
              t
            );
          }, ae(e, i));
        return (
          (c.width = c.right - c.left),
          (c.height = c.bottom - c.top),
          (c.x = c.left),
          (c.y = c.top),
          c
        );
      }
      function ce(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function ue(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function fe(e, t) {
        void 0 === t && (t = {});
        var n = t,
          o = n.placement,
          i = void 0 === o ? e.placement : o,
          s = n.boundary,
          c = void 0 === s ? "clippingParents" : s,
          u = n.rootBoundary,
          p = void 0 === u ? D : u,
          l = n.elementContext,
          d = void 0 === l ? P : l,
          v = n.altBoundary,
          m = void 0 !== v && v,
          h = n.padding,
          y = void 0 === h ? 0 : h,
          g = ce("number" !== typeof y ? y : ue(y, C)),
          b = d === P ? "reference" : P,
          w = e.elements.reference,
          O = e.rects.popper,
          j = e.elements[m ? b : d],
          A = se(a(j) ? j : j.contextElement || f(e.elements.popper), c, p),
          k = r(w),
          L = F({
            reference: k,
            element: O,
            strategy: "absolute",
            placement: i,
          }),
          M = ie(Object.assign({}, O, L)),
          S = d === P ? M : k,
          R = {
            top: A.top - S.top + g.top,
            bottom: S.bottom - A.bottom + g.bottom,
            left: A.left - S.left + g.left,
            right: S.right - A.right + g.right,
          },
          I = e.modifiersData.offset;
        if (d === P && I) {
          var _ = I[i];
          Object.keys(R).forEach(function (e) {
            var t = [T, E].indexOf(e) >= 0 ? 1 : -1,
              n = [x, E].indexOf(e) >= 0 ? "y" : "x";
            R[e] += _[n] * t;
          });
        }
        return R;
      }
      function pe(e, t, n) {
        return X(e, Y(t, n));
      }
      var le = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 !== a && a,
            c = n.boundary,
            u = n.rootBoundary,
            f = n.altBoundary,
            p = n.padding,
            l = n.tether,
            d = void 0 === l || l,
            v = n.tetherOffset,
            h = void 0 === v ? 0 : v,
            y = fe(t, {
              boundary: c,
              rootBoundary: u,
              padding: p,
              altBoundary: f,
            }),
            g = U(t.placement),
            b = q(t.placement),
            w = !b,
            A = $(g),
            C = "x" === A ? "y" : "x",
            L = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            P = t.rects.popper,
            M =
              "function" === typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            S = { x: 0, y: 0 };
          if (L) {
            if (i || s) {
              var R = "y" === A ? x : j,
                I = "y" === A ? E : T,
                _ = "y" === A ? "height" : "width",
                H = L[A],
                B = L[A] + y[R],
                W = L[A] - y[I],
                N = d ? -P[_] / 2 : 0,
                V = b === k ? D[_] : P[_],
                F = b === k ? -P[_] : -D[_],
                z = t.elements.arrow,
                K = d && z ? m(z) : { width: 0, height: 0 },
                Z = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                J = Z[R],
                G = Z[I],
                Q = pe(0, D[_], K[_]),
                ee = w ? D[_] / 2 - N - Q - J - M : V - Q - J - M,
                te = w ? -D[_] / 2 + N + Q + G + M : F + Q + G + M,
                ne = t.elements.arrow && O(t.elements.arrow),
                re = ne
                  ? "y" === A
                    ? ne.clientTop || 0
                    : ne.clientLeft || 0
                  : 0,
                oe = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][A]
                  : 0,
                ie = L[A] + ee - oe - re,
                ae = L[A] + te - oe;
              if (i) {
                var se = pe(d ? Y(B, ie) : B, H, d ? X(W, ae) : W);
                (L[A] = se), (S[A] = se - H);
              }
              if (s) {
                var ce = "x" === A ? x : j,
                  ue = "x" === A ? E : T,
                  le = L[C],
                  de = le + y[ce],
                  ve = le - y[ue],
                  me = pe(d ? Y(de, ie) : de, le, d ? X(ve, ae) : ve);
                (L[C] = me), (S[C] = me - le);
              }
            }
            t.modifiersData[r] = S;
          }
        },
        requiresIfExists: ["offset"],
      };
      var de = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = U(n.placement),
            c = $(s),
            u = [j, T].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var f = (function (e, t) {
                return ce(
                  "number" !==
                    typeof (e =
                      "function" === typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : ue(e, C)
                );
              })(o.padding, n),
              p = m(i),
              l = "y" === c ? x : j,
              d = "y" === c ? E : T,
              v =
                n.rects.reference[u] +
                n.rects.reference[c] -
                a[c] -
                n.rects.popper[u],
              h = a[c] - n.rects.reference[c],
              y = O(i),
              g = y
                ? "y" === c
                  ? y.clientHeight || 0
                  : y.clientWidth || 0
                : 0,
              b = v / 2 - h / 2,
              w = f[l],
              A = g - p[u] - f[d],
              k = g / 2 - p[u] / 2 + b,
              L = pe(w, k, A),
              D = c;
            n.modifiersData[r] =
              (((t = {})[D] = L), (t.centerOffset = L - k), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" !== typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            oe(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function ve(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function me(e) {
        return [x, T, E, j].some(function (t) {
          return e[t] >= 0;
        });
      }
      var he = W({
          defaultModifiers: [
            V,
            z,
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  o = void 0 === r || r,
                  i = n.adaptive,
                  a = void 0 === i || i,
                  s = n.roundOffsets,
                  c = void 0 === s || s,
                  u = {
                    placement: U(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    J(
                      Object.assign({}, u, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: a,
                        roundOffsets: c,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      J(
                        Object.assign({}, u, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: c,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            G,
            Q,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var o = n.mainAxis,
                      i = void 0 === o || o,
                      a = n.altAxis,
                      s = void 0 === a || a,
                      c = n.fallbackPlacements,
                      u = n.padding,
                      f = n.boundary,
                      p = n.rootBoundary,
                      l = n.altBoundary,
                      d = n.flipVariations,
                      v = void 0 === d || d,
                      m = n.allowedAutoPlacements,
                      h = t.options.placement,
                      y = U(h),
                      g =
                        c ||
                        (y === h || !v
                          ? [te(h)]
                          : (function (e) {
                              if (U(e) === A) return [];
                              var t = te(e);
                              return [re(e), t, re(t)];
                            })(h)),
                      b = [h].concat(g).reduce(function (e, n) {
                        return e.concat(
                          U(n) === A
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  r = n.placement,
                                  o = n.boundary,
                                  i = n.rootBoundary,
                                  a = n.padding,
                                  s = n.flipVariations,
                                  c = n.allowedAutoPlacements,
                                  u = void 0 === c ? S : c,
                                  f = q(r),
                                  p = f
                                    ? s
                                      ? M
                                      : M.filter(function (e) {
                                          return q(e) === f;
                                        })
                                    : C,
                                  l = p.filter(function (e) {
                                    return u.indexOf(e) >= 0;
                                  });
                                0 === l.length && (l = p);
                                var d = l.reduce(function (t, n) {
                                  return (
                                    (t[n] = fe(e, {
                                      placement: n,
                                      boundary: o,
                                      rootBoundary: i,
                                      padding: a,
                                    })[U(n)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(d).sort(function (e, t) {
                                  return d[e] - d[t];
                                });
                              })(t, {
                                placement: n,
                                boundary: f,
                                rootBoundary: p,
                                padding: u,
                                flipVariations: v,
                                allowedAutoPlacements: m,
                              })
                            : n
                        );
                      }, []),
                      w = t.rects.reference,
                      O = t.rects.popper,
                      L = new Map(),
                      D = !0,
                      P = b[0],
                      R = 0;
                    R < b.length;
                    R++
                  ) {
                    var I = b[R],
                      _ = U(I),
                      H = q(I) === k,
                      B = [x, E].indexOf(_) >= 0,
                      W = B ? "width" : "height",
                      N = fe(t, {
                        placement: I,
                        boundary: f,
                        rootBoundary: p,
                        altBoundary: l,
                        padding: u,
                      }),
                      V = B ? (H ? T : j) : H ? E : x;
                    w[W] > O[W] && (V = te(V));
                    var $ = te(V),
                      F = [];
                    if (
                      (i && F.push(N[_] <= 0),
                      s && F.push(N[V] <= 0, N[$] <= 0),
                      F.every(function (e) {
                        return e;
                      }))
                    ) {
                      (P = I), (D = !1);
                      break;
                    }
                    L.set(I, F);
                  }
                  if (D)
                    for (
                      var z = function (e) {
                          var t = b.find(function (t) {
                            var n = L.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (P = t), "break";
                        },
                        X = v ? 3 : 1;
                      X > 0;
                      X--
                    ) {
                      if ("break" === z(X)) break;
                    }
                  t.placement !== P &&
                    ((t.modifiersData[r]._skip = !0),
                    (t.placement = P),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            le,
            de,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = fe(t, { elementContext: "reference" }),
                  s = fe(t, { altBoundary: !0 }),
                  c = ve(a, r),
                  u = ve(s, o, i),
                  f = me(c),
                  p = me(u);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: u,
                  isReferenceHidden: f,
                  hasPopperEscaped: p,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": f,
                      "data-popper-escaped": p,
                    }
                  ));
              },
            },
          ],
        }),
        ye =
          '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
        ge = "tippy-content",
        be = "tippy-backdrop",
        we = "tippy-arrow",
        Oe = "tippy-svg-arrow",
        xe = { passive: !0, capture: !0 };
      function Ee(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
      }
      function Te(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function je(e, t) {
        return "function" === typeof e ? e.apply(void 0, t) : e;
      }
      function Ae(e, t) {
        return 0 === t
          ? e
          : function (r) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(r);
                }, t));
            };
        var n;
      }
      function Ce(e, t) {
        var n = Object.assign({}, e);
        return (
          t.forEach(function (e) {
            delete n[e];
          }),
          n
        );
      }
      function ke(e) {
        return [].concat(e);
      }
      function Le(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function De(e) {
        return e.split("-")[0];
      }
      function Pe(e) {
        return [].slice.call(e);
      }
      function Me() {
        return document.createElement("div");
      }
      function Se(e) {
        return ["Element", "Fragment"].some(function (t) {
          return Te(e, t);
        });
      }
      function Re(e) {
        return Te(e, "MouseEvent");
      }
      function Ie(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function _e(e) {
        return Se(e)
          ? [e]
          : (function (e) {
              return Te(e, "NodeList");
            })(e)
          ? Pe(e)
          : Array.isArray(e)
          ? e
          : Pe(document.querySelectorAll(e));
      }
      function He(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Be(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function We(e) {
        var t,
          n = ke(e)[0];
        return (null == n || null == (t = n.ownerDocument) ? void 0 : t.body)
          ? n.ownerDocument
          : document;
      }
      function Ne(e, t, n) {
        var r = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[r](t, n);
        });
      }
      var Ve = { isTouch: !1 },
        Ue = 0;
      function qe() {
        Ve.isTouch ||
          ((Ve.isTouch = !0),
          window.performance && document.addEventListener("mousemove", $e));
      }
      function $e() {
        var e = performance.now();
        e - Ue < 20 &&
          ((Ve.isTouch = !1), document.removeEventListener("mousemove", $e)),
          (Ue = e);
      }
      function Fe() {
        var e = document.activeElement;
        if (Ie(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var ze =
          "undefined" !== typeof window && "undefined" !== typeof document
            ? navigator.userAgent
            : "",
        Xe = /MSIE |Trident\//.test(ze);
      var Ye = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        Ke = Object.assign(
          {
            appendTo: function () {
              return document.body;
            },
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          Ye,
          {},
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        Ze = Object.keys(Ke);
      function Je(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r = n.name,
            o = n.defaultValue;
          return r && (t[r] = void 0 !== e[r] ? e[r] : o), t;
        }, {});
        return Object.assign({}, e, {}, t);
      }
      function Ge(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: je(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(Je(Object.assign({}, Ke, { plugins: t })))
                    : Ze
                ).reduce(function (t, n) {
                  var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!r) return t;
                  if ("content" === n) t[n] = r;
                  else
                    try {
                      t[n] = JSON.parse(r);
                    } catch (o) {
                      t[n] = r;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, Ke.aria, {}, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      function Qe(e, t) {
        e.innerHTML = t;
      }
      function et(e) {
        var t = Me();
        return (
          !0 === e
            ? (t.className = we)
            : ((t.className = Oe), Se(e) ? t.appendChild(e) : Qe(t, e)),
          t
        );
      }
      function tt(e, t) {
        Se(t.content)
          ? (Qe(e, ""), e.appendChild(t.content))
          : "function" !== typeof t.content &&
            (t.allowHTML ? Qe(e, t.content) : (e.textContent = t.content));
      }
      function nt(e) {
        var t = e.firstElementChild,
          n = Pe(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains(ge);
          }),
          arrow: n.find(function (e) {
            return e.classList.contains(we) || e.classList.contains(Oe);
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains(be);
          }),
        };
      }
      function rt(e) {
        var t = Me(),
          n = Me();
        (n.className = "tippy-box"),
          n.setAttribute("data-state", "hidden"),
          n.setAttribute("tabindex", "-1");
        var r = Me();
        function o(n, r) {
          var o = nt(t),
            i = o.box,
            a = o.content,
            s = o.arrow;
          r.theme
            ? i.setAttribute("data-theme", r.theme)
            : i.removeAttribute("data-theme"),
            "string" === typeof r.animation
              ? i.setAttribute("data-animation", r.animation)
              : i.removeAttribute("data-animation"),
            r.inertia
              ? i.setAttribute("data-inertia", "")
              : i.removeAttribute("data-inertia"),
            (i.style.maxWidth =
              "number" === typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
            r.role ? i.setAttribute("role", r.role) : i.removeAttribute("role"),
            (n.content === r.content && n.allowHTML === r.allowHTML) ||
              tt(a, e.props),
            r.arrow
              ? s
                ? n.arrow !== r.arrow &&
                  (i.removeChild(s), i.appendChild(et(r.arrow)))
                : i.appendChild(et(r.arrow))
              : s && i.removeChild(s);
        }
        return (
          (r.className = ge),
          r.setAttribute("data-state", "hidden"),
          tt(r, e.props),
          t.appendChild(n),
          n.appendChild(r),
          o(e.props, e.props),
          { popper: t, onUpdate: o }
        );
      }
      rt.$$tippy = !0;
      var ot = 1,
        it = [],
        at = [];
      function st(e, t) {
        var n,
          r,
          o,
          i,
          a,
          s,
          c,
          u,
          f,
          p = Ge(
            e,
            Object.assign(
              {},
              Ke,
              {},
              Je(
                ((n = t),
                Object.keys(n).reduce(function (e, t) {
                  return void 0 !== n[t] && (e[t] = n[t]), e;
                }, {}))
              )
            )
          ),
          l = !1,
          d = !1,
          v = !1,
          m = !1,
          h = [],
          y = Ae(Y, p.interactiveDebounce),
          g = ot++,
          b = (f = p.plugins).filter(function (e, t) {
            return f.indexOf(e) === t;
          }),
          w = {
            id: g,
            reference: e,
            popper: Me(),
            popperInstance: null,
            props: p,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: b,
            clearDelayTimeouts: function () {
              clearTimeout(r), clearTimeout(o), cancelAnimationFrame(i);
            },
            setProps: function (t) {
              0;
              if (w.state.isDestroyed) return;
              R("onBeforeUpdate", [w, t]), z();
              var n = w.props,
                r = Ge(
                  e,
                  Object.assign({}, w.props, {}, t, { ignoreAttributes: !0 })
                );
              (w.props = r),
                F(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (H(), (y = Ae(Y, r.interactiveDebounce)));
              n.triggerTarget && !r.triggerTarget
                ? ke(n.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : r.triggerTarget && e.removeAttribute("aria-expanded");
              _(), S(), E && E(n, r);
              w.popperInstance &&
                (G(),
                ee().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              R("onAfterUpdate", [w, t]);
            },
            setContent: function (e) {
              w.setProps({ content: e });
            },
            show: function () {
              0;
              var e = w.state.isVisible,
                t = w.state.isDestroyed,
                n = !w.state.isEnabled,
                r = Ve.isTouch && !w.props.touch,
                o = Ee(w.props.duration, 0, Ke.duration);
              if (e || t || n || r) return;
              if (L().hasAttribute("disabled")) return;
              if ((R("onShow", [w], !1), !1 === w.props.onShow(w))) return;
              (w.state.isVisible = !0), k() && (x.style.visibility = "visible");
              S(), V(), w.state.isMounted || (x.style.transition = "none");
              if (k()) {
                var i = P(),
                  a = i.box,
                  s = i.content;
                He([a, s], 0);
              }
              (c = function () {
                var e;
                if (w.state.isVisible && !m) {
                  if (
                    ((m = !0),
                    x.offsetHeight,
                    (x.style.transition = w.props.moveTransition),
                    k() && w.props.animation)
                  ) {
                    var t = P(),
                      n = t.box,
                      r = t.content;
                    He([n, r], o), Be([n, r], "visible");
                  }
                  I(),
                    _(),
                    Le(at, w),
                    null == (e = w.popperInstance) || e.forceUpdate(),
                    (w.state.isMounted = !0),
                    R("onMount", [w]),
                    w.props.animation &&
                      k() &&
                      (function (e, t) {
                        q(e, t);
                      })(o, function () {
                        (w.state.isShown = !0), R("onShown", [w]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = w.props.appendTo,
                    n = L();
                  e =
                    (w.props.interactive && t === Ke.appendTo) || "parent" === t
                      ? n.parentNode
                      : je(t, [n]);
                  e.contains(x) || e.appendChild(x);
                  G(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !w.state.isVisible,
                t = w.state.isDestroyed,
                n = !w.state.isEnabled,
                r = Ee(w.props.duration, 1, Ke.duration);
              if (e || t || n) return;
              if ((R("onHide", [w], !1), !1 === w.props.onHide(w))) return;
              (w.state.isVisible = !1),
                (w.state.isShown = !1),
                (m = !1),
                (l = !1),
                k() && (x.style.visibility = "hidden");
              if ((H(), U(), S(), k())) {
                var o = P(),
                  i = o.box,
                  a = o.content;
                w.props.animation && (He([i, a], r), Be([i, a], "hidden"));
              }
              I(),
                _(),
                w.props.animation
                  ? k() &&
                    (function (e, t) {
                      q(e, function () {
                        !w.state.isVisible &&
                          x.parentNode &&
                          x.parentNode.contains(x) &&
                          t();
                      });
                    })(r, w.unmount)
                  : w.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              D().addEventListener("mousemove", y), Le(it, y), y(e);
            },
            enable: function () {
              w.state.isEnabled = !0;
            },
            disable: function () {
              w.hide(), (w.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              w.state.isVisible && w.hide();
              if (!w.state.isMounted) return;
              Q(),
                ee().forEach(function (e) {
                  e._tippy.unmount();
                }),
                x.parentNode && x.parentNode.removeChild(x);
              (at = at.filter(function (e) {
                return e !== w;
              })),
                (w.state.isMounted = !1),
                R("onHidden", [w]);
            },
            destroy: function () {
              0;
              if (w.state.isDestroyed) return;
              w.clearDelayTimeouts(),
                w.unmount(),
                z(),
                delete e._tippy,
                (w.state.isDestroyed = !0),
                R("onDestroy", [w]);
            },
          };
        if (!p.render) return w;
        var O = p.render(w),
          x = O.popper,
          E = O.onUpdate;
        x.setAttribute("data-tippy-root", ""),
          (x.id = "tippy-" + w.id),
          (w.popper = x),
          (e._tippy = w),
          (x._tippy = w);
        var T = b.map(function (e) {
            return e.fn(w);
          }),
          j = e.hasAttribute("aria-expanded");
        return (
          F(),
          _(),
          S(),
          R("onCreate", [w]),
          p.showOnCreate && te(),
          x.addEventListener("mouseenter", function () {
            w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
          }),
          x.addEventListener("mouseleave", function (e) {
            w.props.interactive &&
              w.props.trigger.indexOf("mouseenter") >= 0 &&
              (D().addEventListener("mousemove", y), y(e));
          }),
          w
        );
        function A() {
          var e = w.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function C() {
          return "hold" === A()[0];
        }
        function k() {
          var e;
          return !!(null == (e = w.props.render) ? void 0 : e.$$tippy);
        }
        function L() {
          return u || e;
        }
        function D() {
          var e = L().parentNode;
          return e ? We(e) : document;
        }
        function P() {
          return nt(x);
        }
        function M(e) {
          return (w.state.isMounted && !w.state.isVisible) ||
            Ve.isTouch ||
            (a && "focus" === a.type)
            ? 0
            : Ee(w.props.delay, e ? 0 : 1, Ke.delay);
        }
        function S() {
          (x.style.pointerEvents =
            w.props.interactive && w.state.isVisible ? "" : "none"),
            (x.style.zIndex = "" + w.props.zIndex);
        }
        function R(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          T.forEach(function (n) {
            n[e] && n[e].apply(void 0, t);
          }),
          n) && (r = w.props)[e].apply(r, t);
        }
        function I() {
          var t = w.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              r = x.id;
            ke(w.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (w.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var o = t && t.replace(r, "").trim();
                o ? e.setAttribute(n, o) : e.removeAttribute(n);
              }
            });
          }
        }
        function _() {
          !j &&
            w.props.aria.expanded &&
            ke(w.props.triggerTarget || e).forEach(function (e) {
              w.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    w.state.isVisible && e === L() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function H() {
          D().removeEventListener("mousemove", y),
            (it = it.filter(function (e) {
              return e !== y;
            }));
        }
        function B(e) {
          if (
            (!Ve.isTouch || (!v && "mousedown" !== e.type)) &&
            (!w.props.interactive || !x.contains(e.target))
          ) {
            if (L().contains(e.target)) {
              if (Ve.isTouch) return;
              if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
                return;
            } else R("onClickOutside", [w, e]);
            !0 === w.props.hideOnClick &&
              (w.clearDelayTimeouts(),
              w.hide(),
              (d = !0),
              setTimeout(function () {
                d = !1;
              }),
              w.state.isMounted || U());
          }
        }
        function W() {
          v = !0;
        }
        function N() {
          v = !1;
        }
        function V() {
          var e = D();
          e.addEventListener("mousedown", B, !0),
            e.addEventListener("touchend", B, xe),
            e.addEventListener("touchstart", N, xe),
            e.addEventListener("touchmove", W, xe);
        }
        function U() {
          var e = D();
          e.removeEventListener("mousedown", B, !0),
            e.removeEventListener("touchend", B, xe),
            e.removeEventListener("touchstart", N, xe),
            e.removeEventListener("touchmove", W, xe);
        }
        function q(e, t) {
          var n = P().box;
          function r(e) {
            e.target === n && (Ne(n, "remove", r), t());
          }
          if (0 === e) return t();
          Ne(n, "remove", s), Ne(n, "add", r), (s = r);
        }
        function $(t, n, r) {
          void 0 === r && (r = !1),
            ke(w.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r),
                h.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function F() {
          var e;
          C() &&
            ($("touchstart", X, { passive: !0 }),
            $("touchend", K, { passive: !0 })),
            ((e = w.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(
              function (e) {
                if ("manual" !== e)
                  switch (($(e, X), e)) {
                    case "mouseenter":
                      $("mouseleave", K);
                      break;
                    case "focus":
                      $(Xe ? "focusout" : "blur", Z);
                      break;
                    case "focusin":
                      $("focusout", Z);
                  }
              }
            );
        }
        function z() {
          h.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              o = e.options;
            t.removeEventListener(n, r, o);
          }),
            (h = []);
        }
        function X(e) {
          var t,
            n = !1;
          if (w.state.isEnabled && !J(e) && !d) {
            var r = "focus" === (null == (t = a) ? void 0 : t.type);
            (a = e),
              (u = e.currentTarget),
              _(),
              !w.state.isVisible &&
                Re(e) &&
                it.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (w.props.trigger.indexOf("mouseenter") < 0 || l) &&
              !1 !== w.props.hideOnClick &&
              w.state.isVisible
                ? (n = !0)
                : te(e),
              "click" === e.type && (l = !n),
              n && !r && ne(e);
          }
        }
        function Y(e) {
          var t = e.target,
            n = L().contains(t) || x.contains(t);
          if ("mousemove" !== e.type || !n) {
            var r = ee()
              .concat(x)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: n,
                      props: p,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var n = t.clientX,
                r = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  o = e.popperState,
                  i = e.props.interactiveBorder,
                  a = De(o.placement),
                  s = o.modifiersData.offset;
                if (!s) return !0;
                var c = "bottom" === a ? s.top.y : 0,
                  u = "top" === a ? s.bottom.y : 0,
                  f = "right" === a ? s.left.x : 0,
                  p = "left" === a ? s.right.x : 0,
                  l = t.top - r + c > i,
                  d = r - t.bottom - u > i,
                  v = t.left - n + f > i,
                  m = n - t.right - p > i;
                return l || d || v || m;
              });
            })(r, e) && (H(), ne(e));
          }
        }
        function K(e) {
          J(e) ||
            (w.props.trigger.indexOf("click") >= 0 && l) ||
            (w.props.interactive ? w.hideWithInteractivity(e) : ne(e));
        }
        function Z(e) {
          (w.props.trigger.indexOf("focusin") < 0 && e.target !== L()) ||
            (w.props.interactive &&
              e.relatedTarget &&
              x.contains(e.relatedTarget)) ||
            ne(e);
        }
        function J(e) {
          return !!Ve.isTouch && C() !== e.type.indexOf("touch") >= 0;
        }
        function G() {
          Q();
          var t = w.props,
            n = t.popperOptions,
            r = t.placement,
            o = t.offset,
            i = t.getReferenceClientRect,
            a = t.moveTransition,
            s = k() ? nt(x).arrow : null,
            u = i
              ? {
                  getBoundingClientRect: i,
                  contextElement: i.contextElement || L(),
                }
              : e,
            f = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (k()) {
                  var n = P().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (e) {
                      "placement" === e
                        ? n.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? n.setAttribute("data-" + e, "")
                        : n.removeAttribute("data-" + e);
                    }
                  ),
                    (t.attributes.popper = {});
                }
              },
            },
            p = [
              { name: "offset", options: { offset: o } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !a } },
              f,
            ];
          k() &&
            s &&
            p.push({ name: "arrow", options: { element: s, padding: 3 } }),
            p.push.apply(p, (null == n ? void 0 : n.modifiers) || []),
            (w.popperInstance = he(
              u,
              x,
              Object.assign({}, n, {
                placement: r,
                onFirstUpdate: c,
                modifiers: p,
              })
            ));
        }
        function Q() {
          w.popperInstance &&
            (w.popperInstance.destroy(), (w.popperInstance = null));
        }
        function ee() {
          return Pe(x.querySelectorAll("[data-tippy-root]"));
        }
        function te(e) {
          w.clearDelayTimeouts(), e && R("onTrigger", [w, e]), V();
          var t = M(!0),
            n = A(),
            o = n[0],
            i = n[1];
          Ve.isTouch && "hold" === o && i && (t = i),
            t
              ? (r = setTimeout(function () {
                  w.show();
                }, t))
              : w.show();
        }
        function ne(e) {
          if (
            (w.clearDelayTimeouts(),
            R("onUntrigger", [w, e]),
            w.state.isVisible)
          ) {
            if (
              !(
                w.props.trigger.indexOf("mouseenter") >= 0 &&
                w.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                l
              )
            ) {
              var t = M(!1);
              t
                ? (o = setTimeout(function () {
                    w.state.isVisible && w.hide();
                  }, t))
                : (i = requestAnimationFrame(function () {
                    w.hide();
                  }));
            }
          } else U();
        }
      }
      function ct(e, t) {
        void 0 === t && (t = {});
        var n = Ke.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", qe, xe),
          window.addEventListener("blur", Fe);
        var r = Object.assign({}, t, { plugins: n }),
          o = _e(e).reduce(function (e, t) {
            var n = t && st(t, r);
            return n && e.push(n), e;
          }, []);
        return Se(e) ? o[0] : o;
      }
      (ct.defaultProps = Ke),
        (ct.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            Ke[t] = e[t];
          });
        }),
        (ct.currentInput = Ve);
      var ut = Object.assign({}, G, {
          effect: function (e) {
            var t = e.state,
              n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, n.arrow);
          },
        }),
        ft = function (e, t) {
          var n;
          void 0 === t && (t = {});
          var r,
            o = e,
            i = [],
            a = t.overrides,
            s = [],
            c = !1;
          function u() {
            i = o.map(function (e) {
              return e.reference;
            });
          }
          function f(e) {
            o.forEach(function (t) {
              e ? t.enable() : t.disable();
            });
          }
          function p(e) {
            return o.map(function (t) {
              var n = t.setProps;
              return (
                (t.setProps = function (o) {
                  n(o), t.reference === r && e.setProps(o);
                }),
                function () {
                  t.setProps = n;
                }
              );
            });
          }
          function l(e, t) {
            var n = i.indexOf(t);
            if (t !== r) {
              r = t;
              var s = (a || []).concat("content").reduce(function (e, t) {
                return (e[t] = o[n].props[t]), e;
              }, {});
              e.setProps(
                Object.assign({}, s, {
                  getReferenceClientRect:
                    "function" === typeof s.getReferenceClientRect
                      ? s.getReferenceClientRect
                      : function () {
                          return t.getBoundingClientRect();
                        },
                })
              );
            }
          }
          f(!1), u();
          var d = {
              fn: function () {
                return {
                  onDestroy: function () {
                    f(!0);
                  },
                  onHidden: function () {
                    r = null;
                  },
                  onClickOutside: function (e) {
                    e.props.showOnCreate && !c && ((c = !0), (r = null));
                  },
                  onShow: function (e) {
                    e.props.showOnCreate && !c && ((c = !0), l(e, i[0]));
                  },
                  onTrigger: function (e, t) {
                    l(e, t.currentTarget);
                  },
                };
              },
            },
            v = ct(
              Me(),
              Object.assign({}, Ce(t, ["overrides"]), {
                plugins: [d].concat(t.plugins || []),
                triggerTarget: i,
                popperOptions: Object.assign({}, t.popperOptions, {
                  modifiers: [].concat(
                    (null == (n = t.popperOptions) ? void 0 : n.modifiers) ||
                      [],
                    [ut]
                  ),
                }),
              })
            ),
            m = v.show;
          (v.show = function (e) {
            if ((m(), !r && null == e)) return l(v, i[0]);
            if (!r || null != e) {
              if ("number" === typeof e) return i[e] && l(v, i[e]);
              if (o.includes(e)) {
                var t = e.reference;
                return l(v, t);
              }
              return i.includes(e) ? l(v, e) : void 0;
            }
          }),
            (v.showNext = function () {
              var e = i[0];
              if (!r) return v.show(0);
              var t = i.indexOf(r);
              v.show(i[t + 1] || e);
            }),
            (v.showPrevious = function () {
              var e = i[i.length - 1];
              if (!r) return v.show(e);
              var t = i.indexOf(r),
                n = i[t - 1] || e;
              v.show(n);
            });
          var h = v.setProps;
          return (
            (v.setProps = function (e) {
              (a = e.overrides || a), h(e);
            }),
            (v.setInstances = function (e) {
              f(!0),
                s.forEach(function (e) {
                  return e();
                }),
                (o = e),
                f(!1),
                u(),
                p(v),
                v.setProps({ triggerTarget: i });
            }),
            (s = p(v)),
            v
          );
        };
      ct.setDefaultProps({ render: rt });
      var pt = ct;
    },
    93526: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return r(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i,
        a = (i = n(98025)) && i.__esModule ? i : { default: i },
        s = n(19350),
        c = n(15975),
        u = n(33758);
      var f = {};
      function p(e, t, n, r) {
        if (e && s.isLocalURL(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          f[t + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var l = function (e) {
        var t,
          n = !1 !== e.prefetch,
          r = c.useRouter(),
          i = a.default.useMemo(
            function () {
              var t = o(s.resolveHref(r, e.href, !0), 2),
                n = t[0],
                i = t[1];
              return { href: n, as: e.as ? s.resolveHref(r, e.as) : i || n };
            },
            [r, e.href, e.as]
          ),
          l = i.href,
          d = i.as,
          v = a.default.useRef(l),
          m = a.default.useRef(d),
          h = e.children,
          y = e.replace,
          g = e.shallow,
          b = e.scroll,
          w = e.locale;
        "string" === typeof h && (h = a.default.createElement("a", null, h));
        var O =
            (t = a.default.Children.only(h)) && "object" === typeof t && t.ref,
          x = o(u.useIntersection({ rootMargin: "200px" }), 3),
          E = x[0],
          T = x[1],
          j = x[2],
          A = a.default.useCallback(
            function (e) {
              (m.current === d && v.current === l) ||
                (j(), (m.current = d), (v.current = l)),
                E(e),
                O &&
                  ("function" === typeof O
                    ? O(e)
                    : "object" === typeof O && (O.current = e));
            },
            [d, O, l, j, E]
          );
        a.default.useEffect(
          function () {
            var e = T && n && s.isLocalURL(l),
              t = "undefined" !== typeof w ? w : r && r.locale,
              o = f[l + "%" + d + (t ? "%" + t : "")];
            e && !o && p(r, l, d, { locale: t });
          },
          [d, l, T, w, n, r]
        );
        var C = {
          ref: A,
          onClick: function (e) {
            t.props &&
              "function" === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, i, a, c) {
                  ("A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      s.isLocalURL(n))) &&
                    (e.preventDefault(),
                    t[o ? "replace" : "push"](n, r, {
                      shallow: i,
                      locale: c,
                      scroll: a,
                    }));
                })(e, r, l, d, y, g, b, w);
          },
          onMouseEnter: function (e) {
            t.props &&
              "function" === typeof t.props.onMouseEnter &&
              t.props.onMouseEnter(e),
              s.isLocalURL(l) && p(r, l, d, { priority: !0 });
          },
        };
        if (e.passHref || ("a" === t.type && !("href" in t.props))) {
          var k = "undefined" !== typeof w ? w : r && r.locale,
            L =
              r &&
              r.isLocaleDomain &&
              s.getDomainLocale(d, k, r && r.locales, r && r.domainLocales);
          C.href = L || s.addBasePath(s.addLocale(d, k, r && r.defaultLocale));
        }
        return a.default.cloneElement(t, C);
      };
      (t.default = l),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          (Object.assign(t.default, t), (e.exports = t.default));
    },
    33758: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return r(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            r = e.disabled || !s,
            f = i.useRef(),
            p = o(i.useState(!1), 2),
            l = p[0],
            d = p[1],
            v = o(i.useState(t ? t.current : null), 2),
            m = v[0],
            h = v[1],
            y = i.useCallback(
              function (e) {
                f.current && (f.current(), (f.current = void 0)),
                  r ||
                    l ||
                    (e &&
                      e.tagName &&
                      (f.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t,
                              n = {
                                root: e.root || null,
                                margin: e.rootMargin || "",
                              },
                              r = u.find(function (e) {
                                return (
                                  e.root === n.root && e.margin === n.margin
                                );
                              });
                            r ? (t = c.get(r)) : ((t = c.get(n)), u.push(n));
                            if (t) return t;
                            var o = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = o.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              c.set(
                                n,
                                (t = { id: n, observer: i, elements: o })
                              ),
                              t
                            );
                          })(n),
                          o = r.id,
                          i = r.observer,
                          a = r.elements;
                        return (
                          a.set(e, t),
                          i.observe(e),
                          function () {
                            if ((a.delete(e), i.unobserve(e), 0 === a.size)) {
                              i.disconnect(), c.delete(o);
                              var t = u.findIndex(function (e) {
                                return (
                                  e.root === o.root && e.margin === o.margin
                                );
                              });
                              t > -1 && u.splice(t, 1);
                            }
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { root: m, rootMargin: n }
                      )));
              },
              [r, m, n, l]
            ),
            g = i.useCallback(function () {
              d(!1);
            }, []);
          return (
            i.useEffect(
              function () {
                if (!s && !l) {
                  var e = a.requestIdleCallback(function () {
                    return d(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(e);
                  };
                }
              },
              [l]
            ),
            i.useEffect(
              function () {
                t && h(t.current);
              },
              [t]
            ),
            [y, l, g]
          );
        });
      var i = n(98025),
        a = n(48336),
        s = "undefined" !== typeof IntersectionObserver;
      var c = new Map(),
        u = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default));
    },
    52086: function (e, t, n) {
      e.exports = n(93526);
    },
    58220: function (e, t, n) {
      e.exports = n(15975);
    },
  },
]);
