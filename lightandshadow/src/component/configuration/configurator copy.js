import React, {useState} from 'react'

import Color from './color'
import Environment from './environment'
import Material from './material'
import Accesory from './accesory'
import View from './view'
import Button from '../componentUi/button/button'
import './configuration.scss'

const Configurator = (props) => {

    // TODO : demander à nicolas Jamet si il voudrait pas mieux utiliser un state global (ie avec color, env, material, ...)

        const [color, setColor] = useState(false);
        const [environment, setEnvironment] = useState(false);
        const [material, setMaterial] = useState(false);
        const [accesory, setAccesory] = useState(false);
        const [view, setView] = useState(false);


        const state = {
            color: false,
            environment: false,
            material: false,
            accesory: false,
            view: false,
        }
        

        const reinitializeAllFalseAndFixSpecific = (name, data) => {
            setEnvironment(false);
            setMaterial(false);
            setAccesory(false);
            setView(false);
            setColor(false);
            this.setState({...this.state, [name]: !data})
        }



    return (<div className="configurator">  

            <div className="main">         
                <Button onClick={()=> {reinitializeAllFalseAndFixSpecific('color', !this.state.color)}} >  Color </Button>
                <Button onClick={()=> {setEnvironment(!environment);setColor(false); setMaterial(false); setAccesory(false); setView(false) }  }> Environment </Button>
                <Button onClick={()=> {setMaterial(!material); setColor(false); setEnvironment(false); setAccesory(false); setView(false) }  }> Material </Button>
                <Button onClick={()=> {setAccesory(!accesory); setColor(false); setEnvironment(false); setMaterial(false); setView(false)} }> Accesory</Button>
                <Button onClick={()=> {setView(!view); setColor(false); setEnvironment(false); setMaterial(false); setAccesory(false) } }> View </Button>
            </div>

            { color && <div className="menuColor" >< Color/> </div> }
            { environment && <div className="menuEnvironment" >< Environment/> </div> }
            { material && <div className="menuMaterial" >< Material/> </div> }
            { accesory && <div className="menuAccesory" >< Accesory/> </div> }
            { view && <div className="menuView" >< View/> </div> }

        </div>)
}

export default Configurator