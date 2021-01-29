import React, {useState} from 'react'
import {setFireEnvironement} from "../../util/canvas-callback"
import styles from "../../styles/conf.module.scss"

const Environment = (props) => {
    const [newEnv, setNewEnv] = useState("");
    const app = props.appRef;

    setFireEnvironement(newEnv, app);

    return (
        <div className={styles.subMenu}>
            <p className={styles.colorRed} onClick={() => setNewEnv("heli")}> Heli </p>
            <p className={styles.colorBlack} onClick={() => setNewEnv("bridge")}> Bridge </p>
        </div>
    )
}
export default Environment