import React, {useState} from 'react'

import Color from './color'
import Environment from './environment'
import Material from './material'
import Accesory from './accesory'
import View from './view'
import Button from '../elements/button'
import './configuration.scss'

function Configurator(){
        const [color, setColor] = useState(false)
        const [environment, setEnvironment] = useState(false)
        const [material, setMaterial] = useState(false)
        const [accesory, setAccesory] = useState(false)
        const [view, setView] = useState(false)
        

    return<div className="configurator" >  

            <div className="main" >         
                <Button className="button" onClick={()=> {setColor(!color); setEnvironment(false) ; setMaterial(false); setAccesory(false); setView(false)}} > <i class="fas fa-paint-brush"></i> Color </Button>
                <Button className="button" onClick={()=> {setEnvironment(!environment);setColor(false); setMaterial(false); setAccesory(false); setView(false) }  }> Environment </Button>
                <Button className="button" onClick={()=> {setMaterial(!material); setColor(false); setEnvironment(false); setAccesory(false); setView(false) }  }> Material </Button>
                <Button className="button" onClick={()=> {setAccesory(!accesory); setColor(false); setEnvironment(false); setMaterial(false); setView(false)} }> Accesory</Button>
                <Button className="button" onClick={()=> {setView(!view); setColor(false); setEnvironment(false); setMaterial(false); setAccesory(false) } }> View </Button>
            </div>

            { color && <div className="menuColor" >< Color/> </div> }
            { environment && <div className="menuEnvironment" >< Environment/> </div> }
            { material && <div className="menuMaterial" >< Material/> </div> }
            { accesory && <div className="menuAccesory" >< Accesory/> </div> }
            { view && <div className="menuView" >< View/> </div> }

        </div>
}

export default Configurator