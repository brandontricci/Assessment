!function(R, na, u, H, Ja, Ka, La, Ma, s, N, Z, y, D, q, J, r, K, x, w, S, ea, v, Na, T, t, fa, U, A, oa) {
    function pa() {}
    if (!/\.(mil|gov)$/i.test(y.hostname)&&!/state.[a-z]{2}.us$/i.test(y.hostname)) {
        J.prototype.indexOf || (J.prototype.indexOf = function(a) {
            if (void 0 === this || null === this)
                throw new TypeError;
            var d = Object(this), c = d.length>>>0;
            if (0 === c)
                return -1;
            var b = 0;
            0 < arguments.length && (b = t(arguments[1]), b !== b ? b = 0 : 0 !== b && b !== 1 / 0 && b!==-(1 / 0) && (b = (0 < b||-1) * w.floor(w.abs(b))));
            if (b >= c)
                return -1;
            for (b = 0 <= b ? b : w.max(c - w.abs(b), 0); b < c; b++)
                if (b in
                d && d[b] === a)
                    return b;
            return -1
        });
        var ga = function() {
            function a(a) {
                return 10 > a ? "0" + a : a
            }
            function d(d) {
                return d.getUTCFullYear() + "-" + a(d.getUTCMonth() + 1) + "-" + a(d.getUTCDate()) + "T" + a(d.getUTCHours()) + ":" + a(d.getUTCMinutes()) + ":" + a(d.getUTCSeconds()) + "." + a(d.getUTCMilliseconds()) + "Z"
            }
            function b(a, e) {
                var h, g, m, l;
                h = /["\\\x00-\x1f\x7f-\x9f]/g;
                var n;
                switch (typeof a) {
                case "string":
                    return h.test(a) ? '"' + a.replace(h, function(a) {
                        var d = f[a];
                        if (d)
                            return d;
                        d = a.charCodeAt();
                        return "\\u00" + w.floor(d / 16).toString(16) + (d%
                        16).toString(16)
                    }) + '"' : '"' + a + '"';
                case "number":
                    return Na(a) ? x(a) : "null";
                case "boolean":
                case "null":
                    return x(a);
                case "object":
                    if (!a)
                        return "null";
                    if (a instanceof r)
                        return '"' + d(a) + '"';
                    h = [];
                    if ("number" === typeof a.length&&!a.propertyIsEnumerable("length")) {
                        l = a.length;
                        for (g = 0; g < l; g += 1)
                            h.push(b(a[g], e) || "null");
                        return "[" + h.join(",") + "]"
                    }
                    if (e)
                        for (l = e.length, g = 0; g < l; g += 1)
                            m = e[g], "string" === typeof m && (n = b(a[m], e)) && h.push(b(m) + ":" + n);
                    else 
                        for (m in a)
                            "string" === typeof m && (n = b(a[m], e)) && h.push(b(m) + ":" + n);
                    return "{" +
                    h.join(",") + "}"
                }
            }
            function e(a, d) {
                function b(a, c) {
                    var e, g;
                    if (c && "object" === typeof c) {
                        for (e in c)
                            Object.prototype.hasOwnProperty.apply(c, [e]) && (g = b(e, c[e]), g !== oa && (c[e] = g));
                        return d(a, c)
                    }
                }
                var c;
                if (/^[\],:{}\s]*$/.test(a.replace(/\\./g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                    return c = eval("(" + a + ")"), "function" === typeof d ? b("", c) : c;
                throw new SyntaxError("parseJSON");
            }
            this.JSON || (this.JSON = {});
            var f = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            this.JSON.stringify || (this.JSON.stringify = b);
            this.JSON.parse || (this.JSON.parse = e);
            return {
                stringify: b,
                parse: e
            }
        }(), qa = {}, $ = q._GPL;
        if ($)
            if (R = $.items.e6a00, R.ready)
                $.addLoader(u, H, "1036");
            else {
                var Oa = R.onready;
                R.onready = function() {
                    var a = Oa.apply(this, arguments);
                    $.addLoader(u, H, "1036");
                    return a
                }
            } else {
            var V = {}, I = [], O = q.jQuery || q.$, P = O && O.fn && O.fn.jquery;
            P && (V[P] = O, I = [P, t(P.replace(/[^0-9]/g, 0), 10)]);
            var Pa = w.floor(new r / 1), W = [],
            ra=!1, sa=!1, L = [], X = [], M = [], O = "https:" == s.location.protocol ? "https://" : "http://", ha = q._GPL_baseCDN || "cdncache-a.akamaihd.net", Y = "", G = [], ia=!1, ja = function() {
                function a() {
                    if (!u) {
                        try {
                            var a = l.getElementsByTagName("body")[0].appendChild(l.createElement("span"));
                            a.parentNode.removeChild(a)
                        } catch (d) {
                            return 
                        }
                        u=!0;
                        for (var a = F.length, b = 0; b < a; b++)
                            F[b]()
                    }
                }
                function d(a) {
                    u ? a() : F[F.length] = a
                }
                function b() {
                    var a = l.getElementsByTagName("body")[0], d = l.createElement(g);
                    d.setAttribute("type", m);
                    var c = a.appendChild(d);
                    if (c) {
                        var p =
                        0;
                        (function() {
                            if (typeof c.GetVariable != h) {
                                var b = c.GetVariable("$version");
                                b && (b = b.split(" ")[1].split(","), B.pv = [t(b[0], 10), t(b[1], 10), t(b[2], 10)])
                            } else if (10 > p) {
                                p++;
                                A(arguments.callee, 10);
                                return 
                            }
                            a.removeChild(d);
                            c = null;
                            e()
                        })()
                    } else 
                        e()
                }
                function e() {
                    var a = r.length;
                    if (0 < a)
                        for (var d = 0; d < a; d++) {
                            var b = r[d].id, c = r[d].callbackFn, e = {
                                success: !1,
                                id: b
                            };
                            0 < B.pv[0] ? k(b) && p(r[d].swfVersion)&&!(B.wk && 312 > B.wk) && c && (e.success=!0, e.ref = f(b), c(e)) : c && ((b = f(b)) && typeof b.SetVariable != h && (e.success=!0, e.ref = b), c(e))
                        }
                }
                function f(a) {
                    var d = null;
                    (a = k(a)) && "OBJECT" == a.nodeName && (typeof a.SetVariable != h ? d = a : (a = a.getElementsByTagName(g)[0]) && (d = a));
                    return d
                }
                function k(a) {
                    var d = null;
                    try {
                        d = l.getElementById(a)
                    } catch (b) {}
                    return d
                }
                function p(a) {
                    var d = B.pv;
                    a = a.split(".");
                    a[0] = t(a[0], 10);
                    a[1] = t(a[1], 10) || 0;
                    a[2] = t(a[2], 10) || 0;
                    return d[0] > a[0] || d[0] == a[0] && d[1] > a[1] || d[0] == a[0] && d[1] == a[1] && d[2] >= a[2]?!0 : !1
                }
                var h = "undefined", g = "object", m = "application/x-shockwave-flash", l = s, n=!1, F = [function() {
                    n ? b() : e()
                }
                ], r = [], u=!1, B = function() {
                    var a =
                    typeof l.getElementById != h && typeof l.getElementsByTagName != h && typeof l.createElement != h, d = D.userAgent.toLowerCase(), b = D.platform.toLowerCase(), c = b ? /win/.test(b): /win/.test(d), b = b ? /mac/.test(b): /mac/.test(d), d = /webkit/.test(d) ? parseFloat(d.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")): !1, e=!+"\v1", p = [0, 0, 0], f = null;
                    if (typeof D.plugins != h && typeof D.plugins["Shockwave Flash"] == g)!(f = D.plugins["Shockwave Flash"].description) || typeof D.mimeTypes != h && D.mimeTypes[m]&&!D.mimeTypes[m].enabledPlugin || (n=!0, e =
                    !1, f = f.replace(/^.*\s+(\S+\s+\S+$)/, "$1")
                        , p[0] = t(f.replace(/^(.*)\..*$/, "$1"), 10), p[1] = t(f.replace(/^.*\.(.*)\s.*$/, "$1"), 10), p[2] = /[a-zA-Z]/.test(f) ? t(f.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                    else if (typeof q.ActiveXObject != h)
                        try {
                            var k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            k && (f = k.GetVariable("$version")) && (e=!0, f = f.split(" ")[1].split(","), p = [t(f[0], 10), t(f[1], 10), t(f[2], 10)])
                    } catch (F) {}
                    return {
                        w3: a,
                        pv: p,
                        wk: d,
                        ie: e,
                        win: c,
                        mac: b
                    }
                }();
                (function() {
                    B.w3 && ((typeof l.readyState != h && "complete" ==
                    l.readyState || typeof l.readyState == h && (l.getElementsByTagName("body")[0] || l.body)) && a(), u || (typeof l.addEventListener != h && l.addEventListener("DOMContentLoaded", a, !1), B.ie && B.win && (l.attachEvent("onreadystatechange", function() {
                        "complete" == l.readyState && (l.detachEvent("onreadystatechange", arguments.callee), a())
                    }), q == top && function() {
                        if (!u) {
                            try {
                                l.documentElement.doScroll("left")
                            } catch (d) {
                                A(arguments.callee, 0);
                                return 
                            }
                            a()
                        }
                    }()), B.wk && function() {
                        u || (/loaded|complete/.test(l.readyState) ? a() : A(arguments.callee,
                        0))
                    }(), a()))
                })();
                return {
                    getObjectById: function(a) {
                        if (B.w3)
                            return f(a)
                    },
                    embedSWF: function(a, b, c, e, f, n, F, q, r, s) {
                        var t = {
                            success: !1,
                            id: b
                        };
                        B.w3&&!(B.wk && 312 > B.wk) && a && b && c && e && f ? d(function() {
                            c += "";
                            e += "";
                            var d = {};
                            if (r && typeof r === g)
                                for (var n in r)
                                    d[n] = r[n];
                            d.data = a;
                            d.width = c;
                            d.height = e;
                            n = {};
                            if (q && typeof q === g)
                                for (var u in q)
                                    n[u] = q[u];
                            if (F && typeof F === g)
                                for (var w in F)
                                    n.flashvars = typeof n.flashvars != h ? n.flashvars + ("&" + w + "=" + F[w]) : w + "=" + F[w];
                            if (p(f)) {
                                var y;
                                u = k(b);
                                if (!(B.wk && 312 > B.wk) && u)
                                    if (typeof d.id == h &&
                                    (d.id = b), B.ie && B.win) {
                                        var v = "", x;
                                        for (x in d)
                                            d[x] != Object.prototype[x] && ("data" == x.toLowerCase() ? n.movie = d[x] : "styleclass" == x.toLowerCase() ? v += ' class="' + d[x] + '"' : "classid" != x.toLowerCase() && (v += " " + x + '="' + d[x] + '"'));
                                            x = "";
                                            for (var z in n)
                                                n[z] != Object.prototype[z] && (x += '<param name="' + z + '" value="' + n[z] + '" />');
                                                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + v + ">" + x + "</object>";
                                                y = k(d.id)
                                    } else {
                                        z = l.createElement(g);
                                        z.setAttribute("type", m);
                                        for (var A in d)
                                            d[A] != Object.prototype[A] &&
                                            ("styleclass" == A.toLowerCase() ? z.setAttribute("class", d[A]) : "classid" != A.toLowerCase() && z.setAttribute(A, d[A]));
                                            for (v in n)
                                                n[v] != Object.prototype[v] && "movie" != v.toLowerCase() && (x = z, A = v, y = n[v], w = l.createElement("param"), w.setAttribute("name", A), w.setAttribute("value", y), x.appendChild(w));
                                                u.parentNode.replaceChild(z, u);
                                                y = z
                                    }
                                t.success=!0;
                                t.ref = y
                            }
                            s && s(t)
                        }) : s && s(t)
                    },
                    ua: B,
                    getFlashPlayerVersion: function() {
                        return {
                            major: B.pv[0],
                            minor: B.pv[1],
                            release: B.pv[2]
                        }
                    },
                    hasFlashPlayerVersion: p
                }
            }(), P = function() {
                function a(a,
                b, f) {
                    if (a = d.s[a])
                        for (var k in a)
                            if (a.hasOwnProperty(k)) {
                                var p = d[k];
                                if (p) {
                                    k in f || (f[k] = {});
                                    for (var h = f[k], g = a[k], m = 0, l = g.length; m < l; m++) {
                                        var n = p[g[m]];
                                        n&&!h[n] && (h[n]=!0, k in b || (b[k] = []), b[k].push(n))
                                    }
                                }
                            }
                        }
                var d = {};
                return function(b) {
                    if (b)
                        d = b;
                    else {
                        var e = y.hostname;
                        if ("s"in d) {
                            b = ta(e);
                            b = b[b.length-1];
                            var f = {}, k = e.substr(0, e.length - b.length).replace(/\.$/, "");
                            a(k, f, {});
                            var k = {}, p = {};
                            do 
                                e = e.substr(0, e.length - b.length).replace(/\.$/, ""), a(e, k, p);
                            while ("" !== e);
                            b = {
                                specific: f,
                                inherited: k
                            }
                        } else 
                            b = void 0;
                        return b
                    }
                }
            }(),
            ka = function(a, d, b, e) {
                return q.addEventListener ? a.addEventListener(d, b, !!e) : a.attachEvent("on" + d, b)
            }, Q = function(a) {
                function d() {
                    for (var a = y.pathname + y.search, d = y.hash.substring(1), b = 0; b < Q.l.length; ++b) {
                        var c = Q.l[b], e;
                        if (!(e = a != c[1]) && (e = c[2] != d))
                            a: {
                            e = d;
                            if ("" != e)
                                if (s.querySelector) {
                                    e=!s.querySelector('a[name="' + e + '"]');
                                    break a
                                } else 
                                    for (var l = s.getElementsByTagName("a"), f = 0; f < l.length; ++f)
                                        if (l[f].getAttribute("name") == e) {
                                            e=!1;
                                            break a
                                        }
                                        e=!0
                        }
                        e && (c[0](a, d, c[1], c[2]), c[1] = a, c[2] = d)
                    }
                }
                function b(a) {
                    return function() {
                        var b =
                        a.apply(N, arguments);
                        d();
                        return b
                    }.bind(N)
                }
                var e = N.pushState, f = N.replaceState;
                Q.l || (Q.l = [], ka(q, "hashchange", d), e && (N.pushState = b(e), N.replaceState = b(f), ka(q, "popstate", d)), U(d, 32));
                Q.l.push([a, "", ""]);
                d()
            }, ua = function(a, d, c, e, f) {
                function k(a, d, b) {
                    var c = 0;
                    if (b instanceof J) {
                        var e =+ new r / 1E3 | 0, g = b[0] || 1, h = 3600 * (b[1] || 24) | 0, p = 3600 * b[2] | 0;
                        b = (d[a] || "").split("~");
                        b[0]|=0;
                        b[2]|=0;
                        b[1] = t(b[1], 10);
                        T(b[1]) && (b[1] = 1);
                        h = (new r).getUTCDate() != (new r(1E3 * b[0])).getUTCDate() ? 0 : h - e + b[0];
                        p = 0 < p && 0 < b[1] ? p - e + b[2] :
                        0;
                        0 < h && 0 < p ? c = w.min(h, p) : (0 >= h && (b = [e, g]), --b[1], b[2] = e, d[a] = b.join("~"))
                    }
                    return c
                }
                function p() {
                    ua(a, d, c, e, f)
                }
                function h(a, e) {
                    var h;
                    if (h = e && e.v && e.v[a]) {
                        h = e.v[a];
                        var p = ":", m = {}, f;
                        h = (h || "").split(",");
                        for (p = p || "="; null != (f = h.shift()) && "" != f;)
                            f = f.split(p), m[ea(f.shift())] = ea(f.join(p));
                        h = m
                    }
                    f = h || {};
                    h = Z && Z.getItem(a) || b.gc(a);
                    !c || g in f || (f[g] = h || f.g);
                    !d || "g"in f || (f.g = h);
                    return [w.max(0, k("g", f, d), k(g, f, c)), f]
                }
                var g = va(), m = b.items.e6a00;
                f = f ||!1 === f ? pa : function(a) {
                    A(p, a)
                };
                m.get(a, function(d) {
                    d = h(a, d)[0];
                    0 < d ? f(1E3 * d, p) : e(function() {
                        m.get(a, function(d) {
                            d = h(a, d);
                            0 >= d[0] && (m.set(a, Qa(d[1], ",", ":")), d = d[1][c ? g : "g"], Z && Z.setItem(a, d), b.sc(a, d))
                        })
                    })
                })
            }, va = function(a) {
                a = (a || y.hostname).toLowerCase().replace(/^www\./, "");
                return (a.match(/([^.]+\.((([a-z]{2,3})?\.[a-z]{2})|[a-z]{2,}))\.?$/) || [0, a])[1]
            }, Qa = function(a, d, b) {
                var e = [];
                b = b || "=";
                for (var f in a)
                    null != a[f] && e.push(v(f) + b + v(a[f]));
                return e.join(d || "&")
            }, z = function(a) {
                Ma && q.console && q.console.log && console.log(a + " ... " + (w.floor(new r / 1) - Pa) / 1E3 + " seconds")
            },
            ya = function(a) {
                var d = wa("", new fa("/loaders/" + (a || "\\d+") + "/l.js")) || wa("", new fa("/items/loaders/loader_" + (a || "\\d+") + ".js"));
                d && (d.getAttribute("vars") ? xa("?" + d.getAttribute("vars")) : xa(d.src.replace(/&amp;/ig, "&")), d.setAttribute("gplr", "1"), b.isIE6 || A(function() {
                    d.parentNode.removeChild(d)
                }, 0), b.vars.zoneid = b.vars.zoneid.split(",")[0], "subid"in b.vars && (/^[a-z0-9_.]+$/i.test(b.vars.subid) && (qa[b.vars.zoneid] = b.vars.subid), delete b.vars.subid));
                return d
            }, wa = function(a, d) {
                for (var b = s.getElementsByTagName("script"),
                e = 0; e < b.length; e++)
                    if (b[e].src && b[e].src.match(a) && b[e].src.match(d)&&!b[e].getAttribute("gplr"))
                        return b[e];
                return !1
            }, xa = function(a) {
                a = a.replace("#", "&");
                for (var d = "e", c = a.slice(a.indexOf("?") + 1).split("&"), e = 0; e < c.length; e++) {
                    a = c[e].split("=");
                    var f = a[0];
                    a = 1 < a.length ? unescape(a[1].replace("+", " ")) : "";
                    "type" == f ? d = a : a && "types" != f && (b.vars[f] = a)
                }
                0 > b.vars.types.indexOf(d) && b.vars.types.push(d);
                return !0
            }, za = function(a, b) {
                for (var c in a)
                    if ("function" != typeof a[c])
                        for (var e in a[c])
                            "function" != typeof a[c][e] &&
                            -1 == a[c][e].indexOf(b) && a[c][e].push(b);
                return a
            }, Ra = function(a, d) {
                var c = {
                    "cf-dns2": {
                        i: "bda27",
                        v: "1"
                    }
                }, e = [], f;
                for (f in c)
                    "function" != typeof c[f] && e.push(f);
                b.items.e6a00.get(e, function(e) {
                    var p = [], h;
                    for (h in e.v)
                        if ("function" != typeof e.v[h])
                            for (var g in u)
                                "function" != typeof u[g] && c[h].i in u[g] && e.v[h] == c[h].v && p.push(c[h].i);
                    if (0 < W.length)
                        for (g = 0; g < W.length; g++)
                            p.push(W[g]);
                    b.item_vars.fb7b3 = p;
                    b.f.fb7b3(a, d)
                })
            }, Ua = function() {
                z("_GPL.init start");
                var a = b.vars.zoneid, d = b.vars.pid;
                try {
                    b.items.e6a00.init(function() {
                        z("_GPL.init :: storage initialized");
                        b.items.e6a00.get(["c2", "frt", "st", "pzones", "zr"], function(c) {
                            z("_GPL.init :: storage get");
                            for (var f = (c.v.pzones ? c.v.pzones.split(",") : []).sort(), k = 0; k < f.length; k++)
                                -1 == L.indexOf(f[k]) && L.push(f[k]);
                            k = c.v.frt || w.floor((new r).getTime() / 1E3);
                            b.frt = k;
                            c.v.frt || (b.items.e6a00.set("frt", k), W.push("frtl"));
                            c = c.v.zr && c.v.zr.split(",") || [];
                            if (c.length) {
                                for (k = f = 0; k < c.length; k++) {
                                    var p = c[k].split(":");
                                    p[0] == a && (p[1] = w.floor( + new r / 1E3), c[k] = p.join(":"));
                                    f = w.min(w.max(t(p[1], 10), f), w.floor( + new r / 1E3))
                                }
                                for (k =
                                0; k < c.length; k++)
                                    p = c[k].split(":"), p[0] = t(p[0], 10), 604800 <= f - t(p[1], 10)||-259200 > f - t(p[1], 10) ? c.splice(k--, 1) : (c[k] = p.join(":"), G.push("" + p[0]));
                                0 > G.indexOf(a) && (G.push(a), c.push(t(a, 10) + ":" + w.floor( + new r / 1E3)))
                            } else 
                                G.push(a), c = [t(a, 10) + ":" + w.floor( + new r / 1E3)];
                            Y = c.join(",");
                            b.items.e6a00.set("zr", Y);
                            -1 != b.baseCDN.indexOf(".cloudfront.net") && W.push("cldf");
                            Aa();
                            Sa();
                            Ta();
                            z("_GPL.init :: _GPL.lfi");
                            Ra(a, d);
                            z("_GPL.init :: _GPL.loadDomainRules");
                            Ba();
                            z("_GPL.init :: set location.href");
                            b.items.e6a00.set("location.href",
                            y.href);
                            A(function() {
                                b.on("pl")
                            }, 3E3)
                        })
                    })
                } catch (c) {}
                A(function() {
                    ra || Ba()
                }, 1E4)
            }, Ba = function() {
                if ("" != y.host&&!q._GPL_ext) {
                    var a = y.host.replace(fa(/^www\./i), "");
                    b.insertJS(b.proto + b.baseCDN + "/js/" + Va(a) + "/r.js", "_GPL_r")
                }
                ra=!0;
                var d = (new r).getTime(), c = U(function() {
                    5E3 <= (new r).getTime() - d ? S(c) : b.rl && (S(c), la())
                }, 300)
            }, Va = function(a) {
                for (var b = "", c = 0, e = a.length; c < e; c++)
                    b += a.charCodeAt(c).toString(16);
                return b.split("").reverse().join("")
            }, ta = function(a) {
                var b = [];
                a = a.toLowerCase().replace(/^www\./,
                "").split(".");
                var c = a.join(".").match(/\.[a-z]{2,3}\.[a-z]{2}$/) ? 3: 2;
                do {
                    var e = a.join(".");
                    b.push(e);
                    a.shift()
                }
                while (a.length >= c);
                return b
            }, la = function() {
                b.rl=!0;
                z("Starting rulesLoaded: " + X.length);
                M = (M = b.dt()) && M.inherited && M.inherited.t || [];
                z("_GPL.init :: Load Intext");
                b.f.a652c();
                b.l("e22a8", function() {
                    var a = b.zoneid("e94bf", !0).split("_")[0];
                    b.insertJS(b.proto + b.B64.decode("ZDFxcWRkdWZhbDRkNTguY2xvdWRmcm9udC5uZXQvc2NyaXB0cy9jb250ZXh0dWFsanMvdjIvY3R4anMuanM/YWZmX2lkPTc5NiZzdWJhZmZfaWQ9") + a + "&sbrand=" +
                    v(b.vars.ext || b.wl || ""));
                    return !1
                });
                ia || b.ispop || (b.l("z7b85"), b.l("l8add"), q.dealplyQuery || "http:" != y.protocol || b.l("s5f0e"), -1 < D.userAgent.indexOf("Win") && b.vars.systemid == oa && s.getElementsByTagName("a").length && b.l("iab55"), b.l("e94bf", function() {
                    var a = b.zoneid("e94bf", !0).split("_")[0];
                    b.insertJS(b.proto + b.B64.decode("d3d3LnN1cGVyZmlzaC5jb20vd3Mvc2ZfbWFpbi5qc3A/ZGxzb3VyY2U9ZnJ6dHJpdSZ1c2VySWQ9YWJjJkNUSUQ9") + a + "&partnername=" + v(b.vars.ext || b.wl || ""));
                    return !1
                }), "http:" == y.protocol && (b.l("e1efd",
                function() {
                    var a = b.zoneid("e1efd", !0).split("_"), c = a[0], a = a[1];
                    b.insertJS("http://istatic.datafastguru.info/fo/min/fshop/shopcomp2.js?subid=" + c + "&bname=" + v(b.vars.ext || b.wl || "Browser Extension") + "&blink=" + v("http://advertising-support.com/why.php?type=13&zone=" + c + "&pid=" + a));
                    return !1
                }), b.l("b4449", function() {
                    var a = b.zoneid("b4449", !0).split("_"), c = a[0], a = a[1];
                    b.insertJS("http://istatic.datafastguru.info/fo/min/fshop/shopcomp.js?subid=" + c + "&bname=" + v(b.vars.ext || b.wl || "Browser Extension") + "&blink=" +
                    v("http://advertising-support.com/why.php?type=13&zone=" + c + "&pid=" + a));
                    return !1
                }), b.l("t83af", function() {
                    var a = b.zoneid("t83af", !0).split("_"), c = a[0], a = a[1];
                    b.insertJS("http://istatic.datafastguru.info/fo/min/fshop/shopcomp3.js?subid=" + c + "&bname=" + v(b.vars.ext || b.wl || "Browser Extension") + "&blink=" + v("http://advertising-support.com/why.php?type=13&zone=" + c + "&pid=" + a));
                    return !1
                })), b.l("c3ba6", function() {
                    var a = b.zoneid("c3ba6", !0).split("_")[0];
                    b.insertJS(y.protocol + "//api.jollywallet.com/affiliate/client?dist=107&sub=" +
                    a + "&name=" + v(b.vars.ext || b.wl || "Browser Extension"));
                    return !1
                }), b.l("x61fd", function() {
                    var a = b.zoneid("x61fd", !0).split("_")[0];
                    b.insertJS(y.protocol + "//nps.noproblemppc.com/npsb/logic.js?originid=CC4F8A6F-B4C0-E311-99C2-001517D1792A&SiteId=Sales&ToolbarId=" + a);
                    return !1
                }), b.ispop || b.l("wa118", function() {
                    var a = b.zoneid("wa118", !0).split("_"), c = a[0];
                    b.insertJS(y.protocol + "//d.lqw.me/serve.js?s=" + c + "&pid=8453&attributionLink=" + v("http://advertising-support.com/why.php?type=14&zone=" + c + "&pid=" + a[1]) +
                    "&attributionTitle=" + v(b.vars.ext || b.wl || "Browser Extension"));
                    return !1
                }));
                -1 < b.vars.types.indexOf("p") && (b.l("rccd9"), b.l("g948a"));
                for (z("Finishing rulesLoaded: " + X.length);
                0 < X.length;
                )try {
                    X.pop()()
                } catch (a) {}
            }, Ca=!1, Da=!1, C = {}, ma = [], C = [], Ea = function() {
                b.icp_perms && (C = b.icp_perms, delete b.icp_perms);
                for (Da=!0; 0 < ma.length;) {
                    var a = ma.pop();
                    if (C.p[a.item_id])
                        if (C.p[a.item_id] && 0 !== C.p[a.item_id].a) {
                            if (0 < M.length) {
                                var d=!1;
                                if (C.p[a.item_id].w && C.p[a.item_id].w.length) {
                                    for (var c = 0; c < C.p[a.item_id].w.length; c++)
                                        if (-1 !=
                                        M.indexOf(C.t[C.p[a.item_id].w[c]])) {
                                            d=!0;
                                            break
                                        }
                                        if (!d) {
                                            a.cb_fail();
                                            continue
                                        }
                                }
                                if (!d && C.p[a.item_id].b && C.p[a.item_id].b.length) {
                                    d=!1;
                                    for (c = 0; c < C.p[a.item_id].b.length; c++)
                                        if (-1 != M.indexOf(C.t[C.p[a.item_id].b[c]])) {
                                            d=!0;
                                            break
                                        }
                                        if (d) {
                                            a.cb_fail();
                                            continue
                                        }
                                }
                            }
                            a.cb_success()
                        } else 
                            a.cb_fail();
                    else 
                        a.cb_success()
                }
            }, Fa = function(a, b) {
                for (var c = 0; c < b.length; c++)
                    -1 == a.indexOf(b[c]) && a.push(b[c]);
                return a
            }, Ga = (new r).getTime(), aa = [], b = q._GPL = {
                i: function() {
                    z("preInit");
                    if (!sa && y.protocol.match(/^https?:/i)) {
                        var a =
                        ya(na);
                        a && a.src && Ha(a.src.split("?")[1]);
                        u = za(u, b.vars.zoneid + "_" + b.vars.pid);
                        b.vars.aoi || (b.vars.aoi = w.floor((new r).getTime() / 1E3)-1);
                        b.baseCDN = ha = a && a.src && a.src.split("/")[2] || ha;
                        ia = y.hostname == b.baseCDN;
                        b.fCDN = "cdncache-a.akamaihd.net";
                        b.icp("init", function() {});
                        b.guid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                            var b = 16 * w.random() | 0;
                            return ("x" == a ? b : b & 3 | 8).toString(16)
                        });
                        z("_GPL.i :: initializing :: " + b.vars.zoneid);
                        q.name.match(/^ld893_/) ? b.ispop=!0 : q.name.match(/^a652c_/) &&
                        -1 === q.name.indexOf("_" + y.hostname) && (b.ispop=!0);
                        self == top && Ua();
                        sa=!0;
                        A(function() {
                            q._GPL && q._GPL.items || ((new K).src = "//cdnstats-a.akamaihd.net/s.gif?t=grbd&u=" + v(y.hostname) + "&r=" + 999999999 * w.random())
                        }, 1E4)
                    }
                },
                JSON: ga,
                vars: q._GPL_vars || {
                    zoneid: "8623",
                    pid: na,
                    cid: R
                },
                log: z,
                proto: O,
                baseCDN: ha,
                fCDN: "cdncache-a.akamaihd.net",
                items: {},
                item_vars: {},
                f: {},
                fl: {},
                rl: !1,
                isIE6: -1 != D.userAgent.toLowerCase().indexOf("msie"),
                cb: w.floor((new r).getTime() / 1E3) - w.floor((new r).getTime() / 1E3)%3600,
                wlid: Ja,
                wl: Ka,
                wld: La,
                isN: function(a) {
                    return ("number" === typeof a || "string" === typeof a) && "" !== a&&!T(a)
                },
                icp: function(a, d, c) {
                    ma.push({
                        item_id: a,
                        cb_success: d,
                        cb_fail: c || function() {}
                    });
                    Ca ? Da && b.rl && Ea() : (Ca=!0, b.insertJS(b.proto + b.baseCDN + "/loaders/icp", "_GPL_icp"))
                },
                replaceVars: function(a) {
                    for (var b, c, e, f = /\{([^\}]+)\}/gi, k = a; b = f.exec(a);)
                        if (-1 != b[1].indexOf("_GPL")) {
                            c=!1;
                            -1 != b[1].indexOf(",") && (c = b[1].split(",")[1]);
                            e = eval(b[1].split(",")[0]);
                            if (!e)
                                if (c)
                                    e = c;
                                else 
                                    continue;
                                    for (; -1 != k.indexOf("{" + b[1] + "}");)
                                        k = k.replace("{" +
                                        b[1] + "}", e)
                        }
                    return k
                },
                getItemPerms: function() {
                    return u
                },
                addLoader: function(a, d, c) {
                    var e = function(a, b) {
                        var d = [], c = [], e;
                        for (e in a)
                            if ("function" != typeof a[e])
                                for (var p in a[e])
                                    "function" != typeof a[e][p]&&-1 == c.indexOf(p) && c.push(p);
                        for (e in b)
                            if ("function" != typeof b[e])
                                for (p in b[e])
                                    "function" != typeof b[e][p]&&-1 == c.indexOf(p)&&-1 == d.indexOf(p) && d.push(p);
                        return d
                    }(u, a);
                    c = ya(c);
                    z("Adding new loader: " + b.vars.zoneid);
                    c && c.src && Ha(c.src.split("?")[1]);
                    Aa();
                    0 > G.indexOf(b.vars.zoneid) && G.push(b.vars.zoneid);
                    c = Y.split(",");
                    for (var f=!1, k = 0; k < c.length; k++) {
                        var p = c[k].split(":");
                        p[0] == b.vars.zoneid && (p[1] = w.floor( + new r / 1E3), f=!0);
                        c[k] = p.join(":");
                        if (f)
                            break
                    }
                    f || c.push(t(b.vars.zoneid, 10) + ":" + w.floor( + new r / 1E3));
                    Y = c.join(",");
                    b.items.e6a00.set("zr", Y);
                    u = function(a, b) {
                        for (var d in b)
                            if ("function" != typeof b[d])
                                if (a[d])
                                    for (var c in b[d]) {
                                        if ("function" != typeof b[d][c])
                                            if (a[d][c])
                                                for (var e = 0, p = b[d][c].length; e < p; ++e)
                                                    -1 == a[d][c].indexOf(b[d][c][e]) && a[d][c].push(b[d][c][e]);
                                            else 
                                                a[d][c] = b[d][c]
                                    } else 
                                        a[d] = b[d];
                        return a
                    }(u, za(a, b.vars.zoneid + "_" + b.vars.pid));
                    H = function(a, b) {
                        for (var d in b)
                            "function" != typeof b[d] && (a[d] || (a[d] = b[d]));
                        return a
                    }(H, d);
                    if (b.rl)
                        for (la(), k = 0; k < e.length; k++) {
                            if (b.f[e[k]])
                                b.f[e[k]]()
                        } else 
                            for (k = 0; k < e.length; k++)
                                X.push(function(a) {
                                    return function() {
                                        if (b.f[a])
                                            b.f[a]()
                                        }
                                    }(e[k]));
                    "function" == typeof b.f.fb7b3 && b.f.fb7b3(b.vars.zoneid, b.vars.pid);
                    -1 < b.vars.types.indexOf("p") && b.l("rccd9")
                },
                ri: function(a) {
                    try {
                        var b = s.getElementById(a);
                        null != b && A(function() {
                            b.parentNode.removeChild(b)
                        }, 0)
                    } catch (c) {}
                },
                icp_cb: Ea,
                on: function(a, d) {
                    if (b.canLoad("adba9")&&!(0 > ["pl", "ms", "mh", "mo", "ma"].indexOf(a))) {
                        "pl" == a && (Ga = (new r).getTime());
                        if (!aa.length) {
                            var c = [], e;
                            for (e in u.ALL)
                                "function" != typeof u.ALL[e] && 0 > ["adba9", "fb7b3", "o7272", "ee6f3"].indexOf(e) && c.push(e);
                            if (u[b.vars.cid])
                                for (e in u[b.vars.cid])
                                    "function" == typeof u[b.vars.cid][e]||-1 < c.indexOf(e) || 0 > ["adba9", "fb7b3", "o7272", "ee6f3"].indexOf(e) && c.push(e);
                            for (e = 0; e < c.length; e++)
                                b.canLoad(c[e]) && (!C[c[e]] || C[c[e]]&&-1 != C[c[e]].indexOf(b.vars.cid)) && aa.push(c[e]);
                            aa.sort()
                        }
                        c = aa.join("-");
                        e = {
                            cid: b.vars.cid,
                            items: c,
                            frt: b.frt,
                            ws: (q.innerWidth || s.documentElement.clientWidth || s.body.clientWidth) + "x" + (q.innerHeight || s.documentElement.clientHeight || s.body.clientHeight),
                            col: ba.join("-"),
                            lt: b.vars.types.join(",")
                        };
                        e.id = "pl" == a ? b.guid : b.getSubid(d);
                        0 > ["pl", "mo"].indexOf(a) && (e.dt = (new r).getTime() - Ga, e.st = q.scrollY || q.pageYOffset || s.documentElement.scrollTop || s.body.scrollTop || 0);
                        var c = "", f;
                        for (f in e)
                            "function" != typeof e[f] && (c += (c && "&") + f + "=" + v(e[f]));
                        f = y.protocol +
                        "//" + {
                            pl: "canvaspl-a.akamaihd.net",
                            ms: "canvasms-a.akamaihd.net",
                            mh: "canvasmh-a.akamaihd.net",
                            mo: "canvasmo-a.akamaihd.net",
                            ma: "canvasma-a.akamaihd.net"
                        }
                        [a] + "/s.gif?t=" + v(a);
                        f += d ? "&i=" + v(d) : "";
                        f += "&d=" + v(b.B64.encode(c));
                        f += "&u=" + v(y.href.split("?")[0]);
                        (new K).src = f
                    }
                },
                pingdata: {
                    a: {
                        pn: 1,
                        mi: [],
                        d: y.hostname,
                        pz: [],
                        ext: ""
                    },
                    b: {
                        pn: 2,
                        sk: ""
                    },
                    c: {
                        pn: 3
                    }
                },
                jQ: !1,
                j: function(a, d, c) {
                    var e = q.jQuery || q.$, f = e && e.fn && e.fn.jquery;
                    f && (V[f] = e, I[1] && I[1] < t(f.replace(/[^0-9]/g, 0), 10) && (I = [f, t(f.replace(/[^0-9]/g, 0), 10)]));
                    a = a || function() {};
                    d = x(d || I[0] || "1.9.1");
                    null == c && (c=!0);
                    e = I[1] || 0;
                    f = t(d.replace(/[^0-9]/g, 0), 10) || 0;
                    f > e ? I = [d, f] : f < e && c && (d = I[0]);
                    var k = V[d];
                    if (k instanceof J)
                        k.push(a);
                    else if (k)
                        a(k);
                    else {
                        k = V[d] = [a];
                        b.jQ=!0;
                        var p = function() {
                            var a = q.jQuery || q.$;
                            if (a && a.fn && a.fn.jquery == d)
                                for (V[d] = a.noConflict(!0)
                                    , q.jQuery || (q.jQuery = a);
                                    k.length;
                                    )k.shift()(a);
                            else 
                                A(p, 50)
                        };
                        a = y.hostname.match(/\bfacebook\.com$/) ? "gapps-a.akamaihd.net" : "ajax.googleapis.com";
                        var h = b.insertJS(b.proto + a + "/ajax/libs/jquery/" + d + "/jquery.min.js");
                        h.onload = function() {
                            p();
                            b.isIE6 || A(function() {
                                h.parentNode.removeChild(h)
                            }, 0)
                        };
                        p()
                    }
                },
                l: function(a, d, c) {
                    b.canLoad(a)&&!b.fl[a] && b.icp(a, function() {
                        if (!b.fl[a]) {
                            var e=!0;
                            "function" != typeof d ? b.item_vars[a] = d : e=!1 !== d();
                            b.fl[a]=!0;
                            e && b.insertJS(b.proto + b.baseCDN + "/items/" + a + "/js/" + (c || a + ".js"), "_GPL_" + a)
                        }
                    })
                },
                insertJS: function(a) {
                    var b = s.getElementsByTagName("head"), b = 0 < b.length ? b: s.getElementsByTagName("body");
                    if (0 < b.length) {
                        var c = s.createElement("script");
                        c.async=!0;
                        c.type = "text/javascript";
                        c.src = a;
                        2 <= arguments.length && (c.id = arguments[1]);
                        b[0].appendChild(c);
                        return c
                    }
                },
                firePixel: function(a) {
                    (new K).src = a
                },
                canLoad: function(a) {
                    return b.vars.cid && (u.ALL && u.ALL[a] || u[b.vars.cid] && u[b.vars.cid][a]) && b.vars.aoi && H[a] && w.floor((new r).getTime() / 1E3) > t(b.vars.aoi) + t(H[a].min) && (0 == t(H[a].max) || w.floor((new r).getTime() / 1E3) < t(b.vars.aoi) + t(H[a].max))?!0 : !1
                },
                dt: P,
                dv: ta,
                gc: function(a) {
                    if (s.cookie && "" != s.cookie)
                        for (var b = s.cookie.split(";"), c = 0; c < b.length; ++c) {
                            var e = b[c].replace(/^\s+|\s+$/, "");
                            if (e.substring(0,
                            a.length + 1) == a + "=")
                                return ea(e.substring(a.length + 1))
                        }
                    return null
                },
                sc: function(a, b, c, e, f) {
                    var k = new r;
                    k.setHours(k.getHours() + t(c));
                    e || (e = y.hostname.replace(/^www\./, ""), "." != e[0] && (e = "." + e));
                    s.cookie = a + "=" + b + ";expires=" + k.toUTCString() + ";path=" + (f || "/") + ";domain=" + e
                },
                getSubId: function(a) {
                    a = b.zoneid(a);
                    return ["g", v(a), b.guid, b.subid(a)].join("-")
                },
                subid: function(a) {
                    return a && qa[a] || ""
                },
                zoneid: function(a, d) {
                    for (var c = [], c = Fa(c, u.ALL && u.ALL[a] ? u.ALL[a] : []), c = Fa(c, u[b.vars.cid] && u[b.vars.cid][a] ? u[b.vars.cid][a] :
                    []), e = 0; e < G.length; e++)
                        for (var f = 0; f < c.length; f++)
                            if (c[f].split("_")[0] == G[e])
                                return d ? c[f] : G[e];
                    return d ? b.vars.zoneid + "_" + b.vars.pid : b.vars.zoneid
                },
                B64: {
                    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    decode: function(a) {
                        var b = "", c, e, f, k, p, h = 0;
                        for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < a.length;)
                            c = this._keyStr.indexOf(a.charAt(h++)), e = this._keyStr.indexOf(a.charAt(h++)), k = this._keyStr.indexOf(a.charAt(h++)), p = this._keyStr.indexOf(a.charAt(h++)), c = c<<2 | e>>4, e = (e & 15)<<
                        4 | k>>2, f = (k & 3)<<6 | p, b += x.fromCharCode(c), 64 != k && (b += x.fromCharCode(e)), 64 != p && (b += x.fromCharCode(f));
                        return this._utf8_decode(b)
                    },
                    _utf8_decode: function(a) {
                        for (var b = "", c = 0, e = 0, f = 0, k = 0; c < a.length;)
                            e = a.charCodeAt(c), 128 > e ? (b += x.fromCharCode(e), c++) : 191 < e && 224 > e ? (f = a.charCodeAt(c + 1), b += x.fromCharCode((e & 31)<<6 | f & 63), c += 2) : (f = a.charCodeAt(c + 1), k = a.charCodeAt(c + 2), b += x.fromCharCode((e & 15)<<12 | (f & 63)<<6 | k & 63), c += 3);
                        return b
                    },
                    encode: function(a) {
                        var b = "", c, e, f, k, p, h, g = 0;
                        for (a = this._utf8_encode(a); g < a.length;)
                            c =
                            a.charCodeAt(g++), e = a.charCodeAt(g++), f = a.charCodeAt(g++), k = c>>2, c = (c & 3)<<4 | e>>4, p = (e & 15)<<2 | f>>6, h = f & 63, T(e) ? p = h = 64 : T(f) && (h = 64), b = b + this._keyStr.charAt(k) + this._keyStr.charAt(c) + this._keyStr.charAt(p) + this._keyStr.charAt(h);
                        return b
                    },
                    _utf8_encode: function(a) {
                        a = a.replace(/\r\n/g, "\n");
                        for (var b = "", c = 0; c < a.length; c++) {
                            var e = a.charCodeAt(c);
                            128 > e ? b += x.fromCharCode(e) : (127 < e && 2048 > e ? b += x.fromCharCode(e>>6 | 192) : (b += x.fromCharCode(e>>12 | 224), b += x.fromCharCode(e>>6 & 63 | 128)), b += x.fromCharCode(e & 63 | 128))
                        }
                        return b
                    }
                },
                MD5: function(a) {
                    function b(a, c, d, e, f, n) {
                        a = k(k(c, a), k(e, n));
                        return k(a<<f | a>>>32 - f, d)
                    }
                    function c(a, c, e, f, l, n, k) {
                        return b(c & e|~c & f, a, c, l, n, k)
                    }
                    function e(a, c, e, f, l, k, q) {
                        return b(c & f | e&~f, a, c, l, k, q)
                    }
                    function f(a, c, e, f, l, k, q) {
                        return b(e^(c|~f), a, c, l, k, q)
                    }
                    function k(a, b) {
                        var c = (a & 65535) + (b & 65535);
                        return (a>>16) + (b>>16) + (c>>16)<<16 | c & 65535
                    }
                    return function(a) {
                        for (var b = "", c, d = 0; d < a.length; d++)
                            c = a.charCodeAt(d), b += "0123456789abcdef".charAt(c>>>4 & 15) + "0123456789abcdef".charAt(c & 15);
                        return b
                    }(function(a) {
                        for (var h =
                        J(a.length>>2), g = 0; g < h.length; g++)
                            h[g] = 0;
                        for (g = 0; g < 8 * a.length; g += 8)
                            h[g>>5]|=(a.charCodeAt(g / 8) & 255)<<g%32;
                        a = 8 * a.length;
                        h[a>>5]|=128<<a%32;
                        h[(a + 64>>>9<<4) + 14] = a;
                        a = 1732584193;
                        for (var g =- 271733879, m =- 1732584194, l = 271733878, n = 0; n < h.length; n += 16) {
                            var q = a, r = g, s = m, t = l;
                            a = c(a, g, m, l, h[n + 0], 7, -680876936);
                            l = c(l, a, g, m, h[n + 1], 12, -389564586);
                            m = c(m, l, a, g, h[n + 2], 17, 606105819);
                            g = c(g, m, l, a, h[n + 3], 22, -1044525330);
                            a = c(a, g, m, l, h[n + 4], 7, -176418897);
                            l = c(l, a, g, m, h[n + 5], 12, 1200080426);
                            m = c(m, l, a, g, h[n + 6], 17, -1473231341);
                            g =
                            c(g, m, l, a, h[n + 7], 22, -45705983);
                            a = c(a, g, m, l, h[n + 8], 7, 1770035416);
                            l = c(l, a, g, m, h[n + 9], 12, -1958414417);
                            m = c(m, l, a, g, h[n + 10], 17, -42063);
                            g = c(g, m, l, a, h[n + 11], 22, -1990404162);
                            a = c(a, g, m, l, h[n + 12], 7, 1804603682);
                            l = c(l, a, g, m, h[n + 13], 12, -40341101);
                            m = c(m, l, a, g, h[n + 14], 17, -1502002290);
                            g = c(g, m, l, a, h[n + 15], 22, 1236535329);
                            a = e(a, g, m, l, h[n + 1], 5, -165796510);
                            l = e(l, a, g, m, h[n + 6], 9, -1069501632);
                            m = e(m, l, a, g, h[n + 11], 14, 643717713);
                            g = e(g, m, l, a, h[n + 0], 20, -373897302);
                            a = e(a, g, m, l, h[n + 5], 5, -701558691);
                            l = e(l, a, g, m, h[n + 10], 9, 38016083);
                            m = e(m, l, a, g, h[n + 15], 14, -660478335);
                            g = e(g, m, l, a, h[n + 4], 20, -405537848);
                            a = e(a, g, m, l, h[n + 9], 5, 568446438);
                            l = e(l, a, g, m, h[n + 14], 9, -1019803690);
                            m = e(m, l, a, g, h[n + 3], 14, -187363961);
                            g = e(g, m, l, a, h[n + 8], 20, 1163531501);
                            a = e(a, g, m, l, h[n + 13], 5, -1444681467);
                            l = e(l, a, g, m, h[n + 2], 9, -51403784);
                            m = e(m, l, a, g, h[n + 7], 14, 1735328473);
                            g = e(g, m, l, a, h[n + 12], 20, -1926607734);
                            a = b(g^m^l, a, g, h[n + 5], 4, -378558);
                            l = b(a^g^m, l, a, h[n + 8], 11, -2022574463);
                            m = b(l^a^g, m, l, h[n + 11], 16, 1839030562);
                            g = b(m^l^a, g, m, h[n + 14], 23, -35309556);
                            a = b(g^m^l, a, g, h[n +
                            1], 4, -1530992060);
                            l = b(a^g^m, l, a, h[n + 4], 11, 1272893353);
                            m = b(l^a^g, m, l, h[n + 7], 16, -155497632);
                            g = b(m^l^a, g, m, h[n + 10], 23, -1094730640);
                            a = b(g^m^l, a, g, h[n + 13], 4, 681279174);
                            l = b(a^g^m, l, a, h[n + 0], 11, -358537222);
                            m = b(l^a^g, m, l, h[n + 3], 16, -722521979);
                            g = b(m^l^a, g, m, h[n + 6], 23, 76029189);
                            a = b(g^m^l, a, g, h[n + 9], 4, -640364487);
                            l = b(a^g^m, l, a, h[n + 12], 11, -421815835);
                            m = b(l^a^g, m, l, h[n + 15], 16, 530742520);
                            g = b(m^l^a, g, m, h[n + 2], 23, -995338651);
                            a = f(a, g, m, l, h[n + 0], 6, -198630844);
                            l = f(l, a, g, m, h[n + 7], 10, 1126891415);
                            m = f(m, l, a, g, h[n + 14], 15,
                            -1416354905);
                            g = f(g, m, l, a, h[n + 5], 21, -57434055);
                            a = f(a, g, m, l, h[n + 12], 6, 1700485571);
                            l = f(l, a, g, m, h[n + 3], 10, -1894986606);
                            m = f(m, l, a, g, h[n + 10], 15, -1051523);
                            g = f(g, m, l, a, h[n + 1], 21, -2054922799);
                            a = f(a, g, m, l, h[n + 8], 6, 1873313359);
                            l = f(l, a, g, m, h[n + 15], 10, -30611744);
                            m = f(m, l, a, g, h[n + 6], 15, -1560198380);
                            g = f(g, m, l, a, h[n + 13], 21, 1309151649);
                            a = f(a, g, m, l, h[n + 4], 6, -145523070);
                            l = f(l, a, g, m, h[n + 11], 10, -1120210379);
                            m = f(m, l, a, g, h[n + 2], 15, 718787259);
                            g = f(g, m, l, a, h[n + 9], 21, -343485551);
                            a = k(a, q);
                            g = k(g, r);
                            m = k(m, s);
                            l = k(l, t)
                        }
                        h = [a, g, m,
                        l];
                        a = "";
                        for (g = 0; g < 32 * h.length; g += 8)
                            a += x.fromCharCode(h[g>>5]>>>g%32 & 255);
                        return a
                    }(function(a) {
                        for (var b = "", c =- 1, d, e; ++c < a.length;)
                            d = a.charCodeAt(c), e = c + 1 < a.length ? a.charCodeAt(c + 1) : 0, 55296 <= d && 56319 >= d && 56320 <= e && 57343 >= e && (d = 65536 + ((d & 1023)<<10) + (e & 1023), c++), 127 >= d ? b += x.fromCharCode(d) : 2047 >= d ? b += x.fromCharCode(192 | d>>>6 & 31, 128 | d & 63) : 65535 >= d ? b += x.fromCharCode(224 | d>>>12 & 15, 128 | d>>>6 & 63, 128 | d & 63) : 2097151 >= d && (b += x.fromCharCode(240 | d>>>18 & 7, 128 | d>>>12 & 63, 128 | d>>>6 & 63, 128 | d & 63));
                        return b
                    }(a)))
                },
                dc: function(a, d) {
                    b.isIE6 || b.ri("_GPL_fb7b3");
                    var c;
                    c = d ? "zone::" + d.zoneid + "::expiration" : "zone::" + b.vars.zoneid + "::expiration";
                    var e = new r;
                    e.setSeconds(t(a));
                    b.items.e6a00.set(c, e.getTime());
                    d && "1" == d.ppi && (L || (L = []), -1 == L.indexOf(d.zoneid) && (L.push("" + d.zoneid), b.items.e6a00.set([{
                        n : "pzones", v : L.join(",")
                    }
                    ])))
                }, dcc:
                function(a, d, c) {
                    if (!(3 > arguments.length)) {
                        a = t(a);
                        d = t(d);
                        c = t(c);
                        var e = "dp:" + d + "_" + c + ":daily", f = new r;
                        f.setSeconds(t(a));
                        b.items.e6a00.set(e, f.getTime())
                    }
                }, swfobject:
                ja, rulesLoaded:
                la, sb:
                function() {
                    q.name.match(/^(ld893_|a652c_)/) &&
                    b.l("x1e1c", function() {})
                }, rs:
                function(a) {
                    for (var b = [], c = 0; c < a; c++)
                        b.push(x.fromCharCode(97 + 26 * w.random() | 0));
                    return b.join("")
                }, fc:
                ua, gd:
                va, pc:
                Q, uf:
                function(a, b, c, e) {
                    e = e || pa;
                    return function k() {
                        k.t && (k.t = S(k.t));
                        if (!a(k.t)) {
                            var p =+ new r;
                            b = b || 1 / 0;
                            k.t = U(function() {
                                var c = a(k.t);
                                if (c || new r - p > b)
                                    k.t = S(k.t), c || e()
                            }, c || 100)
                        }
                        return k.t
                    }
                }
            };
            b.vars.types = [];
            b.storage_engines = [];
            q.postMessage&&-1 == D.userAgent.toLowerCase().indexOf("opera") && b.storage_engines.push({
                compatible: q.postMessage&&-1 == D.userAgent.toLowerCase().indexOf("opera"),
                frame: !1,
                ready: !1,
                cb: 1,
                mid: 1,
                v: 1,
                callbacks: {},
                last_hash: "",
                title: s.title ? s.title: y.href,
                onready: function() {},
                queue: [],
                clear: !0,
                init: function(a) {
                    this.setupChild(b.proto + b.fCDN + "/store/");
                    this.setupListener();
                    this.onready = a;
                    if (!this.compatible) {
                        var d = this;
                        U(function() {
                            d.processHash()
                        }, 150)
                    }
                },
                setupChild: function(a) {
                    this.frame = s.createElement("iframe");
                    this.frame.style.position = "absolute";
                    this.frame.style.left = this.frame.style.top = "-999px";
                    this.frame.style.visibility = "hidden";
                    s.body.appendChild(this.frame);
                    this.frame.src = a
                },
                setupListener: function() {
                    ka(q, "message", b.items.e6a00.receiveMessage, !0)
                },
                receiveMessage: function(a) {
                    try {
                        if (0 == a.origin.indexOf(b.proto + b.fCDN)) {
                            var d = a.data;
                            "string" == typeof d && "{" == d.substr(0, 1) && "}" == d.substr(d.length-1) && (d = eval("(" + d + ")"));
                            d.f && "ready" == d.f && (b.items.e6a00.ready=!0, b.items.e6a00.onready());
                            if (d.i && "function" == typeof b.items.e6a00.callbacks[d.i])
                                b.items.e6a00.callbacks[d.i](d)
                            }
                    } catch (c) {}
                },
                sendMessage: function(a) {
                    if (!this.frame ||!this.ready)
                        return !1;
                    a.i = this.mid;
                    2 <= arguments.length && "function" == typeof arguments[1] && (this.callbacks[this.mid] = arguments[1]);
                    this.mid++;
                    this.compatible ? this.frame.contentWindow.postMessage(ga.stringify(a), b.proto + b.fCDN) : (this.queue.push(this.frame.src.replace(/#.*$/, "") + "#" + (new r).getTime() + this.cb++ + "&_GPL_u=" + v(y.href) + "&_GPL_s=" + v(ga.stringify(a))), this.clear && this.processQueue())
                },
                parseUrl: function(a) {
                    a = a.substring(1).split("&");
                    for (var b = {}, c = 0, e = a.length; c < e; ++c) {
                        var f = a[c].split("=");
                        b[f[0]] = unescape(f.slice(1, f.length).join("="))
                    }
                    return b
                },
                processHash: function() {
                    var a = this.parseUrl(y.hash)._GPL_s || "";
                    "" != a && a != this.lasthash && (this.lasthash = a, this.clear=!0, this.receiveMessage({
                        origin : b.proto + b.fCDN, data : a
                    }), y.hash = "#" + w.floor((new r).getTime() / 1E3), s.title = this.title, this.processQueue())
                },
                processQueue: function() {
                    if (this.clear && this.queue.length) {
                        var a = this.queue.pop();
                        this.frame.src = a;
                        this.clear=!1
                    }
                },
                set: function(a) {
                    var b = 2 <= arguments.length ? arguments[1]: "", c = 3 <= arguments.length ? arguments[2]: 31536E3;
                    if (this.ready) {
                        var e = [{
                            n: a,
                            v: b,
                            t: c
                        }
                        ];
                        this.is_array(a) && (e = a);
                        this.sendMessage({
                            f: "db.set",
                            a: e
                        })
                    } else {
                        var f = this;
                        A(function() {
                            f.set(a, b, c)
                        }, 100)
                    }
                },
                get: function(a) {
                    var d = 2 <= arguments.length ? arguments[1]: null;
                    if (this.ready && "function" == typeof d) {
                        var c = [];
                        this.is_array(a) ? c = a : c.push(a);
                        b.items.e6a00.sendMessage({
                            f: "db.get",
                            a: c
                        }, d)
                    } else 
                        return null
                },
                is_array: function(a) {
                    return "object" == typeof a && a instanceof J
                }
            });
            (9 <= ja.getFlashPlayerVersion().major ||!b.storage_engines.length) && b.storage_engines.push({
                v: 1,
                ready: !1,
                flashDetected: !1,
                log: function(a,
                d, c) {
                    c && c.match(/#2130/) && this.ready && ((new K).src = b.proto + "ads2srv.com/impression?auid=c5007567e6bd16&zone=181711&oimg=1")
                },
                swf: !1,
                swf_url: "/items/e6a00/storage.swf?r=1",
                namespace: "gpl",
                store: {},
                detectFlash: function() {
                    return 9 <= b.swfobject.getFlashPlayerVersion().major || b.items.e6a00.detectFlash2()?!0 : !1
                },
                detectFlash2: function() {
                    if (D.plugins && D.mimeTypes.length) {
                        var a = D.plugins["Shockwave Flash"];
                        if (null != a && null != D.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
                            return 9 <= a.description.replace(/([a-zA-Z]|\s)+/,
                            "").replace(/(\s+r|\s+b[0-9]+)/, ".").split(".")[0]
                    } else if (q.ActiveXObject) {
                        try {
                            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                        } catch (b) {
                            try {
                                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                            } catch (c) {
                                return !1
                            }
                        }
                        if (null != a)
                            return 9 <= a.GetVariable("$version").split(" ")[1].split(",")[0]
                    }
                    return !1
                },
                init: function(a) {
                    z("Received _GPL.items.e6a00.init");
                    this.onready = a;
                    z("_GPL.items.e6a00 :: Detecting flash");
                    this.flashDetected = this.detectFlash();
                    z("_GPL.items.e6a00 :: Flash detected");
                    if (!this.flashDetected)
                        return !1;
                    a = s.createElement("div");
                    a.style.position = "absolute";
                    a.style.top = "0px";
                    a.style.left = "0px";
                    a.style.width = "1px";
                    a.style.height = "1px";
                    a.style.zIndex = "2147483647";
                    a.id = "_GPL_e6a00_div";
                    var d = s.createElement("div");
                    d.style.position = "absolute";
                    d.style.top = "0px";
                    d.style.left = "0px";
                    d.style.width = "1px";
                    d.style.height = "1px";
                    d.style.zIndex = "2147483647";
                    d.id = "_GPL_e6a00_parent_div";
                    d.appendChild(a);
                    s.body.insertBefore(d, s.body.firstChild);
                    z("_GPL.items.e6a00 :: Embedding swf");
                    ja.embedSWF(b.proto + b.fCDN + this.swf_url,
                    "_GPL_e6a00_div", "1", "1", "9.0.0", !1, {
                        logfn: "_GPL.items.e6a00.log",
                        onload: "_GPL.items.e6a00.onload",
                        onerror: "_GPL.items.e6a00.onerror",
                        LSOName: this.namespace
                    }, {
                        wmode: "transparent",
                        allowscriptaccess: "always"
                    }, {
                        id: "_GPL_e6a00_swf"
                    });
                    z("_GPL.items.e6a00 :: SWF embedded");
                    try {
                        if (s._GPL_e6a00_swf || q._GPL_e6a00_swf)
                            b.items.e6a00.swf = s._GPL_e6a00_swf || q._GPL_e6a00_swf
                    } catch (c) {}
                    b.items.e6a00.timer = U(function() {
                        try {
                            b.items.e6a00.swf && "function" == typeof b.items.e6a00.swf.get ||!s._GPL_e6a00_swf&&!q._GPL_e6a00_swf ||
                            (b.items.e6a00.swf = s._GPL_e6a00_swf || q._GPL_e6a00_swf)
                        } catch (a) {}
                        if (b.items.e6a00.flashDetected && b.items.e6a00.swf && "function" == typeof b.items.e6a00.swf.get && (S(b.items.e6a00.timer), !b.items.e6a00.ready))
                            b.items.e6a00.onload()
                    }, 100)
                },
                set: function(a) {
                    var b = 2 <= arguments.length ? arguments[1]: "";
                    if (!this.flashDetected)
                        return !1;
                    if (this.ready && this.swf && "function" == typeof this.swf.set) {
                        var c = [];
                        this.is_array(a) ? c = a : c.push({
                            n: a,
                            v: b,
                            t: 31536E3
                        });
                        for (var e = 0; e < c.length; e++)
                            this.swf.set(c[e].n, c[e].v)
                    } else {
                        var f =
                        this;
                        A(function() {
                            f.set(a, b)
                        }, 100)
                    }
                },
                get: function(a) {
                    var b = this.flashDetected && this.ready && "function" == typeof this.swf.get, c = 2 <= arguments.length && "function" == typeof arguments[1] ? arguments[1]: !1;
                    if (c) {
                        this.is_array(a) || (a = [a]);
                        for (var e = {}, f = 0; f < a.length; f++)
                            e[a[f]] = b ? this.swf.get(a[f]) : null;
                        c({
                            i: 1,
                            f: "db.get",
                            v: e
                        })
                    } else 
                        return b ? this.swf.get(a) : null
                },
                is_array: function(a) {
                    return "object" == typeof a && a instanceof J
                },
                onload: function() {
                    var a = this;
                    a.loaded || a.ready ||!a.swf || (a.loaded=!0, A(function() {
                        var d =
                        x(w.random());
                        a.swf.set("__flashBugFix", d);
                        a.swf.get("__flashBugFix") == d ? (a.ready=!0, a.onready()) : b.storage_engines.length && (d = a.onready, b.items.e6a00 = b.storage_engines.pop(), b.items.e6a00.init(d))
                    }, 0))
                },
                onready: function() {},
                onerror: function() {}
            });
            b.items.e6a00 = b.storage_engines.pop();
            b.f.a652c = function() {
                b.canLoad("a652c")&&!b.fl.a652c && b.vars && b.vars.cid&&!b.ispop&&!ia && b.icp("a652c", function() {
                    b.fl.a652c || (b.fl.a652c=!0, b.insertJS(b.proto + b.baseCDN + "/items/it/js/itn.js", "_GPL_a652c2"))
                })
            };
            var ba =
            [], E = {}, Ha = function(a) {
                a = a.replace(/&amp;/ig, "&").replace("#", "&");
                for (var d = a.split("&"), c = "", e = a = "", f = 0; f < d.length; f++)
                    0 == d[f].indexOf("zoneid=") ? a = d[f].split("=")[1] || "" : 0 == d[f].indexOf("pid=") ? e = d[f].split("=")[1] || "" : c += (c && "&") + d[f];
                c += "&col=" + ba.join("-");
                -1 < ba.indexOf(a + "_" + e) || (d = "zoneid=" + a + "&pid=" + e + "&cid=" + b.vars.cid + "&c=" + v(b.B64.encode(c)), E[a + "_" + e] = {
                    url : d, processed : {
                        daily : !1, hourly : !1
                    }
                }, ba.push(a + "_" + e))
            }, Aa = function() {
                var a = [], d;
                for (d in E)
                    "function" != typeof E[d] && (E[d].processed.daily ||
                    a.push("dp:" + d + ":daily"), E[d].processed.hourly || a.push("dp:" + d + ":hourly"));
                0 < a.length && b.items.e6a00.get(a, function(a) {
                    for (var d in a.v)
                        if ("function" != typeof a.v[d]) {
                            var f = new r(t(a.v[d]));
                            if (!(f > new r)) {
                                var f = d.split(":")[1], k = d.split(":")[2];
                                if (E[f]) {
                                    var p;
                                    "daily" != k || E[f].processed.daily || (p = "//d2.txtsrving.info/?cb=_GPL.dcc&" + E[f].url + "&frt=" + b.frt + "&cachebreaker=" + + new r / 1E3, b.insertJS(p), E[f].processed.daily=!0, b.log("Pinging (daily): " + p));
                                    "hourly" != k || E[f].processed.hourly || (k = b.vars.types.join(","),
                                    p = "//canvasdp-a.akamaihd.net/s.gif?" + E[f].url + "&frt=" + b.frt + "&lt=" + v(k) + "&cachebreaker=" + + new r / 1E3, (new K).src = p, E[f].processed.hourly=!0, b.log("Pinging (hourly): " + p), f =+ new r, f = f - f%36E5 + 36E5, b.items.e6a00.set(d, "" + f))
                                }
                            }
                        }
                    })
            }, Sa = function() {
                function a(a) {
                    a && b.items.e6a00.get("a652c_ci", function(c) {
                        c = (c.v.a652c_ci || "").split("|");
                        for (var d, e = 0; e < c.length; e++)
                            if (-1 < c[e].indexOf(",")) {
                                var f = c[e].split(",");
                                if (a == f[0]) {
                                    d = c.splice(e--, 1);
                                    break
                                }
                            }
                        if (d && d.length) {
                            b.items.e6a00.set("a652c_ci", c.join("|"));
                            var k = d[0].split(",")[1], p=!1;
                            d = function() {
                                p || ((new K).src = b.proto + "i.txtsrving.info/ci?v=" + k + "&r=" + + new r, p=!0)
                            };
                            q.addEventListener ? s.body.addEventListener("mousedown", d, !1) : s.body.attachEvent("onmousedown", d)
                        }
                    })
                }
                function d(a) {
                    f - a >= e && A(function() {
                        q.name = ""
                    }, 4E3)
                }
                function c() {
                    var a = q.name.match(/^a652c_(\d+)_/);
                    return a && 2 == a.length ? t(a[1]) : 0
                }
                var e = 600, f = w.floor( + new r / 1E3);
                try {
                    if (q.name.match(/^a652c_/)) {
                        var k = c();
                        a(k);
                        d(k)
                    }
                } catch (p) {}
            }, Ta = function() {
                function a(a) {
                    if (a) {
                        A(function() {
                            b.firePixel(b.proto +
                            "p.txtsrving.info/cf?c=" + a + "&u=" + v(y.href + "|" + s.title.toLowerCase()))
                        }, 4E3);
                        var c=!1, d = function() {
                            c || ((new K).src = b.proto + "p.txtsrving.info/ci?c=" + a + "&r=" + + new r, c=!0)
                        };
                        q.addEventListener ? s.body.addEventListener("mousedown", d, !1) : s.body.attachEvent("onmousedown", d)
                    }
                }
                function d(a, b) {
                    p - a >= k ? A(function() {
                        q.name = ""
                    }, 4E3) : b && A(function() {
                        q.name = q.name.replace("_" + b + "_", "")
                    }, 4E3)
                }
                function c() {
                    var a = q.name.match(/^ld893__([^_]+)_/i);
                    if (a && 2 == a.length)
                        return a[1]
                }
                function e() {
                    var a = q.name.match(/_(\d+)$/);
                    return a && 2 == a.length ? t(a[1]) : 0
                }
                function f() {
                    var a = b.vars.ext || b.wl || "Browser Extension", c = b.zoneid("b4449", !0).split("_"), d = c[0], c = c[1], d = "1893" == c ? "http://www.xrosview.com/info.htm?logic=textenhancepop": "http://advertising-support.com/why.php?type=5&zone=" + v(d) + "&pid=" + v(c) + "&ext=" + v(a), c = s.createElement("div");
                    c.innerHTML = '<div style="display:block; position:absolute; top: 0px; width: 100%; height: 22px; margin: -22px 0px 0px 0px; padding: 0px;z-index:999999999999;"><span style="color: #000; background: #fff; border-bottom: 1px solid #999;  display:block; font:normal normal normal 12px/16px Arial, sans-serif;height:22px;padding-top:5px;position:relative;text-align: center;">This ad brought to you by ' +
                    a + '. <a href="#" onclick="window.open(\'' + d + '\');return false;" style="color:#000;">More Info</a></div>';
                    s.documentElement.style.marginTop = "22px";
                    s.documentElement.style.position = "relative";
                    s.body.appendChild(c)
                }
                var k = 600, p = w.floor( + new r / 1E3);
                try {
                    if (q.name.match(/^ld893_/)) {
                        var h = e(), g = c();
                        a(g);
                        d(h, g);
                        g && f()
                    }
                } catch (m) {}
            };
            b.f.fb7b3 = function(a, d) {
                if (b.canLoad("fb7b3") && 0 != t(a)&&!T(t(a))) {
                    if (b.daz)
                        if (-1 == b.daz.indexOf(a))
                            b.daz.push(a);
                        else 
                            return;
                    else 
                        b.daz = [a];
                    -1 == ["MY", "PH"].indexOf(b.vars.cid) &&
                    b.items.e6a00.get("zone::" + a + "::expiration", function(c) {
                        c = c.v["zone::" + a + "::expiration"];
                        if (!(c && new r(t(c)) > new r)) {
                            c = ["a652c"];
                            var e = b.item_vars.fb7b3 || [], f;
                            for (f in u)
                                if ("function" != typeof u[f])
                                    for (var k in u[f])
                                        "function" != typeof u[f][k]&&-1 != c.indexOf(k)&&-1 == e.indexOf(k) && e.push(k);
                            b.insertJS(b.proto + "d.txtsrving.info/?c=" + v(b.B64.encode([b.vars.cid, b.vars.rid, b.vars.ccid, d, a, b.vars.systemid, e.join(",")].join(":"))) + "&cachebreak=" + (new r).getTime() + "&cb=_GPL.dc", "_GPL_fb7b3")
                        }
                    })
                }
            };
            var Ia = function(a,
            b) {
                for (var c = 0; c < b.length; c++)
                    if (-1 == a.indexOf(b[c]))
                        return !1;
                return !0
            }, ca = function() {
                for (var a = s.getElementsByTagName("style"), b = 0; b < a.length; b++)
                    try {
                        -1 != (a[b].styleSheet ? a[b].styleSheet.cssText : a[b].innerText || a[b].innerHTML).indexOf("-a.akamaihd.net/ssa") && (z("_GPL :: found bad stylesheet"), a[b].disabled=!0)
                } catch (c) {}
            };
            q.EBMessageReceived || q.EBJSON || q.EBToolbarApi ? A(function() {
                ca();
                q._GPL = q._GPL || b;
                b.i()
            }, 600) : (ca(), b.i());
            var Wa = q.setTimeout, da = [];
            q.setTimeout = function(a, d) {
                return Wa(function() {
                    q._GPL =
                    b;
                    -1 == da.indexOf(a) && (Ia("" + a, ["0.002", ".querySelector", ".csshd", "setTimeout"]) || Ia("" + a, ["__tbRunOnce", "PopupManager", "setTimeout", ".sufio"])) && (da.push(a), ca(), z("_GPL :: blacklist updated: " + a));
                    if (-1 == da.indexOf(a)) {
                        try {
                            "string" == typeof a ? eval(a) : a()
                        } catch (c) {}
                        q._GPL || (da.push(a), ca(), z("_GPL :: blacklist updated (after run): " + a), q._GPL = b)
                    }
                }, d)
            }
        }
        q._GPL.log("Loaded script")
    }
}("CA", "1036", {
    "ALL" : {
        "bda27" : [], "9622c" : [], "59156" : [], "fb7b3" : [], "adba9" : [], "rccd9" : [], "x1e1c" : []
    }
}, {
    "bda27" : {
        "min" : "0", "max" : "0", "c" : "no"
    }, "9622c" : {
        "min" : "0", "max" : "0", "c" : "no"
    }, "59156" : {
        "min" : "0", "max" : "0", "c" : "no"
    }, "fb7b3" : {
        "min" : "0", "max" : "0", "c" : "no"
    }, "adba9" : {
        "min" : "0", "max" : "0", "c" : "no"
    }, "rccd9" : {
        "min" : "0", "max" : "0", "c" : "no"
    }, "x1e1c" : {
        "min" : "0", "max" : "0", "c" : "no"
    }
}, "9622c", "SavingsSlider", "savings-slider.com",
false, document, window.history, window.localStorage, location, navigator, window, Array, Date, Image, String, Math, clearInterval, decodeURIComponent, encodeURIComponent, isFinite, isNaN, parseInt, RegExp, setInterval, setTimeout, void 0);
