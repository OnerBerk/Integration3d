import React from "react";

const pc = window.pc

export const createInputDevices = (canvas) => {
    let config = window["lightandshadow_setting"]
    return {
        elementInput: new pc.ElementInput(canvas, {
            useMouse: config.INPUT_SETTINGS.useMouse,
            useTouch: config.INPUT_SETTINGS.useTouch
        }),
        keyboard: config.INPUT_SETTINGS.useKeyboard = new pc.Keyboard(window),
        mouse: config.INPUT_SETTINGS.useMouse = new pc.Mouse(canvas),
        gamepads: config.INPUT_SETTINGS.useGamepads ? new pc.GamePads() : null,
        touch: config.INPUT_SETTINGS.useTouch && pc.platform.touch ? new pc.TouchDevice(canvas) : null
    };
};

export const displayError = (html) => {
    return (
        <table>
            <tr>
                <td>
                    <div>
                        <div>{html}</div>
                    </div>
                </td>
            </tr>
        </table>)
};

export const reflow = (app, canvas) => {
    app.resizeCanvas(canvas.width, canvas.height);
    canvas.style.width = '';
    canvas.style.height = '';

    const fillMode = app._fillMode;

    if (fillMode === pc.FILLMODE_NONE || fillMode === pc.FILLMODE_KEEP_ASPECT) {
        if ((fillMode === pc.FILLMODE_NONE && canvas.clientHeight < window.innerHeight) || (canvas.clientWidth / canvas.clientHeight >= window.innerWidth / window.innerHeight)) {
            canvas.style.marginTop = -50 + 'px';
        } else {
            canvas.style.marginTop = '';
        }
    }
};


