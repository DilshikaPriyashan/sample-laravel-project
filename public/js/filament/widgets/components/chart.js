function At() {}
var Do = (function () {
    let s = 0;
    return function () {
        return s++;
    };
})();
function N(s) {
    return s === null || typeof s > "u";
}
function $(s) {
    if (Array.isArray && Array.isArray(s)) return !0;
    let t = Object.prototype.toString.call(s);
    return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function A(s) {
    return (
        s !== null && Object.prototype.toString.call(s) === "[object Object]"
    );
}
var K = (s) => (typeof s == "number" || s instanceof Number) && isFinite(+s);
function mt(s, t) {
    return K(s) ? s : t;
}
function C(s, t) {
    return typeof s > "u" ? t : s;
}
var Eo = (s, t) =>
        typeof s == "string" && s.endsWith("%") ? parseFloat(s) / 100 : s / t,
    En = (s, t) =>
        typeof s == "string" && s.endsWith("%")
            ? (parseFloat(s) / 100) * t
            : +s;
function j(s, t, e) {
    if (s && typeof s.call == "function") return s.apply(e, t);
}
function H(s, t, e, i) {
    let n, r, o;
    if ($(s))
        if (((r = s.length), i))
            for (n = r - 1; n >= 0; n--) t.call(e, s[n], n);
        else for (n = 0; n < r; n++) t.call(e, s[n], n);
    else if (A(s))
        for (o = Object.keys(s), r = o.length, n = 0; n < r; n++)
            t.call(e, s[o[n]], o[n]);
}
function ws(s, t) {
    let e, i, n, r;
    if (!s || !t || s.length !== t.length) return !1;
    for (e = 0, i = s.length; e < i; ++e)
        if (
            ((n = s[e]),
            (r = t[e]),
            n.datasetIndex !== r.datasetIndex || n.index !== r.index)
        )
            return !1;
    return !0;
}
function ki(s) {
    if ($(s)) return s.map(ki);
    if (A(s)) {
        let t = Object.create(null),
            e = Object.keys(s),
            i = e.length,
            n = 0;
        for (; n < i; ++n) t[e[n]] = ki(s[e[n]]);
        return t;
    }
    return s;
}
function Co(s) {
    return ["__proto__", "prototype", "constructor"].indexOf(s) === -1;
}
function Dc(s, t, e, i) {
    if (!Co(s)) return;
    let n = t[s],
        r = e[s];
    A(n) && A(r) ? Ie(n, r, i) : (t[s] = ki(r));
}
function Ie(s, t, e) {
    let i = $(t) ? t : [t],
        n = i.length;
    if (!A(s)) return s;
    e = e || {};
    let r = e.merger || Dc;
    for (let o = 0; o < n; ++o) {
        if (((t = i[o]), !A(t))) continue;
        let a = Object.keys(t);
        for (let l = 0, c = a.length; l < c; ++l) r(a[l], s, t, e);
    }
    return s;
}
function Pe(s, t) {
    return Ie(s, t, { merger: Ec });
}
function Ec(s, t, e) {
    if (!Co(s)) return;
    let i = t[s],
        n = e[s];
    A(i) && A(n)
        ? Pe(i, n)
        : Object.prototype.hasOwnProperty.call(t, s) || (t[s] = ki(n));
}
var mo = { "": (s) => s, x: (s) => s.x, y: (s) => s.y };
function Bt(s, t) {
    return (mo[t] || (mo[t] = Cc(t)))(s);
}
function Cc(s) {
    let t = Ic(s);
    return (e) => {
        for (let i of t) {
            if (i === "") break;
            e = e && e[i];
        }
        return e;
    };
}
function Ic(s) {
    let t = s.split("."),
        e = [],
        i = "";
    for (let n of t)
        (i += n),
            i.endsWith("\\")
                ? (i = i.slice(0, -1) + ".")
                : (e.push(i), (i = ""));
    return e;
}
function Oi(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
var ft = (s) => typeof s < "u",
    Ht = (s) => typeof s == "function",
    Cn = (s, t) => {
        if (s.size !== t.size) return !1;
        for (let e of s) if (!t.has(e)) return !1;
        return !0;
    };
function Io(s) {
    return (
        s.type === "mouseup" || s.type === "click" || s.type === "contextmenu"
    );
}
var Y = Math.PI,
    B = 2 * Y,
    Fc = B + Y,
    Mi = Number.POSITIVE_INFINITY,
    Ac = Y / 180,
    Z = Y / 2,
    ys = Y / 4,
    go = (Y * 2) / 3,
    gt = Math.log10,
    Tt = Math.sign;
function In(s) {
    let t = Math.round(s);
    s = Re(s, t, s / 1e3) ? t : s;
    let e = Math.pow(10, Math.floor(gt(s))),
        i = s / e;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function Fo(s) {
    let t = [],
        e = Math.sqrt(s),
        i;
    for (i = 1; i < e; i++) s % i === 0 && (t.push(i), t.push(s / i));
    return e === (e | 0) && t.push(e), t.sort((n, r) => n - r).pop(), t;
}
function pe(s) {
    return !isNaN(parseFloat(s)) && isFinite(s);
}
function Re(s, t, e) {
    return Math.abs(s - t) < e;
}
function Ao(s, t) {
    let e = Math.round(s);
    return e - t <= s && e + t >= s;
}
function Fn(s, t, e) {
    let i, n, r;
    for (i = 0, n = s.length; i < n; i++)
        (r = s[i][e]),
            isNaN(r) ||
                ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r)));
}
function wt(s) {
    return s * (Y / 180);
}
function Di(s) {
    return s * (180 / Y);
}
function An(s) {
    if (!K(s)) return;
    let t = 1,
        e = 0;
    for (; Math.round(s * t) / t !== s; ) (t *= 10), e++;
    return e;
}
function Ln(s, t) {
    let e = t.x - s.x,
        i = t.y - s.y,
        n = Math.sqrt(e * e + i * i),
        r = Math.atan2(i, e);
    return r < -0.5 * Y && (r += B), { angle: r, distance: n };
}
function Ti(s, t) {
    return Math.sqrt(Math.pow(t.x - s.x, 2) + Math.pow(t.y - s.y, 2));
}
function Lc(s, t) {
    return ((s - t + Fc) % B) - Y;
}
function ht(s) {
    return ((s % B) + B) % B;
}
function Ne(s, t, e, i) {
    let n = ht(s),
        r = ht(t),
        o = ht(e),
        a = ht(r - n),
        l = ht(o - n),
        c = ht(n - r),
        h = ht(n - o);
    return n === r || n === o || (i && r === o) || (a > l && c < h);
}
function it(s, t, e) {
    return Math.max(t, Math.min(e, s));
}
function Lo(s) {
    return it(s, -32768, 32767);
}
function Lt(s, t, e, i = 1e-6) {
    return s >= Math.min(t, e) - i && s <= Math.max(t, e) + i;
}
function Ei(s, t, e) {
    e = e || ((o) => s[o] < t);
    let i = s.length - 1,
        n = 0,
        r;
    for (; i - n > 1; ) (r = (n + i) >> 1), e(r) ? (n = r) : (i = r);
    return { lo: n, hi: i };
}
var Ft = (s, t, e, i) => Ei(s, e, i ? (n) => s[n][t] <= e : (n) => s[n][t] < e),
    Po = (s, t, e) => Ei(s, e, (i) => s[i][t] >= e);
function Ro(s, t, e) {
    let i = 0,
        n = s.length;
    for (; i < n && s[i] < t; ) i++;
    for (; n > i && s[n - 1] > e; ) n--;
    return i > 0 || n < s.length ? s.slice(i, n) : s;
}
var No = ["push", "pop", "shift", "splice", "unshift"];
function Wo(s, t) {
    if (s._chartjs) {
        s._chartjs.listeners.push(t);
        return;
    }
    Object.defineProperty(s, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [t] },
    }),
        No.forEach((e) => {
            let i = "_onData" + Oi(e),
                n = s[e];
            Object.defineProperty(s, e, {
                configurable: !0,
                enumerable: !1,
                value(...r) {
                    let o = n.apply(this, r);
                    return (
                        s._chartjs.listeners.forEach((a) => {
                            typeof a[i] == "function" && a[i](...r);
                        }),
                        o
                    );
                },
            });
        });
}
function Pn(s, t) {
    let e = s._chartjs;
    if (!e) return;
    let i = e.listeners,
        n = i.indexOf(t);
    n !== -1 && i.splice(n, 1),
        !(i.length > 0) &&
            (No.forEach((r) => {
                delete s[r];
            }),
            delete s._chartjs);
}
function Rn(s) {
    let t = new Set(),
        e,
        i;
    for (e = 0, i = s.length; e < i; ++e) t.add(s[e]);
    return t.size === i ? s : Array.from(t);
}
var Nn = (function () {
    return typeof window > "u"
        ? function (s) {
              return s();
          }
        : window.requestAnimationFrame;
})();
function Wn(s, t, e) {
    let i = e || ((o) => Array.prototype.slice.call(o)),
        n = !1,
        r = [];
    return function (...o) {
        (r = i(o)),
            n ||
                ((n = !0),
                Nn.call(window, () => {
                    (n = !1), s.apply(t, r);
                }));
    };
}
function zo(s, t) {
    let e;
    return function (...i) {
        return (
            t ? (clearTimeout(e), (e = setTimeout(s, t, i))) : s.apply(this, i),
            t
        );
    };
}
var Ci = (s) => (s === "start" ? "left" : s === "end" ? "right" : "center"),
    ot = (s, t, e) => (s === "start" ? t : s === "end" ? e : (t + e) / 2),
    Vo = (s, t, e, i) =>
        s === (i ? "left" : "right") ? e : s === "center" ? (t + e) / 2 : t;
function zn(s, t, e) {
    let i = t.length,
        n = 0,
        r = i;
    if (s._sorted) {
        let { iScale: o, _parsed: a } = s,
            l = o.axis,
            {
                min: c,
                max: h,
                minDefined: u,
                maxDefined: d,
            } = o.getUserBounds();
        u &&
            (n = it(
                Math.min(
                    Ft(a, o.axis, c).lo,
                    e ? i : Ft(t, l, o.getPixelForValue(c)).lo,
                ),
                0,
                i - 1,
            )),
            d
                ? (r =
                      it(
                          Math.max(
                              Ft(a, o.axis, h, !0).hi + 1,
                              e
                                  ? 0
                                  : Ft(t, l, o.getPixelForValue(h), !0).hi + 1,
                          ),
                          n,
                          i,
                      ) - n)
                : (r = i - n);
    }
    return { start: n, count: r };
}
function Vn(s) {
    let { xScale: t, yScale: e, _scaleRanges: i } = s,
        n = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
    if (!i) return (s._scaleRanges = n), !0;
    let r =
        i.xmin !== t.min ||
        i.xmax !== t.max ||
        i.ymin !== e.min ||
        i.ymax !== e.max;
    return Object.assign(i, n), r;
}
var bi = (s) => s === 0 || s === 1,
    po = (s, t, e) =>
        -(Math.pow(2, 10 * (s -= 1)) * Math.sin(((s - t) * B) / e)),
    yo = (s, t, e) => Math.pow(2, -10 * s) * Math.sin(((s - t) * B) / e) + 1,
    Ce = {
        linear: (s) => s,
        easeInQuad: (s) => s * s,
        easeOutQuad: (s) => -s * (s - 2),
        easeInOutQuad: (s) =>
            (s /= 0.5) < 1 ? 0.5 * s * s : -0.5 * (--s * (s - 2) - 1),
        easeInCubic: (s) => s * s * s,
        easeOutCubic: (s) => (s -= 1) * s * s + 1,
        easeInOutCubic: (s) =>
            (s /= 0.5) < 1 ? 0.5 * s * s * s : 0.5 * ((s -= 2) * s * s + 2),
        easeInQuart: (s) => s * s * s * s,
        easeOutQuart: (s) => -((s -= 1) * s * s * s - 1),
        easeInOutQuart: (s) =>
            (s /= 0.5) < 1
                ? 0.5 * s * s * s * s
                : -0.5 * ((s -= 2) * s * s * s - 2),
        easeInQuint: (s) => s * s * s * s * s,
        easeOutQuint: (s) => (s -= 1) * s * s * s * s + 1,
        easeInOutQuint: (s) =>
            (s /= 0.5) < 1
                ? 0.5 * s * s * s * s * s
                : 0.5 * ((s -= 2) * s * s * s * s + 2),
        easeInSine: (s) => -Math.cos(s * Z) + 1,
        easeOutSine: (s) => Math.sin(s * Z),
        easeInOutSine: (s) => -0.5 * (Math.cos(Y * s) - 1),
        easeInExpo: (s) => (s === 0 ? 0 : Math.pow(2, 10 * (s - 1))),
        easeOutExpo: (s) => (s === 1 ? 1 : -Math.pow(2, -10 * s) + 1),
        easeInOutExpo: (s) =>
            bi(s)
                ? s
                : s < 0.5
                  ? 0.5 * Math.pow(2, 10 * (s * 2 - 1))
                  : 0.5 * (-Math.pow(2, -10 * (s * 2 - 1)) + 2),
        easeInCirc: (s) => (s >= 1 ? s : -(Math.sqrt(1 - s * s) - 1)),
        easeOutCirc: (s) => Math.sqrt(1 - (s -= 1) * s),
        easeInOutCirc: (s) =>
            (s /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - s * s) - 1)
                : 0.5 * (Math.sqrt(1 - (s -= 2) * s) + 1),
        easeInElastic: (s) => (bi(s) ? s : po(s, 0.075, 0.3)),
        easeOutElastic: (s) => (bi(s) ? s : yo(s, 0.075, 0.3)),
        easeInOutElastic(s) {
            return bi(s)
                ? s
                : s < 0.5
                  ? 0.5 * po(s * 2, 0.1125, 0.45)
                  : 0.5 + 0.5 * yo(s * 2 - 1, 0.1125, 0.45);
        },
        easeInBack(s) {
            return s * s * ((1.70158 + 1) * s - 1.70158);
        },
        easeOutBack(s) {
            return (s -= 1) * s * ((1.70158 + 1) * s + 1.70158) + 1;
        },
        easeInOutBack(s) {
            let t = 1.70158;
            return (s /= 0.5) < 1
                ? 0.5 * (s * s * (((t *= 1.525) + 1) * s - t))
                : 0.5 * ((s -= 2) * s * (((t *= 1.525) + 1) * s + t) + 2);
        },
        easeInBounce: (s) => 1 - Ce.easeOutBounce(1 - s),
        easeOutBounce(s) {
            return s < 1 / 2.75
                ? 7.5625 * s * s
                : s < 2 / 2.75
                  ? 7.5625 * (s -= 1.5 / 2.75) * s + 0.75
                  : s < 2.5 / 2.75
                    ? 7.5625 * (s -= 2.25 / 2.75) * s + 0.9375
                    : 7.5625 * (s -= 2.625 / 2.75) * s + 0.984375;
        },
        easeInOutBounce: (s) =>
            s < 0.5
                ? Ce.easeInBounce(s * 2) * 0.5
                : Ce.easeOutBounce(s * 2 - 1) * 0.5 + 0.5,
    };
function Ss(s) {
    return (s + 0.5) | 0;
}
var Kt = (s, t, e) => Math.max(Math.min(s, e), t);
function bs(s) {
    return Kt(Ss(s * 2.55), 0, 255);
}
function Jt(s) {
    return Kt(Ss(s * 255), 0, 255);
}
function Vt(s) {
    return Kt(Ss(s / 2.55) / 100, 0, 1);
}
function bo(s) {
    return Kt(Ss(s * 100), 0, 100);
}
var _t = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    },
    On = [..."0123456789ABCDEF"],
    Pc = (s) => On[s & 15],
    Rc = (s) => On[(s & 240) >> 4] + On[s & 15],
    xi = (s) => (s & 240) >> 4 === (s & 15),
    Nc = (s) => xi(s.r) && xi(s.g) && xi(s.b) && xi(s.a);
function Wc(s) {
    var t = s.length,
        e;
    return (
        s[0] === "#" &&
            (t === 4 || t === 5
                ? (e = {
                      r: 255 & (_t[s[1]] * 17),
                      g: 255 & (_t[s[2]] * 17),
                      b: 255 & (_t[s[3]] * 17),
                      a: t === 5 ? _t[s[4]] * 17 : 255,
                  })
                : (t === 7 || t === 9) &&
                  (e = {
                      r: (_t[s[1]] << 4) | _t[s[2]],
                      g: (_t[s[3]] << 4) | _t[s[4]],
                      b: (_t[s[5]] << 4) | _t[s[6]],
                      a: t === 9 ? (_t[s[7]] << 4) | _t[s[8]] : 255,
                  })),
        e
    );
}
var zc = (s, t) => (s < 255 ? t(s) : "");
function Vc(s) {
    var t = Nc(s) ? Pc : Rc;
    return s ? "#" + t(s.r) + t(s.g) + t(s.b) + zc(s.a, t) : void 0;
}
var Hc =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ho(s, t, e) {
    let i = t * Math.min(e, 1 - e),
        n = (r, o = (r + s / 30) % 12) =>
            e - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [n(0), n(8), n(4)];
}
function Bc(s, t, e) {
    let i = (n, r = (n + s / 60) % 6) =>
        e - e * t * Math.max(Math.min(r, 4 - r, 1), 0);
    return [i(5), i(3), i(1)];
}
function $c(s, t, e) {
    let i = Ho(s, 1, 0.5),
        n;
    for (
        t + e > 1 && ((n = 1 / (t + e)), (t *= n), (e *= n)), n = 0;
        n < 3;
        n++
    )
        (i[n] *= 1 - t - e), (i[n] += t);
    return i;
}
function jc(s, t, e, i, n) {
    return s === n
        ? (t - e) / i + (t < e ? 6 : 0)
        : t === n
          ? (e - s) / i + 2
          : (s - t) / i + 4;
}
function Hn(s) {
    let e = s.r / 255,
        i = s.g / 255,
        n = s.b / 255,
        r = Math.max(e, i, n),
        o = Math.min(e, i, n),
        a = (r + o) / 2,
        l,
        c,
        h;
    return (
        r !== o &&
            ((h = r - o),
            (c = a > 0.5 ? h / (2 - r - o) : h / (r + o)),
            (l = jc(e, i, n, h, r)),
            (l = l * 60 + 0.5)),
        [l | 0, c || 0, a]
    );
}
function Bn(s, t, e, i) {
    return (Array.isArray(t) ? s(t[0], t[1], t[2]) : s(t, e, i)).map(Jt);
}
function $n(s, t, e) {
    return Bn(Ho, s, t, e);
}
function Uc(s, t, e) {
    return Bn($c, s, t, e);
}
function Yc(s, t, e) {
    return Bn(Bc, s, t, e);
}
function Bo(s) {
    return ((s % 360) + 360) % 360;
}
function Zc(s) {
    let t = Hc.exec(s),
        e = 255,
        i;
    if (!t) return;
    t[5] !== i && (e = t[6] ? bs(+t[5]) : Jt(+t[5]));
    let n = Bo(+t[2]),
        r = +t[3] / 100,
        o = +t[4] / 100;
    return (
        t[1] === "hwb"
            ? (i = Uc(n, r, o))
            : t[1] === "hsv"
              ? (i = Yc(n, r, o))
              : (i = $n(n, r, o)),
        { r: i[0], g: i[1], b: i[2], a: e }
    );
}
function qc(s, t) {
    var e = Hn(s);
    (e[0] = Bo(e[0] + t)),
        (e = $n(e)),
        (s.r = e[0]),
        (s.g = e[1]),
        (s.b = e[2]);
}
function Gc(s) {
    if (!s) return;
    let t = Hn(s),
        e = t[0],
        i = bo(t[1]),
        n = bo(t[2]);
    return s.a < 255
        ? `hsla(${e}, ${i}%, ${n}%, ${Vt(s.a)})`
        : `hsl(${e}, ${i}%, ${n}%)`;
}
var xo = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh",
    },
    _o = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32",
    };
function Xc() {
    let s = {},
        t = Object.keys(_o),
        e = Object.keys(xo),
        i,
        n,
        r,
        o,
        a;
    for (i = 0; i < t.length; i++) {
        for (o = a = t[i], n = 0; n < e.length; n++)
            (r = e[n]), (a = a.replace(r, xo[r]));
        (r = parseInt(_o[o], 16)),
            (s[a] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
    }
    return s;
}
var _i;
function Kc(s) {
    _i || ((_i = Xc()), (_i.transparent = [0, 0, 0, 0]));
    let t = _i[s.toLowerCase()];
    return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
var Jc =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Qc(s) {
    let t = Jc.exec(s),
        e = 255,
        i,
        n,
        r;
    if (t) {
        if (t[7] !== i) {
            let o = +t[7];
            e = t[8] ? bs(o) : Kt(o * 255, 0, 255);
        }
        return (
            (i = +t[1]),
            (n = +t[3]),
            (r = +t[5]),
            (i = 255 & (t[2] ? bs(i) : Kt(i, 0, 255))),
            (n = 255 & (t[4] ? bs(n) : Kt(n, 0, 255))),
            (r = 255 & (t[6] ? bs(r) : Kt(r, 0, 255))),
            { r: i, g: n, b: r, a: e }
        );
    }
}
function th(s) {
    return (
        s &&
        (s.a < 255
            ? `rgba(${s.r}, ${s.g}, ${s.b}, ${Vt(s.a)})`
            : `rgb(${s.r}, ${s.g}, ${s.b})`)
    );
}
var kn = (s) =>
        s <= 0.0031308 ? s * 12.92 : Math.pow(s, 1 / 2.4) * 1.055 - 0.055,
    Ee = (s) => (s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4));
function eh(s, t, e) {
    let i = Ee(Vt(s.r)),
        n = Ee(Vt(s.g)),
        r = Ee(Vt(s.b));
    return {
        r: Jt(kn(i + e * (Ee(Vt(t.r)) - i))),
        g: Jt(kn(n + e * (Ee(Vt(t.g)) - n))),
        b: Jt(kn(r + e * (Ee(Vt(t.b)) - r))),
        a: s.a + e * (t.a - s.a),
    };
}
function wi(s, t, e) {
    if (s) {
        let i = Hn(s);
        (i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1))),
            (i = $n(i)),
            (s.r = i[0]),
            (s.g = i[1]),
            (s.b = i[2]);
    }
}
function $o(s, t) {
    return s && Object.assign(t || {}, s);
}
function wo(s) {
    var t = { r: 0, g: 0, b: 0, a: 255 };
    return (
        Array.isArray(s)
            ? s.length >= 3 &&
              ((t = { r: s[0], g: s[1], b: s[2], a: 255 }),
              s.length > 3 && (t.a = Jt(s[3])))
            : ((t = $o(s, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Jt(t.a))),
        t
    );
}
function sh(s) {
    return s.charAt(0) === "r" ? Qc(s) : Zc(s);
}
var Fe = class {
    constructor(t) {
        if (t instanceof Fe) return t;
        let e = typeof t,
            i;
        e === "object"
            ? (i = wo(t))
            : e === "string" && (i = Wc(t) || Kc(t) || sh(t)),
            (this._rgb = i),
            (this._valid = !!i);
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var t = $o(this._rgb);
        return t && (t.a = Vt(t.a)), t;
    }
    set rgb(t) {
        this._rgb = wo(t);
    }
    rgbString() {
        return this._valid ? th(this._rgb) : void 0;
    }
    hexString() {
        return this._valid ? Vc(this._rgb) : void 0;
    }
    hslString() {
        return this._valid ? Gc(this._rgb) : void 0;
    }
    mix(t, e) {
        if (t) {
            let i = this.rgb,
                n = t.rgb,
                r,
                o = e === r ? 0.5 : e,
                a = 2 * o - 1,
                l = i.a - n.a,
                c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
            (r = 1 - c),
                (i.r = 255 & (c * i.r + r * n.r + 0.5)),
                (i.g = 255 & (c * i.g + r * n.g + 0.5)),
                (i.b = 255 & (c * i.b + r * n.b + 0.5)),
                (i.a = o * i.a + (1 - o) * n.a),
                (this.rgb = i);
        }
        return this;
    }
    interpolate(t, e) {
        return t && (this._rgb = eh(this._rgb, t._rgb, e)), this;
    }
    clone() {
        return new Fe(this.rgb);
    }
    alpha(t) {
        return (this._rgb.a = Jt(t)), this;
    }
    clearer(t) {
        let e = this._rgb;
        return (e.a *= 1 - t), this;
    }
    greyscale() {
        let t = this._rgb,
            e = Ss(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
        return (t.r = t.g = t.b = e), this;
    }
    opaquer(t) {
        let e = this._rgb;
        return (e.a *= 1 + t), this;
    }
    negate() {
        let t = this._rgb;
        return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
        return wi(this._rgb, 2, t), this;
    }
    darken(t) {
        return wi(this._rgb, 2, -t), this;
    }
    saturate(t) {
        return wi(this._rgb, 1, t), this;
    }
    desaturate(t) {
        return wi(this._rgb, 1, -t), this;
    }
    rotate(t) {
        return qc(this._rgb, t), this;
    }
};
function jo(s) {
    return new Fe(s);
}
function Uo(s) {
    if (s && typeof s == "object") {
        let t = s.toString();
        return (
            t === "[object CanvasPattern]" || t === "[object CanvasGradient]"
        );
    }
    return !1;
}
function jn(s) {
    return Uo(s) ? s : jo(s);
}
function Mn(s) {
    return Uo(s) ? s : jo(s).saturate(0.5).darken(0.1).hexString();
}
var Qt = Object.create(null),
    Ii = Object.create(null);
function xs(s, t) {
    if (!t) return s;
    let e = t.split(".");
    for (let i = 0, n = e.length; i < n; ++i) {
        let r = e[i];
        s = s[r] || (s[r] = Object.create(null));
    }
    return s;
}
function Tn(s, t, e) {
    return typeof t == "string" ? Ie(xs(s, t), e) : Ie(xs(s, ""), t);
}
var Dn = class {
        constructor(t) {
            (this.animation = void 0),
                (this.backgroundColor = "rgba(0,0,0,0.1)"),
                (this.borderColor = "rgba(0,0,0,0.1)"),
                (this.color = "#666"),
                (this.datasets = {}),
                (this.devicePixelRatio = (e) =>
                    e.chart.platform.getDevicePixelRatio()),
                (this.elements = {}),
                (this.events = [
                    "mousemove",
                    "mouseout",
                    "click",
                    "touchstart",
                    "touchmove",
                ]),
                (this.font = {
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    size: 12,
                    style: "normal",
                    lineHeight: 1.2,
                    weight: null,
                }),
                (this.hover = {}),
                (this.hoverBackgroundColor = (e, i) => Mn(i.backgroundColor)),
                (this.hoverBorderColor = (e, i) => Mn(i.borderColor)),
                (this.hoverColor = (e, i) => Mn(i.color)),
                (this.indexAxis = "x"),
                (this.interaction = {
                    mode: "nearest",
                    intersect: !0,
                    includeInvisible: !1,
                }),
                (this.maintainAspectRatio = !0),
                (this.onHover = null),
                (this.onClick = null),
                (this.parsing = !0),
                (this.plugins = {}),
                (this.responsive = !0),
                (this.scale = void 0),
                (this.scales = {}),
                (this.showLine = !0),
                (this.drawActiveElementsOnTop = !0),
                this.describe(t);
        }
        set(t, e) {
            return Tn(this, t, e);
        }
        get(t) {
            return xs(this, t);
        }
        describe(t, e) {
            return Tn(Ii, t, e);
        }
        override(t, e) {
            return Tn(Qt, t, e);
        }
        route(t, e, i, n) {
            let r = xs(this, t),
                o = xs(this, i),
                a = "_" + e;
            Object.defineProperties(r, {
                [a]: { value: r[e], writable: !0 },
                [e]: {
                    enumerable: !0,
                    get() {
                        let l = this[a],
                            c = o[n];
                        return A(l) ? Object.assign({}, c, l) : C(l, c);
                    },
                    set(l) {
                        this[a] = l;
                    },
                },
            });
        }
    },
    L = new Dn({
        _scriptable: (s) => !s.startsWith("on"),
        _indexable: (s) => s !== "events",
        hover: { _fallback: "interaction" },
        interaction: { _scriptable: !1, _indexable: !1 },
    });
function ih(s) {
    return !s || N(s.size) || N(s.family)
        ? null
        : (s.style ? s.style + " " : "") +
              (s.weight ? s.weight + " " : "") +
              s.size +
              "px " +
              s.family;
}
function _s(s, t, e, i, n) {
    let r = t[n];
    return (
        r || ((r = t[n] = s.measureText(n).width), e.push(n)),
        r > i && (i = r),
        i
    );
}
function Yo(s, t, e, i) {
    i = i || {};
    let n = (i.data = i.data || {}),
        r = (i.garbageCollect = i.garbageCollect || []);
    i.font !== t &&
        ((n = i.data = {}), (r = i.garbageCollect = []), (i.font = t)),
        s.save(),
        (s.font = t);
    let o = 0,
        a = e.length,
        l,
        c,
        h,
        u,
        d;
    for (l = 0; l < a; l++)
        if (((u = e[l]), u != null && $(u) !== !0)) o = _s(s, n, r, o, u);
        else if ($(u))
            for (c = 0, h = u.length; c < h; c++)
                (d = u[c]), d != null && !$(d) && (o = _s(s, n, r, o, d));
    s.restore();
    let f = r.length / 2;
    if (f > e.length) {
        for (l = 0; l < f; l++) delete n[r[l]];
        r.splice(0, f);
    }
    return o;
}
function te(s, t, e) {
    let i = s.currentDevicePixelRatio,
        n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
    return Math.round((t - n) * i) / i + n;
}
function Un(s, t) {
    (t = t || s.getContext("2d")),
        t.save(),
        t.resetTransform(),
        t.clearRect(0, 0, s.width, s.height),
        t.restore();
}
function Fi(s, t, e, i) {
    Yn(s, t, e, i, null);
}
function Yn(s, t, e, i, n) {
    let r,
        o,
        a,
        l,
        c,
        h,
        u = t.pointStyle,
        d = t.rotation,
        f = t.radius,
        m = (d || 0) * Ac;
    if (
        u &&
        typeof u == "object" &&
        ((r = u.toString()),
        r === "[object HTMLImageElement]" || r === "[object HTMLCanvasElement]")
    ) {
        s.save(),
            s.translate(e, i),
            s.rotate(m),
            s.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height),
            s.restore();
        return;
    }
    if (!(isNaN(f) || f <= 0)) {
        switch ((s.beginPath(), u)) {
            default:
                n ? s.ellipse(e, i, n / 2, f, 0, 0, B) : s.arc(e, i, f, 0, B),
                    s.closePath();
                break;
            case "triangle":
                s.moveTo(e + Math.sin(m) * f, i - Math.cos(m) * f),
                    (m += go),
                    s.lineTo(e + Math.sin(m) * f, i - Math.cos(m) * f),
                    (m += go),
                    s.lineTo(e + Math.sin(m) * f, i - Math.cos(m) * f),
                    s.closePath();
                break;
            case "rectRounded":
                (c = f * 0.516),
                    (l = f - c),
                    (o = Math.cos(m + ys) * l),
                    (a = Math.sin(m + ys) * l),
                    s.arc(e - o, i - a, c, m - Y, m - Z),
                    s.arc(e + a, i - o, c, m - Z, m),
                    s.arc(e + o, i + a, c, m, m + Z),
                    s.arc(e - a, i + o, c, m + Z, m + Y),
                    s.closePath();
                break;
            case "rect":
                if (!d) {
                    (l = Math.SQRT1_2 * f),
                        (h = n ? n / 2 : l),
                        s.rect(e - h, i - l, 2 * h, 2 * l);
                    break;
                }
                m += ys;
            case "rectRot":
                (o = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - o, i - a),
                    s.lineTo(e + a, i - o),
                    s.lineTo(e + o, i + a),
                    s.lineTo(e - a, i + o),
                    s.closePath();
                break;
            case "crossRot":
                m += ys;
            case "cross":
                (o = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - o, i - a),
                    s.lineTo(e + o, i + a),
                    s.moveTo(e + a, i - o),
                    s.lineTo(e - a, i + o);
                break;
            case "star":
                (o = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - o, i - a),
                    s.lineTo(e + o, i + a),
                    s.moveTo(e + a, i - o),
                    s.lineTo(e - a, i + o),
                    (m += ys),
                    (o = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - o, i - a),
                    s.lineTo(e + o, i + a),
                    s.moveTo(e + a, i - o),
                    s.lineTo(e - a, i + o);
                break;
            case "line":
                (o = n ? n / 2 : Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - o, i - a),
                    s.lineTo(e + o, i + a);
                break;
            case "dash":
                s.moveTo(e, i),
                    s.lineTo(e + Math.cos(m) * f, i + Math.sin(m) * f);
                break;
        }
        s.fill(), t.borderWidth > 0 && s.stroke();
    }
}
function Ae(s, t, e) {
    return (
        (e = e || 0.5),
        !t ||
            (s &&
                s.x > t.left - e &&
                s.x < t.right + e &&
                s.y > t.top - e &&
                s.y < t.bottom + e)
    );
}
function ks(s, t) {
    s.save(),
        s.beginPath(),
        s.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
        s.clip();
}
function Ms(s) {
    s.restore();
}
function Zo(s, t, e, i, n) {
    if (!t) return s.lineTo(e.x, e.y);
    if (n === "middle") {
        let r = (t.x + e.x) / 2;
        s.lineTo(r, t.y), s.lineTo(r, e.y);
    } else (n === "after") != !!i ? s.lineTo(t.x, e.y) : s.lineTo(e.x, t.y);
    s.lineTo(e.x, e.y);
}
function qo(s, t, e, i) {
    if (!t) return s.lineTo(e.x, e.y);
    s.bezierCurveTo(
        i ? t.cp1x : t.cp2x,
        i ? t.cp1y : t.cp2y,
        i ? e.cp2x : e.cp1x,
        i ? e.cp2y : e.cp1y,
        e.x,
        e.y,
    );
}
function ee(s, t, e, i, n, r = {}) {
    let o = $(t) ? t : [t],
        a = r.strokeWidth > 0 && r.strokeColor !== "",
        l,
        c;
    for (s.save(), s.font = n.string, nh(s, r), l = 0; l < o.length; ++l)
        (c = o[l]),
            a &&
                (r.strokeColor && (s.strokeStyle = r.strokeColor),
                N(r.strokeWidth) || (s.lineWidth = r.strokeWidth),
                s.strokeText(c, e, i, r.maxWidth)),
            s.fillText(c, e, i, r.maxWidth),
            rh(s, e, i, c, r),
            (i += n.lineHeight);
    s.restore();
}
function nh(s, t) {
    t.translation && s.translate(t.translation[0], t.translation[1]),
        N(t.rotation) || s.rotate(t.rotation),
        t.color && (s.fillStyle = t.color),
        t.textAlign && (s.textAlign = t.textAlign),
        t.textBaseline && (s.textBaseline = t.textBaseline);
}
function rh(s, t, e, i, n) {
    if (n.strikethrough || n.underline) {
        let r = s.measureText(i),
            o = t - r.actualBoundingBoxLeft,
            a = t + r.actualBoundingBoxRight,
            l = e - r.actualBoundingBoxAscent,
            c = e + r.actualBoundingBoxDescent,
            h = n.strikethrough ? (l + c) / 2 : c;
        (s.strokeStyle = s.fillStyle),
            s.beginPath(),
            (s.lineWidth = n.decorationWidth || 2),
            s.moveTo(o, h),
            s.lineTo(a, h),
            s.stroke();
    }
}
function We(s, t) {
    let { x: e, y: i, w: n, h: r, radius: o } = t;
    s.arc(e + o.topLeft, i + o.topLeft, o.topLeft, -Z, Y, !0),
        s.lineTo(e, i + r - o.bottomLeft),
        s.arc(e + o.bottomLeft, i + r - o.bottomLeft, o.bottomLeft, Y, Z, !0),
        s.lineTo(e + n - o.bottomRight, i + r),
        s.arc(
            e + n - o.bottomRight,
            i + r - o.bottomRight,
            o.bottomRight,
            Z,
            0,
            !0,
        ),
        s.lineTo(e + n, i + o.topRight),
        s.arc(e + n - o.topRight, i + o.topRight, o.topRight, 0, -Z, !0),
        s.lineTo(e + o.topLeft, i);
}
var oh = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
    ah = new RegExp(
        /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
    );
function lh(s, t) {
    let e = ("" + s).match(oh);
    if (!e || e[1] === "normal") return t * 1.2;
    switch (((s = +e[2]), e[3])) {
        case "px":
            return s;
        case "%":
            s /= 100;
            break;
    }
    return t * s;
}
var ch = (s) => +s || 0;
function Ai(s, t) {
    let e = {},
        i = A(t),
        n = i ? Object.keys(t) : t,
        r = A(s) ? (i ? (o) => C(s[o], s[t[o]]) : (o) => s[o]) : () => s;
    for (let o of n) e[o] = ch(r(o));
    return e;
}
function Zn(s) {
    return Ai(s, { top: "y", right: "x", bottom: "y", left: "x" });
}
function se(s) {
    return Ai(s, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function at(s) {
    let t = Zn(s);
    return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function st(s, t) {
    (s = s || {}), (t = t || L.font);
    let e = C(s.size, t.size);
    typeof e == "string" && (e = parseInt(e, 10));
    let i = C(s.style, t.style);
    i &&
        !("" + i).match(ah) &&
        (console.warn('Invalid font style specified: "' + i + '"'), (i = ""));
    let n = {
        family: C(s.family, t.family),
        lineHeight: lh(C(s.lineHeight, t.lineHeight), e),
        size: e,
        style: i,
        weight: C(s.weight, t.weight),
        string: "",
    };
    return (n.string = ih(n)), n;
}
function ze(s, t, e, i) {
    let n = !0,
        r,
        o,
        a;
    for (r = 0, o = s.length; r < o; ++r)
        if (
            ((a = s[r]),
            a !== void 0 &&
                (t !== void 0 &&
                    typeof a == "function" &&
                    ((a = a(t)), (n = !1)),
                e !== void 0 && $(a) && ((a = a[e % a.length]), (n = !1)),
                a !== void 0))
        )
            return i && !n && (i.cacheable = !1), a;
}
function Go(s, t, e) {
    let { min: i, max: n } = s,
        r = En(t, (n - i) / 2),
        o = (a, l) => (e && a === 0 ? 0 : a + l);
    return { min: o(i, -Math.abs(r)), max: o(n, r) };
}
function $t(s, t) {
    return Object.assign(Object.create(s), t);
}
function Li(s, t = [""], e = s, i, n = () => s[0]) {
    ft(i) || (i = Jo("_fallback", s));
    let r = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: s,
        _rootScopes: e,
        _fallback: i,
        _getTarget: n,
        override: (o) => Li([o, ...s], t, e, i),
    };
    return new Proxy(r, {
        deleteProperty(o, a) {
            return delete o[a], delete o._keys, delete s[0][a], !0;
        },
        get(o, a) {
            return Xo(o, a, () => yh(a, t, s, o));
        },
        getOwnPropertyDescriptor(o, a) {
            return Reflect.getOwnPropertyDescriptor(o._scopes[0], a);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(s[0]);
        },
        has(o, a) {
            return ko(o).includes(a);
        },
        ownKeys(o) {
            return ko(o);
        },
        set(o, a, l) {
            let c = o._storage || (o._storage = n());
            return (o[a] = c[a] = l), delete o._keys, !0;
        },
    });
}
function ge(s, t, e, i) {
    let n = {
        _cacheable: !1,
        _proxy: s,
        _context: t,
        _subProxy: e,
        _stack: new Set(),
        _descriptors: qn(s, i),
        setContext: (r) => ge(s, r, e, i),
        override: (r) => ge(s.override(r), t, e, i),
    };
    return new Proxy(n, {
        deleteProperty(r, o) {
            return delete r[o], delete s[o], !0;
        },
        get(r, o, a) {
            return Xo(r, o, () => uh(r, o, a));
        },
        getOwnPropertyDescriptor(r, o) {
            return r._descriptors.allKeys
                ? Reflect.has(s, o)
                    ? { enumerable: !0, configurable: !0 }
                    : void 0
                : Reflect.getOwnPropertyDescriptor(s, o);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(s);
        },
        has(r, o) {
            return Reflect.has(s, o);
        },
        ownKeys() {
            return Reflect.ownKeys(s);
        },
        set(r, o, a) {
            return (s[o] = a), delete r[o], !0;
        },
    });
}
function qn(s, t = { scriptable: !0, indexable: !0 }) {
    let {
        _scriptable: e = t.scriptable,
        _indexable: i = t.indexable,
        _allKeys: n = t.allKeys,
    } = s;
    return {
        allKeys: n,
        scriptable: e,
        indexable: i,
        isScriptable: Ht(e) ? e : () => e,
        isIndexable: Ht(i) ? i : () => i,
    };
}
var hh = (s, t) => (s ? s + Oi(t) : t),
    Gn = (s, t) =>
        A(t) &&
        s !== "adapters" &&
        (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Xo(s, t, e) {
    if (Object.prototype.hasOwnProperty.call(s, t)) return s[t];
    let i = e();
    return (s[t] = i), i;
}
function uh(s, t, e) {
    let { _proxy: i, _context: n, _subProxy: r, _descriptors: o } = s,
        a = i[t];
    return (
        Ht(a) && o.isScriptable(t) && (a = dh(t, a, s, e)),
        $(a) && a.length && (a = fh(t, a, s, o.isIndexable)),
        Gn(t, a) && (a = ge(a, n, r && r[t], o)),
        a
    );
}
function dh(s, t, e, i) {
    let { _proxy: n, _context: r, _subProxy: o, _stack: a } = e;
    if (a.has(s))
        throw new Error(
            "Recursion detected: " + Array.from(a).join("->") + "->" + s,
        );
    return (
        a.add(s),
        (t = t(r, o || i)),
        a.delete(s),
        Gn(s, t) && (t = Xn(n._scopes, n, s, t)),
        t
    );
}
function fh(s, t, e, i) {
    let { _proxy: n, _context: r, _subProxy: o, _descriptors: a } = e;
    if (ft(r.index) && i(s)) t = t[r.index % t.length];
    else if (A(t[0])) {
        let l = t,
            c = n._scopes.filter((h) => h !== l);
        t = [];
        for (let h of l) {
            let u = Xn(c, n, s, h);
            t.push(ge(u, r, o && o[s], a));
        }
    }
    return t;
}
function Ko(s, t, e) {
    return Ht(s) ? s(t, e) : s;
}
var mh = (s, t) => (s === !0 ? t : typeof s == "string" ? Bt(t, s) : void 0);
function gh(s, t, e, i, n) {
    for (let r of t) {
        let o = mh(e, r);
        if (o) {
            s.add(o);
            let a = Ko(o._fallback, e, n);
            if (ft(a) && a !== e && a !== i) return a;
        } else if (o === !1 && ft(i) && e !== i) return null;
    }
    return !1;
}
function Xn(s, t, e, i) {
    let n = t._rootScopes,
        r = Ko(t._fallback, e, i),
        o = [...s, ...n],
        a = new Set();
    a.add(i);
    let l = So(a, o, e, r || e, i);
    return l === null ||
        (ft(r) && r !== e && ((l = So(a, o, r, l, i)), l === null))
        ? !1
        : Li(Array.from(a), [""], n, r, () => ph(t, e, i));
}
function So(s, t, e, i, n) {
    for (; e; ) e = gh(s, t, e, i, n);
    return e;
}
function ph(s, t, e) {
    let i = s._getTarget();
    t in i || (i[t] = {});
    let n = i[t];
    return $(n) && A(e) ? e : n;
}
function yh(s, t, e, i) {
    let n;
    for (let r of t)
        if (((n = Jo(hh(r, s), e)), ft(n)))
            return Gn(s, n) ? Xn(e, i, s, n) : n;
}
function Jo(s, t) {
    for (let e of t) {
        if (!e) continue;
        let i = e[s];
        if (ft(i)) return i;
    }
}
function ko(s) {
    let t = s._keys;
    return t || (t = s._keys = bh(s._scopes)), t;
}
function bh(s) {
    let t = new Set();
    for (let e of s)
        for (let i of Object.keys(e).filter((n) => !n.startsWith("_")))
            t.add(i);
    return Array.from(t);
}
function Kn(s, t, e, i) {
    let { iScale: n } = s,
        { key: r = "r" } = this._parsing,
        o = new Array(i),
        a,
        l,
        c,
        h;
    for (a = 0, l = i; a < l; ++a)
        (c = a + e), (h = t[c]), (o[a] = { r: n.parse(Bt(h, r), c) });
    return o;
}
var xh = Number.EPSILON || 1e-14,
    Le = (s, t) => t < s.length && !s[t].skip && s[t],
    Qo = (s) => (s === "x" ? "y" : "x");
function _h(s, t, e, i) {
    let n = s.skip ? t : s,
        r = t,
        o = e.skip ? t : e,
        a = Ti(r, n),
        l = Ti(o, r),
        c = a / (a + l),
        h = l / (a + l);
    (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
    let u = i * c,
        d = i * h;
    return {
        previous: { x: r.x - u * (o.x - n.x), y: r.y - u * (o.y - n.y) },
        next: { x: r.x + d * (o.x - n.x), y: r.y + d * (o.y - n.y) },
    };
}
function wh(s, t, e) {
    let i = s.length,
        n,
        r,
        o,
        a,
        l,
        c = Le(s, 0);
    for (let h = 0; h < i - 1; ++h)
        if (((l = c), (c = Le(s, h + 1)), !(!l || !c))) {
            if (Re(t[h], 0, xh)) {
                e[h] = e[h + 1] = 0;
                continue;
            }
            (n = e[h] / t[h]),
                (r = e[h + 1] / t[h]),
                (a = Math.pow(n, 2) + Math.pow(r, 2)),
                !(a <= 9) &&
                    ((o = 3 / Math.sqrt(a)),
                    (e[h] = n * o * t[h]),
                    (e[h + 1] = r * o * t[h]));
        }
}
function Sh(s, t, e = "x") {
    let i = Qo(e),
        n = s.length,
        r,
        o,
        a,
        l = Le(s, 0);
    for (let c = 0; c < n; ++c) {
        if (((o = a), (a = l), (l = Le(s, c + 1)), !a)) continue;
        let h = a[e],
            u = a[i];
        o &&
            ((r = (h - o[e]) / 3),
            (a[`cp1${e}`] = h - r),
            (a[`cp1${i}`] = u - r * t[c])),
            l &&
                ((r = (l[e] - h) / 3),
                (a[`cp2${e}`] = h + r),
                (a[`cp2${i}`] = u + r * t[c]));
    }
}
function kh(s, t = "x") {
    let e = Qo(t),
        i = s.length,
        n = Array(i).fill(0),
        r = Array(i),
        o,
        a,
        l,
        c = Le(s, 0);
    for (o = 0; o < i; ++o)
        if (((a = l), (l = c), (c = Le(s, o + 1)), !!l)) {
            if (c) {
                let h = c[t] - l[t];
                n[o] = h !== 0 ? (c[e] - l[e]) / h : 0;
            }
            r[o] = a
                ? c
                    ? Tt(n[o - 1]) !== Tt(n[o])
                        ? 0
                        : (n[o - 1] + n[o]) / 2
                    : n[o - 1]
                : n[o];
        }
    wh(s, n, r), Sh(s, r, t);
}
function Si(s, t, e) {
    return Math.max(Math.min(s, e), t);
}
function Mh(s, t) {
    let e,
        i,
        n,
        r,
        o,
        a = Ae(s[0], t);
    for (e = 0, i = s.length; e < i; ++e)
        (o = r),
            (r = a),
            (a = e < i - 1 && Ae(s[e + 1], t)),
            r &&
                ((n = s[e]),
                o &&
                    ((n.cp1x = Si(n.cp1x, t.left, t.right)),
                    (n.cp1y = Si(n.cp1y, t.top, t.bottom))),
                a &&
                    ((n.cp2x = Si(n.cp2x, t.left, t.right)),
                    (n.cp2y = Si(n.cp2y, t.top, t.bottom))));
}
function ta(s, t, e, i, n) {
    let r, o, a, l;
    if (
        (t.spanGaps && (s = s.filter((c) => !c.skip)),
        t.cubicInterpolationMode === "monotone")
    )
        kh(s, n);
    else {
        let c = i ? s[s.length - 1] : s[0];
        for (r = 0, o = s.length; r < o; ++r)
            (a = s[r]),
                (l = _h(
                    c,
                    a,
                    s[Math.min(r + 1, o - (i ? 0 : 1)) % o],
                    t.tension,
                )),
                (a.cp1x = l.previous.x),
                (a.cp1y = l.previous.y),
                (a.cp2x = l.next.x),
                (a.cp2y = l.next.y),
                (c = a);
    }
    t.capBezierPoints && Mh(s, e);
}
function Jn() {
    return typeof window < "u" && typeof document < "u";
}
function Pi(s) {
    let t = s.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function vi(s, t, e) {
    let i;
    return (
        typeof s == "string"
            ? ((i = parseInt(s, 10)),
              s.indexOf("%") !== -1 && (i = (i / 100) * t.parentNode[e]))
            : (i = s),
        i
    );
}
var Ri = (s) => window.getComputedStyle(s, null);
function Th(s, t) {
    return Ri(s).getPropertyValue(t);
}
var vh = ["top", "right", "bottom", "left"];
function me(s, t, e) {
    let i = {};
    e = e ? "-" + e : "";
    for (let n = 0; n < 4; n++) {
        let r = vh[n];
        i[r] = parseFloat(s[t + "-" + r + e]) || 0;
    }
    return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
var Oh = (s, t, e) => (s > 0 || t > 0) && (!e || !e.shadowRoot);
function Dh(s, t) {
    let e = s.touches,
        i = e && e.length ? e[0] : s,
        { offsetX: n, offsetY: r } = i,
        o = !1,
        a,
        l;
    if (Oh(n, r, s.target)) (a = n), (l = r);
    else {
        let c = t.getBoundingClientRect();
        (a = i.clientX - c.left), (l = i.clientY - c.top), (o = !0);
    }
    return { x: a, y: l, box: o };
}
function ie(s, t) {
    if ("native" in s) return s;
    let { canvas: e, currentDevicePixelRatio: i } = t,
        n = Ri(e),
        r = n.boxSizing === "border-box",
        o = me(n, "padding"),
        a = me(n, "border", "width"),
        { x: l, y: c, box: h } = Dh(s, e),
        u = o.left + (h && a.left),
        d = o.top + (h && a.top),
        { width: f, height: m } = t;
    return (
        r && ((f -= o.width + a.width), (m -= o.height + a.height)),
        {
            x: Math.round((((l - u) / f) * e.width) / i),
            y: Math.round((((c - d) / m) * e.height) / i),
        }
    );
}
function Eh(s, t, e) {
    let i, n;
    if (t === void 0 || e === void 0) {
        let r = Pi(s);
        if (!r) (t = s.clientWidth), (e = s.clientHeight);
        else {
            let o = r.getBoundingClientRect(),
                a = Ri(r),
                l = me(a, "border", "width"),
                c = me(a, "padding");
            (t = o.width - c.width - l.width),
                (e = o.height - c.height - l.height),
                (i = vi(a.maxWidth, r, "clientWidth")),
                (n = vi(a.maxHeight, r, "clientHeight"));
        }
    }
    return { width: t, height: e, maxWidth: i || Mi, maxHeight: n || Mi };
}
var vn = (s) => Math.round(s * 10) / 10;
function ea(s, t, e, i) {
    let n = Ri(s),
        r = me(n, "margin"),
        o = vi(n.maxWidth, s, "clientWidth") || Mi,
        a = vi(n.maxHeight, s, "clientHeight") || Mi,
        l = Eh(s, t, e),
        { width: c, height: h } = l;
    if (n.boxSizing === "content-box") {
        let u = me(n, "border", "width"),
            d = me(n, "padding");
        (c -= d.width + u.width), (h -= d.height + u.height);
    }
    return (
        (c = Math.max(0, c - r.width)),
        (h = Math.max(0, i ? Math.floor(c / i) : h - r.height)),
        (c = vn(Math.min(c, o, l.maxWidth))),
        (h = vn(Math.min(h, a, l.maxHeight))),
        c && !h && (h = vn(c / 2)),
        { width: c, height: h }
    );
}
function Qn(s, t, e) {
    let i = t || 1,
        n = Math.floor(s.height * i),
        r = Math.floor(s.width * i);
    (s.height = n / i), (s.width = r / i);
    let o = s.canvas;
    return (
        o.style &&
            (e || (!o.style.height && !o.style.width)) &&
            ((o.style.height = `${s.height}px`),
            (o.style.width = `${s.width}px`)),
        s.currentDevicePixelRatio !== i || o.height !== n || o.width !== r
            ? ((s.currentDevicePixelRatio = i),
              (o.height = n),
              (o.width = r),
              s.ctx.setTransform(i, 0, 0, i, 0, 0),
              !0)
            : !1
    );
}
var sa = (function () {
    let s = !1;
    try {
        let t = {
            get passive() {
                return (s = !0), !1;
            },
        };
        window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
    } catch {}
    return s;
})();
function tr(s, t) {
    let e = Th(s, t),
        i = e && e.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
}
function Xt(s, t, e, i) {
    return { x: s.x + e * (t.x - s.x), y: s.y + e * (t.y - s.y) };
}
function ia(s, t, e, i) {
    return {
        x: s.x + e * (t.x - s.x),
        y:
            i === "middle"
                ? e < 0.5
                    ? s.y
                    : t.y
                : i === "after"
                  ? e < 1
                      ? s.y
                      : t.y
                  : e > 0
                    ? t.y
                    : s.y,
    };
}
function na(s, t, e, i) {
    let n = { x: s.cp2x, y: s.cp2y },
        r = { x: t.cp1x, y: t.cp1y },
        o = Xt(s, n, e),
        a = Xt(n, r, e),
        l = Xt(r, t, e),
        c = Xt(o, a, e),
        h = Xt(a, l, e);
    return Xt(c, h, e);
}
var Mo = new Map();
function Ch(s, t) {
    t = t || {};
    let e = s + JSON.stringify(t),
        i = Mo.get(e);
    return i || ((i = new Intl.NumberFormat(s, t)), Mo.set(e, i)), i;
}
function Ve(s, t, e) {
    return Ch(t, e).format(s);
}
var Ih = function (s, t) {
        return {
            x(e) {
                return s + s + t - e;
            },
            setWidth(e) {
                t = e;
            },
            textAlign(e) {
                return e === "center" ? e : e === "right" ? "left" : "right";
            },
            xPlus(e, i) {
                return e - i;
            },
            leftForLtr(e, i) {
                return e - i;
            },
        };
    },
    Fh = function () {
        return {
            x(s) {
                return s;
            },
            setWidth(s) {},
            textAlign(s) {
                return s;
            },
            xPlus(s, t) {
                return s + t;
            },
            leftForLtr(s, t) {
                return s;
            },
        };
    };
function ye(s, t, e) {
    return s ? Ih(t, e) : Fh();
}
function er(s, t) {
    let e, i;
    (t === "ltr" || t === "rtl") &&
        ((e = s.canvas.style),
        (i = [
            e.getPropertyValue("direction"),
            e.getPropertyPriority("direction"),
        ]),
        e.setProperty("direction", t, "important"),
        (s.prevTextDirection = i));
}
function sr(s, t) {
    t !== void 0 &&
        (delete s.prevTextDirection,
        s.canvas.style.setProperty("direction", t[0], t[1]));
}
function ra(s) {
    return s === "angle"
        ? { between: Ne, compare: Lc, normalize: ht }
        : { between: Lt, compare: (t, e) => t - e, normalize: (t) => t };
}
function To({ start: s, end: t, count: e, loop: i, style: n }) {
    return {
        start: s % e,
        end: t % e,
        loop: i && (t - s + 1) % e === 0,
        style: n,
    };
}
function Ah(s, t, e) {
    let { property: i, start: n, end: r } = e,
        { between: o, normalize: a } = ra(i),
        l = t.length,
        { start: c, end: h, loop: u } = s,
        d,
        f;
    if (u) {
        for (
            c += l, h += l, d = 0, f = l;
            d < f && o(a(t[c % l][i]), n, r);
            ++d
        )
            c--, h--;
        (c %= l), (h %= l);
    }
    return h < c && (h += l), { start: c, end: h, loop: u, style: s.style };
}
function ir(s, t, e) {
    if (!e) return [s];
    let { property: i, start: n, end: r } = e,
        o = t.length,
        { compare: a, between: l, normalize: c } = ra(i),
        { start: h, end: u, loop: d, style: f } = Ah(s, t, e),
        m = [],
        g = !1,
        p = null,
        y,
        b,
        _,
        w = () => l(n, _, y) && a(n, _) !== 0,
        x = () => a(r, y) === 0 || l(r, _, y),
        S = () => g || w(),
        k = () => !g || x();
    for (let O = h, v = h; O <= u; ++O)
        (b = t[O % o]),
            !b.skip &&
                ((y = c(b[i])),
                y !== _ &&
                    ((g = l(y, n, r)),
                    p === null && S() && (p = a(y, n) === 0 ? O : v),
                    p !== null &&
                        k() &&
                        (m.push(
                            To({
                                start: p,
                                end: O,
                                loop: d,
                                count: o,
                                style: f,
                            }),
                        ),
                        (p = null)),
                    (v = O),
                    (_ = y)));
    return (
        p !== null &&
            m.push(To({ start: p, end: u, loop: d, count: o, style: f })),
        m
    );
}
function nr(s, t) {
    let e = [],
        i = s.segments;
    for (let n = 0; n < i.length; n++) {
        let r = ir(i[n], s.points, t);
        r.length && e.push(...r);
    }
    return e;
}
function Lh(s, t, e, i) {
    let n = 0,
        r = t - 1;
    if (e && !i) for (; n < t && !s[n].skip; ) n++;
    for (; n < t && s[n].skip; ) n++;
    for (n %= t, e && (r += n); r > n && s[r % t].skip; ) r--;
    return (r %= t), { start: n, end: r };
}
function Ph(s, t, e, i) {
    let n = s.length,
        r = [],
        o = t,
        a = s[t],
        l;
    for (l = t + 1; l <= e; ++l) {
        let c = s[l % n];
        c.skip || c.stop
            ? a.skip ||
              ((i = !1),
              r.push({ start: t % n, end: (l - 1) % n, loop: i }),
              (t = o = c.stop ? l : null))
            : ((o = l), a.skip && (t = l)),
            (a = c);
    }
    return o !== null && r.push({ start: t % n, end: o % n, loop: i }), r;
}
function oa(s, t) {
    let e = s.points,
        i = s.options.spanGaps,
        n = e.length;
    if (!n) return [];
    let r = !!s._loop,
        { start: o, end: a } = Lh(e, n, r, i);
    if (i === !0) return vo(s, [{ start: o, end: a, loop: r }], e, t);
    let l = a < o ? a + n : a,
        c = !!s._fullLoop && o === 0 && a === n - 1;
    return vo(s, Ph(e, o, l, c), e, t);
}
function vo(s, t, e, i) {
    return !i || !i.setContext || !e ? t : Rh(s, t, e, i);
}
function Rh(s, t, e, i) {
    let n = s._chart.getContext(),
        r = Oo(s.options),
        {
            _datasetIndex: o,
            options: { spanGaps: a },
        } = s,
        l = e.length,
        c = [],
        h = r,
        u = t[0].start,
        d = u;
    function f(m, g, p, y) {
        let b = a ? -1 : 1;
        if (m !== g) {
            for (m += l; e[m % l].skip; ) m -= b;
            for (; e[g % l].skip; ) g += b;
            m % l !== g % l &&
                (c.push({ start: m % l, end: g % l, loop: p, style: y }),
                (h = y),
                (u = g % l));
        }
    }
    for (let m of t) {
        u = a ? u : m.start;
        let g = e[u % l],
            p;
        for (d = u + 1; d <= m.end; d++) {
            let y = e[d % l];
            (p = Oo(
                i.setContext(
                    $t(n, {
                        type: "segment",
                        p0: g,
                        p1: y,
                        p0DataIndex: (d - 1) % l,
                        p1DataIndex: d % l,
                        datasetIndex: o,
                    }),
                ),
            )),
                Nh(p, h) && f(u, d - 1, m.loop, h),
                (g = y),
                (h = p);
        }
        u < d - 1 && f(u, d - 1, m.loop, h);
    }
    return c;
}
function Oo(s) {
    return {
        backgroundColor: s.backgroundColor,
        borderCapStyle: s.borderCapStyle,
        borderDash: s.borderDash,
        borderDashOffset: s.borderDashOffset,
        borderJoinStyle: s.borderJoinStyle,
        borderWidth: s.borderWidth,
        borderColor: s.borderColor,
    };
}
function Nh(s, t) {
    return t && JSON.stringify(s) !== JSON.stringify(t);
}
var mr = class {
        constructor() {
            (this._request = null),
                (this._charts = new Map()),
                (this._running = !1),
                (this._lastDate = void 0);
        }
        _notify(t, e, i, n) {
            let r = e.listeners[n],
                o = e.duration;
            r.forEach((a) =>
                a({
                    chart: t,
                    initial: e.initial,
                    numSteps: o,
                    currentStep: Math.min(i - e.start, o),
                }),
            );
        }
        _refresh() {
            this._request ||
                ((this._running = !0),
                (this._request = Nn.call(window, () => {
                    this._update(),
                        (this._request = null),
                        this._running && this._refresh();
                })));
        }
        _update(t = Date.now()) {
            let e = 0;
            this._charts.forEach((i, n) => {
                if (!i.running || !i.items.length) return;
                let r = i.items,
                    o = r.length - 1,
                    a = !1,
                    l;
                for (; o >= 0; --o)
                    (l = r[o]),
                        l._active
                            ? (l._total > i.duration && (i.duration = l._total),
                              l.tick(t),
                              (a = !0))
                            : ((r[o] = r[r.length - 1]), r.pop());
                a && (n.draw(), this._notify(n, i, t, "progress")),
                    r.length ||
                        ((i.running = !1),
                        this._notify(n, i, t, "complete"),
                        (i.initial = !1)),
                    (e += r.length);
            }),
                (this._lastDate = t),
                e === 0 && (this._running = !1);
        }
        _getAnims(t) {
            let e = this._charts,
                i = e.get(t);
            return (
                i ||
                    ((i = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: { complete: [], progress: [] },
                    }),
                    e.set(t, i)),
                i
            );
        }
        listen(t, e, i) {
            this._getAnims(t).listeners[e].push(i);
        }
        add(t, e) {
            !e || !e.length || this._getAnims(t).items.push(...e);
        }
        has(t) {
            return this._getAnims(t).items.length > 0;
        }
        start(t) {
            let e = this._charts.get(t);
            e &&
                ((e.running = !0),
                (e.start = Date.now()),
                (e.duration = e.items.reduce(
                    (i, n) => Math.max(i, n._duration),
                    0,
                )),
                this._refresh());
        }
        running(t) {
            if (!this._running) return !1;
            let e = this._charts.get(t);
            return !(!e || !e.running || !e.items.length);
        }
        stop(t) {
            let e = this._charts.get(t);
            if (!e || !e.items.length) return;
            let i = e.items,
                n = i.length - 1;
            for (; n >= 0; --n) i[n].cancel();
            (e.items = []), this._notify(t, e, Date.now(), "complete");
        }
        remove(t) {
            return this._charts.delete(t);
        }
    },
    jt = new mr(),
    aa = "transparent",
    Wh = {
        boolean(s, t, e) {
            return e > 0.5 ? t : s;
        },
        color(s, t, e) {
            let i = jn(s || aa),
                n = i.valid && jn(t || aa);
            return n && n.valid ? n.mix(i, e).hexString() : t;
        },
        number(s, t, e) {
            return s + (t - s) * e;
        },
    },
    gr = class {
        constructor(t, e, i, n) {
            let r = e[i];
            n = ze([t.to, n, r, t.from]);
            let o = ze([t.from, r, n]);
            (this._active = !0),
                (this._fn = t.fn || Wh[t.type || typeof o]),
                (this._easing = Ce[t.easing] || Ce.linear),
                (this._start = Math.floor(Date.now() + (t.delay || 0))),
                (this._duration = this._total = Math.floor(t.duration)),
                (this._loop = !!t.loop),
                (this._target = e),
                (this._prop = i),
                (this._from = o),
                (this._to = n),
                (this._promises = void 0);
        }
        active() {
            return this._active;
        }
        update(t, e, i) {
            if (this._active) {
                this._notify(!1);
                let n = this._target[this._prop],
                    r = i - this._start,
                    o = this._duration - r;
                (this._start = i),
                    (this._duration = Math.floor(Math.max(o, t.duration))),
                    (this._total += r),
                    (this._loop = !!t.loop),
                    (this._to = ze([t.to, e, n, t.from])),
                    (this._from = ze([t.from, n, e]));
            }
        }
        cancel() {
            this._active &&
                (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(t) {
            let e = t - this._start,
                i = this._duration,
                n = this._prop,
                r = this._from,
                o = this._loop,
                a = this._to,
                l;
            if (((this._active = r !== a && (o || e < i)), !this._active)) {
                (this._target[n] = a), this._notify(!0);
                return;
            }
            if (e < 0) {
                this._target[n] = r;
                return;
            }
            (l = (e / i) % 2),
                (l = o && l > 1 ? 2 - l : l),
                (l = this._easing(Math.min(1, Math.max(0, l)))),
                (this._target[n] = this._fn(r, a, l));
        }
        wait() {
            let t = this._promises || (this._promises = []);
            return new Promise((e, i) => {
                t.push({ res: e, rej: i });
            });
        }
        _notify(t) {
            let e = t ? "res" : "rej",
                i = this._promises || [];
            for (let n = 0; n < i.length; n++) i[n][e]();
        }
    },
    zh = ["x", "y", "borderWidth", "radius", "tension"],
    Vh = ["color", "borderColor", "backgroundColor"];
L.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
});
var Hh = Object.keys(L.animation);
L.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (s) => s !== "onProgress" && s !== "onComplete" && s !== "fn",
});
L.set("animations", {
    colors: { type: "color", properties: Vh },
    numbers: { type: "number", properties: zh },
});
L.describe("animations", { _fallback: "animation" });
L.set("transitions", {
    active: { animation: { duration: 400 } },
    resize: { animation: { duration: 0 } },
    show: {
        animations: {
            colors: { from: "transparent" },
            visible: { type: "boolean", duration: 0 },
        },
    },
    hide: {
        animations: {
            colors: { to: "transparent" },
            visible: { type: "boolean", easing: "linear", fn: (s) => s | 0 },
        },
    },
});
var ji = class {
    constructor(t, e) {
        (this._chart = t), (this._properties = new Map()), this.configure(e);
    }
    configure(t) {
        if (!A(t)) return;
        let e = this._properties;
        Object.getOwnPropertyNames(t).forEach((i) => {
            let n = t[i];
            if (!A(n)) return;
            let r = {};
            for (let o of Hh) r[o] = n[o];
            (($(n.properties) && n.properties) || [i]).forEach((o) => {
                (o === i || !e.has(o)) && e.set(o, r);
            });
        });
    }
    _animateOptions(t, e) {
        let i = e.options,
            n = $h(t, i);
        if (!n) return [];
        let r = this._createAnimations(n, i);
        return (
            i.$shared &&
                Bh(t.options.$animations, i).then(
                    () => {
                        t.options = i;
                    },
                    () => {},
                ),
            r
        );
    }
    _createAnimations(t, e) {
        let i = this._properties,
            n = [],
            r = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            a = Date.now(),
            l;
        for (l = o.length - 1; l >= 0; --l) {
            let c = o[l];
            if (c.charAt(0) === "$") continue;
            if (c === "options") {
                n.push(...this._animateOptions(t, e));
                continue;
            }
            let h = e[c],
                u = r[c],
                d = i.get(c);
            if (u)
                if (d && u.active()) {
                    u.update(d, h, a);
                    continue;
                } else u.cancel();
            if (!d || !d.duration) {
                t[c] = h;
                continue;
            }
            (r[c] = u = new gr(d, t, c, h)), n.push(u);
        }
        return n;
    }
    update(t, e) {
        if (this._properties.size === 0) {
            Object.assign(t, e);
            return;
        }
        let i = this._createAnimations(t, e);
        if (i.length) return jt.add(this._chart, i), !0;
    }
};
function Bh(s, t) {
    let e = [],
        i = Object.keys(t);
    for (let n = 0; n < i.length; n++) {
        let r = s[i[n]];
        r && r.active() && e.push(r.wait());
    }
    return Promise.all(e);
}
function $h(s, t) {
    if (!t) return;
    let e = s.options;
    if (!e) {
        s.options = t;
        return;
    }
    return (
        e.$shared &&
            (s.options = e =
                Object.assign({}, e, { $shared: !1, $animations: {} })),
        e
    );
}
function la(s, t) {
    let e = (s && s.options) || {},
        i = e.reverse,
        n = e.min === void 0 ? t : 0,
        r = e.max === void 0 ? t : 0;
    return { start: i ? r : n, end: i ? n : r };
}
function jh(s, t, e) {
    if (e === !1) return !1;
    let i = la(s, e),
        n = la(t, e);
    return { top: n.end, right: i.end, bottom: n.start, left: i.start };
}
function Uh(s) {
    let t, e, i, n;
    return (
        A(s)
            ? ((t = s.top), (e = s.right), (i = s.bottom), (n = s.left))
            : (t = e = i = n = s),
        { top: t, right: e, bottom: i, left: n, disabled: s === !1 }
    );
}
function Ja(s, t) {
    let e = [],
        i = s._getSortedDatasetMetas(t),
        n,
        r;
    for (n = 0, r = i.length; n < r; ++n) e.push(i[n].index);
    return e;
}
function ca(s, t, e, i = {}) {
    let n = s.keys,
        r = i.mode === "single",
        o,
        a,
        l,
        c;
    if (t !== null) {
        for (o = 0, a = n.length; o < a; ++o) {
            if (((l = +n[o]), l === e)) {
                if (i.all) continue;
                break;
            }
            (c = s.values[l]),
                K(c) && (r || t === 0 || Tt(t) === Tt(c)) && (t += c);
        }
        return t;
    }
}
function Yh(s) {
    let t = Object.keys(s),
        e = new Array(t.length),
        i,
        n,
        r;
    for (i = 0, n = t.length; i < n; ++i)
        (r = t[i]), (e[i] = { x: r, y: s[r] });
    return e;
}
function ha(s, t) {
    let e = s && s.options.stacked;
    return e || (e === void 0 && t.stack !== void 0);
}
function Zh(s, t, e) {
    return `${s.id}.${t.id}.${e.stack || e.type}`;
}
function qh(s) {
    let { min: t, max: e, minDefined: i, maxDefined: n } = s.getUserBounds();
    return {
        min: i ? t : Number.NEGATIVE_INFINITY,
        max: n ? e : Number.POSITIVE_INFINITY,
    };
}
function Gh(s, t, e) {
    let i = s[t] || (s[t] = {});
    return i[e] || (i[e] = {});
}
function ua(s, t, e, i) {
    for (let n of t.getMatchingVisibleMetas(i).reverse()) {
        let r = s[n.index];
        if ((e && r > 0) || (!e && r < 0)) return n.index;
    }
    return null;
}
function da(s, t) {
    let { chart: e, _cachedMeta: i } = s,
        n = e._stacks || (e._stacks = {}),
        { iScale: r, vScale: o, index: a } = i,
        l = r.axis,
        c = o.axis,
        h = Zh(r, o, i),
        u = t.length,
        d;
    for (let f = 0; f < u; ++f) {
        let m = t[f],
            { [l]: g, [c]: p } = m,
            y = m._stacks || (m._stacks = {});
        (d = y[c] = Gh(n, h, g)),
            (d[a] = p),
            (d._top = ua(d, o, !0, i.type)),
            (d._bottom = ua(d, o, !1, i.type));
    }
}
function rr(s, t) {
    let e = s.scales;
    return Object.keys(e)
        .filter((i) => e[i].axis === t)
        .shift();
}
function Xh(s, t) {
    return $t(s, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: "default",
        type: "dataset",
    });
}
function Kh(s, t, e) {
    return $t(s, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: "default",
        type: "data",
    });
}
function Ts(s, t) {
    let e = s.controller.index,
        i = s.vScale && s.vScale.axis;
    if (i) {
        t = t || s._parsed;
        for (let n of t) {
            let r = n._stacks;
            if (!r || r[i] === void 0 || r[i][e] === void 0) return;
            delete r[i][e];
        }
    }
}
var or = (s) => s === "reset" || s === "none",
    fa = (s, t) => (t ? s : Object.assign({}, s)),
    Jh = (s, t, e) =>
        s && !t.hidden && t._stacked && { keys: Ja(e, !0), values: null },
    pt = class {
        constructor(t, e) {
            (this.chart = t),
                (this._ctx = t.ctx),
                (this.index = e),
                (this._cachedDataOpts = {}),
                (this._cachedMeta = this.getMeta()),
                (this._type = this._cachedMeta.type),
                (this.options = void 0),
                (this._parsing = !1),
                (this._data = void 0),
                (this._objectData = void 0),
                (this._sharedOptions = void 0),
                (this._drawStart = void 0),
                (this._drawCount = void 0),
                (this.enableOptionSharing = !1),
                (this.supportsDecimation = !1),
                (this.$context = void 0),
                (this._syncList = []),
                this.initialize();
        }
        initialize() {
            let t = this._cachedMeta;
            this.configure(),
                this.linkScales(),
                (t._stacked = ha(t.vScale, t)),
                this.addElements();
        }
        updateIndex(t) {
            this.index !== t && Ts(this._cachedMeta), (this.index = t);
        }
        linkScales() {
            let t = this.chart,
                e = this._cachedMeta,
                i = this.getDataset(),
                n = (u, d, f, m) => (u === "x" ? d : u === "r" ? m : f),
                r = (e.xAxisID = C(i.xAxisID, rr(t, "x"))),
                o = (e.yAxisID = C(i.yAxisID, rr(t, "y"))),
                a = (e.rAxisID = C(i.rAxisID, rr(t, "r"))),
                l = e.indexAxis,
                c = (e.iAxisID = n(l, r, o, a)),
                h = (e.vAxisID = n(l, o, r, a));
            (e.xScale = this.getScaleForId(r)),
                (e.yScale = this.getScaleForId(o)),
                (e.rScale = this.getScaleForId(a)),
                (e.iScale = this.getScaleForId(c)),
                (e.vScale = this.getScaleForId(h));
        }
        getDataset() {
            return this.chart.data.datasets[this.index];
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
            return this.chart.scales[t];
        }
        _getOtherScale(t) {
            let e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
            this._update("reset");
        }
        _destroy() {
            let t = this._cachedMeta;
            this._data && Pn(this._data, this), t._stacked && Ts(t);
        }
        _dataCheck() {
            let t = this.getDataset(),
                e = t.data || (t.data = []),
                i = this._data;
            if (A(e)) this._data = Yh(e);
            else if (i !== e) {
                if (i) {
                    Pn(i, this);
                    let n = this._cachedMeta;
                    Ts(n), (n._parsed = []);
                }
                e && Object.isExtensible(e) && Wo(e, this),
                    (this._syncList = []),
                    (this._data = e);
            }
        }
        addElements() {
            let t = this._cachedMeta;
            this._dataCheck(),
                this.datasetElementType &&
                    (t.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(t) {
            let e = this._cachedMeta,
                i = this.getDataset(),
                n = !1;
            this._dataCheck();
            let r = e._stacked;
            (e._stacked = ha(e.vScale, e)),
                e.stack !== i.stack && ((n = !0), Ts(e), (e.stack = i.stack)),
                this._resyncElements(t),
                (n || r !== e._stacked) && da(this, e._parsed);
        }
        configure() {
            let t = this.chart.config,
                e = t.datasetScopeKeys(this._type),
                i = t.getOptionScopes(this.getDataset(), e, !0);
            (this.options = t.createResolver(i, this.getContext())),
                (this._parsing = this.options.parsing),
                (this._cachedDataOpts = {});
        }
        parse(t, e) {
            let { _cachedMeta: i, _data: n } = this,
                { iScale: r, _stacked: o } = i,
                a = r.axis,
                l = t === 0 && e === n.length ? !0 : i._sorted,
                c = t > 0 && i._parsed[t - 1],
                h,
                u,
                d;
            if (this._parsing === !1)
                (i._parsed = n), (i._sorted = !0), (d = n);
            else {
                $(n[t])
                    ? (d = this.parseArrayData(i, n, t, e))
                    : A(n[t])
                      ? (d = this.parseObjectData(i, n, t, e))
                      : (d = this.parsePrimitiveData(i, n, t, e));
                let f = () => u[a] === null || (c && u[a] < c[a]);
                for (h = 0; h < e; ++h)
                    (i._parsed[h + t] = u = d[h]),
                        l && (f() && (l = !1), (c = u));
                i._sorted = l;
            }
            o && da(this, d);
        }
        parsePrimitiveData(t, e, i, n) {
            let { iScale: r, vScale: o } = t,
                a = r.axis,
                l = o.axis,
                c = r.getLabels(),
                h = r === o,
                u = new Array(n),
                d,
                f,
                m;
            for (d = 0, f = n; d < f; ++d)
                (m = d + i),
                    (u[d] = {
                        [a]: h || r.parse(c[m], m),
                        [l]: o.parse(e[m], m),
                    });
            return u;
        }
        parseArrayData(t, e, i, n) {
            let { xScale: r, yScale: o } = t,
                a = new Array(n),
                l,
                c,
                h,
                u;
            for (l = 0, c = n; l < c; ++l)
                (h = l + i),
                    (u = e[h]),
                    (a[l] = { x: r.parse(u[0], h), y: o.parse(u[1], h) });
            return a;
        }
        parseObjectData(t, e, i, n) {
            let { xScale: r, yScale: o } = t,
                { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
                c = new Array(n),
                h,
                u,
                d,
                f;
            for (h = 0, u = n; h < u; ++h)
                (d = h + i),
                    (f = e[d]),
                    (c[h] = {
                        x: r.parse(Bt(f, a), d),
                        y: o.parse(Bt(f, l), d),
                    });
            return c;
        }
        getParsed(t) {
            return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
            return this._cachedMeta.data[t];
        }
        applyStack(t, e, i) {
            let n = this.chart,
                r = this._cachedMeta,
                o = e[t.axis],
                a = { keys: Ja(n, !0), values: e._stacks[t.axis] };
            return ca(a, o, r.index, { mode: i });
        }
        updateRangeFromParsed(t, e, i, n) {
            let r = i[e.axis],
                o = r === null ? NaN : r,
                a = n && i._stacks[e.axis];
            n && a && ((n.values = a), (o = ca(n, r, this._cachedMeta.index))),
                (t.min = Math.min(t.min, o)),
                (t.max = Math.max(t.max, o));
        }
        getMinMax(t, e) {
            let i = this._cachedMeta,
                n = i._parsed,
                r = i._sorted && t === i.iScale,
                o = n.length,
                a = this._getOtherScale(t),
                l = Jh(e, i, this.chart),
                c = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY,
                },
                { min: h, max: u } = qh(a),
                d,
                f;
            function m() {
                f = n[d];
                let g = f[a.axis];
                return !K(f[t.axis]) || h > g || u < g;
            }
            for (
                d = 0;
                d < o && !(!m() && (this.updateRangeFromParsed(c, t, f, l), r));
                ++d
            );
            if (r) {
                for (d = o - 1; d >= 0; --d)
                    if (!m()) {
                        this.updateRangeFromParsed(c, t, f, l);
                        break;
                    }
            }
            return c;
        }
        getAllParsedValues(t) {
            let e = this._cachedMeta._parsed,
                i = [],
                n,
                r,
                o;
            for (n = 0, r = e.length; n < r; ++n)
                (o = e[n][t.axis]), K(o) && i.push(o);
            return i;
        }
        getMaxOverflow() {
            return !1;
        }
        getLabelAndValue(t) {
            let e = this._cachedMeta,
                i = e.iScale,
                n = e.vScale,
                r = this.getParsed(t);
            return {
                label: i ? "" + i.getLabelForValue(r[i.axis]) : "",
                value: n ? "" + n.getLabelForValue(r[n.axis]) : "",
            };
        }
        _update(t) {
            let e = this._cachedMeta;
            this.update(t || "default"),
                (e._clip = Uh(
                    C(
                        this.options.clip,
                        jh(e.xScale, e.yScale, this.getMaxOverflow()),
                    ),
                ));
        }
        update(t) {}
        draw() {
            let t = this._ctx,
                e = this.chart,
                i = this._cachedMeta,
                n = i.data || [],
                r = e.chartArea,
                o = [],
                a = this._drawStart || 0,
                l = this._drawCount || n.length - a,
                c = this.options.drawActiveElementsOnTop,
                h;
            for (
                i.dataset && i.dataset.draw(t, r, a, l), h = a;
                h < a + l;
                ++h
            ) {
                let u = n[h];
                u.hidden || (u.active && c ? o.push(u) : u.draw(t, r));
            }
            for (h = 0; h < o.length; ++h) o[h].draw(t, r);
        }
        getStyle(t, e) {
            let i = e ? "active" : "default";
            return t === void 0 && this._cachedMeta.dataset
                ? this.resolveDatasetElementOptions(i)
                : this.resolveDataElementOptions(t || 0, i);
        }
        getContext(t, e, i) {
            let n = this.getDataset(),
                r;
            if (t >= 0 && t < this._cachedMeta.data.length) {
                let o = this._cachedMeta.data[t];
                (r = o.$context || (o.$context = Kh(this.getContext(), t, o))),
                    (r.parsed = this.getParsed(t)),
                    (r.raw = n.data[t]),
                    (r.index = r.dataIndex = t);
            } else
                (r =
                    this.$context ||
                    (this.$context = Xh(this.chart.getContext(), this.index))),
                    (r.dataset = n),
                    (r.index = r.datasetIndex = this.index);
            return (r.active = !!e), (r.mode = i), r;
        }
        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = "default", i) {
            let n = e === "active",
                r = this._cachedDataOpts,
                o = t + "-" + e,
                a = r[o],
                l = this.enableOptionSharing && ft(i);
            if (a) return fa(a, l);
            let c = this.chart.config,
                h = c.datasetElementScopeKeys(this._type, t),
                u = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                d = c.getOptionScopes(this.getDataset(), h),
                f = Object.keys(L.elements[t]),
                m = () => this.getContext(i, n),
                g = c.resolveNamedOptions(d, f, m, u);
            return (
                g.$shared &&
                    ((g.$shared = l), (r[o] = Object.freeze(fa(g, l)))),
                g
            );
        }
        _resolveAnimations(t, e, i) {
            let n = this.chart,
                r = this._cachedDataOpts,
                o = `animation-${e}`,
                a = r[o];
            if (a) return a;
            let l;
            if (n.options.animation !== !1) {
                let h = this.chart.config,
                    u = h.datasetAnimationScopeKeys(this._type, e),
                    d = h.getOptionScopes(this.getDataset(), u);
                l = h.createResolver(d, this.getContext(t, i, e));
            }
            let c = new ji(n, l && l.animations);
            return l && l._cacheable && (r[o] = Object.freeze(c)), c;
        }
        getSharedOptions(t) {
            if (t.$shared)
                return (
                    this._sharedOptions ||
                    (this._sharedOptions = Object.assign({}, t))
                );
        }
        includeOptions(t, e) {
            return !e || or(t) || this.chart._animationsDisabled;
        }
        _getSharedOptions(t, e) {
            let i = this.resolveDataElementOptions(t, e),
                n = this._sharedOptions,
                r = this.getSharedOptions(i),
                o = this.includeOptions(e, r) || r !== n;
            return (
                this.updateSharedOptions(r, e, i),
                { sharedOptions: r, includeOptions: o }
            );
        }
        updateElement(t, e, i, n) {
            or(n)
                ? Object.assign(t, i)
                : this._resolveAnimations(e, n).update(t, i);
        }
        updateSharedOptions(t, e, i) {
            t && !or(e) && this._resolveAnimations(void 0, e).update(t, i);
        }
        _setStyle(t, e, i, n) {
            t.active = n;
            let r = this.getStyle(e, n);
            this._resolveAnimations(e, i, n).update(t, {
                options: (!n && this.getSharedOptions(r)) || r,
            });
        }
        removeHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !1);
        }
        setHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !0);
        }
        _removeDatasetHoverStyle() {
            let t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1);
        }
        _setDatasetHoverStyle() {
            let t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0);
        }
        _resyncElements(t) {
            let e = this._data,
                i = this._cachedMeta.data;
            for (let [a, l, c] of this._syncList) this[a](l, c);
            this._syncList = [];
            let n = i.length,
                r = e.length,
                o = Math.min(r, n);
            o && this.parse(0, o),
                r > n
                    ? this._insertElements(n, r - n, t)
                    : r < n && this._removeElements(r, n - r);
        }
        _insertElements(t, e, i = !0) {
            let n = this._cachedMeta,
                r = n.data,
                o = t + e,
                a,
                l = (c) => {
                    for (c.length += e, a = c.length - 1; a >= o; a--)
                        c[a] = c[a - e];
                };
            for (l(r), a = t; a < o; ++a) r[a] = new this.dataElementType();
            this._parsing && l(n._parsed),
                this.parse(t, e),
                i && this.updateElements(r, t, e, "reset");
        }
        updateElements(t, e, i, n) {}
        _removeElements(t, e) {
            let i = this._cachedMeta;
            if (this._parsing) {
                let n = i._parsed.splice(t, e);
                i._stacked && Ts(i, n);
            }
            i.data.splice(t, e);
        }
        _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
                let [e, i, n] = t;
                this[e](i, n);
            }
            this.chart._dataChanges.push([this.index, ...t]);
        }
        _onDataPush() {
            let t = arguments.length;
            this._sync([
                "_insertElements",
                this.getDataset().data.length - t,
                t,
            ]);
        }
        _onDataPop() {
            this._sync([
                "_removeElements",
                this._cachedMeta.data.length - 1,
                1,
            ]);
        }
        _onDataShift() {
            this._sync(["_removeElements", 0, 1]);
        }
        _onDataSplice(t, e) {
            e && this._sync(["_removeElements", t, e]);
            let i = arguments.length - 2;
            i && this._sync(["_insertElements", t, i]);
        }
        _onDataUnshift() {
            this._sync(["_insertElements", 0, arguments.length]);
        }
    };
pt.defaults = {};
pt.prototype.datasetElementType = null;
pt.prototype.dataElementType = null;
function Qh(s, t) {
    if (!s._cache.$bar) {
        let e = s.getMatchingVisibleMetas(t),
            i = [];
        for (let n = 0, r = e.length; n < r; n++)
            i = i.concat(e[n].controller.getAllParsedValues(s));
        s._cache.$bar = Rn(i.sort((n, r) => n - r));
    }
    return s._cache.$bar;
}
function tu(s) {
    let t = s.iScale,
        e = Qh(t, s.type),
        i = t._length,
        n,
        r,
        o,
        a,
        l = () => {
            o === 32767 ||
                o === -32768 ||
                (ft(a) && (i = Math.min(i, Math.abs(o - a) || i)), (a = o));
        };
    for (n = 0, r = e.length; n < r; ++n) (o = t.getPixelForValue(e[n])), l();
    for (a = void 0, n = 0, r = t.ticks.length; n < r; ++n)
        (o = t.getPixelForTick(n)), l();
    return i;
}
function eu(s, t, e, i) {
    let n = e.barThickness,
        r,
        o;
    return (
        N(n)
            ? ((r = t.min * e.categoryPercentage), (o = e.barPercentage))
            : ((r = n * i), (o = 1)),
        { chunk: r / i, ratio: o, start: t.pixels[s] - r / 2 }
    );
}
function su(s, t, e, i) {
    let n = t.pixels,
        r = n[s],
        o = s > 0 ? n[s - 1] : null,
        a = s < n.length - 1 ? n[s + 1] : null,
        l = e.categoryPercentage;
    o === null && (o = r - (a === null ? t.end - t.start : a - r)),
        a === null && (a = r + r - o);
    let c = r - ((r - Math.min(o, a)) / 2) * l;
    return {
        chunk: ((Math.abs(a - o) / 2) * l) / i,
        ratio: e.barPercentage,
        start: c,
    };
}
function iu(s, t, e, i) {
    let n = e.parse(s[0], i),
        r = e.parse(s[1], i),
        o = Math.min(n, r),
        a = Math.max(n, r),
        l = o,
        c = a;
    Math.abs(o) > Math.abs(a) && ((l = a), (c = o)),
        (t[e.axis] = c),
        (t._custom = {
            barStart: l,
            barEnd: c,
            start: n,
            end: r,
            min: o,
            max: a,
        });
}
function Qa(s, t, e, i) {
    return $(s) ? iu(s, t, e, i) : (t[e.axis] = e.parse(s, i)), t;
}
function ma(s, t, e, i) {
    let n = s.iScale,
        r = s.vScale,
        o = n.getLabels(),
        a = n === r,
        l = [],
        c,
        h,
        u,
        d;
    for (c = e, h = e + i; c < h; ++c)
        (d = t[c]),
            (u = {}),
            (u[n.axis] = a || n.parse(o[c], c)),
            l.push(Qa(d, u, r, c));
    return l;
}
function ar(s) {
    return s && s.barStart !== void 0 && s.barEnd !== void 0;
}
function nu(s, t, e) {
    return s !== 0
        ? Tt(s)
        : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function ru(s) {
    let t, e, i, n, r;
    return (
        s.horizontal
            ? ((t = s.base > s.x), (e = "left"), (i = "right"))
            : ((t = s.base < s.y), (e = "bottom"), (i = "top")),
        t ? ((n = "end"), (r = "start")) : ((n = "start"), (r = "end")),
        { start: e, end: i, reverse: t, top: n, bottom: r }
    );
}
function ou(s, t, e, i) {
    let n = t.borderSkipped,
        r = {};
    if (!n) {
        s.borderSkipped = r;
        return;
    }
    if (n === !0) {
        s.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
        return;
    }
    let { start: o, end: a, reverse: l, top: c, bottom: h } = ru(s);
    n === "middle" &&
        e &&
        ((s.enableBorderRadius = !0),
        (e._top || 0) === i
            ? (n = c)
            : (e._bottom || 0) === i
              ? (n = h)
              : ((r[ga(h, o, a, l)] = !0), (n = c))),
        (r[ga(n, o, a, l)] = !0),
        (s.borderSkipped = r);
}
function ga(s, t, e, i) {
    return i ? ((s = au(s, t, e)), (s = pa(s, e, t))) : (s = pa(s, t, e)), s;
}
function au(s, t, e) {
    return s === t ? e : s === e ? t : s;
}
function pa(s, t, e) {
    return s === "start" ? t : s === "end" ? e : s;
}
function lu(s, { inflateAmount: t }, e) {
    s.inflateAmount = t === "auto" ? (e === 1 ? 0.33 : 0) : t;
}
var $e = class extends pt {
    parsePrimitiveData(t, e, i, n) {
        return ma(t, e, i, n);
    }
    parseArrayData(t, e, i, n) {
        return ma(t, e, i, n);
    }
    parseObjectData(t, e, i, n) {
        let { iScale: r, vScale: o } = t,
            { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
            c = r.axis === "x" ? a : l,
            h = o.axis === "x" ? a : l,
            u = [],
            d,
            f,
            m,
            g;
        for (d = i, f = i + n; d < f; ++d)
            (g = e[d]),
                (m = {}),
                (m[r.axis] = r.parse(Bt(g, c), d)),
                u.push(Qa(Bt(g, h), m, o, d));
        return u;
    }
    updateRangeFromParsed(t, e, i, n) {
        super.updateRangeFromParsed(t, e, i, n);
        let r = i._custom;
        r &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, r.min)),
            (t.max = Math.max(t.max, r.max)));
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            { iScale: i, vScale: n } = e,
            r = this.getParsed(t),
            o = r._custom,
            a = ar(o)
                ? "[" + o.start + ", " + o.end + "]"
                : "" + n.getLabelForValue(r[n.axis]);
        return { label: "" + i.getLabelForValue(r[i.axis]), value: a };
    }
    initialize() {
        (this.enableOptionSharing = !0), super.initialize();
        let t = this._cachedMeta;
        t.stack = this.getDataset().stack;
    }
    update(t) {
        let e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, i, n) {
        let r = n === "reset",
            {
                index: o,
                _cachedMeta: { vScale: a },
            } = this,
            l = a.getBasePixel(),
            c = a.isHorizontal(),
            h = this._getRuler(),
            { sharedOptions: u, includeOptions: d } = this._getSharedOptions(
                e,
                n,
            );
        for (let f = e; f < e + i; f++) {
            let m = this.getParsed(f),
                g =
                    r || N(m[a.axis])
                        ? { base: l, head: l }
                        : this._calculateBarValuePixels(f),
                p = this._calculateBarIndexPixels(f, h),
                y = (m._stacks || {})[a.axis],
                b = {
                    horizontal: c,
                    base: g.base,
                    enableBorderRadius:
                        !y || ar(m._custom) || o === y._top || o === y._bottom,
                    x: c ? g.head : p.center,
                    y: c ? p.center : g.head,
                    height: c ? p.size : Math.abs(g.size),
                    width: c ? Math.abs(g.size) : p.size,
                };
            d &&
                (b.options =
                    u ||
                    this.resolveDataElementOptions(
                        f,
                        t[f].active ? "active" : n,
                    ));
            let _ = b.options || t[f].options;
            ou(b, _, y, o),
                lu(b, _, h.ratio),
                this.updateElement(t[f], f, b, n);
        }
    }
    _getStacks(t, e) {
        let { iScale: i } = this._cachedMeta,
            n = i
                .getMatchingVisibleMetas(this._type)
                .filter((l) => l.controller.options.grouped),
            r = i.options.stacked,
            o = [],
            a = (l) => {
                let c = l.controller.getParsed(e),
                    h = c && c[l.vScale.axis];
                if (N(h) || isNaN(h)) return !0;
            };
        for (let l of n)
            if (
                !(e !== void 0 && a(l)) &&
                ((r === !1 ||
                    o.indexOf(l.stack) === -1 ||
                    (r === void 0 && l.stack === void 0)) &&
                    o.push(l.stack),
                l.index === t)
            )
                break;
        return o.length || o.push(void 0), o;
    }
    _getStackCount(t) {
        return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, e, i) {
        let n = this._getStacks(t, i),
            r = e !== void 0 ? n.indexOf(e) : -1;
        return r === -1 ? n.length - 1 : r;
    }
    _getRuler() {
        let t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            n = [],
            r,
            o;
        for (r = 0, o = e.data.length; r < o; ++r)
            n.push(i.getPixelForValue(this.getParsed(r)[i.axis], r));
        let a = t.barThickness;
        return {
            min: a || tu(e),
            pixels: n,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: t.grouped,
            ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
        };
    }
    _calculateBarValuePixels(t) {
        let {
                _cachedMeta: { vScale: e, _stacked: i },
                options: { base: n, minBarLength: r },
            } = this,
            o = n || 0,
            a = this.getParsed(t),
            l = a._custom,
            c = ar(l),
            h = a[e.axis],
            u = 0,
            d = i ? this.applyStack(e, a, i) : h,
            f,
            m;
        d !== h && ((u = d - h), (d = h)),
            c &&
                ((h = l.barStart),
                (d = l.barEnd - l.barStart),
                h !== 0 && Tt(h) !== Tt(l.barEnd) && (u = 0),
                (u += h));
        let g = !N(n) && !c ? n : u,
            p = e.getPixelForValue(g);
        if (
            (this.chart.getDataVisibility(t)
                ? (f = e.getPixelForValue(u + d))
                : (f = p),
            (m = f - p),
            Math.abs(m) < r)
        ) {
            (m = nu(m, e, o) * r), h === o && (p -= m / 2);
            let y = e.getPixelForDecimal(0),
                b = e.getPixelForDecimal(1),
                _ = Math.min(y, b),
                w = Math.max(y, b);
            (p = Math.max(Math.min(p, w), _)), (f = p + m);
        }
        if (p === e.getPixelForValue(o)) {
            let y = (Tt(m) * e.getLineWidthForValue(o)) / 2;
            (p += y), (m -= y);
        }
        return { size: m, base: p, head: f, center: f + m / 2 };
    }
    _calculateBarIndexPixels(t, e) {
        let i = e.scale,
            n = this.options,
            r = n.skipNull,
            o = C(n.maxBarThickness, 1 / 0),
            a,
            l;
        if (e.grouped) {
            let c = r ? this._getStackCount(t) : e.stackCount,
                h = n.barThickness === "flex" ? su(t, e, n, c) : eu(t, e, n, c),
                u = this._getStackIndex(
                    this.index,
                    this._cachedMeta.stack,
                    r ? t : void 0,
                );
            (a = h.start + h.chunk * u + h.chunk / 2),
                (l = Math.min(o, h.chunk * h.ratio));
        } else
            (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
                (l = Math.min(o, e.min * e.ratio));
        return { base: a - l / 2, head: a + l / 2, center: a, size: l };
    }
    draw() {
        let t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            n = i.length,
            r = 0;
        for (; r < n; ++r)
            this.getParsed(r)[e.axis] !== null && i[r].draw(this._ctx);
    }
};
$e.id = "bar";
$e.defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
        numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"],
        },
    },
};
$e.overrides = {
    scales: {
        _index_: { type: "category", offset: !0, grid: { offset: !0 } },
        _value_: { type: "linear", beginAtZero: !0 },
    },
};
var je = class extends pt {
    initialize() {
        (this.enableOptionSharing = !0), super.initialize();
    }
    parsePrimitiveData(t, e, i, n) {
        let r = super.parsePrimitiveData(t, e, i, n);
        for (let o = 0; o < r.length; o++)
            r[o]._custom = this.resolveDataElementOptions(o + i).radius;
        return r;
    }
    parseArrayData(t, e, i, n) {
        let r = super.parseArrayData(t, e, i, n);
        for (let o = 0; o < r.length; o++) {
            let a = e[i + o];
            r[o]._custom = C(
                a[2],
                this.resolveDataElementOptions(o + i).radius,
            );
        }
        return r;
    }
    parseObjectData(t, e, i, n) {
        let r = super.parseObjectData(t, e, i, n);
        for (let o = 0; o < r.length; o++) {
            let a = e[i + o];
            r[o]._custom = C(
                a && a.r && +a.r,
                this.resolveDataElementOptions(o + i).radius,
            );
        }
        return r;
    }
    getMaxOverflow() {
        let t = this._cachedMeta.data,
            e = 0;
        for (let i = t.length - 1; i >= 0; --i)
            e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
        return e > 0 && e;
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            { xScale: i, yScale: n } = e,
            r = this.getParsed(t),
            o = i.getLabelForValue(r.x),
            a = n.getLabelForValue(r.y),
            l = r._custom;
        return {
            label: e.label,
            value: "(" + o + ", " + a + (l ? ", " + l : "") + ")",
        };
    }
    update(t) {
        let e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
    }
    updateElements(t, e, i, n) {
        let r = n === "reset",
            { iScale: o, vScale: a } = this._cachedMeta,
            { sharedOptions: l, includeOptions: c } = this._getSharedOptions(
                e,
                n,
            ),
            h = o.axis,
            u = a.axis;
        for (let d = e; d < e + i; d++) {
            let f = t[d],
                m = !r && this.getParsed(d),
                g = {},
                p = (g[h] = r
                    ? o.getPixelForDecimal(0.5)
                    : o.getPixelForValue(m[h])),
                y = (g[u] = r ? a.getBasePixel() : a.getPixelForValue(m[u]));
            (g.skip = isNaN(p) || isNaN(y)),
                c &&
                    ((g.options =
                        l ||
                        this.resolveDataElementOptions(
                            d,
                            f.active ? "active" : n,
                        )),
                    r && (g.options.radius = 0)),
                this.updateElement(f, d, g, n);
        }
    }
    resolveDataElementOptions(t, e) {
        let i = this.getParsed(t),
            n = super.resolveDataElementOptions(t, e);
        n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
        let r = n.radius;
        return (
            e !== "active" && (n.radius = 0),
            (n.radius += C(i && i._custom, r)),
            n
        );
    }
};
je.id = "bubble";
je.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
        numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"],
        },
    },
};
je.overrides = {
    scales: { x: { type: "linear" }, y: { type: "linear" } },
    plugins: {
        tooltip: {
            callbacks: {
                title() {
                    return "";
                },
            },
        },
    },
};
function cu(s, t, e) {
    let i = 1,
        n = 1,
        r = 0,
        o = 0;
    if (t < B) {
        let a = s,
            l = a + t,
            c = Math.cos(a),
            h = Math.sin(a),
            u = Math.cos(l),
            d = Math.sin(l),
            f = (_, w, x) =>
                Ne(_, a, l, !0) ? 1 : Math.max(w, w * e, x, x * e),
            m = (_, w, x) =>
                Ne(_, a, l, !0) ? -1 : Math.min(w, w * e, x, x * e),
            g = f(0, c, u),
            p = f(Z, h, d),
            y = m(Y, c, u),
            b = m(Y + Z, h, d);
        (i = (g - y) / 2),
            (n = (p - b) / 2),
            (r = -(g + y) / 2),
            (o = -(p + b) / 2);
    }
    return { ratioX: i, ratioY: n, offsetX: r, offsetY: o };
}
var oe = class extends pt {
    constructor(t, e) {
        super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0);
    }
    linkScales() {}
    parse(t, e) {
        let i = this.getDataset().data,
            n = this._cachedMeta;
        if (this._parsing === !1) n._parsed = i;
        else {
            let r = (l) => +i[l];
            if (A(i[t])) {
                let { key: l = "value" } = this._parsing;
                r = (c) => +Bt(i[c], l);
            }
            let o, a;
            for (o = t, a = t + e; o < a; ++o) n._parsed[o] = r(o);
        }
    }
    _getRotation() {
        return wt(this.options.rotation - 90);
    }
    _getCircumference() {
        return wt(this.options.circumference);
    }
    _getRotationExtents() {
        let t = B,
            e = -B;
        for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (this.chart.isDatasetVisible(i)) {
                let n = this.chart.getDatasetMeta(i).controller,
                    r = n._getRotation(),
                    o = n._getCircumference();
                (t = Math.min(t, r)), (e = Math.max(e, r + o));
            }
        return { rotation: t, circumference: e - t };
    }
    update(t) {
        let e = this.chart,
            { chartArea: i } = e,
            n = this._cachedMeta,
            r = n.data,
            o =
                this.getMaxBorderWidth() +
                this.getMaxOffset(r) +
                this.options.spacing,
            a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
            l = Math.min(Eo(this.options.cutout, a), 1),
            c = this._getRingWeight(this.index),
            { circumference: h, rotation: u } = this._getRotationExtents(),
            { ratioX: d, ratioY: f, offsetX: m, offsetY: g } = cu(u, h, l),
            p = (i.width - o) / d,
            y = (i.height - o) / f,
            b = Math.max(Math.min(p, y) / 2, 0),
            _ = En(this.options.radius, b),
            w = Math.max(_ * l, 0),
            x = (_ - w) / this._getVisibleDatasetWeightTotal();
        (this.offsetX = m * _),
            (this.offsetY = g * _),
            (n.total = this.calculateTotal()),
            (this.outerRadius = _ - x * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - x * c, 0)),
            this.updateElements(r, 0, r.length, t);
    }
    _circumference(t, e) {
        let i = this.options,
            n = this._cachedMeta,
            r = this._getCircumference();
        return (e && i.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            n._parsed[t] === null ||
            n.data[t].hidden
            ? 0
            : this.calculateCircumference((n._parsed[t] * r) / B);
    }
    updateElements(t, e, i, n) {
        let r = n === "reset",
            o = this.chart,
            a = o.chartArea,
            c = o.options.animation,
            h = (a.left + a.right) / 2,
            u = (a.top + a.bottom) / 2,
            d = r && c.animateScale,
            f = d ? 0 : this.innerRadius,
            m = d ? 0 : this.outerRadius,
            { sharedOptions: g, includeOptions: p } = this._getSharedOptions(
                e,
                n,
            ),
            y = this._getRotation(),
            b;
        for (b = 0; b < e; ++b) y += this._circumference(b, r);
        for (b = e; b < e + i; ++b) {
            let _ = this._circumference(b, r),
                w = t[b],
                x = {
                    x: h + this.offsetX,
                    y: u + this.offsetY,
                    startAngle: y,
                    endAngle: y + _,
                    circumference: _,
                    outerRadius: m,
                    innerRadius: f,
                };
            p &&
                (x.options =
                    g ||
                    this.resolveDataElementOptions(b, w.active ? "active" : n)),
                (y += _),
                this.updateElement(w, b, x, n);
        }
    }
    calculateTotal() {
        let t = this._cachedMeta,
            e = t.data,
            i = 0,
            n;
        for (n = 0; n < e.length; n++) {
            let r = t._parsed[n];
            r !== null &&
                !isNaN(r) &&
                this.chart.getDataVisibility(n) &&
                !e[n].hidden &&
                (i += Math.abs(r));
        }
        return i;
    }
    calculateCircumference(t) {
        let e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? B * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            r = Ve(e._parsed[t], i.options.locale);
        return { label: n[t] || "", value: r };
    }
    getMaxBorderWidth(t) {
        let e = 0,
            i = this.chart,
            n,
            r,
            o,
            a,
            l;
        if (!t) {
            for (n = 0, r = i.data.datasets.length; n < r; ++n)
                if (i.isDatasetVisible(n)) {
                    (o = i.getDatasetMeta(n)), (t = o.data), (a = o.controller);
                    break;
                }
        }
        if (!t) return 0;
        for (n = 0, r = t.length; n < r; ++n)
            (l = a.resolveDataElementOptions(n)),
                l.borderAlign !== "inner" &&
                    (e = Math.max(
                        e,
                        l.borderWidth || 0,
                        l.hoverBorderWidth || 0,
                    ));
        return e;
    }
    getMaxOffset(t) {
        let e = 0;
        for (let i = 0, n = t.length; i < n; ++i) {
            let r = this.resolveDataElementOptions(i);
            e = Math.max(e, r.offset || 0, r.hoverOffset || 0);
        }
        return e;
    }
    _getRingWeightOffset(t) {
        let e = 0;
        for (let i = 0; i < t; ++i)
            this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
        return e;
    }
    _getRingWeight(t) {
        return Math.max(C(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
};
oe.id = "doughnut";
oe.defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
        numbers: {
            type: "number",
            properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
                "spacing",
            ],
        },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
};
oe.descriptors = {
    _scriptable: (s) => s !== "spacing",
    _indexable: (s) => s !== "spacing",
};
oe.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels(s) {
                    let t = s.data;
                    if (t.labels.length && t.datasets.length) {
                        let {
                            labels: { pointStyle: e },
                        } = s.legend.options;
                        return t.labels.map((i, n) => {
                            let o = s.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: i,
                                fillStyle: o.backgroundColor,
                                strokeStyle: o.borderColor,
                                lineWidth: o.borderWidth,
                                pointStyle: e,
                                hidden: !s.getDataVisibility(n),
                                index: n,
                            };
                        });
                    }
                    return [];
                },
            },
            onClick(s, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update();
            },
        },
        tooltip: {
            callbacks: {
                title() {
                    return "";
                },
                label(s) {
                    let t = s.label,
                        e = ": " + s.formattedValue;
                    return $(t) ? ((t = t.slice()), (t[0] += e)) : (t += e), t;
                },
            },
        },
    },
};
var Ue = class extends pt {
    initialize() {
        (this.enableOptionSharing = !0),
            (this.supportsDecimation = !0),
            super.initialize();
    }
    update(t) {
        let e = this._cachedMeta,
            { dataset: i, data: n = [], _dataset: r } = e,
            o = this.chart._animationsDisabled,
            { start: a, count: l } = zn(e, n, o);
        (this._drawStart = a),
            (this._drawCount = l),
            Vn(e) && ((a = 0), (l = n.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!r._decimated),
            (i.points = n);
        let c = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c.borderWidth = 0),
            (c.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !o, options: c }, t),
            this.updateElements(n, a, l, t);
    }
    updateElements(t, e, i, n) {
        let r = n === "reset",
            {
                iScale: o,
                vScale: a,
                _stacked: l,
                _dataset: c,
            } = this._cachedMeta,
            { sharedOptions: h, includeOptions: u } = this._getSharedOptions(
                e,
                n,
            ),
            d = o.axis,
            f = a.axis,
            { spanGaps: m, segment: g } = this.options,
            p = pe(m) ? m : Number.POSITIVE_INFINITY,
            y = this.chart._animationsDisabled || r || n === "none",
            b = e > 0 && this.getParsed(e - 1);
        for (let _ = e; _ < e + i; ++_) {
            let w = t[_],
                x = this.getParsed(_),
                S = y ? w : {},
                k = N(x[f]),
                O = (S[d] = o.getPixelForValue(x[d], _)),
                v = (S[f] =
                    r || k
                        ? a.getBasePixel()
                        : a.getPixelForValue(
                              l ? this.applyStack(a, x, l) : x[f],
                              _,
                          ));
            (S.skip = isNaN(O) || isNaN(v) || k),
                (S.stop = _ > 0 && Math.abs(x[d] - b[d]) > p),
                g && ((S.parsed = x), (S.raw = c.data[_])),
                u &&
                    (S.options =
                        h ||
                        this.resolveDataElementOptions(
                            _,
                            w.active ? "active" : n,
                        )),
                y || this.updateElement(w, _, S, n),
                (b = x);
        }
    }
    getMaxOverflow() {
        let t = this._cachedMeta,
            e = t.dataset,
            i = (e.options && e.options.borderWidth) || 0,
            n = t.data || [];
        if (!n.length) return i;
        let r = n[0].size(this.resolveDataElementOptions(0)),
            o = n[n.length - 1].size(
                this.resolveDataElementOptions(n.length - 1),
            );
        return Math.max(i, r, o) / 2;
    }
    draw() {
        let t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw();
    }
};
Ue.id = "line";
Ue.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
};
Ue.overrides = {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
};
var Ye = class extends pt {
    constructor(t, e) {
        super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            r = Ve(e._parsed[t].r, i.options.locale);
        return { label: n[t] || "", value: r };
    }
    parseObjectData(t, e, i, n) {
        return Kn.bind(this)(t, e, i, n);
    }
    update(t) {
        let e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    getMinMax() {
        let t = this._cachedMeta,
            e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
            };
        return (
            t.data.forEach((i, n) => {
                let r = this.getParsed(n).r;
                !isNaN(r) &&
                    this.chart.getDataVisibility(n) &&
                    (r < e.min && (e.min = r), r > e.max && (e.max = r));
            }),
            e
        );
    }
    _updateRadius() {
        let t = this.chart,
            e = t.chartArea,
            i = t.options,
            n = Math.min(e.right - e.left, e.bottom - e.top),
            r = Math.max(n / 2, 0),
            o = Math.max(
                i.cutoutPercentage ? (r / 100) * i.cutoutPercentage : 1,
                0,
            ),
            a = (r - o) / t.getVisibleDatasetCount();
        (this.outerRadius = r - a * this.index),
            (this.innerRadius = this.outerRadius - a);
    }
    updateElements(t, e, i, n) {
        let r = n === "reset",
            o = this.chart,
            l = o.options.animation,
            c = this._cachedMeta.rScale,
            h = c.xCenter,
            u = c.yCenter,
            d = c.getIndexAngle(0) - 0.5 * Y,
            f = d,
            m,
            g = 360 / this.countVisibleElements();
        for (m = 0; m < e; ++m) f += this._computeAngle(m, n, g);
        for (m = e; m < e + i; m++) {
            let p = t[m],
                y = f,
                b = f + this._computeAngle(m, n, g),
                _ = o.getDataVisibility(m)
                    ? c.getDistanceFromCenterForValue(this.getParsed(m).r)
                    : 0;
            (f = b),
                r &&
                    (l.animateScale && (_ = 0), l.animateRotate && (y = b = d));
            let w = {
                x: h,
                y: u,
                innerRadius: 0,
                outerRadius: _,
                startAngle: y,
                endAngle: b,
                options: this.resolveDataElementOptions(
                    m,
                    p.active ? "active" : n,
                ),
            };
            this.updateElement(p, m, w, n);
        }
    }
    countVisibleElements() {
        let t = this._cachedMeta,
            e = 0;
        return (
            t.data.forEach((i, n) => {
                !isNaN(this.getParsed(n).r) &&
                    this.chart.getDataVisibility(n) &&
                    e++;
            }),
            e
        );
    }
    _computeAngle(t, e, i) {
        return this.chart.getDataVisibility(t)
            ? wt(this.resolveDataElementOptions(t, e).angle || i)
            : 0;
    }
};
Ye.id = "polarArea";
Ye.defaults = {
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
            ],
        },
    },
    indexAxis: "r",
    startAngle: 0,
};
Ye.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels(s) {
                    let t = s.data;
                    if (t.labels.length && t.datasets.length) {
                        let {
                            labels: { pointStyle: e },
                        } = s.legend.options;
                        return t.labels.map((i, n) => {
                            let o = s.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: i,
                                fillStyle: o.backgroundColor,
                                strokeStyle: o.borderColor,
                                lineWidth: o.borderWidth,
                                pointStyle: e,
                                hidden: !s.getDataVisibility(n),
                                index: n,
                            };
                        });
                    }
                    return [];
                },
            },
            onClick(s, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update();
            },
        },
        tooltip: {
            callbacks: {
                title() {
                    return "";
                },
                label(s) {
                    return (
                        s.chart.data.labels[s.dataIndex] +
                        ": " +
                        s.formattedValue
                    );
                },
            },
        },
    },
    scales: {
        r: {
            type: "radialLinear",
            angleLines: { display: !1 },
            beginAtZero: !0,
            grid: { circular: !0 },
            pointLabels: { display: !1 },
            startAngle: 0,
        },
    },
};
var Fs = class extends oe {};
Fs.id = "pie";
Fs.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" };
var Ze = class extends pt {
    getLabelAndValue(t) {
        let e = this._cachedMeta.vScale,
            i = this.getParsed(t);
        return {
            label: e.getLabels()[t],
            value: "" + e.getLabelForValue(i[e.axis]),
        };
    }
    parseObjectData(t, e, i, n) {
        return Kn.bind(this)(t, e, i, n);
    }
    update(t) {
        let e = this._cachedMeta,
            i = e.dataset,
            n = e.data || [],
            r = e.iScale.getLabels();
        if (((i.points = n), t !== "resize")) {
            let o = this.resolveDatasetElementOptions(t);
            this.options.showLine || (o.borderWidth = 0);
            let a = { _loop: !0, _fullLoop: r.length === n.length, options: o };
            this.updateElement(i, void 0, a, t);
        }
        this.updateElements(n, 0, n.length, t);
    }
    updateElements(t, e, i, n) {
        let r = this._cachedMeta.rScale,
            o = n === "reset";
        for (let a = e; a < e + i; a++) {
            let l = t[a],
                c = this.resolveDataElementOptions(a, l.active ? "active" : n),
                h = r.getPointPositionForValue(a, this.getParsed(a).r),
                u = o ? r.xCenter : h.x,
                d = o ? r.yCenter : h.y,
                f = {
                    x: u,
                    y: d,
                    angle: h.angle,
                    skip: isNaN(u) || isNaN(d),
                    options: c,
                };
            this.updateElement(l, a, f, n);
        }
    }
};
Ze.id = "radar";
Ze.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: { line: { fill: "start" } },
};
Ze.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } };
var yt = class {
    constructor() {
        (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0);
    }
    tooltipPosition(t) {
        let { x: e, y: i } = this.getProps(["x", "y"], t);
        return { x: e, y: i };
    }
    hasValue() {
        return pe(this.x) && pe(this.y);
    }
    getProps(t, e) {
        let i = this.$animations;
        if (!e || !i) return this;
        let n = {};
        return (
            t.forEach((r) => {
                n[r] = i[r] && i[r].active() ? i[r]._to : this[r];
            }),
            n
        );
    }
};
yt.defaults = {};
yt.defaultRoutes = void 0;
var tl = {
    values(s) {
        return $(s) ? s : "" + s;
    },
    numeric(s, t, e) {
        if (s === 0) return "0";
        let i = this.chart.options.locale,
            n,
            r = s;
        if (e.length > 1) {
            let c = Math.max(
                Math.abs(e[0].value),
                Math.abs(e[e.length - 1].value),
            );
            (c < 1e-4 || c > 1e15) && (n = "scientific"), (r = hu(s, e));
        }
        let o = gt(Math.abs(r)),
            a = Math.max(Math.min(-1 * Math.floor(o), 20), 0),
            l = {
                notation: n,
                minimumFractionDigits: a,
                maximumFractionDigits: a,
            };
        return Object.assign(l, this.options.ticks.format), Ve(s, i, l);
    },
    logarithmic(s, t, e) {
        if (s === 0) return "0";
        let i = s / Math.pow(10, Math.floor(gt(s)));
        return i === 1 || i === 2 || i === 5
            ? tl.numeric.call(this, s, t, e)
            : "";
    },
};
function hu(s, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return (
        Math.abs(e) >= 1 && s !== Math.floor(s) && (e = s - Math.floor(s)), e
    );
}
var Xi = { formatters: tl };
L.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
        display: !0,
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (s, t) => t.lineWidth,
        tickColor: (s, t) => t.color,
        offset: !1,
        borderDash: [],
        borderDashOffset: 0,
        borderWidth: 1,
    },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Xi.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: !1,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2,
    },
});
L.route("scale.ticks", "color", "", "color");
L.route("scale.grid", "color", "", "borderColor");
L.route("scale.grid", "borderColor", "", "borderColor");
L.route("scale.title", "color", "", "color");
L.describe("scale", {
    _fallback: !1,
    _scriptable: (s) =>
        !s.startsWith("before") &&
        !s.startsWith("after") &&
        s !== "callback" &&
        s !== "parser",
    _indexable: (s) => s !== "borderDash" && s !== "tickBorderDash",
});
L.describe("scales", { _fallback: "scale" });
L.describe("scale.ticks", {
    _scriptable: (s) => s !== "backdropPadding" && s !== "callback",
    _indexable: (s) => s !== "backdropPadding",
});
function uu(s, t) {
    let e = s.options.ticks,
        i = e.maxTicksLimit || du(s),
        n = e.major.enabled ? mu(t) : [],
        r = n.length,
        o = n[0],
        a = n[r - 1],
        l = [];
    if (r > i) return gu(t, l, n, r / i), l;
    let c = fu(n, t, i);
    if (r > 0) {
        let h,
            u,
            d = r > 1 ? Math.round((a - o) / (r - 1)) : null;
        for (Ni(t, l, c, N(d) ? 0 : o - d, o), h = 0, u = r - 1; h < u; h++)
            Ni(t, l, c, n[h], n[h + 1]);
        return Ni(t, l, c, a, N(d) ? t.length : a + d), l;
    }
    return Ni(t, l, c), l;
}
function du(s) {
    let t = s.options.offset,
        e = s._tickSize(),
        i = s._length / e + (t ? 0 : 1),
        n = s._maxLength / e;
    return Math.floor(Math.min(i, n));
}
function fu(s, t, e) {
    let i = pu(s),
        n = t.length / e;
    if (!i) return Math.max(n, 1);
    let r = Fo(i);
    for (let o = 0, a = r.length - 1; o < a; o++) {
        let l = r[o];
        if (l > n) return l;
    }
    return Math.max(n, 1);
}
function mu(s) {
    let t = [],
        e,
        i;
    for (e = 0, i = s.length; e < i; e++) s[e].major && t.push(e);
    return t;
}
function gu(s, t, e, i) {
    let n = 0,
        r = e[0],
        o;
    for (i = Math.ceil(i), o = 0; o < s.length; o++)
        o === r && (t.push(s[o]), n++, (r = e[n * i]));
}
function Ni(s, t, e, i, n) {
    let r = C(i, 0),
        o = Math.min(C(n, s.length), s.length),
        a = 0,
        l,
        c,
        h;
    for (
        e = Math.ceil(e),
            n && ((l = n - i), (e = l / Math.floor(l / e))),
            h = r;
        h < 0;

    )
        a++, (h = Math.round(r + a * e));
    for (c = Math.max(r, 0); c < o; c++)
        c === h && (t.push(s[c]), a++, (h = Math.round(r + a * e)));
}
function pu(s) {
    let t = s.length,
        e,
        i;
    if (t < 2) return !1;
    for (i = s[0], e = 1; e < t; ++e) if (s[e] - s[e - 1] !== i) return !1;
    return i;
}
var yu = (s) => (s === "left" ? "right" : s === "right" ? "left" : s),
    ya = (s, t, e) => (t === "top" || t === "left" ? s[t] + e : s[t] - e);
function ba(s, t) {
    let e = [],
        i = s.length / t,
        n = s.length,
        r = 0;
    for (; r < n; r += i) e.push(s[Math.floor(r)]);
    return e;
}
function bu(s, t, e) {
    let i = s.ticks.length,
        n = Math.min(t, i - 1),
        r = s._startPixel,
        o = s._endPixel,
        a = 1e-6,
        l = s.getPixelForTick(n),
        c;
    if (
        !(
            e &&
            (i === 1
                ? (c = Math.max(l - r, o - l))
                : t === 0
                  ? (c = (s.getPixelForTick(1) - l) / 2)
                  : (c = (l - s.getPixelForTick(n - 1)) / 2),
            (l += n < t ? c : -c),
            l < r - a || l > o + a)
        )
    )
        return l;
}
function xu(s, t) {
    H(s, (e) => {
        let i = e.gc,
            n = i.length / 2,
            r;
        if (n > t) {
            for (r = 0; r < n; ++r) delete e.data[i[r]];
            i.splice(0, n);
        }
    });
}
function vs(s) {
    return s.drawTicks ? s.tickLength : 0;
}
function xa(s, t) {
    if (!s.display) return 0;
    let e = st(s.font, t),
        i = at(s.padding);
    return ($(s.text) ? s.text.length : 1) * e.lineHeight + i.height;
}
function _u(s, t) {
    return $t(s, { scale: t, type: "scale" });
}
function wu(s, t, e) {
    return $t(s, { tick: e, index: t, type: "tick" });
}
function Su(s, t, e) {
    let i = Ci(s);
    return ((e && t !== "right") || (!e && t === "right")) && (i = yu(i)), i;
}
function ku(s, t, e, i) {
    let { top: n, left: r, bottom: o, right: a, chart: l } = s,
        { chartArea: c, scales: h } = l,
        u = 0,
        d,
        f,
        m,
        g = o - n,
        p = a - r;
    if (s.isHorizontal()) {
        if (((f = ot(i, r, a)), A(e))) {
            let y = Object.keys(e)[0],
                b = e[y];
            m = h[y].getPixelForValue(b) + g - t;
        } else
            e === "center"
                ? (m = (c.bottom + c.top) / 2 + g - t)
                : (m = ya(s, e, t));
        d = a - r;
    } else {
        if (A(e)) {
            let y = Object.keys(e)[0],
                b = e[y];
            f = h[y].getPixelForValue(b) - p + t;
        } else
            e === "center"
                ? (f = (c.left + c.right) / 2 - p + t)
                : (f = ya(s, e, t));
        (m = ot(i, o, n)), (u = e === "left" ? -Z : Z);
    }
    return { titleX: f, titleY: m, maxWidth: d, rotation: u };
}
var Yt = class extends yt {
        constructor(t) {
            super(),
                (this.id = t.id),
                (this.type = t.type),
                (this.options = void 0),
                (this.ctx = t.ctx),
                (this.chart = t.chart),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.width = void 0),
                (this.height = void 0),
                (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
                (this.maxWidth = void 0),
                (this.maxHeight = void 0),
                (this.paddingTop = void 0),
                (this.paddingBottom = void 0),
                (this.paddingLeft = void 0),
                (this.paddingRight = void 0),
                (this.axis = void 0),
                (this.labelRotation = void 0),
                (this.min = void 0),
                (this.max = void 0),
                (this._range = void 0),
                (this.ticks = []),
                (this._gridLineItems = null),
                (this._labelItems = null),
                (this._labelSizes = null),
                (this._length = 0),
                (this._maxLength = 0),
                (this._longestTextCache = {}),
                (this._startPixel = void 0),
                (this._endPixel = void 0),
                (this._reversePixels = !1),
                (this._userMax = void 0),
                (this._userMin = void 0),
                (this._suggestedMax = void 0),
                (this._suggestedMin = void 0),
                (this._ticksLength = 0),
                (this._borderValue = 0),
                (this._cache = {}),
                (this._dataLimitsCached = !1),
                (this.$context = void 0);
        }
        init(t) {
            (this.options = t.setContext(this.getContext())),
                (this.axis = t.axis),
                (this._userMin = this.parse(t.min)),
                (this._userMax = this.parse(t.max)),
                (this._suggestedMin = this.parse(t.suggestedMin)),
                (this._suggestedMax = this.parse(t.suggestedMax));
        }
        parse(t, e) {
            return t;
        }
        getUserBounds() {
            let {
                _userMin: t,
                _userMax: e,
                _suggestedMin: i,
                _suggestedMax: n,
            } = this;
            return (
                (t = mt(t, Number.POSITIVE_INFINITY)),
                (e = mt(e, Number.NEGATIVE_INFINITY)),
                (i = mt(i, Number.POSITIVE_INFINITY)),
                (n = mt(n, Number.NEGATIVE_INFINITY)),
                {
                    min: mt(t, i),
                    max: mt(e, n),
                    minDefined: K(t),
                    maxDefined: K(e),
                }
            );
        }
        getMinMax(t) {
            let {
                    min: e,
                    max: i,
                    minDefined: n,
                    maxDefined: r,
                } = this.getUserBounds(),
                o;
            if (n && r) return { min: e, max: i };
            let a = this.getMatchingVisibleMetas();
            for (let l = 0, c = a.length; l < c; ++l)
                (o = a[l].controller.getMinMax(this, t)),
                    n || (e = Math.min(e, o.min)),
                    r || (i = Math.max(i, o.max));
            return (
                (e = r && e > i ? i : e),
                (i = n && e > i ? e : i),
                { min: mt(e, mt(i, e)), max: mt(i, mt(e, i)) }
            );
        }
        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0,
            };
        }
        getTicks() {
            return this.ticks;
        }
        getLabels() {
            let t = this.chart.data;
            return (
                this.options.labels ||
                (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                t.labels ||
                []
            );
        }
        beforeLayout() {
            (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
            j(this.options.beforeUpdate, [this]);
        }
        update(t, e, i) {
            let { beginAtZero: n, grace: r, ticks: o } = this.options,
                a = o.sampleSize;
            this.beforeUpdate(),
                (this.maxWidth = t),
                (this.maxHeight = e),
                (this._margins = i =
                    Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
                (this.ticks = null),
                (this._labelSizes = null),
                (this._gridLineItems = null),
                (this._labelItems = null),
                this.beforeSetDimensions(),
                this.setDimensions(),
                this.afterSetDimensions(),
                (this._maxLength = this.isHorizontal()
                    ? this.width + i.left + i.right
                    : this.height + i.top + i.bottom),
                this._dataLimitsCached ||
                    (this.beforeDataLimits(),
                    this.determineDataLimits(),
                    this.afterDataLimits(),
                    (this._range = Go(this, r, n)),
                    (this._dataLimitsCached = !0)),
                this.beforeBuildTicks(),
                (this.ticks = this.buildTicks() || []),
                this.afterBuildTicks();
            let l = a < this.ticks.length;
            this._convertTicksToLabels(l ? ba(this.ticks, a) : this.ticks),
                this.configure(),
                this.beforeCalculateLabelRotation(),
                this.calculateLabelRotation(),
                this.afterCalculateLabelRotation(),
                o.display &&
                    (o.autoSkip || o.source === "auto") &&
                    ((this.ticks = uu(this, this.ticks)),
                    (this._labelSizes = null),
                    this.afterAutoSkip()),
                l && this._convertTicksToLabels(this.ticks),
                this.beforeFit(),
                this.fit(),
                this.afterFit(),
                this.afterUpdate();
        }
        configure() {
            let t = this.options.reverse,
                e,
                i;
            this.isHorizontal()
                ? ((e = this.left), (i = this.right))
                : ((e = this.top), (i = this.bottom), (t = !t)),
                (this._startPixel = e),
                (this._endPixel = i),
                (this._reversePixels = t),
                (this._length = i - e),
                (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
            j(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
            j(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
            this.isHorizontal()
                ? ((this.width = this.maxWidth),
                  (this.left = 0),
                  (this.right = this.width))
                : ((this.height = this.maxHeight),
                  (this.top = 0),
                  (this.bottom = this.height)),
                (this.paddingLeft = 0),
                (this.paddingTop = 0),
                (this.paddingRight = 0),
                (this.paddingBottom = 0);
        }
        afterSetDimensions() {
            j(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()),
                j(this.options[t], [this]);
        }
        beforeDataLimits() {
            this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
            this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
            this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
            return [];
        }
        afterBuildTicks() {
            this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
            j(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
            let e = this.options.ticks,
                i,
                n,
                r;
            for (i = 0, n = t.length; i < n; i++)
                (r = t[i]), (r.label = j(e.callback, [r.value, i, t], this));
        }
        afterTickToLabelConversion() {
            j(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
            j(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
            let t = this.options,
                e = t.ticks,
                i = this.ticks.length,
                n = e.minRotation || 0,
                r = e.maxRotation,
                o = n,
                a,
                l,
                c;
            if (
                !this._isVisible() ||
                !e.display ||
                n >= r ||
                i <= 1 ||
                !this.isHorizontal()
            ) {
                this.labelRotation = n;
                return;
            }
            let h = this._getLabelSizes(),
                u = h.widest.width,
                d = h.highest.height,
                f = it(this.chart.width - u, 0, this.maxWidth);
            (a = t.offset ? this.maxWidth / i : f / (i - 1)),
                u + 6 > a &&
                    ((a = f / (i - (t.offset ? 0.5 : 1))),
                    (l =
                        this.maxHeight -
                        vs(t.grid) -
                        e.padding -
                        xa(t.title, this.chart.options.font)),
                    (c = Math.sqrt(u * u + d * d)),
                    (o = Di(
                        Math.min(
                            Math.asin(it((h.highest.height + 6) / a, -1, 1)),
                            Math.asin(it(l / c, -1, 1)) -
                                Math.asin(it(d / c, -1, 1)),
                        ),
                    )),
                    (o = Math.max(n, Math.min(r, o)))),
                (this.labelRotation = o);
        }
        afterCalculateLabelRotation() {
            j(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
            j(this.options.beforeFit, [this]);
        }
        fit() {
            let t = { width: 0, height: 0 },
                {
                    chart: e,
                    options: { ticks: i, title: n, grid: r },
                } = this,
                o = this._isVisible(),
                a = this.isHorizontal();
            if (o) {
                let l = xa(n, e.options.font);
                if (
                    (a
                        ? ((t.width = this.maxWidth), (t.height = vs(r) + l))
                        : ((t.height = this.maxHeight), (t.width = vs(r) + l)),
                    i.display && this.ticks.length)
                ) {
                    let {
                            first: c,
                            last: h,
                            widest: u,
                            highest: d,
                        } = this._getLabelSizes(),
                        f = i.padding * 2,
                        m = wt(this.labelRotation),
                        g = Math.cos(m),
                        p = Math.sin(m);
                    if (a) {
                        let y = i.mirror ? 0 : p * u.width + g * d.height;
                        t.height = Math.min(this.maxHeight, t.height + y + f);
                    } else {
                        let y = i.mirror ? 0 : g * u.width + p * d.height;
                        t.width = Math.min(this.maxWidth, t.width + y + f);
                    }
                    this._calculatePadding(c, h, p, g);
                }
            }
            this._handleMargins(),
                a
                    ? ((this.width = this._length =
                          e.width - this._margins.left - this._margins.right),
                      (this.height = t.height))
                    : ((this.width = t.width),
                      (this.height = this._length =
                          e.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(t, e, i, n) {
            let {
                    ticks: { align: r, padding: o },
                    position: a,
                } = this.options,
                l = this.labelRotation !== 0,
                c = a !== "top" && this.axis === "x";
            if (this.isHorizontal()) {
                let h = this.getPixelForTick(0) - this.left,
                    u =
                        this.right -
                        this.getPixelForTick(this.ticks.length - 1),
                    d = 0,
                    f = 0;
                l
                    ? c
                        ? ((d = n * t.width), (f = i * e.height))
                        : ((d = i * t.height), (f = n * e.width))
                    : r === "start"
                      ? (f = e.width)
                      : r === "end"
                        ? (d = t.width)
                        : r !== "inner" &&
                          ((d = t.width / 2), (f = e.width / 2)),
                    (this.paddingLeft = Math.max(
                        ((d - h + o) * this.width) / (this.width - h),
                        0,
                    )),
                    (this.paddingRight = Math.max(
                        ((f - u + o) * this.width) / (this.width - u),
                        0,
                    ));
            } else {
                let h = e.height / 2,
                    u = t.height / 2;
                r === "start"
                    ? ((h = 0), (u = t.height))
                    : r === "end" && ((h = e.height), (u = 0)),
                    (this.paddingTop = h + o),
                    (this.paddingBottom = u + o);
            }
        }
        _handleMargins() {
            this._margins &&
                ((this._margins.left = Math.max(
                    this.paddingLeft,
                    this._margins.left,
                )),
                (this._margins.top = Math.max(
                    this.paddingTop,
                    this._margins.top,
                )),
                (this._margins.right = Math.max(
                    this.paddingRight,
                    this._margins.right,
                )),
                (this._margins.bottom = Math.max(
                    this.paddingBottom,
                    this._margins.bottom,
                )));
        }
        afterFit() {
            j(this.options.afterFit, [this]);
        }
        isHorizontal() {
            let { axis: t, position: e } = this.options;
            return e === "top" || e === "bottom" || t === "x";
        }
        isFullSize() {
            return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
            this.beforeTickToLabelConversion(), this.generateTickLabels(t);
            let e, i;
            for (e = 0, i = t.length; e < i; e++)
                N(t[e].label) && (t.splice(e, 1), i--, e--);
            this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
                let e = this.options.ticks.sampleSize,
                    i = this.ticks;
                e < i.length && (i = ba(i, e)),
                    (this._labelSizes = t =
                        this._computeLabelSizes(i, i.length));
            }
            return t;
        }
        _computeLabelSizes(t, e) {
            let { ctx: i, _longestTextCache: n } = this,
                r = [],
                o = [],
                a = 0,
                l = 0,
                c,
                h,
                u,
                d,
                f,
                m,
                g,
                p,
                y,
                b,
                _;
            for (c = 0; c < e; ++c) {
                if (
                    ((d = t[c].label),
                    (f = this._resolveTickFontOptions(c)),
                    (i.font = m = f.string),
                    (g = n[m] = n[m] || { data: {}, gc: [] }),
                    (p = f.lineHeight),
                    (y = b = 0),
                    !N(d) && !$(d))
                )
                    (y = _s(i, g.data, g.gc, y, d)), (b = p);
                else if ($(d))
                    for (h = 0, u = d.length; h < u; ++h)
                        (_ = d[h]),
                            !N(_) &&
                                !$(_) &&
                                ((y = _s(i, g.data, g.gc, y, _)), (b += p));
                r.push(y),
                    o.push(b),
                    (a = Math.max(y, a)),
                    (l = Math.max(b, l));
            }
            xu(n, e);
            let w = r.indexOf(a),
                x = o.indexOf(l),
                S = (k) => ({ width: r[k] || 0, height: o[k] || 0 });
            return {
                first: S(0),
                last: S(e - 1),
                widest: S(w),
                highest: S(x),
                widths: r,
                heights: o,
            };
        }
        getLabelForValue(t) {
            return t;
        }
        getPixelForValue(t, e) {
            return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
            let e = this.ticks;
            return t < 0 || t > e.length - 1
                ? null
                : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            let e = this._startPixel + t * this._length;
            return Lo(this._alignToPixels ? te(this.chart, e, 0) : e);
        }
        getDecimalForPixel(t) {
            let e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
            let { min: t, max: e } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
            let e = this.ticks || [];
            if (t >= 0 && t < e.length) {
                let i = e[t];
                return i.$context || (i.$context = wu(this.getContext(), t, i));
            }
            return (
                this.$context ||
                (this.$context = _u(this.chart.getContext(), this))
            );
        }
        _tickSize() {
            let t = this.options.ticks,
                e = wt(this.labelRotation),
                i = Math.abs(Math.cos(e)),
                n = Math.abs(Math.sin(e)),
                r = this._getLabelSizes(),
                o = t.autoSkipPadding || 0,
                a = r ? r.widest.width + o : 0,
                l = r ? r.highest.height + o : 0;
            return this.isHorizontal()
                ? l * i > a * n
                    ? a / i
                    : l / n
                : l * n < a * i
                  ? l / i
                  : a / n;
        }
        _isVisible() {
            let t = this.options.display;
            return t !== "auto"
                ? !!t
                : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
            let e = this.axis,
                i = this.chart,
                n = this.options,
                { grid: r, position: o } = n,
                a = r.offset,
                l = this.isHorizontal(),
                h = this.ticks.length + (a ? 1 : 0),
                u = vs(r),
                d = [],
                f = r.setContext(this.getContext()),
                m = f.drawBorder ? f.borderWidth : 0,
                g = m / 2,
                p = function (E) {
                    return te(i, E, m);
                },
                y,
                b,
                _,
                w,
                x,
                S,
                k,
                O,
                v,
                F,
                W,
                R;
            if (o === "top")
                (y = p(this.bottom)),
                    (S = this.bottom - u),
                    (O = y - g),
                    (F = p(t.top) + g),
                    (R = t.bottom);
            else if (o === "bottom")
                (y = p(this.top)),
                    (F = t.top),
                    (R = p(t.bottom) - g),
                    (S = y + g),
                    (O = this.top + u);
            else if (o === "left")
                (y = p(this.right)),
                    (x = this.right - u),
                    (k = y - g),
                    (v = p(t.left) + g),
                    (W = t.right);
            else if (o === "right")
                (y = p(this.left)),
                    (v = t.left),
                    (W = p(t.right) - g),
                    (x = y + g),
                    (k = this.left + u);
            else if (e === "x") {
                if (o === "center") y = p((t.top + t.bottom) / 2 + 0.5);
                else if (A(o)) {
                    let E = Object.keys(o)[0],
                        et = o[E];
                    y = p(this.chart.scales[E].getPixelForValue(et));
                }
                (F = t.top), (R = t.bottom), (S = y + g), (O = S + u);
            } else if (e === "y") {
                if (o === "center") y = p((t.left + t.right) / 2);
                else if (A(o)) {
                    let E = Object.keys(o)[0],
                        et = o[E];
                    y = p(this.chart.scales[E].getPixelForValue(et));
                }
                (x = y - g), (k = x - u), (v = t.left), (W = t.right);
            }
            let tt = C(n.ticks.maxTicksLimit, h),
                ct = Math.max(1, Math.ceil(h / tt));
            for (b = 0; b < h; b += ct) {
                let E = r.setContext(this.getContext(b)),
                    et = E.lineWidth,
                    Q = E.color,
                    fe = E.borderDash || [],
                    xn = E.borderDashOffset,
                    Oe = E.tickWidth,
                    yi = E.tickColor,
                    De = E.tickBorderDash || [],
                    ps = E.tickBorderDashOffset;
                (_ = bu(this, b, a)),
                    _ !== void 0 &&
                        ((w = te(i, _, et)),
                        l ? (x = k = v = W = w) : (S = O = F = R = w),
                        d.push({
                            tx1: x,
                            ty1: S,
                            tx2: k,
                            ty2: O,
                            x1: v,
                            y1: F,
                            x2: W,
                            y2: R,
                            width: et,
                            color: Q,
                            borderDash: fe,
                            borderDashOffset: xn,
                            tickWidth: Oe,
                            tickColor: yi,
                            tickBorderDash: De,
                            tickBorderDashOffset: ps,
                        }));
            }
            return (this._ticksLength = h), (this._borderValue = y), d;
        }
        _computeLabelItems(t) {
            let e = this.axis,
                i = this.options,
                { position: n, ticks: r } = i,
                o = this.isHorizontal(),
                a = this.ticks,
                { align: l, crossAlign: c, padding: h, mirror: u } = r,
                d = vs(i.grid),
                f = d + h,
                m = u ? -h : f,
                g = -wt(this.labelRotation),
                p = [],
                y,
                b,
                _,
                w,
                x,
                S,
                k,
                O,
                v,
                F,
                W,
                R,
                tt = "middle";
            if (n === "top")
                (S = this.bottom - m), (k = this._getXAxisLabelAlignment());
            else if (n === "bottom")
                (S = this.top + m), (k = this._getXAxisLabelAlignment());
            else if (n === "left") {
                let E = this._getYAxisLabelAlignment(d);
                (k = E.textAlign), (x = E.x);
            } else if (n === "right") {
                let E = this._getYAxisLabelAlignment(d);
                (k = E.textAlign), (x = E.x);
            } else if (e === "x") {
                if (n === "center") S = (t.top + t.bottom) / 2 + f;
                else if (A(n)) {
                    let E = Object.keys(n)[0],
                        et = n[E];
                    S = this.chart.scales[E].getPixelForValue(et) + f;
                }
                k = this._getXAxisLabelAlignment();
            } else if (e === "y") {
                if (n === "center") x = (t.left + t.right) / 2 - f;
                else if (A(n)) {
                    let E = Object.keys(n)[0],
                        et = n[E];
                    x = this.chart.scales[E].getPixelForValue(et);
                }
                k = this._getYAxisLabelAlignment(d).textAlign;
            }
            e === "y" &&
                (l === "start" ? (tt = "top") : l === "end" && (tt = "bottom"));
            let ct = this._getLabelSizes();
            for (y = 0, b = a.length; y < b; ++y) {
                (_ = a[y]), (w = _.label);
                let E = r.setContext(this.getContext(y));
                (O = this.getPixelForTick(y) + r.labelOffset),
                    (v = this._resolveTickFontOptions(y)),
                    (F = v.lineHeight),
                    (W = $(w) ? w.length : 1);
                let et = W / 2,
                    Q = E.color,
                    fe = E.textStrokeColor,
                    xn = E.textStrokeWidth,
                    Oe = k;
                o
                    ? ((x = O),
                      k === "inner" &&
                          (y === b - 1
                              ? (Oe = this.options.reverse ? "left" : "right")
                              : y === 0
                                ? (Oe = this.options.reverse ? "right" : "left")
                                : (Oe = "center")),
                      n === "top"
                          ? c === "near" || g !== 0
                              ? (R = -W * F + F / 2)
                              : c === "center"
                                ? (R = -ct.highest.height / 2 - et * F + F)
                                : (R = -ct.highest.height + F / 2)
                          : c === "near" || g !== 0
                            ? (R = F / 2)
                            : c === "center"
                              ? (R = ct.highest.height / 2 - et * F)
                              : (R = ct.highest.height - W * F),
                      u && (R *= -1))
                    : ((S = O), (R = ((1 - W) * F) / 2));
                let yi;
                if (E.showLabelBackdrop) {
                    let De = at(E.backdropPadding),
                        ps = ct.heights[y],
                        _n = ct.widths[y],
                        wn = S + R - De.top,
                        Sn = x - De.left;
                    switch (tt) {
                        case "middle":
                            wn -= ps / 2;
                            break;
                        case "bottom":
                            wn -= ps;
                            break;
                    }
                    switch (k) {
                        case "center":
                            Sn -= _n / 2;
                            break;
                        case "right":
                            Sn -= _n;
                            break;
                    }
                    yi = {
                        left: Sn,
                        top: wn,
                        width: _n + De.width,
                        height: ps + De.height,
                        color: E.backdropColor,
                    };
                }
                p.push({
                    rotation: g,
                    label: w,
                    font: v,
                    color: Q,
                    strokeColor: fe,
                    strokeWidth: xn,
                    textOffset: R,
                    textAlign: Oe,
                    textBaseline: tt,
                    translation: [x, S],
                    backdrop: yi,
                });
            }
            return p;
        }
        _getXAxisLabelAlignment() {
            let { position: t, ticks: e } = this.options;
            if (-wt(this.labelRotation)) return t === "top" ? "left" : "right";
            let n = "center";
            return (
                e.align === "start"
                    ? (n = "left")
                    : e.align === "end"
                      ? (n = "right")
                      : e.align === "inner" && (n = "inner"),
                n
            );
        }
        _getYAxisLabelAlignment(t) {
            let {
                    position: e,
                    ticks: { crossAlign: i, mirror: n, padding: r },
                } = this.options,
                o = this._getLabelSizes(),
                a = t + r,
                l = o.widest.width,
                c,
                h;
            return (
                e === "left"
                    ? n
                        ? ((h = this.right + r),
                          i === "near"
                              ? (c = "left")
                              : i === "center"
                                ? ((c = "center"), (h += l / 2))
                                : ((c = "right"), (h += l)))
                        : ((h = this.right - a),
                          i === "near"
                              ? (c = "right")
                              : i === "center"
                                ? ((c = "center"), (h -= l / 2))
                                : ((c = "left"), (h = this.left)))
                    : e === "right"
                      ? n
                          ? ((h = this.left + r),
                            i === "near"
                                ? (c = "right")
                                : i === "center"
                                  ? ((c = "center"), (h -= l / 2))
                                  : ((c = "left"), (h -= l)))
                          : ((h = this.left + a),
                            i === "near"
                                ? (c = "left")
                                : i === "center"
                                  ? ((c = "center"), (h += l / 2))
                                  : ((c = "right"), (h = this.right)))
                      : (c = "right"),
                { textAlign: c, x: h }
            );
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            let t = this.chart,
                e = this.options.position;
            if (e === "left" || e === "right")
                return {
                    top: 0,
                    left: this.left,
                    bottom: t.height,
                    right: this.right,
                };
            if (e === "top" || e === "bottom")
                return {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: t.width,
                };
        }
        drawBackground() {
            let {
                ctx: t,
                options: { backgroundColor: e },
                left: i,
                top: n,
                width: r,
                height: o,
            } = this;
            e &&
                (t.save(),
                (t.fillStyle = e),
                t.fillRect(i, n, r, o),
                t.restore());
        }
        getLineWidthForValue(t) {
            let e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            let n = this.ticks.findIndex((r) => r.value === t);
            return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
        }
        drawGrid(t) {
            let e = this.options.grid,
                i = this.ctx,
                n =
                    this._gridLineItems ||
                    (this._gridLineItems = this._computeGridLineItems(t)),
                r,
                o,
                a = (l, c, h) => {
                    !h.width ||
                        !h.color ||
                        (i.save(),
                        (i.lineWidth = h.width),
                        (i.strokeStyle = h.color),
                        i.setLineDash(h.borderDash || []),
                        (i.lineDashOffset = h.borderDashOffset),
                        i.beginPath(),
                        i.moveTo(l.x, l.y),
                        i.lineTo(c.x, c.y),
                        i.stroke(),
                        i.restore());
                };
            if (e.display)
                for (r = 0, o = n.length; r < o; ++r) {
                    let l = n[r];
                    e.drawOnChartArea &&
                        a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
                        e.drawTicks &&
                            a(
                                { x: l.tx1, y: l.ty1 },
                                { x: l.tx2, y: l.ty2 },
                                {
                                    color: l.tickColor,
                                    width: l.tickWidth,
                                    borderDash: l.tickBorderDash,
                                    borderDashOffset: l.tickBorderDashOffset,
                                },
                            );
                }
        }
        drawBorder() {
            let {
                    chart: t,
                    ctx: e,
                    options: { grid: i },
                } = this,
                n = i.setContext(this.getContext()),
                r = i.drawBorder ? n.borderWidth : 0;
            if (!r) return;
            let o = i.setContext(this.getContext(0)).lineWidth,
                a = this._borderValue,
                l,
                c,
                h,
                u;
            this.isHorizontal()
                ? ((l = te(t, this.left, r) - r / 2),
                  (c = te(t, this.right, o) + o / 2),
                  (h = u = a))
                : ((h = te(t, this.top, r) - r / 2),
                  (u = te(t, this.bottom, o) + o / 2),
                  (l = c = a)),
                e.save(),
                (e.lineWidth = n.borderWidth),
                (e.strokeStyle = n.borderColor),
                e.beginPath(),
                e.moveTo(l, h),
                e.lineTo(c, u),
                e.stroke(),
                e.restore();
        }
        drawLabels(t) {
            if (!this.options.ticks.display) return;
            let i = this.ctx,
                n = this._computeLabelArea();
            n && ks(i, n);
            let r =
                    this._labelItems ||
                    (this._labelItems = this._computeLabelItems(t)),
                o,
                a;
            for (o = 0, a = r.length; o < a; ++o) {
                let l = r[o],
                    c = l.font,
                    h = l.label;
                l.backdrop &&
                    ((i.fillStyle = l.backdrop.color),
                    i.fillRect(
                        l.backdrop.left,
                        l.backdrop.top,
                        l.backdrop.width,
                        l.backdrop.height,
                    ));
                let u = l.textOffset;
                ee(i, h, 0, u, c, l);
            }
            n && Ms(i);
        }
        drawTitle() {
            let {
                ctx: t,
                options: { position: e, title: i, reverse: n },
            } = this;
            if (!i.display) return;
            let r = st(i.font),
                o = at(i.padding),
                a = i.align,
                l = r.lineHeight / 2;
            e === "bottom" || e === "center" || A(e)
                ? ((l += o.bottom),
                  $(i.text) && (l += r.lineHeight * (i.text.length - 1)))
                : (l += o.top);
            let {
                titleX: c,
                titleY: h,
                maxWidth: u,
                rotation: d,
            } = ku(this, l, e, a);
            ee(t, i.text, 0, 0, r, {
                color: i.color,
                maxWidth: u,
                rotation: d,
                textAlign: Su(a, e, n),
                textBaseline: "middle",
                translation: [c, h],
            });
        }
        draw(t) {
            this._isVisible() &&
                (this.drawBackground(),
                this.drawGrid(t),
                this.drawBorder(),
                this.drawTitle(),
                this.drawLabels(t));
        }
        _layers() {
            let t = this.options,
                e = (t.ticks && t.ticks.z) || 0,
                i = C(t.grid && t.grid.z, -1);
            return !this._isVisible() || this.draw !== Yt.prototype.draw
                ? [
                      {
                          z: e,
                          draw: (n) => {
                              this.draw(n);
                          },
                      },
                  ]
                : [
                      {
                          z: i,
                          draw: (n) => {
                              this.drawBackground(),
                                  this.drawGrid(n),
                                  this.drawTitle();
                          },
                      },
                      {
                          z: i + 1,
                          draw: () => {
                              this.drawBorder();
                          },
                      },
                      {
                          z: e,
                          draw: (n) => {
                              this.drawLabels(n);
                          },
                      },
                  ];
        }
        getMatchingVisibleMetas(t) {
            let e = this.chart.getSortedVisibleDatasetMetas(),
                i = this.axis + "AxisID",
                n = [],
                r,
                o;
            for (r = 0, o = e.length; r < o; ++r) {
                let a = e[r];
                a[i] === this.id && (!t || a.type === t) && n.push(a);
            }
            return n;
        }
        _resolveTickFontOptions(t) {
            let e = this.options.ticks.setContext(this.getContext(t));
            return st(e.font);
        }
        _maxDigits() {
            let t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t;
        }
    },
    Be = class {
        constructor(t, e, i) {
            (this.type = t),
                (this.scope = e),
                (this.override = i),
                (this.items = Object.create(null));
        }
        isForType(t) {
            return Object.prototype.isPrototypeOf.call(
                this.type.prototype,
                t.prototype,
            );
        }
        register(t) {
            let e = Object.getPrototypeOf(t),
                i;
            vu(e) && (i = this.register(e));
            let n = this.items,
                r = t.id,
                o = this.scope + "." + r;
            if (!r) throw new Error("class does not have id: " + t);
            return (
                r in n ||
                    ((n[r] = t),
                    Mu(t, o, i),
                    this.override && L.override(t.id, t.overrides)),
                o
            );
        }
        get(t) {
            return this.items[t];
        }
        unregister(t) {
            let e = this.items,
                i = t.id,
                n = this.scope;
            i in e && delete e[i],
                n &&
                    i in L[n] &&
                    (delete L[n][i], this.override && delete Qt[i]);
        }
    };
function Mu(s, t, e) {
    let i = Ie(Object.create(null), [e ? L.get(e) : {}, L.get(t), s.defaults]);
    L.set(t, i),
        s.defaultRoutes && Tu(t, s.defaultRoutes),
        s.descriptors && L.describe(t, s.descriptors);
}
function Tu(s, t) {
    Object.keys(t).forEach((e) => {
        let i = e.split("."),
            n = i.pop(),
            r = [s].concat(i).join("."),
            o = t[e].split("."),
            a = o.pop(),
            l = o.join(".");
        L.route(r, n, l, a);
    });
}
function vu(s) {
    return "id" in s && "defaults" in s;
}
var pr = class {
        constructor() {
            (this.controllers = new Be(pt, "datasets", !0)),
                (this.elements = new Be(yt, "elements")),
                (this.plugins = new Be(Object, "plugins")),
                (this.scales = new Be(Yt, "scales")),
                (this._typedRegistries = [
                    this.controllers,
                    this.scales,
                    this.elements,
                ]);
        }
        add(...t) {
            this._each("register", t);
        }
        remove(...t) {
            this._each("unregister", t);
        }
        addControllers(...t) {
            this._each("register", t, this.controllers);
        }
        addElements(...t) {
            this._each("register", t, this.elements);
        }
        addPlugins(...t) {
            this._each("register", t, this.plugins);
        }
        addScales(...t) {
            this._each("register", t, this.scales);
        }
        getController(t) {
            return this._get(t, this.controllers, "controller");
        }
        getElement(t) {
            return this._get(t, this.elements, "element");
        }
        getPlugin(t) {
            return this._get(t, this.plugins, "plugin");
        }
        getScale(t) {
            return this._get(t, this.scales, "scale");
        }
        removeControllers(...t) {
            this._each("unregister", t, this.controllers);
        }
        removeElements(...t) {
            this._each("unregister", t, this.elements);
        }
        removePlugins(...t) {
            this._each("unregister", t, this.plugins);
        }
        removeScales(...t) {
            this._each("unregister", t, this.scales);
        }
        _each(t, e, i) {
            [...e].forEach((n) => {
                let r = i || this._getRegistryForType(n);
                i || r.isForType(n) || (r === this.plugins && n.id)
                    ? this._exec(t, r, n)
                    : H(n, (o) => {
                          let a = i || this._getRegistryForType(o);
                          this._exec(t, a, o);
                      });
            });
        }
        _exec(t, e, i) {
            let n = Oi(t);
            j(i["before" + n], [], i), e[t](i), j(i["after" + n], [], i);
        }
        _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
                let i = this._typedRegistries[e];
                if (i.isForType(t)) return i;
            }
            return this.plugins;
        }
        _get(t, e, i) {
            let n = e.get(t);
            if (n === void 0)
                throw new Error('"' + t + '" is not a registered ' + i + ".");
            return n;
        }
    },
    Rt = new pr(),
    qe = class extends pt {
        update(t) {
            let e = this._cachedMeta,
                { data: i = [] } = e,
                n = this.chart._animationsDisabled,
                { start: r, count: o } = zn(e, i, n);
            if (
                ((this._drawStart = r),
                (this._drawCount = o),
                Vn(e) && ((r = 0), (o = i.length)),
                this.options.showLine)
            ) {
                let { dataset: a, _dataset: l } = e;
                (a._chart = this.chart),
                    (a._datasetIndex = this.index),
                    (a._decimated = !!l._decimated),
                    (a.points = i);
                let c = this.resolveDatasetElementOptions(t);
                (c.segment = this.options.segment),
                    this.updateElement(
                        a,
                        void 0,
                        { animated: !n, options: c },
                        t,
                    );
            }
            this.updateElements(i, r, o, t);
        }
        addElements() {
            let { showLine: t } = this.options;
            !this.datasetElementType &&
                t &&
                (this.datasetElementType = Rt.getElement("line")),
                super.addElements();
        }
        updateElements(t, e, i, n) {
            let r = n === "reset",
                {
                    iScale: o,
                    vScale: a,
                    _stacked: l,
                    _dataset: c,
                } = this._cachedMeta,
                h = this.resolveDataElementOptions(e, n),
                u = this.getSharedOptions(h),
                d = this.includeOptions(n, u),
                f = o.axis,
                m = a.axis,
                { spanGaps: g, segment: p } = this.options,
                y = pe(g) ? g : Number.POSITIVE_INFINITY,
                b = this.chart._animationsDisabled || r || n === "none",
                _ = e > 0 && this.getParsed(e - 1);
            for (let w = e; w < e + i; ++w) {
                let x = t[w],
                    S = this.getParsed(w),
                    k = b ? x : {},
                    O = N(S[m]),
                    v = (k[f] = o.getPixelForValue(S[f], w)),
                    F = (k[m] =
                        r || O
                            ? a.getBasePixel()
                            : a.getPixelForValue(
                                  l ? this.applyStack(a, S, l) : S[m],
                                  w,
                              ));
                (k.skip = isNaN(v) || isNaN(F) || O),
                    (k.stop = w > 0 && Math.abs(S[f] - _[f]) > y),
                    p && ((k.parsed = S), (k.raw = c.data[w])),
                    d &&
                        (k.options =
                            u ||
                            this.resolveDataElementOptions(
                                w,
                                x.active ? "active" : n,
                            )),
                    b || this.updateElement(x, w, k, n),
                    (_ = S);
            }
            this.updateSharedOptions(u, n, h);
        }
        getMaxOverflow() {
            let t = this._cachedMeta,
                e = t.data || [];
            if (!this.options.showLine) {
                let a = 0;
                for (let l = e.length - 1; l >= 0; --l)
                    a = Math.max(
                        a,
                        e[l].size(this.resolveDataElementOptions(l)) / 2,
                    );
                return a > 0 && a;
            }
            let i = t.dataset,
                n = (i.options && i.options.borderWidth) || 0;
            if (!e.length) return n;
            let r = e[0].size(this.resolveDataElementOptions(0)),
                o = e[e.length - 1].size(
                    this.resolveDataElementOptions(e.length - 1),
                );
            return Math.max(n, r, o) / 2;
        }
    };
qe.id = "scatter";
qe.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    showLine: !1,
    fill: !1,
};
qe.overrides = {
    interaction: { mode: "point" },
    plugins: {
        tooltip: {
            callbacks: {
                title() {
                    return "";
                },
                label(s) {
                    return "(" + s.label + ", " + s.formattedValue + ")";
                },
            },
        },
    },
    scales: { x: { type: "linear" }, y: { type: "linear" } },
};
var Ou = Object.freeze({
    __proto__: null,
    BarController: $e,
    BubbleController: je,
    DoughnutController: oe,
    LineController: Ue,
    PolarAreaController: Ye,
    PieController: Fs,
    RadarController: Ze,
    ScatterController: qe,
});
function be() {
    throw new Error(
        "This method is not implemented: Check that a complete date adapter is provided.",
    );
}
var As = class {
    constructor(t) {
        this.options = t || {};
    }
    init(t) {}
    formats() {
        return be();
    }
    parse(t, e) {
        return be();
    }
    format(t, e) {
        return be();
    }
    add(t, e, i) {
        return be();
    }
    diff(t, e, i) {
        return be();
    }
    startOf(t, e, i) {
        return be();
    }
    endOf(t, e) {
        return be();
    }
};
As.override = function (s) {
    Object.assign(As.prototype, s);
};
var Or = { _date: As };
function Du(s, t, e, i) {
    let { controller: n, data: r, _sorted: o } = s,
        a = n._cachedMeta.iScale;
    if (a && t === a.axis && t !== "r" && o && r.length) {
        let l = a._reversePixels ? Po : Ft;
        if (i) {
            if (n._sharedOptions) {
                let c = r[0],
                    h = typeof c.getRange == "function" && c.getRange(t);
                if (h) {
                    let u = l(r, t, e - h),
                        d = l(r, t, e + h);
                    return { lo: u.lo, hi: d.hi };
                }
            }
        } else return l(r, t, e);
    }
    return { lo: 0, hi: r.length - 1 };
}
function Vs(s, t, e, i, n) {
    let r = s.getSortedVisibleDatasetMetas(),
        o = e[t];
    for (let a = 0, l = r.length; a < l; ++a) {
        let { index: c, data: h } = r[a],
            { lo: u, hi: d } = Du(r[a], t, o, n);
        for (let f = u; f <= d; ++f) {
            let m = h[f];
            m.skip || i(m, c, f);
        }
    }
}
function Eu(s) {
    let t = s.indexOf("x") !== -1,
        e = s.indexOf("y") !== -1;
    return function (i, n) {
        let r = t ? Math.abs(i.x - n.x) : 0,
            o = e ? Math.abs(i.y - n.y) : 0;
        return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
    };
}
function lr(s, t, e, i, n) {
    let r = [];
    return (
        (!n && !s.isPointInArea(t)) ||
            Vs(
                s,
                e,
                t,
                function (a, l, c) {
                    (!n && !Ae(a, s.chartArea, 0)) ||
                        (a.inRange(t.x, t.y, i) &&
                            r.push({ element: a, datasetIndex: l, index: c }));
                },
                !0,
            ),
        r
    );
}
function Cu(s, t, e, i) {
    let n = [];
    function r(o, a, l) {
        let { startAngle: c, endAngle: h } = o.getProps(
                ["startAngle", "endAngle"],
                i,
            ),
            { angle: u } = Ln(o, { x: t.x, y: t.y });
        Ne(u, c, h) && n.push({ element: o, datasetIndex: a, index: l });
    }
    return Vs(s, e, t, r), n;
}
function Iu(s, t, e, i, n, r) {
    let o = [],
        a = Eu(e),
        l = Number.POSITIVE_INFINITY;
    function c(h, u, d) {
        let f = h.inRange(t.x, t.y, n);
        if (i && !f) return;
        let m = h.getCenterPoint(n);
        if (!(!!r || s.isPointInArea(m)) && !f) return;
        let p = a(t, m);
        p < l
            ? ((o = [{ element: h, datasetIndex: u, index: d }]), (l = p))
            : p === l && o.push({ element: h, datasetIndex: u, index: d });
    }
    return Vs(s, e, t, c), o;
}
function cr(s, t, e, i, n, r) {
    return !r && !s.isPointInArea(t)
        ? []
        : e === "r" && !i
          ? Cu(s, t, e, n)
          : Iu(s, t, e, i, n, r);
}
function _a(s, t, e, i, n) {
    let r = [],
        o = e === "x" ? "inXRange" : "inYRange",
        a = !1;
    return (
        Vs(s, e, t, (l, c, h) => {
            l[o](t[e], n) &&
                (r.push({ element: l, datasetIndex: c, index: h }),
                (a = a || l.inRange(t.x, t.y, n)));
        }),
        i && !a ? [] : r
    );
}
var Fu = {
        evaluateInteractionItems: Vs,
        modes: {
            index(s, t, e, i) {
                let n = ie(t, s),
                    r = e.axis || "x",
                    o = e.includeInvisible || !1,
                    a = e.intersect ? lr(s, n, r, i, o) : cr(s, n, r, !1, i, o),
                    l = [];
                return a.length
                    ? (s.getSortedVisibleDatasetMetas().forEach((c) => {
                          let h = a[0].index,
                              u = c.data[h];
                          u &&
                              !u.skip &&
                              l.push({
                                  element: u,
                                  datasetIndex: c.index,
                                  index: h,
                              });
                      }),
                      l)
                    : [];
            },
            dataset(s, t, e, i) {
                let n = ie(t, s),
                    r = e.axis || "xy",
                    o = e.includeInvisible || !1,
                    a = e.intersect ? lr(s, n, r, i, o) : cr(s, n, r, !1, i, o);
                if (a.length > 0) {
                    let l = a[0].datasetIndex,
                        c = s.getDatasetMeta(l).data;
                    a = [];
                    for (let h = 0; h < c.length; ++h)
                        a.push({ element: c[h], datasetIndex: l, index: h });
                }
                return a;
            },
            point(s, t, e, i) {
                let n = ie(t, s),
                    r = e.axis || "xy",
                    o = e.includeInvisible || !1;
                return lr(s, n, r, i, o);
            },
            nearest(s, t, e, i) {
                let n = ie(t, s),
                    r = e.axis || "xy",
                    o = e.includeInvisible || !1;
                return cr(s, n, r, e.intersect, i, o);
            },
            x(s, t, e, i) {
                let n = ie(t, s);
                return _a(s, n, "x", e.intersect, i);
            },
            y(s, t, e, i) {
                let n = ie(t, s);
                return _a(s, n, "y", e.intersect, i);
            },
        },
    },
    el = ["left", "top", "right", "bottom"];
function Os(s, t) {
    return s.filter((e) => e.pos === t);
}
function wa(s, t) {
    return s.filter((e) => el.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Ds(s, t) {
    return s.sort((e, i) => {
        let n = t ? i : e,
            r = t ? e : i;
        return n.weight === r.weight ? n.index - r.index : n.weight - r.weight;
    });
}
function Au(s) {
    let t = [],
        e,
        i,
        n,
        r,
        o,
        a;
    for (e = 0, i = (s || []).length; e < i; ++e)
        (n = s[e]),
            ({
                position: r,
                options: { stack: o, stackWeight: a = 1 },
            } = n),
            t.push({
                index: e,
                box: n,
                pos: r,
                horizontal: n.isHorizontal(),
                weight: n.weight,
                stack: o && r + o,
                stackWeight: a,
            });
    return t;
}
function Lu(s) {
    let t = {};
    for (let e of s) {
        let { stack: i, pos: n, stackWeight: r } = e;
        if (!i || !el.includes(n)) continue;
        let o = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
        o.count++, (o.weight += r);
    }
    return t;
}
function Pu(s, t) {
    let e = Lu(s),
        { vBoxMaxWidth: i, hBoxMaxHeight: n } = t,
        r,
        o,
        a;
    for (r = 0, o = s.length; r < o; ++r) {
        a = s[r];
        let { fullSize: l } = a.box,
            c = e[a.stack],
            h = c && a.stackWeight / c.weight;
        a.horizontal
            ? ((a.width = h ? h * i : l && t.availableWidth), (a.height = n))
            : ((a.width = i), (a.height = h ? h * n : l && t.availableHeight));
    }
    return e;
}
function Ru(s) {
    let t = Au(s),
        e = Ds(
            t.filter((c) => c.box.fullSize),
            !0,
        ),
        i = Ds(Os(t, "left"), !0),
        n = Ds(Os(t, "right")),
        r = Ds(Os(t, "top"), !0),
        o = Ds(Os(t, "bottom")),
        a = wa(t, "x"),
        l = wa(t, "y");
    return {
        fullSize: e,
        leftAndTop: i.concat(r),
        rightAndBottom: n.concat(l).concat(o).concat(a),
        chartArea: Os(t, "chartArea"),
        vertical: i.concat(n).concat(l),
        horizontal: r.concat(o).concat(a),
    };
}
function Sa(s, t, e, i) {
    return Math.max(s[e], t[e]) + Math.max(s[i], t[i]);
}
function sl(s, t) {
    (s.top = Math.max(s.top, t.top)),
        (s.left = Math.max(s.left, t.left)),
        (s.bottom = Math.max(s.bottom, t.bottom)),
        (s.right = Math.max(s.right, t.right));
}
function Nu(s, t, e, i) {
    let { pos: n, box: r } = e,
        o = s.maxPadding;
    if (!A(n)) {
        e.size && (s[n] -= e.size);
        let u = i[e.stack] || { size: 0, count: 1 };
        (u.size = Math.max(u.size, e.horizontal ? r.height : r.width)),
            (e.size = u.size / u.count),
            (s[n] += e.size);
    }
    r.getPadding && sl(o, r.getPadding());
    let a = Math.max(0, t.outerWidth - Sa(o, s, "left", "right")),
        l = Math.max(0, t.outerHeight - Sa(o, s, "top", "bottom")),
        c = a !== s.w,
        h = l !== s.h;
    return (
        (s.w = a),
        (s.h = l),
        e.horizontal ? { same: c, other: h } : { same: h, other: c }
    );
}
function Wu(s) {
    let t = s.maxPadding;
    function e(i) {
        let n = Math.max(t[i] - s[i], 0);
        return (s[i] += n), n;
    }
    (s.y += e("top")), (s.x += e("left")), e("right"), e("bottom");
}
function zu(s, t) {
    let e = t.maxPadding;
    function i(n) {
        let r = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
            n.forEach((o) => {
                r[o] = Math.max(t[o], e[o]);
            }),
            r
        );
    }
    return i(s ? ["left", "right"] : ["top", "bottom"]);
}
function Cs(s, t, e, i) {
    let n = [],
        r,
        o,
        a,
        l,
        c,
        h;
    for (r = 0, o = s.length, c = 0; r < o; ++r) {
        (a = s[r]),
            (l = a.box),
            l.update(a.width || t.w, a.height || t.h, zu(a.horizontal, t));
        let { same: u, other: d } = Nu(t, e, a, i);
        (c |= u && n.length), (h = h || d), l.fullSize || n.push(a);
    }
    return (c && Cs(n, t, e, i)) || h;
}
function Wi(s, t, e, i, n) {
    (s.top = e),
        (s.left = t),
        (s.right = t + i),
        (s.bottom = e + n),
        (s.width = i),
        (s.height = n);
}
function ka(s, t, e, i) {
    let n = e.padding,
        { x: r, y: o } = t;
    for (let a of s) {
        let l = a.box,
            c = i[a.stack] || { count: 1, placed: 0, weight: 1 },
            h = a.stackWeight / c.weight || 1;
        if (a.horizontal) {
            let u = t.w * h,
                d = c.size || l.height;
            ft(c.start) && (o = c.start),
                l.fullSize
                    ? Wi(l, n.left, o, e.outerWidth - n.right - n.left, d)
                    : Wi(l, t.left + c.placed, o, u, d),
                (c.start = o),
                (c.placed += u),
                (o = l.bottom);
        } else {
            let u = t.h * h,
                d = c.size || l.width;
            ft(c.start) && (r = c.start),
                l.fullSize
                    ? Wi(l, r, n.top, d, e.outerHeight - n.bottom - n.top)
                    : Wi(l, r, t.top + c.placed, d, u),
                (c.start = r),
                (c.placed += u),
                (r = l.right);
        }
    }
    (t.x = r), (t.y = o);
}
L.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
});
var lt = {
        addBox(s, t) {
            s.boxes || (s.boxes = []),
                (t.fullSize = t.fullSize || !1),
                (t.position = t.position || "top"),
                (t.weight = t.weight || 0),
                (t._layers =
                    t._layers ||
                    function () {
                        return [
                            {
                                z: 0,
                                draw(e) {
                                    t.draw(e);
                                },
                            },
                        ];
                    }),
                s.boxes.push(t);
        },
        removeBox(s, t) {
            let e = s.boxes ? s.boxes.indexOf(t) : -1;
            e !== -1 && s.boxes.splice(e, 1);
        },
        configure(s, t, e) {
            (t.fullSize = e.fullSize),
                (t.position = e.position),
                (t.weight = e.weight);
        },
        update(s, t, e, i) {
            if (!s) return;
            let n = at(s.options.layout.padding),
                r = Math.max(t - n.width, 0),
                o = Math.max(e - n.height, 0),
                a = Ru(s.boxes),
                l = a.vertical,
                c = a.horizontal;
            H(s.boxes, (g) => {
                typeof g.beforeLayout == "function" && g.beforeLayout();
            });
            let h =
                    l.reduce(
                        (g, p) =>
                            p.box.options && p.box.options.display === !1
                                ? g
                                : g + 1,
                        0,
                    ) || 1,
                u = Object.freeze({
                    outerWidth: t,
                    outerHeight: e,
                    padding: n,
                    availableWidth: r,
                    availableHeight: o,
                    vBoxMaxWidth: r / 2 / h,
                    hBoxMaxHeight: o / 2,
                }),
                d = Object.assign({}, n);
            sl(d, at(i));
            let f = Object.assign(
                    { maxPadding: d, w: r, h: o, x: n.left, y: n.top },
                    n,
                ),
                m = Pu(l.concat(c), u);
            Cs(a.fullSize, f, u, m),
                Cs(l, f, u, m),
                Cs(c, f, u, m) && Cs(l, f, u, m),
                Wu(f),
                ka(a.leftAndTop, f, u, m),
                (f.x += f.w),
                (f.y += f.h),
                ka(a.rightAndBottom, f, u, m),
                (s.chartArea = {
                    left: f.left,
                    top: f.top,
                    right: f.left + f.w,
                    bottom: f.top + f.h,
                    height: f.h,
                    width: f.w,
                }),
                H(a.chartArea, (g) => {
                    let p = g.box;
                    Object.assign(p, s.chartArea),
                        p.update(f.w, f.h, {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        });
                });
        },
    },
    Ui = class {
        acquireContext(t, e) {}
        releaseContext(t) {
            return !1;
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
            return 1;
        }
        getMaximumSize(t, e, i, n) {
            return (
                (e = Math.max(0, e || t.width)),
                (i = i || t.height),
                { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
            );
        }
        isAttached(t) {
            return !0;
        }
        updateConfig(t) {}
    },
    yr = class extends Ui {
        acquireContext(t) {
            return (t && t.getContext && t.getContext("2d")) || null;
        }
        updateConfig(t) {
            t.options.animation = !1;
        }
    },
    $i = "$chartjs",
    Vu = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout",
    },
    Ma = (s) => s === null || s === "";
function Hu(s, t) {
    let e = s.style,
        i = s.getAttribute("height"),
        n = s.getAttribute("width");
    if (
        ((s[$i] = {
            initial: {
                height: i,
                width: n,
                style: { display: e.display, height: e.height, width: e.width },
            },
        }),
        (e.display = e.display || "block"),
        (e.boxSizing = e.boxSizing || "border-box"),
        Ma(n))
    ) {
        let r = tr(s, "width");
        r !== void 0 && (s.width = r);
    }
    if (Ma(i))
        if (s.style.height === "") s.height = s.width / (t || 2);
        else {
            let r = tr(s, "height");
            r !== void 0 && (s.height = r);
        }
    return s;
}
var il = sa ? { passive: !0 } : !1;
function Bu(s, t, e) {
    s.addEventListener(t, e, il);
}
function $u(s, t, e) {
    s.canvas.removeEventListener(t, e, il);
}
function ju(s, t) {
    let e = Vu[s.type] || s.type,
        { x: i, y: n } = ie(s, t);
    return {
        type: e,
        chart: t,
        native: s,
        x: i !== void 0 ? i : null,
        y: n !== void 0 ? n : null,
    };
}
function Yi(s, t) {
    for (let e of s) if (e === t || e.contains(t)) return !0;
}
function Uu(s, t, e) {
    let i = s.canvas,
        n = new MutationObserver((r) => {
            let o = !1;
            for (let a of r)
                (o = o || Yi(a.addedNodes, i)),
                    (o = o && !Yi(a.removedNodes, i));
            o && e();
        });
    return n.observe(document, { childList: !0, subtree: !0 }), n;
}
function Yu(s, t, e) {
    let i = s.canvas,
        n = new MutationObserver((r) => {
            let o = !1;
            for (let a of r)
                (o = o || Yi(a.removedNodes, i)),
                    (o = o && !Yi(a.addedNodes, i));
            o && e();
        });
    return n.observe(document, { childList: !0, subtree: !0 }), n;
}
var Ls = new Map(),
    Ta = 0;
function nl() {
    let s = window.devicePixelRatio;
    s !== Ta &&
        ((Ta = s),
        Ls.forEach((t, e) => {
            e.currentDevicePixelRatio !== s && t();
        }));
}
function Zu(s, t) {
    Ls.size || window.addEventListener("resize", nl), Ls.set(s, t);
}
function qu(s) {
    Ls.delete(s), Ls.size || window.removeEventListener("resize", nl);
}
function Gu(s, t, e) {
    let i = s.canvas,
        n = i && Pi(i);
    if (!n) return;
    let r = Wn((a, l) => {
            let c = n.clientWidth;
            e(a, l), c < n.clientWidth && e();
        }, window),
        o = new ResizeObserver((a) => {
            let l = a[0],
                c = l.contentRect.width,
                h = l.contentRect.height;
            (c === 0 && h === 0) || r(c, h);
        });
    return o.observe(n), Zu(s, r), o;
}
function hr(s, t, e) {
    e && e.disconnect(), t === "resize" && qu(s);
}
function Xu(s, t, e) {
    let i = s.canvas,
        n = Wn(
            (r) => {
                s.ctx !== null && e(ju(r, s));
            },
            s,
            (r) => {
                let o = r[0];
                return [o, o.offsetX, o.offsetY];
            },
        );
    return Bu(i, t, n), n;
}
var br = class extends Ui {
    acquireContext(t, e) {
        let i = t && t.getContext && t.getContext("2d");
        return i && i.canvas === t ? (Hu(t, e), i) : null;
    }
    releaseContext(t) {
        let e = t.canvas;
        if (!e[$i]) return !1;
        let i = e[$i].initial;
        ["height", "width"].forEach((r) => {
            let o = i[r];
            N(o) ? e.removeAttribute(r) : e.setAttribute(r, o);
        });
        let n = i.style || {};
        return (
            Object.keys(n).forEach((r) => {
                e.style[r] = n[r];
            }),
            (e.width = e.width),
            delete e[$i],
            !0
        );
    }
    addEventListener(t, e, i) {
        this.removeEventListener(t, e);
        let n = t.$proxies || (t.$proxies = {}),
            o = { attach: Uu, detach: Yu, resize: Gu }[e] || Xu;
        n[e] = o(t, e, i);
    }
    removeEventListener(t, e) {
        let i = t.$proxies || (t.$proxies = {}),
            n = i[e];
        if (!n) return;
        (({ attach: hr, detach: hr, resize: hr })[e] || $u)(t, e, n),
            (i[e] = void 0);
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(t, e, i, n) {
        return ea(t, e, i, n);
    }
    isAttached(t) {
        let e = Pi(t);
        return !!(e && e.isConnected);
    }
};
function Ku(s) {
    return !Jn() ||
        (typeof OffscreenCanvas < "u" && s instanceof OffscreenCanvas)
        ? yr
        : br;
}
var xr = class {
    constructor() {
        this._init = [];
    }
    notify(t, e, i, n) {
        e === "beforeInit" &&
            ((this._init = this._createDescriptors(t, !0)),
            this._notify(this._init, t, "install"));
        let r = n ? this._descriptors(t).filter(n) : this._descriptors(t),
            o = this._notify(r, t, e, i);
        return (
            e === "afterDestroy" &&
                (this._notify(r, t, "stop"),
                this._notify(this._init, t, "uninstall")),
            o
        );
    }
    _notify(t, e, i, n) {
        n = n || {};
        for (let r of t) {
            let o = r.plugin,
                a = o[i],
                l = [e, n, r.options];
            if (j(a, l, o) === !1 && n.cancelable) return !1;
        }
        return !0;
    }
    invalidate() {
        N(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
        if (this._cache) return this._cache;
        let e = (this._cache = this._createDescriptors(t));
        return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
        let i = t && t.config,
            n = C(i.options && i.options.plugins, {}),
            r = Ju(i);
        return n === !1 && !e ? [] : td(t, r, n, e);
    }
    _notifyStateChanges(t) {
        let e = this._oldCache || [],
            i = this._cache,
            n = (r, o) =>
                r.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
        this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start");
    }
};
function Ju(s) {
    let t = {},
        e = [],
        i = Object.keys(Rt.plugins.items);
    for (let r = 0; r < i.length; r++) e.push(Rt.getPlugin(i[r]));
    let n = s.plugins || [];
    for (let r = 0; r < n.length; r++) {
        let o = n[r];
        e.indexOf(o) === -1 && (e.push(o), (t[o.id] = !0));
    }
    return { plugins: e, localIds: t };
}
function Qu(s, t) {
    return !t && s === !1 ? null : s === !0 ? {} : s;
}
function td(s, { plugins: t, localIds: e }, i, n) {
    let r = [],
        o = s.getContext();
    for (let a of t) {
        let l = a.id,
            c = Qu(i[l], n);
        c !== null &&
            r.push({
                plugin: a,
                options: ed(s.config, { plugin: a, local: e[l] }, c, o),
            });
    }
    return r;
}
function ed(s, { plugin: t, local: e }, i, n) {
    let r = s.pluginScopeKeys(t),
        o = s.getOptionScopes(i, r);
    return (
        e && t.defaults && o.push(t.defaults),
        s.createResolver(o, n, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
        })
    );
}
function _r(s, t) {
    let e = L.datasets[s] || {};
    return (
        ((t.datasets || {})[s] || {}).indexAxis ||
        t.indexAxis ||
        e.indexAxis ||
        "x"
    );
}
function sd(s, t) {
    let e = s;
    return (
        s === "_index_"
            ? (e = t)
            : s === "_value_" && (e = t === "x" ? "y" : "x"),
        e
    );
}
function id(s, t) {
    return s === t ? "_index_" : "_value_";
}
function nd(s) {
    if (s === "top" || s === "bottom") return "x";
    if (s === "left" || s === "right") return "y";
}
function wr(s, t) {
    return s === "x" || s === "y"
        ? s
        : t.axis || nd(t.position) || s.charAt(0).toLowerCase();
}
function rd(s, t) {
    let e = Qt[s.type] || { scales: {} },
        i = t.scales || {},
        n = _r(s.type, t),
        r = Object.create(null),
        o = Object.create(null);
    return (
        Object.keys(i).forEach((a) => {
            let l = i[a];
            if (!A(l))
                return console.error(
                    `Invalid scale configuration for scale: ${a}`,
                );
            if (l._proxy)
                return console.warn(
                    `Ignoring resolver passed as options for scale: ${a}`,
                );
            let c = wr(a, l),
                h = id(c, n),
                u = e.scales || {};
            (r[c] = r[c] || a),
                (o[a] = Pe(Object.create(null), [{ axis: c }, l, u[c], u[h]]));
        }),
        s.data.datasets.forEach((a) => {
            let l = a.type || s.type,
                c = a.indexAxis || _r(l, t),
                u = (Qt[l] || {}).scales || {};
            Object.keys(u).forEach((d) => {
                let f = sd(d, c),
                    m = a[f + "AxisID"] || r[f] || f;
                (o[m] = o[m] || Object.create(null)),
                    Pe(o[m], [{ axis: f }, i[m], u[d]]);
            });
        }),
        Object.keys(o).forEach((a) => {
            let l = o[a];
            Pe(l, [L.scales[l.type], L.scale]);
        }),
        o
    );
}
function rl(s) {
    let t = s.options || (s.options = {});
    (t.plugins = C(t.plugins, {})), (t.scales = rd(s, t));
}
function ol(s) {
    return (
        (s = s || {}),
        (s.datasets = s.datasets || []),
        (s.labels = s.labels || []),
        s
    );
}
function od(s) {
    return (s = s || {}), (s.data = ol(s.data)), rl(s), s;
}
var va = new Map(),
    al = new Set();
function zi(s, t) {
    let e = va.get(s);
    return e || ((e = t()), va.set(s, e), al.add(e)), e;
}
var Es = (s, t, e) => {
        let i = Bt(t, e);
        i !== void 0 && s.add(i);
    },
    Sr = class {
        constructor(t) {
            (this._config = od(t)),
                (this._scopeCache = new Map()),
                (this._resolverCache = new Map());
        }
        get platform() {
            return this._config.platform;
        }
        get type() {
            return this._config.type;
        }
        set type(t) {
            this._config.type = t;
        }
        get data() {
            return this._config.data;
        }
        set data(t) {
            this._config.data = ol(t);
        }
        get options() {
            return this._config.options;
        }
        set options(t) {
            this._config.options = t;
        }
        get plugins() {
            return this._config.plugins;
        }
        update() {
            let t = this._config;
            this.clearCache(), rl(t);
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
            return zi(t, () => [[`datasets.${t}`, ""]]);
        }
        datasetAnimationScopeKeys(t, e) {
            return zi(`${t}.transition.${e}`, () => [
                [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                [`datasets.${t}`, ""],
            ]);
        }
        datasetElementScopeKeys(t, e) {
            return zi(`${t}-${e}`, () => [
                [
                    `datasets.${t}.elements.${e}`,
                    `datasets.${t}`,
                    `elements.${e}`,
                    "",
                ],
            ]);
        }
        pluginScopeKeys(t) {
            let e = t.id,
                i = this.type;
            return zi(`${i}-plugin-${e}`, () => [
                [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
            ]);
        }
        _cachedScopes(t, e) {
            let i = this._scopeCache,
                n = i.get(t);
            return (!n || e) && ((n = new Map()), i.set(t, n)), n;
        }
        getOptionScopes(t, e, i) {
            let { options: n, type: r } = this,
                o = this._cachedScopes(t, i),
                a = o.get(e);
            if (a) return a;
            let l = new Set();
            e.forEach((h) => {
                t && (l.add(t), h.forEach((u) => Es(l, t, u))),
                    h.forEach((u) => Es(l, n, u)),
                    h.forEach((u) => Es(l, Qt[r] || {}, u)),
                    h.forEach((u) => Es(l, L, u)),
                    h.forEach((u) => Es(l, Ii, u));
            });
            let c = Array.from(l);
            return (
                c.length === 0 && c.push(Object.create(null)),
                al.has(e) && o.set(e, c),
                c
            );
        }
        chartOptionScopes() {
            let { options: t, type: e } = this;
            return [t, Qt[e] || {}, L.datasets[e] || {}, { type: e }, L, Ii];
        }
        resolveNamedOptions(t, e, i, n = [""]) {
            let r = { $shared: !0 },
                { resolver: o, subPrefixes: a } = Oa(this._resolverCache, t, n),
                l = o;
            if (ld(o, e)) {
                (r.$shared = !1), (i = Ht(i) ? i() : i);
                let c = this.createResolver(t, i, a);
                l = ge(o, i, c);
            }
            for (let c of e) r[c] = l[c];
            return r;
        }
        createResolver(t, e, i = [""], n) {
            let { resolver: r } = Oa(this._resolverCache, t, i);
            return A(e) ? ge(r, e, void 0, n) : r;
        }
    };
function Oa(s, t, e) {
    let i = s.get(t);
    i || ((i = new Map()), s.set(t, i));
    let n = e.join(),
        r = i.get(n);
    return (
        r ||
            ((r = {
                resolver: Li(t, e),
                subPrefixes: e.filter(
                    (a) => !a.toLowerCase().includes("hover"),
                ),
            }),
            i.set(n, r)),
        r
    );
}
var ad = (s) =>
    A(s) && Object.getOwnPropertyNames(s).reduce((t, e) => t || Ht(s[e]), !1);
function ld(s, t) {
    let { isScriptable: e, isIndexable: i } = qn(s);
    for (let n of t) {
        let r = e(n),
            o = i(n),
            a = (o || r) && s[n];
        if ((r && (Ht(a) || ad(a))) || (o && $(a))) return !0;
    }
    return !1;
}
var cd = "3.9.1",
    hd = ["top", "bottom", "left", "right", "chartArea"];
function Da(s, t) {
    return s === "top" || s === "bottom" || (hd.indexOf(s) === -1 && t === "x");
}
function Ea(s, t) {
    return function (e, i) {
        return e[s] === i[s] ? e[t] - i[t] : e[s] - i[s];
    };
}
function Ca(s) {
    let t = s.chart,
        e = t.options.animation;
    t.notifyPlugins("afterRender"), j(e && e.onComplete, [s], t);
}
function ud(s) {
    let t = s.chart,
        e = t.options.animation;
    j(e && e.onProgress, [s], t);
}
function ll(s) {
    return (
        Jn() && typeof s == "string"
            ? (s = document.getElementById(s))
            : s && s.length && (s = s[0]),
        s && s.canvas && (s = s.canvas),
        s
    );
}
var Zi = {},
    cl = (s) => {
        let t = ll(s);
        return Object.values(Zi)
            .filter((e) => e.canvas === t)
            .pop();
    };
function dd(s, t, e) {
    let i = Object.keys(s);
    for (let n of i) {
        let r = +n;
        if (r >= t) {
            let o = s[n];
            delete s[n], (e > 0 || r > t) && (s[r + e] = o);
        }
    }
}
function fd(s, t, e, i) {
    return !e || s.type === "mouseout" ? null : i ? t : s;
}
var xe = class {
        constructor(t, e) {
            let i = (this.config = new Sr(e)),
                n = ll(t),
                r = cl(n);
            if (r)
                throw new Error(
                    "Canvas is already in use. Chart with ID '" +
                        r.id +
                        "' must be destroyed before the canvas with ID '" +
                        r.canvas.id +
                        "' can be reused.",
                );
            let o = i.createResolver(i.chartOptionScopes(), this.getContext());
            (this.platform = new (i.platform || Ku(n))()),
                this.platform.updateConfig(i);
            let a = this.platform.acquireContext(n, o.aspectRatio),
                l = a && a.canvas,
                c = l && l.height,
                h = l && l.width;
            if (
                ((this.id = Do()),
                (this.ctx = a),
                (this.canvas = l),
                (this.width = h),
                (this.height = c),
                (this._options = o),
                (this._aspectRatio = this.aspectRatio),
                (this._layers = []),
                (this._metasets = []),
                (this._stacks = void 0),
                (this.boxes = []),
                (this.currentDevicePixelRatio = void 0),
                (this.chartArea = void 0),
                (this._active = []),
                (this._lastEvent = void 0),
                (this._listeners = {}),
                (this._responsiveListeners = void 0),
                (this._sortedMetasets = []),
                (this.scales = {}),
                (this._plugins = new xr()),
                (this.$proxies = {}),
                (this._hiddenIndices = {}),
                (this.attached = !1),
                (this._animationsDisabled = void 0),
                (this.$context = void 0),
                (this._doResize = zo(
                    (u) => this.update(u),
                    o.resizeDelay || 0,
                )),
                (this._dataChanges = []),
                (Zi[this.id] = this),
                !a || !l)
            ) {
                console.error(
                    "Failed to create chart: can't acquire context from the given item",
                );
                return;
            }
            jt.listen(this, "complete", Ca),
                jt.listen(this, "progress", ud),
                this._initialize(),
                this.attached && this.update();
        }
        get aspectRatio() {
            let {
                options: { aspectRatio: t, maintainAspectRatio: e },
                width: i,
                height: n,
                _aspectRatio: r,
            } = this;
            return N(t) ? (e && r ? r : n ? i / n : null) : t;
        }
        get data() {
            return this.config.data;
        }
        set data(t) {
            this.config.data = t;
        }
        get options() {
            return this._options;
        }
        set options(t) {
            this.config.options = t;
        }
        _initialize() {
            return (
                this.notifyPlugins("beforeInit"),
                this.options.responsive
                    ? this.resize()
                    : Qn(this, this.options.devicePixelRatio),
                this.bindEvents(),
                this.notifyPlugins("afterInit"),
                this
            );
        }
        clear() {
            return Un(this.canvas, this.ctx), this;
        }
        stop() {
            return jt.stop(this), this;
        }
        resize(t, e) {
            jt.running(this)
                ? (this._resizeBeforeDraw = { width: t, height: e })
                : this._resize(t, e);
        }
        _resize(t, e) {
            let i = this.options,
                n = this.canvas,
                r = i.maintainAspectRatio && this.aspectRatio,
                o = this.platform.getMaximumSize(n, t, e, r),
                a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                l = this.width ? "resize" : "attach";
            (this.width = o.width),
                (this.height = o.height),
                (this._aspectRatio = this.aspectRatio),
                Qn(this, a, !0) &&
                    (this.notifyPlugins("resize", { size: o }),
                    j(i.onResize, [this, o], this),
                    this.attached && this._doResize(l) && this.render());
        }
        ensureScalesHaveIDs() {
            let e = this.options.scales || {};
            H(e, (i, n) => {
                i.id = n;
            });
        }
        buildOrUpdateScales() {
            let t = this.options,
                e = t.scales,
                i = this.scales,
                n = Object.keys(i).reduce((o, a) => ((o[a] = !1), o), {}),
                r = [];
            e &&
                (r = r.concat(
                    Object.keys(e).map((o) => {
                        let a = e[o],
                            l = wr(o, a),
                            c = l === "r",
                            h = l === "x";
                        return {
                            options: a,
                            dposition: c ? "chartArea" : h ? "bottom" : "left",
                            dtype: c
                                ? "radialLinear"
                                : h
                                  ? "category"
                                  : "linear",
                        };
                    }),
                )),
                H(r, (o) => {
                    let a = o.options,
                        l = a.id,
                        c = wr(l, a),
                        h = C(a.type, o.dtype);
                    (a.position === void 0 ||
                        Da(a.position, c) !== Da(o.dposition)) &&
                        (a.position = o.dposition),
                        (n[l] = !0);
                    let u = null;
                    if (l in i && i[l].type === h) u = i[l];
                    else {
                        let d = Rt.getScale(h);
                        (u = new d({
                            id: l,
                            type: h,
                            ctx: this.ctx,
                            chart: this,
                        })),
                            (i[u.id] = u);
                    }
                    u.init(a, t);
                }),
                H(n, (o, a) => {
                    o || delete i[a];
                }),
                H(i, (o) => {
                    lt.configure(this, o, o.options), lt.addBox(this, o);
                });
        }
        _updateMetasets() {
            let t = this._metasets,
                e = this.data.datasets.length,
                i = t.length;
            if ((t.sort((n, r) => n.index - r.index), i > e)) {
                for (let n = e; n < i; ++n) this._destroyDatasetMeta(n);
                t.splice(e, i - e);
            }
            this._sortedMetasets = t.slice(0).sort(Ea("order", "index"));
        }
        _removeUnreferencedMetasets() {
            let {
                _metasets: t,
                data: { datasets: e },
            } = this;
            t.length > e.length && delete this._stacks,
                t.forEach((i, n) => {
                    e.filter((r) => r === i._dataset).length === 0 &&
                        this._destroyDatasetMeta(n);
                });
        }
        buildOrUpdateControllers() {
            let t = [],
                e = this.data.datasets,
                i,
                n;
            for (
                this._removeUnreferencedMetasets(), i = 0, n = e.length;
                i < n;
                i++
            ) {
                let r = e[i],
                    o = this.getDatasetMeta(i),
                    a = r.type || this.config.type;
                if (
                    (o.type &&
                        o.type !== a &&
                        (this._destroyDatasetMeta(i),
                        (o = this.getDatasetMeta(i))),
                    (o.type = a),
                    (o.indexAxis = r.indexAxis || _r(a, this.options)),
                    (o.order = r.order || 0),
                    (o.index = i),
                    (o.label = "" + r.label),
                    (o.visible = this.isDatasetVisible(i)),
                    o.controller)
                )
                    o.controller.updateIndex(i), o.controller.linkScales();
                else {
                    let l = Rt.getController(a),
                        { datasetElementType: c, dataElementType: h } =
                            L.datasets[a];
                    Object.assign(l.prototype, {
                        dataElementType: Rt.getElement(h),
                        datasetElementType: c && Rt.getElement(c),
                    }),
                        (o.controller = new l(this, i)),
                        t.push(o.controller);
                }
            }
            return this._updateMetasets(), t;
        }
        _resetElements() {
            H(
                this.data.datasets,
                (t, e) => {
                    this.getDatasetMeta(e).controller.reset();
                },
                this,
            );
        }
        reset() {
            this._resetElements(), this.notifyPlugins("reset");
        }
        update(t) {
            let e = this.config;
            e.update();
            let i = (this._options = e.createResolver(
                    e.chartOptionScopes(),
                    this.getContext(),
                )),
                n = (this._animationsDisabled = !i.animation);
            if (
                (this._updateScales(),
                this._checkEventBindings(),
                this._updateHiddenIndices(),
                this._plugins.invalidate(),
                this.notifyPlugins("beforeUpdate", {
                    mode: t,
                    cancelable: !0,
                }) === !1)
            )
                return;
            let r = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let o = 0;
            for (let c = 0, h = this.data.datasets.length; c < h; c++) {
                let { controller: u } = this.getDatasetMeta(c),
                    d = !n && r.indexOf(u) === -1;
                u.buildOrUpdateElements(d),
                    (o = Math.max(+u.getMaxOverflow(), o));
            }
            (o = this._minPadding = i.layout.autoPadding ? o : 0),
                this._updateLayout(o),
                n ||
                    H(r, (c) => {
                        c.reset();
                    }),
                this._updateDatasets(t),
                this.notifyPlugins("afterUpdate", { mode: t }),
                this._layers.sort(Ea("z", "_idx"));
            let { _active: a, _lastEvent: l } = this;
            l
                ? this._eventHandler(l, !0)
                : a.length && this._updateHoverStyles(a, a, !0),
                this.render();
        }
        _updateScales() {
            H(this.scales, (t) => {
                lt.removeBox(this, t);
            }),
                this.ensureScalesHaveIDs(),
                this.buildOrUpdateScales();
        }
        _checkEventBindings() {
            let t = this.options,
                e = new Set(Object.keys(this._listeners)),
                i = new Set(t.events);
            (!Cn(e, i) || !!this._responsiveListeners !== t.responsive) &&
                (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
            let { _hiddenIndices: t } = this,
                e = this._getUniformDataChanges() || [];
            for (let { method: i, start: n, count: r } of e) {
                let o = i === "_removeElements" ? -r : r;
                dd(t, n, o);
            }
        }
        _getUniformDataChanges() {
            let t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            let e = this.data.datasets.length,
                i = (r) =>
                    new Set(
                        t
                            .filter((o) => o[0] === r)
                            .map((o, a) => a + "," + o.splice(1).join(",")),
                    ),
                n = i(0);
            for (let r = 1; r < e; r++) if (!Cn(n, i(r))) return;
            return Array.from(n)
                .map((r) => r.split(","))
                .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
        }
        _updateLayout(t) {
            if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1)
                return;
            lt.update(this, this.width, this.height, t);
            let e = this.chartArea,
                i = e.width <= 0 || e.height <= 0;
            (this._layers = []),
                H(
                    this.boxes,
                    (n) => {
                        (i && n.position === "chartArea") ||
                            (n.configure && n.configure(),
                            this._layers.push(...n._layers()));
                    },
                    this,
                ),
                this._layers.forEach((n, r) => {
                    n._idx = r;
                }),
                this.notifyPlugins("afterLayout");
        }
        _updateDatasets(t) {
            if (
                this.notifyPlugins("beforeDatasetsUpdate", {
                    mode: t,
                    cancelable: !0,
                }) !== !1
            ) {
                for (let e = 0, i = this.data.datasets.length; e < i; ++e)
                    this.getDatasetMeta(e).controller.configure();
                for (let e = 0, i = this.data.datasets.length; e < i; ++e)
                    this._updateDataset(e, Ht(t) ? t({ datasetIndex: e }) : t);
                this.notifyPlugins("afterDatasetsUpdate", { mode: t });
            }
        }
        _updateDataset(t, e) {
            let i = this.getDatasetMeta(t),
                n = { meta: i, index: t, mode: e, cancelable: !0 };
            this.notifyPlugins("beforeDatasetUpdate", n) !== !1 &&
                (i.controller._update(e),
                (n.cancelable = !1),
                this.notifyPlugins("afterDatasetUpdate", n));
        }
        render() {
            this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
                (jt.has(this)
                    ? this.attached && !jt.running(this) && jt.start(this)
                    : (this.draw(), Ca({ chart: this })));
        }
        draw() {
            let t;
            if (this._resizeBeforeDraw) {
                let { width: i, height: n } = this._resizeBeforeDraw;
                this._resize(i, n), (this._resizeBeforeDraw = null);
            }
            if (
                (this.clear(),
                this.width <= 0 ||
                    this.height <= 0 ||
                    this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
            )
                return;
            let e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t)
                e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t)
                e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(t) {
            let e = this._sortedMetasets,
                i = [],
                n,
                r;
            for (n = 0, r = e.length; n < r; ++n) {
                let o = e[n];
                (!t || o.visible) && i.push(o);
            }
            return i;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            if (
                this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) ===
                !1
            )
                return;
            let t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(t) {
            let e = this.ctx,
                i = t._clip,
                n = !i.disabled,
                r = this.chartArea,
                o = { meta: t, index: t.index, cancelable: !0 };
            this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
                (n &&
                    ks(e, {
                        left: i.left === !1 ? 0 : r.left - i.left,
                        right: i.right === !1 ? this.width : r.right + i.right,
                        top: i.top === !1 ? 0 : r.top - i.top,
                        bottom:
                            i.bottom === !1 ? this.height : r.bottom + i.bottom,
                    }),
                t.controller.draw(),
                n && Ms(e),
                (o.cancelable = !1),
                this.notifyPlugins("afterDatasetDraw", o));
        }
        isPointInArea(t) {
            return Ae(t, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(t, e, i, n) {
            let r = Fu.modes[e];
            return typeof r == "function" ? r(this, t, i, n) : [];
        }
        getDatasetMeta(t) {
            let e = this.data.datasets[t],
                i = this._metasets,
                n = i.filter((r) => r && r._dataset === e).pop();
            return (
                n ||
                    ((n = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: (e && e.order) || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1,
                    }),
                    i.push(n)),
                n
            );
        }
        getContext() {
            return (
                this.$context ||
                (this.$context = $t(null, { chart: this, type: "chart" }))
            );
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
            let e = this.data.datasets[t];
            if (!e) return !1;
            let i = this.getDatasetMeta(t);
            return typeof i.hidden == "boolean" ? !i.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
            let i = this.getDatasetMeta(t);
            i.hidden = !e;
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, i) {
            let n = i ? "show" : "hide",
                r = this.getDatasetMeta(t),
                o = r.controller._resolveAnimations(void 0, n);
            ft(e)
                ? ((r.data[e].hidden = !i), this.update())
                : (this.setDatasetVisibility(t, i),
                  o.update(r, { visible: i }),
                  this.update((a) => (a.datasetIndex === t ? n : void 0)));
        }
        hide(t, e) {
            this._updateVisibility(t, e, !1);
        }
        show(t, e) {
            this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
            let e = this._metasets[t];
            e && e.controller && e.controller._destroy(),
                delete this._metasets[t];
        }
        _stop() {
            let t, e;
            for (
                this.stop(),
                    jt.remove(this),
                    t = 0,
                    e = this.data.datasets.length;
                t < e;
                ++t
            )
                this._destroyDatasetMeta(t);
        }
        destroy() {
            this.notifyPlugins("beforeDestroy");
            let { canvas: t, ctx: e } = this;
            this._stop(),
                this.config.clearCache(),
                t &&
                    (this.unbindEvents(),
                    Un(t, e),
                    this.platform.releaseContext(e),
                    (this.canvas = null),
                    (this.ctx = null)),
                this.notifyPlugins("destroy"),
                delete Zi[this.id],
                this.notifyPlugins("afterDestroy");
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t);
        }
        bindEvents() {
            this.bindUserEvents(),
                this.options.responsive
                    ? this.bindResponsiveEvents()
                    : (this.attached = !0);
        }
        bindUserEvents() {
            let t = this._listeners,
                e = this.platform,
                i = (r, o) => {
                    e.addEventListener(this, r, o), (t[r] = o);
                },
                n = (r, o, a) => {
                    (r.offsetX = o), (r.offsetY = a), this._eventHandler(r);
                };
            H(this.options.events, (r) => i(r, n));
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            let t = this._responsiveListeners,
                e = this.platform,
                i = (l, c) => {
                    e.addEventListener(this, l, c), (t[l] = c);
                },
                n = (l, c) => {
                    t[l] && (e.removeEventListener(this, l, c), delete t[l]);
                },
                r = (l, c) => {
                    this.canvas && this.resize(l, c);
                },
                o,
                a = () => {
                    n("attach", a),
                        (this.attached = !0),
                        this.resize(),
                        i("resize", r),
                        i("detach", o);
                };
            (o = () => {
                (this.attached = !1),
                    n("resize", r),
                    this._stop(),
                    this._resize(0, 0),
                    i("attach", a);
            }),
                e.isAttached(this.canvas) ? a() : o();
        }
        unbindEvents() {
            H(this._listeners, (t, e) => {
                this.platform.removeEventListener(this, e, t);
            }),
                (this._listeners = {}),
                H(this._responsiveListeners, (t, e) => {
                    this.platform.removeEventListener(this, e, t);
                }),
                (this._responsiveListeners = void 0);
        }
        updateHoverStyle(t, e, i) {
            let n = i ? "set" : "remove",
                r,
                o,
                a,
                l;
            for (
                e === "dataset" &&
                    ((r = this.getDatasetMeta(t[0].datasetIndex)),
                    r.controller["_" + n + "DatasetHoverStyle"]()),
                    a = 0,
                    l = t.length;
                a < l;
                ++a
            ) {
                o = t[a];
                let c = o && this.getDatasetMeta(o.datasetIndex).controller;
                c && c[n + "HoverStyle"](o.element, o.datasetIndex, o.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(t) {
            let e = this._active || [],
                i = t.map(({ datasetIndex: r, index: o }) => {
                    let a = this.getDatasetMeta(r);
                    if (!a) throw new Error("No dataset found at index " + r);
                    return { datasetIndex: r, element: a.data[o], index: o };
                });
            !ws(i, e) &&
                ((this._active = i),
                (this._lastEvent = null),
                this._updateHoverStyles(i, e));
        }
        notifyPlugins(t, e, i) {
            return this._plugins.notify(this, t, e, i);
        }
        _updateHoverStyles(t, e, i) {
            let n = this.options.hover,
                r = (l, c) =>
                    l.filter(
                        (h) =>
                            !c.some(
                                (u) =>
                                    h.datasetIndex === u.datasetIndex &&
                                    h.index === u.index,
                            ),
                    ),
                o = r(e, t),
                a = i ? t : r(t, e);
            o.length && this.updateHoverStyle(o, n.mode, !1),
                a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
        }
        _eventHandler(t, e) {
            let i = {
                    event: t,
                    replay: e,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(t),
                },
                n = (o) =>
                    (o.options.events || this.options.events).includes(
                        t.native.type,
                    );
            if (this.notifyPlugins("beforeEvent", i, n) === !1) return;
            let r = this._handleEvent(t, e, i.inChartArea);
            return (
                (i.cancelable = !1),
                this.notifyPlugins("afterEvent", i, n),
                (r || i.changed) && this.render(),
                this
            );
        }
        _handleEvent(t, e, i) {
            let { _active: n = [], options: r } = this,
                o = e,
                a = this._getActiveElements(t, n, i, o),
                l = Io(t),
                c = fd(t, this._lastEvent, i, l);
            i &&
                ((this._lastEvent = null),
                j(r.onHover, [t, a, this], this),
                l && j(r.onClick, [t, a, this], this));
            let h = !ws(a, n);
            return (
                (h || e) &&
                    ((this._active = a), this._updateHoverStyles(a, n, e)),
                (this._lastEvent = c),
                h
            );
        }
        _getActiveElements(t, e, i, n) {
            if (t.type === "mouseout") return [];
            if (!i) return e;
            let r = this.options.hover;
            return this.getElementsAtEventForMode(t, r.mode, r, n);
        }
    },
    Ia = () => H(xe.instances, (s) => s._plugins.invalidate()),
    ne = !0;
Object.defineProperties(xe, {
    defaults: { enumerable: ne, value: L },
    instances: { enumerable: ne, value: Zi },
    overrides: { enumerable: ne, value: Qt },
    registry: { enumerable: ne, value: Rt },
    version: { enumerable: ne, value: cd },
    getChart: { enumerable: ne, value: cl },
    register: {
        enumerable: ne,
        value: (...s) => {
            Rt.add(...s), Ia();
        },
    },
    unregister: {
        enumerable: ne,
        value: (...s) => {
            Rt.remove(...s), Ia();
        },
    },
});
function hl(s, t, e) {
    let {
            startAngle: i,
            pixelMargin: n,
            x: r,
            y: o,
            outerRadius: a,
            innerRadius: l,
        } = t,
        c = n / a;
    s.beginPath(),
        s.arc(r, o, a, i - c, e + c),
        l > n
            ? ((c = n / l), s.arc(r, o, l, e + c, i - c, !0))
            : s.arc(r, o, n, e + Z, i - Z),
        s.closePath(),
        s.clip();
}
function md(s) {
    return Ai(s, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function gd(s, t, e, i) {
    let n = md(s.options.borderRadius),
        r = (e - t) / 2,
        o = Math.min(r, (i * t) / 2),
        a = (l) => {
            let c = ((e - Math.min(r, l)) * i) / 2;
            return it(l, 0, Math.min(r, c));
        };
    return {
        outerStart: a(n.outerStart),
        outerEnd: a(n.outerEnd),
        innerStart: it(n.innerStart, 0, o),
        innerEnd: it(n.innerEnd, 0, o),
    };
}
function He(s, t, e, i) {
    return { x: e + s * Math.cos(t), y: i + s * Math.sin(t) };
}
function kr(s, t, e, i, n, r) {
    let { x: o, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t,
        u = Math.max(t.outerRadius + i + e - c, 0),
        d = h > 0 ? h + i + e + c : 0,
        f = 0,
        m = n - l;
    if (i) {
        let E = h > 0 ? h - i : 0,
            et = u > 0 ? u - i : 0,
            Q = (E + et) / 2,
            fe = Q !== 0 ? (m * Q) / (Q + i) : m;
        f = (m - fe) / 2;
    }
    let g = Math.max(0.001, m * u - e / Y) / u,
        p = (m - g) / 2,
        y = l + p + f,
        b = n - p - f,
        {
            outerStart: _,
            outerEnd: w,
            innerStart: x,
            innerEnd: S,
        } = gd(t, d, u, b - y),
        k = u - _,
        O = u - w,
        v = y + _ / k,
        F = b - w / O,
        W = d + x,
        R = d + S,
        tt = y + x / W,
        ct = b - S / R;
    if ((s.beginPath(), r)) {
        if ((s.arc(o, a, u, v, F), w > 0)) {
            let Q = He(O, F, o, a);
            s.arc(Q.x, Q.y, w, F, b + Z);
        }
        let E = He(R, b, o, a);
        if ((s.lineTo(E.x, E.y), S > 0)) {
            let Q = He(R, ct, o, a);
            s.arc(Q.x, Q.y, S, b + Z, ct + Math.PI);
        }
        if ((s.arc(o, a, d, b - S / d, y + x / d, !0), x > 0)) {
            let Q = He(W, tt, o, a);
            s.arc(Q.x, Q.y, x, tt + Math.PI, y - Z);
        }
        let et = He(k, y, o, a);
        if ((s.lineTo(et.x, et.y), _ > 0)) {
            let Q = He(k, v, o, a);
            s.arc(Q.x, Q.y, _, y - Z, v);
        }
    } else {
        s.moveTo(o, a);
        let E = Math.cos(v) * u + o,
            et = Math.sin(v) * u + a;
        s.lineTo(E, et);
        let Q = Math.cos(F) * u + o,
            fe = Math.sin(F) * u + a;
        s.lineTo(Q, fe);
    }
    s.closePath();
}
function pd(s, t, e, i, n) {
    let { fullCircles: r, startAngle: o, circumference: a } = t,
        l = t.endAngle;
    if (r) {
        kr(s, t, e, i, o + B, n);
        for (let c = 0; c < r; ++c) s.fill();
        isNaN(a) || ((l = o + (a % B)), a % B === 0 && (l += B));
    }
    return kr(s, t, e, i, l, n), s.fill(), l;
}
function yd(s, t, e) {
    let { x: i, y: n, startAngle: r, pixelMargin: o, fullCircles: a } = t,
        l = Math.max(t.outerRadius - o, 0),
        c = t.innerRadius + o,
        h;
    for (
        e && hl(s, t, r + B),
            s.beginPath(),
            s.arc(i, n, c, r + B, r, !0),
            h = 0;
        h < a;
        ++h
    )
        s.stroke();
    for (s.beginPath(), s.arc(i, n, l, r, r + B), h = 0; h < a; ++h) s.stroke();
}
function bd(s, t, e, i, n, r) {
    let { options: o } = t,
        { borderWidth: a, borderJoinStyle: l } = o,
        c = o.borderAlign === "inner";
    a &&
        (c
            ? ((s.lineWidth = a * 2), (s.lineJoin = l || "round"))
            : ((s.lineWidth = a), (s.lineJoin = l || "bevel")),
        t.fullCircles && yd(s, t, c),
        c && hl(s, t, n),
        kr(s, t, e, i, n, r),
        s.stroke());
}
var Ge = class extends yt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
    }
    inRange(t, e, i) {
        let n = this.getProps(["x", "y"], i),
            { angle: r, distance: o } = Ln(n, { x: t, y: e }),
            {
                startAngle: a,
                endAngle: l,
                innerRadius: c,
                outerRadius: h,
                circumference: u,
            } = this.getProps(
                [
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "circumference",
                ],
                i,
            ),
            d = this.options.spacing / 2,
            m = C(u, l - a) >= B || Ne(r, a, l),
            g = Lt(o, c + d, h + d);
        return m && g;
    }
    getCenterPoint(t) {
        let {
                x: e,
                y: i,
                startAngle: n,
                endAngle: r,
                innerRadius: o,
                outerRadius: a,
            } = this.getProps(
                [
                    "x",
                    "y",
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "circumference",
                ],
                t,
            ),
            { offset: l, spacing: c } = this.options,
            h = (n + r) / 2,
            u = (o + a + c + l) / 2;
        return { x: e + Math.cos(h) * u, y: i + Math.sin(h) * u };
    }
    tooltipPosition(t) {
        return this.getCenterPoint(t);
    }
    draw(t) {
        let { options: e, circumference: i } = this,
            n = (e.offset || 0) / 2,
            r = (e.spacing || 0) / 2,
            o = e.circular;
        if (
            ((this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0),
            (this.fullCircles = i > B ? Math.floor(i / B) : 0),
            i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
        )
            return;
        t.save();
        let a = 0;
        if (n) {
            a = n / 2;
            let c = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(c) * a, Math.sin(c) * a),
                this.circumference >= Y && (a = n);
        }
        (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
        let l = pd(t, this, a, r, o);
        bd(t, this, a, r, l, o), t.restore();
    }
};
Ge.id = "arc";
Ge.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
};
Ge.defaultRoutes = { backgroundColor: "backgroundColor" };
function ul(s, t, e = t) {
    (s.lineCap = C(e.borderCapStyle, t.borderCapStyle)),
        s.setLineDash(C(e.borderDash, t.borderDash)),
        (s.lineDashOffset = C(e.borderDashOffset, t.borderDashOffset)),
        (s.lineJoin = C(e.borderJoinStyle, t.borderJoinStyle)),
        (s.lineWidth = C(e.borderWidth, t.borderWidth)),
        (s.strokeStyle = C(e.borderColor, t.borderColor));
}
function xd(s, t, e) {
    s.lineTo(e.x, e.y);
}
function _d(s) {
    return s.stepped
        ? Zo
        : s.tension || s.cubicInterpolationMode === "monotone"
          ? qo
          : xd;
}
function dl(s, t, e = {}) {
    let i = s.length,
        { start: n = 0, end: r = i - 1 } = e,
        { start: o, end: a } = t,
        l = Math.max(n, o),
        c = Math.min(r, a),
        h = (n < o && r < o) || (n > a && r > a);
    return {
        count: i,
        start: l,
        loop: t.loop,
        ilen: c < l && !h ? i + c - l : c - l,
    };
}
function wd(s, t, e, i) {
    let { points: n, options: r } = t,
        { count: o, start: a, loop: l, ilen: c } = dl(n, e, i),
        h = _d(r),
        { move: u = !0, reverse: d } = i || {},
        f,
        m,
        g;
    for (f = 0; f <= c; ++f)
        (m = n[(a + (d ? c - f : f)) % o]),
            !m.skip &&
                (u ? (s.moveTo(m.x, m.y), (u = !1)) : h(s, g, m, d, r.stepped),
                (g = m));
    return l && ((m = n[(a + (d ? c : 0)) % o]), h(s, g, m, d, r.stepped)), !!l;
}
function Sd(s, t, e, i) {
    let n = t.points,
        { count: r, start: o, ilen: a } = dl(n, e, i),
        { move: l = !0, reverse: c } = i || {},
        h = 0,
        u = 0,
        d,
        f,
        m,
        g,
        p,
        y,
        b = (w) => (o + (c ? a - w : w)) % r,
        _ = () => {
            g !== p && (s.lineTo(h, p), s.lineTo(h, g), s.lineTo(h, y));
        };
    for (l && ((f = n[b(0)]), s.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
        if (((f = n[b(d)]), f.skip)) continue;
        let w = f.x,
            x = f.y,
            S = w | 0;
        S === m
            ? (x < g ? (g = x) : x > p && (p = x), (h = (u * h + w) / ++u))
            : (_(), s.lineTo(w, x), (m = S), (u = 0), (g = p = x)),
            (y = x);
    }
    _();
}
function Mr(s) {
    let t = s.options,
        e = t.borderDash && t.borderDash.length;
    return !s._decimated &&
        !s._loop &&
        !t.tension &&
        t.cubicInterpolationMode !== "monotone" &&
        !t.stepped &&
        !e
        ? Sd
        : wd;
}
function kd(s) {
    return s.stepped
        ? ia
        : s.tension || s.cubicInterpolationMode === "monotone"
          ? na
          : Xt;
}
function Md(s, t, e, i) {
    let n = t._path;
    n || ((n = t._path = new Path2D()), t.path(n, e, i) && n.closePath()),
        ul(s, t.options),
        s.stroke(n);
}
function Td(s, t, e, i) {
    let { segments: n, options: r } = t,
        o = Mr(t);
    for (let a of n)
        ul(s, r, a.style),
            s.beginPath(),
            o(s, t, a, { start: e, end: e + i - 1 }) && s.closePath(),
            s.stroke();
}
var vd = typeof Path2D == "function";
function Od(s, t, e, i) {
    vd && !t.options.segment ? Md(s, t, e, i) : Td(s, t, e, i);
}
var Nt = class extends yt {
    constructor(t) {
        super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
        let i = this.options;
        if (
            (i.tension || i.cubicInterpolationMode === "monotone") &&
            !i.stepped &&
            !this._pointsUpdated
        ) {
            let n = i.spanGaps ? this._loop : this._fullLoop;
            ta(this._points, i, t, n, e), (this._pointsUpdated = !0);
        }
    }
    set points(t) {
        (this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1);
    }
    get points() {
        return this._points;
    }
    get segments() {
        return (
            this._segments || (this._segments = oa(this, this.options.segment))
        );
    }
    first() {
        let t = this.segments,
            e = this.points;
        return t.length && e[t[0].start];
    }
    last() {
        let t = this.segments,
            e = this.points,
            i = t.length;
        return i && e[t[i - 1].end];
    }
    interpolate(t, e) {
        let i = this.options,
            n = t[e],
            r = this.points,
            o = nr(this, { property: e, start: n, end: n });
        if (!o.length) return;
        let a = [],
            l = kd(i),
            c,
            h;
        for (c = 0, h = o.length; c < h; ++c) {
            let { start: u, end: d } = o[c],
                f = r[u],
                m = r[d];
            if (f === m) {
                a.push(f);
                continue;
            }
            let g = Math.abs((n - f[e]) / (m[e] - f[e])),
                p = l(f, m, g, i.stepped);
            (p[e] = t[e]), a.push(p);
        }
        return a.length === 1 ? a[0] : a;
    }
    pathSegment(t, e, i) {
        return Mr(this)(t, this, e, i);
    }
    path(t, e, i) {
        let n = this.segments,
            r = Mr(this),
            o = this._loop;
        (e = e || 0), (i = i || this.points.length - e);
        for (let a of n) o &= r(t, this, a, { start: e, end: e + i - 1 });
        return !!o;
    }
    draw(t, e, i, n) {
        let r = this.options || {};
        (this.points || []).length &&
            r.borderWidth &&
            (t.save(), Od(t, this, i, n), t.restore()),
            this.animated &&
                ((this._pointsUpdated = !1), (this._path = void 0));
    }
};
Nt.id = "line";
Nt.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
};
Nt.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
};
Nt.descriptors = {
    _scriptable: !0,
    _indexable: (s) => s !== "borderDash" && s !== "fill",
};
function Fa(s, t, e, i) {
    let n = s.options,
        { [e]: r } = s.getProps([e], i);
    return Math.abs(t - r) < n.radius + n.hitRadius;
}
var Xe = class extends yt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
    }
    inRange(t, e, i) {
        let n = this.options,
            { x: r, y: o } = this.getProps(["x", "y"], i);
        return (
            Math.pow(t - r, 2) + Math.pow(e - o, 2) <
            Math.pow(n.hitRadius + n.radius, 2)
        );
    }
    inXRange(t, e) {
        return Fa(this, t, "x", e);
    }
    inYRange(t, e) {
        return Fa(this, t, "y", e);
    }
    getCenterPoint(t) {
        let { x: e, y: i } = this.getProps(["x", "y"], t);
        return { x: e, y: i };
    }
    size(t) {
        t = t || this.options || {};
        let e = t.radius || 0;
        e = Math.max(e, (e && t.hoverRadius) || 0);
        let i = (e && t.borderWidth) || 0;
        return (e + i) * 2;
    }
    draw(t, e) {
        let i = this.options;
        this.skip ||
            i.radius < 0.1 ||
            !Ae(this, e, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            Fi(t, i, this.x, this.y));
    }
    getRange() {
        let t = this.options || {};
        return t.radius + t.hitRadius;
    }
};
Xe.id = "point";
Xe.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
};
Xe.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
};
function fl(s, t) {
    let {
            x: e,
            y: i,
            base: n,
            width: r,
            height: o,
        } = s.getProps(["x", "y", "base", "width", "height"], t),
        a,
        l,
        c,
        h,
        u;
    return (
        s.horizontal
            ? ((u = o / 2),
              (a = Math.min(e, n)),
              (l = Math.max(e, n)),
              (c = i - u),
              (h = i + u))
            : ((u = r / 2),
              (a = e - u),
              (l = e + u),
              (c = Math.min(i, n)),
              (h = Math.max(i, n))),
        { left: a, top: c, right: l, bottom: h }
    );
}
function re(s, t, e, i) {
    return s ? 0 : it(t, e, i);
}
function Dd(s, t, e) {
    let i = s.options.borderWidth,
        n = s.borderSkipped,
        r = Zn(i);
    return {
        t: re(n.top, r.top, 0, e),
        r: re(n.right, r.right, 0, t),
        b: re(n.bottom, r.bottom, 0, e),
        l: re(n.left, r.left, 0, t),
    };
}
function Ed(s, t, e) {
    let { enableBorderRadius: i } = s.getProps(["enableBorderRadius"]),
        n = s.options.borderRadius,
        r = se(n),
        o = Math.min(t, e),
        a = s.borderSkipped,
        l = i || A(n);
    return {
        topLeft: re(!l || a.top || a.left, r.topLeft, 0, o),
        topRight: re(!l || a.top || a.right, r.topRight, 0, o),
        bottomLeft: re(!l || a.bottom || a.left, r.bottomLeft, 0, o),
        bottomRight: re(!l || a.bottom || a.right, r.bottomRight, 0, o),
    };
}
function Cd(s) {
    let t = fl(s),
        e = t.right - t.left,
        i = t.bottom - t.top,
        n = Dd(s, e / 2, i / 2),
        r = Ed(s, e / 2, i / 2);
    return {
        outer: { x: t.left, y: t.top, w: e, h: i, radius: r },
        inner: {
            x: t.left + n.l,
            y: t.top + n.t,
            w: e - n.l - n.r,
            h: i - n.t - n.b,
            radius: {
                topLeft: Math.max(0, r.topLeft - Math.max(n.t, n.l)),
                topRight: Math.max(0, r.topRight - Math.max(n.t, n.r)),
                bottomLeft: Math.max(0, r.bottomLeft - Math.max(n.b, n.l)),
                bottomRight: Math.max(0, r.bottomRight - Math.max(n.b, n.r)),
            },
        },
    };
}
function ur(s, t, e, i) {
    let n = t === null,
        r = e === null,
        a = s && !(n && r) && fl(s, i);
    return a && (n || Lt(t, a.left, a.right)) && (r || Lt(e, a.top, a.bottom));
}
function Id(s) {
    return s.topLeft || s.topRight || s.bottomLeft || s.bottomRight;
}
function Fd(s, t) {
    s.rect(t.x, t.y, t.w, t.h);
}
function dr(s, t, e = {}) {
    let i = s.x !== e.x ? -t : 0,
        n = s.y !== e.y ? -t : 0,
        r = (s.x + s.w !== e.x + e.w ? t : 0) - i,
        o = (s.y + s.h !== e.y + e.h ? t : 0) - n;
    return { x: s.x + i, y: s.y + n, w: s.w + r, h: s.h + o, radius: s.radius };
}
var Ke = class extends yt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t);
    }
    draw(t) {
        let {
                inflateAmount: e,
                options: { borderColor: i, backgroundColor: n },
            } = this,
            { inner: r, outer: o } = Cd(this),
            a = Id(o.radius) ? We : Fd;
        t.save(),
            (o.w !== r.w || o.h !== r.h) &&
                (t.beginPath(),
                a(t, dr(o, e, r)),
                t.clip(),
                a(t, dr(r, -e, o)),
                (t.fillStyle = i),
                t.fill("evenodd")),
            t.beginPath(),
            a(t, dr(r, e)),
            (t.fillStyle = n),
            t.fill(),
            t.restore();
    }
    inRange(t, e, i) {
        return ur(this, t, e, i);
    }
    inXRange(t, e) {
        return ur(this, t, null, e);
    }
    inYRange(t, e) {
        return ur(this, null, t, e);
    }
    getCenterPoint(t) {
        let {
            x: e,
            y: i,
            base: n,
            horizontal: r,
        } = this.getProps(["x", "y", "base", "horizontal"], t);
        return { x: r ? (e + n) / 2 : e, y: r ? i : (i + n) / 2 };
    }
    getRange(t) {
        return t === "x" ? this.width / 2 : this.height / 2;
    }
};
Ke.id = "bar";
Ke.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
};
Ke.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
};
var Ad = Object.freeze({
    __proto__: null,
    ArcElement: Ge,
    LineElement: Nt,
    PointElement: Xe,
    BarElement: Ke,
});
function Ld(s, t, e, i, n) {
    let r = n.samples || i;
    if (r >= e) return s.slice(t, t + e);
    let o = [],
        a = (e - 2) / (r - 2),
        l = 0,
        c = t + e - 1,
        h = t,
        u,
        d,
        f,
        m,
        g;
    for (o[l++] = s[h], u = 0; u < r - 2; u++) {
        let p = 0,
            y = 0,
            b,
            _ = Math.floor((u + 1) * a) + 1 + t,
            w = Math.min(Math.floor((u + 2) * a) + 1, e) + t,
            x = w - _;
        for (b = _; b < w; b++) (p += s[b].x), (y += s[b].y);
        (p /= x), (y /= x);
        let S = Math.floor(u * a) + 1 + t,
            k = Math.min(Math.floor((u + 1) * a) + 1, e) + t,
            { x: O, y: v } = s[h];
        for (f = m = -1, b = S; b < k; b++)
            (m =
                0.5 *
                Math.abs((O - p) * (s[b].y - v) - (O - s[b].x) * (y - v))),
                m > f && ((f = m), (d = s[b]), (g = b));
        (o[l++] = d), (h = g);
    }
    return (o[l++] = s[c]), o;
}
function Pd(s, t, e, i) {
    let n = 0,
        r = 0,
        o,
        a,
        l,
        c,
        h,
        u,
        d,
        f,
        m,
        g,
        p = [],
        y = t + e - 1,
        b = s[t].x,
        w = s[y].x - b;
    for (o = t; o < t + e; ++o) {
        (a = s[o]), (l = ((a.x - b) / w) * i), (c = a.y);
        let x = l | 0;
        if (x === h)
            c < m ? ((m = c), (u = o)) : c > g && ((g = c), (d = o)),
                (n = (r * n + a.x) / ++r);
        else {
            let S = o - 1;
            if (!N(u) && !N(d)) {
                let k = Math.min(u, d),
                    O = Math.max(u, d);
                k !== f && k !== S && p.push({ ...s[k], x: n }),
                    O !== f && O !== S && p.push({ ...s[O], x: n });
            }
            o > 0 && S !== f && p.push(s[S]),
                p.push(a),
                (h = x),
                (r = 0),
                (m = g = c),
                (u = d = f = o);
        }
    }
    return p;
}
function ml(s) {
    if (s._decimated) {
        let t = s._data;
        delete s._decimated,
            delete s._data,
            Object.defineProperty(s, "data", { value: t });
    }
}
function Aa(s) {
    s.data.datasets.forEach((t) => {
        ml(t);
    });
}
function Rd(s, t) {
    let e = t.length,
        i = 0,
        n,
        { iScale: r } = s,
        { min: o, max: a, minDefined: l, maxDefined: c } = r.getUserBounds();
    return (
        l && (i = it(Ft(t, r.axis, o).lo, 0, e - 1)),
        c ? (n = it(Ft(t, r.axis, a).hi + 1, i, e) - i) : (n = e - i),
        { start: i, count: n }
    );
}
var Nd = {
    id: "decimation",
    defaults: { algorithm: "min-max", enabled: !1 },
    beforeElementsUpdate: (s, t, e) => {
        if (!e.enabled) {
            Aa(s);
            return;
        }
        let i = s.width;
        s.data.datasets.forEach((n, r) => {
            let { _data: o, indexAxis: a } = n,
                l = s.getDatasetMeta(r),
                c = o || n.data;
            if (
                ze([a, s.options.indexAxis]) === "y" ||
                !l.controller.supportsDecimation
            )
                return;
            let h = s.scales[l.xAxisID];
            if ((h.type !== "linear" && h.type !== "time") || s.options.parsing)
                return;
            let { start: u, count: d } = Rd(l, c),
                f = e.threshold || 4 * i;
            if (d <= f) {
                ml(n);
                return;
            }
            N(o) &&
                ((n._data = c),
                delete n.data,
                Object.defineProperty(n, "data", {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this._decimated;
                    },
                    set: function (g) {
                        this._data = g;
                    },
                }));
            let m;
            switch (e.algorithm) {
                case "lttb":
                    m = Ld(c, u, d, i, e);
                    break;
                case "min-max":
                    m = Pd(c, u, d, i);
                    break;
                default:
                    throw new Error(
                        `Unsupported decimation algorithm '${e.algorithm}'`,
                    );
            }
            n._decimated = m;
        });
    },
    destroy(s) {
        Aa(s);
    },
};
function Wd(s, t, e) {
    let i = s.segments,
        n = s.points,
        r = t.points,
        o = [];
    for (let a of i) {
        let { start: l, end: c } = a;
        c = Dr(l, c, n);
        let h = Tr(e, n[l], n[c], a.loop);
        if (!t.segments) {
            o.push({ source: a, target: h, start: n[l], end: n[c] });
            continue;
        }
        let u = nr(t, h);
        for (let d of u) {
            let f = Tr(e, r[d.start], r[d.end], d.loop),
                m = ir(a, n, f);
            for (let g of m)
                o.push({
                    source: g,
                    target: d,
                    start: { [e]: La(h, f, "start", Math.max) },
                    end: { [e]: La(h, f, "end", Math.min) },
                });
        }
    }
    return o;
}
function Tr(s, t, e, i) {
    if (i) return;
    let n = t[s],
        r = e[s];
    return (
        s === "angle" && ((n = ht(n)), (r = ht(r))),
        { property: s, start: n, end: r }
    );
}
function zd(s, t) {
    let { x: e = null, y: i = null } = s || {},
        n = t.points,
        r = [];
    return (
        t.segments.forEach(({ start: o, end: a }) => {
            a = Dr(o, a, n);
            let l = n[o],
                c = n[a];
            i !== null
                ? (r.push({ x: l.x, y: i }), r.push({ x: c.x, y: i }))
                : e !== null &&
                  (r.push({ x: e, y: l.y }), r.push({ x: e, y: c.y }));
        }),
        r
    );
}
function Dr(s, t, e) {
    for (; t > s; t--) {
        let i = e[t];
        if (!isNaN(i.x) && !isNaN(i.y)) break;
    }
    return t;
}
function La(s, t, e, i) {
    return s && t ? i(s[e], t[e]) : s ? s[e] : t ? t[e] : 0;
}
function gl(s, t) {
    let e = [],
        i = !1;
    return (
        $(s) ? ((i = !0), (e = s)) : (e = zd(s, t)),
        e.length
            ? new Nt({
                  points: e,
                  options: { tension: 0 },
                  _loop: i,
                  _fullLoop: i,
              })
            : null
    );
}
function Pa(s) {
    return s && s.fill !== !1;
}
function Vd(s, t, e) {
    let n = s[t].fill,
        r = [t],
        o;
    if (!e) return n;
    for (; n !== !1 && r.indexOf(n) === -1; ) {
        if (!K(n)) return n;
        if (((o = s[n]), !o)) return !1;
        if (o.visible) return n;
        r.push(n), (n = o.fill);
    }
    return !1;
}
function Hd(s, t, e) {
    let i = Ud(s);
    if (A(i)) return isNaN(i.value) ? !1 : i;
    let n = parseFloat(i);
    return K(n) && Math.floor(n) === n
        ? Bd(i[0], t, n, e)
        : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i;
}
function Bd(s, t, e, i) {
    return (
        (s === "-" || s === "+") && (e = t + e),
        e === t || e < 0 || e >= i ? !1 : e
    );
}
function $d(s, t) {
    let e = null;
    return (
        s === "start"
            ? (e = t.bottom)
            : s === "end"
              ? (e = t.top)
              : A(s)
                ? (e = t.getPixelForValue(s.value))
                : t.getBasePixel && (e = t.getBasePixel()),
        e
    );
}
function jd(s, t, e) {
    let i;
    return (
        s === "start"
            ? (i = e)
            : s === "end"
              ? (i = t.options.reverse ? t.min : t.max)
              : A(s)
                ? (i = s.value)
                : (i = t.getBaseValue()),
        i
    );
}
function Ud(s) {
    let t = s.options,
        e = t.fill,
        i = C(e && e.target, e);
    return (
        i === void 0 && (i = !!t.backgroundColor),
        i === !1 || i === null ? !1 : i === !0 ? "origin" : i
    );
}
function Yd(s) {
    let { scale: t, index: e, line: i } = s,
        n = [],
        r = i.segments,
        o = i.points,
        a = Zd(t, e);
    a.push(gl({ x: null, y: t.bottom }, i));
    for (let l = 0; l < r.length; l++) {
        let c = r[l];
        for (let h = c.start; h <= c.end; h++) qd(n, o[h], a);
    }
    return new Nt({ points: n, options: {} });
}
function Zd(s, t) {
    let e = [],
        i = s.getMatchingVisibleMetas("line");
    for (let n = 0; n < i.length; n++) {
        let r = i[n];
        if (r.index === t) break;
        r.hidden || e.unshift(r.dataset);
    }
    return e;
}
function qd(s, t, e) {
    let i = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            { first: o, last: a, point: l } = Gd(r, t, "x");
        if (!(!l || (o && a))) {
            if (o) i.unshift(l);
            else if ((s.push(l), !a)) break;
        }
    }
    s.push(...i);
}
function Gd(s, t, e) {
    let i = s.interpolate(t, e);
    if (!i) return {};
    let n = i[e],
        r = s.segments,
        o = s.points,
        a = !1,
        l = !1;
    for (let c = 0; c < r.length; c++) {
        let h = r[c],
            u = o[h.start][e],
            d = o[h.end][e];
        if (Lt(n, u, d)) {
            (a = n === u), (l = n === d);
            break;
        }
    }
    return { first: a, last: l, point: i };
}
var qi = class {
    constructor(t) {
        (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
    }
    pathSegment(t, e, i) {
        let { x: n, y: r, radius: o } = this;
        return (
            (e = e || { start: 0, end: B }),
            t.arc(n, r, o, e.end, e.start, !0),
            !i.bounds
        );
    }
    interpolate(t) {
        let { x: e, y: i, radius: n } = this,
            r = t.angle;
        return { x: e + Math.cos(r) * n, y: i + Math.sin(r) * n, angle: r };
    }
};
function Xd(s) {
    let { chart: t, fill: e, line: i } = s;
    if (K(e)) return Kd(t, e);
    if (e === "stack") return Yd(s);
    if (e === "shape") return !0;
    let n = Jd(s);
    return n instanceof qi ? n : gl(n, i);
}
function Kd(s, t) {
    let e = s.getDatasetMeta(t);
    return e && s.isDatasetVisible(t) ? e.dataset : null;
}
function Jd(s) {
    return (s.scale || {}).getPointPositionForValue ? tf(s) : Qd(s);
}
function Qd(s) {
    let { scale: t = {}, fill: e } = s,
        i = $d(e, t);
    if (K(i)) {
        let n = t.isHorizontal();
        return { x: n ? i : null, y: n ? null : i };
    }
    return null;
}
function tf(s) {
    let { scale: t, fill: e } = s,
        i = t.options,
        n = t.getLabels().length,
        r = i.reverse ? t.max : t.min,
        o = jd(e, t, r),
        a = [];
    if (i.grid.circular) {
        let l = t.getPointPositionForValue(0, r);
        return new qi({
            x: l.x,
            y: l.y,
            radius: t.getDistanceFromCenterForValue(o),
        });
    }
    for (let l = 0; l < n; ++l) a.push(t.getPointPositionForValue(l, o));
    return a;
}
function fr(s, t, e) {
    let i = Xd(t),
        { line: n, scale: r, axis: o } = t,
        a = n.options,
        l = a.fill,
        c = a.backgroundColor,
        { above: h = c, below: u = c } = l || {};
    i &&
        n.points.length &&
        (ks(s, e),
        ef(s, {
            line: n,
            target: i,
            above: h,
            below: u,
            area: e,
            scale: r,
            axis: o,
        }),
        Ms(s));
}
function ef(s, t) {
    let { line: e, target: i, above: n, below: r, area: o, scale: a } = t,
        l = e._loop ? "angle" : t.axis;
    s.save(),
        l === "x" &&
            r !== n &&
            (Ra(s, i, o.top),
            Na(s, { line: e, target: i, color: n, scale: a, property: l }),
            s.restore(),
            s.save(),
            Ra(s, i, o.bottom)),
        Na(s, { line: e, target: i, color: r, scale: a, property: l }),
        s.restore();
}
function Ra(s, t, e) {
    let { segments: i, points: n } = t,
        r = !0,
        o = !1;
    s.beginPath();
    for (let a of i) {
        let { start: l, end: c } = a,
            h = n[l],
            u = n[Dr(l, c, n)];
        r
            ? (s.moveTo(h.x, h.y), (r = !1))
            : (s.lineTo(h.x, e), s.lineTo(h.x, h.y)),
            (o = !!t.pathSegment(s, a, { move: o })),
            o ? s.closePath() : s.lineTo(u.x, e);
    }
    s.lineTo(t.first().x, e), s.closePath(), s.clip();
}
function Na(s, t) {
    let { line: e, target: i, property: n, color: r, scale: o } = t,
        a = Wd(e, i, n);
    for (let { source: l, target: c, start: h, end: u } of a) {
        let { style: { backgroundColor: d = r } = {} } = l,
            f = i !== !0;
        s.save(), (s.fillStyle = d), sf(s, o, f && Tr(n, h, u)), s.beginPath();
        let m = !!e.pathSegment(s, l),
            g;
        if (f) {
            m ? s.closePath() : Wa(s, i, u, n);
            let p = !!i.pathSegment(s, c, { move: m, reverse: !0 });
            (g = m && p), g || Wa(s, i, h, n);
        }
        s.closePath(), s.fill(g ? "evenodd" : "nonzero"), s.restore();
    }
}
function sf(s, t, e) {
    let { top: i, bottom: n } = t.chart.chartArea,
        { property: r, start: o, end: a } = e || {};
    r === "x" && (s.beginPath(), s.rect(o, i, a - o, n - i), s.clip());
}
function Wa(s, t, e, i) {
    let n = t.interpolate(e, i);
    n && s.lineTo(n.x, n.y);
}
var nf = {
        id: "filler",
        afterDatasetsUpdate(s, t, e) {
            let i = (s.data.datasets || []).length,
                n = [],
                r,
                o,
                a,
                l;
            for (o = 0; o < i; ++o)
                (r = s.getDatasetMeta(o)),
                    (a = r.dataset),
                    (l = null),
                    a &&
                        a.options &&
                        a instanceof Nt &&
                        (l = {
                            visible: s.isDatasetVisible(o),
                            index: o,
                            fill: Hd(a, o, i),
                            chart: s,
                            axis: r.controller.options.indexAxis,
                            scale: r.vScale,
                            line: a,
                        }),
                    (r.$filler = l),
                    n.push(l);
            for (o = 0; o < i; ++o)
                (l = n[o]),
                    !(!l || l.fill === !1) && (l.fill = Vd(n, o, e.propagate));
        },
        beforeDraw(s, t, e) {
            let i = e.drawTime === "beforeDraw",
                n = s.getSortedVisibleDatasetMetas(),
                r = s.chartArea;
            for (let o = n.length - 1; o >= 0; --o) {
                let a = n[o].$filler;
                a &&
                    (a.line.updateControlPoints(r, a.axis),
                    i && a.fill && fr(s.ctx, a, r));
            }
        },
        beforeDatasetsDraw(s, t, e) {
            if (e.drawTime !== "beforeDatasetsDraw") return;
            let i = s.getSortedVisibleDatasetMetas();
            for (let n = i.length - 1; n >= 0; --n) {
                let r = i[n].$filler;
                Pa(r) && fr(s.ctx, r, s.chartArea);
            }
        },
        beforeDatasetDraw(s, t, e) {
            let i = t.meta.$filler;
            !Pa(i) ||
                e.drawTime !== "beforeDatasetDraw" ||
                fr(s.ctx, i, s.chartArea);
        },
        defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
    },
    za = (s, t) => {
        let { boxHeight: e = t, boxWidth: i = t } = s;
        return (
            s.usePointStyle &&
                ((e = Math.min(e, t)),
                (i = s.pointStyleWidth || Math.min(i, t))),
            { boxWidth: i, boxHeight: e, itemHeight: Math.max(t, e) }
        );
    },
    rf = (s, t) =>
        s !== null &&
        t !== null &&
        s.datasetIndex === t.datasetIndex &&
        s.index === t.index,
    Gi = class extends yt {
        constructor(t) {
            super(),
                (this._added = !1),
                (this.legendHitBoxes = []),
                (this._hoveredItem = null),
                (this.doughnutMode = !1),
                (this.chart = t.chart),
                (this.options = t.options),
                (this.ctx = t.ctx),
                (this.legendItems = void 0),
                (this.columnSizes = void 0),
                (this.lineWidths = void 0),
                (this.maxHeight = void 0),
                (this.maxWidth = void 0),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.height = void 0),
                (this.width = void 0),
                (this._margins = void 0),
                (this.position = void 0),
                (this.weight = void 0),
                (this.fullSize = void 0);
        }
        update(t, e, i) {
            (this.maxWidth = t),
                (this.maxHeight = e),
                (this._margins = i),
                this.setDimensions(),
                this.buildLabels(),
                this.fit();
        }
        setDimensions() {
            this.isHorizontal()
                ? ((this.width = this.maxWidth),
                  (this.left = this._margins.left),
                  (this.right = this.width))
                : ((this.height = this.maxHeight),
                  (this.top = this._margins.top),
                  (this.bottom = this.height));
        }
        buildLabels() {
            let t = this.options.labels || {},
                e = j(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))),
                t.sort && (e = e.sort((i, n) => t.sort(i, n, this.chart.data))),
                this.options.reverse && e.reverse(),
                (this.legendItems = e);
        }
        fit() {
            let { options: t, ctx: e } = this;
            if (!t.display) {
                this.width = this.height = 0;
                return;
            }
            let i = t.labels,
                n = st(i.font),
                r = n.size,
                o = this._computeTitleHeight(),
                { boxWidth: a, itemHeight: l } = za(i, r),
                c,
                h;
            (e.font = n.string),
                this.isHorizontal()
                    ? ((c = this.maxWidth),
                      (h = this._fitRows(o, r, a, l) + 10))
                    : ((h = this.maxHeight),
                      (c = this._fitCols(o, r, a, l) + 10)),
                (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
                (this.height = Math.min(h, t.maxHeight || this.maxHeight));
        }
        _fitRows(t, e, i, n) {
            let {
                    ctx: r,
                    maxWidth: o,
                    options: {
                        labels: { padding: a },
                    },
                } = this,
                l = (this.legendHitBoxes = []),
                c = (this.lineWidths = [0]),
                h = n + a,
                u = t;
            (r.textAlign = "left"), (r.textBaseline = "middle");
            let d = -1,
                f = -h;
            return (
                this.legendItems.forEach((m, g) => {
                    let p = i + e / 2 + r.measureText(m.text).width;
                    (g === 0 || c[c.length - 1] + p + 2 * a > o) &&
                        ((u += h),
                        (c[c.length - (g > 0 ? 0 : 1)] = 0),
                        (f += h),
                        d++),
                        (l[g] = {
                            left: 0,
                            top: f,
                            row: d,
                            width: p,
                            height: n,
                        }),
                        (c[c.length - 1] += p + a);
                }),
                u
            );
        }
        _fitCols(t, e, i, n) {
            let {
                    ctx: r,
                    maxHeight: o,
                    options: {
                        labels: { padding: a },
                    },
                } = this,
                l = (this.legendHitBoxes = []),
                c = (this.columnSizes = []),
                h = o - t,
                u = a,
                d = 0,
                f = 0,
                m = 0,
                g = 0;
            return (
                this.legendItems.forEach((p, y) => {
                    let b = i + e / 2 + r.measureText(p.text).width;
                    y > 0 &&
                        f + n + 2 * a > h &&
                        ((u += d + a),
                        c.push({ width: d, height: f }),
                        (m += d + a),
                        g++,
                        (d = f = 0)),
                        (l[y] = {
                            left: m,
                            top: f,
                            col: g,
                            width: b,
                            height: n,
                        }),
                        (d = Math.max(d, b)),
                        (f += n + a);
                }),
                (u += d),
                c.push({ width: d, height: f }),
                u
            );
        }
        adjustHitBoxes() {
            if (!this.options.display) return;
            let t = this._computeTitleHeight(),
                {
                    legendHitBoxes: e,
                    options: {
                        align: i,
                        labels: { padding: n },
                        rtl: r,
                    },
                } = this,
                o = ye(r, this.left, this.width);
            if (this.isHorizontal()) {
                let a = 0,
                    l = ot(i, this.left + n, this.right - this.lineWidths[a]);
                for (let c of e)
                    a !== c.row &&
                        ((a = c.row),
                        (l = ot(
                            i,
                            this.left + n,
                            this.right - this.lineWidths[a],
                        ))),
                        (c.top += this.top + t + n),
                        (c.left = o.leftForLtr(o.x(l), c.width)),
                        (l += c.width + n);
            } else {
                let a = 0,
                    l = ot(
                        i,
                        this.top + t + n,
                        this.bottom - this.columnSizes[a].height,
                    );
                for (let c of e)
                    c.col !== a &&
                        ((a = c.col),
                        (l = ot(
                            i,
                            this.top + t + n,
                            this.bottom - this.columnSizes[a].height,
                        ))),
                        (c.top = l),
                        (c.left += this.left + n),
                        (c.left = o.leftForLtr(o.x(c.left), c.width)),
                        (l += c.height + n);
            }
        }
        isHorizontal() {
            return (
                this.options.position === "top" ||
                this.options.position === "bottom"
            );
        }
        draw() {
            if (this.options.display) {
                let t = this.ctx;
                ks(t, this), this._draw(), Ms(t);
            }
        }
        _draw() {
            let { options: t, columnSizes: e, lineWidths: i, ctx: n } = this,
                { align: r, labels: o } = t,
                a = L.color,
                l = ye(t.rtl, this.left, this.width),
                c = st(o.font),
                { color: h, padding: u } = o,
                d = c.size,
                f = d / 2,
                m;
            this.drawTitle(),
                (n.textAlign = l.textAlign("left")),
                (n.textBaseline = "middle"),
                (n.lineWidth = 0.5),
                (n.font = c.string);
            let { boxWidth: g, boxHeight: p, itemHeight: y } = za(o, d),
                b = function (k, O, v) {
                    if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
                    n.save();
                    let F = C(v.lineWidth, 1);
                    if (
                        ((n.fillStyle = C(v.fillStyle, a)),
                        (n.lineCap = C(v.lineCap, "butt")),
                        (n.lineDashOffset = C(v.lineDashOffset, 0)),
                        (n.lineJoin = C(v.lineJoin, "miter")),
                        (n.lineWidth = F),
                        (n.strokeStyle = C(v.strokeStyle, a)),
                        n.setLineDash(C(v.lineDash, [])),
                        o.usePointStyle)
                    ) {
                        let W = {
                                radius: (p * Math.SQRT2) / 2,
                                pointStyle: v.pointStyle,
                                rotation: v.rotation,
                                borderWidth: F,
                            },
                            R = l.xPlus(k, g / 2),
                            tt = O + f;
                        Yn(n, W, R, tt, o.pointStyleWidth && g);
                    } else {
                        let W = O + Math.max((d - p) / 2, 0),
                            R = l.leftForLtr(k, g),
                            tt = se(v.borderRadius);
                        n.beginPath(),
                            Object.values(tt).some((ct) => ct !== 0)
                                ? We(n, { x: R, y: W, w: g, h: p, radius: tt })
                                : n.rect(R, W, g, p),
                            n.fill(),
                            F !== 0 && n.stroke();
                    }
                    n.restore();
                },
                _ = function (k, O, v) {
                    ee(n, v.text, k, O + y / 2, c, {
                        strikethrough: v.hidden,
                        textAlign: l.textAlign(v.textAlign),
                    });
                },
                w = this.isHorizontal(),
                x = this._computeTitleHeight();
            w
                ? (m = {
                      x: ot(r, this.left + u, this.right - i[0]),
                      y: this.top + u + x,
                      line: 0,
                  })
                : (m = {
                      x: this.left + u,
                      y: ot(r, this.top + x + u, this.bottom - e[0].height),
                      line: 0,
                  }),
                er(this.ctx, t.textDirection);
            let S = y + u;
            this.legendItems.forEach((k, O) => {
                (n.strokeStyle = k.fontColor || h),
                    (n.fillStyle = k.fontColor || h);
                let v = n.measureText(k.text).width,
                    F = l.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
                    W = g + f + v,
                    R = m.x,
                    tt = m.y;
                l.setWidth(this.width),
                    w
                        ? O > 0 &&
                          R + W + u > this.right &&
                          ((tt = m.y += S),
                          m.line++,
                          (R = m.x =
                              ot(r, this.left + u, this.right - i[m.line])))
                        : O > 0 &&
                          tt + S > this.bottom &&
                          ((R = m.x = R + e[m.line].width + u),
                          m.line++,
                          (tt = m.y =
                              ot(
                                  r,
                                  this.top + x + u,
                                  this.bottom - e[m.line].height,
                              )));
                let ct = l.x(R);
                b(ct, tt, k),
                    (R = Vo(F, R + g + f, w ? R + W : this.right, t.rtl)),
                    _(l.x(R), tt, k),
                    w ? (m.x += W + u) : (m.y += S);
            }),
                sr(this.ctx, t.textDirection);
        }
        drawTitle() {
            let t = this.options,
                e = t.title,
                i = st(e.font),
                n = at(e.padding);
            if (!e.display) return;
            let r = ye(t.rtl, this.left, this.width),
                o = this.ctx,
                a = e.position,
                l = i.size / 2,
                c = n.top + l,
                h,
                u = this.left,
                d = this.width;
            if (this.isHorizontal())
                (d = Math.max(...this.lineWidths)),
                    (h = this.top + c),
                    (u = ot(t.align, u, this.right - d));
            else {
                let m = this.columnSizes.reduce(
                    (g, p) => Math.max(g, p.height),
                    0,
                );
                h =
                    c +
                    ot(
                        t.align,
                        this.top,
                        this.bottom -
                            m -
                            t.labels.padding -
                            this._computeTitleHeight(),
                    );
            }
            let f = ot(a, u, u + d);
            (o.textAlign = r.textAlign(Ci(a))),
                (o.textBaseline = "middle"),
                (o.strokeStyle = e.color),
                (o.fillStyle = e.color),
                (o.font = i.string),
                ee(o, e.text, f, h, i);
        }
        _computeTitleHeight() {
            let t = this.options.title,
                e = st(t.font),
                i = at(t.padding);
            return t.display ? e.lineHeight + i.height : 0;
        }
        _getLegendItemAt(t, e) {
            let i, n, r;
            if (Lt(t, this.left, this.right) && Lt(e, this.top, this.bottom)) {
                for (r = this.legendHitBoxes, i = 0; i < r.length; ++i)
                    if (
                        ((n = r[i]),
                        Lt(t, n.left, n.left + n.width) &&
                            Lt(e, n.top, n.top + n.height))
                    )
                        return this.legendItems[i];
            }
            return null;
        }
        handleEvent(t) {
            let e = this.options;
            if (!of(t.type, e)) return;
            let i = this._getLegendItemAt(t.x, t.y);
            if (t.type === "mousemove" || t.type === "mouseout") {
                let n = this._hoveredItem,
                    r = rf(n, i);
                n && !r && j(e.onLeave, [t, n, this], this),
                    (this._hoveredItem = i),
                    i && !r && j(e.onHover, [t, i, this], this);
            } else i && j(e.onClick, [t, i, this], this);
        }
    };
function of(s, t) {
    return !!(
        ((s === "mousemove" || s === "mouseout") && (t.onHover || t.onLeave)) ||
        (t.onClick && (s === "click" || s === "mouseup"))
    );
}
var af = {
        id: "legend",
        _element: Gi,
        start(s, t, e) {
            let i = (s.legend = new Gi({ ctx: s.ctx, options: e, chart: s }));
            lt.configure(s, i, e), lt.addBox(s, i);
        },
        stop(s) {
            lt.removeBox(s, s.legend), delete s.legend;
        },
        beforeUpdate(s, t, e) {
            let i = s.legend;
            lt.configure(s, i, e), (i.options = e);
        },
        afterUpdate(s) {
            let t = s.legend;
            t.buildLabels(), t.adjustHitBoxes();
        },
        afterEvent(s, t) {
            t.replay || s.legend.handleEvent(t.event);
        },
        defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(s, t, e) {
                let i = t.datasetIndex,
                    n = e.chart;
                n.isDatasetVisible(i)
                    ? (n.hide(i), (t.hidden = !0))
                    : (n.show(i), (t.hidden = !1));
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: (s) => s.chart.options.color,
                boxWidth: 40,
                padding: 10,
                generateLabels(s) {
                    let t = s.data.datasets,
                        {
                            labels: {
                                usePointStyle: e,
                                pointStyle: i,
                                textAlign: n,
                                color: r,
                            },
                        } = s.legend.options;
                    return s._getSortedDatasetMetas().map((o) => {
                        let a = o.controller.getStyle(e ? 0 : void 0),
                            l = at(a.borderWidth);
                        return {
                            text: t[o.index].label,
                            fillStyle: a.backgroundColor,
                            fontColor: r,
                            hidden: !o.visible,
                            lineCap: a.borderCapStyle,
                            lineDash: a.borderDash,
                            lineDashOffset: a.borderDashOffset,
                            lineJoin: a.borderJoinStyle,
                            lineWidth: (l.width + l.height) / 4,
                            strokeStyle: a.borderColor,
                            pointStyle: i || a.pointStyle,
                            rotation: a.rotation,
                            textAlign: n || a.textAlign,
                            borderRadius: 0,
                            datasetIndex: o.index,
                        };
                    }, this);
                },
            },
            title: {
                color: (s) => s.chart.options.color,
                display: !1,
                position: "center",
                text: "",
            },
        },
        descriptors: {
            _scriptable: (s) => !s.startsWith("on"),
            labels: {
                _scriptable: (s) =>
                    !["generateLabels", "filter", "sort"].includes(s),
            },
        },
    },
    Ps = class extends yt {
        constructor(t) {
            super(),
                (this.chart = t.chart),
                (this.options = t.options),
                (this.ctx = t.ctx),
                (this._padding = void 0),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.width = void 0),
                (this.height = void 0),
                (this.position = void 0),
                (this.weight = void 0),
                (this.fullSize = void 0);
        }
        update(t, e) {
            let i = this.options;
            if (((this.left = 0), (this.top = 0), !i.display)) {
                this.width = this.height = this.right = this.bottom = 0;
                return;
            }
            (this.width = this.right = t), (this.height = this.bottom = e);
            let n = $(i.text) ? i.text.length : 1;
            this._padding = at(i.padding);
            let r = n * st(i.font).lineHeight + this._padding.height;
            this.isHorizontal() ? (this.height = r) : (this.width = r);
        }
        isHorizontal() {
            let t = this.options.position;
            return t === "top" || t === "bottom";
        }
        _drawArgs(t) {
            let { top: e, left: i, bottom: n, right: r, options: o } = this,
                a = o.align,
                l = 0,
                c,
                h,
                u;
            return (
                this.isHorizontal()
                    ? ((h = ot(a, i, r)), (u = e + t), (c = r - i))
                    : (o.position === "left"
                          ? ((h = i + t), (u = ot(a, n, e)), (l = Y * -0.5))
                          : ((h = r - t), (u = ot(a, e, n)), (l = Y * 0.5)),
                      (c = n - e)),
                { titleX: h, titleY: u, maxWidth: c, rotation: l }
            );
        }
        draw() {
            let t = this.ctx,
                e = this.options;
            if (!e.display) return;
            let i = st(e.font),
                r = i.lineHeight / 2 + this._padding.top,
                {
                    titleX: o,
                    titleY: a,
                    maxWidth: l,
                    rotation: c,
                } = this._drawArgs(r);
            ee(t, e.text, 0, 0, i, {
                color: e.color,
                maxWidth: l,
                rotation: c,
                textAlign: Ci(e.align),
                textBaseline: "middle",
                translation: [o, a],
            });
        }
    };
function lf(s, t) {
    let e = new Ps({ ctx: s.ctx, options: t, chart: s });
    lt.configure(s, e, t), lt.addBox(s, e), (s.titleBlock = e);
}
var cf = {
        id: "title",
        _element: Ps,
        start(s, t, e) {
            lf(s, e);
        },
        stop(s) {
            let t = s.titleBlock;
            lt.removeBox(s, t), delete s.titleBlock;
        },
        beforeUpdate(s, t, e) {
            let i = s.titleBlock;
            lt.configure(s, i, e), (i.options = e);
        },
        defaults: {
            align: "center",
            display: !1,
            font: { weight: "bold" },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
    },
    Vi = new WeakMap(),
    hf = {
        id: "subtitle",
        start(s, t, e) {
            let i = new Ps({ ctx: s.ctx, options: e, chart: s });
            lt.configure(s, i, e), lt.addBox(s, i), Vi.set(s, i);
        },
        stop(s) {
            lt.removeBox(s, Vi.get(s)), Vi.delete(s);
        },
        beforeUpdate(s, t, e) {
            let i = Vi.get(s);
            lt.configure(s, i, e), (i.options = e);
        },
        defaults: {
            align: "center",
            display: !1,
            font: { weight: "normal" },
            fullSize: !0,
            padding: 0,
            position: "top",
            text: "",
            weight: 1500,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
    },
    Is = {
        average(s) {
            if (!s.length) return !1;
            let t,
                e,
                i = 0,
                n = 0,
                r = 0;
            for (t = 0, e = s.length; t < e; ++t) {
                let o = s[t].element;
                if (o && o.hasValue()) {
                    let a = o.tooltipPosition();
                    (i += a.x), (n += a.y), ++r;
                }
            }
            return { x: i / r, y: n / r };
        },
        nearest(s, t) {
            if (!s.length) return !1;
            let e = t.x,
                i = t.y,
                n = Number.POSITIVE_INFINITY,
                r,
                o,
                a;
            for (r = 0, o = s.length; r < o; ++r) {
                let l = s[r].element;
                if (l && l.hasValue()) {
                    let c = l.getCenterPoint(),
                        h = Ti(t, c);
                    h < n && ((n = h), (a = l));
                }
            }
            if (a) {
                let l = a.tooltipPosition();
                (e = l.x), (i = l.y);
            }
            return { x: e, y: i };
        },
    };
function Pt(s, t) {
    return t && ($(t) ? Array.prototype.push.apply(s, t) : s.push(t)), s;
}
function Ut(s) {
    return (typeof s == "string" || s instanceof String) &&
        s.indexOf(`
`) > -1
        ? s.split(`
`)
        : s;
}
function uf(s, t) {
    let { element: e, datasetIndex: i, index: n } = t,
        r = s.getDatasetMeta(i).controller,
        { label: o, value: a } = r.getLabelAndValue(n);
    return {
        chart: s,
        label: o,
        parsed: r.getParsed(n),
        raw: s.data.datasets[i].data[n],
        formattedValue: a,
        dataset: r.getDataset(),
        dataIndex: n,
        datasetIndex: i,
        element: e,
    };
}
function Va(s, t) {
    let e = s.chart.ctx,
        { body: i, footer: n, title: r } = s,
        { boxWidth: o, boxHeight: a } = t,
        l = st(t.bodyFont),
        c = st(t.titleFont),
        h = st(t.footerFont),
        u = r.length,
        d = n.length,
        f = i.length,
        m = at(t.padding),
        g = m.height,
        p = 0,
        y = i.reduce(
            (w, x) => w + x.before.length + x.lines.length + x.after.length,
            0,
        );
    if (
        ((y += s.beforeBody.length + s.afterBody.length),
        u &&
            (g +=
                u * c.lineHeight +
                (u - 1) * t.titleSpacing +
                t.titleMarginBottom),
        y)
    ) {
        let w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
        g += f * w + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing;
    }
    d &&
        (g += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
    let b = 0,
        _ = function (w) {
            p = Math.max(p, e.measureText(w).width + b);
        };
    return (
        e.save(),
        (e.font = c.string),
        H(s.title, _),
        (e.font = l.string),
        H(s.beforeBody.concat(s.afterBody), _),
        (b = t.displayColors ? o + 2 + t.boxPadding : 0),
        H(i, (w) => {
            H(w.before, _), H(w.lines, _), H(w.after, _);
        }),
        (b = 0),
        (e.font = h.string),
        H(s.footer, _),
        e.restore(),
        (p += m.width),
        { width: p, height: g }
    );
}
function df(s, t) {
    let { y: e, height: i } = t;
    return e < i / 2 ? "top" : e > s.height - i / 2 ? "bottom" : "center";
}
function ff(s, t, e, i) {
    let { x: n, width: r } = i,
        o = e.caretSize + e.caretPadding;
    if (
        (s === "left" && n + r + o > t.width) ||
        (s === "right" && n - r - o < 0)
    )
        return !0;
}
function mf(s, t, e, i) {
    let { x: n, width: r } = e,
        {
            width: o,
            chartArea: { left: a, right: l },
        } = s,
        c = "center";
    return (
        i === "center"
            ? (c = n <= (a + l) / 2 ? "left" : "right")
            : n <= r / 2
              ? (c = "left")
              : n >= o - r / 2 && (c = "right"),
        ff(c, s, t, e) && (c = "center"),
        c
    );
}
function Ha(s, t, e) {
    let i = e.yAlign || t.yAlign || df(s, e);
    return { xAlign: e.xAlign || t.xAlign || mf(s, t, e, i), yAlign: i };
}
function gf(s, t) {
    let { x: e, width: i } = s;
    return t === "right" ? (e -= i) : t === "center" && (e -= i / 2), e;
}
function pf(s, t, e) {
    let { y: i, height: n } = s;
    return (
        t === "top" ? (i += e) : t === "bottom" ? (i -= n + e) : (i -= n / 2), i
    );
}
function Ba(s, t, e, i) {
    let { caretSize: n, caretPadding: r, cornerRadius: o } = s,
        { xAlign: a, yAlign: l } = e,
        c = n + r,
        { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = se(o),
        m = gf(t, a),
        g = pf(t, l, c);
    return (
        l === "center"
            ? a === "left"
                ? (m += c)
                : a === "right" && (m -= c)
            : a === "left"
              ? (m -= Math.max(h, d) + n)
              : a === "right" && (m += Math.max(u, f) + n),
        { x: it(m, 0, i.width - t.width), y: it(g, 0, i.height - t.height) }
    );
}
function Hi(s, t, e) {
    let i = at(e.padding);
    return t === "center"
        ? s.x + s.width / 2
        : t === "right"
          ? s.x + s.width - i.right
          : s.x + i.left;
}
function $a(s) {
    return Pt([], Ut(s));
}
function yf(s, t, e) {
    return $t(s, { tooltip: t, tooltipItems: e, type: "tooltip" });
}
function ja(s, t) {
    let e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? s.override(e) : s;
}
var Rs = class extends yt {
    constructor(t) {
        super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart || t._chart),
            (this._chart = this.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
    }
    initialize(t) {
        (this.options = t),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
    }
    _resolveAnimations() {
        let t = this._cachedAnimations;
        if (t) return t;
        let e = this.chart,
            i = this.options.setContext(this.getContext()),
            n = i.enabled && e.options.animation && i.animations,
            r = new ji(this.chart, n);
        return n._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
    }
    getContext() {
        return (
            this.$context ||
            (this.$context = yf(
                this.chart.getContext(),
                this,
                this._tooltipItems,
            ))
        );
    }
    getTitle(t, e) {
        let { callbacks: i } = e,
            n = i.beforeTitle.apply(this, [t]),
            r = i.title.apply(this, [t]),
            o = i.afterTitle.apply(this, [t]),
            a = [];
        return (a = Pt(a, Ut(n))), (a = Pt(a, Ut(r))), (a = Pt(a, Ut(o))), a;
    }
    getBeforeBody(t, e) {
        return $a(e.callbacks.beforeBody.apply(this, [t]));
    }
    getBody(t, e) {
        let { callbacks: i } = e,
            n = [];
        return (
            H(t, (r) => {
                let o = { before: [], lines: [], after: [] },
                    a = ja(i, r);
                Pt(o.before, Ut(a.beforeLabel.call(this, r))),
                    Pt(o.lines, a.label.call(this, r)),
                    Pt(o.after, Ut(a.afterLabel.call(this, r))),
                    n.push(o);
            }),
            n
        );
    }
    getAfterBody(t, e) {
        return $a(e.callbacks.afterBody.apply(this, [t]));
    }
    getFooter(t, e) {
        let { callbacks: i } = e,
            n = i.beforeFooter.apply(this, [t]),
            r = i.footer.apply(this, [t]),
            o = i.afterFooter.apply(this, [t]),
            a = [];
        return (a = Pt(a, Ut(n))), (a = Pt(a, Ut(r))), (a = Pt(a, Ut(o))), a;
    }
    _createItems(t) {
        let e = this._active,
            i = this.chart.data,
            n = [],
            r = [],
            o = [],
            a = [],
            l,
            c;
        for (l = 0, c = e.length; l < c; ++l) a.push(uf(this.chart, e[l]));
        return (
            t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, i))),
            t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, i))),
            H(a, (h) => {
                let u = ja(t.callbacks, h);
                n.push(u.labelColor.call(this, h)),
                    r.push(u.labelPointStyle.call(this, h)),
                    o.push(u.labelTextColor.call(this, h));
            }),
            (this.labelColors = n),
            (this.labelPointStyles = r),
            (this.labelTextColors = o),
            (this.dataPoints = a),
            a
        );
    }
    update(t, e) {
        let i = this.options.setContext(this.getContext()),
            n = this._active,
            r,
            o = [];
        if (!n.length) this.opacity !== 0 && (r = { opacity: 0 });
        else {
            let a = Is[i.position].call(this, n, this._eventPosition);
            (o = this._createItems(i)),
                (this.title = this.getTitle(o, i)),
                (this.beforeBody = this.getBeforeBody(o, i)),
                (this.body = this.getBody(o, i)),
                (this.afterBody = this.getAfterBody(o, i)),
                (this.footer = this.getFooter(o, i));
            let l = (this._size = Va(this, i)),
                c = Object.assign({}, a, l),
                h = Ha(this.chart, i, c),
                u = Ba(i, c, h, this.chart);
            (this.xAlign = h.xAlign),
                (this.yAlign = h.yAlign),
                (r = {
                    opacity: 1,
                    x: u.x,
                    y: u.y,
                    width: l.width,
                    height: l.height,
                    caretX: a.x,
                    caretY: a.y,
                });
        }
        (this._tooltipItems = o),
            (this.$context = void 0),
            r && this._resolveAnimations().update(this, r),
            t &&
                i.external &&
                i.external.call(this, {
                    chart: this.chart,
                    tooltip: this,
                    replay: e,
                });
    }
    drawCaret(t, e, i, n) {
        let r = this.getCaretPosition(t, i, n);
        e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
    }
    getCaretPosition(t, e, i) {
        let { xAlign: n, yAlign: r } = this,
            { caretSize: o, cornerRadius: a } = i,
            { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = se(a),
            { x: d, y: f } = t,
            { width: m, height: g } = e,
            p,
            y,
            b,
            _,
            w,
            x;
        return (
            r === "center"
                ? ((w = f + g / 2),
                  n === "left"
                      ? ((p = d), (y = p - o), (_ = w + o), (x = w - o))
                      : ((p = d + m), (y = p + o), (_ = w - o), (x = w + o)),
                  (b = p))
                : (n === "left"
                      ? (y = d + Math.max(l, h) + o)
                      : n === "right"
                        ? (y = d + m - Math.max(c, u) - o)
                        : (y = this.caretX),
                  r === "top"
                      ? ((_ = f), (w = _ - o), (p = y - o), (b = y + o))
                      : ((_ = f + g), (w = _ + o), (p = y + o), (b = y - o)),
                  (x = _)),
            { x1: p, x2: y, x3: b, y1: _, y2: w, y3: x }
        );
    }
    drawTitle(t, e, i) {
        let n = this.title,
            r = n.length,
            o,
            a,
            l;
        if (r) {
            let c = ye(i.rtl, this.x, this.width);
            for (
                t.x = Hi(this, i.titleAlign, i),
                    e.textAlign = c.textAlign(i.titleAlign),
                    e.textBaseline = "middle",
                    o = st(i.titleFont),
                    a = i.titleSpacing,
                    e.fillStyle = i.titleColor,
                    e.font = o.string,
                    l = 0;
                l < r;
                ++l
            )
                e.fillText(n[l], c.x(t.x), t.y + o.lineHeight / 2),
                    (t.y += o.lineHeight + a),
                    l + 1 === r && (t.y += i.titleMarginBottom - a);
        }
    }
    _drawColorBox(t, e, i, n, r) {
        let o = this.labelColors[i],
            a = this.labelPointStyles[i],
            { boxHeight: l, boxWidth: c, boxPadding: h } = r,
            u = st(r.bodyFont),
            d = Hi(this, "left", r),
            f = n.x(d),
            m = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
            g = e.y + m;
        if (r.usePointStyle) {
            let p = {
                    radius: Math.min(c, l) / 2,
                    pointStyle: a.pointStyle,
                    rotation: a.rotation,
                    borderWidth: 1,
                },
                y = n.leftForLtr(f, c) + c / 2,
                b = g + l / 2;
            (t.strokeStyle = r.multiKeyBackground),
                (t.fillStyle = r.multiKeyBackground),
                Fi(t, p, y, b),
                (t.strokeStyle = o.borderColor),
                (t.fillStyle = o.backgroundColor),
                Fi(t, p, y, b);
        } else {
            (t.lineWidth = A(o.borderWidth)
                ? Math.max(...Object.values(o.borderWidth))
                : o.borderWidth || 1),
                (t.strokeStyle = o.borderColor),
                t.setLineDash(o.borderDash || []),
                (t.lineDashOffset = o.borderDashOffset || 0);
            let p = n.leftForLtr(f, c - h),
                y = n.leftForLtr(n.xPlus(f, 1), c - h - 2),
                b = se(o.borderRadius);
            Object.values(b).some((_) => _ !== 0)
                ? (t.beginPath(),
                  (t.fillStyle = r.multiKeyBackground),
                  We(t, { x: p, y: g, w: c, h: l, radius: b }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = o.backgroundColor),
                  t.beginPath(),
                  We(t, { x: y, y: g + 1, w: c - 2, h: l - 2, radius: b }),
                  t.fill())
                : ((t.fillStyle = r.multiKeyBackground),
                  t.fillRect(p, g, c, l),
                  t.strokeRect(p, g, c, l),
                  (t.fillStyle = o.backgroundColor),
                  t.fillRect(y, g + 1, c - 2, l - 2));
        }
        t.fillStyle = this.labelTextColors[i];
    }
    drawBody(t, e, i) {
        let { body: n } = this,
            {
                bodySpacing: r,
                bodyAlign: o,
                displayColors: a,
                boxHeight: l,
                boxWidth: c,
                boxPadding: h,
            } = i,
            u = st(i.bodyFont),
            d = u.lineHeight,
            f = 0,
            m = ye(i.rtl, this.x, this.width),
            g = function (O) {
                e.fillText(O, m.x(t.x + f), t.y + d / 2), (t.y += d + r);
            },
            p = m.textAlign(o),
            y,
            b,
            _,
            w,
            x,
            S,
            k;
        for (
            e.textAlign = o,
                e.textBaseline = "middle",
                e.font = u.string,
                t.x = Hi(this, p, i),
                e.fillStyle = i.bodyColor,
                H(this.beforeBody, g),
                f =
                    a && p !== "right"
                        ? o === "center"
                            ? c / 2 + h
                            : c + 2 + h
                        : 0,
                w = 0,
                S = n.length;
            w < S;
            ++w
        ) {
            for (
                y = n[w],
                    b = this.labelTextColors[w],
                    e.fillStyle = b,
                    H(y.before, g),
                    _ = y.lines,
                    a &&
                        _.length &&
                        (this._drawColorBox(e, t, w, m, i),
                        (d = Math.max(u.lineHeight, l))),
                    x = 0,
                    k = _.length;
                x < k;
                ++x
            )
                g(_[x]), (d = u.lineHeight);
            H(y.after, g);
        }
        (f = 0), (d = u.lineHeight), H(this.afterBody, g), (t.y -= r);
    }
    drawFooter(t, e, i) {
        let n = this.footer,
            r = n.length,
            o,
            a;
        if (r) {
            let l = ye(i.rtl, this.x, this.width);
            for (
                t.x = Hi(this, i.footerAlign, i),
                    t.y += i.footerMarginTop,
                    e.textAlign = l.textAlign(i.footerAlign),
                    e.textBaseline = "middle",
                    o = st(i.footerFont),
                    e.fillStyle = i.footerColor,
                    e.font = o.string,
                    a = 0;
                a < r;
                ++a
            )
                e.fillText(n[a], l.x(t.x), t.y + o.lineHeight / 2),
                    (t.y += o.lineHeight + i.footerSpacing);
        }
    }
    drawBackground(t, e, i, n) {
        let { xAlign: r, yAlign: o } = this,
            { x: a, y: l } = t,
            { width: c, height: h } = i,
            {
                topLeft: u,
                topRight: d,
                bottomLeft: f,
                bottomRight: m,
            } = se(n.cornerRadius);
        (e.fillStyle = n.backgroundColor),
            (e.strokeStyle = n.borderColor),
            (e.lineWidth = n.borderWidth),
            e.beginPath(),
            e.moveTo(a + u, l),
            o === "top" && this.drawCaret(t, e, i, n),
            e.lineTo(a + c - d, l),
            e.quadraticCurveTo(a + c, l, a + c, l + d),
            o === "center" && r === "right" && this.drawCaret(t, e, i, n),
            e.lineTo(a + c, l + h - m),
            e.quadraticCurveTo(a + c, l + h, a + c - m, l + h),
            o === "bottom" && this.drawCaret(t, e, i, n),
            e.lineTo(a + f, l + h),
            e.quadraticCurveTo(a, l + h, a, l + h - f),
            o === "center" && r === "left" && this.drawCaret(t, e, i, n),
            e.lineTo(a, l + u),
            e.quadraticCurveTo(a, l, a + u, l),
            e.closePath(),
            e.fill(),
            n.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
        let e = this.chart,
            i = this.$animations,
            n = i && i.x,
            r = i && i.y;
        if (n || r) {
            let o = Is[t.position].call(
                this,
                this._active,
                this._eventPosition,
            );
            if (!o) return;
            let a = (this._size = Va(this, t)),
                l = Object.assign({}, o, this._size),
                c = Ha(e, t, l),
                h = Ba(t, l, c, e);
            (n._to !== h.x || r._to !== h.y) &&
                ((this.xAlign = c.xAlign),
                (this.yAlign = c.yAlign),
                (this.width = a.width),
                (this.height = a.height),
                (this.caretX = o.x),
                (this.caretY = o.y),
                this._resolveAnimations().update(this, h));
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(t) {
        let e = this.options.setContext(this.getContext()),
            i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(e);
        let n = { width: this.width, height: this.height },
            r = { x: this.x, y: this.y };
        i = Math.abs(i) < 0.001 ? 0 : i;
        let o = at(e.padding),
            a =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
        e.enabled &&
            a &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(r, t, n, e),
            er(t, e.textDirection),
            (r.y += o.top),
            this.drawTitle(r, t, e),
            this.drawBody(r, t, e),
            this.drawFooter(r, t, e),
            sr(t, e.textDirection),
            t.restore());
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(t, e) {
        let i = this._active,
            n = t.map(({ datasetIndex: a, index: l }) => {
                let c = this.chart.getDatasetMeta(a);
                if (!c) throw new Error("Cannot find a dataset at index " + a);
                return { datasetIndex: a, element: c.data[l], index: l };
            }),
            r = !ws(i, n),
            o = this._positionChanged(n, e);
        (r || o) &&
            ((this._active = n),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
    }
    handleEvent(t, e, i = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        let n = this.options,
            r = this._active || [],
            o = this._getActiveElements(t, r, e, i),
            a = this._positionChanged(o, t),
            l = e || !ws(o, r) || a;
        return (
            l &&
                ((this._active = o),
                (n.enabled || n.external) &&
                    ((this._eventPosition = { x: t.x, y: t.y }),
                    this.update(!0, e))),
            l
        );
    }
    _getActiveElements(t, e, i, n) {
        let r = this.options;
        if (t.type === "mouseout") return [];
        if (!n) return e;
        let o = this.chart.getElementsAtEventForMode(t, r.mode, r, i);
        return r.reverse && o.reverse(), o;
    }
    _positionChanged(t, e) {
        let { caretX: i, caretY: n, options: r } = this,
            o = Is[r.position].call(this, t, e);
        return o !== !1 && (i !== o.x || n !== o.y);
    }
};
Rs.positioners = Is;
var bf = {
        id: "tooltip",
        _element: Rs,
        positioners: Is,
        afterInit(s, t, e) {
            e && (s.tooltip = new Rs({ chart: s, options: e }));
        },
        beforeUpdate(s, t, e) {
            s.tooltip && s.tooltip.initialize(e);
        },
        reset(s, t, e) {
            s.tooltip && s.tooltip.initialize(e);
        },
        afterDraw(s) {
            let t = s.tooltip;
            if (t && t._willRender()) {
                let e = { tooltip: t };
                if (s.notifyPlugins("beforeTooltipDraw", e) === !1) return;
                t.draw(s.ctx), s.notifyPlugins("afterTooltipDraw", e);
            }
        },
        afterEvent(s, t) {
            if (s.tooltip) {
                let e = t.replay;
                s.tooltip.handleEvent(t.event, e, t.inChartArea) &&
                    (t.changed = !0);
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: { weight: "bold" },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: "bold" },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (s, t) => t.bodyFont.size,
            boxWidth: (s, t) => t.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: { duration: 400, easing: "easeOutQuart" },
            animations: {
                numbers: {
                    type: "number",
                    properties: [
                        "x",
                        "y",
                        "width",
                        "height",
                        "caretX",
                        "caretY",
                    ],
                },
                opacity: { easing: "linear", duration: 200 },
            },
            callbacks: {
                beforeTitle: At,
                title(s) {
                    if (s.length > 0) {
                        let t = s[0],
                            e = t.chart.data.labels,
                            i = e ? e.length : 0;
                        if (
                            this &&
                            this.options &&
                            this.options.mode === "dataset"
                        )
                            return t.dataset.label || "";
                        if (t.label) return t.label;
                        if (i > 0 && t.dataIndex < i) return e[t.dataIndex];
                    }
                    return "";
                },
                afterTitle: At,
                beforeBody: At,
                beforeLabel: At,
                label(s) {
                    if (this && this.options && this.options.mode === "dataset")
                        return (
                            s.label + ": " + s.formattedValue ||
                            s.formattedValue
                        );
                    let t = s.dataset.label || "";
                    t && (t += ": ");
                    let e = s.formattedValue;
                    return N(e) || (t += e), t;
                },
                labelColor(s) {
                    let e = s.chart
                        .getDatasetMeta(s.datasetIndex)
                        .controller.getStyle(s.dataIndex);
                    return {
                        borderColor: e.borderColor,
                        backgroundColor: e.backgroundColor,
                        borderWidth: e.borderWidth,
                        borderDash: e.borderDash,
                        borderDashOffset: e.borderDashOffset,
                        borderRadius: 0,
                    };
                },
                labelTextColor() {
                    return this.options.bodyColor;
                },
                labelPointStyle(s) {
                    let e = s.chart
                        .getDatasetMeta(s.datasetIndex)
                        .controller.getStyle(s.dataIndex);
                    return { pointStyle: e.pointStyle, rotation: e.rotation };
                },
                afterLabel: At,
                afterBody: At,
                beforeFooter: At,
                footer: At,
                afterFooter: At,
            },
        },
        defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font",
        },
        descriptors: {
            _scriptable: (s) =>
                s !== "filter" && s !== "itemSort" && s !== "external",
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
    },
    xf = Object.freeze({
        __proto__: null,
        Decimation: Nd,
        Filler: nf,
        Legend: af,
        SubTitle: hf,
        Title: cf,
        Tooltip: bf,
    }),
    _f = (s, t, e, i) => (
        typeof t == "string"
            ? ((e = s.push(t) - 1), i.unshift({ index: e, label: t }))
            : isNaN(t) && (e = null),
        e
    );
function wf(s, t, e, i) {
    let n = s.indexOf(t);
    if (n === -1) return _f(s, t, e, i);
    let r = s.lastIndexOf(t);
    return n !== r ? e : n;
}
var Sf = (s, t) => (s === null ? null : it(Math.round(s), 0, t)),
    Je = class extends Yt {
        constructor(t) {
            super(t),
                (this._startValue = void 0),
                (this._valueRange = 0),
                (this._addedLabels = []);
        }
        init(t) {
            let e = this._addedLabels;
            if (e.length) {
                let i = this.getLabels();
                for (let { index: n, label: r } of e)
                    i[n] === r && i.splice(n, 1);
                this._addedLabels = [];
            }
            super.init(t);
        }
        parse(t, e) {
            if (N(t)) return null;
            let i = this.getLabels();
            return (
                (e =
                    isFinite(e) && i[e] === t
                        ? e
                        : wf(i, t, C(e, t), this._addedLabels)),
                Sf(e, i.length - 1)
            );
        }
        determineDataLimits() {
            let { minDefined: t, maxDefined: e } = this.getUserBounds(),
                { min: i, max: n } = this.getMinMax(!0);
            this.options.bounds === "ticks" &&
                (t || (i = 0), e || (n = this.getLabels().length - 1)),
                (this.min = i),
                (this.max = n);
        }
        buildTicks() {
            let t = this.min,
                e = this.max,
                i = this.options.offset,
                n = [],
                r = this.getLabels();
            (r = t === 0 && e === r.length - 1 ? r : r.slice(t, e + 1)),
                (this._valueRange = Math.max(r.length - (i ? 0 : 1), 1)),
                (this._startValue = this.min - (i ? 0.5 : 0));
            for (let o = t; o <= e; o++) n.push({ value: o });
            return n;
        }
        getLabelForValue(t) {
            let e = this.getLabels();
            return t >= 0 && t < e.length ? e[t] : t;
        }
        configure() {
            super.configure(),
                this.isHorizontal() ||
                    (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
            return (
                typeof t != "number" && (t = this.parse(t)),
                t === null
                    ? NaN
                    : this.getPixelForDecimal(
                          (t - this._startValue) / this._valueRange,
                      )
            );
        }
        getPixelForTick(t) {
            let e = this.ticks;
            return t < 0 || t > e.length - 1
                ? null
                : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
            return Math.round(
                this._startValue +
                    this.getDecimalForPixel(t) * this._valueRange,
            );
        }
        getBasePixel() {
            return this.bottom;
        }
    };
Je.id = "category";
Je.defaults = { ticks: { callback: Je.prototype.getLabelForValue } };
function kf(s, t) {
    let e = [],
        {
            bounds: n,
            step: r,
            min: o,
            max: a,
            precision: l,
            count: c,
            maxTicks: h,
            maxDigits: u,
            includeBounds: d,
        } = s,
        f = r || 1,
        m = h - 1,
        { min: g, max: p } = t,
        y = !N(o),
        b = !N(a),
        _ = !N(c),
        w = (p - g) / (u + 1),
        x = In((p - g) / m / f) * f,
        S,
        k,
        O,
        v;
    if (x < 1e-14 && !y && !b) return [{ value: g }, { value: p }];
    (v = Math.ceil(p / x) - Math.floor(g / x)),
        v > m && (x = In((v * x) / m / f) * f),
        N(l) || ((S = Math.pow(10, l)), (x = Math.ceil(x * S) / S)),
        n === "ticks"
            ? ((k = Math.floor(g / x) * x), (O = Math.ceil(p / x) * x))
            : ((k = g), (O = p)),
        y && b && r && Ao((a - o) / r, x / 1e3)
            ? ((v = Math.round(Math.min((a - o) / x, h))),
              (x = (a - o) / v),
              (k = o),
              (O = a))
            : _
              ? ((k = y ? o : k),
                (O = b ? a : O),
                (v = c - 1),
                (x = (O - k) / v))
              : ((v = (O - k) / x),
                Re(v, Math.round(v), x / 1e3)
                    ? (v = Math.round(v))
                    : (v = Math.ceil(v)));
    let F = Math.max(An(x), An(k));
    (S = Math.pow(10, N(l) ? F : l)),
        (k = Math.round(k * S) / S),
        (O = Math.round(O * S) / S);
    let W = 0;
    for (
        y &&
        (d && k !== o
            ? (e.push({ value: o }),
              k < o && W++,
              Re(Math.round((k + W * x) * S) / S, o, Ua(o, w, s)) && W++)
            : k < o && W++);
        W < v;
        ++W
    )
        e.push({ value: Math.round((k + W * x) * S) / S });
    return (
        b && d && O !== a
            ? e.length && Re(e[e.length - 1].value, a, Ua(a, w, s))
                ? (e[e.length - 1].value = a)
                : e.push({ value: a })
            : (!b || O === a) && e.push({ value: O }),
        e
    );
}
function Ua(s, t, { horizontal: e, minRotation: i }) {
    let n = wt(i),
        r = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
        o = 0.75 * t * ("" + s).length;
    return Math.min(t / r, o);
}
var Qe = class extends Yt {
        constructor(t) {
            super(t),
                (this.start = void 0),
                (this.end = void 0),
                (this._startValue = void 0),
                (this._endValue = void 0),
                (this._valueRange = 0);
        }
        parse(t, e) {
            return N(t) ||
                ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
                ? null
                : +t;
        }
        handleTickRangeOptions() {
            let { beginAtZero: t } = this.options,
                { minDefined: e, maxDefined: i } = this.getUserBounds(),
                { min: n, max: r } = this,
                o = (l) => (n = e ? n : l),
                a = (l) => (r = i ? r : l);
            if (t) {
                let l = Tt(n),
                    c = Tt(r);
                l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0);
            }
            if (n === r) {
                let l = 1;
                (r >= Number.MAX_SAFE_INTEGER ||
                    n <= Number.MIN_SAFE_INTEGER) &&
                    (l = Math.abs(r * 0.05)),
                    a(r + l),
                    t || o(n - l);
            }
            (this.min = n), (this.max = r);
        }
        getTickLimit() {
            let t = this.options.ticks,
                { maxTicksLimit: e, stepSize: i } = t,
                n;
            return (
                i
                    ? ((n =
                          Math.ceil(this.max / i) -
                          Math.floor(this.min / i) +
                          1),
                      n > 1e3 &&
                          (console.warn(
                              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`,
                          ),
                          (n = 1e3)))
                    : ((n = this.computeTickLimit()), (e = e || 11)),
                e && (n = Math.min(e, n)),
                n
            );
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
            let t = this.options,
                e = t.ticks,
                i = this.getTickLimit();
            i = Math.max(2, i);
            let n = {
                    maxTicks: i,
                    bounds: t.bounds,
                    min: t.min,
                    max: t.max,
                    precision: e.precision,
                    step: e.stepSize,
                    count: e.count,
                    maxDigits: this._maxDigits(),
                    horizontal: this.isHorizontal(),
                    minRotation: e.minRotation || 0,
                    includeBounds: e.includeBounds !== !1,
                },
                r = this._range || this,
                o = kf(n, r);
            return (
                t.bounds === "ticks" && Fn(o, this, "value"),
                t.reverse
                    ? (o.reverse(),
                      (this.start = this.max),
                      (this.end = this.min))
                    : ((this.start = this.min), (this.end = this.max)),
                o
            );
        }
        configure() {
            let t = this.ticks,
                e = this.min,
                i = this.max;
            if ((super.configure(), this.options.offset && t.length)) {
                let n = (i - e) / Math.max(t.length - 1, 1) / 2;
                (e -= n), (i += n);
            }
            (this._startValue = e),
                (this._endValue = i),
                (this._valueRange = i - e);
        }
        getLabelForValue(t) {
            return Ve(t, this.chart.options.locale, this.options.ticks.format);
        }
    },
    Ns = class extends Qe {
        determineDataLimits() {
            let { min: t, max: e } = this.getMinMax(!0);
            (this.min = K(t) ? t : 0),
                (this.max = K(e) ? e : 1),
                this.handleTickRangeOptions();
        }
        computeTickLimit() {
            let t = this.isHorizontal(),
                e = t ? this.width : this.height,
                i = wt(this.options.ticks.minRotation),
                n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
                r = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, r.lineHeight / n));
        }
        getPixelForValue(t) {
            return t === null
                ? NaN
                : this.getPixelForDecimal(
                      (t - this._startValue) / this._valueRange,
                  );
        }
        getValueForPixel(t) {
            return (
                this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
        }
    };
Ns.id = "linear";
Ns.defaults = { ticks: { callback: Xi.formatters.numeric } };
function Ya(s) {
    return s / Math.pow(10, Math.floor(gt(s))) === 1;
}
function Mf(s, t) {
    let e = Math.floor(gt(t.max)),
        i = Math.ceil(t.max / Math.pow(10, e)),
        n = [],
        r = mt(s.min, Math.pow(10, Math.floor(gt(t.min)))),
        o = Math.floor(gt(r)),
        a = Math.floor(r / Math.pow(10, o)),
        l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
    do
        n.push({ value: r, major: Ya(r) }),
            ++a,
            a === 10 && ((a = 1), ++o, (l = o >= 0 ? 1 : l)),
            (r = Math.round(a * Math.pow(10, o) * l) / l);
    while (o < e || (o === e && a < i));
    let c = mt(s.max, r);
    return n.push({ value: c, major: Ya(r) }), n;
}
var Ws = class extends Yt {
    constructor(t) {
        super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
    }
    parse(t, e) {
        let i = Qe.prototype.parse.apply(this, [t, e]);
        if (i === 0) {
            this._zero = !0;
            return;
        }
        return K(i) && i > 0 ? i : null;
    }
    determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(!0);
        (this.min = K(t) ? Math.max(0, t) : null),
            (this.max = K(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        let { minDefined: t, maxDefined: e } = this.getUserBounds(),
            i = this.min,
            n = this.max,
            r = (l) => (i = t ? i : l),
            o = (l) => (n = e ? n : l),
            a = (l, c) => Math.pow(10, Math.floor(gt(l)) + c);
        i === n && (i <= 0 ? (r(1), o(10)) : (r(a(i, -1)), o(a(n, 1)))),
            i <= 0 && r(a(n, -1)),
            n <= 0 && o(a(i, 1)),
            this._zero &&
                this.min !== this._suggestedMin &&
                i === a(this.min, 0) &&
                r(a(i, -1)),
            (this.min = i),
            (this.max = n);
    }
    buildTicks() {
        let t = this.options,
            e = { min: this._userMin, max: this._userMax },
            i = Mf(e, this);
        return (
            t.bounds === "ticks" && Fn(i, this, "value"),
            t.reverse
                ? (i.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            i
        );
    }
    getLabelForValue(t) {
        return t === void 0
            ? "0"
            : Ve(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        let t = this.min;
        super.configure(),
            (this._startValue = gt(t)),
            (this._valueRange = gt(this.max) - gt(t));
    }
    getPixelForValue(t) {
        return (
            (t === void 0 || t === 0) && (t = this.min),
            t === null || isNaN(t)
                ? NaN
                : this.getPixelForDecimal(
                      t === this.min
                          ? 0
                          : (gt(t) - this._startValue) / this._valueRange,
                  )
        );
    }
    getValueForPixel(t) {
        let e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
    }
};
Ws.id = "logarithmic";
Ws.defaults = {
    ticks: { callback: Xi.formatters.logarithmic, major: { enabled: !0 } },
};
function vr(s) {
    let t = s.ticks;
    if (t.display && s.display) {
        let e = at(t.backdropPadding);
        return C(t.font && t.font.size, L.font.size) + e.height;
    }
    return 0;
}
function Tf(s, t, e) {
    return (
        (e = $(e) ? e : [e]),
        { w: Yo(s, t.string, e), h: e.length * t.lineHeight }
    );
}
function Za(s, t, e, i, n) {
    return s === i || s === n
        ? { start: t - e / 2, end: t + e / 2 }
        : s < i || s > n
          ? { start: t - e, end: t }
          : { start: t, end: t + e };
}
function vf(s) {
    let t = {
            l: s.left + s._padding.left,
            r: s.right - s._padding.right,
            t: s.top + s._padding.top,
            b: s.bottom - s._padding.bottom,
        },
        e = Object.assign({}, t),
        i = [],
        n = [],
        r = s._pointLabels.length,
        o = s.options.pointLabels,
        a = o.centerPointLabels ? Y / r : 0;
    for (let l = 0; l < r; l++) {
        let c = o.setContext(s.getPointLabelContext(l));
        n[l] = c.padding;
        let h = s.getPointPosition(l, s.drawingArea + n[l], a),
            u = st(c.font),
            d = Tf(s.ctx, u, s._pointLabels[l]);
        i[l] = d;
        let f = ht(s.getIndexAngle(l) + a),
            m = Math.round(Di(f)),
            g = Za(m, h.x, d.w, 0, 180),
            p = Za(m, h.y, d.h, 90, 270);
        Of(e, t, f, g, p);
    }
    s.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
        (s._pointLabelItems = Df(s, i, n));
}
function Of(s, t, e, i, n) {
    let r = Math.abs(Math.sin(e)),
        o = Math.abs(Math.cos(e)),
        a = 0,
        l = 0;
    i.start < t.l
        ? ((a = (t.l - i.start) / r), (s.l = Math.min(s.l, t.l - a)))
        : i.end > t.r &&
          ((a = (i.end - t.r) / r), (s.r = Math.max(s.r, t.r + a))),
        n.start < t.t
            ? ((l = (t.t - n.start) / o), (s.t = Math.min(s.t, t.t - l)))
            : n.end > t.b &&
              ((l = (n.end - t.b) / o), (s.b = Math.max(s.b, t.b + l)));
}
function Df(s, t, e) {
    let i = [],
        n = s._pointLabels.length,
        r = s.options,
        o = vr(r) / 2,
        a = s.drawingArea,
        l = r.pointLabels.centerPointLabels ? Y / n : 0;
    for (let c = 0; c < n; c++) {
        let h = s.getPointPosition(c, a + o + e[c], l),
            u = Math.round(Di(ht(h.angle + Z))),
            d = t[c],
            f = If(h.y, d.h, u),
            m = Ef(u),
            g = Cf(h.x, d.w, m);
        i.push({
            x: h.x,
            y: f,
            textAlign: m,
            left: g,
            top: f,
            right: g + d.w,
            bottom: f + d.h,
        });
    }
    return i;
}
function Ef(s) {
    return s === 0 || s === 180 ? "center" : s < 180 ? "left" : "right";
}
function Cf(s, t, e) {
    return e === "right" ? (s -= t) : e === "center" && (s -= t / 2), s;
}
function If(s, t, e) {
    return (
        e === 90 || e === 270 ? (s -= t / 2) : (e > 270 || e < 90) && (s -= t),
        s
    );
}
function Ff(s, t) {
    let {
        ctx: e,
        options: { pointLabels: i },
    } = s;
    for (let n = t - 1; n >= 0; n--) {
        let r = i.setContext(s.getPointLabelContext(n)),
            o = st(r.font),
            {
                x: a,
                y: l,
                textAlign: c,
                left: h,
                top: u,
                right: d,
                bottom: f,
            } = s._pointLabelItems[n],
            { backdropColor: m } = r;
        if (!N(m)) {
            let g = se(r.borderRadius),
                p = at(r.backdropPadding);
            e.fillStyle = m;
            let y = h - p.left,
                b = u - p.top,
                _ = d - h + p.width,
                w = f - u + p.height;
            Object.values(g).some((x) => x !== 0)
                ? (e.beginPath(),
                  We(e, { x: y, y: b, w: _, h: w, radius: g }),
                  e.fill())
                : e.fillRect(y, b, _, w);
        }
        ee(e, s._pointLabels[n], a, l + o.lineHeight / 2, o, {
            color: r.color,
            textAlign: c,
            textBaseline: "middle",
        });
    }
}
function pl(s, t, e, i) {
    let { ctx: n } = s;
    if (e) n.arc(s.xCenter, s.yCenter, t, 0, B);
    else {
        let r = s.getPointPosition(0, t);
        n.moveTo(r.x, r.y);
        for (let o = 1; o < i; o++)
            (r = s.getPointPosition(o, t)), n.lineTo(r.x, r.y);
    }
}
function Af(s, t, e, i) {
    let n = s.ctx,
        r = t.circular,
        { color: o, lineWidth: a } = t;
    (!r && !i) ||
        !o ||
        !a ||
        e < 0 ||
        (n.save(),
        (n.strokeStyle = o),
        (n.lineWidth = a),
        n.setLineDash(t.borderDash),
        (n.lineDashOffset = t.borderDashOffset),
        n.beginPath(),
        pl(s, e, r, i),
        n.closePath(),
        n.stroke(),
        n.restore());
}
function Lf(s, t, e) {
    return $t(s, { label: e, index: t, type: "pointLabel" });
}
var _e = class extends Qe {
    constructor(t) {
        super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
    }
    setDimensions() {
        let t = (this._padding = at(vr(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            i = (this.height = this.maxHeight - t.height);
        (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, i) / 2));
    }
    determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(!1);
        (this.min = K(t) && !isNaN(t) ? t : 0),
            (this.max = K(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / vr(this.options));
    }
    generateTickLabels(t) {
        Qe.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
                .map((e, i) => {
                    let n = j(this.options.pointLabels.callback, [e, i], this);
                    return n || n === 0 ? n : "";
                })
                .filter((e, i) => this.chart.getDataVisibility(i)));
    }
    fit() {
        let t = this.options;
        t.display && t.pointLabels.display
            ? vf(this)
            : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, i, n) {
        (this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((i - n) / 2)),
            (this.drawingArea -= Math.min(
                this.drawingArea / 2,
                Math.max(t, e, i, n),
            ));
    }
    getIndexAngle(t) {
        let e = B / (this._pointLabels.length || 1),
            i = this.options.startAngle || 0;
        return ht(t * e + wt(i));
    }
    getDistanceFromCenterForValue(t) {
        if (N(t)) return NaN;
        let e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
        if (N(t)) return NaN;
        let e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
        let e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
            let i = e[t];
            return Lf(this.getContext(), t, i);
        }
    }
    getPointPosition(t, e, i = 0) {
        let n = this.getIndexAngle(t) - Z + i;
        return {
            x: Math.cos(n) * e + this.xCenter,
            y: Math.sin(n) * e + this.yCenter,
            angle: n,
        };
    }
    getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
        let { left: e, top: i, right: n, bottom: r } = this._pointLabelItems[t];
        return { left: e, top: i, right: n, bottom: r };
    }
    drawBackground() {
        let {
            backgroundColor: t,
            grid: { circular: e },
        } = this.options;
        if (t) {
            let i = this.ctx;
            i.save(),
                i.beginPath(),
                pl(
                    this,
                    this.getDistanceFromCenterForValue(this._endValue),
                    e,
                    this._pointLabels.length,
                ),
                i.closePath(),
                (i.fillStyle = t),
                i.fill(),
                i.restore();
        }
    }
    drawGrid() {
        let t = this.ctx,
            e = this.options,
            { angleLines: i, grid: n } = e,
            r = this._pointLabels.length,
            o,
            a,
            l;
        if (
            (e.pointLabels.display && Ff(this, r),
            n.display &&
                this.ticks.forEach((c, h) => {
                    if (h !== 0) {
                        a = this.getDistanceFromCenterForValue(c.value);
                        let u = n.setContext(this.getContext(h - 1));
                        Af(this, u, a, r);
                    }
                }),
            i.display)
        ) {
            for (t.save(), o = r - 1; o >= 0; o--) {
                let c = i.setContext(this.getPointLabelContext(o)),
                    { color: h, lineWidth: u } = c;
                !u ||
                    !h ||
                    ((t.lineWidth = u),
                    (t.strokeStyle = h),
                    t.setLineDash(c.borderDash),
                    (t.lineDashOffset = c.borderDashOffset),
                    (a = this.getDistanceFromCenterForValue(
                        e.ticks.reverse ? this.min : this.max,
                    )),
                    (l = this.getPointPosition(o, a)),
                    t.beginPath(),
                    t.moveTo(this.xCenter, this.yCenter),
                    t.lineTo(l.x, l.y),
                    t.stroke());
            }
            t.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        let t = this.ctx,
            e = this.options,
            i = e.ticks;
        if (!i.display) return;
        let n = this.getIndexAngle(0),
            r,
            o;
        t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(n),
            (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            this.ticks.forEach((a, l) => {
                if (l === 0 && !e.reverse) return;
                let c = i.setContext(this.getContext(l)),
                    h = st(c.font);
                if (
                    ((r = this.getDistanceFromCenterForValue(
                        this.ticks[l].value,
                    )),
                    c.showLabelBackdrop)
                ) {
                    (t.font = h.string),
                        (o = t.measureText(a.label).width),
                        (t.fillStyle = c.backdropColor);
                    let u = at(c.backdropPadding);
                    t.fillRect(
                        -o / 2 - u.left,
                        -r - h.size / 2 - u.top,
                        o + u.width,
                        h.size + u.height,
                    );
                }
                ee(t, a.label, 0, -r, h, { color: c.color });
            }),
            t.restore();
    }
    drawTitle() {}
};
_e.id = "radialLinear";
_e.defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Xi.formatters.numeric },
    pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback(s) {
            return s;
        },
        padding: 5,
        centerPointLabels: !1,
    },
};
_e.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
};
_e.descriptors = { angleLines: { _fallback: "grid" } };
var Ki = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
    },
    ut = Object.keys(Ki);
function Pf(s, t) {
    return s - t;
}
function qa(s, t) {
    if (N(t)) return null;
    let e = s._adapter,
        { parser: i, round: n, isoWeekday: r } = s._parseOpts,
        o = t;
    return (
        typeof i == "function" && (o = i(o)),
        K(o) || (o = typeof i == "string" ? e.parse(o, i) : e.parse(o)),
        o === null
            ? null
            : (n &&
                  (o =
                      n === "week" && (pe(r) || r === !0)
                          ? e.startOf(o, "isoWeek", r)
                          : e.startOf(o, n)),
              +o)
    );
}
function Ga(s, t, e, i) {
    let n = ut.length;
    for (let r = ut.indexOf(s); r < n - 1; ++r) {
        let o = Ki[ut[r]],
            a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
        if (o.common && Math.ceil((e - t) / (a * o.size)) <= i) return ut[r];
    }
    return ut[n - 1];
}
function Rf(s, t, e, i, n) {
    for (let r = ut.length - 1; r >= ut.indexOf(e); r--) {
        let o = ut[r];
        if (Ki[o].common && s._adapter.diff(n, i, o) >= t - 1) return o;
    }
    return ut[e ? ut.indexOf(e) : 0];
}
function Nf(s) {
    for (let t = ut.indexOf(s) + 1, e = ut.length; t < e; ++t)
        if (Ki[ut[t]].common) return ut[t];
}
function Xa(s, t, e) {
    if (!e) s[t] = !0;
    else if (e.length) {
        let { lo: i, hi: n } = Ei(e, t),
            r = e[i] >= t ? e[i] : e[n];
        s[r] = !0;
    }
}
function Wf(s, t, e, i) {
    let n = s._adapter,
        r = +n.startOf(t[0].value, i),
        o = t[t.length - 1].value,
        a,
        l;
    for (a = r; a <= o; a = +n.add(a, 1, i))
        (l = e[a]), l >= 0 && (t[l].major = !0);
    return t;
}
function Ka(s, t, e) {
    let i = [],
        n = {},
        r = t.length,
        o,
        a;
    for (o = 0; o < r; ++o)
        (a = t[o]), (n[a] = o), i.push({ value: a, major: !1 });
    return r === 0 || !e ? i : Wf(s, i, n, e);
}
var we = class extends Yt {
    constructor(t) {
        super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = "day"),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
    }
    init(t, e) {
        let i = t.time || (t.time = {}),
            n = (this._adapter = new Or._date(t.adapters.date));
        n.init(e),
            Pe(i.displayFormats, n.formats()),
            (this._parseOpts = {
                parser: i.parser,
                round: i.round,
                isoWeekday: i.isoWeekday,
            }),
            super.init(t),
            (this._normalized = e.normalized);
    }
    parse(t, e) {
        return t === void 0 ? null : qa(this, t);
    }
    beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
        let t = this.options,
            e = this._adapter,
            i = t.time.unit || "day",
            {
                min: n,
                max: r,
                minDefined: o,
                maxDefined: a,
            } = this.getUserBounds();
        function l(c) {
            !o && !isNaN(c.min) && (n = Math.min(n, c.min)),
                !a && !isNaN(c.max) && (r = Math.max(r, c.max));
        }
        (!o || !a) &&
            (l(this._getLabelBounds()),
            (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
                l(this.getMinMax(!1))),
            (n = K(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i)),
            (r = K(r) && !isNaN(r) ? r : +e.endOf(Date.now(), i) + 1),
            (this.min = Math.min(n, r - 1)),
            (this.max = Math.max(n + 1, r));
    }
    _getLabelBounds() {
        let t = this.getLabelTimestamps(),
            e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return (
            t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
        );
    }
    buildTicks() {
        let t = this.options,
            e = t.time,
            i = t.ticks,
            n =
                i.source === "labels"
                    ? this.getLabelTimestamps()
                    : this._generate();
        t.bounds === "ticks" &&
            n.length &&
            ((this.min = this._userMin || n[0]),
            (this.max = this._userMax || n[n.length - 1]));
        let r = this.min,
            o = this.max,
            a = Ro(n, r, o);
        return (
            (this._unit =
                e.unit ||
                (i.autoSkip
                    ? Ga(
                          e.minUnit,
                          this.min,
                          this.max,
                          this._getLabelCapacity(r),
                      )
                    : Rf(this, a.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
                !i.major.enabled || this._unit === "year"
                    ? void 0
                    : Nf(this._unit)),
            this.initOffsets(n),
            t.reverse && a.reverse(),
            Ka(this, a, this._majorUnit)
        );
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip &&
            this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets(t) {
        let e = 0,
            i = 0,
            n,
            r;
        this.options.offset &&
            t.length &&
            ((n = this.getDecimalForValue(t[0])),
            t.length === 1
                ? (e = 1 - n)
                : (e = (this.getDecimalForValue(t[1]) - n) / 2),
            (r = this.getDecimalForValue(t[t.length - 1])),
            t.length === 1
                ? (i = r)
                : (i = (r - this.getDecimalForValue(t[t.length - 2])) / 2));
        let o = t.length < 3 ? 0.5 : 0.25;
        (e = it(e, 0, o)),
            (i = it(i, 0, o)),
            (this._offsets = { start: e, end: i, factor: 1 / (e + 1 + i) });
    }
    _generate() {
        let t = this._adapter,
            e = this.min,
            i = this.max,
            n = this.options,
            r = n.time,
            o = r.unit || Ga(r.minUnit, e, i, this._getLabelCapacity(e)),
            a = C(r.stepSize, 1),
            l = o === "week" ? r.isoWeekday : !1,
            c = pe(l) || l === !0,
            h = {},
            u = e,
            d,
            f;
        if (
            (c && (u = +t.startOf(u, "isoWeek", l)),
            (u = +t.startOf(u, c ? "day" : o)),
            t.diff(i, e, o) > 1e5 * a)
        )
            throw new Error(
                e +
                    " and " +
                    i +
                    " are too far apart with stepSize of " +
                    a +
                    " " +
                    o,
            );
        let m = n.ticks.source === "data" && this.getDataTimestamps();
        for (d = u, f = 0; d < i; d = +t.add(d, a, o), f++) Xa(h, d, m);
        return (
            (d === i || n.bounds === "ticks" || f === 1) && Xa(h, d, m),
            Object.keys(h)
                .sort((g, p) => g - p)
                .map((g) => +g)
        );
    }
    getLabelForValue(t) {
        let e = this._adapter,
            i = this.options.time;
        return i.tooltipFormat
            ? e.format(t, i.tooltipFormat)
            : e.format(t, i.displayFormats.datetime);
    }
    _tickFormatFunction(t, e, i, n) {
        let r = this.options,
            o = r.time.displayFormats,
            a = this._unit,
            l = this._majorUnit,
            c = a && o[a],
            h = l && o[l],
            u = i[e],
            d = l && h && u && u.major,
            f = this._adapter.format(t, n || (d ? h : c)),
            m = r.ticks.callback;
        return m ? j(m, [f, e, i], this) : f;
    }
    generateTickLabels(t) {
        let e, i, n;
        for (e = 0, i = t.length; e < i; ++e)
            (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
    }
    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
        let e = this._offsets,
            i = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + i) * e.factor);
    }
    getValueForPixel(t) {
        let e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + i * (this.max - this.min);
    }
    _getLabelSize(t) {
        let e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            n = wt(this.isHorizontal() ? e.maxRotation : e.minRotation),
            r = Math.cos(n),
            o = Math.sin(n),
            a = this._resolveTickFontOptions(0).size;
        return { w: i * r + a * o, h: i * o + a * r };
    }
    _getLabelCapacity(t) {
        let e = this.options.time,
            i = e.displayFormats,
            n = i[e.unit] || i.millisecond,
            r = this._tickFormatFunction(
                t,
                0,
                Ka(this, [t], this._majorUnit),
                n,
            ),
            o = this._getLabelSize(r),
            a =
                Math.floor(
                    this.isHorizontal() ? this.width / o.w : this.height / o.h,
                ) - 1;
        return a > 0 ? a : 1;
    }
    getDataTimestamps() {
        let t = this._cache.data || [],
            e,
            i;
        if (t.length) return t;
        let n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length)
            return (this._cache.data =
                n[0].controller.getAllParsedValues(this));
        for (e = 0, i = n.length; e < i; ++e)
            t = t.concat(n[e].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(t));
    }
    getLabelTimestamps() {
        let t = this._cache.labels || [],
            e,
            i;
        if (t.length) return t;
        let n = this.getLabels();
        for (e = 0, i = n.length; e < i; ++e) t.push(qa(this, n[e]));
        return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
        return Rn(t.sort(Pf));
    }
};
we.id = "time";
we.defaults = {
    bounds: "data",
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {},
    },
    ticks: { source: "auto", major: { enabled: !1 } },
};
function Bi(s, t, e) {
    let i = 0,
        n = s.length - 1,
        r,
        o,
        a,
        l;
    e
        ? (t >= s[i].pos &&
              t <= s[n].pos &&
              ({ lo: i, hi: n } = Ft(s, "pos", t)),
          ({ pos: r, time: a } = s[i]),
          ({ pos: o, time: l } = s[n]))
        : (t >= s[i].time &&
              t <= s[n].time &&
              ({ lo: i, hi: n } = Ft(s, "time", t)),
          ({ time: r, pos: a } = s[i]),
          ({ time: o, pos: l } = s[n]));
    let c = o - r;
    return c ? a + ((l - a) * (t - r)) / c : a;
}
var zs = class extends we {
    constructor(t) {
        super(t),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
    }
    initOffsets() {
        let t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t));
        (this._minPos = Bi(e, this.min)),
            (this._tableRange = Bi(e, this.max) - this._minPos),
            super.initOffsets(t);
    }
    buildLookupTable(t) {
        let { min: e, max: i } = this,
            n = [],
            r = [],
            o,
            a,
            l,
            c,
            h;
        for (o = 0, a = t.length; o < a; ++o)
            (c = t[o]), c >= e && c <= i && n.push(c);
        if (n.length < 2)
            return [
                { time: e, pos: 0 },
                { time: i, pos: 1 },
            ];
        for (o = 0, a = n.length; o < a; ++o)
            (h = n[o + 1]),
                (l = n[o - 1]),
                (c = n[o]),
                Math.round((h + l) / 2) !== c &&
                    r.push({ time: c, pos: o / (a - 1) });
        return r;
    }
    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        let e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
        return (
            e.length && i.length
                ? (t = this.normalize(e.concat(i)))
                : (t = e.length ? e : i),
            (t = this._cache.all = t),
            t
        );
    }
    getDecimalForValue(t) {
        return (Bi(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
        let e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
        return Bi(this._table, i * this._tableRange + this._minPos, !0);
    }
};
zs.id = "timeseries";
zs.defaults = we.defaults;
var zf = Object.freeze({
        __proto__: null,
        CategoryScale: Je,
        LinearScale: Ns,
        LogarithmicScale: Ws,
        RadialLinearScale: _e,
        TimeScale: we,
        TimeSeriesScale: zs,
    }),
    yl = [Ou, Ad, xf, zf];
xe.register(...yl);
var Wt = xe;
var Zt = class extends Error {},
    Ji = class extends Zt {
        constructor(t) {
            super(`Invalid DateTime: ${t.toMessage()}`);
        }
    },
    Qi = class extends Zt {
        constructor(t) {
            super(`Invalid Interval: ${t.toMessage()}`);
        }
    },
    tn = class extends Zt {
        constructor(t) {
            super(`Invalid Duration: ${t.toMessage()}`);
        }
    },
    vt = class extends Zt {},
    ts = class extends Zt {
        constructor(t) {
            super(`Invalid unit ${t}`);
        }
    },
    J = class extends Zt {},
    Ot = class extends Zt {
        constructor() {
            super("Zone is an abstract class");
        }
    };
var M = "numeric",
    Dt = "short",
    bt = "long",
    ae = { year: M, month: M, day: M },
    Hs = { year: M, month: Dt, day: M },
    Er = { year: M, month: Dt, day: M, weekday: Dt },
    Bs = { year: M, month: bt, day: M },
    $s = { year: M, month: bt, day: M, weekday: bt },
    js = { hour: M, minute: M },
    Us = { hour: M, minute: M, second: M },
    Ys = { hour: M, minute: M, second: M, timeZoneName: Dt },
    Zs = { hour: M, minute: M, second: M, timeZoneName: bt },
    qs = { hour: M, minute: M, hourCycle: "h23" },
    Gs = { hour: M, minute: M, second: M, hourCycle: "h23" },
    Xs = { hour: M, minute: M, second: M, hourCycle: "h23", timeZoneName: Dt },
    Ks = { hour: M, minute: M, second: M, hourCycle: "h23", timeZoneName: bt },
    Js = { year: M, month: M, day: M, hour: M, minute: M },
    Qs = { year: M, month: M, day: M, hour: M, minute: M, second: M },
    ti = { year: M, month: Dt, day: M, hour: M, minute: M },
    ei = { year: M, month: Dt, day: M, hour: M, minute: M, second: M },
    Cr = { year: M, month: Dt, day: M, weekday: Dt, hour: M, minute: M },
    si = { year: M, month: bt, day: M, hour: M, minute: M, timeZoneName: Dt },
    ii = {
        year: M,
        month: bt,
        day: M,
        hour: M,
        minute: M,
        second: M,
        timeZoneName: Dt,
    },
    ni = {
        year: M,
        month: bt,
        day: M,
        weekday: bt,
        hour: M,
        minute: M,
        timeZoneName: bt,
    },
    ri = {
        year: M,
        month: bt,
        day: M,
        weekday: bt,
        hour: M,
        minute: M,
        second: M,
        timeZoneName: bt,
    };
var dt = class {
    get type() {
        throw new Ot();
    }
    get name() {
        throw new Ot();
    }
    get ianaName() {
        return this.name;
    }
    get isUniversal() {
        throw new Ot();
    }
    offsetName(t, e) {
        throw new Ot();
    }
    formatOffset(t, e) {
        throw new Ot();
    }
    offset(t) {
        throw new Ot();
    }
    equals(t) {
        throw new Ot();
    }
    get isValid() {
        throw new Ot();
    }
};
var Ir = null,
    zt = class extends dt {
        static get instance() {
            return Ir === null && (Ir = new zt()), Ir;
        }
        get type() {
            return "system";
        }
        get name() {
            return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        get isUniversal() {
            return !1;
        }
        offsetName(t, { format: e, locale: i }) {
            return sn(t, e, i);
        }
        formatOffset(t, e) {
            return le(this.offset(t), e);
        }
        offset(t) {
            return -new Date(t).getTimezoneOffset();
        }
        equals(t) {
            return t.type === "system";
        }
        get isValid() {
            return !0;
        }
    };
var rn = {};
function Vf(s) {
    return (
        rn[s] ||
            (rn[s] = new Intl.DateTimeFormat("en-US", {
                hour12: !1,
                timeZone: s,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                era: "short",
            })),
        rn[s]
    );
}
var Hf = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
function Bf(s, t) {
    let e = s.format(t).replace(/\u200E/g, ""),
        i = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),
        [, n, r, o, a, l, c, h] = i;
    return [o, n, r, a, l, c, h];
}
function $f(s, t) {
    let e = s.formatToParts(t),
        i = [];
    for (let n = 0; n < e.length; n++) {
        let { type: r, value: o } = e[n],
            a = Hf[r];
        r === "era" ? (i[a] = o) : D(a) || (i[a] = parseInt(o, 10));
    }
    return i;
}
var nn = {},
    nt = class extends dt {
        static create(t) {
            return nn[t] || (nn[t] = new nt(t)), nn[t];
        }
        static resetCache() {
            (nn = {}), (rn = {});
        }
        static isValidSpecifier(t) {
            return this.isValidZone(t);
        }
        static isValidZone(t) {
            if (!t) return !1;
            try {
                return (
                    new Intl.DateTimeFormat("en-US", { timeZone: t }).format(),
                    !0
                );
            } catch {
                return !1;
            }
        }
        constructor(t) {
            super(), (this.zoneName = t), (this.valid = nt.isValidZone(t));
        }
        get type() {
            return "iana";
        }
        get name() {
            return this.zoneName;
        }
        get isUniversal() {
            return !1;
        }
        offsetName(t, { format: e, locale: i }) {
            return sn(t, e, i, this.name);
        }
        formatOffset(t, e) {
            return le(this.offset(t), e);
        }
        offset(t) {
            let e = new Date(t);
            if (isNaN(e)) return NaN;
            let i = Vf(this.name),
                [n, r, o, a, l, c, h] = i.formatToParts ? $f(i, e) : Bf(i, e);
            a === "BC" && (n = -Math.abs(n) + 1);
            let d = es({
                    year: n,
                    month: r,
                    day: o,
                    hour: l === 24 ? 0 : l,
                    minute: c,
                    second: h,
                    millisecond: 0,
                }),
                f = +e,
                m = f % 1e3;
            return (f -= m >= 0 ? m : 1e3 + m), (d - f) / (60 * 1e3);
        }
        equals(t) {
            return t.type === "iana" && t.name === this.name;
        }
        get isValid() {
            return this.valid;
        }
    };
var bl = {};
function jf(s, t = {}) {
    let e = JSON.stringify([s, t]),
        i = bl[e];
    return i || ((i = new Intl.ListFormat(s, t)), (bl[e] = i)), i;
}
var Fr = {};
function Ar(s, t = {}) {
    let e = JSON.stringify([s, t]),
        i = Fr[e];
    return i || ((i = new Intl.DateTimeFormat(s, t)), (Fr[e] = i)), i;
}
var Lr = {};
function Uf(s, t = {}) {
    let e = JSON.stringify([s, t]),
        i = Lr[e];
    return i || ((i = new Intl.NumberFormat(s, t)), (Lr[e] = i)), i;
}
var Pr = {};
function Yf(s, t = {}) {
    let { base: e, ...i } = t,
        n = JSON.stringify([s, i]),
        r = Pr[n];
    return r || ((r = new Intl.RelativeTimeFormat(s, t)), (Pr[n] = r)), r;
}
var oi = null;
function Zf() {
    return (
        oi || ((oi = new Intl.DateTimeFormat().resolvedOptions().locale), oi)
    );
}
var xl = {};
function qf(s) {
    let t = xl[s];
    if (!t) {
        let e = new Intl.Locale(s);
        (t = "getWeekInfo" in e ? e.getWeekInfo() : e.weekInfo), (xl[s] = t);
    }
    return t;
}
function Gf(s) {
    let t = s.indexOf("-x-");
    t !== -1 && (s = s.substring(0, t));
    let e = s.indexOf("-u-");
    if (e === -1) return [s];
    {
        let i, n;
        try {
            (i = Ar(s).resolvedOptions()), (n = s);
        } catch {
            let l = s.substring(0, e);
            (i = Ar(l).resolvedOptions()), (n = l);
        }
        let { numberingSystem: r, calendar: o } = i;
        return [n, r, o];
    }
}
function Xf(s, t, e) {
    return (
        (e || t) &&
            (s.includes("-u-") || (s += "-u"),
            e && (s += `-ca-${e}`),
            t && (s += `-nu-${t}`)),
        s
    );
}
function Kf(s) {
    let t = [];
    for (let e = 1; e <= 12; e++) {
        let i = T.utc(2009, e, 1);
        t.push(s(i));
    }
    return t;
}
function Jf(s) {
    let t = [];
    for (let e = 1; e <= 7; e++) {
        let i = T.utc(2016, 11, 13 + e);
        t.push(s(i));
    }
    return t;
}
function on(s, t, e, i) {
    let n = s.listingMode();
    return n === "error" ? null : n === "en" ? e(t) : i(t);
}
function Qf(s) {
    return s.numberingSystem && s.numberingSystem !== "latn"
        ? !1
        : s.numberingSystem === "latn" ||
              !s.locale ||
              s.locale.startsWith("en") ||
              new Intl.DateTimeFormat(s.intl).resolvedOptions()
                  .numberingSystem === "latn";
}
var Rr = class {
        constructor(t, e, i) {
            (this.padTo = i.padTo || 0), (this.floor = i.floor || !1);
            let { padTo: n, floor: r, ...o } = i;
            if (!e || Object.keys(o).length > 0) {
                let a = { useGrouping: !1, ...i };
                i.padTo > 0 && (a.minimumIntegerDigits = i.padTo),
                    (this.inf = Uf(t, a));
            }
        }
        format(t) {
            if (this.inf) {
                let e = this.floor ? Math.floor(t) : t;
                return this.inf.format(e);
            } else {
                let e = this.floor ? Math.floor(t) : ss(t, 3);
                return q(e, this.padTo);
            }
        }
    },
    Nr = class {
        constructor(t, e, i) {
            (this.opts = i), (this.originalZone = void 0);
            let n;
            if (this.opts.timeZone) this.dt = t;
            else if (t.zone.type === "fixed") {
                let o = -1 * (t.offset / 60),
                    a = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
                t.offset !== 0 && nt.create(a).valid
                    ? ((n = a), (this.dt = t))
                    : ((n = "UTC"),
                      (this.dt =
                          t.offset === 0
                              ? t
                              : t.setZone("UTC").plus({ minutes: t.offset })),
                      (this.originalZone = t.zone));
            } else
                t.zone.type === "system"
                    ? (this.dt = t)
                    : t.zone.type === "iana"
                      ? ((this.dt = t), (n = t.zone.name))
                      : ((n = "UTC"),
                        (this.dt = t
                            .setZone("UTC")
                            .plus({ minutes: t.offset })),
                        (this.originalZone = t.zone));
            let r = { ...this.opts };
            (r.timeZone = r.timeZone || n), (this.dtf = Ar(e, r));
        }
        format() {
            return this.originalZone
                ? this.formatToParts()
                      .map(({ value: t }) => t)
                      .join("")
                : this.dtf.format(this.dt.toJSDate());
        }
        formatToParts() {
            let t = this.dtf.formatToParts(this.dt.toJSDate());
            return this.originalZone
                ? t.map((e) => {
                      if (e.type === "timeZoneName") {
                          let i = this.originalZone.offsetName(this.dt.ts, {
                              locale: this.dt.locale,
                              format: this.opts.timeZoneName,
                          });
                          return { ...e, value: i };
                      } else return e;
                  })
                : t;
        }
        resolvedOptions() {
            return this.dtf.resolvedOptions();
        }
    },
    Wr = class {
        constructor(t, e, i) {
            (this.opts = { style: "long", ...i }),
                !e && an() && (this.rtf = Yf(t, i));
        }
        format(t, e) {
            return this.rtf
                ? this.rtf.format(t, e)
                : _l(e, t, this.opts.numeric, this.opts.style !== "long");
        }
        formatToParts(t, e) {
            return this.rtf ? this.rtf.formatToParts(t, e) : [];
        }
    },
    tm = { firstDay: 1, minimalDays: 4, weekend: [6, 7] },
    P = class {
        static fromOpts(t) {
            return P.create(
                t.locale,
                t.numberingSystem,
                t.outputCalendar,
                t.weekSettings,
                t.defaultToEN,
            );
        }
        static create(t, e, i, n, r = !1) {
            let o = t || z.defaultLocale,
                a = o || (r ? "en-US" : Zf()),
                l = e || z.defaultNumberingSystem,
                c = i || z.defaultOutputCalendar,
                h = ai(n) || z.defaultWeekSettings;
            return new P(a, l, c, h, o);
        }
        static resetCache() {
            (oi = null), (Fr = {}), (Lr = {}), (Pr = {});
        }
        static fromObject({
            locale: t,
            numberingSystem: e,
            outputCalendar: i,
            weekSettings: n,
        } = {}) {
            return P.create(t, e, i, n);
        }
        constructor(t, e, i, n, r) {
            let [o, a, l] = Gf(t);
            (this.locale = o),
                (this.numberingSystem = e || a || null),
                (this.outputCalendar = i || l || null),
                (this.weekSettings = n),
                (this.intl = Xf(
                    this.locale,
                    this.numberingSystem,
                    this.outputCalendar,
                )),
                (this.weekdaysCache = { format: {}, standalone: {} }),
                (this.monthsCache = { format: {}, standalone: {} }),
                (this.meridiemCache = null),
                (this.eraCache = {}),
                (this.specifiedLocale = r),
                (this.fastNumbersCached = null);
        }
        get fastNumbers() {
            return (
                this.fastNumbersCached == null &&
                    (this.fastNumbersCached = Qf(this)),
                this.fastNumbersCached
            );
        }
        listingMode() {
            let t = this.isEnglish(),
                e =
                    (this.numberingSystem === null ||
                        this.numberingSystem === "latn") &&
                    (this.outputCalendar === null ||
                        this.outputCalendar === "gregory");
            return t && e ? "en" : "intl";
        }
        clone(t) {
            return !t || Object.getOwnPropertyNames(t).length === 0
                ? this
                : P.create(
                      t.locale || this.specifiedLocale,
                      t.numberingSystem || this.numberingSystem,
                      t.outputCalendar || this.outputCalendar,
                      ai(t.weekSettings) || this.weekSettings,
                      t.defaultToEN || !1,
                  );
        }
        redefaultToEN(t = {}) {
            return this.clone({ ...t, defaultToEN: !0 });
        }
        redefaultToSystem(t = {}) {
            return this.clone({ ...t, defaultToEN: !1 });
        }
        months(t, e = !1) {
            return on(this, t, zr, () => {
                let i = e ? { month: t, day: "numeric" } : { month: t },
                    n = e ? "format" : "standalone";
                return (
                    this.monthsCache[n][t] ||
                        (this.monthsCache[n][t] = Kf((r) =>
                            this.extract(r, i, "month"),
                        )),
                    this.monthsCache[n][t]
                );
            });
        }
        weekdays(t, e = !1) {
            return on(this, t, Vr, () => {
                let i = e
                        ? {
                              weekday: t,
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                          }
                        : { weekday: t },
                    n = e ? "format" : "standalone";
                return (
                    this.weekdaysCache[n][t] ||
                        (this.weekdaysCache[n][t] = Jf((r) =>
                            this.extract(r, i, "weekday"),
                        )),
                    this.weekdaysCache[n][t]
                );
            });
        }
        meridiems() {
            return on(
                this,
                void 0,
                () => Hr,
                () => {
                    if (!this.meridiemCache) {
                        let t = { hour: "numeric", hourCycle: "h12" };
                        this.meridiemCache = [
                            T.utc(2016, 11, 13, 9),
                            T.utc(2016, 11, 13, 19),
                        ].map((e) => this.extract(e, t, "dayperiod"));
                    }
                    return this.meridiemCache;
                },
            );
        }
        eras(t) {
            return on(this, t, Br, () => {
                let e = { era: t };
                return (
                    this.eraCache[t] ||
                        (this.eraCache[t] = [
                            T.utc(-40, 1, 1),
                            T.utc(2017, 1, 1),
                        ].map((i) => this.extract(i, e, "era"))),
                    this.eraCache[t]
                );
            });
        }
        extract(t, e, i) {
            let n = this.dtFormatter(t, e),
                r = n.formatToParts(),
                o = r.find((a) => a.type.toLowerCase() === i);
            return o ? o.value : null;
        }
        numberFormatter(t = {}) {
            return new Rr(this.intl, t.forceSimple || this.fastNumbers, t);
        }
        dtFormatter(t, e = {}) {
            return new Nr(t, this.intl, e);
        }
        relFormatter(t = {}) {
            return new Wr(this.intl, this.isEnglish(), t);
        }
        listFormatter(t = {}) {
            return jf(this.intl, t);
        }
        isEnglish() {
            return (
                this.locale === "en" ||
                this.locale.toLowerCase() === "en-us" ||
                new Intl.DateTimeFormat(this.intl)
                    .resolvedOptions()
                    .locale.startsWith("en-us")
            );
        }
        getWeekSettings() {
            return this.weekSettings
                ? this.weekSettings
                : ln()
                  ? qf(this.locale)
                  : tm;
        }
        getStartOfWeek() {
            return this.getWeekSettings().firstDay;
        }
        getMinDaysInFirstWeek() {
            return this.getWeekSettings().minimalDays;
        }
        getWeekendDays() {
            return this.getWeekSettings().weekend;
        }
        equals(t) {
            return (
                this.locale === t.locale &&
                this.numberingSystem === t.numberingSystem &&
                this.outputCalendar === t.outputCalendar
            );
        }
        toString() {
            return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
        }
    };
var jr = null,
    G = class extends dt {
        static get utcInstance() {
            return jr === null && (jr = new G(0)), jr;
        }
        static instance(t) {
            return t === 0 ? G.utcInstance : new G(t);
        }
        static parseSpecifier(t) {
            if (t) {
                let e = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                if (e) return new G(Se(e[1], e[2]));
            }
            return null;
        }
        constructor(t) {
            super(), (this.fixed = t);
        }
        get type() {
            return "fixed";
        }
        get name() {
            return this.fixed === 0 ? "UTC" : `UTC${le(this.fixed, "narrow")}`;
        }
        get ianaName() {
            return this.fixed === 0
                ? "Etc/UTC"
                : `Etc/GMT${le(-this.fixed, "narrow")}`;
        }
        offsetName() {
            return this.name;
        }
        formatOffset(t, e) {
            return le(this.fixed, e);
        }
        get isUniversal() {
            return !0;
        }
        offset() {
            return this.fixed;
        }
        equals(t) {
            return t.type === "fixed" && t.fixed === this.fixed;
        }
        get isValid() {
            return !0;
        }
    };
var is = class extends dt {
    constructor(t) {
        super(), (this.zoneName = t);
    }
    get type() {
        return "invalid";
    }
    get name() {
        return this.zoneName;
    }
    get isUniversal() {
        return !1;
    }
    offsetName() {
        return null;
    }
    formatOffset() {
        return "";
    }
    offset() {
        return NaN;
    }
    equals() {
        return !1;
    }
    get isValid() {
        return !1;
    }
};
function Et(s, t) {
    let e;
    if (D(s) || s === null) return t;
    if (s instanceof dt) return s;
    if (wl(s)) {
        let i = s.toLowerCase();
        return i === "default"
            ? t
            : i === "local" || i === "system"
              ? zt.instance
              : i === "utc" || i === "gmt"
                ? G.utcInstance
                : G.parseSpecifier(i) || nt.create(s);
    } else
        return Ct(s)
            ? G.instance(s)
            : typeof s == "object" &&
                "offset" in s &&
                typeof s.offset == "function"
              ? s
              : new is(s);
}
var Ur = {
        arab: "[\u0660-\u0669]",
        arabext: "[\u06F0-\u06F9]",
        bali: "[\u1B50-\u1B59]",
        beng: "[\u09E6-\u09EF]",
        deva: "[\u0966-\u096F]",
        fullwide: "[\uFF10-\uFF19]",
        gujr: "[\u0AE6-\u0AEF]",
        hanidec:
            "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
        khmr: "[\u17E0-\u17E9]",
        knda: "[\u0CE6-\u0CEF]",
        laoo: "[\u0ED0-\u0ED9]",
        limb: "[\u1946-\u194F]",
        mlym: "[\u0D66-\u0D6F]",
        mong: "[\u1810-\u1819]",
        mymr: "[\u1040-\u1049]",
        orya: "[\u0B66-\u0B6F]",
        tamldec: "[\u0BE6-\u0BEF]",
        telu: "[\u0C66-\u0C6F]",
        thai: "[\u0E50-\u0E59]",
        tibt: "[\u0F20-\u0F29]",
        latn: "\\d",
    },
    Sl = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881],
    },
    em = Ur.hanidec.replace(/[\[|\]]/g, "").split("");
function kl(s) {
    let t = parseInt(s, 10);
    if (isNaN(t)) {
        t = "";
        for (let e = 0; e < s.length; e++) {
            let i = s.charCodeAt(e);
            if (s[e].search(Ur.hanidec) !== -1) t += em.indexOf(s[e]);
            else
                for (let n in Sl) {
                    let [r, o] = Sl[n];
                    i >= r && i <= o && (t += i - r);
                }
        }
        return parseInt(t, 10);
    } else return t;
}
var ns = {};
function Ml() {
    ns = {};
}
function St({ numberingSystem: s }, t = "") {
    let e = s || "latn";
    return (
        ns[e] || (ns[e] = {}),
        ns[e][t] || (ns[e][t] = new RegExp(`${Ur[e]}${t}`)),
        ns[e][t]
    );
}
var Tl = () => Date.now(),
    vl = "system",
    Ol = null,
    Dl = null,
    El = null,
    Cl = 60,
    Il,
    Fl = null,
    z = class {
        static get now() {
            return Tl;
        }
        static set now(t) {
            Tl = t;
        }
        static set defaultZone(t) {
            vl = t;
        }
        static get defaultZone() {
            return Et(vl, zt.instance);
        }
        static get defaultLocale() {
            return Ol;
        }
        static set defaultLocale(t) {
            Ol = t;
        }
        static get defaultNumberingSystem() {
            return Dl;
        }
        static set defaultNumberingSystem(t) {
            Dl = t;
        }
        static get defaultOutputCalendar() {
            return El;
        }
        static set defaultOutputCalendar(t) {
            El = t;
        }
        static get defaultWeekSettings() {
            return Fl;
        }
        static set defaultWeekSettings(t) {
            Fl = ai(t);
        }
        static get twoDigitCutoffYear() {
            return Cl;
        }
        static set twoDigitCutoffYear(t) {
            Cl = t % 100;
        }
        static get throwOnInvalid() {
            return Il;
        }
        static set throwOnInvalid(t) {
            Il = t;
        }
        static resetCaches() {
            P.resetCache(), nt.resetCache(), T.resetCache(), Ml();
        }
    };
var rt = class {
    constructor(t, e) {
        (this.reason = t), (this.explanation = e);
    }
    toMessage() {
        return this.explanation
            ? `${this.reason}: ${this.explanation}`
            : this.reason;
    }
};
var Al = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    Ll = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function kt(s, t) {
    return new rt(
        "unit out of range",
        `you specified ${t} (of type ${typeof t}) as a ${s}, which is invalid`,
    );
}
function cn(s, t, e) {
    let i = new Date(Date.UTC(s, t - 1, e));
    s < 100 && s >= 0 && i.setUTCFullYear(i.getUTCFullYear() - 1900);
    let n = i.getUTCDay();
    return n === 0 ? 7 : n;
}
function Pl(s, t, e) {
    return e + (Me(s) ? Ll : Al)[t - 1];
}
function Rl(s, t) {
    let e = Me(s) ? Ll : Al,
        i = e.findIndex((r) => r < t),
        n = t - e[i];
    return { month: i + 1, day: n };
}
function hn(s, t) {
    return ((s - t + 7) % 7) + 1;
}
function li(s, t = 4, e = 1) {
    let { year: i, month: n, day: r } = s,
        o = Pl(i, n, r),
        a = hn(cn(i, n, r), e),
        l = Math.floor((o - a + 14 - t) / 7),
        c;
    return (
        l < 1
            ? ((c = i - 1), (l = ke(c, t, e)))
            : l > ke(i, t, e)
              ? ((c = i + 1), (l = 1))
              : (c = i),
        { weekYear: c, weekNumber: l, weekday: a, ...hi(s) }
    );
}
function Yr(s, t = 4, e = 1) {
    let { weekYear: i, weekNumber: n, weekday: r } = s,
        o = hn(cn(i, 1, t), e),
        a = ce(i),
        l = n * 7 + r - o - 7 + t,
        c;
    l < 1
        ? ((c = i - 1), (l += ce(c)))
        : l > a
          ? ((c = i + 1), (l -= ce(i)))
          : (c = i);
    let { month: h, day: u } = Rl(c, l);
    return { year: c, month: h, day: u, ...hi(s) };
}
function un(s) {
    let { year: t, month: e, day: i } = s,
        n = Pl(t, e, i);
    return { year: t, ordinal: n, ...hi(s) };
}
function Zr(s) {
    let { year: t, ordinal: e } = s,
        { month: i, day: n } = Rl(t, e);
    return { year: t, month: i, day: n, ...hi(s) };
}
function qr(s, t) {
    if (!D(s.localWeekday) || !D(s.localWeekNumber) || !D(s.localWeekYear)) {
        if (!D(s.weekday) || !D(s.weekNumber) || !D(s.weekYear))
            throw new vt(
                "Cannot mix locale-based week fields with ISO-based week fields",
            );
        return (
            D(s.localWeekday) || (s.weekday = s.localWeekday),
            D(s.localWeekNumber) || (s.weekNumber = s.localWeekNumber),
            D(s.localWeekYear) || (s.weekYear = s.localWeekYear),
            delete s.localWeekday,
            delete s.localWeekNumber,
            delete s.localWeekYear,
            {
                minDaysInFirstWeek: t.getMinDaysInFirstWeek(),
                startOfWeek: t.getStartOfWeek(),
            }
        );
    } else return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Nl(s, t = 4, e = 1) {
    let i = ci(s.weekYear),
        n = xt(s.weekNumber, 1, ke(s.weekYear, t, e)),
        r = xt(s.weekday, 1, 7);
    return i
        ? n
            ? r
                ? !1
                : kt("weekday", s.weekday)
            : kt("week", s.weekNumber)
        : kt("weekYear", s.weekYear);
}
function Wl(s) {
    let t = ci(s.year),
        e = xt(s.ordinal, 1, ce(s.year));
    return t ? (e ? !1 : kt("ordinal", s.ordinal)) : kt("year", s.year);
}
function Gr(s) {
    let t = ci(s.year),
        e = xt(s.month, 1, 12),
        i = xt(s.day, 1, rs(s.year, s.month));
    return t
        ? e
            ? i
                ? !1
                : kt("day", s.day)
            : kt("month", s.month)
        : kt("year", s.year);
}
function Xr(s) {
    let { hour: t, minute: e, second: i, millisecond: n } = s,
        r = xt(t, 0, 23) || (t === 24 && e === 0 && i === 0 && n === 0),
        o = xt(e, 0, 59),
        a = xt(i, 0, 59),
        l = xt(n, 0, 999);
    return r
        ? o
            ? a
                ? l
                    ? !1
                    : kt("millisecond", n)
                : kt("second", i)
            : kt("minute", e)
        : kt("hour", t);
}
function D(s) {
    return typeof s > "u";
}
function Ct(s) {
    return typeof s == "number";
}
function ci(s) {
    return typeof s == "number" && s % 1 === 0;
}
function wl(s) {
    return typeof s == "string";
}
function Vl(s) {
    return Object.prototype.toString.call(s) === "[object Date]";
}
function an() {
    try {
        return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
    } catch {
        return !1;
    }
}
function ln() {
    try {
        return (
            typeof Intl < "u" &&
            !!Intl.Locale &&
            ("weekInfo" in Intl.Locale.prototype ||
                "getWeekInfo" in Intl.Locale.prototype)
        );
    } catch {
        return !1;
    }
}
function Hl(s) {
    return Array.isArray(s) ? s : [s];
}
function Kr(s, t, e) {
    if (s.length !== 0)
        return s.reduce((i, n) => {
            let r = [t(n), n];
            return i && e(i[0], r[0]) === i[0] ? i : r;
        }, null)[1];
}
function Bl(s, t) {
    return t.reduce((e, i) => ((e[i] = s[i]), e), {});
}
function he(s, t) {
    return Object.prototype.hasOwnProperty.call(s, t);
}
function ai(s) {
    if (s == null) return null;
    if (typeof s != "object") throw new J("Week settings must be an object");
    if (
        !xt(s.firstDay, 1, 7) ||
        !xt(s.minimalDays, 1, 7) ||
        !Array.isArray(s.weekend) ||
        s.weekend.some((t) => !xt(t, 1, 7))
    )
        throw new J("Invalid week settings");
    return {
        firstDay: s.firstDay,
        minimalDays: s.minimalDays,
        weekend: Array.from(s.weekend),
    };
}
function xt(s, t, e) {
    return ci(s) && s >= t && s <= e;
}
function sm(s, t) {
    return s - t * Math.floor(s / t);
}
function q(s, t = 2) {
    let e = s < 0,
        i;
    return (
        e
            ? (i = "-" + ("" + -s).padStart(t, "0"))
            : (i = ("" + s).padStart(t, "0")),
        i
    );
}
function qt(s) {
    if (!(D(s) || s === null || s === "")) return parseInt(s, 10);
}
function ue(s) {
    if (!(D(s) || s === null || s === "")) return parseFloat(s);
}
function ui(s) {
    if (!(D(s) || s === null || s === "")) {
        let t = parseFloat("0." + s) * 1e3;
        return Math.floor(t);
    }
}
function ss(s, t, e = !1) {
    let i = 10 ** t;
    return (e ? Math.trunc : Math.round)(s * i) / i;
}
function Me(s) {
    return s % 4 === 0 && (s % 100 !== 0 || s % 400 === 0);
}
function ce(s) {
    return Me(s) ? 366 : 365;
}
function rs(s, t) {
    let e = sm(t - 1, 12) + 1,
        i = s + (t - e) / 12;
    return e === 2
        ? Me(i)
            ? 29
            : 28
        : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e - 1];
}
function es(s) {
    let t = Date.UTC(
        s.year,
        s.month - 1,
        s.day,
        s.hour,
        s.minute,
        s.second,
        s.millisecond,
    );
    return (
        s.year < 100 &&
            s.year >= 0 &&
            ((t = new Date(t)), t.setUTCFullYear(s.year, s.month - 1, s.day)),
        +t
    );
}
function zl(s, t, e) {
    return -hn(cn(s, 1, t), e) + t - 1;
}
function ke(s, t = 4, e = 1) {
    let i = zl(s, t, e),
        n = zl(s + 1, t, e);
    return (ce(s) - i + n) / 7;
}
function di(s) {
    return s > 99 ? s : s > z.twoDigitCutoffYear ? 1900 + s : 2e3 + s;
}
function sn(s, t, e, i = null) {
    let n = new Date(s),
        r = {
            hourCycle: "h23",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        };
    i && (r.timeZone = i);
    let o = { timeZoneName: t, ...r },
        a = new Intl.DateTimeFormat(e, o)
            .formatToParts(n)
            .find((l) => l.type.toLowerCase() === "timezonename");
    return a ? a.value : null;
}
function Se(s, t) {
    let e = parseInt(s, 10);
    Number.isNaN(e) && (e = 0);
    let i = parseInt(t, 10) || 0,
        n = e < 0 || Object.is(e, -0) ? -i : i;
    return e * 60 + n;
}
function Jr(s) {
    let t = Number(s);
    if (typeof s == "boolean" || s === "" || Number.isNaN(t))
        throw new J(`Invalid unit value ${s}`);
    return t;
}
function os(s, t) {
    let e = {};
    for (let i in s)
        if (he(s, i)) {
            let n = s[i];
            if (n == null) continue;
            e[t(i)] = Jr(n);
        }
    return e;
}
function le(s, t) {
    let e = Math.trunc(Math.abs(s / 60)),
        i = Math.trunc(Math.abs(s % 60)),
        n = s >= 0 ? "+" : "-";
    switch (t) {
        case "short":
            return `${n}${q(e, 2)}:${q(i, 2)}`;
        case "narrow":
            return `${n}${e}${i > 0 ? `:${i}` : ""}`;
        case "techie":
            return `${n}${q(e, 2)}${q(i, 2)}`;
        default:
            throw new RangeError(
                `Value format ${t} is out of range for property format`,
            );
    }
}
function hi(s) {
    return Bl(s, ["hour", "minute", "second", "millisecond"]);
}
var im = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    Qr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    nm = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function zr(s) {
    switch (s) {
        case "narrow":
            return [...nm];
        case "short":
            return [...Qr];
        case "long":
            return [...im];
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
            ];
        case "2-digit":
            return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
            ];
        default:
            return null;
    }
}
var to = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    eo = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    rm = ["M", "T", "W", "T", "F", "S", "S"];
function Vr(s) {
    switch (s) {
        case "narrow":
            return [...rm];
        case "short":
            return [...eo];
        case "long":
            return [...to];
        case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
        default:
            return null;
    }
}
var Hr = ["AM", "PM"],
    om = ["Before Christ", "Anno Domini"],
    am = ["BC", "AD"],
    lm = ["B", "A"];
function Br(s) {
    switch (s) {
        case "narrow":
            return [...lm];
        case "short":
            return [...am];
        case "long":
            return [...om];
        default:
            return null;
    }
}
function $l(s) {
    return Hr[s.hour < 12 ? 0 : 1];
}
function jl(s, t) {
    return Vr(t)[s.weekday - 1];
}
function Ul(s, t) {
    return zr(t)[s.month - 1];
}
function Yl(s, t) {
    return Br(t)[s.year < 0 ? 0 : 1];
}
function _l(s, t, e = "always", i = !1) {
    let n = {
            years: ["year", "yr."],
            quarters: ["quarter", "qtr."],
            months: ["month", "mo."],
            weeks: ["week", "wk."],
            days: ["day", "day", "days"],
            hours: ["hour", "hr."],
            minutes: ["minute", "min."],
            seconds: ["second", "sec."],
        },
        r = ["hours", "minutes", "seconds"].indexOf(s) === -1;
    if (e === "auto" && r) {
        let u = s === "days";
        switch (t) {
            case 1:
                return u ? "tomorrow" : `next ${n[s][0]}`;
            case -1:
                return u ? "yesterday" : `last ${n[s][0]}`;
            case 0:
                return u ? "today" : `this ${n[s][0]}`;
            default:
        }
    }
    let o = Object.is(t, -0) || t < 0,
        a = Math.abs(t),
        l = a === 1,
        c = n[s],
        h = i ? (l ? c[1] : c[2] || c[1]) : l ? n[s][0] : s;
    return o ? `${a} ${h} ago` : `in ${a} ${h}`;
}
function Zl(s, t) {
    let e = "";
    for (let i of s) i.literal ? (e += i.val) : (e += t(i.val));
    return e;
}
var cm = {
        D: ae,
        DD: Hs,
        DDD: Bs,
        DDDD: $s,
        t: js,
        tt: Us,
        ttt: Ys,
        tttt: Zs,
        T: qs,
        TT: Gs,
        TTT: Xs,
        TTTT: Ks,
        f: Js,
        ff: ti,
        fff: si,
        ffff: ni,
        F: Qs,
        FF: ei,
        FFF: ii,
        FFFF: ri,
    },
    X = class {
        static create(t, e = {}) {
            return new X(t, e);
        }
        static parseFormat(t) {
            let e = null,
                i = "",
                n = !1,
                r = [];
            for (let o = 0; o < t.length; o++) {
                let a = t.charAt(o);
                a === "'"
                    ? (i.length > 0 &&
                          r.push({ literal: n || /^\s+$/.test(i), val: i }),
                      (e = null),
                      (i = ""),
                      (n = !n))
                    : n || a === e
                      ? (i += a)
                      : (i.length > 0 &&
                            r.push({ literal: /^\s+$/.test(i), val: i }),
                        (i = a),
                        (e = a));
            }
            return (
                i.length > 0 &&
                    r.push({ literal: n || /^\s+$/.test(i), val: i }),
                r
            );
        }
        static macroTokenToFormatOpts(t) {
            return cm[t];
        }
        constructor(t, e) {
            (this.opts = e), (this.loc = t), (this.systemLoc = null);
        }
        formatWithSystemDefault(t, e) {
            return (
                this.systemLoc === null &&
                    (this.systemLoc = this.loc.redefaultToSystem()),
                this.systemLoc.dtFormatter(t, { ...this.opts, ...e }).format()
            );
        }
        dtFormatter(t, e = {}) {
            return this.loc.dtFormatter(t, { ...this.opts, ...e });
        }
        formatDateTime(t, e) {
            return this.dtFormatter(t, e).format();
        }
        formatDateTimeParts(t, e) {
            return this.dtFormatter(t, e).formatToParts();
        }
        formatInterval(t, e) {
            return this.dtFormatter(t.start, e).dtf.formatRange(
                t.start.toJSDate(),
                t.end.toJSDate(),
            );
        }
        resolvedOptions(t, e) {
            return this.dtFormatter(t, e).resolvedOptions();
        }
        num(t, e = 0) {
            if (this.opts.forceSimple) return q(t, e);
            let i = { ...this.opts };
            return (
                e > 0 && (i.padTo = e), this.loc.numberFormatter(i).format(t)
            );
        }
        formatDateTimeFromString(t, e) {
            let i = this.loc.listingMode() === "en",
                n =
                    this.loc.outputCalendar &&
                    this.loc.outputCalendar !== "gregory",
                r = (f, m) => this.loc.extract(t, f, m),
                o = (f) =>
                    t.isOffsetFixed && t.offset === 0 && f.allowZ
                        ? "Z"
                        : t.isValid
                          ? t.zone.formatOffset(t.ts, f.format)
                          : "",
                a = () =>
                    i
                        ? $l(t)
                        : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
                l = (f, m) =>
                    i
                        ? Ul(t, f)
                        : r(
                              m ? { month: f } : { month: f, day: "numeric" },
                              "month",
                          ),
                c = (f, m) =>
                    i
                        ? jl(t, f)
                        : r(
                              m
                                  ? { weekday: f }
                                  : {
                                        weekday: f,
                                        month: "long",
                                        day: "numeric",
                                    },
                              "weekday",
                          ),
                h = (f) => {
                    let m = X.macroTokenToFormatOpts(f);
                    return m ? this.formatWithSystemDefault(t, m) : f;
                },
                u = (f) => (i ? Yl(t, f) : r({ era: f }, "era")),
                d = (f) => {
                    switch (f) {
                        case "S":
                            return this.num(t.millisecond);
                        case "u":
                        case "SSS":
                            return this.num(t.millisecond, 3);
                        case "s":
                            return this.num(t.second);
                        case "ss":
                            return this.num(t.second, 2);
                        case "uu":
                            return this.num(Math.floor(t.millisecond / 10), 2);
                        case "uuu":
                            return this.num(Math.floor(t.millisecond / 100));
                        case "m":
                            return this.num(t.minute);
                        case "mm":
                            return this.num(t.minute, 2);
                        case "h":
                            return this.num(
                                t.hour % 12 === 0 ? 12 : t.hour % 12,
                            );
                        case "hh":
                            return this.num(
                                t.hour % 12 === 0 ? 12 : t.hour % 12,
                                2,
                            );
                        case "H":
                            return this.num(t.hour);
                        case "HH":
                            return this.num(t.hour, 2);
                        case "Z":
                            return o({
                                format: "narrow",
                                allowZ: this.opts.allowZ,
                            });
                        case "ZZ":
                            return o({
                                format: "short",
                                allowZ: this.opts.allowZ,
                            });
                        case "ZZZ":
                            return o({
                                format: "techie",
                                allowZ: this.opts.allowZ,
                            });
                        case "ZZZZ":
                            return t.zone.offsetName(t.ts, {
                                format: "short",
                                locale: this.loc.locale,
                            });
                        case "ZZZZZ":
                            return t.zone.offsetName(t.ts, {
                                format: "long",
                                locale: this.loc.locale,
                            });
                        case "z":
                            return t.zoneName;
                        case "a":
                            return a();
                        case "d":
                            return n
                                ? r({ day: "numeric" }, "day")
                                : this.num(t.day);
                        case "dd":
                            return n
                                ? r({ day: "2-digit" }, "day")
                                : this.num(t.day, 2);
                        case "c":
                            return this.num(t.weekday);
                        case "ccc":
                            return c("short", !0);
                        case "cccc":
                            return c("long", !0);
                        case "ccccc":
                            return c("narrow", !0);
                        case "E":
                            return this.num(t.weekday);
                        case "EEE":
                            return c("short", !1);
                        case "EEEE":
                            return c("long", !1);
                        case "EEEEE":
                            return c("narrow", !1);
                        case "L":
                            return n
                                ? r(
                                      { month: "numeric", day: "numeric" },
                                      "month",
                                  )
                                : this.num(t.month);
                        case "LL":
                            return n
                                ? r(
                                      { month: "2-digit", day: "numeric" },
                                      "month",
                                  )
                                : this.num(t.month, 2);
                        case "LLL":
                            return l("short", !0);
                        case "LLLL":
                            return l("long", !0);
                        case "LLLLL":
                            return l("narrow", !0);
                        case "M":
                            return n
                                ? r({ month: "numeric" }, "month")
                                : this.num(t.month);
                        case "MM":
                            return n
                                ? r({ month: "2-digit" }, "month")
                                : this.num(t.month, 2);
                        case "MMM":
                            return l("short", !1);
                        case "MMMM":
                            return l("long", !1);
                        case "MMMMM":
                            return l("narrow", !1);
                        case "y":
                            return n
                                ? r({ year: "numeric" }, "year")
                                : this.num(t.year);
                        case "yy":
                            return n
                                ? r({ year: "2-digit" }, "year")
                                : this.num(t.year.toString().slice(-2), 2);
                        case "yyyy":
                            return n
                                ? r({ year: "numeric" }, "year")
                                : this.num(t.year, 4);
                        case "yyyyyy":
                            return n
                                ? r({ year: "numeric" }, "year")
                                : this.num(t.year, 6);
                        case "G":
                            return u("short");
                        case "GG":
                            return u("long");
                        case "GGGGG":
                            return u("narrow");
                        case "kk":
                            return this.num(t.weekYear.toString().slice(-2), 2);
                        case "kkkk":
                            return this.num(t.weekYear, 4);
                        case "W":
                            return this.num(t.weekNumber);
                        case "WW":
                            return this.num(t.weekNumber, 2);
                        case "n":
                            return this.num(t.localWeekNumber);
                        case "nn":
                            return this.num(t.localWeekNumber, 2);
                        case "ii":
                            return this.num(
                                t.localWeekYear.toString().slice(-2),
                                2,
                            );
                        case "iiii":
                            return this.num(t.localWeekYear, 4);
                        case "o":
                            return this.num(t.ordinal);
                        case "ooo":
                            return this.num(t.ordinal, 3);
                        case "q":
                            return this.num(t.quarter);
                        case "qq":
                            return this.num(t.quarter, 2);
                        case "X":
                            return this.num(Math.floor(t.ts / 1e3));
                        case "x":
                            return this.num(t.ts);
                        default:
                            return h(f);
                    }
                };
            return Zl(X.parseFormat(e), d);
        }
        formatDurationFromString(t, e) {
            let i = (l) => {
                    switch (l[0]) {
                        case "S":
                            return "millisecond";
                        case "s":
                            return "second";
                        case "m":
                            return "minute";
                        case "h":
                            return "hour";
                        case "d":
                            return "day";
                        case "w":
                            return "week";
                        case "M":
                            return "month";
                        case "y":
                            return "year";
                        default:
                            return null;
                    }
                },
                n = (l) => (c) => {
                    let h = i(c);
                    return h ? this.num(l.get(h), c.length) : c;
                },
                r = X.parseFormat(e),
                o = r.reduce(
                    (l, { literal: c, val: h }) => (c ? l : l.concat(h)),
                    [],
                ),
                a = t.shiftTo(...o.map(i).filter((l) => l));
            return Zl(r, n(a));
        }
    };
var Gl =
    /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function ls(...s) {
    let t = s.reduce((e, i) => e + i.source, "");
    return RegExp(`^${t}$`);
}
function cs(...s) {
    return (t) =>
        s
            .reduce(
                ([e, i, n], r) => {
                    let [o, a, l] = r(t, n);
                    return [{ ...e, ...o }, a || i, l];
                },
                [{}, null, 1],
            )
            .slice(0, 2);
}
function hs(s, ...t) {
    if (s == null) return [null, null];
    for (let [e, i] of t) {
        let n = e.exec(s);
        if (n) return i(n);
    }
    return [null, null];
}
function Xl(...s) {
    return (t, e) => {
        let i = {},
            n;
        for (n = 0; n < s.length; n++) i[s[n]] = qt(t[e + n]);
        return [i, null, e + n];
    };
}
var Kl = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    hm = `(?:${Kl.source}?(?:\\[(${Gl.source})\\])?)?`,
    so = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    Jl = RegExp(`${so.source}${hm}`),
    io = RegExp(`(?:T${Jl.source})?`),
    um = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    dm = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    fm = /(\d{4})-?(\d{3})/,
    mm = Xl("weekYear", "weekNumber", "weekDay"),
    gm = Xl("year", "ordinal"),
    pm = /(\d{4})-(\d\d)-(\d\d)/,
    Ql = RegExp(`${so.source} ?(?:${Kl.source}|(${Gl.source}))?`),
    ym = RegExp(`(?: ${Ql.source})?`);
function as(s, t, e) {
    let i = s[t];
    return D(i) ? e : qt(i);
}
function bm(s, t) {
    return [
        { year: as(s, t), month: as(s, t + 1, 1), day: as(s, t + 2, 1) },
        null,
        t + 3,
    ];
}
function us(s, t) {
    return [
        {
            hours: as(s, t, 0),
            minutes: as(s, t + 1, 0),
            seconds: as(s, t + 2, 0),
            milliseconds: ui(s[t + 3]),
        },
        null,
        t + 4,
    ];
}
function fi(s, t) {
    let e = !s[t] && !s[t + 1],
        i = Se(s[t + 1], s[t + 2]),
        n = e ? null : G.instance(i);
    return [{}, n, t + 3];
}
function mi(s, t) {
    let e = s[t] ? nt.create(s[t]) : null;
    return [{}, e, t + 1];
}
var xm = RegExp(`^T?${so.source}$`),
    _m =
        /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function wm(s) {
    let [t, e, i, n, r, o, a, l, c] = s,
        h = t[0] === "-",
        u = l && l[0] === "-",
        d = (f, m = !1) => (f !== void 0 && (m || (f && h)) ? -f : f);
    return [
        {
            years: d(ue(e)),
            months: d(ue(i)),
            weeks: d(ue(n)),
            days: d(ue(r)),
            hours: d(ue(o)),
            minutes: d(ue(a)),
            seconds: d(ue(l), l === "-0"),
            milliseconds: d(ui(c), u),
        },
    ];
}
var Sm = {
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
};
function no(s, t, e, i, n, r, o) {
    let a = {
        year: t.length === 2 ? di(qt(t)) : qt(t),
        month: Qr.indexOf(e) + 1,
        day: qt(i),
        hour: qt(n),
        minute: qt(r),
    };
    return (
        o && (a.second = qt(o)),
        s && (a.weekday = s.length > 3 ? to.indexOf(s) + 1 : eo.indexOf(s) + 1),
        a
    );
}
var km =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Mm(s) {
    let [, t, e, i, n, r, o, a, l, c, h, u] = s,
        d = no(t, n, i, e, r, o, a),
        f;
    return l ? (f = Sm[l]) : c ? (f = 0) : (f = Se(h, u)), [d, new G(f)];
}
function Tm(s) {
    return s
        .replace(/\([^()]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .trim();
}
var vm =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    Om =
        /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    Dm =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function ql(s) {
    let [, t, e, i, n, r, o, a] = s;
    return [no(t, n, i, e, r, o, a), G.utcInstance];
}
function Em(s) {
    let [, t, e, i, n, r, o, a] = s;
    return [no(t, a, e, i, n, r, o), G.utcInstance];
}
var Cm = ls(um, io),
    Im = ls(dm, io),
    Fm = ls(fm, io),
    Am = ls(Jl),
    tc = cs(bm, us, fi, mi),
    Lm = cs(mm, us, fi, mi),
    Pm = cs(gm, us, fi, mi),
    Rm = cs(us, fi, mi);
function ec(s) {
    return hs(s, [Cm, tc], [Im, Lm], [Fm, Pm], [Am, Rm]);
}
function sc(s) {
    return hs(Tm(s), [km, Mm]);
}
function ic(s) {
    return hs(s, [vm, ql], [Om, ql], [Dm, Em]);
}
function nc(s) {
    return hs(s, [_m, wm]);
}
var Nm = cs(us);
function rc(s) {
    return hs(s, [xm, Nm]);
}
var Wm = ls(pm, ym),
    zm = ls(Ql),
    Vm = cs(us, fi, mi);
function oc(s) {
    return hs(s, [Wm, tc], [zm, Vm]);
}
var ac = "Invalid Duration",
    cc = {
        weeks: {
            days: 7,
            hours: 7 * 24,
            minutes: 7 * 24 * 60,
            seconds: 7 * 24 * 60 * 60,
            milliseconds: 7 * 24 * 60 * 60 * 1e3,
        },
        days: {
            hours: 24,
            minutes: 24 * 60,
            seconds: 24 * 60 * 60,
            milliseconds: 24 * 60 * 60 * 1e3,
        },
        hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
        minutes: { seconds: 60, milliseconds: 60 * 1e3 },
        seconds: { milliseconds: 1e3 },
    },
    Hm = {
        years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 365 * 24,
            minutes: 365 * 24 * 60,
            seconds: 365 * 24 * 60 * 60,
            milliseconds: 365 * 24 * 60 * 60 * 1e3,
        },
        quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 91 * 24,
            minutes: 91 * 24 * 60,
            seconds: 91 * 24 * 60 * 60,
            milliseconds: 91 * 24 * 60 * 60 * 1e3,
        },
        months: {
            weeks: 4,
            days: 30,
            hours: 30 * 24,
            minutes: 30 * 24 * 60,
            seconds: 30 * 24 * 60 * 60,
            milliseconds: 30 * 24 * 60 * 60 * 1e3,
        },
        ...cc,
    },
    Mt = 146097 / 400,
    ds = 146097 / 4800,
    Bm = {
        years: {
            quarters: 4,
            months: 12,
            weeks: Mt / 7,
            days: Mt,
            hours: Mt * 24,
            minutes: Mt * 24 * 60,
            seconds: Mt * 24 * 60 * 60,
            milliseconds: Mt * 24 * 60 * 60 * 1e3,
        },
        quarters: {
            months: 3,
            weeks: Mt / 28,
            days: Mt / 4,
            hours: (Mt * 24) / 4,
            minutes: (Mt * 24 * 60) / 4,
            seconds: (Mt * 24 * 60 * 60) / 4,
            milliseconds: (Mt * 24 * 60 * 60 * 1e3) / 4,
        },
        months: {
            weeks: ds / 7,
            days: ds,
            hours: ds * 24,
            minutes: ds * 24 * 60,
            seconds: ds * 24 * 60 * 60,
            milliseconds: ds * 24 * 60 * 60 * 1e3,
        },
        ...cc,
    },
    Te = [
        "years",
        "quarters",
        "months",
        "weeks",
        "days",
        "hours",
        "minutes",
        "seconds",
        "milliseconds",
    ],
    $m = Te.slice(0).reverse();
function de(s, t, e = !1) {
    let i = {
        values: e ? t.values : { ...s.values, ...(t.values || {}) },
        loc: s.loc.clone(t.loc),
        conversionAccuracy: t.conversionAccuracy || s.conversionAccuracy,
        matrix: t.matrix || s.matrix,
    };
    return new I(i);
}
function hc(s, t) {
    let e = t.milliseconds ?? 0;
    for (let i of $m.slice(1)) t[i] && (e += t[i] * s[i].milliseconds);
    return e;
}
function lc(s, t) {
    let e = hc(s, t) < 0 ? -1 : 1;
    Te.reduceRight((i, n) => {
        if (D(t[n])) return i;
        if (i) {
            let r = t[i] * e,
                o = s[n][i],
                a = Math.floor(r / o);
            (t[n] += a * e), (t[i] -= a * o * e);
        }
        return n;
    }, null),
        Te.reduce((i, n) => {
            if (D(t[n])) return i;
            if (i) {
                let r = t[i] % 1;
                (t[i] -= r), (t[n] += r * s[i][n]);
            }
            return n;
        }, null);
}
function jm(s) {
    let t = {};
    for (let [e, i] of Object.entries(s)) i !== 0 && (t[e] = i);
    return t;
}
var I = class {
    constructor(t) {
        let e = t.conversionAccuracy === "longterm" || !1,
            i = e ? Bm : Hm;
        t.matrix && (i = t.matrix),
            (this.values = t.values),
            (this.loc = t.loc || P.create()),
            (this.conversionAccuracy = e ? "longterm" : "casual"),
            (this.invalid = t.invalid || null),
            (this.matrix = i),
            (this.isLuxonDuration = !0);
    }
    static fromMillis(t, e) {
        return I.fromObject({ milliseconds: t }, e);
    }
    static fromObject(t, e = {}) {
        if (t == null || typeof t != "object")
            throw new J(
                `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`,
            );
        return new I({
            values: os(t, I.normalizeUnit),
            loc: P.fromObject(e),
            conversionAccuracy: e.conversionAccuracy,
            matrix: e.matrix,
        });
    }
    static fromDurationLike(t) {
        if (Ct(t)) return I.fromMillis(t);
        if (I.isDuration(t)) return t;
        if (typeof t == "object") return I.fromObject(t);
        throw new J(`Unknown duration argument ${t} of type ${typeof t}`);
    }
    static fromISO(t, e) {
        let [i] = nc(t);
        return i
            ? I.fromObject(i, e)
            : I.invalid(
                  "unparsable",
                  `the input "${t}" can't be parsed as ISO 8601`,
              );
    }
    static fromISOTime(t, e) {
        let [i] = rc(t);
        return i
            ? I.fromObject(i, e)
            : I.invalid(
                  "unparsable",
                  `the input "${t}" can't be parsed as ISO 8601`,
              );
    }
    static invalid(t, e = null) {
        if (!t) throw new J("need to specify a reason the Duration is invalid");
        let i = t instanceof rt ? t : new rt(t, e);
        if (z.throwOnInvalid) throw new tn(i);
        return new I({ invalid: i });
    }
    static normalizeUnit(t) {
        let e = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds",
        }[t && t.toLowerCase()];
        if (!e) throw new ts(t);
        return e;
    }
    static isDuration(t) {
        return (t && t.isLuxonDuration) || !1;
    }
    get locale() {
        return this.isValid ? this.loc.locale : null;
    }
    get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
    }
    toFormat(t, e = {}) {
        let i = { ...e, floor: e.round !== !1 && e.floor !== !1 };
        return this.isValid
            ? X.create(this.loc, i).formatDurationFromString(this, t)
            : ac;
    }
    toHuman(t = {}) {
        if (!this.isValid) return ac;
        let e = Te.map((i) => {
            let n = this.values[i];
            return D(n)
                ? null
                : this.loc
                      .numberFormatter({
                          style: "unit",
                          unitDisplay: "long",
                          ...t,
                          unit: i.slice(0, -1),
                      })
                      .format(n);
        }).filter((i) => i);
        return this.loc
            .listFormatter({
                type: "conjunction",
                style: t.listStyle || "narrow",
                ...t,
            })
            .format(e);
    }
    toObject() {
        return this.isValid ? { ...this.values } : {};
    }
    toISO() {
        if (!this.isValid) return null;
        let t = "P";
        return (
            this.years !== 0 && (t += this.years + "Y"),
            (this.months !== 0 || this.quarters !== 0) &&
                (t += this.months + this.quarters * 3 + "M"),
            this.weeks !== 0 && (t += this.weeks + "W"),
            this.days !== 0 && (t += this.days + "D"),
            (this.hours !== 0 ||
                this.minutes !== 0 ||
                this.seconds !== 0 ||
                this.milliseconds !== 0) &&
                (t += "T"),
            this.hours !== 0 && (t += this.hours + "H"),
            this.minutes !== 0 && (t += this.minutes + "M"),
            (this.seconds !== 0 || this.milliseconds !== 0) &&
                (t += ss(this.seconds + this.milliseconds / 1e3, 3) + "S"),
            t === "P" && (t += "T0S"),
            t
        );
    }
    toISOTime(t = {}) {
        if (!this.isValid) return null;
        let e = this.toMillis();
        return e < 0 || e >= 864e5
            ? null
            : ((t = {
                  suppressMilliseconds: !1,
                  suppressSeconds: !1,
                  includePrefix: !1,
                  format: "extended",
                  ...t,
                  includeOffset: !1,
              }),
              T.fromMillis(e, { zone: "UTC" }).toISOTime(t));
    }
    toJSON() {
        return this.toISO();
    }
    toString() {
        return this.toISO();
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.isValid
            ? `Duration { values: ${JSON.stringify(this.values)} }`
            : `Duration { Invalid, reason: ${this.invalidReason} }`;
    }
    toMillis() {
        return this.isValid ? hc(this.matrix, this.values) : NaN;
    }
    valueOf() {
        return this.toMillis();
    }
    plus(t) {
        if (!this.isValid) return this;
        let e = I.fromDurationLike(t),
            i = {};
        for (let n of Te)
            (he(e.values, n) || he(this.values, n)) &&
                (i[n] = e.get(n) + this.get(n));
        return de(this, { values: i }, !0);
    }
    minus(t) {
        if (!this.isValid) return this;
        let e = I.fromDurationLike(t);
        return this.plus(e.negate());
    }
    mapUnits(t) {
        if (!this.isValid) return this;
        let e = {};
        for (let i of Object.keys(this.values)) e[i] = Jr(t(this.values[i], i));
        return de(this, { values: e }, !0);
    }
    get(t) {
        return this[I.normalizeUnit(t)];
    }
    set(t) {
        if (!this.isValid) return this;
        let e = { ...this.values, ...os(t, I.normalizeUnit) };
        return de(this, { values: e });
    }
    reconfigure({
        locale: t,
        numberingSystem: e,
        conversionAccuracy: i,
        matrix: n,
    } = {}) {
        let o = {
            loc: this.loc.clone({ locale: t, numberingSystem: e }),
            matrix: n,
            conversionAccuracy: i,
        };
        return de(this, o);
    }
    as(t) {
        return this.isValid ? this.shiftTo(t).get(t) : NaN;
    }
    normalize() {
        if (!this.isValid) return this;
        let t = this.toObject();
        return lc(this.matrix, t), de(this, { values: t }, !0);
    }
    rescale() {
        if (!this.isValid) return this;
        let t = jm(this.normalize().shiftToAll().toObject());
        return de(this, { values: t }, !0);
    }
    shiftTo(...t) {
        if (!this.isValid) return this;
        if (t.length === 0) return this;
        t = t.map((o) => I.normalizeUnit(o));
        let e = {},
            i = {},
            n = this.toObject(),
            r;
        for (let o of Te)
            if (t.indexOf(o) >= 0) {
                r = o;
                let a = 0;
                for (let c in i) (a += this.matrix[c][o] * i[c]), (i[c] = 0);
                Ct(n[o]) && (a += n[o]);
                let l = Math.trunc(a);
                (e[o] = l), (i[o] = (a * 1e3 - l * 1e3) / 1e3);
            } else Ct(n[o]) && (i[o] = n[o]);
        for (let o in i)
            i[o] !== 0 && (e[r] += o === r ? i[o] : i[o] / this.matrix[r][o]);
        return lc(this.matrix, e), de(this, { values: e }, !0);
    }
    shiftToAll() {
        return this.isValid
            ? this.shiftTo(
                  "years",
                  "months",
                  "weeks",
                  "days",
                  "hours",
                  "minutes",
                  "seconds",
                  "milliseconds",
              )
            : this;
    }
    negate() {
        if (!this.isValid) return this;
        let t = {};
        for (let e of Object.keys(this.values))
            t[e] = this.values[e] === 0 ? 0 : -this.values[e];
        return de(this, { values: t }, !0);
    }
    get years() {
        return this.isValid ? this.values.years || 0 : NaN;
    }
    get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN;
    }
    get months() {
        return this.isValid ? this.values.months || 0 : NaN;
    }
    get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN;
    }
    get days() {
        return this.isValid ? this.values.days || 0 : NaN;
    }
    get hours() {
        return this.isValid ? this.values.hours || 0 : NaN;
    }
    get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN;
    }
    get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN;
    }
    get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    get isValid() {
        return this.invalid === null;
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    equals(t) {
        if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1;
        function e(i, n) {
            return i === void 0 || i === 0 ? n === void 0 || n === 0 : i === n;
        }
        for (let i of Te) if (!e(this.values[i], t.values[i])) return !1;
        return !0;
    }
};
var fs = "Invalid Interval";
function Um(s, t) {
    return !s || !s.isValid
        ? U.invalid("missing or invalid start")
        : !t || !t.isValid
          ? U.invalid("missing or invalid end")
          : t < s
            ? U.invalid(
                  "end before start",
                  `The end of an interval must be after its start, but you had start=${s.toISO()} and end=${t.toISO()}`,
              )
            : null;
}
var U = class {
    constructor(t) {
        (this.s = t.start),
            (this.e = t.end),
            (this.invalid = t.invalid || null),
            (this.isLuxonInterval = !0);
    }
    static invalid(t, e = null) {
        if (!t) throw new J("need to specify a reason the Interval is invalid");
        let i = t instanceof rt ? t : new rt(t, e);
        if (z.throwOnInvalid) throw new Qi(i);
        return new U({ invalid: i });
    }
    static fromDateTimes(t, e) {
        let i = ms(t),
            n = ms(e),
            r = Um(i, n);
        return r ?? new U({ start: i, end: n });
    }
    static after(t, e) {
        let i = I.fromDurationLike(e),
            n = ms(t);
        return U.fromDateTimes(n, n.plus(i));
    }
    static before(t, e) {
        let i = I.fromDurationLike(e),
            n = ms(t);
        return U.fromDateTimes(n.minus(i), n);
    }
    static fromISO(t, e) {
        let [i, n] = (t || "").split("/", 2);
        if (i && n) {
            let r, o;
            try {
                (r = T.fromISO(i, e)), (o = r.isValid);
            } catch {
                o = !1;
            }
            let a, l;
            try {
                (a = T.fromISO(n, e)), (l = a.isValid);
            } catch {
                l = !1;
            }
            if (o && l) return U.fromDateTimes(r, a);
            if (o) {
                let c = I.fromISO(n, e);
                if (c.isValid) return U.after(r, c);
            } else if (l) {
                let c = I.fromISO(i, e);
                if (c.isValid) return U.before(a, c);
            }
        }
        return U.invalid(
            "unparsable",
            `the input "${t}" can't be parsed as ISO 8601`,
        );
    }
    static isInterval(t) {
        return (t && t.isLuxonInterval) || !1;
    }
    get start() {
        return this.isValid ? this.s : null;
    }
    get end() {
        return this.isValid ? this.e : null;
    }
    get isValid() {
        return this.invalidReason === null;
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    length(t = "milliseconds") {
        return this.isValid ? this.toDuration(t).get(t) : NaN;
    }
    count(t = "milliseconds", e) {
        if (!this.isValid) return NaN;
        let i = this.start.startOf(t, e),
            n;
        return (
            e?.useLocaleWeeks
                ? (n = this.end.reconfigure({ locale: i.locale }))
                : (n = this.end),
            (n = n.startOf(t, e)),
            Math.floor(n.diff(i, t).get(t)) +
                (n.valueOf() !== this.end.valueOf())
        );
    }
    hasSame(t) {
        return this.isValid
            ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t)
            : !1;
    }
    isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
    }
    isAfter(t) {
        return this.isValid ? this.s > t : !1;
    }
    isBefore(t) {
        return this.isValid ? this.e <= t : !1;
    }
    contains(t) {
        return this.isValid ? this.s <= t && this.e > t : !1;
    }
    set({ start: t, end: e } = {}) {
        return this.isValid ? U.fromDateTimes(t || this.s, e || this.e) : this;
    }
    splitAt(...t) {
        if (!this.isValid) return [];
        let e = t
                .map(ms)
                .filter((o) => this.contains(o))
                .sort((o, a) => o.toMillis() - a.toMillis()),
            i = [],
            { s: n } = this,
            r = 0;
        for (; n < this.e; ) {
            let o = e[r] || this.e,
                a = +o > +this.e ? this.e : o;
            i.push(U.fromDateTimes(n, a)), (n = a), (r += 1);
        }
        return i;
    }
    splitBy(t) {
        let e = I.fromDurationLike(t);
        if (!this.isValid || !e.isValid || e.as("milliseconds") === 0)
            return [];
        let { s: i } = this,
            n = 1,
            r,
            o = [];
        for (; i < this.e; ) {
            let a = this.start.plus(e.mapUnits((l) => l * n));
            (r = +a > +this.e ? this.e : a),
                o.push(U.fromDateTimes(i, r)),
                (i = r),
                (n += 1);
        }
        return o;
    }
    divideEqually(t) {
        return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
    }
    overlaps(t) {
        return this.e > t.s && this.s < t.e;
    }
    abutsStart(t) {
        return this.isValid ? +this.e == +t.s : !1;
    }
    abutsEnd(t) {
        return this.isValid ? +t.e == +this.s : !1;
    }
    engulfs(t) {
        return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
    }
    equals(t) {
        return !this.isValid || !t.isValid
            ? !1
            : this.s.equals(t.s) && this.e.equals(t.e);
    }
    intersection(t) {
        if (!this.isValid) return this;
        let e = this.s > t.s ? this.s : t.s,
            i = this.e < t.e ? this.e : t.e;
        return e >= i ? null : U.fromDateTimes(e, i);
    }
    union(t) {
        if (!this.isValid) return this;
        let e = this.s < t.s ? this.s : t.s,
            i = this.e > t.e ? this.e : t.e;
        return U.fromDateTimes(e, i);
    }
    static merge(t) {
        let [e, i] = t
            .sort((n, r) => n.s - r.s)
            .reduce(
                ([n, r], o) =>
                    r
                        ? r.overlaps(o) || r.abutsStart(o)
                            ? [n, r.union(o)]
                            : [n.concat([r]), o]
                        : [n, o],
                [[], null],
            );
        return i && e.push(i), e;
    }
    static xor(t) {
        let e = null,
            i = 0,
            n = [],
            r = t.map((l) => [
                { time: l.s, type: "s" },
                { time: l.e, type: "e" },
            ]),
            o = Array.prototype.concat(...r),
            a = o.sort((l, c) => l.time - c.time);
        for (let l of a)
            (i += l.type === "s" ? 1 : -1),
                i === 1
                    ? (e = l.time)
                    : (e && +e != +l.time && n.push(U.fromDateTimes(e, l.time)),
                      (e = null));
        return U.merge(n);
    }
    difference(...t) {
        return U.xor([this].concat(t))
            .map((e) => this.intersection(e))
            .filter((e) => e && !e.isEmpty());
    }
    toString() {
        return this.isValid
            ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})`
            : fs;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.isValid
            ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`
            : `Interval { Invalid, reason: ${this.invalidReason} }`;
    }
    toLocaleString(t = ae, e = {}) {
        return this.isValid
            ? X.create(this.s.loc.clone(e), t).formatInterval(this)
            : fs;
    }
    toISO(t) {
        return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : fs;
    }
    toISODate() {
        return this.isValid
            ? `${this.s.toISODate()}/${this.e.toISODate()}`
            : fs;
    }
    toISOTime(t) {
        return this.isValid
            ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`
            : fs;
    }
    toFormat(t, { separator: e = " \u2013 " } = {}) {
        return this.isValid
            ? `${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`
            : fs;
    }
    toDuration(t, e) {
        return this.isValid
            ? this.e.diff(this.s, t, e)
            : I.invalid(this.invalidReason);
    }
    mapEndpoints(t) {
        return U.fromDateTimes(t(this.s), t(this.e));
    }
};
var Gt = class {
    static hasDST(t = z.defaultZone) {
        let e = T.now().setZone(t).set({ month: 12 });
        return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset;
    }
    static isValidIANAZone(t) {
        return nt.isValidZone(t);
    }
    static normalizeZone(t) {
        return Et(t, z.defaultZone);
    }
    static getStartOfWeek({ locale: t = null, locObj: e = null } = {}) {
        return (e || P.create(t)).getStartOfWeek();
    }
    static getMinimumDaysInFirstWeek({
        locale: t = null,
        locObj: e = null,
    } = {}) {
        return (e || P.create(t)).getMinDaysInFirstWeek();
    }
    static getWeekendWeekdays({ locale: t = null, locObj: e = null } = {}) {
        return (e || P.create(t)).getWeekendDays().slice();
    }
    static months(
        t = "long",
        {
            locale: e = null,
            numberingSystem: i = null,
            locObj: n = null,
            outputCalendar: r = "gregory",
        } = {},
    ) {
        return (n || P.create(e, i, r)).months(t);
    }
    static monthsFormat(
        t = "long",
        {
            locale: e = null,
            numberingSystem: i = null,
            locObj: n = null,
            outputCalendar: r = "gregory",
        } = {},
    ) {
        return (n || P.create(e, i, r)).months(t, !0);
    }
    static weekdays(
        t = "long",
        { locale: e = null, numberingSystem: i = null, locObj: n = null } = {},
    ) {
        return (n || P.create(e, i, null)).weekdays(t);
    }
    static weekdaysFormat(
        t = "long",
        { locale: e = null, numberingSystem: i = null, locObj: n = null } = {},
    ) {
        return (n || P.create(e, i, null)).weekdays(t, !0);
    }
    static meridiems({ locale: t = null } = {}) {
        return P.create(t).meridiems();
    }
    static eras(t = "short", { locale: e = null } = {}) {
        return P.create(e, null, "gregory").eras(t);
    }
    static features() {
        return { relative: an(), localeWeek: ln() };
    }
};
function uc(s, t) {
    let e = (n) => n.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
        i = e(t) - e(s);
    return Math.floor(I.fromMillis(i).as("days"));
}
function Ym(s, t, e) {
    let i = [
            ["years", (l, c) => c.year - l.year],
            [
                "quarters",
                (l, c) => c.quarter - l.quarter + (c.year - l.year) * 4,
            ],
            ["months", (l, c) => c.month - l.month + (c.year - l.year) * 12],
            [
                "weeks",
                (l, c) => {
                    let h = uc(l, c);
                    return (h - (h % 7)) / 7;
                },
            ],
            ["days", uc],
        ],
        n = {},
        r = s,
        o,
        a;
    for (let [l, c] of i)
        e.indexOf(l) >= 0 &&
            ((o = l),
            (n[l] = c(s, t)),
            (a = r.plus(n)),
            a > t
                ? (n[l]--,
                  (s = r.plus(n)),
                  s > t && ((a = s), n[l]--, (s = r.plus(n))))
                : (s = a));
    return [s, n, a, o];
}
function dc(s, t, e, i) {
    let [n, r, o, a] = Ym(s, t, e),
        l = t - n,
        c = e.filter(
            (u) =>
                ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0,
        );
    c.length === 0 &&
        (o < t && (o = n.plus({ [a]: 1 })),
        o !== n && (r[a] = (r[a] || 0) + l / (o - n)));
    let h = I.fromObject(r, i);
    return c.length > 0
        ? I.fromMillis(l, i)
              .shiftTo(...c)
              .plus(h)
        : h;
}
var Zm = "missing Intl.DateTimeFormat.formatToParts support";
function V(s, t = (e) => e) {
    return { regex: s, deser: ([e]) => t(kl(e)) };
}
var qm = String.fromCharCode(160),
    gc = `[ ${qm}]`,
    pc = new RegExp(gc, "g");
function Gm(s) {
    return s.replace(/\./g, "\\.?").replace(pc, gc);
}
function fc(s) {
    return s.replace(/\./g, "").replace(pc, " ").toLowerCase();
}
function It(s, t) {
    return s === null
        ? null
        : {
              regex: RegExp(s.map(Gm).join("|")),
              deser: ([e]) => s.findIndex((i) => fc(e) === fc(i)) + t,
          };
}
function mc(s, t) {
    return { regex: s, deser: ([, e, i]) => Se(e, i), groups: t };
}
function dn(s) {
    return { regex: s, deser: ([t]) => t };
}
function Xm(s) {
    return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Km(s, t) {
    let e = St(t),
        i = St(t, "{2}"),
        n = St(t, "{3}"),
        r = St(t, "{4}"),
        o = St(t, "{6}"),
        a = St(t, "{1,2}"),
        l = St(t, "{1,3}"),
        c = St(t, "{1,6}"),
        h = St(t, "{1,9}"),
        u = St(t, "{2,4}"),
        d = St(t, "{4,6}"),
        f = (p) => ({
            regex: RegExp(Xm(p.val)),
            deser: ([y]) => y,
            literal: !0,
        }),
        g = ((p) => {
            if (s.literal) return f(p);
            switch (p.val) {
                case "G":
                    return It(t.eras("short"), 0);
                case "GG":
                    return It(t.eras("long"), 0);
                case "y":
                    return V(c);
                case "yy":
                    return V(u, di);
                case "yyyy":
                    return V(r);
                case "yyyyy":
                    return V(d);
                case "yyyyyy":
                    return V(o);
                case "M":
                    return V(a);
                case "MM":
                    return V(i);
                case "MMM":
                    return It(t.months("short", !0), 1);
                case "MMMM":
                    return It(t.months("long", !0), 1);
                case "L":
                    return V(a);
                case "LL":
                    return V(i);
                case "LLL":
                    return It(t.months("short", !1), 1);
                case "LLLL":
                    return It(t.months("long", !1), 1);
                case "d":
                    return V(a);
                case "dd":
                    return V(i);
                case "o":
                    return V(l);
                case "ooo":
                    return V(n);
                case "HH":
                    return V(i);
                case "H":
                    return V(a);
                case "hh":
                    return V(i);
                case "h":
                    return V(a);
                case "mm":
                    return V(i);
                case "m":
                    return V(a);
                case "q":
                    return V(a);
                case "qq":
                    return V(i);
                case "s":
                    return V(a);
                case "ss":
                    return V(i);
                case "S":
                    return V(l);
                case "SSS":
                    return V(n);
                case "u":
                    return dn(h);
                case "uu":
                    return dn(a);
                case "uuu":
                    return V(e);
                case "a":
                    return It(t.meridiems(), 0);
                case "kkkk":
                    return V(r);
                case "kk":
                    return V(u, di);
                case "W":
                    return V(a);
                case "WW":
                    return V(i);
                case "E":
                case "c":
                    return V(e);
                case "EEE":
                    return It(t.weekdays("short", !1), 1);
                case "EEEE":
                    return It(t.weekdays("long", !1), 1);
                case "ccc":
                    return It(t.weekdays("short", !0), 1);
                case "cccc":
                    return It(t.weekdays("long", !0), 1);
                case "Z":
                case "ZZ":
                    return mc(
                        new RegExp(`([+-]${a.source})(?::(${i.source}))?`),
                        2,
                    );
                case "ZZZ":
                    return mc(new RegExp(`([+-]${a.source})(${i.source})?`), 2);
                case "z":
                    return dn(/[a-z_+-/]{1,256}?/i);
                case " ":
                    return dn(/[^\S\n\r]/);
                default:
                    return f(p);
            }
        })(s) || { invalidReason: Zm };
    return (g.token = s), g;
}
var Jm = {
    year: { "2-digit": "yy", numeric: "yyyyy" },
    month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
    day: { numeric: "d", "2-digit": "dd" },
    weekday: { short: "EEE", long: "EEEE" },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: { numeric: "h", "2-digit": "hh" },
    hour24: { numeric: "H", "2-digit": "HH" },
    minute: { numeric: "m", "2-digit": "mm" },
    second: { numeric: "s", "2-digit": "ss" },
    timeZoneName: { long: "ZZZZZ", short: "ZZZ" },
};
function Qm(s, t, e) {
    let { type: i, value: n } = s;
    if (i === "literal") {
        let l = /^\s+$/.test(n);
        return { literal: !l, val: l ? " " : n };
    }
    let r = t[i],
        o = i;
    i === "hour" &&
        (t.hour12 != null
            ? (o = t.hour12 ? "hour12" : "hour24")
            : t.hourCycle != null
              ? t.hourCycle === "h11" || t.hourCycle === "h12"
                  ? (o = "hour12")
                  : (o = "hour24")
              : (o = e.hour12 ? "hour12" : "hour24"));
    let a = Jm[o];
    if ((typeof a == "object" && (a = a[r]), a)) return { literal: !1, val: a };
}
function tg(s) {
    return [
        `^${s.map((e) => e.regex).reduce((e, i) => `${e}(${i.source})`, "")}$`,
        s,
    ];
}
function eg(s, t, e) {
    let i = s.match(t);
    if (i) {
        let n = {},
            r = 1;
        for (let o in e)
            if (he(e, o)) {
                let a = e[o],
                    l = a.groups ? a.groups + 1 : 1;
                !a.literal &&
                    a.token &&
                    (n[a.token.val[0]] = a.deser(i.slice(r, r + l))),
                    (r += l);
            }
        return [i, n];
    } else return [i, {}];
}
function sg(s) {
    let t = (r) => {
            switch (r) {
                case "S":
                    return "millisecond";
                case "s":
                    return "second";
                case "m":
                    return "minute";
                case "h":
                case "H":
                    return "hour";
                case "d":
                    return "day";
                case "o":
                    return "ordinal";
                case "L":
                case "M":
                    return "month";
                case "y":
                    return "year";
                case "E":
                case "c":
                    return "weekday";
                case "W":
                    return "weekNumber";
                case "k":
                    return "weekYear";
                case "q":
                    return "quarter";
                default:
                    return null;
            }
        },
        e = null,
        i;
    return (
        D(s.z) || (e = nt.create(s.z)),
        D(s.Z) || (e || (e = new G(s.Z)), (i = s.Z)),
        D(s.q) || (s.M = (s.q - 1) * 3 + 1),
        D(s.h) ||
            (s.h < 12 && s.a === 1
                ? (s.h += 12)
                : s.h === 12 && s.a === 0 && (s.h = 0)),
        s.G === 0 && s.y && (s.y = -s.y),
        D(s.u) || (s.S = ui(s.u)),
        [
            Object.keys(s).reduce((r, o) => {
                let a = t(o);
                return a && (r[a] = s[o]), r;
            }, {}),
            e,
            i,
        ]
    );
}
var ro = null;
function ig() {
    return ro || (ro = T.fromMillis(1555555555555)), ro;
}
function ng(s, t) {
    if (s.literal) return s;
    let e = X.macroTokenToFormatOpts(s.val),
        i = lo(e, t);
    return i == null || i.includes(void 0) ? s : i;
}
function oo(s, t) {
    return Array.prototype.concat(...s.map((e) => ng(e, t)));
}
var gi = class {
    constructor(t, e) {
        if (
            ((this.locale = t),
            (this.format = e),
            (this.tokens = oo(X.parseFormat(e), t)),
            (this.units = this.tokens.map((i) => Km(i, t))),
            (this.disqualifyingUnit = this.units.find((i) => i.invalidReason)),
            !this.disqualifyingUnit)
        ) {
            let [i, n] = tg(this.units);
            (this.regex = RegExp(i, "i")), (this.handlers = n);
        }
    }
    explainFromTokens(t) {
        if (this.isValid) {
            let [e, i] = eg(t, this.regex, this.handlers),
                [n, r, o] = i ? sg(i) : [null, null, void 0];
            if (he(i, "a") && he(i, "H"))
                throw new vt(
                    "Can't include meridiem when specifying 24-hour format",
                );
            return {
                input: t,
                tokens: this.tokens,
                regex: this.regex,
                rawMatches: e,
                matches: i,
                result: n,
                zone: r,
                specificOffset: o,
            };
        } else
            return {
                input: t,
                tokens: this.tokens,
                invalidReason: this.invalidReason,
            };
    }
    get isValid() {
        return !this.disqualifyingUnit;
    }
    get invalidReason() {
        return this.disqualifyingUnit
            ? this.disqualifyingUnit.invalidReason
            : null;
    }
};
function ao(s, t, e) {
    return new gi(s, e).explainFromTokens(t);
}
function yc(s, t, e) {
    let {
        result: i,
        zone: n,
        specificOffset: r,
        invalidReason: o,
    } = ao(s, t, e);
    return [i, n, r, o];
}
function lo(s, t) {
    if (!s) return null;
    let i = X.create(t, s).dtFormatter(ig()),
        n = i.formatToParts(),
        r = i.resolvedOptions();
    return n.map((o) => Qm(o, s, r));
}
var co = "Invalid DateTime",
    bc = 864e13;
function pi(s) {
    return new rt("unsupported zone", `the zone "${s.name}" is not supported`);
}
function ho(s) {
    return s.weekData === null && (s.weekData = li(s.c)), s.weekData;
}
function uo(s) {
    return (
        s.localWeekData === null &&
            (s.localWeekData = li(
                s.c,
                s.loc.getMinDaysInFirstWeek(),
                s.loc.getStartOfWeek(),
            )),
        s.localWeekData
    );
}
function ve(s, t) {
    let e = {
        ts: s.ts,
        zone: s.zone,
        c: s.c,
        o: s.o,
        loc: s.loc,
        invalid: s.invalid,
    };
    return new T({ ...e, ...t, old: e });
}
function Tc(s, t, e) {
    let i = s - t * 60 * 1e3,
        n = e.offset(i);
    if (t === n) return [i, t];
    i -= (n - t) * 60 * 1e3;
    let r = e.offset(i);
    return n === r ? [i, n] : [s - Math.min(n, r) * 60 * 1e3, Math.max(n, r)];
}
function fn(s, t) {
    s += t * 60 * 1e3;
    let e = new Date(s);
    return {
        year: e.getUTCFullYear(),
        month: e.getUTCMonth() + 1,
        day: e.getUTCDate(),
        hour: e.getUTCHours(),
        minute: e.getUTCMinutes(),
        second: e.getUTCSeconds(),
        millisecond: e.getUTCMilliseconds(),
    };
}
function gn(s, t, e) {
    return Tc(es(s), t, e);
}
function xc(s, t) {
    let e = s.o,
        i = s.c.year + Math.trunc(t.years),
        n = s.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
        r = {
            ...s.c,
            year: i,
            month: n,
            day:
                Math.min(s.c.day, rs(i, n)) +
                Math.trunc(t.days) +
                Math.trunc(t.weeks) * 7,
        },
        o = I.fromObject({
            years: t.years - Math.trunc(t.years),
            quarters: t.quarters - Math.trunc(t.quarters),
            months: t.months - Math.trunc(t.months),
            weeks: t.weeks - Math.trunc(t.weeks),
            days: t.days - Math.trunc(t.days),
            hours: t.hours,
            minutes: t.minutes,
            seconds: t.seconds,
            milliseconds: t.milliseconds,
        }).as("milliseconds"),
        a = es(r),
        [l, c] = Tc(a, e, s.zone);
    return o !== 0 && ((l += o), (c = s.zone.offset(l))), { ts: l, o: c };
}
function gs(s, t, e, i, n, r) {
    let { setZone: o, zone: a } = e;
    if ((s && Object.keys(s).length !== 0) || t) {
        let l = t || a,
            c = T.fromObject(s, { ...e, zone: l, specificOffset: r });
        return o ? c : c.setZone(a);
    } else
        return T.invalid(
            new rt("unparsable", `the input "${n}" can't be parsed as ${i}`),
        );
}
function mn(s, t, e = !0) {
    return s.isValid
        ? X.create(P.create("en-US"), {
              allowZ: e,
              forceSimple: !0,
          }).formatDateTimeFromString(s, t)
        : null;
}
function fo(s, t) {
    let e = s.c.year > 9999 || s.c.year < 0,
        i = "";
    return (
        e && s.c.year >= 0 && (i += "+"),
        (i += q(s.c.year, e ? 6 : 4)),
        t
            ? ((i += "-"), (i += q(s.c.month)), (i += "-"), (i += q(s.c.day)))
            : ((i += q(s.c.month)), (i += q(s.c.day))),
        i
    );
}
function _c(s, t, e, i, n, r) {
    let o = q(s.c.hour);
    return (
        t
            ? ((o += ":"),
              (o += q(s.c.minute)),
              (s.c.millisecond !== 0 || s.c.second !== 0 || !e) && (o += ":"))
            : (o += q(s.c.minute)),
        (s.c.millisecond !== 0 || s.c.second !== 0 || !e) &&
            ((o += q(s.c.second)),
            (s.c.millisecond !== 0 || !i) &&
                ((o += "."), (o += q(s.c.millisecond, 3)))),
        n &&
            (s.isOffsetFixed && s.offset === 0 && !r
                ? (o += "Z")
                : s.o < 0
                  ? ((o += "-"),
                    (o += q(Math.trunc(-s.o / 60))),
                    (o += ":"),
                    (o += q(Math.trunc(-s.o % 60))))
                  : ((o += "+"),
                    (o += q(Math.trunc(s.o / 60))),
                    (o += ":"),
                    (o += q(Math.trunc(s.o % 60))))),
        r && (o += "[" + s.zone.ianaName + "]"),
        o
    );
}
var vc = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
    rg = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
    },
    og = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
    Oc = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    ag = [
        "weekYear",
        "weekNumber",
        "weekday",
        "hour",
        "minute",
        "second",
        "millisecond",
    ],
    lg = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function cg(s) {
    let t = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal",
    }[s.toLowerCase()];
    if (!t) throw new ts(s);
    return t;
}
function wc(s) {
    switch (s.toLowerCase()) {
        case "localweekday":
        case "localweekdays":
            return "localWeekday";
        case "localweeknumber":
        case "localweeknumbers":
            return "localWeekNumber";
        case "localweekyear":
        case "localweekyears":
            return "localWeekYear";
        default:
            return cg(s);
    }
}
function hg(s) {
    return (
        yn[s] || (pn === void 0 && (pn = z.now()), (yn[s] = s.offset(pn))),
        yn[s]
    );
}
function Sc(s, t) {
    let e = Et(t.zone, z.defaultZone);
    if (!e.isValid) return T.invalid(pi(e));
    let i = P.fromObject(t),
        n,
        r;
    if (D(s.year)) n = z.now();
    else {
        for (let l of Oc) D(s[l]) && (s[l] = vc[l]);
        let o = Gr(s) || Xr(s);
        if (o) return T.invalid(o);
        let a = hg(e);
        [n, r] = gn(s, a, e);
    }
    return new T({ ts: n, zone: e, loc: i, o: r });
}
function kc(s, t, e) {
    let i = D(e.round) ? !0 : e.round,
        n = (o, a) => (
            (o = ss(o, i || e.calendary ? 0 : 2, !0)),
            t.loc.clone(e).relFormatter(e).format(o, a)
        ),
        r = (o) =>
            e.calendary
                ? t.hasSame(s, o)
                    ? 0
                    : t.startOf(o).diff(s.startOf(o), o).get(o)
                : t.diff(s, o).get(o);
    if (e.unit) return n(r(e.unit), e.unit);
    for (let o of e.units) {
        let a = r(o);
        if (Math.abs(a) >= 1) return n(a, o);
    }
    return n(s > t ? -0 : 0, e.units[e.units.length - 1]);
}
function Mc(s) {
    let t = {},
        e;
    return (
        s.length > 0 && typeof s[s.length - 1] == "object"
            ? ((t = s[s.length - 1]),
              (e = Array.from(s).slice(0, s.length - 1)))
            : (e = Array.from(s)),
        [t, e]
    );
}
var pn,
    yn = {},
    T = class {
        constructor(t) {
            let e = t.zone || z.defaultZone,
                i =
                    t.invalid ||
                    (Number.isNaN(t.ts) ? new rt("invalid input") : null) ||
                    (e.isValid ? null : pi(e));
            this.ts = D(t.ts) ? z.now() : t.ts;
            let n = null,
                r = null;
            if (!i)
                if (t.old && t.old.ts === this.ts && t.old.zone.equals(e))
                    [n, r] = [t.old.c, t.old.o];
                else {
                    let a = Ct(t.o) && !t.old ? t.o : e.offset(this.ts);
                    (n = fn(this.ts, a)),
                        (i = Number.isNaN(n.year)
                            ? new rt("invalid input")
                            : null),
                        (n = i ? null : n),
                        (r = i ? null : a);
                }
            (this._zone = e),
                (this.loc = t.loc || P.create()),
                (this.invalid = i),
                (this.weekData = null),
                (this.localWeekData = null),
                (this.c = n),
                (this.o = r),
                (this.isLuxonDateTime = !0);
        }
        static now() {
            return new T({});
        }
        static local() {
            let [t, e] = Mc(arguments),
                [i, n, r, o, a, l, c] = e;
            return Sc(
                {
                    year: i,
                    month: n,
                    day: r,
                    hour: o,
                    minute: a,
                    second: l,
                    millisecond: c,
                },
                t,
            );
        }
        static utc() {
            let [t, e] = Mc(arguments),
                [i, n, r, o, a, l, c] = e;
            return (
                (t.zone = G.utcInstance),
                Sc(
                    {
                        year: i,
                        month: n,
                        day: r,
                        hour: o,
                        minute: a,
                        second: l,
                        millisecond: c,
                    },
                    t,
                )
            );
        }
        static fromJSDate(t, e = {}) {
            let i = Vl(t) ? t.valueOf() : NaN;
            if (Number.isNaN(i)) return T.invalid("invalid input");
            let n = Et(e.zone, z.defaultZone);
            return n.isValid
                ? new T({ ts: i, zone: n, loc: P.fromObject(e) })
                : T.invalid(pi(n));
        }
        static fromMillis(t, e = {}) {
            if (Ct(t))
                return t < -bc || t > bc
                    ? T.invalid("Timestamp out of range")
                    : new T({
                          ts: t,
                          zone: Et(e.zone, z.defaultZone),
                          loc: P.fromObject(e),
                      });
            throw new J(
                `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`,
            );
        }
        static fromSeconds(t, e = {}) {
            if (Ct(t))
                return new T({
                    ts: t * 1e3,
                    zone: Et(e.zone, z.defaultZone),
                    loc: P.fromObject(e),
                });
            throw new J("fromSeconds requires a numerical input");
        }
        static fromObject(t, e = {}) {
            t = t || {};
            let i = Et(e.zone, z.defaultZone);
            if (!i.isValid) return T.invalid(pi(i));
            let n = P.fromObject(e),
                r = os(t, wc),
                { minDaysInFirstWeek: o, startOfWeek: a } = qr(r, n),
                l = z.now(),
                c = D(e.specificOffset) ? i.offset(l) : e.specificOffset,
                h = !D(r.ordinal),
                u = !D(r.year),
                d = !D(r.month) || !D(r.day),
                f = u || d,
                m = r.weekYear || r.weekNumber;
            if ((f || h) && m)
                throw new vt(
                    "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
                );
            if (d && h) throw new vt("Can't mix ordinal dates with month/day");
            let g = m || (r.weekday && !f),
                p,
                y,
                b = fn(l, c);
            g
                ? ((p = ag), (y = rg), (b = li(b, o, a)))
                : h
                  ? ((p = lg), (y = og), (b = un(b)))
                  : ((p = Oc), (y = vc));
            let _ = !1;
            for (let F of p) {
                let W = r[F];
                D(W) ? (_ ? (r[F] = y[F]) : (r[F] = b[F])) : (_ = !0);
            }
            let w = g ? Nl(r, o, a) : h ? Wl(r) : Gr(r),
                x = w || Xr(r);
            if (x) return T.invalid(x);
            let S = g ? Yr(r, o, a) : h ? Zr(r) : r,
                [k, O] = gn(S, c, i),
                v = new T({ ts: k, zone: i, o: O, loc: n });
            return r.weekday && f && t.weekday !== v.weekday
                ? T.invalid(
                      "mismatched weekday",
                      `you can't specify both a weekday of ${r.weekday} and a date of ${v.toISO()}`,
                  )
                : v.isValid
                  ? v
                  : T.invalid(v.invalid);
        }
        static fromISO(t, e = {}) {
            let [i, n] = ec(t);
            return gs(i, n, e, "ISO 8601", t);
        }
        static fromRFC2822(t, e = {}) {
            let [i, n] = sc(t);
            return gs(i, n, e, "RFC 2822", t);
        }
        static fromHTTP(t, e = {}) {
            let [i, n] = ic(t);
            return gs(i, n, e, "HTTP", e);
        }
        static fromFormat(t, e, i = {}) {
            if (D(t) || D(e))
                throw new J("fromFormat requires an input string and a format");
            let { locale: n = null, numberingSystem: r = null } = i,
                o = P.fromOpts({
                    locale: n,
                    numberingSystem: r,
                    defaultToEN: !0,
                }),
                [a, l, c, h] = yc(o, t, e);
            return h ? T.invalid(h) : gs(a, l, i, `format ${e}`, t, c);
        }
        static fromString(t, e, i = {}) {
            return T.fromFormat(t, e, i);
        }
        static fromSQL(t, e = {}) {
            let [i, n] = oc(t);
            return gs(i, n, e, "SQL", t);
        }
        static invalid(t, e = null) {
            if (!t)
                throw new J("need to specify a reason the DateTime is invalid");
            let i = t instanceof rt ? t : new rt(t, e);
            if (z.throwOnInvalid) throw new Ji(i);
            return new T({ invalid: i });
        }
        static isDateTime(t) {
            return (t && t.isLuxonDateTime) || !1;
        }
        static parseFormatForOpts(t, e = {}) {
            let i = lo(t, P.fromObject(e));
            return i ? i.map((n) => (n ? n.val : null)).join("") : null;
        }
        static expandFormat(t, e = {}) {
            return oo(X.parseFormat(t), P.fromObject(e))
                .map((n) => n.val)
                .join("");
        }
        static resetCache() {
            (pn = void 0), (yn = {});
        }
        get(t) {
            return this[t];
        }
        get isValid() {
            return this.invalid === null;
        }
        get invalidReason() {
            return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null;
        }
        get locale() {
            return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
            return this.isValid ? this.loc.numberingSystem : null;
        }
        get outputCalendar() {
            return this.isValid ? this.loc.outputCalendar : null;
        }
        get zone() {
            return this._zone;
        }
        get zoneName() {
            return this.isValid ? this.zone.name : null;
        }
        get year() {
            return this.isValid ? this.c.year : NaN;
        }
        get quarter() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        }
        get month() {
            return this.isValid ? this.c.month : NaN;
        }
        get day() {
            return this.isValid ? this.c.day : NaN;
        }
        get hour() {
            return this.isValid ? this.c.hour : NaN;
        }
        get minute() {
            return this.isValid ? this.c.minute : NaN;
        }
        get second() {
            return this.isValid ? this.c.second : NaN;
        }
        get millisecond() {
            return this.isValid ? this.c.millisecond : NaN;
        }
        get weekYear() {
            return this.isValid ? ho(this).weekYear : NaN;
        }
        get weekNumber() {
            return this.isValid ? ho(this).weekNumber : NaN;
        }
        get weekday() {
            return this.isValid ? ho(this).weekday : NaN;
        }
        get isWeekend() {
            return (
                this.isValid && this.loc.getWeekendDays().includes(this.weekday)
            );
        }
        get localWeekday() {
            return this.isValid ? uo(this).weekday : NaN;
        }
        get localWeekNumber() {
            return this.isValid ? uo(this).weekNumber : NaN;
        }
        get localWeekYear() {
            return this.isValid ? uo(this).weekYear : NaN;
        }
        get ordinal() {
            return this.isValid ? un(this.c).ordinal : NaN;
        }
        get monthShort() {
            return this.isValid
                ? Gt.months("short", { locObj: this.loc })[this.month - 1]
                : null;
        }
        get monthLong() {
            return this.isValid
                ? Gt.months("long", { locObj: this.loc })[this.month - 1]
                : null;
        }
        get weekdayShort() {
            return this.isValid
                ? Gt.weekdays("short", { locObj: this.loc })[this.weekday - 1]
                : null;
        }
        get weekdayLong() {
            return this.isValid
                ? Gt.weekdays("long", { locObj: this.loc })[this.weekday - 1]
                : null;
        }
        get offset() {
            return this.isValid ? +this.o : NaN;
        }
        get offsetNameShort() {
            return this.isValid
                ? this.zone.offsetName(this.ts, {
                      format: "short",
                      locale: this.locale,
                  })
                : null;
        }
        get offsetNameLong() {
            return this.isValid
                ? this.zone.offsetName(this.ts, {
                      format: "long",
                      locale: this.locale,
                  })
                : null;
        }
        get isOffsetFixed() {
            return this.isValid ? this.zone.isUniversal : null;
        }
        get isInDST() {
            return this.isOffsetFixed
                ? !1
                : this.offset > this.set({ month: 1, day: 1 }).offset ||
                      this.offset > this.set({ month: 5 }).offset;
        }
        getPossibleOffsets() {
            if (!this.isValid || this.isOffsetFixed) return [this];
            let t = 864e5,
                e = 6e4,
                i = es(this.c),
                n = this.zone.offset(i - t),
                r = this.zone.offset(i + t),
                o = this.zone.offset(i - n * e),
                a = this.zone.offset(i - r * e);
            if (o === a) return [this];
            let l = i - o * e,
                c = i - a * e,
                h = fn(l, o),
                u = fn(c, a);
            return h.hour === u.hour &&
                h.minute === u.minute &&
                h.second === u.second &&
                h.millisecond === u.millisecond
                ? [ve(this, { ts: l }), ve(this, { ts: c })]
                : [this];
        }
        get isInLeapYear() {
            return Me(this.year);
        }
        get daysInMonth() {
            return rs(this.year, this.month);
        }
        get daysInYear() {
            return this.isValid ? ce(this.year) : NaN;
        }
        get weeksInWeekYear() {
            return this.isValid ? ke(this.weekYear) : NaN;
        }
        get weeksInLocalWeekYear() {
            return this.isValid
                ? ke(
                      this.localWeekYear,
                      this.loc.getMinDaysInFirstWeek(),
                      this.loc.getStartOfWeek(),
                  )
                : NaN;
        }
        resolvedLocaleOptions(t = {}) {
            let {
                locale: e,
                numberingSystem: i,
                calendar: n,
            } = X.create(this.loc.clone(t), t).resolvedOptions(this);
            return { locale: e, numberingSystem: i, outputCalendar: n };
        }
        toUTC(t = 0, e = {}) {
            return this.setZone(G.instance(t), e);
        }
        toLocal() {
            return this.setZone(z.defaultZone);
        }
        setZone(t, { keepLocalTime: e = !1, keepCalendarTime: i = !1 } = {}) {
            if (((t = Et(t, z.defaultZone)), t.equals(this.zone))) return this;
            if (t.isValid) {
                let n = this.ts;
                if (e || i) {
                    let r = t.offset(this.ts),
                        o = this.toObject();
                    [n] = gn(o, r, t);
                }
                return ve(this, { ts: n, zone: t });
            } else return T.invalid(pi(t));
        }
        reconfigure({ locale: t, numberingSystem: e, outputCalendar: i } = {}) {
            let n = this.loc.clone({
                locale: t,
                numberingSystem: e,
                outputCalendar: i,
            });
            return ve(this, { loc: n });
        }
        setLocale(t) {
            return this.reconfigure({ locale: t });
        }
        set(t) {
            if (!this.isValid) return this;
            let e = os(t, wc),
                { minDaysInFirstWeek: i, startOfWeek: n } = qr(e, this.loc),
                r = !D(e.weekYear) || !D(e.weekNumber) || !D(e.weekday),
                o = !D(e.ordinal),
                a = !D(e.year),
                l = !D(e.month) || !D(e.day),
                c = a || l,
                h = e.weekYear || e.weekNumber;
            if ((c || o) && h)
                throw new vt(
                    "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
                );
            if (l && o) throw new vt("Can't mix ordinal dates with month/day");
            let u;
            r
                ? (u = Yr({ ...li(this.c, i, n), ...e }, i, n))
                : D(e.ordinal)
                  ? ((u = { ...this.toObject(), ...e }),
                    D(e.day) && (u.day = Math.min(rs(u.year, u.month), u.day)))
                  : (u = Zr({ ...un(this.c), ...e }));
            let [d, f] = gn(u, this.o, this.zone);
            return ve(this, { ts: d, o: f });
        }
        plus(t) {
            if (!this.isValid) return this;
            let e = I.fromDurationLike(t);
            return ve(this, xc(this, e));
        }
        minus(t) {
            if (!this.isValid) return this;
            let e = I.fromDurationLike(t).negate();
            return ve(this, xc(this, e));
        }
        startOf(t, { useLocaleWeeks: e = !1 } = {}) {
            if (!this.isValid) return this;
            let i = {},
                n = I.normalizeUnit(t);
            switch (n) {
                case "years":
                    i.month = 1;
                case "quarters":
                case "months":
                    i.day = 1;
                case "weeks":
                case "days":
                    i.hour = 0;
                case "hours":
                    i.minute = 0;
                case "minutes":
                    i.second = 0;
                case "seconds":
                    i.millisecond = 0;
                    break;
                case "milliseconds":
                    break;
            }
            if (n === "weeks")
                if (e) {
                    let r = this.loc.getStartOfWeek(),
                        { weekday: o } = this;
                    o < r && (i.weekNumber = this.weekNumber - 1),
                        (i.weekday = r);
                } else i.weekday = 1;
            if (n === "quarters") {
                let r = Math.ceil(this.month / 3);
                i.month = (r - 1) * 3 + 1;
            }
            return this.set(i);
        }
        endOf(t, e) {
            return this.isValid
                ? this.plus({ [t]: 1 })
                      .startOf(t, e)
                      .minus(1)
                : this;
        }
        toFormat(t, e = {}) {
            return this.isValid
                ? X.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(
                      this,
                      t,
                  )
                : co;
        }
        toLocaleString(t = ae, e = {}) {
            return this.isValid
                ? X.create(this.loc.clone(e), t).formatDateTime(this)
                : co;
        }
        toLocaleParts(t = {}) {
            return this.isValid
                ? X.create(this.loc.clone(t), t).formatDateTimeParts(this)
                : [];
        }
        toISO({
            format: t = "extended",
            suppressSeconds: e = !1,
            suppressMilliseconds: i = !1,
            includeOffset: n = !0,
            extendedZone: r = !1,
        } = {}) {
            if (!this.isValid) return null;
            let o = t === "extended",
                a = fo(this, o);
            return (a += "T"), (a += _c(this, o, e, i, n, r)), a;
        }
        toISODate({ format: t = "extended" } = {}) {
            return this.isValid ? fo(this, t === "extended") : null;
        }
        toISOWeekDate() {
            return mn(this, "kkkk-'W'WW-c");
        }
        toISOTime({
            suppressMilliseconds: t = !1,
            suppressSeconds: e = !1,
            includeOffset: i = !0,
            includePrefix: n = !1,
            extendedZone: r = !1,
            format: o = "extended",
        } = {}) {
            return this.isValid
                ? (n ? "T" : "") + _c(this, o === "extended", e, t, i, r)
                : null;
        }
        toRFC2822() {
            return mn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
        }
        toHTTP() {
            return mn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }
        toSQLDate() {
            return this.isValid ? fo(this, !0) : null;
        }
        toSQLTime({
            includeOffset: t = !0,
            includeZone: e = !1,
            includeOffsetSpace: i = !0,
        } = {}) {
            let n = "HH:mm:ss.SSS";
            return (
                (e || t) &&
                    (i && (n += " "), e ? (n += "z") : t && (n += "ZZ")),
                mn(this, n, !0)
            );
        }
        toSQL(t = {}) {
            return this.isValid
                ? `${this.toSQLDate()} ${this.toSQLTime(t)}`
                : null;
        }
        toString() {
            return this.isValid ? this.toISO() : co;
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
            return this.isValid
                ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`
                : `DateTime { Invalid, reason: ${this.invalidReason} }`;
        }
        valueOf() {
            return this.toMillis();
        }
        toMillis() {
            return this.isValid ? this.ts : NaN;
        }
        toSeconds() {
            return this.isValid ? this.ts / 1e3 : NaN;
        }
        toUnixInteger() {
            return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
        }
        toJSON() {
            return this.toISO();
        }
        toBSON() {
            return this.toJSDate();
        }
        toObject(t = {}) {
            if (!this.isValid) return {};
            let e = { ...this.c };
            return (
                t.includeConfig &&
                    ((e.outputCalendar = this.outputCalendar),
                    (e.numberingSystem = this.loc.numberingSystem),
                    (e.locale = this.loc.locale)),
                e
            );
        }
        toJSDate() {
            return new Date(this.isValid ? this.ts : NaN);
        }
        diff(t, e = "milliseconds", i = {}) {
            if (!this.isValid || !t.isValid)
                return I.invalid("created by diffing an invalid DateTime");
            let n = {
                    locale: this.locale,
                    numberingSystem: this.numberingSystem,
                    ...i,
                },
                r = Hl(e).map(I.normalizeUnit),
                o = t.valueOf() > this.valueOf(),
                a = o ? this : t,
                l = o ? t : this,
                c = dc(a, l, r, n);
            return o ? c.negate() : c;
        }
        diffNow(t = "milliseconds", e = {}) {
            return this.diff(T.now(), t, e);
        }
        until(t) {
            return this.isValid ? U.fromDateTimes(this, t) : this;
        }
        hasSame(t, e, i) {
            if (!this.isValid) return !1;
            let n = t.valueOf(),
                r = this.setZone(t.zone, { keepLocalTime: !0 });
            return r.startOf(e, i) <= n && n <= r.endOf(e, i);
        }
        equals(t) {
            return (
                this.isValid &&
                t.isValid &&
                this.valueOf() === t.valueOf() &&
                this.zone.equals(t.zone) &&
                this.loc.equals(t.loc)
            );
        }
        toRelative(t = {}) {
            if (!this.isValid) return null;
            let e = t.base || T.fromObject({}, { zone: this.zone }),
                i = t.padding ? (this < e ? -t.padding : t.padding) : 0,
                n = ["years", "months", "days", "hours", "minutes", "seconds"],
                r = t.unit;
            return (
                Array.isArray(t.unit) && ((n = t.unit), (r = void 0)),
                kc(e, this.plus(i), {
                    ...t,
                    numeric: "always",
                    units: n,
                    unit: r,
                })
            );
        }
        toRelativeCalendar(t = {}) {
            return this.isValid
                ? kc(t.base || T.fromObject({}, { zone: this.zone }), this, {
                      ...t,
                      numeric: "auto",
                      units: ["years", "months", "days"],
                      calendary: !0,
                  })
                : null;
        }
        static min(...t) {
            if (!t.every(T.isDateTime))
                throw new J("min requires all arguments be DateTimes");
            return Kr(t, (e) => e.valueOf(), Math.min);
        }
        static max(...t) {
            if (!t.every(T.isDateTime))
                throw new J("max requires all arguments be DateTimes");
            return Kr(t, (e) => e.valueOf(), Math.max);
        }
        static fromFormatExplain(t, e, i = {}) {
            let { locale: n = null, numberingSystem: r = null } = i,
                o = P.fromOpts({
                    locale: n,
                    numberingSystem: r,
                    defaultToEN: !0,
                });
            return ao(o, t, e);
        }
        static fromStringExplain(t, e, i = {}) {
            return T.fromFormatExplain(t, e, i);
        }
        static buildFormatParser(t, e = {}) {
            let { locale: i = null, numberingSystem: n = null } = e,
                r = P.fromOpts({
                    locale: i,
                    numberingSystem: n,
                    defaultToEN: !0,
                });
            return new gi(r, t);
        }
        static fromFormatParser(t, e, i = {}) {
            if (D(t) || D(e))
                throw new J(
                    "fromFormatParser requires an input string and a format parser",
                );
            let { locale: n = null, numberingSystem: r = null } = i,
                o = P.fromOpts({
                    locale: n,
                    numberingSystem: r,
                    defaultToEN: !0,
                });
            if (!o.equals(e.locale))
                throw new J(
                    `fromFormatParser called with a locale of ${o}, but the format parser was created for ${e.locale}`,
                );
            let {
                result: a,
                zone: l,
                specificOffset: c,
                invalidReason: h,
            } = e.explainFromTokens(t);
            return h ? T.invalid(h) : gs(a, l, i, `format ${e.format}`, t, c);
        }
        static get DATE_SHORT() {
            return ae;
        }
        static get DATE_MED() {
            return Hs;
        }
        static get DATE_MED_WITH_WEEKDAY() {
            return Er;
        }
        static get DATE_FULL() {
            return Bs;
        }
        static get DATE_HUGE() {
            return $s;
        }
        static get TIME_SIMPLE() {
            return js;
        }
        static get TIME_WITH_SECONDS() {
            return Us;
        }
        static get TIME_WITH_SHORT_OFFSET() {
            return Ys;
        }
        static get TIME_WITH_LONG_OFFSET() {
            return Zs;
        }
        static get TIME_24_SIMPLE() {
            return qs;
        }
        static get TIME_24_WITH_SECONDS() {
            return Gs;
        }
        static get TIME_24_WITH_SHORT_OFFSET() {
            return Xs;
        }
        static get TIME_24_WITH_LONG_OFFSET() {
            return Ks;
        }
        static get DATETIME_SHORT() {
            return Js;
        }
        static get DATETIME_SHORT_WITH_SECONDS() {
            return Qs;
        }
        static get DATETIME_MED() {
            return ti;
        }
        static get DATETIME_MED_WITH_SECONDS() {
            return ei;
        }
        static get DATETIME_MED_WITH_WEEKDAY() {
            return Cr;
        }
        static get DATETIME_FULL() {
            return si;
        }
        static get DATETIME_FULL_WITH_SECONDS() {
            return ii;
        }
        static get DATETIME_HUGE() {
            return ni;
        }
        static get DATETIME_HUGE_WITH_SECONDS() {
            return ri;
        }
    };
function ms(s) {
    if (T.isDateTime(s)) return s;
    if (s && s.valueOf && Ct(s.valueOf())) return T.fromJSDate(s);
    if (s && typeof s == "object") return T.fromObject(s);
    throw new J(`Unknown datetime argument: ${s}, of type ${typeof s}`);
}
var ug = {
    datetime: T.DATETIME_MED_WITH_SECONDS,
    millisecond: "h:mm:ss.SSS a",
    second: T.TIME_WITH_SECONDS,
    minute: T.TIME_SIMPLE,
    hour: { hour: "numeric" },
    day: { day: "numeric", month: "short" },
    week: "DD",
    month: { month: "short", year: "numeric" },
    quarter: "'Q'q - yyyy",
    year: { year: "numeric" },
};
Or._date.override({
    _id: "luxon",
    _create: function (s) {
        return T.fromMillis(s, this.options);
    },
    init(s) {
        this.options.locale || (this.options.locale = s.locale);
    },
    formats: function () {
        return ug;
    },
    parse: function (s, t) {
        let e = this.options,
            i = typeof s;
        return s === null || i === "undefined"
            ? null
            : (i === "number"
                  ? (s = this._create(s))
                  : i === "string"
                    ? typeof t == "string"
                        ? (s = T.fromFormat(s, t, e))
                        : (s = T.fromISO(s, e))
                    : s instanceof Date
                      ? (s = T.fromJSDate(s, e))
                      : i === "object" &&
                        !(s instanceof T) &&
                        (s = T.fromObject(s, e)),
              s.isValid ? s.valueOf() : null);
    },
    format: function (s, t) {
        let e = this._create(s);
        return typeof t == "string" ? e.toFormat(t) : e.toLocaleString(t);
    },
    add: function (s, t, e) {
        let i = {};
        return (i[e] = t), this._create(s).plus(i).valueOf();
    },
    diff: function (s, t, e) {
        return this._create(s).diff(this._create(t)).as(e).valueOf();
    },
    startOf: function (s, t, e) {
        if (t === "isoWeek") {
            e = Math.trunc(Math.min(Math.max(0, e), 6));
            let i = this._create(s);
            return i
                .minus({ days: (i.weekday - e + 7) % 7 })
                .startOf("day")
                .valueOf();
        }
        return t ? this._create(s).startOf(t).valueOf() : s;
    },
    endOf: function (s, t) {
        return this._create(s).endOf(t).valueOf();
    },
});
function bn({ cachedData: s, options: t, type: e }) {
    return {
        init: function () {
            this.initChart(),
                this.$wire.$on("updateChartData", ({ data: i }) => {
                    (bn = this.getChart()), (bn.data = i), bn.update("resize");
                }),
                Alpine.effect(() => {
                    Alpine.store("theme"),
                        this.$nextTick(() => {
                            this.getChart() &&
                                (this.getChart().destroy(), this.initChart());
                        });
                }),
                window
                    .matchMedia("(prefers-color-scheme: dark)")
                    .addEventListener("change", () => {
                        Alpine.store("theme") === "system" &&
                            this.$nextTick(() => {
                                this.getChart().destroy(), this.initChart();
                            });
                    });
        },
        initChart: function (i = null) {
            var o, a, l, c, h, u, d;
            (Wt.defaults.animation.duration = 0),
                (Wt.defaults.backgroundColor = getComputedStyle(
                    this.$refs.backgroundColorElement,
                ).color);
            let n = getComputedStyle(this.$refs.borderColorElement).color;
            (Wt.defaults.borderColor = n),
                (Wt.defaults.color = getComputedStyle(
                    this.$refs.textColorElement,
                ).color),
                (Wt.defaults.font.family = getComputedStyle(
                    this.$el,
                ).fontFamily),
                (Wt.defaults.plugins.legend.labels.boxWidth = 12),
                (Wt.defaults.plugins.legend.position = "bottom");
            let r = getComputedStyle(this.$refs.gridColorElement).color;
            return (
                t ?? (t = {}),
                t.borderWidth ?? (t.borderWidth = 2),
                t.pointBackgroundColor ?? (t.pointBackgroundColor = n),
                t.pointHitRadius ?? (t.pointHitRadius = 4),
                t.pointRadius ?? (t.pointRadius = 2),
                t.scales ?? (t.scales = {}),
                (o = t.scales).x ?? (o.x = {}),
                (a = t.scales.x).grid ?? (a.grid = {}),
                (t.scales.x.grid.color = r),
                (l = t.scales.x.grid).display ?? (l.display = !1),
                (c = t.scales.x.grid).drawBorder ?? (c.drawBorder = !1),
                (h = t.scales).y ?? (h.y = {}),
                (u = t.scales.y).grid ?? (u.grid = {}),
                (t.scales.y.grid.color = r),
                (d = t.scales.y.grid).drawBorder ?? (d.drawBorder = !1),
                new Wt(this.$refs.canvas, {
                    type: e,
                    data: i ?? s,
                    options: t,
                    plugins: window.filamentChartJsPlugins ?? [],
                })
            );
        },
        getChart: function () {
            return Wt.getChart(this.$refs.canvas);
        },
    };
}
export { bn as default };
/*! Bundled license information:

chart.js/dist/chunks/helpers.segment.mjs:
  (*!
   * Chart.js v3.9.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.segment.mjs:
  (*!
   * @kurkle/color v0.2.1
   * https://github.com/kurkle/color#readme
   * (c) 2022 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chart.mjs:
  (*!
   * Chart.js v3.9.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   *)

chartjs-adapter-luxon/dist/chartjs-adapter-luxon.esm.js:
  (*!
   * chartjs-adapter-luxon v1.3.1
   * https://www.chartjs.org
   * (c) 2023 chartjs-adapter-luxon Contributors
   * Released under the MIT license
   *)
*/
