import React, {useEffect, useRef} from 'react'
import './canvas.scss'
import LoadModules from "./__modules__.js"
import * as pc from 'playcanvas'

const CanvasProject = props => {
    const canvasRef = useRef(null)

    useEffect(() => {
        let devices, app, canvas
        canvas = canvasRef.current

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
                'antialias': true,
                'alpha': false,
                'preserveDrawingBuffer': false,
                'preferWebGl2': true
            };
            pc.script.legacy = false;

            const createInputDevices =  async (canvas)=> {
                return  {
                    elementInput:  await new pc.ElementInput(canvas, {
                       useMouse: INPUT_SETTINGS.useMouse,
                        useTouch: INPUT_SETTINGS.useTouch
                    }),
                    keyboard: INPUT_SETTINGS.useKeyboard ? await new pc.Keyboard(window) : null,
                    mouse: INPUT_SETTINGS.useMouse ? await new pc.Mouse(canvas) : null,
                    gamepads: INPUT_SETTINGS.useGamepads ? await new pc.GamePads() : null,
                    touch: INPUT_SETTINGS.useTouch && pc.platform.touch ? await new pc.TouchDevice(canvas) : null
                };
            };
            devices = createInputDevices(canvas)
            console.log("devices",devices)

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


                //console.log("scene",app.loadScene("/modele/953348.json"))
                let configure = function () {

                    app.configure("/modele/config.json", function (err) {
                        if (err) {console.error(err)}

                        setTimeout(function () {
                            app.preload(function (err) {
                                if (err) { console.error(err) }
                                console.log("preload")

                            app.loadScene("/modele/953348.json", function (err) {
                                console.log("load")

                                if (err) { console.error(err)}
                                    console.log("go to start")

                                 app.start();
                                    console.log("start statictac")
                                });
                            })
                        })
                    });
                }

                LoadModules(PRELOAD_MODULES, ASSET_PREFIX, configure);
                console.log("mickey",pc.mouse)
            },[props]);
        
    return ( <div> <canvas id='application' ref={canvasRef}>  </canvas> </div> )
}
export default CanvasProject