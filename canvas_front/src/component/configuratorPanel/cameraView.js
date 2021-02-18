import React, {useState} from 'react'
import {setFireCamera} from "../../util/canvas-callback"
import styles from "../../styles/conf.module.scss"

const CameraView = (props) => {
    const initialView = 1;
    const [newView, setNewView] = useState(initialView);
    let app = props.appRef;

    setFireCamera(newView, app);

    return (
        <div id="subMenu" className={styles.subMenu}>
            <p id="view1" className={styles.colorRed} onClick={() => setNewView(1)}> view 1 </p>
            <p id="view2" className={styles.colorBlack} onClick={() => setNewView(2)}> View 2 </p>
            <p id="view3" className={styles.colorGreen} onClick={() => setNewView(3)}> View 3 </p>
        </div>
    )
}
export default CameraView