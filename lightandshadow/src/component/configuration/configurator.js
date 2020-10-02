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

        const [color, setColor] = useState(false)
        const [environment, setEnvironment] = useState(false)
        const [material, setMaterial] = useState(false)
        const [accesory, setAccesory] = useState(false)
        const [view, setView] = useState(false)

        const setAllFalse = () => {
            setEnvironment(false);
            setMaterial(false);
            setAccesory(false);
            setView(false);
            setColor(false)
        }

    return(
        <div>  
            <div className="main" >
                <Button onClick={()=> { setAllFalse(); setColor(!color) }}> Color </Button>         
                <Button onClick={()=> { setAllFalse(); setEnvironment(!environment )}}> Environment </Button>
                <Button onClick={()=> { setAllFalse(); setMaterial(!material )}}> Material </Button>
                <Button onClick={()=> { setAllFalse(); setAccesory(!accesory)}}> Accesory</Button>
                <Button onClick={()=> { setAllFalse(); setView(!view)}}> View </Button> 
            </div>

            { color && <div className="menuColor" >< Color/> </div> }
            { environment && <div className="menuEnvironment" >< Environment/> </div> }
            { material && <div className="menuMaterial" >< Material/> </div> }
            { accesory && <div className="menuAccesory" >< Accesory/> </div> }
            { view && <div className="menuView" >< View/> </div> }

        </div>
    )}

export default Configurator