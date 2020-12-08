import React, {useEffect, useRef} from 'react'
import './canvas.scss'
import LoadModules from "./__modules__.js"
let pc = window.pc


const CanvasProject = props => {
    const canvasRef = useRef(null)
    useEffect(() => {
        let devices, app, canvas
        canvas = canvasRef.current

        const SCRIPT_PREFIX = "";
        const PRELOAD_MODULES = [];
        const ASSET_PREFIX = "";
        const SCRIPTS = [32822138, 32822122,32822124, 32822128,32830139, 32830160,32884471, 32949301,32952826, 33276013,33276709, 33298316,33308095, 33312032,33315680, 33316106,33365213, 33365561,33555901];
        const INPUT_SETTINGS = {
                useKeyboard: true,
                useMouse: true,
                useGamepads: false,
                useTouch: true
            };
        const CONTEXT_OPTIONS = {
                'antialias': true,
                'alpha': false,
                'preserveDrawingBuffer': false,
                'preferWebGl2': true
            };
            pc.script.legacy = false;

            const createInputDevices =  (canvas) => {

                //let mouse = new pc.Keyboard(window);

                let result =  {
                    elementInput:  new pc.ElementInput(canvas, {
                       useMouse: INPUT_SETTINGS.useMouse,
                        useTouch: INPUT_SETTINGS.useTouch
                    }),
                    keyboard: INPUT_SETTINGS.useKeyboard = new pc.Keyboard(window),
                    mouse: INPUT_SETTINGS.useMouse = new pc.Mouse(canvas),
                    gamepads: INPUT_SETTINGS.useGamepads ? new pc.GamePads() : null,
                    touch: INPUT_SETTINGS.useTouch && pc.platform.touch ? new pc.TouchDevice(canvas) : null
                };
                return result;
            };
            devices = createInputDevices(canvas)
            const displayError =(html)=>{
                return(
                <table>
                    <tr>
                        <td>
                            <div>
                                <div >{html}</div>
                            </div>
                        </td>
                    </tr>
                </table>)
            }

             try {
                app =  new pc.Application(canvas,
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
                    app.configure("modele/config.json", function (err) {
                        if (err) {console.error(err)}
                        setTimeout(function () {
                            app.preload(function (err) {
                                if (err) { console.error(err) }
                            app.loadScene("modele/953348.json", function (err) {
                                if (err) { console.error(err)}
                                 app.start();
                                });
                            })
                        })
                    });
                }

                LoadModules(PRELOAD_MODULES, ASSET_PREFIX, configure);
            },[props]);
        
    return (
        <div className="can">
            <canvas id='application' ref={canvasRef}></canvas>
        </div>
    )
}
export default CanvasProject