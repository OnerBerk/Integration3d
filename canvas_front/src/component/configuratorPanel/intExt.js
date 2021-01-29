import React, {useState} from 'react'
import {setFireIntExt} from "../../util/canvas-callback"
import styles from "../../styles/conf.module.scss"

const IntExt = (props) => {
    const [newCamera, setNewCamera] = useState("");
    let app = props.appRef;

    setFireIntExt( newCamera, app);

    return (
        <div className={styles.subMenu}>
            <p className={styles.colorRed} onClick={() => setNewCamera("int")}> Interior </p>
            <p className={styles.colorBlack} onClick={() => setNewCamera("ext")}> Exterior </p>
        </div>
    )
}

export default IntExt