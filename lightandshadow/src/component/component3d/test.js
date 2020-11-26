import React, { useEffect} from 'react'
import * as pc from 'playcanvas'


const Test =(props)=>{

    let canvas = document.getElementById('application');
    const app = new pc.Application(canvas);
    
    
    useEffect(() => {

            var createCanvas = function () {
                canvas.onselectstart = function () { return false; };
                document.body.appendChild(canvas);
                return canvas;
            };
            const app = new pc.Application(canvas);

    // fill the available space at full resolution
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);

    // ensure canvas is resized when window changes size
    window.addEventListener('resize', () => app.resizeCanvas());


    app.start();

}, []);

return<></>

}

export default Test