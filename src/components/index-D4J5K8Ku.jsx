(function() {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        s(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && s(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function u(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity),
        c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function s(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const f = u(c);
        fetch(c.href, f)
    }
}
)();
function G0(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var io = {
    exports: {}
}
  , Kl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uh;
function Q0() {
    if (Uh)
        return Kl;
    Uh = 1;
    var i = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.fragment");
    function u(s, c, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        c.key !== void 0 && (d = "" + c.key),
        "key"in c) {
            f = {};
            for (var m in c)
                m !== "key" && (f[m] = c[m])
        } else
            f = c;
        return c = f.ref,
        {
            $$typeof: i,
            type: s,
            key: d,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return Kl.Fragment = l,
    Kl.jsx = u,
    Kl.jsxs = u,
    Kl
}
var Mh;
function K0() {
    return Mh || (Mh = 1,
    io.exports = Q0()),
    io.exports
}
var b = K0()
  , ro = {
    exports: {}
}
  , $l = {}
  , uo = {
    exports: {}
}
  , so = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zh;
function $0() {
    return zh || (zh = 1,
    (function(i) {
        function l(L, C) {
            var X = L.length;
            L.push(C);
            e: for (; 0 < X; ) {
                var I = X - 1 >>> 1
                  , E = L[I];
                if (0 < c(E, C))
                    L[I] = C,
                    L[X] = E,
                    X = I;
                else
                    break e
            }
        }
        function u(L) {
            return L.length === 0 ? null : L[0]
        }
        function s(L) {
            if (L.length === 0)
                return null;
            var C = L[0]
              , X = L.pop();
            if (X !== C) {
                L[0] = X;
                e: for (var I = 0, E = L.length, H = E >>> 1; I < H; ) {
                    var Q = 2 * (I + 1) - 1
                      , K = L[Q]
                      , F = Q + 1
                      , pe = L[F];
                    if (0 > c(K, X))
                        F < E && 0 > c(pe, K) ? (L[I] = pe,
                        L[F] = X,
                        I = F) : (L[I] = K,
                        L[Q] = X,
                        I = Q);
                    else if (F < E && 0 > c(pe, X))
                        L[I] = pe,
                        L[F] = X,
                        I = F;
                    else
                        break e
                }
            }
            return C
        }
        function c(L, C) {
            var X = L.sortIndex - C.sortIndex;
            return X !== 0 ? X : L.id - C.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            i.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , m = d.now();
            i.unstable_now = function() {
                return d.now() - m
            }
        }
        var p = []
          , g = []
          , v = 1
          , x = null
          , N = 3
          , B = !1
          , A = !1
          , z = !1
          , M = !1
          , V = typeof setTimeout == "function" ? setTimeout : null
          , Z = typeof clearTimeout == "function" ? clearTimeout : null
          , G = typeof setImmediate < "u" ? setImmediate : null;
        function P(L) {
            for (var C = u(g); C !== null; ) {
                if (C.callback === null)
                    s(g);
                else if (C.startTime <= L)
                    s(g),
                    C.sortIndex = C.expirationTime,
                    l(p, C);
                else
                    break;
                C = u(g)
            }
        }
        function $(L) {
            if (z = !1,
            P(L),
            !A)
                if (u(p) !== null)
                    A = !0,
                    fe || (fe = !0,
                    Ae());
                else {
                    var C = u(g);
                    C !== null && je($, C.startTime - L)
                }
        }
        var fe = !1
          , ne = -1
          , ie = 5
          , ue = -1;
        function be() {
            return M ? !0 : !(i.unstable_now() - ue < ie)
        }
        function Ye() {
            if (M = !1,
            fe) {
                var L = i.unstable_now();
                ue = L;
                var C = !0;
                try {
                    e: {
                        A = !1,
                        z && (z = !1,
                        Z(ne),
                        ne = -1),
                        B = !0;
                        var X = N;
                        try {
                            t: {
                                for (P(L),
                                x = u(p); x !== null && !(x.expirationTime > L && be()); ) {
                                    var I = x.callback;
                                    if (typeof I == "function") {
                                        x.callback = null,
                                        N = x.priorityLevel;
                                        var E = I(x.expirationTime <= L);
                                        if (L = i.unstable_now(),
                                        typeof E == "function") {
                                            x.callback = E,
                                            P(L),
                                            C = !0;
                                            break t
                                        }
                                        x === u(p) && s(p),
                                        P(L)
                                    } else
                                        s(p);
                                    x = u(p)
                                }
                                if (x !== null)
                                    C = !0;
                                else {
                                    var H = u(g);
                                    H !== null && je($, H.startTime - L),
                                    C = !1
                                }
                            }
                            break e
                        } finally {
                            x = null,
                            N = X,
                            B = !1
                        }
                        C = void 0
                    }
                } finally {
                    C ? Ae() : fe = !1
                }
            }
        }
        var Ae;
        if (typeof G == "function")
            Ae = function() {
                G(Ye)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var we = new MessageChannel
              , Se = we.port2;
            we.port1.onmessage = Ye,
            Ae = function() {
                Se.postMessage(null)
            }
        } else
            Ae = function() {
                V(Ye, 0)
            }
            ;
        function je(L, C) {
            ne = V(function() {
                L(i.unstable_now())
            }, C)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(L) {
            L.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(L) {
            0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < L ? Math.floor(1e3 / L) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return N
        }
        ,
        i.unstable_next = function(L) {
            switch (N) {
            case 1:
            case 2:
            case 3:
                var C = 3;
                break;
            default:
                C = N
            }
            var X = N;
            N = C;
            try {
                return L()
            } finally {
                N = X
            }
        }
        ,
        i.unstable_requestPaint = function() {
            M = !0
        }
        ,
        i.unstable_runWithPriority = function(L, C) {
            switch (L) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                L = 3
            }
            var X = N;
            N = L;
            try {
                return C()
            } finally {
                N = X
            }
        }
        ,
        i.unstable_scheduleCallback = function(L, C, X) {
            var I = i.unstable_now();
            switch (typeof X == "object" && X !== null ? (X = X.delay,
            X = typeof X == "number" && 0 < X ? I + X : I) : X = I,
            L) {
            case 1:
                var E = -1;
                break;
            case 2:
                E = 250;
                break;
            case 5:
                E = 1073741823;
                break;
            case 4:
                E = 1e4;
                break;
            default:
                E = 5e3
            }
            return E = X + E,
            L = {
                id: v++,
                callback: C,
                priorityLevel: L,
                startTime: X,
                expirationTime: E,
                sortIndex: -1
            },
            X > I ? (L.sortIndex = X,
            l(g, L),
            u(p) === null && L === u(g) && (z ? (Z(ne),
            ne = -1) : z = !0,
            je($, X - I))) : (L.sortIndex = E,
            l(p, L),
            A || B || (A = !0,
            fe || (fe = !0,
            Ae()))),
            L
        }
        ,
        i.unstable_shouldYield = be,
        i.unstable_wrapCallback = function(L) {
            var C = N;
            return function() {
                var X = N;
                N = C;
                try {
                    return L.apply(this, arguments)
                } finally {
                    N = X
                }
            }
        }
    }
    )(so)),
    so
}
var Hh;
function Z0() {
    return Hh || (Hh = 1,
    uo.exports = $0()),
    uo.exports
}
var oo = {
    exports: {}
}
  , ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kh;
function J0() {
    if (kh)
        return ce;
    kh = 1;
    var i = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.portal")
      , u = Symbol.for("react.fragment")
      , s = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , m = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function N(E) {
        return E === null || typeof E != "object" ? null : (E = x && E[x] || E["@@iterator"],
        typeof E == "function" ? E : null)
    }
    var B = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , A = Object.assign
      , z = {};
    function M(E, H, Q) {
        this.props = E,
        this.context = H,
        this.refs = z,
        this.updater = Q || B
    }
    M.prototype.isReactComponent = {},
    M.prototype.setState = function(E, H) {
        if (typeof E != "object" && typeof E != "function" && E != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, H, "setState")
    }
    ,
    M.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate")
    }
    ;
    function V() {}
    V.prototype = M.prototype;
    function Z(E, H, Q) {
        this.props = E,
        this.context = H,
        this.refs = z,
        this.updater = Q || B
    }
    var G = Z.prototype = new V;
    G.constructor = Z,
    A(G, M.prototype),
    G.isPureReactComponent = !0;
    var P = Array.isArray
      , $ = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , fe = Object.prototype.hasOwnProperty;
    function ne(E, H, Q, K, F, pe) {
        return Q = pe.ref,
        {
            $$typeof: i,
            type: E,
            key: H,
            ref: Q !== void 0 ? Q : null,
            props: pe
        }
    }
    function ie(E, H) {
        return ne(E.type, H, void 0, void 0, void 0, E.props)
    }
    function ue(E) {
        return typeof E == "object" && E !== null && E.$$typeof === i
    }
    function be(E) {
        var H = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + E.replace(/[=:]/g, function(Q) {
            return H[Q]
        })
    }
    var Ye = /\/+/g;
    function Ae(E, H) {
        return typeof E == "object" && E !== null && E.key != null ? be("" + E.key) : H.toString(36)
    }
    function we() {}
    function Se(E) {
        switch (E.status) {
        case "fulfilled":
            return E.value;
        case "rejected":
            throw E.reason;
        default:
            switch (typeof E.status == "string" ? E.then(we, we) : (E.status = "pending",
            E.then(function(H) {
                E.status === "pending" && (E.status = "fulfilled",
                E.value = H)
            }, function(H) {
                E.status === "pending" && (E.status = "rejected",
                E.reason = H)
            })),
            E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason
            }
        }
        throw E
    }
    function je(E, H, Q, K, F) {
        var pe = typeof E;
        (pe === "undefined" || pe === "boolean") && (E = null);
        var se = !1;
        if (E === null)
            se = !0;
        else
            switch (pe) {
            case "bigint":
            case "string":
            case "number":
                se = !0;
                break;
            case "object":
                switch (E.$$typeof) {
                case i:
                case l:
                    se = !0;
                    break;
                case v:
                    return se = E._init,
                    je(se(E._payload), H, Q, K, F)
                }
            }
        if (se)
            return F = F(E),
            se = K === "" ? "." + Ae(E, 0) : K,
            P(F) ? (Q = "",
            se != null && (Q = se.replace(Ye, "$&/") + "/"),
            je(F, H, Q, "", function(oa) {
                return oa
            })) : F != null && (ue(F) && (F = ie(F, Q + (F.key == null || E && E.key === F.key ? "" : ("" + F.key).replace(Ye, "$&/") + "/") + se)),
            H.push(F)),
            1;
        se = 0;
        var dt = K === "" ? "." : K + ":";
        if (P(E))
            for (var _e = 0; _e < E.length; _e++)
                K = E[_e],
                pe = dt + Ae(K, _e),
                se += je(K, H, Q, pe, F);
        else if (_e = N(E),
        typeof _e == "function")
            for (E = _e.call(E),
            _e = 0; !(K = E.next()).done; )
                K = K.value,
                pe = dt + Ae(K, _e++),
                se += je(K, H, Q, pe, F);
        else if (pe === "object") {
            if (typeof E.then == "function")
                return je(Se(E), H, Q, K, F);
            throw H = String(E),
            Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.")
        }
        return se
    }
    function L(E, H, Q) {
        if (E == null)
            return E;
        var K = []
          , F = 0;
        return je(E, K, "", "", function(pe) {
            return H.call(Q, pe, F++)
        }),
        K
    }
    function C(E) {
        if (E._status === -1) {
            var H = E._result;
            H = H(),
            H.then(function(Q) {
                (E._status === 0 || E._status === -1) && (E._status = 1,
                E._result = Q)
            }, function(Q) {
                (E._status === 0 || E._status === -1) && (E._status = 2,
                E._result = Q)
            }),
            E._status === -1 && (E._status = 0,
            E._result = H)
        }
        if (E._status === 1)
            return E._result.default;
        throw E._result
    }
    var X = typeof reportError == "function" ? reportError : function(E) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var H = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                error: E
            });
            if (!window.dispatchEvent(H))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", E);
            return
        }
        console.error(E)
    }
    ;
    function I() {}
    return ce.Children = {
        map: L,
        forEach: function(E, H, Q) {
            L(E, function() {
                H.apply(this, arguments)
            }, Q)
        },
        count: function(E) {
            var H = 0;
            return L(E, function() {
                H++
            }),
            H
        },
        toArray: function(E) {
            return L(E, function(H) {
                return H
            }) || []
        },
        only: function(E) {
            if (!ue(E))
                throw Error("React.Children.only expected to receive a single React element child.");
            return E
        }
    },
    ce.Component = M,
    ce.Fragment = u,
    ce.Profiler = c,
    ce.PureComponent = Z,
    ce.StrictMode = s,
    ce.Suspense = p,
    ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $,
    ce.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(E) {
            return $.H.useMemoCache(E)
        }
    },
    ce.cache = function(E) {
        return function() {
            return E.apply(null, arguments)
        }
    }
    ,
    ce.cloneElement = function(E, H, Q) {
        if (E == null)
            throw Error("The argument must be a React element, but you passed " + E + ".");
        var K = A({}, E.props)
          , F = E.key
          , pe = void 0;
        if (H != null)
            for (se in H.ref !== void 0 && (pe = void 0),
            H.key !== void 0 && (F = "" + H.key),
            H)
                !fe.call(H, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && H.ref === void 0 || (K[se] = H[se]);
        var se = arguments.length - 2;
        if (se === 1)
            K.children = Q;
        else if (1 < se) {
            for (var dt = Array(se), _e = 0; _e < se; _e++)
                dt[_e] = arguments[_e + 2];
            K.children = dt
        }
        return ne(E.type, F, void 0, void 0, pe, K)
    }
    ,
    ce.createContext = function(E) {
        return E = {
            $$typeof: d,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        E.Provider = E,
        E.Consumer = {
            $$typeof: f,
            _context: E
        },
        E
    }
    ,
    ce.createElement = function(E, H, Q) {
        var K, F = {}, pe = null;
        if (H != null)
            for (K in H.key !== void 0 && (pe = "" + H.key),
            H)
                fe.call(H, K) && K !== "key" && K !== "__self" && K !== "__source" && (F[K] = H[K]);
        var se = arguments.length - 2;
        if (se === 1)
            F.children = Q;
        else if (1 < se) {
            for (var dt = Array(se), _e = 0; _e < se; _e++)
                dt[_e] = arguments[_e + 2];
            F.children = dt
        }
        if (E && E.defaultProps)
            for (K in se = E.defaultProps,
            se)
                F[K] === void 0 && (F[K] = se[K]);
        return ne(E, pe, void 0, void 0, null, F)
    }
    ,
    ce.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ce.forwardRef = function(E) {
        return {
            $$typeof: m,
            render: E
        }
    }
    ,
    ce.isValidElement = ue,
    ce.lazy = function(E) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: E
            },
            _init: C
        }
    }
    ,
    ce.memo = function(E, H) {
        return {
            $$typeof: g,
            type: E,
            compare: H === void 0 ? null : H
        }
    }
    ,
    ce.startTransition = function(E) {
        var H = $.T
          , Q = {};
        $.T = Q;
        try {
            var K = E()
              , F = $.S;
            F !== null && F(Q, K),
            typeof K == "object" && K !== null && typeof K.then == "function" && K.then(I, X)
        } catch (pe) {
            X(pe)
        } finally {
            $.T = H
        }
    }
    ,
    ce.unstable_useCacheRefresh = function() {
        return $.H.useCacheRefresh()
    }
    ,
    ce.use = function(E) {
        return $.H.use(E)
    }
    ,
    ce.useActionState = function(E, H, Q) {
        return $.H.useActionState(E, H, Q)
    }
    ,
    ce.useCallback = function(E, H) {
        return $.H.useCallback(E, H)
    }
    ,
    ce.useContext = function(E) {
        return $.H.useContext(E)
    }
    ,
    ce.useDebugValue = function() {}
    ,
    ce.useDeferredValue = function(E, H) {
        return $.H.useDeferredValue(E, H)
    }
    ,
    ce.useEffect = function(E, H, Q) {
        var K = $.H;
        if (typeof Q == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return K.useEffect(E, H)
    }
    ,
    ce.useId = function() {
        return $.H.useId()
    }
    ,
    ce.useImperativeHandle = function(E, H, Q) {
        return $.H.useImperativeHandle(E, H, Q)
    }
    ,
    ce.useInsertionEffect = function(E, H) {
        return $.H.useInsertionEffect(E, H)
    }
    ,
    ce.useLayoutEffect = function(E, H) {
        return $.H.useLayoutEffect(E, H)
    }
    ,
    ce.useMemo = function(E, H) {
        return $.H.useMemo(E, H)
    }
    ,
    ce.useOptimistic = function(E, H) {
        return $.H.useOptimistic(E, H)
    }
    ,
    ce.useReducer = function(E, H, Q) {
        return $.H.useReducer(E, H, Q)
    }
    ,
    ce.useRef = function(E) {
        return $.H.useRef(E)
    }
    ,
    ce.useState = function(E) {
        return $.H.useState(E)
    }
    ,
    ce.useSyncExternalStore = function(E, H, Q) {
        return $.H.useSyncExternalStore(E, H, Q)
    }
    ,
    ce.useTransition = function() {
        return $.H.useTransition()
    }
    ,
    ce.version = "19.1.1",
    ce
}
var Bh;
function wo() {
    return Bh || (Bh = 1,
    oo.exports = J0()),
    oo.exports
}
var co = {
    exports: {}
}
  , tt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qh;
function F0() {
    if (qh)
        return tt;
    qh = 1;
    var i = wo();
    function l(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                g += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u() {}
    var s = {
        d: {
            f: u,
            r: function() {
                throw Error(l(522))
            },
            D: u,
            C: u,
            L: u,
            m: u,
            X: u,
            S: u,
            M: u
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function f(p, g, v) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: x == null ? null : "" + x,
            children: p,
            containerInfo: g,
            implementation: v
        }
    }
    var d = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(p, g) {
        if (p === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s,
    tt.createPortal = function(p, g) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(l(299));
        return f(p, g, null, v)
    }
    ,
    tt.flushSync = function(p) {
        var g = d.T
          , v = s.p;
        try {
            if (d.T = null,
            s.p = 2,
            p)
                return p()
        } finally {
            d.T = g,
            s.p = v,
            s.d.f()
        }
    }
    ,
    tt.preconnect = function(p, g) {
        typeof p == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        s.d.C(p, g))
    }
    ,
    tt.prefetchDNS = function(p) {
        typeof p == "string" && s.d.D(p)
    }
    ,
    tt.preinit = function(p, g) {
        if (typeof p == "string" && g && typeof g.as == "string") {
            var v = g.as
              , x = m(v, g.crossOrigin)
              , N = typeof g.integrity == "string" ? g.integrity : void 0
              , B = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            v === "style" ? s.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: x,
                integrity: N,
                fetchPriority: B
            }) : v === "script" && s.d.X(p, {
                crossOrigin: x,
                integrity: N,
                fetchPriority: B,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    tt.preinitModule = function(p, g) {
        if (typeof p == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var v = m(g.as, g.crossOrigin);
                    s.d.M(p, {
                        crossOrigin: v,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && s.d.M(p)
    }
    ,
    tt.preload = function(p, g) {
        if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var v = g.as
              , x = m(v, g.crossOrigin);
            s.d.L(p, v, {
                crossOrigin: x,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    tt.preloadModule = function(p, g) {
        if (typeof p == "string")
            if (g) {
                var v = m(g.as, g.crossOrigin);
                s.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: v,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                s.d.m(p)
    }
    ,
    tt.requestFormReset = function(p) {
        s.d.r(p)
    }
    ,
    tt.unstable_batchedUpdates = function(p, g) {
        return p(g)
    }
    ,
    tt.useFormState = function(p, g, v) {
        return d.H.useFormState(p, g, v)
    }
    ,
    tt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    tt.version = "19.1.1",
    tt
}
var Yh;
function P0() {
    if (Yh)
        return co.exports;
    Yh = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (l) {
                console.error(l)
            }
    }
    return i(),
    co.exports = F0(),
    co.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh;
function W0() {
    if (Vh)
        return $l;
    Vh = 1;
    var i = Z0()
      , l = wo()
      , u = P0();
    function s(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function f(e) {
        var t = e
          , a = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (a = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? a : null
    }
    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function m(e) {
        if (f(e) !== e)
            throw Error(s(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e),
            t === null)
                throw Error(s(188));
            return t !== e ? null : e
        }
        for (var a = e, n = t; ; ) {
            var r = a.return;
            if (r === null)
                break;
            var o = r.alternate;
            if (o === null) {
                if (n = r.return,
                n !== null) {
                    a = n;
                    continue
                }
                break
            }
            if (r.child === o.child) {
                for (o = r.child; o; ) {
                    if (o === a)
                        return m(r),
                        e;
                    if (o === n)
                        return m(r),
                        t;
                    o = o.sibling
                }
                throw Error(s(188))
            }
            if (a.return !== n.return)
                a = r,
                n = o;
            else {
                for (var h = !1, y = r.child; y; ) {
                    if (y === a) {
                        h = !0,
                        a = r,
                        n = o;
                        break
                    }
                    if (y === n) {
                        h = !0,
                        n = r,
                        a = o;
                        break
                    }
                    y = y.sibling
                }
                if (!h) {
                    for (y = o.child; y; ) {
                        if (y === a) {
                            h = !0,
                            a = o,
                            n = r;
                            break
                        }
                        if (y === n) {
                            h = !0,
                            n = o,
                            a = r;
                            break
                        }
                        y = y.sibling
                    }
                    if (!h)
                        throw Error(s(189))
                }
            }
            if (a.alternate !== n)
                throw Error(s(190))
        }
        if (a.tag !== 3)
            throw Error(s(188));
        return a.stateNode.current === a ? e : t
    }
    function g(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = g(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var v = Object.assign
      , x = Symbol.for("react.element")
      , N = Symbol.for("react.transitional.element")
      , B = Symbol.for("react.portal")
      , A = Symbol.for("react.fragment")
      , z = Symbol.for("react.strict_mode")
      , M = Symbol.for("react.profiler")
      , V = Symbol.for("react.provider")
      , Z = Symbol.for("react.consumer")
      , G = Symbol.for("react.context")
      , P = Symbol.for("react.forward_ref")
      , $ = Symbol.for("react.suspense")
      , fe = Symbol.for("react.suspense_list")
      , ne = Symbol.for("react.memo")
      , ie = Symbol.for("react.lazy")
      , ue = Symbol.for("react.activity")
      , be = Symbol.for("react.memo_cache_sentinel")
      , Ye = Symbol.iterator;
    function Ae(e) {
        return e === null || typeof e != "object" ? null : (e = Ye && e[Ye] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var we = Symbol.for("react.client.reference");
    function Se(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === we ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case A:
            return "Fragment";
        case M:
            return "Profiler";
        case z:
            return "StrictMode";
        case $:
            return "Suspense";
        case fe:
            return "SuspenseList";
        case ue:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case B:
                return "Portal";
            case G:
                return (e.displayName || "Context") + ".Provider";
            case Z:
                return (e._context.displayName || "Context") + ".Consumer";
            case P:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case ne:
                return t = e.displayName || null,
                t !== null ? t : Se(e.type) || "Memo";
            case ie:
                t = e._payload,
                e = e._init;
                try {
                    return Se(e(t))
                } catch {}
            }
        return null
    }
    var je = Array.isArray
      , L = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , C = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , X = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , I = []
      , E = -1;
    function H(e) {
        return {
            current: e
        }
    }
    function Q(e) {
        0 > E || (e.current = I[E],
        I[E] = null,
        E--)
    }
    function K(e, t) {
        E++,
        I[E] = e.current,
        e.current = t
    }
    var F = H(null)
      , pe = H(null)
      , se = H(null)
      , dt = H(null);
    function _e(e, t) {
        switch (K(se, t),
        K(pe, e),
        K(F, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? sh(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = sh(t),
                e = oh(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        Q(F),
        K(F, e)
    }
    function oa() {
        Q(F),
        Q(pe),
        Q(se)
    }
    function Gr(e) {
        e.memoizedState !== null && K(dt, e);
        var t = F.current
          , a = oh(t, e.type);
        t !== a && (K(pe, e),
        K(F, a))
    }
    function si(e) {
        pe.current === e && (Q(F),
        Q(pe)),
        dt.current === e && (Q(dt),
        Yl._currentValue = X)
    }
    var Qr = Object.prototype.hasOwnProperty
      , Kr = i.unstable_scheduleCallback
      , $r = i.unstable_cancelCallback
      , Em = i.unstable_shouldYield
      , Rm = i.unstable_requestPaint
      , zt = i.unstable_now
      , Am = i.unstable_getCurrentPriorityLevel
      , Yo = i.unstable_ImmediatePriority
      , Vo = i.unstable_UserBlockingPriority
      , oi = i.unstable_NormalPriority
      , Tm = i.unstable_LowPriority
      , Xo = i.unstable_IdlePriority
      , Om = i.log
      , Nm = i.unstable_setDisableYieldValue
      , Jn = null
      , ht = null;
    function ca(e) {
        if (typeof Om == "function" && Nm(e),
        ht && typeof ht.setStrictMode == "function")
            try {
                ht.setStrictMode(Jn, e)
            } catch {}
    }
    var gt = Math.clz32 ? Math.clz32 : Dm
      , wm = Math.log
      , Cm = Math.LN2;
    function Dm(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (wm(e) / Cm | 0) | 0
    }
    var ci = 256
      , fi = 4194304;
    function Ma(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function di(e, t, a) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var r = 0
          , o = e.suspendedLanes
          , h = e.pingedLanes;
        e = e.warmLanes;
        var y = n & 134217727;
        return y !== 0 ? (n = y & ~o,
        n !== 0 ? r = Ma(n) : (h &= y,
        h !== 0 ? r = Ma(h) : a || (a = y & ~e,
        a !== 0 && (r = Ma(a))))) : (y = n & ~o,
        y !== 0 ? r = Ma(y) : h !== 0 ? r = Ma(h) : a || (a = n & ~e,
        a !== 0 && (r = Ma(a)))),
        r === 0 ? 0 : t !== 0 && t !== r && (t & o) === 0 && (o = r & -r,
        a = t & -t,
        o >= a || o === 32 && (a & 4194048) !== 0) ? t : r
    }
    function Fn(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function jm(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Go() {
        var e = ci;
        return ci <<= 1,
        (ci & 4194048) === 0 && (ci = 256),
        e
    }
    function Qo() {
        var e = fi;
        return fi <<= 1,
        (fi & 62914560) === 0 && (fi = 4194304),
        e
    }
    function Zr(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function Pn(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function _m(e, t, a, n, r, o) {
        var h = e.pendingLanes;
        e.pendingLanes = a,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= a,
        e.entangledLanes &= a,
        e.errorRecoveryDisabledLanes &= a,
        e.shellSuspendCounter = 0;
        var y = e.entanglements
          , S = e.expirationTimes
          , w = e.hiddenUpdates;
        for (a = h & ~a; 0 < a; ) {
            var k = 31 - gt(a)
              , Y = 1 << k;
            y[k] = 0,
            S[k] = -1;
            var D = w[k];
            if (D !== null)
                for (w[k] = null,
                k = 0; k < D.length; k++) {
                    var j = D[k];
                    j !== null && (j.lane &= -536870913)
                }
            a &= ~Y
        }
        n !== 0 && Ko(e, n, 0),
        o !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(h & ~t))
    }
    function Ko(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var n = 31 - gt(t);
        e.entangledLanes |= t,
        e.entanglements[n] = e.entanglements[n] | 1073741824 | a & 4194090
    }
    function $o(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var n = 31 - gt(a)
              , r = 1 << n;
            r & t | e[n] & t && (e[n] |= t),
            a &= ~r
        }
    }
    function Jr(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Fr(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Zo() {
        var e = C.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : wh(e.type))
    }
    function Lm(e, t) {
        var a = C.p;
        try {
            return C.p = e,
            t()
        } finally {
            C.p = a
        }
    }
    var fa = Math.random().toString(36).slice(2)
      , Ie = "__reactFiber$" + fa
      , it = "__reactProps$" + fa
      , an = "__reactContainer$" + fa
      , Pr = "__reactEvents$" + fa
      , Um = "__reactListeners$" + fa
      , Mm = "__reactHandles$" + fa
      , Jo = "__reactResources$" + fa
      , Wn = "__reactMarker$" + fa;
    function Wr(e) {
        delete e[Ie],
        delete e[it],
        delete e[Pr],
        delete e[Um],
        delete e[Mm]
    }
    function nn(e) {
        var t = e[Ie];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[an] || a[Ie]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = hh(e); e !== null; ) {
                        if (a = e[Ie])
                            return a;
                        e = hh(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function ln(e) {
        if (e = e[Ie] || e[an]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function In(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(s(33))
    }
    function rn(e) {
        var t = e[Jo];
        return t || (t = e[Jo] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Ke(e) {
        e[Wn] = !0
    }
    var Fo = new Set
      , Po = {};
    function za(e, t) {
        un(e, t),
        un(e + "Capture", t)
    }
    function un(e, t) {
        for (Po[e] = t,
        e = 0; e < t.length; e++)
            Fo.add(t[e])
    }
    var zm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Wo = {}
      , Io = {};
    function Hm(e) {
        return Qr.call(Io, e) ? !0 : Qr.call(Wo, e) ? !1 : zm.test(e) ? Io[e] = !0 : (Wo[e] = !0,
        !1)
    }
    function hi(e, t, a) {
        if (Hm(t))
            if (a === null)
                e.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var n = t.toLowerCase().slice(0, 5);
                    if (n !== "data-" && n !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + a)
            }
    }
    function gi(e, t, a) {
        if (a === null)
            e.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + a)
        }
    }
    function Kt(e, t, a, n) {
        if (n === null)
            e.removeAttribute(a);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return
            }
            e.setAttributeNS(t, a, "" + n)
        }
    }
    var Ir, ec;
    function sn(e) {
        if (Ir === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Ir = t && t[1] || "",
                ec = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ir + e + ec
    }
    var eu = !1;
    function tu(e, t) {
        if (!e || eu)
            return "";
        eu = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var Y = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Y.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Y, [])
                                } catch (j) {
                                    var D = j
                                }
                                Reflect.construct(e, [], Y)
                            } else {
                                try {
                                    Y.call()
                                } catch (j) {
                                    D = j
                                }
                                e.call(Y.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (j) {
                                D = j
                            }
                            (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {})
                        }
                    } catch (j) {
                        if (j && D && typeof j.stack == "string")
                            return [j.stack, D.stack]
                    }
                    return [null, null]
                }
            };
            n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var r = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
            r && r.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var o = n.DetermineComponentFrameRoot()
              , h = o[0]
              , y = o[1];
            if (h && y) {
                var S = h.split(`
`)
                  , w = y.split(`
`);
                for (r = n = 0; n < S.length && !S[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                for (; r < w.length && !w[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                if (n === S.length || r === w.length)
                    for (n = S.length - 1,
                    r = w.length - 1; 1 <= n && 0 <= r && S[n] !== w[r]; )
                        r--;
                for (; 1 <= n && 0 <= r; n--,
                r--)
                    if (S[n] !== w[r]) {
                        if (n !== 1 || r !== 1)
                            do
                                if (n--,
                                r--,
                                0 > r || S[n] !== w[r]) {
                                    var k = `
` + S[n].replace(" at new ", " at ");
                                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)),
                                    k
                                }
                            while (1 <= n && 0 <= r);
                        break
                    }
            }
        } finally {
            eu = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? sn(a) : ""
    }
    function km(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return sn(e.type);
        case 16:
            return sn("Lazy");
        case 13:
            return sn("Suspense");
        case 19:
            return sn("SuspenseList");
        case 0:
        case 15:
            return tu(e.type, !1);
        case 11:
            return tu(e.type.render, !1);
        case 1:
            return tu(e.type, !0);
        case 31:
            return sn("Activity");
        default:
            return ""
        }
    }
    function tc(e) {
        try {
            var t = "";
            do
                t += km(e),
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function Et(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function ac(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Bm(e) {
        var t = ac(e) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , n = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var r = a.get
              , o = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return r.call(this)
                },
                set: function(h) {
                    n = "" + h,
                    o.call(this, h)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(h) {
                    n = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function mi(e) {
        e._valueTracker || (e._valueTracker = Bm(e))
    }
    function nc(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , n = "";
        return e && (n = ac(e) ? e.checked ? "true" : "false" : e.value),
        e = n,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function pi(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var qm = /[\n"\\]/g;
    function Rt(e) {
        return e.replace(qm, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function au(e, t, a, n, r, o, h, y) {
        e.name = "",
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"),
        t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"),
        t != null ? nu(e, h, Et(t)) : a != null ? nu(e, h, Et(a)) : n != null && e.removeAttribute("value"),
        r == null && o != null && (e.defaultChecked = !!o),
        r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"),
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Et(y) : e.removeAttribute("name")
    }
    function lc(e, t, a, n, r, o, h, y) {
        if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.type = o),
        t != null || a != null) {
            if (!(o !== "submit" && o !== "reset" || t != null))
                return;
            a = a != null ? "" + Et(a) : "",
            t = t != null ? "" + Et(t) : a,
            y || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = n ?? r,
        n = typeof n != "function" && typeof n != "symbol" && !!n,
        e.checked = y ? e.checked : !!n,
        e.defaultChecked = !!n,
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h)
    }
    function nu(e, t, a) {
        t === "number" && pi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function on(e, t, a, n) {
        if (e = e.options,
        t) {
            t = {};
            for (var r = 0; r < a.length; r++)
                t["$" + a[r]] = !0;
            for (a = 0; a < e.length; a++)
                r = t.hasOwnProperty("$" + e[a].value),
                e[a].selected !== r && (e[a].selected = r),
                r && n && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + Et(a),
            t = null,
            r = 0; r < e.length; r++) {
                if (e[r].value === a) {
                    e[r].selected = !0,
                    n && (e[r].defaultSelected = !0);
                    return
                }
                t !== null || e[r].disabled || (t = e[r])
            }
            t !== null && (t.selected = !0)
        }
    }
    function ic(e, t, a) {
        if (t != null && (t = "" + Et(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + Et(a) : ""
    }
    function rc(e, t, a, n) {
        if (t == null) {
            if (n != null) {
                if (a != null)
                    throw Error(s(92));
                if (je(n)) {
                    if (1 < n.length)
                        throw Error(s(93));
                    n = n[0]
                }
                a = n
            }
            a == null && (a = ""),
            t = a
        }
        a = Et(t),
        e.defaultValue = a,
        n = e.textContent,
        n === a && n !== "" && n !== null && (e.value = n)
    }
    function cn(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Ym = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function uc(e, t, a) {
        var n = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ym.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function sc(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(s(62));
        if (e = e.style,
        a != null) {
            for (var n in a)
                !a.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
            for (var r in t)
                n = t[r],
                t.hasOwnProperty(r) && a[r] !== n && uc(e, r, n)
        } else
            for (var o in t)
                t.hasOwnProperty(o) && uc(e, o, t[o])
    }
    function lu(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Vm = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Xm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function yi(e) {
        return Xm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var iu = null;
    function ru(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var fn = null
      , dn = null;
    function oc(e) {
        var t = ln(e);
        if (t && (e = t.stateNode)) {
            var a = e[it] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (au(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + Rt("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var n = a[t];
                        if (n !== e && n.form === e.form) {
                            var r = n[it] || null;
                            if (!r)
                                throw Error(s(90));
                            au(n, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        n = a[t],
                        n.form === e.form && nc(n)
                }
                break e;
            case "textarea":
                ic(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && on(e, !!a.multiple, t, !1)
            }
        }
    }
    var uu = !1;
    function cc(e, t, a) {
        if (uu)
            return e(t, a);
        uu = !0;
        try {
            var n = e(t);
            return n
        } finally {
            if (uu = !1,
            (fn !== null || dn !== null) && (ar(),
            fn && (t = fn,
            e = dn,
            dn = fn = null,
            oc(t),
            e)))
                for (t = 0; t < e.length; t++)
                    oc(e[t])
        }
    }
    function el(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var n = a[it] || null;
        if (n === null)
            return null;
        a = n[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (e = e.type,
            n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !n;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (a && typeof a != "function")
            throw Error(s(231, t, typeof a));
        return a
    }
    var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , su = !1;
    if ($t)
        try {
            var tl = {};
            Object.defineProperty(tl, "passive", {
                get: function() {
                    su = !0
                }
            }),
            window.addEventListener("test", tl, tl),
            window.removeEventListener("test", tl, tl)
        } catch {
            su = !1
        }
    var da = null
      , ou = null
      , vi = null;
    function fc() {
        if (vi)
            return vi;
        var e, t = ou, a = t.length, n, r = "value"in da ? da.value : da.textContent, o = r.length;
        for (e = 0; e < a && t[e] === r[e]; e++)
            ;
        var h = a - e;
        for (n = 1; n <= h && t[a - n] === r[o - n]; n++)
            ;
        return vi = r.slice(e, 1 < n ? 1 - n : void 0)
    }
    function bi(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function xi() {
        return !0
    }
    function dc() {
        return !1
    }
    function rt(e) {
        function t(a, n, r, o, h) {
            this._reactName = a,
            this._targetInst = r,
            this.type = n,
            this.nativeEvent = o,
            this.target = h,
            this.currentTarget = null;
            for (var y in e)
                e.hasOwnProperty(y) && (a = e[y],
                this[y] = a ? a(o) : o[y]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? xi : dc,
            this.isPropagationStopped = dc,
            this
        }
        return v(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = xi)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = xi)
            },
            persist: function() {},
            isPersistent: xi
        }),
        t
    }
    var Ha = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Si = rt(Ha), al = v({}, Ha, {
        view: 0,
        detail: 0
    }), Gm = rt(al), cu, fu, nl, Ei = v({}, al, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: hu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== nl && (nl && e.type === "mousemove" ? (cu = e.screenX - nl.screenX,
            fu = e.screenY - nl.screenY) : fu = cu = 0,
            nl = e),
            cu)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : fu
        }
    }), hc = rt(Ei), Qm = v({}, Ei, {
        dataTransfer: 0
    }), Km = rt(Qm), $m = v({}, al, {
        relatedTarget: 0
    }), du = rt($m), Zm = v({}, Ha, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Jm = rt(Zm), Fm = v({}, Ha, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Pm = rt(Fm), Wm = v({}, Ha, {
        data: 0
    }), gc = rt(Wm), Im = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, ep = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, tp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function ap(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = tp[e]) ? !!t[e] : !1
    }
    function hu() {
        return ap
    }
    var np = v({}, al, {
        key: function(e) {
            if (e.key) {
                var t = Im[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = bi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ep[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: hu,
        charCode: function(e) {
            return e.type === "keypress" ? bi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , lp = rt(np)
      , ip = v({}, Ei, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , mc = rt(ip)
      , rp = v({}, al, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: hu
    })
      , up = rt(rp)
      , sp = v({}, Ha, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , op = rt(sp)
      , cp = v({}, Ei, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , fp = rt(cp)
      , dp = v({}, Ha, {
        newState: 0,
        oldState: 0
    })
      , hp = rt(dp)
      , gp = [9, 13, 27, 32]
      , gu = $t && "CompositionEvent"in window
      , ll = null;
    $t && "documentMode"in document && (ll = document.documentMode);
    var mp = $t && "TextEvent"in window && !ll
      , pc = $t && (!gu || ll && 8 < ll && 11 >= ll)
      , yc = " "
      , vc = !1;
    function bc(e, t) {
        switch (e) {
        case "keyup":
            return gp.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function xc(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var hn = !1;
    function pp(e, t) {
        switch (e) {
        case "compositionend":
            return xc(t);
        case "keypress":
            return t.which !== 32 ? null : (vc = !0,
            yc);
        case "textInput":
            return e = t.data,
            e === yc && vc ? null : e;
        default:
            return null
        }
    }
    function yp(e, t) {
        if (hn)
            return e === "compositionend" || !gu && bc(e, t) ? (e = fc(),
            vi = ou = da = null,
            hn = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return pc && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var vp = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Sc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!vp[e.type] : t === "textarea"
    }
    function Ec(e, t, a, n) {
        fn ? dn ? dn.push(n) : dn = [n] : fn = n,
        t = sr(t, "onChange"),
        0 < t.length && (a = new Si("onChange","change",null,a,n),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var il = null
      , rl = null;
    function bp(e) {
        nh(e, 0)
    }
    function Ri(e) {
        var t = In(e);
        if (nc(t))
            return e
    }
    function Rc(e, t) {
        if (e === "change")
            return t
    }
    var Ac = !1;
    if ($t) {
        var mu;
        if ($t) {
            var pu = "oninput"in document;
            if (!pu) {
                var Tc = document.createElement("div");
                Tc.setAttribute("oninput", "return;"),
                pu = typeof Tc.oninput == "function"
            }
            mu = pu
        } else
            mu = !1;
        Ac = mu && (!document.documentMode || 9 < document.documentMode)
    }
    function Oc() {
        il && (il.detachEvent("onpropertychange", Nc),
        rl = il = null)
    }
    function Nc(e) {
        if (e.propertyName === "value" && Ri(rl)) {
            var t = [];
            Ec(t, rl, e, ru(e)),
            cc(bp, t)
        }
    }
    function xp(e, t, a) {
        e === "focusin" ? (Oc(),
        il = t,
        rl = a,
        il.attachEvent("onpropertychange", Nc)) : e === "focusout" && Oc()
    }
    function Sp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Ri(rl)
    }
    function Ep(e, t) {
        if (e === "click")
            return Ri(t)
    }
    function Rp(e, t) {
        if (e === "input" || e === "change")
            return Ri(t)
    }
    function Ap(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var mt = typeof Object.is == "function" ? Object.is : Ap;
    function ul(e, t) {
        if (mt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , n = Object.keys(t);
        if (a.length !== n.length)
            return !1;
        for (n = 0; n < a.length; n++) {
            var r = a[n];
            if (!Qr.call(t, r) || !mt(e[r], t[r]))
                return !1
        }
        return !0
    }
    function wc(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Cc(e, t) {
        var a = wc(e);
        e = 0;
        for (var n; a; ) {
            if (a.nodeType === 3) {
                if (n = e + a.textContent.length,
                e <= t && n >= t)
                    return {
                        node: a,
                        offset: t - e
                    };
                e = n
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = wc(a)
        }
    }
    function Dc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Dc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function jc(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = pi(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = pi(e.document)
        }
        return t
    }
    function yu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Tp = $t && "documentMode"in document && 11 >= document.documentMode
      , gn = null
      , vu = null
      , sl = null
      , bu = !1;
    function _c(e, t, a) {
        var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        bu || gn == null || gn !== pi(n) || (n = gn,
        "selectionStart"in n && yu(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
        n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }),
        sl && ul(sl, n) || (sl = n,
        n = sr(vu, "onSelect"),
        0 < n.length && (t = new Si("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: n
        }),
        t.target = gn)))
    }
    function ka(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var mn = {
        animationend: ka("Animation", "AnimationEnd"),
        animationiteration: ka("Animation", "AnimationIteration"),
        animationstart: ka("Animation", "AnimationStart"),
        transitionrun: ka("Transition", "TransitionRun"),
        transitionstart: ka("Transition", "TransitionStart"),
        transitioncancel: ka("Transition", "TransitionCancel"),
        transitionend: ka("Transition", "TransitionEnd")
    }
      , xu = {}
      , Lc = {};
    $t && (Lc = document.createElement("div").style,
    "AnimationEvent"in window || (delete mn.animationend.animation,
    delete mn.animationiteration.animation,
    delete mn.animationstart.animation),
    "TransitionEvent"in window || delete mn.transitionend.transition);
    function Ba(e) {
        if (xu[e])
            return xu[e];
        if (!mn[e])
            return e;
        var t = mn[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in Lc)
                return xu[e] = t[a];
        return e
    }
    var Uc = Ba("animationend")
      , Mc = Ba("animationiteration")
      , zc = Ba("animationstart")
      , Op = Ba("transitionrun")
      , Np = Ba("transitionstart")
      , wp = Ba("transitioncancel")
      , Hc = Ba("transitionend")
      , kc = new Map
      , Su = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Su.push("scrollEnd");
    function jt(e, t) {
        kc.set(e, t),
        za(t, [e])
    }
    var Bc = new WeakMap;
    function At(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = Bc.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: tc(t)
            },
            Bc.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: tc(t)
        }
    }
    var Tt = []
      , pn = 0
      , Eu = 0;
    function Ai() {
        for (var e = pn, t = Eu = pn = 0; t < e; ) {
            var a = Tt[t];
            Tt[t++] = null;
            var n = Tt[t];
            Tt[t++] = null;
            var r = Tt[t];
            Tt[t++] = null;
            var o = Tt[t];
            if (Tt[t++] = null,
            n !== null && r !== null) {
                var h = n.pending;
                h === null ? r.next = r : (r.next = h.next,
                h.next = r),
                n.pending = r
            }
            o !== 0 && qc(a, r, o)
        }
    }
    function Ti(e, t, a, n) {
        Tt[pn++] = e,
        Tt[pn++] = t,
        Tt[pn++] = a,
        Tt[pn++] = n,
        Eu |= n,
        e.lanes |= n,
        e = e.alternate,
        e !== null && (e.lanes |= n)
    }
    function Ru(e, t, a, n) {
        return Ti(e, t, a, n),
        Oi(e)
    }
    function yn(e, t) {
        return Ti(e, null, null, t),
        Oi(e)
    }
    function qc(e, t, a) {
        e.lanes |= a;
        var n = e.alternate;
        n !== null && (n.lanes |= a);
        for (var r = !1, o = e.return; o !== null; )
            o.childLanes |= a,
            n = o.alternate,
            n !== null && (n.childLanes |= a),
            o.tag === 22 && (e = o.stateNode,
            e === null || e._visibility & 1 || (r = !0)),
            e = o,
            o = o.return;
        return e.tag === 3 ? (o = e.stateNode,
        r && t !== null && (r = 31 - gt(a),
        e = o.hiddenUpdates,
        n = e[r],
        n === null ? e[r] = [t] : n.push(t),
        t.lane = a | 536870912),
        o) : null
    }
    function Oi(e) {
        if (50 < Ll)
            throw Ll = 0,
            Cs = null,
            Error(s(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var vn = {};
    function Cp(e, t, a, n) {
        this.tag = e,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = n,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function pt(e, t, a, n) {
        return new Cp(e,t,a,n)
    }
    function Au(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Zt(e, t) {
        var a = e.alternate;
        return a === null ? (a = pt(e.tag, t, e.key, e.mode),
        a.elementType = e.elementType,
        a.type = e.type,
        a.stateNode = e.stateNode,
        a.alternate = e,
        e.alternate = a) : (a.pendingProps = t,
        a.type = e.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = e.flags & 65011712,
        a.childLanes = e.childLanes,
        a.lanes = e.lanes,
        a.child = e.child,
        a.memoizedProps = e.memoizedProps,
        a.memoizedState = e.memoizedState,
        a.updateQueue = e.updateQueue,
        t = e.dependencies,
        a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        a.sibling = e.sibling,
        a.index = e.index,
        a.ref = e.ref,
        a.refCleanup = e.refCleanup,
        a
    }
    function Yc(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = a.childLanes,
        e.lanes = a.lanes,
        e.child = a.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = a.memoizedProps,
        e.memoizedState = a.memoizedState,
        e.updateQueue = a.updateQueue,
        e.type = a.type,
        t = a.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Ni(e, t, a, n, r, o) {
        var h = 0;
        if (n = e,
        typeof e == "function")
            Au(e) && (h = 1);
        else if (typeof e == "string")
            h = j0(e, a, F.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case ue:
                return e = pt(31, a, t, r),
                e.elementType = ue,
                e.lanes = o,
                e;
            case A:
                return qa(a.children, r, o, t);
            case z:
                h = 8,
                r |= 24;
                break;
            case M:
                return e = pt(12, a, t, r | 2),
                e.elementType = M,
                e.lanes = o,
                e;
            case $:
                return e = pt(13, a, t, r),
                e.elementType = $,
                e.lanes = o,
                e;
            case fe:
                return e = pt(19, a, t, r),
                e.elementType = fe,
                e.lanes = o,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case V:
                    case G:
                        h = 10;
                        break e;
                    case Z:
                        h = 9;
                        break e;
                    case P:
                        h = 11;
                        break e;
                    case ne:
                        h = 14;
                        break e;
                    case ie:
                        h = 16,
                        n = null;
                        break e
                    }
                h = 29,
                a = Error(s(130, e === null ? "null" : typeof e, "")),
                n = null
            }
        return t = pt(h, a, t, r),
        t.elementType = e,
        t.type = n,
        t.lanes = o,
        t
    }
    function qa(e, t, a, n) {
        return e = pt(7, e, n, t),
        e.lanes = a,
        e
    }
    function Tu(e, t, a) {
        return e = pt(6, e, null, t),
        e.lanes = a,
        e
    }
    function Ou(e, t, a) {
        return t = pt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var bn = []
      , xn = 0
      , wi = null
      , Ci = 0
      , Ot = []
      , Nt = 0
      , Ya = null
      , Jt = 1
      , Ft = "";
    function Va(e, t) {
        bn[xn++] = Ci,
        bn[xn++] = wi,
        wi = e,
        Ci = t
    }
    function Vc(e, t, a) {
        Ot[Nt++] = Jt,
        Ot[Nt++] = Ft,
        Ot[Nt++] = Ya,
        Ya = e;
        var n = Jt;
        e = Ft;
        var r = 32 - gt(n) - 1;
        n &= ~(1 << r),
        a += 1;
        var o = 32 - gt(t) + r;
        if (30 < o) {
            var h = r - r % 5;
            o = (n & (1 << h) - 1).toString(32),
            n >>= h,
            r -= h,
            Jt = 1 << 32 - gt(t) + r | a << r | n,
            Ft = o + e
        } else
            Jt = 1 << o | a << r | n,
            Ft = e
    }
    function Nu(e) {
        e.return !== null && (Va(e, 1),
        Vc(e, 1, 0))
    }
    function wu(e) {
        for (; e === wi; )
            wi = bn[--xn],
            bn[xn] = null,
            Ci = bn[--xn],
            bn[xn] = null;
        for (; e === Ya; )
            Ya = Ot[--Nt],
            Ot[Nt] = null,
            Ft = Ot[--Nt],
            Ot[Nt] = null,
            Jt = Ot[--Nt],
            Ot[Nt] = null
    }
    var lt = null
      , He = null
      , xe = !1
      , Xa = null
      , Ht = !1
      , Cu = Error(s(519));
    function Ga(e) {
        var t = Error(s(418, ""));
        throw fl(At(t, e)),
        Cu
    }
    function Xc(e) {
        var t = e.stateNode
          , a = e.type
          , n = e.memoizedProps;
        switch (t[Ie] = e,
        t[it] = n,
        a) {
        case "dialog":
            me("cancel", t),
            me("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            me("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Ml.length; a++)
                me(Ml[a], t);
            break;
        case "source":
            me("error", t);
            break;
        case "img":
        case "image":
        case "link":
            me("error", t),
            me("load", t);
            break;
        case "details":
            me("toggle", t);
            break;
        case "input":
            me("invalid", t),
            lc(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0),
            mi(t);
            break;
        case "select":
            me("invalid", t);
            break;
        case "textarea":
            me("invalid", t),
            rc(t, n.value, n.defaultValue, n.children),
            mi(t)
        }
        a = n.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || n.suppressHydrationWarning === !0 || uh(t.textContent, a) ? (n.popover != null && (me("beforetoggle", t),
        me("toggle", t)),
        n.onScroll != null && me("scroll", t),
        n.onScrollEnd != null && me("scrollend", t),
        n.onClick != null && (t.onclick = or),
        t = !0) : t = !1,
        t || Ga(e)
    }
    function Gc(e) {
        for (lt = e.return; lt; )
            switch (lt.tag) {
            case 5:
            case 13:
                Ht = !1;
                return;
            case 27:
            case 3:
                Ht = !0;
                return;
            default:
                lt = lt.return
            }
    }
    function ol(e) {
        if (e !== lt)
            return !1;
        if (!xe)
            return Gc(e),
            xe = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || Qs(e.type, e.memoizedProps)),
        a = !a),
        a && He && Ga(e),
        Gc(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(s(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (a = e.data,
                        a === "/$") {
                            if (t === 0) {
                                He = Lt(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                He = null
            }
        } else
            t === 27 ? (t = He,
            wa(e.type) ? (e = Js,
            Js = null,
            He = e) : He = t) : He = lt ? Lt(e.stateNode.nextSibling) : null;
        return !0
    }
    function cl() {
        He = lt = null,
        xe = !1
    }
    function Qc() {
        var e = Xa;
        return e !== null && (ot === null ? ot = e : ot.push.apply(ot, e),
        Xa = null),
        e
    }
    function fl(e) {
        Xa === null ? Xa = [e] : Xa.push(e)
    }
    var Du = H(null)
      , Qa = null
      , Pt = null;
    function ha(e, t, a) {
        K(Du, t._currentValue),
        t._currentValue = a
    }
    function Wt(e) {
        e._currentValue = Du.current,
        Q(Du)
    }
    function ju(e, t, a) {
        for (; e !== null; ) {
            var n = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function _u(e, t, a, n) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
            var o = r.dependencies;
            if (o !== null) {
                var h = r.child;
                o = o.firstContext;
                e: for (; o !== null; ) {
                    var y = o;
                    o = r;
                    for (var S = 0; S < t.length; S++)
                        if (y.context === t[S]) {
                            o.lanes |= a,
                            y = o.alternate,
                            y !== null && (y.lanes |= a),
                            ju(o.return, a, e),
                            n || (h = null);
                            break e
                        }
                    o = y.next
                }
            } else if (r.tag === 18) {
                if (h = r.return,
                h === null)
                    throw Error(s(341));
                h.lanes |= a,
                o = h.alternate,
                o !== null && (o.lanes |= a),
                ju(h, a, e),
                h = null
            } else
                h = r.child;
            if (h !== null)
                h.return = r;
            else
                for (h = r; h !== null; ) {
                    if (h === e) {
                        h = null;
                        break
                    }
                    if (r = h.sibling,
                    r !== null) {
                        r.return = h.return,
                        h = r;
                        break
                    }
                    h = h.return
                }
            r = h
        }
    }
    function dl(e, t, a, n) {
        e = null;
        for (var r = t, o = !1; r !== null; ) {
            if (!o) {
                if ((r.flags & 524288) !== 0)
                    o = !0;
                else if ((r.flags & 262144) !== 0)
                    break
            }
            if (r.tag === 10) {
                var h = r.alternate;
                if (h === null)
                    throw Error(s(387));
                if (h = h.memoizedProps,
                h !== null) {
                    var y = r.type;
                    mt(r.pendingProps.value, h.value) || (e !== null ? e.push(y) : e = [y])
                }
            } else if (r === dt.current) {
                if (h = r.alternate,
                h === null)
                    throw Error(s(387));
                h.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Yl) : e = [Yl])
            }
            r = r.return
        }
        e !== null && _u(t, e, a, n),
        t.flags |= 262144
    }
    function Di(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!mt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Ka(e) {
        Qa = e,
        Pt = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function et(e) {
        return Kc(Qa, e)
    }
    function ji(e, t) {
        return Qa === null && Ka(e),
        Kc(e, t)
    }
    function Kc(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        Pt === null) {
            if (e === null)
                throw Error(s(308));
            Pt = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Pt = Pt.next = t;
        return a
    }
    var Dp = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, n) {
                e.push(n)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(a) {
                return a()
            })
        }
    }
      , jp = i.unstable_scheduleCallback
      , _p = i.unstable_NormalPriority
      , Ge = {
        $$typeof: G,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Lu() {
        return {
            controller: new Dp,
            data: new Map,
            refCount: 0
        }
    }
    function hl(e) {
        e.refCount--,
        e.refCount === 0 && jp(_p, function() {
            e.controller.abort()
        })
    }
    var gl = null
      , Uu = 0
      , Sn = 0
      , En = null;
    function Lp(e, t) {
        if (gl === null) {
            var a = gl = [];
            Uu = 0,
            Sn = zs(),
            En = {
                status: "pending",
                value: void 0,
                then: function(n) {
                    a.push(n)
                }
            }
        }
        return Uu++,
        t.then($c, $c),
        t
    }
    function $c() {
        if (--Uu === 0 && gl !== null) {
            En !== null && (En.status = "fulfilled");
            var e = gl;
            gl = null,
            Sn = 0,
            En = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Up(e, t) {
        var a = []
          , n = {
            status: "pending",
            value: null,
            reason: null,
            then: function(r) {
                a.push(r)
            }
        };
        return e.then(function() {
            n.status = "fulfilled",
            n.value = t;
            for (var r = 0; r < a.length; r++)
                (0,
                a[r])(t)
        }, function(r) {
            for (n.status = "rejected",
            n.reason = r,
            r = 0; r < a.length; r++)
                (0,
                a[r])(void 0)
        }),
        n
    }
    var Zc = L.S;
    L.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Lp(e, t),
        Zc !== null && Zc(e, t)
    }
    ;
    var $a = H(null);
    function Mu() {
        var e = $a.current;
        return e !== null ? e : De.pooledCache
    }
    function _i(e, t) {
        t === null ? K($a, $a.current) : K($a, t.pool)
    }
    function Jc() {
        var e = Mu();
        return e === null ? null : {
            parent: Ge._currentValue,
            pool: e
        }
    }
    var ml = Error(s(460))
      , Fc = Error(s(474))
      , Li = Error(s(542))
      , zu = {
        then: function() {}
    };
    function Pc(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Ui() {}
    function Wc(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Ui, Ui),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            ef(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Ui, Ui);
            else {
                if (e = De,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(s(482));
                e = t,
                e.status = "pending",
                e.then(function(n) {
                    if (t.status === "pending") {
                        var r = t;
                        r.status = "fulfilled",
                        r.value = n
                    }
                }, function(n) {
                    if (t.status === "pending") {
                        var r = t;
                        r.status = "rejected",
                        r.reason = n
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                ef(e),
                e
            }
            throw pl = t,
            ml
        }
    }
    var pl = null;
    function Ic() {
        if (pl === null)
            throw Error(s(459));
        var e = pl;
        return pl = null,
        e
    }
    function ef(e) {
        if (e === ml || e === Li)
            throw Error(s(483))
    }
    var ga = !1;
    function Hu(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function ku(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function ma(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function pa(e, t, a) {
        var n = e.updateQueue;
        if (n === null)
            return null;
        if (n = n.shared,
        (Ee & 2) !== 0) {
            var r = n.pending;
            return r === null ? t.next = t : (t.next = r.next,
            r.next = t),
            n.pending = t,
            t = Oi(e),
            qc(e, null, a),
            t
        }
        return Ti(e, n, t, a),
        Oi(e)
    }
    function yl(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var n = t.lanes;
            n &= e.pendingLanes,
            a |= n,
            t.lanes = a,
            $o(e, a)
        }
    }
    function Bu(e, t) {
        var a = e.updateQueue
          , n = e.alternate;
        if (n !== null && (n = n.updateQueue,
        a === n)) {
            var r = null
              , o = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var h = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    o === null ? r = o = h : o = o.next = h,
                    a = a.next
                } while (a !== null);
                o === null ? r = o = t : o = o.next = t
            } else
                r = o = t;
            a = {
                baseState: n.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: o,
                shared: n.shared,
                callbacks: n.callbacks
            },
            e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
        e === null ? a.firstBaseUpdate = t : e.next = t,
        a.lastBaseUpdate = t
    }
    var qu = !1;
    function vl() {
        if (qu) {
            var e = En;
            if (e !== null)
                throw e
        }
    }
    function bl(e, t, a, n) {
        qu = !1;
        var r = e.updateQueue;
        ga = !1;
        var o = r.firstBaseUpdate
          , h = r.lastBaseUpdate
          , y = r.shared.pending;
        if (y !== null) {
            r.shared.pending = null;
            var S = y
              , w = S.next;
            S.next = null,
            h === null ? o = w : h.next = w,
            h = S;
            var k = e.alternate;
            k !== null && (k = k.updateQueue,
            y = k.lastBaseUpdate,
            y !== h && (y === null ? k.firstBaseUpdate = w : y.next = w,
            k.lastBaseUpdate = S))
        }
        if (o !== null) {
            var Y = r.baseState;
            h = 0,
            k = w = S = null,
            y = o;
            do {
                var D = y.lane & -536870913
                  , j = D !== y.lane;
                if (j ? (ye & D) === D : (n & D) === D) {
                    D !== 0 && D === Sn && (qu = !0),
                    k !== null && (k = k.next = {
                        lane: 0,
                        tag: y.tag,
                        payload: y.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var le = e
                          , te = y;
                        D = t;
                        var Ne = a;
                        switch (te.tag) {
                        case 1:
                            if (le = te.payload,
                            typeof le == "function") {
                                Y = le.call(Ne, Y, D);
                                break e
                            }
                            Y = le;
                            break e;
                        case 3:
                            le.flags = le.flags & -65537 | 128;
                        case 0:
                            if (le = te.payload,
                            D = typeof le == "function" ? le.call(Ne, Y, D) : le,
                            D == null)
                                break e;
                            Y = v({}, Y, D);
                            break e;
                        case 2:
                            ga = !0
                        }
                    }
                    D = y.callback,
                    D !== null && (e.flags |= 64,
                    j && (e.flags |= 8192),
                    j = r.callbacks,
                    j === null ? r.callbacks = [D] : j.push(D))
                } else
                    j = {
                        lane: D,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    },
                    k === null ? (w = k = j,
                    S = Y) : k = k.next = j,
                    h |= D;
                if (y = y.next,
                y === null) {
                    if (y = r.shared.pending,
                    y === null)
                        break;
                    j = y,
                    y = j.next,
                    j.next = null,
                    r.lastBaseUpdate = j,
                    r.shared.pending = null
                }
            } while (!0);
            k === null && (S = Y),
            r.baseState = S,
            r.firstBaseUpdate = w,
            r.lastBaseUpdate = k,
            o === null && (r.shared.lanes = 0),
            Aa |= h,
            e.lanes = h,
            e.memoizedState = Y
        }
    }
    function tf(e, t) {
        if (typeof e != "function")
            throw Error(s(191, e));
        e.call(t)
    }
    function af(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                tf(a[e], t)
    }
    var Rn = H(null)
      , Mi = H(0);
    function nf(e, t) {
        e = ia,
        K(Mi, e),
        K(Rn, t),
        ia = e | t.baseLanes
    }
    function Yu() {
        K(Mi, ia),
        K(Rn, Rn.current)
    }
    function Vu() {
        ia = Mi.current,
        Q(Rn),
        Q(Mi)
    }
    var ya = 0
      , de = null
      , Te = null
      , Ve = null
      , zi = !1
      , An = !1
      , Za = !1
      , Hi = 0
      , xl = 0
      , Tn = null
      , Mp = 0;
    function Be() {
        throw Error(s(321))
    }
    function Xu(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!mt(e[a], t[a]))
                return !1;
        return !0
    }
    function Gu(e, t, a, n, r, o) {
        return ya = o,
        de = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        L.H = e === null || e.memoizedState === null ? Yf : Vf,
        Za = !1,
        o = a(n, r),
        Za = !1,
        An && (o = rf(t, a, n, r)),
        lf(e),
        o
    }
    function lf(e) {
        L.H = Xi;
        var t = Te !== null && Te.next !== null;
        if (ya = 0,
        Ve = Te = de = null,
        zi = !1,
        xl = 0,
        Tn = null,
        t)
            throw Error(s(300));
        e === null || $e || (e = e.dependencies,
        e !== null && Di(e) && ($e = !0))
    }
    function rf(e, t, a, n) {
        de = e;
        var r = 0;
        do {
            if (An && (Tn = null),
            xl = 0,
            An = !1,
            25 <= r)
                throw Error(s(301));
            if (r += 1,
            Ve = Te = null,
            e.updateQueue != null) {
                var o = e.updateQueue;
                o.lastEffect = null,
                o.events = null,
                o.stores = null,
                o.memoCache != null && (o.memoCache.index = 0)
            }
            L.H = Vp,
            o = t(a, n)
        } while (An);
        return o
    }
    function zp() {
        var e = L.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Sl(t) : t,
        e = e.useState()[0],
        (Te !== null ? Te.memoizedState : null) !== e && (de.flags |= 1024),
        t
    }
    function Qu() {
        var e = Hi !== 0;
        return Hi = 0,
        e
    }
    function Ku(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function $u(e) {
        if (zi) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            zi = !1
        }
        ya = 0,
        Ve = Te = de = null,
        An = !1,
        xl = Hi = 0,
        Tn = null
    }
    function ut() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ve === null ? de.memoizedState = Ve = e : Ve = Ve.next = e,
        Ve
    }
    function Xe() {
        if (Te === null) {
            var e = de.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Te.next;
        var t = Ve === null ? de.memoizedState : Ve.next;
        if (t !== null)
            Ve = t,
            Te = e;
        else {
            if (e === null)
                throw de.alternate === null ? Error(s(467)) : Error(s(310));
            Te = e,
            e = {
                memoizedState: Te.memoizedState,
                baseState: Te.baseState,
                baseQueue: Te.baseQueue,
                queue: Te.queue,
                next: null
            },
            Ve === null ? de.memoizedState = Ve = e : Ve = Ve.next = e
        }
        return Ve
    }
    function Zu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Sl(e) {
        var t = xl;
        return xl += 1,
        Tn === null && (Tn = []),
        e = Wc(Tn, e, t),
        t = de,
        (Ve === null ? t.memoizedState : Ve.next) === null && (t = t.alternate,
        L.H = t === null || t.memoizedState === null ? Yf : Vf),
        e
    }
    function ki(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Sl(e);
            if (e.$$typeof === G)
                return et(e)
        }
        throw Error(s(438, String(e)))
    }
    function Ju(e) {
        var t = null
          , a = de.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var n = de.alternate;
            n !== null && (n = n.updateQueue,
            n !== null && (n = n.memoCache,
            n != null && (t = {
                data: n.data.map(function(r) {
                    return r.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        a === null && (a = Zu(),
        de.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            n = 0; n < e; n++)
                a[n] = be;
        return t.index++,
        a
    }
    function It(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Bi(e) {
        var t = Xe();
        return Fu(t, Te, e)
    }
    function Fu(e, t, a) {
        var n = e.queue;
        if (n === null)
            throw Error(s(311));
        n.lastRenderedReducer = a;
        var r = e.baseQueue
          , o = n.pending;
        if (o !== null) {
            if (r !== null) {
                var h = r.next;
                r.next = o.next,
                o.next = h
            }
            t.baseQueue = r = o,
            n.pending = null
        }
        if (o = e.baseState,
        r === null)
            e.memoizedState = o;
        else {
            t = r.next;
            var y = h = null
              , S = null
              , w = t
              , k = !1;
            do {
                var Y = w.lane & -536870913;
                if (Y !== w.lane ? (ye & Y) === Y : (ya & Y) === Y) {
                    var D = w.revertLane;
                    if (D === 0)
                        S !== null && (S = S.next = {
                            lane: 0,
                            revertLane: 0,
                            action: w.action,
                            hasEagerState: w.hasEagerState,
                            eagerState: w.eagerState,
                            next: null
                        }),
                        Y === Sn && (k = !0);
                    else if ((ya & D) === D) {
                        w = w.next,
                        D === Sn && (k = !0);
                        continue
                    } else
                        Y = {
                            lane: 0,
                            revertLane: w.revertLane,
                            action: w.action,
                            hasEagerState: w.hasEagerState,
                            eagerState: w.eagerState,
                            next: null
                        },
                        S === null ? (y = S = Y,
                        h = o) : S = S.next = Y,
                        de.lanes |= D,
                        Aa |= D;
                    Y = w.action,
                    Za && a(o, Y),
                    o = w.hasEagerState ? w.eagerState : a(o, Y)
                } else
                    D = {
                        lane: Y,
                        revertLane: w.revertLane,
                        action: w.action,
                        hasEagerState: w.hasEagerState,
                        eagerState: w.eagerState,
                        next: null
                    },
                    S === null ? (y = S = D,
                    h = o) : S = S.next = D,
                    de.lanes |= Y,
                    Aa |= Y;
                w = w.next
            } while (w !== null && w !== t);
            if (S === null ? h = o : S.next = y,
            !mt(o, e.memoizedState) && ($e = !0,
            k && (a = En,
            a !== null)))
                throw a;
            e.memoizedState = o,
            e.baseState = h,
            e.baseQueue = S,
            n.lastRenderedState = o
        }
        return r === null && (n.lanes = 0),
        [e.memoizedState, n.dispatch]
    }
    function Pu(e) {
        var t = Xe()
          , a = t.queue;
        if (a === null)
            throw Error(s(311));
        a.lastRenderedReducer = e;
        var n = a.dispatch
          , r = a.pending
          , o = t.memoizedState;
        if (r !== null) {
            a.pending = null;
            var h = r = r.next;
            do
                o = e(o, h.action),
                h = h.next;
            while (h !== r);
            mt(o, t.memoizedState) || ($e = !0),
            t.memoizedState = o,
            t.baseQueue === null && (t.baseState = o),
            a.lastRenderedState = o
        }
        return [o, n]
    }
    function uf(e, t, a) {
        var n = de
          , r = Xe()
          , o = xe;
        if (o) {
            if (a === void 0)
                throw Error(s(407));
            a = a()
        } else
            a = t();
        var h = !mt((Te || r).memoizedState, a);
        h && (r.memoizedState = a,
        $e = !0),
        r = r.queue;
        var y = cf.bind(null, n, r, e);
        if (El(2048, 8, y, [e]),
        r.getSnapshot !== t || h || Ve !== null && Ve.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            On(9, qi(), of.bind(null, n, r, a, t), null),
            De === null)
                throw Error(s(349));
            o || (ya & 124) !== 0 || sf(n, t, a)
        }
        return a
    }
    function sf(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = de.updateQueue,
        t === null ? (t = Zu(),
        de.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function of(e, t, a, n) {
        t.value = a,
        t.getSnapshot = n,
        ff(t) && df(e)
    }
    function cf(e, t, a) {
        return a(function() {
            ff(t) && df(e)
        })
    }
    function ff(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !mt(e, a)
        } catch {
            return !0
        }
    }
    function df(e) {
        var t = yn(e, 2);
        t !== null && St(t, e, 2)
    }
    function Wu(e) {
        var t = ut();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            Za) {
                ca(!0);
                try {
                    a()
                } finally {
                    ca(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: It,
            lastRenderedState: e
        },
        t
    }
    function hf(e, t, a, n) {
        return e.baseState = a,
        Fu(e, Te, typeof n == "function" ? n : It)
    }
    function Hp(e, t, a, n, r) {
        if (Vi(e))
            throw Error(s(485));
        if (e = t.action,
        e !== null) {
            var o = {
                payload: r,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    o.listeners.push(h)
                }
            };
            L.T !== null ? a(!0) : o.isTransition = !1,
            n(o),
            a = t.pending,
            a === null ? (o.next = t.pending = o,
            gf(t, o)) : (o.next = a.next,
            t.pending = a.next = o)
        }
    }
    function gf(e, t) {
        var a = t.action
          , n = t.payload
          , r = e.state;
        if (t.isTransition) {
            var o = L.T
              , h = {};
            L.T = h;
            try {
                var y = a(r, n)
                  , S = L.S;
                S !== null && S(h, y),
                mf(e, t, y)
            } catch (w) {
                Iu(e, t, w)
            } finally {
                L.T = o
            }
        } else
            try {
                o = a(r, n),
                mf(e, t, o)
            } catch (w) {
                Iu(e, t, w)
            }
    }
    function mf(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(n) {
            pf(e, t, n)
        }, function(n) {
            return Iu(e, t, n)
        }) : pf(e, t, a)
    }
    function pf(e, t, a) {
        t.status = "fulfilled",
        t.value = a,
        yf(t),
        e.state = a,
        t = e.pending,
        t !== null && (a = t.next,
        a === t ? e.pending = null : (a = a.next,
        t.next = a,
        gf(e, a)))
    }
    function Iu(e, t, a) {
        var n = e.pending;
        if (e.pending = null,
        n !== null) {
            n = n.next;
            do
                t.status = "rejected",
                t.reason = a,
                yf(t),
                t = t.next;
            while (t !== n)
        }
        e.action = null
    }
    function yf(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function vf(e, t) {
        return t
    }
    function bf(e, t) {
        if (xe) {
            var a = De.formState;
            if (a !== null) {
                e: {
                    var n = de;
                    if (xe) {
                        if (He) {
                            t: {
                                for (var r = He, o = Ht; r.nodeType !== 8; ) {
                                    if (!o) {
                                        r = null;
                                        break t
                                    }
                                    if (r = Lt(r.nextSibling),
                                    r === null) {
                                        r = null;
                                        break t
                                    }
                                }
                                o = r.data,
                                r = o === "F!" || o === "F" ? r : null
                            }
                            if (r) {
                                He = Lt(r.nextSibling),
                                n = r.data === "F!";
                                break e
                            }
                        }
                        Ga(n)
                    }
                    n = !1
                }
                n && (t = a[0])
            }
        }
        return a = ut(),
        a.memoizedState = a.baseState = t,
        n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: vf,
            lastRenderedState: t
        },
        a.queue = n,
        a = kf.bind(null, de, n),
        n.dispatch = a,
        n = Wu(!1),
        o = ls.bind(null, de, !1, n.queue),
        n = ut(),
        r = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        n.queue = r,
        a = Hp.bind(null, de, r, o, a),
        r.dispatch = a,
        n.memoizedState = e,
        [t, a, !1]
    }
    function xf(e) {
        var t = Xe();
        return Sf(t, Te, e)
    }
    function Sf(e, t, a) {
        if (t = Fu(e, t, vf)[0],
        e = Bi(It)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var n = Sl(t)
            } catch (h) {
                throw h === ml ? Li : h
            }
        else
            n = t;
        t = Xe();
        var r = t.queue
          , o = r.dispatch;
        return a !== t.memoizedState && (de.flags |= 2048,
        On(9, qi(), kp.bind(null, r, a), null)),
        [n, o, e]
    }
    function kp(e, t) {
        e.action = t
    }
    function Ef(e) {
        var t = Xe()
          , a = Te;
        if (a !== null)
            return Sf(t, a, e);
        Xe(),
        t = t.memoizedState,
        a = Xe();
        var n = a.queue.dispatch;
        return a.memoizedState = e,
        [t, n, !1]
    }
    function On(e, t, a, n) {
        return e = {
            tag: e,
            create: a,
            deps: n,
            inst: t,
            next: null
        },
        t = de.updateQueue,
        t === null && (t = Zu(),
        de.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (n = a.next,
        a.next = e,
        e.next = n,
        t.lastEffect = e),
        e
    }
    function qi() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function Rf() {
        return Xe().memoizedState
    }
    function Yi(e, t, a, n) {
        var r = ut();
        n = n === void 0 ? null : n,
        de.flags |= e,
        r.memoizedState = On(1 | t, qi(), a, n)
    }
    function El(e, t, a, n) {
        var r = Xe();
        n = n === void 0 ? null : n;
        var o = r.memoizedState.inst;
        Te !== null && n !== null && Xu(n, Te.memoizedState.deps) ? r.memoizedState = On(t, o, a, n) : (de.flags |= e,
        r.memoizedState = On(1 | t, o, a, n))
    }
    function Af(e, t) {
        Yi(8390656, 8, e, t)
    }
    function Tf(e, t) {
        El(2048, 8, e, t)
    }
    function Of(e, t) {
        return El(4, 2, e, t)
    }
    function Nf(e, t) {
        return El(4, 4, e, t)
    }
    function wf(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Cf(e, t, a) {
        a = a != null ? a.concat([e]) : null,
        El(4, 4, wf.bind(null, t, e), a)
    }
    function es() {}
    function Df(e, t) {
        var a = Xe();
        t = t === void 0 ? null : t;
        var n = a.memoizedState;
        return t !== null && Xu(t, n[1]) ? n[0] : (a.memoizedState = [e, t],
        e)
    }
    function jf(e, t) {
        var a = Xe();
        t = t === void 0 ? null : t;
        var n = a.memoizedState;
        if (t !== null && Xu(t, n[1]))
            return n[0];
        if (n = e(),
        Za) {
            ca(!0);
            try {
                e()
            } finally {
                ca(!1)
            }
        }
        return a.memoizedState = [n, t],
        n
    }
    function ts(e, t, a) {
        return a === void 0 || (ya & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = Ud(),
        de.lanes |= e,
        Aa |= e,
        a)
    }
    function _f(e, t, a, n) {
        return mt(a, t) ? a : Rn.current !== null ? (e = ts(e, a, n),
        mt(e, t) || ($e = !0),
        e) : (ya & 42) === 0 ? ($e = !0,
        e.memoizedState = a) : (e = Ud(),
        de.lanes |= e,
        Aa |= e,
        t)
    }
    function Lf(e, t, a, n, r) {
        var o = C.p;
        C.p = o !== 0 && 8 > o ? o : 8;
        var h = L.T
          , y = {};
        L.T = y,
        ls(e, !1, t, a);
        try {
            var S = r()
              , w = L.S;
            if (w !== null && w(y, S),
            S !== null && typeof S == "object" && typeof S.then == "function") {
                var k = Up(S, n);
                Rl(e, t, k, xt(e))
            } else
                Rl(e, t, n, xt(e))
        } catch (Y) {
            Rl(e, t, {
                then: function() {},
                status: "rejected",
                reason: Y
            }, xt())
        } finally {
            C.p = o,
            L.T = h
        }
    }
    function Bp() {}
    function as(e, t, a, n) {
        if (e.tag !== 5)
            throw Error(s(476));
        var r = Uf(e).queue;
        Lf(e, r, t, X, a === null ? Bp : function() {
            return Mf(e),
            a(n)
        }
        )
    }
    function Uf(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: X,
            baseState: X,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: It,
                lastRenderedState: X
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: It,
                lastRenderedState: a
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Mf(e) {
        var t = Uf(e).next.queue;
        Rl(e, t, {}, xt())
    }
    function ns() {
        return et(Yl)
    }
    function zf() {
        return Xe().memoizedState
    }
    function Hf() {
        return Xe().memoizedState
    }
    function qp(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = xt();
                e = ma(a);
                var n = pa(t, e, a);
                n !== null && (St(n, t, a),
                yl(n, t, a)),
                t = {
                    cache: Lu()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Yp(e, t, a) {
        var n = xt();
        a = {
            lane: n,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Vi(e) ? Bf(t, a) : (a = Ru(e, t, a, n),
        a !== null && (St(a, e, n),
        qf(a, t, n)))
    }
    function kf(e, t, a) {
        var n = xt();
        Rl(e, t, a, n)
    }
    function Rl(e, t, a, n) {
        var r = {
            lane: n,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Vi(e))
            Bf(t, r);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
            o !== null))
                try {
                    var h = t.lastRenderedState
                      , y = o(h, a);
                    if (r.hasEagerState = !0,
                    r.eagerState = y,
                    mt(y, h))
                        return Ti(e, t, r, 0),
                        De === null && Ai(),
                        !1
                } catch {} finally {}
            if (a = Ru(e, t, r, n),
            a !== null)
                return St(a, e, n),
                qf(a, t, n),
                !0
        }
        return !1
    }
    function ls(e, t, a, n) {
        if (n = {
            lane: 2,
            revertLane: zs(),
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Vi(e)) {
            if (t)
                throw Error(s(479))
        } else
            t = Ru(e, a, n, 2),
            t !== null && St(t, e, 2)
    }
    function Vi(e) {
        var t = e.alternate;
        return e === de || t !== null && t === de
    }
    function Bf(e, t) {
        An = zi = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function qf(e, t, a) {
        if ((a & 4194048) !== 0) {
            var n = t.lanes;
            n &= e.pendingLanes,
            a |= n,
            t.lanes = a,
            $o(e, a)
        }
    }
    var Xi = {
        readContext: et,
        use: ki,
        useCallback: Be,
        useContext: Be,
        useEffect: Be,
        useImperativeHandle: Be,
        useLayoutEffect: Be,
        useInsertionEffect: Be,
        useMemo: Be,
        useReducer: Be,
        useRef: Be,
        useState: Be,
        useDebugValue: Be,
        useDeferredValue: Be,
        useTransition: Be,
        useSyncExternalStore: Be,
        useId: Be,
        useHostTransitionStatus: Be,
        useFormState: Be,
        useActionState: Be,
        useOptimistic: Be,
        useMemoCache: Be,
        useCacheRefresh: Be
    }
      , Yf = {
        readContext: et,
        use: ki,
        useCallback: function(e, t) {
            return ut().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: et,
        useEffect: Af,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            Yi(4194308, 4, wf.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return Yi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Yi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = ut();
            t = t === void 0 ? null : t;
            var n = e();
            if (Za) {
                ca(!0);
                try {
                    e()
                } finally {
                    ca(!1)
                }
            }
            return a.memoizedState = [n, t],
            n
        },
        useReducer: function(e, t, a) {
            var n = ut();
            if (a !== void 0) {
                var r = a(t);
                if (Za) {
                    ca(!0);
                    try {
                        a(t)
                    } finally {
                        ca(!1)
                    }
                }
            } else
                r = t;
            return n.memoizedState = n.baseState = r,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: r
            },
            n.queue = e,
            e = e.dispatch = Yp.bind(null, de, e),
            [n.memoizedState, e]
        },
        useRef: function(e) {
            var t = ut();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = Wu(e);
            var t = e.queue
              , a = kf.bind(null, de, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: es,
        useDeferredValue: function(e, t) {
            var a = ut();
            return ts(a, e, t)
        },
        useTransition: function() {
            var e = Wu(!1);
            return e = Lf.bind(null, de, e.queue, !0, !1),
            ut().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var n = de
              , r = ut();
            if (xe) {
                if (a === void 0)
                    throw Error(s(407));
                a = a()
            } else {
                if (a = t(),
                De === null)
                    throw Error(s(349));
                (ye & 124) !== 0 || sf(n, t, a)
            }
            r.memoizedState = a;
            var o = {
                value: a,
                getSnapshot: t
            };
            return r.queue = o,
            Af(cf.bind(null, n, o, e), [e]),
            n.flags |= 2048,
            On(9, qi(), of.bind(null, n, o, a, t), null),
            a
        },
        useId: function() {
            var e = ut()
              , t = De.identifierPrefix;
            if (xe) {
                var a = Ft
                  , n = Jt;
                a = (n & ~(1 << 32 - gt(n) - 1)).toString(32) + a,
                t = "«" + t + "R" + a,
                a = Hi++,
                0 < a && (t += "H" + a.toString(32)),
                t += "»"
            } else
                a = Mp++,
                t = "«" + t + "r" + a.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: ns,
        useFormState: bf,
        useActionState: bf,
        useOptimistic: function(e) {
            var t = ut();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = ls.bind(null, de, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: Ju,
        useCacheRefresh: function() {
            return ut().memoizedState = qp.bind(null, de)
        }
    }
      , Vf = {
        readContext: et,
        use: ki,
        useCallback: Df,
        useContext: et,
        useEffect: Tf,
        useImperativeHandle: Cf,
        useInsertionEffect: Of,
        useLayoutEffect: Nf,
        useMemo: jf,
        useReducer: Bi,
        useRef: Rf,
        useState: function() {
            return Bi(It)
        },
        useDebugValue: es,
        useDeferredValue: function(e, t) {
            var a = Xe();
            return _f(a, Te.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Bi(It)[0]
              , t = Xe().memoizedState;
            return [typeof e == "boolean" ? e : Sl(e), t]
        },
        useSyncExternalStore: uf,
        useId: zf,
        useHostTransitionStatus: ns,
        useFormState: xf,
        useActionState: xf,
        useOptimistic: function(e, t) {
            var a = Xe();
            return hf(a, Te, e, t)
        },
        useMemoCache: Ju,
        useCacheRefresh: Hf
    }
      , Vp = {
        readContext: et,
        use: ki,
        useCallback: Df,
        useContext: et,
        useEffect: Tf,
        useImperativeHandle: Cf,
        useInsertionEffect: Of,
        useLayoutEffect: Nf,
        useMemo: jf,
        useReducer: Pu,
        useRef: Rf,
        useState: function() {
            return Pu(It)
        },
        useDebugValue: es,
        useDeferredValue: function(e, t) {
            var a = Xe();
            return Te === null ? ts(a, e, t) : _f(a, Te.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Pu(It)[0]
              , t = Xe().memoizedState;
            return [typeof e == "boolean" ? e : Sl(e), t]
        },
        useSyncExternalStore: uf,
        useId: zf,
        useHostTransitionStatus: ns,
        useFormState: Ef,
        useActionState: Ef,
        useOptimistic: function(e, t) {
            var a = Xe();
            return Te !== null ? hf(a, Te, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: Ju,
        useCacheRefresh: Hf
    }
      , Nn = null
      , Al = 0;
    function Gi(e) {
        var t = Al;
        return Al += 1,
        Nn === null && (Nn = []),
        Wc(Nn, e, t)
    }
    function Tl(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function Qi(e, t) {
        throw t.$$typeof === x ? Error(s(525)) : (e = Object.prototype.toString.call(t),
        Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Xf(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Gf(e) {
        function t(T, R) {
            if (e) {
                var O = T.deletions;
                O === null ? (T.deletions = [R],
                T.flags |= 16) : O.push(R)
            }
        }
        function a(T, R) {
            if (!e)
                return null;
            for (; R !== null; )
                t(T, R),
                R = R.sibling;
            return null
        }
        function n(T) {
            for (var R = new Map; T !== null; )
                T.key !== null ? R.set(T.key, T) : R.set(T.index, T),
                T = T.sibling;
            return R
        }
        function r(T, R) {
            return T = Zt(T, R),
            T.index = 0,
            T.sibling = null,
            T
        }
        function o(T, R, O) {
            return T.index = O,
            e ? (O = T.alternate,
            O !== null ? (O = O.index,
            O < R ? (T.flags |= 67108866,
            R) : O) : (T.flags |= 67108866,
            R)) : (T.flags |= 1048576,
            R)
        }
        function h(T) {
            return e && T.alternate === null && (T.flags |= 67108866),
            T
        }
        function y(T, R, O, q) {
            return R === null || R.tag !== 6 ? (R = Tu(O, T.mode, q),
            R.return = T,
            R) : (R = r(R, O),
            R.return = T,
            R)
        }
        function S(T, R, O, q) {
            var J = O.type;
            return J === A ? k(T, R, O.props.children, q, O.key) : R !== null && (R.elementType === J || typeof J == "object" && J !== null && J.$$typeof === ie && Xf(J) === R.type) ? (R = r(R, O.props),
            Tl(R, O),
            R.return = T,
            R) : (R = Ni(O.type, O.key, O.props, null, T.mode, q),
            Tl(R, O),
            R.return = T,
            R)
        }
        function w(T, R, O, q) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== O.containerInfo || R.stateNode.implementation !== O.implementation ? (R = Ou(O, T.mode, q),
            R.return = T,
            R) : (R = r(R, O.children || []),
            R.return = T,
            R)
        }
        function k(T, R, O, q, J) {
            return R === null || R.tag !== 7 ? (R = qa(O, T.mode, q, J),
            R.return = T,
            R) : (R = r(R, O),
            R.return = T,
            R)
        }
        function Y(T, R, O) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
                return R = Tu("" + R, T.mode, O),
                R.return = T,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case N:
                    return O = Ni(R.type, R.key, R.props, null, T.mode, O),
                    Tl(O, R),
                    O.return = T,
                    O;
                case B:
                    return R = Ou(R, T.mode, O),
                    R.return = T,
                    R;
                case ie:
                    var q = R._init;
                    return R = q(R._payload),
                    Y(T, R, O)
                }
                if (je(R) || Ae(R))
                    return R = qa(R, T.mode, O, null),
                    R.return = T,
                    R;
                if (typeof R.then == "function")
                    return Y(T, Gi(R), O);
                if (R.$$typeof === G)
                    return Y(T, ji(T, R), O);
                Qi(T, R)
            }
            return null
        }
        function D(T, R, O, q) {
            var J = R !== null ? R.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
                return J !== null ? null : y(T, R, "" + O, q);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case N:
                    return O.key === J ? S(T, R, O, q) : null;
                case B:
                    return O.key === J ? w(T, R, O, q) : null;
                case ie:
                    return J = O._init,
                    O = J(O._payload),
                    D(T, R, O, q)
                }
                if (je(O) || Ae(O))
                    return J !== null ? null : k(T, R, O, q, null);
                if (typeof O.then == "function")
                    return D(T, R, Gi(O), q);
                if (O.$$typeof === G)
                    return D(T, R, ji(T, O), q);
                Qi(T, O)
            }
            return null
        }
        function j(T, R, O, q, J) {
            if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
                return T = T.get(O) || null,
                y(R, T, "" + q, J);
            if (typeof q == "object" && q !== null) {
                switch (q.$$typeof) {
                case N:
                    return T = T.get(q.key === null ? O : q.key) || null,
                    S(R, T, q, J);
                case B:
                    return T = T.get(q.key === null ? O : q.key) || null,
                    w(R, T, q, J);
                case ie:
                    var he = q._init;
                    return q = he(q._payload),
                    j(T, R, O, q, J)
                }
                if (je(q) || Ae(q))
                    return T = T.get(O) || null,
                    k(R, T, q, J, null);
                if (typeof q.then == "function")
                    return j(T, R, O, Gi(q), J);
                if (q.$$typeof === G)
                    return j(T, R, O, ji(R, q), J);
                Qi(R, q)
            }
            return null
        }
        function le(T, R, O, q) {
            for (var J = null, he = null, W = R, ae = R = 0, Je = null; W !== null && ae < O.length; ae++) {
                W.index > ae ? (Je = W,
                W = null) : Je = W.sibling;
                var ve = D(T, W, O[ae], q);
                if (ve === null) {
                    W === null && (W = Je);
                    break
                }
                e && W && ve.alternate === null && t(T, W),
                R = o(ve, R, ae),
                he === null ? J = ve : he.sibling = ve,
                he = ve,
                W = Je
            }
            if (ae === O.length)
                return a(T, W),
                xe && Va(T, ae),
                J;
            if (W === null) {
                for (; ae < O.length; ae++)
                    W = Y(T, O[ae], q),
                    W !== null && (R = o(W, R, ae),
                    he === null ? J = W : he.sibling = W,
                    he = W);
                return xe && Va(T, ae),
                J
            }
            for (W = n(W); ae < O.length; ae++)
                Je = j(W, T, ae, O[ae], q),
                Je !== null && (e && Je.alternate !== null && W.delete(Je.key === null ? ae : Je.key),
                R = o(Je, R, ae),
                he === null ? J = Je : he.sibling = Je,
                he = Je);
            return e && W.forEach(function(La) {
                return t(T, La)
            }),
            xe && Va(T, ae),
            J
        }
        function te(T, R, O, q) {
            if (O == null)
                throw Error(s(151));
            for (var J = null, he = null, W = R, ae = R = 0, Je = null, ve = O.next(); W !== null && !ve.done; ae++,
            ve = O.next()) {
                W.index > ae ? (Je = W,
                W = null) : Je = W.sibling;
                var La = D(T, W, ve.value, q);
                if (La === null) {
                    W === null && (W = Je);
                    break
                }
                e && W && La.alternate === null && t(T, W),
                R = o(La, R, ae),
                he === null ? J = La : he.sibling = La,
                he = La,
                W = Je
            }
            if (ve.done)
                return a(T, W),
                xe && Va(T, ae),
                J;
            if (W === null) {
                for (; !ve.done; ae++,
                ve = O.next())
                    ve = Y(T, ve.value, q),
                    ve !== null && (R = o(ve, R, ae),
                    he === null ? J = ve : he.sibling = ve,
                    he = ve);
                return xe && Va(T, ae),
                J
            }
            for (W = n(W); !ve.done; ae++,
            ve = O.next())
                ve = j(W, T, ae, ve.value, q),
                ve !== null && (e && ve.alternate !== null && W.delete(ve.key === null ? ae : ve.key),
                R = o(ve, R, ae),
                he === null ? J = ve : he.sibling = ve,
                he = ve);
            return e && W.forEach(function(X0) {
                return t(T, X0)
            }),
            xe && Va(T, ae),
            J
        }
        function Ne(T, R, O, q) {
            if (typeof O == "object" && O !== null && O.type === A && O.key === null && (O = O.props.children),
            typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case N:
                    e: {
                        for (var J = O.key; R !== null; ) {
                            if (R.key === J) {
                                if (J = O.type,
                                J === A) {
                                    if (R.tag === 7) {
                                        a(T, R.sibling),
                                        q = r(R, O.props.children),
                                        q.return = T,
                                        T = q;
                                        break e
                                    }
                                } else if (R.elementType === J || typeof J == "object" && J !== null && J.$$typeof === ie && Xf(J) === R.type) {
                                    a(T, R.sibling),
                                    q = r(R, O.props),
                                    Tl(q, O),
                                    q.return = T,
                                    T = q;
                                    break e
                                }
                                a(T, R);
                                break
                            } else
                                t(T, R);
                            R = R.sibling
                        }
                        O.type === A ? (q = qa(O.props.children, T.mode, q, O.key),
                        q.return = T,
                        T = q) : (q = Ni(O.type, O.key, O.props, null, T.mode, q),
                        Tl(q, O),
                        q.return = T,
                        T = q)
                    }
                    return h(T);
                case B:
                    e: {
                        for (J = O.key; R !== null; ) {
                            if (R.key === J)
                                if (R.tag === 4 && R.stateNode.containerInfo === O.containerInfo && R.stateNode.implementation === O.implementation) {
                                    a(T, R.sibling),
                                    q = r(R, O.children || []),
                                    q.return = T,
                                    T = q;
                                    break e
                                } else {
                                    a(T, R);
                                    break
                                }
                            else
                                t(T, R);
                            R = R.sibling
                        }
                        q = Ou(O, T.mode, q),
                        q.return = T,
                        T = q
                    }
                    return h(T);
                case ie:
                    return J = O._init,
                    O = J(O._payload),
                    Ne(T, R, O, q)
                }
                if (je(O))
                    return le(T, R, O, q);
                if (Ae(O)) {
                    if (J = Ae(O),
                    typeof J != "function")
                        throw Error(s(150));
                    return O = J.call(O),
                    te(T, R, O, q)
                }
                if (typeof O.then == "function")
                    return Ne(T, R, Gi(O), q);
                if (O.$$typeof === G)
                    return Ne(T, R, ji(T, O), q);
                Qi(T, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O,
            R !== null && R.tag === 6 ? (a(T, R.sibling),
            q = r(R, O),
            q.return = T,
            T = q) : (a(T, R),
            q = Tu(O, T.mode, q),
            q.return = T,
            T = q),
            h(T)) : a(T, R)
        }
        return function(T, R, O, q) {
            try {
                Al = 0;
                var J = Ne(T, R, O, q);
                return Nn = null,
                J
            } catch (W) {
                if (W === ml || W === Li)
                    throw W;
                var he = pt(29, W, null, T.mode);
                return he.lanes = q,
                he.return = T,
                he
            } finally {}
        }
    }
    var wn = Gf(!0)
      , Qf = Gf(!1)
      , wt = H(null)
      , kt = null;
    function va(e) {
        var t = e.alternate;
        K(Qe, Qe.current & 1),
        K(wt, e),
        kt === null && (t === null || Rn.current !== null || t.memoizedState !== null) && (kt = e)
    }
    function Kf(e) {
        if (e.tag === 22) {
            if (K(Qe, Qe.current),
            K(wt, e),
            kt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (kt = e)
            }
        } else
            ba()
    }
    function ba() {
        K(Qe, Qe.current),
        K(wt, wt.current)
    }
    function ea(e) {
        Q(wt),
        kt === e && (kt = null),
        Q(Qe)
    }
    var Qe = H(0);
    function Ki(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || Zs(a)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function is(e, t, a, n) {
        t = e.memoizedState,
        a = a(n, t),
        a = a == null ? t : v({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var rs = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var n = xt()
              , r = ma(n);
            r.payload = t,
            a != null && (r.callback = a),
            t = pa(e, r, n),
            t !== null && (St(t, e, n),
            yl(t, e, n))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var n = xt()
              , r = ma(n);
            r.tag = 1,
            r.payload = t,
            a != null && (r.callback = a),
            t = pa(e, r, n),
            t !== null && (St(t, e, n),
            yl(t, e, n))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = xt()
              , n = ma(a);
            n.tag = 2,
            t != null && (n.callback = t),
            t = pa(e, n, a),
            t !== null && (St(t, e, a),
            yl(t, e, a))
        }
    };
    function $f(e, t, a, n, r, o, h) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, h) : t.prototype && t.prototype.isPureReactComponent ? !ul(a, n) || !ul(r, o) : !0
    }
    function Zf(e, t, a, n) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, n),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, n),
        t.state !== e && rs.enqueueReplaceState(t, t.state, null)
    }
    function Ja(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var n in t)
                n !== "ref" && (a[n] = t[n])
        }
        if (e = e.defaultProps) {
            a === t && (a = v({}, a));
            for (var r in e)
                a[r] === void 0 && (a[r] = e[r])
        }
        return a
    }
    var $i = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function Jf(e) {
        $i(e)
    }
    function Ff(e) {
        console.error(e)
    }
    function Pf(e) {
        $i(e)
    }
    function Zi(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function Wf(e, t, a) {
        try {
            var n = e.onCaughtError;
            n(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }
    function us(e, t, a) {
        return a = ma(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            Zi(e, t)
        }
        ,
        a
    }
    function If(e) {
        return e = ma(e),
        e.tag = 3,
        e
    }
    function ed(e, t, a, n) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = n.value;
            e.payload = function() {
                return r(o)
            }
            ,
            e.callback = function() {
                Wf(t, a, n)
            }
        }
        var h = a.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
            Wf(t, a, n),
            typeof r != "function" && (Ta === null ? Ta = new Set([this]) : Ta.add(this));
            var y = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: y !== null ? y : ""
            })
        }
        )
    }
    function Xp(e, t, a, n, r) {
        if (a.flags |= 32768,
        n !== null && typeof n == "object" && typeof n.then == "function") {
            if (t = a.alternate,
            t !== null && dl(t, a, r, !0),
            a = wt.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return kt === null ? js() : a.alternate === null && ke === 0 && (ke = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = r,
                    n === zu ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([n]) : t.add(n),
                    Ls(e, n, r)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    n === zu ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([n]) : a.add(n)),
                    Ls(e, n, r)),
                    !1
                }
                throw Error(s(435, a.tag))
            }
            return Ls(e, n, r),
            js(),
            !1
        }
        if (xe)
            return t = wt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = r,
            n !== Cu && (e = Error(s(422), {
                cause: n
            }),
            fl(At(e, a)))) : (n !== Cu && (t = Error(s(423), {
                cause: n
            }),
            fl(At(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            r &= -r,
            e.lanes |= r,
            n = At(n, a),
            r = us(e.stateNode, n, r),
            Bu(e, r),
            ke !== 4 && (ke = 2)),
            !1;
        var o = Error(s(520), {
            cause: n
        });
        if (o = At(o, a),
        _l === null ? _l = [o] : _l.push(o),
        ke !== 4 && (ke = 2),
        t === null)
            return !0;
        n = At(n, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = r & -r,
                a.lanes |= e,
                e = us(a.stateNode, n, e),
                Bu(a, e),
                !1;
            case 1:
                if (t = a.type,
                o = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Ta === null || !Ta.has(o))))
                    return a.flags |= 65536,
                    r &= -r,
                    a.lanes |= r,
                    r = If(r),
                    ed(r, e, a, n),
                    Bu(a, r),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var td = Error(s(461))
      , $e = !1;
    function Fe(e, t, a, n) {
        t.child = e === null ? Qf(t, null, a, n) : wn(t, e.child, a, n)
    }
    function ad(e, t, a, n, r) {
        a = a.render;
        var o = t.ref;
        if ("ref"in n) {
            var h = {};
            for (var y in n)
                y !== "ref" && (h[y] = n[y])
        } else
            h = n;
        return Ka(t),
        n = Gu(e, t, a, h, o, r),
        y = Qu(),
        e !== null && !$e ? (Ku(e, t, r),
        ta(e, t, r)) : (xe && y && Nu(t),
        t.flags |= 1,
        Fe(e, t, n, r),
        t.child)
    }
    function nd(e, t, a, n, r) {
        if (e === null) {
            var o = a.type;
            return typeof o == "function" && !Au(o) && o.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = o,
            ld(e, t, o, n, r)) : (e = Ni(a.type, null, n, t, t.mode, r),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (o = e.child,
        !ms(e, r)) {
            var h = o.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : ul,
            a(h, n) && e.ref === t.ref)
                return ta(e, t, r)
        }
        return t.flags |= 1,
        e = Zt(o, n),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function ld(e, t, a, n, r) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (ul(o, n) && e.ref === t.ref)
                if ($e = !1,
                t.pendingProps = n = o,
                ms(e, r))
                    (e.flags & 131072) !== 0 && ($e = !0);
                else
                    return t.lanes = e.lanes,
                    ta(e, t, r)
        }
        return ss(e, t, a, n, r)
    }
    function id(e, t, a) {
        var n = t.pendingProps
          , r = n.children
          , o = e !== null ? e.memoizedState : null;
        if (n.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = o !== null ? o.baseLanes | a : a,
                e !== null) {
                    for (r = t.child = e.child,
                    o = 0; r !== null; )
                        o = o | r.lanes | r.childLanes,
                        r = r.sibling;
                    t.childLanes = o & ~n
                } else
                    t.childLanes = 0,
                    t.child = null;
                return rd(e, t, n, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && _i(t, o !== null ? o.cachePool : null),
                o !== null ? nf(t, o) : Yu(),
                Kf(t);
            else
                return t.lanes = t.childLanes = 536870912,
                rd(e, t, o !== null ? o.baseLanes | a : a, a)
        } else
            o !== null ? (_i(t, o.cachePool),
            nf(t, o),
            ba(),
            t.memoizedState = null) : (e !== null && _i(t, null),
            Yu(),
            ba());
        return Fe(e, t, r, a),
        t.child
    }
    function rd(e, t, a, n) {
        var r = Mu();
        return r = r === null ? null : {
            parent: Ge._currentValue,
            pool: r
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: r
        },
        e !== null && _i(t, null),
        Yu(),
        Kf(t),
        e !== null && dl(e, t, n, !0),
        null
    }
    function Ji(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(s(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }
    function ss(e, t, a, n, r) {
        return Ka(t),
        a = Gu(e, t, a, n, void 0, r),
        n = Qu(),
        e !== null && !$e ? (Ku(e, t, r),
        ta(e, t, r)) : (xe && n && Nu(t),
        t.flags |= 1,
        Fe(e, t, a, r),
        t.child)
    }
    function ud(e, t, a, n, r, o) {
        return Ka(t),
        t.updateQueue = null,
        a = rf(t, n, a, r),
        lf(e),
        n = Qu(),
        e !== null && !$e ? (Ku(e, t, o),
        ta(e, t, o)) : (xe && n && Nu(t),
        t.flags |= 1,
        Fe(e, t, a, o),
        t.child)
    }
    function sd(e, t, a, n, r) {
        if (Ka(t),
        t.stateNode === null) {
            var o = vn
              , h = a.contextType;
            typeof h == "object" && h !== null && (o = et(h)),
            o = new a(n,o),
            t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
            o.updater = rs,
            t.stateNode = o,
            o._reactInternals = t,
            o = t.stateNode,
            o.props = n,
            o.state = t.memoizedState,
            o.refs = {},
            Hu(t),
            h = a.contextType,
            o.context = typeof h == "object" && h !== null ? et(h) : vn,
            o.state = t.memoizedState,
            h = a.getDerivedStateFromProps,
            typeof h == "function" && (is(t, a, h, n),
            o.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (h = o.state,
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            h !== o.state && rs.enqueueReplaceState(o, o.state, null),
            bl(t, n, o, r),
            vl(),
            o.state = t.memoizedState),
            typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            n = !0
        } else if (e === null) {
            o = t.stateNode;
            var y = t.memoizedProps
              , S = Ja(a, y);
            o.props = S;
            var w = o.context
              , k = a.contextType;
            h = vn,
            typeof k == "object" && k !== null && (h = et(k));
            var Y = a.getDerivedStateFromProps;
            k = typeof Y == "function" || typeof o.getSnapshotBeforeUpdate == "function",
            y = t.pendingProps !== y,
            k || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (y || w !== h) && Zf(t, o, n, h),
            ga = !1;
            var D = t.memoizedState;
            o.state = D,
            bl(t, n, o, r),
            vl(),
            w = t.memoizedState,
            y || D !== w || ga ? (typeof Y == "function" && (is(t, a, Y, n),
            w = t.memoizedState),
            (S = ga || $f(t, a, S, n, D, w, h)) ? (k || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
            typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = n,
            t.memoizedState = w),
            o.props = n,
            o.state = w,
            o.context = h,
            n = S) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            n = !1)
        } else {
            o = t.stateNode,
            ku(e, t),
            h = t.memoizedProps,
            k = Ja(a, h),
            o.props = k,
            Y = t.pendingProps,
            D = o.context,
            w = a.contextType,
            S = vn,
            typeof w == "object" && w !== null && (S = et(w)),
            y = a.getDerivedStateFromProps,
            (w = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (h !== Y || D !== S) && Zf(t, o, n, S),
            ga = !1,
            D = t.memoizedState,
            o.state = D,
            bl(t, n, o, r),
            vl();
            var j = t.memoizedState;
            h !== Y || D !== j || ga || e !== null && e.dependencies !== null && Di(e.dependencies) ? (typeof y == "function" && (is(t, a, y, n),
            j = t.memoizedState),
            (k = ga || $f(t, a, k, n, D, j, S) || e !== null && e.dependencies !== null && Di(e.dependencies)) ? (w || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, j, S),
            typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, j, S)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || h === e.memoizedProps && D === e.memoizedState || (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = n,
            t.memoizedState = j),
            o.props = n,
            o.state = j,
            o.context = S,
            n = k) : (typeof o.componentDidUpdate != "function" || h === e.memoizedProps && D === e.memoizedState || (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024),
            n = !1)
        }
        return o = n,
        Ji(e, t),
        n = (t.flags & 128) !== 0,
        o || n ? (o = t.stateNode,
        a = n && typeof a.getDerivedStateFromError != "function" ? null : o.render(),
        t.flags |= 1,
        e !== null && n ? (t.child = wn(t, e.child, null, r),
        t.child = wn(t, null, a, r)) : Fe(e, t, a, r),
        t.memoizedState = o.state,
        e = t.child) : e = ta(e, t, r),
        e
    }
    function od(e, t, a, n) {
        return cl(),
        t.flags |= 256,
        Fe(e, t, a, n),
        t.child
    }
    var os = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function cs(e) {
        return {
            baseLanes: e,
            cachePool: Jc()
        }
    }
    function fs(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= Ct),
        e
    }
    function cd(e, t, a) {
        var n = t.pendingProps, r = !1, o = (t.flags & 128) !== 0, h;
        if ((h = o) || (h = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0),
        h && (r = !0,
        t.flags &= -129),
        h = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (xe) {
                if (r ? va(t) : ba(),
                xe) {
                    var y = He, S;
                    if (S = y) {
                        e: {
                            for (S = y,
                            y = Ht; S.nodeType !== 8; ) {
                                if (!y) {
                                    y = null;
                                    break e
                                }
                                if (S = Lt(S.nextSibling),
                                S === null) {
                                    y = null;
                                    break e
                                }
                            }
                            y = S
                        }
                        y !== null ? (t.memoizedState = {
                            dehydrated: y,
                            treeContext: Ya !== null ? {
                                id: Jt,
                                overflow: Ft
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        S = pt(18, null, null, 0),
                        S.stateNode = y,
                        S.return = t,
                        t.child = S,
                        lt = t,
                        He = null,
                        S = !0) : S = !1
                    }
                    S || Ga(t)
                }
                if (y = t.memoizedState,
                y !== null && (y = y.dehydrated,
                y !== null))
                    return Zs(y) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                ea(t)
            }
            return y = n.children,
            n = n.fallback,
            r ? (ba(),
            r = t.mode,
            y = Fi({
                mode: "hidden",
                children: y
            }, r),
            n = qa(n, r, a, null),
            y.return = t,
            n.return = t,
            y.sibling = n,
            t.child = y,
            r = t.child,
            r.memoizedState = cs(a),
            r.childLanes = fs(e, h, a),
            t.memoizedState = os,
            n) : (va(t),
            ds(t, y))
        }
        if (S = e.memoizedState,
        S !== null && (y = S.dehydrated,
        y !== null)) {
            if (o)
                t.flags & 256 ? (va(t),
                t.flags &= -257,
                t = hs(e, t, a)) : t.memoizedState !== null ? (ba(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (ba(),
                r = n.fallback,
                y = t.mode,
                n = Fi({
                    mode: "visible",
                    children: n.children
                }, y),
                r = qa(r, y, a, null),
                r.flags |= 2,
                n.return = t,
                r.return = t,
                n.sibling = r,
                t.child = n,
                wn(t, e.child, null, a),
                n = t.child,
                n.memoizedState = cs(a),
                n.childLanes = fs(e, h, a),
                t.memoizedState = os,
                t = r);
            else if (va(t),
            Zs(y)) {
                if (h = y.nextSibling && y.nextSibling.dataset,
                h)
                    var w = h.dgst;
                h = w,
                n = Error(s(419)),
                n.stack = "",
                n.digest = h,
                fl({
                    value: n,
                    source: null,
                    stack: null
                }),
                t = hs(e, t, a)
            } else if ($e || dl(e, t, a, !1),
            h = (a & e.childLanes) !== 0,
            $e || h) {
                if (h = De,
                h !== null && (n = a & -a,
                n = (n & 42) !== 0 ? 1 : Jr(n),
                n = (n & (h.suspendedLanes | a)) !== 0 ? 0 : n,
                n !== 0 && n !== S.retryLane))
                    throw S.retryLane = n,
                    yn(e, n),
                    St(h, e, n),
                    td;
                y.data === "$?" || js(),
                t = hs(e, t, a)
            } else
                y.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = S.treeContext,
                He = Lt(y.nextSibling),
                lt = t,
                xe = !0,
                Xa = null,
                Ht = !1,
                e !== null && (Ot[Nt++] = Jt,
                Ot[Nt++] = Ft,
                Ot[Nt++] = Ya,
                Jt = e.id,
                Ft = e.overflow,
                Ya = t),
                t = ds(t, n.children),
                t.flags |= 4096);
            return t
        }
        return r ? (ba(),
        r = n.fallback,
        y = t.mode,
        S = e.child,
        w = S.sibling,
        n = Zt(S, {
            mode: "hidden",
            children: n.children
        }),
        n.subtreeFlags = S.subtreeFlags & 65011712,
        w !== null ? r = Zt(w, r) : (r = qa(r, y, a, null),
        r.flags |= 2),
        r.return = t,
        n.return = t,
        n.sibling = r,
        t.child = n,
        n = r,
        r = t.child,
        y = e.child.memoizedState,
        y === null ? y = cs(a) : (S = y.cachePool,
        S !== null ? (w = Ge._currentValue,
        S = S.parent !== w ? {
            parent: w,
            pool: w
        } : S) : S = Jc(),
        y = {
            baseLanes: y.baseLanes | a,
            cachePool: S
        }),
        r.memoizedState = y,
        r.childLanes = fs(e, h, a),
        t.memoizedState = os,
        n) : (va(t),
        a = e.child,
        e = a.sibling,
        a = Zt(a, {
            mode: "visible",
            children: n.children
        }),
        a.return = t,
        a.sibling = null,
        e !== null && (h = t.deletions,
        h === null ? (t.deletions = [e],
        t.flags |= 16) : h.push(e)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function ds(e, t) {
        return t = Fi({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Fi(e, t) {
        return e = pt(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function hs(e, t, a) {
        return wn(t, e.child, null, a),
        e = ds(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function fd(e, t, a) {
        e.lanes |= t;
        var n = e.alternate;
        n !== null && (n.lanes |= t),
        ju(e.return, t, a)
    }
    function gs(e, t, a, n, r) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: a,
            tailMode: r
        } : (o.isBackwards = t,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = n,
        o.tail = a,
        o.tailMode = r)
    }
    function dd(e, t, a) {
        var n = t.pendingProps
          , r = n.revealOrder
          , o = n.tail;
        if (Fe(e, t, n.children, a),
        n = Qe.current,
        (n & 2) !== 0)
            n = n & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && fd(e, a, t);
                    else if (e.tag === 19)
                        fd(e, a, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            n &= 1
        }
        switch (K(Qe, n),
        r) {
        case "forwards":
            for (a = t.child,
            r = null; a !== null; )
                e = a.alternate,
                e !== null && Ki(e) === null && (r = a),
                a = a.sibling;
            a = r,
            a === null ? (r = t.child,
            t.child = null) : (r = a.sibling,
            a.sibling = null),
            gs(t, !1, r, a, o);
            break;
        case "backwards":
            for (a = null,
            r = t.child,
            t.child = null; r !== null; ) {
                if (e = r.alternate,
                e !== null && Ki(e) === null) {
                    t.child = r;
                    break
                }
                e = r.sibling,
                r.sibling = a,
                a = r,
                r = e
            }
            gs(t, !0, a, null, o);
            break;
        case "together":
            gs(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function ta(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        Aa |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (dl(e, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child,
            a = Zt(e, e.pendingProps),
            t.child = a,
            a.return = t; e.sibling !== null; )
                e = e.sibling,
                a = a.sibling = Zt(e, e.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function ms(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Di(e)))
    }
    function Gp(e, t, a) {
        switch (t.tag) {
        case 3:
            _e(t, t.stateNode.containerInfo),
            ha(t, Ge, e.memoizedState.cache),
            cl();
            break;
        case 27:
        case 5:
            Gr(t);
            break;
        case 4:
            _e(t, t.stateNode.containerInfo);
            break;
        case 10:
            ha(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var n = t.memoizedState;
            if (n !== null)
                return n.dehydrated !== null ? (va(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? cd(e, t, a) : (va(t),
                e = ta(e, t, a),
                e !== null ? e.sibling : null);
            va(t);
            break;
        case 19:
            var r = (e.flags & 128) !== 0;
            if (n = (a & t.childLanes) !== 0,
            n || (dl(e, t, a, !1),
            n = (a & t.childLanes) !== 0),
            r) {
                if (n)
                    return dd(e, t, a);
                t.flags |= 128
            }
            if (r = t.memoizedState,
            r !== null && (r.rendering = null,
            r.tail = null,
            r.lastEffect = null),
            K(Qe, Qe.current),
            n)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            id(e, t, a);
        case 24:
            ha(t, Ge, e.memoizedState.cache)
        }
        return ta(e, t, a)
    }
    function hd(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                $e = !0;
            else {
                if (!ms(e, a) && (t.flags & 128) === 0)
                    return $e = !1,
                    Gp(e, t, a);
                $e = (e.flags & 131072) !== 0
            }
        else
            $e = !1,
            xe && (t.flags & 1048576) !== 0 && Vc(t, Ci, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var n = t.elementType
                  , r = n._init;
                if (n = r(n._payload),
                t.type = n,
                typeof n == "function")
                    Au(n) ? (e = Ja(n, e),
                    t.tag = 1,
                    t = sd(null, t, n, e, a)) : (t.tag = 0,
                    t = ss(null, t, n, e, a));
                else {
                    if (n != null) {
                        if (r = n.$$typeof,
                        r === P) {
                            t.tag = 11,
                            t = ad(null, t, n, e, a);
                            break e
                        } else if (r === ne) {
                            t.tag = 14,
                            t = nd(null, t, n, e, a);
                            break e
                        }
                    }
                    throw t = Se(n) || n,
                    Error(s(306, t, ""))
                }
            }
            return t;
        case 0:
            return ss(e, t, t.type, t.pendingProps, a);
        case 1:
            return n = t.type,
            r = Ja(n, t.pendingProps),
            sd(e, t, n, r, a);
        case 3:
            e: {
                if (_e(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(s(387));
                n = t.pendingProps;
                var o = t.memoizedState;
                r = o.element,
                ku(e, t),
                bl(t, n, null, a);
                var h = t.memoizedState;
                if (n = h.cache,
                ha(t, Ge, n),
                n !== o.cache && _u(t, [Ge], a, !0),
                vl(),
                n = h.element,
                o.isDehydrated)
                    if (o = {
                        element: n,
                        isDehydrated: !1,
                        cache: h.cache
                    },
                    t.updateQueue.baseState = o,
                    t.memoizedState = o,
                    t.flags & 256) {
                        t = od(e, t, n, a);
                        break e
                    } else if (n !== r) {
                        r = At(Error(s(424)), t),
                        fl(r),
                        t = od(e, t, n, a);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (He = Lt(e.firstChild),
                        lt = t,
                        xe = !0,
                        Xa = null,
                        Ht = !0,
                        a = Qf(t, null, n, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (cl(),
                    n === r) {
                        t = ta(e, t, a);
                        break e
                    }
                    Fe(e, t, n, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return Ji(e, t),
            e === null ? (a = yh(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : xe || (a = t.type,
            e = t.pendingProps,
            n = cr(se.current).createElement(a),
            n[Ie] = t,
            n[it] = e,
            We(n, a, e),
            Ke(n),
            t.stateNode = n) : t.memoizedState = yh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Gr(t),
            e === null && xe && (n = t.stateNode = gh(t.type, t.pendingProps, se.current),
            lt = t,
            Ht = !0,
            r = He,
            wa(t.type) ? (Js = r,
            He = Lt(n.firstChild)) : He = r),
            Fe(e, t, t.pendingProps.children, a),
            Ji(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && xe && ((r = n = He) && (n = v0(n, t.type, t.pendingProps, Ht),
            n !== null ? (t.stateNode = n,
            lt = t,
            He = Lt(n.firstChild),
            Ht = !1,
            r = !0) : r = !1),
            r || Ga(t)),
            Gr(t),
            r = t.type,
            o = t.pendingProps,
            h = e !== null ? e.memoizedProps : null,
            n = o.children,
            Qs(r, o) ? n = null : h !== null && Qs(r, h) && (t.flags |= 32),
            t.memoizedState !== null && (r = Gu(e, t, zp, null, null, a),
            Yl._currentValue = r),
            Ji(e, t),
            Fe(e, t, n, a),
            t.child;
        case 6:
            return e === null && xe && ((e = a = He) && (a = b0(a, t.pendingProps, Ht),
            a !== null ? (t.stateNode = a,
            lt = t,
            He = null,
            e = !0) : e = !1),
            e || Ga(t)),
            null;
        case 13:
            return cd(e, t, a);
        case 4:
            return _e(t, t.stateNode.containerInfo),
            n = t.pendingProps,
            e === null ? t.child = wn(t, null, n, a) : Fe(e, t, n, a),
            t.child;
        case 11:
            return ad(e, t, t.type, t.pendingProps, a);
        case 7:
            return Fe(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return Fe(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return Fe(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return n = t.pendingProps,
            ha(t, t.type, n.value),
            Fe(e, t, n.children, a),
            t.child;
        case 9:
            return r = t.type._context,
            n = t.pendingProps.children,
            Ka(t),
            r = et(r),
            n = n(r),
            t.flags |= 1,
            Fe(e, t, n, a),
            t.child;
        case 14:
            return nd(e, t, t.type, t.pendingProps, a);
        case 15:
            return ld(e, t, t.type, t.pendingProps, a);
        case 19:
            return dd(e, t, a);
        case 31:
            return n = t.pendingProps,
            a = t.mode,
            n = {
                mode: n.mode,
                children: n.children
            },
            e === null ? (a = Fi(n, a),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a) : (a = Zt(e.child, n),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a),
            t;
        case 22:
            return id(e, t, a);
        case 24:
            return Ka(t),
            n = et(Ge),
            e === null ? (r = Mu(),
            r === null && (r = De,
            o = Lu(),
            r.pooledCache = o,
            o.refCount++,
            o !== null && (r.pooledCacheLanes |= a),
            r = o),
            t.memoizedState = {
                parent: n,
                cache: r
            },
            Hu(t),
            ha(t, Ge, r)) : ((e.lanes & a) !== 0 && (ku(e, t),
            bl(t, null, null, a),
            vl()),
            r = e.memoizedState,
            o = t.memoizedState,
            r.parent !== n ? (r = {
                parent: n,
                cache: n
            },
            t.memoizedState = r,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r),
            ha(t, Ge, n)) : (n = o.cache,
            ha(t, Ge, n),
            n !== r.cache && _u(t, [Ge], a, !0))),
            Fe(e, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(s(156, t.tag))
    }
    function aa(e) {
        e.flags |= 4
    }
    function gd(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Eh(t)) {
            if (t = wt.current,
            t !== null && ((ye & 4194048) === ye ? kt !== null : (ye & 62914560) !== ye && (ye & 536870912) === 0 || t !== kt))
                throw pl = zu,
                Fc;
            e.flags |= 8192
        }
    }
    function Pi(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? Qo() : 536870912,
        e.lanes |= t,
        _n |= t)
    }
    function Ol(e, t) {
        if (!xe)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var n = null; a !== null; )
                    a.alternate !== null && (n = a),
                    a = a.sibling;
                n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
            }
    }
    function Ue(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , a = 0
          , n = 0;
        if (t)
            for (var r = e.child; r !== null; )
                a |= r.lanes | r.childLanes,
                n |= r.subtreeFlags & 65011712,
                n |= r.flags & 65011712,
                r.return = e,
                r = r.sibling;
        else
            for (r = e.child; r !== null; )
                a |= r.lanes | r.childLanes,
                n |= r.subtreeFlags,
                n |= r.flags,
                r.return = e,
                r = r.sibling;
        return e.subtreeFlags |= n,
        e.childLanes = a,
        t
    }
    function Qp(e, t, a) {
        var n = t.pendingProps;
        switch (wu(t),
        t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ue(t),
            null;
        case 1:
            return Ue(t),
            null;
        case 3:
            return a = t.stateNode,
            n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Wt(Ge),
            oa(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (ol(t) ? aa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Qc())),
            Ue(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? (aa(t),
            a !== null ? (Ue(t),
            gd(t, a)) : (Ue(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? (aa(t),
            Ue(t),
            gd(t, a)) : (Ue(t),
            t.flags &= -16777217) : (e.memoizedProps !== n && aa(t),
            Ue(t),
            t.flags &= -16777217),
            null;
        case 27:
            si(t),
            a = se.current;
            var r = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== n && aa(t);
            else {
                if (!n) {
                    if (t.stateNode === null)
                        throw Error(s(166));
                    return Ue(t),
                    null
                }
                e = F.current,
                ol(t) ? Xc(t) : (e = gh(r, n, a),
                t.stateNode = e,
                aa(t))
            }
            return Ue(t),
            null;
        case 5:
            if (si(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== n && aa(t);
            else {
                if (!n) {
                    if (t.stateNode === null)
                        throw Error(s(166));
                    return Ue(t),
                    null
                }
                if (e = F.current,
                ol(t))
                    Xc(t);
                else {
                    switch (r = cr(se.current),
                    e) {
                    case 1:
                        e = r.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        e = r.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            e = r.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            e = r.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            e = r.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof n.is == "string" ? r.createElement("select", {
                                is: n.is
                            }) : r.createElement("select"),
                            n.multiple ? e.multiple = !0 : n.size && (e.size = n.size);
                            break;
                        default:
                            e = typeof n.is == "string" ? r.createElement(a, {
                                is: n.is
                            }) : r.createElement(a)
                        }
                    }
                    e[Ie] = t,
                    e[it] = n;
                    e: for (r = t.child; r !== null; ) {
                        if (r.tag === 5 || r.tag === 6)
                            e.appendChild(r.stateNode);
                        else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                            r.child.return = r,
                            r = r.child;
                            continue
                        }
                        if (r === t)
                            break e;
                        for (; r.sibling === null; ) {
                            if (r.return === null || r.return === t)
                                break e;
                            r = r.return
                        }
                        r.sibling.return = r.return,
                        r = r.sibling
                    }
                    t.stateNode = e;
                    e: switch (We(e, a, n),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!n.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && aa(t)
                }
            }
            return Ue(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== n && aa(t);
            else {
                if (typeof n != "string" && t.stateNode === null)
                    throw Error(s(166));
                if (e = se.current,
                ol(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    n = null,
                    r = lt,
                    r !== null)
                        switch (r.tag) {
                        case 27:
                        case 5:
                            n = r.memoizedProps
                        }
                    e[Ie] = t,
                    e = !!(e.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || uh(e.nodeValue, a)),
                    e || Ga(t)
                } else
                    e = cr(e).createTextNode(n),
                    e[Ie] = t,
                    t.stateNode = e
            }
            return Ue(t),
            null;
        case 13:
            if (n = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (r = ol(t),
                n !== null && n.dehydrated !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(s(318));
                        if (r = t.memoizedState,
                        r = r !== null ? r.dehydrated : null,
                        !r)
                            throw Error(s(317));
                        r[Ie] = t
                    } else
                        cl(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Ue(t),
                    r = !1
                } else
                    r = Qc(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r),
                    r = !0;
                if (!r)
                    return t.flags & 256 ? (ea(t),
                    t) : (ea(t),
                    null)
            }
            if (ea(t),
            (t.flags & 128) !== 0)
                return t.lanes = a,
                t;
            if (a = n !== null,
            e = e !== null && e.memoizedState !== null,
            a) {
                n = t.child,
                r = null,
                n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (r = n.alternate.memoizedState.cachePool.pool);
                var o = null;
                n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool),
                o !== r && (n.flags |= 2048)
            }
            return a !== e && a && (t.child.flags |= 8192),
            Pi(t, t.updateQueue),
            Ue(t),
            null;
        case 4:
            return oa(),
            e === null && qs(t.stateNode.containerInfo),
            Ue(t),
            null;
        case 10:
            return Wt(t.type),
            Ue(t),
            null;
        case 19:
            if (Q(Qe),
            r = t.memoizedState,
            r === null)
                return Ue(t),
                null;
            if (n = (t.flags & 128) !== 0,
            o = r.rendering,
            o === null)
                if (n)
                    Ol(r, !1);
                else {
                    if (ke !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (o = Ki(e),
                            o !== null) {
                                for (t.flags |= 128,
                                Ol(r, !1),
                                e = o.updateQueue,
                                t.updateQueue = e,
                                Pi(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    Yc(a, e),
                                    a = a.sibling;
                                return K(Qe, Qe.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && zt() > er && (t.flags |= 128,
                    n = !0,
                    Ol(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = Ki(o),
                    e !== null) {
                        if (t.flags |= 128,
                        n = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Pi(t, e),
                        Ol(r, !0),
                        r.tail === null && r.tailMode === "hidden" && !o.alternate && !xe)
                            return Ue(t),
                            null
                    } else
                        2 * zt() - r.renderingStartTime > er && a !== 536870912 && (t.flags |= 128,
                        n = !0,
                        Ol(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (o.sibling = t.child,
                t.child = o) : (e = r.last,
                e !== null ? e.sibling = o : t.child = o,
                r.last = o)
            }
            return r.tail !== null ? (t = r.tail,
            r.rendering = t,
            r.tail = t.sibling,
            r.renderingStartTime = zt(),
            t.sibling = null,
            e = Qe.current,
            K(Qe, n ? e & 1 | 2 : e & 1),
            t) : (Ue(t),
            null);
        case 22:
        case 23:
            return ea(t),
            Vu(),
            n = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192),
            n ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t),
            a = t.updateQueue,
            a !== null && Pi(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            n = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            n !== a && (t.flags |= 2048),
            e !== null && Q($a),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Wt(Ge),
            Ue(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(s(156, t.tag))
    }
    function Kp(e, t) {
        switch (wu(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Wt(Ge),
            oa(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return si(t),
            null;
        case 13:
            if (ea(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(s(340));
                cl()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Q(Qe),
            null;
        case 4:
            return oa(),
            null;
        case 10:
            return Wt(t.type),
            null;
        case 22:
        case 23:
            return ea(t),
            Vu(),
            e !== null && Q($a),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Wt(Ge),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function md(e, t) {
        switch (wu(t),
        t.tag) {
        case 3:
            Wt(Ge),
            oa();
            break;
        case 26:
        case 27:
        case 5:
            si(t);
            break;
        case 4:
            oa();
            break;
        case 13:
            ea(t);
            break;
        case 19:
            Q(Qe);
            break;
        case 10:
            Wt(t.type);
            break;
        case 22:
        case 23:
            ea(t),
            Vu(),
            e !== null && Q($a);
            break;
        case 24:
            Wt(Ge)
        }
    }
    function Nl(e, t) {
        try {
            var a = t.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var r = n.next;
                a = r;
                do {
                    if ((a.tag & e) === e) {
                        n = void 0;
                        var o = a.create
                          , h = a.inst;
                        n = o(),
                        h.destroy = n
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (y) {
            Ce(t, t.return, y)
        }
    }
    function xa(e, t, a) {
        try {
            var n = t.updateQueue
              , r = n !== null ? n.lastEffect : null;
            if (r !== null) {
                var o = r.next;
                n = o;
                do {
                    if ((n.tag & e) === e) {
                        var h = n.inst
                          , y = h.destroy;
                        if (y !== void 0) {
                            h.destroy = void 0,
                            r = t;
                            var S = a
                              , w = y;
                            try {
                                w()
                            } catch (k) {
                                Ce(r, S, k)
                            }
                        }
                    }
                    n = n.next
                } while (n !== o)
            }
        } catch (k) {
            Ce(t, t.return, k)
        }
    }
    function pd(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                af(t, a)
            } catch (n) {
                Ce(e, e.return, n)
            }
        }
    }
    function yd(e, t, a) {
        a.props = Ja(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (n) {
            Ce(e, t, n)
        }
    }
    function wl(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var n = e.stateNode;
                    break;
                case 30:
                    n = e.stateNode;
                    break;
                default:
                    n = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(n) : a.current = n
            }
        } catch (r) {
            Ce(e, t, r)
        }
    }
    function Bt(e, t) {
        var a = e.ref
          , n = e.refCleanup;
        if (a !== null)
            if (typeof n == "function")
                try {
                    n()
                } catch (r) {
                    Ce(e, t, r)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (r) {
                    Ce(e, t, r)
                }
            else
                a.current = null
    }
    function vd(e) {
        var t = e.type
          , a = e.memoizedProps
          , n = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && n.focus();
                break e;
            case "img":
                a.src ? n.src = a.src : a.srcSet && (n.srcset = a.srcSet)
            }
        } catch (r) {
            Ce(e, e.return, r)
        }
    }
    function ps(e, t, a) {
        try {
            var n = e.stateNode;
            h0(n, e.type, a, t),
            n[it] = t
        } catch (r) {
            Ce(e, e.return, r)
        }
    }
    function bd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && wa(e.type) || e.tag === 4
    }
    function ys(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || bd(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && wa(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function vs(e, t, a) {
        var n = e.tag;
        if (n === 5 || n === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = or));
        else if (n !== 4 && (n === 27 && wa(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (vs(e, t, a),
            e = e.sibling; e !== null; )
                vs(e, t, a),
                e = e.sibling
    }
    function Wi(e, t, a) {
        var n = e.tag;
        if (n === 5 || n === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (n !== 4 && (n === 27 && wa(e.type) && (a = e.stateNode),
        e = e.child,
        e !== null))
            for (Wi(e, t, a),
            e = e.sibling; e !== null; )
                Wi(e, t, a),
                e = e.sibling
    }
    function xd(e) {
        var t = e.stateNode
          , a = e.memoizedProps;
        try {
            for (var n = e.type, r = t.attributes; r.length; )
                t.removeAttributeNode(r[0]);
            We(t, n, a),
            t[Ie] = e,
            t[it] = a
        } catch (o) {
            Ce(e, e.return, o)
        }
    }
    var na = !1
      , qe = !1
      , bs = !1
      , Sd = typeof WeakSet == "function" ? WeakSet : Set
      , Ze = null;
    function $p(e, t) {
        if (e = e.containerInfo,
        Xs = pr,
        e = jc(e),
        yu(e)) {
            if ("selectionStart"in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var n = a.getSelection && a.getSelection();
                    if (n && n.rangeCount !== 0) {
                        a = n.anchorNode;
                        var r = n.anchorOffset
                          , o = n.focusNode;
                        n = n.focusOffset;
                        try {
                            a.nodeType,
                            o.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var h = 0
                          , y = -1
                          , S = -1
                          , w = 0
                          , k = 0
                          , Y = e
                          , D = null;
                        t: for (; ; ) {
                            for (var j; Y !== a || r !== 0 && Y.nodeType !== 3 || (y = h + r),
                            Y !== o || n !== 0 && Y.nodeType !== 3 || (S = h + n),
                            Y.nodeType === 3 && (h += Y.nodeValue.length),
                            (j = Y.firstChild) !== null; )
                                D = Y,
                                Y = j;
                            for (; ; ) {
                                if (Y === e)
                                    break t;
                                if (D === a && ++w === r && (y = h),
                                D === o && ++k === n && (S = h),
                                (j = Y.nextSibling) !== null)
                                    break;
                                Y = D,
                                D = Y.parentNode
                            }
                            Y = j
                        }
                        a = y === -1 || S === -1 ? null : {
                            start: y,
                            end: S
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Gs = {
            focusedElem: e,
            selectionRange: a
        },
        pr = !1,
        Ze = t; Ze !== null; )
            if (t = Ze,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                Ze = e;
            else
                for (; Ze !== null; ) {
                    switch (t = Ze,
                    o = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && o !== null) {
                            e = void 0,
                            a = t,
                            r = o.memoizedProps,
                            o = o.memoizedState,
                            n = a.stateNode;
                            try {
                                var le = Ja(a.type, r, a.elementType === a.type);
                                e = n.getSnapshotBeforeUpdate(le, o),
                                n.__reactInternalSnapshotBeforeUpdate = e
                            } catch (te) {
                                Ce(a, a.return, te)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                $s(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    $s(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(s(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Ze = e;
                        break
                    }
                    Ze = t.return
                }
    }
    function Ed(e, t, a) {
        var n = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Sa(e, a),
            n & 4 && Nl(5, a);
            break;
        case 1:
            if (Sa(e, a),
            n & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (h) {
                        Ce(a, a.return, h)
                    }
                else {
                    var r = Ja(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (h) {
                        Ce(a, a.return, h)
                    }
                }
            n & 64 && pd(a),
            n & 512 && wl(a, a.return);
            break;
        case 3:
            if (Sa(e, a),
            n & 64 && (e = a.updateQueue,
            e !== null)) {
                if (t = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    af(e, t)
                } catch (h) {
                    Ce(a, a.return, h)
                }
            }
            break;
        case 27:
            t === null && n & 4 && xd(a);
        case 26:
        case 5:
            Sa(e, a),
            t === null && n & 4 && vd(a),
            n & 512 && wl(a, a.return);
            break;
        case 12:
            Sa(e, a);
            break;
        case 13:
            Sa(e, a),
            n & 4 && Td(e, a),
            n & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = a0.bind(null, a),
            x0(e, a))));
            break;
        case 22:
            if (n = a.memoizedState !== null || na,
            !n) {
                t = t !== null && t.memoizedState !== null || qe,
                r = na;
                var o = qe;
                na = n,
                (qe = t) && !o ? Ea(e, a, (a.subtreeFlags & 8772) !== 0) : Sa(e, a),
                na = r,
                qe = o
            }
            break;
        case 30:
            break;
        default:
            Sa(e, a)
        }
    }
    function Rd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Rd(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Wr(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Le = null
      , st = !1;
    function la(e, t, a) {
        for (a = a.child; a !== null; )
            Ad(e, t, a),
            a = a.sibling
    }
    function Ad(e, t, a) {
        if (ht && typeof ht.onCommitFiberUnmount == "function")
            try {
                ht.onCommitFiberUnmount(Jn, a)
            } catch {}
        switch (a.tag) {
        case 26:
            qe || Bt(a, t),
            la(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            qe || Bt(a, t);
            var n = Le
              , r = st;
            wa(a.type) && (Le = a.stateNode,
            st = !1),
            la(e, t, a),
            Hl(a.stateNode),
            Le = n,
            st = r;
            break;
        case 5:
            qe || Bt(a, t);
        case 6:
            if (n = Le,
            r = st,
            Le = null,
            la(e, t, a),
            Le = n,
            st = r,
            Le !== null)
                if (st)
                    try {
                        (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(a.stateNode)
                    } catch (o) {
                        Ce(a, t, o)
                    }
                else
                    try {
                        Le.removeChild(a.stateNode)
                    } catch (o) {
                        Ce(a, t, o)
                    }
            break;
        case 18:
            Le !== null && (st ? (e = Le,
            dh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            Ql(e)) : dh(Le, a.stateNode));
            break;
        case 4:
            n = Le,
            r = st,
            Le = a.stateNode.containerInfo,
            st = !0,
            la(e, t, a),
            Le = n,
            st = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            qe || xa(2, a, t),
            qe || xa(4, a, t),
            la(e, t, a);
            break;
        case 1:
            qe || (Bt(a, t),
            n = a.stateNode,
            typeof n.componentWillUnmount == "function" && yd(a, t, n)),
            la(e, t, a);
            break;
        case 21:
            la(e, t, a);
            break;
        case 22:
            qe = (n = qe) || a.memoizedState !== null,
            la(e, t, a),
            qe = n;
            break;
        default:
            la(e, t, a)
        }
    }
    function Td(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Ql(e)
            } catch (a) {
                Ce(t, t.return, a)
            }
    }
    function Zp(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Sd),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Sd),
            t;
        default:
            throw Error(s(435, e.tag))
        }
    }
    function xs(e, t) {
        var a = Zp(e);
        t.forEach(function(n) {
            var r = n0.bind(null, e, n);
            a.has(n) || (a.add(n),
            n.then(r, r))
        })
    }
    function yt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var n = 0; n < a.length; n++) {
                var r = a[n]
                  , o = e
                  , h = t
                  , y = h;
                e: for (; y !== null; ) {
                    switch (y.tag) {
                    case 27:
                        if (wa(y.type)) {
                            Le = y.stateNode,
                            st = !1;
                            break e
                        }
                        break;
                    case 5:
                        Le = y.stateNode,
                        st = !1;
                        break e;
                    case 3:
                    case 4:
                        Le = y.stateNode.containerInfo,
                        st = !0;
                        break e
                    }
                    y = y.return
                }
                if (Le === null)
                    throw Error(s(160));
                Ad(o, h, r),
                Le = null,
                st = !1,
                o = r.alternate,
                o !== null && (o.return = null),
                r.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                Od(t, e),
                t = t.sibling
    }
    var _t = null;
    function Od(e, t) {
        var a = e.alternate
          , n = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            yt(t, e),
            vt(e),
            n & 4 && (xa(3, e, e.return),
            Nl(3, e),
            xa(5, e, e.return));
            break;
        case 1:
            yt(t, e),
            vt(e),
            n & 512 && (qe || a === null || Bt(a, a.return)),
            n & 64 && na && (e = e.updateQueue,
            e !== null && (n = e.callbacks,
            n !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? n : a.concat(n))));
            break;
        case 26:
            var r = _t;
            if (yt(t, e),
            vt(e),
            n & 512 && (qe || a === null || Bt(a, a.return)),
            n & 4) {
                var o = a !== null ? a.memoizedState : null;
                if (n = e.memoizedState,
                a === null)
                    if (n === null)
                        if (e.stateNode === null) {
                            e: {
                                n = e.type,
                                a = e.memoizedProps,
                                r = r.ownerDocument || r;
                                t: switch (n) {
                                case "title":
                                    o = r.getElementsByTagName("title")[0],
                                    (!o || o[Wn] || o[Ie] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = r.createElement(n),
                                    r.head.insertBefore(o, r.querySelector("head > title"))),
                                    We(o, n, a),
                                    o[Ie] = e,
                                    Ke(o),
                                    n = o;
                                    break e;
                                case "link":
                                    var h = xh("link", "href", r).get(n + (a.href || ""));
                                    if (h) {
                                        for (var y = 0; y < h.length; y++)
                                            if (o = h[y],
                                            o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                h.splice(y, 1);
                                                break t
                                            }
                                    }
                                    o = r.createElement(n),
                                    We(o, n, a),
                                    r.head.appendChild(o);
                                    break;
                                case "meta":
                                    if (h = xh("meta", "content", r).get(n + (a.content || ""))) {
                                        for (y = 0; y < h.length; y++)
                                            if (o = h[y],
                                            o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                h.splice(y, 1);
                                                break t
                                            }
                                    }
                                    o = r.createElement(n),
                                    We(o, n, a),
                                    r.head.appendChild(o);
                                    break;
                                default:
                                    throw Error(s(468, n))
                                }
                                o[Ie] = e,
                                Ke(o),
                                n = o
                            }
                            e.stateNode = n
                        } else
                            Sh(r, e.type, e.stateNode);
                    else
                        e.stateNode = bh(r, n, e.memoizedProps);
                else
                    o !== n ? (o === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : o.count--,
                    n === null ? Sh(r, e.type, e.stateNode) : bh(r, n, e.memoizedProps)) : n === null && e.stateNode !== null && ps(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            yt(t, e),
            vt(e),
            n & 512 && (qe || a === null || Bt(a, a.return)),
            a !== null && n & 4 && ps(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (yt(t, e),
            vt(e),
            n & 512 && (qe || a === null || Bt(a, a.return)),
            e.flags & 32) {
                r = e.stateNode;
                try {
                    cn(r, "")
                } catch (j) {
                    Ce(e, e.return, j)
                }
            }
            n & 4 && e.stateNode != null && (r = e.memoizedProps,
            ps(e, r, a !== null ? a.memoizedProps : r)),
            n & 1024 && (bs = !0);
            break;
        case 6:
            if (yt(t, e),
            vt(e),
            n & 4) {
                if (e.stateNode === null)
                    throw Error(s(162));
                n = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = n
                } catch (j) {
                    Ce(e, e.return, j)
                }
            }
            break;
        case 3:
            if (hr = null,
            r = _t,
            _t = fr(t.containerInfo),
            yt(t, e),
            _t = r,
            vt(e),
            n & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Ql(t.containerInfo)
                } catch (j) {
                    Ce(e, e.return, j)
                }
            bs && (bs = !1,
            Nd(e));
            break;
        case 4:
            n = _t,
            _t = fr(e.stateNode.containerInfo),
            yt(t, e),
            vt(e),
            _t = n;
            break;
        case 12:
            yt(t, e),
            vt(e);
            break;
        case 13:
            yt(t, e),
            vt(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Os = zt()),
            n & 4 && (n = e.updateQueue,
            n !== null && (e.updateQueue = null,
            xs(e, n)));
            break;
        case 22:
            r = e.memoizedState !== null;
            var S = a !== null && a.memoizedState !== null
              , w = na
              , k = qe;
            if (na = w || r,
            qe = k || S,
            yt(t, e),
            qe = k,
            na = w,
            vt(e),
            n & 8192)
                e: for (t = e.stateNode,
                t._visibility = r ? t._visibility & -2 : t._visibility | 1,
                r && (a === null || S || na || qe || Fa(e)),
                a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            S = a = t;
                            try {
                                if (o = S.stateNode,
                                r)
                                    h = o.style,
                                    typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    y = S.stateNode;
                                    var Y = S.memoizedProps.style
                                      , D = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                                    y.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim()
                                }
                            } catch (j) {
                                Ce(S, S.return, j)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            S = t;
                            try {
                                S.stateNode.nodeValue = r ? "" : S.memoizedProps
                            } catch (j) {
                                Ce(S, S.return, j)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            n & 4 && (n = e.updateQueue,
            n !== null && (a = n.retryQueue,
            a !== null && (n.retryQueue = null,
            xs(e, a))));
            break;
        case 19:
            yt(t, e),
            vt(e),
            n & 4 && (n = e.updateQueue,
            n !== null && (e.updateQueue = null,
            xs(e, n)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            yt(t, e),
            vt(e)
        }
    }
    function vt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, n = e.return; n !== null; ) {
                    if (bd(n)) {
                        a = n;
                        break
                    }
                    n = n.return
                }
                if (a == null)
                    throw Error(s(160));
                switch (a.tag) {
                case 27:
                    var r = a.stateNode
                      , o = ys(e);
                    Wi(e, o, r);
                    break;
                case 5:
                    var h = a.stateNode;
                    a.flags & 32 && (cn(h, ""),
                    a.flags &= -33);
                    var y = ys(e);
                    Wi(e, y, h);
                    break;
                case 3:
                case 4:
                    var S = a.stateNode.containerInfo
                      , w = ys(e);
                    vs(e, w, S);
                    break;
                default:
                    throw Error(s(161))
                }
            } catch (k) {
                Ce(e, e.return, k)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Nd(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Nd(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function Sa(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Ed(e, t.alternate, t),
                t = t.sibling
    }
    function Fa(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                xa(4, t, t.return),
                Fa(t);
                break;
            case 1:
                Bt(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && yd(t, t.return, a),
                Fa(t);
                break;
            case 27:
                Hl(t.stateNode);
            case 26:
            case 5:
                Bt(t, t.return),
                Fa(t);
                break;
            case 22:
                t.memoizedState === null && Fa(t);
                break;
            case 30:
                Fa(t);
                break;
            default:
                Fa(t)
            }
            e = e.sibling
        }
    }
    function Ea(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var n = t.alternate
              , r = e
              , o = t
              , h = o.flags;
            switch (o.tag) {
            case 0:
            case 11:
            case 15:
                Ea(r, o, a),
                Nl(4, o);
                break;
            case 1:
                if (Ea(r, o, a),
                n = o,
                r = n.stateNode,
                typeof r.componentDidMount == "function")
                    try {
                        r.componentDidMount()
                    } catch (w) {
                        Ce(n, n.return, w)
                    }
                if (n = o,
                r = n.updateQueue,
                r !== null) {
                    var y = n.stateNode;
                    try {
                        var S = r.shared.hiddenCallbacks;
                        if (S !== null)
                            for (r.shared.hiddenCallbacks = null,
                            r = 0; r < S.length; r++)
                                tf(S[r], y)
                    } catch (w) {
                        Ce(n, n.return, w)
                    }
                }
                a && h & 64 && pd(o),
                wl(o, o.return);
                break;
            case 27:
                xd(o);
            case 26:
            case 5:
                Ea(r, o, a),
                a && n === null && h & 4 && vd(o),
                wl(o, o.return);
                break;
            case 12:
                Ea(r, o, a);
                break;
            case 13:
                Ea(r, o, a),
                a && h & 4 && Td(r, o);
                break;
            case 22:
                o.memoizedState === null && Ea(r, o, a),
                wl(o, o.return);
                break;
            case 30:
                break;
            default:
                Ea(r, o, a)
            }
            t = t.sibling
        }
    }
    function Ss(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && hl(a))
    }
    function Es(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && hl(e))
    }
    function qt(e, t, a, n) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                wd(e, t, a, n),
                t = t.sibling
    }
    function wd(e, t, a, n) {
        var r = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            qt(e, t, a, n),
            r & 2048 && Nl(9, t);
            break;
        case 1:
            qt(e, t, a, n);
            break;
        case 3:
            qt(e, t, a, n),
            r & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && hl(e)));
            break;
        case 12:
            if (r & 2048) {
                qt(e, t, a, n),
                e = t.stateNode;
                try {
                    var o = t.memoizedProps
                      , h = o.id
                      , y = o.onPostCommit;
                    typeof y == "function" && y(h, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (S) {
                    Ce(t, t.return, S)
                }
            } else
                qt(e, t, a, n);
            break;
        case 13:
            qt(e, t, a, n);
            break;
        case 23:
            break;
        case 22:
            o = t.stateNode,
            h = t.alternate,
            t.memoizedState !== null ? o._visibility & 2 ? qt(e, t, a, n) : Cl(e, t) : o._visibility & 2 ? qt(e, t, a, n) : (o._visibility |= 2,
            Cn(e, t, a, n, (t.subtreeFlags & 10256) !== 0)),
            r & 2048 && Ss(h, t);
            break;
        case 24:
            qt(e, t, a, n),
            r & 2048 && Es(t.alternate, t);
            break;
        default:
            qt(e, t, a, n)
        }
    }
    function Cn(e, t, a, n, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var o = e
              , h = t
              , y = a
              , S = n
              , w = h.flags;
            switch (h.tag) {
            case 0:
            case 11:
            case 15:
                Cn(o, h, y, S, r),
                Nl(8, h);
                break;
            case 23:
                break;
            case 22:
                var k = h.stateNode;
                h.memoizedState !== null ? k._visibility & 2 ? Cn(o, h, y, S, r) : Cl(o, h) : (k._visibility |= 2,
                Cn(o, h, y, S, r)),
                r && w & 2048 && Ss(h.alternate, h);
                break;
            case 24:
                Cn(o, h, y, S, r),
                r && w & 2048 && Es(h.alternate, h);
                break;
            default:
                Cn(o, h, y, S, r)
            }
            t = t.sibling
        }
    }
    function Cl(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , n = t
                  , r = n.flags;
                switch (n.tag) {
                case 22:
                    Cl(a, n),
                    r & 2048 && Ss(n.alternate, n);
                    break;
                case 24:
                    Cl(a, n),
                    r & 2048 && Es(n.alternate, n);
                    break;
                default:
                    Cl(a, n)
                }
                t = t.sibling
            }
    }
    var Dl = 8192;
    function Dn(e) {
        if (e.subtreeFlags & Dl)
            for (e = e.child; e !== null; )
                Cd(e),
                e = e.sibling
    }
    function Cd(e) {
        switch (e.tag) {
        case 26:
            Dn(e),
            e.flags & Dl && e.memoizedState !== null && L0(_t, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Dn(e);
            break;
        case 3:
        case 4:
            var t = _t;
            _t = fr(e.stateNode.containerInfo),
            Dn(e),
            _t = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = Dl,
            Dl = 16777216,
            Dn(e),
            Dl = t) : Dn(e));
            break;
        default:
            Dn(e)
        }
    }
    function Dd(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function jl(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    Ze = n,
                    _d(n, e)
                }
            Dd(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                jd(e),
                e = e.sibling
    }
    function jd(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            jl(e),
            e.flags & 2048 && xa(9, e, e.return);
            break;
        case 3:
            jl(e);
            break;
        case 12:
            jl(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Ii(e)) : jl(e);
            break;
        default:
            jl(e)
        }
    }
    function Ii(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    Ze = n,
                    _d(n, e)
                }
            Dd(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                xa(8, t, t.return),
                Ii(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                Ii(t));
                break;
            default:
                Ii(t)
            }
            e = e.sibling
        }
    }
    function _d(e, t) {
        for (; Ze !== null; ) {
            var a = Ze;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                xa(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var n = a.memoizedState.cachePool.pool;
                    n != null && n.refCount++
                }
                break;
            case 24:
                hl(a.memoizedState.cache)
            }
            if (n = a.child,
            n !== null)
                n.return = a,
                Ze = n;
            else
                e: for (a = e; Ze !== null; ) {
                    n = Ze;
                    var r = n.sibling
                      , o = n.return;
                    if (Rd(n),
                    n === a) {
                        Ze = null;
                        break e
                    }
                    if (r !== null) {
                        r.return = o,
                        Ze = r;
                        break e
                    }
                    Ze = o
                }
        }
    }
    var Jp = {
        getCacheForType: function(e) {
            var t = et(Ge)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , Fp = typeof WeakMap == "function" ? WeakMap : Map
      , Ee = 0
      , De = null
      , ge = null
      , ye = 0
      , Re = 0
      , bt = null
      , Ra = !1
      , jn = !1
      , Rs = !1
      , ia = 0
      , ke = 0
      , Aa = 0
      , Pa = 0
      , As = 0
      , Ct = 0
      , _n = 0
      , _l = null
      , ot = null
      , Ts = !1
      , Os = 0
      , er = 1 / 0
      , tr = null
      , Ta = null
      , Pe = 0
      , Oa = null
      , Ln = null
      , Un = 0
      , Ns = 0
      , ws = null
      , Ld = null
      , Ll = 0
      , Cs = null;
    function xt() {
        if ((Ee & 2) !== 0 && ye !== 0)
            return ye & -ye;
        if (L.T !== null) {
            var e = Sn;
            return e !== 0 ? e : zs()
        }
        return Zo()
    }
    function Ud() {
        Ct === 0 && (Ct = (ye & 536870912) === 0 || xe ? Go() : 536870912);
        var e = wt.current;
        return e !== null && (e.flags |= 32),
        Ct
    }
    function St(e, t, a) {
        (e === De && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) && (Mn(e, 0),
        Na(e, ye, Ct, !1)),
        Pn(e, a),
        ((Ee & 2) === 0 || e !== De) && (e === De && ((Ee & 2) === 0 && (Pa |= a),
        ke === 4 && Na(e, ye, Ct, !1)),
        Yt(e))
    }
    function Md(e, t, a) {
        if ((Ee & 6) !== 0)
            throw Error(s(327));
        var n = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Fn(e, t)
          , r = n ? Ip(e, t) : _s(e, t, !0)
          , o = n;
        do {
            if (r === 0) {
                jn && !n && Na(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                o && !Pp(a)) {
                    r = _s(e, t, !1),
                    o = !1;
                    continue
                }
                if (r === 2) {
                    if (o = t,
                    e.errorRecoveryDisabledLanes & o)
                        var h = 0;
                    else
                        h = e.pendingLanes & -536870913,
                        h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        t = h;
                        e: {
                            var y = e;
                            r = _l;
                            var S = y.current.memoizedState.isDehydrated;
                            if (S && (Mn(y, h).flags |= 256),
                            h = _s(y, h, !1),
                            h !== 2) {
                                if (Rs && !S) {
                                    y.errorRecoveryDisabledLanes |= o,
                                    Pa |= o,
                                    r = 4;
                                    break e
                                }
                                o = ot,
                                ot = r,
                                o !== null && (ot === null ? ot = o : ot.push.apply(ot, o))
                            }
                            r = h
                        }
                        if (o = !1,
                        r !== 2)
                            continue
                    }
                }
                if (r === 1) {
                    Mn(e, 0),
                    Na(e, t, 0, !0);
                    break
                }
                e: {
                    switch (n = e,
                    o = r,
                    o) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Na(n, t, Ct, !Ra);
                        break e;
                    case 2:
                        ot = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(s(329))
                    }
                    if ((t & 62914560) === t && (r = Os + 300 - zt(),
                    10 < r)) {
                        if (Na(n, t, Ct, !Ra),
                        di(n, 0, !0) !== 0)
                            break e;
                        n.timeoutHandle = ch(zd.bind(null, n, a, ot, tr, Ts, t, Ct, Pa, _n, Ra, o, 2, -0, 0), r);
                        break e
                    }
                    zd(n, a, ot, tr, Ts, t, Ct, Pa, _n, Ra, o, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Yt(e)
    }
    function zd(e, t, a, n, r, o, h, y, S, w, k, Y, D, j) {
        if (e.timeoutHandle = -1,
        Y = t.subtreeFlags,
        (Y & 8192 || (Y & 16785408) === 16785408) && (ql = {
            stylesheets: null,
            count: 0,
            unsuspend: _0
        },
        Cd(t),
        Y = U0(),
        Y !== null)) {
            e.cancelPendingCommit = Y(Xd.bind(null, e, t, o, a, n, r, h, y, S, k, 1, D, j)),
            Na(e, o, h, !w);
            return
        }
        Xd(e, t, o, a, n, r, h, y, S)
    }
    function Pp(e) {
        for (var t = e; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var n = 0; n < a.length; n++) {
                    var r = a[n]
                      , o = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!mt(o(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
            t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Na(e, t, a, n) {
        t &= ~As,
        t &= ~Pa,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        n && (e.warmLanes |= t),
        n = e.expirationTimes;
        for (var r = t; 0 < r; ) {
            var o = 31 - gt(r)
              , h = 1 << o;
            n[o] = -1,
            r &= ~h
        }
        a !== 0 && Ko(e, a, t)
    }
    function ar() {
        return (Ee & 6) === 0 ? (Ul(0),
        !1) : !0
    }
    function Ds() {
        if (ge !== null) {
            if (Re === 0)
                var e = ge.return;
            else
                e = ge,
                Pt = Qa = null,
                $u(e),
                Nn = null,
                Al = 0,
                e = ge;
            for (; e !== null; )
                md(e.alternate, e),
                e = e.return;
            ge = null
        }
    }
    function Mn(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        m0(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        Ds(),
        De = e,
        ge = a = Zt(e.current, null),
        ye = t,
        Re = 0,
        bt = null,
        Ra = !1,
        jn = Fn(e, t),
        Rs = !1,
        _n = Ct = As = Pa = Aa = ke = 0,
        ot = _l = null,
        Ts = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var n = e.entangledLanes;
        if (n !== 0)
            for (e = e.entanglements,
            n &= t; 0 < n; ) {
                var r = 31 - gt(n)
                  , o = 1 << r;
                t |= e[r],
                n &= ~o
            }
        return ia = t,
        Ai(),
        a
    }
    function Hd(e, t) {
        de = null,
        L.H = Xi,
        t === ml || t === Li ? (t = Ic(),
        Re = 3) : t === Fc ? (t = Ic(),
        Re = 4) : Re = t === td ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        bt = t,
        ge === null && (ke = 1,
        Zi(e, At(t, e.current)))
    }
    function kd() {
        var e = L.H;
        return L.H = Xi,
        e === null ? Xi : e
    }
    function Bd() {
        var e = L.A;
        return L.A = Jp,
        e
    }
    function js() {
        ke = 4,
        Ra || (ye & 4194048) !== ye && wt.current !== null || (jn = !0),
        (Aa & 134217727) === 0 && (Pa & 134217727) === 0 || De === null || Na(De, ye, Ct, !1)
    }
    function _s(e, t, a) {
        var n = Ee;
        Ee |= 2;
        var r = kd()
          , o = Bd();
        (De !== e || ye !== t) && (tr = null,
        Mn(e, t)),
        t = !1;
        var h = ke;
        e: do
            try {
                if (Re !== 0 && ge !== null) {
                    var y = ge
                      , S = bt;
                    switch (Re) {
                    case 8:
                        Ds(),
                        h = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        wt.current === null && (t = !0);
                        var w = Re;
                        if (Re = 0,
                        bt = null,
                        zn(e, y, S, w),
                        a && jn) {
                            h = 0;
                            break e
                        }
                        break;
                    default:
                        w = Re,
                        Re = 0,
                        bt = null,
                        zn(e, y, S, w)
                    }
                }
                Wp(),
                h = ke;
                break
            } catch (k) {
                Hd(e, k)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Pt = Qa = null,
        Ee = n,
        L.H = r,
        L.A = o,
        ge === null && (De = null,
        ye = 0,
        Ai()),
        h
    }
    function Wp() {
        for (; ge !== null; )
            qd(ge)
    }
    function Ip(e, t) {
        var a = Ee;
        Ee |= 2;
        var n = kd()
          , r = Bd();
        De !== e || ye !== t ? (tr = null,
        er = zt() + 500,
        Mn(e, t)) : jn = Fn(e, t);
        e: do
            try {
                if (Re !== 0 && ge !== null) {
                    t = ge;
                    var o = bt;
                    t: switch (Re) {
                    case 1:
                        Re = 0,
                        bt = null,
                        zn(e, t, o, 1);
                        break;
                    case 2:
                    case 9:
                        if (Pc(o)) {
                            Re = 0,
                            bt = null,
                            Yd(t);
                            break
                        }
                        t = function() {
                            Re !== 2 && Re !== 9 || De !== e || (Re = 7),
                            Yt(e)
                        }
                        ,
                        o.then(t, t);
                        break e;
                    case 3:
                        Re = 7;
                        break e;
                    case 4:
                        Re = 5;
                        break e;
                    case 7:
                        Pc(o) ? (Re = 0,
                        bt = null,
                        Yd(t)) : (Re = 0,
                        bt = null,
                        zn(e, t, o, 7));
                        break;
                    case 5:
                        var h = null;
                        switch (ge.tag) {
                        case 26:
                            h = ge.memoizedState;
                        case 5:
                        case 27:
                            var y = ge;
                            if (!h || Eh(h)) {
                                Re = 0,
                                bt = null;
                                var S = y.sibling;
                                if (S !== null)
                                    ge = S;
                                else {
                                    var w = y.return;
                                    w !== null ? (ge = w,
                                    nr(w)) : ge = null
                                }
                                break t
                            }
                        }
                        Re = 0,
                        bt = null,
                        zn(e, t, o, 5);
                        break;
                    case 6:
                        Re = 0,
                        bt = null,
                        zn(e, t, o, 6);
                        break;
                    case 8:
                        Ds(),
                        ke = 6;
                        break e;
                    default:
                        throw Error(s(462))
                    }
                }
                e0();
                break
            } catch (k) {
                Hd(e, k)
            }
        while (!0);
        return Pt = Qa = null,
        L.H = n,
        L.A = r,
        Ee = a,
        ge !== null ? 0 : (De = null,
        ye = 0,
        Ai(),
        ke)
    }
    function e0() {
        for (; ge !== null && !Em(); )
            qd(ge)
    }
    function qd(e) {
        var t = hd(e.alternate, e, ia);
        e.memoizedProps = e.pendingProps,
        t === null ? nr(e) : ge = t
    }
    function Yd(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = ud(a, t, t.pendingProps, t.type, void 0, ye);
            break;
        case 11:
            t = ud(a, t, t.pendingProps, t.type.render, t.ref, ye);
            break;
        case 5:
            $u(t);
        default:
            md(a, t),
            t = ge = Yc(t, ia),
            t = hd(a, t, ia)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? nr(e) : ge = t
    }
    function zn(e, t, a, n) {
        Pt = Qa = null,
        $u(t),
        Nn = null,
        Al = 0;
        var r = t.return;
        try {
            if (Xp(e, r, t, a, ye)) {
                ke = 1,
                Zi(e, At(a, e.current)),
                ge = null;
                return
            }
        } catch (o) {
            if (r !== null)
                throw ge = r,
                o;
            ke = 1,
            Zi(e, At(a, e.current)),
            ge = null;
            return
        }
        t.flags & 32768 ? (xe || n === 1 ? e = !0 : jn || (ye & 536870912) !== 0 ? e = !1 : (Ra = e = !0,
        (n === 2 || n === 9 || n === 3 || n === 6) && (n = wt.current,
        n !== null && n.tag === 13 && (n.flags |= 16384))),
        Vd(t, e)) : nr(t)
    }
    function nr(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Vd(t, Ra);
                return
            }
            e = t.return;
            var a = Qp(t.alternate, t, ia);
            if (a !== null) {
                ge = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                ge = t;
                return
            }
            ge = t = e
        } while (t !== null);
        ke === 0 && (ke = 5)
    }
    function Vd(e, t) {
        do {
            var a = Kp(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                ge = a;
                return
            }
            if (a = e.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                ge = e;
                return
            }
            ge = e = a
        } while (e !== null);
        ke = 6,
        ge = null
    }
    function Xd(e, t, a, n, r, o, h, y, S) {
        e.cancelPendingCommit = null;
        do
            lr();
        while (Pe !== 0);
        if ((Ee & 6) !== 0)
            throw Error(s(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(s(177));
            if (o = t.lanes | t.childLanes,
            o |= Eu,
            _m(e, a, o, h, y, S),
            e === De && (ge = De = null,
            ye = 0),
            Ln = t,
            Oa = e,
            Un = a,
            Ns = o,
            ws = r,
            Ld = n,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            l0(oi, function() {
                return Zd(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            n = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || n) {
                n = L.T,
                L.T = null,
                r = C.p,
                C.p = 2,
                h = Ee,
                Ee |= 4;
                try {
                    $p(e, t, a)
                } finally {
                    Ee = h,
                    C.p = r,
                    L.T = n
                }
            }
            Pe = 1,
            Gd(),
            Qd(),
            Kd()
        }
    }
    function Gd() {
        if (Pe === 1) {
            Pe = 0;
            var e = Oa
              , t = Ln
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = L.T,
                L.T = null;
                var n = C.p;
                C.p = 2;
                var r = Ee;
                Ee |= 4;
                try {
                    Od(t, e);
                    var o = Gs
                      , h = jc(e.containerInfo)
                      , y = o.focusedElem
                      , S = o.selectionRange;
                    if (h !== y && y && y.ownerDocument && Dc(y.ownerDocument.documentElement, y)) {
                        if (S !== null && yu(y)) {
                            var w = S.start
                              , k = S.end;
                            if (k === void 0 && (k = w),
                            "selectionStart"in y)
                                y.selectionStart = w,
                                y.selectionEnd = Math.min(k, y.value.length);
                            else {
                                var Y = y.ownerDocument || document
                                  , D = Y && Y.defaultView || window;
                                if (D.getSelection) {
                                    var j = D.getSelection()
                                      , le = y.textContent.length
                                      , te = Math.min(S.start, le)
                                      , Ne = S.end === void 0 ? te : Math.min(S.end, le);
                                    !j.extend && te > Ne && (h = Ne,
                                    Ne = te,
                                    te = h);
                                    var T = Cc(y, te)
                                      , R = Cc(y, Ne);
                                    if (T && R && (j.rangeCount !== 1 || j.anchorNode !== T.node || j.anchorOffset !== T.offset || j.focusNode !== R.node || j.focusOffset !== R.offset)) {
                                        var O = Y.createRange();
                                        O.setStart(T.node, T.offset),
                                        j.removeAllRanges(),
                                        te > Ne ? (j.addRange(O),
                                        j.extend(R.node, R.offset)) : (O.setEnd(R.node, R.offset),
                                        j.addRange(O))
                                    }
                                }
                            }
                        }
                        for (Y = [],
                        j = y; j = j.parentNode; )
                            j.nodeType === 1 && Y.push({
                                element: j,
                                left: j.scrollLeft,
                                top: j.scrollTop
                            });
                        for (typeof y.focus == "function" && y.focus(),
                        y = 0; y < Y.length; y++) {
                            var q = Y[y];
                            q.element.scrollLeft = q.left,
                            q.element.scrollTop = q.top
                        }
                    }
                    pr = !!Xs,
                    Gs = Xs = null
                } finally {
                    Ee = r,
                    C.p = n,
                    L.T = a
                }
            }
            e.current = t,
            Pe = 2
        }
    }
    function Qd() {
        if (Pe === 2) {
            Pe = 0;
            var e = Oa
              , t = Ln
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = L.T,
                L.T = null;
                var n = C.p;
                C.p = 2;
                var r = Ee;
                Ee |= 4;
                try {
                    Ed(e, t.alternate, t)
                } finally {
                    Ee = r,
                    C.p = n,
                    L.T = a
                }
            }
            Pe = 3
        }
    }
    function Kd() {
        if (Pe === 4 || Pe === 3) {
            Pe = 0,
            Rm();
            var e = Oa
              , t = Ln
              , a = Un
              , n = Ld;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Pe = 5 : (Pe = 0,
            Ln = Oa = null,
            $d(e, e.pendingLanes));
            var r = e.pendingLanes;
            if (r === 0 && (Ta = null),
            Fr(a),
            t = t.stateNode,
            ht && typeof ht.onCommitFiberRoot == "function")
                try {
                    ht.onCommitFiberRoot(Jn, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (n !== null) {
                t = L.T,
                r = C.p,
                C.p = 2,
                L.T = null;
                try {
                    for (var o = e.onRecoverableError, h = 0; h < n.length; h++) {
                        var y = n[h];
                        o(y.value, {
                            componentStack: y.stack
                        })
                    }
                } finally {
                    L.T = t,
                    C.p = r
                }
            }
            (Un & 3) !== 0 && lr(),
            Yt(e),
            r = e.pendingLanes,
            (a & 4194090) !== 0 && (r & 42) !== 0 ? e === Cs ? Ll++ : (Ll = 0,
            Cs = e) : Ll = 0,
            Ul(0)
        }
    }
    function $d(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        hl(t)))
    }
    function lr(e) {
        return Gd(),
        Qd(),
        Kd(),
        Zd()
    }
    function Zd() {
        if (Pe !== 5)
            return !1;
        var e = Oa
          , t = Ns;
        Ns = 0;
        var a = Fr(Un)
          , n = L.T
          , r = C.p;
        try {
            C.p = 32 > a ? 32 : a,
            L.T = null,
            a = ws,
            ws = null;
            var o = Oa
              , h = Un;
            if (Pe = 0,
            Ln = Oa = null,
            Un = 0,
            (Ee & 6) !== 0)
                throw Error(s(331));
            var y = Ee;
            if (Ee |= 4,
            jd(o.current),
            wd(o, o.current, h, a),
            Ee = y,
            Ul(0, !1),
            ht && typeof ht.onPostCommitFiberRoot == "function")
                try {
                    ht.onPostCommitFiberRoot(Jn, o)
                } catch {}
            return !0
        } finally {
            C.p = r,
            L.T = n,
            $d(e, t)
        }
    }
    function Jd(e, t, a) {
        t = At(a, t),
        t = us(e.stateNode, t, 2),
        e = pa(e, t, 2),
        e !== null && (Pn(e, 2),
        Yt(e))
    }
    function Ce(e, t, a) {
        if (e.tag === 3)
            Jd(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Jd(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ta === null || !Ta.has(n))) {
                        e = At(a, e),
                        a = If(2),
                        n = pa(t, a, 2),
                        n !== null && (ed(a, n, t, e),
                        Pn(n, 2),
                        Yt(n));
                        break
                    }
                }
                t = t.return
            }
    }
    function Ls(e, t, a) {
        var n = e.pingCache;
        if (n === null) {
            n = e.pingCache = new Fp;
            var r = new Set;
            n.set(t, r)
        } else
            r = n.get(t),
            r === void 0 && (r = new Set,
            n.set(t, r));
        r.has(a) || (Rs = !0,
        r.add(a),
        e = t0.bind(null, e, t, a),
        t.then(e, e))
    }
    function t0(e, t, a) {
        var n = e.pingCache;
        n !== null && n.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        De === e && (ye & a) === a && (ke === 4 || ke === 3 && (ye & 62914560) === ye && 300 > zt() - Os ? (Ee & 2) === 0 && Mn(e, 0) : As |= a,
        _n === ye && (_n = 0)),
        Yt(e)
    }
    function Fd(e, t) {
        t === 0 && (t = Qo()),
        e = yn(e, t),
        e !== null && (Pn(e, t),
        Yt(e))
    }
    function a0(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        Fd(e, a)
    }
    function n0(e, t) {
        var a = 0;
        switch (e.tag) {
        case 13:
            var n = e.stateNode
              , r = e.memoizedState;
            r !== null && (a = r.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        case 22:
            n = e.stateNode._retryCache;
            break;
        default:
            throw Error(s(314))
        }
        n !== null && n.delete(t),
        Fd(e, a)
    }
    function l0(e, t) {
        return Kr(e, t)
    }
    var ir = null
      , Hn = null
      , Us = !1
      , rr = !1
      , Ms = !1
      , Wa = 0;
    function Yt(e) {
        e !== Hn && e.next === null && (Hn === null ? ir = Hn = e : Hn = Hn.next = e),
        rr = !0,
        Us || (Us = !0,
        r0())
    }
    function Ul(e, t) {
        if (!Ms && rr) {
            Ms = !0;
            do
                for (var a = !1, n = ir; n !== null; ) {
                    if (e !== 0) {
                        var r = n.pendingLanes;
                        if (r === 0)
                            var o = 0;
                        else {
                            var h = n.suspendedLanes
                              , y = n.pingedLanes;
                            o = (1 << 31 - gt(42 | e) + 1) - 1,
                            o &= r & ~(h & ~y),
                            o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0
                        }
                        o !== 0 && (a = !0,
                        eh(n, o))
                    } else
                        o = ye,
                        o = di(n, n === De ? o : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1),
                        (o & 3) === 0 || Fn(n, o) || (a = !0,
                        eh(n, o));
                    n = n.next
                }
            while (a);
            Ms = !1
        }
    }
    function i0() {
        Pd()
    }
    function Pd() {
        rr = Us = !1;
        var e = 0;
        Wa !== 0 && (g0() && (e = Wa),
        Wa = 0);
        for (var t = zt(), a = null, n = ir; n !== null; ) {
            var r = n.next
              , o = Wd(n, t);
            o === 0 ? (n.next = null,
            a === null ? ir = r : a.next = r,
            r === null && (Hn = a)) : (a = n,
            (e !== 0 || (o & 3) !== 0) && (rr = !0)),
            n = r
        }
        Ul(e)
    }
    function Wd(e, t) {
        for (var a = e.suspendedLanes, n = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o; ) {
            var h = 31 - gt(o)
              , y = 1 << h
              , S = r[h];
            S === -1 ? ((y & a) === 0 || (y & n) !== 0) && (r[h] = jm(y, t)) : S <= t && (e.expiredLanes |= y),
            o &= ~y
        }
        if (t = De,
        a = ye,
        a = di(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        n = e.callbackNode,
        a === 0 || e === t && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null)
            return n !== null && n !== null && $r(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || Fn(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (n !== null && $r(n),
            Fr(a)) {
            case 2:
            case 8:
                a = Vo;
                break;
            case 32:
                a = oi;
                break;
            case 268435456:
                a = Xo;
                break;
            default:
                a = oi
            }
            return n = Id.bind(null, e),
            a = Kr(a, n),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return n !== null && n !== null && $r(n),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Id(e, t) {
        if (Pe !== 0 && Pe !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (lr() && e.callbackNode !== a)
            return null;
        var n = ye;
        return n = di(e, e === De ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        n === 0 ? null : (Md(e, n, t),
        Wd(e, zt()),
        e.callbackNode != null && e.callbackNode === a ? Id.bind(null, e) : null)
    }
    function eh(e, t) {
        if (lr())
            return null;
        Md(e, t, !0)
    }
    function r0() {
        p0(function() {
            (Ee & 6) !== 0 ? Kr(Yo, i0) : Pd()
        })
    }
    function zs() {
        return Wa === 0 && (Wa = Go()),
        Wa
    }
    function th(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yi("" + e)
    }
    function ah(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        e = new FormData(e),
        a.parentNode.removeChild(a),
        e
    }
    function u0(e, t, a, n, r) {
        if (t === "submit" && a && a.stateNode === r) {
            var o = th((r[it] || null).action)
              , h = n.submitter;
            h && (t = (t = h[it] || null) ? th(t.formAction) : h.getAttribute("formAction"),
            t !== null && (o = t,
            h = null));
            var y = new Si("action","action",null,n,r);
            e.push({
                event: y,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (n.defaultPrevented) {
                            if (Wa !== 0) {
                                var S = h ? ah(r, h) : new FormData(r);
                                as(a, {
                                    pending: !0,
                                    data: S,
                                    method: r.method,
                                    action: o
                                }, null, S)
                            }
                        } else
                            typeof o == "function" && (y.preventDefault(),
                            S = h ? ah(r, h) : new FormData(r),
                            as(a, {
                                pending: !0,
                                data: S,
                                method: r.method,
                                action: o
                            }, o, S))
                    },
                    currentTarget: r
                }]
            })
        }
    }
    for (var Hs = 0; Hs < Su.length; Hs++) {
        var ks = Su[Hs]
          , s0 = ks.toLowerCase()
          , o0 = ks[0].toUpperCase() + ks.slice(1);
        jt(s0, "on" + o0)
    }
    jt(Uc, "onAnimationEnd"),
    jt(Mc, "onAnimationIteration"),
    jt(zc, "onAnimationStart"),
    jt("dblclick", "onDoubleClick"),
    jt("focusin", "onFocus"),
    jt("focusout", "onBlur"),
    jt(Op, "onTransitionRun"),
    jt(Np, "onTransitionStart"),
    jt(wp, "onTransitionCancel"),
    jt(Hc, "onTransitionEnd"),
    un("onMouseEnter", ["mouseout", "mouseover"]),
    un("onMouseLeave", ["mouseout", "mouseover"]),
    un("onPointerEnter", ["pointerout", "pointerover"]),
    un("onPointerLeave", ["pointerout", "pointerover"]),
    za("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    za("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    za("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    za("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    za("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    za("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ml = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , c0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));
    function nh(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var n = e[a]
              , r = n.event;
            n = n.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var h = n.length - 1; 0 <= h; h--) {
                        var y = n[h]
                          , S = y.instance
                          , w = y.currentTarget;
                        if (y = y.listener,
                        S !== o && r.isPropagationStopped())
                            break e;
                        o = y,
                        r.currentTarget = w;
                        try {
                            o(r)
                        } catch (k) {
                            $i(k)
                        }
                        r.currentTarget = null,
                        o = S
                    }
                else
                    for (h = 0; h < n.length; h++) {
                        if (y = n[h],
                        S = y.instance,
                        w = y.currentTarget,
                        y = y.listener,
                        S !== o && r.isPropagationStopped())
                            break e;
                        o = y,
                        r.currentTarget = w;
                        try {
                            o(r)
                        } catch (k) {
                            $i(k)
                        }
                        r.currentTarget = null,
                        o = S
                    }
            }
        }
    }
    function me(e, t) {
        var a = t[Pr];
        a === void 0 && (a = t[Pr] = new Set);
        var n = e + "__bubble";
        a.has(n) || (lh(t, e, 2, !1),
        a.add(n))
    }
    function Bs(e, t, a) {
        var n = 0;
        t && (n |= 4),
        lh(a, e, n, t)
    }
    var ur = "_reactListening" + Math.random().toString(36).slice(2);
    function qs(e) {
        if (!e[ur]) {
            e[ur] = !0,
            Fo.forEach(function(a) {
                a !== "selectionchange" && (c0.has(a) || Bs(a, !1, e),
                Bs(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ur] || (t[ur] = !0,
            Bs("selectionchange", !1, t))
        }
    }
    function lh(e, t, a, n) {
        switch (wh(t)) {
        case 2:
            var r = H0;
            break;
        case 8:
            r = k0;
            break;
        default:
            r = eo
        }
        a = r.bind(null, t, a, e),
        r = void 0,
        !su || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
        n ? r !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: r
        }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
            passive: r
        }) : e.addEventListener(t, a, !1)
    }
    function Ys(e, t, a, n, r) {
        var o = n;
        if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
            e: for (; ; ) {
                if (n === null)
                    return;
                var h = n.tag;
                if (h === 3 || h === 4) {
                    var y = n.stateNode.containerInfo;
                    if (y === r)
                        break;
                    if (h === 4)
                        for (h = n.return; h !== null; ) {
                            var S = h.tag;
                            if ((S === 3 || S === 4) && h.stateNode.containerInfo === r)
                                return;
                            h = h.return
                        }
                    for (; y !== null; ) {
                        if (h = nn(y),
                        h === null)
                            return;
                        if (S = h.tag,
                        S === 5 || S === 6 || S === 26 || S === 27) {
                            n = o = h;
                            continue e
                        }
                        y = y.parentNode
                    }
                }
                n = n.return
            }
        cc(function() {
            var w = o
              , k = ru(a)
              , Y = [];
            e: {
                var D = kc.get(e);
                if (D !== void 0) {
                    var j = Si
                      , le = e;
                    switch (e) {
                    case "keypress":
                        if (bi(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        j = lp;
                        break;
                    case "focusin":
                        le = "focus",
                        j = du;
                        break;
                    case "focusout":
                        le = "blur",
                        j = du;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        j = du;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        j = hc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        j = Km;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        j = up;
                        break;
                    case Uc:
                    case Mc:
                    case zc:
                        j = Jm;
                        break;
                    case Hc:
                        j = op;
                        break;
                    case "scroll":
                    case "scrollend":
                        j = Gm;
                        break;
                    case "wheel":
                        j = fp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        j = Pm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        j = mc;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        j = hp
                    }
                    var te = (t & 4) !== 0
                      , Ne = !te && (e === "scroll" || e === "scrollend")
                      , T = te ? D !== null ? D + "Capture" : null : D;
                    te = [];
                    for (var R = w, O; R !== null; ) {
                        var q = R;
                        if (O = q.stateNode,
                        q = q.tag,
                        q !== 5 && q !== 26 && q !== 27 || O === null || T === null || (q = el(R, T),
                        q != null && te.push(zl(R, q, O))),
                        Ne)
                            break;
                        R = R.return
                    }
                    0 < te.length && (D = new j(D,le,null,a,k),
                    Y.push({
                        event: D,
                        listeners: te
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (D = e === "mouseover" || e === "pointerover",
                    j = e === "mouseout" || e === "pointerout",
                    D && a !== iu && (le = a.relatedTarget || a.fromElement) && (nn(le) || le[an]))
                        break e;
                    if ((j || D) && (D = k.window === k ? k : (D = k.ownerDocument) ? D.defaultView || D.parentWindow : window,
                    j ? (le = a.relatedTarget || a.toElement,
                    j = w,
                    le = le ? nn(le) : null,
                    le !== null && (Ne = f(le),
                    te = le.tag,
                    le !== Ne || te !== 5 && te !== 27 && te !== 6) && (le = null)) : (j = null,
                    le = w),
                    j !== le)) {
                        if (te = hc,
                        q = "onMouseLeave",
                        T = "onMouseEnter",
                        R = "mouse",
                        (e === "pointerout" || e === "pointerover") && (te = mc,
                        q = "onPointerLeave",
                        T = "onPointerEnter",
                        R = "pointer"),
                        Ne = j == null ? D : In(j),
                        O = le == null ? D : In(le),
                        D = new te(q,R + "leave",j,a,k),
                        D.target = Ne,
                        D.relatedTarget = O,
                        q = null,
                        nn(k) === w && (te = new te(T,R + "enter",le,a,k),
                        te.target = O,
                        te.relatedTarget = Ne,
                        q = te),
                        Ne = q,
                        j && le)
                            t: {
                                for (te = j,
                                T = le,
                                R = 0,
                                O = te; O; O = kn(O))
                                    R++;
                                for (O = 0,
                                q = T; q; q = kn(q))
                                    O++;
                                for (; 0 < R - O; )
                                    te = kn(te),
                                    R--;
                                for (; 0 < O - R; )
                                    T = kn(T),
                                    O--;
                                for (; R--; ) {
                                    if (te === T || T !== null && te === T.alternate)
                                        break t;
                                    te = kn(te),
                                    T = kn(T)
                                }
                                te = null
                            }
                        else
                            te = null;
                        j !== null && ih(Y, D, j, te, !1),
                        le !== null && Ne !== null && ih(Y, Ne, le, te, !0)
                    }
                }
                e: {
                    if (D = w ? In(w) : window,
                    j = D.nodeName && D.nodeName.toLowerCase(),
                    j === "select" || j === "input" && D.type === "file")
                        var J = Rc;
                    else if (Sc(D))
                        if (Ac)
                            J = Rp;
                        else {
                            J = Sp;
                            var he = xp
                        }
                    else
                        j = D.nodeName,
                        !j || j.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? w && lu(w.elementType) && (J = Rc) : J = Ep;
                    if (J && (J = J(e, w))) {
                        Ec(Y, J, a, k);
                        break e
                    }
                    he && he(e, D, w),
                    e === "focusout" && w && D.type === "number" && w.memoizedProps.value != null && nu(D, "number", D.value)
                }
                switch (he = w ? In(w) : window,
                e) {
                case "focusin":
                    (Sc(he) || he.contentEditable === "true") && (gn = he,
                    vu = w,
                    sl = null);
                    break;
                case "focusout":
                    sl = vu = gn = null;
                    break;
                case "mousedown":
                    bu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    bu = !1,
                    _c(Y, a, k);
                    break;
                case "selectionchange":
                    if (Tp)
                        break;
                case "keydown":
                case "keyup":
                    _c(Y, a, k)
                }
                var W;
                if (gu)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ae = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ae = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ae = "onCompositionUpdate";
                            break e
                        }
                        ae = void 0
                    }
                else
                    hn ? bc(e, a) && (ae = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ae = "onCompositionStart");
                ae && (pc && a.locale !== "ko" && (hn || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && hn && (W = fc()) : (da = k,
                ou = "value"in da ? da.value : da.textContent,
                hn = !0)),
                he = sr(w, ae),
                0 < he.length && (ae = new gc(ae,e,null,a,k),
                Y.push({
                    event: ae,
                    listeners: he
                }),
                W ? ae.data = W : (W = xc(a),
                W !== null && (ae.data = W)))),
                (W = mp ? pp(e, a) : yp(e, a)) && (ae = sr(w, "onBeforeInput"),
                0 < ae.length && (he = new gc("onBeforeInput","beforeinput",null,a,k),
                Y.push({
                    event: he,
                    listeners: ae
                }),
                he.data = W)),
                u0(Y, e, w, a, k)
            }
            nh(Y, t)
        })
    }
    function zl(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function sr(e, t) {
        for (var a = t + "Capture", n = []; e !== null; ) {
            var r = e
              , o = r.stateNode;
            if (r = r.tag,
            r !== 5 && r !== 26 && r !== 27 || o === null || (r = el(e, a),
            r != null && n.unshift(zl(e, r, o)),
            r = el(e, t),
            r != null && n.push(zl(e, r, o))),
            e.tag === 3)
                return n;
            e = e.return
        }
        return []
    }
    function kn(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function ih(e, t, a, n, r) {
        for (var o = t._reactName, h = []; a !== null && a !== n; ) {
            var y = a
              , S = y.alternate
              , w = y.stateNode;
            if (y = y.tag,
            S !== null && S === n)
                break;
            y !== 5 && y !== 26 && y !== 27 || w === null || (S = w,
            r ? (w = el(a, o),
            w != null && h.unshift(zl(a, w, S))) : r || (w = el(a, o),
            w != null && h.push(zl(a, w, S)))),
            a = a.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var f0 = /\r\n?/g
      , d0 = /\u0000|\uFFFD/g;
    function rh(e) {
        return (typeof e == "string" ? e : "" + e).replace(f0, `
`).replace(d0, "")
    }
    function uh(e, t) {
        return t = rh(t),
        rh(e) === t
    }
    function or() {}
    function Oe(e, t, a, n, r, o) {
        switch (a) {
        case "children":
            typeof n == "string" ? t === "body" || t === "textarea" && n === "" || cn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && cn(e, "" + n);
            break;
        case "className":
            gi(e, "class", n);
            break;
        case "tabIndex":
            gi(e, "tabindex", n);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            gi(e, a, n);
            break;
        case "style":
            sc(e, n, o);
            break;
        case "data":
            if (t !== "object") {
                gi(e, "data", n);
                break
            }
        case "src":
        case "href":
            if (n === "" && (t !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break
            }
            if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
                e.removeAttribute(a);
                break
            }
            n = yi("" + n),
            e.setAttribute(a, n);
            break;
        case "action":
        case "formAction":
            if (typeof n == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof o == "function" && (a === "formAction" ? (t !== "input" && Oe(e, t, "name", r.name, r, null),
                Oe(e, t, "formEncType", r.formEncType, r, null),
                Oe(e, t, "formMethod", r.formMethod, r, null),
                Oe(e, t, "formTarget", r.formTarget, r, null)) : (Oe(e, t, "encType", r.encType, r, null),
                Oe(e, t, "method", r.method, r, null),
                Oe(e, t, "target", r.target, r, null)));
            if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                e.removeAttribute(a);
                break
            }
            n = yi("" + n),
            e.setAttribute(a, n);
            break;
        case "onClick":
            n != null && (e.onclick = or);
            break;
        case "onScroll":
            n != null && me("scroll", e);
            break;
        case "onScrollEnd":
            n != null && me("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (n != null) {
                if (typeof n != "object" || !("__html"in n))
                    throw Error(s(61));
                if (a = n.__html,
                a != null) {
                    if (r.children != null)
                        throw Error(s(60));
                    e.innerHTML = a
                }
            }
            break;
        case "multiple":
            e.multiple = n && typeof n != "function" && typeof n != "symbol";
            break;
        case "muted":
            e.muted = n && typeof n != "function" && typeof n != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            a = yi("" + n),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "" + n) : e.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            n === !0 ? e.setAttribute(a, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, n) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(a, n) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(a) : e.setAttribute(a, n);
            break;
        case "popover":
            me("beforetoggle", e),
            me("toggle", e),
            hi(e, "popover", n);
            break;
        case "xlinkActuate":
            Kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
            break;
        case "xlinkArcrole":
            Kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
            break;
        case "xlinkRole":
            Kt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
            break;
        case "xlinkShow":
            Kt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
            break;
        case "xlinkTitle":
            Kt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
            break;
        case "xlinkType":
            Kt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
            break;
        case "xmlBase":
            Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
            break;
        case "xmlLang":
            Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
            break;
        case "xmlSpace":
            Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
            break;
        case "is":
            hi(e, "is", n);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Vm.get(a) || a,
            hi(e, a, n))
        }
    }
    function Vs(e, t, a, n, r, o) {
        switch (a) {
        case "style":
            sc(e, n, o);
            break;
        case "dangerouslySetInnerHTML":
            if (n != null) {
                if (typeof n != "object" || !("__html"in n))
                    throw Error(s(61));
                if (a = n.__html,
                a != null) {
                    if (r.children != null)
                        throw Error(s(60));
                    e.innerHTML = a
                }
            }
            break;
        case "children":
            typeof n == "string" ? cn(e, n) : (typeof n == "number" || typeof n == "bigint") && cn(e, "" + n);
            break;
        case "onScroll":
            n != null && me("scroll", e);
            break;
        case "onScrollEnd":
            n != null && me("scrollend", e);
            break;
        case "onClick":
            n != null && (e.onclick = or);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Po.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"),
                    t = a.slice(2, r ? a.length - 7 : void 0),
                    o = e[it] || null,
                    o = o != null ? o[a] : null,
                    typeof o == "function" && e.removeEventListener(t, o, r),
                    typeof n == "function")) {
                        typeof o != "function" && o !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, n, r);
                        break e
                    }
                    a in e ? e[a] = n : n === !0 ? e.setAttribute(a, "") : hi(e, a, n)
                }
        }
    }
    function We(e, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            me("error", e),
            me("load", e);
            var n = !1, r = !1, o;
            for (o in a)
                if (a.hasOwnProperty(o)) {
                    var h = a[o];
                    if (h != null)
                        switch (o) {
                        case "src":
                            n = !0;
                            break;
                        case "srcSet":
                            r = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, t));
                        default:
                            Oe(e, t, o, h, a, null)
                        }
                }
            r && Oe(e, t, "srcSet", a.srcSet, a, null),
            n && Oe(e, t, "src", a.src, a, null);
            return;
        case "input":
            me("invalid", e);
            var y = o = h = r = null
              , S = null
              , w = null;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    var k = a[n];
                    if (k != null)
                        switch (n) {
                        case "name":
                            r = k;
                            break;
                        case "type":
                            h = k;
                            break;
                        case "checked":
                            S = k;
                            break;
                        case "defaultChecked":
                            w = k;
                            break;
                        case "value":
                            o = k;
                            break;
                        case "defaultValue":
                            y = k;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (k != null)
                                throw Error(s(137, t));
                            break;
                        default:
                            Oe(e, t, n, k, a, null)
                        }
                }
            lc(e, o, y, S, w, h, r, !1),
            mi(e);
            return;
        case "select":
            me("invalid", e),
            n = h = o = null;
            for (r in a)
                if (a.hasOwnProperty(r) && (y = a[r],
                y != null))
                    switch (r) {
                    case "value":
                        o = y;
                        break;
                    case "defaultValue":
                        h = y;
                        break;
                    case "multiple":
                        n = y;
                    default:
                        Oe(e, t, r, y, a, null)
                    }
            t = o,
            a = h,
            e.multiple = !!n,
            t != null ? on(e, !!n, t, !1) : a != null && on(e, !!n, a, !0);
            return;
        case "textarea":
            me("invalid", e),
            o = r = n = null;
            for (h in a)
                if (a.hasOwnProperty(h) && (y = a[h],
                y != null))
                    switch (h) {
                    case "value":
                        n = y;
                        break;
                    case "defaultValue":
                        r = y;
                        break;
                    case "children":
                        o = y;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(s(91));
                        break;
                    default:
                        Oe(e, t, h, y, a, null)
                    }
            rc(e, n, r, o),
            mi(e);
            return;
        case "option":
            for (S in a)
                if (a.hasOwnProperty(S) && (n = a[S],
                n != null))
                    switch (S) {
                    case "selected":
                        e.selected = n && typeof n != "function" && typeof n != "symbol";
                        break;
                    default:
                        Oe(e, t, S, n, a, null)
                    }
            return;
        case "dialog":
            me("beforetoggle", e),
            me("toggle", e),
            me("cancel", e),
            me("close", e);
            break;
        case "iframe":
        case "object":
            me("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Ml.length; n++)
                me(Ml[n], e);
            break;
        case "image":
            me("error", e),
            me("load", e);
            break;
        case "details":
            me("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            me("error", e),
            me("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (w in a)
                if (a.hasOwnProperty(w) && (n = a[w],
                n != null))
                    switch (w) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(s(137, t));
                    default:
                        Oe(e, t, w, n, a, null)
                    }
            return;
        default:
            if (lu(t)) {
                for (k in a)
                    a.hasOwnProperty(k) && (n = a[k],
                    n !== void 0 && Vs(e, t, k, n, a, void 0));
                return
            }
        }
        for (y in a)
            a.hasOwnProperty(y) && (n = a[y],
            n != null && Oe(e, t, y, n, a, null))
    }
    function h0(e, t, a, n) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var r = null
              , o = null
              , h = null
              , y = null
              , S = null
              , w = null
              , k = null;
            for (j in a) {
                var Y = a[j];
                if (a.hasOwnProperty(j) && Y != null)
                    switch (j) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        S = Y;
                    default:
                        n.hasOwnProperty(j) || Oe(e, t, j, null, n, Y)
                    }
            }
            for (var D in n) {
                var j = n[D];
                if (Y = a[D],
                n.hasOwnProperty(D) && (j != null || Y != null))
                    switch (D) {
                    case "type":
                        o = j;
                        break;
                    case "name":
                        r = j;
                        break;
                    case "checked":
                        w = j;
                        break;
                    case "defaultChecked":
                        k = j;
                        break;
                    case "value":
                        h = j;
                        break;
                    case "defaultValue":
                        y = j;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (j != null)
                            throw Error(s(137, t));
                        break;
                    default:
                        j !== Y && Oe(e, t, D, j, n, Y)
                    }
            }
            au(e, h, y, S, w, k, o, r);
            return;
        case "select":
            j = h = y = D = null;
            for (o in a)
                if (S = a[o],
                a.hasOwnProperty(o) && S != null)
                    switch (o) {
                    case "value":
                        break;
                    case "multiple":
                        j = S;
                    default:
                        n.hasOwnProperty(o) || Oe(e, t, o, null, n, S)
                    }
            for (r in n)
                if (o = n[r],
                S = a[r],
                n.hasOwnProperty(r) && (o != null || S != null))
                    switch (r) {
                    case "value":
                        D = o;
                        break;
                    case "defaultValue":
                        y = o;
                        break;
                    case "multiple":
                        h = o;
                    default:
                        o !== S && Oe(e, t, r, o, n, S)
                    }
            t = y,
            a = h,
            n = j,
            D != null ? on(e, !!a, D, !1) : !!n != !!a && (t != null ? on(e, !!a, t, !0) : on(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            j = D = null;
            for (y in a)
                if (r = a[y],
                a.hasOwnProperty(y) && r != null && !n.hasOwnProperty(y))
                    switch (y) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Oe(e, t, y, null, n, r)
                    }
            for (h in n)
                if (r = n[h],
                o = a[h],
                n.hasOwnProperty(h) && (r != null || o != null))
                    switch (h) {
                    case "value":
                        D = r;
                        break;
                    case "defaultValue":
                        j = r;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(s(91));
                        break;
                    default:
                        r !== o && Oe(e, t, h, r, n, o)
                    }
            ic(e, D, j);
            return;
        case "option":
            for (var le in a)
                if (D = a[le],
                a.hasOwnProperty(le) && D != null && !n.hasOwnProperty(le))
                    switch (le) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        Oe(e, t, le, null, n, D)
                    }
            for (S in n)
                if (D = n[S],
                j = a[S],
                n.hasOwnProperty(S) && D !== j && (D != null || j != null))
                    switch (S) {
                    case "selected":
                        e.selected = D && typeof D != "function" && typeof D != "symbol";
                        break;
                    default:
                        Oe(e, t, S, D, n, j)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var te in a)
                D = a[te],
                a.hasOwnProperty(te) && D != null && !n.hasOwnProperty(te) && Oe(e, t, te, null, n, D);
            for (w in n)
                if (D = n[w],
                j = a[w],
                n.hasOwnProperty(w) && D !== j && (D != null || j != null))
                    switch (w) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (D != null)
                            throw Error(s(137, t));
                        break;
                    default:
                        Oe(e, t, w, D, n, j)
                    }
            return;
        default:
            if (lu(t)) {
                for (var Ne in a)
                    D = a[Ne],
                    a.hasOwnProperty(Ne) && D !== void 0 && !n.hasOwnProperty(Ne) && Vs(e, t, Ne, void 0, n, D);
                for (k in n)
                    D = n[k],
                    j = a[k],
                    !n.hasOwnProperty(k) || D === j || D === void 0 && j === void 0 || Vs(e, t, k, D, n, j);
                return
            }
        }
        for (var T in a)
            D = a[T],
            a.hasOwnProperty(T) && D != null && !n.hasOwnProperty(T) && Oe(e, t, T, null, n, D);
        for (Y in n)
            D = n[Y],
            j = a[Y],
            !n.hasOwnProperty(Y) || D === j || D == null && j == null || Oe(e, t, Y, D, n, j)
    }
    var Xs = null
      , Gs = null;
    function cr(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function sh(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function oh(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Qs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Ks = null;
    function g0() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Ks ? !1 : (Ks = e,
        !0) : (Ks = null,
        !1)
    }
    var ch = typeof setTimeout == "function" ? setTimeout : void 0
      , m0 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , fh = typeof Promise == "function" ? Promise : void 0
      , p0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof fh < "u" ? function(e) {
        return fh.resolve(null).then(e).catch(y0)
    }
    : ch;
    function y0(e) {
        setTimeout(function() {
            throw e
        })
    }
    function wa(e) {
        return e === "head"
    }
    function dh(e, t) {
        var a = t
          , n = 0
          , r = 0;
        do {
            var o = a.nextSibling;
            if (e.removeChild(a),
            o && o.nodeType === 8)
                if (a = o.data,
                a === "/$") {
                    if (0 < n && 8 > n) {
                        a = n;
                        var h = e.ownerDocument;
                        if (a & 1 && Hl(h.documentElement),
                        a & 2 && Hl(h.body),
                        a & 4)
                            for (a = h.head,
                            Hl(a),
                            h = a.firstChild; h; ) {
                                var y = h.nextSibling
                                  , S = h.nodeName;
                                h[Wn] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && h.rel.toLowerCase() === "stylesheet" || a.removeChild(h),
                                h = y
                            }
                    }
                    if (r === 0) {
                        e.removeChild(o),
                        Ql(t);
                        return
                    }
                    r--
                } else
                    a === "$" || a === "$?" || a === "$!" ? r++ : n = a.charCodeAt(0) - 48;
            else
                n = 0;
            a = o
        } while (a);
        Ql(t)
    }
    function $s(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                $s(a),
                Wr(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(a)
        }
    }
    function v0(e, t, a, n) {
        for (; e.nodeType === 1; ) {
            var r = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (n) {
                if (!e[Wn])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (o = e.getAttribute("rel"),
                        o === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (o !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (o = e.getAttribute("src"),
                        (o !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && o && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var o = r.name == null ? null : "" + r.name;
                if (r.type === "hidden" && e.getAttribute("name") === o)
                    return e
            } else
                return e;
            if (e = Lt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function b0(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Lt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Zs(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function x0(e, t) {
        var a = e.ownerDocument;
        if (e.data !== "$?" || a.readyState === "complete")
            t();
        else {
            var n = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", n)
            };
            a.addEventListener("DOMContentLoaded", n),
            e._reactRetry = n
        }
    }
    function Lt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    var Js = null;
    function hh(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    a === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function gh(e, t, a) {
        switch (t = cr(a),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(s(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(s(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(s(454));
            return e;
        default:
            throw Error(s(451))
        }
    }
    function Hl(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Wr(e)
    }
    var Dt = new Map
      , mh = new Set;
    function fr(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var ra = C.d;
    C.d = {
        f: S0,
        r: E0,
        D: R0,
        C: A0,
        L: T0,
        m: O0,
        X: w0,
        S: N0,
        M: C0
    };
    function S0() {
        var e = ra.f()
          , t = ar();
        return e || t
    }
    function E0(e) {
        var t = ln(e);
        t !== null && t.tag === 5 && t.type === "form" ? Mf(t) : ra.r(e)
    }
    var Bn = typeof document > "u" ? null : document;
    function ph(e, t, a) {
        var n = Bn;
        if (n && typeof t == "string" && t) {
            var r = Rt(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]',
            typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
            mh.has(r) || (mh.add(r),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            n.querySelector(r) === null && (t = n.createElement("link"),
            We(t, "link", e),
            Ke(t),
            n.head.appendChild(t)))
        }
    }
    function R0(e) {
        ra.D(e),
        ph("dns-prefetch", e, null)
    }
    function A0(e, t) {
        ra.C(e, t),
        ph("preconnect", e, t)
    }
    function T0(e, t, a) {
        ra.L(e, t, a);
        var n = Bn;
        if (n && e && t) {
            var r = 'link[rel="preload"][as="' + Rt(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + Rt(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (r += '[imagesizes="' + Rt(a.imageSizes) + '"]')) : r += '[href="' + Rt(e) + '"]';
            var o = r;
            switch (t) {
            case "style":
                o = qn(e);
                break;
            case "script":
                o = Yn(e)
            }
            Dt.has(o) || (e = v({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            Dt.set(o, e),
            n.querySelector(r) !== null || t === "style" && n.querySelector(kl(o)) || t === "script" && n.querySelector(Bl(o)) || (t = n.createElement("link"),
            We(t, "link", e),
            Ke(t),
            n.head.appendChild(t)))
        }
    }
    function O0(e, t) {
        ra.m(e, t);
        var a = Bn;
        if (a && e) {
            var n = t && typeof t.as == "string" ? t.as : "script"
              , r = 'link[rel="modulepreload"][as="' + Rt(n) + '"][href="' + Rt(e) + '"]'
              , o = r;
            switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                o = Yn(e)
            }
            if (!Dt.has(o) && (e = v({
                rel: "modulepreload",
                href: e
            }, t),
            Dt.set(o, e),
            a.querySelector(r) === null)) {
                switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Bl(o)))
                        return
                }
                n = a.createElement("link"),
                We(n, "link", e),
                Ke(n),
                a.head.appendChild(n)
            }
        }
    }
    function N0(e, t, a) {
        ra.S(e, t, a);
        var n = Bn;
        if (n && e) {
            var r = rn(n).hoistableStyles
              , o = qn(e);
            t = t || "default";
            var h = r.get(o);
            if (!h) {
                var y = {
                    loading: 0,
                    preload: null
                };
                if (h = n.querySelector(kl(o)))
                    y.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = Dt.get(o)) && Fs(e, a);
                    var S = h = n.createElement("link");
                    Ke(S),
                    We(S, "link", e),
                    S._p = new Promise(function(w, k) {
                        S.onload = w,
                        S.onerror = k
                    }
                    ),
                    S.addEventListener("load", function() {
                        y.loading |= 1
                    }),
                    S.addEventListener("error", function() {
                        y.loading |= 2
                    }),
                    y.loading |= 4,
                    dr(h, t, n)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: y
                },
                r.set(o, h)
            }
        }
    }
    function w0(e, t) {
        ra.X(e, t);
        var a = Bn;
        if (a && e) {
            var n = rn(a).hoistableScripts
              , r = Yn(e)
              , o = n.get(r);
            o || (o = a.querySelector(Bl(r)),
            o || (e = v({
                src: e,
                async: !0
            }, t),
            (t = Dt.get(r)) && Ps(e, t),
            o = a.createElement("script"),
            Ke(o),
            We(o, "link", e),
            a.head.appendChild(o)),
            o = {
                type: "script",
                instance: o,
                count: 1,
                state: null
            },
            n.set(r, o))
        }
    }
    function C0(e, t) {
        ra.M(e, t);
        var a = Bn;
        if (a && e) {
            var n = rn(a).hoistableScripts
              , r = Yn(e)
              , o = n.get(r);
            o || (o = a.querySelector(Bl(r)),
            o || (e = v({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Dt.get(r)) && Ps(e, t),
            o = a.createElement("script"),
            Ke(o),
            We(o, "link", e),
            a.head.appendChild(o)),
            o = {
                type: "script",
                instance: o,
                count: 1,
                state: null
            },
            n.set(r, o))
        }
    }
    function yh(e, t, a, n) {
        var r = (r = se.current) ? fr(r) : null;
        if (!r)
            throw Error(s(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = qn(a.href),
            a = rn(r).hoistableStyles,
            n = a.get(t),
            n || (n = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, n)),
            n) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = qn(a.href);
                var o = rn(r).hoistableStyles
                  , h = o.get(e);
                if (h || (r = r.ownerDocument || r,
                h = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                o.set(e, h),
                (o = r.querySelector(kl(e))) && !o._p && (h.instance = o,
                h.state.loading = 5),
                Dt.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                Dt.set(e, a),
                o || D0(r, e, a, h.state))),
                t && n === null)
                    throw Error(s(528, ""));
                return h
            }
            if (t && n !== null)
                throw Error(s(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Yn(a),
            a = rn(r).hoistableScripts,
            n = a.get(t),
            n || (n = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, n)),
            n) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(s(444, e))
        }
    }
    function qn(e) {
        return 'href="' + Rt(e) + '"'
    }
    function kl(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function vh(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function D0(e, t, a, n) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"),
        n.preload = t,
        t.addEventListener("load", function() {
            return n.loading |= 1
        }),
        t.addEventListener("error", function() {
            return n.loading |= 2
        }),
        We(t, "link", a),
        Ke(t),
        e.head.appendChild(t))
    }
    function Yn(e) {
        return '[src="' + Rt(e) + '"]'
    }
    function Bl(e) {
        return "script[async]" + e
    }
    function bh(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var n = e.querySelector('style[data-href~="' + Rt(a.href) + '"]');
                if (n)
                    return t.instance = n,
                    Ke(n),
                    n;
                var r = v({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return n = (e.ownerDocument || e).createElement("style"),
                Ke(n),
                We(n, "style", r),
                dr(n, a.precedence, e),
                t.instance = n;
            case "stylesheet":
                r = qn(a.href);
                var o = e.querySelector(kl(r));
                if (o)
                    return t.state.loading |= 4,
                    t.instance = o,
                    Ke(o),
                    o;
                n = vh(a),
                (r = Dt.get(r)) && Fs(n, r),
                o = (e.ownerDocument || e).createElement("link"),
                Ke(o);
                var h = o;
                return h._p = new Promise(function(y, S) {
                    h.onload = y,
                    h.onerror = S
                }
                ),
                We(o, "link", n),
                t.state.loading |= 4,
                dr(o, a.precedence, e),
                t.instance = o;
            case "script":
                return o = Yn(a.src),
                (r = e.querySelector(Bl(o))) ? (t.instance = r,
                Ke(r),
                r) : (n = a,
                (r = Dt.get(o)) && (n = v({}, a),
                Ps(n, r)),
                e = e.ownerDocument || e,
                r = e.createElement("script"),
                Ke(r),
                We(r, "link", n),
                e.head.appendChild(r),
                t.instance = r);
            case "void":
                return null;
            default:
                throw Error(s(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance,
            t.state.loading |= 4,
            dr(n, a.precedence, e));
        return t.instance
    }
    function dr(e, t, a) {
        for (var n = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = n.length ? n[n.length - 1] : null, o = r, h = 0; h < n.length; h++) {
            var y = n[h];
            if (y.dataset.precedence === t)
                o = y;
            else if (o !== r)
                break
        }
        o ? o.parentNode.insertBefore(e, o.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(e, t.firstChild))
    }
    function Fs(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Ps(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var hr = null;
    function xh(e, t, a) {
        if (hr === null) {
            var n = new Map
              , r = hr = new Map;
            r.set(a, n)
        } else
            r = hr,
            n = r.get(a),
            n || (n = new Map,
            r.set(a, n));
        if (n.has(e))
            return n;
        for (n.set(e, null),
        a = a.getElementsByTagName(e),
        r = 0; r < a.length; r++) {
            var o = a[r];
            if (!(o[Wn] || o[Ie] || e === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = o.getAttribute(t) || "";
                h = e + h;
                var y = n.get(h);
                y ? y.push(o) : n.set(h, [o])
            }
        }
        return n
    }
    function Sh(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function j0(e, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Eh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var ql = null;
    function _0() {}
    function L0(e, t, a) {
        if (ql === null)
            throw Error(s(475));
        var n = ql;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var r = qn(a.href)
                  , o = e.querySelector(kl(r));
                if (o) {
                    e = o._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++,
                    n = gr.bind(n),
                    e.then(n, n)),
                    t.state.loading |= 4,
                    t.instance = o,
                    Ke(o);
                    return
                }
                o = e.ownerDocument || e,
                a = vh(a),
                (r = Dt.get(r)) && Fs(a, r),
                o = o.createElement("link"),
                Ke(o);
                var h = o;
                h._p = new Promise(function(y, S) {
                    h.onload = y,
                    h.onerror = S
                }
                ),
                We(o, "link", a),
                t.instance = o
            }
            n.stylesheets === null && (n.stylesheets = new Map),
            n.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++,
            t = gr.bind(n),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function U0() {
        if (ql === null)
            throw Error(s(475));
        var e = ql;
        return e.stylesheets && e.count === 0 && Ws(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && Ws(e, e.stylesheets),
                e.unsuspend) {
                    var n = e.unsuspend;
                    e.unsuspend = null,
                    n()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(a)
            }
        }
        : null
    }
    function gr() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                Ws(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var mr = null;
    function Ws(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        mr = new Map,
        t.forEach(M0, e),
        mr = null,
        gr.call(e))
    }
    function M0(e, t) {
        if (!(t.state.loading & 4)) {
            var a = mr.get(e);
            if (a)
                var n = a.get(null);
            else {
                a = new Map,
                mr.set(e, a);
                for (var r = e.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < r.length; o++) {
                    var h = r[o];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (a.set(h.dataset.precedence, h),
                    n = h)
                }
                n && a.set(null, n)
            }
            r = t.instance,
            h = r.getAttribute("data-precedence"),
            o = a.get(h) || n,
            o === n && a.set(null, r),
            a.set(h, r),
            this.count++,
            n = gr.bind(this),
            r.addEventListener("load", n),
            r.addEventListener("error", n),
            o ? o.parentNode.insertBefore(r, o.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(r, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Yl = {
        $$typeof: G,
        Provider: null,
        Consumer: null,
        _currentValue: X,
        _currentValue2: X,
        _threadCount: 0
    };
    function z0(e, t, a, n, r, o, h, y) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Zr(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Zr(0),
        this.hiddenUpdates = Zr(null),
        this.identifierPrefix = n,
        this.onUncaughtError = r,
        this.onCaughtError = o,
        this.onRecoverableError = h,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = y,
        this.incompleteTransitions = new Map
    }
    function Rh(e, t, a, n, r, o, h, y, S, w, k, Y) {
        return e = new z0(e,t,a,h,y,S,w,Y),
        t = 1,
        o === !0 && (t |= 24),
        o = pt(3, null, null, t),
        e.current = o,
        o.stateNode = e,
        t = Lu(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        o.memoizedState = {
            element: n,
            isDehydrated: a,
            cache: t
        },
        Hu(o),
        e
    }
    function Ah(e) {
        return e ? (e = vn,
        e) : vn
    }
    function Th(e, t, a, n, r, o) {
        r = Ah(r),
        n.context === null ? n.context = r : n.pendingContext = r,
        n = ma(t),
        n.payload = {
            element: a
        },
        o = o === void 0 ? null : o,
        o !== null && (n.callback = o),
        a = pa(e, n, t),
        a !== null && (St(a, e, t),
        yl(a, e, t))
    }
    function Oh(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function Is(e, t) {
        Oh(e, t),
        (e = e.alternate) && Oh(e, t)
    }
    function Nh(e) {
        if (e.tag === 13) {
            var t = yn(e, 67108864);
            t !== null && St(t, e, 67108864),
            Is(e, 67108864)
        }
    }
    var pr = !0;
    function H0(e, t, a, n) {
        var r = L.T;
        L.T = null;
        var o = C.p;
        try {
            C.p = 2,
            eo(e, t, a, n)
        } finally {
            C.p = o,
            L.T = r
        }
    }
    function k0(e, t, a, n) {
        var r = L.T;
        L.T = null;
        var o = C.p;
        try {
            C.p = 8,
            eo(e, t, a, n)
        } finally {
            C.p = o,
            L.T = r
        }
    }
    function eo(e, t, a, n) {
        if (pr) {
            var r = to(n);
            if (r === null)
                Ys(e, t, n, yr, a),
                Ch(e, n);
            else if (q0(r, e, t, a, n))
                n.stopPropagation();
            else if (Ch(e, n),
            t & 4 && -1 < B0.indexOf(e)) {
                for (; r !== null; ) {
                    var o = ln(r);
                    if (o !== null)
                        switch (o.tag) {
                        case 3:
                            if (o = o.stateNode,
                            o.current.memoizedState.isDehydrated) {
                                var h = Ma(o.pendingLanes);
                                if (h !== 0) {
                                    var y = o;
                                    for (y.pendingLanes |= 2,
                                    y.entangledLanes |= 2; h; ) {
                                        var S = 1 << 31 - gt(h);
                                        y.entanglements[1] |= S,
                                        h &= ~S
                                    }
                                    Yt(o),
                                    (Ee & 6) === 0 && (er = zt() + 500,
                                    Ul(0))
                                }
                            }
                            break;
                        case 13:
                            y = yn(o, 2),
                            y !== null && St(y, o, 2),
                            ar(),
                            Is(o, 2)
                        }
                    if (o = to(n),
                    o === null && Ys(e, t, n, yr, a),
                    o === r)
                        break;
                    r = o
                }
                r !== null && n.stopPropagation()
            } else
                Ys(e, t, n, null, a)
        }
    }
    function to(e) {
        return e = ru(e),
        ao(e)
    }
    var yr = null;
    function ao(e) {
        if (yr = null,
        e = nn(e),
        e !== null) {
            var t = f(e);
            if (t === null)
                e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = d(t),
                    e !== null)
                        return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return yr = e,
        null
    }
    function wh(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Am()) {
            case Yo:
                return 2;
            case Vo:
                return 8;
            case oi:
            case Tm:
                return 32;
            case Xo:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var no = !1
      , Ca = null
      , Da = null
      , ja = null
      , Vl = new Map
      , Xl = new Map
      , _a = []
      , B0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Ch(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Ca = null;
            break;
        case "dragenter":
        case "dragleave":
            Da = null;
            break;
        case "mouseover":
        case "mouseout":
            ja = null;
            break;
        case "pointerover":
        case "pointerout":
            Vl.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Xl.delete(t.pointerId)
        }
    }
    function Gl(e, t, a, n, r, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: n,
            nativeEvent: o,
            targetContainers: [r]
        },
        t !== null && (t = ln(t),
        t !== null && Nh(t)),
        e) : (e.eventSystemFlags |= n,
        t = e.targetContainers,
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e)
    }
    function q0(e, t, a, n, r) {
        switch (t) {
        case "focusin":
            return Ca = Gl(Ca, e, t, a, n, r),
            !0;
        case "dragenter":
            return Da = Gl(Da, e, t, a, n, r),
            !0;
        case "mouseover":
            return ja = Gl(ja, e, t, a, n, r),
            !0;
        case "pointerover":
            var o = r.pointerId;
            return Vl.set(o, Gl(Vl.get(o) || null, e, t, a, n, r)),
            !0;
        case "gotpointercapture":
            return o = r.pointerId,
            Xl.set(o, Gl(Xl.get(o) || null, e, t, a, n, r)),
            !0
        }
        return !1
    }
    function Dh(e) {
        var t = nn(e.target);
        if (t !== null) {
            var a = f(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = d(a),
                    t !== null) {
                        e.blockedOn = t,
                        Lm(e.priority, function() {
                            if (a.tag === 13) {
                                var n = xt();
                                n = Jr(n);
                                var r = yn(a, n);
                                r !== null && St(r, a, n),
                                Is(a, n)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function vr(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var a = to(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var n = new a.constructor(a.type,a);
                iu = n,
                a.target.dispatchEvent(n),
                iu = null
            } else
                return t = ln(a),
                t !== null && Nh(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function jh(e, t, a) {
        vr(e) && a.delete(t)
    }
    function Y0() {
        no = !1,
        Ca !== null && vr(Ca) && (Ca = null),
        Da !== null && vr(Da) && (Da = null),
        ja !== null && vr(ja) && (ja = null),
        Vl.forEach(jh),
        Xl.forEach(jh)
    }
    function br(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        no || (no = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Y0)))
    }
    var xr = null;
    function _h(e) {
        xr !== e && (xr = e,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            xr === e && (xr = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , n = e[t + 1]
                  , r = e[t + 2];
                if (typeof n != "function") {
                    if (ao(n || a) === null)
                        continue;
                    break
                }
                var o = ln(a);
                o !== null && (e.splice(t, 3),
                t -= 3,
                as(o, {
                    pending: !0,
                    data: r,
                    method: a.method,
                    action: n
                }, n, r))
            }
        }))
    }
    function Ql(e) {
        function t(S) {
            return br(S, e)
        }
        Ca !== null && br(Ca, e),
        Da !== null && br(Da, e),
        ja !== null && br(ja, e),
        Vl.forEach(t),
        Xl.forEach(t);
        for (var a = 0; a < _a.length; a++) {
            var n = _a[a];
            n.blockedOn === e && (n.blockedOn = null)
        }
        for (; 0 < _a.length && (a = _a[0],
        a.blockedOn === null); )
            Dh(a),
            a.blockedOn === null && _a.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (n = 0; n < a.length; n += 3) {
                var r = a[n]
                  , o = a[n + 1]
                  , h = r[it] || null;
                if (typeof o == "function")
                    h || _h(a);
                else if (h) {
                    var y = null;
                    if (o && o.hasAttribute("formAction")) {
                        if (r = o,
                        h = o[it] || null)
                            y = h.formAction;
                        else if (ao(r) !== null)
                            continue
                    } else
                        y = h.action;
                    typeof y == "function" ? a[n + 1] = y : (a.splice(n, 3),
                    n -= 3),
                    _h(a)
                }
            }
    }
    function lo(e) {
        this._internalRoot = e
    }
    Sr.prototype.render = lo.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(s(409));
        var a = t.current
          , n = xt();
        Th(a, n, e, t, null, null)
    }
    ,
    Sr.prototype.unmount = lo.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Th(e.current, 2, null, e, null, null),
            ar(),
            t[an] = null
        }
    }
    ;
    function Sr(e) {
        this._internalRoot = e
    }
    Sr.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Zo();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < _a.length && t !== 0 && t < _a[a].priority; a++)
                ;
            _a.splice(a, 0, e),
            a === 0 && Dh(e)
        }
    }
    ;
    var Lh = l.version;
    if (Lh !== "19.1.1")
        throw Error(s(527, Lh, "19.1.1"));
    C.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","),
            Error(s(268, e)));
        return e = p(t),
        e = e !== null ? g(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var V0 = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: L,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Er.isDisabled && Er.supportsFiber)
            try {
                Jn = Er.inject(V0),
                ht = Er
            } catch {}
    }
    return $l.createRoot = function(e, t) {
        if (!c(e))
            throw Error(s(299));
        var a = !1
          , n = ""
          , r = Jf
          , o = Ff
          , h = Pf
          , y = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
        t.onCaughtError !== void 0 && (o = t.onCaughtError),
        t.onRecoverableError !== void 0 && (h = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)),
        t = Rh(e, 1, !1, null, null, a, n, r, o, h, y, null),
        e[an] = t.current,
        qs(e),
        new lo(t)
    }
    ,
    $l.hydrateRoot = function(e, t, a) {
        if (!c(e))
            throw Error(s(299));
        var n = !1
          , r = ""
          , o = Jf
          , h = Ff
          , y = Pf
          , S = null
          , w = null;
        return a != null && (a.unstable_strictMode === !0 && (n = !0),
        a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (o = a.onUncaughtError),
        a.onCaughtError !== void 0 && (h = a.onCaughtError),
        a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (S = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (w = a.formState)),
        t = Rh(e, 1, !0, t, a ?? null, n, r, o, h, y, S, w),
        t.context = Ah(null),
        a = t.current,
        n = xt(),
        n = Jr(n),
        r = ma(n),
        r.callback = null,
        pa(a, r, n),
        a = n,
        t.current.lanes = a,
        Pn(t, a),
        Yt(t),
        e[an] = t.current,
        qs(e),
        new Sr(t)
    }
    ,
    $l.version = "19.1.1",
    $l
}
var Xh;
function I0() {
    if (Xh)
        return ro.exports;
    Xh = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (l) {
                console.error(l)
            }
    }
    return i(),
    ro.exports = W0(),
    ro.exports
}
var ey = I0();
const ty = "modulepreload"
  , ay = function(i) {
    return "/" + i
}
  , Gh = {}
  , Cg = function(l, u, s) {
    let c = Promise.resolve();
    if (u && u.length > 0) {
        let p = function(g) {
            return Promise.all(g.map(v => Promise.resolve(v).then(x => ({
                status: "fulfilled",
                value: x
            }), x => ({
                status: "rejected",
                reason: x
            }))))
        };
        document.getElementsByTagName("link");
        const d = document.querySelector("meta[property=csp-nonce]")
          , m = d?.nonce || d?.getAttribute("nonce");
        c = p(u.map(g => {
            if (g = ay(g),
            g in Gh)
                return;
            Gh[g] = !0;
            const v = g.endsWith(".css")
              , x = v ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${g}"]${x}`))
                return;
            const N = document.createElement("link");
            if (N.rel = v ? "stylesheet" : ty,
            v || (N.as = "script"),
            N.crossOrigin = "",
            N.href = g,
            m && N.setAttribute("nonce", m),
            document.head.appendChild(N),
            v)
                return new Promise( (B, A) => {
                    N.addEventListener("load", B),
                    N.addEventListener("error", () => A(new Error(`Unable to preload CSS for ${g}`)))
                }
                )
        }
        ))
    }
    function f(d) {
        const m = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (m.payload = d,
        window.dispatchEvent(m),
        !m.defaultPrevented)
            throw d
    }
    return c.then(d => {
        for (const m of d || [])
            m.status === "rejected" && f(m.reason);
        return l().catch(f)
    }
    )
};
var _ = wo();
const Yx = G0(_);
/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Qh = "popstate";
function ny(i={}) {
    function l(s, c) {
        let {pathname: f, search: d, hash: m} = s.location;
        return bo("", {
            pathname: f,
            search: d,
            hash: m
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function u(s, c) {
        return typeof c == "string" ? c : Wl(c)
    }
    return iy(l, u, null, i)
}
function ze(i, l) {
    if (i === !1 || i === null || typeof i > "u")
        throw new Error(l)
}
function Ut(i, l) {
    if (!i) {
        typeof console < "u" && console.warn(l);
        try {
            throw new Error(l)
        } catch {}
    }
}
function ly() {
    return Math.random().toString(36).substring(2, 10)
}
function Kh(i, l) {
    return {
        usr: i.state,
        key: i.key,
        idx: l
    }
}
function bo(i, l, u=null, s) {
    return {
        pathname: typeof i == "string" ? i : i.pathname,
        search: "",
        hash: "",
        ...typeof l == "string" ? Qn(l) : l,
        state: u,
        key: l && l.key || s || ly()
    }
}
function Wl({pathname: i="/", search: l="", hash: u=""}) {
    return l && l !== "?" && (i += l.charAt(0) === "?" ? l : "?" + l),
    u && u !== "#" && (i += u.charAt(0) === "#" ? u : "#" + u),
    i
}
function Qn(i) {
    let l = {};
    if (i) {
        let u = i.indexOf("#");
        u >= 0 && (l.hash = i.substring(u),
        i = i.substring(0, u));
        let s = i.indexOf("?");
        s >= 0 && (l.search = i.substring(s),
        i = i.substring(0, s)),
        i && (l.pathname = i)
    }
    return l
}
function iy(i, l, u, s={}) {
    let {window: c=document.defaultView, v5Compat: f=!1} = s
      , d = c.history
      , m = "POP"
      , p = null
      , g = v();
    g == null && (g = 0,
    d.replaceState({
        ...d.state,
        idx: g
    }, ""));
    function v() {
        return (d.state || {
            idx: null
        }).idx
    }
    function x() {
        m = "POP";
        let M = v()
          , V = M == null ? null : M - g;
        g = M,
        p && p({
            action: m,
            location: z.location,
            delta: V
        })
    }
    function N(M, V) {
        m = "PUSH";
        let Z = bo(z.location, M, V);
        g = v() + 1;
        let G = Kh(Z, g)
          , P = z.createHref(Z);
        try {
            d.pushState(G, "", P)
        } catch ($) {
            if ($ instanceof DOMException && $.name === "DataCloneError")
                throw $;
            c.location.assign(P)
        }
        f && p && p({
            action: m,
            location: z.location,
            delta: 1
        })
    }
    function B(M, V) {
        m = "REPLACE";
        let Z = bo(z.location, M, V);
        g = v();
        let G = Kh(Z, g)
          , P = z.createHref(Z);
        d.replaceState(G, "", P),
        f && p && p({
            action: m,
            location: z.location,
            delta: 0
        })
    }
    function A(M) {
        return ry(M)
    }
    let z = {
        get action() {
            return m
        },
        get location() {
            return i(c, d)
        },
        listen(M) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(Qh, x),
            p = M,
            () => {
                c.removeEventListener(Qh, x),
                p = null
            }
        },
        createHref(M) {
            return l(c, M)
        },
        createURL: A,
        encodeLocation(M) {
            let V = A(M);
            return {
                pathname: V.pathname,
                search: V.search,
                hash: V.hash
            }
        },
        push: N,
        replace: B,
        go(M) {
            return d.go(M)
        }
    };
    return z
}
function ry(i, l=!1) {
    let u = "http://localhost";
    typeof window < "u" && (u = window.location.origin !== "null" ? window.location.origin : window.location.href),
    ze(u, "No window.location.(origin|href) available to create URL");
    let s = typeof i == "string" ? i : Wl(i);
    return s = s.replace(/ $/, "%20"),
    !l && s.startsWith("//") && (s = u + s),
    new URL(s,u)
}
function Dg(i, l, u="/") {
    return uy(i, l, u, !1)
}
function uy(i, l, u, s) {
    let c = typeof l == "string" ? Qn(l) : l
      , f = sa(c.pathname || "/", u);
    if (f == null)
        return null;
    let d = jg(i);
    sy(d);
    let m = null;
    for (let p = 0; m == null && p < d.length; ++p) {
        let g = by(f);
        m = yy(d[p], g, s)
    }
    return m
}
function jg(i, l=[], u=[], s="") {
    let c = (f, d, m) => {
        let p = {
            relativePath: m === void 0 ? f.path || "" : m,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: d,
            route: f
        };
        p.relativePath.startsWith("/") && (ze(p.relativePath.startsWith(s), `Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
        p.relativePath = p.relativePath.slice(s.length));
        let g = ua([s, p.relativePath])
          , v = u.concat(p);
        f.children && f.children.length > 0 && (ze(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${g}".`),
        jg(f.children, l, v, g)),
        !(f.path == null && !f.index) && l.push({
            path: g,
            score: my(g, f.index),
            routesMeta: v
        })
    }
    ;
    return i.forEach( (f, d) => {
        if (f.path === "" || !f.path?.includes("?"))
            c(f, d);
        else
            for (let m of _g(f.path))
                c(f, d, m)
    }
    ),
    l
}
function _g(i) {
    let l = i.split("/");
    if (l.length === 0)
        return [];
    let[u,...s] = l
      , c = u.endsWith("?")
      , f = u.replace(/\?$/, "");
    if (s.length === 0)
        return c ? [f, ""] : [f];
    let d = _g(s.join("/"))
      , m = [];
    return m.push(...d.map(p => p === "" ? f : [f, p].join("/"))),
    c && m.push(...d),
    m.map(p => i.startsWith("/") && p === "" ? "/" : p)
}
function sy(i) {
    i.sort( (l, u) => l.score !== u.score ? u.score - l.score : py(l.routesMeta.map(s => s.childrenIndex), u.routesMeta.map(s => s.childrenIndex)))
}
var oy = /^:[\w-]+$/
  , cy = 3
  , fy = 2
  , dy = 1
  , hy = 10
  , gy = -2
  , $h = i => i === "*";
function my(i, l) {
    let u = i.split("/")
      , s = u.length;
    return u.some($h) && (s += gy),
    l && (s += fy),
    u.filter(c => !$h(c)).reduce( (c, f) => c + (oy.test(f) ? cy : f === "" ? dy : hy), s)
}
function py(i, l) {
    return i.length === l.length && i.slice(0, -1).every( (s, c) => s === l[c]) ? i[i.length - 1] - l[l.length - 1] : 0
}
function yy(i, l, u=!1) {
    let {routesMeta: s} = i
      , c = {}
      , f = "/"
      , d = [];
    for (let m = 0; m < s.length; ++m) {
        let p = s[m]
          , g = m === s.length - 1
          , v = f === "/" ? l : l.slice(f.length) || "/"
          , x = jr({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: g
        }, v)
          , N = p.route;
        if (!x && g && u && !s[s.length - 1].route.index && (x = jr({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: !1
        }, v)),
        !x)
            return null;
        Object.assign(c, x.params),
        d.push({
            params: c,
            pathname: ua([f, x.pathname]),
            pathnameBase: Ry(ua([f, x.pathnameBase])),
            route: N
        }),
        x.pathnameBase !== "/" && (f = ua([f, x.pathnameBase]))
    }
    return d
}
function jr(i, l) {
    typeof i == "string" && (i = {
        path: i,
        caseSensitive: !1,
        end: !0
    });
    let[u,s] = vy(i.path, i.caseSensitive, i.end)
      , c = l.match(u);
    if (!c)
        return null;
    let f = c[0]
      , d = f.replace(/(.)\/+$/, "$1")
      , m = c.slice(1);
    return {
        params: s.reduce( (g, {paramName: v, isOptional: x}, N) => {
            if (v === "*") {
                let A = m[N] || "";
                d = f.slice(0, f.length - A.length).replace(/(.)\/+$/, "$1")
            }
            const B = m[N];
            return x && !B ? g[v] = void 0 : g[v] = (B || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: f,
        pathnameBase: d,
        pattern: i
    }
}
function vy(i, l=!1, u=!0) {
    Ut(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
    let s = []
      , c = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, m, p) => (s.push({
        paramName: m,
        isOptional: p != null
    }),
    p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return i.endsWith("*") ? (s.push({
        paramName: "*"
    }),
    c += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : u ? c += "\\/*$" : i !== "" && i !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c,l ? void 0 : "i"), s]
}
function by(i) {
    try {
        return i.split("/").map(l => decodeURIComponent(l).replace(/\//g, "%2F")).join("/")
    } catch (l) {
        return Ut(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),
        i
    }
}
function sa(i, l) {
    if (l === "/")
        return i;
    if (!i.toLowerCase().startsWith(l.toLowerCase()))
        return null;
    let u = l.endsWith("/") ? l.length - 1 : l.length
      , s = i.charAt(u);
    return s && s !== "/" ? null : i.slice(u) || "/"
}
function xy(i, l="/") {
    let {pathname: u, search: s="", hash: c=""} = typeof i == "string" ? Qn(i) : i;
    return {
        pathname: u ? u.startsWith("/") ? u : Sy(u, l) : l,
        search: Ay(s),
        hash: Ty(c)
    }
}
function Sy(i, l) {
    let u = l.replace(/\/+$/, "").split("/");
    return i.split("/").forEach(c => {
        c === ".." ? u.length > 1 && u.pop() : c !== "." && u.push(c)
    }
    ),
    u.length > 1 ? u.join("/") : "/"
}
function fo(i, l, u, s) {
    return `Cannot include a '${i}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Ey(i) {
    return i.filter( (l, u) => u === 0 || l.route.path && l.route.path.length > 0)
}
function Lg(i) {
    let l = Ey(i);
    return l.map( (u, s) => s === l.length - 1 ? u.pathname : u.pathnameBase)
}
function Ug(i, l, u, s=!1) {
    let c;
    typeof i == "string" ? c = Qn(i) : (c = {
        ...i
    },
    ze(!c.pathname || !c.pathname.includes("?"), fo("?", "pathname", "search", c)),
    ze(!c.pathname || !c.pathname.includes("#"), fo("#", "pathname", "hash", c)),
    ze(!c.search || !c.search.includes("#"), fo("#", "search", "hash", c)));
    let f = i === "" || c.pathname === "", d = f ? "/" : c.pathname, m;
    if (d == null)
        m = u;
    else {
        let x = l.length - 1;
        if (!s && d.startsWith("..")) {
            let N = d.split("/");
            for (; N[0] === ".."; )
                N.shift(),
                x -= 1;
            c.pathname = N.join("/")
        }
        m = x >= 0 ? l[x] : "/"
    }
    let p = xy(c, m)
      , g = d && d !== "/" && d.endsWith("/")
      , v = (f || d === ".") && u.endsWith("/");
    return !p.pathname.endsWith("/") && (g || v) && (p.pathname += "/"),
    p
}
var ua = i => i.join("/").replace(/\/\/+/g, "/")
  , Ry = i => i.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Ay = i => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i
  , Ty = i => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;
function Oy(i) {
    return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data"in i
}
var Mg = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Mg);
var Ny = ["GET", ...Mg];
new Set(Ny);
var Kn = _.createContext(null);
Kn.displayName = "DataRouter";
var zr = _.createContext(null);
zr.displayName = "DataRouterState";
_.createContext(!1);
var zg = _.createContext({
    isTransitioning: !1
});
zg.displayName = "ViewTransition";
var wy = _.createContext(new Map);
wy.displayName = "Fetchers";
var Cy = _.createContext(null);
Cy.displayName = "Await";
var Gt = _.createContext(null);
Gt.displayName = "Navigation";
var ti = _.createContext(null);
ti.displayName = "Location";
var Qt = _.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Qt.displayName = "Route";
var Co = _.createContext(null);
Co.displayName = "RouteError";
function Dy(i, {relative: l}={}) {
    ze(ai(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: u, navigator: s} = _.useContext(Gt)
      , {hash: c, pathname: f, search: d} = ni(i, {
        relative: l
    })
      , m = f;
    return u !== "/" && (m = f === "/" ? u : ua([u, f])),
    s.createHref({
        pathname: m,
        search: d,
        hash: c
    })
}
function ai() {
    return _.useContext(ti) != null
}
function Ua() {
    return ze(ai(), "useLocation() may be used only in the context of a <Router> component."),
    _.useContext(ti).location
}
var Hg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function kg(i) {
    _.useContext(Gt).static || _.useLayoutEffect(i)
}
function Do() {
    let {isDataRoute: i} = _.useContext(Qt);
    return i ? Xy() : jy()
}
function jy() {
    ze(ai(), "useNavigate() may be used only in the context of a <Router> component.");
    let i = _.useContext(Kn)
      , {basename: l, navigator: u} = _.useContext(Gt)
      , {matches: s} = _.useContext(Qt)
      , {pathname: c} = Ua()
      , f = JSON.stringify(Lg(s))
      , d = _.useRef(!1);
    return kg( () => {
        d.current = !0
    }
    ),
    _.useCallback( (p, g={}) => {
        if (Ut(d.current, Hg),
        !d.current)
            return;
        if (typeof p == "number") {
            u.go(p);
            return
        }
        let v = Ug(p, JSON.parse(f), c, g.relative === "path");
        i == null && l !== "/" && (v.pathname = v.pathname === "/" ? l : ua([l, v.pathname])),
        (g.replace ? u.replace : u.push)(v, g.state, g)
    }
    , [l, u, f, c, i])
}
_.createContext(null);
function Vx() {
    let {matches: i} = _.useContext(Qt)
      , l = i[i.length - 1];
    return l ? l.params : {}
}
function ni(i, {relative: l}={}) {
    let {matches: u} = _.useContext(Qt)
      , {pathname: s} = Ua()
      , c = JSON.stringify(Lg(u));
    return _.useMemo( () => Ug(i, JSON.parse(c), s, l === "path"), [i, c, s, l])
}
function _y(i, l) {
    return Bg(i, l)
}
function Bg(i, l, u, s) {
    ze(ai(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: c} = _.useContext(Gt)
      , {matches: f} = _.useContext(Qt)
      , d = f[f.length - 1]
      , m = d ? d.params : {}
      , p = d ? d.pathname : "/"
      , g = d ? d.pathnameBase : "/"
      , v = d && d.route;
    {
        let V = v && v.path || "";
        qg(p, !v || V.endsWith("*") || V.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`)
    }
    let x = Ua(), N;
    if (l) {
        let V = typeof l == "string" ? Qn(l) : l;
        ze(g === "/" || V.pathname?.startsWith(g), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${V.pathname}" was given in the \`location\` prop.`),
        N = V
    } else
        N = x;
    let B = N.pathname || "/"
      , A = B;
    if (g !== "/") {
        let V = g.replace(/^\//, "").split("/");
        A = "/" + B.replace(/^\//, "").split("/").slice(V.length).join("/")
    }
    let z = Dg(i, {
        pathname: A
    });
    Ut(v || z != null, `No routes matched location "${N.pathname}${N.search}${N.hash}" `),
    Ut(z == null || z[z.length - 1].route.element !== void 0 || z[z.length - 1].route.Component !== void 0 || z[z.length - 1].route.lazy !== void 0, `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let M = Hy(z && z.map(V => Object.assign({}, V, {
        params: Object.assign({}, m, V.params),
        pathname: ua([g, c.encodeLocation ? c.encodeLocation(V.pathname).pathname : V.pathname]),
        pathnameBase: V.pathnameBase === "/" ? g : ua([g, c.encodeLocation ? c.encodeLocation(V.pathnameBase).pathname : V.pathnameBase])
    })), f, u, s);
    return l && M ? _.createElement(ti.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...N
            },
            navigationType: "POP"
        }
    }, M) : M
}
function Ly() {
    let i = Vy()
      , l = Oy(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i)
      , u = i instanceof Error ? i.stack : null
      , s = "rgba(200,200,200, 0.5)"
      , c = {
        padding: "0.5rem",
        backgroundColor: s
    }
      , f = {
        padding: "2px 4px",
        backgroundColor: s
    }
      , d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", i),
    d = _.createElement(_.Fragment, null, _.createElement("p", null, "💿 Hey developer 👋"), _.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", _.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", _.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")),
    _.createElement(_.Fragment, null, _.createElement("h2", null, "Unexpected Application Error!"), _.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, l), u ? _.createElement("pre", {
        style: c
    }, u) : null, d)
}
var Uy = _.createElement(Ly, null)
  , My = class extends _.Component {
    constructor(i) {
        super(i),
        this.state = {
            location: i.location,
            revalidation: i.revalidation,
            error: i.error
        }
    }
    static getDerivedStateFromError(i) {
        return {
            error: i
        }
    }
    static getDerivedStateFromProps(i, l) {
        return l.location !== i.location || l.revalidation !== "idle" && i.revalidation === "idle" ? {
            error: i.error,
            location: i.location,
            revalidation: i.revalidation
        } : {
            error: i.error !== void 0 ? i.error : l.error,
            location: l.location,
            revalidation: i.revalidation || l.revalidation
        }
    }
    componentDidCatch(i, l) {
        console.error("React Router caught the following error during render", i, l)
    }
    render() {
        return this.state.error !== void 0 ? _.createElement(Qt.Provider, {
            value: this.props.routeContext
        }, _.createElement(Co.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function zy({routeContext: i, match: l, children: u}) {
    let s = _.useContext(Kn);
    return s && s.static && s.staticContext && (l.route.errorElement || l.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = l.route.id),
    _.createElement(Qt.Provider, {
        value: i
    }, u)
}
function Hy(i, l=[], u=null, s=null) {
    if (i == null) {
        if (!u)
            return null;
        if (u.errors)
            i = u.matches;
        else if (l.length === 0 && !u.initialized && u.matches.length > 0)
            i = u.matches;
        else
            return null
    }
    let c = i
      , f = u?.errors;
    if (f != null) {
        let p = c.findIndex(g => g.route.id && f?.[g.route.id] !== void 0);
        ze(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),
        c = c.slice(0, Math.min(c.length, p + 1))
    }
    let d = !1
      , m = -1;
    if (u)
        for (let p = 0; p < c.length; p++) {
            let g = c[p];
            if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = p),
            g.route.id) {
                let {loaderData: v, errors: x} = u
                  , N = g.route.loader && !v.hasOwnProperty(g.route.id) && (!x || x[g.route.id] === void 0);
                if (g.route.lazy || N) {
                    d = !0,
                    m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight( (p, g, v) => {
        let x, N = !1, B = null, A = null;
        u && (x = f && g.route.id ? f[g.route.id] : void 0,
        B = g.route.errorElement || Uy,
        d && (m < 0 && v === 0 ? (qg("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        N = !0,
        A = null) : m === v && (N = !0,
        A = g.route.hydrateFallbackElement || null)));
        let z = l.concat(c.slice(0, v + 1))
          , M = () => {
            let V;
            return x ? V = B : N ? V = A : g.route.Component ? V = _.createElement(g.route.Component, null) : g.route.element ? V = g.route.element : V = p,
            _.createElement(zy, {
                match: g,
                routeContext: {
                    outlet: p,
                    matches: z,
                    isDataRoute: u != null
                },
                children: V
            })
        }
        ;
        return u && (g.route.ErrorBoundary || g.route.errorElement || v === 0) ? _.createElement(My, {
            location: u.location,
            revalidation: u.revalidation,
            component: B,
            error: x,
            children: M(),
            routeContext: {
                outlet: null,
                matches: z,
                isDataRoute: !0
            }
        }) : M()
    }
    , null)
}
function jo(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function ky(i) {
    let l = _.useContext(Kn);
    return ze(l, jo(i)),
    l
}
function By(i) {
    let l = _.useContext(zr);
    return ze(l, jo(i)),
    l
}
function qy(i) {
    let l = _.useContext(Qt);
    return ze(l, jo(i)),
    l
}
function _o(i) {
    let l = qy(i)
      , u = l.matches[l.matches.length - 1];
    return ze(u.route.id, `${i} can only be used on routes that contain a unique "id"`),
    u.route.id
}
function Yy() {
    return _o("useRouteId")
}
function Vy() {
    let i = _.useContext(Co)
      , l = By("useRouteError")
      , u = _o("useRouteError");
    return i !== void 0 ? i : l.errors?.[u]
}
function Xy() {
    let {router: i} = ky("useNavigate")
      , l = _o("useNavigate")
      , u = _.useRef(!1);
    return kg( () => {
        u.current = !0
    }
    ),
    _.useCallback(async (c, f={}) => {
        Ut(u.current, Hg),
        u.current && (typeof c == "number" ? i.navigate(c) : await i.navigate(c, {
            fromRouteId: l,
            ...f
        }))
    }
    , [i, l])
}
var Zh = {};
function qg(i, l, u) {
    !l && !Zh[i] && (Zh[i] = !0,
    Ut(!1, u))
}
_.memo(Gy);
function Gy({routes: i, future: l, state: u}) {
    return Bg(i, void 0, u, l)
}
function Xn(i) {
    ze(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Qy({basename: i="/", children: l=null, location: u, navigationType: s="POP", navigator: c, static: f=!1}) {
    ze(!ai(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = i.replace(/^\/*/, "/")
      , m = _.useMemo( () => ({
        basename: d,
        navigator: c,
        static: f,
        future: {}
    }), [d, c, f]);
    typeof u == "string" && (u = Qn(u));
    let {pathname: p="/", search: g="", hash: v="", state: x=null, key: N="default"} = u
      , B = _.useMemo( () => {
        let A = sa(p, d);
        return A == null ? null : {
            location: {
                pathname: A,
                search: g,
                hash: v,
                state: x,
                key: N
            },
            navigationType: s
        }
    }
    , [d, p, g, v, x, N, s]);
    return Ut(B != null, `<Router basename="${d}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),
    B == null ? null : _.createElement(Gt.Provider, {
        value: m
    }, _.createElement(ti.Provider, {
        children: l,
        value: B
    }))
}
function Ky({children: i, location: l}) {
    return _y(xo(i), l)
}
function xo(i, l=[]) {
    let u = [];
    return _.Children.forEach(i, (s, c) => {
        if (!_.isValidElement(s))
            return;
        let f = [...l, c];
        if (s.type === _.Fragment) {
            u.push.apply(u, xo(s.props.children, f));
            return
        }
        ze(s.type === Xn, `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        ze(!s.props.index || !s.props.children, "An index route cannot have child routes.");
        let d = {
            id: s.props.id || f.join("-"),
            caseSensitive: s.props.caseSensitive,
            element: s.props.element,
            Component: s.props.Component,
            index: s.props.index,
            path: s.props.path,
            loader: s.props.loader,
            action: s.props.action,
            hydrateFallbackElement: s.props.hydrateFallbackElement,
            HydrateFallback: s.props.HydrateFallback,
            errorElement: s.props.errorElement,
            ErrorBoundary: s.props.ErrorBoundary,
            hasErrorBoundary: s.props.hasErrorBoundary === !0 || s.props.ErrorBoundary != null || s.props.errorElement != null,
            shouldRevalidate: s.props.shouldRevalidate,
            handle: s.props.handle,
            lazy: s.props.lazy
        };
        s.props.children && (d.children = xo(s.props.children, f)),
        u.push(d)
    }
    ),
    u
}
var Or = "get"
  , Nr = "application/x-www-form-urlencoded";
function Hr(i) {
    return i != null && typeof i.tagName == "string"
}
function $y(i) {
    return Hr(i) && i.tagName.toLowerCase() === "button"
}
function Zy(i) {
    return Hr(i) && i.tagName.toLowerCase() === "form"
}
function Jy(i) {
    return Hr(i) && i.tagName.toLowerCase() === "input"
}
function Fy(i) {
    return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function Py(i, l) {
    return i.button === 0 && (!l || l === "_self") && !Fy(i)
}
function So(i="") {
    return new URLSearchParams(typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams ? i : Object.keys(i).reduce( (l, u) => {
        let s = i[u];
        return l.concat(Array.isArray(s) ? s.map(c => [u, c]) : [[u, s]])
    }
    , []))
}
function Wy(i, l) {
    let u = So(i);
    return l && l.forEach( (s, c) => {
        u.has(c) || l.getAll(c).forEach(f => {
            u.append(c, f)
        }
        )
    }
    ),
    u
}
var Rr = null;
function Iy() {
    if (Rr === null)
        try {
            new FormData(document.createElement("form"),0),
            Rr = !1
        } catch {
            Rr = !0
        }
    return Rr
}
var ev = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ho(i) {
    return i != null && !ev.has(i) ? (Ut(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nr}"`),
    null) : i
}
function tv(i, l) {
    let u, s, c, f, d;
    if (Zy(i)) {
        let m = i.getAttribute("action");
        s = m ? sa(m, l) : null,
        u = i.getAttribute("method") || Or,
        c = ho(i.getAttribute("enctype")) || Nr,
        f = new FormData(i)
    } else if ($y(i) || Jy(i) && (i.type === "submit" || i.type === "image")) {
        let m = i.form;
        if (m == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let p = i.getAttribute("formaction") || m.getAttribute("action");
        if (s = p ? sa(p, l) : null,
        u = i.getAttribute("formmethod") || m.getAttribute("method") || Or,
        c = ho(i.getAttribute("formenctype")) || ho(m.getAttribute("enctype")) || Nr,
        f = new FormData(m,i),
        !Iy()) {
            let {name: g, type: v, value: x} = i;
            if (v === "image") {
                let N = g ? `${g}.` : "";
                f.append(`${N}x`, "0"),
                f.append(`${N}y`, "0")
            } else
                g && f.append(g, x)
        }
    } else {
        if (Hr(i))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        u = Or,
        s = null,
        c = Nr,
        d = i
    }
    return f && c === "text/plain" && (d = f,
    f = void 0),
    {
        action: s,
        method: u.toLowerCase(),
        encType: c,
        formData: f,
        body: d
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Lo(i, l) {
    if (i === !1 || i === null || typeof i > "u")
        throw new Error(l)
}
function av(i, l, u) {
    let s = typeof i == "string" ? new URL(i,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
    return s.pathname === "/" ? s.pathname = `_root.${u}` : l && sa(s.pathname, l) === "/" ? s.pathname = `${l.replace(/\/$/, "")}/_root.${u}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${u}`,
    s
}
async function nv(i, l) {
    if (i.id in l)
        return l[i.id];
    try {
        let u = await import(i.module);
        return l[i.id] = u,
        u
    } catch (u) {
        return console.error(`Error loading route module \`${i.module}\`, reloading page...`),
        console.error(u),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function lv(i) {
    return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string"
}
async function iv(i, l, u) {
    let s = await Promise.all(i.map(async c => {
        let f = l.routes[c.route.id];
        if (f) {
            let d = await nv(f, u);
            return d.links ? d.links() : []
        }
        return []
    }
    ));
    return ov(s.flat(1).filter(lv).filter(c => c.rel === "stylesheet" || c.rel === "preload").map(c => c.rel === "stylesheet" ? {
        ...c,
        rel: "prefetch",
        as: "style"
    } : {
        ...c,
        rel: "prefetch"
    }))
}
function Jh(i, l, u, s, c, f) {
    let d = (p, g) => u[g] ? p.route.id !== u[g].route.id : !0
      , m = (p, g) => u[g].pathname !== p.pathname || u[g].route.path?.endsWith("*") && u[g].params["*"] !== p.params["*"];
    return f === "assets" ? l.filter( (p, g) => d(p, g) || m(p, g)) : f === "data" ? l.filter( (p, g) => {
        let v = s.routes[p.route.id];
        if (!v || !v.hasLoader)
            return !1;
        if (d(p, g) || m(p, g))
            return !0;
        if (p.route.shouldRevalidate) {
            let x = p.route.shouldRevalidate({
                currentUrl: new URL(c.pathname + c.search + c.hash,window.origin),
                currentParams: u[0]?.params || {},
                nextUrl: new URL(i,window.origin),
                nextParams: p.params,
                defaultShouldRevalidate: !0
            });
            if (typeof x == "boolean")
                return x
        }
        return !0
    }
    ) : []
}
function rv(i, l, {includeHydrateFallback: u}={}) {
    return uv(i.map(s => {
        let c = l.routes[s.route.id];
        if (!c)
            return [];
        let f = [c.module];
        return c.clientActionModule && (f = f.concat(c.clientActionModule)),
        c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
        u && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)),
        c.imports && (f = f.concat(c.imports)),
        f
    }
    ).flat(1))
}
function uv(i) {
    return [...new Set(i)]
}
function sv(i) {
    let l = {}
      , u = Object.keys(i).sort();
    for (let s of u)
        l[s] = i[s];
    return l
}
function ov(i, l) {
    let u = new Set;
    return new Set(l),
    i.reduce( (s, c) => {
        let f = JSON.stringify(sv(c));
        return u.has(f) || (u.add(f),
        s.push({
            key: f,
            link: c
        })),
        s
    }
    , [])
}
function Yg() {
    let i = _.useContext(Kn);
    return Lo(i, "You must render this element inside a <DataRouterContext.Provider> element"),
    i
}
function cv() {
    let i = _.useContext(zr);
    return Lo(i, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    i
}
var Uo = _.createContext(void 0);
Uo.displayName = "FrameworkContext";
function Vg() {
    let i = _.useContext(Uo);
    return Lo(i, "You must render this element inside a <HydratedRouter> element"),
    i
}
function fv(i, l) {
    let u = _.useContext(Uo)
      , [s,c] = _.useState(!1)
      , [f,d] = _.useState(!1)
      , {onFocus: m, onBlur: p, onMouseEnter: g, onMouseLeave: v, onTouchStart: x} = l
      , N = _.useRef(null);
    _.useEffect( () => {
        if (i === "render" && d(!0),
        i === "viewport") {
            let z = V => {
                V.forEach(Z => {
                    d(Z.isIntersecting)
                }
                )
            }
              , M = new IntersectionObserver(z,{
                threshold: .5
            });
            return N.current && M.observe(N.current),
            () => {
                M.disconnect()
            }
        }
    }
    , [i]),
    _.useEffect( () => {
        if (s) {
            let z = setTimeout( () => {
                d(!0)
            }
            , 100);
            return () => {
                clearTimeout(z)
            }
        }
    }
    , [s]);
    let B = () => {
        c(!0)
    }
      , A = () => {
        c(!1),
        d(!1)
    }
    ;
    return u ? i !== "intent" ? [f, N, {}] : [f, N, {
        onFocus: Zl(m, B),
        onBlur: Zl(p, A),
        onMouseEnter: Zl(g, B),
        onMouseLeave: Zl(v, A),
        onTouchStart: Zl(x, B)
    }] : [!1, N, {}]
}
function Zl(i, l) {
    return u => {
        i && i(u),
        u.defaultPrevented || l(u)
    }
}
function dv({page: i, ...l}) {
    let {router: u} = Yg()
      , s = _.useMemo( () => Dg(u.routes, i, u.basename), [u.routes, i, u.basename]);
    return s ? _.createElement(gv, {
        page: i,
        matches: s,
        ...l
    }) : null
}
function hv(i) {
    let {manifest: l, routeModules: u} = Vg()
      , [s,c] = _.useState([]);
    return _.useEffect( () => {
        let f = !1;
        return iv(i, l, u).then(d => {
            f || c(d)
        }
        ),
        () => {
            f = !0
        }
    }
    , [i, l, u]),
    s
}
function gv({page: i, matches: l, ...u}) {
    let s = Ua()
      , {manifest: c, routeModules: f} = Vg()
      , {basename: d} = Yg()
      , {loaderData: m, matches: p} = cv()
      , g = _.useMemo( () => Jh(i, l, p, c, s, "data"), [i, l, p, c, s])
      , v = _.useMemo( () => Jh(i, l, p, c, s, "assets"), [i, l, p, c, s])
      , x = _.useMemo( () => {
        if (i === s.pathname + s.search + s.hash)
            return [];
        let A = new Set
          , z = !1;
        if (l.forEach(V => {
            let Z = c.routes[V.route.id];
            !Z || !Z.hasLoader || (!g.some(G => G.route.id === V.route.id) && V.route.id in m && f[V.route.id]?.shouldRevalidate || Z.hasClientLoader ? z = !0 : A.add(V.route.id))
        }
        ),
        A.size === 0)
            return [];
        let M = av(i, d, "data");
        return z && A.size > 0 && M.searchParams.set("_routes", l.filter(V => A.has(V.route.id)).map(V => V.route.id).join(",")),
        [M.pathname + M.search]
    }
    , [d, m, s, c, g, l, i, f])
      , N = _.useMemo( () => rv(v, c), [v, c])
      , B = hv(v);
    return _.createElement(_.Fragment, null, x.map(A => _.createElement("link", {
        key: A,
        rel: "prefetch",
        as: "fetch",
        href: A,
        ...u
    })), N.map(A => _.createElement("link", {
        key: A,
        rel: "modulepreload",
        href: A,
        ...u
    })), B.map( ({key: A, link: z}) => _.createElement("link", {
        key: A,
        nonce: u.nonce,
        ...z
    })))
}
function mv(...i) {
    return l => {
        i.forEach(u => {
            typeof u == "function" ? u(l) : u != null && (u.current = l)
        }
        )
    }
}
var Xg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Xg && (window.__reactRouterVersion = "7.8.0")
} catch {}
function pv({basename: i, children: l, window: u}) {
    let s = _.useRef();
    s.current == null && (s.current = ny({
        window: u,
        v5Compat: !0
    }));
    let c = s.current
      , [f,d] = _.useState({
        action: c.action,
        location: c.location
    })
      , m = _.useCallback(p => {
        _.startTransition( () => d(p))
    }
    , [d]);
    return _.useLayoutEffect( () => c.listen(m), [c, m]),
    _.createElement(Qy, {
        basename: i,
        children: l,
        location: f.location,
        navigationType: f.action,
        navigator: c
    })
}
var Gg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Qg = _.forwardRef(function({onClick: l, discover: u="render", prefetch: s="none", relative: c, reloadDocument: f, replace: d, state: m, target: p, to: g, preventScrollReset: v, viewTransition: x, ...N}, B) {
    let {basename: A} = _.useContext(Gt), z = typeof g == "string" && Gg.test(g), M, V = !1;
    if (typeof g == "string" && z && (M = g,
    Xg))
        try {
            let ue = new URL(window.location.href)
              , be = g.startsWith("//") ? new URL(ue.protocol + g) : new URL(g)
              , Ye = sa(be.pathname, A);
            be.origin === ue.origin && Ye != null ? g = Ye + be.search + be.hash : V = !0
        } catch {
            Ut(!1, `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let Z = Dy(g, {
        relative: c
    })
      , [G,P,$] = fv(s, N)
      , fe = xv(g, {
        replace: d,
        state: m,
        target: p,
        preventScrollReset: v,
        relative: c,
        viewTransition: x
    });
    function ne(ue) {
        l && l(ue),
        ue.defaultPrevented || fe(ue)
    }
    let ie = _.createElement("a", {
        ...N,
        ...$,
        href: M || Z,
        onClick: V || f ? l : ne,
        ref: mv(B, P),
        target: p,
        "data-discover": !z && u === "render" ? "true" : void 0
    });
    return G && !z ? _.createElement(_.Fragment, null, ie, _.createElement(dv, {
        page: Z
    })) : ie
});
Qg.displayName = "Link";
var yv = _.forwardRef(function({"aria-current": l="page", caseSensitive: u=!1, className: s="", end: c=!1, style: f, to: d, viewTransition: m, children: p, ...g}, v) {
    let x = ni(d, {
        relative: g.relative
    })
      , N = Ua()
      , B = _.useContext(zr)
      , {navigator: A, basename: z} = _.useContext(Gt)
      , M = B != null && Tv(x) && m === !0
      , V = A.encodeLocation ? A.encodeLocation(x).pathname : x.pathname
      , Z = N.pathname
      , G = B && B.navigation && B.navigation.location ? B.navigation.location.pathname : null;
    u || (Z = Z.toLowerCase(),
    G = G ? G.toLowerCase() : null,
    V = V.toLowerCase()),
    G && z && (G = sa(G, z) || G);
    const P = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let $ = Z === V || !c && Z.startsWith(V) && Z.charAt(P) === "/", fe = G != null && (G === V || !c && G.startsWith(V) && G.charAt(V.length) === "/"), ne = {
        isActive: $,
        isPending: fe,
        isTransitioning: M
    }, ie = $ ? l : void 0, ue;
    typeof s == "function" ? ue = s(ne) : ue = [s, $ ? "active" : null, fe ? "pending" : null, M ? "transitioning" : null].filter(Boolean).join(" ");
    let be = typeof f == "function" ? f(ne) : f;
    return _.createElement(Qg, {
        ...g,
        "aria-current": ie,
        className: ue,
        ref: v,
        style: be,
        to: d,
        viewTransition: m
    }, typeof p == "function" ? p(ne) : p)
});
yv.displayName = "NavLink";
var vv = _.forwardRef( ({discover: i="render", fetcherKey: l, navigate: u, reloadDocument: s, replace: c, state: f, method: d=Or, action: m, onSubmit: p, relative: g, preventScrollReset: v, viewTransition: x, ...N}, B) => {
    let A = Rv()
      , z = Av(m, {
        relative: g
    })
      , M = d.toLowerCase() === "get" ? "get" : "post"
      , V = typeof m == "string" && Gg.test(m)
      , Z = G => {
        if (p && p(G),
        G.defaultPrevented)
            return;
        G.preventDefault();
        let P = G.nativeEvent.submitter
          , $ = P?.getAttribute("formmethod") || d;
        A(P || G.currentTarget, {
            fetcherKey: l,
            method: $,
            navigate: u,
            replace: c,
            state: f,
            relative: g,
            preventScrollReset: v,
            viewTransition: x
        })
    }
    ;
    return _.createElement("form", {
        ref: B,
        method: M,
        action: z,
        onSubmit: s ? p : Z,
        ...N,
        "data-discover": !V && i === "render" ? "true" : void 0
    })
}
);
vv.displayName = "Form";
function bv(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Kg(i) {
    let l = _.useContext(Kn);
    return ze(l, bv(i)),
    l
}
function xv(i, {target: l, replace: u, state: s, preventScrollReset: c, relative: f, viewTransition: d}={}) {
    let m = Do()
      , p = Ua()
      , g = ni(i, {
        relative: f
    });
    return _.useCallback(v => {
        if (Py(v, l)) {
            v.preventDefault();
            let x = u !== void 0 ? u : Wl(p) === Wl(g);
            m(i, {
                replace: x,
                state: s,
                preventScrollReset: c,
                relative: f,
                viewTransition: d
            })
        }
    }
    , [p, m, g, u, s, l, i, c, f, d])
}
function Xx(i) {
    Ut(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let l = _.useRef(So(i))
      , u = _.useRef(!1)
      , s = Ua()
      , c = _.useMemo( () => Wy(s.search, u.current ? null : l.current), [s.search])
      , f = Do()
      , d = _.useCallback( (m, p) => {
        const g = So(typeof m == "function" ? m(new URLSearchParams(c)) : m);
        u.current = !0,
        f("?" + g, p)
    }
    , [f, c]);
    return [c, d]
}
var Sv = 0
  , Ev = () => `__${String(++Sv)}__`;
function Rv() {
    let {router: i} = Kg("useSubmit")
      , {basename: l} = _.useContext(Gt)
      , u = Yy();
    return _.useCallback(async (s, c={}) => {
        let {action: f, method: d, encType: m, formData: p, body: g} = tv(s, l);
        if (c.navigate === !1) {
            let v = c.fetcherKey || Ev();
            await i.fetch(v, u, c.action || f, {
                preventScrollReset: c.preventScrollReset,
                formData: p,
                body: g,
                formMethod: c.method || d,
                formEncType: c.encType || m,
                flushSync: c.flushSync
            })
        } else
            await i.navigate(c.action || f, {
                preventScrollReset: c.preventScrollReset,
                formData: p,
                body: g,
                formMethod: c.method || d,
                formEncType: c.encType || m,
                replace: c.replace,
                state: c.state,
                fromRouteId: u,
                flushSync: c.flushSync,
                viewTransition: c.viewTransition
            })
    }
    , [i, l, u])
}
function Av(i, {relative: l}={}) {
    let {basename: u} = _.useContext(Gt)
      , s = _.useContext(Qt);
    ze(s, "useFormAction must be used inside a RouteContext");
    let[c] = s.matches.slice(-1)
      , f = {
        ...ni(i || ".", {
            relative: l
        })
    }
      , d = Ua();
    if (i == null) {
        f.search = d.search;
        let m = new URLSearchParams(f.search)
          , p = m.getAll("index");
        if (p.some(v => v === "")) {
            m.delete("index"),
            p.filter(x => x).forEach(x => m.append("index", x));
            let v = m.toString();
            f.search = v ? `?${v}` : ""
        }
    }
    return (!i || i === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (f.pathname = f.pathname === "/" ? u : ua([u, f.pathname])),
    Wl(f)
}
function Tv(i, {relative: l}={}) {
    let u = _.useContext(zg);
    ze(u != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: s} = Kg("useViewTransitionState")
      , c = ni(i, {
        relative: l
    });
    if (!u.isTransitioning)
        return !1;
    let f = sa(u.currentLocation.pathname, s) || u.currentLocation.pathname
      , d = sa(u.nextLocation.pathname, s) || u.nextLocation.pathname;
    return jr(c.pathname, d) != null || jr(c.pathname, f) != null
}
function Mo() {
    return b.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center",
        children: [b.jsxs("div", {
            className: "text-center",
            children: [b.jsx("div", {
                className: "mb-8",
                children: b.jsx("div", {
                    className: "relative inline-block",
                    children: b.jsxs("div", {
                        className: "w-32 h-40 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-2xl border-4 border-blue-400 relative overflow-hidden",
                        children: [b.jsx("div", {
                            className: "absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-800 to-indigo-800"
                        }), b.jsx("div", {
                            className: "absolute inset-0 bg-white rounded-lg animate-pulse",
                            style: {
                                animation: "pageFlip 2s ease-in-out infinite",
                                transformOrigin: "left center"
                            },
                            children: b.jsxs("div", {
                                className: "p-4 h-full flex flex-col justify-center",
                                children: [b.jsx("div", {
                                    className: "w-full h-1 bg-gray-300 rounded mb-2"
                                }), b.jsx("div", {
                                    className: "w-3/4 h-1 bg-gray-300 rounded mb-2"
                                }), b.jsx("div", {
                                    className: "w-5/6 h-1 bg-gray-300 rounded mb-2"
                                }), b.jsx("div", {
                                    className: "w-2/3 h-1 bg-gray-300 rounded mb-2"
                                }), b.jsx("div", {
                                    className: "w-4/5 h-1 bg-gray-300 rounded"
                                })]
                            })
                        })]
                    })
                })
            }), b.jsx("h1", {
                className: "text-4xl font-bold text-white mb-4",
                children: "Đang Tải..."
            }), b.jsx("p", {
                className: "text-lg text-gray-300",
                children: "Vui lòng chờ trong giây lát"
            })]
        }), b.jsx("style", {
            children: `
        @keyframes pageFlip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(-90deg); }
          100% { transform: rotateY(0deg); }
        }
      `
        })]
    })
}
function $g(i, l) {
    return function() {
        return i.apply(l, arguments)
    }
}
const {toString: Ov} = Object.prototype
  , {getPrototypeOf: zo} = Object
  , {iterator: kr, toStringTag: Zg} = Symbol
  , Br = (i => l => {
    const u = Ov.call(l);
    return i[u] || (i[u] = u.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Mt = i => (i = i.toLowerCase(),
l => Br(l) === i)
  , qr = i => l => typeof l === i
  , {isArray: $n} = Array
  , Gn = qr("undefined");
function li(i) {
    return i !== null && !Gn(i) && i.constructor !== null && !Gn(i.constructor) && ct(i.constructor.isBuffer) && i.constructor.isBuffer(i)
}
const Jg = Mt("ArrayBuffer");
function Nv(i) {
    let l;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? l = ArrayBuffer.isView(i) : l = i && i.buffer && Jg(i.buffer),
    l
}
const wv = qr("string")
  , ct = qr("function")
  , Fg = qr("number")
  , ii = i => i !== null && typeof i == "object"
  , Cv = i => i === !0 || i === !1
  , wr = i => {
    if (Br(i) !== "object")
        return !1;
    const l = zo(i);
    return (l === null || l === Object.prototype || Object.getPrototypeOf(l) === null) && !(Zg in i) && !(kr in i)
}
  , Dv = i => {
    if (!ii(i) || li(i))
        return !1;
    try {
        return Object.keys(i).length === 0 && Object.getPrototypeOf(i) === Object.prototype
    } catch {
        return !1
    }
}
  , jv = Mt("Date")
  , _v = Mt("File")
  , Lv = Mt("Blob")
  , Uv = Mt("FileList")
  , Mv = i => ii(i) && ct(i.pipe)
  , zv = i => {
    let l;
    return i && (typeof FormData == "function" && i instanceof FormData || ct(i.append) && ((l = Br(i)) === "formdata" || l === "object" && ct(i.toString) && i.toString() === "[object FormData]"))
}
  , Hv = Mt("URLSearchParams")
  , [kv,Bv,qv,Yv] = ["ReadableStream", "Request", "Response", "Headers"].map(Mt)
  , Vv = i => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ri(i, l, {allOwnKeys: u=!1}={}) {
    if (i === null || typeof i > "u")
        return;
    let s, c;
    if (typeof i != "object" && (i = [i]),
    $n(i))
        for (s = 0,
        c = i.length; s < c; s++)
            l.call(null, i[s], s, i);
    else {
        if (li(i))
            return;
        const f = u ? Object.getOwnPropertyNames(i) : Object.keys(i)
          , d = f.length;
        let m;
        for (s = 0; s < d; s++)
            m = f[s],
            l.call(null, i[m], m, i)
    }
}
function Pg(i, l) {
    if (li(i))
        return null;
    l = l.toLowerCase();
    const u = Object.keys(i);
    let s = u.length, c;
    for (; s-- > 0; )
        if (c = u[s],
        l === c.toLowerCase())
            return c;
    return null
}
const Ia = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Wg = i => !Gn(i) && i !== Ia;
function Eo() {
    const {caseless: i, skipUndefined: l} = Wg(this) && this || {}
      , u = {}
      , s = (c, f) => {
        const d = i && Pg(u, f) || f;
        wr(u[d]) && wr(c) ? u[d] = Eo(u[d], c) : wr(c) ? u[d] = Eo({}, c) : $n(c) ? u[d] = c.slice() : (!l || !Gn(c)) && (u[d] = c)
    }
    ;
    for (let c = 0, f = arguments.length; c < f; c++)
        arguments[c] && ri(arguments[c], s);
    return u
}
const Xv = (i, l, u, {allOwnKeys: s}={}) => (ri(l, (c, f) => {
    u && ct(c) ? i[f] = $g(c, u) : i[f] = c
}
, {
    allOwnKeys: s
}),
i)
  , Gv = i => (i.charCodeAt(0) === 65279 && (i = i.slice(1)),
i)
  , Qv = (i, l, u, s) => {
    i.prototype = Object.create(l.prototype, s),
    i.prototype.constructor = i,
    Object.defineProperty(i, "super", {
        value: l.prototype
    }),
    u && Object.assign(i.prototype, u)
}
  , Kv = (i, l, u, s) => {
    let c, f, d;
    const m = {};
    if (l = l || {},
    i == null)
        return l;
    do {
        for (c = Object.getOwnPropertyNames(i),
        f = c.length; f-- > 0; )
            d = c[f],
            (!s || s(d, i, l)) && !m[d] && (l[d] = i[d],
            m[d] = !0);
        i = u !== !1 && zo(i)
    } while (i && (!u || u(i, l)) && i !== Object.prototype);
    return l
}
  , $v = (i, l, u) => {
    i = String(i),
    (u === void 0 || u > i.length) && (u = i.length),
    u -= l.length;
    const s = i.indexOf(l, u);
    return s !== -1 && s === u
}
  , Zv = i => {
    if (!i)
        return null;
    if ($n(i))
        return i;
    let l = i.length;
    if (!Fg(l))
        return null;
    const u = new Array(l);
    for (; l-- > 0; )
        u[l] = i[l];
    return u
}
  , Jv = (i => l => i && l instanceof i)(typeof Uint8Array < "u" && zo(Uint8Array))
  , Fv = (i, l) => {
    const s = (i && i[kr]).call(i);
    let c;
    for (; (c = s.next()) && !c.done; ) {
        const f = c.value;
        l.call(i, f[0], f[1])
    }
}
  , Pv = (i, l) => {
    let u;
    const s = [];
    for (; (u = i.exec(l)) !== null; )
        s.push(u);
    return s
}
  , Wv = Mt("HTMLFormElement")
  , Iv = i => i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(u, s, c) {
    return s.toUpperCase() + c
})
  , Fh = ( ({hasOwnProperty: i}) => (l, u) => i.call(l, u))(Object.prototype)
  , eb = Mt("RegExp")
  , Ig = (i, l) => {
    const u = Object.getOwnPropertyDescriptors(i)
      , s = {};
    ri(u, (c, f) => {
        let d;
        (d = l(c, f, i)) !== !1 && (s[f] = d || c)
    }
    ),
    Object.defineProperties(i, s)
}
  , tb = i => {
    Ig(i, (l, u) => {
        if (ct(i) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
            return !1;
        const s = i[u];
        if (ct(s)) {
            if (l.enumerable = !1,
            "writable"in l) {
                l.writable = !1;
                return
            }
            l.set || (l.set = () => {
                throw Error("Can not rewrite read-only method '" + u + "'")
            }
            )
        }
    }
    )
}
  , ab = (i, l) => {
    const u = {}
      , s = c => {
        c.forEach(f => {
            u[f] = !0
        }
        )
    }
    ;
    return $n(i) ? s(i) : s(String(i).split(l)),
    u
}
  , nb = () => {}
  , lb = (i, l) => i != null && Number.isFinite(i = +i) ? i : l;
function ib(i) {
    return !!(i && ct(i.append) && i[Zg] === "FormData" && i[kr])
}
const rb = i => {
    const l = new Array(10)
      , u = (s, c) => {
        if (ii(s)) {
            if (l.indexOf(s) >= 0)
                return;
            if (li(s))
                return s;
            if (!("toJSON"in s)) {
                l[c] = s;
                const f = $n(s) ? [] : {};
                return ri(s, (d, m) => {
                    const p = u(d, c + 1);
                    !Gn(p) && (f[m] = p)
                }
                ),
                l[c] = void 0,
                f
            }
        }
        return s
    }
    ;
    return u(i, 0)
}
  , ub = Mt("AsyncFunction")
  , sb = i => i && (ii(i) || ct(i)) && ct(i.then) && ct(i.catch)
  , em = ( (i, l) => i ? setImmediate : l ? ( (u, s) => (Ia.addEventListener("message", ({source: c, data: f}) => {
    c === Ia && f === u && s.length && s.shift()()
}
, !1),
c => {
    s.push(c),
    Ia.postMessage(u, "*")
}
))(`axios@${Math.random()}`, []) : u => setTimeout(u))(typeof setImmediate == "function", ct(Ia.postMessage))
  , ob = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ia) : typeof process < "u" && process.nextTick || em
  , cb = i => i != null && ct(i[kr])
  , U = {
    isArray: $n,
    isArrayBuffer: Jg,
    isBuffer: li,
    isFormData: zv,
    isArrayBufferView: Nv,
    isString: wv,
    isNumber: Fg,
    isBoolean: Cv,
    isObject: ii,
    isPlainObject: wr,
    isEmptyObject: Dv,
    isReadableStream: kv,
    isRequest: Bv,
    isResponse: qv,
    isHeaders: Yv,
    isUndefined: Gn,
    isDate: jv,
    isFile: _v,
    isBlob: Lv,
    isRegExp: eb,
    isFunction: ct,
    isStream: Mv,
    isURLSearchParams: Hv,
    isTypedArray: Jv,
    isFileList: Uv,
    forEach: ri,
    merge: Eo,
    extend: Xv,
    trim: Vv,
    stripBOM: Gv,
    inherits: Qv,
    toFlatObject: Kv,
    kindOf: Br,
    kindOfTest: Mt,
    endsWith: $v,
    toArray: Zv,
    forEachEntry: Fv,
    matchAll: Pv,
    isHTMLForm: Wv,
    hasOwnProperty: Fh,
    hasOwnProp: Fh,
    reduceDescriptors: Ig,
    freezeMethods: tb,
    toObjectSet: ab,
    toCamelCase: Iv,
    noop: nb,
    toFiniteNumber: lb,
    findKey: Pg,
    global: Ia,
    isContextDefined: Wg,
    isSpecCompliantForm: ib,
    toJSONObject: rb,
    isAsyncFn: ub,
    isThenable: sb,
    setImmediate: em,
    asap: ob,
    isIterable: cb
};
function oe(i, l, u, s, c) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = i,
    this.name = "AxiosError",
    l && (this.code = l),
    u && (this.config = u),
    s && (this.request = s),
    c && (this.response = c,
    this.status = c.status ? c.status : null)
}
U.inherits(oe, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const tm = oe.prototype
  , am = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(i => {
    am[i] = {
        value: i
    }
}
);
Object.defineProperties(oe, am);
Object.defineProperty(tm, "isAxiosError", {
    value: !0
});
oe.from = (i, l, u, s, c, f) => {
    const d = Object.create(tm);
    U.toFlatObject(i, d, function(v) {
        return v !== Error.prototype
    }, g => g !== "isAxiosError");
    const m = i && i.message ? i.message : "Error"
      , p = l == null && i ? i.code : l;
    return oe.call(d, m, p, u, s, c),
    i && d.cause == null && Object.defineProperty(d, "cause", {
        value: i,
        configurable: !0
    }),
    d.name = i && i.name || "Error",
    f && Object.assign(d, f),
    d
}
;
const fb = null;
function Ro(i) {
    return U.isPlainObject(i) || U.isArray(i)
}
function nm(i) {
    return U.endsWith(i, "[]") ? i.slice(0, -2) : i
}
function Ph(i, l, u) {
    return i ? i.concat(l).map(function(c, f) {
        return c = nm(c),
        !u && f ? "[" + c + "]" : c
    }).join(u ? "." : "") : l
}
function db(i) {
    return U.isArray(i) && !i.some(Ro)
}
const hb = U.toFlatObject(U, {}, null, function(l) {
    return /^is[A-Z]/.test(l)
});
function Yr(i, l, u) {
    if (!U.isObject(i))
        throw new TypeError("target must be an object");
    l = l || new FormData,
    u = U.toFlatObject(u, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(z, M) {
        return !U.isUndefined(M[z])
    });
    const s = u.metaTokens
      , c = u.visitor || v
      , f = u.dots
      , d = u.indexes
      , p = (u.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(l);
    if (!U.isFunction(c))
        throw new TypeError("visitor must be a function");
    function g(A) {
        if (A === null)
            return "";
        if (U.isDate(A))
            return A.toISOString();
        if (U.isBoolean(A))
            return A.toString();
        if (!p && U.isBlob(A))
            throw new oe("Blob is not supported. Use a Buffer instead.");
        return U.isArrayBuffer(A) || U.isTypedArray(A) ? p && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A
    }
    function v(A, z, M) {
        let V = A;
        if (A && !M && typeof A == "object") {
            if (U.endsWith(z, "{}"))
                z = s ? z : z.slice(0, -2),
                A = JSON.stringify(A);
            else if (U.isArray(A) && db(A) || (U.isFileList(A) || U.endsWith(z, "[]")) && (V = U.toArray(A)))
                return z = nm(z),
                V.forEach(function(G, P) {
                    !(U.isUndefined(G) || G === null) && l.append(d === !0 ? Ph([z], P, f) : d === null ? z : z + "[]", g(G))
                }),
                !1
        }
        return Ro(A) ? !0 : (l.append(Ph(M, z, f), g(A)),
        !1)
    }
    const x = []
      , N = Object.assign(hb, {
        defaultVisitor: v,
        convertValue: g,
        isVisitable: Ro
    });
    function B(A, z) {
        if (!U.isUndefined(A)) {
            if (x.indexOf(A) !== -1)
                throw Error("Circular reference detected in " + z.join("."));
            x.push(A),
            U.forEach(A, function(V, Z) {
                (!(U.isUndefined(V) || V === null) && c.call(l, V, U.isString(Z) ? Z.trim() : Z, z, N)) === !0 && B(V, z ? z.concat(Z) : [Z])
            }),
            x.pop()
        }
    }
    if (!U.isObject(i))
        throw new TypeError("data must be an object");
    return B(i),
    l
}
function Wh(i) {
    const l = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(s) {
        return l[s]
    })
}
function Ho(i, l) {
    this._pairs = [],
    i && Yr(i, this, l)
}
const lm = Ho.prototype;
lm.append = function(l, u) {
    this._pairs.push([l, u])
}
;
lm.toString = function(l) {
    const u = l ? function(s) {
        return l.call(this, s, Wh)
    }
    : Wh;
    return this._pairs.map(function(c) {
        return u(c[0]) + "=" + u(c[1])
    }, "").join("&")
}
;
function gb(i) {
    return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function im(i, l, u) {
    if (!l)
        return i;
    const s = u && u.encode || gb;
    U.isFunction(u) && (u = {
        serialize: u
    });
    const c = u && u.serialize;
    let f;
    if (c ? f = c(l, u) : f = U.isURLSearchParams(l) ? l.toString() : new Ho(l,u).toString(s),
    f) {
        const d = i.indexOf("#");
        d !== -1 && (i = i.slice(0, d)),
        i += (i.indexOf("?") === -1 ? "?" : "&") + f
    }
    return i
}
class Ih {
    constructor() {
        this.handlers = []
    }
    use(l, u, s) {
        return this.handlers.push({
            fulfilled: l,
            rejected: u,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(l) {
        this.handlers[l] && (this.handlers[l] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(l) {
        U.forEach(this.handlers, function(s) {
            s !== null && l(s)
        })
    }
}
const rm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , mb = typeof URLSearchParams < "u" ? URLSearchParams : Ho
  , pb = typeof FormData < "u" ? FormData : null
  , yb = typeof Blob < "u" ? Blob : null
  , vb = {
    isBrowser: !0,
    classes: {
        URLSearchParams: mb,
        FormData: pb,
        Blob: yb
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , ko = typeof window < "u" && typeof document < "u"
  , Ao = typeof navigator == "object" && navigator || void 0
  , bb = ko && (!Ao || ["ReactNative", "NativeScript", "NS"].indexOf(Ao.product) < 0)
  , xb = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , Sb = ko && window.location.href || "http://localhost"
  , Eb = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: ko,
    hasStandardBrowserEnv: bb,
    hasStandardBrowserWebWorkerEnv: xb,
    navigator: Ao,
    origin: Sb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , at = {
    ...Eb,
    ...vb
};
function Rb(i, l) {
    return Yr(i, new at.classes.URLSearchParams, {
        visitor: function(u, s, c, f) {
            return at.isNode && U.isBuffer(u) ? (this.append(s, u.toString("base64")),
            !1) : f.defaultVisitor.apply(this, arguments)
        },
        ...l
    })
}
function Ab(i) {
    return U.matchAll(/\w+|\[(\w*)]/g, i).map(l => l[0] === "[]" ? "" : l[1] || l[0])
}
function Tb(i) {
    const l = {}
      , u = Object.keys(i);
    let s;
    const c = u.length;
    let f;
    for (s = 0; s < c; s++)
        f = u[s],
        l[f] = i[f];
    return l
}
function um(i) {
    function l(u, s, c, f) {
        let d = u[f++];
        if (d === "__proto__")
            return !0;
        const m = Number.isFinite(+d)
          , p = f >= u.length;
        return d = !d && U.isArray(c) ? c.length : d,
        p ? (U.hasOwnProp(c, d) ? c[d] = [c[d], s] : c[d] = s,
        !m) : ((!c[d] || !U.isObject(c[d])) && (c[d] = []),
        l(u, s, c[d], f) && U.isArray(c[d]) && (c[d] = Tb(c[d])),
        !m)
    }
    if (U.isFormData(i) && U.isFunction(i.entries)) {
        const u = {};
        return U.forEachEntry(i, (s, c) => {
            l(Ab(s), c, u, 0)
        }
        ),
        u
    }
    return null
}
function Ob(i, l, u) {
    if (U.isString(i))
        try {
            return (l || JSON.parse)(i),
            U.trim(i)
        } catch (s) {
            if (s.name !== "SyntaxError")
                throw s
        }
    return (u || JSON.stringify)(i)
}
const ui = {
    transitional: rm,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(l, u) {
        const s = u.getContentType() || ""
          , c = s.indexOf("application/json") > -1
          , f = U.isObject(l);
        if (f && U.isHTMLForm(l) && (l = new FormData(l)),
        U.isFormData(l))
            return c ? JSON.stringify(um(l)) : l;
        if (U.isArrayBuffer(l) || U.isBuffer(l) || U.isStream(l) || U.isFile(l) || U.isBlob(l) || U.isReadableStream(l))
            return l;
        if (U.isArrayBufferView(l))
            return l.buffer;
        if (U.isURLSearchParams(l))
            return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            l.toString();
        let m;
        if (f) {
            if (s.indexOf("application/x-www-form-urlencoded") > -1)
                return Rb(l, this.formSerializer).toString();
            if ((m = U.isFileList(l)) || s.indexOf("multipart/form-data") > -1) {
                const p = this.env && this.env.FormData;
                return Yr(m ? {
                    "files[]": l
                } : l, p && new p, this.formSerializer)
            }
        }
        return f || c ? (u.setContentType("application/json", !1),
        Ob(l)) : l
    }
    ],
    transformResponse: [function(l) {
        const u = this.transitional || ui.transitional
          , s = u && u.forcedJSONParsing
          , c = this.responseType === "json";
        if (U.isResponse(l) || U.isReadableStream(l))
            return l;
        if (l && U.isString(l) && (s && !this.responseType || c)) {
            const d = !(u && u.silentJSONParsing) && c;
            try {
                return JSON.parse(l, this.parseReviver)
            } catch (m) {
                if (d)
                    throw m.name === "SyntaxError" ? oe.from(m, oe.ERR_BAD_RESPONSE, this, null, this.response) : m
            }
        }
        return l
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: at.classes.FormData,
        Blob: at.classes.Blob
    },
    validateStatus: function(l) {
        return l >= 200 && l < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
U.forEach(["delete", "get", "head", "post", "put", "patch"], i => {
    ui.headers[i] = {}
}
);
const Nb = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , wb = i => {
    const l = {};
    let u, s, c;
    return i && i.split(`
`).forEach(function(d) {
        c = d.indexOf(":"),
        u = d.substring(0, c).trim().toLowerCase(),
        s = d.substring(c + 1).trim(),
        !(!u || l[u] && Nb[u]) && (u === "set-cookie" ? l[u] ? l[u].push(s) : l[u] = [s] : l[u] = l[u] ? l[u] + ", " + s : s)
    }),
    l
}
  , eg = Symbol("internals");
function Jl(i) {
    return i && String(i).trim().toLowerCase()
}
function Cr(i) {
    return i === !1 || i == null ? i : U.isArray(i) ? i.map(Cr) : String(i)
}
function Cb(i) {
    const l = Object.create(null)
      , u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = u.exec(i); )
        l[s[1]] = s[2];
    return l
}
const Db = i => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function go(i, l, u, s, c) {
    if (U.isFunction(s))
        return s.call(this, l, u);
    if (c && (l = u),
    !!U.isString(l)) {
        if (U.isString(s))
            return l.indexOf(s) !== -1;
        if (U.isRegExp(s))
            return s.test(l)
    }
}
function jb(i) {
    return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (l, u, s) => u.toUpperCase() + s)
}
function _b(i, l) {
    const u = U.toCamelCase(" " + l);
    ["get", "set", "has"].forEach(s => {
        Object.defineProperty(i, s + u, {
            value: function(c, f, d) {
                return this[s].call(this, l, c, f, d)
            },
            configurable: !0
        })
    }
    )
}
let ft = class {
    constructor(l) {
        l && this.set(l)
    }
    set(l, u, s) {
        const c = this;
        function f(m, p, g) {
            const v = Jl(p);
            if (!v)
                throw new Error("header name must be a non-empty string");
            const x = U.findKey(c, v);
            (!x || c[x] === void 0 || g === !0 || g === void 0 && c[x] !== !1) && (c[x || p] = Cr(m))
        }
        const d = (m, p) => U.forEach(m, (g, v) => f(g, v, p));
        if (U.isPlainObject(l) || l instanceof this.constructor)
            d(l, u);
        else if (U.isString(l) && (l = l.trim()) && !Db(l))
            d(wb(l), u);
        else if (U.isObject(l) && U.isIterable(l)) {
            let m = {}, p, g;
            for (const v of l) {
                if (!U.isArray(v))
                    throw TypeError("Object iterator must return a key-value pair");
                m[g = v[0]] = (p = m[g]) ? U.isArray(p) ? [...p, v[1]] : [p, v[1]] : v[1]
            }
            d(m, u)
        } else
            l != null && f(u, l, s);
        return this
    }
    get(l, u) {
        if (l = Jl(l),
        l) {
            const s = U.findKey(this, l);
            if (s) {
                const c = this[s];
                if (!u)
                    return c;
                if (u === !0)
                    return Cb(c);
                if (U.isFunction(u))
                    return u.call(this, c, s);
                if (U.isRegExp(u))
                    return u.exec(c);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(l, u) {
        if (l = Jl(l),
        l) {
            const s = U.findKey(this, l);
            return !!(s && this[s] !== void 0 && (!u || go(this, this[s], s, u)))
        }
        return !1
    }
    delete(l, u) {
        const s = this;
        let c = !1;
        function f(d) {
            if (d = Jl(d),
            d) {
                const m = U.findKey(s, d);
                m && (!u || go(s, s[m], m, u)) && (delete s[m],
                c = !0)
            }
        }
        return U.isArray(l) ? l.forEach(f) : f(l),
        c
    }
    clear(l) {
        const u = Object.keys(this);
        let s = u.length
          , c = !1;
        for (; s--; ) {
            const f = u[s];
            (!l || go(this, this[f], f, l, !0)) && (delete this[f],
            c = !0)
        }
        return c
    }
    normalize(l) {
        const u = this
          , s = {};
        return U.forEach(this, (c, f) => {
            const d = U.findKey(s, f);
            if (d) {
                u[d] = Cr(c),
                delete u[f];
                return
            }
            const m = l ? jb(f) : String(f).trim();
            m !== f && delete u[f],
            u[m] = Cr(c),
            s[m] = !0
        }
        ),
        this
    }
    concat(...l) {
        return this.constructor.concat(this, ...l)
    }
    toJSON(l) {
        const u = Object.create(null);
        return U.forEach(this, (s, c) => {
            s != null && s !== !1 && (u[c] = l && U.isArray(s) ? s.join(", ") : s)
        }
        ),
        u
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([l,u]) => l + ": " + u).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(l) {
        return l instanceof this ? l : new this(l)
    }
    static concat(l, ...u) {
        const s = new this(l);
        return u.forEach(c => s.set(c)),
        s
    }
    static accessor(l) {
        const s = (this[eg] = this[eg] = {
            accessors: {}
        }).accessors
          , c = this.prototype;
        function f(d) {
            const m = Jl(d);
            s[m] || (_b(c, d),
            s[m] = !0)
        }
        return U.isArray(l) ? l.forEach(f) : f(l),
        this
    }
}
;
ft.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(ft.prototype, ({value: i}, l) => {
    let u = l[0].toUpperCase() + l.slice(1);
    return {
        get: () => i,
        set(s) {
            this[u] = s
        }
    }
}
);
U.freezeMethods(ft);
function mo(i, l) {
    const u = this || ui
      , s = l || u
      , c = ft.from(s.headers);
    let f = s.data;
    return U.forEach(i, function(m) {
        f = m.call(u, f, c.normalize(), l ? l.status : void 0)
    }),
    c.normalize(),
    f
}
function sm(i) {
    return !!(i && i.__CANCEL__)
}
function Zn(i, l, u) {
    oe.call(this, i ?? "canceled", oe.ERR_CANCELED, l, u),
    this.name = "CanceledError"
}
U.inherits(Zn, oe, {
    __CANCEL__: !0
});
function om(i, l, u) {
    const s = u.config.validateStatus;
    !u.status || !s || s(u.status) ? i(u) : l(new oe("Request failed with status code " + u.status,[oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],u.config,u.request,u))
}
function Lb(i) {
    const l = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return l && l[1] || ""
}
function Ub(i, l) {
    i = i || 10;
    const u = new Array(i)
      , s = new Array(i);
    let c = 0, f = 0, d;
    return l = l !== void 0 ? l : 1e3,
    function(p) {
        const g = Date.now()
          , v = s[f];
        d || (d = g),
        u[c] = p,
        s[c] = g;
        let x = f
          , N = 0;
        for (; x !== c; )
            N += u[x++],
            x = x % i;
        if (c = (c + 1) % i,
        c === f && (f = (f + 1) % i),
        g - d < l)
            return;
        const B = v && g - v;
        return B ? Math.round(N * 1e3 / B) : void 0
    }
}
function Mb(i, l) {
    let u = 0, s = 1e3 / l, c, f;
    const d = (g, v=Date.now()) => {
        u = v,
        c = null,
        f && (clearTimeout(f),
        f = null),
        i(...g)
    }
    ;
    return [ (...g) => {
        const v = Date.now()
          , x = v - u;
        x >= s ? d(g, v) : (c = g,
        f || (f = setTimeout( () => {
            f = null,
            d(c)
        }
        , s - x)))
    }
    , () => c && d(c)]
}
const _r = (i, l, u=3) => {
    let s = 0;
    const c = Ub(50, 250);
    return Mb(f => {
        const d = f.loaded
          , m = f.lengthComputable ? f.total : void 0
          , p = d - s
          , g = c(p)
          , v = d <= m;
        s = d;
        const x = {
            loaded: d,
            total: m,
            progress: m ? d / m : void 0,
            bytes: p,
            rate: g || void 0,
            estimated: g && m && v ? (m - d) / g : void 0,
            event: f,
            lengthComputable: m != null,
            [l ? "download" : "upload"]: !0
        };
        i(x)
    }
    , u)
}
  , tg = (i, l) => {
    const u = i != null;
    return [s => l[0]({
        lengthComputable: u,
        total: i,
        loaded: s
    }), l[1]]
}
  , ag = i => (...l) => U.asap( () => i(...l))
  , zb = at.hasStandardBrowserEnv ? ( (i, l) => u => (u = new URL(u,at.origin),
i.protocol === u.protocol && i.host === u.host && (l || i.port === u.port)))(new URL(at.origin), at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)) : () => !0
  , Hb = at.hasStandardBrowserEnv ? {
    write(i, l, u, s, c, f) {
        const d = [i + "=" + encodeURIComponent(l)];
        U.isNumber(u) && d.push("expires=" + new Date(u).toGMTString()),
        U.isString(s) && d.push("path=" + s),
        U.isString(c) && d.push("domain=" + c),
        f === !0 && d.push("secure"),
        document.cookie = d.join("; ")
    },
    read(i) {
        const l = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
        return l ? decodeURIComponent(l[3]) : null
    },
    remove(i) {
        this.write(i, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function kb(i) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)
}
function Bb(i, l) {
    return l ? i.replace(/\/?\/$/, "") + "/" + l.replace(/^\/+/, "") : i
}
function cm(i, l, u) {
    let s = !kb(l);
    return i && (s || u == !1) ? Bb(i, l) : l
}
const ng = i => i instanceof ft ? {
    ...i
} : i;
function tn(i, l) {
    l = l || {};
    const u = {};
    function s(g, v, x, N) {
        return U.isPlainObject(g) && U.isPlainObject(v) ? U.merge.call({
            caseless: N
        }, g, v) : U.isPlainObject(v) ? U.merge({}, v) : U.isArray(v) ? v.slice() : v
    }
    function c(g, v, x, N) {
        if (U.isUndefined(v)) {
            if (!U.isUndefined(g))
                return s(void 0, g, x, N)
        } else
            return s(g, v, x, N)
    }
    function f(g, v) {
        if (!U.isUndefined(v))
            return s(void 0, v)
    }
    function d(g, v) {
        if (U.isUndefined(v)) {
            if (!U.isUndefined(g))
                return s(void 0, g)
        } else
            return s(void 0, v)
    }
    function m(g, v, x) {
        if (x in l)
            return s(g, v);
        if (x in i)
            return s(void 0, g)
    }
    const p = {
        url: f,
        method: f,
        data: f,
        baseURL: d,
        transformRequest: d,
        transformResponse: d,
        paramsSerializer: d,
        timeout: d,
        timeoutMessage: d,
        withCredentials: d,
        withXSRFToken: d,
        adapter: d,
        responseType: d,
        xsrfCookieName: d,
        xsrfHeaderName: d,
        onUploadProgress: d,
        onDownloadProgress: d,
        decompress: d,
        maxContentLength: d,
        maxBodyLength: d,
        beforeRedirect: d,
        transport: d,
        httpAgent: d,
        httpsAgent: d,
        cancelToken: d,
        socketPath: d,
        responseEncoding: d,
        validateStatus: m,
        headers: (g, v, x) => c(ng(g), ng(v), x, !0)
    };
    return U.forEach(Object.keys({
        ...i,
        ...l
    }), function(v) {
        const x = p[v] || c
          , N = x(i[v], l[v], v);
        U.isUndefined(N) && x !== m || (u[v] = N)
    }),
    u
}
const fm = i => {
    const l = tn({}, i);
    let {data: u, withXSRFToken: s, xsrfHeaderName: c, xsrfCookieName: f, headers: d, auth: m} = l;
    if (l.headers = d = ft.from(d),
    l.url = im(cm(l.baseURL, l.url, l.allowAbsoluteUrls), i.params, i.paramsSerializer),
    m && d.set("Authorization", "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : ""))),
    U.isFormData(u)) {
        if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
            d.setContentType(void 0);
        else if (U.isFunction(u.getHeaders)) {
            const p = u.getHeaders()
              , g = ["content-type", "content-length"];
            Object.entries(p).forEach( ([v,x]) => {
                g.includes(v.toLowerCase()) && d.set(v, x)
            }
            )
        }
    }
    if (at.hasStandardBrowserEnv && (s && U.isFunction(s) && (s = s(l)),
    s || s !== !1 && zb(l.url))) {
        const p = c && f && Hb.read(f);
        p && d.set(c, p)
    }
    return l
}
  , qb = typeof XMLHttpRequest < "u"
  , Yb = qb && function(i) {
    return new Promise(function(u, s) {
        const c = fm(i);
        let f = c.data;
        const d = ft.from(c.headers).normalize();
        let {responseType: m, onUploadProgress: p, onDownloadProgress: g} = c, v, x, N, B, A;
        function z() {
            B && B(),
            A && A(),
            c.cancelToken && c.cancelToken.unsubscribe(v),
            c.signal && c.signal.removeEventListener("abort", v)
        }
        let M = new XMLHttpRequest;
        M.open(c.method.toUpperCase(), c.url, !0),
        M.timeout = c.timeout;
        function V() {
            if (!M)
                return;
            const G = ft.from("getAllResponseHeaders"in M && M.getAllResponseHeaders())
              , $ = {
                data: !m || m === "text" || m === "json" ? M.responseText : M.response,
                status: M.status,
                statusText: M.statusText,
                headers: G,
                config: i,
                request: M
            };
            om(function(ne) {
                u(ne),
                z()
            }, function(ne) {
                s(ne),
                z()
            }, $),
            M = null
        }
        "onloadend"in M ? M.onloadend = V : M.onreadystatechange = function() {
            !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(V)
        }
        ,
        M.onabort = function() {
            M && (s(new oe("Request aborted",oe.ECONNABORTED,i,M)),
            M = null)
        }
        ,
        M.onerror = function(P) {
            const $ = P && P.message ? P.message : "Network Error"
              , fe = new oe($,oe.ERR_NETWORK,i,M);
            fe.event = P || null,
            s(fe),
            M = null
        }
        ,
        M.ontimeout = function() {
            let P = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
            const $ = c.transitional || rm;
            c.timeoutErrorMessage && (P = c.timeoutErrorMessage),
            s(new oe(P,$.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,i,M)),
            M = null
        }
        ,
        f === void 0 && d.setContentType(null),
        "setRequestHeader"in M && U.forEach(d.toJSON(), function(P, $) {
            M.setRequestHeader($, P)
        }),
        U.isUndefined(c.withCredentials) || (M.withCredentials = !!c.withCredentials),
        m && m !== "json" && (M.responseType = c.responseType),
        g && ([N,A] = _r(g, !0),
        M.addEventListener("progress", N)),
        p && M.upload && ([x,B] = _r(p),
        M.upload.addEventListener("progress", x),
        M.upload.addEventListener("loadend", B)),
        (c.cancelToken || c.signal) && (v = G => {
            M && (s(!G || G.type ? new Zn(null,i,M) : G),
            M.abort(),
            M = null)
        }
        ,
        c.cancelToken && c.cancelToken.subscribe(v),
        c.signal && (c.signal.aborted ? v() : c.signal.addEventListener("abort", v)));
        const Z = Lb(c.url);
        if (Z && at.protocols.indexOf(Z) === -1) {
            s(new oe("Unsupported protocol " + Z + ":",oe.ERR_BAD_REQUEST,i));
            return
        }
        M.send(f || null)
    }
    )
}
  , Vb = (i, l) => {
    const {length: u} = i = i ? i.filter(Boolean) : [];
    if (l || u) {
        let s = new AbortController, c;
        const f = function(g) {
            if (!c) {
                c = !0,
                m();
                const v = g instanceof Error ? g : this.reason;
                s.abort(v instanceof oe ? v : new Zn(v instanceof Error ? v.message : v))
            }
        };
        let d = l && setTimeout( () => {
            d = null,
            f(new oe(`timeout ${l} of ms exceeded`,oe.ETIMEDOUT))
        }
        , l);
        const m = () => {
            i && (d && clearTimeout(d),
            d = null,
            i.forEach(g => {
                g.unsubscribe ? g.unsubscribe(f) : g.removeEventListener("abort", f)
            }
            ),
            i = null)
        }
        ;
        i.forEach(g => g.addEventListener("abort", f));
        const {signal: p} = s;
        return p.unsubscribe = () => U.asap(m),
        p
    }
}
  , Xb = function*(i, l) {
    let u = i.byteLength;
    if (u < l) {
        yield i;
        return
    }
    let s = 0, c;
    for (; s < u; )
        c = s + l,
        yield i.slice(s, c),
        s = c
}
  , Gb = async function*(i, l) {
    for await(const u of Qb(i))
        yield*Xb(u, l)
}
  , Qb = async function*(i) {
    if (i[Symbol.asyncIterator]) {
        yield*i;
        return
    }
    const l = i.getReader();
    try {
        for (; ; ) {
            const {done: u, value: s} = await l.read();
            if (u)
                break;
            yield s
        }
    } finally {
        await l.cancel()
    }
}
  , lg = (i, l, u, s) => {
    const c = Gb(i, l);
    let f = 0, d, m = p => {
        d || (d = !0,
        s && s(p))
    }
    ;
    return new ReadableStream({
        async pull(p) {
            try {
                const {done: g, value: v} = await c.next();
                if (g) {
                    m(),
                    p.close();
                    return
                }
                let x = v.byteLength;
                if (u) {
                    let N = f += x;
                    u(N)
                }
                p.enqueue(new Uint8Array(v))
            } catch (g) {
                throw m(g),
                g
            }
        },
        cancel(p) {
            return m(p),
            c.return()
        }
    },{
        highWaterMark: 2
    })
}
  , ig = 64 * 1024
  , {isFunction: Ar} = U
  , Kb = ( ({Request: i, Response: l}) => ({
    Request: i,
    Response: l
}))(U.global)
  , {ReadableStream: rg, TextEncoder: ug} = U.global
  , sg = (i, ...l) => {
    try {
        return !!i(...l)
    } catch {
        return !1
    }
}
  , $b = i => {
    i = U.merge.call({
        skipUndefined: !0
    }, Kb, i);
    const {fetch: l, Request: u, Response: s} = i
      , c = l ? Ar(l) : typeof fetch == "function"
      , f = Ar(u)
      , d = Ar(s);
    if (!c)
        return !1;
    const m = c && Ar(rg)
      , p = c && (typeof ug == "function" ? (A => z => A.encode(z))(new ug) : async A => new Uint8Array(await new u(A).arrayBuffer()))
      , g = f && m && sg( () => {
        let A = !1;
        const z = new u(at.origin,{
            body: new rg,
            method: "POST",
            get duplex() {
                return A = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return A && !z
    }
    )
      , v = d && m && sg( () => U.isReadableStream(new s("").body))
      , x = {
        stream: v && (A => A.body)
    };
    c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(A => {
        !x[A] && (x[A] = (z, M) => {
            let V = z && z[A];
            if (V)
                return V.call(z);
            throw new oe(`Response type '${A}' is not supported`,oe.ERR_NOT_SUPPORT,M)
        }
        )
    }
    );
    const N = async A => {
        if (A == null)
            return 0;
        if (U.isBlob(A))
            return A.size;
        if (U.isSpecCompliantForm(A))
            return (await new u(at.origin,{
                method: "POST",
                body: A
            }).arrayBuffer()).byteLength;
        if (U.isArrayBufferView(A) || U.isArrayBuffer(A))
            return A.byteLength;
        if (U.isURLSearchParams(A) && (A = A + ""),
        U.isString(A))
            return (await p(A)).byteLength
    }
      , B = async (A, z) => {
        const M = U.toFiniteNumber(A.getContentLength());
        return M ?? N(z)
    }
    ;
    return async A => {
        let {url: z, method: M, data: V, signal: Z, cancelToken: G, timeout: P, onDownloadProgress: $, onUploadProgress: fe, responseType: ne, headers: ie, withCredentials: ue="same-origin", fetchOptions: be} = fm(A)
          , Ye = l || fetch;
        ne = ne ? (ne + "").toLowerCase() : "text";
        let Ae = Vb([Z, G && G.toAbortSignal()], P)
          , we = null;
        const Se = Ae && Ae.unsubscribe && ( () => {
            Ae.unsubscribe()
        }
        );
        let je;
        try {
            if (fe && g && M !== "get" && M !== "head" && (je = await B(ie, V)) !== 0) {
                let H = new u(z,{
                    method: "POST",
                    body: V,
                    duplex: "half"
                }), Q;
                if (U.isFormData(V) && (Q = H.headers.get("content-type")) && ie.setContentType(Q),
                H.body) {
                    const [K,F] = tg(je, _r(ag(fe)));
                    V = lg(H.body, ig, K, F)
                }
            }
            U.isString(ue) || (ue = ue ? "include" : "omit");
            const L = f && "credentials"in u.prototype
              , C = {
                ...be,
                signal: Ae,
                method: M.toUpperCase(),
                headers: ie.normalize().toJSON(),
                body: V,
                duplex: "half",
                credentials: L ? ue : void 0
            };
            we = f && new u(z,C);
            let X = await (f ? Ye(we, be) : Ye(z, C));
            const I = v && (ne === "stream" || ne === "response");
            if (v && ($ || I && Se)) {
                const H = {};
                ["status", "statusText", "headers"].forEach(pe => {
                    H[pe] = X[pe]
                }
                );
                const Q = U.toFiniteNumber(X.headers.get("content-length"))
                  , [K,F] = $ && tg(Q, _r(ag($), !0)) || [];
                X = new s(lg(X.body, ig, K, () => {
                    F && F(),
                    Se && Se()
                }
                ),H)
            }
            ne = ne || "text";
            let E = await x[U.findKey(x, ne) || "text"](X, A);
            return !I && Se && Se(),
            await new Promise( (H, Q) => {
                om(H, Q, {
                    data: E,
                    headers: ft.from(X.headers),
                    status: X.status,
                    statusText: X.statusText,
                    config: A,
                    request: we
                })
            }
            )
        } catch (L) {
            throw Se && Se(),
            L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(new oe("Network Error",oe.ERR_NETWORK,A,we), {
                cause: L.cause || L
            }) : oe.from(L, L && L.code, A, we)
        }
    }
}
  , Zb = new Map
  , dm = i => {
    let l = i ? i.env : {};
    const {fetch: u, Request: s, Response: c} = l
      , f = [s, c, u];
    let d = f.length, m = d, p, g, v = Zb;
    for (; m--; )
        p = f[m],
        g = v.get(p),
        g === void 0 && v.set(p, g = m ? new Map : $b(l)),
        v = g;
    return g
}
;
dm();
const To = {
    http: fb,
    xhr: Yb,
    fetch: {
        get: dm
    }
};
U.forEach(To, (i, l) => {
    if (i) {
        try {
            Object.defineProperty(i, "name", {
                value: l
            })
        } catch {}
        Object.defineProperty(i, "adapterName", {
            value: l
        })
    }
}
);
const og = i => `- ${i}`
  , Jb = i => U.isFunction(i) || i === null || i === !1
  , hm = {
    getAdapter: (i, l) => {
        i = U.isArray(i) ? i : [i];
        const {length: u} = i;
        let s, c;
        const f = {};
        for (let d = 0; d < u; d++) {
            s = i[d];
            let m;
            if (c = s,
            !Jb(s) && (c = To[(m = String(s)).toLowerCase()],
            c === void 0))
                throw new oe(`Unknown adapter '${m}'`);
            if (c && (U.isFunction(c) || (c = c.get(l))))
                break;
            f[m || "#" + d] = c
        }
        if (!c) {
            const d = Object.entries(f).map( ([p,g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build"));
            let m = u ? d.length > 1 ? `since :
` + d.map(og).join(`
`) : " " + og(d[0]) : "as no adapter specified";
            throw new oe("There is no suitable adapter to dispatch the request " + m,"ERR_NOT_SUPPORT")
        }
        return c
    }
    ,
    adapters: To
};
function po(i) {
    if (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
        throw new Zn(null,i)
}
function cg(i) {
    return po(i),
    i.headers = ft.from(i.headers),
    i.data = mo.call(i, i.transformRequest),
    ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1),
    hm.getAdapter(i.adapter || ui.adapter, i)(i).then(function(s) {
        return po(i),
        s.data = mo.call(i, i.transformResponse, s),
        s.headers = ft.from(s.headers),
        s
    }, function(s) {
        return sm(s) || (po(i),
        s && s.response && (s.response.data = mo.call(i, i.transformResponse, s.response),
        s.response.headers = ft.from(s.response.headers))),
        Promise.reject(s)
    })
}
const gm = "1.12.2"
  , Vr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (i, l) => {
    Vr[i] = function(s) {
        return typeof s === i || "a" + (l < 1 ? "n " : " ") + i
    }
}
);
const fg = {};
Vr.transitional = function(l, u, s) {
    function c(f, d) {
        return "[Axios v" + gm + "] Transitional option '" + f + "'" + d + (s ? ". " + s : "")
    }
    return (f, d, m) => {
        if (l === !1)
            throw new oe(c(d, " has been removed" + (u ? " in " + u : "")),oe.ERR_DEPRECATED);
        return u && !fg[d] && (fg[d] = !0,
        console.warn(c(d, " has been deprecated since v" + u + " and will be removed in the near future"))),
        l ? l(f, d, m) : !0
    }
}
;
Vr.spelling = function(l) {
    return (u, s) => (console.warn(`${s} is likely a misspelling of ${l}`),
    !0)
}
;
function Fb(i, l, u) {
    if (typeof i != "object")
        throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(i);
    let c = s.length;
    for (; c-- > 0; ) {
        const f = s[c]
          , d = l[f];
        if (d) {
            const m = i[f]
              , p = m === void 0 || d(m, f, i);
            if (p !== !0)
                throw new oe("option " + f + " must be " + p,oe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (u !== !0)
            throw new oe("Unknown option " + f,oe.ERR_BAD_OPTION)
    }
}
const Dr = {
    assertOptions: Fb,
    validators: Vr
}
  , Vt = Dr.validators;
let en = class {
    constructor(l) {
        this.defaults = l || {},
        this.interceptors = {
            request: new Ih,
            response: new Ih
        }
    }
    async request(l, u) {
        try {
            return await this._request(l, u)
        } catch (s) {
            if (s instanceof Error) {
                let c = {};
                Error.captureStackTrace ? Error.captureStackTrace(c) : c = new Error;
                const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
                try {
                    s.stack ? f && !String(s.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + f) : s.stack = f
                } catch {}
            }
            throw s
        }
    }
    _request(l, u) {
        typeof l == "string" ? (u = u || {},
        u.url = l) : u = l || {},
        u = tn(this.defaults, u);
        const {transitional: s, paramsSerializer: c, headers: f} = u;
        s !== void 0 && Dr.assertOptions(s, {
            silentJSONParsing: Vt.transitional(Vt.boolean),
            forcedJSONParsing: Vt.transitional(Vt.boolean),
            clarifyTimeoutError: Vt.transitional(Vt.boolean)
        }, !1),
        c != null && (U.isFunction(c) ? u.paramsSerializer = {
            serialize: c
        } : Dr.assertOptions(c, {
            encode: Vt.function,
            serialize: Vt.function
        }, !0)),
        u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0),
        Dr.assertOptions(u, {
            baseUrl: Vt.spelling("baseURL"),
            withXsrfToken: Vt.spelling("withXSRFToken")
        }, !0),
        u.method = (u.method || this.defaults.method || "get").toLowerCase();
        let d = f && U.merge(f.common, f[u.method]);
        f && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], A => {
            delete f[A]
        }
        ),
        u.headers = ft.concat(d, f);
        const m = [];
        let p = !0;
        this.interceptors.request.forEach(function(z) {
            typeof z.runWhen == "function" && z.runWhen(u) === !1 || (p = p && z.synchronous,
            m.unshift(z.fulfilled, z.rejected))
        });
        const g = [];
        this.interceptors.response.forEach(function(z) {
            g.push(z.fulfilled, z.rejected)
        });
        let v, x = 0, N;
        if (!p) {
            const A = [cg.bind(this), void 0];
            for (A.unshift(...m),
            A.push(...g),
            N = A.length,
            v = Promise.resolve(u); x < N; )
                v = v.then(A[x++], A[x++]);
            return v
        }
        N = m.length;
        let B = u;
        for (; x < N; ) {
            const A = m[x++]
              , z = m[x++];
            try {
                B = A(B)
            } catch (M) {
                z.call(this, M);
                break
            }
        }
        try {
            v = cg.call(this, B)
        } catch (A) {
            return Promise.reject(A)
        }
        for (x = 0,
        N = g.length; x < N; )
            v = v.then(g[x++], g[x++]);
        return v
    }
    getUri(l) {
        l = tn(this.defaults, l);
        const u = cm(l.baseURL, l.url, l.allowAbsoluteUrls);
        return im(u, l.params, l.paramsSerializer)
    }
}
;
U.forEach(["delete", "get", "head", "options"], function(l) {
    en.prototype[l] = function(u, s) {
        return this.request(tn(s || {}, {
            method: l,
            url: u,
            data: (s || {}).data
        }))
    }
});
U.forEach(["post", "put", "patch"], function(l) {
    function u(s) {
        return function(f, d, m) {
            return this.request(tn(m || {}, {
                method: l,
                headers: s ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: f,
                data: d
            }))
        }
    }
    en.prototype[l] = u(),
    en.prototype[l + "Form"] = u(!0)
});
let Pb = class mm {
    constructor(l) {
        if (typeof l != "function")
            throw new TypeError("executor must be a function.");
        let u;
        this.promise = new Promise(function(f) {
            u = f
        }
        );
        const s = this;
        this.promise.then(c => {
            if (!s._listeners)
                return;
            let f = s._listeners.length;
            for (; f-- > 0; )
                s._listeners[f](c);
            s._listeners = null
        }
        ),
        this.promise.then = c => {
            let f;
            const d = new Promise(m => {
                s.subscribe(m),
                f = m
            }
            ).then(c);
            return d.cancel = function() {
                s.unsubscribe(f)
            }
            ,
            d
        }
        ,
        l(function(f, d, m) {
            s.reason || (s.reason = new Zn(f,d,m),
            u(s.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(l) {
        if (this.reason) {
            l(this.reason);
            return
        }
        this._listeners ? this._listeners.push(l) : this._listeners = [l]
    }
    unsubscribe(l) {
        if (!this._listeners)
            return;
        const u = this._listeners.indexOf(l);
        u !== -1 && this._listeners.splice(u, 1)
    }
    toAbortSignal() {
        const l = new AbortController
          , u = s => {
            l.abort(s)
        }
        ;
        return this.subscribe(u),
        l.signal.unsubscribe = () => this.unsubscribe(u),
        l.signal
    }
    static source() {
        let l;
        return {
            token: new mm(function(c) {
                l = c
            }
            ),
            cancel: l
        }
    }
}
;
function Wb(i) {
    return function(u) {
        return i.apply(null, u)
    }
}
function Ib(i) {
    return U.isObject(i) && i.isAxiosError === !0
}
const Oo = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Oo).forEach( ([i,l]) => {
    Oo[l] = i
}
);
function pm(i) {
    const l = new en(i)
      , u = $g(en.prototype.request, l);
    return U.extend(u, en.prototype, l, {
        allOwnKeys: !0
    }),
    U.extend(u, l, null, {
        allOwnKeys: !0
    }),
    u.create = function(c) {
        return pm(tn(i, c))
    }
    ,
    u
}
const ee = pm(ui);
ee.Axios = en;
ee.CanceledError = Zn;
ee.CancelToken = Pb;
ee.isCancel = sm;
ee.VERSION = gm;
ee.toFormData = Yr;
ee.AxiosError = oe;
ee.Cancel = ee.CanceledError;
ee.all = function(l) {
    return Promise.all(l)
}
;
ee.spread = Wb;
ee.isAxiosError = Ib;
ee.mergeConfig = tn;
ee.AxiosHeaders = ft;
ee.formToJSON = i => um(U.isHTMLForm(i) ? new FormData(i) : i);
ee.getAdapter = hm.getAdapter;
ee.HttpStatusCode = Oo;
ee.default = ee;
const {Axios: Kx, AxiosError: $x, CanceledError: Zx, isCancel: Jx, CancelToken: Fx, VERSION: Px, all: Wx, Cancel: Ix, isAxiosError: e1, spread: t1, toFormData: a1, AxiosHeaders: n1, HttpStatusCode: l1, formToJSON: i1, getAdapter: r1, mergeConfig: u1} = ee
  , Me = "https://api.raia.edu.vn/api"
  , ex = {
    getExamList: async (i={}) => {
        const l = new URLSearchParams;
        return i.page && l.append("page", i.page.toString()),
        i.limit && l.append("limit", i.limit.toString()),
        i.classId && l.append("classId", i.classId.toString()),
        i.courseId && l.append("courseId", i.courseId.toString()),
        i.status && l.append("status", i.status),
        i.search && l.append("search", i.search),
        i.examRoomType && l.append("examRoomType", i.examRoomType),
        (await ee.get(`${Me}/exam?${l.toString()}`)).data
    }
    ,
    getExamDetail: async i => (await ee.get(`${Me}/exam/${i}`)).data,
    createExam: async i => (await ee.post(`${Me}/exam`, i)).data,
    getTestSchedules: async () => (await ee.get("https://apiportal.rikkei.edu.vn/test-schedule", {
        headers: {
            Authorization: "Beare " + localStorage.getItem("auth_token")
        }
    })).data,
    getTestSchedulesCrack: async () => (await ee.get(`https://api.raia.edu.vn/api/auth/test-schedule?auth_token=${localStorage.getItem("auth_token")}`)).data,
    getStudentsByClass: async i => (await ee.get(`https://apiportal.rikkei.edu.vn/students/class/${i}`, {
        headers: {
            Authorization: "Beare " + localStorage.getItem("auth_token")
        }
    })).data,
    getStudentsByClassCrack: async i => (await ee.get(`https://api.raia.edu.vn/api/auth/students/class/${i}?auth_token=${localStorage.getItem("auth_token")}`)).data,
    addStudentsToExam: async i => (await ee.post(`${Me}/exam/add-students`, i)).data,
    getExamStudents: async i => {
        const l = new URLSearchParams;
        return l.append("examRoomId", i.examRoomId.toString()),
        i.page && l.append("page", i.page.toString()),
        i.limit && l.append("limit", i.limit.toString()),
        (await ee.get(`${Me}/exam/students?${l.toString()}`)).data
    }
    ,
    getStudentConnectionStatus: async i => (await ee.get(`${Me}/exam/student-connect?examId=${i}`)).data,
    getStudentViolations: async i => (await ee.get(`${Me}/exam/student-violations?examRoomId=${i}`)).data,
    getStudentViolationDetail: async (i, l) => (await ee.get(`${Me}/exam/student-violations-detail?examRoomId=${i}&studentId=${l}`)).data,
    updateExamTime: async i => (await ee.put(`${Me}/exam/update-exam-time`, i)).data,
    openExamRoom: async i => (await ee.put(`${Me}/exam/open-exam-room`, i)).data,
    getClassList: async () => (await ee.get("https://apiportal.rikkei.edu.vn/classes")).data,
    createExamRoom: async i => (await ee.post(`${Me}/exam`, i)).data,
    getAttendance: async i => (await ee.get(`${Me}/exam/attendance/${i}`)).data,
    getAcceptWifi: async () => (await ee.get(`${Me}/exam/accept-wifi`)).data,
    saveAttendanceToPortal: async i => (await ee.post(`${Me}/exam/save-in-portal/${i}`)).data,
    updateAttendance: async (i, l) => (await ee.put(`${Me}/exam/violate-attendances/${i}`, l)).data,
    getAttendanceSchedules: async i => (await ee.get(`${Me}/exam/attendance-schedules/${i}`)).data,
    createAttendanceSchedule: async i => (await ee.post(`${Me}/exam/attendance-schedules`, i)).data,
    updateAttendanceSchedule: async (i, l, u) => (await ee.put(`${Me}/exam/attendance-schedules/${i}/${l}`, u)).data,
    deleteAttendanceSchedule: async (i, l) => (await ee.delete(`${Me}/exam/attendance-schedules/${i}/${l}`)).data,
    getCoursesByClass: async i => (await ee.get(`https://apiportal.rikkei.edu.vn/courses/class/${i}`)).data,
    getCoursesByClassCrack: async i => (await ee.get(`https://api.raia.edu.vn/api/auth/courses/class/${i}?auth_token=${localStorage.getItem("auth_token")}`)).data,
    updateExamRoomCourse: async (i, l) => (await ee.put(`${Me}/exam/update-course/${i}`, l)).data,
    deleteExamRoomStudents: async i => (await ee.delete(`${Me}/exam/students/${i}`)).data,
    getVideoList: async (i, l) => (await ee.get(`${Me}/exam/videos/list`, {
        params: {
            studentId: i,
            examRoomId: l
        }
    })).data,
    getVideoStreamUrl: (i, l, u) => `${Me}/exam/videos/stream?studentId=${i}&examRoomId=${l}&fileName=${encodeURIComponent(u)}`
}
  , dg = "https://api.raia.edu.vn/api"
  , hg = {
    getAiDetectData: async () => (await ee.get(`${dg}/rikkei-education-app/find-ai-detect-data`)).data,
    addAiDetectData: async i => (await ee.post(`${dg}/rikkei-education-app/add-ai-detect-data`, i)).data
}
  , ym = _.createContext(void 0);
function tx({children: i}) {
    const [l,u] = _.useState(null)
      , [s,c] = _.useState(null)
      , [f,d] = _.useState(!0);
    _.useEffect( () => {
        (async () => {
            try {
                const x = localStorage.getItem("auth_token")
                  , N = localStorage.getItem("auth_user");
                if (x && N) {
                    c(x),
                    u(JSON.parse(N));
                    try {
                        await ex.getTestSchedulesCrack()
                    } catch (B) {
                        console.error("Token validation failed:", B),
                        localStorage.removeItem("auth_token"),
                        localStorage.removeItem("auth_user"),
                        c(null),
                        u(null)
                    }
                }
            } catch (x) {
                console.error("Error checking auth:", x),
                localStorage.removeItem("auth_token"),
                localStorage.removeItem("auth_user"),
                c(null),
                u(null)
            } finally {
                d(!1)
            }
        }
        )()
    }
    , []);
    const g = {
        user: l,
        token: s,
        isAuthenticated: !!s && !!l,
        isLoading: f,
        login: async (v, x) => {
            try {
                d(!0);
                const N = {
                    email: v,
                    password: x
                }
                  , A = await ee.post("https://api.raia.edu.vn/api/auth/qldt-login", {
                    ...N
                });
                if (console.log("response", A.data),
                A.data) {
                    const z = A.data;
                    try {
                        const V = z.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
                          , Z = atob(V)
                          , G = new Uint8Array(Z.length);
                        for (let ne = 0; ne < Z.length; ne++)
                            G[ne] = Z.charCodeAt(ne);
                        const P = new TextDecoder("utf-8").decode(G)
                          , $ = JSON.parse(P)
                          , fe = {
                            id: $.id.toString(),
                            username: $.email,
                            email: $.email,
                            name: $.name,
                            role: $.role?.[0]?.name || "USER"
                        };
                        return localStorage.setItem("auth_token", z),
                        localStorage.setItem("auth_user", JSON.stringify(fe)),
                        c(z),
                        u(fe),
                        !0
                    } catch (M) {
                        return console.error("Error decoding token:", M),
                        alert("Quản Lý Đào Tạo gặp vấn đề kết nối!"),
                        !1
                    }
                }
                return !1
            } catch (N) {
                return console.error("Login error:", N),
                alert("Quản Lý Đào Tạo gặp vấn đề kết nối!"),
                !1
            } finally {
                d(!1)
            }
        }
        ,
        logout: () => {
            localStorage.removeItem("auth_token"),
            localStorage.removeItem("auth_user"),
            c(null),
            u(null)
        }
    };
    return b.jsx(ym.Provider, {
        value: g,
        children: i
    })
}
function Bo() {
    const i = _.useContext(ym);
    if (i === void 0)
        throw new Error("useAuth must be used within an AuthProvider");
    return i
}
const vm = _.createContext(void 0);
function ax({children: i}) {
    const [l,u] = _.useState( () => {
        const f = localStorage.getItem("theme");
        return f || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }
    )
      , s = () => {
        const f = l === "light" ? "dark" : "light";
        u(f),
        localStorage.setItem("theme", f)
    }
    ;
    _.useEffect( () => {
        const f = document.documentElement;
        l === "dark" ? (f.classList.add("dark"),
        console.log("🌙 Dark mode activated")) : (f.classList.remove("dark"),
        console.log("☀️ Light mode activated")),
        console.log("Current theme:", l),
        console.log("Root classes:", f.className)
    }
    , [l]);
    const c = {
        theme: l,
        toggleTheme: s,
        isDark: l === "dark"
    };
    return b.jsx(vm.Provider, {
        value: c,
        children: i
    })
}
function qo() {
    const i = _.useContext(vm);
    if (i === void 0)
        throw new Error("useTheme must be used within a ThemeProvider");
    return i
}
function nx() {
    const [i,l] = _.useState("")
      , [u,s] = _.useState("")
      , [c,f] = _.useState("")
      , {login: d, isLoading: m} = Bo()
      , {isDark: p} = qo()
      , g = async v => {
        if (v.preventDefault(),
        f(""),
        !i.trim() || !u.trim()) {
            f("Vui lòng nhập đầy đủ thông tin");
            return
        }
        await d(i, u) || f("Email hoặc mật khẩu không chính xác")
    }
    ;
    return b.jsx("div", {
        className: `min-h-screen flex items-center justify-center px-4 ${p ? "bg-gray-900" : "bg-gray-50"}`,
        children: b.jsxs("div", {
            className: `max-w-md w-full space-y-8 p-8 rounded-lg shadow-lg ${p ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`,
            children: [b.jsxs("div", {
                className: "text-center",
                children: [b.jsx("h2", {
                    className: `text-3xl font-bold ${p ? "text-white" : "text-gray-900"}`,
                    children: "Đăng nhập"
                }), b.jsx("p", {
                    className: `mt-2 text-sm ${p ? "text-gray-400" : "text-gray-600"}`,
                    children: "Vui lòng đăng nhập để tiếp tục"
                })]
            }), b.jsxs("form", {
                className: "mt-8 space-y-6",
                onSubmit: g,
                children: [b.jsxs("div", {
                    className: "space-y-4",
                    children: [b.jsxs("div", {
                        children: [b.jsx("label", {
                            htmlFor: "email",
                            className: `block text-sm font-medium ${p ? "text-gray-300" : "text-gray-700"}`,
                            children: "Email"
                        }), b.jsx("input", {
                            id: "email",
                            name: "email",
                            type: "email",
                            required: !0,
                            value: i,
                            onChange: v => l(v.target.value),
                            className: `mt-1 appearance-none relative block w-full px-3 py-2 border rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${p ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                            placeholder: "Nhập email",
                            disabled: m
                        })]
                    }), b.jsxs("div", {
                        children: [b.jsx("label", {
                            htmlFor: "password",
                            className: `block text-sm font-medium ${p ? "text-gray-300" : "text-gray-700"}`,
                            children: "Mật khẩu"
                        }), b.jsx("input", {
                            id: "password",
                            name: "password",
                            type: "password",
                            required: !0,
                            value: u,
                            onChange: v => s(v.target.value),
                            className: `mt-1 appearance-none relative block w-full px-3 py-2 border rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${p ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                            placeholder: "Nhập mật khẩu",
                            disabled: m
                        })]
                    })]
                }), c && b.jsx("div", {
                    className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
                    children: b.jsx("span", {
                        className: "block sm:inline",
                        children: c
                    })
                }), b.jsx("div", {
                    children: b.jsx("button", {
                        type: "submit",
                        disabled: m,
                        className: `group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${m ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`,
                        children: m ? b.jsxs("div", {
                            className: "flex items-center",
                            children: [b.jsxs("svg", {
                                className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [b.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), b.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), "Đang đăng nhập..."]
                        }) : "Đăng nhập"
                    })
                })]
            }), b.jsx("div", {
                className: `text-center text-sm ${p ? "text-gray-400" : "text-gray-600"}`,
                children: b.jsx("p", {
                    children: "Nhập email và mật khẩu để đăng nhập"
                })
            })]
        })
    })
}
function lx({children: i}) {
    const {isAuthenticated: l, isLoading: u} = Bo();
    return u ? b.jsx(Mo, {}) : l ? b.jsx(b.Fragment, {
        children: i
    }) : b.jsx(nx, {})
}
function bm() {
    const {theme: i, toggleTheme: l, isDark: u} = qo();
    return b.jsx("button", {
        onClick: () => {
            console.log("Theme toggle clicked, current:", i),
            l()
        }
        ,
        className: `p-2 rounded-lg transition-all duration-300 hover:scale-110 ${u ? "bg-yellow-500 text-yellow-900 hover:bg-yellow-400" : "bg-gray-800 text-yellow-400 hover:bg-gray-700"}`,
        title: `Chuyển sang ${u ? "sáng" : "tối"} mode`,
        children: b.jsx("span", {
            className: "text-lg",
            children: u ? "☀️" : "🌙"
        })
    })
}
function ix() {
    const {user: i, logout: l} = Bo()
      , {isDark: u} = qo()
      , s = () => {
        window.confirm("Bạn có chắc chắn muốn đăng xuất?") && l()
    }
    ;
    return b.jsx("header", {
        className: `sticky top-0 z-50 border-b ${u ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`,
        children: b.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: b.jsxs("div", {
                className: "flex justify-between items-center h-16",
                children: [b.jsx("div", {
                    className: "flex items-center",
                    children: b.jsx("h1", {
                        className: `text-xl font-semibold ${u ? "text-white" : "text-gray-900"}`,
                        children: "RAIA QL v2"
                    })
                }), b.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [b.jsx(bm, {}), b.jsxs("div", {
                        className: `text-sm ${u ? "text-gray-300" : "text-gray-700"}`,
                        children: ["Xin chào, ", b.jsx("span", {
                            className: "font-medium",
                            children: i?.name || i?.username
                        })]
                    }), b.jsx("button", {
                        onClick: s,
                        className: `px-3 py-2 rounded-md text-sm font-medium transition-colors ${u ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}`,
                        children: "Đăng xuất"
                    })]
                })]
            })
        })
    })
}
function rx() {
    const i = Do()
      , [l,u] = _.useState([])
      , [s,c] = _.useState(!0)
      , [f,d] = _.useState("")
      , [m,p] = _.useState(1)
      , [g,v] = _.useState(10)
      , [x,N] = _.useState("")
      , [B,A] = _.useState("ALL")
      , [z,M] = _.useState("ALL")
      , [V,Z] = _.useState(!1)
      , [G,P] = _.useState({
        keyword: "",
        serverIp: ""
    })
      , [$,fe] = _.useState(!1)
      , ne = async () => {
        try {
            c(!0),
            d("");
            const C = await hg.getAiDetectData();
            let X = [];
            if (Array.isArray(C))
                X = C;
            else if (C && Array.isArray(C.data))
                X = C.data;
            else if (C && typeof C == "object") {
                const I = Object.values(C).filter(Array.isArray);
                I.length > 0 && (X = I[0])
            }
            console.log("API Response:", C),
            console.log("Processed data:", X),
            u(X)
        } catch (C) {
            console.error("Error fetching AI detect data:", C),
            d("Lỗi khi tải dữ liệu AI detect")
        } finally {
            c(!1)
        }
    }
      , ie = l.filter(C => {
        const X = x === "" || C.keyword.toLowerCase().includes(x.toLowerCase()) || C.serverIp && C.serverIp.toLowerCase().includes(x.toLowerCase())
          , I = B === "ALL" || C.aiDetectDataType === B
          , E = z === "ALL" || z === "ACTIVE" && C.status || z === "INACTIVE" && !C.status;
        return X && I && E
    }
    )
      , ue = Math.ceil(ie.length / g)
      , be = (m - 1) * g
      , Ye = be + g
      , Ae = ie.slice(be, Ye);
    _.useEffect( () => {
        p(1)
    }
    , [x, B, z]);
    const we = C => new Date(C).toLocaleString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
      , Se = C => b.jsx("span", {
        className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${C ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"}`,
        children: C ? "✅ Active" : "❌ Inactive"
    })
      , je = C => {
        if (!C)
            return b.jsx("span", {
                className: "inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400",
                children: "📋 N/A"
            });
        const I = {
            EXAM: {
                color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
                text: "📝 Thi + Học",
                icon: "📝",
                description: "Áp dụng cho lúc thi"
            },
            CLASS: {
                color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
                text: "🏫 Học",
                icon: "🏫",
                description: "Chỉ áp dụng cho lúc học"
            }
        }[C] || {
            color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
            text: C,
            icon: "📋",
            description: "Loại không xác định"
        };
        return b.jsxs("div", {
            className: "flex flex-col items-start",
            children: [b.jsxs("span", {
                className: `inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${I.color} mb-1`,
                children: [I.icon, " ", I.text]
            }), b.jsx("span", {
                className: "text-xs text-gray-500 dark:text-gray-400 italic",
                children: I.description
            })]
        })
    }
      , L = async () => {
        if (!G.keyword.trim()) {
            alert("Vui lòng nhập keyword!");
            return
        }
        try {
            fe(!0);
            const C = {
                keyword: G.keyword.trim(),
                ...G.serverIp?.trim() && {
                    serverIp: G.serverIp.trim()
                }
            };
            await hg.addAiDetectData(C),
            P({
                keyword: "",
                serverIp: ""
            }),
            Z(!1),
            ne(),
            alert("Thêm dữ liệu thành công!")
        } catch (C) {
            console.error("Error adding AI detect data:", C),
            alert("Lỗi khi thêm dữ liệu!")
        } finally {
            fe(!1)
        }
    }
    ;
    return _.useEffect( () => {
        ne()
    }
    , []),
    b.jsx("div", {
        className: "min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",
        children: b.jsxs("div", {
            className: "container mx-auto px-4 py-8",
            children: [b.jsx("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6",
                children: b.jsxs("div", {
                    className: "flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4",
                    children: [b.jsxs("div", {
                        className: "flex-1",
                        children: [b.jsx("h1", {
                            className: "text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2",
                            children: "🤖 AI Detect Data"
                        }), b.jsx("p", {
                            className: "text-gray-600 dark:text-gray-400 text-sm lg:text-base mb-3",
                            children: "Danh sách dữ liệu phát hiện AI từ hệ thống"
                        }), b.jsxs("div", {
                            className: "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4",
                            children: [b.jsx("h3", {
                                className: "text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2",
                                children: "📋 Loại dữ liệu AI Detect:"
                            }), b.jsxs("div", {
                                className: "space-y-2 text-sm text-blue-700 dark:text-blue-300",
                                children: [b.jsxs("div", {
                                    className: "flex items-start gap-2",
                                    children: [b.jsx("span", {
                                        className: "text-blue-600 dark:text-blue-400 font-medium",
                                        children: "📝 EXAM + CLASS:"
                                    }), b.jsx("span", {
                                        children: "Áp dụng cho lúc thi - Phát hiện AI trong cả kỳ thi và phòng học"
                                    })]
                                }), b.jsxs("div", {
                                    className: "flex items-start gap-2",
                                    children: [b.jsx("span", {
                                        className: "text-green-600 dark:text-green-400 font-medium",
                                        children: "🏫 CLASS:"
                                    }), b.jsx("span", {
                                        children: "Chỉ áp dụng cho lúc học - Phát hiện AI trong phòng học thường"
                                    })]
                                })]
                            })]
                        })]
                    }), b.jsxs("div", {
                        className: "flex flex-wrap items-center gap-2 lg:gap-3",
                        children: [b.jsxs("button", {
                            onClick: () => i("/"),
                            className: "px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium bg-purple-600 dark:bg-purple-700 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors",
                            children: [b.jsx("span", {
                                className: "lg:hidden",
                                children: "🏫"
                            }), b.jsx("span", {
                                className: "hidden lg:inline",
                                children: "🏫 Phòng thi"
                            })]
                        }), b.jsx(bm, {}), b.jsxs("button", {
                            onClick: () => Z(!0),
                            className: "px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium bg-green-600 dark:bg-green-700 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-colors",
                            children: [b.jsx("span", {
                                className: "lg:hidden",
                                children: "➕"
                            }), b.jsx("span", {
                                className: "hidden lg:inline",
                                children: "➕ Thêm mới"
                            })]
                        }), b.jsxs("button", {
                            onClick: ne,
                            disabled: s,
                            className: `px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium rounded-md transition-colors ${s ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed" : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"}`,
                            children: [b.jsx("span", {
                                className: "lg:hidden",
                                children: "🔄"
                            }), b.jsx("span", {
                                className: "hidden lg:inline",
                                children: s ? "🔄 Loading..." : "🔄 Refresh"
                            })]
                        })]
                    })]
                })
            }), !s && !f && b.jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6",
                children: [b.jsx("h3", {
                    className: "text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4",
                    children: "📊 Thống Kê"
                }), b.jsxs("div", {
                    className: "grid grid-cols-2 md:grid-cols-6 gap-4",
                    children: [b.jsxs("div", {
                        className: "bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 rounded-lg p-4 text-center",
                        children: [b.jsx("div", {
                            className: "text-2xl font-bold text-blue-600 dark:text-blue-400",
                            children: ie.length
                        }), b.jsx("div", {
                            className: "text-sm text-blue-700 dark:text-blue-300",
                            children: "Kết quả"
                        }), b.jsxs("div", {
                            className: "text-xs text-blue-600 dark:text-blue-400 mt-1",
                            children: ["/ ", l.length, " tổng"]
                        })]
                    }), b.jsxs("div", {
                        className: "bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-700 rounded-lg p-4 text-center",
                        children: [b.jsx("div", {
                            className: "text-2xl font-bold text-green-600 dark:text-green-400",
                            children: Array.isArray(ie) ? ie.filter(C => C.status).length : 0
                        }), b.jsx("div", {
                            className: "text-sm text-green-700 dark:text-green-300",
                            children: "Active"
                        })]
                    }), b.jsxs("div", {
                        className: "bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-700 rounded-lg p-4 text-center",
                        children: [b.jsx("div", {
                            className: "text-2xl font-bold text-red-600 dark:text-red-400",
                            children: Array.isArray(ie) ? ie.filter(C => !C.status).length : 0
                        }), b.jsx("div", {
                            className: "text-sm text-red-700 dark:text-red-300",
                            children: "Inactive"
                        })]
                    }), b.jsxs("div", {
                        className: "bg-purple-50 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700 rounded-lg p-4 text-center",
                        children: [b.jsx("div", {
                            className: "text-2xl font-bold text-purple-600 dark:text-purple-400",
                            children: Array.isArray(ie) ? new Set(ie.map(C => C.keyword)).size : 0
                        }), b.jsx("div", {
                            className: "text-sm text-purple-700 dark:text-purple-300",
                            children: "Keywords"
                        })]
                    }), b.jsxs("div", {
                        className: "bg-orange-50 dark:bg-orange-900/50 border border-orange-200 dark:border-orange-700 rounded-lg p-4 text-center",
                        children: [b.jsx("div", {
                            className: "text-2xl font-bold text-orange-600 dark:text-orange-400",
                            children: Array.isArray(ie) ? ie.filter(C => C.aiDetectDataType === "EXAM").length : 0
                        }), b.jsx("div", {
                            className: "text-sm text-orange-700 dark:text-orange-300",
                            children: "📝 Thi + Học"
                        }), b.jsx("div", {
                            className: "text-xs text-orange-600 dark:text-orange-400 mt-1",
                            children: "Áp dụng cho lúc thi"
                        })]
                    }), b.jsxs("div", {
                        className: "bg-cyan-50 dark:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-700 rounded-lg p-4 text-center",
                        children: [b.jsx("div", {
                            className: "text-2xl font-bold text-cyan-600 dark:text-cyan-400",
                            children: Array.isArray(ie) ? ie.filter(C => C.aiDetectDataType === "CLASS").length : 0
                        }), b.jsx("div", {
                            className: "text-sm text-cyan-700 dark:text-cyan-300",
                            children: "🏫 Học"
                        }), b.jsx("div", {
                            className: "text-xs text-cyan-600 dark:text-cyan-400 mt-1",
                            children: "Chỉ áp dụng cho lúc học"
                        })]
                    })]
                })]
            }), !s && !f && b.jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6",
                children: [b.jsx("h3", {
                    className: "text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4",
                    children: "🔍 Tìm kiếm & Lọc"
                }), b.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                    children: [b.jsxs("div", {
                        children: [b.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                            children: "🔍 Tìm kiếm"
                        }), b.jsx("input", {
                            type: "text",
                            value: x,
                            onChange: C => N(C.target.value),
                            placeholder: "Tìm theo keyword hoặc server IP...",
                            className: "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        })]
                    }), b.jsxs("div", {
                        children: [b.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                            children: "📋 Loại"
                        }), b.jsxs("select", {
                            value: B,
                            onChange: C => A(C.target.value),
                            className: "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [b.jsx("option", {
                                value: "ALL",
                                children: "Tất cả loại"
                            }), b.jsx("option", {
                                value: "EXAM",
                                children: "📝 Thi + Học"
                            }), b.jsx("option", {
                                value: "CLASS",
                                children: "🏫 Học"
                            })]
                        })]
                    }), b.jsxs("div", {
                        children: [b.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                            children: "⚡ Trạng thái"
                        }), b.jsxs("select", {
                            value: z,
                            onChange: C => M(C.target.value),
                            className: "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [b.jsx("option", {
                                value: "ALL",
                                children: "Tất cả trạng thái"
                            }), b.jsx("option", {
                                value: "ACTIVE",
                                children: "✅ Active"
                            }), b.jsx("option", {
                                value: "INACTIVE",
                                children: "❌ Inactive"
                            })]
                        })]
                    }), b.jsxs("div", {
                        children: [b.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                            children: "📄 Số bản ghi/trang"
                        }), b.jsxs("select", {
                            value: g,
                            onChange: C => v(Number(C.target.value)),
                            className: "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [b.jsx("option", {
                                value: 5,
                                children: "5 bản ghi"
                            }), b.jsx("option", {
                                value: 10,
                                children: "10 bản ghi"
                            }), b.jsx("option", {
                                value: 20,
                                children: "20 bản ghi"
                            }), b.jsx("option", {
                                value: 50,
                                children: "50 bản ghi"
                            })]
                        })]
                    })]
                }), (x || B !== "ALL" || z !== "ALL") && b.jsx("div", {
                    className: "mt-4 flex justify-end",
                    children: b.jsx("button", {
                        onClick: () => {
                            N(""),
                            A("ALL"),
                            M("ALL")
                        }
                        ,
                        className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors",
                        children: "🗑️ Xóa bộ lọc"
                    })
                })]
            }), b.jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700",
                children: [b.jsx("div", {
                    className: "p-6 border-b border-gray-200 dark:border-gray-700",
                    children: b.jsx("div", {
                        className: "flex justify-between items-center",
                        children: b.jsxs("div", {
                            children: [b.jsx("h3", {
                                className: "text-lg font-semibold text-gray-900 dark:text-gray-100",
                                children: "🗂️ Danh Sách AI Detect Data"
                            }), b.jsx("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                children: f ? "Có lỗi xảy ra" : `Hiển thị ${Ae.length} / ${ie.length} bản ghi (tổng ${l.length})`
                            })]
                        })
                    })
                }), b.jsx("div", {
                    className: "overflow-x-auto",
                    children: s ? b.jsx("div", {
                        className: "px-6 py-12 text-center text-gray-500 dark:text-gray-400",
                        children: b.jsxs("div", {
                            className: "flex items-center justify-center",
                            children: [b.jsx("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                            }), b.jsx("span", {
                                className: "ml-2",
                                children: "Đang tải dữ liệu..."
                            })]
                        })
                    }) : f ? b.jsxs("div", {
                        className: "px-6 py-12 text-center",
                        children: [b.jsxs("div", {
                            className: "text-red-500 dark:text-red-400 mb-4",
                            children: [b.jsx("div", {
                                className: "text-4xl mb-2",
                                children: "❌"
                            }), b.jsx("p", {
                                className: "text-lg font-medium",
                                children: f
                            })]
                        }), b.jsx("button", {
                            onClick: ne,
                            className: "px-4 py-2 text-sm font-medium bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors",
                            children: "🔄 Thử lại"
                        })]
                    }) : Array.isArray(Ae) && Ae.length > 0 ? b.jsxs("table", {
                        className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                        children: [b.jsx("thead", {
                            className: "bg-gray-50 dark:bg-gray-700",
                            children: b.jsxs("tr", {
                                children: [b.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                    children: "ID"
                                }), b.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                    children: "Keyword"
                                }), b.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                    children: "Server IP"
                                }), b.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                    children: "Status"
                                }), b.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                    children: "Type"
                                }), b.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                    children: "Created At"
                                }), b.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",
                                    children: "Updated At"
                                })]
                            })
                        }), b.jsx("tbody", {
                            className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",
                            children: Ae.map(C => b.jsxs("tr", {
                                className: "hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                                children: [b.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: b.jsxs("div", {
                                        className: "text-sm font-medium text-gray-900 dark:text-gray-100",
                                        children: ["#", C.id]
                                    })
                                }), b.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: b.jsx("div", {
                                        className: "text-sm text-gray-900 dark:text-gray-100 font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",
                                        children: C.keyword
                                    })
                                }), b.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: b.jsx("div", {
                                        className: "text-sm text-gray-900 dark:text-gray-100",
                                        children: C.serverIp ? b.jsx("span", {
                                            className: "font-mono bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded",
                                            children: C.serverIp
                                        }) : b.jsx("span", {
                                            className: "text-gray-500 dark:text-gray-400 italic",
                                            children: "N/A"
                                        })
                                    })
                                }), b.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: Se(C.status)
                                }), b.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: je(C.aiDetectDataType)
                                }), b.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: b.jsx("div", {
                                        className: "text-sm text-gray-900 dark:text-gray-100",
                                        children: we(C.createdAt)
                                    })
                                }), b.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: b.jsx("div", {
                                        className: "text-sm text-gray-900 dark:text-gray-100",
                                        children: we(C.updatedAt)
                                    })
                                })]
                            }, C.id))
                        })]
                    }) : b.jsxs("div", {
                        className: "px-6 py-12 text-center text-gray-500 dark:text-gray-400",
                        children: [b.jsx("div", {
                            className: "text-4xl mb-4",
                            children: "📭"
                        }), b.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 dark:text-gray-100 mb-2",
                            children: ie.length === 0 ? "Không có dữ liệu phù hợp" : "Không có dữ liệu"
                        }), b.jsx("p", {
                            className: "text-gray-600 dark:text-gray-400",
                            children: ie.length === 0 ? "Không tìm thấy dữ liệu nào phù hợp với bộ lọc hiện tại" : "Chưa có dữ liệu AI detect nào được tìm thấy"
                        }), ie.length === 0 && (x || B !== "ALL" || z !== "ALL") && b.jsx("button", {
                            onClick: () => {
                                N(""),
                                A("ALL"),
                                M("ALL")
                            }
                            ,
                            className: "mt-4 px-4 py-2 text-sm font-medium bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors",
                            children: "🗑️ Xóa bộ lọc"
                        })]
                    })
                }), !s && !f && ie.length > 0 && ue > 1 && b.jsx("div", {
                    className: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700",
                    children: b.jsxs("div", {
                        className: "flex flex-col sm:flex-row justify-between items-center gap-4",
                        children: [b.jsxs("div", {
                            className: "text-sm text-gray-700 dark:text-gray-300",
                            children: ["Hiển thị ", b.jsx("span", {
                                className: "font-medium",
                                children: be + 1
                            }), " đến", " ", b.jsx("span", {
                                className: "font-medium",
                                children: Math.min(Ye, ie.length)
                            }), " trong", " ", b.jsx("span", {
                                className: "font-medium",
                                children: ie.length
                            }), " kết quả"]
                        }), b.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [b.jsx("button", {
                                onClick: () => p(C => Math.max(C - 1, 1)),
                                disabled: m === 1,
                                className: `px-3 py-2 text-sm font-medium rounded-md transition-colors ${m === 1 ? "bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed" : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500"}`,
                                children: "← Trước"
                            }), b.jsx("div", {
                                className: "flex items-center space-x-1",
                                children: Array.from({
                                    length: Math.min(5, ue)
                                }, (C, X) => {
                                    let I;
                                    return ue <= 5 || m <= 3 ? I = X + 1 : m >= ue - 2 ? I = ue - 4 + X : I = m - 2 + X,
                                    b.jsx("button", {
                                        onClick: () => p(I),
                                        className: `px-3 py-2 text-sm font-medium rounded-md transition-colors ${m === I ? "bg-blue-600 dark:bg-blue-700 text-white" : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500"}`,
                                        children: I
                                    }, I)
                                }
                                )
                            }), b.jsx("button", {
                                onClick: () => p(C => Math.min(C + 1, ue)),
                                disabled: m === ue,
                                className: `px-3 py-2 text-sm font-medium rounded-md transition-colors ${m === ue ? "bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed" : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500"}`,
                                children: "Sau →"
                            })]
                        })]
                    })
                })]
            }), V && b.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: b.jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4",
                    children: [b.jsxs("div", {
                        className: "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
                        children: [b.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [b.jsx("h3", {
                                className: "text-lg font-semibold text-gray-900 dark:text-gray-100",
                                children: "➕ Thêm AI Detect Data"
                            }), b.jsx("button", {
                                onClick: () => Z(!1),
                                className: "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300",
                                children: b.jsx("span", {
                                    className: "text-2xl",
                                    children: "×"
                                })
                            })]
                        }), b.jsx("p", {
                            className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                            children: "Thêm dữ liệu phát hiện AI mới vào hệ thống"
                        })]
                    }), b.jsx("div", {
                        className: "px-6 py-4",
                        children: b.jsxs("div", {
                            className: "space-y-4",
                            children: [b.jsxs("div", {
                                children: [b.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                    children: "Keyword *"
                                }), b.jsx("input", {
                                    type: "text",
                                    value: G.keyword,
                                    onChange: C => P(X => ({
                                        ...X,
                                        keyword: C.target.value
                                    })),
                                    placeholder: "Nhập keyword để phát hiện AI...",
                                    className: "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                })]
                            }), b.jsxs("div", {
                                children: [b.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                    children: "Server IP (tùy chọn)"
                                }), b.jsx("input", {
                                    type: "text",
                                    value: G.serverIp,
                                    onChange: C => P(X => ({
                                        ...X,
                                        serverIp: C.target.value
                                    })),
                                    placeholder: "Nhập server IP (nếu có)...",
                                    className: "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                })]
                            })]
                        })
                    }), b.jsx("div", {
                        className: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700",
                        children: b.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [b.jsx("div", {
                                className: "text-sm text-gray-600 dark:text-gray-400",
                                children: G.keyword.trim() ? b.jsx("span", {
                                    className: "text-green-600 dark:text-green-400",
                                    children: "✅ Keyword đã nhập"
                                }) : b.jsx("span", {
                                    className: "text-gray-500",
                                    children: "👆 Vui lòng nhập keyword"
                                })
                            }), b.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [b.jsx("button", {
                                    onClick: () => Z(!1),
                                    className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors",
                                    children: "❌ Hủy"
                                }), b.jsx("button", {
                                    onClick: L,
                                    disabled: !G.keyword.trim() || $,
                                    className: `px-4 py-2 text-sm font-medium rounded-md transition-colors ${!G.keyword.trim() || $ ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed" : "bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-600"}`,
                                    children: $ ? "🔄 Đang thêm..." : "✅ Thêm dữ liệu"
                                })]
                            })]
                        })
                    })]
                })
            })]
        })
    })
}
const yo = _.lazy( () => Cg( () => import("./ExamRoomManager-BnKDCRSP.js"), []))
  , ux = _.lazy( () => Cg( () => import("./RikkeiEducationStream-Dr5EDVaD.js"), []));
function sx({children: i}) {
    const [l,u] = _.useState(!0)
      , [s,c] = _.useState(!1);
    return _.useEffect( () => {
        c(!0)
    }
    , []),
    _.useEffect( () => {
        if (s) {
            const f = setTimeout( () => {
                u(!1)
            }
            , 1e3);
            return () => clearTimeout(f)
        }
    }
    , [s]),
    l ? b.jsx(Mo, {}) : b.jsx(b.Fragment, {
        children: i
    })
}
function ox() {
    return b.jsx(lx, {
        children: b.jsxs("div", {
            className: "min-h-screen",
            children: [b.jsx(ix, {}), b.jsx("main", {
                children: b.jsx(sx, {
                    children: b.jsx(_.Suspense, {
                        fallback: b.jsx(Mo, {}),
                        children: b.jsxs(Ky, {
                            children: [b.jsx(Xn, {
                                path: "/",
                                element: b.jsx(yo, {})
                            }), b.jsx(Xn, {
                                path: "/exam/:examId",
                                element: b.jsx(yo, {})
                            }), b.jsx(Xn, {
                                path: "/exam/:examId/:examName",
                                element: b.jsx(yo, {})
                            }), b.jsx(Xn, {
                                path: "/stream",
                                element: b.jsx(ux, {})
                            }), b.jsx(Xn, {
                                path: "/data",
                                element: b.jsx(rx, {})
                            })]
                        })
                    })
                })
            })]
        })
    })
}
function cx() {
    return b.jsx(ax, {
        children: b.jsx(tx, {
            children: b.jsx(ox, {})
        })
    })
}
const re = i => typeof i == "string"
  , Fl = () => {
    let i, l;
    const u = new Promise( (s, c) => {
        i = s,
        l = c
    }
    );
    return u.resolve = i,
    u.reject = l,
    u
}
  , gg = i => i == null ? "" : "" + i
  , fx = (i, l, u) => {
    i.forEach(s => {
        l[s] && (u[s] = l[s])
    }
    )
}
  , dx = /###/g
  , mg = i => i && i.indexOf("###") > -1 ? i.replace(dx, ".") : i
  , pg = i => !i || re(i)
  , Pl = (i, l, u) => {
    const s = re(l) ? l.split(".") : l;
    let c = 0;
    for (; c < s.length - 1; ) {
        if (pg(i))
            return {};
        const f = mg(s[c]);
        !i[f] && u && (i[f] = new u),
        Object.prototype.hasOwnProperty.call(i, f) ? i = i[f] : i = {},
        ++c
    }
    return pg(i) ? {} : {
        obj: i,
        k: mg(s[c])
    }
}
  , yg = (i, l, u) => {
    const {obj: s, k: c} = Pl(i, l, Object);
    if (s !== void 0 || l.length === 1) {
        s[c] = u;
        return
    }
    let f = l[l.length - 1]
      , d = l.slice(0, l.length - 1)
      , m = Pl(i, d, Object);
    for (; m.obj === void 0 && d.length; )
        f = `${d[d.length - 1]}.${f}`,
        d = d.slice(0, d.length - 1),
        m = Pl(i, d, Object),
        m?.obj && typeof m.obj[`${m.k}.${f}`] < "u" && (m.obj = void 0);
    m.obj[`${m.k}.${f}`] = u
}
  , hx = (i, l, u, s) => {
    const {obj: c, k: f} = Pl(i, l, Object);
    c[f] = c[f] || [],
    c[f].push(u)
}
  , Lr = (i, l) => {
    const {obj: u, k: s} = Pl(i, l);
    if (u && Object.prototype.hasOwnProperty.call(u, s))
        return u[s]
}
  , gx = (i, l, u) => {
    const s = Lr(i, u);
    return s !== void 0 ? s : Lr(l, u)
}
  , xm = (i, l, u) => {
    for (const s in l)
        s !== "__proto__" && s !== "constructor" && (s in i ? re(i[s]) || i[s]instanceof String || re(l[s]) || l[s]instanceof String ? u && (i[s] = l[s]) : xm(i[s], l[s], u) : i[s] = l[s]);
    return i
}
  , Vn = i => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var mx = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const px = i => re(i) ? i.replace(/[&<>"'\/]/g, l => mx[l]) : i;
class yx {
    constructor(l) {
        this.capacity = l,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(l) {
        const u = this.regExpMap.get(l);
        if (u !== void 0)
            return u;
        const s = new RegExp(l);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(l, s),
        this.regExpQueue.push(l),
        s
    }
}
const vx = [" ", ",", "?", "!", ";"]
  , bx = new yx(20)
  , xx = (i, l, u) => {
    l = l || "",
    u = u || "";
    const s = vx.filter(d => l.indexOf(d) < 0 && u.indexOf(d) < 0);
    if (s.length === 0)
        return !0;
    const c = bx.getRegExp(`(${s.map(d => d === "?" ? "\\?" : d).join("|")})`);
    let f = !c.test(i);
    if (!f) {
        const d = i.indexOf(u);
        d > 0 && !c.test(i.substring(0, d)) && (f = !0)
    }
    return f
}
  , No = (i, l, u=".") => {
    if (!i)
        return;
    if (i[l])
        return Object.prototype.hasOwnProperty.call(i, l) ? i[l] : void 0;
    const s = l.split(u);
    let c = i;
    for (let f = 0; f < s.length; ) {
        if (!c || typeof c != "object")
            return;
        let d, m = "";
        for (let p = f; p < s.length; ++p)
            if (p !== f && (m += u),
            m += s[p],
            d = c[m],
            d !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof d) > -1 && p < s.length - 1)
                    continue;
                f += p - f + 1;
                break
            }
        c = d
    }
    return c
}
  , Il = i => i?.replace("_", "-")
  , Sx = {
    type: "logger",
    log(i) {
        this.output("log", i)
    },
    warn(i) {
        this.output("warn", i)
    },
    error(i) {
        this.output("error", i)
    },
    output(i, l) {
        console?.[i]?.apply?.(console, l)
    }
};
class Ur {
    constructor(l, u={}) {
        this.init(l, u)
    }
    init(l, u={}) {
        this.prefix = u.prefix || "i18next:",
        this.logger = l || Sx,
        this.options = u,
        this.debug = u.debug
    }
    log(...l) {
        return this.forward(l, "log", "", !0)
    }
    warn(...l) {
        return this.forward(l, "warn", "", !0)
    }
    error(...l) {
        return this.forward(l, "error", "")
    }
    deprecate(...l) {
        return this.forward(l, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(l, u, s, c) {
        return c && !this.debug ? null : (re(l[0]) && (l[0] = `${s}${this.prefix} ${l[0]}`),
        this.logger[u](l))
    }
    create(l) {
        return new Ur(this.logger,{
            prefix: `${this.prefix}:${l}:`,
            ...this.options
        })
    }
    clone(l) {
        return l = l || this.options,
        l.prefix = l.prefix || this.prefix,
        new Ur(this.logger,l)
    }
}
var Xt = new Ur;
class Xr {
    constructor() {
        this.observers = {}
    }
    on(l, u) {
        return l.split(" ").forEach(s => {
            this.observers[s] || (this.observers[s] = new Map);
            const c = this.observers[s].get(u) || 0;
            this.observers[s].set(u, c + 1)
        }
        ),
        this
    }
    off(l, u) {
        if (this.observers[l]) {
            if (!u) {
                delete this.observers[l];
                return
            }
            this.observers[l].delete(u)
        }
    }
    emit(l, ...u) {
        this.observers[l] && Array.from(this.observers[l].entries()).forEach( ([c,f]) => {
            for (let d = 0; d < f; d++)
                c(...u)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach( ([c,f]) => {
            for (let d = 0; d < f; d++)
                c.apply(c, [l, ...u])
        }
        )
    }
}
class vg extends Xr {
    constructor(l, u={
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(),
        this.data = l || {},
        this.options = u,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(l) {
        this.options.ns.indexOf(l) < 0 && this.options.ns.push(l)
    }
    removeNamespaces(l) {
        const u = this.options.ns.indexOf(l);
        u > -1 && this.options.ns.splice(u, 1)
    }
    getResource(l, u, s, c={}) {
        const f = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator
          , d = c.ignoreJSONStructure !== void 0 ? c.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let m;
        l.indexOf(".") > -1 ? m = l.split(".") : (m = [l, u],
        s && (Array.isArray(s) ? m.push(...s) : re(s) && f ? m.push(...s.split(f)) : m.push(s)));
        const p = Lr(this.data, m);
        return !p && !u && !s && l.indexOf(".") > -1 && (l = m[0],
        u = m[1],
        s = m.slice(2).join(".")),
        p || !d || !re(s) ? p : No(this.data?.[l]?.[u], s, f)
    }
    addResource(l, u, s, c, f={
        silent: !1
    }) {
        const d = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
        let m = [l, u];
        s && (m = m.concat(d ? s.split(d) : s)),
        l.indexOf(".") > -1 && (m = l.split("."),
        c = u,
        u = m[1]),
        this.addNamespaces(u),
        yg(this.data, m, c),
        f.silent || this.emit("added", l, u, s, c)
    }
    addResources(l, u, s, c={
        silent: !1
    }) {
        for (const f in s)
            (re(s[f]) || Array.isArray(s[f])) && this.addResource(l, u, f, s[f], {
                silent: !0
            });
        c.silent || this.emit("added", l, u, s)
    }
    addResourceBundle(l, u, s, c, f, d={
        silent: !1,
        skipCopy: !1
    }) {
        let m = [l, u];
        l.indexOf(".") > -1 && (m = l.split("."),
        c = s,
        s = u,
        u = m[1]),
        this.addNamespaces(u);
        let p = Lr(this.data, m) || {};
        d.skipCopy || (s = JSON.parse(JSON.stringify(s))),
        c ? xm(p, s, f) : p = {
            ...p,
            ...s
        },
        yg(this.data, m, p),
        d.silent || this.emit("added", l, u, s)
    }
    removeResourceBundle(l, u) {
        this.hasResourceBundle(l, u) && delete this.data[l][u],
        this.removeNamespaces(u),
        this.emit("removed", l, u)
    }
    hasResourceBundle(l, u) {
        return this.getResource(l, u) !== void 0
    }
    getResourceBundle(l, u) {
        return u || (u = this.options.defaultNS),
        this.getResource(l, u)
    }
    getDataByLanguage(l) {
        return this.data[l]
    }
    hasLanguageSomeTranslations(l) {
        const u = this.getDataByLanguage(l);
        return !!(u && Object.keys(u) || []).find(c => u[c] && Object.keys(u[c]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var Sm = {
    processors: {},
    addPostProcessor(i) {
        this.processors[i.name] = i
    },
    handle(i, l, u, s, c) {
        return i.forEach(f => {
            l = this.processors[f]?.process(l, u, s, c) ?? l
        }
        ),
        l
    }
};
const bg = {}
  , xg = i => !re(i) && typeof i != "boolean" && typeof i != "number";
class Mr extends Xr {
    constructor(l, u={}) {
        super(),
        fx(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], l, this),
        this.options = u,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = Xt.create("translator")
    }
    changeLanguage(l) {
        l && (this.language = l)
    }
    exists(l, u={
        interpolation: {}
    }) {
        const s = {
            ...u
        };
        return l == null ? !1 : this.resolve(l, s)?.res !== void 0
    }
    extractFromKey(l, u) {
        let s = u.nsSeparator !== void 0 ? u.nsSeparator : this.options.nsSeparator;
        s === void 0 && (s = ":");
        const c = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
        let f = u.ns || this.options.defaultNS || [];
        const d = s && l.indexOf(s) > -1
          , m = !this.options.userDefinedKeySeparator && !u.keySeparator && !this.options.userDefinedNsSeparator && !u.nsSeparator && !xx(l, s, c);
        if (d && !m) {
            const p = l.match(this.interpolator.nestingRegexp);
            if (p && p.length > 0)
                return {
                    key: l,
                    namespaces: re(f) ? [f] : f
                };
            const g = l.split(s);
            (s !== c || s === c && this.options.ns.indexOf(g[0]) > -1) && (f = g.shift()),
            l = g.join(c)
        }
        return {
            key: l,
            namespaces: re(f) ? [f] : f
        }
    }
    translate(l, u, s) {
        let c = typeof u == "object" ? {
            ...u
        } : u;
        if (typeof c != "object" && this.options.overloadTranslationOptionHandler && (c = this.options.overloadTranslationOptionHandler(arguments)),
        typeof options == "object" && (c = {
            ...c
        }),
        c || (c = {}),
        l == null)
            return "";
        Array.isArray(l) || (l = [String(l)]);
        const f = c.returnDetails !== void 0 ? c.returnDetails : this.options.returnDetails
          , d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator
          , {key: m, namespaces: p} = this.extractFromKey(l[l.length - 1], c)
          , g = p[p.length - 1];
        let v = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
        v === void 0 && (v = ":");
        const x = c.lng || this.language
          , N = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (x?.toLowerCase() === "cimode")
            return N ? f ? {
                res: `${g}${v}${m}`,
                usedKey: m,
                exactUsedKey: m,
                usedLng: x,
                usedNS: g,
                usedParams: this.getUsedParamsDetails(c)
            } : `${g}${v}${m}` : f ? {
                res: m,
                usedKey: m,
                exactUsedKey: m,
                usedLng: x,
                usedNS: g,
                usedParams: this.getUsedParamsDetails(c)
            } : m;
        const B = this.resolve(l, c);
        let A = B?.res;
        const z = B?.usedKey || m
          , M = B?.exactUsedKey || m
          , V = ["[object Number]", "[object Function]", "[object RegExp]"]
          , Z = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays
          , G = !this.i18nFormat || this.i18nFormat.handleAsObject
          , P = c.count !== void 0 && !re(c.count)
          , $ = Mr.hasDefaultValue(c)
          , fe = P ? this.pluralResolver.getSuffix(x, c.count, c) : ""
          , ne = c.ordinal && P ? this.pluralResolver.getSuffix(x, c.count, {
            ordinal: !1
        }) : ""
          , ie = P && !c.ordinal && c.count === 0
          , ue = ie && c[`defaultValue${this.options.pluralSeparator}zero`] || c[`defaultValue${fe}`] || c[`defaultValue${ne}`] || c.defaultValue;
        let be = A;
        G && !A && $ && (be = ue);
        const Ye = xg(be)
          , Ae = Object.prototype.toString.apply(be);
        if (G && be && Ye && V.indexOf(Ae) < 0 && !(re(Z) && Array.isArray(be))) {
            if (!c.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const we = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(z, be, {
                    ...c,
                    ns: p
                }) : `key '${m} (${this.language})' returned an object instead of string.`;
                return f ? (B.res = we,
                B.usedParams = this.getUsedParamsDetails(c),
                B) : we
            }
            if (d) {
                const we = Array.isArray(be)
                  , Se = we ? [] : {}
                  , je = we ? M : z;
                for (const L in be)
                    if (Object.prototype.hasOwnProperty.call(be, L)) {
                        const C = `${je}${d}${L}`;
                        $ && !A ? Se[L] = this.translate(C, {
                            ...c,
                            defaultValue: xg(ue) ? ue[L] : void 0,
                            joinArrays: !1,
                            ns: p
                        }) : Se[L] = this.translate(C, {
                            ...c,
                            joinArrays: !1,
                            ns: p
                        }),
                        Se[L] === C && (Se[L] = be[L])
                    }
                A = Se
            }
        } else if (G && re(Z) && Array.isArray(A))
            A = A.join(Z),
            A && (A = this.extendTranslation(A, l, c, s));
        else {
            let we = !1
              , Se = !1;
            !this.isValidLookup(A) && $ && (we = !0,
            A = ue),
            this.isValidLookup(A) || (Se = !0,
            A = m);
            const L = (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Se ? void 0 : A
              , C = $ && ue !== A && this.options.updateMissing;
            if (Se || we || C) {
                if (this.logger.log(C ? "updateKey" : "missingKey", x, g, m, C ? ue : A),
                d) {
                    const H = this.resolve(m, {
                        ...c,
                        keySeparator: !1
                    });
                    H && H.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let X = [];
                const I = this.languageUtils.getFallbackCodes(this.options.fallbackLng, c.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && I && I[0])
                    for (let H = 0; H < I.length; H++)
                        X.push(I[H]);
                else
                    this.options.saveMissingTo === "all" ? X = this.languageUtils.toResolveHierarchy(c.lng || this.language) : X.push(c.lng || this.language);
                const E = (H, Q, K) => {
                    const F = $ && K !== A ? K : L;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(H, g, Q, F, C, c) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(H, g, Q, F, C, c),
                    this.emit("missingKey", H, g, Q, A)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && P ? X.forEach(H => {
                    const Q = this.pluralResolver.getSuffixes(H, c);
                    ie && c[`defaultValue${this.options.pluralSeparator}zero`] && Q.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Q.push(`${this.options.pluralSeparator}zero`),
                    Q.forEach(K => {
                        E([H], m + K, c[`defaultValue${K}`] || ue)
                    }
                    )
                }
                ) : E(X, m, ue))
            }
            A = this.extendTranslation(A, l, c, B, s),
            Se && A === m && this.options.appendNamespaceToMissingKey && (A = `${g}${v}${m}`),
            (Se || we) && this.options.parseMissingKeyHandler && (A = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${g}${v}${m}` : m, we ? A : void 0, c))
        }
        return f ? (B.res = A,
        B.usedParams = this.getUsedParamsDetails(c),
        B) : A
    }
    extendTranslation(l, u, s, c, f) {
        if (this.i18nFormat?.parse)
            l = this.i18nFormat.parse(l, {
                ...this.options.interpolation.defaultVariables,
                ...s
            }, s.lng || this.language || c.usedLng, c.usedNS, c.usedKey, {
                resolved: c
            });
        else if (!s.skipInterpolation) {
            s.interpolation && this.interpolator.init({
                ...s,
                interpolation: {
                    ...this.options.interpolation,
                    ...s.interpolation
                }
            });
            const p = re(l) && (s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let g;
            if (p) {
                const x = l.match(this.interpolator.nestingRegexp);
                g = x && x.length
            }
            let v = s.replace && !re(s.replace) ? s.replace : s;
            if (this.options.interpolation.defaultVariables && (v = {
                ...this.options.interpolation.defaultVariables,
                ...v
            }),
            l = this.interpolator.interpolate(l, v, s.lng || this.language || c.usedLng, s),
            p) {
                const x = l.match(this.interpolator.nestingRegexp)
                  , N = x && x.length;
                g < N && (s.nest = !1)
            }
            !s.lng && c && c.res && (s.lng = this.language || c.usedLng),
            s.nest !== !1 && (l = this.interpolator.nest(l, (...x) => f?.[0] === x[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${u[0]}`),
            null) : this.translate(...x, u), s)),
            s.interpolation && this.interpolator.reset()
        }
        const d = s.postProcess || this.options.postProcess
          , m = re(d) ? [d] : d;
        return l != null && m?.length && s.applyPostProcessor !== !1 && (l = Sm.handle(m, l, u, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...c,
                usedParams: this.getUsedParamsDetails(s)
            },
            ...s
        } : s, this)),
        l
    }
    resolve(l, u={}) {
        let s, c, f, d, m;
        return re(l) && (l = [l]),
        l.forEach(p => {
            if (this.isValidLookup(s))
                return;
            const g = this.extractFromKey(p, u)
              , v = g.key;
            c = v;
            let x = g.namespaces;
            this.options.fallbackNS && (x = x.concat(this.options.fallbackNS));
            const N = u.count !== void 0 && !re(u.count)
              , B = N && !u.ordinal && u.count === 0
              , A = u.context !== void 0 && (re(u.context) || typeof u.context == "number") && u.context !== ""
              , z = u.lngs ? u.lngs : this.languageUtils.toResolveHierarchy(u.lng || this.language, u.fallbackLng);
            x.forEach(M => {
                this.isValidLookup(s) || (m = M,
                !bg[`${z[0]}-${M}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(m) && (bg[`${z[0]}-${M}`] = !0,
                this.logger.warn(`key "${c}" for languages "${z.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                z.forEach(V => {
                    if (this.isValidLookup(s))
                        return;
                    d = V;
                    const Z = [v];
                    if (this.i18nFormat?.addLookupKeys)
                        this.i18nFormat.addLookupKeys(Z, v, V, M, u);
                    else {
                        let P;
                        N && (P = this.pluralResolver.getSuffix(V, u.count, u));
                        const $ = `${this.options.pluralSeparator}zero`
                          , fe = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (N && (u.ordinal && P.indexOf(fe) === 0 && Z.push(v + P.replace(fe, this.options.pluralSeparator)),
                        Z.push(v + P),
                        B && Z.push(v + $)),
                        A) {
                            const ne = `${v}${this.options.contextSeparator || "_"}${u.context}`;
                            Z.push(ne),
                            N && (u.ordinal && P.indexOf(fe) === 0 && Z.push(ne + P.replace(fe, this.options.pluralSeparator)),
                            Z.push(ne + P),
                            B && Z.push(ne + $))
                        }
                    }
                    let G;
                    for (; G = Z.pop(); )
                        this.isValidLookup(s) || (f = G,
                        s = this.getResource(V, M, G, u))
                }
                ))
            }
            )
        }
        ),
        {
            res: s,
            usedKey: c,
            exactUsedKey: f,
            usedLng: d,
            usedNS: m
        }
    }
    isValidLookup(l) {
        return l !== void 0 && !(!this.options.returnNull && l === null) && !(!this.options.returnEmptyString && l === "")
    }
    getResource(l, u, s, c={}) {
        return this.i18nFormat?.getResource ? this.i18nFormat.getResource(l, u, s, c) : this.resourceStore.getResource(l, u, s, c)
    }
    getUsedParamsDetails(l={}) {
        const u = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , s = l.replace && !re(l.replace);
        let c = s ? l.replace : l;
        if (s && typeof l.count < "u" && (c.count = l.count),
        this.options.interpolation.defaultVariables && (c = {
            ...this.options.interpolation.defaultVariables,
            ...c
        }),
        !s) {
            c = {
                ...c
            };
            for (const f of u)
                delete c[f]
        }
        return c
    }
    static hasDefaultValue(l) {
        const u = "defaultValue";
        for (const s in l)
            if (Object.prototype.hasOwnProperty.call(l, s) && u === s.substring(0, u.length) && l[s] !== void 0)
                return !0;
        return !1
    }
}
class Sg {
    constructor(l) {
        this.options = l,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = Xt.create("languageUtils")
    }
    getScriptPartFromCode(l) {
        if (l = Il(l),
        !l || l.indexOf("-") < 0)
            return null;
        const u = l.split("-");
        return u.length === 2 || (u.pop(),
        u[u.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(u.join("-"))
    }
    getLanguagePartFromCode(l) {
        if (l = Il(l),
        !l || l.indexOf("-") < 0)
            return l;
        const u = l.split("-");
        return this.formatLanguageCode(u[0])
    }
    formatLanguageCode(l) {
        if (re(l) && l.indexOf("-") > -1) {
            let u;
            try {
                u = Intl.getCanonicalLocales(l)[0]
            } catch {}
            return u && this.options.lowerCaseLng && (u = u.toLowerCase()),
            u || (this.options.lowerCaseLng ? l.toLowerCase() : l)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? l.toLowerCase() : l
    }
    isSupportedCode(l) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (l = this.getLanguagePartFromCode(l)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(l) > -1
    }
    getBestMatchFromCodes(l) {
        if (!l)
            return null;
        let u;
        return l.forEach(s => {
            if (u)
                return;
            const c = this.formatLanguageCode(s);
            (!this.options.supportedLngs || this.isSupportedCode(c)) && (u = c)
        }
        ),
        !u && this.options.supportedLngs && l.forEach(s => {
            if (u)
                return;
            const c = this.getScriptPartFromCode(s);
            if (this.isSupportedCode(c))
                return u = c;
            const f = this.getLanguagePartFromCode(s);
            if (this.isSupportedCode(f))
                return u = f;
            u = this.options.supportedLngs.find(d => {
                if (d === f)
                    return d;
                if (!(d.indexOf("-") < 0 && f.indexOf("-") < 0) && (d.indexOf("-") > 0 && f.indexOf("-") < 0 && d.substring(0, d.indexOf("-")) === f || d.indexOf(f) === 0 && f.length > 1))
                    return d
            }
            )
        }
        ),
        u || (u = this.getFallbackCodes(this.options.fallbackLng)[0]),
        u
    }
    getFallbackCodes(l, u) {
        if (!l)
            return [];
        if (typeof l == "function" && (l = l(u)),
        re(l) && (l = [l]),
        Array.isArray(l))
            return l;
        if (!u)
            return l.default || [];
        let s = l[u];
        return s || (s = l[this.getScriptPartFromCode(u)]),
        s || (s = l[this.formatLanguageCode(u)]),
        s || (s = l[this.getLanguagePartFromCode(u)]),
        s || (s = l.default),
        s || []
    }
    toResolveHierarchy(l, u) {
        const s = this.getFallbackCodes((u === !1 ? [] : u) || this.options.fallbackLng || [], l)
          , c = []
          , f = d => {
            d && (this.isSupportedCode(d) ? c.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))
        }
        ;
        return re(l) && (l.indexOf("-") > -1 || l.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(l)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(l)),
        this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(l))) : re(l) && f(this.formatLanguageCode(l)),
        s.forEach(d => {
            c.indexOf(d) < 0 && f(this.formatLanguageCode(d))
        }
        ),
        c
    }
}
const Eg = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}
  , Rg = {
    select: i => i === 1 ? "one" : "other",
    resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
    })
};
class Ex {
    constructor(l, u={}) {
        this.languageUtils = l,
        this.options = u,
        this.logger = Xt.create("pluralResolver"),
        this.pluralRulesCache = {}
    }
    addRule(l, u) {
        this.rules[l] = u
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(l, u={}) {
        const s = Il(l === "dev" ? "en" : l)
          , c = u.ordinal ? "ordinal" : "cardinal"
          , f = JSON.stringify({
            cleanedCode: s,
            type: c
        });
        if (f in this.pluralRulesCache)
            return this.pluralRulesCache[f];
        let d;
        try {
            d = new Intl.PluralRules(s,{
                type: c
            })
        } catch {
            if (!Intl)
                return this.logger.error("No Intl support, please use an Intl polyfill!"),
                Rg;
            if (!l.match(/-|_/))
                return Rg;
            const p = this.languageUtils.getLanguagePartFromCode(l);
            d = this.getRule(p, u)
        }
        return this.pluralRulesCache[f] = d,
        d
    }
    needsPlural(l, u={}) {
        let s = this.getRule(l, u);
        return s || (s = this.getRule("dev", u)),
        s?.resolvedOptions().pluralCategories.length > 1
    }
    getPluralFormsOfKey(l, u, s={}) {
        return this.getSuffixes(l, s).map(c => `${u}${c}`)
    }
    getSuffixes(l, u={}) {
        let s = this.getRule(l, u);
        return s || (s = this.getRule("dev", u)),
        s ? s.resolvedOptions().pluralCategories.sort( (c, f) => Eg[c] - Eg[f]).map(c => `${this.options.prepend}${u.ordinal ? `ordinal${this.options.prepend}` : ""}${c}`) : []
    }
    getSuffix(l, u, s={}) {
        const c = this.getRule(l, s);
        return c ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${c.select(u)}` : (this.logger.warn(`no plural rule found for: ${l}`),
        this.getSuffix("dev", u, s))
    }
}
const Ag = (i, l, u, s=".", c=!0) => {
    let f = gx(i, l, u);
    return !f && c && re(u) && (f = No(i, u, s),
    f === void 0 && (f = No(l, u, s))),
    f
}
  , vo = i => i.replace(/\$/g, "$$$$");
class Rx {
    constructor(l={}) {
        this.logger = Xt.create("interpolator"),
        this.options = l,
        this.format = l?.interpolation?.format || (u => u),
        this.init(l)
    }
    init(l={}) {
        l.interpolation || (l.interpolation = {
            escapeValue: !0
        });
        const {escape: u, escapeValue: s, useRawValueToEscape: c, prefix: f, prefixEscaped: d, suffix: m, suffixEscaped: p, formatSeparator: g, unescapeSuffix: v, unescapePrefix: x, nestingPrefix: N, nestingPrefixEscaped: B, nestingSuffix: A, nestingSuffixEscaped: z, nestingOptionsSeparator: M, maxReplaces: V, alwaysFormat: Z} = l.interpolation;
        this.escape = u !== void 0 ? u : px,
        this.escapeValue = s !== void 0 ? s : !0,
        this.useRawValueToEscape = c !== void 0 ? c : !1,
        this.prefix = f ? Vn(f) : d || "{{",
        this.suffix = m ? Vn(m) : p || "}}",
        this.formatSeparator = g || ",",
        this.unescapePrefix = v ? "" : x || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : v || "",
        this.nestingPrefix = N ? Vn(N) : B || Vn("$t("),
        this.nestingSuffix = A ? Vn(A) : z || Vn(")"),
        this.nestingOptionsSeparator = M || ",",
        this.maxReplaces = V || 1e3,
        this.alwaysFormat = Z !== void 0 ? Z : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const l = (u, s) => u?.source === s ? (u.lastIndex = 0,
        u) : new RegExp(s,"g");
        this.regexp = l(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = l(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = l(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(l, u, s, c) {
        let f, d, m;
        const p = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
          , g = B => {
            if (B.indexOf(this.formatSeparator) < 0) {
                const V = Ag(u, p, B, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(V, void 0, s, {
                    ...c,
                    ...u,
                    interpolationkey: B
                }) : V
            }
            const A = B.split(this.formatSeparator)
              , z = A.shift().trim()
              , M = A.join(this.formatSeparator).trim();
            return this.format(Ag(u, p, z, this.options.keySeparator, this.options.ignoreJSONStructure), M, s, {
                ...c,
                ...u,
                interpolationkey: z
            })
        }
        ;
        this.resetRegExp();
        const v = c?.missingInterpolationHandler || this.options.missingInterpolationHandler
          , x = c?.interpolation?.skipOnVariables !== void 0 ? c.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: B => vo(B)
        }, {
            regex: this.regexp,
            safeValue: B => this.escapeValue ? vo(this.escape(B)) : vo(B)
        }].forEach(B => {
            for (m = 0; f = B.regex.exec(l); ) {
                const A = f[1].trim();
                if (d = g(A),
                d === void 0)
                    if (typeof v == "function") {
                        const M = v(l, f, c);
                        d = re(M) ? M : ""
                    } else if (c && Object.prototype.hasOwnProperty.call(c, A))
                        d = "";
                    else if (x) {
                        d = f[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${A} for interpolating ${l}`),
                        d = "";
                else
                    !re(d) && !this.useRawValueToEscape && (d = gg(d));
                const z = B.safeValue(d);
                if (l = l.replace(f[0], z),
                x ? (B.regex.lastIndex += d.length,
                B.regex.lastIndex -= f[0].length) : B.regex.lastIndex = 0,
                m++,
                m >= this.maxReplaces)
                    break
            }
        }
        ),
        l
    }
    nest(l, u, s={}) {
        let c, f, d;
        const m = (p, g) => {
            const v = this.nestingOptionsSeparator;
            if (p.indexOf(v) < 0)
                return p;
            const x = p.split(new RegExp(`${v}[ ]*{`));
            let N = `{${x[1]}`;
            p = x[0],
            N = this.interpolate(N, d);
            const B = N.match(/'/g)
              , A = N.match(/"/g);
            ((B?.length ?? 0) % 2 === 0 && !A || A.length % 2 !== 0) && (N = N.replace(/'/g, '"'));
            try {
                d = JSON.parse(N),
                g && (d = {
                    ...g,
                    ...d
                })
            } catch (z) {
                return this.logger.warn(`failed parsing options string in nesting for key ${p}`, z),
                `${p}${v}${N}`
            }
            return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue,
            p
        }
        ;
        for (; c = this.nestingRegexp.exec(l); ) {
            let p = [];
            d = {
                ...s
            },
            d = d.replace && !re(d.replace) ? d.replace : d,
            d.applyPostProcessor = !1,
            delete d.defaultValue;
            const g = /{.*}/.test(c[1]) ? c[1].lastIndexOf("}") + 1 : c[1].indexOf(this.formatSeparator);
            if (g !== -1 && (p = c[1].slice(g).split(this.formatSeparator).map(v => v.trim()).filter(Boolean),
            c[1] = c[1].slice(0, g)),
            f = u(m.call(this, c[1].trim(), d), d),
            f && c[0] === l && !re(f))
                return f;
            re(f) || (f = gg(f)),
            f || (this.logger.warn(`missed to resolve ${c[1]} for nesting ${l}`),
            f = ""),
            p.length && (f = p.reduce( (v, x) => this.format(v, x, s.lng, {
                ...s,
                interpolationkey: c[1].trim()
            }), f.trim())),
            l = l.replace(c[0], f),
            this.regexp.lastIndex = 0
        }
        return l
    }
}
const Ax = i => {
    let l = i.toLowerCase().trim();
    const u = {};
    if (i.indexOf("(") > -1) {
        const s = i.split("(");
        l = s[0].toLowerCase().trim();
        const c = s[1].substring(0, s[1].length - 1);
        l === "currency" && c.indexOf(":") < 0 ? u.currency || (u.currency = c.trim()) : l === "relativetime" && c.indexOf(":") < 0 ? u.range || (u.range = c.trim()) : c.split(";").forEach(d => {
            if (d) {
                const [m,...p] = d.split(":")
                  , g = p.join(":").trim().replace(/^'+|'+$/g, "")
                  , v = m.trim();
                u[v] || (u[v] = g),
                g === "false" && (u[v] = !1),
                g === "true" && (u[v] = !0),
                isNaN(g) || (u[v] = parseInt(g, 10))
            }
        }
        )
    }
    return {
        formatName: l,
        formatOptions: u
    }
}
  , Tg = i => {
    const l = {};
    return (u, s, c) => {
        let f = c;
        c && c.interpolationkey && c.formatParams && c.formatParams[c.interpolationkey] && c[c.interpolationkey] && (f = {
            ...f,
            [c.interpolationkey]: void 0
        });
        const d = s + JSON.stringify(f);
        let m = l[d];
        return m || (m = i(Il(s), c),
        l[d] = m),
        m(u)
    }
}
  , Tx = i => (l, u, s) => i(Il(u), s)(l);
class Ox {
    constructor(l={}) {
        this.logger = Xt.create("formatter"),
        this.options = l,
        this.init(l)
    }
    init(l, u={
        interpolation: {}
    }) {
        this.formatSeparator = u.interpolation.formatSeparator || ",";
        const s = u.cacheInBuiltFormats ? Tg : Tx;
        this.formats = {
            number: s( (c, f) => {
                const d = new Intl.NumberFormat(c,{
                    ...f
                });
                return m => d.format(m)
            }
            ),
            currency: s( (c, f) => {
                const d = new Intl.NumberFormat(c,{
                    ...f,
                    style: "currency"
                });
                return m => d.format(m)
            }
            ),
            datetime: s( (c, f) => {
                const d = new Intl.DateTimeFormat(c,{
                    ...f
                });
                return m => d.format(m)
            }
            ),
            relativetime: s( (c, f) => {
                const d = new Intl.RelativeTimeFormat(c,{
                    ...f
                });
                return m => d.format(m, f.range || "day")
            }
            ),
            list: s( (c, f) => {
                const d = new Intl.ListFormat(c,{
                    ...f
                });
                return m => d.format(m)
            }
            )
        }
    }
    add(l, u) {
        this.formats[l.toLowerCase().trim()] = u
    }
    addCached(l, u) {
        this.formats[l.toLowerCase().trim()] = Tg(u)
    }
    format(l, u, s, c={}) {
        const f = u.split(this.formatSeparator);
        if (f.length > 1 && f[0].indexOf("(") > 1 && f[0].indexOf(")") < 0 && f.find(m => m.indexOf(")") > -1)) {
            const m = f.findIndex(p => p.indexOf(")") > -1);
            f[0] = [f[0], ...f.splice(1, m)].join(this.formatSeparator)
        }
        return f.reduce( (m, p) => {
            const {formatName: g, formatOptions: v} = Ax(p);
            if (this.formats[g]) {
                let x = m;
                try {
                    const N = c?.formatParams?.[c.interpolationkey] || {}
                      , B = N.locale || N.lng || c.locale || c.lng || s;
                    x = this.formats[g](m, B, {
                        ...v,
                        ...c,
                        ...N
                    })
                } catch (N) {
                    this.logger.warn(N)
                }
                return x
            } else
                this.logger.warn(`there was no format function for ${g}`);
            return m
        }
        , l)
    }
}
const Nx = (i, l) => {
    i.pending[l] !== void 0 && (delete i.pending[l],
    i.pendingCount--)
}
;
class wx extends Xr {
    constructor(l, u, s, c={}) {
        super(),
        this.backend = l,
        this.store = u,
        this.services = s,
        this.languageUtils = s.languageUtils,
        this.options = c,
        this.logger = Xt.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = c.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = c.maxRetries >= 0 ? c.maxRetries : 5,
        this.retryTimeout = c.retryTimeout >= 1 ? c.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        this.backend?.init?.(s, c.backend, c)
    }
    queueLoad(l, u, s, c) {
        const f = {}
          , d = {}
          , m = {}
          , p = {};
        return l.forEach(g => {
            let v = !0;
            u.forEach(x => {
                const N = `${g}|${x}`;
                !s.reload && this.store.hasResourceBundle(g, x) ? this.state[N] = 2 : this.state[N] < 0 || (this.state[N] === 1 ? d[N] === void 0 && (d[N] = !0) : (this.state[N] = 1,
                v = !1,
                d[N] === void 0 && (d[N] = !0),
                f[N] === void 0 && (f[N] = !0),
                p[x] === void 0 && (p[x] = !0)))
            }
            ),
            v || (m[g] = !0)
        }
        ),
        (Object.keys(f).length || Object.keys(d).length) && this.queue.push({
            pending: d,
            pendingCount: Object.keys(d).length,
            loaded: {},
            errors: [],
            callback: c
        }),
        {
            toLoad: Object.keys(f),
            pending: Object.keys(d),
            toLoadLanguages: Object.keys(m),
            toLoadNamespaces: Object.keys(p)
        }
    }
    loaded(l, u, s) {
        const c = l.split("|")
          , f = c[0]
          , d = c[1];
        u && this.emit("failedLoading", f, d, u),
        !u && s && this.store.addResourceBundle(f, d, s, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[l] = u ? -1 : 2,
        u && s && (this.state[l] = 0);
        const m = {};
        this.queue.forEach(p => {
            hx(p.loaded, [f], d),
            Nx(p, l),
            u && p.errors.push(u),
            p.pendingCount === 0 && !p.done && (Object.keys(p.loaded).forEach(g => {
                m[g] || (m[g] = {});
                const v = p.loaded[g];
                v.length && v.forEach(x => {
                    m[g][x] === void 0 && (m[g][x] = !0)
                }
                )
            }
            ),
            p.done = !0,
            p.errors.length ? p.callback(p.errors) : p.callback())
        }
        ),
        this.emit("loaded", m),
        this.queue = this.queue.filter(p => !p.done)
    }
    read(l, u, s, c=0, f=this.retryTimeout, d) {
        if (!l.length)
            return d(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: l,
                ns: u,
                fcName: s,
                tried: c,
                wait: f,
                callback: d
            });
            return
        }
        this.readingCalls++;
        const m = (g, v) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const x = this.waitingReads.shift();
                this.read(x.lng, x.ns, x.fcName, x.tried, x.wait, x.callback)
            }
            if (g && v && c < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, l, u, s, c + 1, f * 2, d)
                }
                , f);
                return
            }
            d(g, v)
        }
          , p = this.backend[s].bind(this.backend);
        if (p.length === 2) {
            try {
                const g = p(l, u);
                g && typeof g.then == "function" ? g.then(v => m(null, v)).catch(m) : m(null, g)
            } catch (g) {
                m(g)
            }
            return
        }
        return p(l, u, m)
    }
    prepareLoading(l, u, s={}, c) {
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            c && c();
        re(l) && (l = this.languageUtils.toResolveHierarchy(l)),
        re(u) && (u = [u]);
        const f = this.queueLoad(l, u, s, c);
        if (!f.toLoad.length)
            return f.pending.length || c(),
            null;
        f.toLoad.forEach(d => {
            this.loadOne(d)
        }
        )
    }
    load(l, u, s) {
        this.prepareLoading(l, u, {}, s)
    }
    reload(l, u, s) {
        this.prepareLoading(l, u, {
            reload: !0
        }, s)
    }
    loadOne(l, u="") {
        const s = l.split("|")
          , c = s[0]
          , f = s[1];
        this.read(c, f, "read", void 0, void 0, (d, m) => {
            d && this.logger.warn(`${u}loading namespace ${f} for language ${c} failed`, d),
            !d && m && this.logger.log(`${u}loaded namespace ${f} for language ${c}`, m),
            this.loaded(l, d, m)
        }
        )
    }
    saveMissing(l, u, s, c, f, d={}, m= () => {}
    ) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(u)) {
            this.logger.warn(`did not save key "${s}" as the namespace "${u}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(s == null || s === "")) {
            if (this.backend?.create) {
                const p = {
                    ...d,
                    isUpdate: f
                }
                  , g = this.backend.create.bind(this.backend);
                if (g.length < 6)
                    try {
                        let v;
                        g.length === 5 ? v = g(l, u, s, c, p) : v = g(l, u, s, c),
                        v && typeof v.then == "function" ? v.then(x => m(null, x)).catch(m) : m(null, v)
                    } catch (v) {
                        m(v)
                    }
                else
                    g(l, u, s, c, m, p)
            }
            !l || !l[0] || this.store.addResource(l[0], u, s, c)
        }
    }
}
const Og = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: i => {
        let l = {};
        if (typeof i[1] == "object" && (l = i[1]),
        re(i[1]) && (l.defaultValue = i[1]),
        re(i[2]) && (l.tDescription = i[2]),
        typeof i[2] == "object" || typeof i[3] == "object") {
            const u = i[3] || i[2];
            Object.keys(u).forEach(s => {
                l[s] = u[s]
            }
            )
        }
        return l
    }
    ,
    interpolation: {
        escapeValue: !0,
        format: i => i,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
    },
    cacheInBuiltFormats: !0
})
  , Ng = i => (re(i.ns) && (i.ns = [i.ns]),
re(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]),
re(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]),
i.supportedLngs?.indexOf?.("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])),
typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate),
i)
  , Tr = () => {}
  , Cx = i => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(u => {
        typeof i[u] == "function" && (i[u] = i[u].bind(i))
    }
    )
}
;
class ei extends Xr {
    constructor(l={}, u) {
        if (super(),
        this.options = Ng(l),
        this.services = {},
        this.logger = Xt,
        this.modules = {
            external: []
        },
        Cx(this),
        u && !this.isInitialized && !l.isClone) {
            if (!this.options.initAsync)
                return this.init(l, u),
                this;
            setTimeout( () => {
                this.init(l, u)
            }
            , 0)
        }
    }
    init(l={}, u) {
        this.isInitializing = !0,
        typeof l == "function" && (u = l,
        l = {}),
        l.defaultNS == null && l.ns && (re(l.ns) ? l.defaultNS = l.ns : l.ns.indexOf("translation") < 0 && (l.defaultNS = l.ns[0]));
        const s = Og();
        this.options = {
            ...s,
            ...this.options,
            ...Ng(l)
        },
        this.options.interpolation = {
            ...s.interpolation,
            ...this.options.interpolation
        },
        l.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = l.keySeparator),
        l.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = l.nsSeparator);
        const c = g => g ? typeof g == "function" ? new g : g : null;
        if (!this.options.isClone) {
            this.modules.logger ? Xt.init(c(this.modules.logger), this.options) : Xt.init(null, this.options);
            let g;
            this.modules.formatter ? g = this.modules.formatter : g = Ox;
            const v = new Sg(this.options);
            this.store = new vg(this.options.resources,this.options);
            const x = this.services;
            x.logger = Xt,
            x.resourceStore = this.store,
            x.languageUtils = v,
            x.pluralResolver = new Ex(v,{
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            this.options.interpolation.format && this.options.interpolation.format !== s.interpolation.format && this.logger.warn("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),
            g && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (x.formatter = c(g),
            x.formatter.init && x.formatter.init(x, this.options),
            this.options.interpolation.format = x.formatter.format.bind(x.formatter)),
            x.interpolator = new Rx(this.options),
            x.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            x.backendConnector = new wx(c(this.modules.backend),x.resourceStore,x,this.options),
            x.backendConnector.on("*", (B, ...A) => {
                this.emit(B, ...A)
            }
            ),
            this.modules.languageDetector && (x.languageDetector = c(this.modules.languageDetector),
            x.languageDetector.init && x.languageDetector.init(x, this.options.detection, this.options)),
            this.modules.i18nFormat && (x.i18nFormat = c(this.modules.i18nFormat),
            x.i18nFormat.init && x.i18nFormat.init(this)),
            this.translator = new Mr(this.services,this.options),
            this.translator.on("*", (B, ...A) => {
                this.emit(B, ...A)
            }
            ),
            this.modules.external.forEach(B => {
                B.init && B.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        u || (u = Tr),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(g => {
            this[g] = (...v) => this.store[g](...v)
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(g => {
            this[g] = (...v) => (this.store[g](...v),
            this)
        }
        );
        const m = Fl()
          , p = () => {
            const g = (v, x) => {
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                m.resolve(x),
                u(v, x)
            }
            ;
            if (this.languages && !this.isInitialized)
                return g(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, g)
        }
        ;
        return this.options.resources || !this.options.initAsync ? p() : setTimeout(p, 0),
        m
    }
    loadResources(l, u=Tr) {
        let s = u;
        const c = re(l) ? l : this.language;
        if (typeof l == "function" && (s = l),
        !this.options.resources || this.options.partialBundledLanguages) {
            if (c?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return s();
            const f = []
              , d = m => {
                if (!m || m === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(m).forEach(g => {
                    g !== "cimode" && f.indexOf(g) < 0 && f.push(g)
                }
                )
            }
            ;
            c ? d(c) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p => d(p)),
            this.options.preload?.forEach?.(m => d(m)),
            this.services.backendConnector.load(f, this.options.ns, m => {
                !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                s(m)
            }
            )
        } else
            s(null)
    }
    reloadResources(l, u, s) {
        const c = Fl();
        return typeof l == "function" && (s = l,
        l = void 0),
        typeof u == "function" && (s = u,
        u = void 0),
        l || (l = this.languages),
        u || (u = this.options.ns),
        s || (s = Tr),
        this.services.backendConnector.reload(l, u, f => {
            c.resolve(),
            s(f)
        }
        ),
        c
    }
    use(l) {
        if (!l)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!l.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return l.type === "backend" && (this.modules.backend = l),
        (l.type === "logger" || l.log && l.warn && l.error) && (this.modules.logger = l),
        l.type === "languageDetector" && (this.modules.languageDetector = l),
        l.type === "i18nFormat" && (this.modules.i18nFormat = l),
        l.type === "postProcessor" && Sm.addPostProcessor(l),
        l.type === "formatter" && (this.modules.formatter = l),
        l.type === "3rdParty" && this.modules.external.push(l),
        this
    }
    setResolvedLanguage(l) {
        if (!(!l || !this.languages) && !(["cimode", "dev"].indexOf(l) > -1)) {
            for (let u = 0; u < this.languages.length; u++) {
                const s = this.languages[u];
                if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
                    this.resolvedLanguage = s;
                    break
                }
            }
            !this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l) && (this.resolvedLanguage = l,
            this.languages.unshift(l))
        }
    }
    changeLanguage(l, u) {
        this.isLanguageChangingTo = l;
        const s = Fl();
        this.emit("languageChanging", l);
        const c = m => {
            this.language = m,
            this.languages = this.services.languageUtils.toResolveHierarchy(m),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(m)
        }
          , f = (m, p) => {
            p ? this.isLanguageChangingTo === l && (c(p),
            this.translator.changeLanguage(p),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", p),
            this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0,
            s.resolve( (...g) => this.t(...g)),
            u && u(m, (...g) => this.t(...g))
        }
          , d = m => {
            !l && !m && this.services.languageDetector && (m = []);
            const p = re(m) ? m : m && m[0]
              , g = this.store.hasLanguageSomeTranslations(p) ? p : this.services.languageUtils.getBestMatchFromCodes(re(m) ? [m] : m);
            g && (this.language || c(g),
            this.translator.language || this.translator.changeLanguage(g),
            this.services.languageDetector?.cacheUserLanguage?.(g)),
            this.loadResources(g, v => {
                f(v, g)
            }
            )
        }
        ;
        return !l && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !l && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(l),
        s
    }
    getFixedT(l, u, s) {
        const c = (f, d, ...m) => {
            let p;
            typeof d != "object" ? p = this.options.overloadTranslationOptionHandler([f, d].concat(m)) : p = {
                ...d
            },
            p.lng = p.lng || c.lng,
            p.lngs = p.lngs || c.lngs,
            p.ns = p.ns || c.ns,
            p.keyPrefix !== "" && (p.keyPrefix = p.keyPrefix || s || c.keyPrefix);
            const g = this.options.keySeparator || ".";
            let v;
            return p.keyPrefix && Array.isArray(f) ? v = f.map(x => `${p.keyPrefix}${g}${x}`) : v = p.keyPrefix ? `${p.keyPrefix}${g}${f}` : f,
            this.t(v, p)
        }
        ;
        return re(l) ? c.lng = l : c.lngs = l,
        c.ns = u,
        c.keyPrefix = s,
        c
    }
    t(...l) {
        return this.translator?.translate(...l)
    }
    exists(...l) {
        return this.translator?.exists(...l)
    }
    setDefaultNamespace(l) {
        this.options.defaultNS = l
    }
    hasLoadedNamespace(l, u={}) {
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const s = u.lng || this.resolvedLanguage || this.languages[0]
          , c = this.options ? this.options.fallbackLng : !1
          , f = this.languages[this.languages.length - 1];
        if (s.toLowerCase() === "cimode")
            return !0;
        const d = (m, p) => {
            const g = this.services.backendConnector.state[`${m}|${p}`];
            return g === -1 || g === 0 || g === 2
        }
        ;
        if (u.precheck) {
            const m = u.precheck(this, d);
            if (m !== void 0)
                return m
        }
        return !!(this.hasResourceBundle(s, l) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(s, l) && (!c || d(f, l)))
    }
    loadNamespaces(l, u) {
        const s = Fl();
        return this.options.ns ? (re(l) && (l = [l]),
        l.forEach(c => {
            this.options.ns.indexOf(c) < 0 && this.options.ns.push(c)
        }
        ),
        this.loadResources(c => {
            s.resolve(),
            u && u(c)
        }
        ),
        s) : (u && u(),
        Promise.resolve())
    }
    loadLanguages(l, u) {
        const s = Fl();
        re(l) && (l = [l]);
        const c = this.options.preload || []
          , f = l.filter(d => c.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
        return f.length ? (this.options.preload = c.concat(f),
        this.loadResources(d => {
            s.resolve(),
            u && u(d)
        }
        ),
        s) : (u && u(),
        Promise.resolve())
    }
    dir(l) {
        if (l || (l = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)),
        !l)
            return "rtl";
        try {
            const c = new Intl.Locale(l);
            if (c && c.getTextInfo) {
                const f = c.getTextInfo();
                if (f && f.direction)
                    return f.direction
            }
        } catch {}
        const u = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , s = this.services?.languageUtils || new Sg(Og());
        return l.toLowerCase().indexOf("-latn") > 1 ? "ltr" : u.indexOf(s.getLanguagePartFromCode(l)) > -1 || l.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(l={}, u) {
        return new ei(l,u)
    }
    cloneInstance(l={}, u=Tr) {
        const s = l.forkResourceStore;
        s && delete l.forkResourceStore;
        const c = {
            ...this.options,
            ...l,
            isClone: !0
        }
          , f = new ei(c);
        if ((l.debug !== void 0 || l.prefix !== void 0) && (f.logger = f.logger.clone(l)),
        ["store", "services", "language"].forEach(m => {
            f[m] = this[m]
        }
        ),
        f.services = {
            ...this.services
        },
        f.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        },
        s) {
            const m = Object.keys(this.store.data).reduce( (p, g) => (p[g] = {
                ...this.store.data[g]
            },
            p[g] = Object.keys(p[g]).reduce( (v, x) => (v[x] = {
                ...p[g][x]
            },
            v), p[g]),
            p), {});
            f.store = new vg(m,c),
            f.services.resourceStore = f.store
        }
        return f.translator = new Mr(f.services,c),
        f.translator.on("*", (m, ...p) => {
            f.emit(m, ...p)
        }
        ),
        f.init(c, u),
        f.translator.options = c,
        f.translator.backendConnector.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        },
        f
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const nt = ei.createInstance();
nt.createInstance = ei.createInstance;
nt.createInstance;
nt.dir;
nt.init;
nt.loadResources;
nt.reloadResources;
nt.use;
nt.changeLanguage;
nt.getFixedT;
nt.t;
nt.exists;
nt.setDefaultNamespace;
nt.hasLoadedNamespace;
nt.loadNamespaces;
nt.loadLanguages;
const Dx = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , jx = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , _x = i => jx[i]
  , Lx = i => i.replace(Dx, _x);
let wg = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: Lx
};
const Ux = (i={}) => {
    wg = {
        ...wg,
        ...i
    }
}
  , Mx = {
    type: "3rdParty",
    init(i) {
        Ux(i.options.react)
    }
}
  , zx = {
    "Welcome to customer": "Welcome to customer"
}
  , Hx = {
    translation: zx
}
  , kx = {
    "Welcome to customer": "Chào mừng bạn đến với khách hàng"
}
  , Bx = {
    translation: kx
}
  , qx = {
    en: Hx,
    vi: Bx
};
nt.use(Mx).init({
    resources: qx,
    lng: localStorage.getItem("lng") || "vi",
    fallbackLng: "vi"
});
ey.createRoot(document.getElementById("root")).render(b.jsx(pv, {
    children: b.jsx(cx, {})
}));
export {ex as E, Yx as R, bm as T, ee as a, Do as b, Xx as c, b as j, _ as r, Vx as u};
