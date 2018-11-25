!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {},
        c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, y = function e(t) {
            return null != t && t === t.window
        }, v = {type: !0, src: !0, noModule: !0};

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }

    var b = "3.3.1", w = function (e, t) {
        return new w.fn.init(e, t)
    }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1", constructor: w, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return w.each(this, e)
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: n.sort, splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            m(e)
        }, each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        }, guid: 1, support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length, n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0,
            C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) {
                return e === t && (f = !0), 0
            }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W),
            U = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                p()
            }, ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [T, d, x];
                                    break
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [], n = [], r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }), lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === h
                }, focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: de(!1), disabled: de(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !r.pseudos.empty(e)
                }, header: function (e) {
                    return Y.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) r.pseudos[t] = fe(t);
        for (t in{submit: !0, reset: !0}) r.pseudos[t] = pe(t);

        function ye() {
        }

        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0
                }
                return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--) (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                return e === t
            }, s, !0), f = me(function (e) {
                return O(t, e) > -1
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i
            }]; u < o; u++) if (n = r.relative[e[u].type]) p = [me(xe(p), n)]; else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                    return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                }
                p.push(n)
            }
            return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                        while (y = e[h++]) if (y(f, a || d, s)) {
                            u.push(f);
                            break
                        }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--, o && x.push(f))
                }
                if (v += m, n && m !== v) {
                    h = 0;
                    while (y = t[h++]) y(x, b, a, s);
                    if (o) {
                        if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E, l = w), x
            };
            return n ? se(o) : o
        }

        return s = oe.compile = function (e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && w(e).is(n)) break;
            r.push(e)
        }
        return r
    }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }

    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};
    w.fn.extend({
        has: function (e) {
            var t = w(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return k(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        }, next: function (e) {
            return P(e, "nextSibling")
        }, prev: function (e) {
            return P(e, "previousSibling")
        }, nextAll: function (e) {
            return k(e, "nextSibling")
        }, prevAll: function (e) {
            return k(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        }, siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return S(e.firstChild)
        }, contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
            }
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, l = {
            add: function () {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments), n && !t && u()), this
            }, remove: function () {
                return w.each(arguments, function (e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    w.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", i = {
                    state: function () {
                        return r
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return i.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function () {
                                var s = this, u = arguments, l = function () {
                                    var e, l;
                                    if (!(t < o)) {
                                        if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                    }
                                }, c = i ? l : function () {
                                    try {
                                        l()
                                    } catch (e) {
                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                    }
                                };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }

                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                }, o = {};
            return w.each(n, function (e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }

    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n) z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(w(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, X = /^-ms-/, U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }

    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }

    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
                n = te(n)
            } catch (e) {
            }
            K.set(e, t, n)
        } else n = void 0;
        return n
    }

    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        }, data: function (e, t, n) {
            return K.access(e, t, n)
        }, removeData: function (e, t) {
            K.remove(e, t)
        }, _data: function (e, t, n) {
            return J.access(e, t, n)
        }, _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        }, se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return w.css(e, t, "")
            }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    w.fn.extend({
        show: function () {
            return fe(this, !0)
        }, hide: function () {
            return fe(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }

    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    !function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {
        }
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }

    w.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return N(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
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
        "char": !0,
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
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                if (t = n[J.expando]) {
                    if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0
                }
                n[K.expando] && (n[K.expando] = void 0)
            }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        }, remove: function (e) {
            return Ie(this, e)
        }, text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Be = new RegExp(oe.join("|"), "i");
    !function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            }, pixelBoxStyles: function () {
                return t(), s
            }, pixelPosition: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), u
            }, scrollboxSize: function () {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/,
        Ue = {position: "absolute", visibility: "hidden", display: "block"},
        Ve = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }

    w.Tween = tt, tt.prototype = {
        constructor: tt, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
            g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t) if (i = t[r], it.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0
            }
            d[r] = y && y[r] || w.style(e, r)
        }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
        }, prefilters: [ct], prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }), w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.timers = [], w.fx.tick = function () {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), nt = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at())
    }, w.fx.stop = function () {
        rt = null
    }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }

    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                        if (t = w(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {type: e, isSimulated: !0});
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location, Et = Date.now(), kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }

    w.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(Dt, "\r\n")}
                }) : {name: t.name, value: n.replace(Dt, "\r\n")}
            }).get()
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {},
        Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {}, o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }

        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(),
                m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }

            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Vt = {0: 200, 1223: 204}, Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a,
            s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({Height: "height", Width: "width"}, function (e, t) {
        w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Jt = e.jQuery, Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});
!function (a) {
    var b, c, d = "0.4.2", e = "hasOwnProperty", f = /[\.\/]/, g = /\s*,\s*/, h = "*", i = function (a, b) {
        return a - b
    }, j = {n: {}}, k = function () {
        for (var a = 0, b = this.length; b > a; a++) if ("undefined" != typeof this[a]) return this[a]
    }, l = function () {
        for (var a = this.length; --a;) if ("undefined" != typeof this[a]) return this[a]
    }, m = function (a, d) {
        a = String(a);
        var e, f = c, g = Array.prototype.slice.call(arguments, 2), h = m.listeners(a), j = 0, n = [], o = {}, p = [],
            q = b;
        p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
        for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
        for (n.sort(i); n[j] < 0;) if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
        for (r = 0; s > r; r++) if (e = h[r], "zIndex" in e) if (e.zIndex == n[j]) {
            if (p.push(e.apply(d, g)), c) break;
            do if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break; while (e)
        } else o[e.zIndex] = e; else if (p.push(e.apply(d, g)), c) break;
        return c = f, b = q, p
    };
    m._events = j, m.listeners = function (a) {
        var b, c, d, e, g, i, k, l, m = a.split(f), n = j, o = [n], p = [];
        for (e = 0, g = m.length; g > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++) for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, m.on = function (a, b) {
        if (a = String(a), "function" != typeof b) return function () {
        };
        for (var c = a.split(g), d = 0, e = c.length; e > d; d++) !function (a) {
            for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {n: {}});
            for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++) if (e.f[g] == b) {
                c = !0;
                break
            }
            !c && e.f.push(b)
        }(c[d]);
        return function (a) {
            +a == +a && (b.zIndex = +a)
        }
    }, m.f = function (a) {
        var b = [].slice.call(arguments, 1);
        return function () {
            m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, m.stop = function () {
        c = 1
    }, m.nt = function (a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, m.nts = function () {
        return b.split(f)
    }, m.off = m.unbind = function (a, b) {
        if (!a) return void(m._events = j = {n: {}});
        var c = a.split(g);
        if (c.length > 1) for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b); else {
            c = a.split(f);
            var k, l, n, d, i, o, p, q = [j];
            for (d = 0, i = c.length; i > d; d++) for (o = 0; o < q.length; o += n.length - 2) {
                if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]); else for (l in k) k[e](l) && n.push(k[l]);
                q.splice.apply(q, n)
            }
            for (d = 0, i = q.length; i > d; d++) for (k = q[d]; k.n;) {
                if (b) {
                    if (k.f) {
                        for (o = 0, p = k.f.length; p > o; o++) if (k.f[o] == b) {
                            k.f.splice(o, 1);
                            break
                        }
                        !k.f.length && delete k.f
                    }
                    for (l in k.n) if (k.n[e](l) && k.n[l].f) {
                        var r = k.n[l].f;
                        for (o = 0, p = r.length; p > o; o++) if (r[o] == b) {
                            r.splice(o, 1);
                            break
                        }
                        !r.length && delete k.n[l].f
                    }
                } else {
                    delete k.f;
                    for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
                }
                k = k.n
            }
        }
    }, m.once = function (a, b) {
        var c = function () {
            return m.unbind(a, c), b.apply(this, arguments)
        };
        return m.on(a, c)
    }, m.version = d, m.toString = function () {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function () {
        return m
    }) : a.eve = m
}(this), function (a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function (c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function (a, b) {
    var c = function (b) {
        var c = {},
            d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
                setTimeout(a, 16)
            }, e = Array.isArray || function (a) {
                return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
            }, f = 0, g = "M" + (+new Date).toString(36), h = function () {
                return g + (f++).toString(36)
            }, i = Date.now || function () {
                return +new Date
            }, j = function (a) {
                var b = this;
                if (null == a) return b.s;
                var c = b.s - a;
                b.b += b.dur * c, b.B += b.dur * c, b.s = a
            }, k = function (a) {
                var b = this;
                return null == a ? b.spd : void(b.spd = a)
            }, l = function (a) {
                var b = this;
                return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
            }, m = function () {
                var a = this;
                delete c[a.id], a.update(), b("mina.stop." + a.id, a)
            }, n = function () {
                var a = this;
                a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
            }, o = function () {
                var a = this;
                a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
            }, p = function () {
                var a, b = this;
                if (e(b.start)) {
                    a = [];
                    for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
                } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                b.set(a)
            }, q = function () {
                var a = 0;
                for (var e in c) if (c.hasOwnProperty(e)) {
                    var f = c[e], g = f.get();
                    a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function (a) {
                        setTimeout(function () {
                            b("mina.finish." + a.id, a)
                        })
                    }(f)), f.update()
                }
                a && d(q)
            }, r = function (a, b, e, f, g, i, s) {
                var t = {
                    id: h(),
                    start: a,
                    end: b,
                    b: e,
                    s: 0,
                    dur: f - e,
                    spd: 1,
                    get: g,
                    set: i,
                    easing: s || r.linear,
                    status: j,
                    speed: k,
                    duration: l,
                    stop: m,
                    pause: n,
                    resume: o,
                    update: p
                };
                c[t.id] = t;
                var u, v = 0;
                for (u in c) if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
                return 1 == v && d(q), t
            };
        return r.time = i, r.getById = function (a) {
            return c[a] || null
        }, r.linear = function (a) {
            return a
        }, r.easeout = function (a) {
            return Math.pow(a, 1.7)
        }, r.easein = function (a) {
            return Math.pow(a, .48)
        }, r.easeinout = function (a) {
            if (1 == a) return 1;
            if (0 == a) return 0;
            var b = .48 - a / 1.04, c = Math.sqrt(.1734 + b * b), d = c - b,
                e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1), f = -c - b,
                g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1), h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        }, r.backin = function (a) {
            if (1 == a) return 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, r.backout = function (a) {
            if (0 == a) return 0;
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        }, r.elastic = function (a) {
            return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
        }, r.bounce = function (a) {
            var b, c = 7.5625, d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }, a.mina = r, r
    }("undefined" == typeof b ? function () {
    } : b), d = function () {
        function d(a, b) {
            if (a) {
                if (a.tagName) return y(a);
                if (f(a, "array") && d.set) return d.set.apply(d, a);
                if (a instanceof u) return a;
                if (null == b) return a = z.doc.querySelector(a), y(a)
            }
            return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new x(a, b)
        }

        function e(a, b) {
            if (b) {
                if ("#text" == a && (a = z.doc.createTextNode(b.text || "")), "string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(W, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(X, b.substring(4)) : a.getAttribute(b);
                for (var c in b) if (b[A](c)) {
                    var d = B(b[c]);
                    d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(W, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(X, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
                }
            } else a = z.doc.createElementNS(X, a);
            return a
        }

        function f(a, b) {
            return b = B.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || L.call(a).slice(8, -1).toLowerCase() == b
        }

        function h(a) {
            if ("function" == typeof a || Object(a) !== a) return a;
            var b = new a.constructor;
            for (var c in a) a[A](c) && (b[c] = h(a[c]));
            return b
        }

        function i(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0])
        }

        function j(a, b, c) {
            function d() {
                var e = Array.prototype.slice.call(arguments, 0), f = e.join("␀"), g = d.cache = d.cache || {},
                    h = d.count = d.count || [];
                return g[A](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
            }

            return d
        }

        function k(a, b, c, d, e, f) {
            if (null == e) {
                var g = a - c, h = b - d;
                return g || h ? (180 + 180 * E.atan2(-h, -g) / I + 360) % 360 : 0
            }
            return k(a, b, e, f) - k(c, d, e, f)
        }

        function l(a) {
            return a % 360 * I / 180
        }

        function m(a) {
            return 180 * a / I % 360
        }

        function n(a) {
            var b = [];
            return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
                return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, E.tan(l(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, E.tan(l(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
            }), b
        }

        function o(a, b) {
            var c = eb(a), e = new d.Matrix;
            if (c) for (var f = 0, g = c.length; g > f; f++) {
                var h, i, j, k, l, m = c[f], n = m.length, o = B(m[0]).toLowerCase(), p = m[0] != o,
                    q = p ? e.invert() : 0;
                "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
            }
            return e
        }

        function p(a, b) {
            if (null == b) {
                var c = !0;
                if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
                b = n(b)
            } else b = d._.rgTransform.test(b) ? B(b).replace(/\.{3}|\u2026/g, a._.transform || J) : n(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : B(b)), a._.transform = b;
            var e = o(b, a.getBBox(1));
            return c ? e : void(a.matrix = e)
        }

        function q(a) {
            var b = a.node.ownerSVGElement && y(a.node.ownerSVGElement) || a.node.parentNode && y(a.node.parentNode) || d.select("svg") || d(0, 0),
                c = b.select("defs"), e = null == c ? !1 : c.node;
            return e || (e = w("defs", b.node).node), e
        }

        function r(a) {
            return a.node.ownerSVGElement && y(a.node.ownerSVGElement) || d.select("svg")
        }

        function s(a, b, c) {
            function d(a) {
                if (null == a) return J;
                if (a == +a) return a;
                e(j, {width: a});
                try {
                    return j.getBBox().width
                } catch (b) {
                    return 0
                }
            }

            function f(a) {
                if (null == a) return J;
                if (a == +a) return a;
                e(j, {height: a});
                try {
                    return j.getBBox().height
                } catch (b) {
                    return 0
                }
            }

            function g(d, e) {
                null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
            }

            var h = r(a).node, i = {}, j = h.querySelector(".svg---mgr");
            switch (j || (j = e("rect"), e(j, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                "class": "svg---mgr",
                fill: "none"
            }), h.appendChild(j)), a.type) {
                case"rect":
                    g("rx", d), g("ry", f);
                case"image":
                    g("width", d), g("height", f);
                case"text":
                    g("x", d), g("y", f);
                    break;
                case"circle":
                    g("cx", d), g("cy", f), g("r", d);
                    break;
                case"ellipse":
                    g("cx", d), g("cy", f), g("rx", d), g("ry", f);
                    break;
                case"line":
                    g("x1", d), g("x2", d), g("y1", f), g("y2", f);
                    break;
                case"marker":
                    g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
                    break;
                case"radialGradient":
                    g("fx", d), g("fy", f);
                    break;
                case"tspan":
                    g("dx", d), g("dy", f);
                    break;
                default:
                    g(b, d)
            }
            return h.removeChild(j), i
        }

        function t(a) {
            f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
            for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
            for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function (a) {
                d.appendChild(a.node)
            }) : d.appendChild(a[b].node);
            var e = d.childNodes;
            for (b = 0; b < e.length; b++) this[c++] = y(e[b]);
            return this
        }

        function u(a) {
            if (a.snap in Y) return Y[a.snap];
            var b, c = this.id = V();
            try {
                b = a.ownerSVGElement
            } catch (d) {
            }
            if (this.node = a, b && (this.paper = new x(b)), this.type = a.tagName, this.anims = {}, this._ = {transform: []}, a.snap = c, Y[c] = this, "g" == this.type && (this.add = t), this.type in {
                g: 1,
                mask: 1,
                pattern: 1
            }) for (var e in x.prototype) x.prototype[A](e) && (this[e] = x.prototype[e])
        }

        function v(a) {
            this.node = a
        }

        function w(a, b) {
            var c = e(a);
            b.appendChild(c);
            var d = y(c);
            return d
        }

        function x(a, b) {
            var c, d, f, g = x.prototype;
            if (a && "svg" == a.tagName) {
                if (a.snap in Y) return Y[a.snap];
                var h = a.ownerDocument;
                c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
                for (var i in g) g[A](i) && (c[i] = g[i]);
                c.paper = c.root = c
            } else c = w("svg", z.doc.body), e(c.node, {height: b, version: 1.1, width: a, xmlns: X});
            return c
        }

        function y(a) {
            return a ? a instanceof u || a instanceof v ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new x(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new x(a.contentDocument.getElementsByTagName("svg")[0]) : new u(a) : a
        }

        d.version = "0.3.0", d.toString = function () {
            return "Snap v" + this.version
        }, d._ = {};
        var z = {win: a, doc: a.document};
        d._.glob = z;
        var A = "hasOwnProperty", B = String, C = parseFloat, D = parseInt, E = Math, F = E.max, G = E.min, H = E.abs,
            I = (E.pow, E.PI), J = (E.round, ""), K = " ", L = Object.prototype.toString,
            M = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            N = "	\n\f\r   ᠎             　\u2028\u2029",
            O = (d._.separator = new RegExp("[," + N + "]+"), new RegExp("[" + N + "]", "g"), new RegExp("[" + N + "]*,[" + N + "]*")),
            P = {hs: 1, rg: 1},
            Q = new RegExp("([a-z])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
            R = new RegExp("([rstm])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
            S = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + N + "]*,?[" + N + "]*", "ig"), T = 0,
            U = "S" + (+new Date).toString(36), V = function () {
                return U + (T++).toString(36)
            }, W = "http://www.w3.org/1999/xlink", X = "http://www.w3.org/2000/svg", Y = {}, Z = d.url = function (a) {
                return "url('#" + a + "')"
            };
        d._.$ = e, d._.id = V, d.format = function () {
            var a = /\{([^\}]+)\}/g, b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                c = function (a, c, d) {
                    var e = d;
                    return c.replace(b, function (a, b, c, d, f) {
                        b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                    }), e = (null == e || e == d ? a : e) + ""
                };
            return function (b, d) {
                return B(b).replace(a, function (a, b) {
                    return c(a, b, d)
                })
            }
        }(), d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function (a, b, c) {
            if (c = f(c, "finite") ? c : 10, f(a, "array")) {
                for (var d = a.length; d--;) if (H(a[d] - b) <= c) return a[d]
            } else {
                a = +a;
                var e = b % a;
                if (c > e) return b - e;
                if (e > a - c) return b - e + a
            }
            return b
        }, d.getRGB = j(function (a) {
            if (!a || (a = B(a)).indexOf("-") + 1) return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: bb};
            if ("none" == a) return {r: -1, g: -1, b: -1, hex: "none", toString: bb};
            if (!(P[A](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = $(a)), !a) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: bb
            };
            var b, c, e, g, h, i, j = a.match(M);
            return j ? (j[2] && (e = D(j[2].substring(5), 16), c = D(j[2].substring(3, 5), 16), b = D(j[2].substring(1, 3), 16)), j[3] && (e = D((h = j[3].charAt(3)) + h, 16), c = D((h = j[3].charAt(2)) + h, 16), b = D((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = C(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = C(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = G(E.round(b), 255), c = G(E.round(c), 255), e = G(E.round(e), 255), g = G(F(g, 0), 1), j = {
                r: b,
                g: c,
                b: e,
                toString: bb
            }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: bb
            }
        }, d), d.hsb = j(function (a, b, c) {
            return d.hsb2rgb(a, b, c).hex
        }), d.hsl = j(function (a, b, c) {
            return d.hsl2rgb(a, b, c).hex
        }), d.rgb = j(function (a, b, c, d) {
            if (f(d, "finite")) {
                var e = E.round;
                return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")"
            }
            return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
        });
        var $ = function (a) {
            var b = z.doc.getElementsByTagName("head")[0] || z.doc.getElementsByTagName("svg")[0], c = "rgb(255, 0, 0)";
            return ($ = j(function (a) {
                if ("red" == a.toLowerCase()) return c;
                b.style.color = c, b.style.color = a;
                var d = z.doc.defaultView.getComputedStyle(b, J).getPropertyValue("color");
                return d == c ? null : d
            }))(a)
        }, _ = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }, ab = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }, bb = function () {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }, cb = function (a, b, c) {
            if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
                var e = d.getRGB(a);
                a = e.r, b = e.g, c = e.b
            }
            return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
        }, db = function (a, b, c, e) {
            a = E.round(255 * a), b = E.round(255 * b), c = E.round(255 * c);
            var g = {r: a, g: b, b: c, opacity: f(e, "finite") ? e : 1, hex: d.rgb(a, b, c), toString: bb};
            return f(e, "finite") && (g.opacity = e), g
        };
        d.color = function (a) {
            var b;
            return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {hex: "none"}, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = bb, a
        }, d.hsb2rgb = function (a, b, c, d) {
            f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
            var e, g, h, i, j;
            return a = a % 360 / 60, j = c * b, i = j * (1 - H(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
        }, d.hsl2rgb = function (a, b, c, d) {
            f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
            var e, g, h, i, j;
            return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - H(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
        }, d.rgb2hsb = function (a, b, c) {
            c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
            var d, e, f, g;
            return f = F(a, b, c), g = f - G(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
                h: d,
                s: e,
                b: f,
                toString: _
            }
        }, d.rgb2hsl = function (a, b, c) {
            c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
            var d, e, f, g, h, i;
            return g = F(a, b, c), h = G(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                h: d,
                s: e,
                l: f,
                toString: ab
            }
        }, d.parsePathString = function (a) {
            if (!a) return null;
            var b = d.path(a);
            if (b.arr) return d.path.clone(b.arr);
            var c = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0}, e = [];
            return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || B(a).replace(Q, function (a, b, d) {
                var f = [], g = b.toLowerCase();
                if (d.replace(S, function (a, b) {
                    b && f.push(+b)
                }), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f)); else for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]);) ;
            }), e.toString = d.path.toString, b.arr = d.path.clone(e), e
        };
        var eb = d.parseTransformString = function (a) {
            if (!a) return null;
            var b = [];
            return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || B(a).replace(R, function (a, c, d) {
                {
                    var e = [];
                    c.toLowerCase()
                }
                d.replace(S, function (a, b) {
                    b && e.push(+b)
                }), b.push([c].concat(e))
            }), b.toString = d.path.toString, b
        };
        d._.svgTransform2string = n, d._.rgTransform = new RegExp("^[a-z][" + N + "]*-?\\.?\\d", "i"), d._.transform2matrix = o, d._unit2px = s;
        z.doc.contains || z.doc.compareDocumentPosition ? function (a, b) {
            var c = 9 == a.nodeType ? a.documentElement : a, d = b && b.parentNode;
            return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
        } : function (a, b) {
            if (b) for (; b;) if (b = b.parentNode, b == a) return !0;
            return !1
        };
        d._.getSomeDefs = q, d._.getSomeSVG = r, d.select = function (a) {
            return y(z.doc.querySelector(a))
        }, d.selectAll = function (a) {
            for (var b = z.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
            return c
        }, setInterval(function () {
            for (var a in Y) if (Y[A](a)) {
                var b = Y[a], c = b.node;
                ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete Y[a]
            }
        }, 1e4), function (a) {
            function g(a) {
                function b(a, b) {
                    var c = e(a.node, b);
                    c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function (c) {
                        var d = {};
                        d[b] = Z(c), e(a.node, d)
                    })))
                }

                function c(a) {
                    var b = e(a.node, "xlink:href");
                    b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function (b) {
                        a.attr("xlink:href", "#" + b)
                    })))
                }

                for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                    d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                    var l = e(d.node, "id");
                    l && (e(d.node, {id: d.id}), h.push({old: l, id: d.id}))
                }
                for (j = 0, k = h.length; k > j; j++) {
                    var m = i[h[j].old];
                    if (m) for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id)
                }
            }

            function h(a, b, c) {
                return function (d) {
                    var e = d.slice(a, b);
                    return 1 == e.length && (e = e[0]), c ? c(e) : e
                }
            }

            function i(a) {
                return function () {
                    var b = a ? "<" + this.type : "", c = this.node.attributes, d = this.node.childNodes;
                    if (a) for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                    if (d.length) {
                        for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += y(d[e]).toString());
                        a && (b += "</" + this.type + ">")
                    } else a && (b += "/>");
                    return b
                }
            }

            a.attr = function (a, c) {
                {
                    var d = this;
                    d.node
                }
                if (!a) return d;
                if (f(a, "string")) {
                    if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
                    var e = {};
                    e[a] = c, a = e
                }
                for (var g in a) a[A](g) && b("snap.util.attr." + g, d, a[g]);
                return d
            }, a.getBBox = function (a) {
                if (!d.Matrix || !d.path) return this.node.getBBox();
                var b = this, c = new d.Matrix;
                if (b.removed) return d._.box();
                for (; "use" == b.type;) if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original; else {
                    var e = b.attr("xlink:href");
                    b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
                }
                var f = b._, g = d.path.get[b.type] || d.path.get.deflt;
                try {
                    return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
                } catch (h) {
                    return d._.box()
                }
            };
            var j = function () {
                return this.string
            };
            a.transform = function (a) {
                var b = this._;
                if (null == a) {
                    for (var c, f = this, g = new d.Matrix(this.node.getCTM()), h = p(this), i = [h], k = new d.Matrix, l = h.toTransformString(), m = B(h) == B(this.matrix) ? B(b.transform) : l; "svg" != f.type && (f = f.parent());) i.push(p(f));
                    for (c = i.length; c--;) k.add(i[c]);
                    return {
                        string: m,
                        globalMatrix: g,
                        totalMatrix: k,
                        localMatrix: h,
                        diffMatrix: g.clone().add(h.invert()),
                        global: g.toTransformString(),
                        total: k.toTransformString(),
                        local: l,
                        toString: j
                    }
                }
                return a instanceof d.Matrix ? this.matrix = a : p(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {gradientTransform: this.matrix}) : "pattern" == this.type ? e(this.node, {patternTransform: this.matrix}) : e(this.node, {transform: this.matrix})), this
            }, a.parent = function () {
                return y(this.node.parentNode)
            }, a.append = a.add = function (a) {
                if (a) {
                    if ("set" == a.type) {
                        var b = this;
                        return a.forEach(function (a) {
                            b.add(a)
                        }), this
                    }
                    a = y(a), this.node.appendChild(a.node), a.paper = this.paper
                }
                return this
            }, a.appendTo = function (a) {
                return a && (a = y(a), a.append(this)), this
            }, a.prepend = function (a) {
                if (a) {
                    if ("set" == a.type) {
                        var b, c = this;
                        return a.forEach(function (a) {
                            b ? b.after(a) : c.prepend(a), b = a
                        }), this
                    }
                    a = y(a);
                    var d = a.parent();
                    this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
                }
                return this
            }, a.prependTo = function (a) {
                return a = y(a), a.prepend(this), this
            }, a.before = function (a) {
                if ("set" == a.type) {
                    var b = this;
                    return a.forEach(function (a) {
                        var c = a.parent();
                        b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                    }), this.parent().add(), this
                }
                a = y(a);
                var c = a.parent();
                return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
            }, a.after = function (a) {
                a = y(a);
                var b = a.parent();
                return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
            }, a.insertBefore = function (a) {
                a = y(a);
                var b = this.parent();
                return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
            }, a.insertAfter = function (a) {
                a = y(a);
                var b = this.parent();
                return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
            }, a.remove = function () {
                var a = this.parent();
                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
            }, a.select = function (a) {
                return y(this.node.querySelector(a))
            }, a.selectAll = function (a) {
                for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
                return c
            }, a.asPX = function (a, b) {
                return null == b && (b = this.attr(a)), +s(this, a, b)
            }, a.use = function () {
                var a, b = this.node.id;
                return b || (b = this.id, e(this.node, {id: b})), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? w(this.type, this.node.parentNode) : w("use", this.node.parentNode), e(a.node, {"xlink:href": "#" + b}), a.original = this, a
            };
            var k = /\S+/g;
            a.addClass = function (a) {
                var b, c, d, e, f = (a || "").match(k) || [], g = this.node, h = g.className.baseVal,
                    i = h.match(k) || [];
                if (f.length) {
                    for (b = 0; d = f[b++];) c = i.indexOf(d), ~c || i.push(d);
                    e = i.join(" "), h != e && (g.className.baseVal = e)
                }
                return this
            }, a.removeClass = function (a) {
                var b, c, d, e, f = (a || "").match(k) || [], g = this.node, h = g.className.baseVal,
                    i = h.match(k) || [];
                if (i.length) {
                    for (b = 0; d = f[b++];) c = i.indexOf(d), ~c && i.splice(c, 1);
                    e = i.join(" "), h != e && (g.className.baseVal = e)
                }
                return this
            }, a.hasClass = function (a) {
                var b = this.node, c = b.className.baseVal, d = c.match(k) || [];
                return !!~d.indexOf(a)
            }, a.toggleClass = function (a, b) {
                if (null != b) return b ? this.addClass(a) : this.removeClass(a);
                var c, d, e, f, g = (a || "").match(k) || [], h = this.node, i = h.className.baseVal,
                    j = i.match(k) || [];
                for (c = 0; e = g[c++];) d = j.indexOf(e), ~d ? j.splice(d, 1) : j.push(e);
                return f = j.join(" "), i != f && (h.className.baseVal = f), this
            }, a.clone = function () {
                var a = y(this.node.cloneNode(!0));
                return e(a.node, "id") && e(a.node, {id: a.id}), g(a), a.insertAfter(this), a
            }, a.toDefs = function () {
                var a = q(this);
                return a.appendChild(this.node), this
            }, a.pattern = a.toPattern = function (a, b, c, d) {
                var g = w("pattern", q(this));
                return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, {
                    x: a,
                    y: b,
                    width: c,
                    height: d,
                    patternUnits: "userSpaceOnUse",
                    id: g.id,
                    viewBox: [a, b, c, d].join(" ")
                }), g.node.appendChild(this.node), g
            }, a.marker = function (a, b, c, d, g, h) {
                var i = w("marker", q(this));
                return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, {
                    viewBox: [a, b, c, d].join(K),
                    markerWidth: c,
                    markerHeight: d,
                    orient: "auto",
                    refX: g || 0,
                    refY: h || 0,
                    id: i.id
                }), i.node.appendChild(this.node), i
            };
            var l = function (a, b, d, e) {
                "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
            };
            d._.Animation = l, d.animation = function (a, b, c, d) {
                return new l(a, b, c, d)
            }, a.inAnim = function () {
                var a = this, b = [];
                for (var c in a.anims) a.anims[A](c) && !function (a) {
                    b.push({
                        anim: new l(a._attrs, a.dur, a.easing, a._callback),
                        mina: a,
                        curStatus: a.status(),
                        status: function (b) {
                            return a.status(b)
                        },
                        stop: function () {
                            a.stop()
                        }
                    })
                }(a.anims[c]);
                return b
            }, d.animate = function (a, d, e, f, g, h) {
                "function" != typeof g || g.length || (h = g, g = c.linear);
                var i = c.time(), j = c(a, d, i, i + f, c.time, e, g);
                return h && b.once("mina.finish." + j.id, h), j
            }, a.stop = function () {
                for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
                return this
            }, a.animate = function (a, d, e, g) {
                "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof l && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
                var i, j, k, m, n = [], o = [], p = {}, q = this;
                for (var r in a) if (a[A](r)) {
                    q.equal ? (m = q.equal(r, B(a[r])), i = m.from, j = m.to, k = m.f) : (i = +q.attr(r), j = +a[r]);
                    var s = f(i, "array") ? i.length : 1;
                    p[r] = h(n.length, n.length + s, k), n = n.concat(i), o = o.concat(j)
                }
                var t = c.time(), u = c(n, o, t, t + d, c.time, function (a) {
                    var b = {};
                    for (var c in p) p[A](c) && (b[c] = p[c](a));
                    q.attr(b)
                }, e);
                return q.anims[u.id] = u, u._attrs = a, u._callback = g, b("snap.animcreated." + q.id, u), b.once("mina.finish." + u.id, function () {
                    delete q.anims[u.id], g && g.call(q)
                }), b.once("mina.stop." + u.id, function () {
                    delete q.anims[u.id]
                }), q
            };
            var m = {};
            a.data = function (a, c) {
                var e = m[this.id] = m[this.id] || {};
                if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
                if (1 == arguments.length) {
                    if (d.is(a, "object")) {
                        for (var f in a) a[A](f) && this.data(f, a[f]);
                        return this
                    }
                    return b("snap.data.get." + this.id, this, e[a], a), e[a]
                }
                return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
            }, a.removeData = function (a) {
                return null == a ? m[this.id] = {} : m[this.id] && delete m[this.id][a], this
            }, a.outerSVG = a.toString = i(1), a.innerSVG = i()
        }(u.prototype), d.parse = function (a) {
            var b = z.doc.createDocumentFragment(), c = !0, d = z.doc.createElement("div");
            if (a = B(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0]) if (c) b = a; else for (; a.firstChild;) b.appendChild(a.firstChild);
            return d.innerHTML = J, new v(b)
        }, v.prototype.select = u.prototype.select, v.prototype.selectAll = u.prototype.selectAll, d.fragment = function () {
            for (var a = Array.prototype.slice.call(arguments, 0), b = z.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
                var f = a[c];
                f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
            }
            return new v(b)
        }, d._.make = w, d._.wrap = y, x.prototype.el = function (a, b) {
            var c = w(a, this.node);
            return b && c.attr(b), c
        }, b.on("snap.util.getattr", function () {
            var a = b.nt();
            a = a.substring(a.lastIndexOf(".") + 1);
            var c = a.replace(/[A-Z]/g, function (a) {
                return "-" + a.toLowerCase()
            });
            return fb[A](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
        });
        var fb = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
        };
        b.on("snap.util.attr", function (a) {
            var c = b.nt(), d = {};
            c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
            var f = c.replace(/-(\w)/gi, function (a, b) {
                return b.toUpperCase()
            }), g = c.replace(/[A-Z]/g, function (a) {
                return "-" + a.toLowerCase()
            });
            fb[A](g) ? this.node.style[f] = null == a ? J : a : e(this.node, d)
        }), function () {
        }(x.prototype), d.ajax = function (a, c, d, e) {
            var g = new XMLHttpRequest, h = V();
            if (g) {
                if (f(c, "function")) e = d, d = c, c = null; else if (f(c, "object")) {
                    var i = [];
                    for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                    c = i.join("&")
                }
                return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function () {
                    4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g)
                }, 4 == g.readyState ? g : (g.send(c), g)
            }
        }, d.load = function (a, b, c) {
            d.ajax(a, function (a) {
                var e = d.parse(a.responseText);
                c ? b.call(c, e) : b(e)
            })
        };
        var gb = function (a) {
            var b = a.getBoundingClientRect(), c = a.ownerDocument, d = c.body, e = c.documentElement,
                f = e.clientTop || d.clientTop || 0, h = e.clientLeft || d.clientLeft || 0,
                i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
            return {y: i, x: j}
        };
        return d.getElementByPoint = function (a, b) {
            var c = this, d = (c.canvas, z.doc.elementFromPoint(a, b));
            if (z.win.opera && "svg" == d.tagName) {
                var e = gb(d), f = d.createSVGRect();
                f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                var g = d.getIntersectionList(f, null);
                g.length && (d = g[g.length - 1])
            }
            return d ? y(d) : null
        }, d.plugin = function (a) {
            a(d, u, x, z, v)
        }, z.win.Snap = d, d
    }();
    return d.plugin(function (a) {
        function b(a, b, d, e, f, g) {
            return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }

        var c = Object.prototype.toString, d = String, e = Math, f = "";
        !function (c) {
            function g(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function h(a) {
                var b = e.sqrt(g(a));
                a[0] && (a[0] /= b), a[1] && (a[1] /= b)
            }

            c.add = function (a, c, d, e, f, g) {
                var h, i, j, k, l = [[], [], []], m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                    n = [[a, d, f], [c, e, g], [0, 0, 1]];
                for (a && a instanceof b && (n = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]), h = 0; 3 > h; h++) for (i = 0; 3 > i; i++) {
                    for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
                    l[h][i] = k
                }
                return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
            }, c.invert = function () {
                var a = this, c = a.a * a.d - a.b * a.c;
                return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
            }, c.clone = function () {
                return new b(this.a, this.b, this.c, this.d, this.e, this.f)
            }, c.translate = function (a, b) {
                return this.add(1, 0, 0, 1, a, b)
            }, c.scale = function (a, b, c, d) {
                return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
            }, c.rotate = function (b, c, d) {
                b = a.rad(b), c = c || 0, d = d || 0;
                var f = +e.cos(b).toFixed(9), g = +e.sin(b).toFixed(9);
                return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
            }, c.x = function (a, b) {
                return a * this.a + b * this.c + this.e
            }, c.y = function (a, b) {
                return a * this.b + b * this.d + this.f
            }, c.get = function (a) {
                return +this[d.fromCharCode(97 + a)].toFixed(4)
            }, c.toString = function () {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, c.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, c.determinant = function () {
                return this.a * this.d - this.b * this.c
            }, c.split = function () {
                var b = {};
                b.dx = this.e, b.dy = this.f;
                var c = [[this.a, this.c], [this.b, this.d]];
                b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
                var d = -c[0][1], f = c[1][1];
                return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
            }, c.toTransformString = function (a) {
                var b = a || this.split();
                return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
            }
        }(b.prototype), a.Matrix = b, a.matrix = function (a, c, d, e, f, g) {
            return new b(a, c, d, e, f, g)
        }
    }), d.plugin(function (a, c, d, e, f) {
        function g(d) {
            return function (e) {
                if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c) if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                    e.node.id || p(e.node, {id: e.id});
                    var g = q(e.node.id)
                } else g = e.attr(d); else if (g = a.color(e), g.error) {
                    var h = a(n(this).ownerSVGElement).gradient(e);
                    h ? (h.node.id || p(h.node, {id: h.id}), g = q(h.node.id)) : g = e
                } else g = r(g);
                var i = {};
                i[d] = g, p(this.node, i), this.node.style[d] = t
            }
        }

        function h(a) {
            b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
        }

        function i(a) {
            for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
            }
            return b
        }

        function j() {
            return b.stop(), this.node.style.fontSize
        }

        var k = a._.make, l = a._.wrap, m = a.is, n = a._.getSomeDefs, o = /^url\(#?([^)]+)\)$/, p = a._.$, q = a.url,
            r = String, s = a._.separator, t = "";
        b.on("snap.util.attr.mask", function (a) {
            if (a instanceof c || a instanceof f) {
                if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a; else d = k("mask", n(this)), d.node.appendChild(a.node);
                !d.node.id && p(d.node, {id: d.id}), p(this.node, {mask: q(d.id)})
            }
        }), function (a) {
            b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
        }(function (a) {
            if (a instanceof c || a instanceof f) {
                if (b.stop(), "clipPath" == a.type) var d = a; else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {id: d.id});
                p(this.node, {"clip-path": q(d.id)})
            }
        }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
        var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        b.on("snap.util.grad.parse", function (a) {
            a = r(a);
            var b = a.match(u);
            if (!b) return null;
            var c = b[1], d = b[2], e = b[3];
            return d = d.split(/\s*,\s*/).map(function (a) {
                return +a == a ? +a : a
            }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function (a) {
                a = a.split(":");
                var b = {color: a[0]};
                return a[1] && (b.offset = parseFloat(a[1])), b
            }), {type: c, params: d, stops: e}
        }), b.on("snap.util.attr.d", function (c) {
            b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {d: c})
        })(-1), b.on("snap.util.attr.#text", function (a) {
            b.stop(), a = r(a);
            for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(c)
        })(-1), b.on("snap.util.attr.path", function (a) {
            b.stop(), this.attr({d: a})
        })(-1), b.on("snap.util.attr.class", function (a) {
            b.stop(), this.node.className.baseVal = a
        })(-1), b.on("snap.util.attr.viewBox", function (a) {
            var c;
            c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {viewBox: c}), b.stop()
        })(-1), b.on("snap.util.attr.transform", function (a) {
            this.transform(a), b.stop()
        })(-1), b.on("snap.util.attr.r", function (a) {
            "rect" == this.type && (b.stop(), p(this.node, {rx: a, ry: a}))
        })(-1), b.on("snap.util.attr.textpath", function (a) {
            if (b.stop(), "text" == this.type) {
                var d, e, f;
                if (!a && this.textPath) {
                    for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                    return e.remove(), void delete this.textPath
                }
                if (m(a, "string")) {
                    var g = n(this), h = l(g.parentNode).path(a);
                    g.appendChild(h.node), d = h.id, h.attr({id: d})
                } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({id: d})));
                if (d) if (e = this.textPath, f = this.node, e) e.attr({"xlink:href": "#" + d}); else {
                    for (e = p("textPath", {"xlink:href": "#" + d}); f.firstChild;) e.appendChild(f.firstChild);
                    f.appendChild(e), this.textPath = l(e)
                }
            }
        })(-1), b.on("snap.util.attr.text", function (a) {
            if ("text" == this.type) {
                for (var c = this.node, d = function (a) {
                    var b = p("tspan");
                    if (m(a, "array")) for (var c = 0; c < a.length; c++) b.appendChild(d(a[c])); else b.appendChild(e.doc.createTextNode(a));
                    return b.normalize && b.normalize(), b
                }; c.firstChild;) c.removeChild(c.firstChild);
                for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
            }
            b.stop()
        })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function () {
            return b.stop(), this.transform()
        })(-1), b.on("snap.util.getattr.textpath", function () {
            return b.stop(), this.textPath
        })(-1), function () {
            function c(c) {
                return function () {
                    b.stop();
                    var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                    return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
                }
            }

            function d(a) {
                return function (c) {
                    b.stop();
                    var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                    if ("" == c || !c) return void(this.node.style[d] = "none");
                    if ("marker" == c.type) {
                        var e = c.node.id;
                        return e || p(c.node, {id: c.id}), void(this.node.style[d] = q(e))
                    }
                }
            }

            b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
        }(), b.on("snap.util.getattr.r", function () {
            return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
        })(-1), b.on("snap.util.getattr.text", function () {
            if ("text" == this.type || "tspan" == this.type) {
                b.stop();
                var a = i(this.node);
                return 1 == a.length ? a[0] : a
            }
        })(-1), b.on("snap.util.getattr.#text", function () {
            return this.node.textContent
        })(-1), b.on("snap.util.getattr.viewBox", function () {
            b.stop();
            var c = p(this.node, "viewBox");
            return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
        })(-1), b.on("snap.util.getattr.points", function () {
            var a = p(this.node, "points");
            return b.stop(), a ? a.split(s) : void 0
        })(-1), b.on("snap.util.getattr.path", function () {
            var a = p(this.node, "d");
            return b.stop(), a
        })(-1), b.on("snap.util.getattr.class", function () {
            return this.node.className.baseVal
        })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
    }), d.plugin(function () {
        function a(a) {
            return a
        }

        function c(a) {
            return function (b) {
                return +b.toFixed(3) + a
            }
        }

        var d = {
            "+": function (a, b) {
                return a + b
            }, "-": function (a, b) {
                return a - b
            }, "/": function (a, b) {
                return a / b
            }, "*": function (a, b) {
                return a * b
            }
        }, e = String, f = /[a-z]+$/i, g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        b.on("snap.util.attr", function (a) {
            var c = e(a).match(g);
            if (c) {
                var h = b.nt(), i = h.substring(h.lastIndexOf(".") + 1), j = this.attr(i), k = {};
                b.stop();
                var l = c[3] || "", m = j.match(f), n = d[c[1]];
                if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
                k[i] = a, this.attr(k)
            }
        })(-10), b.on("snap.util.equal", function (h, i) {
            var j = e(this.attr(h) || ""), k = e(i).match(g);
            if (k) {
                b.stop();
                var l = k[3] || "", m = j.match(f), n = d[k[1]];
                return m && m == l ? {
                    from: parseFloat(j),
                    to: n(parseFloat(j), +k[2]),
                    f: c(m)
                } : (j = this.asPX(h), {from: j, to: n(j, this.asPX(h, k[2] + l)), f: a})
            }
        })(-10)
    }), d.plugin(function (a, c, d, e) {
        var f = d.prototype, g = a.is;
        f.rect = function (a, b, c, d, e, f) {
            var h;
            return null == f && (f = e), g(a, "object") && "[object Object]" == a ? h = a : null != a && (h = {
                x: a,
                y: b,
                width: c,
                height: d
            }, null != e && (h.rx = e, h.ry = f)), this.el("rect", h)
        }, f.circle = function (a, b, c) {
            var d;
            return g(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
                cx: a,
                cy: b,
                r: c
            }), this.el("circle", d)
        };
        var h = function () {
            function a() {
                this.parentNode.removeChild(this)
            }

            return function (b, c) {
                var d = e.doc.createElement("img"), f = e.doc.body;
                d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function () {
                    c.call(d), d.onload = d.onerror = null, f.removeChild(d)
                }, d.onerror = a, f.appendChild(d), d.src = b
            }
        }();
        f.image = function (b, c, d, e, f) {
            var i = this.el("image");
            if (g(b, "object") && "src" in b) i.attr(b); else if (null != b) {
                var j = {"xlink:href": b, preserveAspectRatio: "none"};
                null != c && null != d && (j.x = c, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : h(b, function () {
                    a._.$(i.node, {width: this.offsetWidth, height: this.offsetHeight})
                }), a._.$(i.node, j)
            }
            return i
        }, f.ellipse = function (a, b, c, d) {
            var e;
            return g(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
                cx: a,
                cy: b,
                rx: c,
                ry: d
            }), this.el("ellipse", e)
        }, f.path = function (a) {
            var b;
            return g(a, "object") && !g(a, "array") ? b = a : a && (b = {d: a}), this.el("path", b)
        }, f.group = f.g = function (a) {
            var b = this.el("g");
            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
        }, f.svg = function (a, b, c, d, e, f, h, i) {
            var j = {};
            return g(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])), this.el("svg", j)
        }, f.mask = function (a) {
            var b = this.el("mask");
            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
        }, f.ptrn = function (a, b, c, d, e, f, h, i) {
            if (g(a, "object")) var j = a; else arguments.length ? (j = {}, null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])) : j = {patternUnits: "userSpaceOnUse"};
            return this.el("pattern", j)
        }, f.use = function (a) {
            if (null != a) {
                {
                    make("use", this.node)
                }
                return a instanceof c && (a.attr("id") || a.attr({id: ID()}), a = a.attr("id")), this.el("use", {"xlink:href": a})
            }
            return c.prototype.use.call(this)
        }, f.text = function (a, b, c) {
            var d = {};
            return g(a, "object") ? d = a : null != a && (d = {x: a, y: b, text: c || ""}), this.el("text", d)
        }, f.line = function (a, b, c, d) {
            var e = {};
            return g(a, "object") ? e = a : null != a && (e = {x1: a, x2: c, y1: b, y2: d}), this.el("line", e)
        }, f.polyline = function (a) {
            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
            var b = {};
            return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {points: a}), this.el("polyline", b)
        }, f.polygon = function (a) {
            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
            var b = {};
            return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {points: a}), this.el("polygon", b)
        }, function () {
            function c() {
                return this.selectAll("stop")
            }

            function d(b, c) {
                var d = j("stop"), e = {offset: +c + "%"};
                return b = a.color(b), e["stop-color"] = b.hex, b.opacity < 1 && (e["stop-opacity"] = b.opacity), j(d, e), this.node.appendChild(d), this
            }

            function e() {
                if ("linearGradient" == this.type) {
                    var b = j(this.node, "x1") || 0, c = j(this.node, "x2") || 1, d = j(this.node, "y1") || 0,
                        e = j(this.node, "y2") || 0;
                    return a._.box(b, d, math.abs(c - b), math.abs(e - d))
                }
                var f = this.node.cx || .5, g = this.node.cy || .5, h = this.node.r || 0;
                return a._.box(f - h, g - h, 2 * h, 2 * h)
            }

            function g(a, c) {
                function d(a, b) {
                    for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
                    m = a, l = b
                }

                var e, f = b("snap.util.grad.parse", null, c).firstDefined();
                if (!f) return null;
                f.params.unshift(a), e = "l" == f.type.toLowerCase() ? h.apply(0, f.params) : i.apply(0, f.params), f.type != f.type.toLowerCase() && j(e.node, {gradientUnits: "userSpaceOnUse"});
                var g = f.stops, k = g.length, l = 0, m = 0;
                k--;
                for (var n = 0; k > n; n++) "offset" in g[n] && d(n, g[n].offset);
                for (g[k].offset = g[k].offset || 100, d(k, g[k].offset), n = 0; k >= n; n++) {
                    var o = g[n];
                    e.addStop(o.color, o.offset)
                }
                return e
            }

            function h(b, f, g, h, i) {
                var k = a._.make("linearGradient", b);
                return k.stops = c, k.addStop = d, k.getBBox = e, null != f && j(k.node, {
                    x1: f,
                    y1: g,
                    x2: h,
                    y2: i
                }), k
            }

            function i(b, f, g, h, i, k) {
                var l = a._.make("radialGradient", b);
                return l.stops = c, l.addStop = d, l.getBBox = e, null != f && j(l.node, {
                    cx: f,
                    cy: g,
                    r: h
                }), null != i && null != k && j(l.node, {fx: i, fy: k}), l
            }

            var j = a._.$;
            f.gradient = function (a) {
                return g(this.defs, a)
            }, f.gradientLinear = function (a, b, c, d) {
                return h(this.defs, a, b, c, d)
            }, f.gradientRadial = function (a, b, c, d, e) {
                return i(this.defs, a, b, c, d, e)
            }, f.toString = function () {
                var b, c = this.node.ownerDocument, d = c.createDocumentFragment(), e = c.createElement("div"),
                    f = this.node.cloneNode(!0);
                return d.appendChild(e), e.appendChild(f), a._.$(f, {xmlns: "http://www.w3.org/2000/svg"}), b = e.innerHTML, d.removeChild(d.firstChild), b
            }, f.clear = function () {
                for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : f.clear.call({node: b}), b = a
            }
        }()
    }), d.plugin(function (a, b) {
        function c(a) {
            var b = c.ps = c.ps || {};
            return b[a] ? b[a].sleep = 100 : b[a] = {sleep: 100}, setTimeout(function () {
                for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
            }), b[a]
        }

        function d(a, b, c, d) {
            return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                x: a,
                y: b,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: b + d,
                cx: a + c / 2,
                cy: b + d / 2,
                r1: N.min(c, d) / 2,
                r2: N.max(c, d) / 2,
                r0: N.sqrt(c * c + d * d) / 2,
                path: w(a, b, c, d),
                vb: [a, b, c, d].join(" ")
            }
        }

        function e() {
            return this.join(",").replace(L, "$1")
        }

        function f(a) {
            var b = J(a);
            return b.toString = e, b
        }

        function g(a, b, c, d, e, f, g, h, j) {
            return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
        }

        function h(c, d) {
            function e(a) {
                return +(+a).toFixed(3)
            }

            return a._.cacher(function (a, f, h) {
                a instanceof b && (a = a.attr("d")), a = E(a);
                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2]; else {
                        if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                continue
                            }
                            if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                        }
                        q += m, j = +l[5], k = +l[6]
                    }
                    o += l.shift() + l
                }
                return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
            }, null, a._.clone)
        }

        function i(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i, k = R(j, 3), l = R(j, 2), m = i * i, n = m * i,
                o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h, q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                r = b + 2 * i * (d - b) + m * (f - 2 * d + b), s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                t = d + 2 * i * (f - d) + m * (h - 2 * f + d), u = j * a + i * c, v = j * b + i * d, w = j * e + i * g,
                x = j * f + i * h, y = 90 - 180 * N.atan2(q - s, r - t) / O;
            return {x: o, y: p, m: {x: q, y: r}, n: {x: s, y: t}, start: {x: u, y: v}, end: {x: w, y: x}, alpha: y}
        }

        function j(b, c, e, f, g, h, i, j) {
            a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
            var k = D.apply(null, b);
            return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
        }

        function k(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }

        function l(a, b) {
            return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }

        function m(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e, g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c
        }

        function n(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j, r = m(q, a, c, e, g), s = m(q, b, d, f, h), t = r * r + s * s;
                o += n[p] * N.sqrt(t)
            }
            return j * o
        }

        function o(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1, l = k / 2, m = k - l, o = .01;
                for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                return m
            }
        }

        function p(a, b, c, d, e, f, g, h) {
            if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                    j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                    k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k, m = j / k, n = +l.toFixed(2), o = +m.toFixed(2);
                    if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
                        x: l,
                        y: m
                    }
                }
            }
        }

        function q(a, b, c) {
            var d = j(a), e = j(b);
            if (!l(d, e)) return c ? 0 : [];
            for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = i.apply(0, a.concat(s / h));
                m.push({x: t.x, y: t.y, t: s / h})
            }
            for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({x: t.x, y: t.y, t: s / k});
            for (s = 0; h > s; s++) for (var u = 0; k > u; u++) {
                var v = m[s], w = m[s + 1], x = o[u], y = o[u + 1], z = S(w.x - v.x) < .001 ? "y" : "x",
                    A = S(y.x - x.x) < .001 ? "y" : "x", B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                if (B) {
                    if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                    q[B.x.toFixed(4)] = B.y.toFixed(4);
                    var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                        D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                    C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({x: B.x, y: B.y, t1: C, t2: D}))
                }
            }
            return r
        }

        function r(a, b) {
            return t(a, b)
        }

        function s(a, b) {
            return t(a, b, 1)
        }

        function t(a, b, c) {
            a = E(a), b = E(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var r = a[o];
                if ("M" == r[0]) d = h = r[1], e = i = r[2]; else {
                    "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                    for (var s = 0, t = b.length; t > s; s++) {
                        var u = b[s];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2]; else {
                            "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                            var v = q(l, m, c);
                            if (c) n += v; else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v)
                            }
                        }
                    }
                }
            }
            return n
        }

        function u(a, b, c) {
            var d = v(a);
            return k(d, b, c) && t(a, [["M", b, c], ["H", d.x2 + 10]], 1) % 2 == 1
        }

        function v(a) {
            var b = c(a);
            if (b.bbox) return J(b.bbox);
            if (!a) return d();
            a = E(a);
            for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++) if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g); else {
                var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
            }
            var m = P.apply(0, h), n = P.apply(0, i), o = Q.apply(0, h), p = Q.apply(0, i), q = d(m, n, o - m, p - n);
            return b.bbox = J(q), q
        }

        function w(a, b, c, d, f) {
            if (f) return [["M", +a + +f, b], ["l", c - 2 * f, 0], ["a", f, f, 0, 0, 1, f, f], ["l", 0, d - 2 * f], ["a", f, f, 0, 0, 1, -f, f], ["l", 2 * f - c, 0], ["a", f, f, 0, 0, 1, -f, -f], ["l", 0, 2 * f - d], ["a", f, f, 0, 0, 1, f, -f], ["z"]];
            var g = [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]];
            return g.toString = e, g
        }

        function x(a, b, c, d, f) {
            if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
                h = a + c * Math.cos(-d * g), i = a + c * Math.cos(-f * g), j = b + c * Math.sin(-d * g),
                k = b + c * Math.sin(-f * g),
                l = [["M", h, j], ["A", c, c, 0, +(f - d > 180), 0, i, k]]; else l = [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]];
            return l.toString = e, l
        }

        function y(b) {
            var d = c(b), g = String.prototype.toLowerCase;
            if (d.rel) return f(d.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var h = [], i = 0, j = 0, k = 0, l = 0, m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = h[n] = [], q = b[n];
                if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                    case"a":
                        p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                        break;
                    case"v":
                        p[1] = +(q[1] - j).toFixed(3);
                        break;
                    case"m":
                        k = q[1], l = q[2];
                    default:
                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                } else {
                    p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                    for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
                }
                var v = h[n].length;
                switch (h[n][0]) {
                    case"z":
                        i = k, j = l;
                        break;
                    case"h":
                        i += +h[n][v - 1];
                        break;
                    case"v":
                        j += +h[n][v - 1];
                        break;
                    default:
                        i += +h[n][v - 2], j += +h[n][v - 1]
                }
            }
            return h.toString = e, d.rel = f(h), h
        }

        function z(b) {
            var d = c(b);
            if (d.abs) return f(d.abs);
            if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [["M", 0, 0]];
            var g, h = [], i = 0, j = 0, k = 0, l = 0, m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
                    case"A":
                        n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                        break;
                    case"V":
                        n[1] = +o[1] + j;
                        break;
                    case"H":
                        n[1] = +o[1] + i;
                        break;
                    case"R":
                        for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                        h.pop(), h = h.concat(G(s, p));
                        break;
                    case"O":
                        h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                        break;
                    case"U":
                        h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                        break;
                    case"M":
                        k = +o[1] + i, l = +o[2] + j;
                    default:
                        for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2)); else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s); else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2)); else for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                    case"Z":
                        i = +k, j = +l;
                        break;
                    case"H":
                        i = n[1];
                        break;
                    case"V":
                        j = n[1];
                        break;
                    case"M":
                        k = n[n.length - 2], l = n[n.length - 1];
                    default:
                        i = n[n.length - 2], j = n[n.length - 1]
                }
            }
            return h.toString = e, d.abs = f(h), h
        }

        function A(a, b, c, d) {
            return [a, b, c, d, c, d]
        }

        function B(a, b, c, d, e, f) {
            var g = 1 / 3, h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }

        function C(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * O / 180, n = O / 180 * (+f || 0), o = [], p = a._.cacher(function (a, b, c) {
                var d = a * N.cos(c) - b * N.sin(c), e = a * N.sin(c) + b * N.cos(c);
                return {x: d, y: e}
            });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3]; else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2), r = (c - j) / 2,
                    s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
                var t = d * d, u = e * e,
                    v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * d * r / e + (b + i) / 2, x = v * -e * q / d + (c + j) / 2,
                    y = N.asin(((c - x) / e).toFixed(9)), z = N.asin(((j - x) / e).toFixed(9));
                y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
            }
            var A = z - y;
            if (S(A) > m) {
                var B = z, D = i, E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y), G = N.sin(y), H = N.cos(z), I = N.sin(z), J = N.tan(A / 4), K = 4 / 3 * d * J,
                L = 4 / 3 * e * J, M = [b, c], P = [b + K * G, c - L * F], Q = [i + K * I, j - L * H], R = [i, j];
            if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
            o = [P, Q, R].concat(o).join().split(",");
            for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
            return T
        }

        function D(a, b, c, d, e, f, g, h) {
            for (var i, j, k, l, m, n, o, p, q = [], r = [[], []], s = 0; 2 > s; ++s) if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
                if (S(j) < 1e-12) continue;
                l = -k / j, l > 0 && 1 > l && q.push(l)
            } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
            for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
            return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
                min: {
                    x: P.apply(0, r[0]),
                    y: P.apply(0, r[1])
                }, max: {x: Q.apply(0, r[0]), y: Q.apply(0, r[1])}
            }
        }

        function E(a, b) {
            var d = !b && c(a);
            if (!b && d.curve) return f(d.curve);
            for (var e = z(a), g = b && z(b), h = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, i = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, j = (function (a, b, c) {
                var d, e;
                if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                switch (!(a[0] in {T: 1, Q: 1}) && (b.qx = b.qy = null), a[0]) {
                    case"M":
                        b.X = a[1], b.Y = a[2];
                        break;
                    case"A":
                        a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                        break;
                    case"S":
                        "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                        break;
                    case"T":
                        "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                        break;
                    case"Q":
                        b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                        break;
                    case"L":
                        a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                        break;
                    case"H":
                        a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                        break;
                    case"V":
                        a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                        break;
                    case"Z":
                        a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                }
                return a
            }), k = function (a, b) {
                if (a[b].length > 7) {
                    a[b].shift();
                    for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                    a.splice(b, 1), r = Q(e.length, g && g.length || 0)
                }
            }, l = function (a, b, c, d, f) {
                a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
            }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
                e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
                var s = e[q], t = g && g[q], u = s.length, v = g && t.length;
                h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
            }
            return g || (d.curve = f(e)), g ? [e, g] : e
        }

        function F(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = E(a), e = 0, g = a.length; g > e; e++) for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        }

        function G(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [{x: +a[d - 2], y: +a[d - 1]}, {x: +a[d], y: +a[d + 1]}, {
                    x: +a[d + 2],
                    y: +a[d + 3]
                }, {x: +a[d + 4], y: +a[d + 5]}];
                b ? d ? e - 4 == d ? f[3] = {x: +a[0], y: +a[1]} : e - 2 == d && (f[2] = {
                    x: +a[0],
                    y: +a[1]
                }, f[3] = {x: +a[2], y: +a[3]}) : f[0] = {
                    x: +a[e - 2],
                    y: +a[e - 1]
                } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                    x: +a[d],
                    y: +a[d + 1]
                }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
            }
            return c
        }

        var H = b.prototype, I = a.is, J = a._.clone, K = "hasOwnProperty", L = /,?([a-z]),?/gi, M = parseFloat,
            N = Math, O = N.PI, P = N.min, Q = N.max, R = N.pow, S = N.abs, T = h(1), U = h(), V = h(0, 1),
            W = a._unit2px, X = {
                path: function (a) {
                    return a.attr("path")
                }, circle: function (a) {
                    var b = W(a);
                    return x(b.cx, b.cy, b.r)
                }, ellipse: function (a) {
                    var b = W(a);
                    return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
                }, rect: function (a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
                }, image: function (a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height)
                }, line: function (a) {
                    return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
                }, polyline: function (a) {
                    return "M" + a.attr("points")
                }, polygon: function (a) {
                    return "M" + a.attr("points") + "z"
                }, deflt: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }
            };
        a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function (a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
            var d = V(a, c, 1);
            return b ? V(d, b).end : d
        }, H.getTotalLength = function () {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, H.getPointAtLength = function (a) {
            return U(this.attr("d"), a)
        }, H.getSubpath = function (b, c) {
            return a.path.getSubpath(this.attr("d"), b, c)
        }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
    }), d.plugin(function (a) {
        var d = Math.max, e = Math.min, f = function (a) {
            if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a) for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
        }, g = f.prototype;
        g.push = function () {
            for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
            return this
        }, g.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, g.forEach = function (a, b) {
            for (var c = 0, d = this.items.length; d > c; c++) if (a.call(b, this.items[c], c) === !1) return this;
            return this
        }, g.animate = function (d, e, f, g) {
            "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
            var h = arguments;
            if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
            var j, k = function () {
                j ? this.b = j : j = this.b
            }, l = 0, m = g && function () {
                l++ == this.length && g.call(this)
            };
            return this.forEach(function (a, c) {
                b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, m)
            })
        }, g.remove = function () {
            for (; this.length;) this.pop().remove();
            return this
        }, g.bind = function (a, b, c) {
            var d = {};
            if ("function" == typeof b) this.bindings[a] = b; else {
                var e = c || a;
                this.bindings[a] = function (a) {
                    d[e] = a, b.attr(d)
                }
            }
            return this
        }, g.attr = function (a) {
            var b = {};
            for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
            for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
            return this
        }, g.clear = function () {
            for (; this.length;) this.pop()
        }, g.splice = function (a, b) {
            a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
            var c, g = [], h = [], i = [];
            for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
            for (c = 0; b > c; c++) h.push(this[a + c]);
            for (; c < this.length - a; c++) g.push(this[a + c]);
            var j = i.length;
            for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
            for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
            return new f(h)
        }, g.exclude = function (a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] == a) return this.splice(b, 1), !0;
            return !1
        }, g.insertAfter = function (a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, g.getBBox = function () {
            for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;) if (!this.items[g].removed) {
                var h = this.items[g].getBBox();
                a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
            }
            return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
                x: a,
                y: b,
                x2: c,
                y2: f,
                width: c - a,
                height: f - b,
                cx: a + (c - a) / 2,
                cy: b + (f - b) / 2
            }
        }, g.clone = function (a) {
            a = new f;
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, g.toString = function () {
            return "Snap‘s set"
        }, g.type = "set", a.set = function () {
            var a = new f;
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
        }
    }), d.plugin(function (a, c) {
        function d(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case"t":
                    return [b, 0, 0];
                case"m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case"r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case"s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }

        function e(b, c, e) {
            c = m(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
            for (var f, g, h, k, l = Math.max(b.length, c.length), n = [], o = [], p = 0; l > p; p++) {
                if (h = b[p] || d(c[p]), k = c[p] || d(h), h[0] != k[0] || "r" == h[0].toLowerCase() && (h[2] != k[2] || h[3] != k[3]) || "s" == h[0].toLowerCase() && (h[3] != k[3] || h[4] != k[4])) {
                    b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), n = [["m", b.a, b.b, b.c, b.d, b.e, b.f]], o = [["m", c.a, c.b, c.c, c.d, c.e, c.f]];
                    break
                }
                for (n[p] = [], o[p] = [], f = 0, g = Math.max(h.length, k.length); g > f; f++) f in h && (n[p][f] = h[f]), f in k && (o[p][f] = k[f])
            }
            return {from: j(n), to: j(o), f: i(n)}
        }

        function f(a) {
            return a
        }

        function g(a) {
            return function (b) {
                return +b.toFixed(3) + a
            }
        }

        function h(b) {
            return a.rgb(b[0], b[1], b[2])
        }

        function i(a) {
            var b, c, d, e, f, g, h = 0, i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                f += g + "]", i[b] = f
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])")
        }

        function j(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b
        }

        var k = {}, l = /[a-z]+$/i, m = String;
        k.stroke = k.fill = "colour", c.prototype.equal = function (a, c) {
            return b("snap.util.equal", this, a, c).firstDefined()
        }, b.on("snap.util.equal", function (b, c) {
            var d, n, o = m(this.attr(b) || ""), p = this;
            if (o == +o && c == +c) return {from: +o, to: +c, f: f};
            if ("colour" == k[b]) return d = a.color(o), n = a.color(c), {
                from: [d.r, d.g, d.b, d.opacity],
                to: [n.r, n.g, n.b, n.opacity],
                f: h
            };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(o, c, function () {
                return p.getBBox(1)
            });
            if ("d" == b || "path" == b) return d = a.path.toCubic(o, c), {from: j(d[0]), to: j(d[1]), f: i(d[0])};
            if ("points" == b) return d = m(o).split(a._.separator), n = m(c).split(a._.separator), {
                from: d,
                to: n,
                f: function (a) {
                    return a
                }
            };
            aUnit = o.match(l);
            var q = m(c).match(l);
            return aUnit && aUnit == q ? {from: parseFloat(o), to: parseFloat(c), f: g(aUnit)} : {
                from: this.asPX(b),
                to: this.asPX(b, c),
                f: f
            }
        })
    }), d.plugin(function (a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, k = (function (a, b) {
            var c = "y" == a ? "scrollTop" : "scrollLeft", d = b && b.node ? b.node.ownerDocument : e.doc;
            return d[c in d.documentElement ? "documentElement" : "body"][c]
        }), l = function () {
            this.returnValue = !1
        }, m = function () {
            return this.originalEvent.preventDefault()
        }, n = function () {
            this.cancelBubble = !0
        }, o = function () {
            return this.originalEvent.stopPropagation()
        }, p = function () {
            return e.doc.addEventListener ? function (a, b, c, d) {
                var e = h && j[b] ? j[b] : b, f = function (e) {
                    var f = k("y", d), i = k("x", d);
                    if (h && j[g](b)) for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++) if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
                        var p = e;
                        e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;
                        break
                    }
                    var q = e.clientX + i, r = e.clientY + f;
                    return c.call(d, e, q, r)
                };
                return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1), function () {
                    return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
                }
            } : e.doc.attachEvent ? function (a, b, c, d) {
                var e = function (a) {
                    a = a || d.node.ownerDocument.window.event;
                    var b = k("y", d), e = k("x", d), f = a.clientX + e, g = a.clientY + b;
                    return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, f, g)
                };
                a.attachEvent("on" + b, e);
                var f = function () {
                    return a.detachEvent("on" + b, e), !0
                };
                return f
            } : void 0
        }(), q = [], r = function (a) {
            for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = q.length; i--;) {
                if (c = q[i], h) {
                    for (var j, l = a.touches && a.touches.length; l--;) if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                        d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                        break
                    }
                } else a.preventDefault();
                {
                    var m = c.el.node;
                    m.nextSibling, m.parentNode, m.style.display
                }
                d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
            }
        }, s = function (c) {
            a.unmousemove(r).unmouseup(s);
            for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
            q = []
        }, t = i.length; t--;) !function (b) {
            a[b] = f[b] = function (c, d) {
                return a.is(c, "function") && (this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: p(this.node || document, b, c, d || this)
                })), this
            }, a["un" + b] = f["un" + b] = function (a) {
                for (var c = this.events || [], d = c.length; d--;) if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                return this
            }
        }(i[t]);
        f.hover = function (a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c)
        }, f.unhover = function (a, b) {
            return this.unmouseover(a).unmouseout(b)
        };
        var u = [];
        f.drag = function (c, d, e, f, g, h) {
            function i(i, j, k) {
                (i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({
                    el: this,
                    move_scope: f,
                    start_scope: g,
                    end_scope: h
                }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i)
            }

            if (!arguments.length) {
                var j;
                return this.drag(function (a, b) {
                    this.attr({transform: j + (j ? "T" : "t") + [a, b]})
                }, function () {
                    j = this.transform().local
                })
            }
            return this._drag = {}, u.push({el: this, start: i}), this.mousedown(i), this
        }, f.undrag = function () {
            for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
            return !u.length && a.unmousemove(r).unmouseup(s), this
        }
    }), d.plugin(function (a, c, d) {
        var e = (c.prototype, d.prototype), f = /^\s*url\((.+)\)/, g = String, h = a._.$;
        a.filter = {}, e.filter = function (b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(g(b)), f = a._.id(), i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
            return h(i, {id: f, filterUnits: "userSpaceOnUse"}), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
        }, b.on("snap.util.getattr.filter", function () {
            b.stop();
            var c = h(this.node, "filter");
            if (c) {
                var d = g(c).match(f);
                return d && a.select(d[1])
            }
        }), b.on("snap.util.attr.filter", function (d) {
            if (d instanceof c && "filter" == d.type) {
                b.stop();
                var e = d.node.id;
                e || (h(d.node, {id: d.id}), e = d.id), h(this.node, {filter: a.url(e)})
            }
            d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function (b, c) {
            null == b && (b = 2);
            var d = null == c ? b : [b, c];
            return a.format('<feGaussianBlur stdDeviation="{def}"/>', {def: d})
        }, a.filter.blur.toString = function () {
            return this()
        }, a.filter.shadow = function (b, c, d, e, f) {
            return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: e,
                dx: b,
                dy: c,
                blur: d,
                opacity: f
            })
        }, a.filter.shadow.toString = function () {
            return this()
        }, a.filter.grayscale = function (b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - b),
                b: .7152 - .7152 * (1 - b),
                c: .0722 - .0722 * (1 - b),
                d: .2126 - .2126 * (1 - b),
                e: .7152 + .2848 * (1 - b),
                f: .0722 - .0722 * (1 - b),
                g: .2126 - .2126 * (1 - b),
                h: .0722 + .9278 * (1 - b)
            })
        }, a.filter.grayscale.toString = function () {
            return this()
        }, a.filter.sepia = function (b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - b),
                b: .769 - .769 * (1 - b),
                c: .189 - .189 * (1 - b),
                d: .349 - .349 * (1 - b),
                e: .686 + .314 * (1 - b),
                f: .168 - .168 * (1 - b),
                g: .272 - .272 * (1 - b),
                h: .534 - .534 * (1 - b),
                i: .131 + .869 * (1 - b)
            })
        }, a.filter.sepia.toString = function () {
            return this()
        }, a.filter.saturate = function (b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - b})
        }, a.filter.saturate.toString = function () {
            return this()
        }, a.filter.hueRotate = function (b) {
            return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: b})
        }, a.filter.hueRotate.toString = function () {
            return this()
        }, a.filter.invert = function (b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: 1 - b
            })
        }, a.filter.invert.toString = function () {
            return this()
        }, a.filter.brightness = function (b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: b})
        }, a.filter.brightness.toString = function () {
            return this()
        }, a.filter.contrast = function (b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: .5 - b / 2
            })
        }, a.filter.contrast.toString = function () {
            return this()
        }
    }), d
});
var paper = function (t, e) {
    t = t || require("./node/self.js");
    var n = t.window, i = t.document, r = new function () {
        function t(t, e, r, s, a) {
            function u(i, u) {
                u = u || (u = o(e, i)) && (u.get ? u : u.value), "string" == typeof u && "#" === u[0] && (u = t[u.substring(1)] || u);
                var c, f = "function" == typeof u, d = u, _ = a || f && !u.base ? u && u.get ? i in t : t[i] : null;
                a && _ || (f && _ && (u.base = _), f && s !== !1 && (c = i.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (l[c[3].toLowerCase() + c[4]] = c[2]), d && !f && d.get && "function" == typeof d.get && n.isPlainObject(d) || (d = {
                    value: d,
                    writable: !0
                }), (o(t, i) || {configurable: !0}).configurable && (d.configurable = !0, d.enumerable = null != r ? r : !c), h(t, i, d))
            }

            var l = {};
            if (e) {
                for (var c in e) e.hasOwnProperty(c) && !i.test(c) && u(c);
                for (var c in l) {
                    var f = l[c], d = t["set" + f], _ = t["get" + f] || d && t["is" + f];
                    !_ || s !== !0 && 0 !== _.length || u(c, {get: _, set: d})
                }
            }
            return t
        }

        function n() {
            for (var t = 0, e = arguments.length; t < e; t++) {
                var n = arguments[t];
                n && c(this, n)
            }
            return this
        }

        var i = /^(statics|enumerable|beans|preserve)$/, r = [], s = r.slice, a = Object.create,
            o = Object.getOwnPropertyDescriptor, h = Object.defineProperty, u = r.forEach || function (t, e) {
                for (var n = 0, i = this.length; n < i; n++) t.call(e, this[n], n, this)
            }, l = function (t, e) {
                for (var n in this) this.hasOwnProperty(n) && t.call(e, this[n], n, this)
            }, c = Object.assign || function (t) {
                for (var e = 1, n = arguments.length; e < n; e++) {
                    var i = arguments[e];
                    for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r])
                }
                return t
            }, f = function (t, e, n) {
                if (t) {
                    var i = o(t, "length");
                    (i && "number" == typeof i.value ? u : l).call(t, e, n = n || t)
                }
                return n
            };
        return t(n, {
            inject: function (e) {
                if (e) {
                    var n = e.statics === !0 ? e : e.statics, i = e.beans, r = e.preserve;
                    n !== e && t(this.prototype, e, e.enumerable, i, r), t(this, n, null, i, r)
                }
                for (var s = 1, a = arguments.length; s < a; s++) this.inject(arguments[s]);
                return this
            }, extend: function () {
                for (var e, n, i, r = this, s = 0, o = arguments.length; s < o && (!e || !n); s++) i = arguments[s], e = e || i.initialize, n = n || i.prototype;
                return e = e || function () {
                    r.apply(this, arguments)
                }, n = e.prototype = n || a(this.prototype), h(n, "constructor", {
                    value: e,
                    writable: !0,
                    configurable: !0
                }), t(e, this), arguments.length && this.inject.apply(e, arguments), e.base = r, e
            }
        }).inject({
            enumerable: !1, initialize: n, set: n, inject: function () {
                for (var e = 0, n = arguments.length; e < n; e++) {
                    var i = arguments[e];
                    i && t(this, i, i.enumerable, i.beans, i.preserve)
                }
                return this
            }, extend: function () {
                var t = a(this);
                return t.inject.apply(t, arguments)
            }, each: function (t, e) {
                return f(this, t, e)
            }, clone: function () {
                return new this.constructor(this)
            }, statics: {
                set: c, each: f, create: a, define: h, describe: o, clone: function (t) {
                    return c(new t.constructor, t)
                }, isPlainObject: function (t) {
                    var e = null != t && t.constructor;
                    return e && (e === Object || e === n || "Object" === e.name)
                }, pick: function (t, n) {
                    return t !== e ? t : n
                }, slice: function (t, e, n) {
                    return s.call(t, e, n)
                }
            }
        })
    };
    "undefined" != typeof module && (module.exports = r), r.inject({
        enumerable: !1, toString: function () {
            return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + r.each(this, function (t, e) {
                if (!/^_/.test(e)) {
                    var n = typeof t;
                    this.push(e + ": " + ("number" === n ? h.instance.number(t) : "string" === n ? "'" + t + "'" : t))
                }
            }, []).join(", ") + " }"
        }, getClassName: function () {
            return this._class || ""
        }, importJSON: function (t) {
            return r.importJSON(t, this)
        }, exportJSON: function (t) {
            return r.exportJSON(this, t)
        }, toJSON: function () {
            return r.serialize(this)
        }, set: function (t, e) {
            return t && r.filter(this, t, e, this._prioritize), this
        }
    }, {
        beans: !1, statics: {
            exports: {}, extend: function rt() {
                var t = rt.base.apply(this, arguments), e = t.prototype._class;
                return e && !r.exports[e] && (r.exports[e] = t), t
            }, equals: function (t, e) {
                if (t === e) return !0;
                if (t && t.equals) return t.equals(e);
                if (e && e.equals) return e.equals(t);
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    if (Array.isArray(t) && Array.isArray(e)) {
                        var n = t.length;
                        if (n !== e.length) return !1;
                        for (; n--;) if (!r.equals(t[n], e[n])) return !1
                    } else {
                        var i = Object.keys(t), n = i.length;
                        if (n !== Object.keys(e).length) return !1;
                        for (; n--;) {
                            var s = i[n];
                            if (!e.hasOwnProperty(s) || !r.equals(t[s], e[s])) return !1
                        }
                    }
                    return !0
                }
                return !1
            }, read: function (t, n, i, s) {
                if (this === r) {
                    var a = this.peek(t, n);
                    return t.__index++, a
                }
                var o = this.prototype, h = o._readIndex, u = n || h && t.__index || 0, l = t.length, c = t[u];
                if (s = s || l - u, c instanceof this || i && i.readNull && null == c && s <= 1) return h && (t.__index = u + 1), c && i && i.clone ? c.clone() : c;
                if (c = r.create(o), h && (c.__read = !0), c = c.initialize.apply(c, u > 0 || u + s < l ? r.slice(t, u, u + s) : t) || c, h) {
                    t.__index = u + c.__read;
                    var f = c.__filtered;
                    f && (t.__filtered = f, c.__filtered = e), c.__read = e
                }
                return c
            }, peek: function (t, e) {
                return t[t.__index = e || t.__index || 0]
            }, remain: function (t) {
                return t.length - (t.__index || 0)
            }, readList: function (t, e, n, i) {
                for (var r, s = [], a = e || 0, o = i ? a + i : t.length, h = a; h < o; h++) s.push(Array.isArray(r = t[h]) ? this.read(r, 0, n) : this.read(t, h, n, 1));
                return s
            }, readNamed: function (t, n, i, s, a) {
                var o = this.getNamed(t, n), h = o !== e;
                if (h) {
                    var u = t.__filtered;
                    u || (u = t.__filtered = r.create(t[0]), u.__unfiltered = t[0]), u[n] = e
                }
                var l = h ? [o] : t, c = this.read(l, i, s, a);
                return c
            }, getNamed: function (t, n) {
                var i = t[0];
                if (t._hasObject === e && (t._hasObject = 1 === t.length && r.isPlainObject(i)), t._hasObject) return n ? i[n] : t.__filtered || i
            }, hasNamed: function (t, e) {
                return !!this.getNamed(t, e)
            }, filter: function (t, n, i, r) {
                function s(r) {
                    if (!(i && r in i || a && r in a)) {
                        var s = n[r];
                        s !== e && (t[r] = s)
                    }
                }

                var a;
                if (r) {
                    for (var o, h = {}, u = 0, l = r.length; u < l; u++) (o = r[u]) in n && (s(o), h[o] = !0);
                    a = h
                }
                return Object.keys(n.__unfiltered || n).forEach(s), t
            }, isPlainValue: function (t, e) {
                return r.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t
            }, serialize: function (t, e, n, i) {
                e = e || {};
                var s, a = !i;
                if (a && (e.formatter = new h(e.precision), i = {
                    length: 0,
                    definitions: {},
                    references: {},
                    add: function (t, e) {
                        var n = "#" + t._id, i = this.references[n];
                        if (!i) {
                            this.length++;
                            var r = e.call(t), s = t._class;
                            s && r[0] !== s && r.unshift(s), this.definitions[n] = r, i = this.references[n] = [n]
                        }
                        return i
                    }
                }), t && t._serialize) {
                    s = t._serialize(e, i);
                    var o = t._class;
                    !o || t._compactSerialize || !a && n || s[0] === o || s.unshift(o)
                } else if (Array.isArray(t)) {
                    s = [];
                    for (var u = 0, l = t.length; u < l; u++) s[u] = r.serialize(t[u], e, n, i)
                } else if (r.isPlainObject(t)) {
                    s = {};
                    for (var c = Object.keys(t), u = 0, l = c.length; u < l; u++) {
                        var f = c[u];
                        s[f] = r.serialize(t[f], e, n, i)
                    }
                } else s = "number" == typeof t ? e.formatter.number(t, e.precision) : t;
                return a && i.length > 0 ? [["dictionary", i.definitions], s] : s
            }, deserialize: function (t, e, n, i, s) {
                var a = t, o = !n, h = o && t && t.length && "dictionary" === t[0][0];
                if (n = n || {}, Array.isArray(t)) {
                    var u = t[0], l = "dictionary" === u;
                    if (1 == t.length && /^#/.test(u)) return n.dictionary[u];
                    u = r.exports[u], a = [];
                    for (var c = u ? 1 : 0, f = t.length; c < f; c++) a.push(r.deserialize(t[c], e, n, l, h));
                    if (u) {
                        var d = a;
                        e ? a = e(u, d, o || s) : (a = r.create(u.prototype), u.apply(a, d))
                    }
                } else if (r.isPlainObject(t)) {
                    a = {}, i && (n.dictionary = a);
                    for (var _ in t) a[_] = r.deserialize(t[_], e, n)
                }
                return h ? a[1] : a
            }, exportJSON: function (t, e) {
                var n = r.serialize(t, e);
                return e && 0 == e.asString ? n : JSON.stringify(n)
            }, importJSON: function (t, e) {
                return r.deserialize("string" == typeof t ? JSON.parse(t) : t, function (t, n, i) {
                    var s = i && e && e.constructor === t, a = s ? e : r.create(t.prototype);
                    if (1 === n.length && a instanceof w && (s || !(a instanceof b))) {
                        var o = n[0];
                        r.isPlainObject(o) && (o.insert = !1)
                    }
                    return (s ? a.set : t).apply(a, n), s && (e = null), a
                })
            }, splice: function (t, n, i, r) {
                var s = n && n.length, a = i === e;
                i = a ? t.length : i, i > t.length && (i = t.length);
                for (var o = 0; o < s; o++) n[o]._index = i + o;
                if (a) return t.push.apply(t, n), [];
                var h = [i, r];
                n && h.push.apply(h, n);
                for (var u = t.splice.apply(t, h), o = 0, l = u.length; o < l; o++) u[o]._index = e;
                for (var o = i + s, l = t.length; o < l; o++) t[o]._index = o;
                return u
            }, capitalize: function (t) {
                return t.replace(/\b[a-z]/g, function (t) {
                    return t.toUpperCase()
                })
            }, camelize: function (t) {
                return t.replace(/-(.)/g, function (t, e) {
                    return e.toUpperCase()
                })
            }, hyphenate: function (t) {
                return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }
        }
    });
    var s = {
        on: function (t, e) {
            if ("string" != typeof t) r.each(t, function (t, e) {
                this.on(e, t)
            }, this); else {
                var n = this._eventTypes, i = n && n[t], s = this._callbacks = this._callbacks || {};
                s = s[t] = s[t] || [], s.indexOf(e) === -1 && (s.push(e), i && i.install && 1 === s.length && i.install.call(this, t))
            }
            return this
        }, off: function (t, e) {
            if ("string" != typeof t) return void r.each(t, function (t, e) {
                this.off(e, t)
            }, this);
            var n, i = this._eventTypes, s = i && i[t], a = this._callbacks && this._callbacks[t];
            return a && (!e || (n = a.indexOf(e)) !== -1 && 1 === a.length ? (s && s.uninstall && s.uninstall.call(this, t), delete this._callbacks[t]) : n !== -1 && a.splice(n, 1)), this
        }, once: function (t, e) {
            return this.on(t, function () {
                e.apply(this, arguments), this.off(t, e)
            })
        }, emit: function (t, e) {
            var n = this._callbacks && this._callbacks[t];
            if (!n) return !1;
            var i = r.slice(arguments, 1), s = e && e.target && !e.currentTarget;
            n = n.slice(), s && (e.currentTarget = this);
            for (var a = 0, o = n.length; a < o; a++) if (0 == n[a].apply(this, i)) {
                e && e.stop && e.stop();
                break
            }
            return s && delete e.currentTarget, !0
        }, responds: function (t) {
            return !(!this._callbacks || !this._callbacks[t])
        }, attach: "#on", detach: "#off", fire: "#emit", _installEvents: function (t) {
            var e = this._eventTypes, n = this._callbacks, i = t ? "install" : "uninstall";
            if (e) for (var r in n) if (n[r].length > 0) {
                var s = e[r], a = s && s[i];
                a && a.call(this, r)
            }
        }, statics: {
            inject: function st(t) {
                var e = t._events;
                if (e) {
                    var n = {};
                    r.each(e, function (e, i) {
                        var s = "string" == typeof e, a = s ? e : i, o = r.capitalize(a),
                            h = a.substring(2).toLowerCase();
                        n[h] = s ? {} : e, a = "_" + a, t["get" + o] = function () {
                            return this[a]
                        }, t["set" + o] = function (t) {
                            var e = this[a];
                            e && this.off(h, e), t && this.on(h, t), this[a] = t
                        }
                    }), t._eventTypes = n
                }
                return st.base.apply(this, arguments)
            }
        }
    }, a = r.extend({
        _class: "PaperScope", initialize: function at() {
            paper = this, this.settings = new r({
                applyMatrix: !0,
                insertItems: !0,
                handleSize: 4,
                hitTolerance: 0
            }), this.project = null, this.projects = [], this.tools = [], this._id = at._id++, at._scopes[this._id] = this;
            var e = at.prototype;
            if (!this.support) {
                var n = tt.getContext(1, 1) || {};
                e.support = {
                    nativeDash: "setLineDash" in n || "mozDash" in n,
                    nativeBlendModes: et.nativeModes
                }, tt.release(n)
            }
            if (!this.agent) {
                var i = t.navigator.userAgent.toLowerCase(),
                    s = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(i) || [])[0], a = "darwin" === s ? "mac" : s,
                    o = e.agent = e.browser = {platform: a};
                a && (o[a] = !0), i.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, function (t, e, n, i, r) {
                    if (!o.chrome) {
                        var s = "opera" === e ? i : /^(node|trident)$/.test(e) ? r : n;
                        o.version = s, o.versionNumber = parseFloat(s), e = "trident" === e ? "msie" : e, o.name = e, o[e] = !0
                    }
                }), o.chrome && delete o.webkit, o.atom && delete o.chrome
            }
        }, version: "0.11.5", getView: function () {
            var t = this.project;
            return t && t._view
        }, getPaper: function () {
            return this
        }, execute: function (t, e) {
            paper.PaperScript.execute(t, this, e), Z.updateFocus()
        }, install: function (t) {
            var e = this;
            r.each(["project", "view", "tool"], function (n) {
                r.define(t, n, {
                    configurable: !0, get: function () {
                        return e[n]
                    }
                })
            });
            for (var n in this) !/^_/.test(n) && this[n] && (t[n] = this[n])
        }, setup: function (t) {
            return paper = this, this.project = new y(t), this
        }, createCanvas: function (t, e) {
            return tt.getCanvas(t, e)
        }, activate: function () {
            paper = this
        }, clear: function () {
            for (var t = this.projects, e = this.tools, n = t.length - 1; n >= 0; n--) t[n].remove();
            for (var n = e.length - 1; n >= 0; n--) e[n].remove()
        }, remove: function () {
            this.clear(), delete a._scopes[this._id]
        }, statics: new function () {
            function t(t) {
                return t += "Attribute", function (e, n) {
                    return e[t](n) || e[t]("data-paper-" + n)
                }
            }

            return {
                _scopes: {}, _id: 0, get: function (t) {
                    return this._scopes[t] || null
                }, getAttribute: t("get"), hasAttribute: t("has")
            }
        }
    }), o = r.extend(s, {
        initialize: function (t) {
            this._scope = paper, this._index = this._scope[this._list].push(this) - 1, !t && this._scope[this._reference] || this.activate()
        }, activate: function () {
            if (!this._scope) return !1;
            var t = this._scope[this._reference];
            return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0
        }, isActive: function () {
            return this._scope[this._reference] === this
        }, remove: function () {
            return null != this._index && (r.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0)
        }, getView: function () {
            return this._scope.getView()
        }
    }), h = r.extend({
        initialize: function (t) {
            this.precision = r.pick(t, 5), this.multiplier = Math.pow(10, this.precision)
        }, number: function (t) {
            return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t
        }, pair: function (t, e, n) {
            return this.number(t) + (n || ",") + this.number(e)
        }, point: function (t, e) {
            return this.number(t.x) + (e || ",") + this.number(t.y)
        }, size: function (t, e) {
            return this.number(t.width) + (e || ",") + this.number(t.height)
        }, rectangle: function (t, e) {
            return this.point(t, e) + (e || ",") + this.size(t, e)
        }
    });
    h.instance = new h;
    var u = new function () {
        function t(t, e, n) {
            return t < e ? e : t > n ? n : t
        }

        function e(t, e, n) {
            function i(t) {
                var e = 134217729 * t, n = t - e, i = n + e, r = t - i;
                return [i, r]
            }

            var r = e * e - t * n, a = e * e + t * n;
            if (3 * s(r) < a) {
                var o = i(t), h = i(e), u = i(n), l = e * e, c = h[0] * h[0] - l + 2 * h[0] * h[1] + h[1] * h[1],
                    f = t * n, d = o[0] * u[0] - f + o[0] * u[1] + o[1] * u[0] + o[1] * u[1];
                r = l - f + (c - d)
            }
            return r
        }

        function n() {
            var t = Math.max.apply(Math, arguments);
            return t && (t < 1e-8 || t > 1e8) ? o(2, -Math.round(h(t))) : 0
        }

        var i = [[.5773502691896257], [0, .7745966692414834], [.33998104358485626, .8611363115940526], [0, .5384693101056831, .906179845938664], [.2386191860831969, .6612093864662645, .932469514203152], [0, .4058451513773972, .7415311855993945, .9491079123427585], [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363], [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261], [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717], [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057], [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192], [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881], [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123], [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854], [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]],
            r = [[1], [.8888888888888888, .5555555555555556], [.6521451548625461, .34785484513745385], [.5688888888888889, .47862867049936647, .23692688505618908], [.46791393457269104, .3607615730481386, .17132449237917036], [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697], [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626], [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441], [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814], [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366], [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183], [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588], [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186], [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727], [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]],
            s = Math.abs, a = Math.sqrt, o = Math.pow, h = Math.log2 || function (t) {
                return Math.log(t) * Math.LOG2E
            }, l = 1e-12, c = 1.12e-16;
        return {
            EPSILON: l,
            MACHINE_EPSILON: c,
            CURVETIME_EPSILON: 1e-8,
            GEOMETRIC_EPSILON: 1e-7,
            TRIGONOMETRIC_EPSILON: 1e-8,
            KAPPA: 4 * (a(2) - 1) / 3,
            isZero: function (t) {
                return t >= -l && t <= l
            },
            clamp: t,
            integrate: function (t, e, n, s) {
                for (var a = i[s - 2], o = r[s - 2], h = .5 * (n - e), u = h + e, l = 0, c = s + 1 >> 1, f = 1 & s ? o[l++] * t(u) : 0; l < c;) {
                    var d = h * a[l];
                    f += o[l++] * (t(u + d) + t(u - d))
                }
                return h * f
            },
            findRoot: function (e, n, i, r, a, o, h) {
                for (var u = 0; u < o; u++) {
                    var l = e(i), c = l / n(i), f = i - c;
                    if (s(c) < h) {
                        i = f;
                        break
                    }
                    l > 0 ? (a = i, i = f <= r ? .5 * (r + a) : f) : (r = i, i = f >= a ? .5 * (r + a) : f)
                }
                return t(i, r, a)
            },
            solveQuadratic: function (i, r, o, h, u, f) {
                var d, _ = 1 / 0;
                if (s(i) < l) {
                    if (s(r) < l) return s(o) < l ? -1 : 0;
                    d = -o / r
                } else {
                    r *= -.5;
                    var g = e(i, r, o);
                    if (g && s(g) < c) {
                        var v = n(s(i), s(r), s(o));
                        v && (i *= v, r *= v, o *= v, g = e(i, r, o))
                    }
                    if (g >= -c) {
                        var p = g < 0 ? 0 : a(g), m = r + (r < 0 ? -p : p);
                        0 === m ? (d = o / i, _ = -d) : (d = m / i, _ = o / m)
                    }
                }
                var y = 0, w = null == u, x = u - l, b = f + l;
                return isFinite(d) && (w || d > x && d < b) && (h[y++] = w ? d : t(d, u, f)), _ !== d && isFinite(_) && (w || _ > x && _ < b) && (h[y++] = w ? _ : t(_, u, f)), y
            },
            solveCubic: function (e, i, r, h, f, d, _) {
                function g(t) {
                    v = t;
                    var n = e * v;
                    p = n + i, m = p * v + r, y = (n + p) * v + m, w = m * v + h
                }

                var v, p, m, y, w, x = n(s(e), s(i), s(r), s(h));
                if (x && (e *= x, i *= x, r *= x, h *= x), s(e) < l) e = i, p = r, m = h, v = 1 / 0; else if (s(h) < l) p = i, m = r, v = 0; else {
                    g(-(i / e) / 3);
                    var b = w / e, C = o(s(b), 1 / 3), S = b < 0 ? -1 : 1, k = -y / e,
                        I = k > 0 ? 1.324717957244746 * Math.max(C, a(k)) : C, P = v - S * I;
                    if (P !== v) {
                        do g(P), P = 0 === y ? v : v - w / y / (1 + c); while (S * P > S * v);
                        s(e) * v * v > s(h / v) && (m = -h / v, p = (m - r) / v)
                    }
                }
                var A = u.solveQuadratic(e, p, m, f, d, _), M = null == d;
                return isFinite(v) && (0 === A || A > 0 && v !== f[0] && v !== f[1]) && (M || v > d - l && v < _ + l) && (f[A++] = M ? v : t(v, d, _)), A
            }
        }
    }, l = {
        _id: 1, _pools: {}, get: function (t) {
            if (t) {
                var e = this._pools[t];
                return e || (e = this._pools[t] = {_id: 1}), e._id++
            }
            return this._id++
        }
    }, c = r.extend({
        _class: "Point", _readIndex: !0, initialize: function (t, e) {
            var n = typeof t, i = this.__read, r = 0;
            if ("number" === n) {
                var s = "number" == typeof e;
                this._set(t, s ? e : t), i && (r = s ? 2 : 1)
            } else if ("undefined" === n || null === t) this._set(0, 0), i && (r = null === t ? 1 : 0); else {
                var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
                r = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "x" in a ? this._set(a.x || 0, a.y || 0) : "width" in a ? this._set(a.width || 0, a.height || 0) : "angle" in a ? (this._set(a.length || 0, 0), this.setAngle(a.angle || 0)) : (this._set(0, 0), r = 0)
            }
            return i && (this.__read = r), this
        }, set: "#initialize", _set: function (t, e) {
            return this.x = t, this.y = e, this
        }, equals: function (t) {
            return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1
        }, clone: function () {
            return new c(this.x, this.y)
        }, toString: function () {
            var t = h.instance;
            return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
        }, _serialize: function (t) {
            var e = t.formatter;
            return [e.number(this.x), e.number(this.y)]
        }, getLength: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, setLength: function (t) {
            if (this.isZero()) {
                var e = this._angle || 0;
                this._set(Math.cos(e) * t, Math.sin(e) * t)
            } else {
                var n = t / this.getLength();
                u.isZero(n) && this.getAngle(), this._set(this.x * n, this.y * n)
            }
        }, getAngle: function () {
            return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI
        }, setAngle: function (t) {
            this.setAngleInRadians.call(this, t * Math.PI / 180)
        }, getAngleInDegrees: "#getAngle", setAngleInDegrees: "#setAngle", getAngleInRadians: function () {
            if (arguments.length) {
                var t = c.read(arguments), e = this.getLength() * t.getLength();
                if (u.isZero(e)) return NaN;
                var n = this.dot(t) / e;
                return Math.acos(n < -1 ? -1 : n > 1 ? 1 : n)
            }
            return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
        }, setAngleInRadians: function (t) {
            if (this._angle = t, !this.isZero()) {
                var e = this.getLength();
                this._set(Math.cos(t) * e, Math.sin(t) * e)
            }
        }, getQuadrant: function () {
            return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3
        }
    }, {
        beans: !1, getDirectedAngle: function () {
            var t = c.read(arguments);
            return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI
        }, getDistance: function () {
            var t = c.read(arguments), e = t.x - this.x, n = t.y - this.y, i = e * e + n * n, s = r.read(arguments);
            return s ? i : Math.sqrt(i)
        }, normalize: function (t) {
            t === e && (t = 1);
            var n = this.getLength(), i = 0 !== n ? t / n : 0, r = new c(this.x * i, this.y * i);
            return i >= 0 && (r._angle = this._angle), r
        }, rotate: function (t, e) {
            if (0 === t) return this.clone();
            t = t * Math.PI / 180;
            var n = e ? this.subtract(e) : this, i = Math.sin(t), r = Math.cos(t);
            return n = new c(n.x * r - n.y * i, n.x * i + n.y * r), e ? n.add(e) : n
        }, transform: function (t) {
            return t ? t._transformPoint(this) : this
        }, add: function () {
            var t = c.read(arguments);
            return new c(this.x + t.x, this.y + t.y)
        }, subtract: function () {
            var t = c.read(arguments);
            return new c(this.x - t.x, this.y - t.y)
        }, multiply: function () {
            var t = c.read(arguments);
            return new c(this.x * t.x, this.y * t.y)
        }, divide: function () {
            var t = c.read(arguments);
            return new c(this.x / t.x, this.y / t.y)
        }, modulo: function () {
            var t = c.read(arguments);
            return new c(this.x % t.x, this.y % t.y)
        }, negate: function () {
            return new c((-this.x), (-this.y))
        }, isInside: function () {
            return g.read(arguments).contains(this)
        }, isClose: function () {
            var t = c.read(arguments), e = r.read(arguments);
            return this.getDistance(t) <= e
        }, isCollinear: function () {
            var t = c.read(arguments);
            return c.isCollinear(this.x, this.y, t.x, t.y)
        }, isColinear: "#isCollinear", isOrthogonal: function () {
            var t = c.read(arguments);
            return c.isOrthogonal(this.x, this.y, t.x, t.y)
        }, isZero: function () {
            var t = u.isZero;
            return t(this.x) && t(this.y)
        }, isNaN: function () {
            return isNaN(this.x) || isNaN(this.y)
        }, isInQuadrant: function (t) {
            return this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 && this.y * (t > 2 ? -1 : 1) >= 0
        }, dot: function () {
            var t = c.read(arguments);
            return this.x * t.x + this.y * t.y
        }, cross: function () {
            var t = c.read(arguments);
            return this.x * t.y - this.y * t.x
        }, project: function () {
            var t = c.read(arguments), e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
            return new c(t.x * e, t.y * e)
        }, statics: {
            min: function () {
                var t = c.read(arguments), e = c.read(arguments);
                return new c(Math.min(t.x, e.x), Math.min(t.y, e.y))
            }, max: function () {
                var t = c.read(arguments), e = c.read(arguments);
                return new c(Math.max(t.x, e.x), Math.max(t.y, e.y))
            }, random: function () {
                return new c(Math.random(), Math.random())
            }, isCollinear: function (t, e, n, i) {
                return Math.abs(t * i - e * n) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
            }, isOrthogonal: function (t, e, n, i) {
                return Math.abs(t * n + e * i) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
            }
        }
    }, r.each(["round", "ceil", "floor", "abs"], function (t) {
        var e = Math[t];
        this[t] = function () {
            return new c(e(this.x), e(this.y))
        }
    }, {})), f = c.extend({
        initialize: function (t, e, n, i) {
            this._x = t, this._y = e, this._owner = n, this._setter = i
        }, _set: function (t, e, n) {
            return this._x = t, this._y = e, n || this._owner[this._setter](this), this
        }, getX: function () {
            return this._x
        }, setX: function (t) {
            this._x = t, this._owner[this._setter](this)
        }, getY: function () {
            return this._y
        }, setY: function (t) {
            this._y = t, this._owner[this._setter](this)
        }, isSelected: function () {
            return !!(this._owner._selection & this._getSelection())
        }, setSelected: function (t) {
            this._owner._changeSelection(this._getSelection(), t)
        }, _getSelection: function () {
            return "setPosition" === this._setter ? 4 : 0
        }
    }), d = r.extend({
        _class: "Size", _readIndex: !0, initialize: function (t, e) {
            var n = typeof t, i = this.__read, r = 0;
            if ("number" === n) {
                var s = "number" == typeof e;
                this._set(t, s ? e : t), i && (r = s ? 2 : 1)
            } else if ("undefined" === n || null === t) this._set(0, 0), i && (r = null === t ? 1 : 0); else {
                var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
                r = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "width" in a ? this._set(a.width || 0, a.height || 0) : "x" in a ? this._set(a.x || 0, a.y || 0) : (this._set(0, 0), r = 0)
            }
            return i && (this.__read = r), this
        }, set: "#initialize", _set: function (t, e) {
            return this.width = t, this.height = e, this
        }, equals: function (t) {
            return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1
        }, clone: function () {
            return new d(this.width, this.height)
        }, toString: function () {
            var t = h.instance;
            return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
        }, _serialize: function (t) {
            var e = t.formatter;
            return [e.number(this.width), e.number(this.height)]
        }, add: function () {
            var t = d.read(arguments);
            return new d(this.width + t.width, this.height + t.height)
        }, subtract: function () {
            var t = d.read(arguments);
            return new d(this.width - t.width, this.height - t.height)
        }, multiply: function () {
            var t = d.read(arguments);
            return new d(this.width * t.width, this.height * t.height)
        }, divide: function () {
            var t = d.read(arguments);
            return new d(this.width / t.width, this.height / t.height)
        }, modulo: function () {
            var t = d.read(arguments);
            return new d(this.width % t.width, this.height % t.height)
        }, negate: function () {
            return new d((-this.width), (-this.height))
        }, isZero: function () {
            var t = u.isZero;
            return t(this.width) && t(this.height)
        }, isNaN: function () {
            return isNaN(this.width) || isNaN(this.height)
        }, statics: {
            min: function (t, e) {
                return new d(Math.min(t.width, e.width), Math.min(t.height, e.height))
            }, max: function (t, e) {
                return new d(Math.max(t.width, e.width), Math.max(t.height, e.height))
            }, random: function () {
                return new d(Math.random(), Math.random())
            }
        }
    }, r.each(["round", "ceil", "floor", "abs"], function (t) {
        var e = Math[t];
        this[t] = function () {
            return new d(e(this.width), e(this.height))
        }
    }, {})), _ = d.extend({
        initialize: function (t, e, n, i) {
            this._width = t, this._height = e, this._owner = n, this._setter = i
        }, _set: function (t, e, n) {
            return this._width = t, this._height = e, n || this._owner[this._setter](this), this
        }, getWidth: function () {
            return this._width
        }, setWidth: function (t) {
            this._width = t, this._owner[this._setter](this)
        }, getHeight: function () {
            return this._height
        }, setHeight: function (t) {
            this._height = t, this._owner[this._setter](this)
        }
    }), g = r.extend({
        _class: "Rectangle", _readIndex: !0, beans: !0, initialize: function (t, n, i, s) {
            var a, o = typeof t;
            if ("number" === o ? (this._set(t, n, i, s), a = 4) : "undefined" === o || null === t ? (this._set(0, 0, 0, 0), a = null === t ? 1 : 0) : 1 === arguments.length && (Array.isArray(t) ? (this._set.apply(this, t), a = 1) : t.x !== e || t.width !== e ? (this._set(t.x || 0, t.y || 0, t.width || 0, t.height || 0), a = 1) : t.from === e && t.to === e && (this._set(0, 0, 0, 0), r.filter(this, t), a = 1)), a === e) {
                var h, u, l = c.readNamed(arguments, "from"), f = r.peek(arguments), _ = l.x, g = l.y;
                if (f && f.x !== e || r.hasNamed(arguments, "to")) {
                    var v = c.readNamed(arguments, "to");
                    h = v.x - _, u = v.y - g, h < 0 && (_ = v.x, h = -h), u < 0 && (g = v.y, u = -u)
                } else {
                    var p = d.read(arguments);
                    h = p.width, u = p.height
                }
                this._set(_, g, h, u), a = arguments.__index;
                var m = arguments.__filtered;
                m && (this.__filtered = m)
            }
            return this.__read && (this.__read = a), this
        }, set: "#initialize", _set: function (t, e, n, i) {
            return this.x = t, this.y = e, this.width = n, this.height = i, this
        }, clone: function () {
            return new g(this.x, this.y, this.width, this.height)
        }, equals: function (t) {
            var e = r.isPlainValue(t) ? g.read(arguments) : t;
            return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1
        }, toString: function () {
            var t = h.instance;
            return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
        }, _serialize: function (t) {
            var e = t.formatter;
            return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)]
        }, getPoint: function (t) {
            var e = t ? c : f;
            return new e(this.x, this.y, this, "setPoint")
        }, setPoint: function () {
            var t = c.read(arguments);
            this.x = t.x, this.y = t.y
        }, getSize: function (t) {
            var e = t ? d : _;
            return new e(this.width, this.height, this, "setSize")
        }, _fw: 1, _fh: 1, setSize: function () {
            var t = d.read(arguments), e = this._sx, n = this._sy, i = t.width, r = t.height;
            e && (this.x += (this.width - i) * e), n && (this.y += (this.height - r) * n), this.width = i, this.height = r, this._fw = this._fh = 1
        }, getLeft: function () {
            return this.x
        }, setLeft: function (t) {
            if (!this._fw) {
                var e = t - this.x;
                this.width -= .5 === this._sx ? 2 * e : e
            }
            this.x = t, this._sx = this._fw = 0
        }, getTop: function () {
            return this.y
        }, setTop: function (t) {
            if (!this._fh) {
                var e = t - this.y;
                this.height -= .5 === this._sy ? 2 * e : e
            }
            this.y = t, this._sy = this._fh = 0
        }, getRight: function () {
            return this.x + this.width
        }, setRight: function (t) {
            if (!this._fw) {
                var e = t - this.x;
                this.width = .5 === this._sx ? 2 * e : e
            }
            this.x = t - this.width, this._sx = 1, this._fw = 0
        }, getBottom: function () {
            return this.y + this.height
        }, setBottom: function (t) {
            if (!this._fh) {
                var e = t - this.y;
                this.height = .5 === this._sy ? 2 * e : e
            }
            this.y = t - this.height, this._sy = 1, this._fh = 0
        }, getCenterX: function () {
            return this.x + this.width / 2
        }, setCenterX: function (t) {
            this._fw || .5 === this._sx ? this.x = t - this.width / 2 : (this._sx && (this.x += 2 * (t - this.x) * this._sx), this.width = 2 * (t - this.x)), this._sx = .5, this._fw = 0
        }, getCenterY: function () {
            return this.y + this.height / 2
        }, setCenterY: function (t) {
            this._fh || .5 === this._sy ? this.y = t - this.height / 2 : (this._sy && (this.y += 2 * (t - this.y) * this._sy), this.height = 2 * (t - this.y)), this._sy = .5, this._fh = 0
        }, getCenter: function (t) {
            var e = t ? c : f;
            return new e(this.getCenterX(), this.getCenterY(), this, "setCenter")
        }, setCenter: function () {
            var t = c.read(arguments);
            return this.setCenterX(t.x), this.setCenterY(t.y), this
        }, getArea: function () {
            return this.width * this.height
        }, isEmpty: function () {
            return 0 === this.width || 0 === this.height
        }, contains: function (t) {
            return t && t.width !== e || 4 === (Array.isArray(t) ? t : arguments).length ? this._containsRectangle(g.read(arguments)) : this._containsPoint(c.read(arguments))
        }, _containsPoint: function (t) {
            var e = t.x, n = t.y;
            return e >= this.x && n >= this.y && e <= this.x + this.width && n <= this.y + this.height
        }, _containsRectangle: function (t) {
            var e = t.x, n = t.y;
            return e >= this.x && n >= this.y && e + t.width <= this.x + this.width && n + t.height <= this.y + this.height
        }, intersects: function () {
            var t = g.read(arguments), e = r.read(arguments) || 0;
            return t.x + t.width > this.x - e && t.y + t.height > this.y - e && t.x < this.x + this.width + e && t.y < this.y + this.height + e
        }, intersect: function () {
            var t = g.read(arguments), e = Math.max(this.x, t.x), n = Math.max(this.y, t.y),
                i = Math.min(this.x + this.width, t.x + t.width), r = Math.min(this.y + this.height, t.y + t.height);
            return new g(e, n, i - e, r - n)
        }, unite: function () {
            var t = g.read(arguments), e = Math.min(this.x, t.x), n = Math.min(this.y, t.y),
                i = Math.max(this.x + this.width, t.x + t.width), r = Math.max(this.y + this.height, t.y + t.height);
            return new g(e, n, i - e, r - n)
        }, include: function () {
            var t = c.read(arguments), e = Math.min(this.x, t.x), n = Math.min(this.y, t.y),
                i = Math.max(this.x + this.width, t.x), r = Math.max(this.y + this.height, t.y);
            return new g(e, n, i - e, r - n)
        }, expand: function () {
            var t = d.read(arguments), e = t.width, n = t.height;
            return new g(this.x - e / 2, this.y - n / 2, this.width + e, this.height + n)
        }, scale: function (t, n) {
            return this.expand(this.width * t - this.width, this.height * (n === e ? t : n) - this.height)
        }
    }, r.each([["Top", "Left"], ["Top", "Right"], ["Bottom", "Left"], ["Bottom", "Right"], ["Left", "Center"], ["Top", "Center"], ["Right", "Center"], ["Bottom", "Center"]], function (t, e) {
        var n = t.join(""), i = /^[RL]/.test(n);
        e >= 4 && (t[1] += i ? "Y" : "X");
        var r = t[i ? 0 : 1], s = t[i ? 1 : 0], a = "get" + r, o = "get" + s, h = "set" + r, u = "set" + s,
            l = "get" + n, d = "set" + n;
        this[l] = function (t) {
            var e = t ? c : f;
            return new e(this[a](), this[o](), this, d)
        }, this[d] = function () {
            var t = c.read(arguments);
            this[h](t.x), this[u](t.y)
        }
    }, {beans: !0})), v = g.extend({
        initialize: function (t, e, n, i, r, s) {
            this._set(t, e, n, i, !0), this._owner = r, this._setter = s
        }, _set: function (t, e, n, i, r) {
            return this._x = t, this._y = e, this._width = n, this._height = i, r || this._owner[this._setter](this), this
        }
    }, new function () {
        var t = g.prototype;
        return r.each(["x", "y", "width", "height"], function (t) {
            var e = r.capitalize(t), n = "_" + t;
            this["get" + e] = function () {
                return this[n]
            }, this["set" + e] = function (t) {
                this[n] = t, this._dontNotify || this._owner[this._setter](this)
            }
        }, r.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function (e) {
            var n = "set" + e;
            this[n] = function () {
                this._dontNotify = !0, t[n].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this)
            }
        }, {
            isSelected: function () {
                return !!(2 & this._owner._selection)
            }, setSelected: function (t) {
                var e = this._owner;
                e._changeSelection && e._changeSelection(2, t)
            }
        }))
    }), p = r.extend({
        _class: "Matrix", initialize: function ot(t, e) {
            var n = arguments.length, i = !0;
            if (n >= 6 ? this._set.apply(this, arguments) : 1 === n || 2 === n ? t instanceof ot ? this._set(t._a, t._b, t._c, t._d, t._tx, t._ty, e) : Array.isArray(t) ? this._set.apply(this, e ? t.concat([e]) : t) : i = !1 : n ? i = !1 : this.reset(), !i) throw new Error("Unsupported matrix parameters");
            return this
        }, set: "#initialize", _set: function (t, e, n, i, r, s, a) {
            return this._a = t, this._b = e, this._c = n, this._d = i, this._tx = r, this._ty = s, a || this._changed(), this
        }, _serialize: function (t, e) {
            return r.serialize(this.getValues(), t, !0, e)
        }, _changed: function () {
            var t = this._owner;
            t && (t._applyMatrix ? t.transform(null, !0) : t._changed(9))
        }, clone: function () {
            return new p(this._a, this._b, this._c, this._d, this._tx, this._ty)
        }, equals: function (t) {
            return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty
        }, toString: function () {
            var t = h.instance;
            return "[[" + [t.number(this._a), t.number(this._c), t.number(this._tx)].join(", ") + "], [" + [t.number(this._b), t.number(this._d), t.number(this._ty)].join(", ") + "]]"
        }, reset: function (t) {
            return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this
        }, apply: function (t, e) {
            var n = this._owner;
            return !!n && (n.transform(null, !0, r.pick(t, !0), e), this.isIdentity())
        }, translate: function () {
            var t = c.read(arguments), e = t.x, n = t.y;
            return this._tx += e * this._a + n * this._c, this._ty += e * this._b + n * this._d, this._changed(), this
        }, scale: function () {
            var t = c.read(arguments), e = c.read(arguments, 0, {readNull: !0});
            return e && this.translate(e), this._a *= t.x, this._b *= t.x, this._c *= t.y, this._d *= t.y, e && this.translate(e.negate()), this._changed(), this
        }, rotate: function (t) {
            t *= Math.PI / 180;
            var e = c.read(arguments, 1), n = e.x, i = e.y, r = Math.cos(t), s = Math.sin(t), a = n - n * r + i * s,
                o = i - n * s - i * r, h = this._a, u = this._b, l = this._c, f = this._d;
            return this._a = r * h + s * l, this._b = r * u + s * f, this._c = -s * h + r * l, this._d = -s * u + r * f, this._tx += a * h + o * l, this._ty += a * u + o * f, this._changed(), this
        }, shear: function () {
            var t = c.read(arguments), e = c.read(arguments, 0, {readNull: !0});
            e && this.translate(e);
            var n = this._a, i = this._b;
            return this._a += t.y * this._c, this._b += t.y * this._d, this._c += t.x * n, this._d += t.x * i, e && this.translate(e.negate()), this._changed(), this
        }, skew: function () {
            var t = c.read(arguments), e = c.read(arguments, 0, {readNull: !0}), n = Math.PI / 180,
                i = new c(Math.tan(t.x * n), Math.tan(t.y * n));
            return this.shear(i, e)
        }, append: function (t, e) {
            if (t) {
                var n = this._a, i = this._b, r = this._c, s = this._d, a = t._a, o = t._c, h = t._b, u = t._d,
                    l = t._tx, c = t._ty;
                this._a = a * n + h * r, this._c = o * n + u * r, this._b = a * i + h * s, this._d = o * i + u * s, this._tx += l * n + c * r, this._ty += l * i + c * s, e || this._changed()
            }
            return this
        }, prepend: function (t, e) {
            if (t) {
                var n = this._a, i = this._b, r = this._c, s = this._d, a = this._tx, o = this._ty, h = t._a, u = t._c,
                    l = t._b, c = t._d, f = t._tx, d = t._ty;
                this._a = h * n + u * i, this._c = h * r + u * s, this._b = l * n + c * i, this._d = l * r + c * s, this._tx = h * a + u * o + f, this._ty = l * a + c * o + d, e || this._changed()
            }
            return this
        }, appended: function (t) {
            return this.clone().append(t)
        }, prepended: function (t) {
            return this.clone().prepend(t)
        }, invert: function () {
            var t = this._a, e = this._b, n = this._c, i = this._d, r = this._tx, s = this._ty, a = t * i - e * n,
                o = null;
            return a && !isNaN(a) && isFinite(r) && isFinite(s) && (this._a = i / a, this._b = -e / a, this._c = -n / a, this._d = t / a, this._tx = (n * s - i * r) / a, this._ty = (e * r - t * s) / a, o = this), o
        }, inverted: function () {
            return this.clone().invert()
        }, concatenate: "#append", preConcatenate: "#prepend", chain: "#appended", _shiftless: function () {
            return new p(this._a, this._b, this._c, this._d, 0, 0)
        }, _orNullIfIdentity: function () {
            return this.isIdentity() ? null : this
        }, isIdentity: function () {
            return 1 === this._a && 0 === this._b && 0 === this._c && 1 === this._d && 0 === this._tx && 0 === this._ty
        }, isInvertible: function () {
            var t = this._a * this._d - this._c * this._b;
            return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
        }, isSingular: function () {
            return !this.isInvertible()
        }, transform: function (t, e, n) {
            return arguments.length < 3 ? this._transformPoint(c.read(arguments)) : this._transformCoordinates(t, e, n)
        }, _transformPoint: function (t, e, n) {
            var i = t.x, r = t.y;
            return e || (e = new c), e._set(i * this._a + r * this._c + this._tx, i * this._b + r * this._d + this._ty, n)
        }, _transformCoordinates: function (t, e, n) {
            for (var i = 0, r = 2 * n; i < r; i += 2) {
                var s = t[i], a = t[i + 1];
                e[i] = s * this._a + a * this._c + this._tx, e[i + 1] = s * this._b + a * this._d + this._ty
            }
            return e
        }, _transformCorners: function (t) {
            var e = t.x, n = t.y, i = e + t.width, r = n + t.height, s = [e, n, i, n, i, r, e, r];
            return this._transformCoordinates(s, s, 4)
        }, _transformBounds: function (t, e, n) {
            for (var i = this._transformCorners(t), r = i.slice(0, 2), s = r.slice(), a = 2; a < 8; a++) {
                var o = i[a], h = 1 & a;
                o < r[h] ? r[h] = o : o > s[h] && (s[h] = o)
            }
            return e || (e = new g), e._set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
        }, inverseTransform: function () {
            return this._inverseTransform(c.read(arguments))
        }, _inverseTransform: function (t, e, n) {
            var i = this._a, r = this._b, s = this._c, a = this._d, o = this._tx, h = this._ty, u = i * a - r * s,
                l = null;
            if (u && !isNaN(u) && isFinite(o) && isFinite(h)) {
                var f = t.x - this._tx, d = t.y - this._ty;
                e || (e = new c), l = e._set((f * a - d * s) / u, (d * i - f * r) / u, n)
            }
            return l
        }, decompose: function () {
            var t, e, n, i = this._a, r = this._b, s = this._c, a = this._d, o = i * a - r * s, h = Math.sqrt,
                u = Math.atan2, l = 180 / Math.PI;
            if (0 !== i || 0 !== r) {
                var f = h(i * i + r * r);
                t = Math.acos(i / f) * (r > 0 ? 1 : -1), e = [f, o / f], n = [u(i * s + r * a, f * f), 0]
            } else if (0 !== s || 0 !== a) {
                var d = h(s * s + a * a);
                t = Math.asin(s / d) * (a > 0 ? 1 : -1), e = [o / d, d], n = [0, u(i * s + r * a, d * d)]
            } else t = 0, n = e = [0, 0];
            return {
                translation: this.getTranslation(),
                rotation: t * l,
                scaling: new c(e),
                skewing: new c(n[0] * l, n[1] * l)
            }
        }, getValues: function () {
            return [this._a, this._b, this._c, this._d, this._tx, this._ty]
        }, getTranslation: function () {
            return new c(this._tx, this._ty)
        }, getScaling: function () {
            return (this.decompose() || {}).scaling
        }, getRotation: function () {
            return (this.decompose() || {}).rotation
        }, applyToContext: function (t) {
            this.isIdentity() || t.transform(this._a, this._b, this._c, this._d, this._tx, this._ty)
        }
    }, r.each(["a", "b", "c", "d", "tx", "ty"], function (t) {
        var e = r.capitalize(t), n = "_" + t;
        this["get" + e] = function () {
            return this[n]
        }, this["set" + e] = function (t) {
            this[n] = t, this._changed()
        }
    }, {})), m = r.extend({
        _class: "Line", initialize: function (t, e, n, i, r) {
            var s = !1;
            arguments.length >= 4 ? (this._px = t, this._py = e, this._vx = n, this._vy = i, s = r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, s = n), s || (this._vx -= this._px, this._vy -= this._py)
        }, getPoint: function () {
            return new c(this._px, this._py)
        }, getVector: function () {
            return new c(this._vx, this._vy)
        }, getLength: function () {
            return this.getVector().getLength()
        }, intersect: function (t, e) {
            return m.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e)
        }, getSide: function (t, e) {
            return m.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0, e)
        }, getDistance: function (t) {
            return Math.abs(this.getSignedDistance(t))
        }, getSignedDistance: function (t) {
            return m.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0)
        }, isCollinear: function (t) {
            return c.isCollinear(this._vx, this._vy, t._vx, t._vy)
        }, isOrthogonal: function (t) {
            return c.isOrthogonal(this._vx, this._vy, t._vx, t._vy)
        }, statics: {
            intersect: function (t, e, n, i, r, s, a, o, h, l) {
                h || (n -= t, i -= e, a -= r, o -= s);
                var f = n * o - i * a;
                if (!u.isZero(f)) {
                    var d = t - r, _ = e - s, g = (a * _ - o * d) / f, v = (n * _ - i * d) / f, p = 1e-12, m = -p,
                        y = 1 + p;
                    if (l || m < g && g < y && m < v && v < y) return l || (g = g <= 0 ? 0 : g >= 1 ? 1 : g), new c(t + g * n, e + g * i)
                }
            }, getSide: function (t, e, n, i, r, s, a, o) {
                a || (n -= t, i -= e);
                var h = r - t, l = s - e, c = h * i - l * n;
                return !o && u.isZero(c) && (c = (h * n + h * n) / (n * n + i * i), c >= 0 && c <= 1 && (c = 0)), c < 0 ? -1 : c > 0 ? 1 : 0
            }, getSignedDistance: function (t, e, n, i, r, s, a) {
                return a || (n -= t, i -= e), 0 === n ? i > 0 ? r - t : t - r : 0 === i ? n < 0 ? s - e : e - s : ((r - t) * i - (s - e) * n) / Math.sqrt(n * n + i * i)
            }, getDistance: function (t, e, n, i, r, s, a) {
                return Math.abs(m.getSignedDistance(t, e, n, i, r, s, a))
            }
        }
    }), y = o.extend({
        _class: "Project",
        _list: "projects",
        _reference: "project",
        _compactSerialize: !0,
        initialize: function (t) {
            o.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new V(null, null, this), this._view = Z.create(this, t || tt.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0
        },
        _serialize: function (t, e) {
            return r.serialize(this._children, t, !0, e)
        },
        _changed: function (t, e) {
            if (1 & t) {
                var n = this._view;
                n && (n._needsUpdate = !0, !n._requested && n._autoUpdate && n.requestUpdate())
            }
            var i = this._changes;
            if (i && e) {
                var r = this._changesById, s = e._id, a = r[s];
                a ? a.flags |= t : i.push(r[s] = {item: e, flags: t})
            }
        },
        clear: function () {
            for (var t = this._children, e = t.length - 1; e >= 0; e--) t[e].remove()
        },
        isEmpty: function () {
            return !this._children.length
        },
        remove: function ht() {
            return !!ht.base.call(this) && (this._view && this._view.remove(), !0)
        },
        getView: function () {
            return this._view
        },
        getCurrentStyle: function () {
            return this._currentStyle
        },
        setCurrentStyle: function (t) {
            this._currentStyle.set(t)
        },
        getIndex: function () {
            return this._index
        },
        getOptions: function () {
            return this._scope.settings
        },
        getLayers: function () {
            return this._children
        },
        getActiveLayer: function () {
            return this._activeLayer || new b({project: this, insert: !0})
        },
        getSymbolDefinitions: function () {
            var t = [], e = {};
            return this.getItems({
                "class": k, match: function (n) {
                    var i = n._definition, r = i._id;
                    return e[r] || (e[r] = !0, t.push(i)), !1
                }
            }), t
        },
        getSymbols: "getSymbolDefinitions",
        getSelectedItems: function () {
            var t = this._selectionItems, e = [];
            for (var n in t) {
                var i = t[n], r = i._selection;
                1 & r && i.isInserted() ? e.push(i) : r || this._updateSelection(i)
            }
            return e
        },
        _updateSelection: function (t) {
            var e = t._id, n = this._selectionItems;
            t._selection ? n[e] !== t && (this._selectionCount++, n[e] = t) : n[e] === t && (this._selectionCount--, delete n[e])
        },
        selectAll: function () {
            for (var t = this._children, e = 0, n = t.length; e < n; e++) t[e].setFullySelected(!0)
        },
        deselectAll: function () {
            var t = this._selectionItems;
            for (var e in t) t[e].setFullySelected(!1)
        },
        addLayer: function (t) {
            return this.insertLayer(e, t)
        },
        insertLayer: function (t, e) {
            if (e instanceof b) {
                e._remove(!1, !0), r.splice(this._children, [e], t, 0), e._setProject(this, !0);
                var n = e._name;
                n && e.setName(n), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e)
            } else e = null;
            return e
        },
        _insertItem: function (t, n, i) {
            return n = this.insertLayer(t, n) || (this._activeLayer || this._insertItem(e, new b(w.NO_INSERT), !0)).insertChild(t, n), i && n.activate && n.activate(), n
        },
        getItems: function (t) {
            return w._getItems(this, t)
        },
        getItem: function (t) {
            return w._getItems(this, t, null, null, !0)[0] || null
        },
        importJSON: function (t) {
            this.activate();
            var e = this._activeLayer;
            return r.importJSON(t, e && e.isEmpty() && e)
        },
        removeOn: function (t) {
            var e = this._removeSets;
            if (e) {
                "mouseup" === t && (e.mousedrag = null);
                var n = e[t];
                if (n) {
                    for (var i in n) {
                        var r = n[i];
                        for (var s in e) {
                            var a = e[s];
                            a && a != n && delete a[r._id]
                        }
                        r.remove()
                    }
                    e[t] = null
                }
            }
        },
        draw: function (t, e, n) {
            this._updateVersion++, t.save(), e.applyToContext(t);
            for (var i = this._children, s = new r({
                offset: new c(0, 0),
                pixelRatio: n,
                viewMatrix: e.isIdentity() ? null : e,
                matrices: [new p],
                updateMatrix: !0
            }), a = 0, o = i.length; a < o; a++) i[a].draw(t, s);
            if (t.restore(), this._selectionCount > 0) {
                t.save(), t.strokeWidth = 1;
                var h = this._selectionItems, u = this._scope.settings.handleSize, l = this._updateVersion;
                for (var f in h) h[f]._drawSelection(t, e, u, h, l);
                t.restore()
            }
        }
    }), w = r.extend(s, {
        statics: {
            extend: function ut(t) {
                return t._serializeFields && (t._serializeFields = r.set({}, this.prototype._serializeFields, t._serializeFields)), ut.base.apply(this, arguments)
            }, NO_INSERT: {insert: !1}
        },
        _class: "Item",
        _name: null,
        _applyMatrix: !0,
        _canApplyMatrix: !0,
        _canScaleStroke: !1,
        _pivot: null,
        _visible: !0,
        _blendMode: "normal",
        _opacity: 1,
        _locked: !1,
        _guide: !1,
        _clipMask: !1,
        _selection: 0,
        _selectBounds: !0,
        _selectChildren: !1,
        _serializeFields: {
            name: null,
            applyMatrix: null,
            matrix: new p,
            pivot: null,
            visible: !0,
            blendMode: "normal",
            opacity: 1,
            locked: !1,
            guide: !1,
            clipMask: !1,
            selected: !1,
            data: {}
        },
        _prioritize: ["applyMatrix"]
    }, new function () {
        var t = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"];
        return r.each(t, function (t) {
            this._events[t] = {
                install: function (t) {
                    this.getView()._countItemEvent(t, 1)
                }, uninstall: function (t) {
                    this.getView()._countItemEvent(t, -1)
                }
            }
        }, {
            _events: {
                onFrame: {
                    install: function () {
                        this.getView()._animateItem(this, !0)
                    }, uninstall: function () {
                        this.getView()._animateItem(this, !1)
                    }
                }, onLoad: {}, onError: {}
            }, statics: {_itemHandlers: t}
        })
    }, {
        initialize: function () {
        }, _initialize: function (t, n) {
            var i = t && r.isPlainObject(t), s = i && t.internal === !0, a = this._matrix = new p,
                o = i && t.project || paper.project, h = paper.settings;
            return this._id = s ? null : l.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && h.applyMatrix, n && a.translate(n), a._owner = this, this._style = new V(o._currentStyle, this, o), s || i && 0 == t.insert || !h.insertItems && (!i || t.insert !== !0) ? this._setProject(o) : (i && t.parent || o)._insertItem(e, this, !0), i && t !== w.NO_INSERT && this.set(t, {
                internal: !0,
                insert: !0,
                project: !0,
                parent: !0
            }), i
        }, _serialize: function (t, e) {
            function n(n) {
                for (var a in n) {
                    var o = s[a];
                    r.equals(o, "leading" === a ? 1.2 * n.fontSize : n[a]) || (i[a] = r.serialize(o, t, "data" !== a, e))
                }
            }

            var i = {}, s = this;
            return n(this._serializeFields), this instanceof x || n(this._style._defaults), [this._class, i]
        }, _changed: function (t) {
            var n = this._symbol, i = this._parent || n, r = this._project;
            8 & t && (this._bounds = this._position = this._decomposed = this._globalMatrix = e), i && 40 & t && w._clearBoundsCache(i), 2 & t && w._clearBoundsCache(this), r && r._changed(t, this), n && n._changed(t)
        }, getId: function () {
            return this._id
        }, getName: function () {
            return this._name
        }, setName: function (t) {
            if (this._name && this._removeNamed(), t === +t + "") throw new Error("Names consisting only of numbers are not supported.");
            var n = this._getOwner();
            if (t && n) {
                var i = n._children, r = n._namedChildren;
                (r[t] = r[t] || []).push(this), t in i || (i[t] = this)
            }
            this._name = t || e, this._changed(128)
        }, getStyle: function () {
            return this._style
        }, setStyle: function (t) {
            this.getStyle().set(t)
        }
    }, r.each(["locked", "visible", "blendMode", "opacity", "guide"], function (t) {
        var e = r.capitalize(t), n = "_" + t, i = {locked: 128, visible: 137};
        this["get" + e] = function () {
            return this[n]
        }, this["set" + e] = function (e) {
            e != this[n] && (this[n] = e, this._changed(i[t] || 129))
        }
    }, {}), {
        beans: !0, getSelection: function () {
            return this._selection
        }, setSelection: function (t) {
            if (t !== this._selection) {
                this._selection = t;
                var e = this._project;
                e && (e._updateSelection(this), this._changed(129))
            }
        }, _changeSelection: function (t, e) {
            var n = this._selection;
            this.setSelection(e ? n | t : n & ~t)
        }, isSelected: function () {
            if (this._selectChildren) for (var t = this._children, e = 0, n = t.length; e < n; e++) if (t[e].isSelected()) return !0;
            return !!(1 & this._selection)
        }, setSelected: function (t) {
            if (this._selectChildren) for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setSelected(t);
            this._changeSelection(1, t)
        }, isFullySelected: function () {
            var t = this._children, e = !!(1 & this._selection);
            if (t && e) {
                for (var n = 0, i = t.length; n < i; n++) if (!t[n].isFullySelected()) return !1;
                return !0
            }
            return e
        }, setFullySelected: function (t) {
            var e = this._children;
            if (e) for (var n = 0, i = e.length; n < i; n++) e[n].setFullySelected(t);
            this._changeSelection(1, t)
        }, isClipMask: function () {
            return this._clipMask
        }, setClipMask: function (t) {
            this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(129), this._parent && this._parent._changed(1024))
        }, getData: function () {
            return this._data || (this._data = {}), this._data
        }, setData: function (t) {
            this._data = t
        }, getPosition: function (t) {
            var e = this._position, n = t ? c : f;
            if (!e) {
                var i = this._pivot;
                e = this._position = i ? this._matrix._transformPoint(i) : this.getBounds().getCenter(!0)
            }
            return new n(e.x, e.y, this, "setPosition")
        }, setPosition: function () {
            this.translate(c.read(arguments).subtract(this.getPosition(!0)))
        }, getPivot: function () {
            var t = this._pivot;
            return t ? new f(t.x, t.y, this, "setPivot") : null
        }, setPivot: function () {
            this._pivot = c.read(arguments, 0, {clone: !0, readNull: !0}), this._position = e
        }
    }, r.each({
        getStrokeBounds: {stroke: !0},
        getHandleBounds: {handle: !0},
        getInternalBounds: {internal: !0}
    }, function (t, e) {
        this[e] = function (e) {
            return this.getBounds(e, t)
        }
    }, {
        beans: !0, getBounds: function (t, e) {
            var n = e || t instanceof p, i = r.set({}, n ? e : t, this._boundsOptions);
            i.stroke && !this.getStrokeScaling() || (i.cacheItem = this);
            var s = this._getCachedBounds(n && t, i).rect;
            return arguments.length ? s : new v(s.x, s.y, s.width, s.height, this, "setBounds")
        }, setBounds: function () {
            var t = g.read(arguments), e = this.getBounds(), n = this._matrix, i = new p, r = t.getCenter();
            i.translate(r), t.width == e.width && t.height == e.height || (n.isInvertible() || (n.set(n._backup || (new p).translate(n.getTranslation())), e = this.getBounds()), i.scale(0 !== e.width ? t.width / e.width : 0, 0 !== e.height ? t.height / e.height : 0)), r = e.getCenter(), i.translate(-r.x, -r.y), this.transform(i)
        }, _getBounds: function (t, e) {
            var n = this._children;
            return n && n.length ? (w._updateBoundsCache(this, e.cacheItem), w._getBounds(n, t, e)) : new g
        }, _getBoundsCacheKey: function (t, e) {
            return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join("")
        }, _getCachedBounds: function (t, e, n) {
            t = t && t._orNullIfIdentity();
            var i = e.internal && !n, r = e.cacheItem, s = i ? null : this._matrix._orNullIfIdentity(),
                a = r && (!t || t.equals(s)) && this._getBoundsCacheKey(e, i), o = this._bounds;
            if (w._updateBoundsCache(this._parent || this._symbol, r), a && o && a in o) {
                var h = o[a];
                return {rect: h.rect.clone(), nonscaling: h.nonscaling}
            }
            var u = this._getBounds(t || s, e), l = u.rect || u, c = this._style,
                f = u.nonscaling || c.hasStroke() && !c.getStrokeScaling();
            if (a) {
                o || (this._bounds = o = {});
                var h = o[a] = {rect: l.clone(), nonscaling: f, internal: i}
            }
            return {rect: l, nonscaling: f}
        }, _getStrokeMatrix: function (t, e) {
            var n = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item,
                i = n ? n.getViewMatrix().invert() : t;
            return i && i._shiftless()
        }, statics: {
            _updateBoundsCache: function (t, e) {
                if (t && e) {
                    var n = e._id, i = t._boundsCache = t._boundsCache || {ids: {}, list: []};
                    i.ids[n] || (i.list.push(e), i.ids[n] = e)
                }
            }, _clearBoundsCache: function (t) {
                var n = t._boundsCache;
                if (n) {
                    t._bounds = t._position = t._boundsCache = e;
                    for (var i = 0, r = n.list, s = r.length; i < s; i++) {
                        var a = r[i];
                        a !== t && (a._bounds = a._position = e, a._boundsCache && w._clearBoundsCache(a))
                    }
                }
            }, _getBounds: function (t, e, n) {
                var i = 1 / 0, r = -i, s = i, a = r, o = !1;
                n = n || {};
                for (var h = 0, u = t.length; h < u; h++) {
                    var l = t[h];
                    if (l._visible && !l.isEmpty()) {
                        var c = l._getCachedBounds(e && e.appended(l._matrix), n, !0), f = c.rect;
                        i = Math.min(f.x, i), s = Math.min(f.y, s), r = Math.max(f.x + f.width, r), a = Math.max(f.y + f.height, a), c.nonscaling && (o = !0)
                    }
                }
                return {rect: isFinite(i) ? new g(i, s, r - i, a - s) : new g, nonscaling: o}
            }
        }
    }), {
        beans: !0, _decompose: function () {
            return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose())
        }, getRotation: function () {
            var t = this._decompose();
            return t ? t.rotation : 0
        }, setRotation: function (t) {
            var e = this.getRotation();
            if (null != e && null != t) {
                var n = this._decomposed;
                this.rotate(t - e), n && (n.rotation = t, this._decomposed = n)
            }
        }, getScaling: function () {
            var t = this._decompose(), e = t && t.scaling;
            return new f(e ? e.x : 1, e ? e.y : 1, this, "setScaling")
        }, setScaling: function () {
            var t = this.getScaling(), e = c.read(arguments, 0, {clone: !0, readNull: !0});
            if (t && e && !t.equals(e)) {
                var n = this.getRotation(), i = this._decomposed, r = new p, s = this.getPosition(!0);
                r.translate(s), n && r.rotate(n), r.scale(e.x / t.x, e.y / t.y), n && r.rotate(-n), r.translate(s.negate()), this.transform(r), i && (i.scaling = e, this._decomposed = i)
            }
        }, getMatrix: function () {
            return this._matrix
        }, setMatrix: function () {
            var t = this._matrix;
            t.initialize.apply(t, arguments)
        }, getGlobalMatrix: function (t) {
            var e = this._globalMatrix, n = this._project._updateVersion;
            if (e && e._updateVersion !== n && (e = null), !e) {
                e = this._globalMatrix = this._matrix.clone();
                var i = this._parent;
                i && e.prepend(i.getGlobalMatrix(!0)), e._updateVersion = n
            }
            return t ? e : e.clone()
        }, getViewMatrix: function () {
            return this.getGlobalMatrix().prepend(this.getView()._matrix)
        }, getApplyMatrix: function () {
            return this._applyMatrix
        }, setApplyMatrix: function (t) {
            (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0)
        }, getTransformContent: "#getApplyMatrix", setTransformContent: "#setApplyMatrix"
    }, {
        getProject: function () {
            return this._project
        }, _setProject: function (t, e) {
            if (this._project !== t) {
                this._project && this._installEvents(!1), this._project = t;
                for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._setProject(t);
                e = !0
            }
            e && this._installEvents(!0)
        }, getView: function () {
            return this._project._view
        }, _installEvents: function lt(t) {
            lt.base.call(this, t);
            for (var e = this._children, n = 0, i = e && e.length; n < i; n++) e[n]._installEvents(t)
        }, getLayer: function () {
            for (var t = this; t = t._parent;) if (t instanceof b) return t;
            return null
        }, getParent: function () {
            return this._parent
        }, setParent: function (t) {
            return t.addChild(this)
        }, _getOwner: "#getParent", getChildren: function () {
            return this._children
        }, setChildren: function (t) {
            this.removeChildren(), this.addChildren(t)
        }, getFirstChild: function () {
            return this._children && this._children[0] || null
        }, getLastChild: function () {
            return this._children && this._children[this._children.length - 1] || null
        }, getNextSibling: function () {
            var t = this._getOwner();
            return t && t._children[this._index + 1] || null
        }, getPreviousSibling: function () {
            var t = this._getOwner();
            return t && t._children[this._index - 1] || null
        }, getIndex: function () {
            return this._index
        }, equals: function (t) {
            return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1
        }, _equals: function (t) {
            return r.equals(this._children, t._children)
        }, clone: function (t) {
            var n = new this.constructor(w.NO_INSERT), i = this._children,
                s = r.pick(t ? t.insert : e, t === e || t === !0), a = r.pick(t ? t.deep : e, !0);
            i && n.copyAttributes(this), i && !a || n.copyContent(this), i || n.copyAttributes(this), s && n.insertAbove(this);
            var o = this._name, h = this._parent;
            if (o && h) {
                for (var i = h._children, u = o, l = 1; i[o];) o = u + " " + l++;
                o !== u && n.setName(o)
            }
            return n
        }, copyContent: function (t) {
            for (var e = t._children, n = 0, i = e && e.length; n < i; n++) this.addChild(e[n].clone(!1), !0)
        }, copyAttributes: function (t, e) {
            this.setStyle(t._style);
            for (var n = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], i = 0, s = n.length; i < s; i++) {
                var a = n[i];
                t.hasOwnProperty(a) && (this[a] = t[a])
            }
            e || this._matrix.set(t._matrix, !0), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection);
            var o = t._data, h = t._name;
            this._data = o ? r.clone(o) : null, h && this.setName(h)
        }, rasterize: function (t, n) {
            var i = this.getStrokeBounds(), s = (t || this.getView().getResolution()) / 72, a = i.getTopLeft().floor(),
                o = i.getBottomRight().ceil(), h = new d(o.subtract(a)), u = new S(w.NO_INSERT);
            if (!h.isZero()) {
                var l = tt.getCanvas(h.multiply(s)), c = l.getContext("2d"), f = (new p).scale(s).translate(a.negate());
                c.save(), f.applyToContext(c), this.draw(c, new r({matrices: [f]})), c.restore(), u.setCanvas(l)
            }
            return u.transform((new p).translate(a.add(h.divide(2))).scale(1 / s)), (n === e || n) && u.insertAbove(this), u
        }, contains: function () {
            return !!this._contains(this._matrix._inverseTransform(c.read(arguments)))
        }, _contains: function (t) {
            var e = this._children;
            if (e) {
                for (var n = e.length - 1; n >= 0; n--) if (e[n].contains(t)) return !0;
                return !1
            }
            return t.isInside(this.getInternalBounds())
        }, isInside: function () {
            return g.read(arguments).contains(this.getBounds())
        }, _asPathItem: function () {
            return new L.Rectangle({rectangle: this.getInternalBounds(), matrix: this._matrix, insert: !1})
        }, intersects: function (t, e) {
            return t instanceof w && this._asPathItem().getIntersections(t._asPathItem(), null, e, !0).length > 0
        }
    }, new function () {
        function t() {
            return this._hitTest(c.read(arguments), P.getOptions(arguments))
        }

        function e() {
            var t = c.read(arguments), e = P.getOptions(arguments), n = [];
            return this._hitTest(t, r.set({all: n}, e)), n
        }

        function n(t, e, n, i) {
            var r = this._children;
            if (r) for (var s = r.length - 1; s >= 0; s--) {
                var a = r[s], o = a !== i && a._hitTest(t, e, n);
                if (o && !e.all) return o
            }
            return null
        }

        return y.inject({hitTest: t, hitTestAll: e, _hitTest: n}), {hitTest: t, hitTestAll: e, _hitTestChildren: n}
    }, {
        _hitTest: function (t, e, n) {
            function i(t) {
                return t && _ && !_(t) && (t = null), t && e.all && e.all.push(t), t
            }

            function s(e, n) {
                var i = n ? l["get" + n]() : g.getPosition();
                if (t.subtract(i).divide(u).length <= 1) return new P(e, g, {name: n ? r.hyphenate(n) : e, point: i})
            }

            if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty()) return null;
            var a = this._matrix, o = n ? n.appended(a) : this.getGlobalMatrix().prepend(this.getView()._matrix),
                h = Math.max(e.tolerance, 1e-12),
                u = e._tolerancePadding = new d(L._getStrokePadding(h, a._shiftless().invert()));
            if (t = a._inverseTransform(t), !t || !this._children && !this.getBounds({
                internal: !0,
                stroke: !0,
                handle: !0
            }).expand(u.multiply(2))._containsPoint(t)) return null;
            var l, c,
                f = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== r.hyphenate(this._class) || e["class"] && !(this instanceof e["class"])),
                _ = e.match, g = this, v = e.position, p = e.center, m = e.bounds;
            if (f && this._parent && (v || p || m)) {
                if ((p || m) && (l = this.getInternalBounds()), c = v && s("position") || p && s("center", "Center"), !c && m) for (var y = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], w = 0; w < 8 && !c; w++) c = s("bounds", y[w]);
                c = i(c)
            }
            return c || (c = this._hitTestChildren(t, e, o) || f && i(this._hitTestSelf(t, e, o, this.getStrokeScaling() ? null : o._shiftless().invert())) || null), c && c.point && (c.point = a.transform(c.point)), c
        }, _hitTestSelf: function (t, e) {
            if (e.fill && this.hasFill() && this._contains(t)) return new P("fill", this)
        }, matches: function (t, e) {
            function n(t, e) {
                for (var i in t) if (t.hasOwnProperty(i)) {
                    var s = t[i], a = e[i];
                    if (r.isPlainObject(s) && r.isPlainObject(a)) {
                        if (!n(s, a)) return !1
                    } else if (!r.equals(s, a)) return !1
                }
                return !0
            }

            var i = typeof t;
            if ("object" === i) {
                for (var s in t) if (t.hasOwnProperty(s) && !this.matches(s, t[s])) return !1;
                return !0
            }
            if ("function" === i) return t(this);
            if ("match" === t) return e(this);
            var a = /^(empty|editable)$/.test(t) ? this["is" + r.capitalize(t)]() : "type" === t ? r.hyphenate(this._class) : this[t];
            if ("class" === t) {
                if ("function" == typeof e) return this instanceof e;
                a = this._class
            }
            if ("function" == typeof e) return !!e(a);
            if (e) {
                if (e.test) return e.test(a);
                if (r.isPlainObject(e)) return n(e, a)
            }
            return r.equals(a, e)
        }, getItems: function (t) {
            return w._getItems(this, t, this._matrix)
        }, getItem: function (t) {
            return w._getItems(this, t, this._matrix, null, !0)[0] || null
        }, statics: {
            _getItems: function ct(t, e, n, i, s) {
                if (!i) {
                    var a = "object" == typeof e && e, o = a && a.overlapping, h = a && a.inside, u = o || h,
                        l = u && g.read([u]);
                    i = {
                        items: [],
                        recursive: a && a.recursive !== !1,
                        inside: !!h,
                        overlapping: !!o,
                        rect: l,
                        path: o && new L.Rectangle({rectangle: l, insert: !1})
                    }, a && (e = r.filter({}, e, {recursive: !0, inside: !0, overlapping: !0}))
                }
                var c = t._children, f = i.items, l = i.rect;
                n = l && (n || new p);
                for (var d = 0, _ = c && c.length; d < _; d++) {
                    var v = c[d], m = n && n.appended(v._matrix), y = !0;
                    if (l) {
                        var u = v.getBounds(m);
                        if (!l.intersects(u)) continue;
                        l.contains(u) || i.overlapping && (u.contains(l) || i.path.intersects(v, m)) || (y = !1)
                    }
                    if (y && v.matches(e) && (f.push(v), s)) break;
                    if (i.recursive !== !1 && ct(v, e, m, i, s), s && f.length > 0) break
                }
                return f
            }
        }
    }, {
        importJSON: function (t) {
            var e = r.importJSON(t, this);
            return e !== this ? this.addChild(e) : e
        }, addChild: function (t) {
            return this.insertChild(e, t)
        }, insertChild: function (t, e) {
            var n = e ? this.insertChildren(t, [e]) : null;
            return n && n[0]
        }, addChildren: function (t) {
            return this.insertChildren(this._children.length, t)
        }, insertChildren: function (t, e) {
            var n = this._children;
            if (n && e && e.length > 0) {
                e = r.slice(e);
                for (var i = {}, s = e.length - 1; s >= 0; s--) {
                    var a = e[s], o = a && a._id;
                    !a || i[o] ? e.splice(s, 1) : (a._remove(!1, !0), i[o] = !0)
                }
                r.splice(n, e, t, 0);
                for (var h = this._project, u = h._changes, s = 0, l = e.length; s < l; s++) {
                    var a = e[s], c = a._name;
                    a._parent = this, a._setProject(h, !0), c && a.setName(c), u && a._changed(5)
                }
                this._changed(11)
            } else e = null;
            return e
        }, _insertItem: "#insertChild", _insertAt: function (t, e) {
            var n = t && t._getOwner(), i = t !== this && n ? this : null;
            return i && (i._remove(!1, !0), n._insertItem(t._index + e, i)), i
        }, insertAbove: function (t) {
            return this._insertAt(t, 1)
        }, insertBelow: function (t) {
            return this._insertAt(t, 0)
        }, sendToBack: function () {
            var t = this._getOwner();
            return t ? t._insertItem(0, this) : null
        }, bringToFront: function () {
            var t = this._getOwner();
            return t ? t._insertItem(e, this) : null
        }, appendTop: "#addChild", appendBottom: function (t) {
            return this.insertChild(0, t)
        }, moveAbove: "#insertAbove", moveBelow: "#insertBelow", addTo: function (t) {
            return t._insertItem(e, this)
        }, copyTo: function (t) {
            return this.clone(!1).addTo(t)
        }, reduce: function (t) {
            var e = this._children;
            if (e && 1 === e.length) {
                var n = e[0].reduce(t);
                return this._parent ? (n.insertAbove(this), this.remove()) : n.remove(), n
            }
            return this
        }, _removeNamed: function () {
            var t = this._getOwner();
            if (t) {
                var e = t._children, n = t._namedChildren, i = this._name, r = n[i], s = r ? r.indexOf(this) : -1;
                s !== -1 && (e[i] == this && delete e[i], r.splice(s, 1), r.length ? e[i] = r[0] : delete n[i])
            }
        }, _remove: function (t, e) {
            var n = this._getOwner(), i = this._project, s = this._index;
            return !!n && (this._name && this._removeNamed(), null != s && (i._activeLayer === this && (i._activeLayer = this.getNextSibling() || this.getPreviousSibling()), r.splice(n._children, null, s, 1)), this._installEvents(!1), t && i._changes && this._changed(5), e && n._changed(11, this), this._parent = null, !0)
        }, remove: function () {
            return this._remove(!0, !0)
        }, replaceWith: function (t) {
            var e = t && t.insertBelow(this);
            return e && this.remove(), e
        }, removeChildren: function (t, e) {
            if (!this._children) return null;
            t = t || 0, e = r.pick(e, this._children.length);
            for (var n = r.splice(this._children, null, t, e - t), i = n.length - 1; i >= 0; i--) n[i]._remove(!0, !1);
            return n.length > 0 && this._changed(11), n
        }, clear: "#removeChildren", reverseChildren: function () {
            if (this._children) {
                this._children.reverse();
                for (var t = 0, e = this._children.length; t < e; t++) this._children[t]._index = t;
                this._changed(11)
            }
        }, isEmpty: function () {
            var t = this._children;
            return !t || !t.length
        }, isEditable: function () {
            for (var t = this; t;) {
                if (!t._visible || t._locked) return !1;
                t = t._parent
            }
            return !0
        }, hasFill: function () {
            return this.getStyle().hasFill()
        }, hasStroke: function () {
            return this.getStyle().hasStroke()
        }, hasShadow: function () {
            return this.getStyle().hasShadow()
        }, _getOrder: function (t) {
            function e(t) {
                var e = [];
                do e.unshift(t); while (t = t._parent);
                return e
            }

            for (var n = e(this), i = e(t), r = 0, s = Math.min(n.length, i.length); r < s; r++) if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
            return 0
        }, hasChildren: function () {
            return this._children && this._children.length > 0
        }, isInserted: function () {
            return !!this._parent && this._parent.isInserted()
        }, isAbove: function (t) {
            return this._getOrder(t) === -1
        }, isBelow: function (t) {
            return 1 === this._getOrder(t)
        }, isParent: function (t) {
            return this._parent === t
        }, isChild: function (t) {
            return t && t._parent === this
        }, isDescendant: function (t) {
            for (var e = this; e = e._parent;) if (e === t) return !0;
            return !1
        }, isAncestor: function (t) {
            return !!t && t.isDescendant(this)
        }, isSibling: function (t) {
            return this._parent === t._parent
        }, isGroupedWith: function (t) {
            for (var e = this._parent; e;) {
                if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                e = e._parent
            }
            return !1
        }
    }, r.each(["rotate", "scale", "shear", "skew"], function (t) {
        var e = "rotate" === t;
        this[t] = function () {
            var n = (e ? r : c).read(arguments), i = c.read(arguments, 0, {readNull: !0});
            return this.transform((new p)[t](n, i || this.getPosition(!0)))
        }
    }, {
        translate: function () {
            var t = new p;
            return this.transform(t.translate.apply(t, arguments))
        }, transform: function (t, e, n, i) {
            var r = this._matrix, s = t && !t.isIdentity(),
                a = (e || this._applyMatrix) && (!r.isIdentity() || s || e && n && this._children);
            if (!s && !a) return this;
            if (s) {
                !t.isInvertible() && r.isInvertible() && (r._backup = r.getValues()), r.prepend(t, !0);
                var o = this._style, h = o.getFillColor(!0), u = o.getStrokeColor(!0);
                h && h.transform(t), u && u.transform(t)
            }
            if (a && (a = this._transformContent(r, n, i))) {
                var l = this._pivot;
                l && r._transformPoint(l, l, !0), r.reset(!0), i && this._canApplyMatrix && (this._applyMatrix = !0)
            }
            var c = this._bounds, f = this._position;
            (s || a) && this._changed(9);
            var d = s && c && t.decompose();
            if (d && d.skewing.isZero() && d.rotation % 90 === 0) {
                for (var _ in c) {
                    var g = c[_];
                    if (g.nonscaling) delete c[_]; else if (a || !g.internal) {
                        var v = g.rect;
                        t._transformBounds(v, v)
                    }
                }
                this._bounds = c;
                var p = c[this._getBoundsCacheKey(this._boundsOptions || {})];
                p && (this._position = p.rect.getCenter(!0))
            } else s && f && this._pivot && (this._position = t._transformPoint(f, f));
            return this
        }, _transformContent: function (t, e, n) {
            var i = this._children;
            if (i) {
                for (var r = 0, s = i.length; r < s; r++) i[r].transform(t, !0, e, n);
                return !0
            }
        }, globalToLocal: function () {
            return this.getGlobalMatrix(!0)._inverseTransform(c.read(arguments))
        }, localToGlobal: function () {
            return this.getGlobalMatrix(!0)._transformPoint(c.read(arguments))
        }, parentToLocal: function () {
            return this._matrix._inverseTransform(c.read(arguments))
        }, localToParent: function () {
            return this._matrix._transformPoint(c.read(arguments))
        }, fitBounds: function (t, e) {
            t = g.read(arguments);
            var n = this.getBounds(), i = n.height / n.width, r = t.height / t.width,
                s = (e ? i > r : i < r) ? t.width / n.width : t.height / n.height,
                a = new g(new c, new d(n.width * s, n.height * s));
            a.setCenter(t.getCenter()), this.setBounds(a)
        }
    }), {
        _setStyles: function (t, e, n) {
            var i = this._style, r = this._matrix;
            if (i.hasFill() && (t.fillStyle = i.getFillColor().toCanvasStyle(t, r)), i.hasStroke()) {
                t.strokeStyle = i.getStrokeColor().toCanvasStyle(t, r), t.lineWidth = i.getStrokeWidth();
                var s = i.getStrokeJoin(), a = i.getStrokeCap(), o = i.getMiterLimit();
                if (s && (t.lineJoin = s), a && (t.lineCap = a), o && (t.miterLimit = o), paper.support.nativeDash) {
                    var h = i.getDashArray(), u = i.getDashOffset();
                    h && h.length && ("setLineDash" in t ? (t.setLineDash(h), t.lineDashOffset = u) : (t.mozDash = h, t.mozDashOffset = u))
                }
            }
            if (i.hasShadow()) {
                var l = e.pixelRatio || 1, f = n._shiftless().prepend((new p).scale(l, l)),
                    d = f.transform(new c(i.getShadowBlur(), 0)), _ = f.transform(this.getShadowOffset());
                t.shadowColor = i.getShadowColor().toCanvasStyle(t), t.shadowBlur = d.getLength(), t.shadowOffsetX = _.x, t.shadowOffsetY = _.y
            }
        }, draw: function (t, e, n) {
            var i = this._updateVersion = this._project._updateVersion;
            if (this._visible && 0 !== this._opacity) {
                var r = e.matrices, s = e.viewMatrix, a = this._matrix, o = r[r.length - 1].appended(a);
                if (o.isInvertible()) {
                    s = s ? s.appended(o) : o, r.push(o), e.updateMatrix && (o._updateVersion = i, this._globalMatrix = o);
                    var h, u, l, c = this._blendMode, f = this._opacity, d = "normal" === c, _ = et.nativeModes[c],
                        g = d && 1 === f || e.dontStart || e.clip || (_ || d && f < 1) && this._canComposite(),
                        v = e.pixelRatio || 1;
                    if (!g) {
                        var p = this.getStrokeBounds(s);
                        if (!p.width || !p.height) return;
                        l = e.offset, u = e.offset = p.getTopLeft().floor(), h = t, t = tt.getContext(p.getSize().ceil().add(1).multiply(v)), 1 !== v && t.scale(v, v)
                    }
                    t.save();
                    var m = n ? n.appended(a) : this._canScaleStroke && !this.getStrokeScaling(!0) && s,
                        y = !g && e.clipItem, w = !m || y;
                    if (g ? (t.globalAlpha = f, _ && (t.globalCompositeOperation = c)) : w && t.translate(-u.x, -u.y), w && (g ? a : s).applyToContext(t), y && e.clipItem.draw(t, e.extend({clip: !0})), m) {
                        t.setTransform(v, 0, 0, v, 0, 0);
                        var x = e.offset;
                        x && t.translate(-x.x, -x.y)
                    }
                    this._draw(t, e, s, m), t.restore(), r.pop(), e.clip && !e.dontFinish && t.clip(), g || (et.process(c, t, h, f, u.subtract(l).multiply(v)), tt.release(t), e.offset = l)
                }
            }
        }, _isUpdated: function (t) {
            var e = this._parent;
            if (e instanceof E) return e._isUpdated(t);
            var n = this._updateVersion === t;
            return !n && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, n = !0), n
        }, _drawSelection: function (t, e, n, i, r) {
            var s = this._selection, a = 1 & s, o = 2 & s || a && this._selectBounds, h = 4 & s;
            if (this._drawSelected || (a = !1), (a || o || h) && this._isUpdated(r)) {
                var u, l = this.getSelectedColor(!0) || (u = this.getLayer()) && u.getSelectedColor(!0),
                    c = e.appended(this.getGlobalMatrix(!0)), f = n / 2;
                if (t.strokeStyle = t.fillStyle = l ? l.toCanvasStyle(t) : "#009dec", a && this._drawSelected(t, c, i), h) {
                    var d = this.getPosition(!0), _ = d.x, g = d.y;
                    t.beginPath(), t.arc(_, g, f, 0, 2 * Math.PI, !0), t.stroke();
                    for (var v = [[0, -1], [1, 0], [0, 1], [-1, 0]], p = f, m = n + 1, y = 0; y < 4; y++) {
                        var w = v[y], x = w[0], b = w[1];
                        t.moveTo(_ + x * p, g + b * p), t.lineTo(_ + x * m, g + b * m), t.stroke()
                    }
                }
                if (o) {
                    var C = c._transformCorners(this.getInternalBounds());
                    t.beginPath();
                    for (var y = 0; y < 8; y++) t[y ? "lineTo" : "moveTo"](C[y], C[++y]);
                    t.closePath(), t.stroke();
                    for (var y = 0; y < 8; y++) t.fillRect(C[y] - f, C[++y] - f, n, n)
                }
            }
        }, _canComposite: function () {
            return !1
        }
    }, r.each(["down", "drag", "up", "move"], function (t) {
        this["removeOn" + r.capitalize(t)] = function () {
            var e = {};
            return e[t] = !0, this.removeOn(e)
        }
    }, {
        removeOn: function (t) {
            for (var e in t) if (t[e]) {
                var n = "mouse" + e, i = this._project, r = i._removeSets = i._removeSets || {};
                r[n] = r[n] || {}, r[n][this._id] = this
            }
            return this
        }
    })), x = w.extend({
        _class: "Group",
        _selectBounds: !1,
        _selectChildren: !0,
        _serializeFields: {children: []},
        initialize: function (t) {
            this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments)
        },
        _changed: function ft(t) {
            ft.base.call(this, t), 1026 & t && (this._clipItem = e)
        },
        _getClipItem: function () {
            var t = this._clipItem;
            if (t === e) {
                t = null;
                for (var n = this._children, i = 0, r = n.length; i < r; i++) if (n[i]._clipMask) {
                    t = n[i];
                    break
                }
                this._clipItem = t
            }
            return t
        },
        isClipped: function () {
            return !!this._getClipItem()
        },
        setClipped: function (t) {
            var e = this.getFirstChild();
            e && e.setClipMask(t)
        },
        _getBounds: function dt(t, e) {
            var n = this._getClipItem();
            return n ? n._getCachedBounds(t && t.appended(n._matrix), r.set({}, e, {stroke: !1})) : dt.base.call(this, t, e)
        },
        _hitTestChildren: function _t(t, e, n) {
            var i = this._getClipItem();
            return (!i || i.contains(t)) && _t.base.call(this, t, e, n, i)
        },
        _draw: function (t, e) {
            var n = e.clip, i = !n && this._getClipItem();
            e = e.extend({
                clipItem: i,
                clip: !1
            }), n ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : i && i.draw(t, e.extend({clip: !0}));
            for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                var o = r[s];
                o !== i && o.draw(t, e)
            }
        }
    }), b = x.extend({
        _class: "Layer", initialize: function () {
            x.apply(this, arguments)
        }, _getOwner: function () {
            return this._parent || null != this._index && this._project
        }, isInserted: function gt() {
            return this._parent ? gt.base.call(this) : null != this._index
        }, activate: function () {
            this._project._activeLayer = this
        }, _hitTestSelf: function () {
        }
    }), C = w.extend({
        _class: "Shape",
        _applyMatrix: !1,
        _canApplyMatrix: !1,
        _canScaleStroke: !0,
        _serializeFields: {type: null, size: null, radius: null},
        initialize: function (t, e) {
            this._initialize(t, e)
        },
        _equals: function (t) {
            return this._type === t._type && this._size.equals(t._size) && r.equals(this._radius, t._radius)
        },
        copyContent: function (t) {
            this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius)
        },
        getType: function () {
            return this._type
        },
        setType: function (t) {
            this._type = t
        },
        getShape: "#getType",
        setShape: "#setType",
        getSize: function () {
            var t = this._size;
            return new _(t.width, t.height, this, "setSize")
        },
        setSize: function () {
            var t = d.read(arguments);
            if (this._size) {
                if (!this._size.equals(t)) {
                    var e = this._type, n = t.width, i = t.height;
                    "rectangle" === e ? this._radius.set(d.min(this._radius, t.divide(2))) : "circle" === e ? (n = i = (n + i) / 2, this._radius = n / 2) : "ellipse" === e && this._radius._set(n / 2, i / 2), this._size._set(n, i), this._changed(9)
                }
            } else this._size = t.clone()
        },
        getRadius: function () {
            var t = this._radius;
            return "circle" === this._type ? t : new _(t.width, t.height, this, "setRadius")
        },
        setRadius: function (t) {
            var e = this._type;
            if ("circle" === e) {
                if (t === this._radius) return;
                var n = 2 * t;
                this._radius = t, this._size._set(n, n)
            } else if (t = d.read(arguments), this._radius) {
                if (this._radius.equals(t)) return;
                if (this._radius.set(t), "rectangle" === e) {
                    var n = d.max(this._size, t.multiply(2));
                    this._size.set(n)
                } else "ellipse" === e && this._size._set(2 * t.width, 2 * t.height)
            } else this._radius = t.clone();
            this._changed(9)
        },
        isEmpty: function () {
            return !1
        },
        toPath: function (t) {
            var n = new (L[r.capitalize(this._type)])({
                center: new c,
                size: this._size,
                radius: this._radius,
                insert: !1
            });
            return n.copyAttributes(this), paper.settings.applyMatrix && n.setApplyMatrix(!0), (t === e || t) && n.insertAbove(this), n
        },
        toShape: "#clone",
        _asPathItem: function () {
            return this.toPath(!1)
        },
        _draw: function (t, e, n, i) {
            var r = this._style, s = r.hasFill(), a = r.hasStroke(), o = e.dontFinish || e.clip, h = !i;
            if (s || a || o) {
                var u = this._type, l = this._radius, c = "circle" === u;
                if (e.dontStart || t.beginPath(), h && c) t.arc(0, 0, l, 0, 2 * Math.PI, !0); else {
                    var f = c ? l : l.width, d = c ? l : l.height, _ = this._size, g = _.width, v = _.height;
                    if (h && "rectangle" === u && 0 === f && 0 === d) t.rect(-g / 2, -v / 2, g, v); else {
                        var p = g / 2, m = v / 2, y = .44771525016920644, w = f * y, x = d * y,
                            b = [-p, -m + d, -p, -m + x, -p + w, -m, -p + f, -m, p - f, -m, p - w, -m, p, -m + x, p, -m + d, p, m - d, p, m - x, p - w, m, p - f, m, -p + f, m, -p + w, m, -p, m - x, -p, m - d];
                        i && i.transform(b, b, 32), t.moveTo(b[0], b[1]), t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]), p !== f && t.lineTo(b[8], b[9]), t.bezierCurveTo(b[10], b[11], b[12], b[13], b[14], b[15]), m !== d && t.lineTo(b[16], b[17]), t.bezierCurveTo(b[18], b[19], b[20], b[21], b[22], b[23]), p !== f && t.lineTo(b[24], b[25]), t.bezierCurveTo(b[26], b[27], b[28], b[29], b[30], b[31])
                    }
                }
                t.closePath()
            }
            o || !s && !a || (this._setStyles(t, e, n), s && (t.fill(r.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), a && t.stroke())
        },
        _canComposite: function () {
            return !(this.hasFill() && this.hasStroke())
        },
        _getBounds: function (t, e) {
            var n = new g(this._size).setCenter(0, 0), i = this._style,
                r = e.stroke && i.hasStroke() && i.getStrokeWidth();
            return t && (n = t._transformBounds(n)), r ? n.expand(L._getStrokePadding(r, this._getStrokeMatrix(t, e))) : n
        }
    }, new function () {
        function t(t, e, n) {
            var i = t._radius;
            if (!i.isZero()) for (var r = t._size.divide(2), s = 1; s <= 4; s++) {
                var a = new c(s > 1 && s < 4 ? -1 : 1, s > 2 ? -1 : 1), o = a.multiply(r),
                    h = o.subtract(a.multiply(i)), u = new g(n ? o.add(a.multiply(n)) : o, h);
                if (u.contains(e)) return {point: h, quadrant: s}
            }
        }

        function e(t, e, n, i) {
            var r = t.divide(e);
            return (!i || r.isInQuadrant(i)) && r.subtract(r.normalize()).multiply(e).divide(n).length <= 1
        }

        return {
            _contains: function n(e) {
                if ("rectangle" === this._type) {
                    var i = t(this, e);
                    return i ? e.subtract(i.point).divide(this._radius).getLength() <= 1 : n.base.call(this, e)
                }
                return e.divide(this.size).getLength() <= .5
            }, _hitTestSelf: function i(n, r, s, a) {
                var o = !1, h = this._style, u = r.stroke && h.hasStroke(), l = r.fill && h.hasFill();
                if (u || l) {
                    var c = this._type, f = this._radius, d = u ? h.getStrokeWidth() / 2 : 0,
                        _ = r._tolerancePadding.add(L._getStrokePadding(d, !h.getStrokeScaling() && a));
                    if ("rectangle" === c) {
                        var v = _.multiply(2), p = t(this, n, v);
                        if (p) o = e(n.subtract(p.point), f, _, p.quadrant); else {
                            var m = new g(this._size).setCenter(0, 0), y = m.expand(v), w = m.expand(v.negate());
                            o = y._containsPoint(n) && !w._containsPoint(n)
                        }
                    } else o = e(n, f, _)
                }
                return o ? new P(u ? "stroke" : "fill", this) : i.base.apply(this, arguments)
            }
        }
    }, {
        statics: new function () {
            function t(t, e, n, i, s) {
                var a = new C(r.getNamed(s), e);
                return a._type = t, a._size = n, a._radius = i, a
            }

            return {
                Circle: function () {
                    var e = c.readNamed(arguments, "center"), n = r.readNamed(arguments, "radius");
                    return t("circle", e, new d(2 * n), n, arguments)
                }, Rectangle: function () {
                    var e = g.readNamed(arguments, "rectangle"),
                        n = d.min(d.readNamed(arguments, "radius"), e.getSize(!0).divide(2));
                    return t("rectangle", e.getCenter(!0), e.getSize(!0), n, arguments)
                }, Ellipse: function () {
                    var e = C._readEllipse(arguments), n = e.radius;
                    return t("ellipse", e.center, n.multiply(2), n, arguments)
                }, _readEllipse: function (t) {
                    var e, n;
                    if (r.hasNamed(t, "radius")) e = c.readNamed(t, "center"), n = d.readNamed(t, "radius"); else {
                        var i = g.readNamed(t, "rectangle");
                        e = i.getCenter(!0), n = i.getSize(!0).divide(2)
                    }
                    return {center: e, radius: n}
                }
            }
        }
    }), S = w.extend({
        _class: "Raster",
        _applyMatrix: !1,
        _canApplyMatrix: !1,
        _boundsOptions: {stroke: !1, handle: !1},
        _serializeFields: {crossOrigin: null, source: null},
        _prioritize: ["crossOrigin"],
        initialize: function (t, n) {
            if (!this._initialize(t, n !== e && c.read(arguments, 1))) {
                var r = "string" == typeof t ? i.getElementById(t) : t;
                r ? this.setImage(r) : this.setSource(t)
            }
            this._size || (this._size = new d, this._loaded = !1)
        },
        _equals: function (t) {
            return this.getSource() === t.getSource()
        },
        copyContent: function (t) {
            var e = t._image, n = t._canvas;
            if (e) this._setImage(e); else if (n) {
                var i = tt.getCanvas(t._size);
                i.getContext("2d").drawImage(n, 0, 0), this._setImage(i)
            }
            this._crossOrigin = t._crossOrigin
        },
        getSize: function () {
            var t = this._size;
            return new _(t ? t.width : 0, t ? t.height : 0, this, "setSize")
        },
        setSize: function () {
            var t = d.read(arguments);
            if (!t.equals(this._size)) if (t.width > 0 && t.height > 0) {
                var e = this.getElement();
                this._setImage(tt.getCanvas(t)), e && this.getContext(!0).drawImage(e, 0, 0, t.width, t.height)
            } else this._canvas && tt.release(this._canvas), this._size = t.clone()
        },
        getWidth: function () {
            return this._size ? this._size.width : 0
        },
        setWidth: function (t) {
            this.setSize(t, this.getHeight())
        },
        getHeight: function () {
            return this._size ? this._size.height : 0
        },
        setHeight: function (t) {
            this.setSize(this.getWidth(), t)
        },
        getLoaded: function () {
            return this._loaded
        },
        isEmpty: function () {
            var t = this._size;
            return !t || 0 === t.width && 0 === t.height
        },
        getResolution: function () {
            var t = this._matrix, e = new c(0, 0).transform(t), n = new c(1, 0).transform(t).subtract(e),
                i = new c(0, 1).transform(t).subtract(e);
            return new d(72 / n.getLength(), 72 / i.getLength())
        },
        getPpi: "#getResolution",
        getImage: function () {
            return this._image
        },
        setImage: function (t) {
            function e(t) {
                var e = n.getView(), i = t && t.type || "load";
                e && n.responds(i) && (paper = e._scope, n.emit(i, new $(t)))
            }

            var n = this;
            this._setImage(t), this._loaded ? setTimeout(e, 0) : t && H.add(t, {
                load: function (i) {
                    n._setImage(t), e(i)
                }, error: e
            })
        },
        _setImage: function (t) {
            this._canvas && tt.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new d(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(521)
        },
        getCanvas: function () {
            if (!this._canvas) {
                var t = tt.getContext(this._size);
                try {
                    this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas
                } catch (e) {
                    tt.release(t)
                }
            }
            return this._canvas
        },
        setCanvas: "#setImage",
        getContext: function (t) {
            return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(513)), this._context
        },
        setContext: function (t) {
            this._context = t
        },
        getSource: function () {
            var t = this._image;
            return t && t.src || this.toDataURL()
        },
        setSource: function (e) {
            var n = new t.Image, i = this._crossOrigin;
            i && (n.crossOrigin = i), n.src = e, this.setImage(n)
        },
        getCrossOrigin: function () {
            var t = this._image;
            return t && t.crossOrigin || this._crossOrigin || ""
        },
        setCrossOrigin: function (t) {
            this._crossOrigin = t;
            var e = this._image;
            e && (e.crossOrigin = t)
        },
        getElement: function () {
            return this._canvas || this._loaded && this._image
        }
    }, {
        beans: !1, getSubCanvas: function () {
            var t = g.read(arguments), e = tt.getContext(t.getSize());
            return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
        }, getSubRaster: function () {
            var t = g.read(arguments), e = new S(w.NO_INSERT);
            return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e
        }, toDataURL: function () {
            var t = this._image, e = t && t.src;
            if (/^data:/.test(e)) return e;
            var n = this.getCanvas();
            return n ? n.toDataURL.apply(n, arguments) : null
        }, drawImage: function (t) {
            var e = c.read(arguments, 1);
            this.getContext(!0).drawImage(t, e.x, e.y)
        }, getAverageColor: function (t) {
            var e, n;
            if (t ? t instanceof O ? (n = t, e = t.getBounds()) : "object" == typeof t && ("width" in t ? e = new g(t) : "x" in t && (e = new g(t.x - .5, t.y - .5, 1, 1))) : e = this.getBounds(), !e) return null;
            var i = 32, s = Math.min(e.width, i), a = Math.min(e.height, i), o = S._sampleContext;
            o ? o.clearRect(0, 0, i + 1, i + 1) : o = S._sampleContext = tt.getContext(new d(i)), o.save();
            var h = (new p).scale(s / e.width, a / e.height).translate(-e.x, -e.y);
            h.applyToContext(o), n && n.draw(o, new r({clip: !0, matrices: [h]})), this._matrix.applyToContext(o);
            var u = this.getElement(), l = this._size;
            u && o.drawImage(u, -l.width / 2, -l.height / 2), o.restore();
            for (var c = o.getImageData(.5, .5, Math.ceil(s), Math.ceil(a)).data, f = [0, 0, 0], _ = 0, v = 0, m = c.length; v < m; v += 4) {
                var y = c[v + 3];
                _ += y, y /= 255, f[0] += c[v] * y, f[1] += c[v + 1] * y, f[2] += c[v + 2] * y
            }
            for (var v = 0; v < 3; v++) f[v] /= _;
            return _ ? D.read(f) : null
        }, getPixel: function () {
            var t = c.read(arguments), e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
            return new D("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255)
        }, setPixel: function () {
            var t = c.read(arguments), e = D.read(arguments), n = e._convert("rgb"), i = e._alpha,
                r = this.getContext(!0), s = r.createImageData(1, 1), a = s.data;
            a[0] = 255 * n[0], a[1] = 255 * n[1], a[2] = 255 * n[2], a[3] = null != i ? 255 * i : 255, r.putImageData(s, t.x, t.y)
        }, createImageData: function () {
            var t = d.read(arguments);
            return this.getContext().createImageData(t.width, t.height)
        }, getImageData: function () {
            var t = g.read(arguments);
            return t.isEmpty() && (t = new g(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height)
        }, setImageData: function (t) {
            var e = c.read(arguments, 1);
            this.getContext(!0).putImageData(t, e.x, e.y)
        }, _getBounds: function (t, e) {
            var n = new g(this._size).setCenter(0, 0);
            return t ? t._transformBounds(n) : n
        }, _hitTestSelf: function (t) {
            if (this._contains(t)) {
                var e = this;
                return new P("pixel", e, {
                    offset: t.add(e._size.divide(2)).round(), color: {
                        get: function () {
                            return e.getPixel(this.offset)
                        }
                    }
                })
            }
        }, _draw: function (t) {
            var e = this.getElement();
            e && (t.globalAlpha = this._opacity, t.drawImage(e, -this._size.width / 2, -this._size.height / 2))
        }, _canComposite: function () {
            return !0
        }
    }), k = w.extend({
        _class: "SymbolItem",
        _applyMatrix: !1,
        _canApplyMatrix: !1,
        _boundsOptions: {stroke: !0},
        _serializeFields: {symbol: null},
        initialize: function (t, n) {
            this._initialize(t, n !== e && c.read(arguments, 1)) || this.setDefinition(t instanceof I ? t : new I(t))
        },
        _equals: function (t) {
            return this._definition === t._definition
        },
        copyContent: function (t) {
            this.setDefinition(t._definition)
        },
        getDefinition: function () {
            return this._definition
        },
        setDefinition: function (t) {
            this._definition = t, this._changed(9)
        },
        getSymbol: "#getDefinition",
        setSymbol: "#setDefinition",
        isEmpty: function () {
            return this._definition._item.isEmpty()
        },
        _getBounds: function (t, e) {
            var n = this._definition._item;
            return n._getCachedBounds(n._matrix.prepended(t), e)
        },
        _hitTestSelf: function (t, e, n) {
            var i = this._definition._item._hitTest(t, e, n);
            return i && (i.item = this), i
        },
        _draw: function (t, e) {
            this._definition._item.draw(t, e)
        }
    }), I = r.extend({
        _class: "SymbolDefinition", initialize: function (t, e) {
            this._id = l.get(), this.project = paper.project, t && this.setItem(t, e)
        }, _serialize: function (t, e) {
            return e.add(this, function () {
                return r.serialize([this._class, this._item], t, !1, e)
            })
        }, _changed: function (t) {
            8 & t && w._clearBoundsCache(this), 1 & t && this.project._changed(t)
        }, getItem: function () {
            return this._item
        }, setItem: function (t, e) {
            t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), this._item = t, t.remove(), t.setSelected(!1), e || t.setPosition(new c), t._symbol = this, this._changed(9)
        }, getDefinition: "#getItem", setDefinition: "#setItem", place: function (t) {
            return new k(this, t)
        }, clone: function () {
            return new I(this._item.clone(!1))
        }, equals: function (t) {
            return t === this || t && this._item.equals(t._item) || !1
        }
    }), P = r.extend({
        _class: "HitResult", initialize: function (t, e, n) {
            this.type = t, this.item = e, n && this.inject(n)
        }, statics: {
            getOptions: function (t) {
                var e = t && r.read(t);
                return r.set({
                    type: null,
                    tolerance: paper.settings.hitTolerance,
                    fill: !e,
                    stroke: !e,
                    segments: !e,
                    handles: !1,
                    ends: !1,
                    position: !1,
                    center: !1,
                    bounds: !1,
                    guides: !1,
                    selected: !1
                }, e)
            }
        }
    }), A = r.extend({
        _class: "Segment", beans: !0, _selection: 0, initialize: function (t, n, i, r, s, a) {
            var o, h, u, l, c = arguments.length;
            c > 0 && (null == t || "object" == typeof t ? 1 === c && t && "point" in t ? (o = t.point, h = t.handleIn, u = t.handleOut, l = t.selection) : (o = t, h = n, u = i, l = r) : (o = [t, n], h = i !== e ? [i, r] : null, u = s !== e ? [s, a] : null)), new M(o, this, "_point"), new M(h, this, "_handleIn"), new M(u, this, "_handleOut"), l && this.setSelection(l)
        }, _serialize: function (t, e) {
            var n = this._point, i = this._selection,
                s = i || this.hasHandles() ? [n, this._handleIn, this._handleOut] : n;
            return i && s.push(i), r.serialize(s, t, !0, e)
        }, _changed: function (t) {
            var e = this._path;
            if (e) {
                var n, i = e._curves, r = this._index;
                i && (t && t !== this._point && t !== this._handleIn || !(n = r > 0 ? i[r - 1] : e._closed ? i[i.length - 1] : null) || n._changed(), t && t !== this._point && t !== this._handleOut || !(n = i[r]) || n._changed()), e._changed(25)
            }
        }, getPoint: function () {
            return this._point
        }, setPoint: function () {
            this._point.set(c.read(arguments))
        }, getHandleIn: function () {
            return this._handleIn
        }, setHandleIn: function () {
            this._handleIn.set(c.read(arguments))
        }, getHandleOut: function () {
            return this._handleOut
        }, setHandleOut: function () {
            this._handleOut.set(c.read(arguments))
        }, hasHandles: function () {
            return !this._handleIn.isZero() || !this._handleOut.isZero()
        }, isSmooth: function () {
            var t = this._handleIn, e = this._handleOut;
            return !t.isZero() && !e.isZero() && t.isCollinear(e)
        }, clearHandles: function () {
            this._handleIn._set(0, 0), this._handleOut._set(0, 0)
        }, getSelection: function () {
            return this._selection
        }, setSelection: function (t) {
            var e = this._selection, n = this._path;
            this._selection = t = t || 0, n && t !== e && (n._updateSelection(this, e, t), n._changed(129))
        }, _changeSelection: function (t, e) {
            var n = this._selection;
            this.setSelection(e ? n | t : n & ~t)
        }, isSelected: function () {
            return !!(7 & this._selection)
        }, setSelected: function (t) {
            this._changeSelection(7, t)
        }, getIndex: function () {
            return this._index !== e ? this._index : null
        }, getPath: function () {
            return this._path || null
        }, getCurve: function () {
            var t = this._path, e = this._index;
            return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
        }, getLocation: function () {
            var t = this.getCurve();
            return t ? new z(t, this === t._segment1 ? 0 : 1) : null
        }, getNext: function () {
            var t = this._path && this._path._segments;
            return t && (t[this._index + 1] || this._path._closed && t[0]) || null
        }, smooth: function (t, n, i) {
            var r = t || {}, s = r.type, a = r.factor, o = this.getPrevious(), h = this.getNext(),
                u = (o || this)._point, l = this._point, f = (h || this)._point, d = u.getDistance(l),
                _ = l.getDistance(f);
            if (s && "catmull-rom" !== s) {
                if ("geometric" !== s) throw new Error("Smoothing method '" + s + "' not supported.");
                if (o && h) {
                    var g = u.subtract(f), v = a === e ? .4 : a, p = v * d / (d + _);
                    n || this.setHandleIn(g.multiply(p)), i || this.setHandleOut(g.multiply(p - v))
                }
            } else {
                var m = a === e ? .5 : a, y = Math.pow(d, m), w = y * y, x = Math.pow(_, m), b = x * x;
                if (!n && o) {
                    var C = 2 * b + 3 * x * y + w, S = 3 * x * (x + y);
                    this.setHandleIn(0 !== S ? new c((b * u._x + C * l._x - w * f._x) / S - l._x, (b * u._y + C * l._y - w * f._y) / S - l._y) : new c)
                }
                if (!i && h) {
                    var C = 2 * w + 3 * y * x + b, S = 3 * y * (y + x);
                    this.setHandleOut(0 !== S ? new c((w * f._x + C * l._x - b * u._x) / S - l._x, (w * f._y + C * l._y - b * u._y) / S - l._y) : new c)
                }
            }
        }, getPrevious: function () {
            var t = this._path && this._path._segments;
            return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null
        }, isFirst: function () {
            return !this._index
        }, isLast: function () {
            var t = this._path;
            return t && this._index === t._segments.length - 1 || !1
        }, reverse: function () {
            var t = this._handleIn, e = this._handleOut, n = t.clone();
            t.set(e), e.set(n)
        }, reversed: function () {
            return new A(this._point, this._handleOut, this._handleIn)
        }, remove: function () {
            return !!this._path && !!this._path.removeSegment(this._index)
        }, clone: function () {
            return new A(this._point, this._handleIn, this._handleOut)
        }, equals: function (t) {
            return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1
        }, toString: function () {
            var t = ["point: " + this._point];
            return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }"
        }, transform: function (t) {
            this._transformCoordinates(t, new Array(6), !0), this._changed()
        }, interpolate: function (t, e, n) {
            var i = 1 - n, r = n, s = t._point, a = e._point, o = t._handleIn, h = e._handleIn, u = e._handleOut,
                l = t._handleOut;
            this._point._set(i * s._x + r * a._x, i * s._y + r * a._y, !0), this._handleIn._set(i * o._x + r * h._x, i * o._y + r * h._y, !0), this._handleOut._set(i * l._x + r * u._x, i * l._y + r * u._y, !0), this._changed()
        }, _transformCoordinates: function (t, e, n) {
            var i = this._point, r = n && this._handleIn.isZero() ? null : this._handleIn,
                s = n && this._handleOut.isZero() ? null : this._handleOut, a = i._x, o = i._y, h = 2;
            return e[0] = a, e[1] = o, r && (e[h++] = r._x + a, e[h++] = r._y + o), s && (e[h++] = s._x + a, e[h++] = s._y + o), t && (t._transformCoordinates(e, e, h / 2), a = e[0], o = e[1], n ? (i._x = a, i._y = o, h = 2, r && (r._x = e[h++] - a, r._y = e[h++] - o), s && (s._x = e[h++] - a, s._y = e[h++] - o)) : (r || (e[h++] = a, e[h++] = o), s || (e[h++] = a, e[h++] = o))), e
        }
    }), M = c.extend({
        initialize: function (t, n, i) {
            var r, s, a;
            if (t) if ((r = t[0]) !== e) s = t[1]; else {
                var o = t;
                (r = o.x) === e && (o = c.read(arguments), r = o.x), s = o.y, a = o.selected
            } else r = s = 0;
            this._x = r, this._y = s, this._owner = n, n[i] = this, a && this.setSelected(!0)
        }, _set: function (t, e) {
            return this._x = t, this._y = e, this._owner._changed(this), this
        }, getX: function () {
            return this._x
        }, setX: function (t) {
            this._x = t, this._owner._changed(this)
        }, getY: function () {
            return this._y
        }, setY: function (t) {
            this._y = t, this._owner._changed(this)
        }, isZero: function () {
            var t = u.isZero;
            return t(this._x) && t(this._y)
        }, isSelected: function () {
            return !!(this._owner._selection & this._getSelection())
        }, setSelected: function (t) {
            this._owner._changeSelection(this._getSelection(), t)
        }, _getSelection: function () {
            var t = this._owner;
            return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0
        }
    }), T = r.extend({
        _class: "Curve", beans: !0, initialize: function (t, e, n, i, r, s, a, o) {
            var h, u, l, c, f, d, _ = arguments.length;
            3 === _ ? (this._path = t, h = e, u = n) : _ ? 1 === _ ? "segment1" in t ? (h = new A(t.segment1), u = new A(t.segment2)) : "point1" in t ? (l = t.point1, f = t.handle1, d = t.handle2, c = t.point2) : Array.isArray(t) && (l = [t[0], t[1]], c = [t[6], t[7]], f = [t[2] - t[0], t[3] - t[1]], d = [t[4] - t[6], t[5] - t[7]]) : 2 === _ ? (h = new A(t), u = new A(e)) : 4 === _ ? (l = t, f = e, d = n, c = i) : 8 === _ && (l = [t, e], c = [a, o], f = [n - t, i - e], d = [r - a, s - o]) : (h = new A, u = new A), this._segment1 = h || new A(l, null, f), this._segment2 = u || new A(c, d, null)
        }, _serialize: function (t, e) {
            return r.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], t, !0, e)
        }, _changed: function () {
            this._length = this._bounds = e
        }, clone: function () {
            return new T(this._segment1, this._segment2)
        }, toString: function () {
            var t = ["point1: " + this._segment1._point];
            return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }"
        }, classify: function () {
            return T.classify(this.getValues())
        }, remove: function () {
            var t = !1;
            if (this._path) {
                var e = this._segment2, n = e._handleOut;
                t = e.remove(), t && this._segment1._handleOut.set(n)
            }
            return t
        }, getPoint1: function () {
            return this._segment1._point
        }, setPoint1: function () {
            this._segment1._point.set(c.read(arguments))
        }, getPoint2: function () {
            return this._segment2._point
        }, setPoint2: function () {
            this._segment2._point.set(c.read(arguments))
        }, getHandle1: function () {
            return this._segment1._handleOut
        }, setHandle1: function () {
            this._segment1._handleOut.set(c.read(arguments))
        }, getHandle2: function () {
            return this._segment2._handleIn
        }, setHandle2: function () {
            this._segment2._handleIn.set(c.read(arguments))
        }, getSegment1: function () {
            return this._segment1
        }, getSegment2: function () {
            return this._segment2
        }, getPath: function () {
            return this._path
        }, getIndex: function () {
            return this._segment1._index
        }, getNext: function () {
            var t = this._path && this._path._curves;
            return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null
        }, getPrevious: function () {
            var t = this._path && this._path._curves;
            return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null
        }, isFirst: function () {
            return !this._segment1._index
        }, isLast: function () {
            var t = this._path;
            return t && this._segment1._index === t._curves.length - 1 || !1
        }, isSelected: function () {
            return this.getPoint1().isSelected() && this.getHandle1().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected()
        }, setSelected: function (t) {
            this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t)
        }, getValues: function (t) {
            return T.getValues(this._segment1, this._segment2, t)
        }, getPoints: function () {
            for (var t = this.getValues(), e = [], n = 0; n < 8; n += 2) e.push(new c(t[n], t[n + 1]));
            return e
        }
    }, {
        getLength: function () {
            return null == this._length && (this._length = T.getLength(this.getValues(), 0, 1)), this._length
        }, getArea: function () {
            return T.getArea(this.getValues())
        }, getLine: function () {
            return new m(this._segment1._point, this._segment2._point)
        }, getPart: function (t, e) {
            return new T(T.getPart(this.getValues(), t, e))
        }, getPartLength: function (t, e) {
            return T.getLength(this.getValues(), t, e)
        }, divideAt: function (t) {
            return this.divideAtTime(t && t.curve === this ? t.time : this.getTimeAt(t))
        }, divideAtTime: function (t, e) {
            var n = 1e-8, i = 1 - n, r = null;
            if (t >= n && t <= i) {
                var s = T.subdivide(this.getValues(), t), a = s[0], o = s[1], h = e || this.hasHandles(),
                    u = this._segment1, l = this._segment2, f = this._path;
                h && (u._handleOut._set(a[2] - a[0], a[3] - a[1]), l._handleIn._set(o[4] - o[6], o[5] - o[7]));
                var d = a[6], _ = a[7],
                    g = new A(new c(d, _), h && new c(a[4] - d, a[5] - _), h && new c(o[2] - d, o[3] - _));
                f ? (f.insert(u._index + 1, g), r = this.getNext()) : (this._segment2 = g, this._changed(), r = new T(g, l))
            }
            return r
        }, splitAt: function (t) {
            var e = this._path;
            return e ? e.splitAt(t) : null
        }, splitAtTime: function (t) {
            return this.splitAt(this.getLocationAtTime(t))
        }, divide: function (t, n) {
            return this.divideAtTime(t === e ? .5 : n ? t : this.getTimeAt(t))
        }, split: function (t, n) {
            return this.splitAtTime(t === e ? .5 : n ? t : this.getTimeAt(t))
        }, reversed: function () {
            return new T(this._segment2.reversed(), this._segment1.reversed())
        }, clearHandles: function () {
            this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0)
        }, statics: {
            getValues: function (t, e, n, i) {
                var r = t._point, s = t._handleOut, a = e._handleIn, o = e._point, h = r.x, u = r.y, l = o.x, c = o.y,
                    f = i ? [h, u, h, u, l, c, l, c] : [h, u, h + s._x, u + s._y, l + a._x, c + a._y, l, c];
                return n && n._transformCoordinates(f, f, 4), f
            }, subdivide: function (t, n) {
                var i = t[0], r = t[1], s = t[2], a = t[3], o = t[4], h = t[5], u = t[6], l = t[7];
                n === e && (n = .5);
                var c = 1 - n, f = c * i + n * s, d = c * r + n * a, _ = c * s + n * o, g = c * a + n * h,
                    v = c * o + n * u, p = c * h + n * l, m = c * f + n * _, y = c * d + n * g, w = c * _ + n * v,
                    x = c * g + n * p, b = c * m + n * w, C = c * y + n * x;
                return [[i, r, f, d, m, y, b, C], [b, C, w, x, v, p, u, l]]
            }, getMonoCurves: function (t, e) {
                var n = [], i = e ? 0 : 1, r = t[i + 0], s = t[i + 2], a = t[i + 4], o = t[i + 6];
                if (r >= s == s >= a && s >= a == a >= o || T.isStraight(t)) n.push(t); else {
                    var h = 3 * (s - a) - r + o, l = 2 * (r + a) - 4 * s, c = s - r, f = 1e-8, d = 1 - f, _ = [],
                        g = u.solveQuadratic(h, l, c, _, f, d);
                    if (g) {
                        _.sort();
                        var v = _[0], p = T.subdivide(t, v);
                        n.push(p[0]), g > 1 && (v = (_[1] - v) / (1 - v), p = T.subdivide(p[1], v), n.push(p[0])), n.push(p[1])
                    } else n.push(t)
                }
                return n
            }, solveCubic: function (t, e, n, i, r, s) {
                var a = t[e], o = t[e + 2], h = t[e + 4], l = t[e + 6], c = 0;
                if (!(a < n && l < n && o < n && h < n || a > n && l > n && o > n && h > n)) {
                    var f = 3 * (o - a), d = 3 * (h - o) - f, _ = l - a - f - d;
                    c = u.solveCubic(_, d, f, a - n, i, r, s)
                }
                return c
            }, getTimeOf: function (t, e) {
                var n = new c(t[0], t[1]), i = new c(t[6], t[7]), r = 1e-12, s = 1e-7,
                    a = e.isClose(n, r) ? 0 : e.isClose(i, r) ? 1 : null;
                if (null === a) for (var o = [e.x, e.y], h = [], u = 0; u < 2; u++) for (var l = T.solveCubic(t, u, o[u], h, 0, 1), f = 0; f < l; f++) {
                    var d = h[f];
                    if (e.isClose(T.getPoint(t, d), s)) return d
                }
                return e.isClose(n, s) ? 0 : e.isClose(i, s) ? 1 : null
            }, getNearestTime: function (t, e) {
                function n(n) {
                    if (n >= 0 && n <= 1) {
                        var i = e.getDistance(T.getPoint(t, n), !0);
                        if (i < d) return d = i, _ = n, !0
                    }
                }

                if (T.isStraight(t)) {
                    var i = t[0], r = t[1], s = t[6], a = t[7], o = s - i, h = a - r, u = o * o + h * h;
                    if (0 === u) return 0;
                    var l = ((e.x - i) * o + (e.y - r) * h) / u;
                    return l < 1e-12 ? 0 : l > .999999999999 ? 1 : T.getTimeOf(t, new c(i + l * o, r + l * h))
                }
                for (var f = 100, d = 1 / 0, _ = 0, g = 0; g <= f; g++) n(g / f);
                for (var v = 1 / (2 * f); v > 1e-8;) n(_ - v) || n(_ + v) || (v /= 2);
                return _
            }, getPart: function (t, e, n) {
                var i = e > n;
                if (i) {
                    var r = e;
                    e = n, n = r
                }
                return e > 0 && (t = T.subdivide(t, e)[1]), n < 1 && (t = T.subdivide(t, (n - e) / (1 - e))[0]), i ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
            }, isFlatEnough: function (t, e) {
                var n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], h = t[6], u = t[7],
                    l = 3 * r - 2 * n - h, c = 3 * s - 2 * i - u, f = 3 * a - 2 * h - n, d = 3 * o - 2 * u - i;
                return Math.max(l * l, f * f) + Math.max(c * c, d * d) <= 16 * e * e
            }, getArea: function (t) {
                var e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], h = t[7];
                return 3 * ((h - n) * (i + s) - (o - e) * (r + a) + r * (e - s) - i * (n - a) + h * (s + e / 3) - o * (a + n / 3)) / 20
            }, getBounds: function (t) {
                for (var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0; r < 2; r++) T._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, n, i);
                return new g(e[0], e[1], n[0] - e[0], n[1] - e[1])
            }, _addBounds: function (t, e, n, i, r, s, a, o, h) {
                function l(t, e) {
                    var n = t - e, i = t + e;
                    n < a[r] && (a[r] = n), i > o[r] && (o[r] = i)
                }

                s /= 2;
                var c = a[r] - s, f = o[r] + s;
                if (t < c || e < c || n < c || i < c || t > f || e > f || n > f || i > f) if (e < t != e < i && n < t != n < i) l(t, s), l(i, s); else {
                    var d = 3 * (e - n) - t + i, _ = 2 * (t + n) - 4 * e, g = e - t, v = u.solveQuadratic(d, _, g, h),
                        p = 1e-8, m = 1 - p;
                    l(i, 0);
                    for (var y = 0; y < v; y++) {
                        var w = h[y], x = 1 - w;
                        p <= w && w <= m && l(x * x * x * t + 3 * x * x * w * e + 3 * x * w * w * n + w * w * w * i, s)
                    }
                }
            }
        }
    }, r.each(["getBounds", "getStrokeBounds", "getHandleBounds"], function (t) {
        this[t] = function () {
            this._bounds || (this._bounds = {});
            var e = this._bounds[t];
            return e || (e = this._bounds[t] = L[t]([this._segment1, this._segment2], !1, this._path)), e.clone()
        }
    }, {}), r.each({
        isStraight: function (t, e, n, i) {
            if (e.isZero() && n.isZero()) return !0;
            var r = i.subtract(t);
            if (r.isZero()) return !1;
            if (r.isCollinear(e) && r.isCollinear(n)) {
                var s = new m(t, i), a = 1e-7;
                if (s.getDistance(t.add(e)) < a && s.getDistance(i.add(n)) < a) {
                    var o = r.dot(r), h = r.dot(e) / o, u = r.dot(n) / o;
                    return h >= 0 && h <= 1 && u <= 0 && u >= -1
                }
            }
            return !1
        }, isLinear: function (t, e, n, i) {
            var r = i.subtract(t).divide(3);
            return e.equals(r) && n.negate().equals(r)
        }
    }, function (t, e) {
        this[e] = function (e) {
            var n = this._segment1, i = this._segment2;
            return t(n._point, n._handleOut, i._handleIn, i._point, e)
        }, this.statics[e] = function (e, n) {
            var i = e[0], r = e[1], s = e[6], a = e[7];
            return t(new c(i, r), new c(e[2] - i, e[3] - r), new c(e[4] - s, e[5] - a), new c(s, a), n)
        }
    }, {
        statics: {}, hasHandles: function () {
            return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero()
        }, hasLength: function (t) {
            return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (t || 0)
        }, isCollinear: function (t) {
            return t && this.isStraight() && t.isStraight() && this.getLine().isCollinear(t.getLine())
        }, isHorizontal: function () {
            return this.isStraight() && Math.abs(this.getTangentAtTime(.5).y) < 1e-8
        }, isVertical: function () {
            return this.isStraight() && Math.abs(this.getTangentAtTime(.5).x) < 1e-8
        }
    }), {
        beans: !1, getLocationAt: function (t, e) {
            return this.getLocationAtTime(e ? t : this.getTimeAt(t))
        }, getLocationAtTime: function (t) {
            return null != t && t >= 0 && t <= 1 ? new z(this, t) : null
        }, getTimeAt: function (t, e) {
            return T.getTimeAt(this.getValues(), t, e)
        }, getParameterAt: "#getTimeAt", getOffsetAtTime: function (t) {
            return this.getPartLength(0, t)
        }, getLocationOf: function () {
            return this.getLocationAtTime(this.getTimeOf(c.read(arguments)))
        }, getOffsetOf: function () {
            var t = this.getLocationOf.apply(this, arguments);
            return t ? t.getOffset() : null
        }, getTimeOf: function () {
            return T.getTimeOf(this.getValues(), c.read(arguments))
        }, getParameterOf: "#getTimeOf", getNearestLocation: function () {
            var t = c.read(arguments), e = this.getValues(), n = T.getNearestTime(e, t), i = T.getPoint(e, n);
            return new z(this, n, i, null, t.getDistance(i))
        }, getNearestPoint: function () {
            var t = this.getNearestLocation.apply(this, arguments);
            return t ? t.getPoint() : t
        }
    }, new function () {
        var t = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"];
        return r.each(t, function (t) {
            this[t + "At"] = function (e, n) {
                var i = this.getValues();
                return T[t](i, n ? e : T.getTimeAt(i, e))
            }, this[t + "AtTime"] = function (e) {
                return T[t](this.getValues(), e)
            }
        }, {statics: {_evaluateMethods: t}})
    }, new function () {
        function t(t) {
            var e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], h = t[7],
                u = 9 * (i - s) + 3 * (o - e), l = 6 * (e + s) - 12 * i, c = 3 * (i - e), f = 9 * (r - a) + 3 * (h - n),
                d = 6 * (n + a) - 12 * r, _ = 3 * (r - n);
            return function (t) {
                var e = (u * t + l) * t + c, n = (f * t + d) * t + _;
                return Math.sqrt(e * e + n * n)
            }
        }

        function n(t, e) {
            return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t))))
        }

        function i(t, e, n, i) {
            if (null == e || e < 0 || e > 1) return null;
            var r = t[0], s = t[1], a = t[2], o = t[3], h = t[4], l = t[5], f = t[6], d = t[7], _ = u.isZero;
            _(a - r) && _(o - s) && (a = r, o = s), _(h - f) && _(l - d) && (h = f, l = d);
            var g, v, p = 3 * (a - r), m = 3 * (h - a) - p, y = f - r - p - m, w = 3 * (o - s), x = 3 * (l - o) - w,
                b = d - s - w - x;
            if (0 === n) g = 0 === e ? r : 1 === e ? f : ((y * e + m) * e + p) * e + r, v = 0 === e ? s : 1 === e ? d : ((b * e + x) * e + w) * e + s; else {
                var C = 1e-8, S = 1 - C;
                if (e < C ? (g = p, v = w) : e > S ? (g = 3 * (f - h), v = 3 * (d - l)) : (g = (3 * y * e + 2 * m) * e + p, v = (3 * b * e + 2 * x) * e + w), i) {
                    0 === g && 0 === v && (e < C || e > S) && (g = h - a, v = l - o);
                    var k = Math.sqrt(g * g + v * v);
                    k && (g /= k, v /= k)
                }
                if (3 === n) {
                    var h = 6 * y * e + 2 * m, l = 6 * b * e + 2 * x, I = Math.pow(g * g + v * v, 1.5);
                    g = 0 !== I ? (g * l - v * h) / I : 0, v = 0
                }
            }
            return 2 === n ? new c(v, (-g)) : new c(g, v)
        }

        return {
            statics: {
                classify: function (t) {
                    function n(t, n, i) {
                        var r = n !== e, s = r && n > 0 && n < 1, a = r && i > 0 && i < 1;
                        return !r || (s || a) && ("loop" !== t || s && a) || (t = "arch", s = a = !1), {
                            type: t,
                            roots: s || a ? s && a ? n < i ? [n, i] : [i, n] : [s ? n : i] : null
                        }
                    }

                    var i = t[0], r = t[1], s = t[2], a = t[3], o = t[4], h = t[5], l = t[6], c = t[7],
                        f = i * (c - h) + r * (o - l) + l * h - c * o, d = s * (r - c) + a * (l - i) + i * c - r * l,
                        _ = o * (a - r) + h * (i - s) + s * r - a * i, g = 3 * _, v = g - d, p = v - d + f,
                        m = Math.sqrt(p * p + v * v + g * g), y = 0 !== m ? 1 / m : 0, w = u.isZero, x = "serpentine";
                    if (p *= y, v *= y, g *= y, w(p)) return w(v) ? n(w(g) ? "line" : "quadratic") : n(x, g / (3 * v));
                    var b = 3 * v * v - 4 * p * g;
                    if (w(b)) return n("cusp", v / (2 * p));
                    var C = b > 0 ? Math.sqrt(b / 3) : Math.sqrt(-b), S = 2 * p;
                    return n(b > 0 ? x : "loop", (v + C) / S, (v - C) / S)
                }, getLength: function (i, r, s, a) {
                    if (r === e && (r = 0), s === e && (s = 1), T.isStraight(i)) {
                        var o = i;
                        s < 1 && (o = T.subdivide(o, s)[0], r /= s), r > 0 && (o = T.subdivide(o, r)[1]);
                        var h = o[6] - o[0], l = o[7] - o[1];
                        return Math.sqrt(h * h + l * l)
                    }
                    return u.integrate(a || t(i), r, s, n(r, s))
                }, getTimeAt: function (i, r, s) {
                    function a(t) {
                        return p += u.integrate(d, s, t, n(s, t)), s = t, p - r
                    }

                    if (s === e && (s = r < 0 ? 1 : 0), 0 === r) return s;
                    var o = Math.abs, h = 1e-12, l = r > 0, c = l ? s : 0, f = l ? 1 : s, d = t(i),
                        _ = T.getLength(i, c, f, d), g = o(r) - _;
                    if (o(g) < h) return l ? f : c;
                    if (g > h) return null;
                    var v = r / _, p = 0;
                    return u.findRoot(a, d, s + v, c, f, 32, 1e-12)
                }, getPoint: function (t, e) {
                    return i(t, e, 0, !1)
                }, getTangent: function (t, e) {
                    return i(t, e, 1, !0)
                }, getWeightedTangent: function (t, e) {
                    return i(t, e, 1, !1)
                }, getNormal: function (t, e) {
                    return i(t, e, 2, !0)
                }, getWeightedNormal: function (t, e) {
                    return i(t, e, 2, !1)
                }, getCurvature: function (t, e) {
                    return i(t, e, 3, !1).x
                }, getPeaks: function (t) {
                    var e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], h = t[7],
                        l = -e + 3 * i - 3 * s + o, c = 3 * e - 6 * i + 3 * s, f = -3 * e + 3 * i,
                        d = -n + 3 * r - 3 * a + h, _ = 3 * n - 6 * r + 3 * a, g = -3 * n + 3 * r, v = 1e-8, p = 1 - v,
                        m = [];
                    return u.solveCubic(9 * (l * l + d * d), 9 * (l * c + _ * d), 2 * (c * c + _ * _) + 3 * (f * l + g * d), f * c + _ * g, m, v, p), m.sort()
                }
            }
        }
    }, new function () {
        function t(t, e, n, i, r, s, a) {
            var o = !a && n.getPrevious() === r, h = !a && n !== r && n.getNext() === r, u = 1e-8, l = 1 - u;
            if (null !== i && i >= (o ? u : 0) && i <= (h ? l : 1) && null !== s && s >= (h ? u : 0) && s <= (o ? l : 1)) {
                var c = new z(n, i, null, a), f = new z(r, s, null, a);
                c._intersection = f, f._intersection = c, e && !e(c) || z.insert(t, c, !0)
            }
        }

        function e(r, s, a, o, h, u, l, c, f, d, _, g, v) {
            if (++f >= 4096 || ++c >= 40) return f;
            var p, y, w = 1e-9, x = s[0], b = s[1], C = s[6], S = s[7], k = m.getSignedDistance,
                I = k(x, b, C, S, s[2], s[3]), P = k(x, b, C, S, s[4], s[5]), A = I * P > 0 ? .75 : 4 / 9,
                M = A * Math.min(0, I, P), z = A * Math.max(0, I, P), O = k(x, b, C, S, r[0], r[1]),
                L = k(x, b, C, S, r[2], r[3]), E = k(x, b, C, S, r[4], r[5]), N = k(x, b, C, S, r[6], r[7]),
                B = n(O, L, E, N), j = B[0], F = B[1];
            if (0 === I && 0 === P && 0 === O && 0 === L && 0 === E && 0 === N || null == (p = i(j, F, M, z)) || null == (y = i(j.reverse(), F.reverse(), M, z))) return f;
            var D = d + (_ - d) * p, R = d + (_ - d) * y;
            if (Math.max(v - g, R - D) < w) {
                var q = (D + R) / 2, V = (g + v) / 2;
                t(h, u, l ? o : a, l ? V : q, l ? a : o, l ? q : V)
            } else if (r = T.getPart(r, p, y), y - p > .8) if (R - D > v - g) {
                var U = T.subdivide(r, .5), q = (D + R) / 2;
                f = e(s, U[0], o, a, h, u, !l, c, f, g, v, D, q), f = e(s, U[1], o, a, h, u, !l, c, f, g, v, q, R)
            } else {
                var U = T.subdivide(s, .5), V = (g + v) / 2;
                f = e(U[0], r, o, a, h, u, !l, c, f, g, V, D, R), f = e(U[1], r, o, a, h, u, !l, c, f, V, v, D, R)
            } else f = v - g >= w ? e(s, r, o, a, h, u, !l, c, f, g, v, D, R) : e(r, s, a, o, h, u, l, c, f, D, R, g, v);
            return f
        }

        function n(t, e, n, i) {
            var r, s = [0, t], a = [1 / 3, e], o = [2 / 3, n], h = [1, i], u = e - (2 * t + i) / 3,
                l = n - (t + 2 * i) / 3;
            if (u * l < 0) r = [[s, a, h], [s, o, h]]; else {
                var c = u / l;
                r = [c >= 2 ? [s, a, h] : c <= .5 ? [s, o, h] : [s, a, o, h], [s, h]]
            }
            return (u || l) < 0 ? r.reverse() : r
        }

        function i(t, e, n, i) {
            return t[0][1] < n ? r(t, !0, n) : e[0][1] > i ? r(e, !1, i) : t[0][0]
        }

        function r(t, e, n) {
            for (var i = t[0][0], r = t[0][1], s = 1, a = t.length; s < a; s++) {
                var o = t[s][0], h = t[s][1];
                if (e ? h >= n : h <= n) return h === n ? o : i + (n - r) * (o - i) / (h - r);
                i = o, r = h
            }
            return null
        }

        function s(t, e, n, i, r) {
            var s = u.isZero;
            if (s(i) && s(r)) {
                var a = T.getTimeOf(t, new c(e, n));
                return null === a ? [] : [a]
            }
            for (var o = Math.atan2(-r, i), h = Math.sin(o), l = Math.cos(o), f = [], d = [], _ = 0; _ < 8; _ += 2) {
                var g = t[_] - e, v = t[_ + 1] - n;
                f.push(g * l - v * h, g * h + v * l)
            }
            return T.solveCubic(f, 1, 0, d, 0, 1), d
        }

        function a(e, n, i, r, a, o, h) {
            for (var u = n[0], l = n[1], c = n[6], f = n[7], d = s(e, u, l, c - u, f - l), _ = 0, g = d.length; _ < g; _++) {
                var v = d[_], p = T.getPoint(e, v), m = T.getTimeOf(n, p);
                null !== m && t(a, o, h ? r : i, h ? m : v, h ? i : r, h ? v : m)
            }
        }

        function o(e, n, i, r, s, a) {
            var o = m.intersect(e[0], e[1], e[6], e[7], n[0], n[1], n[6], n[7]);
            o && t(s, a, i, T.getTimeOf(e, o), r, T.getTimeOf(n, o))
        }

        function h(n, i, r, s, h, u) {
            var l = 1e-12, f = Math.min, _ = Math.max;
            if (_(n[0], n[2], n[4], n[6]) + l > f(i[0], i[2], i[4], i[6]) && f(n[0], n[2], n[4], n[6]) - l < _(i[0], i[2], i[4], i[6]) && _(n[1], n[3], n[5], n[7]) + l > f(i[1], i[3], i[5], i[7]) && f(n[1], n[3], n[5], n[7]) - l < _(i[1], i[3], i[5], i[7])) {
                var g = d(n, i);
                if (g) for (var v = 0; v < 2; v++) {
                    var p = g[v];
                    t(h, u, r, p[0], s, p[1], !0)
                } else {
                    var m = T.isStraight(n), y = T.isStraight(i), w = m && y, x = m && !y, b = h.length;
                    if ((w ? o : m || y ? a : e)(x ? i : n, x ? n : i, x ? s : r, x ? r : s, h, u, x, 0, 0, 0, 1, 0, 1), !w || h.length === b) for (var v = 0; v < 4; v++) {
                        var C = v >> 1, S = 1 & v, k = 6 * C, I = 6 * S, P = new c(n[k], n[k + 1]),
                            A = new c(i[I], i[I + 1]);
                        P.isClose(A, l) && t(h, u, r, C, s, S)
                    }
                }
            }
            return h
        }

        function l(e, n, i, r) {
            var s = T.classify(e);
            if ("loop" === s.type) {
                var a = s.roots;
                t(i, r, n, a[0], n, a[1])
            }
            return i
        }

        function f(t, e, n, i, r, s) {
            var a = !e;
            a && (e = t);
            for (var o, u, c = t.length, f = e.length, d = [], _ = [], g = 0; g < f; g++) d[g] = e[g].getValues(r);
            for (var g = 0; g < c; g++) {
                var v = t[g], p = a ? d[g] : v.getValues(i), m = v.getPath();
                m !== u && (u = m, o = [], _.push(o)), a && l(p, v, o, n);
                for (var y = a ? g + 1 : 0; y < f; y++) {
                    if (s && o.length) return o;
                    h(p, d[y], v, e[y], o, n)
                }
            }
            o = [];
            for (var g = 0, w = _.length; g < w; g++) o.push.apply(o, _[g]);
            return o
        }

        function d(t, e) {
            function n(t) {
                var e = t[6] - t[0], n = t[7] - t[1];
                return e * e + n * n
            }

            var i = Math.abs, r = m.getDistance, s = 1e-8, a = 1e-7, o = T.isStraight(t), h = T.isStraight(e),
                u = o && h, l = n(t) < n(e), f = l ? e : t, d = l ? t : e, _ = f[0], g = f[1], v = f[6] - _,
                p = f[7] - g;
            if (r(_, g, v, p, d[0], d[1], !0) < a && r(_, g, v, p, d[6], d[7], !0) < a) !u && r(_, g, v, p, f[2], f[3], !0) < a && r(_, g, v, p, f[4], f[5], !0) < a && r(_, g, v, p, d[2], d[3], !0) < a && r(_, g, v, p, d[4], d[5], !0) < a && (o = h = u = !0); else if (u) return null;
            if (o ^ h) return null;
            for (var y = [t, e], w = [], x = 0; x < 4 && w.length < 2; x++) {
                var b = 1 & x, C = 1 ^ b, S = x >> 1, k = T.getTimeOf(y[b], new c(y[C][S ? 6 : 0], y[C][S ? 7 : 1]));
                if (null != k) {
                    var I = b ? [S, k] : [k, S];
                    (!w.length || i(I[0] - w[0][0]) > s && i(I[1] - w[0][1]) > s) && w.push(I)
                }
                if (x > 2 && !w.length) break
            }
            if (2 !== w.length) w = null; else if (!u) {
                var P = T.getPart(t, w[0][0], w[1][0]), A = T.getPart(e, w[0][1], w[1][1]);
                (i(A[2] - P[2]) > a || i(A[3] - P[3]) > a || i(A[4] - P[4]) > a || i(A[5] - P[5]) > a) && (w = null)
            }
            return w
        }

        return {
            getIntersections: function (t) {
                var e = this.getValues(), n = t && t !== this && t.getValues();
                return n ? h(e, n, this, t, []) : l(e, this, [])
            }, statics: {getOverlaps: d, getIntersections: f, getCurveLineIntersections: s}
        }
    }), z = r.extend({
        _class: "CurveLocation", initialize: function (t, e, n, i, r) {
            if (e >= .99999999) {
                var s = t.getNext();
                s && (e = 0, t = s)
            }
            this._setCurve(t), this._time = e, this._point = n || t.getPointAtTime(e), this._overlap = i, this._distance = r, this._intersection = this._next = this._previous = null
        }, _setCurve: function (t) {
            var e = t._path;
            this._path = e, this._version = e ? e._version : 0, this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2
        }, _setSegment: function (t) {
            this._setCurve(t.getCurve()), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone()
        }, getSegment: function () {
            var t = this._segment;
            if (!t) {
                var e = this.getCurve(), n = this.getTime();
                0 === n ? t = e._segment1 : 1 === n ? t = e._segment2 : null != n && (t = e.getPartLength(0, n) < e.getPartLength(n, 1) ? e._segment1 : e._segment2), this._segment = t
            }
            return t
        }, getCurve: function () {
            function t(t) {
                var e = t && t.getCurve();
                if (e && null != (n._time = e.getTimeOf(n._point))) return n._setCurve(e), e
            }

            var e = this._path, n = this;
            return e && e._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null), this._curve || t(this._segment) || t(this._segment1) || t(this._segment2.getPrevious())
        }, getPath: function () {
            var t = this.getCurve();
            return t && t._path
        }, getIndex: function () {
            var t = this.getCurve();
            return t && t.getIndex()
        }, getTime: function () {
            var t = this.getCurve(), e = this._time;
            return t && null == e ? this._time = t.getTimeOf(this._point) : e
        }, getParameter: "#getTime", getPoint: function () {
            return this._point
        }, getOffset: function () {
            var t = this._offset;
            if (null == t) {
                t = 0;
                var e = this.getPath(), n = this.getIndex();
                if (e && null != n) for (var i = e.getCurves(), r = 0; r < n; r++) t += i[r].getLength();
                this._offset = t += this.getCurveOffset()
            }
            return t
        }, getCurveOffset: function () {
            var t = this._curveOffset;
            if (null == t) {
                var e = this.getCurve(), n = this.getTime();
                this._curveOffset = t = null != n && e && e.getPartLength(0, n)
            }
            return t
        }, getIntersection: function () {
            return this._intersection
        }, getDistance: function () {
            return this._distance
        }, divide: function () {
            var t = this.getCurve(), e = t && t.divideAtTime(this.getTime());
            return e && this._setSegment(e._segment1), e
        }, split: function () {
            var t = this.getCurve(), e = t._path, n = t && t.splitAtTime(this.getTime());
            return n && this._setSegment(e.getLastSegment()), n
        }, equals: function (t, e) {
            var n = this === t;
            if (!n && t instanceof z) {
                var i = this.getCurve(), r = t.getCurve(), s = i._path, a = r._path;
                if (s === a) {
                    var o = Math.abs, h = 1e-7, u = o(this.getOffset() - t.getOffset()), l = !e && this._intersection,
                        c = !e && t._intersection;
                    n = (u < h || s && o(s.getLength() - u) < h) && (!l && !c || l && c && l.equals(c, !0))
                }
            }
            return n
        }, toString: function () {
            var t = [], e = this.getPoint(), n = h.instance;
            e && t.push("point: " + e);
            var i = this.getIndex();
            null != i && t.push("index: " + i);
            var r = this.getTime();
            return null != r && t.push("time: " + n.number(r)), null != this._distance && t.push("distance: " + n.number(this._distance)), "{ " + t.join(", ") + " }"
        }, isTouching: function () {
            var t = this._intersection;
            if (t && this.getTangent().isCollinear(t.getTangent())) {
                var e = this.getCurve(), n = t.getCurve();
                return !(e.isStraight() && n.isStraight() && e.getLine().intersect(n.getLine()))
            }
            return !1
        }, isCrossing: function () {
            function t(t, e) {
                var n = t.getValues(), i = T.classify(n).roots || T.getPeaks(n), r = i.length,
                    s = e && r > 1 ? i[r - 1] : r > 0 ? i[0] : .5;
                d.push(T.getLength(n, e ? s : 0, e ? 1 : s) / 2)
            }

            function e(t, e, n) {
                return e < n ? t > e && t < n : t > e || t < n
            }

            var n = this._intersection;
            if (!n) return !1;
            var i = this.getTime(), r = n.getTime(), s = 1e-8, a = 1 - s, o = i >= s && i <= a, h = r >= s && r <= a;
            if (o && h) return !this.isTouching();
            var u = this.getCurve(), l = i < s ? u.getPrevious() : u, c = n.getCurve(), f = r < s ? c.getPrevious() : c;
            if (i > a && (u = u.getNext()), r > a && (c = c.getNext()), !(l && u && f && c)) return !1;
            var d = [];
            o || (t(l, !0), t(u, !1)), h || (t(f, !0), t(c, !1));
            var _ = this.getPoint(), g = Math.min.apply(Math, d),
                v = o ? u.getTangentAtTime(i) : u.getPointAt(g).subtract(_),
                p = o ? v.negate() : l.getPointAt(-g).subtract(_),
                m = h ? c.getTangentAtTime(r) : c.getPointAt(g).subtract(_),
                y = h ? m.negate() : f.getPointAt(-g).subtract(_), w = p.getAngle(), x = v.getAngle(), b = y.getAngle(),
                C = m.getAngle();
            return !!(o ? e(w, b, C) ^ e(x, b, C) && e(w, C, b) ^ e(x, C, b) : e(b, w, x) ^ e(C, w, x) && e(b, x, w) ^ e(C, x, w))
        }, hasOverlap: function () {
            return !!this._overlap
        }
    }, r.each(T._evaluateMethods, function (t) {
        var e = t + "At";
        this[t] = function () {
            var t = this.getCurve(), n = this.getTime();
            return null != n && t && t[e](n, !0)
        }
    }, {preserve: !0}), new function () {
        function t(t, e, n) {
            function i(n, i) {
                for (var s = n + i; s >= -1 && s <= r; s += i) {
                    var a = t[(s % r + r) % r];
                    if (!e.getPoint().isClose(a.getPoint(), 1e-7)) break;
                    if (e.equals(a)) return a
                }
                return null
            }

            for (var r = t.length, s = 0, a = r - 1; s <= a;) {
                var o, h = s + a >>> 1, u = t[h];
                if (n && (o = e.equals(u) ? u : i(h, -1) || i(h, 1))) return e._overlap && (o._overlap = o._intersection._overlap = !0), o;
                var l = e.getPath(), c = u.getPath(),
                    f = l !== c ? l._id - c._id : e.getIndex() + e.getTime() - (u.getIndex() + u.getTime());
                f < 0 ? a = h - 1 : s = h + 1
            }
            return t.splice(s, 0, e), e
        }

        return {
            statics: {
                insert: t, expand: function (e) {
                    for (var n = e.slice(), i = e.length - 1; i >= 0; i--) t(n, e[i]._intersection, !1);
                    return n
                }
            }
        }
    }), O = w.extend({
        _class: "PathItem", _selectBounds: !1, _canScaleStroke: !0, beans: !0, initialize: function () {
        }, statics: {
            create: function (t) {
                var e, n, i;
                if (r.isPlainObject(t) ? (n = t.segments, e = t.pathData) : Array.isArray(t) ? n = t : "string" == typeof t && (e = t), n) {
                    var s = n[0];
                    i = s && Array.isArray(s[0])
                } else e && (i = (e.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(e));
                var a = i ? E : L;
                return new a(t)
            }
        }, _asPathItem: function () {
            return this
        }, isClockwise: function () {
            return this.getArea() >= 0
        }, setClockwise: function (t) {
            this.isClockwise() != (t = !!t) && this.reverse()
        }, setPathData: function (t) {
            function e(t, e) {
                var n = +i[t];
                return o && (n += h[e]), n
            }

            function n(t) {
                return new c(e(t, "x"), e(t + 1, "y"))
            }

            var i, r, s, a = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi), o = !1, h = new c, u = new c;
            this.clear();
            for (var l = 0, f = a && a.length; l < f; l++) {
                var _ = a[l], g = _[0], v = g.toLowerCase();
                i = _.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
                var p = i && i.length;
                switch (o = g === v, "z" !== r || /[mz]/.test(v) || this.moveTo(h), v) {
                    case"m":
                    case"l":
                        for (var m = "m" === v, y = 0; y < p; y += 2) this[m ? "moveTo" : "lineTo"](h = n(y)), m && (u = h, m = !1);
                        s = h;
                        break;
                    case"h":
                    case"v":
                        var w = "h" === v ? "x" : "y";
                        h = h.clone();
                        for (var y = 0; y < p; y++) h[w] = e(y, w), this.lineTo(h);
                        s = h;
                        break;
                    case"c":
                        for (var y = 0; y < p; y += 6) this.cubicCurveTo(n(y), s = n(y + 2), h = n(y + 4));
                        break;
                    case"s":
                        for (var y = 0; y < p; y += 4) this.cubicCurveTo(/[cs]/.test(r) ? h.multiply(2).subtract(s) : h, s = n(y), h = n(y + 2)), r = v;
                        break;
                    case"q":
                        for (var y = 0; y < p; y += 4) this.quadraticCurveTo(s = n(y), h = n(y + 2));
                        break;
                    case"t":
                        for (var y = 0; y < p; y += 2) this.quadraticCurveTo(s = /[qt]/.test(r) ? h.multiply(2).subtract(s) : h, h = n(y)), r = v;
                        break;
                    case"a":
                        for (var y = 0; y < p; y += 7) this.arcTo(h = n(y + 5), new d((+i[y]), (+i[y + 1])), +i[y + 2], +i[y + 4], +i[y + 3]);
                        break;
                    case"z":
                        this.closePath(1e-12), h = u
                }
                r = v
            }
        }, _canComposite: function () {
            return !(this.hasFill() && this.hasStroke())
        }, _contains: function (t) {
            var e = t.isInside(this.getBounds({internal: !0, handle: !0})) ? this._getWinding(t) : {};
            return e.onPath || !!("evenodd" === this.getFillRule() ? 1 & e.windingL || 1 & e.windingR : e.winding)
        }, getIntersections: function (t, e, n, i) {
            var r = this === t || !t, s = this._matrix._orNullIfIdentity(),
                a = r ? s : (n || t._matrix)._orNullIfIdentity();
            return r || this.getBounds(s).intersects(t.getBounds(a), 1e-12) ? T.getIntersections(this.getCurves(), !r && t.getCurves(), e, s, a, i) : []
        }, getCrossings: function (t) {
            return this.getIntersections(t, function (t) {
                return t.hasOverlap() || t.isCrossing()
            })
        }, getNearestLocation: function () {
            for (var t = c.read(arguments), e = this.getCurves(), n = 1 / 0, i = null, r = 0, s = e.length; r < s; r++) {
                var a = e[r].getNearestLocation(t);
                a._distance < n && (n = a._distance, i = a)
            }
            return i
        }, getNearestPoint: function () {
            var t = this.getNearestLocation.apply(this, arguments);
            return t ? t.getPoint() : t
        }, interpolate: function (t, e, n) {
            var i = !this._children, r = i ? "_segments" : "_children", s = t[r], a = e[r], o = this[r];
            if (!s || !a || s.length !== a.length) throw new Error("Invalid operands in interpolate() call: " + t + ", " + e);
            var h = o.length, u = a.length;
            if (h < u) for (var l = i ? A : L, c = h; c < u; c++) this.add(new l); else h > u && this[i ? "removeSegments" : "removeChildren"](u, h);
            for (var c = 0; c < u; c++) o[c].interpolate(s[c], a[c], n);
            i && (this.setClosed(t._closed), this._changed(9))
        }, compare: function (t) {
            var e = !1;
            if (t) {
                var n = this._children || [this], i = t._children ? t._children.slice() : [t], r = n.length,
                    s = i.length, a = [], o = 0;
                e = !0;
                for (var h = r - 1; h >= 0 && e; h--) {
                    var u = n[h];
                    e = !1;
                    for (var l = s - 1; l >= 0 && !e; l--) u.compare(i[l]) && (a[l] || (a[l] = !0, o++), e = !0)
                }
                e = e && o === s
            }
            return e
        }
    }), L = O.extend({
        _class: "Path", _serializeFields: {segments: [], closed: !1}, initialize: function (t) {
            this._closed = !1, this._segments = [], this._version = 0;
            var n = Array.isArray(t) ? "object" == typeof t[0] ? t : arguments : !t || t.size !== e || t.x === e && t.point === e ? null : arguments;
            n && n.length > 0 ? this.setSegments(n) : (this._curves = e, this._segmentSelection = 0, n || "string" != typeof t || (this.setPathData(t), t = null)), this._initialize(!n && t)
        }, _equals: function (t) {
            return this._closed === t._closed && r.equals(this._segments, t._segments)
        }, copyContent: function (t) {
            this.setSegments(t._segments), this._closed = t._closed
        }, _changed: function vt(t) {
            if (vt.base.call(this, t), 8 & t) {
                if (this._length = this._area = e, 16 & t) this._version++; else if (this._curves) for (var n = 0, i = this._curves.length; n < i; n++) this._curves[n]._changed()
            } else 32 & t && (this._bounds = e)
        }, getStyle: function () {
            var t = this._parent;
            return (t instanceof E ? t : this)._style
        }, getSegments: function () {
            return this._segments
        }, setSegments: function (t) {
            var n = this.isFullySelected(), i = t && t.length;
            if (this._segments.length = 0, this._segmentSelection = 0, this._curves = e, i) {
                var r = t[i - 1];
                "boolean" == typeof r && (this.setClosed(r), i--), this._add(A.readList(t, 0, {}, i))
            }
            n && this.setFullySelected(!0)
        }, getFirstSegment: function () {
            return this._segments[0]
        }, getLastSegment: function () {
            return this._segments[this._segments.length - 1]
        }, getCurves: function () {
            var t = this._curves, e = this._segments;
            if (!t) {
                var n = this._countCurves();
                t = this._curves = new Array(n);
                for (var i = 0; i < n; i++) t[i] = new T(this, e[i], e[i + 1] || e[0])
            }
            return t
        }, getFirstCurve: function () {
            return this.getCurves()[0]
        }, getLastCurve: function () {
            var t = this.getCurves();
            return t[t.length - 1]
        }, isClosed: function () {
            return this._closed
        }, setClosed: function (t) {
            if (this._closed != (t = !!t)) {
                if (this._closed = t, this._curves) {
                    var e = this._curves.length = this._countCurves();
                    t && (this._curves[e - 1] = new T(this, this._segments[e - 1], this._segments[0]))
                }
                this._changed(25)
            }
        }
    }, {
        beans: !0, getPathData: function (t, e) {
            function n(e, n) {
                if (e._transformCoordinates(t, g), i = g[0], r = g[1], v) p.push("M" + _.pair(i, r)), v = !1; else if (o = g[2], u = g[3], o === i && u === r && l === s && c === a) {
                    if (!n) {
                        var h = i - s, f = r - a;
                        p.push(0 === h ? "v" + _.number(f) : 0 === f ? "h" + _.number(h) : "l" + _.pair(h, f))
                    }
                } else p.push("c" + _.pair(l - s, c - a) + " " + _.pair(o - s, u - a) + " " + _.pair(i - s, r - a));
                s = i, a = r, l = g[4], c = g[5]
            }

            var i, r, s, a, o, u, l, c, f = this._segments, d = f.length, _ = new h(e), g = new Array(6), v = !0,
                p = [];
            if (!d) return "";
            for (var m = 0; m < d; m++) n(f[m]);
            return this._closed && d > 0 && (n(f[0], !0), p.push("z")), p.join("")
        }, isEmpty: function () {
            return !this._segments.length
        }, _transformContent: function (t) {
            for (var e = this._segments, n = new Array(6), i = 0, r = e.length; i < r; i++) e[i]._transformCoordinates(t, n, !0);
            return !0
        }, _add: function (t, e) {
            for (var n = this._segments, i = this._curves, r = t.length, s = null == e, e = s ? n.length : e, a = 0; a < r; a++) {
                var o = t[a];
                o._path && (o = t[a] = o.clone()), o._path = this, o._index = e + a, o._selection && this._updateSelection(o, 0, o._selection)
            }
            if (s) n.push.apply(n, t); else {
                n.splice.apply(n, [e, 0].concat(t));
                for (var a = e + r, h = n.length; a < h; a++) n[a]._index = a
            }
            if (i) {
                var u = this._countCurves(), l = e > 0 && e + r - 1 === u ? e - 1 : e, c = l, f = Math.min(l + r, u);
                t._curves && (i.splice.apply(i, [l, 0].concat(t._curves)), c += t._curves.length);
                for (var a = c; a < f; a++) i.splice(a, 0, new T(this, null, null));
                this._adjustCurves(l, f)
            }
            return this._changed(25), t
        }, _adjustCurves: function (t, e) {
            for (var n, i = this._segments, r = this._curves, s = t; s < e; s++) n = r[s], n._path = this, n._segment1 = i[s], n._segment2 = i[s + 1] || i[0], n._changed();
            (n = r[this._closed && !t ? i.length - 1 : t - 1]) && (n._segment2 = i[t] || i[0], n._changed()), (n = r[e]) && (n._segment1 = i[e], n._changed())
        }, _countCurves: function () {
            var t = this._segments.length;
            return !this._closed && t > 0 ? t - 1 : t
        }, add: function (t) {
            return arguments.length > 1 && "number" != typeof t ? this._add(A.readList(arguments)) : this._add([A.read(arguments)])[0]
        }, insert: function (t, e) {
            return arguments.length > 2 && "number" != typeof e ? this._add(A.readList(arguments, 1), t) : this._add([A.read(arguments, 1)], t)[0]
        }, addSegment: function () {
            return this._add([A.read(arguments)])[0]
        }, insertSegment: function (t) {
            return this._add([A.read(arguments, 1)], t)[0]
        }, addSegments: function (t) {
            return this._add(A.readList(t))
        }, insertSegments: function (t, e) {
            return this._add(A.readList(e), t)
        }, removeSegment: function (t) {
            return this.removeSegments(t, t + 1)[0] || null
        }, removeSegments: function (t, e, n) {
            t = t || 0, e = r.pick(e, this._segments.length);
            var i = this._segments, s = this._curves, a = i.length, o = i.splice(t, e - t), h = o.length;
            if (!h) return o;
            for (var u = 0; u < h; u++) {
                var l = o[u];
                l._selection && this._updateSelection(l, l._selection, 0), l._index = l._path = null
            }
            for (var u = t, c = i.length; u < c; u++) i[u]._index = u;
            if (s) {
                for (var f = t > 0 && e === a + (this._closed ? 1 : 0) ? t - 1 : t, s = s.splice(f, h), u = s.length - 1; u >= 0; u--) s[u]._path = null;
                n && (o._curves = s.slice(1)), this._adjustCurves(f, f)
            }
            return this._changed(25), o
        }, clear: "#removeSegments", hasHandles: function () {
            for (var t = this._segments, e = 0, n = t.length; e < n; e++) if (t[e].hasHandles()) return !0;
            return !1
        }, clearHandles: function () {
            for (var t = this._segments, e = 0, n = t.length; e < n; e++) t[e].clearHandles()
        }, getLength: function () {
            if (null == this._length) {
                for (var t = this.getCurves(), e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength();
                this._length = e
            }
            return this._length
        }, getArea: function () {
            var t = this._area;
            if (null == t) {
                var e = this._segments, n = this._closed;
                t = 0;
                for (var i = 0, r = e.length; i < r; i++) {
                    var s = i + 1 === r;
                    t += T.getArea(T.getValues(e[i], e[s ? 0 : i + 1], null, s && !n))
                }
                this._area = t
            }
            return t
        }, isFullySelected: function () {
            var t = this._segments.length;
            return this.isSelected() && t > 0 && this._segmentSelection === 7 * t
        }, setFullySelected: function (t) {
            t && this._selectSegments(!0), this.setSelected(t)
        }, setSelection: function pt(t) {
            1 & t || this._selectSegments(!1), pt.base.call(this, t)
        }, _selectSegments: function (t) {
            var e = this._segments, n = e.length, i = t ? 7 : 0;
            this._segmentSelection = i * n;
            for (var r = 0; r < n; r++) e[r]._selection = i
        }, _updateSelection: function (t, e, n) {
            t._selection = n;
            var i = this._segmentSelection += n - e;
            i > 0 && this.setSelected(!0)
        }, divideAt: function (t) {
            var e, n = this.getLocationAt(t);
            return n && (e = n.getCurve().divideAt(n.getCurveOffset())) ? e._segment1 : null
        }, splitAt: function (t) {
            var e = this.getLocationAt(t), n = e && e.index, i = e && e.time, r = 1e-8, s = 1 - r;
            i > s && (n++, i = 0);
            var a = this.getCurves();
            if (n >= 0 && n < a.length) {
                i >= r && a[n++].divideAtTime(i);
                var o, h = this.removeSegments(n, this._segments.length, !0);
                return this._closed ? (this.setClosed(!1), o = this) : (o = new L(w.NO_INSERT), o.insertAbove(this), o.copyAttributes(this)), o._add(h, 0), this.addSegment(h[0]), o
            }
            return null
        }, split: function (t, n) {
            var i, r = n === e ? t : (i = this.getCurves()[t]) && i.getLocationAtTime(n);
            return null != r ? this.splitAt(r) : null
        }, join: function (t, e) {
            var n = e || 0;
            if (t && t !== this) {
                var i = t._segments, r = this.getLastSegment(), s = t.getLastSegment();
                if (!s) return this;
                r && r._point.isClose(s._point, n) && t.reverse();
                var a = t.getFirstSegment();
                if (r && r._point.isClose(a._point, n)) r.setHandleOut(a._handleOut), this._add(i.slice(1)); else {
                    var o = this.getFirstSegment();
                    o && o._point.isClose(a._point, n) && t.reverse(), s = t.getLastSegment(), o && o._point.isClose(s._point, n) ? (o.setHandleIn(s._handleIn), this._add(i.slice(0, i.length - 1), 0)) : this._add(i.slice())
                }
                t._closed && this._add([i[0]]), t.remove()
            }
            var h = this.getFirstSegment(), u = this.getLastSegment();
            return h !== u && h._point.isClose(u._point, n) && (h.setHandleIn(u._handleIn), u.remove(), this.setClosed(!0)), this
        }, reduce: function (t) {
            for (var e = this.getCurves(), n = t && t.simplify, i = n ? 1e-7 : 0, r = e.length - 1; r >= 0; r--) {
                var s = e[r];
                !s.hasHandles() && (!s.hasLength(i) || n && s.isCollinear(s.getNext())) && s.remove()
            }
            return this
        }, reverse: function () {
            this._segments.reverse();
            for (var t = 0, e = this._segments.length; t < e; t++) {
                var n = this._segments[t], i = n._handleIn;
                n._handleIn = n._handleOut, n._handleOut = i, n._index = t
            }
            this._curves = null, this._changed(9)
        }, flatten: function (t) {
            for (var e = new N(this, t || .25, 256, (!0)), n = e.parts, i = n.length, r = [], s = 0; s < i; s++) r.push(new A(n[s].curve.slice(0, 2)));
            !this._closed && i > 0 && r.push(new A(n[i - 1].curve.slice(6))), this.setSegments(r)
        }, simplify: function (t) {
            var e = new B(this).fit(t || 2.5);
            return e && this.setSegments(e), !!e
        }, smooth: function (t) {
            function n(t, e) {
                var n = t && t.index;
                if (null != n) {
                    var r = t.path;
                    if (r && r !== i) throw new Error(t._class + " " + n + " of " + r + " is not part of " + i);
                    e && t instanceof T && n++
                } else n = "number" == typeof t ? t : e;
                return Math.min(n < 0 && h ? n % o : n < 0 ? n + o : n, o - 1)
            }

            var i = this, r = t || {}, s = r.type || "asymmetric", a = this._segments, o = a.length, h = this._closed,
                u = h && r.from === e && r.to === e, l = n(r.from, 0), c = n(r.to, o - 1);
            if (l > c) if (h) l -= o; else {
                var f = l;
                l = c, c = f
            }
            if (/^(?:asymmetric|continuous)$/.test(s)) {
                var d = "asymmetric" === s, _ = Math.min, g = c - l + 1, v = g - 1, p = u ? _(g, 4) : 1, m = p, y = p,
                    w = [];
                if (h || (m = _(1, l), y = _(1, o - c - 1)), v += m + y, v <= 1) return;
                for (var x = 0, b = l - m; x <= v; x++, b++) w[x] = a[(b < 0 ? b + o : b) % o]._point;
                for (var C = w[0]._x + 2 * w[1]._x, S = w[0]._y + 2 * w[1]._y, k = 2, I = v - 1, P = [C], A = [S], M = [k], z = [], O = [], x = 1; x < v; x++) {
                    var L = x < I, E = L ? 1 : d ? 1 : 2, N = L ? 4 : d ? 2 : 7, B = L ? 4 : d ? 3 : 8,
                        j = L ? 2 : d ? 0 : 1, F = E / k;
                    k = M[x] = N - F, C = P[x] = B * w[x]._x + j * w[x + 1]._x - F * C, S = A[x] = B * w[x]._y + j * w[x + 1]._y - F * S
                }
                z[I] = P[I] / M[I], O[I] = A[I] / M[I];
                for (var x = v - 2; x >= 0; x--) z[x] = (P[x] - z[x + 1]) / M[x], O[x] = (A[x] - O[x + 1]) / M[x];
                z[v] = (3 * w[v]._x - z[I]) / 2, O[v] = (3 * w[v]._y - O[I]) / 2;
                for (var x = m, D = v - y, b = l; x <= D; x++, b++) {
                    var R = a[b < 0 ? b + o : b], q = R._point, V = z[x] - q._x, U = O[x] - q._y;
                    (u || x < D) && R.setHandleOut(V, U), (u || x > m) && R.setHandleIn(-V, -U)
                }
            } else for (var x = l; x <= c; x++) a[x < 0 ? x + o : x].smooth(r, !u && x === l, !u && x === c)
        }, toShape: function (t) {
            function n(t, e) {
                var n = c[t], i = n.getNext(), r = c[e], s = r.getNext();
                return n._handleOut.isZero() && i._handleIn.isZero() && r._handleOut.isZero() && s._handleIn.isZero() && i._point.subtract(n._point).isCollinear(s._point.subtract(r._point))
            }

            function i(t) {
                var e = c[t], n = e.getPrevious(), i = e.getNext();
                return n._handleOut.isZero() && e._handleIn.isZero() && e._handleOut.isZero() && i._handleIn.isZero() && e._point.subtract(n._point).isOrthogonal(i._point.subtract(e._point))
            }

            function r(t) {
                var e = c[t], n = e.getNext(), i = e._handleOut, r = n._handleIn, s = .5522847498307936;
                if (i.isOrthogonal(r)) {
                    var a = e._point, o = n._point, h = new m(a, i, (!0)).intersect(new m(o, r, (!0)), !0);
                    return h && u.isZero(i.getLength() / h.subtract(a).getLength() - s) && u.isZero(r.getLength() / h.subtract(o).getLength() - s)
                }
                return !1
            }

            function s(t, e) {
                return c[t]._point.getDistance(c[e]._point)
            }

            if (!this._closed) return null;
            var a, o, h, l, c = this._segments;
            if (!this.hasHandles() && 4 === c.length && n(0, 2) && n(1, 3) && i(1) ? (a = C.Rectangle, o = new d(s(0, 3), s(0, 1)), l = c[1]._point.add(c[2]._point).divide(2)) : 8 === c.length && r(0) && r(2) && r(4) && r(6) && n(1, 5) && n(3, 7) ? (a = C.Rectangle, o = new d(s(1, 6), s(0, 3)), h = o.subtract(new d(s(0, 7), s(1, 2))).divide(2), l = c[3]._point.add(c[4]._point).divide(2)) : 4 === c.length && r(0) && r(1) && r(2) && r(3) && (u.isZero(s(0, 2) - s(1, 3)) ? (a = C.Circle, h = s(0, 2) / 2) : (a = C.Ellipse, h = new d(s(2, 0) / 2, s(3, 1) / 2)), l = c[1]._point), a) {
                var f = this.getPosition(!0), _ = new a({center: f, size: o, radius: h, insert: !1});
                return _.copyAttributes(this, !0), _._matrix.prepend(this._matrix), _.rotate(l.subtract(f).getAngle() + 90), (t === e || t) && _.insertAbove(this), _
            }
            return null
        }, toPath: "#clone", compare: function mt(t) {
            if (!t || t instanceof E) return mt.base.call(this, t);
            var e = this.getCurves(), n = t.getCurves(), i = e.length, r = n.length;
            if (!i || !r) return i == r;
            for (var s, a, o = e[0].getValues(), h = [], u = 0, l = 0, c = 0; c < r; c++) {
                var f = n[c].getValues();
                h.push(f);
                var d = T.getOverlaps(o, f);
                if (d) {
                    s = !c && d[0][0] > 0 ? r - 1 : c, a = d[0][1];
                    break
                }
            }
            for (var _, g = Math.abs, v = 1e-8, f = h[s]; o && f;) {
                var d = T.getOverlaps(o, f);
                if (d) {
                    var p = d[0][0];
                    if (g(p - l) < v) {
                        l = d[1][0], 1 === l && (o = ++u < i ? e[u].getValues() : null, l = 0);
                        var m = d[0][1];
                        if (g(m - a) < v) {
                            if (_ || (_ = [s, m]), a = d[1][1], 1 === a && (++s >= r && (s = 0), f = h[s] || n[s].getValues(), a = 0), !o) return _[0] === s && _[1] === a;
                            continue
                        }
                    }
                }
                break
            }
            return !1
        }, _hitTestSelf: function (t, e, n, i) {
            function r(e, n) {
                return t.subtract(e).divide(n).length <= 1
            }

            function s(t, n, i) {
                if (!e.selected || n.isSelected()) {
                    var s = t._point;
                    if (n !== s && (n = n.add(s)), r(n, x)) return new P(i, g, {segment: t, point: n})
                }
            }

            function a(t, n) {
                return (n || e.segments) && s(t, t._point, "segment") || !n && e.handles && (s(t, t._handleIn, "handle-in") || s(t, t._handleOut, "handle-out"))
            }

            function o(t) {
                f.add(t)
            }

            function h(e) {
                var n = y || e._index > 0 && e._index < m - 1;
                if ("round" === (n ? u : l)) return r(e._point, x);
                if (f = new L({
                    internal: !0,
                    closed: !0
                }), n ? e.isSmooth() || L._addBevelJoin(e, u, k, c, null, i, o, !0) : "square" === l && L._addSquareCap(e, l, k, null, i, o, !0), !f.isEmpty()) {
                    var s;
                    return f.contains(t) || (s = f.getNearestLocation(t)) && r(s.getPoint(), w)
                }
            }

            var u, l, c, f, d, _, g = this, v = this.getStyle(), p = this._segments, m = p.length, y = this._closed,
                w = e._tolerancePadding, x = w, b = e.stroke && v.hasStroke(), C = e.fill && v.hasFill(), S = e.curves,
                k = b ? v.getStrokeWidth() / 2 : C && e.tolerance > 0 || S ? 0 : null;
            if (null !== k && (k > 0 ? (u = v.getStrokeJoin(), l = v.getStrokeCap(), c = v.getMiterLimit(), x = x.add(L._getStrokePadding(k, i))) : u = l = "round"), !e.ends || e.segments || y) {
                if (e.segments || e.handles) for (var I = 0; I < m; I++) if (_ = a(p[I])) return _
            } else if (_ = a(p[0], !0) || a(p[m - 1], !0)) return _;
            if (null !== k) {
                if (d = this.getNearestLocation(t)) {
                    var A = d.getTime();
                    0 === A || 1 === A && m > 1 ? h(d.getSegment()) || (d = null) : r(d.getPoint(), x) || (d = null)
                }
                if (!d && "miter" === u && m > 1) for (var I = 0; I < m; I++) {
                    var M = p[I];
                    if (t.getDistance(M._point) <= c * k && h(M)) {
                        d = M.getLocation();
                        break
                    }
                }
            }
            return !d && C && this._contains(t) || d && !b && !S ? new P("fill", this) : d ? new P(b ? "stroke" : "curve", this, {
                location: d,
                point: d.getPoint()
            }) : null
        }
    }, r.each(T._evaluateMethods, function (t) {
        this[t + "At"] = function (e) {
            var n = this.getLocationAt(e);
            return n && n[t]()
        }
    }, {
        beans: !1, getLocationOf: function () {
            for (var t = c.read(arguments), e = this.getCurves(), n = 0, i = e.length; n < i; n++) {
                var r = e[n].getLocationOf(t);
                if (r) return r
            }
            return null
        }, getOffsetOf: function () {
            var t = this.getLocationOf.apply(this, arguments);
            return t ? t.getOffset() : null
        }, getLocationAt: function (t) {
            if ("number" == typeof t) {
                for (var e = this.getCurves(), n = 0, i = 0, r = e.length; i < r; i++) {
                    var s = n, a = e[i];
                    if (n += a.getLength(), n > t) return a.getLocationAt(t - s)
                }
                if (e.length > 0 && t <= this.getLength()) return new z(e[e.length - 1], 1)
            } else if (t && t.getPath && t.getPath() === this) return t;
            return null
        }
    }), new function () {
        function t(t, e, n, i) {
            function r(e) {
                var n = h[e], i = h[e + 1];
                s == n && a == i || (t.beginPath(), t.moveTo(s, a), t.lineTo(n, i), t.stroke(), t.beginPath(), t.arc(n, i, o, 0, 2 * Math.PI, !0), t.fill())
            }

            for (var s, a, o = i / 2, h = new Array(6), u = 0, l = e.length; u < l; u++) {
                var c = e[u], f = c._selection;
                if (c._transformCoordinates(n, h), s = h[0], a = h[1], 2 & f && r(2), 4 & f && r(4), t.fillRect(s - o, a - o, i, i), !(1 & f)) {
                    var d = t.fillStyle;
                    t.fillStyle = "#ffffff", t.fillRect(s - o + 1, a - o + 1, i - 2, i - 2), t.fillStyle = d
                }
            }
        }

        function e(t, e, n) {
            function i(e) {
                if (n) e._transformCoordinates(n, _), r = _[0], s = _[1]; else {
                    var i = e._point;
                    r = i._x, s = i._y
                }
                if (g) t.moveTo(r, s), g = !1; else {
                    if (n) h = _[2], u = _[3]; else {
                        var f = e._handleIn;
                        h = r + f._x, u = s + f._y
                    }
                    h === r && u === s && l === a && c === o ? t.lineTo(r, s) : t.bezierCurveTo(l, c, h, u, r, s)
                }
                if (a = r, o = s, n) l = _[4], c = _[5]; else {
                    var f = e._handleOut;
                    l = a + f._x, c = o + f._y
                }
            }

            for (var r, s, a, o, h, u, l, c, f = e._segments, d = f.length, _ = new Array(6), g = !0, v = 0; v < d; v++) i(f[v]);
            e._closed && d > 0 && i(f[0])
        }

        return {
            _draw: function (t, n, i, r) {
                function s(t) {
                    return c[(t % f + f) % f]
                }

                var a = n.dontStart, o = n.dontFinish || n.clip, h = this.getStyle(), u = h.hasFill(),
                    l = h.hasStroke(), c = h.getDashArray(), f = !paper.support.nativeDash && l && c && c.length;
                if (a || t.beginPath(), (u || l && !f || o) && (e(t, this, r), this._closed && t.closePath()), !o && (u || l) && (this._setStyles(t, n, i), u && (t.fill(h.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), l)) {
                    if (f) {
                        a || t.beginPath();
                        var d, _ = new N(this, .25, 32, (!1), r), g = _.length, v = -h.getDashOffset(), p = 0;
                        for (v %= g; v > 0;) v -= s(p--) + s(p--);
                        for (; v < g;) d = v + s(p++), (v > 0 || d > 0) && _.drawPart(t, Math.max(v, 0), Math.max(d, 0)), v = d + s(p++)
                    }
                    t.stroke()
                }
            }, _drawSelected: function (n, i) {
                n.beginPath(), e(n, this, i), n.stroke(), t(n, this._segments, i, paper.settings.handleSize)
            }
        }
    }, new function () {
        function t(t) {
            var e = t._segments;
            if (!e.length) throw new Error("Use a moveTo() command first");
            return e[e.length - 1]
        }

        return {
            moveTo: function () {
                var t = this._segments;
                1 === t.length && this.removeSegment(0), t.length || this._add([new A(c.read(arguments))])
            }, moveBy: function () {
                throw new Error("moveBy() is unsupported on Path items.")
            }, lineTo: function () {
                this._add([new A(c.read(arguments))])
            }, cubicCurveTo: function () {
                var e = c.read(arguments), n = c.read(arguments), i = c.read(arguments), r = t(this);
                r.setHandleOut(e.subtract(r._point)), this._add([new A(i, n.subtract(i))])
            }, quadraticCurveTo: function () {
                var e = c.read(arguments), n = c.read(arguments), i = t(this)._point;
                this.cubicCurveTo(e.add(i.subtract(e).multiply(1 / 3)), e.add(n.subtract(e).multiply(1 / 3)), n)
            }, curveTo: function () {
                var e = c.read(arguments), n = c.read(arguments), i = r.pick(r.read(arguments), .5), s = 1 - i,
                    a = t(this)._point, o = e.subtract(a.multiply(s * s)).subtract(n.multiply(i * i)).divide(2 * i * s);
                if (o.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + i);
                this.quadraticCurveTo(o, n)
            }, arcTo: function () {
                var e, n, i, s, a, o = Math.abs, h = Math.sqrt, l = t(this), f = l._point, _ = c.read(arguments),
                    g = r.peek(arguments), v = r.pick(g, !0);
                if ("boolean" == typeof v) var y = f.add(_).divide(2),
                    e = y.add(y.subtract(f).rotate(v ? -90 : 90)); else if (r.remain(arguments) <= 2) e = _, _ = c.read(arguments); else {
                    var w = d.read(arguments), x = u.isZero;
                    if (x(w.width) || x(w.height)) return this.lineTo(_);
                    var b = r.read(arguments), v = !!r.read(arguments), C = !!r.read(arguments), y = f.add(_).divide(2),
                        S = f.subtract(y).rotate(-b), k = S.x, I = S.y, P = o(w.width), M = o(w.height), T = P * P,
                        z = M * M, O = k * k, L = I * I, E = h(O / T + L / z);
                    if (E > 1 && (P *= E, M *= E, T = P * P, z = M * M), E = (T * z - T * L - z * O) / (T * L + z * O), o(E) < 1e-12 && (E = 0), E < 0) throw new Error("Cannot create an arc with the given arguments");
                    n = new c(P * I / M, -M * k / P).multiply((C === v ? -1 : 1) * h(E)).rotate(b).add(y), a = (new p).translate(n).rotate(b).scale(P, M), s = a._inverseTransform(f), i = s.getDirectedAngle(a._inverseTransform(_)), !v && i > 0 ? i -= 360 : v && i < 0 && (i += 360)
                }
                if (e) {
                    var N = new m(f.add(e).divide(2), e.subtract(f).rotate(90), (!0)),
                        B = new m(e.add(_).divide(2), _.subtract(e).rotate(90), (!0)), j = new m(f, _),
                        F = j.getSide(e);
                    if (n = N.intersect(B, !0), !n) {
                        if (!F) return this.lineTo(_);
                        throw new Error("Cannot create an arc with the given arguments")
                    }
                    s = f.subtract(n), i = s.getDirectedAngle(_.subtract(n));
                    var D = j.getSide(n);
                    0 === D ? i = F * o(i) : F === D && (i += i < 0 ? 360 : -360)
                }
                for (var R = 1e-7, q = o(i), V = q >= 360 ? 4 : Math.ceil((q - R) / 90), U = i / V, H = U * Math.PI / 360, Z = 4 / 3 * Math.sin(H) / (1 + Math.cos(H)), W = [], $ = 0; $ <= V; $++) {
                    var S = _, G = null;
                    if ($ < V && (G = s.rotate(90).multiply(Z), a ? (S = a._transformPoint(s), G = a._transformPoint(s.add(G)).subtract(S)) : S = n.add(s)), $) {
                        var J = s.rotate(-90).multiply(Z);
                        a && (J = a._transformPoint(s.add(J)).subtract(S)), W.push(new A(S, J, G))
                    } else l.setHandleOut(G);
                    s = s.rotate(U)
                }
                this._add(W)
            }, lineBy: function () {
                var e = c.read(arguments), n = t(this)._point;
                this.lineTo(n.add(e))
            }, curveBy: function () {
                var e = c.read(arguments), n = c.read(arguments), i = r.read(arguments), s = t(this)._point;
                this.curveTo(s.add(e), s.add(n), i)
            }, cubicCurveBy: function () {
                var e = c.read(arguments), n = c.read(arguments), i = c.read(arguments), r = t(this)._point;
                this.cubicCurveTo(r.add(e), r.add(n), r.add(i))
            }, quadraticCurveBy: function () {
                var e = c.read(arguments), n = c.read(arguments), i = t(this)._point;
                this.quadraticCurveTo(i.add(e), i.add(n))
            }, arcBy: function () {
                var e = t(this)._point, n = e.add(c.read(arguments)), i = r.pick(r.peek(arguments), !0);
                "boolean" == typeof i ? this.arcTo(n, i) : this.arcTo(n, e.add(c.read(arguments)))
            }, closePath: function (t) {
                this.setClosed(!0), this.join(this, t)
            }
        }
    }, {
        _getBounds: function (t, e) {
            var n = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds";
            return L[n](this._segments, this._closed, this, t, e)
        }, statics: {
            getBounds: function (t, e, n, i, r, s) {
                function a(t) {
                    t._transformCoordinates(i, h);
                    for (var e = 0; e < 2; e++) T._addBounds(u[e], u[e + 4], h[e + 2], h[e], e, s ? s[e] : 0, l, c, f);
                    var n = u;
                    u = h, h = n
                }

                var o = t[0];
                if (!o) return new g;
                for (var h = new Array(6), u = o._transformCoordinates(i, new Array(6)), l = u.slice(0, 2), c = l.slice(), f = new Array(2), d = 1, _ = t.length; d < _; d++) a(t[d]);
                return e && a(o), new g(l[0], l[1], c[0] - l[0], c[1] - l[1])
            }, getStrokeBounds: function (t, e, n, i, r) {
                function s(t) {
                    v = v.include(t)
                }

                function a(t) {
                    v = v.unite(x.setCenter(t._point.transform(i)))
                }

                function o(t, e) {
                    "round" === e || t.isSmooth() ? a(t) : L._addBevelJoin(t, e, p, w, i, f, s)
                }

                function h(t, e) {
                    "round" === e ? a(t) : L._addSquareCap(t, e, p, i, f, s)
                }

                var u = n.getStyle(), l = u.hasStroke(), c = u.getStrokeWidth(), f = l && n._getStrokeMatrix(i, r),
                    _ = l && L._getStrokePadding(c, f), v = L.getBounds(t, e, n, i, r, _);
                if (!l) return v;
                for (var p = c / 2, m = u.getStrokeJoin(), y = u.getStrokeCap(), w = u.getMiterLimit(), x = new g(new d(_)), b = t.length - (e ? 0 : 1), C = 1; C < b; C++) o(t[C], m);
                return e ? o(t[0], m) : b > 0 && (h(t[0], y), h(t[t.length - 1], y)), v
            }, _getStrokePadding: function (t, e) {
                if (!e) return [t, t];
                var n = new c(t, 0).transform(e), i = new c(0, t).transform(e), r = n.getAngleInRadians(),
                    s = n.getLength(), a = i.getLength(), o = Math.sin(r), h = Math.cos(r), u = Math.tan(r),
                    l = Math.atan2(a * u, s), f = Math.atan2(a, u * s);
                return [Math.abs(s * Math.cos(l) * h + a * Math.sin(l) * o), Math.abs(a * Math.sin(f) * h + s * Math.cos(f) * o)]
            }, _addBevelJoin: function (t, e, n, i, r, s, a, o) {
                var h = t.getCurve(), u = h.getPrevious(), l = h.getPoint1().transform(r),
                    f = u.getNormalAtTime(1).multiply(n).transform(s),
                    d = h.getNormalAtTime(0).multiply(n).transform(s);
                if (f.getDirectedAngle(d) < 0 && (f = f.negate(), d = d.negate()), o && a(l), a(l.add(f)), "miter" === e) {
                    var _ = new m(l.add(f), new c((-f.y), f.x), (!0)).intersect(new m(l.add(d), new c((-d.y), d.x), (!0)), !0);
                    _ && l.getDistance(_) <= i * n && a(_)
                }
                a(l.add(d))
            }, _addSquareCap: function (t, e, n, i, r, s, a) {
                var o = t._point.transform(i), h = t.getLocation(),
                    u = h.getNormal().multiply(0 === h.getTime() ? n : -n).transform(r);
                "square" === e && (a && (s(o.subtract(u)), s(o.add(u))), o = o.add(u.rotate(-90))), s(o.add(u)), s(o.subtract(u))
            }, getHandleBounds: function (t, e, n, i, r) {
                var s, a, o = n.getStyle(), h = r.stroke && o.hasStroke();
                if (h) {
                    var u = n._getStrokeMatrix(i, r), l = o.getStrokeWidth() / 2, c = l;
                    "miter" === o.getStrokeJoin() && (c = l * o.getMiterLimit()), "square" === o.getStrokeCap() && (c = Math.max(c, l * Math.SQRT2)), s = L._getStrokePadding(l, u), a = L._getStrokePadding(c, u)
                }
                for (var f = new Array(6), d = 1 / 0, _ = -d, v = d, p = _, m = 0, y = t.length; m < y; m++) {
                    var w = t[m];
                    w._transformCoordinates(i, f);
                    for (var x = 0; x < 6; x += 2) {
                        var b = x ? s : a, C = b ? b[0] : 0, S = b ? b[1] : 0, k = f[x], I = f[x + 1], P = k - C,
                            A = k + C, M = I - S, T = I + S;
                        P < d && (d = P), A > _ && (_ = A), M < v && (v = M), T > p && (p = T)
                    }
                }
                return new g(d, v, _ - d, p - v)
            }
        }
    });
    L.inject({
        statics: new function () {
            function t(t, e, n) {
                var i = r.getNamed(n), s = new L(i && 0 == i.insert && w.NO_INSERT);
                return s._add(t), s._closed = e, s.set(i, {insert: !0})
            }

            function e(e, n, r) {
                for (var s = new Array(4), a = 0; a < 4; a++) {
                    var o = i[a];
                    s[a] = new A(o._point.multiply(n).add(e), o._handleIn.multiply(n), o._handleOut.multiply(n))
                }
                return t(s, !0, r)
            }

            var n = .5522847498307936,
                i = [new A([-1, 0], [0, n], [0, -n]), new A([0, -1], [-n, 0], [n, 0]), new A([1, 0], [0, -n], [0, n]), new A([0, 1], [n, 0], [-n, 0])];
            return {
                Line: function () {
                    return t([new A(c.readNamed(arguments, "from")), new A(c.readNamed(arguments, "to"))], !1, arguments)
                }, Circle: function () {
                    var t = c.readNamed(arguments, "center"), n = r.readNamed(arguments, "radius");
                    return e(t, new d(n), arguments)
                }, Rectangle: function () {
                    var e, i = g.readNamed(arguments, "rectangle"),
                        r = d.readNamed(arguments, "radius", 0, {readNull: !0}), s = i.getBottomLeft(!0),
                        a = i.getTopLeft(!0), o = i.getTopRight(!0), h = i.getBottomRight(!0);
                    if (!r || r.isZero()) e = [new A(s), new A(a), new A(o), new A(h)]; else {
                        r = d.min(r, i.getSize(!0).divide(2));
                        var u = r.width, l = r.height, c = u * n, f = l * n;
                        e = [new A(s.add(u, 0), null, [-c, 0]), new A(s.subtract(0, l), [0, f]), new A(a.add(0, l), null, [0, -f]), new A(a.add(u, 0), [-c, 0], null), new A(o.subtract(u, 0), null, [c, 0]), new A(o.add(0, l), [0, -f], null), new A(h.subtract(0, l), null, [0, f]), new A(h.subtract(u, 0), [c, 0])]
                    }
                    return t(e, !0, arguments)
                }, RoundRectangle: "#Rectangle", Ellipse: function () {
                    var t = C._readEllipse(arguments);
                    return e(t.center, t.radius, arguments)
                }, Oval: "#Ellipse", Arc: function () {
                    var t = c.readNamed(arguments, "from"), e = c.readNamed(arguments, "through"),
                        n = c.readNamed(arguments, "to"), i = r.getNamed(arguments),
                        s = new L(i && 0 == i.insert && w.NO_INSERT);
                    return s.moveTo(t), s.arcTo(e, n), s.set(i)
                }, RegularPolygon: function () {
                    for (var e = c.readNamed(arguments, "center"), n = r.readNamed(arguments, "sides"), i = r.readNamed(arguments, "radius"), s = 360 / n, a = n % 3 === 0, o = new c(0, a ? -i : i), h = a ? -1 : .5, u = new Array(n), l = 0; l < n; l++) u[l] = new A(e.add(o.rotate((l + h) * s)));
                    return t(u, !0, arguments)
                }, Star: function () {
                    for (var e = c.readNamed(arguments, "center"), n = 2 * r.readNamed(arguments, "points"), i = r.readNamed(arguments, "radius1"), s = r.readNamed(arguments, "radius2"), a = 360 / n, o = new c(0, (-1)), h = new Array(n), u = 0; u < n; u++) h[u] = new A(e.add(o.rotate(a * u).multiply(u % 2 ? s : i)));
                    return t(h, !0, arguments)
                }
            }
        }
    });
    var E = O.extend({
        _class: "CompoundPath", _serializeFields: {children: []}, beans: !0, initialize: function (t) {
            this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments))
        }, insertChildren: function yt(t, e) {
            var n = e, i = n[0];
            i && "number" == typeof i[0] && (n = [n]);
            for (var s = e.length - 1; s >= 0; s--) {
                var a = n[s];
                n !== e || a instanceof L || (n = r.slice(n)), Array.isArray(a) ? n[s] = new L({
                    segments: a,
                    insert: !1
                }) : a instanceof E && (n.splice.apply(n, [s, 1].concat(a.removeChildren())), a.remove())
            }
            return yt.base.call(this, t, n)
        }, reduce: function wt(t) {
            for (var e = this._children, n = e.length - 1; n >= 0; n--) {
                var i = e[n].reduce(t);
                i.isEmpty() && i.remove()
            }
            if (!e.length) {
                var i = new L(w.NO_INSERT);
                return i.copyAttributes(this), i.insertAbove(this), this.remove(), i
            }
            return wt.base.call(this)
        }, isClosed: function () {
            for (var t = this._children, e = 0, n = t.length; e < n; e++) if (!t[e]._closed) return !1;
            return !0
        }, setClosed: function (t) {
            for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setClosed(t)
        }, getFirstSegment: function () {
            var t = this.getFirstChild();
            return t && t.getFirstSegment()
        }, getLastSegment: function () {
            var t = this.getLastChild();
            return t && t.getLastSegment()
        }, getCurves: function () {
            for (var t = this._children, e = [], n = 0, i = t.length; n < i; n++) e.push.apply(e, t[n].getCurves());
            return e
        }, getFirstCurve: function () {
            var t = this.getFirstChild();
            return t && t.getFirstCurve()
        }, getLastCurve: function () {
            var t = this.getLastChild();
            return t && t.getLastCurve()
        }, getArea: function () {
            for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getArea();
            return e
        }, getLength: function () {
            for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength();
            return e
        }, getPathData: function (t, e) {
            for (var n = this._children, i = [], r = 0, s = n.length; r < s; r++) {
                var a = n[r], o = a._matrix;
                i.push(a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e))
            }
            return i.join("")
        }, _hitTestChildren: function xt(t, e, n) {
            return xt.base.call(this, t, e["class"] === L || "path" === e.type ? e : r.set({}, e, {fill: !1}), n)
        }, _draw: function (t, e, n, i) {
            var r = this._children;
            if (r.length) {
                e = e.extend({dontStart: !0, dontFinish: !0}), t.beginPath();
                for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, i);
                if (!e.clip) {
                    this._setStyles(t, e, n);
                    var o = this._style;
                    o.hasFill() && (t.fill(o.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke()
                }
            }
        }, _drawSelected: function (t, e, n) {
            for (var i = this._children, r = 0, s = i.length; r < s; r++) {
                var a = i[r], o = a._matrix;
                n[a._id] || a._drawSelected(t, o.isIdentity() ? e : e.appended(o))
            }
        }
    }, new function () {
        function t(t, e) {
            var n = t._children;
            if (e && !n.length) throw new Error("Use a moveTo() command first");
            return n[n.length - 1]
        }

        return r.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function (e) {
            this[e] = function () {
                var n = t(this, !0);
                n[e].apply(n, arguments)
            }
        }, {
            moveTo: function () {
                var e = t(this), n = e && e.isEmpty() ? e : new L(w.NO_INSERT);
                n !== e && this.addChild(n), n.moveTo.apply(n, arguments)
            }, moveBy: function () {
                var e = t(this, !0), n = e && e.getLastSegment(), i = c.read(arguments);
                this.moveTo(n ? i.add(n._point) : i)
            }, closePath: function (e) {
                t(this, !0).closePath(e)
            }
        })
    }, r.each(["reverse", "flatten", "simplify", "smooth"], function (t) {
        this[t] = function (e) {
            for (var n, i = this._children, r = 0, s = i.length; r < s; r++) n = i[r][t](e) || n;
            return n
        }
    }, {}));
    O.inject(new function () {
        function t(t, e) {
            var n = t.clone(!1).reduce({simplify: !0}).transform(null, !0, !0);
            return e ? n.resolveCrossings().reorient("nonzero" === n.getFillRule(), !0) : n
        }

        function n(t, e, n, i, r) {
            var s = new E(w.NO_INSERT);
            return s.addChildren(t, !0), s = s.reduce({simplify: e}), r && 0 == r.insert || s.insertAbove(i && n.isSibling(i) && n.getIndex() < i.getIndex() ? i : n), s.copyAttributes(n, !0), s
        }

        function i(e, i, r, a) {
            function o(t) {
                for (var e = 0, n = t.length; e < n; e++) {
                    var i = t[e];
                    w.push.apply(w, i._segments), x.push.apply(x, i.getCurves()), i._overlapsOnly = !0
                }
            }

            if (a && (0 == a.trace || a.stroke) && /^(subtract|intersect)$/.test(r)) return s(e, i, r);
            var u = t(e, !0), c = i && e !== i && t(i, !0), _ = p[r];
            _[r] = !0, c && (_.subtract || _.exclude) ^ (c.isClockwise() ^ u.isClockwise()) && c.reverse();
            var g, v = l(z.expand(u.getCrossings(c))), m = u._children || [u], y = c && (c._children || [c]), w = [],
                x = [];
            if (v.length) {
                o(m), y && o(y);
                for (var b = 0, C = v.length; b < C; b++) f(v[b]._segment, u, c, x, _);
                for (var b = 0, C = w.length; b < C; b++) {
                    var S = w[b], k = S._intersection;
                    S._winding || f(S, u, c, x, _), k && k._overlap || (S._path._overlapsOnly = !1)
                }
                g = d(w, _)
            } else g = h(y ? m.concat(y) : m.slice(), function (t) {
                return !!_[t]
            });
            return n(g, !0, e, i, a)
        }

        function s(e, i, r) {
            function s(t) {
                if (!c[t._id] && (l || o.contains(t.getPointAt(t.getLength() / 2)) ^ u)) return f.unshift(t), c[t._id] = !0
            }

            for (var a = t(e), o = t(i), h = a.getCrossings(o), u = "subtract" === r, l = "divide" === r, c = {}, f = [], d = h.length - 1; d >= 0; d--) {
                var _ = h[d].split();
                _ && (s(_) && _.getFirstSegment().setHandleIn(0, 0), a.getLastSegment().setHandleOut(0, 0))
            }
            return s(a), n(f, !1, e, i)
        }

        function a(t, e) {
            for (var n = t; n;) {
                if (n === e) return;
                n = n._previous
            }
            for (; t._next && t._next !== e;) t = t._next;
            if (!t._next) {
                for (; e._previous;) e = e._previous;
                t._next = e, e._previous = t
            }
        }

        function o(t) {
            for (var e = t.length - 1; e >= 0; e--) t[e].clearHandles()
        }

        function h(t, e, n) {
            var i = t && t.length;
            if (i) {
                var s = r.each(t, function (t, e) {
                    this[t._id] = {container: null, winding: t.isClockwise() ? 1 : -1, index: e}
                }, {}), a = t.slice().sort(function (t, e) {
                    return v(e.getArea()) - v(t.getArea())
                }), o = a[0];
                null == n && (n = o.isClockwise());
                for (var h = 0; h < i; h++) {
                    for (var u = a[h], l = s[u._id], c = u.getInteriorPoint(), f = 0, d = h - 1; d >= 0; d--) {
                        var _ = a[d];
                        if (_.contains(c)) {
                            var g = s[_._id];
                            f = g.winding, l.winding += f, l.container = g.exclude ? g.container : _;
                            break
                        }
                    }
                    if (e(l.winding) === e(f)) l.exclude = !0, t[l.index] = null; else {
                        var p = l.container;
                        u.setClockwise(p ? !p.isClockwise() : n)
                    }
                }
            }
            return t
        }

        function l(t, e, n) {
            function i(t) {
                return t._path._id + "." + t._segment1._index
            }

            for (var r, s, h, u = e && [], l = 1e-8, c = 1 - l, f = !1, d = n || [], _ = n && {}, g = (n && n.length) - 1; g >= 0; g--) {
                var v = n[g];
                v._path && (_[i(v)] = !0)
            }
            for (var g = t.length - 1; g >= 0; g--) {
                var p, m = t[g], y = m._time, w = y, x = e && !e(m), v = m._curve;
                if (v && (v !== s ? (f = !v.hasHandles() || _ && _[i(v)], r = [], h = null, s = v) : h >= l && (y /= h)), x) r && r.push(m); else {
                    if (e && u.unshift(m), h = w, y < l) p = v._segment1; else if (y > c) p = v._segment2; else {
                        var b = v.divideAtTime(y, !0);
                        f && d.push(v, b), p = b._segment1;
                        for (var C = r.length - 1; C >= 0; C--) {
                            var S = r[C];
                            S._time = (S._time - y) / (1 - y)
                        }
                    }
                    m._setSegment(p);
                    var k = p._intersection, I = m._intersection;
                    if (k) {
                        a(k, I);
                        for (var P = k; P;) a(P._intersection, k), P = P._next
                    } else p._intersection = I
                }
            }
            return n || o(d), u || t
        }

        function c(t, e, n, i, r) {
            function s(s) {
                var a = s[l + 0], h = s[l + 6];
                if (!(p < _(a, h) || p > g(a, h))) {
                    var f = s[u + 0], v = s[u + 2], m = s[u + 4], b = s[u + 6];
                    if (a === h) return void((f < x && b > w || b < x && f > w) && (I = !0));
                    var C = p === a ? 0 : p === h ? 1 : w > g(f, v, m, b) || x < _(f, v, m, b) ? 1 : T.solveCubic(s, l, p, M, 0, 1) > 0 ? M[0] : 1,
                        P = 0 === C ? f : 1 === C ? b : T.getPoint(s, C)[n ? "y" : "x"], z = a > h ? 1 : -1,
                        O = o[l] > o[l + 6] ? 1 : -1, L = o[u + 6];
                    return p !== a ? (P < w ? S += z : P > x ? k += z : I = !0, P > d - y && P < d + y && (A /= 2)) : (z !== O ? f < w ? S += z : f > x && (k += z) : f != L && (L < x && P > x ? (k += z, I = !0) : L > w && P < w && (S += z, I = !0)), A = 0), o = s, !r && P > w && P < x && 0 === T.getTangent(s, C)[n ? "x" : "y"] && c(t, e, !n, i, !0)
                }
            }

            function a(t) {
                var e = t[l + 0], i = t[l + 2], r = t[l + 4], a = t[l + 6];
                if (p <= g(e, i, r, a) && p >= _(e, i, r, a)) for (var o, h = t[u + 0], c = t[u + 2], f = t[u + 4], d = t[u + 6], v = w > g(h, c, f, d) || x < _(h, c, f, d) ? [t] : T.getMonoCurves(t, n), m = 0, y = v.length; m < y; m++) if (o = s(v[m])) return o
            }

            for (var o, h, u = n ? 1 : 0, l = 1 ^ u, f = [t.x, t.y], d = f[u], p = f[l], m = 1e-9, y = 1e-6, w = d - m, x = d + m, b = 0, C = 0, S = 0, k = 0, I = !1, P = !1, A = 1, M = [], z = 0, O = e.length; z < O; z++) {
                var L, E = e[z], N = E._path, B = E.getValues();
                if (!(z && e[z - 1]._path === N || (o = null, N._closed || (h = T.getValues(N.getLastCurve().getSegment2(), E.getSegment1(), null, !i), h[l] !== h[l + 6] && (o = h)), o))) {
                    o = B;
                    for (var j = N.getLastCurve(); j && j !== E;) {
                        var F = j.getValues();
                        if (F[l] !== F[l + 6]) {
                            o = F;
                            break
                        }
                        j = j.getPrevious()
                    }
                }
                if (L = a(B)) return L;
                if (z + 1 === O || e[z + 1]._path !== N) {
                    if (h && (L = a(h))) return L;
                    !I || S || k || (S = k = N.isClockwise(i) ^ n ? 1 : -1), b += S, C += k, S = k = 0, I && (P = !0, I = !1), h = null
                }
            }
            return b = v(b), C = v(C), {winding: g(b, C), windingL: b, windingR: C, quality: A, onPath: P}
        }

        function f(t, e, n, i, r) {
            var s, a = [], o = t, h = 0;
            do {
                var l = t.getCurve(), f = l.getLength();
                a.push({segment: t, curve: l, length: f}), h += f, t = t.getNext()
            } while (t && !t._intersection && t !== o);
            for (var d = [.5, .25, .75], s = {
                winding: 0,
                quality: -1
            }, _ = 1e-8, g = 1 - _, p = 0; p < d.length && s.quality < .5; p++) for (var f = h * d[p], m = 0, y = a.length; m < y; m++) {
                var w = a[m], x = w.length;
                if (f <= x) {
                    var l = w.curve, b = l._path, C = b._parent, S = C instanceof E ? C : b,
                        k = u.clamp(l.getTimeAt(f), _, g), I = l.getPointAtTime(k),
                        P = v(l.getTangentAtTime(k).y) < Math.SQRT1_2,
                        A = r.subtract && n && (S === e && n._getWinding(I, P, !0).winding || S === n && !e._getWinding(I, P, !0).winding) ? {
                            winding: 0,
                            quality: 1
                        } : c(I, i, P, !0);
                    A.quality > s.quality && (s = A);
                    break
                }
                f -= x
            }
            for (var m = a.length - 1; m >= 0; m--) a[m].segment._winding = s
        }

        function d(t, e) {
            function n(t) {
                var n;
                return !(!t || t._visited || e && (!e[(n = t._winding || {}).winding] || e.unite && 2 === n.winding && n.windingL && n.windingR))
            }

            function i(t) {
                if (t) for (var e = 0, n = a.length; e < n; e++) if (t === a[e]) return !0;
                return !1
            }

            function r(t) {
                for (var e = t._segments, n = 0, i = e.length; n < i; n++) e[n]._visited = !0
            }

            function s(t, e) {
                function r(r, s) {
                    for (; r && r !== s;) {
                        var o = r._segment, u = o && o._path;
                        if (u) {
                            var l = o.getNext() || u.getFirstSegment(), c = l._intersection;
                            o !== t && (i(o) || i(l) || l && n(o) && (n(l) || c && n(c._segment))) && h.push(o), e && a.push(o)
                        }
                        r = r._next
                    }
                }

                var s = t._intersection, o = s, h = [];
                if (e && (a = [t]), s) {
                    for (r(s); s && s._prev;) s = s._prev;
                    r(s, o)
                }
                return h
            }

            var a, o = [];
            t.sort(function (t, e) {
                var n = t._intersection, i = e._intersection, r = !(!n || !n._overlap), s = !(!i || !i._overlap),
                    a = t._path, o = e._path;
                return r ^ s ? r ? 1 : -1 : !n ^ !i ? n ? 1 : -1 : a !== o ? a._id - o._id : t._index - e._index
            });
            for (var h = 0, u = t.length; h < u; h++) {
                var l, c, f, d = t[h], _ = n(d), g = null, v = !1, p = !0, m = [];
                if (_ && d._path._overlapsOnly) {
                    var y = d._path, x = d._intersection._segment._path;
                    y.compare(x) && (y.getArea() && o.push(y.clone(!1)), r(y), r(x), _ = !1)
                }
                for (; _;) {
                    var b = !g, C = s(d, b), S = C.shift(), v = !b && (i(d) || i(S)), k = !v && S;
                    if (b && (g = new L(w.NO_INSERT), l = null), v) {
                        (d.isFirst() || d.isLast()) && (p = d._path._closed), d._visited = !0;
                        break
                    }
                    if (k && l && (m.push(l), l = null), l || (k && C.push(d), l = {
                        start: g._segments.length,
                        crossings: C,
                        visited: c = [],
                        handleIn: f
                    }), k && (d = S), !n(d)) {
                        g.removeSegments(l.start);
                        for (var I = 0, P = c.length; I < P; I++) c[I]._visited = !1;
                        c.length = 0;
                        do d = l && l.crossings.shift(), d && d._path || (d = null, l = m.pop(), l && (c = l.visited, f = l.handleIn)); while (l && !n(d));
                        if (!d) break
                    }
                    var M = d.getNext();
                    g.add(new A(d._point, f, M && d._handleOut)), d._visited = !0, c.push(d), d = M || d._path.getFirstSegment(), f = M && M._handleIn
                }
                v && (p && (g.getFirstSegment().setHandleIn(f), g.setClosed(p)), 0 !== g.getArea() && o.push(g))
            }
            return o
        }

        var _ = Math.min, g = Math.max, v = Math.abs,
            p = {unite: {1: !0, 2: !0}, intersect: {2: !0}, subtract: {1: !0}, exclude: {1: !0, "-1": !0}};
        return {
            _getWinding: function (t, e, n) {
                return c(t, this.getCurves(), e, n)
            }, unite: function (t, e) {
                return i(this, t, "unite", e)
            }, intersect: function (t, e) {
                return i(this, t, "intersect", e)
            }, subtract: function (t, e) {
                return i(this, t, "subtract", e)
            }, exclude: function (t, e) {
                return i(this, t, "exclude", e)
            }, divide: function (t, e) {
                return e && (0 == e.trace || e.stroke) ? s(this, t, "divide") : n([this.subtract(t, e), this.intersect(t, e)], !0, this, t, e)
            }, resolveCrossings: function () {
                function t(t, e) {
                    var n = t && t._intersection;
                    return n && n._overlap && n._path === e
                }

                var e = this._children, n = e || [this], i = !1, s = !1, a = this.getIntersections(null, function (t) {
                    return t.hasOverlap() && (i = !0) || t.isCrossing() && (s = !0)
                }), h = i && s && [];
                if (a = z.expand(a), i) for (var u = l(a, function (t) {
                    return t.hasOverlap()
                }, h), c = u.length - 1; c >= 0; c--) {
                    var f = u[c], _ = f._path, g = f._segment, v = g.getPrevious(), p = g.getNext();
                    t(v, _) && t(p, _) && (g.remove(), v._handleOut._set(0, 0), p._handleIn._set(0, 0), v === g || v.getCurve().hasLength() || (p._handleIn.set(v._handleIn), v.remove()))
                }
                s && (l(a, i && function (t) {
                    var e = t.getCurve(), n = t.getSegment(), i = t._intersection, r = i._curve, s = i._segment;
                    return !!(e && r && e._path && r._path) || (n && (n._intersection = null), void(s && (s._intersection = null)))
                }, h), h && o(h), n = d(r.each(n, function (t) {
                    this.push.apply(this, t._segments)
                }, [])));
                var m, y = n.length;
                return y > 1 && e ? (n !== e && this.setChildren(n), m = this) : 1 !== y || e || (n[0] !== this && this.setSegments(n[0].removeSegments()), m = this), m || (m = new E(w.NO_INSERT), m.addChildren(n), m = m.reduce(), m.copyAttributes(this), this.replaceWith(m)), m
            }, reorient: function (t, n) {
                var i = this._children;
                return i && i.length ? this.setChildren(h(this.removeChildren(), function (e) {
                    return !!(t ? e : 1 & e)
                }, n)) : n !== e && this.setClockwise(n), this
            }, getInteriorPoint: function () {
                var t = this.getBounds(), e = t.getCenter(!0);
                if (!this.contains(e)) {
                    for (var n = this.getCurves(), i = e.y, r = [], s = [], a = 0, o = n.length; a < o; a++) {
                        var h = n[a].getValues(), u = h[1], l = h[3], c = h[5], f = h[7];
                        if (i >= _(u, l, c, f) && i <= g(u, l, c, f)) for (var d = T.getMonoCurves(h), v = 0, p = d.length; v < p; v++) {
                            var m = d[v], y = m[1], w = m[7];
                            if (y !== w && (i >= y && i <= w || i >= w && i <= y)) {
                                var x = i === y ? m[0] : i === w ? m[6] : 1 === T.solveCubic(m, 1, i, s, 0, 1) ? T.getPoint(m, s[0]).x : (m[0] + m[6]) / 2;
                                r.push(x)
                            }
                        }
                    }
                    r.length > 1 && (r.sort(function (t, e) {
                        return t - e
                    }), e.x = (r[0] + r[1]) / 2)
                }
                return e
            }
        }
    });
    var N = r.extend({
        _class: "PathFlattener", initialize: function (t, e, n, i, r) {
            function s(t, e) {
                var n = T.getValues(t, e, r);
                h.push(n), a(n, t._index, 0, 1)
            }

            function a(t, n, r, s) {
                if (!(s - r > c) || i && T.isStraight(t) || T.isFlatEnough(t, e || .25)) {
                    var o = t[6] - t[0], h = t[7] - t[1], f = Math.sqrt(o * o + h * h);
                    f > 0 && (l += f, u.push({offset: l, curve: t, index: n, time: s}))
                } else {
                    var d = T.subdivide(t, .5), _ = (r + s) / 2;
                    a(d[0], n, r, _), a(d[1], n, _, s)
                }
            }

            for (var o, h = [], u = [], l = 0, c = 1 / (n || 32), f = t._segments, d = f[0], _ = 1, g = f.length; _ < g; _++) o = f[_], s(d, o), d = o;
            t._closed && s(o, f[0]), this.curves = h, this.parts = u, this.length = l, this.index = 0
        }, _get: function (t) {
            for (var e, n = this.parts, i = n.length, r = this.index; e = r, r && !(n[--r].offset < t);) ;
            for (; e < i; e++) {
                var s = n[e];
                if (s.offset >= t) {
                    this.index = e;
                    var a = n[e - 1], o = a && a.index === s.index ? a.time : 0, h = a ? a.offset : 0;
                    return {index: s.index, time: o + (s.time - o) * (t - h) / (s.offset - h)}
                }
            }
            return {index: n[i - 1].index, time: 1}
        }, drawPart: function (t, e, n) {
            for (var i = this._get(e), r = this._get(n), s = i.index, a = r.index; s <= a; s++) {
                var o = T.getPart(this.curves[s], s === i.index ? i.time : 0, s === r.index ? r.time : 1);
                s === i.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2))
            }
        }
    }, r.each(T._evaluateMethods, function (t) {
        this[t + "At"] = function (e) {
            var n = this._get(e);
            return T[t](this.curves[n.index], n.time)
        }
    }, {})), B = r.extend({
        initialize: function (t) {
            for (var e, n = this.points = [], i = t._segments, r = t._closed, s = 0, a = i.length; s < a; s++) {
                var o = i[s].point;
                e && e.equals(o) || n.push(e = o.clone())
            }
            r && (n.unshift(n[n.length - 1]), n.push(n[1])), this.closed = r
        }, fit: function (t) {
            var e = this.points, n = e.length, i = null;
            return n > 0 && (i = [new A(e[0])], n > 1 && (this.fitCubic(i, t, 0, n - 1, e[1].subtract(e[0]), e[n - 2].subtract(e[n - 1])), this.closed && (i.shift(), i.pop()))), i
        }, fitCubic: function (t, e, n, i, r, s) {
            var a = this.points;
            if (i - n === 1) {
                var o = a[n], h = a[i], u = o.getDistance(h) / 3;
                return void this.addCurve(t, [o, o.add(r.normalize(u)), h.add(s.normalize(u)), h])
            }
            for (var l, c = this.chordLengthParameterize(n, i), f = Math.max(e, e * e), d = !0, _ = 0; _ <= 4; _++) {
                var g = this.generateBezier(n, i, c, r, s), v = this.findMaxError(n, i, g, c);
                if (v.error < e && d) return void this.addCurve(t, g);
                if (l = v.index, v.error >= f) break;
                d = this.reparameterize(n, i, c, g), f = v.error
            }
            var p = a[l - 1].subtract(a[l + 1]);
            this.fitCubic(t, e, n, l, r, p), this.fitCubic(t, e, l, i, p.negate(), s)
        }, addCurve: function (t, e) {
            var n = t[t.length - 1];
            n.setHandleOut(e[1].subtract(e[0])), t.push(new A(e[3], e[2].subtract(e[3])))
        }, generateBezier: function (t, e, n, i, r) {
            for (var s = 1e-12, a = Math.abs, o = this.points, h = o[t], u = o[e], l = [[0, 0], [0, 0]], c = [0, 0], f = 0, d = e - t + 1; f < d; f++) {
                var _ = n[f], g = 1 - _, v = 3 * _ * g, p = g * g * g, m = v * g, y = v * _, w = _ * _ * _,
                    x = i.normalize(m), b = r.normalize(y),
                    C = o[t + f].subtract(h.multiply(p + m)).subtract(u.multiply(y + w));
                l[0][0] += x.dot(x), l[0][1] += x.dot(b), l[1][0] = l[0][1], l[1][1] += b.dot(b), c[0] += x.dot(C), c[1] += b.dot(C)
            }
            var S, k, I = l[0][0] * l[1][1] - l[1][0] * l[0][1];
            if (a(I) > s) {
                var P = l[0][0] * c[1] - l[1][0] * c[0], A = c[0] * l[1][1] - c[1] * l[0][1];
                S = A / I, k = P / I
            } else {
                var M = l[0][0] + l[0][1], T = l[1][0] + l[1][1];
                S = k = a(M) > s ? c[0] / M : a(T) > s ? c[1] / T : 0
            }
            var z, O, L = u.getDistance(h), E = s * L;
            if (S < E || k < E) S = k = L / 3; else {
                var N = u.subtract(h);
                z = i.normalize(S), O = r.normalize(k), z.dot(N) - O.dot(N) > L * L && (S = k = L / 3, z = O = null)
            }
            return [h, h.add(z || i.normalize(S)), u.add(O || r.normalize(k)), u]
        }, reparameterize: function (t, e, n, i) {
            for (var r = t; r <= e; r++) n[r - t] = this.findRoot(i, this.points[r], n[r - t]);
            for (var r = 1, s = n.length; r < s; r++) if (n[r] <= n[r - 1]) return !1;
            return !0
        }, findRoot: function (t, e, n) {
            for (var i = [], r = [], s = 0; s <= 2; s++) i[s] = t[s + 1].subtract(t[s]).multiply(3);
            for (var s = 0; s <= 1; s++) r[s] = i[s + 1].subtract(i[s]).multiply(2);
            var a = this.evaluate(3, t, n), o = this.evaluate(2, i, n), h = this.evaluate(1, r, n), l = a.subtract(e),
                c = o.dot(o) + l.dot(h);
            return u.isZero(c) ? n : n - l.dot(o) / c
        }, evaluate: function (t, e, n) {
            for (var i = e.slice(), r = 1; r <= t; r++) for (var s = 0; s <= t - r; s++) i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
            return i[0]
        }, chordLengthParameterize: function (t, e) {
            for (var n = [0], i = t + 1; i <= e; i++) n[i - t] = n[i - t - 1] + this.points[i].getDistance(this.points[i - 1]);
            for (var i = 1, r = e - t; i <= r; i++) n[i] /= n[r];
            return n
        }, findMaxError: function (t, e, n, i) {
            for (var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1; a < e; a++) {
                var o = this.evaluate(3, n, i[a - t]), h = o.subtract(this.points[a]), u = h.x * h.x + h.y * h.y;
                u >= s && (s = u, r = a)
            }
            return {error: s, index: r}
        }
    }), j = w.extend({
        _class: "TextItem",
        _applyMatrix: !1,
        _canApplyMatrix: !1,
        _serializeFields: {content: null},
        _boundsOptions: {stroke: !1, handle: !1},
        initialize: function (t) {
            this._content = "", this._lines = [];
            var n = t && r.isPlainObject(t) && t.x === e && t.y === e;
            this._initialize(n && t, !n && c.read(arguments))
        },
        _equals: function (t) {
            return this._content === t._content
        },
        copyContent: function (t) {
            this.setContent(t._content)
        },
        getContent: function () {
            return this._content
        },
        setContent: function (t) {
            this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(265)
        },
        isEmpty: function () {
            return !this._content
        },
        getCharacterStyle: "#getStyle",
        setCharacterStyle: "#setStyle",
        getParagraphStyle: "#getStyle",
        setParagraphStyle: "#setStyle"
    }), F = j.extend({
        _class: "PointText", initialize: function () {
            j.apply(this, arguments)
        }, getPoint: function () {
            var t = this._matrix.getTranslation();
            return new f(t.x, t.y, this, "setPoint")
        }, setPoint: function () {
            var t = c.read(arguments);
            this.translate(t.subtract(this._matrix.getTranslation()))
        }, _draw: function (t, e, n) {
            if (this._content) {
                this._setStyles(t, e, n);
                var i = this._lines, r = this._style, s = r.hasFill(), a = r.hasStroke(), o = r.getLeading(),
                    h = t.shadowColor;
                t.font = r.getFontStyle(), t.textAlign = r.getJustification();
                for (var u = 0, l = i.length; u < l; u++) {
                    t.shadowColor = h;
                    var c = i[u];
                    s && (t.fillText(c, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), a && t.strokeText(c, 0, 0), t.translate(0, o)
                }
            }
        }, _getBounds: function (t, e) {
            var n = this._style, i = this._lines, r = i.length, s = n.getJustification(), a = n.getLeading(),
                o = this.getView().getTextWidth(n.getFontStyle(), i), h = 0;
            "left" !== s && (h -= o / ("center" === s ? 2 : 1));
            var u = new g(h, r ? -.75 * a : 0, o, r * a);
            return t ? t._transformBounds(u, u) : u
        }
    }), D = r.extend(new function () {
        function t(t) {
            var i, r = t.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/);
            if (r) {
                i = [0, 0, 0];
                for (var s = 0; s < 3; s++) {
                    var o = r[s + 1];
                    i[s] = parseInt(1 == o.length ? o + o : o, 16) / 255
                }
            } else if (r = t.match(/^rgba?\((.*)\)$/)) {
                i = r[1].split(",");
                for (var s = 0, h = i.length; s < h; s++) {
                    var o = +i[s];
                    i[s] = s < 3 ? o / 255 : o
                }
            } else if (n) {
                var u = a[t];
                if (!u) {
                    e || (e = tt.getContext(1, 1), e.globalCompositeOperation = "copy"), e.fillStyle = "rgba(0,0,0,0)", e.fillStyle = t, e.fillRect(0, 0, 1, 1);
                    var l = e.getImageData(0, 0, 1, 1).data;
                    u = a[t] = [l[0] / 255, l[1] / 255, l[2] / 255]
                }
                i = u.slice()
            } else i = [0, 0, 0];
            return i
        }

        var e, i = {
            gray: ["gray"],
            rgb: ["red", "green", "blue"],
            hsb: ["hue", "saturation", "brightness"],
            hsl: ["hue", "saturation", "lightness"],
            gradient: ["gradient", "origin", "destination", "highlight"]
        }, s = {}, a = {}, o = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]], u = {
            "rgb-hsb": function (t, e, n) {
                var i = Math.max(t, e, n), r = Math.min(t, e, n), s = i - r,
                    a = 0 === s ? 0 : 60 * (i == t ? (e - n) / s + (e < n ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4);
                return [a, 0 === i ? 0 : s / i, i]
            }, "hsb-rgb": function (t, e, n) {
                t = (t / 60 % 6 + 6) % 6;
                var i = Math.floor(t), r = t - i, i = o[i],
                    s = [n, n * (1 - e), n * (1 - e * r), n * (1 - e * (1 - r))];
                return [s[i[0]], s[i[1]], s[i[2]]]
            }, "rgb-hsl": function (t, e, n) {
                var i = Math.max(t, e, n), r = Math.min(t, e, n), s = i - r, a = 0 === s,
                    o = a ? 0 : 60 * (i == t ? (e - n) / s + (e < n ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4),
                    h = (i + r) / 2, u = a ? 0 : h < .5 ? s / (i + r) : s / (2 - i - r);
                return [o, u, h]
            }, "hsl-rgb": function (t, e, n) {
                if (t = (t / 360 % 1 + 1) % 1, 0 === e) return [n, n, n];
                for (var i = [t + 1 / 3, t, t - 1 / 3], r = n < .5 ? n * (1 + e) : n + e - n * e, s = 2 * n - r, a = [], o = 0; o < 3; o++) {
                    var h = i[o];
                    h < 0 && (h += 1), h > 1 && (h -= 1), a[o] = 6 * h < 1 ? s + 6 * (r - s) * h : 2 * h < 1 ? r : 3 * h < 2 ? s + (r - s) * (2 / 3 - h) * 6 : s
                }
                return a
            }, "rgb-gray": function (t, e, n) {
                return [.2989 * t + .587 * e + .114 * n]
            }, "gray-rgb": function (t) {
                return [t, t, t]
            }, "gray-hsb": function (t) {
                return [0, 0, t]
            }, "gray-hsl": function (t) {
                return [0, 0, t]
            }, "gradient-rgb": function () {
                return []
            }, "rgb-gradient": function () {
                return []
            }
        };
        return r.each(i, function (t, e) {
            s[e] = [], r.each(t, function (t, n) {
                var a = r.capitalize(t), o = /^(hue|saturation)$/.test(t),
                    h = s[e][n] = "gradient" === t ? function (t) {
                        var e = this._components[0];
                        return t = R.read(Array.isArray(t) ? t : arguments, 0, {readNull: !0}), e !== t && (e && e._removeOwner(this), t && t._addOwner(this)), t
                    } : "gradient" === e ? function () {
                        return c.read(arguments, 0, {readNull: "highlight" === t, clone: !0})
                    } : function (t) {
                        return null == t || isNaN(t) ? 0 : t
                    };
                this["get" + a] = function () {
                    return this._type === e || o && /^hs[bl]$/.test(this._type) ? this._components[n] : this._convert(e)[n]
                }, this["set" + a] = function (t) {
                    this._type === e || o && /^hs[bl]$/.test(this._type) || (this._components = this._convert(e), this._properties = i[e], this._type = e), this._components[n] = h.call(this, t), this._changed()
                }
            }, this)
        }, {
            _class: "Color", _readIndex: !0, initialize: function l(e) {
                var n, a, o, h, u = arguments, c = this.__read, f = 0;
                Array.isArray(e) && (u = e, e = u[0]);
                var d = null != e && typeof e;
                if ("string" === d && e in i && (n = e, e = u[1], Array.isArray(e) ? (a = e, o = u[2]) : (c && (f = 1), u = r.slice(u, 1), d = typeof e)), !a) {
                    if (h = "number" === d ? u : "object" === d && null != e.length ? e : null) {
                        n || (n = h.length >= 3 ? "rgb" : "gray");
                        var _ = i[n].length;
                        o = h[_], c && (f += h === arguments ? _ + (null != o ? 1 : 0) : 1), h.length > _ && (h = r.slice(h, 0, _))
                    } else if ("string" === d) n = "rgb", a = t(e), 4 === a.length && (o = a[3], a.length--); else if ("object" === d) if (e.constructor === l) {
                        if (n = e._type, a = e._components.slice(), o = e._alpha, "gradient" === n) for (var g = 1, v = a.length; g < v; g++) {
                            var p = a[g];
                            p && (a[g] = p.clone())
                        }
                    } else if (e.constructor === R) n = "gradient", h = u; else {
                        n = "hue" in e ? "lightness" in e ? "hsl" : "hsb" : "gradient" in e || "stops" in e || "radial" in e ? "gradient" : "gray" in e ? "gray" : "rgb";
                        var m = i[n], y = s[n];
                        this._components = a = [];
                        for (var g = 0, v = m.length; g < v; g++) {
                            var w = e[m[g]];
                            null == w && !g && "gradient" === n && "stops" in e && (w = {
                                stops: e.stops,
                                radial: e.radial
                            }), w = y[g].call(this, w), null != w && (a[g] = w)
                        }
                        o = e.alpha
                    }
                    c && n && (f = 1)
                }
                if (this._type = n || "rgb", !a) {
                    this._components = a = [];
                    for (var y = s[this._type], g = 0, v = y.length; g < v; g++) {
                        var w = y[g].call(this, h && h[g]);
                        null != w && (a[g] = w)
                    }
                }
                return this._components = a, this._properties = i[this._type], this._alpha = o, c && (this.__read = f), this
            }, set: "#initialize", _serialize: function (t, e) {
                var n = this.getComponents();
                return r.serialize(/^(gray|rgb)$/.test(this._type) ? n : [this._type].concat(n), t, !0, e)
            }, _changed: function () {
                this._canvasStyle = null, this._owner && this._owner._changed(65)
            }, _convert: function (t) {
                var e;
                return this._type === t ? this._components.slice() : (e = u[this._type + "-" + t]) ? e.apply(this, this._components) : u["rgb-" + t].apply(this, u[this._type + "-rgb"].apply(this, this._components))
            }, convert: function (t) {
                return new D(t, this._convert(t), this._alpha)
            }, getType: function () {
                return this._type
            }, setType: function (t) {
                this._components = this._convert(t), this._properties = i[t], this._type = t
            }, getComponents: function () {
                var t = this._components.slice();
                return null != this._alpha && t.push(this._alpha), t
            }, getAlpha: function () {
                return null != this._alpha ? this._alpha : 1
            }, setAlpha: function (t) {
                this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed()
            }, hasAlpha: function () {
                return null != this._alpha
            }, equals: function (t) {
                var e = r.isPlainValue(t, !0) ? D.read(arguments) : t;
                return e === this || e && this._class === e._class && this._type === e._type && this.getAlpha() === e.getAlpha() && r.equals(this._components, e._components) || !1
            }, toString: function () {
                for (var t = this._properties, e = [], n = "gradient" === this._type, i = h.instance, r = 0, s = t.length; r < s; r++) {
                    var a = this._components[r];
                    null != a && e.push(t[r] + ": " + (n ? a : i.number(a)))
                }
                return null != this._alpha && e.push("alpha: " + i.number(this._alpha)), "{ " + e.join(", ") + " }"
            }, toCSS: function (t) {
                function e(t) {
                    return Math.round(255 * (t < 0 ? 0 : t > 1 ? 1 : t))
                }

                var n = this._convert("rgb"), i = t || null == this._alpha ? 1 : this._alpha;
                return n = [e(n[0]), e(n[1]), e(n[2])], i < 1 && n.push(i < 0 ? 0 : i), t ? "#" + ((1 << 24) + (n[0] << 16) + (n[1] << 8) + n[2]).toString(16).slice(1) : (4 == n.length ? "rgba(" : "rgb(") + n.join(",") + ")"
            }, toCanvasStyle: function (t, e) {
                if (this._canvasStyle) return this._canvasStyle;
                if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
                var n, i = this._components, r = i[0], s = r._stops, a = i[1], o = i[2], h = i[3],
                    u = e && e.inverted();
                if (u && (a = u._transformPoint(a), o = u._transformPoint(o), h && (h = u._transformPoint(h))), r._radial) {
                    var l = o.getDistance(a);
                    if (h) {
                        var c = h.subtract(a);
                        c.getLength() > l && (h = a.add(c.normalize(l - .1)))
                    }
                    var f = h || a;
                    n = t.createRadialGradient(f.x, f.y, 0, a.x, a.y, l)
                } else n = t.createLinearGradient(a.x, a.y, o.x, o.y);
                for (var d = 0, _ = s.length; d < _; d++) {
                    var g = s[d], v = g._offset;
                    n.addColorStop(null == v ? d / (_ - 1) : v, g._color.toCanvasStyle())
                }
                return this._canvasStyle = n
            }, transform: function (t) {
                if ("gradient" === this._type) {
                    for (var e = this._components, n = 1, i = e.length; n < i; n++) {
                        var r = e[n];
                        t._transformPoint(r, r, !0)
                    }
                    this._changed()
                }
            }, statics: {
                _types: i, random: function () {
                    var t = Math.random;
                    return new D(t(), t(), t())
                }
            }
        })
    }, new function () {
        var t = {
            add: function (t, e) {
                return t + e
            }, subtract: function (t, e) {
                return t - e
            }, multiply: function (t, e) {
                return t * e
            }, divide: function (t, e) {
                return t / e
            }
        };
        return r.each(t, function (t, e) {
            this[e] = function (e) {
                e = D.read(arguments);
                for (var n = this._type, i = this._components, r = e._convert(n), s = 0, a = i.length; s < a; s++) r[s] = t(i[s], r[s]);
                return new D(n, r, null != this._alpha ? t(this._alpha, e.getAlpha()) : null)
            }
        }, {})
    }), R = r.extend({
        _class: "Gradient", initialize: function (t, e) {
            this._id = l.get(), t && r.isPlainObject(t) && (this.set(t), t = e = null), null == this._stops && this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1)
        }, _serialize: function (t, e) {
            return e.add(this, function () {
                return r.serialize([this._stops, this._radial], t, !0, e)
            })
        }, _changed: function () {
            for (var t = 0, e = this._owners && this._owners.length; t < e; t++) this._owners[t]._changed()
        }, _addOwner: function (t) {
            this._owners || (this._owners = []), this._owners.push(t)
        }, _removeOwner: function (t) {
            var n = this._owners ? this._owners.indexOf(t) : -1;
            n != -1 && (this._owners.splice(n, 1), this._owners.length || (this._owners = e))
        }, clone: function () {
            for (var t = [], e = 0, n = this._stops.length; e < n; e++) t[e] = this._stops[e].clone();
            return new R(t, this._radial)
        }, getStops: function () {
            return this._stops
        }, setStops: function (t) {
            if (t.length < 2) throw new Error("Gradient stop list needs to contain at least two stops.");
            var n = this._stops;
            if (n) for (var i = 0, r = n.length; i < r; i++) n[i]._owner = e;
            n = this._stops = q.readList(t, 0, {clone: !0});
            for (var i = 0, r = n.length; i < r; i++) n[i]._owner = this;
            this._changed()
        }, getRadial: function () {
            return this._radial
        }, setRadial: function (t) {
            this._radial = t, this._changed()
        }, equals: function (t) {
            if (t === this) return !0;
            if (t && this._class === t._class) {
                var e = this._stops, n = t._stops, i = e.length;
                if (i === n.length) {
                    for (var r = 0; r < i; r++) if (!e[r].equals(n[r])) return !1;
                    return !0
                }
            }
            return !1
        }
    }), q = r.extend({
        _class: "GradientStop", initialize: function (t, n) {
            var i = t, r = n;
            "object" == typeof t && n === e && (Array.isArray(t) && "number" != typeof t[0] ? (i = t[0], r = t[1]) : ("color" in t || "offset" in t || "rampPoint" in t) && (i = t.color, r = t.offset || t.rampPoint || 0)), this.setColor(i), this.setOffset(r)
        }, clone: function () {
            return new q(this._color.clone(), this._offset)
        }, _serialize: function (t, e) {
            var n = this._color, i = this._offset;
            return r.serialize(null == i ? [n] : [n, i], t, !0, e)
        }, _changed: function () {
            this._owner && this._owner._changed(65)
        }, getOffset: function () {
            return this._offset
        }, setOffset: function (t) {
            this._offset = t, this._changed()
        }, getRampPoint: "#getOffset", setRampPoint: "#setOffset", getColor: function () {
            return this._color
        }, setColor: function () {
            var t = D.read(arguments, 0, {clone: !0});
            t && (t._owner = this), this._color = t, this._changed()
        }, equals: function (t) {
            return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1
        }
    }), V = r.extend(new function () {
        var t = {
            fillColor: null,
            fillRule: "nonzero",
            strokeColor: null,
            strokeWidth: 1,
            strokeCap: "butt",
            strokeJoin: "miter",
            strokeScaling: !0,
            miterLimit: 10,
            dashOffset: 0,
            dashArray: [],
            shadowColor: null,
            shadowBlur: 0,
            shadowOffset: new c,
            selectedColor: null
        }, n = r.set({}, t, {
            fontFamily: "sans-serif",
            fontWeight: "normal",
            fontSize: 12,
            leading: null,
            justification: "left"
        }), i = r.set({}, n, {fillColor: new D}), s = {
            strokeWidth: 97,
            strokeCap: 97,
            strokeJoin: 97,
            strokeScaling: 105,
            miterLimit: 97,
            fontFamily: 9,
            fontWeight: 9,
            fontSize: 9,
            font: 9,
            leading: 9,
            justification: 9
        }, a = {beans: !0}, o = {
            _class: "Style", beans: !0, initialize: function (e, r, s) {
                this._values = {}, this._owner = r, this._project = r && r._project || s || paper.project, this._defaults = !r || r instanceof x ? n : r instanceof j ? i : t, e && this.set(e)
            }
        };
        return r.each(n, function (t, n) {
            var i = /Color$/.test(n), h = "shadowOffset" === n, u = r.capitalize(n), l = s[n], f = "set" + u,
                d = "get" + u;
            o[f] = function (t) {
                var r = this._owner, s = r && r._children;
                if (s && s.length > 0 && !(r instanceof E)) for (var a = 0, o = s.length; a < o; a++) s[a]._style[f](t); else if (n in this._defaults) {
                    var h = this._values[n];
                    h !== t && (i && (h && h._owner !== e && (h._owner = e), t && t.constructor === D && (t._owner && (t = t.clone()), t._owner = r)), this._values[n] = t, r && r._changed(l || 65))
                }
            }, o[d] = function (t) {
                var s, a = this._owner, o = a && a._children;
                if (n in this._defaults && (!o || !o.length || t || a instanceof E)) {
                    var s = this._values[n];
                    if (s === e) s = this._defaults[n], s && s.clone && (s = s.clone()); else {
                        var u = i ? D : h ? c : null;
                        !u || s && s.constructor === u || (this._values[n] = s = u.read([s], 0, {
                            readNull: !0,
                            clone: !0
                        }), s && i && (s._owner = a))
                    }
                } else if (o) for (var l = 0, f = o.length; l < f; l++) {
                    var _ = o[l]._style[d]();
                    if (l) {
                        if (!r.equals(s, _)) return e
                    } else s = _
                }
                return s
            }, a[d] = function (t) {
                return this._style[d](t)
            }, a[f] = function (t) {
                this._style[f](t)
            }
        }), r.each({Font: "FontFamily", WindingRule: "FillRule"}, function (t, e) {
            var n = "get" + e, i = "set" + e;
            o[n] = a[n] = "#get" + t, o[i] = a[i] = "#set" + t
        }), w.inject(a), o
    }, {
        set: function (t) {
            var e = t instanceof V, n = e ? t._values : t;
            if (n) for (var i in n) if (i in this._defaults) {
                var r = n[i];
                this[i] = r && e && r.clone ? r.clone() : r
            }
        }, equals: function (t) {
            function n(t, n, i) {
                var s = t._values, a = n._values, o = n._defaults;
                for (var h in s) {
                    var u = s[h], l = a[h];
                    if (!(i && h in a || r.equals(u, l === e ? o[h] : l))) return !1
                }
                return !0
            }

            return t === this || t && this._class === t._class && n(this, t) && n(t, this, !0) || !1
        }, hasFill: function () {
            var t = this.getFillColor();
            return !!t && t.alpha > 0
        }, hasStroke: function () {
            var t = this.getStrokeColor();
            return !!t && t.alpha > 0 && this.getStrokeWidth() > 0
        }, hasShadow: function () {
            var t = this.getShadowColor();
            return !!t && t.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero())
        }, getView: function () {
            return this._project._view
        }, getFontStyle: function () {
            var t = this.getFontSize();
            return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily()
        }, getFont: "#getFontFamily", setFont: "#setFontFamily", getLeading: function bt() {
            var t = bt.base.call(this), e = this.getFontSize();
            return /pt|em|%|px/.test(e) && (e = this.getView().getPixelSize(e)), null != t ? t : 1.2 * e
        }
    }), U = new function () {
        function t(t, e, n, i) {
            for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), a = 0; a < 6; a++) {
                var o = r[a], h = o ? o + s : e;
                if (h in t) {
                    if (!n) return t[h];
                    t[h] = i;
                    break
                }
            }
        }

        return {
            getStyles: function (t) {
                var e = t && 9 !== t.nodeType ? t.ownerDocument : t, n = e && e.defaultView;
                return n && n.getComputedStyle(t, "")
            }, getBounds: function (t, e) {
                var n, i = t.ownerDocument, r = i.body, s = i.documentElement;
                try {
                    n = t.getBoundingClientRect()
                } catch (a) {
                    n = {left: 0, top: 0, width: 0, height: 0}
                }
                var o = n.left - (s.clientLeft || r.clientLeft || 0), h = n.top - (s.clientTop || r.clientTop || 0);
                if (!e) {
                    var u = i.defaultView;
                    o += u.pageXOffset || s.scrollLeft || r.scrollLeft, h += u.pageYOffset || s.scrollTop || r.scrollTop
                }
                return new g(o, h, n.width, n.height)
            }, getViewportBounds: function (t) {
                var e = t.ownerDocument, n = e.defaultView, i = e.documentElement;
                return new g(0, 0, n.innerWidth || i.clientWidth, n.innerHeight || i.clientHeight)
            }, getOffset: function (t, e) {
                return U.getBounds(t, e).getPoint()
            }, getSize: function (t) {
                return U.getBounds(t, !0).getSize()
            }, isInvisible: function (t) {
                return U.getSize(t).equals(new d(0, 0))
            }, isInView: function (t) {
                return !U.isInvisible(t) && U.getViewportBounds(t).intersects(U.getBounds(t, !0))
            }, isInserted: function (t) {
                return i.body.contains(t)
            }, getPrefixed: function (e, n) {
                return e && t(e, n)
            }, setPrefixed: function (e, n, i) {
                if ("object" == typeof n) for (var r in n) t(e, r, !0, n[r]); else t(e, n, !0, i)
            }
        }
    }, H = {
        add: function (t, e) {
            if (t) for (var n in e) for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.addEventListener(r[s], i, !1)
        }, remove: function (t, e) {
            if (t) for (var n in e) for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.removeEventListener(r[s], i, !1)
        }, getPoint: function (t) {
            var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t;
            return new c(e.pageX || e.clientX + i.documentElement.scrollLeft, e.pageY || e.clientY + i.documentElement.scrollTop)
        }, getTarget: function (t) {
            return t.target || t.srcElement
        }, getRelatedTarget: function (t) {
            return t.relatedTarget || t.toElement
        }, getOffset: function (t, e) {
            return H.getPoint(t).subtract(U.getOffset(e || H.getTarget(t)))
        }
    };
    H.requestAnimationFrame = new function () {
        function t() {
            var e = s;
            s = [];
            for (var n = 0, a = e.length; n < a; n++) e[n]();
            r = i && s.length, r && i(t)
        }

        var e, i = U.getPrefixed(n, "requestAnimationFrame"), r = !1, s = [];
        return function (n) {
            s.push(n), i ? r || (i(t), r = !0) : e || (e = setInterval(t, 1e3 / 60))
        }
    };
    var Z = r.extend(s, {
        _class: "View", initialize: function Ct(t, e) {
            function r(t) {
                return e[t] || parseInt(e.getAttribute(t), 10)
            }

            function s() {
                var t = U.getSize(e);
                return t.isNaN() || t.isZero() ? new d(r("width"), r("height")) : t
            }

            var o;
            if (n && e) {
                this._id = e.getAttribute("id"), null == this._id && e.setAttribute("id", this._id = "view-" + Ct._id++), H.add(e, this._viewEvents);
                var h = "none";
                if (U.setPrefixed(e.style, {
                    userDrag: h,
                    userSelect: h,
                    touchCallout: h,
                    contentZooming: h,
                    tapHighlightColor: "rgba(0,0,0,0)"
                }), a.hasAttribute(e, "resize")) {
                    var u = this;
                    H.add(n, this._windowEvents = {
                        resize: function () {
                            u.setViewSize(s())
                        }
                    })
                }
                if (o = s(), a.hasAttribute(e, "stats") && "undefined" != typeof Stats) {
                    this._stats = new Stats;
                    var l = this._stats.domElement, c = l.style, f = U.getOffset(e);
                    c.position = "absolute", c.left = f.x + "px", c.top = f.y + "px", i.body.appendChild(l)
                }
            } else o = new d(e), e = null;
            this._project = t, this._scope = t._scope, this._element = e, this._pixelRatio || (this._pixelRatio = n && n.devicePixelRatio || 1), this._setElementSize(o.width, o.height), this._viewSize = o, Ct._views.push(this), Ct._viewsById[this._id] = this, (this._matrix = new p)._owner = this, Ct._focused || (Ct._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = {
                "native": {},
                virtual: {}
            }, this._autoUpdate = !paper.agent.node, this._needsUpdate = !1
        }, remove: function () {
            if (!this._project) return !1;
            Z._focused === this && (Z._focused = null), Z._views.splice(Z._views.indexOf(this), 1), delete Z._viewsById[this._id];
            var t = this._project;
            return t._view === this && (t._view = null), H.remove(this._element, this._viewEvents), H.remove(n, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0
        }, _events: r.each(w._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), function (t) {
            this[t] = {}
        }, {
            onFrame: {
                install: function () {
                    this.play()
                }, uninstall: function () {
                    this.pause()
                }
            }
        }), _animate: !1, _time: 0, _count: 0, getAutoUpdate: function () {
            return this._autoUpdate
        }, setAutoUpdate: function (t) {
            this._autoUpdate = t, t && this.requestUpdate()
        }, update: function () {
        }, draw: function () {
            this.update()
        }, requestUpdate: function () {
            if (!this._requested) {
                var t = this;
                H.requestAnimationFrame(function () {
                    if (t._requested = !1, t._animate) {
                        t.requestUpdate();
                        var e = t._element;
                        U.getPrefixed(i, "hidden") && "true" !== a.getAttribute(e, "keepalive") || !U.isInView(e) || t._handleFrame()
                    }
                    t._autoUpdate && t.update()
                }), this._requested = !0
            }
        }, play: function () {
            this._animate = !0, this.requestUpdate()
        }, pause: function () {
            this._animate = !1
        }, _handleFrame: function () {
            paper = this._scope;
            var t = Date.now() / 1e3, e = this._last ? t - this._last : 0;
            this._last = t, this.emit("frame", new r({
                delta: e,
                time: this._time += e,
                count: this._count++
            })), this._stats && this._stats.update()
        }, _animateItem: function (t, e) {
            var n = this._frameItems;
            e ? (n[t._id] = {
                item: t,
                time: 0,
                count: 0
            }, 1 === ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete n[t._id], 0 === --this._frameItemCount && this.off("frame", this._handleFrameItems))
        }, _handleFrameItems: function (t) {
            for (var e in this._frameItems) {
                var n = this._frameItems[e];
                n.item.emit("frame", new r(t, {time: n.time += t.delta, count: n.count++}))
            }
        }, _changed: function () {
            this._project._changed(2049), this._bounds = this._decomposed = e
        }, getElement: function () {
            return this._element
        }, getPixelRatio: function () {
            return this._pixelRatio
        }, getResolution: function () {
            return 72 * this._pixelRatio
        }, getViewSize: function () {
            var t = this._viewSize;
            return new _(t.width, t.height, this, "setViewSize")
        }, setViewSize: function () {
            var t = d.read(arguments), e = t.subtract(this._viewSize);
            e.isZero() || (this._setElementSize(t.width, t.height), this._viewSize.set(t), this._changed(), this.emit("resize", {
                size: t,
                delta: e
            }), this._autoUpdate && this.update())
        }, _setElementSize: function (t, e) {
            var n = this._element;
            n && (n.width !== t && (n.width = t), n.height !== e && (n.height = e))
        }, getBounds: function () {
            return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new g(new c, this._viewSize))), this._bounds
        }, getSize: function () {
            return this.getBounds().getSize()
        }, isVisible: function () {
            return U.isInView(this._element)
        }, isInserted: function () {
            return U.isInserted(this._element)
        }, getPixelSize: function (t) {
            var e, n = this._element;
            if (n) {
                var r = n.parentNode, s = i.createElement("div");
                s.style.fontSize = t, r.appendChild(s), e = parseFloat(U.getStyles(s).fontSize), r.removeChild(s)
            } else e = parseFloat(e);
            return e
        }, getTextWidth: function (t, e) {
            return 0
        }
    }, r.each(["rotate", "scale", "shear", "skew"], function (t) {
        var e = "rotate" === t;
        this[t] = function () {
            var n = (e ? r : c).read(arguments), i = c.read(arguments, 0, {readNull: !0});
            return this.transform((new p)[t](n, i || this.getCenter(!0)))
        }
    }, {
        _decompose: function () {
            return this._decomposed || (this._decomposed = this._matrix.decompose())
        }, translate: function () {
            var t = new p;
            return this.transform(t.translate.apply(t, arguments))
        }, getCenter: function () {
            return this.getBounds().getCenter()
        }, setCenter: function () {
            var t = c.read(arguments);
            this.translate(this.getCenter().subtract(t))
        }, getZoom: function () {
            var t = this._decompose(), e = t && t.scaling;
            return e ? (e.x + e.y) / 2 : 0
        }, setZoom: function (t) {
            this.transform((new p).scale(t / this.getZoom(), this.getCenter()))
        }, getRotation: function () {
            var t = this._decompose();
            return t && t.rotation
        }, setRotation: function (t) {
            var e = this.getRotation();
            null != e && null != t && this.rotate(t - e)
        }, getScaling: function () {
            var t = this._decompose(), n = t && t.scaling;
            return n ? new f(n.x, n.y, this, "setScaling") : e
        }, setScaling: function () {
            var t = this.getScaling(), e = c.read(arguments, 0, {clone: !0, readNull: !0});
            t && e && this.scale(e.x / t.x, e.y / t.y)
        }, getMatrix: function () {
            return this._matrix
        }, setMatrix: function () {
            var t = this._matrix;
            t.initialize.apply(t, arguments)
        }, transform: function (t) {
            this._matrix.append(t)
        }, scrollBy: function () {
            this.translate(c.read(arguments).negate())
        }
    }), {
        projectToView: function () {
            return this._matrix._transformPoint(c.read(arguments))
        }, viewToProject: function () {
            return this._matrix._inverseTransform(c.read(arguments))
        }, getEventPoint: function (t) {
            return this.viewToProject(H.getOffset(t, this._element))
        }
    }, {
        statics: {
            _views: [], _viewsById: {}, _id: 0, create: function (t, e) {
                i && "string" == typeof e && (e = i.getElementById(e));
                var r = n ? W : Z;
                return new r(t, e)
            }
        }
    }, new function () {
        function t(t) {
            var e = H.getTarget(t);
            return e.getAttribute && Z._viewsById[e.getAttribute("id")]
        }

        function e() {
            var t = Z._focused;
            if (!t || !t.isVisible()) for (var e = 0, n = Z._views.length; e < n; e++) if ((t = Z._views[e]).isVisible()) {
                Z._focused = h = t;
                break
            }
        }

        function r(t, e, n) {
            t._handleMouseEvent("mousemove", e, n)
        }

        function s(t, e, n, i, r, s, a) {
            function o(t, n) {
                if (t.responds(n)) {
                    if (h || (h = new X(n, i, r, e || t, s ? r.subtract(s) : null)), t.emit(n, h) && (I = !0, h.prevented && (P = !0), h.stopped)) return u = !0
                } else {
                    var a = A[n];
                    if (a) return o(t, a)
                }
            }

            for (var h, u = !1; t && t !== a && !o(t, n);) t = t._parent;
            return u
        }

        function a(t, e, n, i, r, a) {
            return t._project.removeOn(n), P = I = !1, b && s(b, null, n, i, r, a) || e && e !== b && !e.isDescendant(b) && s(e, null, n, i, r, a, b) || s(t, b || e || t, n, i, r, a)
        }

        if (n) {
            var o, h, u, l, c, f = !1, d = !1, _ = n.navigator;
            _.pointerEnabled || _.msPointerEnabled ? (u = "pointerdown MSPointerDown", l = "pointermove MSPointerMove", c = "pointerup pointercancel MSPointerUp MSPointerCancel") : (u = "touchstart", l = "touchmove", c = "touchend touchcancel", "ontouchstart" in n && _.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (u += " mousedown", l += " mousemove", c += " mouseup"));
            var g = {}, v = {
                mouseout: function (t) {
                    var e = Z._focused, n = H.getRelatedTarget(t);
                    if (e && (!n || "HTML" === n.nodeName)) {
                        var i = H.getOffset(t, e._element), s = i.x, a = Math.abs, o = a(s), h = 1 << 25, u = o - h;
                        i.x = a(u) < o ? u * (s < 0 ? -1 : 1) : s, r(e, t, e.viewToProject(i))
                    }
                }, scroll: e
            };
            g[u] = function (e) {
                var n = Z._focused = t(e);
                f || (f = !0, n._handleMouseEvent("mousedown", e))
            }, v[l] = function (n) {
                var i = Z._focused;
                if (!d) {
                    var s = t(n);
                    s ? i !== s && (i && r(i, n), o || (o = i), i = Z._focused = h = s) : h && h === i && (o && !o.isInserted() && (o = null), i = Z._focused = o, o = null, e())
                }
                i && r(i, n)
            }, v[u] = function () {
                d = !0
            }, v[c] = function (t) {
                var e = Z._focused;
                e && f && e._handleMouseEvent("mouseup", t), d = f = !1
            }, H.add(i, v), H.add(n, {load: e});
            var p, m, y, w, x, b, C, S, k, I = !1, P = !1, A = {doubleclick: "click", mousedrag: "mousemove"}, M = !1,
                T = {
                    mousedown: {mousedown: 1, mousedrag: 1, click: 1, doubleclick: 1},
                    mouseup: {mouseup: 1, mousedrag: 1, click: 1, doubleclick: 1},
                    mousemove: {mousedrag: 1, mousemove: 1, mouseenter: 1, mouseleave: 1}
                };
            return {
                _viewEvents: g, _handleMouseEvent: function (t, e, n) {
                    function i(t) {
                        return r.virtual[t] || l.responds(t) || u && u.responds(t)
                    }

                    var r = this._itemEvents, o = r["native"][t], h = "mousemove" === t, u = this._scope.tool, l = this;
                    h && f && i("mousedrag") && (t = "mousedrag"), n || (n = this.getEventPoint(e));
                    var c = this.getBounds().contains(n),
                        d = o && c && l._project.hitTest(n, {tolerance: 0, fill: !0, stroke: !0}),
                        _ = d && d.item || null, g = !1, v = {};
                    if (v[t.substr(5)] = !0, o && _ !== x && (x && s(x, null, "mouseleave", e, n), _ && s(_, null, "mouseenter", e, n), x = _), M ^ c && (s(this, null, c ? "mouseenter" : "mouseleave", e, n), p = c ? this : null, g = !0), !c && !v.drag || n.equals(y) || (a(this, _, h ? t : "mousemove", e, n, y), g = !0), M = c, v.down && c || v.up && m) {
                        if (a(this, _, t, e, n, m), v.down) {
                            if (k = _ === C && Date.now() - S < 300, w = C = _, !P && _) {
                                for (var A = _; A && !A.responds("mousedrag");) A = A._parent;
                                A && (b = _)
                            }
                            m = n
                        } else v.up && (P || _ !== w || (S = Date.now(), a(this, _, k ? "doubleclick" : "click", e, n, m), k = !1), w = b = null);
                        M = !1, g = !0
                    }
                    y = n, g && u && (I = u._handleMouseEvent(t, e, n, v) || I), (I && !v.move || v.down && i("mouseup")) && e.preventDefault()
                }, _handleKeyEvent: function (t, e, n, i) {
                    function r(r) {
                        r.responds(t) && (paper = a, r.emit(t, s = s || new G(t, e, n, i)))
                    }

                    var s, a = this._scope, o = a.tool;
                    this.isVisible() && (r(this), o && o.responds(t) && r(o))
                }, _countItemEvent: function (t, e) {
                    var n = this._itemEvents, i = n["native"], r = n.virtual;
                    for (var s in T) i[s] = (i[s] || 0) + (T[s][t] || 0) * e;
                    r[t] = (r[t] || 0) + e
                }, statics: {updateFocus: e}
            }
        }
    }), W = Z.extend({
        _class: "CanvasView", initialize: function (t, e) {
            if (!(e instanceof n.HTMLCanvasElement)) {
                var i = d.read(arguments, 1);
                if (i.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + r.slice(arguments, 1));
                e = tt.getCanvas(i)
            }
            var s = this._context = e.getContext("2d");
            if (s.save(), this._pixelRatio = 1, !/^off|false$/.test(a.getAttribute(e, "hidpi"))) {
                var o = n.devicePixelRatio || 1, h = U.getPrefixed(s, "backingStorePixelRatio") || 1;
                this._pixelRatio = o / h
            }
            Z.call(this, t, e), this._needsUpdate = !0
        }, remove: function St() {
            return this._context.restore(), St.base.call(this)
        }, _setElementSize: function kt(t, e) {
            var n = this._pixelRatio;
            if (kt.base.call(this, t * n, e * n), 1 !== n) {
                var i = this._element, r = this._context;
                if (!a.hasAttribute(i, "resize")) {
                    var s = i.style;
                    s.width = t + "px", s.height = e + "px"
                }
                r.restore(), r.save(), r.scale(n, n)
            }
        }, getPixelSize: function It(t) {
            var e, n = paper.agent;
            if (n && n.firefox) e = It.base.call(this, t); else {
                var i = this._context, r = i.font;
                i.font = t + " serif", e = parseFloat(i.font), i.font = r
            }
            return e
        }, getTextWidth: function (t, e) {
            var n = this._context, i = n.font, r = 0;
            n.font = t;
            for (var s = 0, a = e.length; s < a; s++) r = Math.max(r, n.measureText(e[s]).width);
            return n.font = i, r
        }, update: function () {
            if (!this._needsUpdate) return !1;
            var t = this._project, e = this._context, n = this._viewSize;
            return e.clearRect(0, 0, n.width + 1, n.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0
        }
    }), $ = r.extend({
        _class: "Event", initialize: function (t) {
            this.event = t, this.type = t && t.type
        }, prevented: !1, stopped: !1, preventDefault: function () {
            this.prevented = !0, this.event.preventDefault()
        }, stopPropagation: function () {
            this.stopped = !0, this.event.stopPropagation()
        }, stop: function () {
            this.stopPropagation(), this.preventDefault()
        }, getTimeStamp: function () {
            return this.event.timeStamp
        }, getModifiers: function () {
            return J.modifiers
        }
    }), G = $.extend({
        _class: "KeyEvent", initialize: function (t, e, n, i) {
            this.type = t, this.event = e, this.key = n, this.character = i
        }, toString: function () {
            return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }"
        }
    }), J = new function () {
        function t(t) {
            var n = t.key || t.keyIdentifier;
            return n = /^U\+/.test(n) ? String.fromCharCode(parseInt(n.substr(2), 16)) : /^Arrow[A-Z]/.test(n) ? n.substr(5) : "Unidentified" === n || n === e ? String.fromCharCode(t.keyCode) : n, h[n] || (n.length > 1 ? r.hyphenate(n) : n.toLowerCase())
        }

        function s(t, e, n, i) {
            var o, h = Z._focused;
            if (l[e] = t, t ? c[e] = n : delete c[e], e.length > 1 && (o = r.camelize(e)) in f) {
                f[o] = t;
                var u = paper && paper.agent;
                if ("meta" === o && u && u.mac) if (t) a = {}; else {
                    for (var d in a) d in c && s(!1, d, a[d], i);
                    a = null
                }
            } else t && a && (a[e] = n);
            h && h._handleKeyEvent(t ? "keydown" : "keyup", i, e, n)
        }

        var a, o, h = {
            "\t": "tab",
            " ": "space",
            "\b": "backspace",
            "\x7f": "delete",
            Spacebar: "space",
            Del: "delete",
            Win: "meta",
            Esc: "escape"
        }, u = {tab: "\t", space: " ", enter: "\r"}, l = {}, c = {}, f = new r({
            shift: !1,
            control: !1,
            alt: !1,
            meta: !1,
            capsLock: !1,
            space: !1
        }).inject({
            option: {
                get: function () {
                    return this.alt
                }
            }, command: {
                get: function () {
                    var t = paper && paper.agent;
                    return t && t.mac ? this.meta : this.control
                }
            }
        });
        return H.add(i, {
            keydown: function (e) {
                var n = t(e), i = paper && paper.agent;
                n.length > 1 || i && i.chrome && (e.altKey || i.mac && e.metaKey || !i.mac && e.ctrlKey) ? s(!0, n, u[n] || (n.length > 1 ? "" : n), e) : o = n
            }, keypress: function (e) {
                if (o) {
                    var n = t(e), i = e.charCode, r = i >= 32 ? String.fromCharCode(i) : n.length > 1 ? "" : n;
                    n !== o && (n = r.toLowerCase()), s(!0, n, r, e), o = null
                }
            }, keyup: function (e) {
                var n = t(e);
                n in c && s(!1, n, c[n], e)
            }
        }), H.add(n, {
            blur: function (t) {
                for (var e in c) s(!1, e, c[e], t)
            }
        }), {
            modifiers: f, isDown: function (t) {
                return !!l[t]
            }
        }
    }, X = $.extend({
        _class: "MouseEvent", initialize: function (t, e, n, i, r) {
            this.type = t, this.event = e, this.point = n, this.target = i, this.delta = r
        }, toString: function () {
            return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }"
        }
    }), K = $.extend({
        _class: "ToolEvent", _item: null, initialize: function (t, e, n) {
            this.tool = t, this.type = e, this.event = n
        }, _choosePoint: function (t, e) {
            return t ? t : e ? e.clone() : null
        }, getPoint: function () {
            return this._choosePoint(this._point, this.tool._point)
        }, setPoint: function (t) {
            this._point = t
        }, getLastPoint: function () {
            return this._choosePoint(this._lastPoint, this.tool._lastPoint)
        }, setLastPoint: function (t) {
            this._lastPoint = t
        }, getDownPoint: function () {
            return this._choosePoint(this._downPoint, this.tool._downPoint)
        }, setDownPoint: function (t) {
            this._downPoint = t
        }, getMiddlePoint: function () {
            return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint
        }, setMiddlePoint: function (t) {
            this._middlePoint = t
        }, getDelta: function () {
            return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta
        }, setDelta: function (t) {
            this._delta = t
        }, getCount: function () {
            return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"]
        }, setCount: function (t) {
            this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t
        }, getItem: function () {
            if (!this._item) {
                var t = this.tool._scope.project.hitTest(this.getPoint());
                if (t) {
                    for (var e = t.item, n = e._parent; /^(Group|CompoundPath)$/.test(n._class);) e = n, n = n._parent;
                    this._item = e
                }
            }
            return this._item
        }, setItem: function (t) {
            this._item = t
        }, toString: function () {
            return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }"
        }
    }), Y = o.extend({
        _class: "Tool",
        _list: "tools",
        _reference: "tool",
        _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"],
        initialize: function (t) {
            o.call(this), this._moveCount = -1, this._downCount = -1, this.set(t)
        },
        getMinDistance: function () {
            return this._minDistance
        },
        setMinDistance: function (t) {
            this._minDistance = t, null != t && null != this._maxDistance && t > this._maxDistance && (this._maxDistance = t)
        },
        getMaxDistance: function () {
            return this._maxDistance
        },
        setMaxDistance: function (t) {
            this._maxDistance = t, null != this._minDistance && null != t && t < this._minDistance && (this._minDistance = t)
        },
        getFixedDistance: function () {
            return this._minDistance == this._maxDistance ? this._minDistance : null
        },
        setFixedDistance: function (t) {
            this._minDistance = this._maxDistance = t
        },
        _handleMouseEvent: function (t, e, n, i) {
            function r(t, e) {
                var r = n, s = a ? c._point : c._downPoint || r;
                if (a) {
                    if (c._moveCount && r.equals(s)) return !1;
                    if (s && (null != t || null != e)) {
                        var o = r.subtract(s), h = o.getLength();
                        if (h < (t || 0)) return !1;
                        e && (r = s.add(o.normalize(Math.min(h, e))))
                    }
                    c._moveCount++
                }
                return c._point = r, c._lastPoint = s || r, i.down && (c._moveCount = -1, c._downPoint = r, c._downCount++), !0
            }

            function s() {
                o && (l = c.emit(t, new K(c, t, e)) || l)
            }

            paper = this._scope, i.drag && !this.responds(t) && (t = "mousemove");
            var a = i.move || i.drag, o = this.responds(t), h = this.minDistance, u = this.maxDistance, l = !1,
                c = this;
            if (i.down) r(), s(); else if (i.up) r(null, u), s(); else if (o) for (; r(h, u);) s();
            return l
        }
    }), Q = {
        request: function (e) {
            var n = new t.XMLHttpRequest;
            return n.open((e.method || "get").toUpperCase(), e.url, r.pick(e.async, !0)), e.mimeType && n.overrideMimeType(e.mimeType), n.onload = function () {
                var t = n.status;
                0 === t || 200 === t ? e.onLoad && e.onLoad.call(n, n.responseText) : n.onerror()
            }, n.onerror = function () {
                var t = n.status, i = 'Could not load "' + e.url + '" (Status: ' + t + ")";
                if (!e.onError) throw new Error(i);
                e.onError(i, t)
            }, n.send(null)
        }
    }, tt = {
        canvases: [], getCanvas: function (t, e) {
            if (!n) return null;
            var r, s = !0;
            "object" == typeof t && (e = t.height, t = t.width), this.canvases.length ? r = this.canvases.pop() : (r = i.createElement("canvas"), s = !1);
            var a = r.getContext("2d");
            if (!a) throw new Error("Canvas " + r + " is unable to provide a 2D context.");
            return r.width === t && r.height === e ? s && a.clearRect(0, 0, t + 1, e + 1) : (r.width = t, r.height = e), a.save(), r
        }, getContext: function (t, e) {
            var n = this.getCanvas(t, e);
            return n ? n.getContext("2d") : null
        }, release: function (t) {
            var e = t && t.canvas ? t.canvas : t;
            e && e.getContext && (e.getContext("2d").restore(), this.canvases.push(e))
        }
    }, et = new function () {
        function t(t, e, n) {
            return .2989 * t + .587 * e + .114 * n
        }

        function e(e, n, i, r) {
            var s = r - t(e, n, i);
            d = e + s, _ = n + s, g = i + s;
            var r = t(d, _, g), a = v(d, _, g), o = p(d, _, g);
            if (a < 0) {
                var h = r - a;
                d = r + (d - r) * r / h, _ = r + (_ - r) * r / h, g = r + (g - r) * r / h
            }
            if (o > 255) {
                var u = 255 - r, l = o - r;
                d = r + (d - r) * u / l, _ = r + (_ - r) * u / l, g = r + (g - r) * u / l
            }
        }

        function n(t, e, n) {
            return p(t, e, n) - v(t, e, n)
        }

        function i(t, e, n, i) {
            var r, s = [t, e, n], a = p(t, e, n), o = v(t, e, n);
            o = o === t ? 0 : o === e ? 1 : 2, a = a === t ? 0 : a === e ? 1 : 2, r = 0 === v(o, a) ? 1 === p(o, a) ? 2 : 1 : 0, s[a] > s[o] ? (s[r] = (s[r] - s[o]) * i / (s[a] - s[o]), s[a] = i) : s[r] = s[a] = 0, s[o] = 0, d = s[0], _ = s[1], g = s[2]
        }

        var s, a, o, h, u, l, c, f, d, _, g, v = Math.min, p = Math.max, m = Math.abs, y = {
                multiply: function () {
                    d = u * s / 255, _ = l * a / 255, g = c * o / 255
                }, screen: function () {
                    d = u + s - u * s / 255, _ = l + a - l * a / 255, g = c + o - c * o / 255
                }, overlay: function () {
                    d = u < 128 ? 2 * u * s / 255 : 255 - 2 * (255 - u) * (255 - s) / 255, _ = l < 128 ? 2 * l * a / 255 : 255 - 2 * (255 - l) * (255 - a) / 255, g = c < 128 ? 2 * c * o / 255 : 255 - 2 * (255 - c) * (255 - o) / 255
                }, "soft-light": function () {
                    var t = s * u / 255;
                    d = t + u * (255 - (255 - u) * (255 - s) / 255 - t) / 255, t = a * l / 255, _ = t + l * (255 - (255 - l) * (255 - a) / 255 - t) / 255, t = o * c / 255, g = t + c * (255 - (255 - c) * (255 - o) / 255 - t) / 255
                }, "hard-light": function () {
                    d = s < 128 ? 2 * s * u / 255 : 255 - 2 * (255 - s) * (255 - u) / 255, _ = a < 128 ? 2 * a * l / 255 : 255 - 2 * (255 - a) * (255 - l) / 255, g = o < 128 ? 2 * o * c / 255 : 255 - 2 * (255 - o) * (255 - c) / 255
                }, "color-dodge": function () {
                    d = 0 === u ? 0 : 255 === s ? 255 : v(255, 255 * u / (255 - s)), _ = 0 === l ? 0 : 255 === a ? 255 : v(255, 255 * l / (255 - a)), g = 0 === c ? 0 : 255 === o ? 255 : v(255, 255 * c / (255 - o))
                }, "color-burn": function () {
                    d = 255 === u ? 255 : 0 === s ? 0 : p(0, 255 - 255 * (255 - u) / s), _ = 255 === l ? 255 : 0 === a ? 0 : p(0, 255 - 255 * (255 - l) / a), g = 255 === c ? 255 : 0 === o ? 0 : p(0, 255 - 255 * (255 - c) / o)
                }, darken: function () {
                    d = u < s ? u : s, _ = l < a ? l : a, g = c < o ? c : o
                }, lighten: function () {
                    d = u > s ? u : s, _ = l > a ? l : a, g = c > o ? c : o
                }, difference: function () {
                    d = u - s, d < 0 && (d = -d), _ = l - a, _ < 0 && (_ = -_), g = c - o, g < 0 && (g = -g)
                }, exclusion: function () {
                    d = u + s * (255 - u - u) / 255, _ = l + a * (255 - l - l) / 255, g = c + o * (255 - c - c) / 255
                }, hue: function () {
                    i(s, a, o, n(u, l, c)), e(d, _, g, t(u, l, c))
                }, saturation: function () {
                    i(u, l, c, n(s, a, o)), e(d, _, g, t(u, l, c))
                }, luminosity: function () {
                    e(u, l, c, t(s, a, o))
                }, color: function () {
                    e(s, a, o, t(u, l, c))
                }, add: function () {
                    d = v(u + s, 255), _ = v(l + a, 255), g = v(c + o, 255)
                }, subtract: function () {
                    d = p(u - s, 0), _ = p(l - a, 0), g = p(c - o, 0)
                }, average: function () {
                    d = (u + s) / 2, _ = (l + a) / 2, g = (c + o) / 2
                }, negation: function () {
                    d = 255 - m(255 - s - u), _ = 255 - m(255 - a - l), g = 255 - m(255 - o - c)
                }
            },
            w = this.nativeModes = r.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function (t) {
                this[t] = !0
            }, {}), x = tt.getContext(1, 1);
        x && (r.each(y, function (t, e) {
            var n = "darken" === e, i = !1;
            x.save();
            try {
                x.fillStyle = n ? "#300" : "#a00", x.fillRect(0, 0, 1, 1), x.globalCompositeOperation = e, x.globalCompositeOperation === e && (x.fillStyle = n ? "#a00" : "#300", x.fillRect(0, 0, 1, 1), i = x.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51)
            } catch (r) {
            }
            x.restore(), w[e] = i
        }), tt.release(x)), this.process = function (t, e, n, i, r) {
            var v = e.canvas, p = "normal" === t;
            if (p || w[t]) n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.globalAlpha = i, p || (n.globalCompositeOperation = t), n.drawImage(v, r.x, r.y), n.restore(); else {
                var m = y[t];
                if (!m) return;
                for (var x = n.getImageData(r.x, r.y, v.width, v.height), b = x.data, C = e.getImageData(0, 0, v.width, v.height).data, S = 0, k = b.length; S < k; S += 4) {
                    s = C[S], u = b[S], a = C[S + 1], l = b[S + 1], o = C[S + 2], c = b[S + 2], h = C[S + 3], f = b[S + 3], m();
                    var I = h * i / 255, P = 1 - I;
                    b[S] = I * d + P * u, b[S + 1] = I * _ + P * l, b[S + 2] = I * g + P * c, b[S + 3] = h * i + P * f
                }
                n.putImageData(x, r.x, r.y)
            }
        }
    }, nt = new function () {
        function t(t, e, s) {
            return n(i.createElementNS(r, t), e, s)
        }

        function e(t, e) {
            var n = o[e], i = n ? t.getAttributeNS(n, e) : t.getAttribute(e);
            return "null" === i ? null : i
        }

        function n(t, e, n) {
            for (var i in e) {
                var r = e[i], s = o[i];
                "number" == typeof r && n && (r = n.number(r)), s ? t.setAttributeNS(s, i, r) : t.setAttribute(i, r)
            }
            return t
        }

        var r = "http://www.w3.org/2000/svg", s = "http://www.w3.org/2000/xmlns", a = "http://www.w3.org/1999/xlink",
            o = {href: a, xlink: s, xmlns: s + "/", "xmlns:xlink": s + "/"};
        return {svg: r, xmlns: s, xlink: a, create: t, get: e, set: n}
    }, it = r.each({
        fillColor: ["fill", "color"],
        fillRule: ["fill-rule", "string"],
        strokeColor: ["stroke", "color"],
        strokeWidth: ["stroke-width", "number"],
        strokeCap: ["stroke-linecap", "string"],
        strokeJoin: ["stroke-linejoin", "string"],
        strokeScaling: ["vector-effect", "lookup", {"true": "none", "false": "non-scaling-stroke"}, function (t, e) {
            return !e && (t instanceof O || t instanceof C || t instanceof j)
        }],
        miterLimit: ["stroke-miterlimit", "number"],
        dashArray: ["stroke-dasharray", "array"],
        dashOffset: ["stroke-dashoffset", "number"],
        fontFamily: ["font-family", "string"],
        fontWeight: ["font-weight", "string"],
        fontSize: ["font-size", "number"],
        justification: ["text-anchor", "lookup", {left: "start", center: "middle", right: "end"}],
        opacity: ["opacity", "number"],
        blendMode: ["mix-blend-mode", "style"]
    }, function (t, e) {
        var n = r.capitalize(e), i = t[2];
        this[e] = {
            type: t[1], property: e, attribute: t[0], toSVG: i, fromSVG: i && r.each(i, function (t, e) {
                this[t] = e
            }, {}), exportFilter: t[3], get: "get" + n, set: "set" + n
        }
    }, {});
    return new function () {
        function e(t, e, n) {
            var i = new r, s = t.getTranslation();
            if (e) {
                t = t._shiftless();
                var a = t._inverseTransform(s);
                i[n ? "cx" : "x"] = a.x, i[n ? "cy" : "y"] = a.y, s = null
            }
            if (!t.isIdentity()) {
                var o = t.decompose();
                if (o) {
                    var h = [], l = o.rotation, c = o.scaling, f = o.skewing;
                    s && !s.isZero() && h.push("translate(" + S.point(s) + ")"), l && h.push("rotate(" + S.number(l) + ")"), u.isZero(c.x - 1) && u.isZero(c.y - 1) || h.push("scale(" + S.point(c) + ")"), f.x && h.push("skewX(" + S.number(f.x) + ")"), f.y && h.push("skewY(" + S.number(f.y) + ")"), i.transform = h.join(" ")
                } else i.transform = "matrix(" + t.getValues().join(",") + ")"
            }
            return i
        }

        function n(t, n) {
            for (var i = e(t._matrix), r = t._children, s = nt.create("g", i, S), a = 0, o = r.length; a < o; a++) {
                var h = r[a], u = b(h, n);
                if (u) if (h.isClipMask()) {
                    var l = nt.create("clipPath");
                    l.appendChild(u), m(h, l, "clip"), nt.set(s, {"clip-path": "url(#" + l.id + ")"})
                } else s.appendChild(u)
            }
            return s
        }

        function i(t, n) {
            var i = e(t._matrix, !0), r = t.getSize(), s = t.getImage();
            return i.x -= r.width / 2, i.y -= r.height / 2, i.width = r.width, i.height = r.height, i.href = 0 == n.embedImages && s && s.src || t.toDataURL(), nt.create("image", i, S)
        }

        function s(t, n) {
            var i = n.matchShapes;
            if (i) {
                var r = t.toShape(!1);
                if (r) return a(r, n)
            }
            var s, o = t._segments, h = o.length, u = e(t._matrix);
            if (i && h >= 2 && !t.hasHandles()) if (h > 2) {
                s = t._closed ? "polygon" : "polyline";
                for (var l = [], c = 0; c < h; c++) l.push(S.point(o[c]._point));
                u.points = l.join(" ")
            } else {
                s = "line";
                var f = o[0]._point, d = o[1]._point;
                u.set({x1: f.x, y1: f.y, x2: d.x, y2: d.y})
            } else s = "path", u.d = t.getPathData(null, n.precision);
            return nt.create(s, u, S)
        }

        function a(t) {
            var n = t._type, i = t._radius, r = e(t._matrix, !0, "rectangle" !== n);
            if ("rectangle" === n) {
                n = "rect";
                var s = t._size, a = s.width, o = s.height;
                r.x -= a / 2, r.y -= o / 2, r.width = a, r.height = o, i.isZero() && (i = null)
            }
            return i && ("circle" === n ? r.r = i : (r.rx = i.width, r.ry = i.height)), nt.create(n, r, S)
        }

        function o(t, n) {
            var i = e(t._matrix), r = t.getPathData(null, n.precision);
            return r && (i.d = r), nt.create("path", i, S)
        }

        function c(t, n) {
            var i = e(t._matrix, !0), r = t._definition, s = v(r, "symbol"), a = r._item, o = a.getBounds();
            return s || (s = nt.create("symbol", {viewBox: S.rectangle(o)}), s.appendChild(b(a, n)), m(r, s, "symbol")), i.href = "#" + s.id, i.x += o.x, i.y += o.y, i.width = o.width, i.height = o.height, i.overflow = "visible", nt.create("use", i, S)
        }

        function f(t) {
            var e = v(t, "color");
            if (!e) {
                var n, i = t.getGradient(), r = i._radial, s = t.getOrigin(), a = t.getDestination();
                if (r) {
                    n = {cx: s.x, cy: s.y, r: s.getDistance(a)};
                    var o = t.getHighlight();
                    o && (n.fx = o.x, n.fy = o.y)
                } else n = {x1: s.x, y1: s.y, x2: a.x, y2: a.y};
                n.gradientUnits = "userSpaceOnUse", e = nt.create((r ? "radial" : "linear") + "Gradient", n, S);
                for (var h = i._stops, u = 0, l = h.length; u < l; u++) {
                    var c = h[u], f = c._color, d = f.getAlpha(), _ = c._offset;
                    n = {offset: null == _ ? u / (l - 1) : _}, f && (n["stop-color"] = f.toCSS(!0)), d < 1 && (n["stop-opacity"] = d), e.appendChild(nt.create("stop", n, S))
                }
                m(t, e, "color")
            }
            return "url(#" + e.id + ")"
        }

        function d(t) {
            var n = nt.create("text", e(t._matrix, !0), S);
            return n.textContent = t._content, n
        }

        function _(t, e, n) {
            var i = {}, s = !n && t.getParent(), a = [];
            return null != t._name && (i.id = t._name), r.each(it, function (e) {
                var n = e.get, o = e.type, h = t[n]();
                if (e.exportFilter ? e.exportFilter(t, h) : !s || !r.equals(s[n](), h)) {
                    if ("color" === o && null != h) {
                        var u = h.getAlpha();
                        u < 1 && (i[e.attribute + "-opacity"] = u)
                    }
                    "style" === o ? a.push(e.attribute + ": " + h) : i[e.attribute] = null == h ? "none" : "color" === o ? h.gradient ? f(h, t) : h.toCSS(!0) : "array" === o ? h.join(",") : "lookup" === o ? e.toSVG[h] : h
                }
            }), a.length && (i.style = a.join(";")), 1 === i.opacity && delete i.opacity, t._visible || (i.visibility = "hidden"), nt.set(e, i, S)
        }

        function v(t, e) {
            return k || (k = {ids: {}, svgs: {}}), t && k.svgs[e + "-" + (t._id || t.__id || (t.__id = l.get("svg")))]
        }

        function m(t, e, n) {
            k || v();
            var i = k.ids[n] = (k.ids[n] || 0) + 1;
            e.id = n + "-" + i, k.svgs[n + "-" + (t._id || t.__id)] = e
        }

        function x(e, n) {
            var i = e, r = null;
            if (k) {
                i = "svg" === e.nodeName.toLowerCase() && e;
                for (var s in k.svgs) r || (i || (i = nt.create("svg"), i.appendChild(e)), r = i.insertBefore(nt.create("defs"), i.firstChild)), r.appendChild(k.svgs[s]);
                k = null
            }
            return n.asString ? (new t.XMLSerializer).serializeToString(i) : i
        }

        function b(t, e, n) {
            var i = I[t._class], r = i && i(t, e);
            if (r) {
                var s = e.onExport;
                s && (r = s(t, r, e) || r);
                var a = JSON.stringify(t._data);
                a && "{}" !== a && "null" !== a && r.setAttribute("data-paper-data", a)
            }
            return r && _(t, r, n)
        }

        function C(t) {
            return t || (t = {}), S = new h(t.precision), t
        }

        var S, k, I = {Group: n, Layer: n, Raster: i, Path: s, Shape: a, CompoundPath: o, SymbolItem: c, PointText: d};
        w.inject({
            exportSVG: function (t) {
                return t = C(t), x(b(this, t, !0), t)
            }
        }), y.inject({
            exportSVG: function (t) {
                t = C(t);
                var n = this._children, i = this.getView(), s = r.pick(t.bounds, "view"),
                    a = t.matrix || "view" === s && i._matrix, o = a && p.read([a]),
                    h = "view" === s ? new g([0, 0], i.getViewSize()) : "content" === s ? w._getBounds(n, o, {stroke: !0}).rect : g.read([s], 0, {readNull: !0}),
                    u = {version: "1.1", xmlns: nt.svg, "xmlns:xlink": nt.xlink};
                h && (u.width = h.width, u.height = h.height, (h.x || h.y) && (u.viewBox = S.rectangle(h)));
                var l = nt.create("svg", u, S), c = l;
                o && !o.isIdentity() && (c = l.appendChild(nt.create("g", e(o), S)));
                for (var f = 0, d = n.length; f < d; f++) c.appendChild(b(n[f], t, !0));
                return x(l, t)
            }
        })
    }, new function () {
        function s(t, e, n, i, r) {
            var s = nt.get(t, e), a = null == s ? i ? null : n ? "" : 0 : n ? s : parseFloat(s);
            return /%\s*$/.test(s) ? a / 100 * (r ? 1 : T[/x|^width/.test(e) ? "width" : "height"]) : a
        }

        function a(t, e, n, i, r) {
            return e = s(t, e || "x", !1, i, r), n = s(t, n || "y", !1, i, r), !i || null != e && null != n ? new c(e, n) : null
        }

        function o(t, e, n, i, r) {
            return e = s(t, e || "width", !1, i, r), n = s(t, n || "height", !1, i, r), !i || null != e && null != n ? new d(e, n) : null
        }

        function h(t, e, n) {
            return "none" === t ? null : "number" === e ? parseFloat(t) : "array" === e ? t ? t.split(/[\s,]+/g).map(parseFloat) : [] : "color" === e ? P(t) || t : "lookup" === e ? n[t] : t
        }

        function u(t, e, n, i) {
            var r = t.childNodes, s = "clippath" === e, a = "defs" === e, o = new x, h = o._project,
                u = h._currentStyle, l = [];
            if (s || a || (o = k(o, t, i), h._currentStyle = o._style.clone()), i) for (var c = t.querySelectorAll("defs"), f = 0, d = c.length; f < d; f++) A(c[f], n, !1);
            for (var f = 0, d = r.length; f < d; f++) {
                var _, g = r[f];
                1 !== g.nodeType || /^defs$/i.test(g.nodeName) || !(_ = A(g, n, !1)) || _ instanceof I || l.push(_)
            }
            return o.addChildren(l), s && (o = k(o.reduce(), t, i)), h._currentStyle = u, (s || a) && (o.remove(), o = null), o
        }

        function l(t, e) {
            for (var n = t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), i = [], r = 0, s = n.length; r < s; r += 2) i.push(new c(parseFloat(n[r]), parseFloat(n[r + 1])));
            var a = new L(i);
            return "polygon" === e && a.closePath(), a
        }

        function f(t) {
            return O.create(t.getAttribute("d"))
        }

        function _(t, e) {
            var n, i = (s(t, "href", !0) || "").substring(1), r = "radialgradient" === e;
            if (i) n = z[i].getGradient(), n._radial ^ r && (n = n.clone(), n._radial = r); else {
                for (var o = t.childNodes, h = [], u = 0, l = o.length; u < l; u++) {
                    var c = o[u];
                    1 === c.nodeType && h.push(k(new q, c))
                }
                n = new R(h, r)
            }
            var f, d, _, g = "userSpaceOnUse" !== s(t, "gradientUnits", !0);
            r ? (f = a(t, "cx", "cy", !1, g), d = f.add(s(t, "r", !1, !1, g), 0), _ = a(t, "fx", "fy", !0, g)) : (f = a(t, "x1", "y1", !1, g), d = a(t, "x2", "y2", !1, g));
            var v = k(new D(n, f, d, _), t);
            return v._scaleToBounds = g, null
        }

        function v(t, e, n, i) {
            if (t.transform) {
                for (var r = (i.getAttribute(n) || "").split(/\)\s*/g), s = new p, a = 0, o = r.length; a < o; a++) {
                    var h = r[a];
                    if (!h) break;
                    for (var u = h.split(/\(\s*/), l = u[0], c = u[1].split(/[\s,]+/g), f = 0, d = c.length; f < d; f++) c[f] = parseFloat(c[f]);
                    switch (l) {
                        case"matrix":
                            s.append(new p(c[0], c[1], c[2], c[3], c[4], c[5]));
                            break;
                        case"rotate":
                            s.rotate(c[0], c[1], c[2]);
                            break;
                        case"translate":
                            s.translate(c[0], c[1]);
                            break;
                        case"scale":
                            s.scale(c);
                            break;
                        case"skewX":
                            s.skew(c[0], 0);
                            break;
                        case"skewY":
                            s.skew(0, c[0])
                    }
                }
                t.transform(s)
            }
        }

        function m(t, e, n) {
            var i = "fill-opacity" === n ? "getFillColor" : "getStrokeColor", r = t[i] && t[i]();
            r && r.setAlpha(parseFloat(e))
        }

        function b(t, n, i) {
            var s = t.attributes[n], a = s && s.value;
            if (!a) {
                var o = r.camelize(n);
                a = t.style[o], a || i.node[o] === i.parent[o] || (a = i.node[o])
            }
            return a ? "none" === a ? null : a : e
        }

        function k(t, n, i) {
            if (n.style) {
                var s = n.parentNode,
                    a = {node: U.getStyles(n) || {}, parent: !i && !/^defs$/i.test(s.tagName) && U.getStyles(s) || {}};
                r.each(N, function (i, r) {
                    var s = b(n, r, a);
                    t = s !== e && i(t, s, r, n, a) || t
                })
            }
            return t
        }

        function P(t) {
            var e = t && t.match(/\((?:["'#]*)([^"')]+)/), i = e && e[1],
                r = i && z[n ? i.replace(n.location.href.split("#")[0] + "#", "") : i];
            return r && r._scaleToBounds && (r = r.clone(), r._scaleToBounds = !0), r
        }

        function A(t, e, n) {
            var s, a, h, u = t.nodeName.toLowerCase(), l = "#document" !== u, c = i.body;
            n && l && (T = paper.getView().getSize(), T = o(t, null, null, !0) || T, s = nt.create("svg", {style: "stroke-width: 1px; stroke-miterlimit: 10"}), a = t.parentNode, h = t.nextSibling, s.appendChild(t), c.appendChild(s));
            var f = paper.settings, d = f.applyMatrix, _ = f.insertItems;
            f.applyMatrix = !1, f.insertItems = !1;
            var g = E[u], v = g && g(t, u, e, n) || null;
            if (f.insertItems = _, f.applyMatrix = d, v) {
                !l || v instanceof x || (v = k(v, t, n));
                var p = e.onImport, m = l && t.getAttribute("data-paper-data");
                p && (v = p(t, v, e) || v), e.expandShapes && v instanceof C && (v.remove(), v = v.toPath()), m && (v._data = JSON.parse(m))
            }
            return s && (c.removeChild(s), a && (h ? a.insertBefore(t, h) : a.appendChild(t))), n && (z = {}, v && r.pick(e.applyMatrix, d) && v.matrix.apply(!0, !0)), v
        }

        function M(n, r, s) {
            function a(i) {
                try {
                    var a = "object" == typeof i ? i : (new t.DOMParser).parseFromString(i, "image/svg+xml");
                    if (!a.nodeName) throw a = null, new Error("Unsupported SVG source: " + n);
                    paper = h, u = A(a, r, !0), r && r.insert === !1 || s._insertItem(e, u);
                    var l = r.onLoad;
                    l && l(u, i)
                } catch (c) {
                    o(c)
                }
            }

            function o(t, e) {
                var n = r.onError;
                if (!n) throw new Error(t);
                n(t, e)
            }

            if (!n) return null;
            r = "function" == typeof r ? {onLoad: r} : r || {};
            var h = paper, u = null;
            if ("string" != typeof n || /^.*</.test(n)) {
                if ("undefined" != typeof File && n instanceof File) {
                    var l = new FileReader;
                    return l.onload = function () {
                        a(l.result)
                    }, l.onerror = function () {
                        o(l.error)
                    }, l.readAsText(n)
                }
                a(n)
            } else {
                var c = i.getElementById(n);
                c ? a(c) : Q.request({url: n, async: !0, onLoad: a, onError: o})
            }
            return u
        }

        var T, z = {}, E = {
            "#document": function (t, e, n, i) {
                for (var r = t.childNodes, s = 0, a = r.length; s < a; s++) {
                    var o = r[s];
                    if (1 === o.nodeType) return A(o, n, i)
                }
            },
            g: u,
            svg: u,
            clippath: u,
            polygon: l,
            polyline: l,
            path: f,
            lineargradient: _,
            radialgradient: _,
            image: function (t) {
                var e = new S(s(t, "href", !0));
                return e.on("load", function () {
                    var e = o(t);
                    this.setSize(e);
                    var n = this._matrix._transformPoint(a(t).add(e.divide(2)));
                    this.translate(n)
                }), e
            },
            symbol: function (t, e, n, i) {
                return new I(u(t, e, n, i), (!0))
            },
            defs: u,
            use: function (t) {
                var e = (s(t, "href", !0) || "").substring(1), n = z[e], i = a(t);
                return n ? n instanceof I ? n.place(i) : n.clone().translate(i) : null
            },
            circle: function (t) {
                return new C.Circle(a(t, "cx", "cy"), s(t, "r"))
            },
            ellipse: function (t) {
                return new C.Ellipse({center: a(t, "cx", "cy"), radius: o(t, "rx", "ry")})
            },
            rect: function (t) {
                return new C.Rectangle(new g(a(t), o(t)), o(t, "rx", "ry"))
            },
            line: function (t) {
                return new L.Line(a(t, "x1", "y1"), a(t, "x2", "y2"))
            },
            text: function (t) {
                var e = new F(a(t).add(a(t, "dx", "dy")));
                return e.setContent(t.textContent.trim() || ""), e
            }
        }, N = r.set(r.each(it, function (t) {
            this[t.attribute] = function (e, n) {
                if (e[t.set] && (e[t.set](h(n, t.type, t.fromSVG)), "color" === t.type)) {
                    var i = e[t.get]();
                    if (i && i._scaleToBounds) {
                        var r = e.getBounds();
                        i.transform((new p).translate(r.getPoint()).scale(r.getSize()))
                    }
                }
            }
        }, {}), {
            id: function (t, e) {
                z[e] = t, t.setName && t.setName(e)
            }, "clip-path": function (t, e) {
                var n = P(e);
                if (n) {
                    if (n = n.clone(), n.setClipMask(!0), !(t instanceof x)) return new x(n, t);
                    t.insertChild(0, n)
                }
            }, gradientTransform: v, transform: v, "fill-opacity": m, "stroke-opacity": m, visibility: function (t, e) {
                t.setVisible && t.setVisible("visible" === e)
            }, display: function (t, e) {
                t.setVisible && t.setVisible(null !== e)
            }, "stop-color": function (t, e) {
                t.setColor && t.setColor(e)
            }, "stop-opacity": function (t, e) {
                t._color && t._color.setAlpha(parseFloat(e))
            }, offset: function (t, e) {
                if (t.setOffset) {
                    var n = e.match(/(.*)%$/);
                    t.setOffset(n ? n[1] / 100 : parseFloat(e))
                }
            }, viewBox: function (t, e, n, i, r) {
                var s, a, u = new g(h(e, "array")), l = o(i, null, null, !0);
                if (t instanceof x) {
                    var c = l ? l.divide(u.getSize()) : 1, a = (new p).scale(c).translate(u.getPoint().negate());
                    s = t
                } else t instanceof I && (l && u.setSize(l), s = t._item);
                if (s) {
                    if ("visible" !== b(i, "overflow", r)) {
                        var f = new C.Rectangle(u);
                        f.setClipMask(!0), s.addChild(f)
                    }
                    a && s.transform(a)
                }
            }
        });
        w.inject({
            importSVG: function (t, e) {
                return M(t, e, this)
            }
        }), y.inject({
            importSVG: function (t, e) {
                return this.activate(), M(t, e, this)
            }
        })
    }, r.exports.PaperScript = function () {
        function e(t, e) {
            return (g.acorn || v).parse(t, e)
        }

        function s(t, e, n) {
            var i = w[e];
            if (t && t[i]) {
                var r = t[i](n);
                return "!=" === e ? !r : r
            }
            switch (e) {
                case"+":
                    return t + n;
                case"-":
                    return t - n;
                case"*":
                    return t * n;
                case"/":
                    return t / n;
                case"%":
                    return t % n;
                case"==":
                    return t == n;
                case"!=":
                    return t != n
            }
        }

        function o(t, e) {
            var n = x[t];
            if (e && e[n]) return e[n]();
            switch (t) {
                case"+":
                    return +e;
                case"-":
                    return -e
            }
        }

        function h(r, s) {
            function a(t) {
                for (var e = 0, n = d.length; e < n; e++) {
                    var i = d[e];
                    if (i[0] >= t) break;
                    t += i[1]
                }
                return t
            }

            function o(t) {
                return r.substring(a(t.range[0]), a(t.range[1]))
            }

            function h(t, e) {
                return r.substring(a(t.range[1]), a(e.range[0]))
            }

            function u(t, e) {
                for (var n = a(t.range[0]), i = a(t.range[1]), s = 0, o = d.length - 1; o >= 0; o--) if (n > d[o][0]) {
                    s = o + 1;
                    break
                }
                d.splice(s, 0, [n, e.length - i + n]), r = r.substring(0, n) + e + r.substring(i)
            }

            function l(t, e) {
                if (t) {
                    for (var n in t) if ("range" !== n && "loc" !== n) {
                        var i = t[n];
                        if (Array.isArray(i)) for (var r = 0, s = i.length; r < s; r++) l(i[r], t); else i && "object" == typeof i && l(i, t)
                    }
                    switch (t.type) {
                        case"UnaryExpression":
                            if (t.operator in x && "Literal" !== t.argument.type) {
                                var a = o(t.argument);
                                u(t, '$__("' + t.operator + '", ' + a + ")")
                            }
                            break;
                        case"BinaryExpression":
                            if (t.operator in w && "Literal" !== t.left.type) {
                                var c = o(t.left), f = o(t.right), d = h(t.left, t.right), _ = t.operator;
                                u(t, "__$__(" + c + "," + d.replace(new RegExp("\\" + _), '"' + _ + '"') + ", " + f + ")")
                            }
                            break;
                        case"UpdateExpression":
                        case"AssignmentExpression":
                            var g = e && e.type;
                            if (!("ForStatement" === g || "BinaryExpression" === g && /^[=!<>]/.test(e.operator) || "MemberExpression" === g && e.computed)) if ("UpdateExpression" === t.type) {
                                var a = o(t.argument), v = "__$__(" + a + ', "' + t.operator[0] + '", 1)',
                                    p = a + " = " + v;
                                t.prefix || "AssignmentExpression" !== g && "VariableDeclarator" !== g || (o(e.left || e.id) === a && (p = v), p = a + "; " + p), u(t, p)
                            } else if (/^.=$/.test(t.operator) && "Literal" !== t.left.type) {
                                var c = o(t.left), f = o(t.right),
                                    v = c + " = __$__(" + c + ', "' + t.operator[0] + '", ' + f + ")";
                                u(t, /^\(.*\)$/.test(o(t)) ? "(" + v + ")" : v)
                            }
                    }
                }
            }

            function c(t) {
                var e = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                for (t = (Math.abs(t) << 1) + (t < 0 ? 1 : 0); t || !e;) {
                    var i = 31 & t;
                    t >>= 5, t && (i |= 32), e += n[i]
                }
                return e
            }

            if (!r) return "";
            s = s || {};
            var f, d = [], _ = s.url || "", g = paper.agent, v = g.versionNumber, p = !1, m = s.sourceMaps,
                y = s.source || r, b = /\r\n|\n|\r/gm, C = s.offset || 0;
            if (m && (g.chrome && v >= 30 || g.webkit && v >= 537.76 || g.firefox && v >= 23 || g.node)) {
                if (g.node) C -= 2; else if (n && _ && !n.location.href.indexOf(_)) {
                    var S = i.getElementsByTagName("html")[0].innerHTML;
                    C = S.substr(0, S.indexOf(r) + 1).match(b).length + 1
                }
                p = C > 0 && !(g.chrome && v >= 36 || g.safari && v >= 600 || g.firefox && v >= 40 || g.node);
                var k = ["AA" + c(p ? 0 : C) + "A"];
                k.length = (r.match(b) || []).length + 1 + (p ? C : 0), f = {
                    version: 3,
                    file: _,
                    names: [],
                    mappings: k.join(";AACA"),
                    sourceRoot: "",
                    sources: [_],
                    sourcesContent: [y]
                }
            }
            return l(e(r, {
                ranges: !0,
                preserveParens: !0
            })), f && (p && (r = new Array(C + 1).join("\n") + r), /^(inline|both)$/.test(m) && (r += "\n//# sourceMappingURL=data:application/json;base64," + t.btoa(unescape(encodeURIComponent(JSON.stringify(f))))), r += "\n//# sourceURL=" + (_ || "paperscript")), {
                url: _,
                source: y,
                code: r,
                map: f
            }
        }

        function u(t, e, n) {
            function a(e, n) {
                for (var i in e) !n && /^_/.test(i) || !new RegExp("([\\b\\s\\W]|^)" + i.replace(/\$/g, "\\$") + "\\b").test(t) || (g.push(i), v.push(e[i]))
            }

            paper = e;
            var u, l = e.getView(),
                f = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(t) && !/\bnew\s+Tool\b/.test(t) ? new Y : null,
                d = f ? f._events : [], _ = ["onFrame", "onResize"].concat(d), g = [], v = [],
                p = "object" == typeof t ? t : h(t, n);
            t = p.code, a({__$__: s, $__: o, paper: e, view: l, tool: f}, !0), a(e), _ = r.each(_, function (e) {
                new RegExp("\\s+" + e + "\\b").test(t) && (g.push(e), this.push(e + ": " + e))
            }, []).join(", "), _ && (t += "\nreturn { " + _ + " };");
            var m = paper.agent;
            if (i && (m.chrome || m.firefox && m.versionNumber < 40)) {
                var y = i.createElement("script"), w = i.head || i.getElementsByTagName("head")[0];
                m.firefox && (t = "\n" + t), y.appendChild(i.createTextNode("paper._execute = function(" + g + ") {" + t + "\n}")), w.appendChild(y), u = paper._execute, delete paper._execute, w.removeChild(y)
            } else u = Function(g, t);
            var x = u.apply(e, v) || {};
            return r.each(d, function (t) {
                var e = x[t];
                e && (f[t] = e)
            }), l && (x.onResize && l.setOnResize(x.onResize), l.emit("resize", {
                size: l.size,
                delta: new c
            }), x.onFrame && l.setOnFrame(x.onFrame), l.requestUpdate()), p
        }

        function l(t) {
            if (/^text\/(?:x-|)paperscript$/.test(t.type) && "true" !== a.getAttribute(t, "ignore")) {
                var e = a.getAttribute(t, "canvas"), n = i.getElementById(e), r = t.src || t.getAttribute("data-src"),
                    s = a.hasAttribute(t, "async"), o = "data-paper-scope";
                if (!n) throw new Error('Unable to find canvas with id "' + e + '"');
                var h = a.get(n.getAttribute(o)) || (new a).setup(n);
                return n.setAttribute(o, h._id), r ? Q.request({
                    url: r,
                    async: s,
                    mimeType: "text/plain",
                    onLoad: function (t) {
                        u(t, h, r)
                    }
                }) : u(t.innerHTML, h, t.baseURI), t.setAttribute("data-paper-ignore", "true"), h
            }
        }

        function f() {
            r.each(i && i.getElementsByTagName("script"), l)
        }

        function _(t) {
            return t ? l(t) : f()
        }

        var g = this, v = g.acorn;
        if (!v && "undefined" != typeof require) try {
            v = require("acorn")
        } catch (p) {
        }
        if (!v) {
            var m, y;
            v = m = y = {}, function (t, e) {
                return "object" == typeof m && "object" == typeof y ? e(m) : "function" == typeof define && define.amd ? define(["exports"], e) : void e(t.acorn || (t.acorn = {}))
            }(this, function (t) {
                "use strict";

                function e(t) {
                    ct = t || {};
                    for (var e in gt) Object.prototype.hasOwnProperty.call(ct, e) || (ct[e] = gt[e]);
                    _t = ct.sourceFile || null
                }

                function n(t, e) {
                    var n = vt(ft, t);
                    e += " (" + n.line + ":" + n.column + ")";
                    var i = new SyntaxError(e);
                    throw i.pos = t, i.loc = n, i.raisedAt = pt, i
                }

                function i(t) {
                    function e(t) {
                        if (1 == t.length) return n += "return str === " + JSON.stringify(t[0]) + ";";
                        n += "switch(str){";
                        for (var e = 0; e < t.length; ++e) n += "case " + JSON.stringify(t[e]) + ":";
                        n += "return true}return false;"
                    }

                    t = t.split(" ");
                    var n = "", i = [];
                    t:for (var r = 0; r < t.length; ++r) {
                        for (var s = 0; s < i.length; ++s) if (i[s][0].length == t[r].length) {
                            i[s].push(t[r]);
                            continue t
                        }
                        i.push([t[r]])
                    }
                    if (i.length > 3) {
                        i.sort(function (t, e) {
                            return e.length - t.length
                        }), n += "switch(str.length){";
                        for (var r = 0; r < i.length; ++r) {
                            var a = i[r];
                            n += "case " + a[0].length + ":", e(a)
                        }
                        n += "}"
                    } else e(t);
                    return new Function("str", n)
                }

                function r() {
                    this.line = kt, this.column = pt - It
                }

                function s() {
                    kt = 1, pt = It = 0, St = !0, u()
                }

                function a(t, e) {
                    yt = pt, ct.locations && (xt = new r), bt = t, u(), Ct = e, St = t.beforeExpr
                }

                function o() {
                    var t = ct.onComment && ct.locations && new r, e = pt, i = ft.indexOf("*/", pt += 2);
                    if (i === -1 && n(pt - 2, "Unterminated comment"), pt = i + 2, ct.locations) {
                        Xe.lastIndex = e;
                        for (var s; (s = Xe.exec(ft)) && s.index < pt;) ++kt, It = s.index + s[0].length
                    }
                    ct.onComment && ct.onComment(!0, ft.slice(e + 2, i), e, pt, t, ct.locations && new r)
                }

                function h() {
                    for (var t = pt, e = ct.onComment && ct.locations && new r, n = ft.charCodeAt(pt += 2); pt < dt && 10 !== n && 13 !== n && 8232 !== n && 8233 !== n;) ++pt, n = ft.charCodeAt(pt);
                    ct.onComment && ct.onComment(!1, ft.slice(t + 2, pt), t, pt, e, ct.locations && new r)
                }

                function u() {
                    for (; pt < dt;) {
                        var t = ft.charCodeAt(pt);
                        if (32 === t) ++pt; else if (13 === t) {
                            ++pt;
                            var e = ft.charCodeAt(pt);
                            10 === e && ++pt, ct.locations && (++kt, It = pt)
                        } else if (10 === t || 8232 === t || 8233 === t) ++pt, ct.locations && (++kt, It = pt); else if (t > 8 && t < 14) ++pt; else if (47 === t) {
                            var e = ft.charCodeAt(pt + 1);
                            if (42 === e) o(); else {
                                if (47 !== e) break;
                                h()
                            }
                        } else if (160 === t) ++pt; else {
                            if (!(t >= 5760 && He.test(String.fromCharCode(t)))) break;
                            ++pt
                        }
                    }
                }

                function l() {
                    var t = ft.charCodeAt(pt + 1);
                    return t >= 48 && t <= 57 ? S(!0) : (++pt, a(we))
                }

                function c() {
                    var t = ft.charCodeAt(pt + 1);
                    return St ? (++pt, x()) : 61 === t ? w(Se, 2) : w(be, 1)
                }

                function f() {
                    var t = ft.charCodeAt(pt + 1);
                    return 61 === t ? w(Se, 2) : w(Be, 1)
                }

                function d(t) {
                    var e = ft.charCodeAt(pt + 1);
                    return e === t ? w(124 === t ? Pe : Ae, 2) : 61 === e ? w(Se, 2) : w(124 === t ? Me : ze, 1)
                }

                function _() {
                    var t = ft.charCodeAt(pt + 1);
                    return 61 === t ? w(Se, 2) : w(Te, 1)
                }

                function g(t) {
                    var e = ft.charCodeAt(pt + 1);
                    return e === t ? 45 == e && 62 == ft.charCodeAt(pt + 2) && Je.test(ft.slice(At, pt)) ? (pt += 3, h(), u(), y()) : w(ke, 2) : 61 === e ? w(Se, 2) : w(Ne, 1)
                }

                function v(t) {
                    var e = ft.charCodeAt(pt + 1), n = 1;
                    return e === t ? (n = 62 === t && 62 === ft.charCodeAt(pt + 2) ? 3 : 2, 61 === ft.charCodeAt(pt + n) ? w(Se, n + 1) : w(Ee, n)) : 33 == e && 60 == t && 45 == ft.charCodeAt(pt + 2) && 45 == ft.charCodeAt(pt + 3) ? (pt += 4, h(), u(), y()) : (61 === e && (n = 61 === ft.charCodeAt(pt + 2) ? 3 : 2), w(Le, n))
                }

                function p(t) {
                    var e = ft.charCodeAt(pt + 1);
                    return 61 === e ? w(Oe, 61 === ft.charCodeAt(pt + 2) ? 3 : 2) : w(61 === t ? Ce : Ie, 1)
                }

                function m(t) {
                    switch (t) {
                        case 46:
                            return l();
                        case 40:
                            return ++pt, a(ge);
                        case 41:
                            return ++pt, a(ve);
                        case 59:
                            return ++pt, a(me);
                        case 44:
                            return ++pt, a(pe);
                        case 91:
                            return ++pt, a(ce);
                        case 93:
                            return ++pt, a(fe);
                        case 123:
                            return ++pt, a(de);
                        case 125:
                            return ++pt, a(_e);
                        case 58:
                            return ++pt, a(ye);
                        case 63:
                            return ++pt, a(xe);
                        case 48:
                            var e = ft.charCodeAt(pt + 1);
                            if (120 === e || 88 === e) return C();
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            return S(!1);
                        case 34:
                        case 39:
                            return k(t);
                        case 47:
                            return c(t);
                        case 37:
                        case 42:
                            return f();
                        case 124:
                        case 38:
                            return d(t);
                        case 94:
                            return _();
                        case 43:
                        case 45:
                            return g(t);
                        case 60:
                        case 62:
                            return v(t);
                        case 61:
                        case 33:
                            return p(t);
                        case 126:
                            return w(Ie, 1)
                    }
                    return !1
                }

                function y(t) {
                    if (t ? pt = mt + 1 : mt = pt, ct.locations && (wt = new r), t) return x();
                    if (pt >= dt) return a(Ft);
                    var e = ft.charCodeAt(pt);
                    if (Ke(e) || 92 === e) return A();
                    var i = m(e);
                    if (i === !1) {
                        var s = String.fromCharCode(e);
                        if ("\\" === s || $e.test(s)) return A();
                        n(pt, "Unexpected character '" + s + "'")
                    }
                    return i
                }

                function w(t, e) {
                    var n = ft.slice(pt, pt + e);
                    pt += e, a(t, n)
                }

                function x() {
                    for (var t, e, i = "", r = pt; ;) {
                        pt >= dt && n(r, "Unterminated regular expression");
                        var s = ft.charAt(pt);
                        if (Je.test(s) && n(r, "Unterminated regular expression"), t) t = !1; else {
                            if ("[" === s) e = !0; else if ("]" === s && e) e = !1; else if ("/" === s && !e) break;
                            t = "\\" === s
                        }
                        ++pt
                    }
                    var i = ft.slice(r, pt);
                    ++pt;
                    var o = P();
                    o && !/^[gmsiy]*$/.test(o) && n(r, "Invalid regexp flag");
                    try {
                        var h = new RegExp(i, o)
                    } catch (u) {
                        u instanceof SyntaxError && n(r, u.message), n(u)
                    }
                    return a(Nt, h)
                }

                function b(t, e) {
                    for (var n = pt, i = 0, r = 0, s = null == e ? 1 / 0 : e; r < s; ++r) {
                        var a, o = ft.charCodeAt(pt);
                        if (a = o >= 97 ? o - 97 + 10 : o >= 65 ? o - 65 + 10 : o >= 48 && o <= 57 ? o - 48 : 1 / 0, a >= t) break;
                        ++pt, i = i * t + a
                    }
                    return pt === n || null != e && pt - n !== e ? null : i
                }

                function C() {
                    pt += 2;
                    var t = b(16);
                    return null == t && n(mt + 2, "Expected hexadecimal number"), Ke(ft.charCodeAt(pt)) && n(pt, "Identifier directly after number"), a(Et, t)
                }

                function S(t) {
                    var e = pt, i = !1, r = 48 === ft.charCodeAt(pt);
                    t || null !== b(10) || n(e, "Invalid number"), 46 === ft.charCodeAt(pt) && (++pt, b(10), i = !0);
                    var s = ft.charCodeAt(pt);
                    69 !== s && 101 !== s || (s = ft.charCodeAt(++pt), 43 !== s && 45 !== s || ++pt, null === b(10) && n(e, "Invalid number"), i = !0), Ke(ft.charCodeAt(pt)) && n(pt, "Identifier directly after number");
                    var o, h = ft.slice(e, pt);
                    return i ? o = parseFloat(h) : r && 1 !== h.length ? /[89]/.test(h) || Ot ? n(e, "Invalid number") : o = parseInt(h, 8) : o = parseInt(h, 10), a(Et, o)
                }

                function k(t) {
                    pt++;
                    for (var e = ""; ;) {
                        pt >= dt && n(mt, "Unterminated string constant");
                        var i = ft.charCodeAt(pt);
                        if (i === t) return ++pt, a(Bt, e);
                        if (92 === i) {
                            i = ft.charCodeAt(++pt);
                            var r = /^[0-7]+/.exec(ft.slice(pt, pt + 3));
                            for (r && (r = r[0]); r && parseInt(r, 8) > 255;) r = r.slice(0, -1);
                            if ("0" === r && (r = null), ++pt, r) Ot && n(pt - 2, "Octal literal in strict mode"), e += String.fromCharCode(parseInt(r, 8)), pt += r.length - 1; else switch (i) {
                                case 110:
                                    e += "\n";
                                    break;
                                case 114:
                                    e += "\r";
                                    break;
                                case 120:
                                    e += String.fromCharCode(I(2));
                                    break;
                                case 117:
                                    e += String.fromCharCode(I(4));
                                    break;
                                case 85:
                                    e += String.fromCharCode(I(8));
                                    break;
                                case 116:
                                    e += "\t";
                                    break;
                                case 98:
                                    e += "\b";
                                    break;
                                case 118:
                                    e += "\x0B";
                                    break;
                                case 102:
                                    e += "\f";
                                    break;
                                case 48:
                                    e += "\0";
                                    break;
                                case 13:
                                    10 === ft.charCodeAt(pt) && ++pt;
                                case 10:
                                    ct.locations && (It = pt, ++kt);
                                    break;
                                default:
                                    e += String.fromCharCode(i)
                            }
                        } else 13 !== i && 10 !== i && 8232 !== i && 8233 !== i || n(mt, "Unterminated string constant"), e += String.fromCharCode(i), ++pt
                    }
                }

                function I(t) {
                    var e = b(16, t);
                    return null === e && n(mt, "Bad character escape sequence"), e
                }

                function P() {
                    Fe = !1;
                    for (var t, e = !0, i = pt; ;) {
                        var r = ft.charCodeAt(pt);
                        if (Ye(r)) Fe && (t += ft.charAt(pt)), ++pt; else {
                            if (92 !== r) break;
                            Fe || (t = ft.slice(i, pt)), Fe = !0, 117 != ft.charCodeAt(++pt) && n(pt, "Expecting Unicode escape sequence \\uXXXX"), ++pt;
                            var s = I(4), a = String.fromCharCode(s);
                            a || n(pt - 1, "Invalid Unicode escape"), (e ? Ke(s) : Ye(s)) || n(pt - 4, "Invalid Unicode escape"), t += a
                        }
                        e = !1
                    }
                    return Fe ? t : ft.slice(i, pt)
                }

                function A() {
                    var t = P(), e = jt;
                    return !Fe && Ue(t) && (e = le[t]), a(e, t)
                }

                function M() {
                    Pt = mt, At = yt, Mt = xt, y()
                }

                function T(t) {
                    if (Ot = t, pt = mt, ct.locations) for (; pt < It;) It = ft.lastIndexOf("\n", It - 2) + 1, --kt;
                    u(), y()
                }

                function z() {
                    this.type = null, this.start = mt, this.end = null
                }

                function O() {
                    this.start = wt, this.end = null, null !== _t && (this.source = _t)
                }

                function L() {
                    var t = new z;
                    return ct.locations && (t.loc = new O), ct.directSourceFile && (t.sourceFile = ct.directSourceFile), ct.ranges && (t.range = [mt, 0]), t
                }

                function E(t) {
                    var e = new z;
                    return e.start = t.start, ct.locations && (e.loc = new O, e.loc.start = t.loc.start), ct.ranges && (e.range = [t.range[0], 0]), e
                }

                function N(t, e) {
                    return t.type = e, t.end = At, ct.locations && (t.loc.end = Mt), ct.ranges && (t.range[1] = At), t
                }

                function B(t) {
                    return ct.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "use strict" === t.expression.value
                }

                function j(t) {
                    if (bt === t) return M(), !0
                }

                function F() {
                    return !ct.strictSemicolons && (bt === Ft || bt === _e || Je.test(ft.slice(At, mt)))
                }

                function D() {
                    j(me) || F() || q()
                }

                function R(t) {
                    bt === t ? M() : q()
                }

                function q() {
                    n(mt, "Unexpected token")
                }

                function V(t) {
                    "Identifier" !== t.type && "MemberExpression" !== t.type && n(t.start, "Assigning to rvalue"), Ot && "Identifier" === t.type && Ve(t.name) && n(t.start, "Assigning to " + t.name + " in strict mode")
                }

                function U(t) {
                    Pt = At = pt, ct.locations && (Mt = new r), Tt = Ot = null, zt = [], y();
                    var e = t || L(), n = !0;
                    for (t || (e.body = []); bt !== Ft;) {
                        var i = H();
                        e.body.push(i), n && B(i) && T(!0), n = !1
                    }
                    return N(e, "Program")
                }

                function H() {
                    (bt === be || bt === Se && "/=" == Ct) && y(!0);
                    var t = bt, e = L();
                    switch (t) {
                        case Dt:
                        case Vt:
                            M();
                            var i = t === Dt;
                            j(me) || F() ? e.label = null : bt !== jt ? q() : (e.label = lt(), D());
                            for (var r = 0; r < zt.length; ++r) {
                                var s = zt[r];
                                if (null == e.label || s.name === e.label.name) {
                                    if (null != s.kind && (i || "loop" === s.kind)) break;
                                    if (e.label && i) break
                                }
                            }
                            return r === zt.length && n(e.start, "Unsyntactic " + t.keyword), N(e, i ? "BreakStatement" : "ContinueStatement");
                        case Ut:
                            return M(), D(), N(e, "DebuggerStatement");
                        case Zt:
                            return M(), zt.push(Qe), e.body = H(), zt.pop(), R(ne), e.test = Z(), D(), N(e, "DoWhileStatement");
                        case Gt:
                            if (M(), zt.push(Qe), R(ge), bt === me) return $(e, null);
                            if (bt === ee) {
                                var a = L();
                                return M(), J(a, !0), N(a, "VariableDeclaration"), 1 === a.declarations.length && j(ue) ? G(e, a) : $(e, a)
                            }
                            var a = X(!1, !0);
                            return j(ue) ? (V(a), G(e, a)) : $(e, a);
                        case Jt:
                            return M(), ht(e, !0);
                        case Xt:
                            return M(), e.test = Z(), e.consequent = H(), e.alternate = j(Wt) ? H() : null, N(e, "IfStatement");
                        case Kt:
                            return Tt || ct.allowReturnOutsideFunction || n(mt, "'return' outside of function"), M(), j(me) || F() ? e.argument = null : (e.argument = X(), D()), N(e, "ReturnStatement");
                        case Yt:
                            M(), e.discriminant = Z(), e.cases = [], R(de), zt.push(tn);
                            for (var o, h; bt != _e;) if (bt === Rt || bt === Ht) {
                                var u = bt === Rt;
                                o && N(o, "SwitchCase"), e.cases.push(o = L()), o.consequent = [], M(), u ? o.test = X() : (h && n(Pt, "Multiple default clauses"), h = !0, o.test = null), R(ye)
                            } else o || q(), o.consequent.push(H());
                            return o && N(o, "SwitchCase"), M(), zt.pop(), N(e, "SwitchStatement");
                        case Qt:
                            return M(), Je.test(ft.slice(At, mt)) && n(At, "Illegal newline after throw"), e.argument = X(), D(), N(e, "ThrowStatement");
                        case te:
                            if (M(), e.block = W(), e.handler = null, bt === qt) {
                                var l = L();
                                M(), R(ge), l.param = lt(), Ot && Ve(l.param.name) && n(l.param.start, "Binding " + l.param.name + " in strict mode"), R(ve), l.guard = null, l.body = W(), e.handler = N(l, "CatchClause")
                            }
                            return e.guardedHandlers = Lt, e.finalizer = j($t) ? W() : null, e.handler || e.finalizer || n(e.start, "Missing catch or finally clause"), N(e, "TryStatement");
                        case ee:
                            return M(), J(e), D(), N(e, "VariableDeclaration");
                        case ne:
                            return M(), e.test = Z(), zt.push(Qe), e.body = H(), zt.pop(), N(e, "WhileStatement");
                        case ie:
                            return Ot && n(mt, "'with' in strict mode"), M(), e.object = Z(), e.body = H(), N(e, "WithStatement");
                        case de:
                            return W();
                        case me:
                            return M(), N(e, "EmptyStatement");
                        default:
                            var c = Ct, f = X();
                            if (t === jt && "Identifier" === f.type && j(ye)) {
                                for (var r = 0; r < zt.length; ++r) zt[r].name === c && n(f.start, "Label '" + c + "' is already declared");
                                var d = bt.isLoop ? "loop" : bt === Yt ? "switch" : null;
                                return zt.push({
                                    name: c,
                                    kind: d
                                }), e.body = H(), zt.pop(), e.label = f, N(e, "LabeledStatement")
                            }
                            return e.expression = f, D(), N(e, "ExpressionStatement")
                    }
                }

                function Z() {
                    R(ge);
                    var t = X();
                    return R(ve), t
                }

                function W(t) {
                    var e, n = L(), i = !0, r = !1;
                    for (n.body = [], R(de); !j(_e);) {
                        var s = H();
                        n.body.push(s), i && t && B(s) && (e = r, T(r = !0)), i = !1
                    }
                    return r && !e && T(!1), N(n, "BlockStatement")
                }

                function $(t, e) {
                    return t.init = e, R(me), t.test = bt === me ? null : X(), R(me), t.update = bt === ve ? null : X(), R(ve), t.body = H(), zt.pop(), N(t, "ForStatement")
                }

                function G(t, e) {
                    return t.left = e, t.right = X(), R(ve), t.body = H(), zt.pop(), N(t, "ForInStatement")
                }

                function J(t, e) {
                    for (t.declarations = [], t.kind = "var"; ;) {
                        var i = L();
                        if (i.id = lt(), Ot && Ve(i.id.name) && n(i.id.start, "Binding " + i.id.name + " in strict mode"), i.init = j(Ce) ? X(!0, e) : null, t.declarations.push(N(i, "VariableDeclarator")), !j(pe)) break
                    }
                    return t
                }

                function X(t, e) {
                    var n = K(e);
                    if (!t && bt === pe) {
                        var i = E(n);
                        for (i.expressions = [n]; j(pe);) i.expressions.push(K(e));
                        return N(i, "SequenceExpression")
                    }
                    return n
                }

                function K(t) {
                    var e = Y(t);
                    if (bt.isAssign) {
                        var n = E(e);
                        return n.operator = Ct, n.left = e, M(), n.right = K(t), V(e), N(n, "AssignmentExpression")
                    }
                    return e
                }

                function Y(t) {
                    var e = Q(t);
                    if (j(xe)) {
                        var n = E(e);
                        return n.test = e, n.consequent = X(!0), R(ye), n.alternate = X(!0, t), N(n, "ConditionalExpression")
                    }
                    return e
                }

                function Q(t) {
                    return tt(et(), -1, t)
                }

                function tt(t, e, n) {
                    var i = bt.binop;
                    if (null != i && (!n || bt !== ue) && i > e) {
                        var r = E(t);
                        r.left = t, r.operator = Ct;
                        var s = bt;
                        M(), r.right = tt(et(), i, n);
                        var a = N(r, s === Pe || s === Ae ? "LogicalExpression" : "BinaryExpression");
                        return tt(a, e, n)
                    }
                    return t
                }

                function et() {
                    if (bt.prefix) {
                        var t = L(), e = bt.isUpdate;
                        return t.operator = Ct, t.prefix = !0, St = !0, M(), t.argument = et(), e ? V(t.argument) : Ot && "delete" === t.operator && "Identifier" === t.argument.type && n(t.start, "Deleting local variable in strict mode"), N(t, e ? "UpdateExpression" : "UnaryExpression")
                    }
                    for (var i = nt(); bt.postfix && !F();) {
                        var t = E(i);
                        t.operator = Ct, t.prefix = !1, t.argument = i, V(i), M(), i = N(t, "UpdateExpression")
                    }
                    return i
                }

                function nt() {
                    return it(rt())
                }

                function it(t, e) {
                    if (j(we)) {
                        var n = E(t);
                        return n.object = t, n.property = lt(!0), n.computed = !1, it(N(n, "MemberExpression"), e)
                    }
                    if (j(ce)) {
                        var n = E(t);
                        return n.object = t, n.property = X(), n.computed = !0, R(fe), it(N(n, "MemberExpression"), e)
                    }
                    if (!e && j(ge)) {
                        var n = E(t);
                        return n.callee = t, n.arguments = ut(ve, !1), it(N(n, "CallExpression"), e)
                    }
                    return t
                }

                function rt() {
                    switch (bt) {
                        case se:
                            var t = L();
                            return M(), N(t, "ThisExpression");
                        case jt:
                            return lt();
                        case Et:
                        case Bt:
                        case Nt:
                            var t = L();
                            return t.value = Ct, t.raw = ft.slice(mt, yt), M(), N(t, "Literal");
                        case ae:
                        case oe:
                        case he:
                            var t = L();
                            return t.value = bt.atomValue, t.raw = bt.keyword, M(), N(t, "Literal");
                        case ge:
                            var e = wt, n = mt;
                            M();
                            var i = X();
                            return i.start = n, i.end = yt, ct.locations && (i.loc.start = e, i.loc.end = xt), ct.ranges && (i.range = [n, yt]), R(ve), i;
                        case ce:
                            var t = L();
                            return M(), t.elements = ut(fe, !0, !0), N(t, "ArrayExpression");
                        case de:
                            return at();
                        case Jt:
                            var t = L();
                            return M(), ht(t, !1);
                        case re:
                            return st();
                        default:
                            q()
                    }
                }

                function st() {
                    var t = L();
                    return M(), t.callee = it(rt(), !0), j(ge) ? t.arguments = ut(ve, !1) : t.arguments = Lt, N(t, "NewExpression")
                }

                function at() {
                    var t = L(), e = !0, i = !1;
                    for (t.properties = [], M(); !j(_e);) {
                        if (e) e = !1; else if (R(pe), ct.allowTrailingCommas && j(_e)) break;
                        var r, s = {key: ot()}, a = !1;
                        if (j(ye) ? (s.value = X(!0), r = s.kind = "init") : ct.ecmaVersion >= 5 && "Identifier" === s.key.type && ("get" === s.key.name || "set" === s.key.name) ? (a = i = !0, r = s.kind = s.key.name, s.key = ot(), bt !== ge && q(), s.value = ht(L(), !1)) : q(), "Identifier" === s.key.type && (Ot || i)) for (var o = 0; o < t.properties.length; ++o) {
                            var h = t.properties[o];
                            if (h.key.name === s.key.name) {
                                var u = r == h.kind || a && "init" === h.kind || "init" === r && ("get" === h.kind || "set" === h.kind);
                                u && !Ot && "init" === r && "init" === h.kind && (u = !1), u && n(s.key.start, "Redefinition of property")
                            }
                        }
                        t.properties.push(s)
                    }
                    return N(t, "ObjectExpression")
                }

                function ot() {
                    return bt === Et || bt === Bt ? rt() : lt(!0)
                }

                function ht(t, e) {
                    bt === jt ? t.id = lt() : e ? q() : t.id = null, t.params = [];
                    var i = !0;
                    for (R(ge); !j(ve);) i ? i = !1 : R(pe), t.params.push(lt());
                    var r = Tt, s = zt;
                    if (Tt = !0, zt = [], t.body = W(!0), Tt = r, zt = s, Ot || t.body.body.length && B(t.body.body[0])) for (var a = t.id ? -1 : 0; a < t.params.length; ++a) {
                        var o = a < 0 ? t.id : t.params[a];
                        if ((qe(o.name) || Ve(o.name)) && n(o.start, "Defining '" + o.name + "' in strict mode"), a >= 0) for (var h = 0; h < a; ++h) o.name === t.params[h].name && n(o.start, "Argument name clash in strict mode")
                    }
                    return N(t, e ? "FunctionDeclaration" : "FunctionExpression")
                }

                function ut(t, e, n) {
                    for (var i = [], r = !0; !j(t);) {
                        if (r) r = !1; else if (R(pe), e && ct.allowTrailingCommas && j(t)) break;
                        n && bt === pe ? i.push(null) : i.push(X(!0))
                    }
                    return i
                }

                function lt(t) {
                    var e = L();
                    return t && "everywhere" == ct.forbidReserved && (t = !1), bt === jt ? (!t && (ct.forbidReserved && (3 === ct.ecmaVersion ? De : Re)(Ct) || Ot && qe(Ct)) && ft.slice(mt, yt).indexOf("\\") == -1 && n(mt, "The keyword '" + Ct + "' is reserved"), e.name = Ct) : t && bt.keyword ? e.name = bt.keyword : q(), St = !1, M(), N(e, "Identifier")
                }

                t.version = "0.5.0";
                var ct, ft, dt, _t;
                t.parse = function (t, n) {
                    return ft = String(t), dt = ft.length, e(n), s(), U(ct.program)
                };
                var gt = t.defaultOptions = {
                    ecmaVersion: 5,
                    strictSemicolons: !1,
                    allowTrailingCommas: !0,
                    forbidReserved: !1,
                    allowReturnOutsideFunction: !1,
                    locations: !1,
                    onComment: null,
                    ranges: !1,
                    program: null,
                    sourceFile: null,
                    directSourceFile: null
                }, vt = t.getLineInfo = function (t, e) {
                    for (var n = 1, i = 0; ;) {
                        Xe.lastIndex = i;
                        var r = Xe.exec(t);
                        if (!(r && r.index < e)) break;
                        ++n, i = r.index + r[0].length
                    }
                    return {line: n, column: e - i}
                };
                t.tokenize = function (t, n) {
                    function i(t) {
                        return At = yt, y(t), r.start = mt, r.end = yt, r.startLoc = wt, r.endLoc = xt, r.type = bt, r.value = Ct, r
                    }

                    ft = String(t), dt = ft.length, e(n), s();
                    var r = {};
                    return i.jumpTo = function (t, e) {
                        if (pt = t, ct.locations) {
                            kt = 1, It = Xe.lastIndex = 0;
                            for (var n; (n = Xe.exec(ft)) && n.index < t;) ++kt, It = n.index + n[0].length
                        }
                        St = e, u()
                    }, i
                };
                var pt, mt, yt, wt, xt, bt, Ct, St, kt, It, Pt, At, Mt, Tt, zt, Ot, Lt = [], Et = {type: "num"},
                    Nt = {type: "regexp"}, Bt = {type: "string"}, jt = {type: "name"}, Ft = {type: "eof"},
                    Dt = {keyword: "break"}, Rt = {keyword: "case", beforeExpr: !0}, qt = {keyword: "catch"},
                    Vt = {keyword: "continue"}, Ut = {keyword: "debugger"}, Ht = {keyword: "default"},
                    Zt = {keyword: "do", isLoop: !0}, Wt = {keyword: "else", beforeExpr: !0}, $t = {keyword: "finally"},
                    Gt = {keyword: "for", isLoop: !0}, Jt = {keyword: "function"}, Xt = {keyword: "if"},
                    Kt = {keyword: "return", beforeExpr: !0}, Yt = {keyword: "switch"},
                    Qt = {keyword: "throw", beforeExpr: !0}, te = {keyword: "try"}, ee = {keyword: "var"},
                    ne = {keyword: "while", isLoop: !0}, ie = {keyword: "with"}, re = {keyword: "new", beforeExpr: !0},
                    se = {keyword: "this"}, ae = {keyword: "null", atomValue: null},
                    oe = {keyword: "true", atomValue: !0}, he = {keyword: "false", atomValue: !1},
                    ue = {keyword: "in", binop: 7, beforeExpr: !0}, le = {
                        "break": Dt,
                        "case": Rt,
                        "catch": qt,
                        "continue": Vt,
                        "debugger": Ut,
                        "default": Ht,
                        "do": Zt,
                        "else": Wt,
                        "finally": $t,
                        "for": Gt,
                        "function": Jt,
                        "if": Xt,
                        "return": Kt,
                        "switch": Yt,
                        "throw": Qt,
                        "try": te,
                        "var": ee,
                        "while": ne,
                        "with": ie,
                        "null": ae,
                        "true": oe,
                        "false": he,
                        "new": re,
                        "in": ue,
                        "instanceof": {keyword: "instanceof", binop: 7, beforeExpr: !0},
                        "this": se,
                        "typeof": {keyword: "typeof", prefix: !0, beforeExpr: !0},
                        "void": {keyword: "void", prefix: !0, beforeExpr: !0},
                        "delete": {keyword: "delete", prefix: !0, beforeExpr: !0}
                    }, ce = {type: "[", beforeExpr: !0}, fe = {type: "]"}, de = {type: "{", beforeExpr: !0},
                    _e = {type: "}"}, ge = {type: "(", beforeExpr: !0}, ve = {type: ")"},
                    pe = {type: ",", beforeExpr: !0}, me = {type: ";", beforeExpr: !0},
                    ye = {type: ":", beforeExpr: !0}, we = {type: "."}, xe = {type: "?", beforeExpr: !0},
                    be = {binop: 10, beforeExpr: !0}, Ce = {isAssign: !0, beforeExpr: !0},
                    Se = {isAssign: !0, beforeExpr: !0}, ke = {postfix: !0, prefix: !0, isUpdate: !0},
                    Ie = {prefix: !0, beforeExpr: !0}, Pe = {binop: 1, beforeExpr: !0}, Ae = {binop: 2, beforeExpr: !0},
                    Me = {binop: 3, beforeExpr: !0}, Te = {binop: 4, beforeExpr: !0}, ze = {binop: 5, beforeExpr: !0},
                    Oe = {binop: 6, beforeExpr: !0}, Le = {binop: 7, beforeExpr: !0}, Ee = {binop: 8, beforeExpr: !0},
                    Ne = {binop: 9, prefix: !0, beforeExpr: !0}, Be = {binop: 10, beforeExpr: !0};
                t.tokTypes = {
                    bracketL: ce,
                    bracketR: fe,
                    braceL: de,
                    braceR: _e,
                    parenL: ge,
                    parenR: ve,
                    comma: pe,
                    semi: me,
                    colon: ye,
                    dot: we,
                    question: xe,
                    slash: be,
                    eq: Ce,
                    name: jt,
                    eof: Ft,
                    num: Et,
                    regexp: Nt,
                    string: Bt
                };
                for (var je in le) t.tokTypes["_" + je] = le[je];
                var Fe,
                    De = i("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
                    Re = i("class enum extends super const export import"),
                    qe = i("implements interface let package private protected public static yield"),
                    Ve = i("eval arguments"),
                    Ue = i("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
                    He = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                    Ze = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
                    We = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f",
                    $e = new RegExp("[" + Ze + "]"), Ge = new RegExp("[" + Ze + We + "]"), Je = /[\n\r\u2028\u2029]/,
                    Xe = /\r\n|[\n\r\u2028\u2029]/g, Ke = t.isIdentifierStart = function (t) {
                        return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || t >= 170 && $e.test(String.fromCharCode(t)))
                    }, Ye = t.isIdentifierChar = function (t) {
                        return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || t >= 170 && Ge.test(String.fromCharCode(t))))
                    }, Qe = {kind: "loop"}, tn = {kind: "switch"}
            }), v.version || (v = null)
        }
        var w = {
                "+": "__add",
                "-": "__subtract",
                "*": "__multiply",
                "/": "__divide",
                "%": "__modulo",
                "==": "__equals",
                "!=": "__equals"
            }, x = {"-": "__negate", "+": "__self"},
            b = r.each(["add", "subtract", "multiply", "divide", "modulo", "equals", "negate"], function (t) {
                this["__" + t] = "#" + t
            }, {
                __self: function () {
                    return this
                }
            });
        return c.inject(b), d.inject(b), D.inject(b), n && ("complete" === i.readyState ? setTimeout(f) : H.add(n, {load: f})), {
            compile: h,
            execute: u,
            load: _,
            parse: e
        }
    }.call(this), paper = new (a.inject(r.exports, {
        Base: r,
        Numerical: u,
        Key: J,
        DomEvent: H,
        DomElement: U,
        document: i,
        window: n,
        Symbol: I,
        PlacedSymbol: k
    })), paper.agent.node && require("./node/extend.js")(paper), "function" == typeof define && define.amd ? define("paper", paper) : "object" == typeof module && module && (module.exports = paper), paper
}.call(this, "object" == typeof self ? self : null);
!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({height: e}, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({left: e}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({top: e}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({animStart: s.currentLeft}).animate({animStart: e}, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this, t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case"next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case"index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
            if (i < e[o]) {
                i = t;
                break
            }
            t = e[o]
        }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this, t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}), t.$slides.eq(i).animate({opacity: 1}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({data: {message: "index", index: parseInt(i)}}, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + s})
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({role: "presentation"}), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }

        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({opacity: 1}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {currentSlide: t}), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
            }
            s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({padding: "0px " + i.options.centerPadding}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({padding: i.options.centerPadding + " 0px"})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
        }), t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(s[t])
        }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case"left":
                case"down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case"start":
                e.swipeStart(i);
                break;
            case"move":
                e.swipeMove(i);
                break;
            case"end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : t.inView = e()
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {exports: {}, id: r, loaded: !1};
            return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        var i = n(2), o = r(i);
        t.exports = o["default"]
    }, function (t, e) {
        function n(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }

        t.exports = n
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(9), o = r(i), u = n(3), f = r(u), s = n(4), c = function () {
            if ("undefined" != typeof window) {
                var t = 100, e = ["scroll", "resize", "load"], n = {history: []},
                    r = {offset: {}, threshold: 0, test: s.inViewport}, i = (0, o["default"])(function () {
                        n.history.forEach(function (t) {
                            n[t].check()
                        })
                    }, t);
                e.forEach(function (t) {
                    return addEventListener(t, i)
                }), window.MutationObserver && addEventListener("DOMContentLoaded", function () {
                    new MutationObserver(i).observe(document.body, {attributes: !0, childList: !0, subtree: !0})
                });
                var u = function (t) {
                    if ("string" == typeof t) {
                        var e = [].slice.call(document.querySelectorAll(t));
                        return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), n.history.push(t)), n[t]
                    }
                };
                return u.offset = function (t) {
                    if (void 0 === t) return r.offset;
                    var e = function (t) {
                        return "number" == typeof t
                    };
                    return ["top", "right", "bottom", "left"].forEach(e(t) ? function (e) {
                        return r.offset[e] = t
                    } : function (n) {
                        return e(t[n]) ? r.offset[n] = t[n] : null
                    }), r.offset
                }, u.threshold = function (t) {
                    return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold
                }, u.test = function (t) {
                    return "function" == typeof t ? r.test = t : r.test
                }, u.is = function (t) {
                    return r.test(t, r)
                }, u.offset(0), u
            }
        };
        e["default"] = c()
    }, function (t, e) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), i = function () {
            function t(e, r) {
                n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
                    enter: [],
                    exit: []
                }, this.singles = {enter: [], exit: []}
            }

            return r(t, [{
                key: "check", value: function () {
                    var t = this;
                    return this.elements.forEach(function (e) {
                        var n = t.options.test(e, t.options), r = t.current.indexOf(e), i = r > -1, o = n && !i,
                            u = !n && i;
                        o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e))
                    }), this
                }
            }, {
                key: "on", value: function (t, e) {
                    return this.handlers[t].push(e), this
                }
            }, {
                key: "once", value: function (t, e) {
                    return this.singles[t].unshift(e), this
                }
            }, {
                key: "emit", value: function (t, e) {
                    for (; this.singles[t].length;) this.singles[t].pop()(e);
                    for (var n = this.handlers[t].length; --n > -1;) this.handlers[t][n](e);
                    return this
                }
            }]), t
        }();
        e["default"] = function (t, e) {
            return new i(t, e)
        }
    }, function (t, e) {
        "use strict";

        function n(t, e) {
            var n = t.getBoundingClientRect(), r = n.top, i = n.right, o = n.bottom, u = n.left, f = n.width,
                s = n.height, c = {t: o, r: window.innerWidth - u, b: window.innerHeight - r, l: i},
                a = {x: e.threshold * f, y: e.threshold * s};
            return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.inViewport = n
    }, function (t, e) {
        (function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(e, function () {
            return this
        }())
    }, function (t, e, n) {
        var r = n(5), i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o
    }, function (t, e, n) {
        function r(t, e, n) {
            function r(e) {
                var n = x, r = m;
                return x = m = void 0, E = e, w = t.apply(r, n)
            }

            function a(t) {
                return E = t, j = setTimeout(h, e), M ? r(t) : w
            }

            function l(t) {
                var n = t - O, r = t - E, i = e - n;
                return _ ? c(i, g - r) : i
            }

            function d(t) {
                var n = t - O, r = t - E;
                return void 0 === O || n >= e || n < 0 || _ && r >= g
            }

            function h() {
                var t = o();
                return d(t) ? p(t) : void(j = setTimeout(h, l(t)))
            }

            function p(t) {
                return j = void 0, T && x ? r(t) : (x = m = void 0, w)
            }

            function v() {
                void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0
            }

            function y() {
                return void 0 === j ? w : p(o())
            }

            function b() {
                var t = o(), n = d(t);
                if (x = arguments, m = this, O = t, n) {
                    if (void 0 === j) return a(O);
                    if (_) return j = setTimeout(h, e), r(O)
                }
                return void 0 === j && (j = setTimeout(h, e)), w
            }

            var x, m, g, w, j, O, E = 0, M = !1, _ = !1, T = !0;
            if ("function" != typeof t) throw new TypeError(f);
            return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b
        }

        var i = n(1), o = n(8), u = n(10), f = "Expected a function", s = Math.max, c = Math.min;
        t.exports = r
    }, function (t, e, n) {
        var r = n(6), i = function () {
            return r.Date.now()
        };
        t.exports = i
    }, function (t, e, n) {
        function r(t, e, n) {
            var r = !0, f = !0;
            if ("function" != typeof t) throw new TypeError(u);
            return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), i(t, e, {
                leading: r,
                maxWait: e,
                trailing: f
            })
        }

        var i = n(7), o = n(1), u = "Expected a function";
        t.exports = r
    }, function (t, e) {
        function n(t) {
            return t
        }

        t.exports = n
    }])
});
(function () {
    var TOUCH_SCREEN = ('ontouchstart' in window);
    var Site = {
        init: function () {
            Site.codeine();
            Site.internalLink();
            Site.fixMobileHeight();
            Site.toggleNav();
            Site.stickNav();
            Site.initRoadmapSlider();
            Site.browseList();
            Site.calculateCosts();
            Site.stepsSliders();
            Site.animateUsecase();
            !TOUCH_SCREEN && Site.snapAnimate()
        }, codeine: function () {
            console.log('Made with The Codeine. http://thecodeine.com/')
        }, internalLink: function () {
            $('a[href^="#"]').on('click', function (e) {
                e.preventDefault()
            });
            $('.section').on('click', '.internal-link', function (e) {
                e.preventDefault();
                var href = $(this).attr('href');
                var destination = $(href).offset().top;
                $('html, body').animate({scrollTop: destination}, 600)
            })
        }, fixMobileHeight: function () {
            if (TOUCH_SCREEN) {
                var sectionH = $(window).height();
                $('.section--fullpage').css('max-height', sectionH)
            }
        }, toggleNav: function () {
            var freezeVp = function (e) {
                e.preventDefault()
            }
            $('.nav-toggle').on('click', function () {
                $('.header').toggleClass('header--nav-open');
                if ($('.header').hasClass('header--nav-open')) {
                    setTimeout(function () {
                        $('body, html').addClass('nav-open')
                    }, 300)
                } else {
                    $('body, html').removeClass('nav-open')
                }
            })
        }, stickNav: function () {
            var lastScrollTop = 0;
            var navbarHeight = $('.header__bar').outerHeight();
            $(window).scroll(function (event) {
                hasScrolled()
            });

            function hasScrolled() {
                var st = $(this).scrollTop();
                if (st === 0) {
                    $('.header__bar').removeClass('header__bar--scrolled')
                }
                if (st > $(window).height()) {
                    $('.header__bar').addClass('header__bar--scrolled')
                }
                if (st > lastScrollTop && st > navbarHeight) {
                    $('.header__bar').removeClass('header__bar--down').addClass('header__bar--up')
                } else {
                    if (st + $(window).height() < $(document).height()) {
                        $('.header__bar').removeClass('header__bar--up').addClass('header__bar--down')
                    }
                }
                lastScrollTop = st
            }
        }, initRoadmapSlider: function () {
            var $slider = $('.roadmap__slider');

            function roadmapSlideNext() {
                $('.roadmap__arrow--prev').removeClass('roadmap__arrow--disabled');
                var prevSlideIndex = $slider.find('.slick-current').index() - 1;
                $slider.find('[data-slick-index="' + prevSlideIndex + '"]').addClass('roadmap__slide--before');
                $slider.find('.slick-active').removeClass('roadmap__slide--last');
                $slider.find('.slick-active').last().addClass('roadmap__slide--last');
                if ($slider.find('.slick-slide').last().data("slick-index") == $slider.find('.slick-active').last().data("slick-index")) {
                    $('.roadmap__arrow--next').addClass('roadmap__arrow--disabled')
                }
            }

            function roadmapSlidePrev() {
                $('.roadmap__arrow--next').removeClass('roadmap__arrow--disabled');
                $slider.find('.roadmap__slide--before.slick-active').removeClass('roadmap__slide--before');
                $slider.find('.roadmap__slide--last').removeClass('roadmap__slide--last');
                $slider.find('.slick-active').last().addClass('roadmap__slide--last');
                if (0 == $slider.find('.slick-active').first().data("slick-index")) {
                    $('.roadmap__arrow--prev').addClass('roadmap__arrow--disabled')
                }
            }

            $slider.slick({
                dots: !1,
                infinite: !1,
                swipe: !1,
                speed: 750,
                cssEase: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !1,
                responsive: [{breakpoint: 1024, settings: {slidesToShow: 2, slidesToScroll: 1, swipe: !0}}]
            });
            $slider.on('breakpoint', function () {
                $slider.find('.roadmap__slide').removeClass('roadmap__slide--last roadmap__slide--before')
            });
            $slider.find('.slick-active').last().addClass('roadmap__slide--last');
            $slider.find('.slick-arrow').on('click', function () {
                var $that = $(this);
                $(this).attr('disabled', !0);
                setTimeout(function () {
                    $that.attr('disabled', !1)
                }, 1000)
            });
            $slider.on('swipe', function (event, slick, direction) {
                if (direction === 'left') {
                    roadmapSlideNext()
                } else {
                    roadmapSlidePrev()
                }
            })
            $('.roadmap__arrow--next').on('click', function () {
                $slider.slick('slickNext');
                roadmapSlideNext()
            });
            $('.roadmap__arrow--prev').on('click', function () {
                $slider.slick('slickPrev');
                roadmapSlidePrev()
            })
        }, browseList: function () {
            $('.list:not(.list--links) dt').on('click', function () {
                $('.dd--active').not($(this).next()).slideUp(300).removeClass('dd--active');
                $(this).next().toggleClass('dd--active').slideToggle(300)
            });
            $('.list__close').on('click', function (e) {
                $(this).parent().toggleClass('dd--active').slideToggle(300)
            });
            if ($('body').hasClass('faq') && window.location.hash) {
                var questionId = window.location.hash;
                var destination = $(questionId).offset().top;
                $('html, body').animate({scrollTop: destination}, 1000);
                setTimeout(function () {
                    $(questionId).click()
                }, 1000)
            }
        }, calculateCosts: function () {
            function removeSpaces(x) {
                return x.split(' ').join('')
            }

            function seperateThousands(x) {
                x = removeSpaces(x);
                return x.replace(new RegExp("^(\\d{" + (x.length % 3 ? x.length % 3 : 0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim()
            }

            function formatMoney(x) {
                return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }

            function isNumericKey(e) {
                var k = e.keyCode;
                if (k >= 48 && k <= 57) {
                    return !0
                }
                return !1
            }

            function isDeleteKey(e) {
                var k = e.keyCode;
                if (k == 8 || k == 46) {
                    return !0
                }
                return !1
            }

            function isArrowKey(e) {
                var k = e.keyCode;
                if (k == 37 || k == 39) {
                    return !0
                }
                return !1
            }

            function isTextSelected(input) {
                if (typeof input.selectionStart == 'number') {
                    return input.selectionStart == 0 && input.selectionEnd == input.value.length
                } else if (typeof document.selection != 'undefined') {
                    input.focus();
                    return document.selection.createRange().text == input.value
                }
            }

            function adjustWidth(input, event) {
                if (isArrowKey(event)) {
                    return
                }
                var value = input.val();
                var length = value.length;
                if (isDeleteKey(event)) {
                    input.css('width', ((length - 1) + 'ch'));
                    return
                }
                var limit = input.attr('maxlength');
                length = (length + 1 > limit) ? length : length + 1;
                input.css('width', (length + 'ch'));
                if (value.length > (limit - 1)) {
                    event.preventDefault()
                }
            }

            function displayUserCosts() {
                var minutes = removeSpaces($('.calculator__input--active[name="users-minutes"]').val());
                var streamingCost = (minutes / 12).toFixed();
                var earnings = (minutes / 6).toFixed();
                $('#users-streaming-cost').text('$' + streamingCost + '.00');
                $('#users-earnings').text('$' + earnings + '.00')
            }

            function displayPublisherCosts() {
                var minutes = removeSpaces($('.calculator__input--active[name="publishers-minutes"]').val());
                var users = removeSpaces($('.calculator__input--active[name="publishers-users"]').val());
                var traditionalCosts = (minutes * users / 1000).toFixed();
                traditionalCosts = traditionalCosts < 1000 ? 1000 : Math.round(traditionalCosts / 1000) * 1000;
                var datahopCosts = traditionalCosts / 2;
                $('#publishers-traditional-costs').text(formatMoney(traditionalCosts));
                $('#publishers-user-costs').text(formatMoney(datahopCosts))
            }

            function displayCosts() {
                var calculator = $('.calculator').attr('id');
                if (calculator === 'users-calculator') {
                    displayUserCosts()
                } else if (calculator === 'publishers-calculator') {
                    displayPublisherCosts()
                }
            }

            $('.calculator__input').each(function () {
                var value = $(this).val();
                if ($(this).parent().hasClass('calculator__input-container--desktop')) {
                    value = seperateThousands(value)
                }
                $(this).val(value).css('width', (value.length + 'ch'))
            });
            $('.calculator__input').on('keydown', function (e) {
                if (e.shiftKey) {
                    e.preventDefault();
                    return
                }
                if (e.keyCode === 9) {
                    return
                }
                if (isTextSelected($(this)[0])) {
                    $(this).val('')
                }
                if ($(this).val().length >= $(this).attr('maxlength')) {
                    if (!isDeleteKey(e) && !isArrowKey(e)) {
                        e.preventDefault();
                        return
                    }
                }
                if (!isNumericKey(e) && !isDeleteKey(e)) {
                    if (!isArrowKey(e)) {
                        e.preventDefault()
                    }
                }
                if (isNumericKey(e)) {
                    adjustWidth($(this), e)
                }
            });
            $('.calculator__input').on('keyup', function (e) {
                var value = $(this).val();
                if (value.charAt(0) === '0' && value.length > 1) {
                    if (value.charAt(1) === '0') {
                        value = '0'
                    } else {
                        value = value.replace(/^0+/, '')
                    }
                }
                if ($(this).parent().hasClass('calculator__input-container--desktop')) {
                    value = seperateThousands(value)
                }
                var name = $(this).attr('name');
                $('.calculator__input[name="' + name + '"]').val(value).css('width', (value.length - (value.split(' ').length - 1) * 0.5 + 'ch'))
                displayCosts()
            });
            $('.calculator__input').on('focusout', function () {
                var calculator = $(this).closest('.calculator').attr('id');
                var value = $(this).val()
                if ($(this).val() === '') {
                    var initialValue = $(this).data('initial-value').toString();
                    if ($(this).parent().hasClass('calculator__input-container--desktop')) {
                        initialValue = seperateThousands(initialValue)
                    }
                    $(this).val(initialValue).css('width', $(this).val().length + 'ch')
                }
                displayCosts()
            });
            $('.calculator__input').on('focusin', function () {
                var res = $(this).data('res');
                $('.calculator__input[data-res="' + res + '"]').addClass('calculator__input--active')
                $('.calculator__input:not([data-res="' + res + '"])').removeClass('calculator__input--active')
            });
            $('.calculator__input').on('click', function (e) {
                if ($(this).parent().hasClass('calculator__input-container--mobile')) {
                    $(this).val('')
                }
                $(this).select()
            });
            $(window).resize(function () {
                $('.calculator__input--active').removeClass('calculator__input--active')
            })
        }, stepsSliders: function () {
            var slidesCount = $('.steps__slider--info .slide').length;
            $('.steps__slider').slick({
                arrows: !1,
                dots: !1,
                fade: !0,
                cssEase: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                infinite: !1,
                swipe: !1
            });
            $('.steps__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                $('.steps__count .step').eq(nextSlide).addClass('step--seen').nextAll().removeClass('step--seen step--past')
                $('.step--past').removeClass('step--past');
                $('.step--seen').prevAll().addClass('step--seen step--past')
            });
            $('.steps__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                if ($('.steps__slider--info .slide:last-of-type').hasClass('slick-active')) {
                    $('.steps__next').addClass('steps__next--final internal-link')
                } else {
                    $('.steps__next').removeClass('steps__next--final internal-link')
                }
            });
            $('.steps__next').on('click', function (e) {
                $('.steps__slider').slick('slickNext')
            });
            $('.steps__count .step__no').on('click', function () {
                var index = $(this).closest('.step').index();
                $('.steps__slider').slick('slickGoTo', index)
            })
        }, snapAnimate: function () {
            easeOutQuart = function (n) {
                return -1 * (Math.pow(n - 1, 4) - 1)
            };
            var speed = 500;
            var easing = easeOutQuart;
            [].slice.call(document.querySelectorAll('.icon')).forEach(function (el) {
                var pathEl = el.querySelectorAll('.icon__path');
                pathEl.forEach(function (path) {
                    pathHover = path.dataset.pathHover;
                    pathInit = path.dataset.pathInit;
                    var s = new Snap(path);
                    var pathConfig = {from: path.getAttribute('d'), to: pathHover};
                    el.addEventListener('mouseenter', function () {
                        s.animate({'path': pathConfig.to}, speed, easing)
                    });
                    el.addEventListener('mouseleave', function () {
                        s.animate({'path': pathConfig.from}, speed, easing)
                    })
                })
            })
        }, animateUsecase: function () {
            inView('.usecase').on('enter', function (element) {
                element.classList.add('usecase--active')
            });
            inView.threshold(0.5)
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        Site.init()
    })
}())