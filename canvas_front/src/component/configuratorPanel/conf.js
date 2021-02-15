import React, {useState} from 'react'
import Color from "./color"
import Environment from './environment'
import IntExt from './intExt'
import CameraView from './cameraView'
import styles from "../../styles/conf.module.scss"

const Conf = (props) => {
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
        <div className={styles.conf}>

            <div className={styles.main}>
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

            <div className={styles.detail}>
                {colorBtn && <div className={styles.menuColor}><Color appRef={app}/></div>}
                {environmentBtn && <div className={styles.menuEnvironment}><Environment appRef={app}/></div>}
                {intExtBtn && <div className={styles.menuAccesory}><IntExt appRef={app}/></div>}
                {viewBtn && <div className={styles.menuView}><CameraView appRef={app}/></div>}
            </div>

        </div>
    )
}
export default Conf