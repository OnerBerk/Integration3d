(this["webpackJsonpls-car-config"] = this["webpackJsonpls-car-config"] || []).push([[0], {
    1: function (e, n, t) {
        e.exports = {
            conf: "conf_conf__1Pwlb",
            main: "conf_main__1k6z2",
            subMenu: "conf_subMenu__3-r1L",
            colorRed: "conf_colorRed__8X6LK",
            colorBlack: "conf_colorBlack__3tdXh",
            colorBlue: "conf_colorBlue__3jwPX",
            colorGreen: "conf_colorGreen__2Lzoa"
        }
    }, 10: function (e, n, t) {
        e.exports = {can: "canvas_can__gqgko"}
    }, 13: function (e, n, t) {
        e.exports = t(24)
    }, 24: function (e, n, t) {
        "use strict";
        t.r(n);
        var a = t(0), c = t.n(a), r = t(4), o = t.n(r), l = t(5), i = t.n(l), u = t(2), s = function (e, n, t) {
            function a(e, n, t, a) {
                !function (e, n) {
                    var t = document.createElement("script");
                    t.onload = function () {
                        n()
                    }, t.onerror = function () {
                        throw new Error("failed to load " + e)
                    }, t.async = !0, t.src = e, document.head.appendChild(t)
                }(n, (function () {
                    var n = window[e];
                    window[e + "Lib"] = n, n({
                        locateFile: function () {
                            return t
                        }
                    }).then((function (n) {
                        window[e] = n, a()
                    }))
                }))
            }

            if ("undefined" === typeof e || 0 === e.length) setTimeout(t); else {
                var c = e.length, r = function () {
                    0 === --c && t()
                }, o = function () {
                    try {
                        if ("object" === typeof WebAssembly && "function" === typeof WebAssembly.instantiate) {
                            var e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                            if (e instanceof WebAssembly.Module) return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
                        }
                    } catch (n) {
                        console.log("erreur load")
                    }
                    return !1
                }();
                e.forEach((function (e) {
                    if (!e.hasOwnProperty("preload") || e.preload) if (o) a(e.moduleName, n + e.glueUrl, n + e.wasmUrl, r); else {
                        if (!e.fallbackUrl) throw new Error("wasm not supported and no fallback supplied for module " + e.moduleName);
                        a(e.moduleName, n + e.fallbackUrl, "", r)
                    } else r()
                }))
            }
        }, m = function (e, n, t) {
            t.fire(e + ":set", n)
        }, f = t(1), p = t.n(f), d = function (e) {
            var n = Object(a.useState)(""), t = Object(u.a)(n, 2), r = t[0], o = t[1], l = e.appRef;
            return m("color", r, l), c.a.createElement("div", {className: p.a.subMenu}, c.a.createElement("p", {
                className: p.a.colorRed,
                onClick: function () {
                    return o("red")
                }
            }, " Red "), c.a.createElement("p", {
                className: p.a.colorBlack, onClick: function () {
                    return o("black")
                }
            }, " Black "), c.a.createElement("p", {
                className: p.a.colorGreen, onClick: function () {
                    return o("green")
                }
            }, " green "), c.a.createElement("p", {
                className: p.a.colorBlue, onClick: function () {
                    return o("blue")
                }
            }, " blue "))
        }, E = function (e) {
            var n = Object(a.useState)(""), t = Object(u.a)(n, 2), r = t[0], o = t[1], l = e.appRef;
            return m("env", r, l), c.a.createElement("div", {className: p.a.subMenu}, c.a.createElement("p", {
                className: p.a.colorRed,
                onClick: function () {
                    return o("heli")
                }
            }, " Heli "), c.a.createElement("p", {
                className: p.a.colorBlack, onClick: function () {
                    return o("bridge")
                }
            }, " Bridge "))
        }, b = function (e) {
            var n = Object(a.useState)(""), t = Object(u.a)(n, 2), r = t[0], o = t[1], l = e.appRef;
            return m("intext", r, l), c.a.createElement("div", {className: p.a.subMenu}, "intext", c.a.createElement("p", {
                className: p.a.colorRed,
                onClick: function () {
                    return o("int")
                }
            }, " Interior "), c.a.createElement("p", {
                className: p.a.colorBlack, onClick: function () {
                    return o("ext")
                }
            }, " Exterior "))
        }, w = function (e) {
            var n = Object(a.useState)(1), t = Object(u.a)(n, 2), r = t[0], o = t[1], l = e.appRef;
            return m("camera", r, l), c.a.createElement("div", {className: p.a.subMenu}, c.a.createElement("p", {
                className: p.a.colorRed,
                onClick: function () {
                    return o(1)
                }
            }, " view 1 "), c.a.createElement("p", {
                className: p.a.colorBlack, onClick: function () {
                    return o(2)
                }
            }, " View 2 "), c.a.createElement("p", {
                className: p.a.colorBlack, onClick: function () {
                    return o(3)
                }
            }, " View 3 "))
        }, N = function (e) {
            var n = Object(a.useState)(!1), t = Object(u.a)(n, 2), r = t[0], o = t[1], l = Object(a.useState)(!1),
                i = Object(u.a)(l, 2), s = i[0], m = i[1], f = Object(a.useState)(!1), N = Object(u.a)(f, 2), h = N[0],
                T = N[1], _ = Object(a.useState)(!1), v = Object(u.a)(_, 2), S = v[0], O = v[1], I = function () {
                    m(!1), T(!1), O(!1), o(!1)
                }, g = e.appRef;
            return c.a.createElement("div", {className: p.a.conf}, c.a.createElement("div", {className: p.a.main}, c.a.createElement("p", {
                onClick: function () {
                    I(), o(!r)
                }
            }, " Color "), c.a.createElement("br", null), c.a.createElement("p", {
                onClick: function () {
                    I(), m(!s)
                }
            }, " Environment "), c.a.createElement("p", {
                onClick: function () {
                    I(), T(!h)
                }
            }, " Int / Ext "), c.a.createElement("p", {
                onClick: function () {
                    I(), O(!S)
                }
            }, " View ")), c.a.createElement("div", {className: p.a.detail}, r && c.a.createElement("div", {className: p.a.menuColor}, c.a.createElement(d, {appRef: g})), s && c.a.createElement("div", {className: p.a.menuEnvironment}, c.a.createElement(E, {appRef: g})), h && c.a.createElement("div", {className: p.a.menuAccesory}, c.a.createElement(b, {appRef: g})), S && c.a.createElement("div", {className: p.a.menuView}, c.a.createElement(w, {appRef: g}))))
        };
        window.pc.script.legacy = !1;
        var h = {
            SCRIPT_PREFIX: "",
            PRELOAD_MODULES: [],
            ASSET_PREFIX: "",
            SCRIPTS: [32822138, 32822122, 32822124, 32822128, 32830139, 32830160, 32884471, 32949301, 32952826, 33276013, 33276709, 33298316, 33308095, 33312032, 33315680, 33316106, 33365213, 33365561, 33555901],
            INPUT_SETTINGS: {useKeyboard: !0, useMouse: !0, useGamepads: !1, useTouch: !0},
            CONTEXT_OPTIONS: {antialias: !0, alpha: !1, preserveDrawingBuffer: !1, preferWebGl2: !0}
        }, T = window.pc;

        function _(e) {
            return c.a.createElement("table", null, c.a.createElement("tr", null, c.a.createElement("td", null, c.a.createElement("div", null, c.a.createElement("div", null, e)))))
        }

        var v = t(10), S = t.n(v), O = function () {
            var e = Object(a.useState)(), n = Object(u.a)(e, 2), t = n[0], r = n[1], o = window.pc,
                l = Object(a.useRef)(null);
            Object(a.useEffect)((function () {
                i()
            }), []);
            var i = function () {
                var e, n;
                e = function (e) {
                    return {
                        elementInput: new T.ElementInput(e, {
                            useMouse: h.INPUT_SETTINGS.useMouse,
                            useTouch: h.INPUT_SETTINGS.useTouch
                        }),
                        keyboard: h.INPUT_SETTINGS.useKeyboard = new T.Keyboard(window),
                        mouse: h.INPUT_SETTINGS.useMouse = new T.Mouse(e),
                        gamepads: h.INPUT_SETTINGS.useGamepads ? new T.GamePads : null,
                        touch: h.INPUT_SETTINGS.useTouch && T.platform.touch ? new T.TouchDevice(e) : null
                    }
                }(n = l.current), _();
                try {
                    t = new o.Application(n, {
                        elementInput: e.elementInput,
                        keyboard: e.keyboard,
                        mouse: e.mouse,
                        gamepads: e.gamepads,
                        touch: e.touch,
                        graphicsDeviceOptions: h.CONTEXT_OPTIONS,
                        assetPrefix: h.ASSET_PREFIX || "",
                        scriptPrefix: h.SCRIPT_PREFIX || "",
                        scriptsOrder: h.SCRIPTS || []
                    })
                } catch (a) {
                    return void (a instanceof o.UnsupportedBrowserError ? _('This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to find out more.</a>') : a instanceof o.ContextCreationError ? _('It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>') : _("Could not initialize application. Error: " + a))
                }
                s(h.PRELOAD_MODULES, h.ASSET_PREFIX, (function () {
                    t.configure("modele/config.json", (function (e) {
                        e && console.error(e), setTimeout((function () {
                            !function (e, n) {
                                e.resizeCanvas(n.width, n.height), n.style.width = "", n.style.height = "";
                                var t = e._fillMode;
                                t !== T.FILLMODE_NONE && t !== T.FILLMODE_KEEP_ASPECT || (t === T.FILLMODE_NONE && n.clientHeight < window.innerHeight || n.clientWidth / n.clientHeight >= window.innerWidth / window.innerHeight ? n.style.marginTop = "0px" : n.style.marginTop = "")
                            }(t, n), t.preload((function (e) {
                                e && console.error(e), t.loadScene("modele/953348.json", (function (e) {
                                    e && console.error(e), t.start()
                                }))
                            }))
                        }))
                    }))
                })), r(t)
            };
            return c.a.createElement("div", {className: S.a.can}, c.a.createElement(N, {appRef: t}), c.a.createElement("canvas", {
                id: "ls-modele-1",
                ref: l
            }))
        }, I = function () {
            return c.a.createElement("div", {className: i.a.app}, c.a.createElement(O, null))
        }, g = t(12), k = t(3), C = Object(k.b)({}), R = Object(k.c)(C), y = document.getElementById("root");
        o.a.render(c.a.createElement(g.a, {store: R}, c.a.createElement(c.a.StrictMode, null, c.a.createElement(I, null))), y)
    }, 5: function (e, n, t) {
    }
}, [[13, 1, 2]]]);
//# sourceMappingURL=main.9556440b.chunk.js.map