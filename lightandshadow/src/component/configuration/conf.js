import React, {useState, useEffect} from 'react'
import Color from "./color"
import Environment from './environment'
import Material from './material'
import Accesory from './accesory'
import View from './view'

import styles from "../../styles/conf.module.scss"

const Conf =(props)=>{

    
    
    const [colorbtn, setColorBtn] = useState(false)
    const [environmentbtn, setEnvironmentBtn] = useState(false)
    const [materialbtn, setMaterialBtn] = useState(false)
    const [accesorybtn, setAccesoryBtn] = useState(false)
    const [viewbtn, setViewBtn] = useState(false)
    
    const setAllFalse = () => {
        setEnvironmentBtn(false);
        setMaterialBtn(false);
        setAccesoryBtn(false);
        setViewBtn(false);
        setColorBtn(false)
    }
    
    let app = props.appRef
    console.log("jsuis la ")

        
        return(
        <div className={styles.conf}>
            <div className={styles.main} >
                <p onClick={()=> { setAllFalse(); setColorBtn(!colorbtn) }}> Color </p><br/>     
                <p onClick={()=> { setAllFalse(); setEnvironmentBtn(!environmentbtn )}}> Environment </p>
                <p onClick={()=> { setAllFalse(); setMaterialBtn(!materialbtn )}}> Material </p>
                <p onClick={()=> { setAllFalse(); setAccesoryBtn(!accesorybtn)}}> Accesory</p>
                <p onClick={()=> { setAllFalse(); setViewBtn(!viewbtn)}}> View </p> 
            </div>
                { colorbtn && <div className={styles.menuColor} >< Color appRef={app} /> </div> }
                { environmentbtn && <div className={styles.menuEnvironment}>< Environment/> </div> }
                { materialbtn && <div className={styles.menuMaterial }>< Material/> </div> }
                { accesorybtn && <div className={styles.menuAccesory} >< Accesory/> </div> }
                { viewbtn && <div className={styles.menuView} >< View/> 
            </div> }
        </div>
    )
}
export default Conf