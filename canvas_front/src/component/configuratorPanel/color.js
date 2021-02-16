import React, {useState} from 'react'
import {setFireColor} from "../../util/canvas-callback"
import styles from "../../styles/conf.module.scss"

const Color = (props) => {
    const app = props.appRef;
    const [newColor, setNewColor] = useState("");

    setFireColor(newColor, app);

    return (
        <div className={styles.subMenu}>
            <p id="colorRed" className={styles.colorRed} onClick={() => setNewColor("red")}> Red </p>
            <p className={styles.colorBlack} onClick={() => setNewColor("black")}> Black </p>
            <p className={styles.colorGreen} onClick={() => setNewColor("green")}> green </p>
        </div>
    )
}
export default Color