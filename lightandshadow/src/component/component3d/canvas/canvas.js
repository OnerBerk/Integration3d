import React, {useEffect} from 'react'
import './canvas.scss'
import LoadModules from "../unity/__modules__.js"
import * as pc from 'playcanvas'
import * as scene from '../unity/953348.json';
import * as configUrl from '../unity/config.json';

const CanvasProject = props => {
    let sceneUrl = JSON.stringify(scene)

    useEffect(() => {
        let devices, app
        let canvas = document.getElementById('application');

        const SCRIPT_PREFIX = "";
        const PRELOAD_MODULES = [];
        const ASSET_PREFIX = "";

        const SCRIPTS = [
            32822138, 32822122,
            32822124, 32822128,
            32830139, 32830160,
            32884471, 32949301,
            32952826, 33276013,
            33276709, 33298316,
            33308095, 33312032,
            33315680, 33316106,
            33365213, 33365561,
            33555901];
        const INPUT_SETTINGS = {
            useKeyboard: true,
            useMouse: true,
            useGamepads: false,
            useTouch: true
        };
        const CONTEXT_OPTIONS = {
            'antialias': true, 'alpha': false,
            'preserveDrawingBuffer': false, 'preferWebGl2': true
        };
        pc.script.legacy = false;

        var createCanvas = function () {
            canvas.onselectstart = function () {
                return false;
            };
            return canvas;
        };


        let createInputDevices = function (canvas) {
            var devices = {
                elementInput: new pc.ElementInput(canvas, {
                    useMouse: INPUT_SETTINGS.useMouse,
                    useTouch: INPUT_SETTINGS.useTouch
                }),
                keyboard: INPUT_SETTINGS.useKeyboard ? new pc.Keyboard(window) : null,
                mouse: INPUT_SETTINGS.useMouse ? new pc.Mouse(canvas) : null,
                gamepads: INPUT_SETTINGS.useGamepads ? new pc.GamePads() : null,
                touch: INPUT_SETTINGS.useTouch && pc.platform.touch ? new pc.TouchDevice(canvas) : null
            };
            return devices;
        };

        let configureCss = function (fillMode, width, height) {
            // Configure resolution and resize event
            if (canvas.classList) {
                canvas.classList.add('fill-mode-' + fillMode);
            }
            var css = "@media screen and (min-aspect-ratio: " + width + "/" + height + ") {";
            css += "    #application-canvas.fill-mode-KEEP_ASPECT {";
            css += "        width: auto;";
            css += "        height: 100%;";
            css += "        margin: 0;";
            css += "    }";
            css += "}";
            // append css to style
            if (document.head.querySelector) {
                document.head.querySelector('style').innerHTML += css;
            }
        };
        let reflow = function () {
            app.resizeCanvas(canvas.width, canvas.height);
            canvas.style.width = '90%';
            canvas.style.height = '';

            var fillMode = app._fillMode;

            if (fillMode === pc.FILLMODE_NONE || fillMode === pc.FILLMODE_KEEP_ASPECT) {
                if ((fillMode === pc.FILLMODE_NONE && canvas.clientHeight < window.innerHeight) || (canvas.clientWidth / canvas.clientHeight >= window.innerWidth / window.innerHeight)) {
                    canvas.style.marginTop = '0';
                    canvas.style.marginLeft = '1em';
                } else {
                    canvas.style.marginTop = '';
                }
            }
        };

        let displayError = function (html) {
            var div = document.createElement('div');

            div.innerHTML = [
                '<table style="background-color: #8CE; width: 100%; height: 100%;">',
                '  <tr>',
                '      <td align="center">',
                '          <div style="display: table-cell; vertical-align: middle;">',
                '              <div style="">' + html + '</div>',
                '          </div>',
                '      </td>',
                '  </tr>',
                '</table>'
            ].join('\n');

            document.body.appendChild(div);
        };

        devices = createInputDevices(canvas);
        canvas = createCanvas();


        try {
            app = new pc.Application(canvas,
                {

                    elementInput: devices.elementInput,
                    keyboard: devices.keyboard,
                    mouse: devices.mouse,
                    gamepads: devices.gamepads,
                    touch: devices.touch,
                    graphicsDeviceOptions: CONTEXT_OPTIONS,
                    assetPrefix: ASSET_PREFIX || "",
                    scriptPrefix: SCRIPT_PREFIX || "",
                    scriptsOrder: SCRIPTS || []
                });
        } catch (e) {
            if (e instanceof pc.UnsupportedBrowserError) {
                displayError('This page requires a browser that supports WebGL.<br/>' +
                    '<a href="http://get.webgl.org">Click here to find out more.</a>');
            } else if (e instanceof pc.ContextCreationError) {
                displayError("It doesn't appear your computer can support WebGL.<br/>" +
                    '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>');
            } else {
                displayError('Could not initialize application. Error: ' + e);
            }
            return;
        }


        let configure = function () {
            console.log("URL=", configUrl);

            app.configure("/poubelle/config.json", function (err) {
                if (err) {
                    console.error(err)
                }
                configureCss(app._fillMode, app._width, app._height);
                setTimeout(function () {
                    reflow();
                    window.addEventListener('resize', reflow, false);
                    window.addEventListener('orientationchange', reflow, false);
                    app.preload(function (err) {
                        if (err) {
                            console.error(err)
                        }
                        app.loadScene("/poubelle/953348.json", function (err) {
                            if (err) {
                                console.error(err)
                            }
                            app.start();
                        });
                    })
                })
            });
        }
        LoadModules(PRELOAD_MODULES, ASSET_PREFIX, configure);
    });


    return (
        <div>
            <canvas id='application'></canvas>
        </div>

    )
}
export default CanvasProject