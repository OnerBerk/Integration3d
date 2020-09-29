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
    ctx = canvasEle.getContext("2d")
    },[]);

    return <div>
            <h3>Light And Shadow</h3>
            <div className={styles.maincanv}>
                <div className={styles.canv}>
                    <canvas ref={canvas}></canvas>
                </div>
            </div>
        </div> 
        }

export default MainCanvas