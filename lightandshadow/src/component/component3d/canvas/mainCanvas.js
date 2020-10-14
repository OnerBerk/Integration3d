import React, {useRef, useEffect} from 'react'
import './mainCanvas.scss'

const Canvas =(props)=> {

    const canvasref = useRef(null)
    useEffect(()=>{
        const canvas = canvasref.current
        const context = canvas.getContext("webgl");
        
        if (!context) {
            alert("Impossible d'initialiser WebGL. Votre navigateur ou votre machine peut ne pas le supporter.");
            return;
        }
       
        context.clearColor(0.6, 0.7, 0.8, 1)
         context.clear(context.COLOR_BUFFER_BIT|context.DEPTH_BUFFER_BIT)
        
    },[])
    return(
        <div>
            <canvas id="mainCanv" ref={canvasref} {...props} />
        </div>
    )
}

export default Canvas