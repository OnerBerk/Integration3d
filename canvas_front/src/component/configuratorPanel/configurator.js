import React, {useState} from 'react'
import Color from "./color"
import Environment from './environment'
import IntExt from './intExt'
import CameraView from './cameraView'
import styles from "../../styles/conf.module.scss"

const Configurator = (props) => {
    let app = props.appRef
    const [colorBtn, setColorBtn] = useState(false);
    const [environmentBtn, setEnvironmentBtn] = useState(false);
    const [intExtBtn, setIntExtBtn] = useState(false);
    const [viewBtn, setViewBtn] = useState(false);

    const setAllFalse = () => {
        setEnvironmentBtn(false);
        setIntExtBtn(false);
        setViewBtn(false);
        setColorBtn(false);
    }

    return (
        <div id="configuratorMain" className={styles.configuratorMain}>

            <div id="main" className={styles.main}>
                <p onClick={() => {
                    setAllFalse();
                    setColorBtn(!colorBtn)
                }}> Color </p><br/>
                <p onClick={() => {
                    setAllFalse();
                    setEnvironmentBtn(!environmentBtn)
                }}> Environment </p>
                <p onClick={() => {
                    setAllFalse();
                    setIntExtBtn(!intExtBtn)
                }}> Int </p>
                <p onClick={() => {
                    setAllFalse();
                    setViewBtn(!viewBtn)
                }}> View </p>
            </div>

            <div id="detailMenu" className={styles.detailMenu}>
                {colorBtn && <div id="menuColor" className={styles.menuColor}><Color appRef={app}/></div>}
                {environmentBtn && <div id="menuEnvironement" className={styles.menuEnvironment}><Environment appRef={app}/></div>}
                {intExtBtn && <div id="menuAccesory" className={styles.menuAccesory}><IntExt appRef={app}/></div>}
                {viewBtn && <div id="menuView" className={styles.menuView}><CameraView appRef={app}/></div>}
            </div>
        </div>
    )
}
export default Configurator