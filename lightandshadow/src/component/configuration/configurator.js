import React, {useState} from 'react'

import Color from './color'
import Environment from './environment'
import Material from './material'
import Accesory from './accesory'
import View from './view'
import Button from '../componentUi/button/button'

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
                <Button onClick={()=> { setAllFalse(); setColorBtn(!colorbtn) }}> Color </Button>         
                <Button onClick={()=> { setAllFalse(); setEnvironmentBtn(!environmentbtn )}}> Environment </Button>
                <Button onClick={()=> { setAllFalse(); setMaterialBtn(!materialbtn )}}> Material </Button>
                <Button onClick={()=> { setAllFalse(); setAccesoryBtn(!accesorybtn)}}> Accesory</Button>
                <Button onClick={()=> { setAllFalse(); setViewBtn(!viewbtn)}}> View </Button> 
            </div>

            { colorbtn && <div className="menuColor" >< Color/> </div> }
            { environmentbtn && <div className="menuEnvironment" >< Environment/> </div> }
            { materialbtn && <div className="menuMaterial" >< Material/> </div> }
            { accesorybtn && <div className="menuAccesory" >< Accesory/> </div> }
            { viewbtn && <div className="menuView" >< View/> </div> }
        </div>
    )}

export default Configurator