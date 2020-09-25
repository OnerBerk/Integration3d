import React, {useRef, useEffect } from 'react'
import styles from './mainCanvas.scss'

function MainCanvas(props){
    const canvas = useRef();
    let ctx = null;

    //initialisé le canvas
    useEffect(() => {
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
    //contexte du canvas
    ctx = canvasEle.getContext("3d")

    },[]);

    return <div className={styles.canv}>
            <h3>joza</h3>
            <canvas ref={canvas}></canvas>
        </div> 
        }

export default MainCanvas