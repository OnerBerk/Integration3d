import React, {useState} from 'react'
import {setFireColor} from "../../util/canvas-callback"
import styles from "../../styles/conf.module.scss"

const Color = (props) => {
    const app = props.appRef;
    const [newColor, setNewColor] = useState("");

    setFireColor(newColor, app);

    return (
        <div id="subMenu" className={styles.subMenu}>
            <p id="colorRed" className={styles.colorRed} onClick={() => setNewColor("red")}> Red </p>
            <p id="colorBlack" className={styles.colorBlack} onClick={() => setNewColor("black")}> Black </p>
            <p id="colorGreen" className={styles.colorGreen} onClick={() => setNewColor("green")}> green </p>
        </div>
    )
}
export default Color