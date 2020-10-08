import React, {useRef, useEffect} from 'react'
import './mainCanvas.scss'

const Canvas =(props)=> {
    const canvasref = useRef(null)

    const draw = context =>{
        
    }

    useEffect(()=>{
    const canvas = canvasref.current
    const context = canvas.getContext("webgl");

    context.clearColor(0.0,0.0,0.0,1.0)
    context.clear(context.COLOR_BUFFER_BIT|context.DEPTH_BUFFER_BIT)

        draw(context)
},[draw])


    return(
    <canvas id="mainCanv" ref={canvasref} {...props} />)
}

export default Canvas