(function () {
    var e, n;
    (e = "undefined" == typeof window ? this : window),
    (n = function (B, z) {
        function X(e, t, n) {
            var o,
                l,
                r = (n = n || D).createElement("script");
            if (((r.text = e), t))
                for (o in S)
                    (l = t[o] || (t.getAttribute && t.getAttribute(o))) &&
                    r.setAttribute(o, l);
            n.head.appendChild(r).parentNode.removeChild(r);
        }

        function G(e) {
            return null == e ?
                e + "" :
                "object" == typeof e || "function" == typeof e ?
                C[T.call(e)] || "object" :
                typeof e;
        }

        function ee(e) {
            var t = !!e && "length" in e && e.length,
                a = G(e);
            return (
                !w(e) &&
                !f(e) &&
                ("array" === a ||
                    0 === t ||
                    ("number" == typeof t && 0 < t && t - 1 in e))
            );
        }

        function te(t, n) {
            return t.nodeName && t.nodeName.toLowerCase() === n.toLowerCase();
        }

        function oe(e, l, n) {
            return w(l) ?
                L.grep(e, function (t, a) {
                    return !!l.call(t, a, t) !== n;
                }) :
                l.nodeType ?
                L.grep(e, function (e) {
                    return (e === l) !== n;
                }) :
                "string" == typeof l ?
                L.filter(l, e, n) :
                L.grep(e, function (e) {
                    return -1 < x.call(l, e) !== n;
                });
        }

        function re(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e;
        }

        function de(e) {
            return e;
        }

        function ie(e) {
            throw e;
        }

        function pe(a, o, l, e) {
            var t;
            try {
                a && w((t = a.promise)) ?
                    t.call(a).done(o).fail(l) :
                    a && w((t = a.then)) ?
                    t.call(a, o, l) :
                    o.apply(void 0, [a].slice(e));
            } catch (t) {
                l.apply(void 0, [t]);
            }
        }

        function he() {
            D.removeEventListener("DOMContentLoaded", he),
                B.removeEventListener("load", he),
                L.ready();
        }

        function ge(t, n) {
            return n.toUpperCase();
        }

        function me(t) {
            return t.replace(R, "ms-").replace(U, ge);
        }

        function ye() {
            this.expando = L.expando + ye.uid++;
        }

        function be(e, t, n) {
            var o, l;
            if (void 0 === n && 1 === e.nodeType)
                if (
                    ((o = "data-" + t.replace(Q, "-$&").toLowerCase()),
                        "string" == typeof (n = e.getAttribute(o)))
                ) {
                    try {
                        n =
                            "true" === (l = n) ||
                            ("false" !== l &&
                                ("null" === l ?
                                    null :
                                    l === +l + "" ?
                                    +l :
                                    Y.test(l) ?
                                    JSON.parse(l) :
                                    l));
                    } catch (e) {}
                    V.set(e, t, n);
                } else n = void 0;
            return n;
        }

        function ve(e, t) {
            for (var n, o, l, r, d, u, f = [], y = 0, v = e.length; y < v; y++)
                (o = e[y]).style &&
                ((n = o.style.display),
                    t ?
                    ("none" === n &&
                        ((f[y] = F.get(o, "display") || null),
                            f[y] || (o.style.display = "")),
                        "" === o.style.display &&
                        s(o) &&
                        (f[y] =
                            ((u = r = l = void 0),
                                (r = o.ownerDocument),
                                (d = o.nodeName),
                                (u = ze[d]) ||
                                ((l = r.body.appendChild(r.createElement(d))),
                                    (u = L.css(l, "display")),
                                    l.parentNode.removeChild(l),
                                    "none" === u && (u = "block"),
                                    (ze[d] = u))))) :
                    "none" !== n && ((f[y] = "none"), F.set(o, "display", n)));
            for (y = 0; y < v; y++) null != f[y] && (e[y].style.display = f[y]);
            return e;
        }

        function xe(e, t) {
            var n =
                void 0 === e.getElementsByTagName ?
                void 0 === e.querySelectorAll ? [] :
                e.querySelectorAll(t || "*") :
                e.getElementsByTagName(t || "*");
            return void 0 === t || (t && te(e, t)) ? L.merge([e], n) : n;
        }

        function Ce(e, t) {
            for (var n = 0, o = e.length; n < o; n++)
                F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"));
        }

        function Te(n, e, t, a, o) {
            for (
                var l,
                    i,
                    s,
                    c,
                    u = e.createDocumentFragment(),
                    f = [],
                    g = 0,
                    y = n.length; g < y; g++
            )
                if ((l = n[g]) || 0 === l)
                    if ("object" === G(l)) L.merge(f, l.nodeType ? [l] : l);
                    else if (Ue.test(l)) {
                for (
                    i = i || u.appendChild(e.createElement("div")),
                    s = (ce.exec(l) || ["", ""])[1].toLowerCase(),
                    s = Fe[s] || Fe._default,
                    i.innerHTML = s[1] + L.htmlPrefilter(l) + s[2],
                    s = s[0]; s--;

                )
                    i = i.lastChild;
                L.merge(f, i.childNodes), ((i = u.firstChild).textContent = "");
            } else f.push(e.createTextNode(l));
            for (u.textContent = "", g = 0;
                (l = f[g++]);)
                if (a && -1 < L.inArray(l, a)) o && o.push(l);
                else if (
                ((c = ae(l)), (i = xe(u.appendChild(l), "script")), c && Ce(i), t)
            )
                for (s = 0;
                    (l = i[s++]);) ue.test(l.type || "") && t.push(l);
            return u;
        }

        function Ae() {
            return !0;
        }

        function Ee() {
            return !1;
        }

        function ke(e, t) {
            e: {
                try {
                    var n = D.activeElement;
                    break e;
                } catch (e) {}
                n = void 0;
            }
            return (e === n) == ("focus" === t);
        }

        function Ne(e, t, n, o, r, s) {
            var i, u;
            if ("object" == typeof t) {
                for (u in ("string" != typeof n && ((o = o || n), (n = void 0)), t))
                    Ne(e, u, n, o, t[u], s);
                return e;
            }
            if (
                (null == o && null == r ?
                    ((r = n), (o = n = void 0)) :
                    null == r &&
                    ("string" == typeof n ?
                        ((r = o), (o = void 0)) :
                        ((r = o), (o = n), (n = void 0))),
                    !1 === r)
            )
                r = Ee;
            else if (!r) return e;
            return (
                1 === s &&
                ((i = r),
                    ((r = function (e) {
                        return L().off(e), i.apply(this, arguments);
                    }).guid = i.guid || (i.guid = L.guid++))),
                e.each(function () {
                    L.event.add(this, t, r, o, n);
                })
            );
        }

        function Se(e, r, n) {
            n
                ?
                (F.set(e, r, !1),
                    L.event.add(e, r, {
                        namespace: !1,
                        handler: function (e) {
                            var t,
                                a,
                                d = F.get(this, r);
                            if (!(1 & e.isTrigger && this[r]))
                                d.length &&
                                (F.set(this, r, {
                                        value: L.event.trigger(
                                            L.extend(d[0], L.Event.prototype),
                                            d.slice(1),
                                            this
                                        ),
                                    }),
                                    e.stopImmediatePropagation());
                            else if (d.length)
                                (L.event.special[r] || {}).delegateType &&
                                e.stopPropagation();
                            else if (
                                ((d = b.call(arguments)),
                                    F.set(this, r, d),
                                    (t = n(this, r)),
                                    this[r](),
                                    d !== (a = F.get(this, r)) || t ?
                                    F.set(this, r, !1) :
                                    (a = {}),
                                    d !== a)
                            )
                                return (
                                    e.stopImmediatePropagation(),
                                    e.preventDefault(),
                                    a && a.value
                                );
                        },
                    })) :
                void 0 === F.get(e, r) && L.event.add(e, r, Ae);
        }

        function i(t, n) {
            return (
                (te(t, "table") &&
                    te(11 === n.nodeType ? n.firstChild : n, "tr") &&
                    L(t).children("tbody")[0]) ||
                t
            );
        }

        function we(e) {
            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }

        function e(e) {
            return (
                "true/" === (e.type || "").slice(0, 5) ?
                (e.type = e.type.slice(5)) :
                e.removeAttribute("type"),
                e
            );
        }

        function De(e, n) {
            var a, l;
            if (1 === n.nodeType) {
                if (F.hasData(e) && (l = F.get(e).events))
                    for (a in (F.remove(n, "handle events"), l))
                        for (var r = 0, d = l[a].length; r < d; r++)
                            L.event.add(n, a, l[a][r]);
                V.hasData(e) &&
                    ((e = V.access(e)), (e = L.extend({}, e)), V.set(n, e));
            }
        }

        function a(o, l, d, i) {
            var t, s, p;
            l = He(l);
            var u = 0,
                y = o.length,
                v = l[0],
                f = w(v);
            if (f || (1 < y && "string" == typeof v && !N.checkClone && st.test(v)))
                return o.each(function (n) {
                    var e = o.eq(n);
                    f && (l[0] = v.call(this, n, e.html())), a(e, l, d, i);
                });
            if (
                y &&
                ((s = (t = Te(l, o[0].ownerDocument, !1, o, i)).firstChild),
                    1 === t.childNodes.length && (t = s),
                    s || i)
            ) {
                for (p = (s = L.map(xe(t, "script"), we)).length; u < y; u++) {
                    var m = t;
                    u != y - 1 &&
                        ((m = L.clone(m, !0, !0)), p && L.merge(s, xe(m, "script"))),
                        d.call(o[u], m, u);
                }
                if (p)
                    for (
                        t = s[s.length - 1].ownerDocument, L.map(s, e), u = 0; u < p; u++
                    )
                        (m = s[u]),
                        ue.test(m.type || "") &&
                        !F.access(m, "globalEval") &&
                        L.contains(t, m) &&
                        (m.src && "module" !== (m.type || "").toLowerCase() ?
                            L._evalUrl &&
                            !m.noModule &&
                            L._evalUrl(
                                m.src, {
                                    nonce: m.nonce || m.getAttribute("nonce")
                                },
                                t
                            ) :
                            X(m.textContent.replace(gt, ""), m, t));
            }
            return o;
        }

        function o(t, n, o) {
            for (var a = n ? L.filter(n, t) : t, l = 0; null != (n = a[l]); l++)
                o || 1 !== n.nodeType || L.cleanData(xe(n)),
                n.parentNode &&
                (o && ae(n) && Ce(xe(n, "script")), n.parentNode.removeChild(n));
            return t;
        }

        function Le(e, t, n) {
            var a,
                o,
                l = e.style;
            return (
                (n = n || ft(e)) &&
                ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                    ae(e) ||
                    (o = L.style(e, t)),
                    !N.pixelBoxStyles() &&
                    bt.test(o) &&
                    vt.test(t) &&
                    ((a = l.width),
                        (e = l.minWidth),
                        (t = l.maxWidth),
                        (l.minWidth = l.maxWidth = l.width = o),
                        (o = n.width),
                        (l.width = a),
                        (l.minWidth = e),
                        (l.maxWidth = t))),
                void 0 === o ? o : o + ""
            );
        }

        function t(t, n) {
            return {
                get: function () {
                    return t() ?
                        void delete this.get :
                        (this.get = n).apply(this, arguments);
                },
            };
        }

        function je(e) {
            var t;
            if (!(t = L.cssProps[e] || Ct[e])) {
                if (!(e in yt)) {
                    e: {
                        for (
                            var o = (t = e)[0].toUpperCase() + t.slice(1), r = xt.length; r--;

                        )
                            if ((t = xt[r] + o) in yt) break e;
                        t = void 0;
                    }
                    e = Ct[e] = t || e;
                }
                t = e;
            }
            return t;
        }

        function r(e, n, o) {
            return (e = Ie.exec(n)) ?
                Math.max(0, e[2] - (o || 0)) + (e[3] || "px") :
                n;
        }

        function qe(e, t, n, a, o, l) {
            var r = "width" === t ? 1 : 0,
                i = 0,
                s = 0;
            if (n === (a ? "border" : "content")) return 0;
            for (; 4 > r; r += 2)
                "margin" === n && (s += L.css(e, n + Z[r], !0, o)),
                a ?
                ("content" === n && (s -= L.css(e, "padding" + Z[r], !0, o)),
                    "margin" !== n &&
                    (s -= L.css(e, "border" + Z[r] + "Width", !0, o))) :
                ((s += L.css(e, "padding" + Z[r], !0, o)),
                    "padding" === n ?
                    (i += L.css(e, "border" + Z[r] + "Width", !0, o)) :
                    (s += L.css(e, "border" + Z[r] + "Width", !0, o)));
            return (
                !a &&
                0 <= l &&
                (s +=
                    Math.max(
                        0,
                        Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                            l -
                            s -
                            i -
                            0.5
                        )
                    ) || 0),
                s
            );
        }

        function l(o, l, e) {
            var t = ft(o),
                n =
                (!N.boxSizingReliable() || e) &&
                "border-box" === L.css(o, "boxSizing", !1, t),
                r = n,
                d = Le(o, l, t),
                i = "offset" + l[0].toUpperCase() + l.slice(1);
            if (bt.test(d)) {
                if (!e) return d;
                d = "auto";
            }
            return (
                ((!N.boxSizingReliable() && n) ||
                    (!N.reliableTrDimensions() && te(o, "tr")) ||
                    "auto" === d ||
                    (!parseFloat(d) && "inline" === L.css(o, "display", !1, t))) &&
                o.getClientRects().length &&
                ((n = "border-box" === L.css(o, "boxSizing", !1, t)),
                    (r = i in o) && (d = o[i])),
                (d = parseFloat(d) || 0) +
                qe(o, l, e || (n ? "border" : "content"), r, t, d) +
                "px"
            );
        }

        function d(e) {
            return (e.match(M) || []).join(" ");
        }

        function c(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
        }

        function Oe(e) {
            return Array.isArray(e) ?
                e :
                ("string" == typeof e && e.match(M)) || [];
        }

        function f(e) {
            return null != e && e === e.window;
        }

        function m(e, t, o) {
            for (var a = [];
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (void 0 !== o && L(e).is(o)) break;
                    a.push(e);
                }
            return a;
        }

        function n(e, n) {
            for (var o = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== n && o.push(e);
            return o;
        }

        function p(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        }

        function s(e, t) {
            return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display && ae(e) && "none" === L.css(e, "display"))
            );
        }

        function u(e, t, n) {
            var o,
                l = {};
            for (o in t)(l[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((n = n.call(e)), t)) e.style[o] = l[o];
            return n;
        }

        function h() {
            var t;
            dt &&
                ((mt.style.cssText =
                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (dt.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ne.appendChild(mt).appendChild(dt),
                    (t = B.getComputedStyle(dt)),
                    (We = "1%" !== t.top),
                    (rt = 12 === Math.round(parseFloat(t.marginLeft))),
                    (dt.style.right = "60%"),
                    (ot = 36 === Math.round(parseFloat(t.right))),
                    ($e = 36 === Math.round(parseFloat(t.width))),
                    (dt.style.position = "absolute"),
                    (Xe = 12 === Math.round(parseFloat(dt.offsetWidth / 3))),
                    ne.removeChild(mt),
                    (dt = null));
        }

        function Pe(e) {
            e.stopPropagation();
        }
        var g = [],
            y = Object.getPrototypeOf,
            b = g.slice,
            He = g.flat ?
            function (e) {
                return g.flat.call(e);
            } :
            function (e) {
                return g.concat.apply([], e);
            },
            v = g.push,
            x = g.indexOf,
            C = {},
            T = C.toString,
            A = C.hasOwnProperty,
            E = A.toString,
            k = E.call(Object),
            N = {},
            w = function (e) {
                return (
                    "function" == typeof e &&
                    "number" != typeof e.nodeType &&
                    "function" != typeof e.item
                );
            },
            D = B.document,
            S = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            },
            L = function (t, n) {
                return new L.fn.init(t, n);
            };
        (L.fn = L.prototype = {
            jquery: "3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
            constructor: L,
            length: 0,
            toArray: function () {
                return b.call(this);
            },
            get: function (e) {
                return null == e ?
                    b.call(this) :
                    0 > e ?
                    this[e + this.length] :
                    this[e];
            },
            pushStack: function (e) {
                return ((e = L.merge(this.constructor(), e)).prevObject = this), e;
            },
            each: function (e) {
                return L.each(this, e);
            },
            map: function (e) {
                return this.pushStack(
                    L.map(this, function (t, n) {
                        return e.call(t, n, t);
                    })
                );
            },
            slice: function () {
                return this.pushStack(b.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    L.grep(this, function (t, n) {
                        return (n + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    L.grep(this, function (t, n) {
                        return n % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length;
                return (
                    (e = +e + (0 > e ? t : 0)),
                    this.pushStack(0 <= e && e < t ? [this[e]] : [])
                );
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: v,
            sort: g.sort,
            splice: g.splice,
        }),
        (L.extend = L.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    a,
                    o = arguments[0] || {},
                    l = 1,
                    h = arguments.length,
                    u = !1;
                for (
                    "boolean" == typeof o && ((u = o), (o = arguments[l] || {}), l++),
                    "object" == typeof o || w(o) || (o = {}),
                    l === h && ((o = this), l--); l < h; l++
                )
                    if (null != (e = arguments[l]))
                        for (t in e) {
                            var f = e[t];
                            "__proto__" !== t &&
                                o !== f &&
                                (u && f && (L.isPlainObject(f) || (n = Array.isArray(f))) ?
                                    ((a = o[t]),
                                        (a =
                                            n && !Array.isArray(a) ? [] :
                                            n || L.isPlainObject(a) ?
                                            a : {}),
                                        (n = !1),
                                        (o[t] = L.extend(u, a, f))) :
                                    void 0 !== f && (o[t] = f));
                        }
                return o;
            }),
        L.extend({
                expando: "jQuery" +
                    (
                        "3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector" +
                        Math.random()
                    ).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                    return (
                        e &&
                        "[object Object]" === T.call(e) &&
                        (!(e = y(e)) ||
                            ("function" ==
                                typeof (e = A.call(e, "constructor") && e.constructor) &&
                                E.call(e) === k))
                    );
                },
                isEmptyObject: function (t) {
                    for (var n in t) return !1;
                    return !0;
                },
                globalEval: function (e, t, n) {
                    X(e, {
                        nonce: t && t.nonce
                    }, n);
                },
                each: function (e, t) {
                    var n,
                        o = 0;
                    if (ee(e))
                        for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                    else
                        for (o in e)
                            if (!1 === t.call(e[o], o, e[o])) break;
                    return e;
                },
                makeArray: function (t, n) {
                    return (
                        (n = n || []),
                        null != t &&
                        (ee(Object(t)) ?
                            L.merge(n, "string" == typeof t ? [t] : t) :
                            v.call(n, t)),
                        n
                    );
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : x.call(t, e, n);
                },
                merge: function (n, a) {
                    for (var o = +a.length, e = 0, l = n.length; e < o; e++)
                        n[l++] = a[e];
                    return (n.length = l), n;
                },
                grep: function (e, t, n) {
                    var l = [],
                        r = 0,
                        d = e.length;
                    for (n = !n; r < d; r++) !t(e[r], r) !== n && l.push(e[r]);
                    return l;
                },
                map: function (n, a, o) {
                    var e,
                        l,
                        r = 0,
                        d = [];
                    if (ee(n))
                        for (e = n.length; r < e; r++)
                            null != (l = a(n[r], r, o)) && d.push(l);
                    else
                        for (r in n) null != (l = a(n[r], r, o)) && d.push(l);
                    return He(d);
                },
                guid: 1,
                support: N,
            }),
            "function" == typeof Symbol &&
            (L.fn[Symbol.iterator] = g[Symbol.iterator]),
            L.each(
                [
                    "Boolean",
                    "Number",
                    "String",
                    "Function",
                    "Array",
                    "Date",
                    "RegExp",
                    "Object",
                    "Error",
                    "Symbol",
                ],
                function (t, n) {
                    C["[object " + n + "]"] = n.toLowerCase();
                }
            );
        var j = (function (y) {
            function A(t, a, o, d) {
                var r,
                    i,
                    s,
                    u,
                    g = a && a.ownerDocument,
                    b = a ? a.nodeType : 9;
                if (
                    ((o = o || []),
                        "string" != typeof t || !t || (1 !== b && 9 !== b && 11 !== b))
                )
                    return o;
                if (!d && (H(a), (a = a || B), M)) {
                    if (11 !== b && (u = Oe.exec(t)))
                        if (!(r = u[1])) {
                            if (u[2]) return ke.apply(o, a.getElementsByTagName(t)), o;
                            if (
                                (r = u[3]) &&
                                f.getElementsByClassName &&
                                a.getElementsByClassName
                            )
                                return ke.apply(o, a.getElementsByClassName(r)), o;
                        } else if (9 === b) {
                        if (!(i = a.getElementById(r))) return o;
                        if (i.id === r) return o.push(i), o;
                    } else if (
                        g &&
                        (i = g.getElementById(r)) &&
                        z(a, i) &&
                        i.id === r
                    )
                        return o.push(i), o;
                    if (
                        !(
                            !f.qsa ||
                            he[t + " "] ||
                            (W && W.test(t)) ||
                            (1 === b && "object" === a.nodeName.toLowerCase())
                        )
                    ) {
                        if (((r = t), (g = a), 1 === b && (Le.test(t) || De.test(t)))) {
                            for (
                                ((g = (Pe.test(t) && c(a.parentNode)) || a) === a &&
                                    f.scope) ||
                                ((s = a.getAttribute("id")) ?
                                    (s = s.replace(Te, n)) :
                                    a.setAttribute("id", (s = X))),
                                b = (r = D(t)).length; b--;

                            )
                                r[b] = (s ? "#" + s : ":scope") + " " + h(r[b]);
                            r = r.join(",");
                        }
                        try {
                            return ke.apply(o, g.querySelectorAll(r)), o;
                        } catch (n) {
                            he(t, !0);
                        } finally {
                            s === X && a.removeAttribute("id");
                        }
                    }
                }
                return j(t.replace(we, "$1"), a, o, d);
            }

            function t() {
                var t = [];
                return function a(o, e) {
                    return (
                        t.push(o + " ") > x.cacheLength && delete a[t.shift()],
                        (a[o + " "] = e)
                    );
                };
            }

            function v(e) {
                return (e[X] = !0), e;
            }

            function l(t) {
                var n = B.createElement("fieldset");
                try {
                    return !!t(n);
                } catch (e) {
                    return !1;
                } finally {
                    n.parentNode && n.parentNode.removeChild(n);
                }
            }

            function a(n, a) {
                for (var o = n.split("|"), e = o.length; e--;)
                    x.attrHandle[o[e]] = a;
            }

            function k(e, t) {
                var n = t && e,
                    o =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (o) return o;
                if (n)
                    for (;
                        (n = n.nextSibling);)
                        if (n === t) return -1;
                return e ? 1 : -1;
            }

            function r(t) {
                return function (n) {
                    return "form" in n ?
                        n.parentNode && !1 === n.disabled ?
                        "label" in n ?
                        "label" in n.parentNode ?
                        n.parentNode.disabled === t :
                        n.disabled === t :
                        n.isDisabled === t || (n.isDisabled !== !t && Ee(n) === t) :
                        n.disabled === t :
                        "label" in n && n.disabled === t;
                };
            }

            function d(o) {
                return v(function (l) {
                    return (
                        (l = +l),
                        v(function (e, t) {
                            for (var n, d = o([], e.length, l), i = d.length; i--;)
                                e[(n = d[i])] && (e[n] = !(t[n] = e[n]));
                        })
                    );
                });
            }

            function c(e) {
                return e && void 0 !== e.getElementsByTagName && e;
            }

            function s() {}

            function h(t) {
                for (var a = 0, o = t.length, l = ""; a < o; a++) l += t[a].value;
                return l;
            }

            function e(s, t, a) {
                var u = t.dir,
                    c = t.next,
                    l = c || u,
                    d = a && "parentNode" === l,
                    r = ae++;
                return t.first ?
                    function (t, o, a) {
                        for (;
                            (t = t[u]);)
                            if (1 === t.nodeType || d) return s(t, o, a);
                        return !1;
                    } :
                    function (e, a, n) {
                        var i,
                            h,
                            g = [U, r];
                        if (n) {
                            for (;
                                (e = e[u]);)
                                if ((1 === e.nodeType || d) && s(e, a, n)) return !0;
                        } else
                            for (;
                                (e = e[u]);)
                                if (1 === e.nodeType || d)
                                    if (
                                        ((i =
                                                (h = e[X] || (e[X] = {}))[e.uniqueID] ||
                                                (h[e.uniqueID] = {})),
                                            c && c === e.nodeName.toLowerCase())
                                    )
                                        e = e[u] || e;
                                    else {
                                        if ((h = i[l]) && h[0] === U && h[1] === r)
                                            return (g[2] = h[2]);
                                        if (((i[l] = g)[2] = s(e, a, n))) return !0;
                                    }
                        return !1;
                    };
            }

            function u(o) {
                return 1 < o.length ?
                    function (l, e, t) {
                        for (var n = o.length; n--;)
                            if (!o[n](l, e, t)) return !1;
                        return !0;
                    } :
                    o[0];
            }

            function S(r, e, t, n, a) {
                for (var o, i = [], s = 0, c = r.length; s < c; s++)
                    (o = r[s]) &&
                    ((t && !t(o, n, a)) || (i.push(o), null != e && e.push(s)));
                return i;
            }

            function p(e, t) {
                return (
                    (e = "0x" + e.slice(1) - 65536),
                    t ||
                    (0 > e ?
                        String.fromCharCode(65536 + e) :
                        String.fromCharCode(55296 | (e >> 10), 56320 | (1023 & e)))
                );
            }

            function g() {
                H();
            }

            function m(e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (e[n] === t) return n;
                return -1;
            }

            function n(t, n) {
                return n ?
                    "\0" === t ?
                    "\uFFFD" :
                    t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " " :
                    "\\" + t;
            }
            var i,
                f,
                x,
                T,
                E,
                D,
                L,
                j,
                q,
                O,
                P,
                H,
                B,
                I,
                M,
                W,
                _,
                R,
                z,
                X = "sizzle" + +new Date(),
                K = y.document,
                U = 0,
                ae = 0,
                se = t(),
                fe = t(),
                ce = t(),
                he = t(),
                ue = function (t, n) {
                    return t === n && (P = !0), 0;
                },
                be = {}.hasOwnProperty,
                me = [],
                xe = me.pop,
                ve = me.push,
                ke = me.push,
                Ne = me.slice,
                we = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                De = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                Le = /[\x20\t\r\n\f]|>/,
                je = {
                    ID: /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)/,
                    CLASS: /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)/,
                    TAG: /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+|[*])/,
                    ATTR: /^\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\]/,
                    PSEUDO: /^:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                    CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                    bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                    needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
                },
                qe = /^[^{]+\{\s*\[native \w/,
                Oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Pe = /[+~]/,
                Ce = /\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g,
                Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Ee = e(
                    function (e) {
                        return (
                            !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        );
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    }
                );
            try {
                ke.apply((me = Ne.call(K.childNodes)), K.childNodes),
                    me[K.childNodes.length].nodeType;
            } catch (e) {
                ke = {
                    apply: me.length ?
                        function (t, n) {
                            ve.apply(t, Ne.call(n));
                        } : function (e, t) {
                            for (var n = e.length, o = 0;
                                (e[n++] = t[o++]););
                            e.length = n - 1;
                        },
                };
            }
            for (i in ((f = A.support = {}),
                    (E = A.isXML =
                        function (t) {
                            var n = t && (t.ownerDocument || t).documentElement;
                            return !/HTML$/i.test(
                                (t && t.namespaceURI) || (n && n.nodeName) || "HTML"
                            );
                        }),
                    (H = A.setDocument =
                        function (t) {
                            var n;
                            return (
                                (t = t ? t.ownerDocument || t : K) != B &&
                                9 === t.nodeType &&
                                t.documentElement &&
                                ((I = (B = t).documentElement),
                                    (M = !E(B)),
                                    K != B &&
                                    (n = B.defaultView) &&
                                    n.top !== n &&
                                    (n.addEventListener ?
                                        n.addEventListener("unload", g, !1) :
                                        n.attachEvent && n.attachEvent("onunload", g)),
                                    (f.scope = l(function (e) {
                                        return (
                                            I.appendChild(e).appendChild(B.createElement("div")),
                                            void 0 !== e.querySelectorAll &&
                                            !e.querySelectorAll(":scope fieldset div").length
                                        );
                                    })),
                                    (f.attributes = l(function (e) {
                                        return (e.className = "i"), !e.getAttribute("className");
                                    })),
                                    (f.getElementsByTagName = l(function (e) {
                                        return (
                                            e.appendChild(B.createComment("")),
                                            !e.getElementsByTagName("*").length
                                        );
                                    })),
                                    (f.getElementsByClassName = qe.test(B.getElementsByClassName)),
                                    (f.getById = l(function (e) {
                                        return (
                                            (I.appendChild(e).id = X),
                                            !B.getElementsByName || !B.getElementsByName(X).length
                                        );
                                    })),
                                    f.getById ?
                                    ((x.filter.ID = function (e) {
                                            var a = e.replace(Ce, p);
                                            return function (e) {
                                                return e.getAttribute("id") === a;
                                            };
                                        }),
                                        (x.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && M)
                                                return (e = t.getElementById(e)) ? [e] : [];
                                        })) :
                                    ((x.filter.ID = function (e) {
                                            var a = e.replace(Ce, p);
                                            return function (e) {
                                                return (
                                                    (e =
                                                        void 0 !== e.getAttributeNode &&
                                                        e.getAttributeNode("id")) && e.value === a
                                                );
                                            };
                                        }),
                                        (x.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && M) {
                                                var n,
                                                    l = t.getElementById(e);
                                                if (l) {
                                                    if ((n = l.getAttributeNode("id")) && n.value === e)
                                                        return [l];
                                                    for (
                                                        var r = t.getElementsByName(e), i = 0;
                                                        (l = r[i++]);

                                                    )
                                                        if ((n = l.getAttributeNode("id")) && n.value === e)
                                                            return [l];
                                                }
                                                return [];
                                            }
                                        })),
                                    (x.find.TAG = f.getElementsByTagName ?
                                        function (t, n) {
                                            return void 0 === n.getElementsByTagName ?
                                                f.qsa ?
                                                n.querySelectorAll(t) :
                                                void 0 :
                                                n.getElementsByTagName(t);
                                        } :
                                        function (e, t) {
                                            var n,
                                                l = [],
                                                r = 0,
                                                d = t.getElementsByTagName(e);
                                            if ("*" !== e) return d;
                                            for (;
                                                (n = d[r++]);) 1 === n.nodeType && l.push(n);
                                            return l;
                                        }),
                                    (x.find.CLASS =
                                        f.getElementsByClassName &&
                                        function (t, n) {
                                            if (void 0 !== n.getElementsByClassName && M)
                                                return n.getElementsByClassName(t);
                                        }),
                                    (_ = []),
                                    (W = []),
                                    (f.qsa = qe.test(B.querySelectorAll)) &&
                                    (l(function (t) {
                                            var n;
                                            (I.appendChild(t).innerHTML =
                                                "<a id='" +
                                                X +
                                                "'></a><select id='" +
                                                X +
                                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                            t.querySelectorAll("[msallowcapture^='']").length &&
                                                W.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                                t.querySelectorAll("[selected]").length ||
                                                W.push(
                                                    "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
                                                ),
                                                t.querySelectorAll("[id~=" + X + "-]").length ||
                                                W.push("~="),
                                                (n = B.createElement("input")).setAttribute("name", ""),
                                                t.appendChild(n),
                                                t.querySelectorAll("[name='']").length ||
                                                W.push(
                                                    "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                                                ),
                                                t.querySelectorAll(":checked").length ||
                                                W.push(":checked"),
                                                t.querySelectorAll("a#" + X + "+*").length ||
                                                W.push(".#.+[+~]"),
                                                t.querySelectorAll("\\\f"),
                                                W.push("[\\r\\n\\f]");
                                        }),
                                        l(function (t) {
                                            t.innerHTML =
                                                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                            var n = B.createElement("input");
                                            n.setAttribute("type", "hidden"),
                                                t.appendChild(n).setAttribute("name", "D"),
                                                t.querySelectorAll("[name=d]").length &&
                                                W.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                                                2 !== t.querySelectorAll(":enabled").length &&
                                                W.push(":enabled", ":disabled"),
                                                (I.appendChild(t).disabled = !0),
                                                2 !== t.querySelectorAll(":disabled").length &&
                                                W.push(":enabled", ":disabled"),
                                                t.querySelectorAll("*,:x"),
                                                W.push(",.*:");
                                        })),
                                    (f.matchesSelector = qe.test(
                                        (R =
                                            I.matches ||
                                            I.webkitMatchesSelector ||
                                            I.mozMatchesSelector ||
                                            I.oMatchesSelector ||
                                            I.msMatchesSelector)
                                    )) &&
                                    l(function (e) {
                                        (f.disconnectedMatch = R.call(e, "*")),
                                        R.call(e, "[s!='']:x"),
                                            _.push(
                                                "!=",
                                                ":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
                                            );
                                    }),
                                    (W = W.length && new RegExp(W.join("|"))),
                                    (_ = _.length && new RegExp(_.join("|"))),
                                    (n = qe.test(I.compareDocumentPosition)),
                                    (z =
                                        n || qe.test(I.contains) ?
                                        function (t, n) {
                                            var a = 9 === t.nodeType ? t.documentElement : t;
                                            return (
                                                t === (n = n && n.parentNode) ||
                                                (n &&
                                                    1 === n.nodeType &&
                                                    (a.contains ?
                                                        a.contains(n) :
                                                        t.compareDocumentPosition &&
                                                        16 & t.compareDocumentPosition(n)))
                                            );
                                        } :
                                        function (t, n) {
                                            if (n)
                                                for (;
                                                    (n = n.parentNode);)
                                                    if (n === t) return !0;
                                            return !1;
                                        }),
                                    (ue = n ?
                                        function (e, t) {
                                            if (e === t) return (P = !0), 0;
                                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                n ||
                                                (1 &
                                                    (n =
                                                        (e.ownerDocument || e) == (t.ownerDocument || t) ?
                                                        e.compareDocumentPosition(t) :
                                                        1) ||
                                                    (!f.sortDetached && t.compareDocumentPosition(e) === n) ?
                                                    e == B || (e.ownerDocument == K && z(K, e)) ?
                                                    -1 :
                                                    t == B || (t.ownerDocument == K && z(K, t)) ?
                                                    1 :
                                                    O ?
                                                    m(O, e) - m(O, t) :
                                                    0 :
                                                    4 & n ?
                                                    -1 :
                                                    1)
                                            );
                                        } :
                                        function (a, t) {
                                            if (a === t) return (P = !0), 0;
                                            var n = 0,
                                                l = a.parentNode,
                                                i = t.parentNode,
                                                s = [a],
                                                d = [t];
                                            if (!l || !i)
                                                return a == B ?
                                                    -1 :
                                                    t == B ?
                                                    1 :
                                                    l ?
                                                    -1 :
                                                    i ?
                                                    1 :
                                                    O ?
                                                    m(O, a) - m(O, t) :
                                                    0;
                                            if (l === i) return k(a, t);
                                            for (l = a;
                                                (l = l.parentNode);) s.unshift(l);
                                            for (l = t;
                                                (l = l.parentNode);) d.unshift(l);
                                            for (; s[n] === d[n];) n++;
                                            return n ?
                                                k(s[n], d[n]) :
                                                s[n] == K ?
                                                -1 :
                                                d[n] == K ?
                                                1 :
                                                0;
                                        })),
                                B
                            );
                        }),
                    (A.matches = function (t, n) {
                        return A(t, null, null, n);
                    }),
                    (A.matchesSelector = function (n, a) {
                        if (
                            (H(n),
                                !(
                                    !f.matchesSelector ||
                                    !M ||
                                    he[a + " "] ||
                                    (_ && _.test(a)) ||
                                    (W && W.test(a))
                                ))
                        )
                            try {
                                var e = R.call(n, a);
                                if (
                                    e ||
                                    f.disconnectedMatch ||
                                    (n.document && 11 !== n.document.nodeType)
                                )
                                    return e;
                            } catch (t) {
                                he(a, !0);
                            }
                        return 0 < A(a, B, null, [n]).length;
                    }),
                    (A.contains = function (t, n) {
                        return (t.ownerDocument || t) != B && H(t), z(t, n);
                    }),
                    (A.attr = function (e, t) {
                        (e.ownerDocument || e) != B && H(e);
                        var n = x.attrHandle[t.toLowerCase()];
                        return void 0 ===
                            (n =
                                n && be.call(x.attrHandle, t.toLowerCase()) ?
                                n(e, t, !M) :
                                void 0) ?
                            f.attributes || !M ?
                            e.getAttribute(t) :
                            (n = e.getAttributeNode(t)) && n.specified ?
                            n.value :
                            null :
                            n;
                    }),
                    (A.escape = function (e) {
                        return (e + "").replace(Te, n);
                    }),
                    (A.error = function (e) {
                        throw Error("Syntax error, unrecognized expression: " + e);
                    }),
                    (A.uniqueSort = function (t) {
                        var a,
                            o = [],
                            l = 0,
                            r = 0;
                        if (
                            ((P = !f.detectDuplicates),
                                (O = !f.sortStable && t.slice(0)),
                                t.sort(ue),
                                P)
                        ) {
                            for (;
                                (a = t[r++]);) a === t[r] && (l = o.push(r));
                            for (; l--;) t.splice(o[l], 1);
                        }
                        return (O = null), t;
                    }),
                    (T = A.getText =
                        function (e) {
                            var t,
                                n = "",
                                a = 0;
                            if (!(t = e.nodeType))
                                for (;
                                    (t = e[a++]);) n += T(t);
                            else if (1 === t || 9 === t || 11 === t) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                            } else if (3 === t || 4 === t) return e.nodeValue;
                            return n;
                        }),
                    ((x = A.selectors = {
                        cacheLength: 50,
                        createPseudo: v,
                        match: je,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            },
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return (
                                    (e[1] = e[1].replace(Ce, p)),
                                    (e[3] = (e[3] || e[4] || e[5] || "").replace(Ce, p)),
                                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                                );
                            },
                            CHILD: function (e) {
                                return (
                                    (e[1] = e[1].toLowerCase()),
                                    "nth" === e[1].slice(0, 3) ?
                                    (e[3] || A.error(e[0]),
                                        (e[4] = +(e[4] ?
                                            e[5] + (e[6] || 1) :
                                            2 * ("even" === e[3] || "odd" === e[3]))),
                                        (e[5] = +(e[7] + e[8] || "odd" === e[3]))) :
                                    e[3] && A.error(e[0]),
                                    e
                                );
                            },
                            PSEUDO: function (t) {
                                var n,
                                    a = !t[6] && t[2];
                                return je.CHILD.test(t[0]) ?
                                    null :
                                    (t[3] ?
                                        (t[2] = t[4] || t[5] || "") :
                                        a &&
                                        /:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/.test(
                                            a
                                        ) &&
                                        (n = D(a, !0)) &&
                                        (n = a.indexOf(")", a.length - n) - a.length) &&
                                        ((t[0] = t[0].slice(0, n)), (t[2] = a.slice(0, n))),
                                        t.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (e) {
                                var a = e.replace(Ce, p).toLowerCase();
                                return "*" === e ?
                                    function () {
                                        return !0;
                                    } :
                                    function (e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === a;
                                    };
                            },
                            CLASS: function (e) {
                                var n = se[e + " "];
                                return (
                                    n ||
                                    ((n = new RegExp(
                                            "(^|[\\x20\\t\\r\\n\\f])" + e + "([\\x20\\t\\r\\n\\f]|$)"
                                        )),
                                        se(e, function (e) {
                                            return n.test(
                                                ("string" == typeof e.className && e.className) ||
                                                (void 0 !== e.getAttribute &&
                                                    e.getAttribute("class")) ||
                                                ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (n, a, o) {
                                return function (e) {
                                    return null == (e = A.attr(e, n)) ?
                                        "!=" === a :
                                        !a ||
                                        ((e += ""),
                                            "=" === a ?
                                            e === o :
                                            "!=" === a ?
                                            e !== o :
                                            "^=" === a ?
                                            o && 0 === e.indexOf(o) :
                                            "*=" === a ?
                                            o && -1 < e.indexOf(o) :
                                            "$=" === a ?
                                            o && e.slice(-o.length) === o :
                                            "~=" === a ?
                                            -1 <
                                            (
                                                " " +
                                                e.replace(/[\x20\t\r\n\f]+/g, " ") +
                                                " "
                                            ).indexOf(o) :
                                            "|=" == a &&
                                            (e === o || e.slice(0, o.length + 1) === o + "-"));
                                };
                            },
                            CHILD: function (e, t, n, c, p) {
                                var o = "nth" !== e.slice(0, 3),
                                    l = "last" !== e.slice(-4),
                                    r = "of-type" === t;
                                return 1 === c && 0 === p ?
                                    function (e) {
                                        return !!e.parentNode;
                                    } :
                                    function (t, n, d) {
                                        var u, h, g, m;
                                        n = o == l ? "previousSibling" : "nextSibling";
                                        var A = t.parentNode,
                                            C = r && t.nodeName.toLowerCase(),
                                            v = !d && !r,
                                            T = !1;
                                        if (A) {
                                            if (o) {
                                                for (; n;) {
                                                    for (g = t;
                                                        (g = g[n]);)
                                                        if (
                                                            r ?
                                                            g.nodeName.toLowerCase() === C :
                                                            1 === g.nodeType
                                                        )
                                                            return !1;
                                                    var E = (n = "only" === e && !E && "nextSibling");
                                                }
                                                return !0;
                                            }
                                            if (((E = [l ? A.firstChild : A.lastChild]), l && v)) {
                                                for (
                                                    T =
                                                    (m =
                                                        (u =
                                                            (d =
                                                                (h = (g = A)[X] || (g[X] = {}))[
                                                                    g.uniqueID
                                                                ] || (h[g.uniqueID] = {}))[e] || [])[0] ===
                                                        U && u[1]) && u[2],
                                                    g = m && A.childNodes[m];
                                                    (g = (++m && g && g[n]) || (T = m = 0) || E.pop());

                                                )
                                                    if (1 === g.nodeType && ++T && g === t) {
                                                        d[e] = [U, m, T];
                                                        break;
                                                    }
                                            } else if (
                                                (v &&
                                                    (T = m =
                                                        (u =
                                                            ((h = (g = t)[X] || (g[X] = {}))[g.uniqueID] ||
                                                                (h[g.uniqueID] = {}))[e] || [])[0] === U &&
                                                        u[1]),
                                                    !1 === T)
                                            )
                                                for (;
                                                    (g =
                                                        (++m && g && g[n]) || (T = m = 0) || E.pop()) &&
                                                    ((r ?
                                                            g.nodeName.toLowerCase() !== C :
                                                            1 !== g.nodeType) ||
                                                        !++T ||
                                                        (v &&
                                                            ((d =
                                                                (h = g[X] || (g[X] = {}))[g.uniqueID] ||
                                                                (h[g.uniqueID] = {}))[e] = [U, T]),
                                                            g !== t));

                                                );
                                            return (T -= p) === c || (0 == T % c && 0 <= T / c);
                                        }
                                    };
                            },
                            PSEUDO: function (e, d) {
                                var n,
                                    l =
                                    x.pseudos[e] ||
                                    x.setFilters[e.toLowerCase()] ||
                                    A.error("unsupported pseudo: " + e);
                                return l[X] ?
                                    l(d) :
                                    1 < l.length ?
                                    ((n = [e, e, "", d]),
                                        x.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                        v(function (e, n) {
                                            for (var a, r = l(e, d), i = r.length; i--;)
                                                e[(a = m(e, r[i]))] = !(n[a] = r[i]);
                                        }) :
                                        function (e) {
                                            return l(e, 0, n);
                                        }) :
                                    l;
                            },
                        },
                        pseudos: {
                            not: v(function (e) {
                                var r = [],
                                    o = [],
                                    d = L(e.replace(we, "$1"));
                                return d[X] ?
                                    v(function (e, t, n, r) {
                                        var i;
                                        for (n = d(e, null, r, []), r = e.length; r--;)
                                            (i = n[r]) && (e[r] = !(t[r] = i));
                                    }) :
                                    function (e, t, a) {
                                        return (
                                            (r[0] = e), d(r, null, a, o), (r[0] = null), !o.pop()
                                        );
                                    };
                            }),
                            has: v(function (t) {
                                return function (n) {
                                    return 0 < A(t, n).length;
                                };
                            }),
                            contains: v(function (t) {
                                return (
                                    (t = t.replace(Ce, p)),
                                    function (n) {
                                        return -1 < (n.textContent || T(n)).indexOf(t);
                                    }
                                );
                            }),
                            lang: v(function (t) {
                                return (
                                    /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+$/.test(
                                        t || ""
                                    ) || A.error("unsupported lang: " + t),
                                    (t = t.replace(Ce, p).toLowerCase()),
                                    function (n) {
                                        var a;
                                        do
                                            if (
                                                (a = M ?
                                                    n.lang :
                                                    n.getAttribute("xml:lang") ||
                                                    n.getAttribute("lang"))
                                            )
                                                return (
                                                    (a = a.toLowerCase()) === t ||
                                                    0 === a.indexOf(t + "-")
                                                );
                                        while ((n = n.parentNode) && 1 === n.nodeType);
                                        return !1;
                                    }
                                );
                            }),
                            target: function (n) {
                                var e = y.location && y.location.hash;
                                return e && e.slice(1) === n.id;
                            },
                            root: function (e) {
                                return e === I;
                            },
                            focus: function (e) {
                                return (
                                    e === B.activeElement &&
                                    (!B.hasFocus || B.hasFocus()) &&
                                    !!(e.type || e.href || ~e.tabIndex)
                                );
                            },
                            enabled: r(!1),
                            disabled: r(!0),
                            checked: function (t) {
                                var n = t.nodeName.toLowerCase();
                                return (
                                    ("input" === n && !!t.checked) ||
                                    ("option" === n && !!t.selected)
                                );
                            },
                            selected: function (e) {
                                return (
                                    e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                );
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (6 > e.nodeType) return !1;
                                return !0;
                            },
                            parent: function (e) {
                                return !x.pseudos.empty(e);
                            },
                            header: function (e) {
                                return /^h\d$/i.test(e.nodeName);
                            },
                            input: function (e) {
                                return /^(?:input|select|textarea|button)$/i.test(e.nodeName);
                            },
                            button: function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n && "button" === t.type) || "button" === n;
                            },
                            text: function (e) {
                                return (
                                    "input" === e.nodeName.toLowerCase() &&
                                    "text" === e.type &&
                                    (null == (e = e.getAttribute("type")) ||
                                        "text" === e.toLowerCase())
                                );
                            },
                            first: d(function () {
                                return [0];
                            }),
                            last: d(function (t, n) {
                                return [n - 1];
                            }),
                            eq: d(function (e, t, n) {
                                return [0 > n ? n + t : n];
                            }),
                            even: d(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            odd: d(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            lt: d(function (t, n, a) {
                                for (n = 0 > a ? a + n : n < a ? n : a; 0 <= --n;) t.push(n);
                                return t;
                            }),
                            gt: d(function (e, t, n) {
                                for (n = 0 > n ? n + t : n; ++n < t;) e.push(n);
                                return e;
                            }),
                        },
                    }).pseudos.nth = x.pseudos.eq), {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }))
                x.pseudos[i] = (function (t) {
                    return function (n) {
                        return "input" === n.nodeName.toLowerCase() && n.type === t;
                    };
                })(i);
            for (i in {
                    submit: !0,
                    reset: !0
                })
                x.pseudos[i] = (function (e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                })(i);
            return (
                (s.prototype = x.filters = x.pseudos),
                (x.setFilters = new s()),
                (D = A.tokenize =
                    function (e, t) {
                        var n, o, r, d, i;
                        if ((i = fe[e + " "])) return t ? 0 : i.slice(0);
                        i = e;
                        for (var g = [], u = x.preFilter; i;) {
                            for (d in ((n &&
                                        !(o = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/.exec(i))) ||
                                    (o && (i = i.slice(o[0].length) || i), g.push((r = []))),
                                    (n = !1),
                                    (o = De.exec(i)) &&
                                    ((n = o.shift()),
                                        r.push({
                                            value: n,
                                            type: o[0].replace(we, " ")
                                        }),
                                        (i = i.slice(n.length))),
                                    x.filter))
                                (o = je[d].exec(i)) &&
                                (!u[d] || (o = u[d](o))) &&
                                ((n = o.shift()),
                                    r.push({
                                        value: n,
                                        type: d,
                                        matches: o
                                    }),
                                    (i = i.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? i.length : i ? A.error(e) : fe(e, g).slice(0);
                    }),
                (L = A.compile =
                    function (t, n) {
                        var a,
                            g,
                            f,
                            o,
                            i = [],
                            d = [],
                            r = ce[t + " "];
                        if (!r) {
                            for (a = (n = n || D(t)).length; a--;)
                                ((r = (function a(n) {
                                        for (
                                            var d,
                                                c,
                                                g = n.length,
                                                r = x.relative[n[0].type],
                                                i = r || x.relative[" "],
                                                f = r ? 1 : 0,
                                                C = e(
                                                    function (e) {
                                                        return e === d;
                                                    },
                                                    i,
                                                    !0
                                                ),
                                                T = e(
                                                    function (e) {
                                                        return -1 < m(d, e);
                                                    },
                                                    i,
                                                    !0
                                                ),
                                                y = [
                                                    function (e, n, a) {
                                                        return (
                                                            (e =
                                                                (!r && (a || n !== q)) ||
                                                                ((d = n).nodeType ? C : T)(e, n, a)),
                                                            (d = null),
                                                            e
                                                        );
                                                    },
                                                ]; f < g; f++
                                        )
                                            if ((i = x.relative[n[f].type])) y = [e(u(y), i)];
                                            else {
                                                if (
                                                    (i = x.filter[n[f].type].apply(null, n[f].matches))[X]
                                                ) {
                                                    for (c = ++f; c < g && !x.relative[n[c].type]; c++);
                                                    return (function e(s, l, d, o, u, n) {
                                                        return (
                                                            o && !o[X] && (o = e(o)),
                                                            u && !u[X] && (u = e(u, n)),
                                                            v(function (e, t, n, a) {
                                                                var i,
                                                                    p,
                                                                    v = [],
                                                                    f = [],
                                                                    y = t.length;
                                                                if (!(p = e)) {
                                                                    p = l || "*";
                                                                    for (
                                                                        var b = n.nodeType ? [n] : n,
                                                                            T = [],
                                                                            C = 0,
                                                                            E = b.length; C < E; C++
                                                                    )
                                                                        A(p, b[C], T);
                                                                    p = T;
                                                                }
                                                                if (
                                                                    ((p = s && (e || !l) ? S(p, v, s, n, a) : p),
                                                                        (b = d ?
                                                                            u || (e ? s : y || o) ? [] :
                                                                            t :
                                                                            p),
                                                                        d && d(p, b, n, a),
                                                                        o)
                                                                ) {
                                                                    var k = S(b, f);
                                                                    for (o(k, [], n, a), n = k.length; n--;)
                                                                        (i = k[n]) && (b[f[n]] = !(p[f[n]] = i));
                                                                }
                                                                if (!e)
                                                                    (b = S(b === t ? b.splice(y, b.length) : b)),
                                                                    u ? u(null, t, b, a) : ke.apply(t, b);
                                                                else if (u || s) {
                                                                    if (u) {
                                                                        for (k = [], n = b.length; n--;)
                                                                            (i = b[n]) && k.push((p[n] = i));
                                                                        u(null, (b = []), k, a);
                                                                    }
                                                                    for (n = b.length; n--;)
                                                                        (i = b[n]) &&
                                                                        -1 < (k = u ? m(e, i) : v[n]) &&
                                                                        (e[k] = !(t[k] = i));
                                                                }
                                                            })
                                                        );
                                                    })(
                                                        1 < f && u(y),
                                                        1 < f &&
                                                        h(
                                                            n
                                                            .slice(0, f - 1)
                                                            .concat({
                                                                value: " " === n[f - 2].type ? "*" : "",
                                                            })
                                                        ).replace(we, "$1"),
                                                        i,
                                                        f < c && a(n.slice(f, c)),
                                                        c < g && a((n = n.slice(c))),
                                                        c < g && h(n)
                                                    );
                                                }
                                                y.push(i);
                                            }
                                        return u(y);
                                    })(n[a]))[X] ?
                                    i :
                                    d
                                ).push(r);
                            (r = ce(
                                t,
                                ((f = 0 < d.length),
                                    (o = function (e, t, n, a, l) {
                                        var r,
                                            p,
                                            u = 0,
                                            b = "0",
                                            v = e && [],
                                            m = [],
                                            C = q,
                                            T = e || (f && x.find.TAG("*", l)),
                                            E = (U += null == C ? 1 : Math.random() || 0.1),
                                            k = T.length;
                                        for (
                                            l && (q = t == B || t || l); b !== k && null != (r = T[b]); b++
                                        ) {
                                            if (f && r) {
                                                var N = 0;
                                                for (
                                                    t || r.ownerDocument == B || (H(r), (n = !M));
                                                    (p = d[N++]);

                                                )
                                                    if (p(r, t || B, n)) {
                                                        a.push(r);
                                                        break;
                                                    }
                                                l && (U = E);
                                            }
                                            g && ((r = !p && r) && u--, e && v.push(r));
                                        }
                                        if (((u += b), g && b !== u)) {
                                            for (N = 0;
                                                (p = i[N++]);) p(v, m, t, n);
                                            if (e) {
                                                if (0 < u)
                                                    for (; b--;) v[b] || m[b] || (m[b] = xe.call(a));
                                                m = S(m);
                                            }
                                            ke.apply(a, m),
                                                l &&
                                                !e &&
                                                0 < m.length &&
                                                1 < u + i.length &&
                                                A.uniqueSort(a);
                                        }
                                        return l && ((U = E), (q = C)), v;
                                    }),
                                    (g = 0 < i.length) ? v(o) : o)
                            )).selector = t;
                        }
                        return r;
                    }),
                (j = A.select =
                    function (e, t, a, l) {
                        var d,
                            i,
                            g,
                            f,
                            y,
                            A = "function" == typeof e && e,
                            E = !l && D((e = A.selector || e));
                        if (((a = a || []), 1 === E.length)) {
                            if (
                                2 < (i = E[0] = E[0].slice(0)).length &&
                                "ID" === (g = i[0]).type &&
                                9 === t.nodeType &&
                                M &&
                                x.relative[i[1].type]
                            ) {
                                if (
                                    !(t = (x.find.ID(g.matches[0].replace(Ce, p), t) || [])[0])
                                )
                                    return a;
                                A && (t = t.parentNode),
                                    (e = e.slice(i.shift().value.length));
                            }
                            for (
                                d = je.needsContext.test(e) ? 0 : i.length; d-- && ((g = i[d]), !x.relative[(f = g.type)]);

                            )
                                if (
                                    (y = x.find[f]) &&
                                    (l = y(
                                        g.matches[0].replace(Ce, p),
                                        (Pe.test(i[0].type) && c(t.parentNode)) || t
                                    ))
                                ) {
                                    if ((i.splice(d, 1), !(e = l.length && h(i))))
                                        return ke.apply(a, l), a;
                                    break;
                                }
                        }
                        return (
                            (A || L(e, E))(
                                l,
                                t,
                                !M,
                                a,
                                !t || (Pe.test(e) && c(t.parentNode)) || t
                            ),
                            a
                        );
                    }),
                (f.sortStable = X.split("").sort(ue).join("") === X),
                (f.detectDuplicates = !!P),
                H(),
                (f.sortDetached = l(function (e) {
                    return 1 & e.compareDocumentPosition(B.createElement("fieldset"));
                })),
                l(function (e) {
                    return (
                        (e.innerHTML = "<a href='#'></a>"),
                        "#" === e.firstChild.getAttribute("href")
                    );
                }) ||
                a("type|href|height|width", function (e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
                (f.attributes &&
                    l(function (e) {
                        return (
                            (e.innerHTML = "<input/>"),
                            e.firstChild.setAttribute("value", ""),
                            "" === e.firstChild.getAttribute("value")
                        );
                    })) ||
                a("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
                l(function (e) {
                    return null == e.getAttribute("disabled");
                }) ||
                a(
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    function (t, n, a) {
                        if (!a)
                            return !0 === t[n] ?
                                n.toLowerCase() :
                                (n = t.getAttributeNode(n)) && n.specified ?
                                n.value :
                                null;
                    }
                ),
                A
            );
        })(B);
        (L.find = j),
        (L.expr = j.selectors),
        (L.expr[":"] = L.expr.pseudos),
        (L.uniqueSort = L.unique = j.uniqueSort),
        (L.text = j.getText),
        (L.isXMLDoc = j.isXML),
        (L.contains = j.contains),
        (L.escapeSelector = j.escape);
        var q = L.expr.match.needsContext,
            P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        (L.filter = function (e, t, o) {
            var a = t[0];
            return (
                o && (e = ":not(" + e + ")"),
                1 === t.length && 1 === a.nodeType ?
                L.find.matchesSelector(a, e) ? [a] : [] :
                L.find.matches(
                    e,
                    L.grep(t, function (e) {
                        return 1 === e.nodeType;
                    })
                )
            );
        }),
        L.fn.extend({
                find: function (o) {
                    var l = this.length,
                        e = this;
                    if ("string" != typeof o)
                        return this.pushStack(
                            L(o).filter(function () {
                                for (n = 0; n < l; n++)
                                    if (L.contains(e[n], this)) return !0;
                            })
                        );
                    for (var t = this.pushStack([]), n = 0; n < l; n++)
                        L.find(o, e[n], t);
                    return 1 < l ? L.uniqueSort(t) : t;
                },
                filter: function (t) {
                    return this.pushStack(oe(this, t || [], !1));
                },
                not: function (t) {
                    return this.pushStack(oe(this, t || [], !0));
                },
                is: function (t) {
                    return !!oe(
                        this,
                        "string" == typeof t && q.test(t) ? L(t) : t || [],
                        !1
                    ).length;
                },
            }),
            ((L.fn.init = function (e, t, n) {
                if (!e) return this;
                if (((n = n || H), "string" != typeof e))
                    return e.nodeType ?
                        ((this[0] = e), (this.length = 1), this) :
                        w(e) ?
                        void 0 === n.ready ?
                        e(L) :
                        n.ready(e) :
                        L.makeArray(e, this);
                if (
                    !(a =
                        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] :
                        /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/.exec(e)) ||
                    (!a[1] && t)
                )
                    return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (a[1]) {
                    if (
                        ((t = t instanceof L ? t[0] : t),
                            L.merge(
                                this,
                                L.parseHTML(
                                    a[1],
                                    t && t.nodeType ? t.ownerDocument || t : D,
                                    !0
                                )
                            ),
                            P.test(a[1]) && L.isPlainObject(t))
                    )
                        for (var a in t) w(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                    return this;
                }
                return (
                    (e = D.getElementById(a[2])) && ((this[0] = e), (this.length = 1)),
                    this
                );
            }).prototype = L.fn);
        var H = L(D),
            I = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        L.fn.extend({
                has: function (e) {
                    var a = L(e, this),
                        o = a.length;
                    return this.filter(function () {
                        for (var e = 0; e < o; e++)
                            if (L.contains(this, a[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        o = 0,
                        r = this.length,
                        i = [],
                        d = "string" != typeof e && L(e);
                    if (!q.test(e))
                        for (; o < r; o++)
                            for (n = this[o]; n && n !== t; n = n.parentNode)
                                if (
                                    11 > n.nodeType &&
                                    (d ?
                                        -1 < d.index(n) :
                                        1 === n.nodeType && L.find.matchesSelector(n, e))
                                ) {
                                    i.push(n);
                                    break;
                                }
                    return this.pushStack(1 < i.length ? L.uniqueSort(i) : i);
                },
                index: function (e) {
                    return e ?
                        "string" == typeof e ?
                        x.call(L(e), this[0]) :
                        x.call(this, e.jquery ? e[0] : e) :
                        this[0] && this[0].parentNode ?
                        this.first().prevAll().length :
                        -1;
                },
                add: function (t, n) {
                    return this.pushStack(L.uniqueSort(L.merge(this.get(), L(t, n))));
                },
                addBack: function (e) {
                    return this.add(
                        null == e ? this.prevObject : this.prevObject.filter(e)
                    );
                },
            }),
            L.each({
                    parent: function (e) {
                        return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
                    },
                    parents: function (e) {
                        return m(e, "parentNode");
                    },
                    parentsUntil: function (e, t, n) {
                        return m(e, "parentNode", n);
                    },
                    next: function (e) {
                        return re(e, "nextSibling");
                    },
                    prev: function (e) {
                        return re(e, "previousSibling");
                    },
                    nextAll: function (e) {
                        return m(e, "nextSibling");
                    },
                    prevAll: function (e) {
                        return m(e, "previousSibling");
                    },
                    nextUntil: function (e, t, n) {
                        return m(e, "nextSibling", n);
                    },
                    prevUntil: function (e, t, n) {
                        return m(e, "previousSibling", n);
                    },
                    siblings: function (e) {
                        return n((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                        return n(e.firstChild);
                    },
                    contents: function (e) {
                        return null != e.contentDocument && y(e.contentDocument) ?
                            e.contentDocument :
                            (te(e, "template") && (e = e.content || e),
                                L.merge([], e.childNodes));
                    },
                },
                function (n, a) {
                    L.fn[n] = function (o, e) {
                        var l = L.map(this, a, o);
                        return (
                            "Until" !== n.slice(-5) && (e = o),
                            e && "string" == typeof e && (l = L.filter(e, l)),
                            1 < this.length &&
                            (I[n] || L.uniqueSort(l),
                                /^(?:parents|prev(?:Until|All))/.test(n) && l.reverse()),
                            this.pushStack(l)
                        );
                    };
                }
            );
        var M = /[^\x20\t\r\n\f]+/g;
        (L.Callbacks = function (r) {
            function o() {
                for (s = s || r.once, i = l = !0; p.length; u = -1)
                    for (d = p.shift(); ++u < c.length;)
                        !1 === c[u].apply(d[0], d[1]) &&
                        r.stopOnFalse &&
                        ((u = c.length), (d = !1));
                r.memory || (d = !1), (l = !1), s && (c = d ? [] : "");
            }
            var n, l, d, i, s;
            r =
                "string" == typeof r ?
                ((n = {}),
                    L.each(r.match(M) || [], function (a, t) {
                        n[t] = !0;
                    }),
                    n) :
                L.extend({}, r);
            var c = [],
                p = [],
                u = -1,
                g = {
                    add: function () {
                        return (
                            c &&
                            (d && !l && ((u = c.length - 1), p.push(d)),
                                (function e(t) {
                                    L.each(t, function (t, n) {
                                        w(n) ?
                                            (r.unique && g.has(n)) || c.push(n) :
                                            n && n.length && "string" !== G(n) && e(n);
                                    });
                                })(arguments),
                                d && !l && o()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            L.each(arguments, function (e, t) {
                                for (var n; - 1 < (n = L.inArray(t, c, n));)
                                    c.splice(n, 1), n <= u && u--;
                            }),
                            this
                        );
                    },
                    has: function (e) {
                        return e ? -1 < L.inArray(e, c) : 0 < c.length;
                    },
                    empty: function () {
                        return (c = c && []), this;
                    },
                    disable: function () {
                        return (s = p = []), (c = d = ""), this;
                    },
                    disabled: function () {
                        return !c;
                    },
                    lock: function () {
                        return (s = p = []), d || l || (c = d = ""), this;
                    },
                    locked: function () {
                        return !!s;
                    },
                    fireWith: function (e, t) {
                        return (
                            s ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                                p.push(t),
                                l || o()),
                            this
                        );
                    },
                    fire: function () {
                        return g.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!i;
                    },
                };
            return g;
        }),
        L.extend({
                Deferred: function (n) {
                    var s = [
                            [
                                "notify",
                                "progress",
                                L.Callbacks("memory"),
                                L.Callbacks("memory"),
                                2,
                            ],
                            [
                                "resolve",
                                "done",
                                L.Callbacks("once memory"),
                                L.Callbacks("once memory"),
                                0,
                                "resolved",
                            ],
                            [
                                "reject",
                                "fail",
                                L.Callbacks("once memory"),
                                L.Callbacks("once memory"),
                                1,
                                "rejected",
                            ],
                        ],
                        e = "pending",
                        o = {
                            state: function () {
                                return e;
                            },
                            always: function () {
                                return i.done(arguments).fail(arguments), this;
                            },
                            catch: function (e) {
                                return o.then(null, e);
                            },
                            pipe: function () {
                                var n = arguments;
                                return L.Deferred(function (o) {
                                    L.each(s, function (e, r) {
                                            var l = w(n[r[4]]) && n[r[4]];
                                            i[r[1]](function () {
                                                var e = l && l.apply(this, arguments);
                                                e && w(e.promise) ?
                                                    e
                                                    .promise()
                                                    .progress(o.notify)
                                                    .done(o.resolve)
                                                    .fail(o.reject) :
                                                    o[r[0] + "With"](this, l ? [e] : arguments);
                                            });
                                        }),
                                        (n = null);
                                }).promise();
                            },
                            then: function (l, e, n) {
                                function t(o, c, n, l) {
                                    return function () {
                                        function e() {
                                            var d;
                                            if (!(o < a)) {
                                                if ((d = n.apply(r, p)) === c.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                var s =
                                                    d &&
                                                    ("object" == typeof d || "function" == typeof d) &&
                                                    d.then;
                                                w(s) ?
                                                    l ?
                                                    s.call(d, t(a, c, de, l), t(a, c, ie, l)) :
                                                    (a++,
                                                        s.call(
                                                            d,
                                                            t(a, c, de, l),
                                                            t(a, c, ie, l),
                                                            t(a, c, de, c.notifyWith)
                                                        )) :
                                                    (n !== de && ((r = void 0), (p = [d])),
                                                        (l || c.resolveWith)(r, p));
                                            }
                                        }
                                        var r = this,
                                            p = arguments,
                                            i = l ?
                                            e :
                                            function () {
                                                try {
                                                    e();
                                                } catch (t) {
                                                    L.Deferred.exceptionHook &&
                                                        L.Deferred.exceptionHook(t, i.stackTrace),
                                                        a <= o + 1 &&
                                                        (n !== ie && ((r = void 0), (p = [t])),
                                                            c.rejectWith(r, p));
                                                }
                                            };
                                        o
                                            ?
                                            i() :
                                            (L.Deferred.getStackHook &&
                                                (i.stackTrace = L.Deferred.getStackHook()),
                                                B.setTimeout(i));
                                    };
                                }
                                var a = 0;
                                return L.Deferred(function (a) {
                                    s[0][3].add(t(0, a, w(n) ? n : de, a.notifyWith)),
                                        s[1][3].add(t(0, a, w(l) ? l : de)),
                                        s[2][3].add(t(0, a, w(e) ? e : ie));
                                }).promise();
                            },
                            promise: function (e) {
                                return null == e ? o : L.extend(e, o);
                            },
                        },
                        i = {};
                    return (
                        L.each(s, function (t, n) {
                            var l = n[2],
                                r = n[5];
                            (o[n[1]] = l.add),
                            r &&
                                l.add(
                                    function () {
                                        e = r;
                                    },
                                    s[3 - t][2].disable,
                                    s[3 - t][3].disable,
                                    s[0][2].lock,
                                    s[0][3].lock
                                ),
                                l.add(n[3].fire),
                                (i[n[0]] = function () {
                                    return (
                                        i[n[0] + "With"](this === i ? void 0 : this, arguments),
                                        this
                                    );
                                }),
                                (i[n[0] + "With"] = l.fireWith);
                        }),
                        o.promise(i),
                        n && n.call(i, i),
                        i
                    );
                },
                when: function (e) {
                    function t(a) {
                        return function (e) {
                            (d[a] = this),
                            (r[a] = 1 < arguments.length ? b.call(arguments) : e),
                            --n || i.resolveWith(d, r);
                        };
                    }
                    var n = arguments.length,
                        o = n,
                        d = Array(o),
                        r = b.call(arguments),
                        i = L.Deferred();
                    if (
                        1 >= n &&
                        (pe(e, i.done(t(o)).resolve, i.reject, !n),
                            "pending" === i.state() || w(r[o] && r[o].then))
                    )
                        return i.then();
                    for (; o--;) pe(r[o], t(o), i.reject);
                    return i.promise();
                },
            }),
            (L.Deferred.exceptionHook = function (n, e) {
                B.console &&
                    B.console.warn &&
                    n &&
                    /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/.test(
                        n.name
                    ) &&
                    B.console.warn(
                        "jQuery.Deferred exception: " + n.message,
                        n.stack,
                        e
                    );
            }),
            (L.readyException = function (t) {
                B.setTimeout(function () {
                    throw t;
                });
            });
        var W = L.Deferred();
        (L.fn.ready = function (e) {
            return (
                W.then(e).catch(function (e) {
                    L.readyException(e);
                }),
                this
            );
        }),
        L.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --L.readyWait : L.isReady) ||
                    ((L.isReady = !0) !== e && 0 < --L.readyWait) ||
                    W.resolveWith(D, [L]);
                },
            }),
            (L.ready.then = W.then),
            "complete" !== D.readyState &&
            ("loading" === D.readyState || D.documentElement.doScroll) ?
            (D.addEventListener("DOMContentLoaded", he),
                B.addEventListener("load", he)) :
            B.setTimeout(L.ready);
        var _ = function (t, n, a, o, l, i, s) {
                var p = 0,
                    u = t.length,
                    g = null == a;
                if ("object" === G(a))
                    for (p in ((l = !0), a)) _(t, n, p, a[p], !0, i, s);
                else if (
                    void 0 !== o &&
                    ((l = !0),
                        w(o) || (s = !0),
                        g &&
                        (n = s ?
                            (n.call(t, o), null) :
                            ((g = n),
                                function (e, t, n) {
                                    return g.call(L(e), n);
                                })),
                        n)
                )
                    for (; p < u; p++) n(t[p], a, s ? o : o.call(t[p], p, n(t[p], a)));
                return l ? t : g ? n.call(t) : u ? n(t[0], a) : i;
            },
            R = /^-ms-/,
            U = /-([a-z])/g;
        (ye.uid = 1),
        (ye.prototype = {
            cache: function (t) {
                var n = t[this.expando];
                return (
                    n ||
                    ((n = {}),
                        p(t) &&
                        (t.nodeType ?
                            (t[this.expando] = n) :
                            Object.defineProperty(t, this.expando, {
                                value: n,
                                configurable: !0,
                            }))),
                    n
                );
            },
            set: function (e, t, o) {
                if (((e = this.cache(e)), "string" == typeof t)) e[me(t)] = o;
                else
                    for (var a in t) e[me(a)] = t[a];
                return e;
            },
            get: function (t, n) {
                return void 0 === n ?
                    this.cache(t) :
                    t[this.expando] && t[this.expando][me(n)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ?
                    this.get(e, t) :
                    (this.set(e, t, n), void 0 === n ? t : n);
            },
            remove: function (t, a) {
                var o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 !== a)
                        for (
                            var l = (a = Array.isArray(a) ?
                                a.map(me) :
                                ((a = me(a)) in o) ? [a] :
                                a.match(M) || []).length; l--;

                        )
                            delete o[a[l]];
                    (void 0 === a || L.isEmptyObject(o)) &&
                    (t.nodeType ?
                        (t[this.expando] = void 0) :
                        delete t[this.expando]);
                }
            },
            hasData: function (e) {
                return void 0 !== (e = e[this.expando]) && !L.isEmptyObject(e);
            },
        });
        var F = new ye(),
            V = new ye(),
            Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Q = /[A-Z]/g;
        L.extend({
                hasData: function (e) {
                    return V.hasData(e) || F.hasData(e);
                },
                data: function (e, t, n) {
                    return V.access(e, t, n);
                },
                removeData: function (t, n) {
                    V.remove(t, n);
                },
                _data: function (e, t, n) {
                    return F.access(e, t, n);
                },
                _removeData: function (t, n) {
                    F.remove(t, n);
                },
            }),
            L.fn.extend({
                data: function (e, t) {
                    var n,
                        o,
                        r,
                        s = this[0],
                        i = s && s.attributes;
                    if (void 0 !== e)
                        return "object" == typeof e ?
                            this.each(function () {
                                V.set(this, e);
                            }) :
                            _(
                                this,
                                function (t) {
                                    var n;
                                    return s && void 0 === t ?
                                        void 0 !== (n = V.get(s, e)) ||
                                        void 0 !== (n = be(s, e)) ?
                                        n :
                                        void 0 :
                                        void this.each(function () {
                                            V.set(this, e, t);
                                        });
                                },
                                null,
                                t,
                                1 < arguments.length,
                                null,
                                !0
                            );
                    if (
                        this.length &&
                        ((r = V.get(s)), 1 === s.nodeType && !F.get(s, "hasDataAttrs"))
                    ) {
                        for (n = i.length; n--;)
                            i[n] &&
                            0 === (o = i[n].name).indexOf("data-") &&
                            ((o = me(o.slice(5))), be(s, o, r[o]));
                        F.set(s, "hasDataAttrs", !0);
                    }
                    return r;
                },
                removeData: function (e) {
                    return this.each(function () {
                        V.remove(this, e);
                    });
                },
            }),
            L.extend({
                queue: function (t, a, o) {
                    var l;
                    if (t)
                        return (
                            (a = (a || "fx") + "queue"),
                            (l = F.get(t, a)),
                            o &&
                            (!l || Array.isArray(o) ?
                                (l = F.access(t, a, L.makeArray(o))) :
                                l.push(o)),
                            l || []
                        );
                },
                dequeue: function (t, a) {
                    a = a || "fx";
                    var o = L.queue(t, a),
                        l = o.length,
                        r = o.shift(),
                        d = L._queueHooks(t, a);
                    "inprogress" === r && ((r = o.shift()), l--),
                        r &&
                        ("fx" === a && o.unshift("inprogress"),
                            delete d.stop,
                            r.call(
                                t,
                                function () {
                                    L.dequeue(t, a);
                                },
                                d
                            )),
                        !l && d && d.empty.fire();
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return (
                        F.get(e, n) ||
                        F.access(e, n, {
                            empty: L.Callbacks("once memory").add(function () {
                                F.remove(e, [t + "queue", n]);
                            }),
                        })
                    );
                },
            }),
            L.fn.extend({
                queue: function (t, n) {
                    var e = 2;
                    return (
                        "string" != typeof t && ((n = t), (t = "fx"), e--),
                        arguments.length < e ?
                        L.queue(this[0], t) :
                        void 0 === n ?
                        this :
                        this.each(function () {
                            var a = L.queue(this, t, n);
                            L._queueHooks(this, t),
                                "fx" === t && "inprogress" !== a[0] && L.dequeue(this, t);
                        })
                    );
                },
                dequeue: function (e) {
                    return this.each(function () {
                        L.dequeue(this, e);
                    });
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                    function r() {
                        --d || i.resolveWith(p, [p]);
                    }
                    var o,
                        d = 1,
                        i = L.Deferred(),
                        p = this,
                        c = this.length;
                    for (
                        "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; c--;

                    )
                        (o = F.get(p[c], e + "queueHooks")) &&
                        o.empty &&
                        (d++, o.empty.add(r));
                    return r(), i.promise(t);
                },
            });
        var K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ie = new RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$", "i"),
            Z = ["Top", "Right", "Bottom", "Left"],
            ne = D.documentElement,
            ae = function (e) {
                return L.contains(e.ownerDocument, e);
            },
            Re = {
                composed: !0
            };
        ne.getRootNode &&
            (ae = function (e) {
                return (
                    L.contains(e.ownerDocument, e) ||
                    e.getRootNode(Re) === e.ownerDocument
                );
            });
        var ze = {};
        L.fn.extend({
            show: function () {
                return ve(this, !0);
            },
            hide: function () {
                return ve(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e ?
                    e ?
                    this.show() :
                    this.hide() :
                    this.each(function () {
                        s(this) ? L(this).show() : L(this).hide();
                    });
            },
        });
        var se = /^(?:checkbox|radio)$/i,
            ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ue = /^$|^module$|\/(?:java|ecma)script/i,
            fe = D.createDocumentFragment().appendChild(D.createElement("div"));
        (j = D.createElement("input")).setAttribute("type", "radio"),
            j.setAttribute("checked", "checked"),
            j.setAttribute("name", "t"),
            fe.appendChild(j),
            (N.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (fe.innerHTML = "<textarea>x</textarea>"),
            (N.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
            (fe.innerHTML = "<option></option>"),
            (N.option = !!fe.lastChild);
        var Fe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
        (Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead),
        (Fe.th = Fe.td),
        N.option ||
            (Fe.optgroup = Fe.option = [1, "<select multiple='multiple'>", "</select>"]);
        var Ue = /<|&#?\w+;/,
            Me = /^([^.]*)(?:\.(.+)|)/;
        (L.event = {
            global: {},
            add: function (t, n, o, l, r) {
                var i,
                    s,
                    c,
                    u,
                    g,
                    f,
                    m = F.get(t);
                if (p(t))
                    for (
                        o.handler && ((o = (i = o).handler), (r = i.selector)),
                        r && L.find.matchesSelector(ne, r),
                        o.guid || (o.guid = L.guid++),
                        (c = m.events) || (c = m.events = Object.create(null)),
                        (s = m.handle) ||
                        (s = m.handle =
                            function (n) {
                                return void 0 !== L && L.event.triggered !== n.type ?
                                    L.event.dispatch.apply(t, arguments) :
                                    void 0;
                            }),
                        m = (n = (n || "").match(M) || [""]).length; m--;

                    ) {
                        var T = (f = (N = Me.exec(n[m]) || [])[1]),
                            N = (N[2] || "").split(".").sort();
                        T &&
                            ((g = L.event.special[T] || {}),
                                (T = (r ? g.delegateType : g.bindType) || T),
                                (g = L.event.special[T] || {}),
                                (u = L.extend({
                                        type: T,
                                        origType: f,
                                        data: l,
                                        handler: o,
                                        guid: o.guid,
                                        selector: r,
                                        needsContext: r && L.expr.match.needsContext.test(r),
                                        namespace: N.join("."),
                                    },
                                    i
                                )),
                                (f = c[T]) ||
                                (((f = c[T] = []).delegateCount = 0),
                                    (g.setup && !1 !== g.setup.call(t, l, N, s)) ||
                                    (t.addEventListener && t.addEventListener(T, s))),
                                g.add &&
                                (g.add.call(t, u),
                                    u.handler.guid || (u.handler.guid = o.guid)),
                                r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                                (L.event.global[T] = !0));
                    }
            },
            remove: function (t, n, o, r, d) {
                var a,
                    i,
                    s,
                    c,
                    u,
                    h,
                    b = F.hasData(t) && F.get(t);
                if (b && (i = b.events)) {
                    for (s = (n = (n || "").match(M) || [""]).length; s--;)
                        if (
                            ((c = h = (C = Me.exec(n[s]) || [])[1]),
                                (u = (C[2] || "").split(".").sort()),
                                c)
                        ) {
                            for (
                                var x,
                                    T = L.event.special[c] || {},
                                    A = i[(c = (r ? T.delegateType : T.bindType) || c)] || [],
                                    C =
                                    C[2] &&
                                    new RegExp(
                                        "(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"
                                    ),
                                    E = (a = A.length); a--;

                            )
                                (x = A[a]),
                                (!d && h !== x.origType) ||
                                (o && o.guid !== x.guid) ||
                                (C && !C.test(x.namespace)) ||
                                (r && r !== x.selector && ("**" !== r || !x.selector)) ||
                                (A.splice(a, 1),
                                    x.selector && A.delegateCount--,
                                    T.remove && T.remove.call(t, x));
                            E &&
                                !A.length &&
                                ((T.teardown && !1 !== T.teardown.call(t, u, b.handle)) ||
                                    L.removeEvent(t, c, b.handle),
                                    delete i[c]);
                        } else
                            for (c in i) L.event.remove(t, c + n[s], o, r, !0);
                    L.isEmptyObject(i) && F.remove(t, "handle events");
                }
            },
            dispatch: function (e) {
                var t,
                    n,
                    a = Array(arguments.length),
                    s = L.event.fix(e),
                    l = (F.get(this, "events") || Object.create(null))[s.type] || [];
                for (
                    e = L.event.special[s.type] || {}, a[0] = s, u = 1; u < arguments.length; u++
                )
                    a[u] = arguments[u];
                if (
                    ((s.delegateTarget = this),
                        !e.preDispatch || !1 !== e.preDispatch.call(this, s))
                ) {
                    for (
                        var p = L.event.handlers.call(this, s, l), u = 0;
                        (t = p[u++]) && !s.isPropagationStopped();

                    )
                        for (
                            s.currentTarget = t.elem, l = 0;
                            (n = t.handlers[l++]) && !s.isImmediatePropagationStopped();

                        )
                            (s.rnamespace &&
                                !1 !== n.namespace &&
                                !s.rnamespace.test(n.namespace)) ||
                            ((s.handleObj = n),
                                (s.data = n.data),
                                void 0 !==
                                (n = (
                                    (L.event.special[n.origType] || {}).handle || n.handler
                                ).apply(t.elem, a)) &&
                                !1 === (s.result = n) &&
                                (s.preventDefault(), s.stopPropagation()));
                    return e.postDispatch && e.postDispatch.call(this, s), s.result;
                }
            },
            handlers: function (e, t) {
                var n,
                    o,
                    r = [],
                    d = t.delegateCount,
                    i = e.target;
                if (d && i.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; i !== this; i = i.parentNode || this)
                        if (
                            1 === i.nodeType &&
                            ("click" !== e.type || !0 !== i.disabled)
                        ) {
                            for (var s = [], p = {}, u = 0; u < d; u++)
                                void 0 === p[(o = (n = t[u]).selector + " ")] &&
                                (p[o] = n.needsContext ?
                                    -1 < L(o, this).index(i) :
                                    L.find(o, this, null, [i]).length),
                                p[o] && s.push(n);
                            s.length && r.push({
                                elem: i,
                                handlers: s
                            });
                        }
                return (
                    (i = this),
                    d < t.length && r.push({
                        elem: i,
                        handlers: t.slice(d)
                    }),
                    r
                );
            },
            addProp: function (t, n) {
                Object.defineProperty(L.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: w(n) ?
                        function () {
                            if (this.originalEvent) return n(this.originalEvent);
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[t];
                        },
                    set: function (n) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: n,
                        });
                    },
                });
            },
            fix: function (e) {
                return e[L.expando] ? e : new L.Event(e);
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (e) {
                        return (
                            (e = this || e),
                            se.test(e.type) &&
                            e.click &&
                            te(e, "input") &&
                            Se(e, "click", Ae),
                            !1
                        );
                    },
                    trigger: function (e) {
                        return (
                            (e = this || e),
                            se.test(e.type) && e.click && te(e, "input") && Se(e, "click"),
                            !0
                        );
                    },
                    _default: function (e) {
                        return (
                            (e = e.target),
                            (se.test(e.type) &&
                                e.click &&
                                te(e, "input") &&
                                F.get(e, "click")) ||
                            te(e, "a")
                        );
                    },
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result &&
                            e.originalEvent &&
                            (e.originalEvent.returnValue = e.result);
                    },
                },
            },
        }),
        (L.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (L.Event = function (t, n) {
            return this instanceof L.Event ?
                (t && t.type ?
                    ((this.originalEvent = t),
                        (this.type = t.type),
                        (this.isDefaultPrevented =
                            t.defaultPrevented ||
                            (void 0 === t.defaultPrevented && !1 === t.returnValue) ?
                            Ae :
                            Ee),
                        (this.target =
                            t.target && 3 === t.target.nodeType ?
                            t.target.parentNode :
                            t.target),
                        (this.currentTarget = t.currentTarget),
                        (this.relatedTarget = t.relatedTarget)) :
                    (this.type = t),
                    n && L.extend(this, n),
                    (this.timeStamp = (t && t.timeStamp) || Date.now()),
                    void(this[L.expando] = !0)) :
                new L.Event(t, n);
        }),
        (L.Event.prototype = {
            constructor: L.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ae),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ae),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ae),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        L.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0,
                },
                L.event.addProp
            ),
            L.each({
                focus: "focusin",
                blur: "focusout"
            }, function (t, n) {
                L.event.special[t] = {
                    setup: function () {
                        return Se(this, t, ke), !1;
                    },
                    trigger: function () {
                        return Se(this, t), !0;
                    },
                    _default: function () {
                        return !0;
                    },
                    delegateType: n,
                };
            }),
            L.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout",
                },
                function (t, l) {
                    L.event.special[t] = {
                        delegateType: l,
                        bindType: l,
                        handle: function (t) {
                            var e,
                                r = t.relatedTarget,
                                a = t.handleObj;
                            return (
                                (r && (r === this || L.contains(this, r))) ||
                                ((t.type = a.origType),
                                    (e = a.handler.apply(this, arguments)),
                                    (t.type = l)),
                                e
                            );
                        },
                    };
                }
            ),
            L.fn.extend({
                on: function (n, a, o, e) {
                    return Ne(this, n, a, o, e);
                },
                one: function (n, a, o, e) {
                    return Ne(this, n, a, o, e, 1);
                },
                off: function (t, n, a) {
                    var o, l;
                    if (t && t.preventDefault && t.handleObj)
                        return (
                            (o = t.handleObj),
                            L(t.delegateTarget).off(
                                o.namespace ? o.origType + "." + o.namespace : o.origType,
                                o.selector,
                                o.handler
                            ),
                            this
                        );
                    if ("object" != typeof t)
                        return (
                            (!1 !== n && "function" != typeof n) || ((a = n), (n = void 0)),
                            !1 === a && (a = Ee),
                            this.each(function () {
                                L.event.remove(this, t, a, n);
                            })
                        );
                    for (l in t) this.off(l, n, t[l]);
                    return this;
                },
            });
        var We,
            $e,
            Xe,
            ot,
            lt,
            rt,
            dt,
            st = /checked\s*(?:[^=]|=\s*.checked.)/i,
            gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        L.extend({
                htmlPrefilter: function (e) {
                    return e;
                },
                clone: function (n, a, o) {
                    var e,
                        l,
                        r = n.cloneNode(!0),
                        i = ae(n);
                    if (
                        !(
                            N.noCloneChecked ||
                            (1 !== n.nodeType && 11 !== n.nodeType) ||
                            L.isXMLDoc(n)
                        )
                    )
                        for (var s = xe(r), p = 0, u = (e = xe(n)).length; p < u; p++) {
                            var h = e[p],
                                m = s[p];
                            "input" === (l = m.nodeName.toLowerCase()) && se.test(h.type) ?
                                (m.checked = h.checked) :
                                ("input" !== l && "textarea" !== l) ||
                                (m.defaultValue = h.defaultValue);
                        }
                    if (a)
                        if (o)
                            for (
                                e = e || xe(n), s = s || xe(r), p = 0, u = e.length; p < u; p++
                            )
                                De(e[p], s[p]);
                        else De(n, r);
                    return (
                        0 < (s = xe(r, "script")).length && Ce(s, !i && xe(n, "script")), r
                    );
                },
                cleanData: function (t) {
                    for (
                        var n, a, l, d = L.event.special, s = 0; void 0 !== (a = t[s]); s++
                    )
                        if (p(a)) {
                            if ((n = a[F.expando])) {
                                if (n.events)
                                    for (l in n.events)
                                        d[l] ? L.event.remove(a, l) : L.removeEvent(a, l, n.handle);
                                a[F.expando] = void 0;
                            }
                            a[V.expando] && (a[V.expando] = void 0);
                        }
                },
            }),
            L.fn.extend({
                detach: function (e) {
                    return o(this, e, !0);
                },
                remove: function (e) {
                    return o(this, e);
                },
                text: function (e) {
                    return _(
                        this,
                        function (e) {
                            return void 0 === e ?
                                L.text(this) :
                                this.empty().each(function () {
                                    (1 !== this.nodeType &&
                                        11 !== this.nodeType &&
                                        9 !== this.nodeType) ||
                                    (this.textContent = e);
                                });
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                append: function () {
                    return a(this, arguments, function (e) {
                        (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                        i(this, e).appendChild(e);
                    });
                },
                prepend: function () {
                    return a(this, arguments, function (t) {
                        var n;
                        (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                        (n = i(this, t)).insertBefore(t, n.firstChild);
                    });
                },
                before: function () {
                    return a(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                },
                after: function () {
                    return a(this, arguments, function (e) {
                        this.parentNode &&
                            this.parentNode.insertBefore(e, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType &&
                        (L.cleanData(xe(e, !1)), (e.textContent = ""));
                    return this;
                },
                clone: function (e, t) {
                    return (
                        (e = null != e && e),
                        (t = null == t ? e : t),
                        this.map(function () {
                            return L.clone(this, e, t);
                        })
                    );
                },
                html: function (e) {
                    return _(
                        this,
                        function (e) {
                            var t = this[0] || {},
                                n = 0,
                                a = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if (
                                "string" == typeof e &&
                                !/<script|<style|<link/i.test(e) &&
                                !Fe[(ce.exec(e) || ["", ""])[1].toLowerCase()]
                            ) {
                                e = L.htmlPrefilter(e);
                                try {
                                    for (; n < a; n++)
                                        1 === (t = this[n] || {}).nodeType &&
                                        (L.cleanData(xe(t, !1)), (t.innerHTML = e));
                                    t = 0;
                                } catch (e) {}
                            }
                            t && this.empty().append(e);
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var e = [];
                    return a(
                        this,
                        arguments,
                        function (t) {
                            var n = this.parentNode;
                            0 > L.inArray(this, e) &&
                                (L.cleanData(xe(this)), n && n.replaceChild(t, this));
                        },
                        e
                    );
                },
            }),
            L.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                },
                function (e, l) {
                    L.fn[e] = function (e) {
                        for (var r = [], d = L(e), n = d.length - 1, a = 0; a <= n; a++)
                            (e = a == n ? this : this.clone(!0)),
                            L(d[a])[l](e),
                            v.apply(r, e.get());
                        return this.pushStack(r);
                    };
                }
            );
        var bt = new RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
            ft = function (n) {
                var e = n.ownerDocument.defaultView;
                return (e && e.opener) || (e = B), e.getComputedStyle(n);
            },
            vt = new RegExp(Z.join("|"), "i"),
            mt = D.createElement("div");
        (dt = D.createElement("div")).style &&
            ((dt.style.backgroundClip = "content-box"),
                (dt.cloneNode(!0).style.backgroundClip = ""),
                (N.clearCloneStyle = "content-box" === dt.style.backgroundClip),
                L.extend(N, {
                    boxSizingReliable: function () {
                        return h(), $e;
                    },
                    pixelBoxStyles: function () {
                        return h(), ot;
                    },
                    pixelPosition: function () {
                        return h(), We;
                    },
                    reliableMarginLeft: function () {
                        return h(), rt;
                    },
                    scrollboxSize: function () {
                        return h(), Xe;
                    },
                    reliableTrDimensions: function () {
                        var t, n, a;
                        return (
                            null == lt &&
                            ((t = D.createElement("table")),
                                (n = D.createElement("tr")),
                                (a = D.createElement("div")),
                                (t.style.cssText =
                                    "position:absolute;left:-11111px;border-collapse:separate"),
                                (n.style.cssText = "border:1px solid"),
                                (n.style.height = "1px"),
                                (a.style.height = "9px"),
                                (a.style.display = "block"),
                                ne.appendChild(t).appendChild(n).appendChild(a),
                                (a = B.getComputedStyle(n)),
                                (lt =
                                    parseInt(a.height, 10) +
                                    parseInt(a.borderTopWidth, 10) +
                                    parseInt(a.borderBottomWidth, 10) ===
                                    n.offsetHeight),
                                ne.removeChild(t)),
                            lt
                        );
                    },
                }));
        var xt = ["Webkit", "Moz", "ms"],
            yt = D.createElement("div").style,
            Ct = {},
            Ve = /^--/,
            Ye = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ge = {
                letterSpacing: "0",
                fontWeight: "400"
            };
        L.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) return "" === (e = Le(e, "opacity")) ? "1" : e;
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (t, n, a, o) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var l,
                            d,
                            s,
                            c = me(n),
                            p = Ve.test(n),
                            u = t.style;
                        if (
                            (p || (n = je(c)),
                                (s = L.cssHooks[n] || L.cssHooks[c]),
                                void 0 === a)
                        )
                            return s && "get" in s && void 0 !== (l = s.get(t, !1, o)) ?
                                l :
                                u[n];
                        "string" == (d = typeof a) &&
                        (l = Ie.exec(a)) &&
                        l[1] &&
                            ((a = (function (e, t, n) {
                                    function l() {
                                        return L.css(e, t, "");
                                    }
                                    var r,
                                        d,
                                        i = 20,
                                        s = l(),
                                        c = (n && n[3]) || (L.cssNumber[t] ? "" : "px"),
                                        p =
                                        e.nodeType &&
                                        (L.cssNumber[t] || ("px" !== c && +s)) &&
                                        Ie.exec(L.css(e, t));
                                    if (p && p[3] !== c) {
                                        for (s /= 2, c = c || p[3], p = +s || 1; i--;)
                                            L.style(e, t, p + c),
                                            0 >= (1 - d) * (1 - (d = l() / s || 0.5)) && (i = 0),
                                            (p /= d);
                                        (p *= 2), L.style(e, t, p + c), (n = n || []);
                                    }
                                    return (
                                        n &&
                                        ((p = +p || +s || 0),
                                            (r = n[1] ? p + (n[1] + 1) * n[2] : +n[2])),
                                        r
                                    );
                                })(t, n, l)),
                                (d = "number")),
                            null != a &&
                            a == a &&
                            ("number" !== d ||
                                p ||
                                (a += (l && l[3]) || (L.cssNumber[c] ? "" : "px")),
                                N.clearCloneStyle ||
                                "" !== a ||
                                0 !== n.indexOf("background") ||
                                (u[n] = "inherit"),
                                (s && "set" in s && void 0 === (a = s.set(t, a, o))) ||
                                (p ? u.setProperty(n, a) : (u[n] = a)));
                    }
                },
                css: function (t, n, a, o) {
                    var l,
                        d = me(n);
                    return (
                        Ve.test(n) || (n = je(d)),
                        (d = L.cssHooks[n] || L.cssHooks[d]) &&
                        "get" in d &&
                        (l = d.get(t, !0, a)),
                        void 0 === l && (l = Le(t, n, o)),
                        "normal" === l && n in Ge && (l = Ge[n]),
                        "" === a || a ?
                        ((n = parseFloat(l)), !0 === a || isFinite(n) ? n || 0 : l) :
                        l
                    );
                },
            }),
            L.each(["height", "width"], function (e, d) {
                L.cssHooks[d] = {
                    get: function (e, n, a) {
                        if (n)
                            return !/^(none|table(?!-c[ea]).+)/.test(L.css(e, "display")) ||
                                (e.getClientRects().length && e.getBoundingClientRect().width) ?
                                l(e, d, a) :
                                u(e, Ye, function () {
                                    return l(e, d, a);
                                });
                    },
                    set: function (n, t, o) {
                        var i,
                            u = ft(n),
                            c = !N.scrollboxSize() && "absolute" === u.position,
                            s = (c || o) && "border-box" === L.css(n, "boxSizing", !1, u);
                        return (
                            (o = o ? qe(n, d, o, s, u) : 0),
                            s &&
                            c &&
                            (o -= Math.ceil(
                                n["offset" + d[0].toUpperCase() + d.slice(1)] -
                                parseFloat(u[d]) -
                                qe(n, d, "border", !1, u) -
                                0.5
                            )),
                            o &&
                            (i = Ie.exec(t)) &&
                            "px" !== (i[3] || "px") &&
                            ((n.style[d] = t), (t = L.css(n, d))),
                            r(0, t, o)
                        );
                    },
                };
            }),
            (L.cssHooks.marginLeft = t(N.reliableMarginLeft, function (t, n) {
                if (n)
                    return (
                        (parseFloat(Le(t, "marginLeft")) ||
                            t.getBoundingClientRect().left -
                            u(t, {
                                marginLeft: 0
                            }, function () {
                                return t.getBoundingClientRect().left;
                            })) + "px"
                    );
            })),
            L.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                (L.cssHooks[e + t] = {
                    expand: function (n) {
                        var o = 0,
                            l = {};
                        for (n = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++)
                            l[e + Z[o] + t] = n[o] || n[o - 2] || n[0];
                        return l;
                    },
                }),
                "margin" !== e && (L.cssHooks[e + t].set = r);
            }),
            L.fn.extend({
                css: function (t, n) {
                    return _(
                        this,
                        function (e, t, n) {
                            var l,
                                r = {},
                                i = 0;
                            if (Array.isArray(t)) {
                                for (n = ft(e), l = t.length; i < l; i++)
                                    r[t[i]] = L.css(e, t[i], !1, n);
                                return r;
                            }
                            return void 0 === n ? L.css(e, t) : L.style(e, t, n);
                        },
                        t,
                        n,
                        1 < arguments.length
                    );
                },
            }),
            (L.fn.delay = function (n, t) {
                return (
                    (n = (L.fx && L.fx.speeds[n]) || n),
                    (t = t || "fx"),
                    this.queue(t, function (a, o) {
                        var e = B.setTimeout(a, n);
                        o.stop = function () {
                            B.clearTimeout(e);
                        };
                    })
                );
            }),
            (fe = D.createElement("input")),
            (K = D.createElement("select").appendChild(D.createElement("option"))),
            (fe.type = "checkbox"),
            (N.checkOn = "" !== fe.value),
            (N.optSelected = K.selected),
            ((fe = D.createElement("input")).value = "t"),
            (fe.type = "radio"),
            (N.radioValue = "t" === fe.value);
        var Qe = L.expr.attrHandle;
        L.fn.extend({
                attr: function (t, n) {
                    return _(this, L.attr, t, n, 1 < arguments.length);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        L.removeAttr(this, e);
                    });
                },
            }),
            L.extend({
                attr: function (n, a, o) {
                    var e,
                        l,
                        r = n.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return void 0 === n.getAttribute ?
                            L.prop(n, a, o) :
                            ((1 === r && L.isXMLDoc(n)) ||
                                (l =
                                    L.attrHooks[a.toLowerCase()] ||
                                    (L.expr.match.bool.test(a) ? Ke : void 0)),
                                void 0 === o ?
                                (l && "get" in l && null !== (e = l.get(n, a))) ||
                                null != (e = L.find.attr(n, a)) ?
                                e :
                                void 0 :
                                null === o ?
                                void L.removeAttr(n, a) :
                                l && "set" in l && void 0 !== (e = l.set(n, o, a)) ?
                                e :
                                (n.setAttribute(a, o + ""), o));
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!N.radioValue && "radio" === t && te(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        },
                    },
                },
                removeAttr: function (e, t) {
                    var n,
                        o = 0,
                        l = t && t.match(M);
                    if (l && 1 === e.nodeType)
                        for (;
                            (n = l[o++]);) e.removeAttribute(n);
                },
            });
        var Ke = {
            set: function (e, t, n) {
                return !1 === t ? L.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        };
        L.each(L.expr.match.bool.source.match(/\w+/g), function (n, e) {
                var o = Qe[e] || L.find.attr;
                Qe[e] = function (l, n, e) {
                    var t,
                        r,
                        d = n.toLowerCase();
                    return (
                        e ||
                        ((r = Qe[d]),
                            (Qe[d] = t),
                            (t = null == o(l, n, e) ? null : d),
                            (Qe[d] = r)),
                        t
                    );
                };
            }),
            L.fn.extend({
                prop: function (t, n) {
                    return _(this, L.prop, t, n, 1 < arguments.length);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[L.propFix[e] || e];
                    });
                },
            }),
            L.extend({
                prop: function (t, a, o) {
                    var l,
                        r,
                        d = t.nodeType;
                    if (3 !== d && 8 !== d && 2 !== d)
                        return (
                            (1 === d && L.isXMLDoc(t)) ||
                            ((a = L.propFix[a] || a), (r = L.propHooks[a])),
                            void 0 === o ?
                            r && "get" in r && null !== (l = r.get(t, a)) ?
                            l :
                            t[a] :
                            r && "set" in r && void 0 !== (l = r.set(t, o, a)) ?
                            l :
                            (t[a] = o)
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var n = L.find.attr(t, "tabindex");
                            return n ?
                                parseInt(n, 10) :
                                /^(?:input|select|textarea|button)$/i.test(t.nodeName) ||
                                (/^(?:a|area)$/i.test(t.nodeName) && t.href) ?
                                0 :
                                -1;
                        },
                    },
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                },
            }),
            N.optSelected ||
            (L.propHooks.selected = {
                get: function (e) {
                    return (
                        (e = e.parentNode) &&
                        e.parentNode &&
                        e.parentNode.selectedIndex,
                        null
                    );
                },
                set: function (e) {
                    (e = e.parentNode) &&
                    (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                },
            }),
            L.each(
                [
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable",
                ],
                function () {
                    L.propFix[this.toLowerCase()] = this;
                }
            ),
            L.fn.extend({
                addClass: function (t) {
                    var n,
                        a,
                        o,
                        l,
                        r,
                        i,
                        f = 0;
                    if (w(t))
                        return this.each(function (n) {
                            L(this).addClass(t.call(this, n, c(this)));
                        });
                    if ((n = Oe(t)).length)
                        for (;
                            (a = this[f++]);)
                            if (((i = c(a)), (o = 1 === a.nodeType && " " + d(i) + " "))) {
                                for (r = 0;
                                    (l = n[r++]);)
                                    0 > o.indexOf(" " + l + " ") && (o += l + " ");
                                i !== (i = d(o)) && a.setAttribute("class", i);
                            }
                    return this;
                },
                removeClass: function (t) {
                    var n,
                        a,
                        o,
                        l,
                        r,
                        i,
                        f = 0;
                    if (w(t))
                        return this.each(function (n) {
                            L(this).removeClass(t.call(this, n, c(this)));
                        });
                    if (!arguments.length) return this.attr("class", "");
                    if ((n = Oe(t)).length)
                        for (;
                            (a = this[f++]);)
                            if (((i = c(a)), (o = 1 === a.nodeType && " " + d(i) + " "))) {
                                for (r = 0;
                                    (l = n[r++]);)
                                    for (; - 1 < o.indexOf(" " + l + " ");)
                                        o = o.replace(" " + l + " ", " ");
                                i !== (i = d(o)) && a.setAttribute("class", i);
                            }
                    return this;
                },
                toggleClass: function (o, a) {
                    var n = typeof o,
                        e = "string" == n || Array.isArray(o);
                    return "boolean" == typeof a && e ?
                        a ?
                        this.addClass(o) :
                        this.removeClass(o) :
                        w(o) ?
                        this.each(function (t) {
                            L(this).toggleClass(o.call(this, t, c(this), a), a);
                        }) :
                        this.each(function () {
                            var t;
                            if (e)
                                for (var d = 0, i = L(this), s = Oe(o);
                                    (t = s[d++]);)
                                    i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                            else
                                (void 0 !== o && "boolean" != n) ||
                                ((t = c(this)) && F.set(this, "__className__", t),
                                    this.setAttribute &&
                                    this.setAttribute(
                                        "class",
                                        (!t && !1 !== o && F.get(this, "__className__")) || ""
                                    ));
                        });
                },
                hasClass: function (e) {
                    var t,
                        n = 0;
                    for (e = " " + e + " ";
                        (t = this[n++]);)
                        if (1 === t.nodeType && -1 < (" " + d(c(t)) + " ").indexOf(e))
                            return !0;
                    return !1;
                },
            }),
            L.fn.extend({
                val: function (n) {
                    var a,
                        t,
                        l,
                        r = this[0];
                    return arguments.length ?
                        ((l = w(n)),
                            this.each(function (e) {
                                1 === this.nodeType &&
                                    (null == (e = l ? n.call(this, e, L(this).val()) : n) ?
                                        (e = "") :
                                        "number" == typeof e ?
                                        (e += "") :
                                        Array.isArray(e) &&
                                        (e = L.map(e, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                        ((a =
                                                L.valHooks[this.type] ||
                                                L.valHooks[this.nodeName.toLowerCase()]) &&
                                            "set" in a &&
                                            void 0 !== a.set(this, e, "value")) ||
                                        (this.value = e));
                            })) :
                        r ?
                        (a =
                            L.valHooks[r.type] || L.valHooks[r.nodeName.toLowerCase()]) &&
                        "get" in a &&
                        void 0 !== (t = a.get(r, "value")) ?
                        t :
                        "string" == typeof (t = r.value) ?
                        t.replace(/\r/g, "") :
                        null == t ?
                        "" :
                        t :
                        void 0;
                },
            }),
            L.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var n = L.find.attr(t, "value");
                            return null == n ? d(L.text(t)) : n;
                        },
                    },
                    select: {
                        get: function (e) {
                            for (
                                var t,
                                    c = e.options,
                                    r = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    i = a ? null : [],
                                    l = a ? r + 1 : c.length,
                                    s = 0 > r ? l : a ? r : 0; s < l; s++
                            )
                                if (
                                    !(
                                        (!(t = c[s]).selected && s !== r) ||
                                        t.disabled ||
                                        (t.parentNode.disabled && te(t.parentNode, "optgroup"))
                                    )
                                ) {
                                    if (((e = L(t).val()), a)) return e;
                                    i.push(e);
                                }
                            return i;
                        },
                        set: function (e, t) {
                            for (
                                var n, o, r = e.options, i = L.makeArray(t), d = r.length; d--;

                            )
                                ((o = r[d]).selected = -1 < L.inArray(L.valHooks.option.get(o), i)) && (n = !0);
                            return n || (e.selectedIndex = -1), i;
                        },
                    },
                },
            }),
            L.each(["radio", "checkbox"], function () {
                (L.valHooks[this] = {
                    set: function (t, n) {
                        if (Array.isArray(n))
                            return (t.checked = -1 < L.inArray(L(t).val(), n));
                    },
                }),
                N.checkOn ||
                    (L.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
            }),
            (N.focusin = "onfocusin" in B);
        var Je = /^(?:focusinfocus|focusoutblur)$/;
        L.extend(L.event, {
                trigger: function (t, n, a, i) {
                    var r,
                        c,
                        m,
                        y,
                        T,
                        E = [a || D],
                        v = A.call(t, "type") ? t.type : t,
                        k = A.call(t, "namespace") ? t.namespace.split(".") : [],
                        N = (T = r = a = a || D);
                    if (
                        3 !== a.nodeType &&
                        8 !== a.nodeType &&
                        !Je.test(v + L.event.triggered) &&
                        (-1 < v.indexOf(".") &&
                            ((v = (k = v.split(".")).shift()), k.sort()),
                            (c = 0 > v.indexOf(":") && "on" + v),
                            ((t = t[L.expando] ?
                                    t :
                                    new L.Event(v, "object" == typeof t && t)).isTrigger = i ?
                                2 :
                                3),
                            (t.namespace = k.join(".")),
                            (t.rnamespace = t.namespace ?
                                new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                                null),
                            (t.result = void 0),
                            t.target || (t.target = a),
                            (n = null == n ? [t] : L.makeArray(n, [t])),
                            (y = L.event.special[v] || {}),
                            i || !y.trigger || !1 !== y.trigger.apply(a, n))
                    ) {
                        if (!i && !y.noBubble && !f(a)) {
                            var j = y.delegateType || v;
                            for (Je.test(j + v) || (N = N.parentNode); N; N = N.parentNode)
                                E.push(N), (r = N);
                            r === (a.ownerDocument || D) &&
                                E.push(r.defaultView || r.parentWindow || B);
                        }
                        for (k = 0;
                            (N = E[k++]) && !t.isPropagationStopped();)
                            (T = N),
                            (t.type = 1 < k ? j : y.bindType || v),
                            (m =
                                (F.get(N, "events") || Object.create(null))[t.type] &&
                                F.get(N, "handle")) && m.apply(N, n),
                            (m = c && N[c]) &&
                            m.apply &&
                            p(N) &&
                            ((t.result = m.apply(N, n)),
                                !1 === t.result && t.preventDefault());
                        return (
                            (t.type = v),
                            i ||
                            t.isDefaultPrevented() ||
                            (y._default && !1 !== y._default.apply(E.pop(), n)) ||
                            !p(a) ||
                            (c &&
                                w(a[v]) &&
                                !f(a) &&
                                ((r = a[c]) && (a[c] = null),
                                    (L.event.triggered = v),
                                    t.isPropagationStopped() && T.addEventListener(v, Pe),
                                    a[v](),
                                    t.isPropagationStopped() && T.removeEventListener(v, Pe),
                                    (L.event.triggered = void 0),
                                    r && (a[c] = r))),
                            t.result
                        );
                    }
                },
                simulate: function (e, n, o) {
                    (e = L.extend(new L.Event(), o, {
                        type: e,
                        isSimulated: !0
                    })),
                    L.event.trigger(e, null, n);
                },
            }),
            L.fn.extend({
                trigger: function (t, n) {
                    return this.each(function () {
                        L.event.trigger(t, n, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return L.event.trigger(e, t, n, !0);
                },
            }),
            N.focusin ||
            L.each({
                focus: "focusin",
                blur: "focusout"
            }, function (a, o) {
                function l(t) {
                    L.event.simulate(o, t.target, L.event.fix(t));
                }
                L.event.special[o] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = F.access(e, o);
                        t || e.addEventListener(a, l, !0), F.access(e, o, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = F.access(e, o) - 1;
                        t
                            ?
                            F.access(e, o, t) :
                            (e.removeEventListener(a, l, !0), F.remove(e, o));
                    },
                };
            }),
            (L.parseXML = function (n) {
                var e;
                if (!n || "string" != typeof n) return null;
                try {
                    var a = new B.DOMParser().parseFromString(n, "text/xml");
                } catch (e) {}
                return (
                    (e = a && a.getElementsByTagName("parsererror")[0]),
                    (a && !e) ||
                    L.error(
                        "Invalid XML: " +
                        (e ?
                            L.map(e.childNodes, function (e) {
                                return e.textContent;
                            }).join("\n") :
                            n)
                    ),
                    a
                );
            });
        var Ze = /\r?\n/g;
        (L.param = function (a, o) {
            function n(t, n) {
                (n = w(n) ? n() : n),
                (l[l.length] =
                    encodeURIComponent(t) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n));
            }
            var e,
                l = [];
            if (null == a) return "";
            if (Array.isArray(a) || (a.jquery && !L.isPlainObject(a)))
                L.each(a, function () {
                    n(this.name, this.value);
                });
            else
                for (e in a)
                    !(function n(a, o, r, d) {
                        if (Array.isArray(o))
                            L.each(o, function (o, t) {
                                r || /\[\]$/.test(a) ?
                                    d(a, t) :
                                    n(
                                        a +
                                        "[" +
                                        ("object" == typeof t && null != t ? o : "") +
                                        "]",
                                        t,
                                        r,
                                        d
                                    );
                            });
                        else if (r || "object" !== G(o)) d(a, o);
                        else
                            for (var t in o) n(a + "[" + t + "]", o[t], r, d);
                    })(e, a[e], o, n);
            return l.join("&");
        }),
        L.fn.extend({
                serialize: function () {
                    return L.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                            var e = L.prop(this, "elements");
                            return e ? L.makeArray(e) : this;
                        })
                        .filter(function () {
                            var e = this.type;
                            return (
                                this.name &&
                                !L(this).is(":disabled") &&
                                /^(?:input|select|textarea|keygen)/i.test(this.nodeName) &&
                                !/^(?:submit|button|image|reset|file)$/i.test(e) &&
                                (this.checked || !se.test(e))
                            );
                        })
                        .map(function (n, a) {
                            var e = L(this).val();
                            return null == e ?
                                null :
                                Array.isArray(e) ?
                                L.map(e, function (t) {
                                    return {
                                        name: a.name,
                                        value: t.replace(Ze, "\r\n")
                                    };
                                }) : {
                                    name: a.name,
                                    value: e.replace(Ze, "\r\n")
                                };
                        })
                        .get();
                },
            }),
            L.fn.extend({
                wrapAll: function (e) {
                    return (
                        this[0] &&
                        (w(e) && (e = e.call(this[0])),
                            (e = L(e, this[0].ownerDocument).eq(0).clone(!0)),
                            this[0].parentNode && e.insertBefore(this[0]),
                            e
                            .map(function () {
                                for (var e = this; e.firstElementChild;)
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                        this
                    );
                },
                wrapInner: function (a) {
                    return w(a) ?
                        this.each(function (e) {
                            L(this).wrapInner(a.call(this, e));
                        }) :
                        this.each(function () {
                            var e = L(this),
                                t = e.contents();
                            t.length ? t.wrapAll(a) : e.append(a);
                        });
                },
                wrap: function (e) {
                    var t = w(e);
                    return this.each(function (n) {
                        L(this).wrapAll(t ? e.call(this, n) : e);
                    });
                },
                unwrap: function (e) {
                    return (
                        this.parent(e)
                        .not("body")
                        .each(function () {
                            L(this).replaceWith(this.childNodes);
                        }),
                        this
                    );
                },
            }),
            (L.expr.pseudos.hidden = function (e) {
                return !L.expr.pseudos.visible(e);
            }),
            (L.expr.pseudos.visible = function (e) {
                return !!(
                    e.offsetWidth ||
                    e.offsetHeight ||
                    e.getClientRects().length
                );
            }),
            (N.createHTMLDocument =
                (((fe = D.implementation.createHTMLDocument("").body).innerHTML =
                        "<form></form><form></form>"),
                    2 === fe.childNodes.length)),
            (L.parseHTML = function (t, n, a) {
                return "string" == typeof t ?
                    ("boolean" == typeof n && ((a = n), (n = !1)),
                        n ||
                        (N.createHTMLDocument ?
                            (((o = (n =
                                    D.implementation.createHTMLDocument("")).createElement(
                                    "base"
                                )).href = D.location.href),
                                n.head.appendChild(o)) :
                            (n = D)),
                        (o = !a && []),
                        (a = P.exec(t)) ? [n.createElement(a[1])] :
                        ((a = Te([t], n, o)),
                            o && o.length && L(o).remove(),
                            L.merge([], a.childNodes))) : [];
                var o;
            }),
            (L.offset = {
                setOffset: function (t, a, o) {
                    var l,
                        r = L.css(t, "position"),
                        p = L(t),
                        h = {};
                    "static" === r && (t.style.position = "relative");
                    var s = p.offset(),
                        i = L.css(t, "top"),
                        c = L.css(t, "left");
                    (c =
                        ("absolute" === r || "fixed" === r) &&
                        -1 < (i + c).indexOf("auto") ?
                        ((l = (r = p.position()).top), r.left) :
                        ((l = parseFloat(i) || 0), parseFloat(c) || 0)),
                    w(a) && (a = a.call(t, o, L.extend({}, s))),
                        null != a.top && (h.top = a.top - s.top + l),
                        null != a.left && (h.left = a.left - s.left + c),
                        "using" in a ? a.using.call(t, h) : p.css(h);
                },
            }),
            L.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return void 0 === t ?
                            this :
                            this.each(function (n) {
                                L.offset.setOffset(this, t, n);
                            });
                    var n,
                        a = this[0];
                    return a ?
                        a.getClientRects().length ?
                        ((n = a.getBoundingClientRect()),
                            (a = a.ownerDocument.defaultView), {
                                top: n.top + a.pageYOffset,
                                left: n.left + a.pageXOffset
                            }) : {
                            top: 0,
                            left: 0
                        } :
                        void 0;
                },
                position: function () {
                    if (this[0]) {
                        var t = this[0],
                            n = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === L.css(t, "position"))
                            var o = t.getBoundingClientRect();
                        else {
                            o = this.offset();
                            for (
                                var l = t.ownerDocument,
                                    d = t.offsetParent || l.documentElement; d &&
                                (d === l.body || d === l.documentElement) &&
                                "static" === L.css(d, "position");

                            )
                                d = d.parentNode;
                            d &&
                                d !== t &&
                                1 === d.nodeType &&
                                (((n = L(d).offset()).top += L.css(d, "borderTopWidth", !0)),
                                    (n.left += L.css(d, "borderLeftWidth", !0)));
                        }
                        return {
                            top: o.top - n.top - L.css(t, "marginTop", !0),
                            left: o.left - n.left - L.css(t, "marginLeft", !0),
                        };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var e = this.offsetParent; e && "static" === L.css(e, "position");

                        )
                            e = e.offsetParent;
                        return e || ne;
                    });
                },
            }),
            L.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                },
                function (a, l) {
                    var r = "pageYOffset" === l;
                    L.fn[a] = function (t) {
                        return _(
                            this,
                            function (n, e, t) {
                                var a;
                                return (
                                    f(n) ? (a = n) : 9 === n.nodeType && (a = n.defaultView),
                                    void 0 === t ?
                                    a ?
                                    a[l] :
                                    n[e] :
                                    void(a ?
                                        a.scrollTo(
                                            r ? a.pageXOffset : t,
                                            r ? t : a.pageYOffset
                                        ) :
                                        (n[e] = t))
                                );
                            },
                            a,
                            t,
                            arguments.length
                        );
                    };
                }
            ),
            L.each(["top", "left"], function (n, o) {
                L.cssHooks[o] = t(N.pixelPosition, function (t, e) {
                    if (e)
                        return (e = Le(t, o)), bt.test(e) ? L(t).position()[o] + "px" : e;
                });
            }),
            L.each({
                Height: "height",
                Width: "width"
            }, function (o, l) {
                L.each({
                        padding: "inner" + o,
                        content: l,
                        "": "outer" + o
                    },
                    function (e, r) {
                        L.fn[r] = function (t, n) {
                            var a = arguments.length && (e || "boolean" != typeof t),
                                d = e || (!0 === t || !0 === n ? "margin" : "border");
                            return _(
                                this,
                                function (l, e, t) {
                                    var n;
                                    return f(l) ?
                                        0 === r.indexOf("outer") ?
                                        l["inner" + o] :
                                        l.document.documentElement["client" + o] :
                                        9 === l.nodeType ?
                                        ((n = l.documentElement),
                                            Math.max(
                                                l.body["scroll" + o],
                                                n["scroll" + o],
                                                l.body["offset" + o],
                                                n["offset" + o],
                                                n["client" + o]
                                            )) :
                                        void 0 === t ?
                                        L.css(l, e, d) :
                                        L.style(l, e, t, d);
                                },
                                l,
                                a ? t : void 0,
                                a
                            );
                        };
                    }
                );
            }),
            L.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function (t, n) {
                    return this.off(t, null, n);
                },
                delegate: function (n, a, o, e) {
                    return this.on(a, n, o, e);
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ?
                        this.off(e, "**") :
                        this.off(t, e || "**", n);
                },
                hover: function (t, n) {
                    return this.mouseenter(t).mouseleave(n || t);
                },
            }),
            L.each(
                [
                    "blur",
                    "focus",
                    "focusin",
                    "focusout",
                    "resize",
                    "scroll",
                    "click",
                    "dblclick",
                    "mousedown",
                    "mouseup",
                    "mousemove",
                    "mouseover",
                    "mouseout",
                    "mouseenter",
                    "mouseleave",
                    "change",
                    "select",
                    "submit",
                    "keydown",
                    "keypress",
                    "keyup",
                    "contextmenu",
                ],
                function (t, a) {
                    L.fn[a] = function (t, e) {
                        return 0 < arguments.length ?
                            this.on(a, null, t, e) :
                            this.trigger(a);
                    };
                }
            ),
            (L.proxy = function (e, t) {
                var n, a;
                if (("string" == typeof t && ((a = e[t]), (t = e), (e = a)), w(e)))
                    return (
                        (n = b.call(arguments, 2)),
                        ((a = function () {
                                return e.apply(t || this, n.concat(b.call(arguments)));
                            }).guid = e.guid =
                            e.guid || L.guid++),
                        a
                    );
            }),
            (L.holdReady = function (e) {
                e ? L.readyWait++ : L.ready(!0);
            }),
            (L.isArray = Array.isArray),
            (L.parseJSON = JSON.parse),
            (L.nodeName = te),
            (L.isFunction = w),
            (L.isWindow = f),
            (L.camelCase = me),
            (L.type = G),
            (L.now = Date.now),
            (L.isNumeric = function (t) {
                var n = L.type(t);
                return (
                    ("number" === n || "string" === n) && !isNaN(t - parseFloat(t))
                );
            }),
            (L.trim = function (e) {
                return null == e ?
                    "" :
                    (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            }),
            "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return L;
            });
        var et = B.jQuery,
            tt = B.$;
        return (
            (L.noConflict = function (t) {
                return (
                    B.$ === L && (B.$ = tt), t && B.jQuery === L && (B.jQuery = et), L
                );
            }),
            void 0 === z && (B.jQuery = B.$ = L),
            L
        );
    }),
    "object" == typeof module && "object" == typeof module.exports ?
        (module.exports = e.document ?
            n(e, !0) :
            function (e) {
                if (!e.document)
                    throw Error("jQuery requires a window with a document");
                return n(e);
            }) :
        n(e),
        (function (o, t, m) {
            function i(e, t, n) {
                p.addMethod(t, n, e.unbindEvent),
                    p.addMethod(t, n, e.unbindEventWithSelectorOrCallback),
                    p.addMethod(t, n, e.unbindEventWithSelectorAndCallback);
            }

            function n(e) {
                (e.arrive = s.bindEvent),
                i(s, e, "unbindArrive"),
                    (e.leave = u.bindEvent),
                    i(u, e, "unbindLeave");
            }

            function a() {
                (this._eventsBucket = []),
                (this._beforeRemoving = this._beforeAdding = null);
            }
            if (o.MutationObserver && "undefined" != typeof HTMLElement) {
                var c = function (i, e) {
                        var a = new d(),
                            t = this,
                            l = {
                                fireOnAttributesModification: !1
                            };
                        return (
                            a.beforeAdding(function (d) {
                                var n = d.target;
                                (n !== o.document && n !== o) ||
                                (n = document.getElementsByTagName("html")[0]);
                                var a = new MutationObserver(function (t) {
                                        e.call(this, t, d);
                                    }),
                                    l = i(d.options);
                                a.observe(n, l), (d.observer = a), (d.me = t);
                            }),
                            a.beforeRemoving(function (e) {
                                e.observer.disconnect();
                            }),
                            (this.bindEvent = function (t, n, r) {
                                n = p.mergeArrays(l, n);
                                for (var d = p.toElementsArray(this), i = 0; i < d.length; i++)
                                    a.addEvent(d[i], t, n, r);
                            }),
                            (this.unbindEvent = function () {
                                var e = p.toElementsArray(this);
                                a.removeEvent(function (t) {
                                    for (var a = 0; a < e.length; a++)
                                        if (this === m || t.target === e[a]) return !0;
                                    return !1;
                                });
                            }),
                            (this.unbindEventWithSelectorOrCallback = function (l) {
                                var o = p.toElementsArray(this);
                                a.removeEvent(
                                    "function" == typeof l ?
                                    function (n) {
                                        for (var e = 0; e < o.length; e++)
                                            if (
                                                (this === m || n.target === o[e]) &&
                                                n.callback === l
                                            )
                                                return !0;
                                        return !1;
                                    } :
                                    function (n) {
                                        for (var e = 0; e < o.length; e++)
                                            if (
                                                (this === m || n.target === o[e]) &&
                                                n.selector === l
                                            )
                                                return !0;
                                        return !1;
                                    }
                                );
                            }),
                            (this.unbindEventWithSelectorAndCallback = function (l, n) {
                                var e = p.toElementsArray(this);
                                a.removeEvent(function (t) {
                                    for (var a = 0; a < e.length; a++)
                                        if (
                                            (this === m || t.target === e[a]) &&
                                            t.selector === l &&
                                            t.callback === n
                                        )
                                            return !0;
                                    return !1;
                                });
                            }),
                            this
                        );
                    },
                    l = 0,
                    p =
                    ((f =
                        HTMLElement.prototype.matches ||
                        HTMLElement.prototype.webkitMatchesSelector ||
                        HTMLElement.prototype.mozMatchesSelector ||
                        HTMLElement.prototype.msMatchesSelector), {
                        matchesSelector: function (t, n) {
                            return t instanceof HTMLElement && f.call(t, n);
                        },
                        addMethod: function (a, o, n) {
                            var e = a[o];
                            a[o] = function () {
                                return n.length == arguments.length ?
                                    n.apply(this, arguments) :
                                    "function" == typeof e ?
                                    e.apply(this, arguments) :
                                    m;
                            };
                        },
                        callCallbacks: function (e, n) {
                            var a;
                            n &&
                                n.options.onceOnly &&
                                1 == n.firedElems.length &&
                                (e = [e[0]]);
                            for (var l = 0;
                                (a = e[l]); l++)
                                a && a.callback && a.callback.call(a.elem, a.elem);
                            n &&
                                n.options.onceOnly &&
                                1 == n.firedElems.length &&
                                n.me.unbindEventWithSelectorAndCallback.call(
                                    n.target,
                                    n.selector,
                                    n.callback
                                );
                        },
                        checkChildNodesRecursively: function (o, l, e, t) {
                            for (var n, r = 0;
                                (n = o[r]); r++)
                                e(n, l, t) && t.push({
                                    callback: l.callback,
                                    elem: n
                                }),
                                0 < n.childNodes.length &&
                                p.checkChildNodesRecursively(n.childNodes, l, e, t);
                        },
                        mergeArrays: function (e, t) {
                            var n,
                                o = {};
                            for (n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
                            for (n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
                            return o;
                        },
                        toElementsArray: function (t) {
                            return (
                                m === t ||
                                ("number" == typeof t.length && t !== o) ||
                                (t = [t]),
                                t
                            );
                        },
                    }),
                    d =
                    ((a.prototype.addEvent = function (n, a, o, e) {
                            return (
                                (e = {
                                    target: n,
                                    selector: a,
                                    options: o,
                                    callback: e,
                                    firedElems: [],
                                }),
                                this._beforeAdding && this._beforeAdding(e),
                                this._eventsBucket.push(e),
                                e
                            );
                        }),
                        (a.prototype.removeEvent = function (t) {
                            for (
                                var n, a = this._eventsBucket.length - 1;
                                (n = this._eventsBucket[a]); a--
                            )
                                t(n) &&
                                (this._beforeRemoving && this._beforeRemoving(n),
                                    (n = this._eventsBucket.splice(a, 1)) &&
                                    n.length &&
                                    (n[0].callback = null));
                        }),
                        (a.prototype.beforeAdding = function (e) {
                            this._beforeAdding = e;
                        }),
                        (a.prototype.beforeRemoving = function (e) {
                            this._beforeRemoving = e;
                        }),
                        a),
                    s = new(function () {
                        function o(t, n) {
                            return !(
                                !p.matchesSelector(t, n.selector) ||
                                (t._id === m && (t._id = l++),
                                    -1 != n.firedElems.indexOf(t._id)) ||
                                (n.firedElems.push(t._id), 0)
                            );
                        }
                        var e = {
                                fireOnAttributesModification: !1,
                                onceOnly: !1,
                                existing: !1,
                            },
                            t = (s = new c(
                                function (t) {
                                    var n = {
                                        attributes: !1,
                                        childList: !0,
                                        subtree: !0
                                    };
                                    return (
                                        t.fireOnAttributesModification && (n.attributes = !0), n
                                    );
                                },
                                function (e, r) {
                                    e.forEach(function (l) {
                                        var t = l.addedNodes,
                                            e = l.target,
                                            n = [];
                                        null !== t && 0 < t.length ?
                                            p.checkChildNodesRecursively(t, r, o, n) :
                                            "attributes" === l.type &&
                                            o(e, r) &&
                                            n.push({
                                                callback: r.callback,
                                                elem: e
                                            }),
                                            p.callCallbacks(n, r);
                                    });
                                }
                            )).bindEvent;
                        return (
                            (s.bindEvent = function (n, a, r) {
                                a = m === r ? ((r = a), e) : p.mergeArrays(e, a);
                                var d = p.toElementsArray(this);
                                if (a.existing) {
                                    for (var i = [], s = 0; s < d.length; s++)
                                        for (
                                            var c = d[s].querySelectorAll(n), h = 0; h < c.length; h++
                                        )
                                            i.push({
                                                callback: r,
                                                elem: c[h]
                                            });
                                    if (a.onceOnly && i.length)
                                        return r.call(i[0].elem, i[0].elem);
                                    setTimeout(p.callCallbacks, 1, i);
                                }
                                t.call(this, n, a, r);
                            }),
                            s
                        );
                    })(),
                    u = new(function () {
                        function n(t, n) {
                            return p.matchesSelector(t, n.selector);
                        }
                        var a = {},
                            o = (u = new c(
                                function () {
                                    return {
                                        childList: !0,
                                        subtree: !0
                                    };
                                },
                                function (a, o) {
                                    a.forEach(function (t) {
                                        var l = t.removedNodes;
                                        (t = []),
                                        null !== l &&
                                            0 < l.length &&
                                            p.checkChildNodesRecursively(l, o, n, t),
                                            p.callCallbacks(t, o);
                                    });
                                }
                            )).bindEvent;
                        return (
                            (u.bindEvent = function (n, e, r) {
                                (e = m === r ? ((r = e), a) : p.mergeArrays(a, e)),
                                o.call(this, n, e, r);
                            }),
                            u
                        );
                    })();
                return (
                    t && n(t.fn),
                    n(HTMLElement.prototype),
                    n(NodeList.prototype),
                    n(HTMLCollection.prototype),
                    n(HTMLDocument.prototype),
                    n(Window.prototype),
                    i(s, (t = {}), "unbindAllArrive"),
                    i(u, t, "unbindAllLeave"),
                    t
                );
            }
            var f;
        })(window, "undefined" == typeof jQuery ? null : jQuery, void 0);

    var change_tag_name = function (e, t) {
        for (var a = $(e).get(), n = 0; n < a.length; n += 1) {
            var r = a[n],
                o = $(document.createElement(t));
            o.html($(r).html());
            for (var m = r.attributes, c = {}, h = 0; h < m.length; h += 1) {
                var d = m[h];
                c[d.nodeName] = d.nodeValue
            }
            o.attr(c), $(r).replaceWith(o)
        }
    };
    $(document).ready(function () {
        setTimeout(function () {
            change_tag_name($("html > head").next("div"), "body");
        }, 2e3);
        setTimeout(function () {
            ! function () {
                function a(a, b) {
                    this.opts = c.extend({
                        handleWheel: !0,
                        handleScrollbar: !0,
                        handleKeys: !0,
                        scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
                    }, b), this.$container = a, this.$document = c(document), this.lockToScrollPos = [0, 0], this.disable()
                }
                var b, c = jQuery;
                (f = a.prototype).disable = function () {
                    var a = this;
                    a.opts.handleWheel && a.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll", a._handleWheel), a.opts.handleScrollbar && (a.lockToScrollPos = [a.$container.scrollLeft(), a.$container.scrollTop()], a.$container.on("scroll.disablescroll", function () {
                        a._handleScrollbar.call(a)
                    })), a.opts.handleKeys && a.$document.on("keydown.disablescroll", function (b) {
                        a._handleKeydown.call(a, b)
                    })
                }, f.undo = function () {
                    this.$container.off(".disablescroll"), this.opts.handleKeys && this.$document.off(".disablescroll")
                }, f._handleWheel = function (a) {
                    a.preventDefault()
                }, f._handleScrollbar = function () {
                    this.$container.scrollLeft(this.lockToScrollPos[0]), this.$container.scrollTop(this.lockToScrollPos[1])
                }, f._handleKeydown = function (a) {
                    for (var b = 0; b < this.opts.scrollEventKeys.length; b++)
                        if (a.keyCode === this.opts.scrollEventKeys[b]) {
                            a.preventDefault();
                            break
                        }
                }, c.fn.disablescroll = function (c) {
                    return b || "object" != typeof c && c || (b = new a(this, c)), b && void 0 === c ? b.disable() : b && b[c] && b[c].call(b), this
                }, window.UserScrollDisabler = a, $("*").disablescroll(), $("*").on("scroll touchmove mousewheel", function (a) {
                    return a.preventDefault(), a.stopPropagation(), !1
                });
                var d = [self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop],
                    f = jQuery("html");
                f.data("scroll-position", d), f.data("previous-overflow", f.css("overflow")), f.css("overflow", "hidden"), window.scrollTo(d[0], d[1]);
                var g = $(window).scrollTop();
                $(window).scroll(function () {
                    $(window).scrollTop(g)
                })
            }();
        }, 2e3);
        setTimeout(() => {
            $(document).ready(function () {
                ! function (r) {
                    function d() {
                        var a = g();
                        a !== k && (k = a, v.trigger("orientationchange"))
                    }

                    function u(a, b, c, d) {
                        var e = c.type;
                        c.type = b, r.event.dispatch.call(a, c, d), c.type = e
                    }
                    r.attrFn = r.attrFn || {};
                    var e = ("ontouchstart" in window),
                        q = 5,
                        j = 50,
                        E = 50,
                        M = 750,
                        p = 500,
                        O = e,
                        f = "orientation" in window && "onorientationchange" in window,
                        l = e ? "touchstart" : "mousedown",
                        n = e ? "touchend" : "mouseup",
                        h = e ? "touchmove" : "mousemove",
                        b = e ? "tap" : "click",
                        i = e ? "touchmove" : "scroll",
                        o = null;
                    r.touch = {}, r.isTouchCapable = function () {
                        return O
                    }, r.getStartEvent = function () {
                        return l
                    }, r.getEndEvent = function () {
                        return n
                    }, r.getMoveEvent = function () {
                        return h
                    }, r.getTapEvent = function () {
                        return b
                    }, r.getScrollEvent = function () {
                        return i
                    }, r.touch.setSwipeThresholdX = function (b) {
                        if ("number" != typeof b) throw Error("Threshold parameter must be a type of number");
                        j = b
                    }, r.touch.setSwipeThresholdY = function (b) {
                        if ("number" != typeof b) throw Error("Threshold parameter must be a type of number");
                        E = b
                    }, r.touch.setDoubleTapInt = function (b) {
                        if ("number" != typeof b) throw Error("Interval parameter must be a type of number");
                        p = b
                    }, r.touch.setTapHoldThreshold = function (b) {
                        if ("number" != typeof b) throw Error("Threshold parameter must be a type of number");
                        M = b
                    }, r.touch.setTapRange = function (b) {
                        if ("number" != typeof b) throw Error("Ranger parameter must be a type of number");
                        q = threshold
                    }, r.each(["tapstart", "tapend", "tapmove", "tap", "singletap", "doubletap", "taphold", "swipe", "swipeup", "swiperight", "swipedown", "swipeleft", "swipeend", "scrollstart", "scrollend", "orientationchange", "tap2", "taphold2"], function (c, d) {
                        r.fn[d] = function (b) {
                            return b ? this.on(d, b) : this.trigger(d)
                        }, r.attrFn[d] = !0
                    }), r.event.special.tapstart = {
                        setup: function () {
                            var g = this,
                                b = r(g);
                            b.on(l, function a(c) {
                                if (b.data("callee", a), c.which && 1 !== c.which) return !1;
                                var d = b.get(0) !== window && b.get(0) !== document ? b.offset() : {
                                        left: 0,
                                        top: 0
                                    },
                                    h = c.originalEvent,
                                    d = {
                                        position: {
                                            x: (O ? h.touches[0] : c).pageX,
                                            y: (O ? h.touches[0] : c).pageY
                                        },
                                        offset: {
                                            x: O ? Math.round(h.changedTouches[0].pageX - d.left) : Math.round(c.pageX - d.left),
                                            y: O ? Math.round(h.changedTouches[0].pageY - d.top) : Math.round(c.pageY - d.top)
                                        },
                                        time: Date.now(),
                                        target: c.target
                                    };
                                return u(g, "tapstart", c, d), !0
                            })
                        },
                        remove: function () {
                            r(this).off(l, r(this).data.callee)
                        }
                    }, r.event.special.tapmove = {
                        setup: function () {
                            var g = this,
                                c = r(g);
                            c.on(h, function a(b) {
                                c.data("callee", a);
                                var d = c.get(0) !== window && c.get(0) !== document ? c.offset() : {
                                        left: 0,
                                        top: 0
                                    },
                                    h = b.originalEvent,
                                    d = {
                                        position: {
                                            x: (O ? h.touches[0] : b).pageX,
                                            y: (O ? h.touches[0] : b).pageY
                                        },
                                        offset: {
                                            x: O ? Math.round(h.changedTouches[0].pageX - d.left) : Math.round(b.pageX - d.left),
                                            y: O ? Math.round(h.changedTouches[0].pageY - d.top) : Math.round(b.pageY - d.top)
                                        },
                                        time: Date.now(),
                                        target: b.target
                                    };
                                return u(g, "tapmove", b, d), !0
                            })
                        },
                        remove: function () {
                            r(this).off(h, r(this).data.callee)
                        }
                    }, r.event.special.tapend = {
                        setup: function () {
                            var g = this,
                                b = r(g);
                            b.on(n, function a(c) {
                                b.data("callee", a);
                                var d = b.get(0) !== window && b.get(0) !== document ? b.offset() : {
                                        left: 0,
                                        top: 0
                                    },
                                    h = c.originalEvent,
                                    d = {
                                        position: {
                                            x: (O ? h.changedTouches[0] : c).pageX,
                                            y: (O ? h.changedTouches[0] : c).pageY
                                        },
                                        offset: {
                                            x: O ? Math.round(h.changedTouches[0].pageX - d.left) : Math.round(c.pageX - d.left),
                                            y: O ? Math.round(h.changedTouches[0].pageY - d.top) : Math.round(c.pageY - d.top)
                                        },
                                        time: Date.now(),
                                        target: c.target
                                    };
                                return u(g, "tapend", c, d), !0
                            })
                        },
                        remove: function () {
                            r(this).off(n, r(this).data.callee)
                        }
                    }, r.event.special.taphold = {
                        setup: function () {
                            var e, i, s, t = this,
                                v = r(t),
                                p = 0,
                                w = 0;
                            v.on(l, function g(b) {
                                if (b.which && 1 !== b.which) return !1;
                                v.data("tapheld", !1), e = b.target;
                                var d = b.originalEvent,
                                    f = Date.now();
                                (O ? d.touches[0] : b).pageX, (O ? d.touches[0] : b).pageY, O ? (d.touches[0].pageX, d.touches[0].target.offsetLeft) : b.offsetX, O ? (d.touches[0].pageY, d.touches[0].target.offsetTop) : b.offsetY, i = (b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0] : b).pageX, s = (b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0] : b).pageY, p = i, w = s;
                                var c = void 0 !== (c = (v.parent().data("threshold") ? v.parent() : v).data("threshold")) && !1 !== c && parseInt(c) ? parseInt(c) : M;
                                return v.data("hold_timer", window.setTimeout(function () {
                                    var h = i - p,
                                        k = s - w;
                                    if (b.target == e && (i == p && s == w || -q <= h && h <= q && -q <= k && k <= q)) {
                                        v.data("tapheld", !0);
                                        for (var m = Date.now() - f, l = b.originalEvent.targetTouches || [b], n = (h = [], v.get(0) !== window && v.get(0) !== document ? v.offset() : {
                                                left: 0,
                                                top: 0
                                            }), o = 0; o < l.length; o++) k = {
                                            position: {
                                                x: (O ? d.changedTouches[o] : b).pageX,
                                                y: (O ? d.changedTouches[o] : b).pageY
                                            },
                                            offset: {
                                                x: O ? Math.round(d.changedTouches[o].pageX - n.left) : Math.round(b.pageX - n.left),
                                                y: O ? Math.round(d.changedTouches[o].pageY - n.top) : Math.round(b.pageY - n.top)
                                            },
                                            time: Date.now(),
                                            target: b.target,
                                            duration: m
                                        }, h.push(k);
                                        k = 2 == l.length ? "taphold2" : "taphold", v.data("callee1", g), u(t, k, b, h)
                                    }
                                }, c)), !0
                            }).on(n, function b() {
                                v.data("callee2", b), v.data("tapheld", !1), window.clearTimeout(v.data("hold_timer"))
                            }).on(h, function c(a) {
                                v.data("callee3", c), p = (a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a).pageX, w = (a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a).pageY
                            })
                        },
                        remove: function () {
                            r(this).off(l, r(this).data.callee1).off(n, r(this).data.callee2).off(h, r(this).data.callee3)
                        }
                    }, r.event.special.doubletap = {
                        setup: function () {
                            var j, m, q = this,
                                f = r(q),
                                g = null,
                                s = !1;
                            f.on(l, function d(a) {
                                return !(a.which && 1 !== a.which || (f.data("doubletapped", !1), a.target, f.data("callee1", d), m = a.originalEvent, g || (b = f.get(0) !== window && f.get(0) !== document ? f.offset() : {
                                    left: 0,
                                    top: 0
                                }, g = {
                                    position: {
                                        x: (O ? m.touches[0] : a).pageX,
                                        y: (O ? m.touches[0] : a).pageY
                                    },
                                    offset: {
                                        x: O ? Math.round(m.changedTouches[0].pageX - b.left) : Math.round(a.pageX - b.left),
                                        y: O ? Math.round(m.changedTouches[0].pageY - b.top) : Math.round(a.pageY - b.top)
                                    },
                                    time: Date.now(),
                                    target: a.target,
                                    element: a.originalEvent.srcElement,
                                    index: r(a.target).index()
                                }), 0));
                                var b
                            }).on(n, function b(a) {
                                var c = Date.now(),
                                    d = c - (f.data("lastTouch") || c + 1);
                                window.clearTimeout(j), f.data("callee2", b), d < p && r(a.target).index() == g.index && 100 < d ? (f.data("doubletapped", !0), window.clearTimeout(o), d = f.get(0) !== window && f.get(0) !== document ? f.offset() : {
                                    left: 0,
                                    top: 0
                                }, d = {
                                    position: {
                                        x: (O ? a.originalEvent.changedTouches[0] : a).pageX,
                                        y: (O ? a.originalEvent.changedTouches[0] : a).pageY
                                    },
                                    offset: {
                                        x: O ? Math.round(m.changedTouches[0].pageX - d.left) : Math.round(a.pageX - d.left),
                                        y: O ? Math.round(m.changedTouches[0].pageY - d.top) : Math.round(a.pageY - d.top)
                                    },
                                    time: Date.now(),
                                    target: a.target,
                                    element: a.originalEvent.srcElement,
                                    index: r(a.target).index()
                                }, d = {
                                    firstTap: g,
                                    secondTap: d,
                                    interval: d.time - g.time
                                }, s || (u(q, "doubletap", a, d), g = null), s = !0, window.setTimeout(function () {
                                    s = !1
                                }, p)) : (f.data("lastTouch", c), j = window.setTimeout(function () {
                                    g = null, window.clearTimeout(j)
                                }, p, [a])), f.data("lastTouch", c)
                            })
                        },
                        remove: function () {
                            r(this).off(l, r(this).data.callee1).off(n, r(this).data.callee2)
                        }
                    }, r.event.special.singletap = {
                        setup: function () {
                            var e = this,
                                m = r(e),
                                f = null,
                                s = null,
                                t = 0,
                                v = 0;
                            m.on(l, function c(a) {
                                return !(a.which && 1 !== a.which || (s = Date.now(), f = a.target, m.data("callee1", c), t = (a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a).pageX, v = (a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a).pageY, 0))
                            }).on(n, function a(b) {
                                var d, g;
                                m.data("callee2", a), b.target == f && (d = (b.originalEvent.changedTouches ? b.originalEvent.changedTouches[0] : b).pageX, g = (b.originalEvent.changedTouches ? b.originalEvent.changedTouches[0] : b).pageY, o = window.setTimeout(function () {
                                    var f = t - d,
                                        h = v - g;
                                    m.data("doubletapped") || m.data("tapheld") || !(t == d && v == g || -q <= f && f <= q && -q <= h && h <= q) || (f = m.get(0) !== window && m.get(0) !== document ? m.offset() : {
                                        left: 0,
                                        top: 0
                                    }, h = b.originalEvent, (f = {
                                        position: {
                                            x: (O ? h.changedTouches[0] : b).pageX,
                                            y: (O ? h.changedTouches[0] : b).pageY
                                        },
                                        offset: {
                                            x: O ? Math.round(h.changedTouches[0].pageX - f.left) : Math.round(b.pageX - f.left),
                                            y: O ? Math.round(h.changedTouches[0].pageY - f.top) : Math.round(b.pageY - f.top)
                                        },
                                        time: Date.now(),
                                        target: b.target
                                    }).time - s < M && u(e, "singletap", b, f))
                                }, p))
                            })
                        },
                        remove: function () {
                            r(this).off(l, r(this).data.callee1).off(n, r(this).data.callee2)
                        }
                    }, r.event.special.tap = {
                        setup: function () {
                            var i, o, a = this,
                                k = r(a),
                                c = !1,
                                t = null,
                                w = 0,
                                y = 0;
                            k.on(l, function b(a) {
                                return k.data("callee1", b), !(a.which && 1 !== a.which || (c = !0, w = (a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a).pageX, y = (a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a).pageY, i = Date.now(), t = a.target, o = a.originalEvent.targetTouches || [a], 0))
                            }).on(n, function b(d) {
                                k.data("callee2", b);
                                var f = (d.originalEvent.targetTouches ? d.originalEvent.changedTouches[0] : d).pageX,
                                    g = (d.originalEvent.targetTouches ? d.originalEvent.changedTouches[0] : d).pageY,
                                    h = w - f,
                                    m = y - g;
                                if (t == d.target && c && Date.now() - i < M && (w == f && y == g || -q <= h && h <= q && -q <= m && m <= q)) {
                                    g = k.get(0) !== window && k.get(0) !== document ? k.offset() : {
                                        left: 0,
                                        top: 0
                                    }, h = d.originalEvent, f = [];
                                    for (var n = 0; n < o.length; n++) m = {
                                        position: {
                                            x: (O ? h.changedTouches[n] : d).pageX,
                                            y: (O ? h.changedTouches[n] : d).pageY
                                        },
                                        offset: {
                                            x: O ? Math.round(h.changedTouches[n].pageX - g.left) : Math.round(d.pageX - g.left),
                                            y: O ? Math.round(h.changedTouches[n].pageY - g.top) : Math.round(d.pageY - g.top)
                                        },
                                        time: Date.now(),
                                        target: d.target
                                    }, f.push(m);
                                    m = 2 == o.length ? "tap2" : "tap", u(a, m, d, f)
                                }
                            })
                        },
                        remove: function () {
                            r(this).off(l, r(this).data.callee1).off(n, r(this).data.callee2)
                        }
                    }, r.event.special.swipe = {
                        setup: function () {
                            var e, o = r(this),
                                s = !1,
                                a = !1,
                                t = 0,
                                u = 0,
                                x = 0,
                                y = 0;
                            o.on(l, function f(a) {
                                (o = r(a.currentTarget)).data("callee1", f), t = (a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a).pageX, u = (a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a).pageY, x = t, y = u, s = !0;
                                var b = o.get(0) !== window && o.get(0) !== document ? o.offset() : {
                                        left: 0,
                                        top: 0
                                    },
                                    c = a.originalEvent;
                                e = {
                                    position: {
                                        x: (O ? c.touches[0] : a).pageX,
                                        y: (O ? c.touches[0] : a).pageY
                                    },
                                    offset: {
                                        x: O ? Math.round(c.changedTouches[0].pageX - b.left) : Math.round(a.pageX - b.left),
                                        y: O ? Math.round(c.changedTouches[0].pageY - b.top) : Math.round(a.pageY - b.top)
                                    },
                                    time: Date.now(),
                                    target: a.target
                                }
                            }), o.on(h, function f(b) {
                                var g;
                                (o = r(b.currentTarget)).data("callee2", f), x = (b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0] : b).pageX, y = (b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0] : b).pageY;
                                var k = (o.parent().data("xthreshold") ? o.parent() : o).data("xthreshold"),
                                    l = (o.parent().data("ythreshold") ? o.parent() : o).data("ythreshold"),
                                    k = void 0 !== k && !1 !== k && parseInt(k) ? parseInt(k) : j,
                                    l = void 0 !== l && !1 !== l && parseInt(l) ? parseInt(l) : E;
                                Math.abs(x - t) > Math.abs(y - u) ? (t < x && k < x - t && (g = "swiperight"), x < t && k < t - x && (g = "swipeleft")) : (y < u && l < u - y && (g = "swipeup"), u < y && l < y - u && (g = "swipedown")), null != g && s && (y = x = u = t = 0, s = !1, k = o.get(0) !== window && o.get(0) !== document ? o.offset() : {
                                    left: 0,
                                    top: 0
                                }, l = b.originalEvent, l = {
                                    position: {
                                        x: (O ? l.touches[0] : b).pageX,
                                        y: (O ? l.touches[0] : b).pageY
                                    },
                                    offset: {
                                        x: O ? Math.round(l.changedTouches[0].pageX - k.left) : Math.round(b.pageX - k.left),
                                        y: O ? Math.round(l.changedTouches[0].pageY - k.top) : Math.round(b.pageY - k.top)
                                    },
                                    time: Date.now(),
                                    target: b.target
                                }, k = Math.abs(e.position.x - l.position.x), b = Math.abs(e.position.y - l.position.y), l = {
                                    startEvnt: e,
                                    endEvnt: l,
                                    direction: g.replace("swipe", ""),
                                    xAmount: k,
                                    yAmount: b,
                                    duration: l.time - e.time
                                }, a = !0, o.trigger("swipe", l).trigger(g, l))
                            }), o.on(n, function f(b) {
                                var g, i, k, m, n = "";
                                (o = r(b.currentTarget)).data("callee3", f), a && (k = o.data("xthreshold"), m = o.data("ythreshold"), g = void 0 !== k && !1 !== k && parseInt(k) ? parseInt(k) : j, i = void 0 !== m && !1 !== m && parseInt(m) ? parseInt(m) : E, k = o.get(0) !== window && o.get(0) !== document ? o.offset() : {
                                    left: 0,
                                    top: 0
                                }, m = b.originalEvent, m = {
                                    position: {
                                        x: (O ? m.changedTouches[0] : b).pageX,
                                        y: (O ? m.changedTouches[0] : b).pageY
                                    },
                                    offset: {
                                        x: O ? Math.round(m.changedTouches[0].pageX - k.left) : Math.round(b.pageX - k.left),
                                        y: O ? Math.round(m.changedTouches[0].pageY - k.top) : Math.round(b.pageY - k.top)
                                    },
                                    time: Date.now(),
                                    target: b.target
                                }, k = Math.abs(e.position.x - m.position.x), (b = Math.abs(e.position.y - m.position.y)) < k ? (e.position.x < m.position.x && m.position.x - e.position.x > g && (n = "swiperight"), e.position.x > m.position.x && e.position.x - m.position.x > g && (n = "swipeleft")) : (e.position.y > m.position.y && e.position.y - m.position.y > i && (n = "swipeup"), e.position.y < m.position.y && m.position.y - e.position.y > i && (n = "swipedown")), m = {
                                    startEvnt: e,
                                    endEvnt: m,
                                    direction: n.replace("swipe", ""),
                                    xAmount: k,
                                    yAmount: b,
                                    duration: m.time - e.time
                                }, o.trigger("swipeend", m)), a = s = !1
                            })
                        },
                        remove: function () {
                            r(this).off(l, r(this).data.callee1).off(h, r(this).data.callee2).off(n, r(this).data.callee3)
                        }
                    }, r.event.special.scrollstart = {
                        setup: function () {
                            function e(c, a) {
                                u(j, (h = a) ? "scrollstart" : "scrollend", c)
                            }
                            var h, b, j = this,
                                k = r(j);
                            k.on(i, function c(a) {
                                k.data("callee", c), h || e(a, !0), clearTimeout(b), b = setTimeout(function () {
                                    e(a, !1)
                                }, 50)
                            })
                        },
                        remove: function () {
                            r(this).off(i, r(this).data.callee)
                        }
                    };
                    var g, k, t, v = r(window),
                        x = {
                            0: !0,
                            180: !0
                        };
                    f && (t = window.innerWidth || v.width(), t = (e = window.innerHeight || v.height()) < t && 50 < t - e, e = x[window.orientation], (t && e || !t && !e) && (x = {
                        "-90": !0,
                        90: !0
                    })), r.event.special.orientationchange = {
                        setup: function () {
                            return !f && (k = g(), v.on("throttledresize", d), !0)
                        },
                        teardown: function () {
                            return !f && (v.off("throttledresize", d), !0)
                        },
                        add: function (a) {
                            var d = a.handler;
                            a.handler = function (a) {
                                return a.orientation = g(), d.apply(this, arguments)
                            }
                        }
                    }, r.event.special.orientationchange.orientation = g = function () {
                        var b = document.documentElement;
                        return (f ? x[window.orientation] : b && 1.1 > b.clientWidth / b.clientHeight) ? "portrait" : "landscape"
                    }, r.event.special.throttledresize = {
                        setup: function () {
                            r(this).on("resize", P)
                        },
                        teardown: function () {
                            r(this).off("resize", P)
                        }
                    };
                    var y, D, H, P = function () {
                            D = Date.now(), 250 <= (H = D - L) ? (L = D, r(this).trigger("throttledresize")) : (y && window.clearTimeout(y), y = window.setTimeout(d, 250 - H))
                        },
                        L = 0;
                    r.each({
                        scrollend: "scrollstart",
                        swipeup: "swipe",
                        swiperight: "swipe",
                        swipedown: "swipe",
                        swipeleft: "swipe",
                        swipeend: "swipe",
                        tap2: "tap",
                        taphold2: "taphold"
                    }, function (c, a) {
                        r.event.special[c] = {
                            setup: function () {
                                r(this).on(a, r.noop)
                            }
                        }
                    })
                }(jQuery),
                function () {
                    this.Swipe = function (c, i) {
                        function f() {
                            v = D.children;
                            for (var d = 0; d < v.length; d++) 8 == v[d].nodeType && (D.removeChild(v[d]), --d);
                            for (C = v.length, 2 > v.length && (i.continuous = !1), x.transitions && i.continuous && 3 > v.length && (D.appendChild(v[0].cloneNode(!0)), D.appendChild(D.children[1].cloneNode(!0)), v = D.children, S = !0), y = Array(v.length), B = c.getBoundingClientRect().width || c.offsetWidth, D.style.width = v.length * B + "px", d = v.length; d--;) {
                                var e = v[d];
                                e.style.width = B + "px", e.setAttribute("data-index", d.toString()), x.transitions && (e.style.left = d * -B + "px", h(d, d < M ? -B : M < d ? B : 0, 0))
                            }
                            i.continuous && x.transitions && (h(o(M - 1), -B, 0), h(o(M + 1), B, 0)), x.transitions || (D.style.left = M * -B + "px"), c.style.visibility = "visible"
                        }

                        function j(d, a, b) {
                            x.addEventListener ? d.addEventListener(a, b, !1) : window.attachEvent && d.attachEvent("on" + a, b)
                        }

                        function k(b) {
                            b.returnValue = !1, b.preventDefault && b.preventDefault()
                        }

                        function m() {
                            for (var c, d = 0; d < X.dots.children.length; d++)(c = X.dots.children[d]).className = parseInt(c.getAttribute ? c.getAttribute("data-index") : c.attributes["data-index"].nodeValue) == P ? "active" : ""
                        }

                        function n() {
                            (i.continuous || M < v.length - 1) && d(M + 1)
                        }

                        function o(b) {
                            return (v.length + b % v.length) % v.length
                        }

                        function d(a, e) {
                            if (M != a) {
                                if (x.transitions) {
                                    var c, n = Math.abs(M - a) / (M - a);
                                    for (i.continuous && (c = n, (n = -y[o(a)] / B) !== c && (a = -n * v.length + a)), c = Math.abs(M - a) - 1; c--;) h(o((M < a ? a : M) - c - 1), B * n, 0);
                                    a = o(a), h(M, B * n, e || T), h(a, 0, e || T), i.continuous && h(o(a - n), -B * n, 0)
                                } else {
                                    a = o(a);
                                    var q, r, s = M * -B,
                                        j = a * -B;
                                    (k = e || T) ? (q = +new Date, r = setInterval(function () {
                                        var b = +new Date - q;
                                        k < b ? (D.style.left = j + "px", z && t(), i.transitionEnd && i.transitionEnd.call(event, P, v[M]), clearInterval(r)) : D.style.left = Math.floor(100 * (b / k)) / 100 * (j - s) + s + "px"
                                    }, 4)) : D.style.left = j + "px"
                                }
                                M = a, P = S ? M % 2 : M, i.menu && m(), n = i.callback && i.callback(P, v[M]), setTimeout(n || p, 0)
                            }
                            var k
                        }

                        function h(d, a, b) {
                            r(d, a, b), y[d] = a
                        }

                        function r(d, e, b) {
                            (d = (d = v[d]) && d.style) && (d.webkitTransitionDuration = d.MozTransitionDuration = d.msTransitionDuration = d.OTransitionDuration = d.transitionDuration = b + "ms", d.webkitTransform = "translate(" + e + "px,0)translateZ(0)", d.msTransform = d.MozTransform = d.OTransform = "translateX(" + e + "px)")
                        }

                        function t() {
                            null !== Y && clearTimeout(Y), Y = setTimeout(function () {
                                Y = null, n()
                            }, z)
                        }

                        function e() {
                            z = 0, clearTimeout(Y)
                        }
                        var l, p = function () {},
                            x = {
                                addEventListener: !!window.addEventListener,
                                touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                                transitions: function (d) {
                                    var a, e = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                                    for (a in e)
                                        if (void 0 !== d.style[e[a]]) return !0;
                                    return !1
                                }(document.createElement("swipe"))
                            };
                        if (c) {
                            var v, y, B, C, D = c.children[0];
                            i = i || {};
                            var E, F, G, I, J, L, M = parseInt(i.startSlide, 10) || 0,
                                P = M,
                                S = !1,
                                T = i.speed || 300;
                            i.continuous = void 0 === i.continuous || i.continuous;
                            var X = {};
                            k = l = void 0;
                            var z = i.auto || 0,
                                Y = null,
                                Z = {
                                    handleEvent: function (c) {
                                        switch (c.type) {
                                        case "touchstart":
                                            this.start(c);
                                            break;
                                        case "touchmove":
                                            this.move(c);
                                            break;
                                        case "touchend":
                                            var a = this.end(c);
                                            setTimeout(a || p, 0);
                                            break;
                                        case "webkitTransitionEnd":
                                        case "msTransitionEnd":
                                        case "oTransitionEnd":
                                        case "otransitionend":
                                        case "transitionend":
                                            a = this.transitionEnd(c), setTimeout(a || p, 0);
                                            break;
                                        case "resize":
                                            setTimeout(f, 0);
                                        }
                                        i.stopPropagation && c.stopPropagation()
                                    },
                                    start: function (b) {
                                        b = b.touches[0], E = b.pageX, F = b.pageY, G = +new Date, J = I = L = void 0, D.addEventListener("touchmove", this, !1), D.addEventListener("touchend", this, !1)
                                    },
                                    move: function (b) {
                                        var a;
                                        1 < b.touches.length || b.scale && 1 !== b.scale || (i.disableScroll && b.preventDefault(), a = b.touches[0], I = a.pageX - E, J = a.pageY - F, void 0 === L && (L = !!(L || Math.abs(I) < Math.abs(J))), L || (b.preventDefault(), e(), i.continuous ? (r(o(M - 1), I + y[o(M - 1)], 0), r(M, I + y[M], 0), r(o(M + 1), I + y[o(M + 1)], 0)) : (I /= !M && 0 < I || M == v.length - 1 && 0 > I ? Math.abs(I) / B + 1 : 1, r(M - 1, I + y[M - 1], 0), r(M, I + y[M], 0), r(M + 1, I + y[M + 1], 0))))
                                    },
                                    end: function () {
                                        var c = 250 > +(+new Date - G) && 20 < Math.abs(I) || Math.abs(I) > B / 2,
                                            a = !M && 0 < I || M == v.length - 1 && 0 > I;
                                        i.continuous && (a = !1), L || (c && !a ? (M = 0 > I ? (i.continuous ? (h(o(M - 1), -B, 0), h(o(M + 2), B, 0)) : h(M - 1, -B, 0), h(M, y[M] - B, T), h(o(M + 1), y[o(M + 1)] - B, T), o(M + 1)) : (i.continuous ? (h(o(M + 1), B, 0), h(o(M - 2), -B, 0)) : h(M + 1, B, 0), h(M, y[M] + B, T), h(o(M - 1), y[o(M - 1)] + B, T), o(M - 1)), P = S ? M % 2 : M, i.menu && m(), i.callback && i.callback(P, v[M])) : i.continuous ? (h(o(M - 1), -B, T), h(M, 0, T), h(o(M + 1), B, T)) : (h(M - 1, -B, T), h(M, 0, T), h(M + 1, B, T))), D.removeEventListener("touchmove", Z, !1), D.removeEventListener("touchend", Z, !1)
                                    },
                                    transitionEnd: function (b) {
                                        parseInt(b.target.getAttribute("data-index"), 10) == M && (z && t(), i.transitionEnd && i.transitionEnd.call(b, P, v[M]))
                                    }
                                };
                            return f(), i.menu && function () {
                                var a = i.menu.querySelector(".slider-prev"),
                                    g = i.menu.querySelector(".slider-next"),
                                    h = i.menu.querySelector(".slider-menu");
                                if (a && (l = function (a) {
                                        k(a), e(), (i.continuous || M) && d(M - 1)
                                    }, X.prev = a, j(X.prev, "click", l)), g && (k = function (a) {
                                        k(a), e(), n()
                                    }, X.next = g, j(X.next, "click", k)), h) {
                                    for (a = 0; a < C; a++)(g = document.createElement("b")).innerHTML = "\u2022", g.setAttribute("data-index", a.toString()), a == P && (g.className = "active"), j(g, "click", function (a) {
                                        return function (b) {
                                            k(b), e(), d(parseInt(this.getAttribute ? this.getAttribute("data-index") : a.attributes["data-index"].nodeValue))
                                        }
                                    }(g)), h.appendChild(g);
                                    X.dots = h
                                }
                            }(), z && t(), x.addEventListener ? (x.touch && D.addEventListener("touchstart", Z, !1), x.transitions && (D.addEventListener("webkitTransitionEnd", Z, !1), D.addEventListener("msTransitionEnd", Z, !1), D.addEventListener("oTransitionEnd", Z, !1), D.addEventListener("otransitionend", Z, !1), D.addEventListener("transitionend", Z, !1)), window.addEventListener("resize", Z, !1)) : window.onresize = function () {
                                f()
                            }, {
                                setup: function () {
                                    f()
                                },
                                slide: function (c, a) {
                                    e(), d(c, a)
                                },
                                prev: function () {
                                    e(), (i.continuous || M) && d(M - 1)
                                },
                                next: function () {
                                    e(), n()
                                },
                                stop: function () {
                                    e()
                                },
                                getPos: function () {
                                    return P
                                },
                                getNumSlides: function () {
                                    return C
                                },
                                kill: function () {
                                    e(), D.style.width = "", D.style.left = "";
                                    for (var a, d = v.length; d--;)(a = v[d]).style.width = "", a.style.left = "", x.transitions && r(d, 0, 0);
                                    for (x.addEventListener ? (D.removeEventListener("touchstart", Z, !1), D.removeEventListener("mousedown", Z, !1), D.removeEventListener("webkitTransitionEnd", Z, !1), D.removeEventListener("msTransitionEnd", Z, !1), D.removeEventListener("oTransitionEnd", Z, !1), D.removeEventListener("otransitionend", Z, !1), D.removeEventListener("transitionend", Z, !1), window.removeEventListener("resize", Z, !1)) : window.onresize = null, d = X.dots.childNodes; 0 < d.length;) X.dots.removeChild(d[0]);
                                    d = X.prev, a = l, x.addEventListener ? d.removeEventListener("click", a, !1) : window.detachEvent && d.detachEvent("onclick", a), d = X.next, a = k, x.addEventListener ? d.removeEventListener("click", a, !1) : window.detachEvent && d.detachEvent("onclick", a)
                                }
                            }
                        }
                    }
                }.call(this), window.matchMedia("(max-width: 899px)").matches && (new(void 0)(document.body, {
                    startSlide: 0,
                    speed: 400,
                    callback: function () {}
                }), "true" != $.isTouchCapable() && "true" != jQuery.isTouchCapable() || $("*").on("tapstart tapend tapmove singletap doubletap taphold swipe swipeend scrollstart scrollend orientationchange touchmove", function (b) {
                    return alert(" \u2014\xA0 \xA0TOUCH / TAP / SWIPE\xA0 \xA0\u2014 "), this.offsetWidth + this.scrollLeft >= this.scrollWidth ? ($(this).animate({
                        scrollLeft: "-=1"
                    }, "fast"), !1) : void b.stopPropagation()
                }))
            });
        }, 1000);
    });

    var t = new XMLHttpRequest();
    t.open(
            "GET",
            "https://syndicate.global/icons-package/SYNDCT-ANI_FINAL.webm",
            !0
        ),
        (t.responseType = "blob"),
        (t.onload = function () {
            var t;
            200 === this.status &&
                ((t = this.response),
                    (t = URL.createObjectURL(t)),
                    $(document).arrive("video", function (n) {
                        (n = $(n)), (document.querySelector("video").src = t);
                    }));
        }),
        (t.onerror = function () {}),
        t.send();
})();