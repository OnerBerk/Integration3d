import React, {useState} from 'react'

import Color from './color'
import Environment from './environment'
import Material from './material'
import Accesory from './accesory'
import View from './view'

import './configuration.scss'
import '../../resources/variables.scss'

const Configurator=(props)=>{

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

    return(
        <div>  
            <div className="main" >
                <p onClick={()=> { setAllFalse(); setColorBtn(!colorbtn) }}> Color </p><br/>     
                <p onClick={()=> { setAllFalse(); setEnvironmentBtn(!environmentbtn )}}> Environment </p>
                <p onClick={()=> { setAllFalse(); setMaterialBtn(!materialbtn )}}> Material </p>
                <p onClick={()=> { setAllFalse(); setAccesoryBtn(!accesorybtn)}}> Accesory</p>
                <p onClick={()=> { setAllFalse(); setViewBtn(!viewbtn)}}> View </p> 
            </div>

            { colorbtn && <div className="menuColor" >< Color/> </div> }
            { environmentbtn && <div className="menuEnvironment" >< Environment/> </div> }
            { materialbtn && <div className="menuMaterial" >< Material/> </div> }
            { accesorybtn && <div className="menuAccesory" >< Accesory/> </div> }
            { viewbtn && <div className="menuView" >< View/> </div> }
        </div>
    )}

export default Configurator