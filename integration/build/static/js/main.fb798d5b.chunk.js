(this["webpackJsonpls-car-config"] = this["webpackJsonpls-car-config"] || []).push([[0], [, function (e, t, n) {
    e.exports = {
        conf: "conf_conf__1Pwlb",
        main: "conf_main__1k6z2",
        subMenu: "conf_subMenu__3-r1L",
        colorRed: "conf_colorRed__8X6LK",
        colorBlack: "conf_colorBlack__3tdXh",
        colorBlue: "conf_colorBlue__3jwPX",
        colorGreen: "conf_colorGreen__2Lzoa"
    }
}, , function (e, t, n) {
}, , , function (e, t, n) {
    e.exports = {can: "canvas_can__gqgko"}
}, function (e, t, n) {
    e.exports = n(12)
}, , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(0), c = n.n(a), r = n(5), o = n.n(r), l = n(3), i = n.n(l), u = n(2), s = function (e, t, n) {
        n.fire(e + ":set", t)
    }, m = n(1), p = n.n(m), f = function (e) {
        var t = Object(a.useState)(""), n = Object(u.a)(t, 2), r = n[0], o = n[1], l = e.appRef;
        return s("color", r, l), c.a.createElement("div", {className: p.a.subMenu}, c.a.createElement("p", {
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
    }, d = function (e) {
        var t = Object(a.useState)(""), n = Object(u.a)(t, 2), r = n[0], o = n[1], l = e.appRef;
        return s("env", r, l), c.a.createElement("div", {className: p.a.subMenu}, c.a.createElement("p", {
            className: p.a.colorRed,
            onClick: function () {
                return o("heli")
            }
        }, " Heli "), c.a.createElement("p", {
            className: p.a.colorBlack, onClick: function () {
                return o("bridge")
            }
        }, " Bridge "))
    }, E = function (e) {
        var t = Object(a.useState)(""), n = Object(u.a)(t, 2), r = n[0], o = n[1], l = e.appRef;
        return s("intext", r, l), c.a.createElement("div", {className: p.a.subMenu}, "intext", c.a.createElement("p", {
            className: p.a.colorRed,
            onClick: function () {
                return o("int")
            }
        }, " Interior "), c.a.createElement("p", {
            className: p.a.colorBlack, onClick: function () {
                return o("ext")
            }
        }, " Exterior "))
    }, b = function (e) {
        var t = Object(a.useState)(1), n = Object(u.a)(t, 2), r = n[0], o = n[1], l = e.appRef;
        return s("camera", r, l), c.a.createElement("div", {className: p.a.subMenu}, c.a.createElement("p", {
            className: p.a.colorRed,
            onClick: function () {
                return o(1)
            }
        }, " view 1 "), c.a.createElement("p", {
            className: p.a.colorBlack, onClick: function () {
                return o(2)
            }
        }, " CameraView 2 "), c.a.createElement("p", {
            className: p.a.colorBlack, onClick: function () {
                return o(3)
            }
        }, " CameraView 3 "))
    }, h = function (e) {
        var t = Object(a.useState)(!1), n = Object(u.a)(t, 2), r = n[0], o = n[1], l = Object(a.useState)(!1),
            i = Object(u.a)(l, 2), s = i[0], m = i[1], h = Object(a.useState)(!1), w = Object(u.a)(h, 2), _ = w[0],
            N = w[1], g = Object(a.useState)(!1), v = Object(u.a)(g, 2), T = v[0], k = v[1], S = function () {
                m(!1), N(!1), k(!1), o(!1)
            }, O = e.appRef;
        return c.a.createElement("div", {className: p.a.conf}, c.a.createElement("div", {className: p.a.main}, c.a.createElement("p", {
            onClick: function () {
                S(), o(!r)
            }
        }, " Color "), c.a.createElement("br", null), c.a.createElement("p", {
            onClick: function () {
                S(), m(!s)
            }
        }, " Environment "), c.a.createElement("p", {
            onClick: function () {
                S(), N(!_)
            }
        }, " Int "), c.a.createElement("p", {
            onClick: function () {
                S(), k(!T)
            }
        }, " CameraView ")), c.a.createElement("div", {className: p.a.detail}, r && c.a.createElement("div", {className: p.a.menuColor}, c.a.createElement(f, {appRef: O})), s && c.a.createElement("div", {className: p.a.menuEnvironment}, c.a.createElement(d, {appRef: O})), _ && c.a.createElement("div", {className: p.a.menuAccesory}, c.a.createElement(E, {appRef: O})), T && c.a.createElement("div", {className: p.a.menuView}, c.a.createElement(b, {appRef: O}))))
    }, w = window.pc;

    function _(e) {
        return c.a.createElement("table", null, c.a.createElement("tr", null, c.a.createElement("td", null, c.a.createElement("div", null, c.a.createElement("div", null, e)))))
    }

    var N = n(6), g = n.n(N), v = function () {
        var e = window.pc, t = window.lightandshadow_modules, n = window.lightandshadow_setting,
            r = "http://localhost:8000/lightandshadow/tictac/", o = Object(a.useState)(), l = Object(u.a)(o, 2),
            i = l[0], s = l[1], m = Object(a.useRef)(null);
        Object(a.useEffect)((function () {
            p()
        }), []);
        var p = function () {
            var a, c;
            a = function (e) {
                var t = window.lightandshadow_setting;
                return {
                    elementInput: new w.ElementInput(e, {
                        useMouse: t.INPUT_SETTINGS.useMouse,
                        useTouch: t.INPUT_SETTINGS.useTouch
                    }),
                    keyboard: t.INPUT_SETTINGS.useKeyboard = new w.Keyboard(window),
                    mouse: t.INPUT_SETTINGS.useMouse = new w.Mouse(e),
                    gamepads: t.INPUT_SETTINGS.useGamepads ? new w.GamePads : null,
                    touch: t.INPUT_SETTINGS.useTouch && w.platform.touch ? new w.TouchDevice(e) : null
                }
            }(c = m.current), _();
            try {
                i = new e.Application(c, {
                    elementInput: a.elementInput,
                    keyboard: a.keyboard,
                    mouse: a.mouse,
                    gamepads: a.gamepads,
                    touch: a.touch,
                    graphicsDeviceOptions: n.CONTEXT_OPTIONS,
                    assetPrefix: n.ASSET_PREFIX || "",
                    scriptPrefix: n.SCRIPT_PREFIX || "",
                    scriptsOrder: n.SCRIPTS || []
                })
            } catch (o) {
                return void (o instanceof e.UnsupportedBrowserError ? _('This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to find out more.</a>') : o instanceof e.ContextCreationError ? _('It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>') : _("Could not initialize application. Error: " + o))
            }
            t(n.PRELOAD_MODULES, n.ASSET_PREFIX, (function () {
                i.configure(r + "config.json", (function (e) {
                    e && console.error(e), setTimeout((function () {
                        !function (e, t) {
                            e.resizeCanvas(t.width, t.height), t.style.width = "", t.style.height = "";
                            var n = e._fillMode;
                            n !== w.FILLMODE_NONE && n !== w.FILLMODE_KEEP_ASPECT || (n === w.FILLMODE_NONE && t.clientHeight < window.innerHeight || t.clientWidth / t.clientHeight >= window.innerWidth / window.innerHeight ? t.style.marginTop = "-50px" : t.style.marginTop = "")
                        }(i, c), i.preload((function (e) {
                            e && console.error(e), i.loadScene(r + "953348.json", (function (e) {
                                e && console.error(e), i.start()
                            }))
                        }))
                    }))
                }))
            })), s(i)
        };
        return c.a.createElement("div", {className: g.a.can}, c.a.createElement(h, {appRef: i}), c.a.createElement("canvas", {
            id: "ls-modele-1",
            ref: m
        }))
    }, T = function () {
        return c.a.createElement("div", {className: i.a.app}, c.a.createElement(v, null))
    }, k = document.getElementById("root");
    o.a.render(c.a.createElement(c.a.StrictMode, null, c.a.createElement(T, null)), k)
}], [[7, 1, 2]]]);
//# sourceMappingURL=main.fb798d5b.chunk.js.map