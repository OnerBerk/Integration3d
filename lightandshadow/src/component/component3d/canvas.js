import React, {useEffect, useRef, useState} from 'react'
import LoadModules from "./__modules__.js"
import Conf from "../configuration/conf"

import styles from "../../styles/canvas.module.scss"

const CanvasProject = ( props )=> {
    useEffect( () => { model() },[] );

    const pc = window.pc
    const canvasRef = useRef(null)
    let [app, setApp ]=useState()
    
    const model =() => {
        let devices, canvas
        canvas = canvasRef.current

          const SCRIPT_PREFIX = "";
          const PRELOAD_MODULES = [];
          const ASSET_PREFIX = "";
          const SCRIPTS = [
              32822138, 32822122,32822124,
              32822128,32830139, 32830160,
              32884471, 32949301,32952826, 
              33276013,33276709, 33298316,
              33308095, 33312032,33315680, 
              33316106,33365213, 33365561,
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
                
          const createInputDevices =  (canvas) => {
                    
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

        const reflow = function () {
            app.resizeCanvas(canvas.width, canvas.height);
            canvas.style.width = ''; canvas.style.height = '';

            const fillMode = app._fillMode;

            if (fillMode == pc.FILLMODE_NONE || fillMode == pc.FILLMODE_KEEP_ASPECT) {
                if ((fillMode == pc.FILLMODE_NONE && canvas.clientHeight < window.innerHeight) || (canvas.clientWidth / canvas.clientHeight >= window.innerWidth / window.innerHeight)) {
                    canvas.style.marginTop = 0 + 'px';
                } else {canvas.style.marginTop = '';}
            }
        };

                let configure = function () {
                    app.configure("modele/config.json", function (err) {
                        if (err) {console.error(err)}
                        setTimeout(function () {
                            reflow()
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
                setApp(app)
            };


    return (
        <div className={styles.can}>
            <Conf appRef= {app}/>
            <canvas id="ls-modele-1" ref={canvasRef}/>
        </div>
    )
}
export default CanvasProject