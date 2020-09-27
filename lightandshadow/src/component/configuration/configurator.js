import React from 'react'
import Color from './color'
import Environment from './environment'
import Material from './material'
import Accesory from './accesory'
import View from './view'
import Button from '../elements/button'
import './configuration.scss'

function Configurator(){
    function alert(){
        return(
            console.log("ca fonctionne")
        )
    }
    return<div className="configurator" >            
            <Button onClick={alert}> <Color/> </Button>
            <Button > <Environment/> </Button>
            <Button > <Material/> </Button>
            <Button > <Accesory/> </Button>
            <Button > <View/> </Button>
    </div>
}

export default Configurator